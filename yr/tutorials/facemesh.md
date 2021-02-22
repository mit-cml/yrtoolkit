---
title: Facemesh Filter Camera
layout: tutorial
howtos: false
yrmedia: false
---

# Challenge

Our friends at YR Media have <a href="https://interactive.yr.media/erase-your-face/" target="_blank"> this excellent article </a> about facial recognition. In this tutorial, we will be using a similar but different technology - facial landmark detection. You are challenged to create an AI-based filter camera. You have two options: the cute cat seen in the GIF below, or a fierce lion.

<img src="../images/facemesh/catDemoAligned.gif" style="width: 75%">

If you haven’t set up your computer and mobile device for App Inventor, go to the “Setup your Computer” tab to set up your system. Otherwise, go directly to the “Facemesh Filter Camera” tab to start the tutorial.

# Setup your computer

<div class="setup noemulator" id="connect_app"></div>

# Facemesh Filter Camera (Level: Intermediate)

## Introduction

Have you taken photos with facial filters? Instagram and Snapchat facial filters have taken the internet by storm, but do you know how these filters work? Would you like to make your own facial filters?

![Funny Photo](../images/facemesh/funPhoto.png){:.enlargeImage}

In this project you will learn how to use a new AI technology called Facemesh; it is a model trained by Google and available to the public. 
<hint markdown="block" title="What is a model?"> 

A model is the mathematical representation of how a computer thinks. It can be considered the computer's “brain”. For example, when you see a face, your brain will quickly make a decision about where the eyes are. Similarly, the Facemesh model takes in a photo of a face and makes a decision about where the eyes are. A human brain’s decision-making process is in the field of cognitive science; a computer’s decision-making process is in the field of Artificial Intelligence. 

Models are quite complicated and involve a lot of math. The level of math you need to understand the processes is at the university level, but do not worry! You do not need to fully understand the entire process to be able to benefit from it in this project!
</hint>
<br>
Feel free to click on any images in the tutorial for a magnified view.

## Facemesh Model

The Facemesh model takes in the image of your face and give you the specific location of many different facial features, such as where your nose, forehead, or mouth is. Using such information, you can create facial filters; these are essentially images that follow specific points on your face.

To access the Facemesh model, you will use the <strong>FaceExtension</strong>, which is an App Inventor tool that acts as a bridge to empower you to use the model in your own mobile app. 
![Bridge](../images/facemesh/bridge.png){:.enlargeImage}
The end result of this project will be your own filter camera! You can use this app to take creative photos and share them with your friends. 

<br />
**Important**: Please note that for this project you cannot use the Emulator to test your app as the Emulator cannot run MIT App Inventor extensions such as the <strong>FaceExtension</strong>.  To make sure that your mobile device has the needed hardware capability for Facemesh, use AI2 Companion on <a href="../aiaFiles/facemesh/Facemesh_TestProject.aia" target="_blank">this .aia </a>test file.

## Graphical User Interface (GUI)

A possible GUI has been created for you in the starter file. Please do not rename the components, as this tutorial will refer to the given names in the instructions.

![GUI of Facemesh](../images/facemesh/2.GUI.png){:.enlargeImage}

The <strong>TakePhotoButton</strong>  allows the user to take a photo. The <strong>SharePhotoButton</strong> allows the user to share the most recently taken photo using any photo-sharing app installed on the device.

The <span class="icon" alt="posenetextension"></span><strong>FaceExtension</strong> is the AI technology to track key points of a face and will give you the information needed to create the facial filter. It requires a web browser to run, so we link it the <span class="icon" alt="webviewer"></span><strong>WebViewer</strong> component. The <span class="icon" alt="webviewer"></span><strong>Webviewer’s</strong> visibility is turned off because we use the <span class="icon" alt="canvas"></span><strong>Canvas</strong> as our viewer. The <span class="icon" alt="canvas"></span><strong>Canvas</strong> component will show the live camera view background as well as the cat/lion facial filter. 

The dimensions of the <span class="icon" alt="webviewer"></span><strong>WebViewer</strong> component,the <span class="icon" alt="canvas"></span><strong>Canvas</strong> component, and the <span class="icon" alt="posenetextension"></span><strong>FaceExtension</strong> must match in order to facilitate face tracking. If you change the default values of the height and width for any one of the three components, make sure that you change it identically for all three of them.

Finally, the <span class="icon" alt="sharing"></span><strong>Sharing</strong> component is a social component that allows you to share the photo file via another app on the phone such as Email and Messenger.

## Facemesh Key Points
The key points of the face tracked by Facemesh are: 
* forehead
* chin
* left cheek
* left eye bottom
* left eye inner corner
* left eye top
* left eyebrow
* left forehead
* left nose
* mouth top
* mouth bottom
* nose bottom
* right cheek
* right eye bottom
* right eye inner corner
* right eye top
* right eyebrow
* right forehead
* right nose. 

![Facemesh Key Points](../images/facemesh/3.Facemesh_key_points.png){:.enlargeImage}

## Facepoint Format

Each key point is returned as a list of two elements representing the x and y-coordinates. 

For example, the key point “forehead” will be a list of 2 elements: 

<strong>[forehead x-coord, forehead y-coord]</strong> 

<br>

![Facemesh Forehead](../images/facemesh/Facemesh_forehead.png){:.enlargeImage}

When Facemesh is unable to track the entirety of a face, it will return an empty list so the filter will not work; make sure the face is within the camera frame!

## Choose a cat or a lion
Let's get right into our project! Right now, the canvas looks like it’s empty. This is because we haven’t set the <em>Picture</em> property for our <strong>leftEar</strong>, <strong>rightEar</strong>, and <strong>whiskers</strong> yet. 

First, decide if you would like to have a cat or a lion filter. Once you’ve decided, check out the Media, which has images for either option. 

<img src="../images/facemesh/4.choose_p1.png" style="width: 65%">


Now, click on “whiskers" in the components bar. You’ll notice that whiskers' properties will show up. If you’ve chosen a lion, set <em>Picture</em> for <strong>whiskers</strong> as LION_whiskers.png. If you’ve chosen a cat, you would want to set <em>Picture</em> for <strong>whiskers</strong> as CAT_whiskers.png. 

![How to choose whiskers' Picture](../images/facemesh/4.choose_p2.png){:.enlargeImage}

## Choose a cat or lion (2)
For example, if you’ve set <em>Picture</em> for <strong>whiskers</strong> as LION_whiskers.png, you should see the following change in the designer.

![Lion Whiskers](../images/facemesh/4.choose_p2.5.png){:.enlargeImage}

Repeat this process for the <strong>leftEar</strong> and <strong>rightEar</strong> images, selecting images for the animal of your choice. 

Lion:
* Set the <em>Picture</em> property for <strong>leftEar</strong> as LION_leftEar.png, and the <em>Picture</em> property for <strong>rightEar</strong> as LION_rightEar.png. 

Cat:
* Set the <em>Picture</em> property for <strong>leftEar</strong> as CAT_leftEar.png, and the <em>Picture</em> property for <strong>rightEar</strong> as CAT_rightEar.png.

## Choose a cat or lion (3)
Once you’ve finished setting <em>Picture</em> for all three of the <strong>leftEar</strong>, <strong>rightEar</strong>, and <strong>whiskers</strong>, your canvas should look something like one of the two following images.

![Whiskers complete](../images/facemesh/4.choose_p3.png){:.enlargeImage}

## Preliminary GUI Code
You are also given some code that makes the buttons work as expected. Check out the code blocks so you can have a general idea what they do.

![photoCount and mostRecentPhoto](../images/facemesh/prelimBlock1and2.png){:.enlargeImage}

Here we have two variables: <var>photoCount</var> simply counts how many photos have been taken, and <var>mostRecentPhoto</var> stores the file name of the most recently taken photo. 

![TakePhotoButton logic](../images/facemesh/prelimBlock3.png){:.enlargeImage}

When you click the <strong>TakePhotoButton</strong>, the <var>mostRecentPhoto</var> file name is updated to be the current image, and the <var>photoCount</var> increases by 1. The first photo you take will be called ‘characterCamera1.jpg’ and the second photo will be called ‘characterCamera2.jpg’, etc. These files are all saved to your device. Depending on your device, you can find the photos wherever files are saved. For example, on a Google Pixel, the photos are saved to the “Files” app. 

The reason we keep track of <var>photoCount</var> and increment by 1 is so that each picture file has a unique name. If we didn’t increment by 1, each photo you take would be writing to the same file over and over again. The reason we keep track of <var>mostRecentPhoto</var> is so that we can share this photo using the <strong>SharePhotoButton</strong>. 

![SharePhotoButton logic](../images/facemesh/prelimBlock4.png){:.enlargeImage}

When you click the <strong>SharePhotoButton</strong>, you can share the most recent photo! You’ll be able to share it using any app installed on your device that shares images, such as Google Drive, Dropbox, etc.

## Helper function
Your first coding task is to fill in this helper function called <span class="procedures">placeImage</span>. 

![Incomplete placeImage procedure](../images/facemesh/placeImageIncomplete.png){:.enlargeImage}

<span class="procedures">placeImage</span> procedure places the center of <span class="variables">img</span>, the <strong>ImageSprite</strong>, on the <span class="variables">facePoint</span>, the key point tracked by Facemesh. 

Click "Next Step" for guidance on how to fill in this procedure and move the three images (<strong>leftEar</strong>, <strong>rightEar</strong>, and <strong>whiskers</strong>) to match points on the face. 

## First, why is this procedure necessary?

By calling <span class="procedures">ImageSprite.MoveTo</span> (x, y), we move the ImageSprite’s <strong>top-left corner</strong> to (x, y). 

However, if we want the <strong>center</strong> of <span class="variables">img</span> to be placed on the <span class="variables">facePoint</span> (x1, y1), we have to do some simple math to get the coordinates of its top-left corner, which we will call (x2, y2).

Note that in this x-y coordinate system of the <strong>Canvas</strong>, (0, 0) is the top left corner. The difference from the normal Cartesian coordinate system is that y increases downwards.

![Coordinate Math](../images/facemesh/6.helper.png){:.enlargeImage}

In the scenario above, you want to place the left ear centered on the left forehead <span class="variables">facePoint</span> (x1, y1) returned by Facemesh.
* To get the adjusted horizontal placement
	* <strong>x2 = x1 - 0.5 * leftEar image width</strong>
* To get the adjusted vertical placement
	* <strong>y2 = y1 - 0.5 * leftEar image height</strong>

Thus when we call <span class="procedures">ImageSprite.MoveTo</span> (x2, y2), the image is centered on (x1, y1), which are the coordinates of the left forehead <span class="variables">facePoint</span>. 
 
## Fill in the procedure

In the <span class="procedures">placeImage</span> procedure, your task is to
* Fill in the <span class="procedures">x</span> argument of the <span class="procedures">ImageSprite.MoveTo</span> block to be <strong>x1 - 0.5 * image width</strong>. This is the result of subtracting half of the ImageSprite’s width from the facePoint’s x-coordinate.
<br>
<br>
* Fill in the <span class="procedures">y</span> argument of the <span class="procedures">ImageSprite.MoveTo</span> block to be <strong>y1 - 0.5 * image height</strong>. This is the result of subtracting half of the ImageSprite’s height from the facePoint’s y-coordinate.

Don’t worry if this is a handful right now. Click on the questions below for more help on how to complete the procedure.
<hint markdown="block" title="How do I get the number 0.5?">
Click on the “Math” option in the Blocks, and you’ll find the number 0. You can drag this number onto the Viewer and double click on the 0 to erase the old value and insert your new value.
![Get 0.5](../images/facemesh/getNum.png){:.enlargeImage}
</hint>
<hint markdown="block" title="How do I get facePoint and img?">
Hover your mouse over “img” for about a second in the placeImage procedure, and the following will pop up. You can then drag “get img”.
![Get img](../images/facemesh/getImg.png){:.enlargeImage}
Hover your mouse over “facePoint” for about a second in the placeImage procedure, and the following will pop up. You can then drag “get facePoint”.
![Get Facepoint](../images/facemesh/getFacepoint.png){:.enlargeImage}
</hint>
<hint markdown="block" title="How do I get (x1, y1) of facePoint?">
As mentioned earlier, each <strong>facePoint</strong> is a list of 2 items. The x-coordinate is at index 1 and the y-coordinate is at index 2. 
* To get x1, use the following block that gets the item at index 1 from the facePoint list. 
![Get facepoint index 1](../images/facemesh/getFacepoint1.png){:.enlargeImage}
* To get y1, use the following block that gets the item at index 2 from the facePoint list. 
![Get facepoint index 2](../images/facemesh/getFacepoint2.png){:.enlargeImage}
</hint>
<hint markdown="block" title="How do I get the height/width of img?">
To get the height/width of the image, you use the following blocks..
![Get imageSprite height](../images/facemesh/placeImageHint1.png){:.enlargeImage} 
![Get imageSprite width](../images/facemesh/placeImageHint2.png){:.enlargeImage}
To access these ImageSprite blocks shown above, click “Any component” in the Blocks menu. This will open the drop-down menu to show the following. Then click “Any ImageSprite” and you’ll find the blocks there.
![Any Component Blocks](../images/facemesh/anyComponent.png){:.enlargeImage} 
</hint>

If you are stuck, feel free to see which blocks are needed 
<hint markdown="block" title="Show Hint">
![placeImage incomplete block](../images/facemesh/placeImageHint.png){:.enlargeImage} 
<hint markdown="block" title="Check my solution">
![placeImage procedure solution](../images/facemesh/placeImageSolution.png){:.enlargeImage}
</hint>
</hint> 

## Face Updated
When the <strong>FaceExtension</strong> detects a face, it triggers the following <span class="control">FaceExtension1.FaceUpdated</span> event. This event handler’s code has also been created for you. The code for the <span class="procedures">resizing</span> procedure is given to you, but the code for the <span class="procedures">moving</span> procedure is incomplete and will soon be created by you.
![Face Updated Block](../images/facemesh/faceUpdatedBlock.png){:.enlargeImage}

## Moving
The way a basic filter works has two parts.
1. moving: when the face moves, the images move along with the face.
2. resizing: when the face becomes bigger or smaller, the images are resized accordingly.

Let's cover the first procedure, <span class="procedures">moving</span>: 
<br>
<img src="../images/facemesh/movingIncomplete.png" style="width: 50%">

To complete the block, you should
* Call <span class="procedures">placeImage</span> to move <strong>leftEar</strong> to the left-side of the forehead (<span class="getters">FaceExtension.LeftForehead</span>). 
<br>
<br>
* Call <span class="procedures">placeImage</span> to move <strong>rightEar</strong> to the right-side of the forehead (<span class="getters">FaceExtension.RightForehead</span>). 
<br>
<br>
* Call <span class="procedures">placeImage</span> to move <strong>whiskers</strong> to the top of the mouth (<span class="getters">FaceExtension.MouthTop</span>). 

Remember, <span class="procedures">placeImage</span> takes in two arguments: 
1. the <strong>ImageSprite</strong> object
2. a face key point detected by <strong>FaceExtension</strong>. 

<hint markdown="block" title="Give me a hint">
![incomplete moving procedure](../images/facemesh/movingHint.png){:.enlargeImage} 

<hint markdown="block" title="Check my solution">
![Moving procedure solution](../images/facemesh/movingProcedureSolution.png){:.enlargeImage}
</hint>
</hint>

## Resizing
Let’s explain the second procedure which is given to you: <span class="procedures">resizing</span>.
<br>
<br>
![resizing solution](../images/facemesh/resizingProcedureSolution.png){:.enlargeImage}

* When we define the width or height of the image, we're defining the width or height of the image <em>bounding box</em> (highlighted in red). 
* All widths and heights are arbitrarily chosen to fit what we might expect; you can change them as you like. 

![Resizing explanation image](../images/facemesh/resizingExplanation.png){:.enlargeImage} 

Whiskers:
* Width is set to the width of the face.
* Height is the distance between the eye and the mouth.

Ears:
* Width is set to the distance between the cheek and the nose.
* These have square-shaped bounding boxes, so we can set the width and height to be the same

## Test your App
Now you will use the AI Companion to check that your app works. Please note that an Emulator cannot be used in the testing as it does not support MIT App Inventor Extensions like FaceExtension.

Check that your app can track a face and have the ears and whiskers correctly positioned on the face. For best results with FaceExtension, make sure that the face is well lit and directly facing the camera.

## Take a photo and send it to your friend!
Now, you can make a pose with your new cat or lion makeover, and click the “Take Photo” button. Next, click the “Share Most Recent Image” to share the photo with your friends! 

In the demo below, a user takes a photo, clicks “Share the Most Recent Image”, and uses Google Hangouts to share the photo with her friend. The apps available will vary depending on what you have installed on your device.

<img src="../images/facemesh/sharingDemo.gif" style="width: 75%">

Good job! You’ve completed this character camera app! You’ve built an AI-based app that can track the movements of a face.

# Expand your app

## Choose your own character!
You can 
1. get your own images online
2. go to the website <a href="https://remove.bg/" target="_blank">remove.bg</a> to get rid of the background
3. make your own <span class="icon" alt="imagesprite"></span><strong>ImageSprites</strong>. 
4. update height and width sizing as you see fit
5. place images on the corresponding face points as you see fit

Go wild and let the creative juices flow! 

Here are some ideas to get you started:
![Character Camera Dog](../images/facemesh/characterCameraMORE.png){:.enlargeImage} 

## Allow filter switching
You can add two or more buttons to switch between different filters. 

You would need to add some code to change the <em>Picture</em> property of the <span class="icon" alt="imagesprite"></span><strong>ImageSprites</strong> when the button is clicked.

## Using FaceExtension AllPoints
Actually, there are 486 points available for you to use via <span class='getters'>FaceExtension.AllPoints</span>

Scroll down to the very bottom of <a href="https://github.com/tensorflow/tfjs-models/tree/master/facemesh" target="_blank">this Facemesh webpage</a> to see a Facemesh map of all the points you can access. You can click on it to zoom in.

For example, if you want a specific point on your lip, find the number on the map. In this case, the number is 14 so the <span class="variables">facePoint</span> can be accessed via this block: 
![Point 14](../images/facemesh/point14.png){:.enlargeImage}
Now you can use this block as the <span class="variables">facePoint</span> argument for <span class="procedures">placeImage</span>.

Here is an important image illustrating how to read the Facemesh map: <strong>the right side of the map is actually the left side of the face, and vice versa.</strong> Please click on the image to see a magnified view.
![How to read the Facemesh map](../images/facemesh/faceMap_explain.png){:.enlargeImage} 

* The point for your left cheek is 454, <em>not</em> 234. 
* The point for your right cheek is 234, <em>not</em> 454.

## Adding Interactivity
Using various points, you can identify movement in the face by tracking the difference between two facePoints.

Here is a demo of an app where the emoji matches your facial expression. 

<img src="../images/facemesh/emojiDemo.gif" style="width: 75%">
<br>
To get this extra interactivity in your app, you need to:
* Have two <strong>Imagesprites</strong>, one for mouth open and one for mouth closed
* Track the difference between the y-coordinates of your lips
* change the <em>Visible</em> property of the different emoji <strong>Imagesprites</strong> accordingly.

# About Youth Mobile Power 
A lot of us spend all day on our phones, hooked on our favorite apps. We keep typing and swiping, even when we know the risks phones can pose to our attention, privacy, and even our safety.  But the computers in our pockets also create untapped opportunities for young people to learn, connect and transform our communities.

That’s why MIT and YR Media teamed up to launch the Youth Mobile Power series. YR teens produce stories highlighting how young people use their phones in surprising and powerful ways. Meanwhile, the team at MIT is continually enhancing MIT App Inventor to make it possible for users like you to create apps like the ones featured in YR’s reporting.

Essentially: get inspired by the story, get busy making your own app!
 <img src="../images/logos/NSF_4-Color_bitmap_Logo.png" width="75"><img src="../images/logos/MITAppInvlogo1.jpg" width="75"><img src="../images/logos/LOGO_YR_PNG_TRANS.png" width="75">
 
 The YR + MIT collaboration is supported in part by the National Science Foundation. This material is based upon work supported by the National Science Foundation under Grant No. (1906895, 1906636).   Any opinions, findings and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

 Check out more apps and interactive news content created by YR <a href="https://yr.media/category/interactive/" target="_blank">here</a>.
