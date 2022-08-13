import React, { useState } from 'react'

import { Dialog } from '../engine/Dialog'
import { DEG2RAD } from 'hyperfy'

/**
 *
 * The dialog "schema" is a simple format that lets you write all of the dialog flow.
 * A "view" is an individual dialog box with text. Each view has a number of other fields
 * that can be used to create side effects like changing the npc animation, making blockchain
 * contract calls, http requests etc.
 *
 * See `Dialog.js` for full schema overview
 *
 */
const schema = {
  id: 'erika',
  origin: 'intro',
  views: {
    intro: {
      text: "hello i am dalle tubby",
      goto: 'questAsk',
    },
    questAsk: {
      text: 'i have lost my snoggle. pls help.',
      origin: 'questAsk',
      options: [
        { text: "Sure, I'll find it!", goto: 'questAccept' },
        { text: 'Maybe later', goto: 'questReject' },
      ],
    },
    questReject: {
      text: '*Sniff* *Sniff*\n\nOkay... no worries...',
    },
    questAccept: {
      text: 'WOW THANK YOU!!',
      origin: 'questActive',
    },
    questActive: {
      text: 'Did you find my snoggle?',
      options: [
        { text: 'Yep, here you go!', require: 'teddy', goto: 'questComplete' },
        { text: 'Sorry, not yet', goto: 'questNotYet' },
      ],
    },
    questNotYet: {
      text: 'I really hope you can find him for me!',
    },
    questComplete: {
      text: 'Oh for realsies!?!? You found him! Thank you so much sir!',
      origin: 'loved',
      event: 'complete',
    },
    loved: {
      text: "I don't know what I would have done if you didn't find my teddy for me.",
    },
  },
}

export function Erika({ position, solvePosition }) {
  const [view, setView] = useState(false)
  const [hasTeddy, setHasTeddy] = useState(false)
  const [givenTeddy, setGivenTeddy] = useState(false)

  // Erika is sad until she gets her teddy.
  let animation = givenTeddy ? 'idle' : 'float'
  // If you're talking to her:-
  if (view) {
    if (view === 'questComplete') {
      // She's excited when you give her the teddy!
      animation = 'float'
    } else {
      // Otherwise she just talks to you
      animation = 'idle'
    }
  }

  return (
    <>
      <model 
        src="npc/dalletub.glb"
        animate={animation}
        position={[136,15,21]}
        rotation={[0, -70 * DEG2RAD , 0, 'YXZ']}
        scale={[100,100,100]}
      />
      <Dialog
        position={position}
        schema={schema}
        onRequire={name => {
          if (name === 'teddy') return hasTeddy
        }}
        onView={setView}
        onEvent={(event, setView) => {
          if (event === 'complete') {
            setGivenTeddy(true)
          }
          // If you wanted to you could run async stuff like checking a wallet
          // here in response to an event, and then call setView(String) to continue
          // the conversation.
        }}
      >
        <model 
          src="npc/megaphone.glb"
          position={[10,-1,50.1]}
          rotation={[15 * DEG2RAD , -75 * DEG2RAD , 0, 'YXZ']}
          scale={[1,1,1]}
        />
      </Dialog>
      {!hasTeddy && (
        <model
        scale={[1,1,1]}
        src="object/snoggle.glb"
          position={solvePosition}
          onClick={() => setHasTeddy(true)}
        />
      )}
    </>
  )
}
