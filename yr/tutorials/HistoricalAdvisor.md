---
title: Historical Character Advisor App
layout: tutorial
---

# Challenge

<p style="font-size: 150%;
font-weight:bold; color:#1c2f8d; padding-bottom: 0;">Wisdom of the Ages: Historical Character Advisor App
</p>

<img src="../images/historicaladvisor/CharacterGAllery.png" alt="Historical Characters" width="200" />

XXXXXXXXXXXXXXXXX

# Setup

If you need help getting started and set up with App Inventor please visit our <a href="https://appinventor.mit.edu/explore/ai2/setup" target="_blank">Setting Up App Inventor</a> page.

In this project we will be using the <em>new</em> App Inventor User Interface called "Neo".  To set this up go to the Settings menu and select "User Interface Settings:
![Settings](../images/historicaladvisor/Settings.png){:.enlargeImage}

When the following dialog comes up, select the "Neo" option:
![UI Settings](../images/historicaladvisor/UISettings.png){:.enlargeImage}



# Historical Character Advisor App (Level: Intermediate)

## Introduction I

In 1985 Steve Jobs shared a vision for an AI tool that could capture the “underlying worldview” of a historical figure like Aristotle and answer students’ questions <em>as</em> that character. 

![Steve Jobs Lecture](../images/historicaladvisor/SteveJobsonAristotle.png){:.enlargeImage}
<a href="https://youtu.be/iosUmVdobnM?si=qT2ZkHuMNys2vCFu" target="_blank">YouTube video.</a>

Amazingly, in just 40 years, generative AI tools such as ChatGPT have done that. In this project, you will learn how to create a GenAI-powered app that will allow you to ask questions of a historical character and get answers and advice.

![Einstein Advisor](../images/historicaladvisor/EinsteinAdvisor.png){:.enlargeImage}


## The User Interface (UI)

In this project, the user interface (UI) has already been created for you. Study the diagram below, which shows how each component is used in the UI.

![GUI correspondence](../images/historicaladvisor/GUICorrespondence.png){:.enlargeImage}

Of these components, you may be least familiar with <strong>Spinner</strong>, which provides a menu from which users can select one option. Here, <strong>Spinner</strong> will contain a list of famous characters — <em>Socrates, Aristotle, Marcus Aurelius, Confucius, Buddha, Gandhi, Mother Teresa, Albert Einstein, Sigmund Freud, Virginia Woolf, Maya Angelou, Ruth Bader Ginsburg, Oprah Winfrey, Barack Obama</em>. (Feel free to replace any of these characters with personal heroes <em>you</em> like! If you do so, be sure to add image files for the characters in Media.)

![Spinner and Media](../images/historicaladvisor/SpinnerAndMedia.png){:.enlargeImage}

## Initial Code

Now switch to the <strong>Blocks</strong> editor to look at the code blocks already in the app template.

![Blocks editor](../images/historicaladvisor/BlocksEditor.png){:.enlargeImage}

First, notice that a variable named <var>photoList</var> is initialized to a list containing the image file names for the historical characters. If you add your own choices be sure to also update this initialization. The order in the <var>photoList</var> must match the exact order in the <strong>Spinner</strong>’s <em>ElementsFromString</em> property.

![Initialize photoList](../images/historicaladvisor/initializephotoList.png){:.enlargeImage}

Now you will need to fill in the following event handler blocks:

![Event handlers to fill](../images/historicaladvisor/EventHandlersToFill.png){:.enlargeImage}

## Speak Button

When the Speak button is clicked, the <strong>SpeechRecognizer</strong> should be called to get the text of the voice recording.

<hint markdown="block" title="Solution">

![When Speak button clicked](../images/historicaladvisor/whenSpeakButtonClick.png){:.enlargeImage}

</hint>

When the <strong>SpeechRecognizer</strong> gets the text, the text should be pasted in the <strong>QuestionTextBox.Text</strong>

<hint markdown="block" title="Solution">

![When SpeechRecognizer gets text](../images/historicaladvisor/whenSpeechRecognizerAfterGettingText.png){:.enlargeImage}

</hint>
<br/>

## Get Advice Button

When the Get Advice button is clicked
* Start the <stong>Notifier</stong> telling the user that the app is working on the task
* Set the <strong>ChatBot.System</strong> to a prompt like: 
	<em>“You are [selected character]. Based on everything you know about [selected character]’s personality and life experience, answer the questions and give advice clearly and concisely as if this personality would answer or give advice. Do NOT make up stuff. Be truthful to the character. Chat with the mannerisms and in the style of the character. Start by stating what character you are and give some background information.”</em>
* Have the <strong>ChatBot</strong> send the user’s question to the LLM.

<hint markdown="block" title="Solution">

![When Get Advice button clicked](../images/historicaladvisor/whenGetAdviceButtonClick.png){:.enlargeImage}

</hint>

When <strong>ChatBot</strong> returns with a response, dismiss the <strong>Notifier</strong> and paste this to the appropriate text box.

<hint markdown="block" title="Solution">

![When ChatBot got response](../images/historicaladvisor/whenChatBotGotResponse.png){:.enlargeImage}

</hint>
<br/>

## Spinner Option Selection

When the user selects a historical character option for the <strong>Spinner</strong> menu
* The <strong>ResponseTextBox.Text</strong> should be cleared
* The <strong>ChatBot</strong> should reset the conversation
* The <strong>Image.Picture</strong> should be set to the newly selected character’s image stored in the <var>photoList</var> variable

<strong>Note<:</strong> We are not, by default, clearing the <strong>QuestionTextBox.Text</strong> in case the user would like to ask the same question to multiple historical characters.

<hint markdown="block" title="Solution">

![When Spinner option is selected](../images/historicaladvisor/whenSpinnerAfterSelecting.png){:.enlargeImage}

</hint>
<br/>

## Clear Button

When the Clear button is clicked, both text boxes should be cleared.

<hint markdown="block" title="Solution">

![When Clear button is clicked](../images/historicaladvisor/whenClearButtonClick.png){:.enlargeImage}

</hint>
<br/>


## Test

Now test your app by scanning the QR Code generated via your AI2 Companion on your mobile device.

![Scan QR Code](../images/historicaladvisor/Connect_AI2Companion_QRCode.png.png){:.enlargeImage}

Select different historical characters, ask questions, and seek advice. In your opinion, does the app do a convincing job of embodying the life experiences and mannerisms of the character you have selected?

Congratulations! You have created a GenAI app that fulfills Steve Jobs’ vision from 1985, allowing you to access the wisdom of the ages.


# Expand Your App

## Further Explorations

* Add at least one more character (for example, Michelle Obama) to your Spinner list and their image to your Media. Then, test that your app works with the new character.
* Try to break down your app so that the GenAI hallucinates. Have it say things that your historical character is unlikely to say. Explore the limits of your app.
* As technology improves, it will be possible to have an animated 3D avatar of the characters you select and have them speak in the voice of these characters (especially for those living after the 20th Century when voice recordings are available). Explore whether these advancements are available now. Imagine how your app could incorporate such features.
* Create an app that groups many historical characters by category using multiple screens, such as Ancient Philosophers, Spiritual Teachers, Politicians, Scientists, or Literary Figures.
* Add your amazing ideas here.










