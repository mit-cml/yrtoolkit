---
title: IamgeBot App
layout: tutorial
---

# Challenge

<p style="font-size: 150%;
font-weight:bold; color:#1c2f8d; padding-bottom: 0;">MIT App Inventor ImageBot Tutorial: 
Imagine, Articulate, Generate, and Share
</p>

Have you ever wondered how it is possible to create your very own artistic generative AI app that will allow you to create wildly imaginative visualizations from simple prompts?  In this tutorial, you will build a simple app with MIT App Inventor that allows users to connect to OpenAI's DALL-E generative AI program and generate exciting artistic visualizations.

![Kitten with Wings](../images/imageBot/KittenwithWings.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

# Setup

## Getting your own OpenAI API Key

For this project you will need to get your own OpenAI API key to use MIT App Inventor’s <strong>ImageBot</strong> component.  As of the writing of this tutorial, OpenAI allows users 13 years old and older to create their own OpenAI accounts and generate their own OpenAI API keys. For the first 3 months, you are given a $5 free credit which should get you quite a bit of exploration time. After 3 months, any unused portion of the credit expires. Once your free credit is gone, you will need to become a paying customer with a credit card.  Follow the steps below to create your OpenAI account and get your OpenAI API key.

Follow the steps below to create you OpenAI account and get your OpenAI API key.

1. Go to <a href="https://openai.com/" target="_blank">https://openai.com/ </a>
    
2. Click on the Sign up button on  the upper right

    ![OpenAI Sign up](../images/imageBot/OpenAISignUp.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

3. Create your account by entering your email and choosing a password.  You can also sign up using your Google, Microsoft and Apple accounts.

    ![Create Account](../images/imageBot/CreateAccount.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

    ![Sign In](../images/imageBot/SignIn.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

4. You will need to verify your e-mail and phone number during the signup process.

5. To get your personal OpenAI API  key go to <a href="https://platform.openai.com/account/api-keys" target="_blank">https://platform.openai.com/account/api-keys </a>
 
6. Click on the  API keys tab and the Create new secret key button.

    ![Key Generate](../images/imageBot/KeyGenerate.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

7. Give your key a name if you wish.  This step is optional.

    ![Name Secret Key](../images/imageBot/NameSecretKey.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>


8. Copy and save your API key somewhere safe on your computer.  You will need it while doing the project.

## Updating AI2 Companion

If you have not done so, please upgrade your AI2 Companion to version 2.67 or higher.



# ImageBot Tutorial

## Overview

In this tutorial, you will be exploring the <strong>ImageBot</strong> component of App Inventor, building  an app that allows users to create images using OpenAI’s DALL-E. Users choose the image resolution, then speak a prompt that goes to OpenAI. Once OpenAI creates the image in the app, users can re-generate other images with the same prompt until they like the final result. With the click of a button, they can share the image with friends on social media or email it to themselves. Once the process completes, users can reset the interface and start over again.


![Finished app](../images/imageBot/FinishedApp.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>


## The Graphical User Interface (GUI)

In this project, most of the User Interface (UI) has been created for you. Study the given components (most should be intuitive). The <strong>Spinner</strong> component may be unfamiliar to you — in this app, it provides a drop-down menu for users to select the desired resolution for the image to be generated.

Drag and drop the following Non-visible components to your app: 
* <strong>Notifier</strong> (from <strong>User Interface</strong> components drawer)
* <strong>ImageBot</strong> (from <strong>Experimental</strong> components drawer)
* <strong>Sharing</strong> (from <strong>Social</strong> components drawer) 
* <strong>SpeechRecognizer</strong> (from <strong>Media</strong> components drawer) 

Your final GUI should look like the one below. (Note: you may need to scroll down to see all your components in the Viewer.)

![GUI Corrrespondence](../images/imageBot/GUICorrespondence.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>


## Adding your OpenAI API Key

To use the DALL-E program, you will need an OpenAI API Key. You generated this in this tutorial’s Setup section (see below). Copy-paste the key you generated to the <em>ApiKey</em> property of your <strong>ImageBot</strong> component. Your key will look different than the partial key shown below.

![Api Key Property](../images/imageBot/ImageBotAPIKeyProperty.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>


## Coding the GUI functionality (1)

Now you are ready to give functionality to all these components.  Click on the Blocks button to go to the Blocks editor.

![Blocks Button](../images/imageBot/BlocksEditor.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>


Start by initializing a global variable <strong><em>imageFileName</em></strong> which you will use to keep track of the image files created.  Initially, this variable should be assigned an empty string.

![Initialize imageFileName Variable](../images/imageBot/initializeglobalImageFileNameTo.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Coding the GUI functionality (2)

Code an event block that allows users to speak their prompt into the app.  When users press the <strong>SpeakButton</strong>, the <strong>SpeechRecognizer</strong> must capture their utterance and turn it into text.

![When speakButton Click](../images/imageBot/WhenSpeakButtonClick.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

After the <strong>SpeechRecognizer</strong> returns with the text of the user's prompt, then set the <strong>PromptTextBox</strong>’s text to this returned text.

![When SpeechRecognizer After Getting Text](../images/imageBot/WhenSpeechRecognizerAfterGettingText.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Coding the GUI functionality (3)

Next, users can choose a resolution (256, 512, or 1024) for the image.  The default is 256.

![Resolution Spinner](../images/imageBot/ResolutionSpinner.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

After a selection has been made using the <strong>ResolutionSpinner</strong>, the value selected must be set as the <em>Size</em> property of the <strong>ImageBot</strong> component.

![When Resolution Spinner After Selecting](../images/imageBot/WhenResolutionSpinnerAfterSelecting.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Coding the GUI functionality (4)

Now you have all the info needed to generate an image. When users click the <strong>CreateButton</strong>, unless the <strong>PromptTextBox</strong> is empty, have the <strong>Notifier</strong> inform users that the generation process has started via a Progress Dialog message. Then send the entered prompt to OpenAI so that an image based on the description in the prompt can be generated.


![When CreateButton Click](../images/imageBot/WhenCreateButtonClick.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

When OpenAI returns with an image filename, cancel the <strong>Notifier</strong> and set the <strong>Canvas</strong> component’s <em>BackgroundImage</em> property to the image file. Also, set the global variable <strong><em>imageFileName</em></strong> to this filename returned by OpenAI. You will need this available when you code the <strong>when ShareButton.Click</strong> event.

![When ImageBot Image Created](../images/imageBot/WhenImageBotImageCreated.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Coding the GUI functionality (5)

When ChatGPT returns with a response, a new message should be added to the <strong>ListView</strong>, like:

<em><strong>AI</strong> : The Big Bang Theory is like a really big explosion that happened a really long time ago…</em>

And make the <strong>TextToSpeech</strong> component read this response out loud. 

![When ChatBot Got Response](../images/chatBot/whenChatBot1GotResponse.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Coding the GUI functionality (6)

Finally, when the user clicks <strong>ResetConversationButton</strong>, reset the conversation, set the variable <em><strong>chatList</strong></em> to an empty list, clear the <strong>ListView</strong>, and make visible the <strong>VerticalArrangement</strong> that hosts system role assigning components.

![When ResetConversationButton Clicked](../images/chatBot/whenResetConversationButtonClick.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Testing the app

Now test your app by scanning the QR Code generated via your AI2 Companion.  Give the system an interesting role and ask ChatGPT some questions.  For example:

<em><strong>User</strong>: You are a Shakespearean actor who answers every question in limerick</em>

<em><strong>User</strong>: Explain why the chicken crossed the road </em>

<!--Please note that unless you use your own OpenAI API key, the number of questions you can ask ChatGPT is limited.  This limit is approximately 10,000 tokens at the time of the writing of this tutorial, where a token is roughly a word, which includes ChatGPT's responses to you.-->

Congratulations! You just created a powerful app that will allow you to chat with ChatGPT at the touch of a button and access a reservoir of knowledge and wisdom. 

<strong>Disclaimer</strong>: Always use common sense when evaluating ChatGPT’s responses and be aware that, like any computer system, ChatGPT may fail.



# Expand Your App

* Do some research on and/or ask ChatGPT how Large Language Models (LLM) like it are trained and how they operate.

* How can you use the chatGPT app to act as a non-directive therapist and guide you in your mental-health-related questions?  You may also enjoy revisiting the classical (pre- Machine Learning) AI project <a  href="http://appinventor.mit.edu/explore/resources/ai/therapist-bot" target="_blank">Therapist Bot</a> based on the <a  href="https://en.wikipedia.org/wiki/ELIZA" target="_blank">Eliza</a>  project from the 1960’s.

* How can you use the app to collaborate with you in creating some bars for a rap song or lines of poetry?

* Can ChatGPT give you information about current events? Are there topics ChatGPT is <em>not</em> programmed to chat about? Are there times when ChatGPT clearly gives you false information? What examples can you find that point to the limitations of ChatGPT? Explore other limitations and failings of ChatGPT.

* ChatBot component allows you to access chatbot API’s other than the default ChatGPT API via the <em>Provider</em> property.  An example would be Google's PaLM. Explore these other options.

* Explore the new <strong>ImageBot</strong> component which uses generative AI of DALL-E to create fascinating visuals.

* What other cool ideas do you have?




# About Youth Mobile Power
A lot of us spend all day on our phones, hooked on our favorite apps. We keep typing and swiping, even when we know the risks phones can pose to our attention, privacy, and even our safety.  But the computers in our pockets also create untapped opportunities for young people to learn, connect and transform our communities.

That’s why MIT and YR Media teamed up to launch the Youth Mobile Power series. YR teens produce stories highlighting how young people use their phones in surprising and powerful ways. Meanwhile, the team at MIT is continually enhancing MIT App Inventor to make it possible for users like you to create apps like the ones featured in YR’s reporting.

Essentially: Get inspired by the story, get busy making your own app!
 <img src="../images/logos/NSF_4-Color_bitmap_Logo.png" width="75"><img src="../images/logos/MITAppInvlogo1.jpg" width="75"><img src="../images/logos/LOGO_YR_PNG_TRANS.png" width="75">

 The YR + MIT collaboration is supported in part by the National Science Foundation. This material is based upon work supported by the National Science Foundation under Grant No. (1906895, 1906636). Any opinions, findings and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

 Check out more apps and interactive news content created by YR <a href="https://yr.media/category/interactive/" target="_blank">here</a>.






