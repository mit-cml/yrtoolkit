---
title: GenAI Digital Doodle
layout: tutorial
---

# Challenge

The Digital Doodle App allows users to draw on their mobile device screens. With the addition of generative AI tools, users can ask an AI model to generate a background image for them to draw on.

![Finished Product](../images/digitaldoodlewithAI/final_product.jpg){:.enlargeImage}

# Setup

## Getting Started

If you need help getting started and set up with App Inventor please visit our <a href="https://appinventor.mit.edu/explore/ai2/setup" target="_blank">Setting Up App Inventor</a> page.


## Using the Neo Interface

For this tutorial, we will be using the App Inventor Neo Interface, which has a more modern look.

To switch to Neo Interface, go to your Projects space. On the top bar, click on "Settings", and select "User Interface Settings".

![Changing UIs](../images/digitaldoodlewithAI/changing_to_neo_screen1.png){:.enlargeImage}


Click on the "Neo" Interface, then click "OK".

![Selecting Neo](../images/digitaldoodlewithAI/select_neo_ui.png){:.enlargeImage}



## Getting your own OpenAI API Key

For this project you will need to get your own OpenAI API key to use MIT App Inventor’s <strong>ImageBot</strong> component.  As of the writing of this tutorial, OpenAI allows users 13 years old and older to create their own OpenAI accounts and generate their own OpenAI API keys. For the first 3 months, you are given a $5 free credit which should get you quite a bit of exploration time. After 3 months, any unused portion of the credit expires. Once your free credit is gone, you will need to become a paying customer with a credit card.  Follow the steps below to create your OpenAI account and get your OpenAI API key.

Follow the steps below to create your OpenAI account and get your OpenAI API key.

1. Go to <a href="https://openai.com/" target="_blank">https://openai.com/ </a>

2. Click on the <strong>Login</strong> button on  the upper right, then click <strong>Sign up</strong> option.

    ![OpenAI Sign up](../images/simpleImageBot/OpenAISite.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

3. Create your account by entering your email and choosing a password.  You can also sign up using your Google, Microsoft and Apple accounts.

    ![Create Account](../images/simpleImageBot/OpenAISignUp.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>


4. You will need to verify your e-mail and phone number during the signup process.

5. To get your personal OpenAI API  key go to <a href="https://platform.openai.com/account/api-keys" target="_blank">https://platform.openai.com/account/api-keys </a>

6. Click on the  API keys tab and the Create new secret key button.

    ![Key Generate](../images/simpleImageBot/KeyGenerate.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

7. Give your key a name if you wish.  This step is optional.

    ![Name Secret Key](../images/simpleImageBot/NameSecretKey.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>


8. Copy and save your API key somewhere safe on your computer.  You will need it while doing the project.

9. During the ImageBot project, when you add your <strong>ImageBot</strong> component, you will need to copy-paste your OpenAI API key in the <strong>ImageBot</strong> property <em>ApiKey</em>.

![Api Key Property](../images/digitaldoodlewithAI/api_key_location.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Updating AI2 Companion

If you have not done so, please upgrade your AI2 Companion to version 2.69 or higher.

## Familiarizing Yourself With App Inventor Layout

The screen you are currently looking at is the "Design" Screen. On the left hand side of your screen (outlined in red) is the Palette, where there are drawers with components you can add to your app. In the center of the screen (outlined in green) is the Viewer, which is an empty phone screen where you will build the User Interface (UI) of your app. On the right side of the screen (outlined in blue) is the Properties window, you can edit specific aspects of each component you add to your app. Take a few minutes to explore the components within the drawers.

![Familiarize with Layout](../images/digitaldoodlewithAI/app_inventor_layout.png){:.enlargeImage}


# Digital Doodle with Generative AI Tutorial (Level: Beginner)

## Digital Doodle UI

To start your app, open the Drawing and Animation drawer on the left side of your screen. Drag a <strong> Canvas </strong> component onto the phone screen in the center.

![Get Canvas](../images/digitaldoodlewithAI/get_canvas.png){:.enlargeImage}


In Properties, set the <em>Height</em> and the <em>Width</em> of your Canvas to Fill Parent.

![Canvas Properties](../images/digitaldoodlewithAI/set_canvas_handw.png){:.enlargeImage}


In the top right corner of your screen, click the Blocks button. The Blocks screen is where you will code the functionality of your app.

![Blocks Button](../images/digitaldoodlewithAI/blocks_button.png){:.enlargeImage}


## Digital Doodle Code

One the left hand side of your screen, you will see the drawers of the blocks you will use to code your app. The rest of the screen is your workspace.


On the left side of your screen, click <strong> Canvas1 </strong> and drag the when Canvas1.Dragged block into your workspace.

![Canvas Dragged Block](../images/digitaldoodlewithAI/selecting_canvas_dragged.png){:.enlargeImage}


Also under <strong> Canvas1 </strong>, find the call Canvas1.DrawLine block, drag it into your workspace, and click it into the when Canvas1.Dragged block.

![Canvas DrawLine](../images/digitaldoodlewithAI/canvas_draw_line.png){:.enlargeImage}


In the call Canvas1.DrawLine block, x1, y1, x2, and y2 all represent pixel coordinate locations. Our canvas is one big graph, where each pixel location is represented by a (x,y) coordinate. Every curve is a set of little lines added together. Set x1, y1, x2, and y2 to prevX, prevY, currX, and currY, respectively. Do this by hovering over these variables in the when Canvas1.Dragged block.

NOTE: startX and startY remember where the user touched the canvas for the very first time. While this will create a cool drawing, it will not allow a user to draw as they want.

![Canvas Dragged Function](../images/digitaldoodlewithAI/when_canvas_dragged.png){:.enlargeImage}


Once you have finished this, your block of code should look like the example below.

![First Block](../images/digitaldoodlewithAI/block_1_final_product.png){:.enlargeImage}





## Pairing your Companion

Now it's time to test your code on a mobile device! Make sure you have App Inventor installed on your mobile device. To connect your mobile device, click the "Connect" button in the top center, then select "AI Companion".

![AI Companion](../images/digitaldoodlewithAI/pairing_an_ai_companion.png){:.enlargeImage}


A QR code should appear on your screen. Open the App Inventor app on your mobile device and click "scan QR code". Your app should appear on your mobile device.


Time to test your app out! You should now be able to draw on your companion screen. What issues are there with this version of the app? Can you clear your drawing? Can you change the colors of your ink?


## Adding an Accelerometer

If you want to build more aspects of your app, you're in the perfect place! Let's keep adding elements!

The next step is to add an <strong> Accelerometer </strong> element to your app. This will allow the user to erase their drawing by shaking their phone screen.


Navigate back to the Designer screen by clicking the Designer button in the top right of your screen.

![Designer Button](../images/digitaldoodlewithAI/switch_to_designer_screen.png){:.enlargeImage}


In the Designer screen, open the Sensors drawer. Drag and drop an <strong> AccelerometerSensor </strong> into the phone screen.

![Accelerometer Add](../images/digitaldoodlewithAI/drag_in_accelerometer.png){:.enlargeImage}


You will NOT see the component on your screen. Instead, look below the phone screen. You should see <strong> AccelerometerSensor </strong> underneath, labeled as a "Non-visible component".

![Non-visible componenets](../images/digitaldoodlewithAI/nonvisible_accelerometer.png){:.enlargeImage}


Now return to the Blocks screen.

On the left side of you screen, under <strong> AccelerometerSensor1</strong>, drag and drop the when AccelerometerSensor1.Shaking block into your workspace.

![Accelerometer Block](../images/digitaldoodlewithAI/accelerometer_when_shaking.png){:.enlargeImage}

Under <strong>Canvas1</strong>, drag call Canvas1.Clear into your workspace and click it into the when AccelerometerSensor1.Shaking block.

![Canvas Clear](../images/digitaldoodlewithAI/call_canvas_clear.png){:.enlargeImage}

Once you have this finished, your block of code should look like this.

![Accelerometer Final Block](../images/digitaldoodlewithAI/accelerometer_final_block.png){:.enlargeImage}

Time to test your app using your AI Companion again! When you shake your companion, does the screen clear?



## Colored Ink Buttons UI

Once again, it is time to return to the Designer screen.

In the Layout drawer, drag and drop a <strong> HorizontalArrangement</strong> under the <strong>Canvas</strong> on your phone screen.

![Horizontal Arrangement](../images/digitaldoodlewithAI/add_horizontal_arrangement.png){:.enlargeImage}


Set the <em>Width</em> property of <strong>Horizontal Arrangement</strong> to Fill Parent. Set <strong> AlignHorizontal</strong> to Center:3.

![Horizontal Arrangement Properties](../images/digitaldoodlewithAI/horizontal_arrange_properties.png){:.enlargeImage}


From the User Interface drawer, drag and drop a <strong> Button </strong> into the <strong> Horizontal Arrangement </strong> on your phone screen.

![Add Button](../images/digitaldoodlewithAI/adding_button_to_HA.png){:.enlargeImage}

Under the Screen1 panel, select <strong> Button1</strong> and click Rename and rename it to <strong> BlackButton </strong>.

![Rename Button](../images/digitaldoodlewithAI/renaming_button.png){:.enlargeImage}


Under properties, set <em> Background Color </em> to black. Set <em> Width </em> to 20 percent.

![Button Properties](../images/digitaldoodlewithAI/button_properties.png){:.enlargeImage}

Set the <em> Text </em> of BlackButton to Black. Set the <em>TextColor</em> to Yellow.

![More Button Properties](../images/digitaldoodlewithAI/button_properties_2.png){:.enlargeImage}


Repeat the above steps three more times to create a Red, Blue, and Green Button. Remember to rename each button so you do not mix them up! After you do this, your User Interface should look like this.

![Button UI](../images/digitaldoodlewithAI/all_buttons_UI.png){:.enlargeImage}


## Colored Ink Buttons Code

Change screens to the Blocks screen.


On the left side of your screen, select <strong> BlackButton </strong>. Drag and drop when BlackButton.Clicked into your workspace.

![When Button Clicked](../images/digitaldoodlewithAI/when_button_clicked.png){:.enlargeImage}


Under <strong> Canvas1 </strong>, drag the set Canvas1.PaintColor to block into your workspace and click it into the when BlackButton.Clicked block.

![Set Paint Color](../images/digitaldoodlewithAI/getting_set_paint_color_block.png){:.enlargeImage}

Under Colors, get the black colored tile and click it into the set Canvas1.PaintColor to block.

![Coloring](../images/digitaldoodlewithAI/getting_color.png){:.enlargeImage}


Your code block should now look like this.

![Single Color Button](../images/digitaldoodlewithAI/single_color_button.png){:.enlargeImage}

Repeat this for RedButton, BlueButton, and GreenButton. Your code should now look like this.

![All Color Button Code](../images/digitaldoodlewithAI/all_buttons_code.png){:.enlargeImage}


Time to test your code using your AI Companion! When you click on the color buttons, the ink color will change. Can you draw a picture using all four colors?



## Line Thickness Slider

The next component you will implement in your app is a slider function that allows a user to change the line thickness on their canvas. Start by switching back to the Designer screen.

In the User Interface drawer, drag and drop a <strong> Slider </strong> component into the phone screen below your buttons.

![Adding a Slider](../images/digitaldoodlewithAI/add_a_slider.png){:.enlargeImage}

In the Properties, set <em>MaxValue</em> of the <strong> Slider </strong> to 100. Set the <em> MinValue </em> to 5. Set <em> Width </em> to Fill Parent.

![Slider Properties](../images/digitaldoodlewithAI/slider_property_settings.png){:.enlargeImage}


Switch to the Blocks screen. Under <strong> Canvas1</strong>, drag and drop set Canvas1.LineWidth to into your workspace.

![Line Width](../images/digitaldoodlewithAI/set_LineWidth.png){:.enlargeImage}


Under <strong>Slider</strong>, select Slider1.ThumbPosition. Drag it into your workspace and click it into set Canvas1.LineWidth to.

![Get Thumb Position](../images/digitaldoodlewithAI/slider_getThumbPosition.png){:.enlargeImage}


Place your current code block as the first block under when Canvas1.Dragged. Your code should look like the below.

![Canvas1 Dragged](../images/digitaldoodlewithAI/canvas_when_dragged_plus_line_width.png){:.enlargeImage}


Time to test your app with your AI Companion! Remember, the line width will only change for anything you draw AFTER adjusting the slider.



## Adding ImageBot UI

Now it's time to return to the Designer screen. Select <strong> Screen1 </strong> on the right side of your screen and set <em> AlignHorizontal </em> to Center:3.

![Align Screen](../images/digitaldoodlewithAI/aligning_screen.png){:.enlargeImage}

In the User Interface drawer, drag a <strong> Label </strong> onto the top of your screen, above the <strong>Canvas </strong> component.

![Label](../images/digitaldoodlewithAI/adding_a_label.png){:.enlargeImage}

Set the <em>Text</em> of <strong> Label1 </strong> to "Type in your background.

![Label Text](../images/digitaldoodlewithAI/set_label_text.png){:.enlargeImage}


From the User Interface drawer, drag a <strong>TextBox</strong> between <strong> Label1 </strong> and <strong> Canvas1 </strong>.

![Textbox](../images/digitaldoodlewithAI/adding_textbox.png){:.enlargeImage}


Rename <strong> TextBox1 </strong> to <strong> GenAITextBox </strong>.

![Rename Textbox](../images/digitaldoodlewithAI/rename_genai_textbox.png){:.enlargeImage}


Set <em> Width </em> of <strong>GenAITextBox</strong> to Fill Parent.

![Textbox Width](../images/digitaldoodlewithAI/genai_textbox_width.png){:.enlargeImage}


From the User Interface drawer, drag a <strong> Button </strong> between <strong>GenAITextBox</strong> and <strong>Canvas1</strong>.

![Add Button2](../images/digitaldoodlewithAI/add_generate_button.png){:.enlargeImage}

Rename the <strong>Button</strong> to <strong>GenAIButton</strong>.

![Rename GenAIButton](../images/digitaldoodlewithAI/rename_genaibutton.png){:.enlargeImage}

Set <em> Background Color </em> of <strong> GenAIButton </strong> to Orange.

![Generate Button Color](../images/digitaldoodlewithAI/set_generate_button_color.png){:.enlargeImage}


Set <em>Shape </em> to rounded. Set <em> Text </em> to "Generate Background".

![Button Properties](../images/digitaldoodlewithAI/button_shap_rounded.png){:.enlargeImage}


In the Experimental drawer, drag and drop an <strong>ImageBot</strong> component onto your phone screen. You can select "OK" to the warning pop up. <strong> ImageBot </strong> is a non-visible component and should appear under your phone screen alongside the Accelerometer.

![Add ImageBot](../images/digitaldoodlewithAI/image_bot_in_app.png){:.enlargeImage}


Enter your personal ApiKey in the ImageBot settings. If you have not yet gotten a personal ApiKey from OpenAI, review the Setup section.

![ApiKey](../images/digitaldoodlewithAI/api_key.png){:.enlargeImage}


## Adding ImageBot Code

Switch to the Blocks screen. Under <strong>GenAIButton</strong>, drag and drop when GenAIButton.Click into your workspace.

![When GenAI Button](../images/digitaldoodlewithAI/when_genaibutton_clicked.png){:.enlargeImage}


Under <strong>ImageBot1</strong>, drag call ImageBot1.CreateImage into your workspace and click it into when GenAIButton.Click.

![Create Image Block](../images/digitaldoodlewithAI/create_image_block.png){:.enlargeImage}


Under <strong>GenAITextBox</strong>, drag and drop GenAITextBox.Text into your workspace. Click it into the call ImageBot1.CreateImage description socket.

![GenAITextBox.Text](../images/digitaldoodlewithAI/genati_textbox_text.png){:.enlargeImage}


Your code block should look like this.
![Final GenAIButton click](../images/digitaldoodlewithAI/final_when_genai_clicked.png){:.enlargeImage}


Under <strong>ImageBot1</strong>, drag and drop the when ImageBot1.ImageCreated block into your workspace.

![When Image Created](../images/digitaldoodlewithAI/when_image_created_block.png){:.enlargeImage}

Under <strong>Canvas1</strong>, drag and drop the set Canvas1.BackgroundImage to block into your workspace and click it into the when ImageBot1.ImageCreated block. Delete the No available assets block.

![Set Background Image](../images/digitaldoodlewithAI/set_canvas_backgroundimage.png){:.enlargeImage}


Hover over fileName in the when ImageBot1.ImageCreated block. When the drop down option appears, select get fileName and click it into the set Canvas1.BackgroundImage to block.

![Getting fileName](../images/digitaldoodlewithAI/getting_fileName_block.png){:.enlargeImage}

Your code block should look like this.
![When Image Created](../images/digitaldoodlewithAI/when_image_created_final_block.png){:.enlargeImage}


Time to test your app using your AI Companion! Try submitting a few different background prompts. Do you notice any issues with the app? Does it feel like your app is not responding to your prompt? Do you feel like you are waiting too long without knowing if your app is working? Let's add a notifier so that the user knows that the ImageBot is working to create a background!




## Adding a Notifier

Start by switching back to the Designer screen. In the User Interface drawer, drag a <strong>Notifier</strong> component onto your phone screen. It should appear below your phone, alongside the other Non-visible components.

![Add a Notifier](../images/digitaldoodlewithAI/adding_a_notifier.png){:.enlargeImage}


Switch to the Blocks screen.

Under <strong>Notifier1</strong>, drag and drop the indicated call Notifier1.ShowProgressDialog block and click it in as the first block in the when GenAIButton.Click block.

![Show Progress Dialog](../images/digitaldoodlewithAI/notifier_progress_dialog.png){:.enlargeImage}


Under Text, drag and drop two empty text boxes into your workspace.

![Adding TextBoxes](../images/digitaldoodlewithAI/empty_text_boxes.png){:.enlargeImage}


Click the empty text boxes into the sockets of call Notifier1.ShowProgressDialog. In the message text box, enter "Generating Image". In the title text box, enter "Please wait". Your code block should now look like this.

![Added Progress Dialog](../images/digitaldoodlewithAI/genai_clicked_plus_notifier.png){:.enlargeImage}


Under <strong>Notifier1</strong>, drag and drop call Notifier1.DismissProgressDialog into your workspace and click it in as the first block in the when ImageBot.ImageCreated block.

![Dismiss Progress Dialog](../images/digitaldoodlewithAI/dismiss_progress_dialog.png){:.enlargeImage}

Your code block should now look like this.
![Notifier Added to ImageCreated](../images/digitaldoodlewithAI/image_created_with_notifier.png){:.enlargeImage}

Congratulations! You have now completed the Digital Doodle with GenAI app tutorial. Have fun creating your own doodles with personalized AI generated backgrounds! Your block code should look like this.

![Final Block Code](../images/digitaldoodlewithAI/blocks.png){:.enlargeImage}



# Expand Your App

Here are some ideas of how you can expand your app:

* add more colors
* allow users to draw dots as well (Hint: use the DrawCircle block)
* develop the capability to erase specific parts of a doodle
* create a list of preset background ideas that the user can choose from
* edit certain parts of your canvas with a generated image
* try to create a collection of doodled images and form a class gallery
* try organizing an image doodle competition
* see what other ideas you can come up with! There are countless ways to expand and improve your app
