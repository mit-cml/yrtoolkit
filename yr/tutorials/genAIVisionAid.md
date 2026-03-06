---
title: GenAI Vision Aid
layout: tutorial
---

# Challenge

The Vision Aid App is a computational action application accessibility tool that helps visually impaired users understand their surroundings. It allows users to take a photo with their device and then uses an AI model to generate a detailed, spoken and written description of the image’s contents. This enables users to better understand their surroundings, read text, recognize objects, and identify people or scenes through natural language descriptions.

![Finished Product](../images/genAIVisionAid/final_product.png){:.enlargeImage}

# Setup

## Getting Started

If you need help getting started and set up with App Inventor please visit our <a href="https://appinventor.mit.edu/explore/ai2/setup" target="_blank">Setting Up App Inventor</a> page.

## Getting your own OpenAI API Key

For this project you will need to get your own OpenAI API key to use MIT App Inventor’s <strong>ChatBot</strong> component.  As of the writing of this tutorial, OpenAI allows users 13 years old and older to create their own OpenAI accounts and generate their own OpenAI API keys.

Follow the steps below to create your OpenAI account and get your OpenAI API key.

1. Go to <a href="https://openai.com/" target="_blank">https://openai.com/ </a>

2. Click on the <strong>Login</strong> button on the upper right, then click <strong>Sign up</strong> option.

    ![OpenAI Sign up](../images/simpleChatBot/OpenAISite.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

3. Create your account by entering your email and choosing a password.  You can also sign up using your Google, Microsoft and Apple accounts.

    ![Create Account](../images/simpleChatBot/OpenAISignUp.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>


4. You will need to verify your e-mail and phone number during the signup process.

5. To get your personal OpenAI API  key go to <a href="https://platform.openai.com/account/api-keys" target="_blank">https://platform.openai.com/account/api-keys </a>

6. Click on the  API keys tab and the Create new secret key button.

    ![Key Generate](../images/simpleChatBot/KeyGenerate.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>

7. Give your key a name if you wish.  This step is optional.

    ![Name Secret Key](../images/simpleChatBot/NameSecretKey.png){:.enlargeImage}
    <p style="padding-bottom: 7px"></p>


8. Copy and save your API key somewhere safe on your computer.  You will need it while doing the project.

9. During the ChatBot project, when you add your <strong>ChatBot</strong> component, you will need to copy-paste your OpenAI API key in the <strong>ChatBot</strong> property <em>ApiKey</em>.

![Api Key Property](../images/simpleChatBot/ChatBotAPIKey.png){:.enlargeImage}
<p style="padding-bottom: 7px"></p>

## Updating AI2 Companion

If you have not done so, please upgrade your AI2 Companion to version 2.69 or higher.

## Familiarizing Yourself With App Inventor Layout

The screen you are currently looking at is the "Design" Screen. On the left hand side of your screen (outlined in red) is the Palette, where there are drawers with components you can add to your app. In the center of the screen (outlined in green) is the Viewer, which is an empty phone screen where you will build the User Interface (UI) of your app. On the right side of the screen (outlined in blue) is the Properties window, you can edit specific aspects of each component you add to your app. Take a few minutes to explore the components within the drawers.

![Familiarize with Layout](../images/digitaldoodlewithAI/app_inventor_layout.png){:.enlargeImage}


# Gen AI Vision Aid

## Gen AI Vision Aid UI

Start by changing the background color of your app. Select the <strong> Screen1 </strong> button and under Properties, change its <em>BackgroundColor</em> to a color of your choice. Then change the <em>AlignHorizontal</em> to Center:3.

![Screen Properties](../images/genAIVisionAid/Screen_properties.png){:.enlargeImage}

## Camera Button

From the User Interface drawer, drag and drop a <strong> Button </strong> onto the phone screen.

![Button](../images/genAIVisionAid/AddCameraButton.png){:.enlargeImage}

Under the <strong> Screen1 </strong> panel, select <strong> Button1</strong>, click Rename and rename it to <strong> CameraButton</strong>.

![Rename Button](../images/genAIVisionAid/RenameCameraButton.jpg){:.enlargeImage}

Under properties, set <em> BackgroundColor </em> to green, change <em> FontSize </em> to 30.0, and change <em> Text </em> to "Take Picture".

![Button Properties](../images/genAIVisionAid/ChangeCameraButtonProperties.png){:.enlargeImage}

## Image Box

From the Layout drawer, drag and drop a <strong> HorizontalArrangement </strong> onto the phone screen.

![Horizontal Arrangement](../images/genAIVisionAid/InsertHorizontalArrangement.png){:.enlargeImage}

Under properties, set <em> BackgroundColor </em> to black, change <em> Height </em> to 50 percent, and change <em> Width </em> to 80 percent.

![Horizontal Arrangement Properties](../images/genAIVisionAid/ChangeHorizontalArrangementProperties.png){:.enlargeImage}

From the User Interface drawer, drag and drop an <strong> Image </strong> into the <strong> HorizontalArrangement </Strong> on your phone screen.

![Image Component](../images/genAIVisionAid/AddImageComponent.png){:.enlargeImage}

Under properties, change <em> Height </em> to Fill Parent, and change <em> Width </em> to Fill Parent.

![Image Component Properties](../images/genAIVisionAid/ChangeImageComponentProperties.png){:.enlargeImage}

## Describe Image Button

From the User Interface drawer, drag and drop a <strong> Button </strong> onto the phone screen under the <strong> HorizontalArrangement</strong>.

![Button](../images/genAIVisionAid/AddDescribeImageButton.png){:.enlargeImage}

Under the <strong> Screen1 </strong> panel, select <strong> Button1</strong>, click Rename and rename it to <strong> DescribeImageButton</strong>.

![Rename Button](../images/genAIVisionAid/RenameDescribeButton.jpg){:.enlargeImage}

Under properties, set <em> BackgroundColor </em> to green, change <em> FontSize </em> to 30.0, and change <em> Text </em> to "Describe Image".

![Button Properties](../images/genAIVisionAid/ChangeDescribeImageButtonProperties.png){:.enlargeImage}

## Text Box

From the User Interface drawer, drag and drop a <strong> TextBox </strong> onto the phone screen.

![Text Box](../images/genAIVisionAid/InsertTextBox.png){:.enlargeImage}

Under properties, change <em> FontSize </em> to 30.0, change <em> Width </em> to Fill Parent, check <em> MultiLine </em>, and check <em> ReadOnly </em>.

![Text Box Properties](../images/genAIVisionAid/ChangeTextBoxProperties.png){:.enlargeImage}

## Clear Button

From the User Interface drawer, drag and drop a <strong> Button </strong> onto the phone screen.

![Button](../images/genAIVisionAid/InsertClearAllButton.png){:.enlargeImage}

Under the <strong> Screen1 </strong> panel, select <strong> Button1</strong>, click Rename and rename it to <strong> ClearButton</strong>.

![Rename Button](../images/genAIVisionAid/RenameClearButton.jpg){:.enlargeImage}

Under properties, set <em> BackgroundColor </em> to red, change <em> FontSize </em> to 30.0, and change <em> Text </em> to "CLEAR ALL".

![Button Properties](../images/genAIVisionAid/ChangeClearAllButtonProperties.png){:.enlargeImage}

## Non-Visible Components

From the Media drawer, drag and drop a <strong> Camera </strong> and a <strong> TextToSpeech </strong> onto the phone screen.

![Camera and TextToSpeech](../images/genAIVisionAid/InsertCameraAndTextToSpeechComponents.png){:.enlargeImage}

From the Experimental drawer, drag and drop a <strong> ChatBot </strong> onto the phone screen.

![ChatBot](../images/genAIVisionAid/InsertChatBotComponent.png){:.enlargeImage}

From the User Interface drawer, drag and drop a <strong> Notifier </strong> onto the phone screen.

![Notifier](../images/genAIVisionAid/InsertNotifierComponent.png){:.enlargeImage}

## Coding the UI Functionality
In the top right corner of your screen, click the Blocks button. The Blocks screen is where you will code the functionality of your app.

![Blocks Button](../images/genAIVisionAid/ChangeToBlocks.png){:.enlargeImage}

## Take Picture
On the left side of your screen, select <strong> CameraButton</strong>. Drag and drop when CameraButton.Clicked into your workspace.

![When Camera Button](../images/genAIVisionAid/WhenCameraButton.Click.png){:.enlargeImage}

Under <strong> Camera1</strong>, drag the call Camera1.TakePicture block into your workspace and click it into the when CameraButton.Click block.

![Camera Take Picture](../images/genAIVisionAid/CallCamera1.TakePicture.png){:.enlargeImage}

## Set Image
Under <strong> Camera1</strong>, drag and drop the when Camera1.AfterPicture block into your workspace.

![Camera After Picture](../images/genAIVisionAid/WhenCamera1.AfterPicture.png){:.enlargeImage}

Under <strong>Image1</strong> drag the set Image1.Picture to block into your workspace and click it into the when Camera1.AfterPicture block.

![Set Image](../images/genAIVisionAid/SetImage1.PictureTo.png){:.enlargeImage}

Hover over <strong> image </strong> in the when Camera1.AfterPicture block. When the drop down option appears, select the get image block and click it into the set Image1.Picture to block. Delete the No available assets block.

![Get Image](../images/genAIVisionAid/GetImageforImage1.png){:.enlargeImage}

Under <strong>Image1</strong> drag the set Image1.RotationAngle to block into your workspace and click it into the when Camera1.AfterPicture block.

![Image Rotation Angle](../images/genAIVisionAid/SetImage1RotationAngle.png){:.enlargeImage}

Under <strong>Math</strong>, drag the 0 block into your workspace and click it into the set Image1.RotationAngle to block.

![Math Rotation Angle](../images/genAIVisionAid/GetMathForRotationAngle.png){:.enlargeImage}

Change the 0 to 90. Depending on your device, if it is iOS, the rotation may not be needed.

![Set Rotation Angle](../images/genAIVisionAid/SetRotationAngle.png){:.enlargeImage}

## Describe Image
Under <strong>DescribeImageButton</strong>, drag the when DescribeImageButton.Click block into your workspace.

![When Describe Image Button](../images/genAIVisionAid/WhenDescribeImageButton.Click.png){:.enlargeImage}

Under <strong> Notifier1</strong>, drag the call Notifier1.ShowProgressDialog block into your workspace and click it into the when DescribeImageButton.Click block. The Notifier shows a message so the user knows the image is being processed and the app isn’t frozen.

![Call Notifier](../images/genAIVisionAid/CallNotifier1.ShowProgressDialog.png){:.enlargeImage}

Under <strong>Text</strong>, drag the “ ” block into your workspace and click it into both the message and the title of the call Notifier1.ShowProgressDialog block.

![Add Text](../images/genAIVisionAid/AddTextToShowProgressDialog.png){:.enlargeImage}

Set the message text to “Sending Image for analysis” and the title text to “Please Wait”.

![Progress Dialog Text](../images/genAIVisionAid/ShowProgressDialogText.png){:.enlargeImage}

Under <strong>ChatBot1</strong>, drag the call ChatBot1.ConverseWithImage block into your workspace and click it into the when DescribeImageButton.Click block.

![Call Chat Bot](../images/genAIVisionAid/CallChatBot1.ConverseWithImage.png){:.enlargeImage}

Under <strong>Text</strong>, drag the join block into your workspace and click it into question of the call ChatBot1.ConverseWithImage block.

![Join Block](../images/genAIVisionAid/AddJoinChatBot1ConverseWithImage.png){:.enlargeImage}

Under <strong>Text</strong>, drag the “ ” block into your workspace and click it into both spaces of the join block.

![Empty Text Box](../images/genAIVisionAid/AddTextChatBot1ConverseWithImage.png){:.enlargeImage}

Set the first text to “Describe the image in a brief way in detail for” and the second text to “a visually impaired person”.

![Edit Text](../images/genAIVisionAid/EditTextCharBot1ConverseWithImage.png){:.enlargeImage}

Under <strong> Image1</strong>, drag the Image1.Picture block into your workspace and click it into source of the call ChatBot1.ConverseWithImage block.

![Picture Source](../images/genAIVisionAid/SetChatBot1SourceToImage1.png){:.enlargeImage}

## Show Response
Under <strong> ChatBot1</strong>, drag the when ChatBot1.GotResponse block into your workspace.

![Chat Response](../images/genAIVisionAid/WhenChatBot1.GotResponse.png){:.enlargeImage}

Under <strong> Notifier1</strong>, drag the call Notifier1.DismissProgressDialog block into your workspace and click it into the when ChatBot1.GotResponse block.

![Dismiss Notifier](../images/genAIVisionAid/CallNotifier1.DismissProgressDialog.png){:.enlargeImage}

Under <strong> TextBox1</strong>, drag the set TextBox1.Text to block into your workspace and click it into the when ChatBot1.GotResponse block.

![Set Text Box](../images/genAIVisionAid/SetTextBox1.png){:.enlargeImage}

Hover over <strong> responseText </strong> in the when ChatBot1.GotResponse block. When the drop down option appears, select the get responseText block and click it into the set TextBox1.Text to block.

![Set Text](../images/genAIVisionAid/SetTextBox1Text.png){:.enlargeImage}

Under <strong> TextToSpeech1</strong>, drag the call TextToSpeech1.Speak block into your workspace and click it into the when ChatBot1.GotResponse block.

![Call Text To Speech](../images/genAIVisionAid/CallTextToSpeech1.Speak.png){:.enlargeImage}

Hover over <strong> responseText </strong> in the when ChatBot1.GotResponse block. When the drop down option appears, select the get responseText block and click it into the call TextToSpeech1.Speak block.

![Set Text To Speech](../images/genAIVisionAid/SetTextToSpeechMessage.png){:.enlargeImage}

## Clear Function
Under <strong> ClearButton</strong>, drag the when ClearButton.Click block into your workspace.

![When Clear Button](../images/genAIVisionAid/WhenClearButton.Click.png){:.enlargeImage}

Under <strong> Image1</strong>, drag the set Image1.Picture to block into your workspace and click it into the when ClearButton.Click block.

![Set Image](../images/genAIVisionAid/SetImage1.Picture.png){:.enlargeImage}

Under <strong> Text</strong>, drag the “ ” block into your workspace and click it into the set Image1.Picture to block. The empty text block is used to clear any existing image file name. Delete the No available assets block.

![Set Image Empty](../images/genAIVisionAid/SetImagetoEmptyText.png){:.enlargeImage}

Under <strong> TextBox1</strong>, drag the set TextBox1.Text to block into your workspace and click it into the when ClearButton.Click block.

![Set Text Box](../images/genAIVisionAid/WhenClearAllSetTextBox1Text.png){:.enlargeImage}

Under <strong> Text</strong>, drag the “ ” block into your workspace and click it into the set TextBox1.text to block. The empty text block is used to clear any existing writing.

![Clear Text Box](../images/genAIVisionAid/ClearTextBox.png){:.enlargeImage}

Under <strong> TextToSpeech1</strong>, drag the call TextToSpeech1.Stop block into your workspace and click it into the when ClearButton.Click block.

![Clear Text To Speech](../images/genAIVisionAid/CallTextToSpeech1.Stop.png){:.enlargeImage}

## Finished Product
Congratulations! You have now completed the Vision Aid with Gen AI app tutorial. Your block code should look like this.

![Final Block Code](../images/genAIVisionAid/FinalBlocks.png){:.enlargeImage}

## Testing the App
Now test your app by scanning the QR Code generated via your AI2 Companion.
![QR Code](../images/simpleChatBot/QRCode.png){:.enlargeImage}

Once the app is running, you can take a picture and ask ChatGPT to describe it. After sending the image, the app will process your request and return a response.

Responses may take a few seconds to appear because your request is being sent to OpenAI’s servers for processing. Due to traffic and computation time, please be patient while waiting for the reply.

Please note that unless you use your own OpenAI API key, the number of queries you can make to ChatGPT is limited.

Congratulations! You’ve built a powerful app that allows you to capture images and receive AI-generated descriptions with a single button tap.

Disclaimer: Use this application responsibly. Do not rely on it in situations where mistakes could put you or others at risk.

# Expand Your App

Here are some ideas of how you can expand your app:

* Adjust the app’s color palette to better support users with color blindness or low-vision preferences.
* Provide an option for users to select their preferred language for both text and speech output.
* Enable the app to speak instructions and notifications, such as the notifier that appears while an image is being analyzed.
* Allow users to control the speed of the text-to-speech output for a more personalized experience.
