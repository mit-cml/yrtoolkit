---
title: Fake Voices
layout: tutorial
howtos: false
yrmedia: false
---

# Challenge

<p style="font-size: 150%;
font-weight:bold; color:#1c2f8d; padding-bottom: 0;">Make Your Own Fake Voice!</p>

“Deepfakes” are videos and sounds created by artificial intelligence. Powerful computers make deepfakes by learning from recordings of human beings, then creating new, fake versions that match humans almost exactly.

![An video image of Frederick Douglass's face making various gestures.](../images/Fake_Voices/douglas_deepfake.gif){:.enlargeImage}

<p style="padding-top: 0; padding-bottom: 5; text-align: center;
  font-style: italic;">An app called MyHeritage makes lifelike recreations of anyone. A fake of the historical black hero Fredrick Douglas is shown here.</p>

Sometimes the voices in deepfakes sound a little fake — other times, it is hard to tell. Can anyone trust what they hear ever again?

Create your own strange or spooky voices by coding the Fake Voices app using the steps below. These voices are not true deepfakes because they do not use artificial intelligence, but they are still pretty good!

The tutorial already has some code to get you started. When you are done, try modifying the design and function of your app to perform some useful task in your life. You can also explore fake voices that use artificial intelligence using the links at the end.

If you have never used App Inventor before, check out “Set Up Your Computer” and “Get to Know App Inventor” below for a quick overview.

This tutorial was inspired by the YR Media stories <a href="https://interactive.yr.media/double-take-four-deepfake-scenarios/" target="_blank">Four Deepfake Scenarios</a> and the <a href="https://yr.media/podcasts/fake-ish/" target="_blank"> Fake-Ish Podcast: Getting Real about Imposter Syndrome and Other Ways We Feel Fake</a>.

# Set up Your Computer

<div class="setup noemulator" id="connect_app"></div>

# Get to Know App Inventor

## Check out the App Inventor Screens

With App Inventor, anyone can create real apps for phones and tablets for free. There are two main parts of App Inventor: the <strong>Designer</strong> view and the <strong>Blocks</strong> editor.

In the <b>Designer</b> view, add components to your app and lay out how it will look. (You can click on the images below to make them larger.)

![The Designer view of App Inventor has an image of a phone with an app.](../images/Fake_Voices/designer_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

In the <strong>Blocks</strong> editor, code your app to make it do stuff!

![The Blocks view of App Inventor shows various code blocks.](../images/Fake_Voices/blocks_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

Toggle between these screens using the buttons in the top right corner.

![The buttons for the Designer and Blocks view are in the upper right corner.](../images/Fake_Voices/designer_blocks_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Look at the Designer

In the designer view, the <strong>Palette</strong> is where you find all the components. Drag and drop any component from <strong>Palette</strong> into the viewer. (But for this tutorial, stick with the components in the starter file. You will need them later.)

![The Palette is a window pane all the way to the left.](../images/Fake_Voices/palette.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

The <strong>Viewer</strong> is where you drag components to see how the app will look.

![Viewer highlights a window in the middle that shows how your app will look.](../images/Fake_Voices/viewer.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<strong>Components</strong> shows all components you will use in the app. You can rename or delete them here too. (But keep the components in this file for now. You will need them to code later!)

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

Try to figure out what each component does. (But keep the component names as they are. You will need to code with them later!)

![An image of the App Inventor Designer interface for the Fake Voices app.](../images/Fake_Voices/unmarked_designer.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Finish the Design

For this app, start by adding a button and a few slider bars.

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">First, add a button.</span> Go to <strong>Palette</strong> and drag in a <strong>Button</strong> component:

![The animation shows how to add a button to the interface.](../images/Fake_Voices/Add_a_button.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; padding-top: 50px; font-weight: bold; color:#1c2f8d;">Name the button.</span> Make sure the button is selected in <strong>Components</strong> and change the button name to “HearTheWordsButton”:

![The animation shows how to change the button name.](../images/Fake_Voices/Change_button_name.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Change the button text.</span> Select the button in <strong>Components</strong>, go over to the <strong>Properties</strong> window, and change the button text to “Hear the Words Read Back”:

![The animation shows how to change the button text.](../images/Fake_Voices/Change_button_text.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add a label.</span> Next, go to <strong>Palette</strong> and drag in a <strong>Label</strong> component:

![The animation shows how to add a label component.](../images/Fake_Voices/drag_in_a_label.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Change the label text.</span> Select the label, go to <strong>Properties</strong>, and change the label text to “Change the Pitch”. Don’t forget to change the <i>TextColor</i> to white so that people can see your new label!

![The animation show how to change the label text and turn it white.](../images/Fake_Voices/change_label_text.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Add Some Sliders

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add a slider.</span> Go to <strong>Palette</strong> and drag in a <strong>Slider</strong> component. Make sure the slider is selected in <strong>Components</strong> and change the name to “PitchSlider”:

![The animation shows how to add a slider and change its name.](../images/Fake_Voices/add_a_slider.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Change the slider properties.</span> Make the PitchSlider slider stretches across the screen by changing its width to “Fill Parent.” To make the slider work with the app's other features, change its <i>MaxValue</i>, <i>MinValue</i>, and <i>ThumbPosition</i> as shown.

![The animation shows how to change the pitch slider properties.](../images/Fake_Voices/properties_for_the_pitch_slider.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add another label and slider.</span> Change the text for this label to “Change the Rate”. Change the name of the slider to “RateSlider”, then change its properties as you did for the PitchSlider above.
(Note: Don’t worry about changing the appearance of these components for now. You can tweak the design once you test the app!

![The animation shows how to add another slider and name it rate slider.](../images/Fake_Voices/rate_slider_label.jpg){:.enlargeImage}
![The animation shows how to change the rate slider properties.](../images/Fake_Voices/properties_for_the_rate_slider.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Check out the Code
Click on the "Blocks" button in the upper right corner to see where to code your app.

![An image of where to click to get the blocks interface.](../images/Fake_Voices/switch_to_blocks_view.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

Some code is already in the blocks editor to get you started. First, look over each code block so you understand what it does.

![An image of the starter code already in the app.](../images/Fake_Voices/blocks_view_no_highlight.jpg){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

The first block shows what happens when you click the “Say Something!” button in the app. The button starts the purple block inside — <span class="procedures">call SpeechRecognizer1.GetText</span>. This code turns spoken words into text.

![An image of the event handler for the "Say Something" button.](../images/Fake_Voices/something_button_handler.jpg){:.enlargeImage}

The button <i>calls</i> the SpeechRecognizer code in purple. To <i>call</i> something means to start some useful code that has a special purpose. It’s like calling your sister from across town to come fix your bike tire. (Because she’s really good with bikes!)

The second event block — <span class="control">when SpeechRecognizer1.AfterGettingText</span> — waits for SpeechRecognizer to be done listening and “calls” more useful code.

![An image of the SpeechRecognizer event handler.](../images/Fake_Voices/speechRecognizer_handler.jpg){:.enlargeImage}

In this case, it puts what you say into a text block called <span class="variables">get result</span>. The <span class="variables">get result</span> connects to the <span class="setters">set SpeechTextBox.Text</span> block to make the app dump all the text into the big yellow text block on the screen. (You can always find result by hovering over the word “result” in orange on the block.)

<p style="padding-bottom: 7px"></p>

## Test the Speech Recognition
The SpeechRecognizer code turns what you say into written text. (The new buttons and sliders you made near the bottom will not work until you add more code later.)

Connect your app to your phone using App Inventor Companion.

![An image showing how to connect to the Companion app.](../images/Fake_Voices/how_to_use_companion.jpg){:.enlargeImage}

When you press the “Say Something!” button, does it bring up a small screen to capture what you say? Speak into the phone, and the app should automatically type the words into the text box.

Try to fool the SpeechRecognizer software with unusual words or phrases. Does it always get it right?

<p style="padding-bottom: 7px"></p>

## Make the App Talk

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add a new block.</span> This time you will use a different event to make the app start speaking. Drag in the button-click event <span class="control">when HearTheWordsButton.click</span>.

![An animation showing how to change the button text.](../images/Fake_Voices/when_hear_the_words_button_click.gif){:.enlargeImage}

The <span class="control">when HearTheWordsButton.click</span> block says what happens when you press the “Hear the Words Read Back” button. The button calls whatever code is inside this block.

In this case, you want the phone to read the contents of the text box out loud. When computers read text aloud, it is called “text to speech” or “speech synthesis.”

<hint markdown="block" title="What Is Text to Speech?">
Computers can speak written words, but it is harder than it seems for machines to speak like humans. Sometimes the emphasis is wrong, or the pauses sound unnatural.

Text-to-speech in this app can be adjusted to reproduce accents. The software can speak English with an American, Irish, Australian, or another accent. The software can also speak Spanish with a Mexican, Castilian, or another accent.

Text-to-speech in phones is pretty good, but synthetic speech made by artificial intelligence software sounds even better. In many cases, you cannot easily tell that the AI is not a human being!
</hint>

<p style="padding-bottom: 7px"></p>

## Tell the App What to Say

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Add text-to-speech.</span> Drag in the <span class="procedures">call TextToSpeech1.Speak</span> block from the blocks in the TextToSpeech1 component.

![An animation showing how to change the button text.](../images/Fake_Voices/call_TTS.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Link back to the text box.</span> The text-to-speech component still needs to know what to say. To do that, add a link to the text inside the text box. You can find that here:

![An animation showing how to change the button text.](../images/Fake_Voices/link_to_text_box_text.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

## Test the Fake Voice

Test your app again using App Inventor Companion.

![An animation showing how to change the button text.](../images/Fake_Voices/how_to_use_companion.jpg){:.enlargeImage}

This time, press the “Say Something” button to generate some text, and then press the “Hear the Words Read Back” button to have the computer read the words out loud. Does it sound like a human? Pretty close?

Try a second way of entering text in the orange text box: Cut some text from somewhere on your phone or tablet and paste it into the text box.

![An animation showing how to change the button text.](../images/Fake_Voices/talking_robot.jpg){:.enlargeImage}
<p style="padding-top: 0; padding-bottom: 5; text-align: center;
  font-style: italic;">Drawing by @Hafoba.</p>

  <p style="padding-bottom: 7px"></p>

## Mix It up with Sliders
Want to make the computer voice especially creepy? Use the slider buttons to change the pitch and rate of the voice.

Each time the user moves these sliders, the slider bars assign a numerical value for their new position. When the user moves the slider to the left, it assigns a lower number, and to the right, it assigns a higher number.

<span style="font-size: 110%; font-weight: bold; color:#1c2f8d;">Set the voice pitch.</span> Add a “setter” block from the TextToSpeech components.

![An animation showing how to change the button text.](../images/Fake_Voices/pitch_setter_TTS.gif){:.enlargeImage}

<p style="padding-bottom: 7px"></p>

See how the little puzzle piece still needs one more piece?

![An animation showing how to change the button text.](../images/Fake_Voices/hear_the_words_button_click.jpg){:.enlargeImage}

The TextToSpeech1 setter block is looking for a value. How will you finish the block and give it value?

<hint markdown="block" title="Give Me a Hint">

Yes, to get the pitch value, drag in the thumb position for the pitch slider.

![An animation showing how to change the button text.](../images/Fake_Voices/pitch_getter_thumb.gif){:.enlargeImage}

</hint>

<p style="padding-bottom: 7px"></p>

Now create another setter for the speech rate. The process is the same as for the pitch, except that now it is the <span class="setters">set TextToSpeech1.SpeechRate</span> setter and the thumb position for the <i>rate</i> slider instead.

<hint markdown="block" title="Check My Solution">

![An animation showing how to change the button text.](../images/Fake_Voices/full_last_block.jpg){:.enlargeImage}

</hint>

<p style="padding-bottom: 7px"></p>

## Test Your Final Code

One more time, test your app using App Inventor Companion. This time, make the app read the text in a creepy monster voice or high birdy voice. What are the strangest combinations of low/high pitch and fast/slow rate you can find?

Congratulations, you are done! You have created an app that recognizes speech and speaks the words with custom pitch and rate. Next, you can <strong>Build</strong> the app in App Inventor to use on any Android phone anywhere. Remember, with great power comes great responsibility! Don’t use your new app to scare or freak anyone out!

![An animation showing how to change the button text.](../images/Fake_Voices/frankenstein.jpg){:.enlargeImage}
<span style=" padding-top: 0; text-align: center;
  font-style: italic;">Boris Karloff in the movie Frankenstein (1931). © Universal Pictures</span>

# Expand Your App
Computers make fake voices in many different ways. The system inside a phone or tablet is a very basic one called <i>text to speech</i>. Do you think the voice from your app would fake anyone out when reading a long passage? What is missing?

Some artificial intelligence systems — such as Siri, Google Voice, or Alexa — sound much more human. They create <i>synthetic speech</i>. These machine learning models are trained by listening to millions of humans speak. Can they really trick the human ear? You decide.

Try the following experiment:

* In your phone or tablet, copy a few sentences of text from a speech or book, such as the famous passage from Martin Luther King, Jr.’s “I Have a Dream” speech, below.

<p style="padding-left: 20%; padding-right: 20%; font-style: italic;">We refuse to believe that the bank of justice is bankrupt. We refuse to believe that there are insufficient funds in the great vaults of opportunity of this nation. So we have come to cash this check, a check that will give us upon demand the riches of freedom and security of justice.</p>

* Paste this passage into the text box in your app and take note of how natural it sounds.
* Next, paste this passage into artificial intelligence systems, such as:
  - <b>Google Cloud Assistant</b>. Go down <a href="https://cloud.google.com/text-to-speech/">the page</a> to the section on the left side named “Demo.” Replace the text provided in the box with any text you want. Experiment with the <i>Language</i> and <i>Voice name</i> settings.
  - <b><a href="https://www.ibm.com/demos/live/tts-demo/self-service/home">IBM Watson Text to Speech</a></b>. Replace the text provided in the box with any text you want. Experiment with the <i>Language</i>, <i>Dialect</i>, and <i>Neutral voice</i> settings.

Which fake voices sound the most human? Which is your favorite?

Here are some ideas for ways to enhance your app. Try them out, or come up with your own ideas!

* Make the user interface simpler to use or more attractive. Let five people try your app and see what they think. Ask people of different ages and different comfort levels with computers. Based on this feedback, what user interface changes do you need to make?
* Show a numerical value for the pitch and speed levels on the screen.
* Speak into the app in another language (the app should automatically detect some languages). How could you set TextToSpeech1 to read the text back in a better sounding accent? For instance, how could you use the <span class="setters">set TextToSpeech1.Language</span> block and the language code “ES” to get a better Spanish accent in your app?
* How could you use the app features to create something that performs an important task or service, such as an instant translator for traveling?

What ideas do you have?

# About Youth Mobile Power
A lot of us spend all day on our phones, hooked on our favorite apps. We keep typing and swiping, even when we know the risks phones can pose to our attention, privacy, and even our safety.  But the computers in our pockets also create untapped opportunities for young people to learn, connect and transform our communities.

That’s why MIT and YR Media teamed up to launch the Youth Mobile Power series. YR teens produce stories highlighting how young people use their phones in surprising and powerful ways. Meanwhile, the team at MIT is continually enhancing MIT App Inventor to make it possible for users like you to create apps like the ones featured in YR’s reporting.

Essentially: Get inspired by the story, get busy making your own app!
 <img src="../images/logos/NSF_4-Color_bitmap_Logo.png" width="75"><img src="../images/logos/MITAppInvlogo1.jpg" width="75"><img src="../images/logos/LOGO_YR_PNG_TRANS.png" width="75">

 The YR + MIT collaboration is supported in part by the National Science Foundation. This material is based upon work supported by the National Science Foundation under Grant No. (1906895, 1906636). Any opinions, findings and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

 Check out more apps and interactive news content created by YR <a href="https://yr.media/category/interactive/" target="_blank">here</a>.
