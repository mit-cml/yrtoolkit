---
title: PICaboo
layout: tutorial
howtos: false
yrmedia: false
---

# Challenge

How can a machine learn about the world? In some ways computers are like very young babies, always soaking up new examples and trying to put what they sense into different buckets — dog, cat, familiar face, stranger. 

In this two-part tutorial, you will learn about a type of artificial intelligence (AI) called machine learning (ML), exploring an example called “image classification” — a way for computers to put what they see into various buckets. You will create an app that sees a human gesture that you make and intelligently responds!

If you haven’t set up your computer and mobile device for App Inventor, go to the “Setup Your Computer” tab below. Otherwise, go directly to the “PICaboo” tab to start the tutorial.

# Setup Your Computer

<div class="setup noemulator" id="connect_app"></div>

# PICaboo (Level: Intermediate)

## Introduction

In this tutorial, you will make a "Peekaboo" game with your very own Personal Image Classification (PIC) model. A baby shown in the app smiles when you show your face and cries when you hide your face.

![PICaboo show-hide face](../images/PICaboo/ShowHideFace.png){:.enlargeImage}


<hint markdown="block" title="What is the Game of Peekaboo?">
Very young babies do not quite understand how to make sense of the visual world around them. One challenge? They lack an understanding that objects continue to exist even when not visible. This concept is described by the famous child psychologist Jean Piaget as “object permanence.” Parents often play a game with their very young babies in the US, called Peekaboo, where the parent hides her face (with her hands or a pillow etc.) and “disappears” to the baby's surprise.  Then, she suddenly shows her face, saying, “Peekaboo, I see you!” –much to the delight of the baby, who is astonished to see the parent suddenly appear out of “nowhere.”  Here is a <a href="https://www.youtube.com/watch?v=Z37Ru-GRtks" target="_blank"> video</a> you can watch about this game. 

A machine <em>learns</em> to make sense of visual data somewhat like a baby learns visual cues. Both babies and computers need many examples (large sets of training data).  Also, they need the categories for the examples to be easily distinguishable (visually distinct data classes).


</hint>

<br />
**Important**: Please note that you cannot use the Emulator to test your app for this project.  The Emulator cannot run MIT App Inventor extensions such as the <span class="icon" alt="pic"></span><strong>PersonalImageClassifier</strong> (PIC) extension.  To make sure that your mobile device has the needed hardware capability for PIC, use the MIT AI2 Companion on this<a href="../aiaFiles/PICaboo/LookTest.aia" target="_blank"> LookTest.aia </a>test file.  If the status at the top reads "Status: Ready!" then the <span class="icon" alt="pic"></span><strong>PersonalImageClassifier</strong> extension will work. If not, you won't be able to run apps made with this extension. If it works, try classifying some objects by pointing the device at an object and pressing the Classify button.

## PICaboo Part 1: Training the Model

First, you need to train an image classification model.  This training happens on the App Inventor —<a href="https://classifier.appinventor.mit.edu/" target="_blank">Personal Image Classifier</a> page.  Follow the instructions on the <a href="../images/PICaboo/PICaboo_Part1.pdf" target="_blank">PICaboo Part 1 pdf document</a>.  At the end of this process, export the model.mdl file to your computer.  In the next part of the tutorial, you will upload this file to App Inventor.

![PIC](../images/PICaboo/TrainingML.png){:.enlargeImage}


## PICaboo Part 2: Designing and Coding the App

An example of a Graphical User Interface (GUI) is in the starter file.  (Change the properties of the components, if you wish, to get the look and feel you want.  However, please do not rename the components, as this tutorial will refer to the given names in the instructions.)

![GUI of PICaboo](../images/PICaboo/GUICorrespondence.png){:.enlargeImage}



## Uploading Your Trained Model

Click on the non-visible component <span class="icon" alt="pic"></span><strong>PersonalImageClassifier1</strong>. This component will classify your poses based on your trained model.

Upload the model you trained in Part 1 by clicking on the “Model” property and selecting the model on your computer's hard drive.

![Upload Model](../images/PICaboo/UploadModel.png){:.enlargeImage}


## Sequence of Events

The following graphic shows the sequence of events in PICaboo. Fill in the missing blocks with the letter corresponding to the correct event.

![Sequence of Events](../images/PICaboo/sequenceOfEvents.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">
    Left to right boxes: A, B, C.
</hint>
<br />

## Reviewing the Given Code

Now switch to the Blocks Editor to start coding the behavior for the app.  First, look at the code blocks already there. These blocks set up the <span class="icon" alt="pic"></span><strong>PersonalImageClassifier</strong> when the app first starts.

In case the <span class="icon" alt="pic"></span><strong>PersonalImageClassifier</strong> returns an error, the <span class="control">when PersonalImageClassifier1.Error</span> event block displays the error in the <strong>StatusLabel</strong>.

![PIC error](../images/PICaboo/whenPIC1Error.png){:.enlargeImage}

The <span class="control">when PersonalImageClassifer.ClassifierReady</span> block is called when the classifier is ready to start classifying images. <strong>StartButton</strong> and <strong>ToggleCameraButton</strong> are enabled. “Ready” is displayed in the <strong>StatusLabel</strong>. <strong>BarLabel1</strong> and <strong>BarLabel2</strong> are assigned the names of the model labels ("Me" and "NotMe"). These are the classes you trained in the model.

![PIC ready](../images/PICaboo/whenPIC1ClassifierReady.png){:.enlargeImage}

When <strong>ToggleCameraButton</strong> is pressed, the camera switches from front to back or vice versa. 

![Toggle Camera](../images/PICaboo/whenToggleCameraButtonClick.png){:.enlargeImage}

<strong>StartButton</strong> stops or starts the <span class="icon" alt="pic"></span><strong>PersonalImageClassifier</strong> classification process. Button text changes from “Start” to “Stop” or vice versa.

![Start button](../images/PICaboo/whenStartButtonClick.png){:.enlargeImage}

## Image Classification Result (Part 1)

Now we finally get to the block that provides the important results from the classification model. Before coding, let’s see how this <span class="variables">result</span> data from the component <span class="icon" alt="pic"></span><strong>PersonelImageClassifier</strong> is received and used.

When the classifier produces a classification for what it sees, the <span class="control">when PersonalImageClassifier1.GotClassification</span> event handler block is called. In this tutorial, your main task is to complete the code in this block.


![Got Classification](../images/PICaboo/whenPIC1GotClassification_empty.png){:.enlargeImage}

The <span class="variables">result</span> lists the classifications in the form of a data structure called a "dictionary".  In computer science a <em>dictionary</em> stores key/value pairs –much like a real-world dictionary stores words and their definitions. But unlike a real-world dictionary, the dictionary data structure can hold arbitrary keys associated with arbitrary values. They can be pretty much anything: letters, words, multi-word strings, numbers, as well as combinations of all these.  Below is an example:

![Phone Book](../images/PICaboo/phoneBookDictionary.png){:.enlargeImage}

In the above example of key/value pairs, the key is “Name” and the value is “Tel."  This dictionary is an ordinary phonebook. 

## Image Classification Result (Part 2)
The <span class="variables">result</span> returned by <span class="icon" alt="pic"></span><strong>PersonelImageClassifier</strong> lists the names (key) of two classes (“Me” and “NotMe”) with their confidence levels (value). The code blocks below represent this data structure. (Note: the dictionary lists key/value pairs in the result, in the order of highest to lowest confidence levels.)

![Result](../images/PICaboo/dictinonaryMeNotMe.png){:.enlargeImage}

In this example, the <span class="variables">result</span> consists of the class “Me” with a high confidence level of 0.925 (that is 92.5%) and the class “NotMe” with a low confidence level of 0.075 (that is 7.5%). These confidence levels were computed by the model you created during the training phase. At this instance, the baby in the PICaboo app would be smiling as the computer is confident that it is seeing your face.

![Smiling Baby](../images/PICaboo/smilingbaby.png){:.enlargeImage}


## Image Classification Result (Part 3)

To find out the value of a particular key from the <span class="variables">result</span>, use the <span class="dictionary">get value for key</span> block. In the example below, if you searched for the key “Me” in the given dictionary, you would get 0.925 –its associated confidence level (value). If no key matched, you would get 0.

![Get Value](../images/PICaboo/DoItgetvalue.png){:.enlargeImage}

## Got Classification

The <span class="control">when PersonalImageClassifier1.GotClassification</span> event handler block starts by initializing two local variables. (Local variables can only be used inside the code block where they are defined.)

* <span class="variables">MeConfidence</span>: is the confidence level for the “Me” class (showing face).
* <span class="variables">NotMeConfidence</span>: is the confidence level for the “NotMe” class (hiding face).


![Local Variables](../images/PICaboo/whenPIC1GotClassification_empty2.png){:.enlargeImage}

You will see soon how the code uses these variables.

## Initializing the Variables

Initialize the variables <span class="variables">MeConfidence</span> and <span class="variables">NotMeConfidence</span> to the confidence levels associated with each class, "Me" and "NotMe."  (Remember that these confidence levels are the values in the dictionary data structure returned by <span class="variables">result</span>.)

<hint markdown="block" title="Give me a hint">

Initialize the local variables as shown.  If you mouse over the parameter <span class="variables">result</span>, you will see the needed block.  Be sure to replace the default "not found" Text block with a “0” from Math blocks.  This makes sure that a confidence level of 0% is assigned in case the classifier has not yet returned a result.

![Initialization hint](../images/PICaboo/initializations.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

![Initialization solution](../images/PICaboo/whenPIC1GotClassification_part1.png){:.enlargeImage}

</hint>

</hint>
<br />

## Sequence of Events Recap

When the classifier gets its classification, you can:


* Set the <strong>Percentage1</strong> text and <strong>BarGraph1</strong> width percent correctly.
* Set the <strong>Percentage2</strong> text and <strong>BarGraph2</strong> width percent correctly.
* If the classification with a higher confidence is “Me” (meaning that the machine is highly confident it is seeing your face) then show the happy baby image and hide the sad baby image and make the Screen1 background a light green color.
* Otherwise, show the sad baby image and hide the happy baby image and make the Screen1 background a light pink color.


![Show Hide face](../images/PICaboo/ShowHideFace.png){:.enlargeImage}

## Setting Percentages and Bar Graphs

First, set the <strong>Percentage1</strong> text to the confidence level of the “Me” class.  This value is a decimal between 0 and 1, so you will need to convert it to a percentage (multiplying by 100) and add the “%” symbol.  For example if the confidence level was 0.75, this proper percentage would be 75 %.

Secondly, note that <strong> BarGraph1</strong> is a colored label showing the confidence level of the “Me” class by its width.  Set its <var>WidthPercent</var> accordingly.  You can duplicate part of earlier code you wrote.

Finally, do a similar thing for <strong>Percentage2</strong> and <strong>BarGraph2</strong>.  Be sure to use the <span class="variables">NotMeConfidence</span> local variable for these cases.


<hint markdown="block" title="Give me a hint">


![Percentage hint](../images/PICaboo/setPercentage1.png){:.enlargeImage}
![Bar Graph hint](../images/PICaboo/setBarGraph1.png){:.enlargeImage}

<hint markdown="block" title="Check my solution">

Snap code in as shown.

![Bar Graph solution](../images/PICaboo/snapCodeIn.png){:.enlargeImage}

</hint>

</hint>
<br />

## Forming the Conditional Statement

Now build the <span class="control">if-then-else</span> conditional block, which tests whether the class with a higher level of confidence is the “Me” class.  This means that the computer recognizes you showing your face with a higher level of confidence.


<hint markdown="block" title="Give me a hint">


![If then else hint](../images/PICaboo/ifthenelse1.png){:.enlargeImage}


<hint markdown="block" title="Check my solution">

![If then else solution](../images/PICaboo/ifthenelse2.png){:.enlargeImage}

</hint>

</hint>
<br />

## Displaying Happy Baby and Sad Baby

First, build the code blocks for the <strong>then</strong> part of the <span class="control">if-then-else</span> block set:

* Set the Screen1 background color to light green.  (Use the light green color block already in the template.)
* Show the happy baby image.
* Hide the sad baby image.
    
Now, build code blocks for the <strong>else</strong> part of the  <span class="control">if-then-else</span> block and snap these code blocks where they belong. (Use the light pink color block already in the template.)

<hint markdown="block" title="Give me a hint">


![then hint](../images/PICaboo/thenBlock.png){:.enlargeImage}


<hint markdown="block" title="Check my solution">

![If then else full solution](../images/PICaboo/withelseBlock.png){:.enlargeImage}

</hint>

</hint>
<br />

## Finalizing the Code

When you are done, your entire code should look something like this:

![Final code](../images/PICaboo/whenPIC1GotClassification.png){:.enlargeImage}


## Testing your App

![AI Companion](../images/PICaboo/AICompanion.png){:.enlargeImage}

Can you play Peekaboo with the baby on the screen? Connect to the AI Companion, and try the app out. Remember to open your fingers a crack when covering your face to see what you are doing. Does the baby smile when you show your face and cry when you hide your face? What happens to the confidence levels? What happens when you wave your hand up and down in front of your face? Then, what happens to the confidence levels?

Congratulations, you are done! You have created an AI app that uses machine learning to classify images and intelligently respond to your actions.



# Expand Your App

Here are some ideas for expanding your project. Explore them or come up with your own!

* Retrain your model so that in addition to recognizing you showing your face (“Me”) and hiding your face (“NotMe”), it recognizes a third facial posture, such as you making a silly face (“Silly”).  Make sure this last class is visually distinct from the previous two classes (for instance, a bright color or another distinctive feature might improve the model.)

    * Save a copy of your original code for the PICaboo app, then add your new code to this copy. 
    * Upload a new and expanded machine learning model. Then, change the code so that there are now three bar graphs for the confidence levels for three classes.
    * Change the code to manipulate three images of the baby to respond to each case (happy baby, sad baby, and laughing baby for the “silly” face). 

![Silly Face](../images/PICaboo/SillyFace.png){:.enlargeImage}

* An ambitious class project would be to make an app that automatically takes classroom attendance using Personal Image Classifier (PIC).  
    * In the PIC trainer, create a classification for each student in the classroom (“Eva,” “Philip,” “Andrea,” etc.) and for each classification (student), take 25 images of that student from various angles. 
    ![Attendance PIC](../images/PICaboo/AttendancePIC.png){:.enlargeImage}
    * Train the classifier on the images. (The classifier may take extra time to process the large number of images.) 
    * Then test your model to see if it correctly identifies randomly selected students.  
    * If the model is accurate and you build a good app, then the teacher would only need to have each student pass by a mobile device running this app at the start of class. When the student is recognized with a high level of confidence, the student is marked as present. 
    * It may be wise to make a simplified version of this app first for a small class of, say, five so you can understand how the code would change. 
    * In the process you may discover some inherent limitations of the PIC program.  Note these down and let the MIT team know.



* What amazing ideas do you have?

# About Youth Mobile Power 
A lot of us spend all day on our phones, hooked on our favorite apps. We keep typing and swiping, even when we know the risks phones can pose to our attention, privacy, and even our safety.  But the computers in our pockets also create untapped opportunities for young people to learn, connect and transform our communities.

That’s why MIT and YR Media teamed up to launch the Youth Mobile Power series. YR teens produce stories highlighting how young people use their phones in surprising and powerful ways. Meanwhile, the team at MIT is continually enhancing MIT App Inventor to make it possible for users like you to create apps like the ones featured in YR’s reporting.

Essentially: Get inspired by the story, get busy making your own app!
 <img src="../images/logos/NSF_4-Color_bitmap_Logo.png" width="75"><img src="../images/logos/MITAppInvlogo1.jpg" width="75"><img src="../images/logos/LOGO_YR_PNG_TRANS.png" width="75">
 
 The YR + MIT collaboration is supported in part by the National Science Foundation. This material is based upon work supported by the National Science Foundation under Grant No. (1906895, 1906636).   Any opinions, findings and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

 Check out more apps and interactive news content created by YR <a href="https://yr.media/category/interactive/" target="_blank">here</a>.