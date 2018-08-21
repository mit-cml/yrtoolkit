# yrtoolkit

<b>Updated 8/21/18</b>
<br></br>
<p>This toolkit was developed as part of the Youth Radio "Youth Mobile Power" grant. As such, much of this documentation refers to the toolkit as the "yrtoolkit" - however, this can (and is used) in many non-Youth Radio App Inventor implementations. Depending on your implementation, some of the commands may have slightly different names.</p>

<br></br><p><b>Why is it the “yrtoolkit”? </b></p>
<p>Youth Radio Toolkit, which is how this tutorial toolkit was started.</p>
<p>Youth Radio Interactive is the technical branch of Youth Radio. They are exploring alternate ways of telling their stories, such as through mobile apps. You may see “Youth Mobile Power” thrown around, as well. </p>
<p>Our contacts are Lissa Soep and Asha Richardson. Paul Medlock-Walton was the MIT person running point on this until he went to Thunkable. Then it moved to Farzeen Harunani. </p>

<br></br><p><b>Where do the tutorials live? </b></p>
<p>Technically, here: http://appinventor.mit.edu/yrtoolkit/</p>
<p>Or, on github, mit-cml/yrtoolkit</p>
<p>That being said, anything in yrtoolkit/tutorials will show up directly at the above link. The rest need to be pointed at via specific links.</p>

<br></br><p><b>The Two Systems </b></p>
<p>Well, why on earth would you need to hard link some tutorials and not others? </p>
<p>It's because there are actually two systems of tutorials buried within a single toolkit, for reasons unknown. I call them the "standalone" tutorials and the "grouped" tutorials. They are NOT interchangeable. All the grouped tutorials are within yrtoolkit/tutorials. The standalone tutorials currently have three homes: yrtoolkit/yr/tutorials, yrtoolkit/malden/tutorials, and yrtoolkit/mcsp. YR tutorials are the ones requested by Youth Radio, alone with some others that we use often (like the Hour of Code activity, accessible at http://bit.ly/MITAppInventorHoC). Malden tutorials are related to a Computational Action study done in Malden High School. MCSP tutorials are controlled by Beryl Hoffman at Mobile CSP. </p>

<br></br><p><b>Adding a Tutorial to Your MIT App Inventor Project </b></p>
<p>So you want to add a tutorial to your project? All you need to do is specify the TutorialURL property of Screen1! For security reasons, you can only use a tutorial with an App Inventor URL. This means that technically, any App Inventor URL will work. That doesn’t mean every website looks good in a little sidebar. </p>
<p>If you want one of the toolkit tutorials, specify the URL such as: http://appinventor.mit.edu/yrtoolkit/yr/tutorials/snapRemix.html.</p> 
<p>Because this is a full html page this will look correct. If you put in one of the grouped tutorials, it won’t function correctly. If you want to link the grouped tutorials, just put http://appinventor.mit.edu/yrtoolkit as the TutorialURL.</p>

<br></br><p><b>Running a Local Copy of the Toolkit </b></p>
<p>Run “python -m SimpleHTTPServer” to start the yrtoolkit on port 8000</p>
<p>If you want to view your local copy of your tutorials while testing, change Ode.java in your local copy of App Inventor to allow any URL in the TutorialURL property. </p>

<br></br><p><b>So you want to add a new tutorial?  </b></p>
<p>For a grouped tutorial? Easy. Add your html page in the tutorials folder, images to a new folder under images/ and your starter aia under aiaFiles. Use the convert asc python script to convert your aia to an asc ("python convertToAsc.py FileToConvert") and keep that .asc in the folder as well. Finally, add it to tutorials/tutorials.html. Done! The format should mirror anything else in the tutorials folder. </p>
<p>However, if this is a tutorial you want to function as a standalone tutorial, add the HTML file (which should mirror any other standalone tutorial) under the yr/tutorials folder (or whatever other folder is appropriate). Add your images under yr/images/NEW_TUTORIAL/. Make sure the TutorialURL property is filled in correctly in your .aia to point at your new HTML file! Convert that aia into an asc using "python convertToAsc.py FileToConvert". Drop both the aia and asc files into yr/aiaFiles/NEW_TUTORIAL/. </p>
<p>In order to have an .asc file that will open up to an App Inventor project with the appropriate tutorial, the link will be as such: http://ai2.appinventor.mit.edu/?locale=en&repo=http://appinventor.mit.edu/yrtoolkit/path/to/file.asc</p>

<br></br><p><b>Pushing to the Real World </b></p>
<p>Update master branch! A git hook will do the work of putting it on the site for you. </p>
