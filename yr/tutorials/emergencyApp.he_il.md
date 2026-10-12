<div dir="rtl">

---
title: Emergency App
layout: tutorial
---

# אתגר (Challenge)

אפליקציית החירום (Emergency App) מסייעת למשתמשים להגיב במהירות במצבי סכנה או דחיפות. האפליקציה מציגה מפה לזיהוי מיקום המשתמש/ת, ובזמן אמת יכולה ללכוד ולשתף אותו. בנוסף, ניתן להקליט הודעה, לצלם תמונה ולשלוח אותן יחד עם המיקום לאנשי קשר נבחרים בהודעת טקסט. האפליקציה כוללת גם לחצן חירום המשמיע צליל אזעקה חזק למשיכת תשומת לב והרתעת גורמי סכנה.

<strong>הבהרה! (Disclaimer)</strong>  
מדריך זה מיועד למטרות לימודיות בלבד. אם אתם חווים אירוע חירום אמיתי, אנא פנו מיד לשירותי החירום והרשויות המוסמכות.

![Finished Product](../images/emergencyApp/app.jpg){:.enlargeImage}

# הגדרות (Setup)

## מתחילים (Getting Started)

לסיוע בהתקנה והתחלת העבודה עם App Inventor, אנא בקרו בדף <a href="https://appinventor.mit.edu/explore/ai2/setup" target="_blank">Setting Up App Inventor</a> שלנו.

## הכרת מבנה המסך ב-App Inventor

המסך שבו אתם צופים כעת הוא מסך ה-Design. בצד שמאל (במסגרת אדומה) נמצאת ה-Palette, ובה מגירות עם רכיבים שתוכלו להוסיף לאפליקציה. במרכז המסך (במסגרת ירוקה) מוצג ה-Viewer - מסך טלפון ריק שבו תבנו את ממשק המשתמש (UI) של האפליקציה. בצד ימין (במסגרת כחולה) נמצא חלון ה-Properties, שבו תוכלו לערוך מאפיינים ספציפיים של כל רכיב. קחו כמה דקות לחקור את הרכיבים במגירות השונות.

![Familiarize with Layout](../images/digitaldoodlewithAI/app_inventor_layout.png){:.enlargeImage}

# אפליקציית חירום (Emergency App)

## ממשק המשתמש (UI)

מרבית ממשק המשתמש כבר בנוי, אך עלינו להוסיף כמה רכיבים כדי להשלים אותו:

1. ממגירת Maps, גררו והשמיטו רכיב <strong>Map</strong> אל מסך הטלפון לתוך ה-HorizontalArrangement האפור.
![Map](../images/emergencyApp/InsertMap.png){:.enlargeImage}

2. בחלון Properties, שנו את <em>Height</em> ל-Fill parent, את <em>Width</em> ל-Fill parent, ואת <em>ZoomLevel</em> ל-18.
![Map Properties](../images/emergencyApp/MapProperties.png){:.enlargeImage}

3. ממגירת Maps, גררו והשמיטו רכיב <strong>Marker</strong> על גבי ה-Map במסך הטלפון.
![Marker](../images/emergencyApp/AddMarker.png){:.enlargeImage}

4. כעת נוסיף רכיבים לא-וויזואליים (non-visible components) הפועלים ברקע. רכיבים אלו לא יופיעו על מסך ה-Viewer, אלא מתחתיו. ממגירת Media, גררו והשמיטו אל מסך הטלפון את הרכיבים <strong>Camera</strong>, <strong>Player</strong>, ו-<strong>SpeechRecognizer</strong>.
![Non-visible Media](../images/emergencyApp/AddNonVisMedia.png){:.enlargeImage}

5. תחת פאנל <strong>Screen1</strong>, בחרו ב-<strong>Player1</strong> ובחלון Properties שנו את Source ל-`AlarmSound.m4a`.
![Player Source](../images/emergencyApp/PlayerProperties.png){:.enlargeImage}

6. ממגירת Sensors, גררו והשמיטו רכיב <strong>LocationSensor</strong> אל מסך הטלפון.
![Location Sensor](../images/emergencyApp/AddLocSensor.png){:.enlargeImage}

7. ממגירת Social, גררו והשמיטו רכיב <strong>Sharing</strong> אל מסך הטלפון.
![Sharing](../images/emergencyApp/AddSharing.png){:.enlargeImage}

## תכנות פונקציונליות הממשק (UI)

בפינה הימנית העליונה של המסך, לחצו על הכפתור Blocks למעבר ללוח התכנות.

![Blocks Button](../images/emergencyApp/SwitchToBlocks.png){:.enlargeImage}

## תכנות ה-Player

* תחת <strong>EmergencyButton</strong>, גררו את הבלוק `when EmergencyButton.Click` אל סביבת העבודה.
![When Emergency Button](../images/emergencyApp/WhenEmergencyClick.png){:.enlargeImage}

* תחת <strong>Player1</strong>, גררו את `call Player1.Start` וחברו אותו לתוך הבלוק `when EmergencyButton.Click`.
![Start Player](../images/emergencyApp/CallPlayer1Start.png){:.enlargeImage}

* תחת <strong>ResetButton</strong>, גררו את הבלוק `when ResetButton.Click` אל סביבת העבודה.
![When Reset Button](../images/emergencyApp/WhenResetButtonClick.png){:.enlargeImage}

* תחת <strong>Player1</strong>, גררו את `call Player1.Stop` וחברו אותו לתוך הבלוק `when ResetButton.Click`.
![Stop Player](../images/emergencyApp/CallPlayerStop.png){:.enlargeImage}

## הגדרת משתני קו רוחב וקו אורך (Latitude & Longitude)

1. תחת <strong>Variables</strong>, גררו את הבלוק `initialize global name to` אל סביבת העבודה.
![Initialize Latitude Variable](../images/emergencyApp/InitLatitude.png){:.enlargeImage}

2. שנו את השם `name` ל-`latitude`.
![Latitude Variable](../images/emergencyApp/NameLatitude.png){:.enlargeImage}

3. תחת <strong>Text</strong>, גררו בלוק מחרוזת ריקה `""` וחברו אותו אל הבלוק `initialize global latitude to`.
![Latitude Empty](../images/emergencyApp/LatitudeEmpty.png){:.enlargeImage}

4. חזרו על אותם צעדים כדי להגדיר משתנה נוסף בשם `longitude`.
![Longitude Variable](../images/emergencyApp/InitLongitude.png){:.enlargeImage}

## קבלת מיקום (Get Location)

* תחת <strong>GetLocationButton</strong>, גררו את הבלוק `when GetLocationButton.Click`.
![When Get Location Button](../images/emergencyApp/WhenGetLocClick.png){:.enlargeImage}

* תחת <strong>Variables</strong>, גררו את הבלוק `set to`, חברו אותו לתוך `when GetLocationButton.Click`, ובחרו ב-`global latitude`.
![Set Latitude Block](../images/emergencyApp/SetLat.png){:.enlargeImage}
![Set Global Latitude](../images/emergencyApp/SelectGlobalLat.png){:.enlargeImage}

* תחת <strong>LocationSensor1</strong>, גררו את הבלוק `LocationSensor1.Latitude` וחברו אותו אל `set global latitude to`.
![Location Sensor Latitude](../images/emergencyApp/SetLatToLocSenLat.png){:.enlargeImage}

* חזרו על הפעולה עבור `global longitude`: חברו את הבלוק `set to` ובחרו ב-`global longitude`, ולאחר מכן חברו אליו את `LocationSensor1.Longitude`.
![Set Longitude Block](../images/emergencyApp/SetLon.png){:.enlargeImage}
![Set Global Longitude](../images/emergencyApp/SelectGlobalLon.png){:.enlargeImage}
![Location Sensor Longitude](../images/emergencyApp/SetGlobalLontoLocLon.png){:.enlargeImage}

* תחת <strong>LocationSensor1</strong>, גררו את הבלוק `LocationSensor1.ReverseGeocode` וחברו אותו לתוך `when GetLocationButton.Click`. פונקציית Reverse Geocode משמשת לקבלת הכתובת הפיזית בהינתן קואורדינטות קו הרוחב וקו האורך.
![Reverse Geocode](../images/emergencyApp/LocSenReverseGeo.png){:.enlargeImage}

* תחת <strong>Variables</strong>, חברו בלוקי `get` של `global latitude` ו-`global longitude` לשדות המתאימים בבלוק `LocationSensor1.ReverseGeocode`.
![Get Latitude and Longitude](../images/emergencyApp/GeocodeLatandLon.png){:.enlargeImage}
![Global Latitude and Longitude](../images/emergencyApp/SetGeoLatLon.png){:.enlargeImage}

* עדכון התוויות במסך: תחת <strong>LattitudeLabel</strong>, חברו את `set LattitudeLabel.Text to` ל-`get global latitude`. תחת <strong>LongitudeLabel</strong>, חברו את `set LongitudeLabel.Text to` ל-`get global longitude`.
![Set Latitude Label](../images/emergencyApp/SetLatLabel.png){:.enlargeImage}
![Latitdue Label Text](../images/emergencyApp/LatLabelText.png){:.enlargeImage}
![Latitude Label Set Text](../images/emergencyApp/LatLabelGlobalLat.png){:.enlargeImage}
![Set Longitude Label](../images/emergencyApp/SetLonLabelText.png){:.enlargeImage}
![Longitude Label Text](../images/emergencyApp/LonText.png){:.enlargeImage}
![Longitude Label Set Text](../images/emergencyApp/LonLabelGlobalLon.png){:.enlargeImage}

* עדכון המפה והסמן: חברו את הבלוק `call Map1.PanTo` עם המשתנים `global latitude` ו-`global longitude`, והגדירו zoom ל-18 (רמת פירוט לרחוב).
![Pan Map](../images/emergencyApp/MapPanTo.png){:.enlargeImage}
![Pan Latitude and Longitude](../images/emergencyApp/PanLatLon.png){:.enlargeImage}
![Global Variables Pan](../images/emergencyApp/PanSetLonLat.png){:.enlargeImage}
![Zoom Set](../images/emergencyApp/MapZoom.png){:.enlargeImage}
![Zoom Number](../images/emergencyApp/Zoom18.png){:.enlargeImage}

* חברו את `call Marker1.SetLocation` עם המשתנים `global latitude` ו-`global longitude` כדי למקם את הסמן במיקום המדויק.
![Call Marker Set Location](../images/emergencyApp/CallMarkerSetLoc.png){:.enlargeImage}
![Marker Variables](../images/emergencyApp/MarkerLatLon.png){:.enlargeImage}
![Marker Set Latitude and Longitude](../images/emergencyApp/MarkerSetLonLat.png){:.enlargeImage}

## קבלת כתובת (Getting Address)

* הגדירו משתנה גלובלי חדש בשם `currentAddress` ואתחלו אותו במחרוזת טקסט ריקה `""`.
![Initalize Address](../images/emergencyApp/initAddress.png){:.enlargeImage}
![Name Address Variable](../images/emergencyApp/NameCurrentAddress.png){:.enlargeImage}
![Address Empty](../images/emergencyApp/AddressEmpty.png){:.enlargeImage}

* תחת <strong>LocationSensor1</strong>, גררו את הבלוק `when LocationSensor1.GotAddress`.
![When Location Sensor Got Address](../images/emergencyApp/WhenGotAddress.png){:.enlargeImage}

* בתוכו, הגדירו את `global currentAddress` ואת `AddressLabel.Text` לקבלת ערך הפרמטר `address`.
![Set Address](../images/emergencyApp/SetAddress.png){:.enlargeImage}
![Global Address](../images/emergencyApp/pickCurrentAddress.png){:.enlargeImage}
![Get Address](../images/emergencyApp/setCurrentAddress.png){:.enlargeImage}
![Address Label](../images/emergencyApp/SetAddressLabel.png){:.enlargeImage}
![Get Address for Label](../images/emergencyApp/LocationTextCurrentAddress.png){:.enlargeImage}

## איפוס תוויות (Reset Labels)

תחת הבלוק `when ResetButton.Click`:
* שנו את `LattitudeLabel.Text` ל-`"0.0"`.
![Reset Latitude Label](../images/emergencyApp/ClearLatLabel.png){:.enlargeImage}
![Latitue Label Empty](../images/emergencyApp/LatLabelReset.png){:.enlargeImage}
![Latitude 0.0](../images/emergencyApp/Lat0.0.png){:.enlargeImage}

* שנו את `LongitudeLabel.Text` ל-`"0.0"`.
![Reset Longitude Label](../images/emergencyApp/ClearLonLabel.png){:.enlargeImage}
![Longitude Label Empty](../images/emergencyApp/ResetLon.png){:.enlargeImage}
![Longitude 0.0](../images/emergencyApp/Lon0.0.png){:.enlargeImage}

* שנו את `AddressLabel.Text` ל-`"Current Address"`.
![Reset Address Label](../images/emergencyApp/ClearAddressLabel.png){:.enlargeImage}
![Address Label Empty](../images/emergencyApp/ResetAddress.png){:.enlargeImage}
![Address Label Text](../images/emergencyApp/AddressCurrentAddress.png){:.enlargeImage}

## הקלטת הודעה (Record Message)

* תחת <strong>RecordMessageButton</strong>, גררו את `when RecordMessageButton.Click` וחברו אליו את `call SpeechRecognizer1.GetText`.
![When Record Message Button](../images/emergencyApp/WhenRecordMessage.png){:.enlargeImage}
![Call Speech Recognizer](../images/emergencyApp/CallSpeechRecognizer.png){:.enlargeImage}

* תחת <strong>SpeechRecognizer1</strong>, גררו את `when SpeechRecognizer1.AfterGettingText` והגדירו בתוכו את `MessageTextBox.Text` לערך הפרמטר `result`.
![Speech Recognizer After Text](../images/emergencyApp/SpeechAfterText.png){:.enlargeImage}
![Message Text Box](../images/emergencyApp/SetMessageTextBox.png){:.enlargeImage}
![Message Text](../images/emergencyApp/getResultText.png){:.enlargeImage}

## צילום תמונה (Take Photo)

* תחת <strong>TakePhotoButton</strong>, גררו את `when TakePhotoButton.Click` וחברו אליו את `call Camera1.TakePicture`.
![When Take Photo Button](../images/emergencyApp/WhenTakePhoto.png){:.enlargeImage}
![Call Camera](../images/emergencyApp/CallCameraTakePic.png){:.enlargeImage}

* צרו משתנה גלובלי בשם `photoFile` ואתחלו אותו בטקסט ריק.
![Initialize Photo File](../images/emergencyApp/initPhotoFile.png){:.enlargeImage}
![Photo File Name](../images/emergencyApp/NamePhotoFile.png){:.enlargeImage}
![Photo File Empty](../images/emergencyApp/PhotoFileEmpty.png){:.enlargeImage}

* תחת <strong>Camera1</strong>, גררו את `when Camera1.AfterPicture` והגדירו בתוכו את `global photoFile` לערך הפרמטר `image`.
![After Picture](../images/emergencyApp/CameraAfterPic.png){:.enlargeImage}
![Set Photo](../images/emergencyApp/SetPhotoFile.png){:.enlargeImage}
![Global Photo File](../images/emergencyApp/chooseGlobalPhotoFile.png){:.enlargeImage}
![Set Image](../images/emergencyApp/getImage.png){:.enlargeImage}

## איפוס הודעה ותמונה

תחת הבלוק `when ResetButton.Click`:
* שנו את `MessageTextBox.Text` לטקסט ריק `""`.
![Reset Message](../images/emergencyApp/ClearMessage.png){:.enlargeImage}
![Message Empty](../images/emergencyApp/MessageEmpty.png){:.enlargeImage}

* שנו את `global photoFile` לטקסט ריק `""`.
![Reset Photo](../images/emergencyApp/ClearPhotoFile.png){:.enlargeImage}
![Global Photo File Reset](../images/emergencyApp/SelectPhotoFile.png){:.enlargeImage}
![Photo File Empty](../images/emergencyApp/PhotoFileEmptyText.png){:.enlargeImage}

## שיתוף מידע (Share Information)

* תחת <strong>ShareButton</strong>, גררו את הבלוק `when ShareButton.Click` וחברו לתוכו את `call Sharing1.ShareFileWithMessage`.
![When Share Button](../images/emergencyApp/WhenShare.png){:.enlargeImage}
![Call Sharing](../images/emergencyApp/ShareFileWMessage.png){:.enlargeImage}

* עבור הפרמטר `file`, העבירו את הבלוק `get global photoFile`.
![Sharing File](../images/emergencyApp/ShareFile.png){:.enlargeImage}
![Photo File Share](../images/emergencyApp/ChoosePhotoFile.png){:.enlargeImage}

* עבור הפרמטר `message`, חברו בעזרת הבלוק `join` מתוך <strong>Text</strong> את הטקסטים והמשתנים הבאים לפי הסדר:
  1. `"Information about my whereabouts in case needed:... "`
  2. `get global currentAddress`
  3. `"\n ("` (שורת טקסט חדשה)
  4. `get global latitude`
  5. `", "`
  6. `get global longitude`
  7. `") \n\n"`
  8. `MessageTextBox.Text`
  9. `"\n\nPlease save this in case of an emergency"`

![Join Message](../images/emergencyApp/MessageJoin.png){:.enlargeImage}
![Message 1](../images/emergencyApp/Message1.png){:.enlargeImage}
![Message 1 Text](../images/emergencyApp/text1.png){:.enlargeImage}
![Message 2](../images/emergencyApp/Message2.png){:.enlargeImage}
![Message 2 Content](../images/emergencyApp/SetText2.png){:.enlargeImage}
![Message 3](../images/emergencyApp/Message3.png){:.enlargeImage}
![Message 3 Content](../images/emergencyApp/Message3Content.png){:.enlargeImage}
![Message 4](../images/emergencyApp/Message4.png){:.enlargeImage}
![Message 4 Content](../images/emergencyApp/Message4Content.png){:.enlargeImage}
![Message 5](../images/emergencyApp/Message5.png){:.enlargeImage}
![Message 5 Content](../images/emergencyApp/SetText5.png){:.enlargeImage}
![Message 6](../images/emergencyApp/Message6.png){:.enlargeImage}
![Message 6 Content](../images/emergencyApp/SetText6.png){:.enlargeImage}
![Message 7](../images/emergencyApp/Message7.png){:.enlargeImage}
![Message 7 Content](../images/emergencyApp/setText7.png){:.enlargeImage}
![Message 8](../images/emergencyApp/Message8.png){:.enlargeImage}
![Message 9](../images/emergencyApp/Message9.png){:.enlargeImage}
![Message 9 Content](../images/emergencyApp/setText9.png){:.enlargeImage}

## בלוקים סופיים (Finished Blocks)

כל הכבוד! השלמתם את בניית הבלוקים לאפליקציית החירום.

![Finished Blocks](../images/emergencyApp/Final.png){:.enlargeImage}

## בדיקת האפליקציה (Testing the app)

סרקו את קוד ה-QR שנוצר ב-AI2 Companion כדי לבדוק את האפליקציה בטלפון. נסו להשתמש במפה, להקליט הודעה קצרה ולצלם תמונה, ולאחר מכן שתפו את המידע עם איש קשר (מומלץ להודיע מראש שמדובר בבדיקה). כמו כן, לחצו על לחצן החירום כדי לוודא שצליל האזעקה פועל כראוי. ודאו שכל ההרשאות הנדרשות (מיקום, מצלמה, מיקרופון) מאושרות במכשיר.

![QR Code](../images/simpleChatBot/QRCode.png){:.enlargeImage}

## שמירת האפליקציה (Saving the app)

באפליקציית Companion ניתן לשמור פרויקט בלחיצה על האייקון בפינה הימנית העליונה ובחירה ב-"Download Project". בפעם הבאה שתפתחו את האפליקציה, הפרויקט יופיע תחת "my saved apps".

![Download Project](../images/emergencyApp/DownloadProj.png){:.enlargeImage}
![Saved Apps](../images/emergencyApp/SavedApps.png){:.enlargeImage}

# הרחבת האפליקציה (Expand Your App)

רעיונות לשדרוג האפליקציה:
* הוספת טיימר ספירה לאחור לפני שליחת התראות, המאפשר ביטול במקרה של הפעלה מקרית.
* יצירת יומן התראות המתעד מתי ואיפה נשלחו התראות בעבר.
* אפשרות לבחירת שפת ההודעות הנשלחות בזמן חירום.
* שליחת הודעת טקסט לקבוצת אנשי קשר מועדפים בלחיצת כפתור אחת (הפרדת מספרים באמצעות פסיקים).

רמזים:
![Safe List Hint](../images/emergencyApp/Hint1.png){:.enlargeImage}
![Social Texting Hint](../images/emergencyApp/Hint2.png){:.enlargeImage}
![Comma Seperation Hint](../images/emergencyApp/Hint3.png){:.enlargeImage}

</div>