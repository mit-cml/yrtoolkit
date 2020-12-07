---
title: AIDance
layout: tutorial
howtos: false
yrmedia: false
---

# Challenge

Some blurb here tying to the YR Media Article: https://yr.media/tech/can-you-teach-ai-to-dance/

# Setup your computer

<div class="setup noemulator" id="connect_app"></div>

# Awesome Dancing with AI (Level: Intermediate)

## Introduction
![Dancers](../images/aiDance/dancers.png)
Do you like dancing?   Are you good at it?  Would you like to improve?   Is there an algorithm to describe, identify or measure an amazing dance? Can dance moves be quantified and measured?  Can AI be used to help you improve your dancing skills?  In this project you will learn how to use the new AI technology PoseNet to track key points of your body to create a skeletal model and develop some basic methods to quantify, measure and identify some dance moves.

![Posenet Demo](../images/aiDance/PosenetDemo.gif)
<a href="https://github.com/tensorflow/tfjs-models/blob/master/posenet/demos/camera.gif" target="_blank">Image Credit</a>

<br />
**Important**: Please note that for this project you cannot use the Emulator to test your app as the Emulator cannot run MIT App Inventor extensions such as the Posenet Extension.  To make sure that your mobile device has the needed hardware capability for Posenet, use AI2 Companion on <a href="" target="_blank">this .aia </a>test file.

## Graphical User Interface (GUI)

A possible GUI has been created for you in the starter file.  Please change the properties of the components as you wish to get the look and feel you want.  However, please do not rename the components, as this tutorial will refer to the given names in the instructions.

![GUI of AI Dance](../images/aiDance/GUICorrespondence.png){:.enlargeImage}

The <strong>SwapCameraButton</strong> toggles the camera view from Front to Back as the user wishes.  <strong>CanvasLiveButton</strong>  toggles the Canvas background from a solid black color to a live camera view.  <strong>ResetButton</strong> sets the Dance Score back to zero.  The <span class="icon" alt="webviewer"></span><strong>WebViewer</strong> component is where the camera view will be cast and the <span class="icon" alt="canvas"></span><strong>Canvas</strong> component is where the skeletal model of the body will be created either against a black background or a live camera view background.

Note that at the very bottom of the Components panel is the <span class="icon" alt="posenetextension"></span><strong>PosenetExtension</strong> which is the AI technology that we will be using to track key points of a body and which will help us to build a skeletal version of the body.



## Posenet key points

The key points of the body tracked by Posenet are: eyes, ears, nose, shoulders, elbows, wrists, hips, knees and ankles.  

![Posenet key points of the body ](../images/aiDance/keypoints.png){:.enlargeImage}

Whenever Posenet is able to track a body key point, it will return a list of two elements representing the x and y-coordinates of the key point.  When Posenet is unable to track a body key point, it will return an empty list.

## Preliminary GUI code
You are also given some preliminary code for the GUI.  Study these to make sure that you have a general idea what they do.


![Posenet Ready Error ](../images/aiDance/whenPosenetExtensionReadyError.png){:.enlargeImage}
These two blocks are used to communicate the status of Posenet as either "Ready" or in case of error, display the error message.

![Reset Button ](../images/aiDance/whenResetButtonClick.png){:.enlargeImage}
The <strong>ResetButton</strong> resets the Dance Score to zero each time it is clicked.

![Swap Camera Button](../images/aiDance/whenSwapCameraButtonClick.png){:.enlargeImage}
The <strong>SwapCameraButton</strong> toggles the camera view from its default "Front" view to "Back" and vice versa.

![Live Canvas Button ](../images/aiDance/whenCanvasLiveButtonClick.png){:.enlargeImage}
The <strong>CanvasLiveButton</strong> adjusts the value of a Boolean variable which will be used to either display the Posenet constructed skeleton on a live background or on a solid black background.

## Helper functions (1)
You are also given some helper functions. 

<strong><em>getX</em></strong> and <strong><em>getY</em></strong> functions extract the x and y-coordinates of a given point. A point is simply a list of two elements that Posenet returns representing the x and y-coordinates of a given location.

![getX and getY ](../images/aiDance/getXgetY.png){:.enlargeImage}

## Helper functions (2)
<strong><em>defined</em></strong> is a Boolean function that returns true if the given point is a list of two elements (representing the x and y-coordinates of the point) and false otherwise.  If Posenet is unable to detect any of the body key points, it will return an empty list for each of the missing key points.

![procedure defined ](../images/aiDance/defined.png){:.enlargeImage}

<strong><em>allDefined</em></strong> is a Boolean function that checks whether all the points in a given list of points are defined.  If all the points are defined, it returns true and otherwise, if any of the points is not defined, it returns false.  We will use this helper function to collectively check if certain key points of the body are properly tracked and returned by the Posenet extension.  If the posture of the body is such that perhaps due to poor lighting, messy background, baggy clothes etc. any key point of the body is not trackable by Posenet, an empty list will be returned to indicate the failure to detect this key point.  Note that the logical function <span class="logic"><strong>and</strong></span> is used to check that all points are defined.

![procedure allDefined ](../images/aiDance/allDefined.png){:.enlargeImage}

## Helper functions (3)
<strong><em>distance</em></strong> is a function that computes the Euclidean distance between two points on the Canvas when the two points are defined.   It uses the Pythagorean formula:

![distance formula ](../images/aiDance/distanceFormula.png){:.enlargeImage}

which you may recall from high school Algebra.  If any of the points are not defined, then the distance is set to an arbitrarily large value implying infinite distance between undefined points.

![distance function](../images/aiDance/distance.png){:.enlargeImage}

## Helper functions (4)
<strong><em>drawPoint</em></strong> procedure draws a small circle of 4 pixel radius on the Canvas at the location of a given defined point.  This procedure will help us draw the key points of the body such as the joints.  We use the 4 pixel radius to make the point visible to the eye.

![procedure drawPoint](../images/aiDance/drawPoint.png){:.enlargeImage}

<strong><em>drawLine</em></strong> procedure draws a line segment on the Canvas between two defined points.  We will use this procedure to draw the bones of the skeletal representation of the body.


![procedure drawLine](../images/aiDance/drawLine.png){:.enlargeImage}

## Pose Update
When Posenet extension detects that the body it is tracking has changed its position, it triggers the following <strong>PosenetExtension1.PoseUpdated</strong> event.  This event handler’s code has also been created for you even though the code for each of the procedures that are invoked (<strong><em>drawKeyPoints, drawBody, drawHead</em></strong> etc.) are all empty and will soon be created by you.  Please note that the <span class="control">if then</span> statement in this event handler makes sure that if the user clicked the <strong>CanvasLiveButton</strong> the Camera live feed is broadcast on the Canvas which by default has a solid black background color.

![when Pose Updated](../images/aiDance/whenPosenetExtensionPoseUpdated.png){:.enlargeImage}

## Constructing the Skeleton
Now you will write some of these procedures.

<strong><em>drawKeyPoints</em></strong> procedure:
* set the Canvas <em>PaintColor</em>  to red color (or something else distinctive)
* for each point returned by Posenet in the <strong>PosenetExtension1.KeyPoints</strong>,  draw a point using the helper procedure <strong><em>drawPoint</em></strong> described earlier.

<hint markdown="block" title="Give me a hint">

![procedure drawKeyPoints hint](../images/aiDance/drawKeyPoints1.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

![procedure drawKeyPoints solution](../images/aiDance/drawKeyPoints.png){:.enlargeImage}

</hint>

</hint>

 Try this on your own but if you get stuck you can click the Hint button.

<strong><em>drawBody</em></strong> procedure: 
* set the canvas <em>PaintColor</em>  to yellow color (or something else distinctive different than the one used for key points)
* for each bone in the <strong>PosenetExtension1.Skeleton</strong>, draw a line between the endpoints of the bone, using the helper procedure <strong><em>drawLine</em></strong> described earlier.

<hint markdown="block" title="Give me a hint">

![procedure lower leg bone](../images/aiDance/lowerlegbone.png){:.enlargeImage}

<strong>PosenetExtension1.Skeleton</strong> returns a list of "bones" where each "bone" is a list of two key points that are its endpoints.  For example a lower leg bone in the skeleton would be a list of an ankle and a knee key points.

![procedure drawBody hint](../images/aiDance/drawBody1.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

![procedure drawBody solution](../images/aiDance/drawBody.png){:.enlargeImage}

</hint>

</hint>

 Try this on your own but if you get stuck you can click the Hint button.


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