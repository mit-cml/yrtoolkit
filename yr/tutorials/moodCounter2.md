---
title: Mood Counter
layout: tutorial
howtos: true
yrmedia: true
---

# The Challenge

Last year, NPR's Morning Edition ran [a story](https://youthradio.org/journalism/only-smiling-on-the-outside-teens-hide-depression/) about an app called Mood Ring, created by our friends at YR  Media, using App Inventor. Mood Ring invites teens to track how they’re feeling using emojis, and to reach out to trusted others for support. It's “a playful way to address something serious,” in the words of a teen who made it.

Now it’s your turn to work with App Inventor to design and build your own version of an app that uses emojis to promote positive emotional health. We can’t wait to see what you come up with!

To hear more from YR Media about mobile apps and mental health, check out their latest story on [artificially intelligent therapy bots](https://youthradio.org/journalism/tech/could-your-next-therapist-be-your-phone/). It's part of their series, Youth Mobile Power.

# Connect Your App

<div class="setup" id="connect_app"></div>

# Mood Counter Tutorial (Level: Beginner)

## 1. Introduction

Let's make an app

![some_text](../images/mood_counter/moodTrackApp.png){:.enlargeImage}

Try clicking the different emojis. What happens?

Let's change the app so that when you tap the angry emoji, it increases the anger count.

## 2. Add click handler

Click on the Blocks button on the right side top bar.

![some_text](../images/mood_counter/blocksBtn.png){:.enlargeImage}

## 3. Add <span class="setters">set happyLabel.text</span>

Click on the <span class='icon' alt='label'></span> happyLabel drawer, then drag the <span class="setters">set happyLabel.Text to</span> block to the <span class="control">when happyButton.Click</span> block.

![](../images/mood_counter/happySetText.gif){:.enlargeImage}

## 4. Add <span class="math">__ + __</span>

Click on the <span class='icon' alt='math'></span> Math drawer. Click and drag the <span class="math">__ + __</span> block and add it to the <span class="setters">set happyLabel.Text to</span> block.

![](../images/mood_counter/happyPlus.gif){:.enlargeImage}

## 5. Add <span class="getters">happyLabel.Text</span>

Click on the <span class='icon' alt='label'></span> happyLabel drawer. Click and drag the <span class="getters">happyLabel.Text</span> block and add it to the first socket of the <span class="math">__ + __</span> block. 

![](../images/mood_counter/happyText.gif){:.enlargeImage}

## 6. Add <span class="math">1</span>

Click on the <span class='icon' alt='math'></span> Math drawer. Click and drag the <span class="math">0</span> block and add it to the second socket in the <span class="math">__ + __</span> block. Change the "0" to a "1".

![](../images/mood_counter/happyNum.gif){:.enlargeImage}

## 7. Duplicate blocks

Try clicking the different emojis. What happens now?

Let's now make the angry emoji work too. Right click (or ctrl/control click) on the <span class="control">when happyButton.Click</span> block, then click Duplicate.

![](../images/mood_counter/duplicatehappyClick.gif){:.enlargeImage}

## 8. Change "happyButton" to "angryButton"

Click on the "happyButton" drop down on the  <span class="control">when happyButton.Click</span> block and choose "angryButton"

![](../images/mood_counter/angryClickSelect.gif){:.enlargeImage}

## 9. Repeat for happyLabel

Change the dropdown of <span class="setters">set happyLabel.Text to</span> to <span class="setters">set angryLabel.Text to</span>. And change <span class="getters">happyLabel.Text</span> to <span class="getters">angryLabel.Text</span>

![](../images/mood_counter/angryLabel.gif){:.enlargeImage}

## 10. Repeat for sadButton

Repeat steps 7, 8, and 9 for the sadButton.

![](../images/mood_counter/sadButton.gif){:.enlargeImage}

## 11. Test it out!

Try it out on your  device. Tap on the different emojis. Do the numbers increment when you tap on the buttons?

Change up this basic tutorial by adding more features using the ideas in the next section.

# Expand your app

**Show an inspiring quote based on how the user feels.**

Set the [label component's text](javascript:goToHowToTutorial(0)) to a random message after the user chooses their mood.

**Play a song or display an image to cheer up a friend.**

Use the [player component](javascript:goToHowToTutorial(1)) to play a song after the user selects an emotion or the [image component](javascript:goToHowToTutorial(2)) to show a picture.
Personalize the app with the user's name.

**Personalize the app with the user’s name.**

Use the [text input component](javascript:goToHowToTutorial(3)) to get the user’s name and display it in the app.

**Text a friend when the user is feeling sad.**

Use the [texting component](javascript:goToHowToTutorial(4)) to send a message when the sad button is clicked.

**Let users review how they felt in the past.**

You can use the [file component](javascript:goToHowToTutorial(5)) to store what happens each time the user hits the button.
