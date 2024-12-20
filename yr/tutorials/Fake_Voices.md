---
title: Fake Voices
layout: tutorial
howtos: false
yrmedia: false
---

# Challenge
<p style="font-size: 150%;
font-weight:bold; color:#1c2f8d; padding-bottom: 0;">Make Your Own Fake Voice!</p>

“Deepfakes” are videos and sounds created by artificial intelligence. Powerful computers make deepfakes by learning from recordings of human beings, then creating new, fake versions that match the humans almost exactly.

For example, the sound of Jay-Z's voice was created by a computer model in this video:

<video width="90%" controls>
  <source src="../images/Fake_Voices/2B.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p style="padding-top: 0; padding-bottom: 5; text-align: center;
  font-style: italic;">This <a href="https://www.youtube.com/watch?v=m7u-y9oqUSw" target="_blank">deepfake video</a> makes it sound like Jay-Z is reading Shakespeare's "To be, or not to be" speech.</p>

Sometimes the voices in deepfakes sound a little fake — other times, it is hard to tell. Can anyone trust what they hear ever again?

Create your own strange or spooky voices by coding the Fake Voices app below. These voices are not true deepfakes because they do not use artificial intelligence, but they are pretty good!

The tutorial has some code to get you started. When you are done, try modifying the design and function of your app to perform a useful task in your life. You can also explore fake voices that use artificial intelligence using the links at the end.

Use either an iOS or Android phone/tablet to test this app, but a Chromebook will not work as a test device because of the way it handles speech recognition. If you have never used App Inventor before, check out “Set Up Your Computer” and “Get to Know App Inventor” below for a quick overview.

This tutorial was inspired by the YR Media stories <a href="https://interactive.yr.media/double-take-four-deepfake-scenarios/" target="_blank">Four Deepfake Scenarios</a>, <a href="https://yr.media/tech/on-to-the-next-one-jay-z-beefs-with-a-i-are-other-artists-next/">Jay-Z Beefs with A.I.</a>, and the <a href="https://yr.media/podcasts/fake-ish/" target="_blank"> Fake-Ish Podcast: Getting Real about Imposter Syndrome and Other Ways We Feel Fake</a>.

# Set Up Your Computer
<div class="setup noemulator" id="connect_app"></div>

# Get to Know App Inventor

## Check out the App Inventor Screens
With App Inventor, anyone can create real apps for phones and tablets for free. There are two main parts: the <strong>Designer</strong> view and the <strong>Blocks</strong> editor.

In the <b>Designer</b> view, you can add components to your app and lay out how it will look. (Click the images below to make them larger.)

![The Designer view of App Inventor has an image of a phone with an app.](../images/Fake_Voices/designer_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

In the <strong>Blocks</strong> editor, code your app to make it do stuff!

![The Blocks view of App Inventor shows various code blocks.](../images/Fake_Voices/blocks_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

Toggle between these screens using the buttons in the top right corner.

![The buttons for the Designer and Blocks view are in the upper right corner.](../images/Fake_Voices/designer_blocks_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Look at the Designer
In the designer view, <strong>Palette</strong> is where you find all the components. Drag and drop any component from <strong>Palette</strong> into the viewer. (But for this tutorial, stick with the components as they are. You will need these components later!)

![The Palette is a window pane all the way to the left.](../images/Fake_Voices/palette.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<strong>Viewer</strong> is where you drag components to see how the app will look.

![Viewer highlights a window in the middle that shows how your app will look.](../images/Fake_Voices/viewer.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<strong>Components</strong> shows all the components you will use in the app. You can rename or delete them here too. (But, again, keep the components the same for now!)

![Components highlights a window to the right of viewer.](../images/Fake_Voices/components.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<strong>Media</strong> shows any uploaded media files, like images or sounds.

![Media is a small window underneath the components.](../images/Fake_Voices/media.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

Finally, <strong>Properties</strong> lets you view or change the properties (like the color or position) of the currently selected component.

![The Properties pane sits all the way to the right.](../images/Fake_Voices/properties.jpg){:.enlargeImage}

# The Fake Voices Tutorial (Level: Beginner)

## Introduction
See what the finished Fake Voices app will look like, then follow the steps to make your own! (Click to enlarge.)

![The Fake Voices app with descriptions of the features.](../images/Fake_Voices/final_app.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Check out the Design
In the <strong>Designer</strong> view, look at the components that are already in the starter template. Don’t forget to look at the non-visible components under the phone!

Try to figure out what each component does. (But keep the component names the same. You will need to code with them later!)

![An image of the App Inventor Designer interface for the Fake Voices app.](../images/Fake_Voices/unmarked_designer.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Finish the Design
For this app, start by adding a button and a few slider bars.

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">First, add a button to make the app speak.</span> We will need a button to hear the text read back to us. Go to <strong>Palette</strong> and drag in a <strong>Button</strong> component:

![The animation shows how to add a button to the interface.](../images/Fake_Voices/Add_a_button.gif){:.enlargeImage}

You just added a component to the app, but it is not connected to anything until you code later on. (It's like the doorbell at your uncle's house: there might be a button on the front door, but nothing happens when you push it because it's usually broken.)

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; padding-top: 50px; font-weight: bold; color:#1c2f8d;">Rename the button.</span> Renaming components helps you identify them when you code later. For instance, the name "Button1" does not tell you what it is.  

Make sure the button is selected in <strong>Components</strong> and change the button name to “HearTheWordsButton”:

![The animation shows how to change the button name.](../images/Fake_Voices/Change_button_name.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Change the button text.</span> Select the button in <strong>Components</strong>, go over to the <strong>Properties</strong> window, and change the button text to “Hear the Words Read Back”:

![The animation shows how to change the button text.](../images/Fake_Voices/Change_button_text.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Create a Slider

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add a label for the pitch slider.</span> Next, go to <strong>Palette</strong> and drag in a <strong>Label</strong> component:

![The animation shows how to add a label component.](../images/Fake_Voices/drag_in_a_label.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Change the label name and text.</span> Select the label and rename it "PitchLabel". Then, go to <strong>Properties</strong> and change the label text to “Change the Pitch”. Don’t forget to change the <i>TextColor</i> to white so that people can see your new label!

![The animation shows how to change the label text and turn it white.](../images/Fake_Voices/change_label_text.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add a slider to change the pitch.</span> Go to <strong>Palette</strong> and drag in a <strong>Slider</strong> component. Make sure the slider is selected in <strong>Components</strong> and change the name to “PitchSlider”:

![The animation shows how to add a slider and change its name.](../images/Fake_Voices/add_a_slider.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Change the slider properties.</span> Make the PitchSlider stretch across the screen by changing its width to “Fill Parent” as shown below. To make the slider work with the app's other features, change its <i>MaxValue</i>, <i>MinValue</i>, and <i>ThumbPosition</i> too.

![The animation shows how to change the pitch slider properties.](../images/Fake_Voices/properties_for_the_pitch_slider.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Add Another Slider
<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Drag in a label and slider to change the rate.</span> Rename the label to "RateLabel" as shown below. Change the text for this label to “Change the Rate”. Then, change the label properties. Then, change the name of the slider to “RateSlider” and change its properties as shown in the second image, below.

(Note: Don’t worry about changing the appearance of these components for now. You can tweak the design once you test the app!)

![The image shows how to add another slider and name it rate slider.](../images/Fake_Voices/rate_slider_label.jpg){:.enlargeImage}
![The image shows how to change the rate slider properties.](../images/Fake_Voices/properties_for_the_rate_slider.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Check out the Code
Click on the "Blocks" button in the upper right corner to see where to code your app.

![An image of where to click to get the blocks interface.](../images/Fake_Voices/switch_to_blocks_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

Some code is already in the <strong>Blocks</strong> editor to get you started. First, look over the code to see if you can guess what it does.

![An image of the starter code already in the app.](../images/Fake_Voices/blocks_view_no_highlight.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Take It Block by Block

![An image of the starter code already in the app.](../images/Fake_Voices/starter_blocks.jpg){:.enlargeImage}

The brown blocks are called "event handlers" because they fire when something important happens in the app. The first event handler shows what happens when you click the “Say Something!” button in the app. The button starts the purple block inside — <span class="procedures">call SpeechRecognizer1.GetText</span> and turns your spoken words into text:

![An image of the event handler for the "Say Something" button.](../images/Fake_Voices/something_button_handler.jpg){:.enlargeImage}

The button <i>calls</i> the SpeechRecognizer code in purple. To <i>call</i> something means to start some code with a special function. It’s like calling your sister from across town to come fix your bike tire. (Because she’s really good with bikes!)

The second event handler calls <span class="setters">set SpeechTextBox.Text</span> to show the text in your app:

![An image of the SpeechRecognizer event handler.](../images/Fake_Voices/speechRecognizer_handler.jpg){:.enlargeImage}
In this case, SpeechRecogizer stores what you say in the variable <span class="variables">result</span>. By connecting the variable to the text box, you make the words show up on the screen. (In the future, you can always find the <span class="variables">get result</span> block by hovering over the word *result* in orange as shown below.)

 ![An image of the SpeechRecognizer event handler that highlights the place to get the result variable.](../images/Fake_Voices/speechRecognizer_handler_annotated.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Test the Speech Recognition
The SpeechRecognizer1 code turns what you say into written text. (The new button and sliders you made will not work until you add more code later.)

Connect the app to your phone using App Inventor Companion.

![An image showing how to connect to the Companion app.](../images/Fake_Voices/how_to_use_companion.jpg){:.enlargeImage}

When you press the “Say Something!” button, does it bring up a small screen to capture what you say? Speak into the phone, and the app should automatically type the words into the text box.

Try to fool the SpeechRecognizer software with unusual words or phrases. Does it always get it right?

<p style="padding-bottom: 7px"></p>

## Make the App Talk
<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add a block of code for your button.</span> Make the app start speaking when someone presses the HearTheWordsButton. Drag in the button-click event handler <span class="control">when HearTheWordsButton.click</span> as shown below:

![An animation showing how to change the button behavior.](../images/Fake_Voices/when_hear_the_words_button_click.gif){:.enlargeImage}

When someone presses the button, this block calls whatever code is inside. In this case, you want the phone to read the contents of the text box out loud. When computers read text, it is called “text-to-speech.”

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add text-to-speech.</span> Drag in the <span class="procedures">call TextToSpeech1.Speak</span> block from the blocks in the TextToSpeech1 component.

![An animation showing how to find the call text-to-speech component.](../images/Fake_Voices/call_TTS.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<hint markdown="block" title="What Is Text-to-Speech?">
Computers can speak written words, but it is harder than it seems for machines to speak like humans. Sometimes the emphasis is wrong, or the pauses sound unnatural.

Text-to-speech in this app can be adjusted to reproduce accents. The software can speak English with an American, Irish, Australian, or another accent. The software can also speak Spanish with a Latin American, Castilian, or another accent.

Text-to-speech in phones is pretty good, but synthetic speech made by artificial intelligence software sounds even better. In many cases, you cannot easily tell that the AI is not a human being!
</hint>

<p style="padding-bottom: 7px"></p>

## Tell the App What to Say
<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Get the text.</span> The text-to-speech component still needs to know what to say. To do that, get the text from the <span class="getters">SpeechTextBox.Text</span>. You can find that here:

![An animation showing how to connect the text to speech procedures.](../images/Fake_Voices/link_to_text_box_text.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Test the Fake Voice
Test your app again using App Inventor Companion.

![An image showing how to test the app.](../images/Fake_Voices/how_to_use_companion.jpg){:.enlargeImage}

This time, press the “Say Something” button to generate some text, and then press the “Hear the Words Read Back” button to have the computer read the words out loud. Does it sound like a human? Pretty close?

Try a second way of entering text in the orange text box: Cut some text from somewhere on your device and paste it into the text box.

![An illustration of a friendly talking robot.](../images/Fake_Voices/talking_robot.jpg){:.enlargeImage}
<p style="padding-top: 0; padding-bottom: 5; text-align: center;
  font-style: italic; font-size: 80%">Drawing by @Hafoba.</p>

<p style="padding-bottom: 7px"></p>

## Use Your Sliders
Want to make the computer voice especially creepy? Hook up the slider buttons to the code to change the pitch and rate of the voice.

Each time the user moves these sliders, the slider bars assign a numerical value for their new position. When the user moves the slider to the left, it assigns a lower number, and to the right, it assigns a higher number.

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Set the voice pitch.</span> Add a <span class="setters">set TextToSpeech1.Pitch</span> block to the event handler, as shown below. The blocks must go above <span class="procedures">call TextToSpeech1.Speak</span> so that they change the settings *before* the words are spoken!

![An animation showing how to set the pitch.](../images/Fake_Voices/pitch_setter_TTS.gif){:.enlargeImage}

See how the little puzzle piece still needs one more piece?

![An image showing how to set the pitch.](../images/Fake_Voices/hear_the_words_button_click.jpg){:.enlargeImage}

The TextToSpeech1 setter block is looking for a value. How will you finish the block and give it value?

<hint markdown="block" title="Give Me a Hint">

Yes, to get the pitch value, drag in the thumb position for the pitch slider.

![An animation showing how to set the pitch with a thumb slider.](../images/Fake_Voices/pitch_getter_thumb.gif){:.enlargeImage}

</hint>

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Create another setter for the speech rate.</span> The process is the same as for the pitch, except this time use <span class="setters">set TextToSpeech1.SpeechRate</span> and the thumb position for the <i>rate</i> slider.

<hint markdown="block" title="Check My Solution">

![An animation showing how to change the button text.](../images/Fake_Voices/full_last_block.jpg){:.enlargeImage}

</hint>

<p style="padding-bottom: 7px"></p>

## Test Your Final Code
One more time, test your app using App Inventor Companion. This time, make the app read the text in a creepy monster voice or high birdy voice. What are the strangest combinations of low/high pitch and fast/slow rate you can find?

Congratulations, you are done! You have created an app that recognizes speech and speaks the words with a custom pitch and rate. Next, you can <a href="http://appinventor.mit.edu/explore/ai2/share" target="_blank">Build</a> the app in App Inventor to share with any Android phone anywhere. <span style="font-size: 110%; font-weight: bold; color:#b01418;">Important: With great power comes great responsibility! Don’t use your new app to scare or freak anyone out!</span>

![An animation showing how to change the button text.](../images/Fake_Voices/frankenstein.jpg){:.enlargeImage}
<span style=" padding-top: 0; text-align: center;
  font-style: italic; font-size: 80%">Boris Karloff in the movie Frankenstein. © 1931 Universal Pictures</span>

# Expand Your App
Computers make fake voices in many different ways. The system inside a phone or tablet is very basic, called <i>text to speech</i>. Do you think the voice from your app would fake anyone out when reading a long passage? What is missing?

Some artificial intelligence systems — such as Siri, Google Voice, or Alexa — sound much more human. They create <i>synthetic speech</i>. These machine-learning models are trained by listening to millions of humans speak. Can they really trick the human ear? You decide.

Try the following experiment:

* In your phone or tablet, copy a few sentences of text from a speech or book, such as a passage from Martin Luther King, Jr.’s “I Have a Dream” speech, below.

<p style="padding-left: 20%; padding-right: 20%; font-style: italic;">We refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check, a check that will give us upon demand the riches of freedom and security of justice.</p>

* Paste this passage into the text box in your app and take note: Does it sound natural?
* Next, paste this passage into one of the following artificial intelligence systems (both are free):
  - <a href="https://cloud.google.com/text-to-speech/#section-2" target="_blank"><b>Google Cloud Assistant</b></a>. Go down the page to the section on the left named “Demo.” Replace the text provided in the box with any text you want. Experiment with the <i>Language</i> and <i>Voice name</i> settings.
  - <b><a href="https://www.ibm.com/demos/live/tts-demo/self-service/home" target="_blank">IBM Watson Text to Speech</a></b>. Replace the text provided in the box with any text you want. Experiment with the <i>Language</i>, <i>Dialect</i>, and <i>Neural voice</i> settings.

Which fake voices sound the most human? Which is your favorite?

Here are some ways to enhance your app. Try them out, or come up with your own ideas!

* Make the user interface easier or more attractive. Let five people try your app and see what they think. Ask people of different ages and different comfort levels with computers. Based on this feedback, what user interface changes do you need to make?
* Show a numerical value for the pitch and rates on the screen.
* Type or paste into the app text in another language (in some cases, you can even speak to it in Spanish!) How could you set TextToSpeech1 to read the text back in a better accent? For instance, how could you use the <span class="setters">set TextToSpeech1.Language</span> block and the language code “ES” to get a better Spanish accent in your app? (If you are using an Android device, make sure the device's text-to-speech is set to the Google Speech Engine in the settings.) How could you allow the user to choose accents from the app's interface?
* Change the text-to-speech voice to a male voice (for a real Frankenstein effect). In iOS, look in the settings for "VoiceOver" under Accessibility. In Android, look for the "Text-to-speech output" setting. (Android makes you choose a language before choosing a specific voice in that language.)
* How could you use the app features to create something that performs an important task or service, such as an instant translator for traveling?

What ideas do you have?

# About Youth Mobile Power
A lot of us spend all day on our phones, hooked on our favorite apps. We keep typing and swiping, even when we know the risks phones can pose to our attention, privacy, and even our safety.  But the computers in our pockets also create untapped opportunities for young people to learn, connect and transform our communities.

That’s why MIT and YR Media teamed up to launch the Youth Mobile Power series. YR teens produce stories highlighting how young people use their phones in surprising and powerful ways. Meanwhile, the team at MIT is continually enhancing MIT App Inventor to make it possible for users like you to create apps like the ones featured in YR’s reporting.

Essentially: Get inspired by the story, get busy making your own app!
 <img src="../images/logos/NSF_4-Color_bitmap_Logo.png" width="75"><img src="../images/logos/MITAppInvlogo1.jpg" width="75"><img src="../images/logos/LOGO_YR_PNG_TRANS.png" width="75">

 The YR + MIT collaboration is supported in part by the National Science Foundation. This material is based upon work supported by the National Science Foundation under Grant No. (1906895, 1906636). Any opinions, findings and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

 Check out more apps and interactive news content created by YR <a href="https://yr.media/category/interactive/" target="_blank">here</a>.
