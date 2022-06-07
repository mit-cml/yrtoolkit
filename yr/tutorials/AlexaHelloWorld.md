---
title: Hello World
layout: tutorial
---

# Hello World

## Goal

In this tutorial, you will learn how to use the <strong>MIT App Inventor’s Conversational AI Interface v2</strong> to create your own Amazon Alexa skill. You will also learn how to test your new Alexa skill using Amazon’s <strong>Alexa Development Console</strong>.

## Prerequisites

1. If you have not done so, please complete the following prior to this tutorial to set up all the needed accounts, and Amazon devices if applicable: [App Inventor Setup Tutorial](https://docs.google.com/document/d/15SbjSasmgiCibz_NK8rS0Le1hZ1dZNZSb7a5JIT8H1c/edit)

2. Once that's done, you can move onto the tutorial!


## Creating a New Skill

1. In the Designer Toolbar at the top of the screen, you will see a dropdown button labeled <strong>“Add…”</strong>. Press it, and within it, select the <strong>“Skill”</strong> button.
![Add Skill](../images/alexa_hello_world/addskill.png)

2. Enter the skill's <strong>Invocation name</strong>. For this demonstration, we will name it "hello world greeter".
![Add Invocation](../images/alexa_hello_world/invocationname.png)

<strong>What is an Invocation name?</strong>
<br/>
Just like how every mobile app needs to have a name, so does our custom Alexa Skill. An <strong>Invocation Name</strong> is just the name of the Skill that we are making, and is used to “invoke”, or call our skill. The structure of any command you will tell Alexa is:

<center> “Alexa, ask <span style="background-color: yellow"> (Invocation name) </span> to <span style="background-color: LightPink"> ...</span>” </center>

The invocation name will help Alexa know which skill it needs to use, so make sure that every skill you make has a unique name. For our example, the Invocation name of a custom skill is “hello world”
<center> “Alexa, ask <span style="background-color: yellow"> hello world greeter </span> to <span style="background-color: LightPink"> do something</span>” </center>

<strong>Note</strong>: The invocation name needs to be at least two (2) words long, but avoid making it a full sentence, since you will be saying the name a lot.

## Logging in to your Amazon Account
1. You will now be taken to a new Designer Page for the Conversational AI Interface. On the rightmost part of the screen, there should be a “Testing” box. Click the <strong>“Login to Amazon”</strong> button and enter your Amazon Developer Account information into the external pop-up*.
![Amazon](../images/alexa_hello_world/amazon.png) 
![Login](../images/alexa_hello_world/login.png) 

2. Your testing box should now look like the following after signing in successfully:
![Testing](../images/alexa_hello_world/testing.png)

**If this window does not appear, check if your browser has blocked a pop up and allow the pop-up.*

## Defining a Custom Intent

Now we need to add a custom <strong>Intent</strong> to our app

<strong>What is an Intent?</strong>
<br/>
You can think of an Intent as a “command” that you want to teach Alexa to listen to. It could be a Stop Intent, a HelloWorld Intent, or any intent you can really think of that you will need in a skill. 

1. Let’s teach our app to listen for the “HelloWorldIntent” intent. To make this intent, from the leftmost box on the screen, drag the “Intent” button to the Amazon device on the screen.
![Intent1](../images/alexa_hello_world/intent1.png)

2. In the components box, select IntentA and rename the intent to “HelloWorldIntent”. Press <strong>“OK”</strong> after renaming.
![Intent2](../images/alexa_hello_world/intent2.png)

The current screen should look something like this:

![Screen](../images/alexa_hello_world/screen.png)

## Adding a List of Utterances

After creaing an intent, we need to give the intent a list of <strong>utterances</strong>.

<strong> What are Utterances? </strong>

When talking to Alexa, there might be a lot of ways to say something to trigger an intent. Each of these phrases that all mean the same thing is called an <strong>utterance</strong>. 

 Let’s say your parent wants you to do the dishes. They might say one of the following:
 
- “Clean the dishes.” 
- “Do the dishes.” 
- “Wash the dirty plates.” 

All these sentences have the same <em>intent</em>: you need to do the dishes.

1. Sellect the "HelloWorldIntent" intent.

2. In the “Properties” box, there should be an utterance text box at the bottom. Write in the utterance, “say hi”, and press <strong>“Add”</strong> after.
![Utterance](../images/alexa_hello_world/utterance.png)

3. Add in more utterances like “say hello”, and “say hello world” following the same step 2. Be sure to add utterances in one at a time by pressing <strong>“Add”</strong> after each one

    *IMPORTANT:* Make sure your utterances follow the rules below or your skills will not work properly:

    - Must be all lowercase letters (ex. say hello, NOT Say Hello)
    - At least two words (ex. say hello, NOT sayhello)
    - Starts with a letter (ex. say hello, NOT ‘’say hello)
    - Punctuations can only be spaces, apostrophes, or periods (ex. codi’ bee, NOT ^codi bee)
    - No period at the end of your utterance (ex. say hello, NOT say hello)


4. After inputting your utterances, there may be an empty utterance created. Remove it by selecting it then pressing the <strong>“Remove”</strong> button.

![Remove](../images/alexa_hello_world/remove.png) 

Your properties box should look like the following:

![Properties](../images/alexa_hello_world/properties.png) 

## Defining the First Intent Handler

Now we will tell Alexa what to say after it detects the intent.

1. Move to the Blocks section located above the “Testing” Box.
![Blocks](../images/alexa_hello_world/blocks.png) 

2. On the leftmost part of the screen, there’s now a “Blocks” box. Within it, select the “HelloWorldIntent” intent. A drawer should open with yellow and green blocks. Drag the <strong>HelloWorldIntent.spoken</strong> block out. 
![Helloworldintent](../images/alexa_hello_world/helloworldintent.png) 

3. Next, select the Voice drawer (2nd button in the Blocks section), and drag out the <strong>say</strong> block from the top. Connect it within the <strong>HelloWorldIntent.spoken</strong> block. 
![Sayblock](../images/alexa_hello_world/say.png) 

4. Select the Text drawer (5th button in the Blocks section) and drag out the empty <strong>“ ”</strong> block from the top. Connect it to the <strong>say</strong> block.
![Emptyquote](../images/alexa_hello_world/emptyquote.png) 

5. Within the empty quotation block, type “hello world”. Your block should be <strong>“hello world”</strong>. 
![Blocksdone](../images/alexa_hello_world/blocksdone.png) 

## Sending Your Skill to Amazon

Now, we need to send this <strong>skill</strong> to Amazon.

1. At the rightmost part of the screen, there is the “Testing” box. Within it, there is a button labeled <strong>“Send Updates”</strong>. Click this button.
![Sendskill](../images/alexa_hello_world/sendskill.png) 

2. The gray part of the “Testing” box should change text when loading. Wait a few minutes until the gray part turns white.

Your current screen should look like the following:

![Sentscreen](../images/alexa_hello_world/sentscreen.png) 

## Testing your Skill

Now it’s time to test our Alexa skill! If you have an Alexa-enabled device handy and [set up](https://docs.google.com/document/d/15SbjSasmgiCibz_NK8rS0Le1hZ1dZNZSb7a5JIT8H1c/edit), say *“Alexa, open hello world greeter”,* and then *“Alexa, tell hello world greeter to say hello.”* to it and hear the response, which should be “hello world”, as we programmed it.

If you don’t have an Alexa-enabled device on hand, App Inventor allows you to simulate an Alexa using your custom Alexa skill right in your browser! Simply type in the textbox at the bottom, *“Alexa, ask hello world greeter to say hi.”* The response should be what we plugged into the <strong>say</strong> block earlier, *“hello world.”*

![Sayhello](../images/alexa_hello_world/sayhello.png) 

Note: If you are interested in testing in other ways, feel free to explore this [document](https://docs.google.com/document/u/0/d/1ISS1lI1MK7PCehxCRS3eKQkBiA0fjeXwuL_WlAY-fQU/edit)!

## Finish!

Congratulations! You’ve made your first custom Alexa Skill! Feel free to extend this app by adding new intents and new ways for Alexa to respond to each intent.







