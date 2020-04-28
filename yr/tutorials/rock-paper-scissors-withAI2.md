---
title: Rock-Paper-Scissors with AI
layout: tutorial
---

# The Challenge

These days Artificial Intelligence and Machine Learning are all the
craze, but have you ever wondered how in the world is it really
possible to teach a machine to learn something, anything really, and
become, well, artificially intelligent?  In this project, using the
context of one of the simplest children's games, Rock-Paper-Scissors,
you are challenged to create a program that allows the machine to
observe and learn from its user's game choices and quickly become
intelligent enough to repeatedly beat the user at the game.  Hard to
believe?  Get ready to surprise yourself.

Click "Connect Your App" below to start building your app or go
directly to the Rock-Paper-Scissors with AI tutorial below.

# Connect Your App

<howto id="connect_app"></howto>

# Rock-Paper-Scissors with AI (Level: Advanced)

## Introduction

In this project you will catch a glimpse into how is it possible to
program a machine to learn from its experiences and make "informed"
decisions exhibiting intelligence.  You will implement a
Rock-Paper-Scissors game on your mobile device in which a user can
play against the machine.  The machine will keep track of the choices
of the user and if a pattern emerges in the sequence of choices made
by the user, the machine will exploit this knowledge to beat the user.

<hint markdown="block" title="Click here for the rules of the game">

It is a two-person game in which each player simultaneously reveal
their choices using hand gestures as shown below.  The winner of a
round is determined by the following rules:

* Rock beats Scissors
* Scissors beat Paper
* Paper beats Rock

For more information, you can view the [Wikipedia entry for the
game](https://en.wikipedia.org/wiki/Rock_paper_scissors).

</hint>

![](../images/rps_withAI/RPS.png){:.enlargeImage}

You can click on the images to enlarge them and click and drag the top frame of the enlarged images to move them around as needed.

Image Attribution:  Free Icons Library<br>
[Rock Paper Scissors Icon #21623](https://icon-library.net/icon/rock-paper-scissors-icon-8.html)

## The User Interface

Here is what the User Interface (UI) looks like.  In the top row the scores are displayed.  Underneath that there are three buttons that let the user pick a choice: Rock, Paper or Scissors.  Next is the part where the user's and the computer's choices are displayed in words and with images. Then there is a label declaring the winner of a round of the game.  The last part displays what is called a "Markov Transition Matrix", named after the Russian mathematician [Andrey Markov](https://en.wikipedia.org/wiki/Andrey_Markov), best known for his seminal work on probabilistic processes.  You do not need to worry about this matrix now.  Later in the tutorial you will learn the simple idea behind this 3X3 set of numbers.  Note that coloring of the rows of the Matrix match the colors of the buttons for Rock, Paper and Scissors.

![](../images/rps_withAI/RPS_GUI.png)

## The Components Hierarchy

The UI has already been created for you.  You can see below the UI components and their corresponding place in the component hierarchy.  Study this diagram and the naming scheme so that you will be able to follow the rest of the tutorial where you will give functionality to the components.

![](../images/rps_withAI/GUICorrespondence.png){:.enlargeImage}

## Machine Learning using a Markov Process

Here is the basic idea behind how you will endow the machine an ability to learn from experience. The machine will keep track of the sequence choices that the user makes and record the frequency of consecutive user choices.  The matrix that holds this information is called a "Markov Transition Matrix".

![](../images/rps_withAI/Markov_prev&next.png)

On the left side, the rows of the matrix denote the user's previous choice and, at the top, the columns denote the user's follow up choice.  The cells contain information about how frequently a particular sequence of consecutive choices were made. For example, in the Matrix shown above you can see that 7 times the user followed her choice of Rock with another choice of Rock, 13 times she followed her choice of Rock with Paper, 11 times she followed her choice of Paper with Scissors, 3 times she followed her choice of Scissors with another choice of Scissors, etc. 

## Machine Learning using a Markov Process

The diagram below with a highlighted second row (in red) shows the count of how many times the user's choice of Paper was followed with a choice of Rock, Paper or Scissors (2, 4, 11 respectively.)

![](../images/rps_withAI/Markov_rows.png)

## Machine Learning using a Markov Process

The diagram below with a highlighted second column (in green) shows the count of how many times the user's choice of Paper was preceded with a choice of Rock, Paper or Scissors (13, 4, 8 respectively.)

![](../images/rps_withAI/Markov_colmns.png)

## Machine Learning using a Markov Process

The orange cell in the middle of the Matrix below shows the intersection of the second row with the second column and the number 4 in the orange cell is the count of the number of times the user followed her choice of Paper with another Paper.

![](../images/rps_withAI/Markov_row&colmn.png)

## Building and Incrementing the Markov Matrix

At the start of a game Markov Matrix's entries are all zeroes.

![](../images/rps_withAI/Markov1.png)

Suppose the user played Rock first and then followed this with Paper (i.e. the consecutive choice sequence was Rock, Paper).  Then, the cell in the first row (Rock) and second column (Paper) needs to be incremented as shown from a zero to a one.

![](../images/rps_withAI/Markov2.png)

Suppose then the user followed her last choice of Paper with Scissors (i.e. the sequence of choices was Rock, Paper, Scissors) then the cell in the second row (Paper) and third column (Scissors) needs to be incremented as shown.

![](../images/rps_withAI/Markov3.png)

You can think of the Matrix as a record of the game choices of the user studied in pairs:

* User choices in order:<br /> Rock, Paper, Scissors
* First group the first two consecutive choices:<br /> (**Rock, Paper**), Scissors
* Then group the second two consecutive choices:<br /> Rock, (**Paper, Scissors**)

## Practice with Markov Matrix

Suppose the game continues and at one instant you get the following matrix that keeps track of consecutive user moves.

![](../images/rps_withAI/Markov4.png)

Say, then, the user followed her last move of Paper with another Paper.  How would you increment the appropriate entry of this matrix?

<hint markdown="block" title="Check your solution">

You would increment the cell in the second row (Paper) and second column (Paper) from a 4 to a 5.

![](../images/rps_withAI/Markov5.png)

As you can see the Markov Matrix simply is a record of the frequency of the user's consecutive choices.

</hint>

## Practice with Markov Matrix

Suppose the game just started and the Matrix is as shown:

![](../images/rps_withAI/Markov1.png)

Suppose then the following sequence of choices is made by the user:

Rock, Scissors, Scissors, Paper

What would the Markov Matrix look like at that point in the game?

<hint markdown="block" title="Give me a hint">

Hint:

* **Rock, Scissors**, Scissors, Paper
* Rock, **Scissors, Scissors**, Paper
* Rock, Scissors, **Scissors, Paper**

<hint markdown="block" title="Check your solution">

* First increment the cell where Rock, Scissors meet, i.e. first row and third column.
* Then increment the cell where Scissors, Scissors meet, i.e. third row and third column.
* Lastly increment the cell where Scissors, Paper meet, i.e. third row and second column.

And you get:

![](../images/rps_withAI/Markov6.png)

</hint>

</hint>

## Smart Choice Using the Markov Matrix

Now that you understand how the app will keep track of the user's choices, consider the following scheme on how the app can "intelligently" decide its own next choice.  Say this is the Markov Matrix at some point in the game:

![](../images/rps_withAI/Markov4.png)

and the user's last choice was Scissors.  Then according to "historical" record, the machine knows that user followed Scissors 15 times with Rock, 8 times with Paper and only 3 times with Scissors.  So, it is most likely that the user will follow her last move of Scissors with Rock.  So, what is the smart thing for the machine to do?  To beat the most probable choice of Rock by the user, the machine will need to choose ...  \***Paper</strong>**\*.  Aha!

These examples should give you a sense of how the machine tracks consecutive user choices and, based on existing patterns, makes "informed" decisions about how most likely it may be able to beat the user.

## Blocks Editor

Now you will give functionality to the User Interface (UI) and endow the machine with intelligence. Switch to the Blocks editor.

![](../images/howTos/goToBlocks.png){:.enlargeImage}

## Initializations

1. Create a variable called <var>choices</var> which will eventually contain the list of possible choices (<var>ROCK, PAPER, SCISSORS</var>) and for now initialize it to an empty list.
2. Create a variable called <var>beatingChoices</var> which will eventually contain the list of possible beating choices (<var>PAPER, SCISSORS, ROCK</var>) and for now initialize it to an empty list.  The order given is so because: Paper beats Rock, Scissors beats Paper and Rock beats Scissors.
   ![](../images/rps_withAI/choicesVSbeatingChoices.png)
3. Create variables <var>ROCK</var>, <var>PAPER</var> and <var>SCISSORS</var> and initialize them to the numbers 1,2 and 3 respectively.  Assigning numbers to the choices will allow you to easily navigate indices of various lists and update the Markov Matrix at the end of each round of the game.

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/initializations1.png){:.enlargeImage}

</hint>

## Initializations

4. Create a variable called <var>choicesInWords</var> and initialize it to hold a list containing the words "ROCK", "PAPER" and "SCISSORS".  Please note that "ROCK" is a string of characters whereas <var>ROCK</var> is a variable that holds the numerical value 1.  Similar for other choices.
5. Create a variable called <var>buttonChoices</var> and initialize it to hold a list of the button components that the user can press: <strong>RockButton</strong>, <strong>PaperButton</strong> and <strong>ScissorsButton</strong>.  (Review the names of the UI elements if you need to remind yourself these names.)  Note that these are not the words "RockButton", etc. but rather the actual components <strong>RockButton</strong>, etc.
   ![](../images/rps_withAI/RockButtonBlock.png)

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/initializations2.png){:.enlargeImage}

</hint>

## Initializations

6. Create a variable called <var>imageChoices</var> and initialize it to hold a list of the names of the PNG images stored as Media files: "rock.png", "paper.png", "scissors.png".
7. Create a variable called <var>MarkovTransitionMatrix</var> and initialize it to an empty list.  You will later create a procedure to make this variable hold a list of lists.
8. Create two variables called <var>lastUserChoice</var> and <var>currentUserChoice</var> which will keep track of the last two consecutive choices made by the user and initialize them to zero.
9. Create a variable called <var>currentComputerChoice</var> which will keep track of the current choice made by the computer and initialize it to zero.<

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/initializations3.png){:.enlargeImage}

</hint>

## Matrix Procedures

Create two procedures *without* return values that you will use for the Markov Matrix:

1, For creating a procedure *without* a return value choose the one on the left.
   ![](../images/rps_withAI/procedureTypes2.png){:.enlargeImage}
2. Create a procedure called <strong><var>initializeMarkovMatrix</var></strong> and have it set the variable <var>MarkovTransitionMatrix</var> to a list of three lists, each containing three zeros as elements.  This will be equivalent to initializing the 3X3 Markov Matrix's entries to zeros.
   ![](../images/rps_withAI/Markov1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_initializeMarkovMatrix.png){:.enlargeImage}

</hint>

3. Create a procedure called <strong><var>printMatrix</var></strong>, which will write each row of the <var>MarkovTransitionMatrix</var> to labels <strong>MatrixRow1</strong>, <strong>MatrixRow2</strong>, <strong>MatrixRow3</strong> respectively.
   ![](../images/rps_withAI/matrixCorrespondence.png){:.enlargeImage}

Note that when a list is printed to a label, MIt App Inventor automatically put the open/close parenthesis, i.e., "(" and ")".

<hint markdown="block" title="Give me a hint">

![](../images/rps_withAI/procedure_printMatrix1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_printMatrix.png){:.enlargeImage}

</hint>

</hint>

## Screen1 Initialization

When Screen1 initializes:

1. call the procedure **<var>initializeMarkovMatrix</var>**;
2. set the variable <var>choices</var> to a list containing the variables <var>ROCK</var>, <var>PAPER</var> and <var>SCISSORS</var> (in this order).  (Remember that these variables hold the values 1,2, and 3 respectively);
3. set the variable <var>beatingChoices</var> to the list containing the variables <var>PAPER</var>, <var>SCISSORS</var> and <var>ROCK</var> (in this order);
   ![](../images/rps_withAI/choicesVSbeatingChoices.png)

Continued on the next page...

## Screen1 Initialization

4. set the variable <var>lastUserChoice</var> to the variable <var>ROCK</var>.  Note that this choice is completely arbitrary and allows the Markov Matrix to be built immediately following the first choice made by the user instead of waiting two rounds, which leads to a slightly more complex programming code;

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

![](../images/rps_withAI/whenScreen1Initialize1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/whenScreen1Initialize.png){:.enlargeImage}

</hint>

</hint>

Note: This is a subtle point but in case you are wondering why you did not simply initialize the list holding variables <var>choices</var> and  <var>beatingChoices</var> using the <var>ROCK</var>, <var>PAPER</var> and <var>SCISSORS</var> variables at the very beginning when you initialized all the other variables, the reason is that the <var>ROCK</var>, <var>PAPER</var> and <var>SCISSORS</var> variables needed to be initialized first prior to being used in defining other variables.

## Collapsing Code Blocks

In this project you will do quite a bit of coding and you may benefit from right-clicking on long blocks of code and collapsing them in order to have more work space and to better organize your code, as shown below.

![](../images/rps_withAI/collapseCode1.png){:.enlargeImage}

![](../images/rps_withAI/collapseCode2.png){:.enlargeImage}

## Reset Button

When the ResetButton is clicked:

1. call the procedure <strong><var>initializeMarkovMatrix</var></strong>;
2. call the procedure <strong><var>printMatrix</var></strong> to show the 3X3 Matrix entries initialized to zeros;
3. set the user and computer scores to zero;
4. reset the winner announcement label, the user and computer choice announcement labels to "NONE";
5. set the variable <var>lastUserChoice</var> to the variable <var>ROCK</var>, just like at the initialization;
6. set the variable <var>currentUserChoice</var> to zero, just like at the initialization.

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/whenResetButtonClick1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/whenResetButtonClick.png){:.enlargeImage}

</hint>

</hint>

## randomChoice and smartChoice

Create two procedures with a return value as blocks but leave them blank without any code for now.  The first procedure, <strong><var>randomChoice</var></strong>,  will have the computer randomly make a choice of <var>ROCK</var>, <var>PAPER</var> or <var>SCISSORS</var>  (at the start of the game) and the second procedure, <strong><var>smartChoice</var></strong>, will make an "informed" choice after studying the Markov Matrix.  You will fill in the code for these procedures later in the tutorial.

For creating a procedure with a return value choose the one on the right.

![](../images/rps_withAI/procedureTypes.png)

## Update Procedures

Create two procedures <em>without</em> a return value as blocks but leave them blank without any code for now.  The first procedure, <strong><var>updateWinnerScore</var></strong>, will increment the score of the winner of a given round of the game.  The second procedure, <strong><var>updateMatrix</var></strong>, will update the Markov Matrix at the end of each round of the game.

For creating a procedure <em>without</em> a return value choose the one on the left.

![](../images/rps_withAI/procedureTypes2.png){:.enlargeImage}

## User Choice Buttons

You will now handle the <strong>RockButton</strong>, <strong>PaperButton</strong> and <strong>ScissorsButton</strong> click events. Since they all behave the same way, it makes sense to use the Any Component feature of App Inventor.

When any Button is clicked by the user: 

<hint markdown="block" title="Give me a hint">

![](../images/rps_withAI/AnyButton.png)

</hint>

1. You already handled the <strong>ResetButton</strong> click event, so deal only with button clicks <em>not already handled</em>;
2. if <var>currentUserChoice</var> is zero (which means that this is the start of the game)
   * set <var>currentComputerChoice</var> to the value returned by the procedure <strong><var>randomChoice</var></strong>;
   * else set <var>currentComputerChoice</var> to the value returned by the procedure <strong><var>smartChoice</var></strong>;

Continued on the next page ...

## User Choice Buttons

When any Button is clicked by the user: 

3. set the <strong>ComputerChoiceImage</strong> picture and <strong>ComputerChoiceLabel</strong> text using the variable <var>currentComputerChoice</var> as index for <var>imageChoices</var> and <var>choicesinWords</var> respectively;
4. set <var>currentUserChoice</var> variable according to the button the user has pressed.  We set this variable only now after the computer makes it choice because the computer cannot make its decision based on what the user just chose -it would be cheating- but only based on the user's past choices.
5. set the <strong>UserChoiceImage</strong> picture and <strong>UserChoiceLabel</strong> text using the variable <var>currentUserChoice</var> as index for <var>imageChoices</var> and <var>choicesinWords</var> respectively;
6. call the procedure (without a return value) <strong><var>updateWinnerScore</var></strong> which will increment the score of the winner of a given round of the game.
7. call the procedure (without a return value) <strong><var>updateMatrix</var></strong> to update the Markov Matrix.
8. finally set <var>lastUserChoice</var> to <var>currentUserChoice</var> so that the game is ready for the next round.

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/whenanyButtonClick1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/whenAnyButtonClick.png){:.enlargeImage}

</hint>

</hint>

## randomChoice

Now you will fill in the code for the procedures you created above.

Complete the procedure <strong><var>randomChoice</var></strong> with a return value:

* have the procedure return a randomly chosen item from the <var>choices</var> list (containing <var>ROCK</var>, <var>PAPER</var>, <var>SCISSORS</var>).

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/procedure_randomChoice1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_randomChoice.png){:.enlargeImage}

</hint>

</hint>

## smartChoice

Complete the procedure <strong><var>smartChoice</var></strong> with a return value:

* Create another procedure with a return value to be called within the <strong><var>smartChoice</var></strong> procedure and name it <strong><var>findMostLikelyNextUserChoice</var></strong> but leave it blank without code for now.  You will fill in the code later.

   For creating a procedure with a return value choose the one on the right.
   
   ![](../images/rps_withAI/procedureTypes.png){:.enlargeImage}
   
   This procedure will return the most likely choice that the user will make based on the computer's assessment of the Markov Matrix which keeps track of historical data about the user's previous sequence of consecutive choices.

* have the <strong><var>smartChoice</var></strong> procedure return the element from the <var>beatingChoices</var> list using the value returned by <strong><var>findMostLikelyNextUserChoice</var></strong> as the index into the list.

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/procedure_smartChoice1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_smartChoice.png){:.enlargeImage}

</hint>

</hint>

## Updating Scores

Complete the procedure <strong><var>updateWinnerScore </var></strong>  as follows:

* if the computer’s choice beats the user’s choice, increment the computer’s score and announce the computer as the winner;
* else if the user’s choice beats the computer’s choice, increment the user’s score and announce the user as the winner;
* else (i.e. neither beats the other) no one’s score needs to be incremented but announce that no one is a winner.

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/procedure_updateWinnerScore1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_updateWinnerScore.png){:.enlargeImage}

</hint>

</hint>

## Updating the Markov Matrix

Complete the procedure <strong><var>updateMatrix</var></strong> as follows:

* increment the appropriate Markov Matrix cell by 1, based on <var>lastUserChoice</var> and <var>currentUserChoice</var> as row and column.
* call the procedure <strong><var>printMatrix</var></strong> to ensure that the Matrix update is displayed in the app.

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/procedure_updateMatrix1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_updateMatrix.png){:.enlargeImage}

</hint>

</hint>

## Finding the Most Likely Next User Choice

Finally, you will complete the procedure <strong><var>findMostLikelyNextUserChoice</var></strong> whose return value will be used as the index into <var>beatingChoices</var> in the <strong><var>smartChoice</var></strong> procedure.

Note that this procedure has to return a value i.e. the choice (<var>ROCK</var>, <var>PAPER</var>, <var>SCISSORS</var>: 1,2,3 respectively) that the computer estimates to be most likely to be made by the user.  Make sure that you choose the appropriate type of procedure block returning a result.

Look at the last choice made by the user (<var>ROCK</var>, <var>PAPER</var>, <var>SCISSORS</var>: 1,2,3 respectively) and then with this as the row index, you need to examine the appropriate row of the Markov Matrix to decide which column has the entry with the highest frequency stored in it.  For example, if the last choice made by the user was <var>PAPER</var>, you would examine the second row (in red) and you would return <var>SCISSORS</var> (i.e. the column index of 3, which has the largest value of 11 in that row) as the most likely next user choice.

![](../images/rps_withAI/Markov_rows.png)

Follow the steps described on the next pages.

## Finding the MAximum in a Row

To simplify the procedure  <strong><var>findMostLikelyNextUserChoice</var></strong> first create a simple helper procedure called <strong><var>maxInRow</var></strong> to find the maximum element  in a given row of the Markov Matrix.

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

* get the mathematical function <strong>min</strong> from the Math blocks and switch it to <strong>max</strong>.

   ![](../images/rps_withAI/minTomax.png){:.enlargeImage}
   
* use the settings gear to give the <strong>max</strong> function three sockets.  This will allow you to compare three entries in a given row of the Markov Matrix.

   ![](../images/rps_withAI/sockets_for_max.png){:.enlargeImage}
   
* create the procedure <strong><var>maxInRow</var></strong> with a return value and use the settings gear to give it an input parameter <var>row</var>.

   ![](../images/rps_withAI/adding_row_parameter.png)
   
* use the <strong>max</strong> function to have the procedure <strong><var>maxInRow</var></strong> return the maximum element of the given row.  Remember that a row in the Markov Matrix is a list, so the individual entries in a row can be accessed using list operations.

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/procedure_maxInRow1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_maxInRow.png){:.enlargeImage}

</hint>

</hint>

## Finding the Most Likely Next User Choice

Complete the procedure (with a return value) <strong><var>findMostLikelyNextUserChoice</var></strong>:

* find the row of the Markov Matrix determined by the <var>lastUserChoice</var>;
* use the procedure <strong><var>maxInRow</var></strong>  to find the maximum entry in this row and return the index of that value in the row (1,2 or 3).

Do this coding on your own. If you get stuck and would like some hints, click on the hint button below.

<hint markdown="block" title="Give me a hint">

Here are the blocks you will need to complete this functionality.

![](../images/rps_withAI/procedure_findMostLikelyNextUserChoice1.png){:.enlargeImage}

<hint markdown="block" title="Check your solution">

![](../images/rps_withAI/procedure_findMostLikelyNextUserChoice.png){:.enlargeImage}

</hint>

</hint>

## Test Your App

Now test your app thoroughly to make sure that:

* the user is able to click the buttons to make her choices;
* the Markov Matrix updates correctly with each user click, recording the frequency of consecutive pairs of user choices;
* the machine is able to randomly make a choice for the first round and thereafter is guided by the information available in the Markov Matrix and makes smart choices;
* the user and computer scores update correctly;
* the machine responds appropriately if the user always makes the same choice, like, Rock, Rock, Rock,....
   * For repeated user choices of Rock, does the machine quickly learn to respond with repeated choices of Paper? 
   * What happens when the user only chooses Paper or only chooses Scissors?

## Test Your App Further

* Try testing the machine's response to more complex patterns chosen by the user:
   * Rock, Paper, Rock, Paper, Rock, Paper........
   * Paper, Scissors, Paper, Scissors, Paper, Scissors.......
   * Rock, Paper, Scissors,	Rock, Paper, Scissors, Rock, Paper, Scissors ....
* Does the machine pick up on the patterns and learn how to beat the user?
* Try to beat the machine.  In a game of 30 rounds what is the best you can do?

## Test Your App Further

* Can you beat the machine using its own strategy?  That is, can you anticipate how the machine will try to beat you according to the current state of the Markov Matrix and use this knowledge in return to beat the machine at that round?  For example, if this is the Markov Matrix at some point in the game and, say, your last choice as the user was Rock,

   ![](../images/rps_withAI/Markov4.png)

   then, the machine will anticipate your choosing Paper next (as the entry with 13 is the largest in the first row) and thus will try to beat you with a Scissors.  However, with this extra knowledge you can now "surprise" the machine by choosing Rock to beat the machine using its own strategy.  

   * How far can you play using this strategy?
   * Can you always beat the machine by looking at the Markov Matrix?
   * If you play this game in this manner for a long time, what do you expect will happen to the Markov Matrix?  Can you verify your hypothesis?

Congratulations!  Celebrate, as you have just created your first example of Machine Learning and Artificial Intelligence!

# Expand Your App

## Further Explorations

* In case the user might forget her choice in a round of the game, display the user’s choice next to the computer’s choice (label and image).
* Create a button (perhaps instead of **MarkovLabel**) to show and hide the Markov Matrix information so that the decision process of the machine can be hidden from the user.
* What other Machine Learning schemes can you think of?  How would you implement these ideas?

## Further Explorations

* The Machine Learning algorithm you implemented in this project is an example of a "classical" Artificial Intelligence algorithm (i.e. "classical" as in the sense of  "not modern").  It is domain specific (i.e. only applies to the Rock-Paper-Scissors game) and it implements a particular strategy for the game.  Do some research about Neural Networks to learn about more modern approaches to Machine Learning.  Pay special attention to the "supervised" versus "unsupervised" approaches to Machine Learning.
* Watch the movie [AlphaGo](https://youtu.be/8tq1C8spV_g) which documents the amazing story of the Machine Learning algorithm **AlphaGo**, developed by Google's **DeepMind** team, that in 2016 managed to beat Lee Sedol, the world champion of the board game Go.
* Do some research about **AlphaGo Zero**.  How is it different than and superior to **AlphaGo**?
