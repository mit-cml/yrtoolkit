---
title: Unit 2
layout: tutorial
howtos: false
yrmedia: false
---

# Introduction
In this unit you will extend your knowledge of the MIT App Inventor platform, by making a  the <strong>My Piano </strong> app, that will play notes like a piano!

![screenshot of my piano app](../images/myPiano/my-piano-screenshot-coolthink.png){:.enlargeImage}

Here is how the app works:
* The app contains eight buttons, displayed next to each other, each depicting a piano key or note.
* When a button is pressed, the corresponding note plays, using a <span class="icon" alt="player"></span> Player component.

# Setup your computer

<div class="setup" id="connect_app"></div>

# My Piano

## Add Components

The goal is to have eight buttons, side by side. Each button, when pressed, will play a note.

Most components have already been added for your piano app. See the components below.

![screenshot of the my piano app template](../images/myPiano/my-piano-template-ui.png){:.enlargeImage}

Drag two more buttons into <strong>HorizontalArrangement1</strong>.

![add two buttons](../images/myPiano/add-two-buttons.gif){:.enlargeImage}

Rename <strong>Button1</strong> to <strong>CNote</strong> and <strong>Button2</strong> to <strong>DNote</strong>.

![rename buttons](../images/myPiano/rename-buttons.gif){:.enlargeImage}

## Change Button Properties

Change the <i>Height</i> property of <strong>CNote</strong> and <strong>DNote</strong> to <strong>"Fill Parent"</strong> and change the <i>Width</i> property for both buttons to <strong>10 percent</strong>.

![change height and width properties of buttons](../images/myPiano/change-button-size.gif){:.enlargeImage}

 Change the <i>BackgroundColor</i> property of <strong>CNote</strong> to <strong><span style="color:red;">Red</span></strong> to and change the <i>BackgroundColor</i> property of <strong>DNote</strong> to <strong><span style="color:orange;">Orange</span></strong>.

 ![change background color property of buttons](../images/myPiano/change-button-color.gif){:.enlargeImage}

 Change the <i>Text</i> property of <strong>CNote</strong> to <strong>"C"</strong>and of <strong>DNote</strong> to <strong>"D"</strong>.

 ![change text property of buttons](../images/myPiano/change-button-text.gif){:.enlargeImage}

## Code the Buttons

Now it's time to code the buttons to make them play the notes! 

Click on the Blocks button in the upper right corner of the screen to switch to the <strong>Blocks Editor</strong>.

![blocks button](../images/myPiano/switch-blocks.png){:.enlargeImage}

Click on <strong>CNote</strong> and drag out a <span class="control">when CNote.Click</span> block.

![drag a cnote.click block out](../images/myPiano/when-cnote-click.gif){:.enlargeImage}

Click on <strong>NotePlayer</strong>, drag out a <span class="procedures">call NotePlayer.Start</span> block and
snap it into the <span class="control">when CNote.Click</span> block.

![drag a noteplayer.start block out](../images/myPiano/noteplayer-start.gif){:.enlargeImage}

## Set the NotePlayer Source

Because we will use the same Player component to play all the different notes, when we press a note button, let’s set the Source to the proper.wav file.

Drag out a <span class="setters">set NotePlayer.Source to</span> block and snap it into <span class="control">when CNote.Click</span> <i>before</i> <span class="procedures">call NotePlayer.Start</span>. 

Then drag out a blank text string block from the <strong>Text</strong> drawer and snap it to the <span class="setters">set NotePlayer.Source to</span> block. Type “CNote.wav” into the blank text block.

![set the source for noteplayer](../images/myPiano/set-noteplayer-source.gif){:.enlargeImage}

## Test your Piano App

Test your app with the MIT AI2 Companion app. 

First, start the AI2 Companion on your mobile device.

![start the AI companion](../images/helloItsMe/ai-companion.png){:.enlargeImage}

Then under the <strong>Connect</strong> menu, choose <strong>AI Companion</strong>.

![scan qr code for AI companion"](../images/helloItsMe/scan-qr-code.png){:.enlargeImage}
          
Then on the Companion app, press the blue button and scan the QR code.

![AI companion screenshot"](../images/helloItsMe/ai-companion-screenshot.png){:.enlargeImage}
           
If you are using the <strong>Emulator</strong>, then choose <strong>Emulator</strong> under the <strong>Connect</strong> menu.

Press the C button to hear the CNote played.

## Code the DNote Button

Since the D button will work like the C button, let’s Duplicate the <span class="control">when CNote.Click</span> block to use
again.

Right-click on <span class="control">when CNote.Click</span> and choose "Duplicate" from the dropdown menu.

![duplicate when cnote.click"](../images/myPiano/dupe-cnote.gif){:.enlargeImage}

Change <span class="control">CNote.Click</span> to <span class="control">DNote.Click</span> by using the dropdown menu in the
duplicated block. Then change the text block from “CNote.wav” to “DNote.wav.

![change cnote to dnote"](../images/myPiano/change-cnote-to-dnote.gif){:.enlargeImage}

## Test Again

Test again with the MIT AI2 Companion app to see that both the CNote and DNote play correctly.

![scan qr code for AI companion"](../images/helloItsMe/scan-qr-code.png){:.enlargeImage}

## Code the Other Buttons

Can you code the remaining note buttons? Try it!

<hint markdown="block" title="Show me how">

![finished blocks for my"](../images/myPiano/mypiano-completed-blocks.png){:.enlargeImage}

</hint>
<br />
And then test again with the MIT AI2 companion app to play all the notes in your completed piano app!
