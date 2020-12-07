---
title: AIDance
layout: tutorial
howtos: false
yrmedia: false
---

# Challenge

Some blurb here tying to the YR Media Article: https://yr.media/tech/can-you-teach-ai-to-dance/

# Setup your computer

<div class="setup" id="connect_app"></div>

# Awesome Dancing with AI (Level: Intermediate)

## Introduction
![Dancers](../images/aiDance/dancers.png){:.enlargeImage}
Do you like dancing?   Are you good at it?  Would you like to improve?   Is there an algorithm to describe, identify or measure an amazing dance? Can dance moves be quantified and measured?  Can AI be used to help you improve your dancing skills?  In this project you will learn how to use the new AI technology PoseNet to track key points of your body to create a skeletal model and develop some basic methods to quantify, measure and identify some dance moves.



![Posenet Demo](../images/aiDance/PosenetDemo.png){:.enlargeImage}

<br />
**Important**: Please note that for this project you cannot use the Emulator to test your app as it does not have Speech Recognition capability.  Similarly your mobile device must have Speech Recognition capability for the Voice Calculator to work.

## Graphical User Interface (GUI)

The GUI has been created for you in the starter file.  Please change the properties of the components as you wish to get the look and feel you want.  However, please do not rename the components, as this tutorial will refer to the given names in the instructions.

![GUI of Voice Calculator](../images/voiceCalculator/GUICorrespondence.png){:.enlargeImage}

In the GUI you will notice that there is a Speak  button which the user will press to verbally communicate the calculation they wish to have performed.  The interface will then display in writing what the Calculator heard and respond, both in writing and verbally, with the result of the calculation.  If the Calculator could not hear a meaningful calculation query or could not understand the intent of the user, it will say so.


## Initialize <var>numberList</var>

The first thing you'll tackle is to extract the numbers in the sentence spoken by the user. You'll use them later when you actually perform the mathematical operation.  To do this first you will initialize a global variable named <var>numberList</var> where the numbers in the calculation query will be stored.  As this variable will be a list of numbers,  it will be initialized  to an empty list.


![Initialization of global numberList](../images/voiceCalculator/initialize_numberList.png){:.enlargeImage}

## procedure <var>extractNumbers</var> 
(page 1)

Then you  will create  a procedure  called <strong><var>extractNumbers</var></strong> which when given an input sentence will extract the numerical values in that sentence and store these in the global variable <var>numberList</var>.  To do this:
<ol>
<li>choose a procedure and name it <strong><var>extractNumbers</var></strong></li>
<li>use the settings gear to add an input parameter and call it <var>sentence</var></li>
</ol>

![procedure extractNumbers](../images/voiceCalculator/procedure_extractNumbers.png){:.enlargeImage}![procedure extractNumbers input parameter](../images/voiceCalculator/procedure_extractNumbers_inputParameter.png){:.enlargeImage}

(procedure continues next page)

## procedure <var>extractNumbers</var>
(page 2)
<ol start="3">
<li>set the global variable <var>numberList</var> to the empty list.  You need to reinitialize the variable every time you call this procedure as each calculation the user initiates will use a new pair of numbers</li>
<li>use  the <span class="text"><strong>split at spaces</strong></span> text block to split the input sentence into a list of  its words and use <span class="control"><strong>for each word in list</strong></span> block to check to see if any of the words is a number</li>
</ol>
![for each word ](../images/voiceCalculator/foreach_split.png){:.enlargeImage}
<ol start="5">
<li>if any word is a number then add it to the global variable <var>numberList</var></li>
</ol>

<hint markdown="block" title="Give me a hint">

![procedure extractNumbers hint](../images/voiceCalculator/procedure_extractNumbers1.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

![procedure extractNumbers solution](../images/voiceCalculator/procedure_extractNumbers2.png){:.enlargeImage}

</hint>

</hint>

 Try this on your own but if you get stuck you can click the Hint button.


## Multiplication Intent

As there are many ways for a user to indicate that they would like to perform a multiplication operation, it is essential to identify all these different approaches as a multiplication intent.  For example all of the following statements are different ways of expressing the same multiplication intent: 
* <span style="color:red">what is</span> <span style="color:green">73\*51</span> <span style="color:red">?</span>
* <span style="color:red">how much is</span> <span style="color:green">73x51</span><span style="color:red"> ?</span>
* <span style="color:red">compute </span> <span style="color:green">73X51</span><span style="color:red"> ?</span>
* <span style="color:red">what is the <span style="color:green">product</span> of</span> <span style="color:green">73</span> <span style="color:red">and</span> <span style="color:green">51</span> <span style="color:red">?</span>
* <span style="color:red">what is the result when you</span> <span style="color:green">multiply 73</span> <span style="color:red">with</span> <span style="color:green">51</span> <span style="color:red">?</span>
* <span style="color:red">what is</span> <span style="color:green">73 times 51</span> <span style="color:red">?</span>

Note that the key words/symbols/numbers in <span style="color:green">green</span> define the multiplication intent while the words/symbols in <span style="color:red">red</span> can be disregarded.

## variable <var>multiplicationIntents</var>

Now you will create a global variable <var>multiplicationIntents</var> which will be a list of all the common ways of communicating a multiplication intent with symbols and words: 

{ * , x , X , product, multiply, times }

![global variable multiplicationIntents](../images/voiceCalculator/multiplicationIntents.png){:.enlargeImage}

<!--## Boolean procedure <var>multiplicationIntended</var>

(page 1)

A Boolean procedure is a procedure that returns the values <strong>true</strong> or <strong>false</strong> based on the truth or falsity of the input statements.  

First, you will create a Boolean procedure called <strong><var>multiplicationIntended</var></strong> with a return value which will determine whether the user intends to perform a multiplication by checking for some key words in the sentence uttered by the user.
<ol>
<li> choose a procedure with a return value and name it <strong><var>multiplicationIntended</var></strong></li>
<li> use the settings gear to add an input parameter and call it <var>sentence</var></li>
</ol>
![procedure with return value](../images/voiceCalculator/procedureWithReturn.png){:.enlargeImage}
![procedure with input](../images/voiceCalculator/proceduremultiplicationIntendedwithinput.png){:.enlargeImage}

(procedure continues next page)

## Boolean procedure <var>multiplicationIntended</var>

(page 2)
<ol start="3">
<li>if any of the following symbols/words are contained in the sentence, have the procedure return <strong>true</strong> or return <strong>false</strong> otherwise: <br /><br />

   { * , x , X , product, multiply, times } <br /><br />
   
</li>
</ol>
Note: For consistency both the small letter "x" and the capital "X" have been included here.  It is possible that your device will use either to indicate multiplication.

<hint markdown="block" title="Give me a hint">

Note that Boolean text block <span class="text"><strong>contains</strong></span> and nested logic operators <span class="logic"><strong>or</strong></span> can be used for this purpose. 
<img src="../images/voiceCalculator/containstextpiece.png" alt="contains text block" style="width:50%">
 

![logic block OR](../images/voiceCalculator/LogicOR.png){:.enlargeImage}

You can keep nesting as many <span class="logic"><strong>or</strong></span> blocks as you need.  If any one of the nested <span class="logic"><strong>or</strong></span> operators returns <strong>true</strong> then the collection returns <strong>true</strong>. 

![logic block OR nested twice](../images/voiceCalculator/2NestedOR.png){:.enlargeImage}
![logic block OR nested three times](../images/voiceCalculator/3NestedOR.png){:.enlargeImage}



<hint markdown="block" title="Check my solution">

![procedure multiplicationIntended solution](../images/voiceCalculator/procedure_multiplicationIntended.png){:.enlargeImage}


</hint>

</hint>

Try this on your own but if you get stuck you can click the Hint button.-->
 

## SpeakButton
Now you will write the code to give functionality to the Speak button.  When the Speak button is clicked:
<ol>
<li>clear the <strong>UserTextLabel</strong> and <strong>CalculatorTextLabel</strong></li>
<li>call the <strong>SpeechRecognizer</strong> to get the text of what the user has spoken</li>
</ol>

<hint markdown="block" title="Give me a hint">

![when SpeakButton Click hint](../images/voiceCalculator/whenSpeakButtonClick1.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

![when SpeakButton Click solution](../images/voiceCalculator/whenSpeakButtonClick2.png){:.enlargeImage}

</hint>

</hint>
Try this on your own but if you get stuck you can click the Hint button.

## when SpeechRecognizer gets text

(page 1)

When the <strong>SpeechRecognizer</strong> performs its task and returns with a text <var>result</var>:
<ol>
<li>set the <strong>UserTextLabel</strong> to this text <var>result</var>.  This indicates what the Calculator heard.</li>
<li>extract the numbers from the  text <var>result</var> to store them in the global variable <var>numberList</var>  using the procedure <strong><var>extractNumbers</var></strong></li>
<li>set the <strong>CalculatorTextLabel</strong> to a default statement indicating that the Calculator could not understand what the user asked and inviting them to ask a clear calculation question.  For ex:  “I could not understand.  Please ask me a multiplication or addition or subtraction or division question like: What is 123 times 85?”</li>
</ol>
(task continues next page)

## when SpeechRecognizer gets text

(page 2)
<ol start="4">
<li>check that there were exactly two numbers extracted from the sentence uttered by the user and if so, determine
	<ul>
		<li>if the intent was multiplication, set <strong>CalculatorTextLabel</strong> to the product of the two numbers</li>
	</ul>
</li>
<li>use the <strong>TextToSpeech</strong> component to have the Calculator verbally read the contents of the <strong>CalculatorTextLabel</strong>.</li>
</ol>


<hint markdown="block" title="Give me a hint">
You may find the the text block <span class="text"><strong>contains any</strong></span> helpful.
![text block contains any](../images/voiceCalculator/contains_to_contains_any.png){:.enlargeImage}

In the following example you can see that the <span class="text"><strong>contains any</strong></span> block returns true when one of the words in the piece list ("you") is contained in the input text ("How are you?").
![text block contains any do it](../images/voiceCalculator/contains_any_doit.png){:.enlargeImage}

<hint markdown="block" title="Give me another hint">
![when SpeechRecognizer gets text hint](../images/voiceCalculator/whenSpeechRecognizer1AfterGettingText1.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

![when SpeechRecognizer gets text partial solution](../images/voiceCalculator/whenSpeechRecognizer1AfterGettingText2.png){:.enlargeImage}

</hint>
</hint>
</hint>
Try this on your own but if you get stuck you can click the Hint button.

## Test your App for Multiplication

<img src="../images/voiceCalculator/AICompanion.png" style="width: 65%">

Now you will use the AI Companion to check that your app works well for a multiplication calculation.  Be sure to use AI2 Companion version 2.60 or later otherwise the app will give errors.  Also please note that an Emulator cannot be used in the testing as it does not support Speech Recognition.  Try to state your multiplication intent in a variety of ways to make sure that the Calculator responds properly with the correct product.  Also make a non-calculation statement like "Hello how are you doing today?" and check that the Calculator responds appropriately by saying something like "I could not understand.  Please ask me a multiplication or addition or subtraction or division question like: What is 123 times 85?"


## Other operations

(page 1)

Now you will create three more global variables for the other operations: <strong><var>additionIntents</var></strong>, <strong><var>subtractionIntents</var></strong> and <strong><var>divisionIntents</var></strong>.


<hint markdown="block" title="Give me a hint">
The following symbols/words are common ways of indicating intent for each operation
* addition: { + , add, sum, plus}
* subtraction: { - , subtract, difference, minus}
* division: { /, ÷ , divide, quotient, ratio}

<hint markdown="block" title="Check my solution">

![procedure additionIntents solution](../images/voiceCalculator/additionIntents.png){:.enlargeImage}

![procedure subtractionIntents solution](../images/voiceCalculator/subtractionIntents.png){:.enlargeImage}

![procedure divisionIntents solution](../images/voiceCalculator/divisionIntents.png){:.enlargeImage}

</hint>

</hint>
Try this on your own but if you get stuck you can click the Hint button.

## Other operations

(page 2)

And now revise <strong>when SpeechRecognizer1.AfterGettingText</strong> to include the extra operations

*	if the intent was division, set <strong>CalculatorTextLabel</strong> to the quotient of the two numbers
* 	if the intent was addition, set <strong>CalculatorTextLabel</strong> to the sum of the two numbers
* 	if the intent was subtraction, set <strong>CalculatorTextLabel</strong> to the difference of the two numbers

<hint markdown="block" title="Give me a hint">

Using the settings gear you can access the following version of the <span class="control">if then</span> block which can be helpful:

![if then else if hint](../images/voiceCalculator/ifthenelseif.png){:.enlargeImage}
<hint markdown="block" title="Check my solution">

![when SpeechRecognizer gets text full solution](../images/voiceCalculator/whenSpeechRecognizer1AfterGettingText3.png){:.enlargeImage}

</hint>
</hint>

Try this on your own but if you get stuck you can click the Hint button.

## Test Your App again
Congratulations, you have built your first voice-driven AI system.  Test it thoroughly to make sure that your Voice Calculator can correctly respond to a variety of different utterances for each operation intended.


# Expand Your App
* The calculator at this point functions a lot like how a beginning foreign language learner may try to function in a foreign country when listening to a native speaker: a few known key words are used to identify the intent of the native speaker and the rest of the other words are completely ignored in high hopes that they are irrelevant and thus don’t really matter.  For example in the following sentence, all the words in <span style="color:red">red</span> are irrelevant and can be ignored while the words in <span style="color:green">green</span> are highly relevant in defining the intent of the speaker:

	<span style="color:red">Would you be so kind, oh dear amazing Calculator, to tell me the</span> <span style="color:green">product</span> <span style="color:red">of the most glorious number</span> <span style="color:green">73</span> <span style="color:red">and the supremely wondrous quantity</span> <span style="color:green">51</span> <span style="color:red">?</span>

	* Knowing this limitation of the Voice Calculator, come up with a sentence that will trick it to do a calculation when the intent of the sentence was not a calculation at all.  Test it.
	* Knowing the limitations of the Voice Calculator, come up with a completely legitimate calculation sentence that it will fail to understand. Test it.
	* Can you improve your code to avoid any of the tricky sentences you came up with above?
<br /><br />
* Make the calculator take square roots and other more advanced operations you might know.
<br /><br />
* Can you try to create a primitive version of Alexa or Siri where the AI will respond to some basic queries like: 
	* What day of the week is it?
	* What is the time?
	* Tell me a joke.
	* What is the weather? (perhaps opens a weather website)
	* What are the top news stories? (perhaps opens a news website)
	* Set a timer for 30 seconds.
<br /><br />
* As mentioned earlier in the introduction this project can be viewed as an example of ***assistive technology*** that can aid people with disabilities or the elderly.  Do some research about assistive technologies and how they are helping people with disabilities and the elderly population.  What other apps can you think of that can be examples of assistive technologies?  Use MIT App Inventor to build such an app.


# About Youth Mobile Power 
A lot of us spend all day on our phones, hooked on our favorite apps. We keep typing and swiping, even when we know the risks phones can pose to our attention, privacy, and even our safety.  But the computers in our pockets also create untapped opportunities for young people to learn, connect and transform our communities.

That’s why MIT and YR Media teamed up to launch the Youth Mobile Power series. YR teens produce stories highlighting how young people use their phones in surprising and powerful ways. Meanwhile, the team at MIT is continually enhancing MIT App Inventor to make it possible for users like you to create apps like the ones featured in YR’s reporting.

Essentially: get inspired by the story, get busy making your own app!
 <img src="../images/logos/NSF_4-Color_bitmap_Logo.png" width="75"><img src="../images/logos/MITAppInvlogo1.jpg" width="75"><img src="../images/logos/LOGO_YR_PNG_TRANS.png" width="75">
 
 The YR + MIT collaboration is supported in part by the National Science Foundation. This material is based upon work supported by the National Science Foundation under Grant No. (1906895, 1906636).   Any opinions, findings and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

 Check out more apps and interactive news content created by YR <a href="https://yr.media/category/interactive/" target="_blank">here</a>.