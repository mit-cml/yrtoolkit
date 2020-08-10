---
title: Voice Calculator
layout: tutorial
howtos: false
yrmedia: true
---

# Challenge

Challenge statement from YR Media

# Setup your computer

<div class="setup" id="connect_app"></div>

# Voice Calculator (Level: Intermediate)

## Introduction

Have you ever wondered how conversational AI agents such as Alexa and Siri work?  How do they interpret what you are saying to them and grasp your intent?  How do they then know how to appropriately and meaningfully respond to you?

The purpose of this elementary level AI project is to give you a sense of the basics of a Voice User Interface (VUI) and to teach you how to design a simple AI system that can understand the intent of the user in a verbally stated calculation question and respond appropriately.


![GUI of Voice Calculator](../images/voiceCalculator/GUI.png){:.enlargeImage}


## Graphical User Interface (GUI)

The GUI has been created for you in the starter file.  Please change the properties of the components as you wish to get the look and feel you want.  However, please do not rename the components, as this tutorial will refer to the given names in the instructions.

![GUI of Voice Calculator](../images/voiceCalculator/GUICorrespondence.png){:.enlargeImage}

In the GUI you will notice that there is a Speak <span class="icon" alt="button"></span> Button which the user will press to verbally communicate the calculation they wish to be performed.  The interface will then display in writing what the Calculator heard and respond, both in writing and verbally, with the result of the calculation.  If the Calculator could not hear a meaningful calculation query or could not understand the intent of the user, it will say so.


## Initialize numberList

The first thing you'll tackle is to extract the numbers in the sentence spoken by the user. You'll use them later when you actually perform the mathematical operation.  To do this first you will initialize a global variable named numberList where the numbers in the calculation query will be stored.  As this variable will be a list of numbers,  it will be initialized  to an empty list.


![Initialization of global numberList](../images/voiceCalculator/initialize_numberList.png){:.enlargeImage}

## procedure extractNumbers I

Then you  will create  a procedure  called extractNumbers which when given an input sentence will extract the numerical values in that sentence and store these in the global variable numberList.  To do this:
* choose a procedure and name it <var>extractNumbers</var>
* use the settings gear to add an input parameter and call it <var>sentence</var>


![procedure extractNumbers](../images/voiceCalculator/procedure_extractNumbers.png){:.enlargeImage}![procedure extractNumbers input parameter](../images/voiceCalculator/procedure_extractNumbers_inputParameter.png){:.enlargeImage}

(continues next page)

## procedure extractNumbers II

* set the global variable <var>numberList</var> to the empty list.  We need to reinitialize the variable every time we call this procedure as each calculation the user initiates will use a new pair of numbers.
* use  the “split at spaces” text utility to split the input sentence into a list of  its words and for each word in this list check to see if it is a number.

![for each word ](../images/voiceCalculator/foreach_split.png){:.enlargeImage}

* if any word is a number then add it to the global variable <var>numberList</var>

<hint markdown="block" title="Give me a hint">

![procedure extractNumbers hint](../images/voiceCalculator/procedure_extractNumbers1.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

![procedure extractNumbers solution](../images/voiceCalculator/procedure_extractNumbers2.png){:.enlargeImage}

</hint>

</hint>

 Try this on your own but if you get stuck you can click the Hint button.


## Multiplication Intent
As there are many ways for a user to indicate that they would like to perform a multiplication operation, it is essential to identify all these different approaches as a multiplication intent.  For example all of the following statements are different ways of expressing a multiplication intent: 
* <span style="color:red">what is</span> <span style="color:green">73\*51</span> <span style="color:red">?</span>
* <span style="color:red">how much is</span> <span style="color:green">73x51</span><span style="color:red"> ?</span>
* <span style="color:red">what is the <span style="color:green">product</span> of</span> <span style="color:green">73</span> <span style="color:red">and</span> <span style="color:green">51</span> <span style="color:red">?</span>
* <span style="color:red">what is the result when you</span> <span style="color:green">multiply 73</span> <span style="color:red">with</span> <span style="color:green">51</span> <span style="color:red">?</span>
* <span style="color:red">what is</span> <span style="color:green">73 times 51</span> <span style="color:red">?</span>

Note that the key words/symbols/numbers in <span style="color:green">green</span> define the multiplication intent while the words/symbols in <span style="color:red">red</span> are redundant and can be disregarded.


## Arrange Buttons

Add more <span class="icon" alt="button"></span> Buttons so you have at least 4 instruments. Below are two examples of possible layouts.
![sample 1 of musicmaker app](../images/musicMaker/musicmaker-sample1.png){:.enlargeImage}
![sample 2 of musicmaker app](../images/musicMaker/musicmaker-sample2.png){:.enlargeImage}

You will have many <span class="icon" alt="button"></span> Buttons in this app, so make sure to rename them using descriptive names to make the coding of your app more manageable. You can see how to rename a component in the next step.

## Change Button Properties

Change the <span class="icon" alt="button"></span> Buttons' properties to fit your style. Match the instrument image, or change the color or shape.

For example, perhaps start with a drum. Select <strong>Button1</strong> in the template, change its <i>Image</i> to <span class="properties">“drum1.png”</span> and rename it to <strong>“Drum1Button”</strong>. 
![change drum button properties](../images/musicMaker/drum-button-properties.png){:.enlargeImage}

To make a Stop button for the drum, select <strong>Button2</strong> in the template, change its <i>BackgroundColor</i> to <span class="properties">“Red”</span>, <i>Text</i> to <span class="properties">“STOP”</span>, <i>Shape</i> to <span class="properties">“oval”</span> and rename it <strong>“StopDrum1Button”</strong>. 
![change stop drum button properties](../images/musicMaker/stop-drum-button-properties.png){:.enlargeImage}


## Add Player Components

You need to add a separate <span class="icon" alt="player"></span> Player component for each instrument in your app. In the example below, two <span class="icon" alt="player"></span> Player components are added and renamed appropriately for playing the instruments, drums and piano.

![rename player components](../images/musicMaker/player-rename.gif){:.enlargeImage}

Then check the box for the <i>Loop</i> property for each <span class="icon" alt="player"></span> Player so the music loops continuously. And set the <i>Source</i> property to corresponding instrument sound files from the Media assets. In this example, the sources are set to the drums and piano wav files included in the template.

![set player properties](../images/musicMaker/player-properties.gif){:.enlargeImage}

## Code the Blocks

Click the Blocks button and go to the Blocks Editor.

![switch to blocks editor](../images/musicMaker/blocks-editor.png){:.enlargeImage}


Code the your first <span class="icon" alt="button"></span> Button. Using the drums example, there could be a button named **Drum1Button**. Drag out a <span class="control">Button.Click</span> event block for your drum button. For the matching <span class="icon" alt="player"></span> Player component, drag out a <span class="procedures">Player.Start</span> block, and snap it into the <span class="control">Button.Click</span> event block.

![](../images/musicMaker/drum-button-click.gif){:.enlargeImage}

The <span class="icon" alt="button"></span> Button to stop the instrument sound uses the same idea. Drag out a <span class="control">Button.Click</span> event block for the matching Stop Button for this instrument. Again, we’ll use the Drums as an example.

Drag out a matching <span class="procedures">Player.Stop</span> block and snap it into the (in this example) <span class="control">StopDrum1Button.Click</span> event. This will make the <span class="icon" alt="player"></span> Player stop playing.

![](../images/musicMaker/stop-drum-button-click.gif){:.enlargeImage}

## Testing!

Now test starting and stopping that instrument with your two Buttons!

Test with the AI Companion through the Connect menu, and then scan the displayed QR code with the AI Companion app on your mobile device.

![](../images/helloItsMe/scan-qr-code.png){:.enlargeImage}


## Now do the rest

Now that you have one <span class="icon" alt="button"></span> Button set working, add code for your other instruments. Make sure you have a <span class="icon" alt="button"></span> Button to start the instrument, and one to stop it. Also, make sure you add a new <span class="icon" alt="player"></span> Player component for each instrument. Remember to name them appropriately!

# Expand your app

Here are some ideas to add to your MusicMaker app!

**Record and play back your music**
<br />Use the <span class="icon" alt="soundRecorder"></span> SoundRecorder component to record music, and then add another <span class="icon" alt="player"></span> Player component to play the resulting sound.

**Add a Pause button for each instrument.**


**Instead of 2 Buttons, make one Button toggle play/stop.**
<br />For each instrument in your app, make one Button, and then have it toggle to either act as a "Start" button, or a "Stop" button, depending on whether or not the instrument is playing.

**Add more instruments**
<br />You've been given several instruments and images to get started, but you can either download or create your own instrument sounds to add to your music making app. Have fun!

