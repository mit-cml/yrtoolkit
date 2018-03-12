# yrtoolkit

<b>Updated 2/26/18</b>
<br></br>
<p>This toolkit was developed as part of the Youth Radio "Youth Mobile Power" grant. As such, much of this documentation refers to the toolkit as the "yrtoolkit" - however, this can (and is used) in many non-Youth Radio App Inventor implementations. Depending on your implementation, some of the commands may have slightly different names.</p>

<br></br><p><b>Why is it the “yrtoolkit”? </b></p>
<p>Youth Radio Toolkit, which is how this tutorial toolkit was started.</p>
<p>Youth Radio Interactive is the technical branch of Youth Radio. They are exploring alternate ways of telling their stories, such as through mobile apps. You may see “Youth Mobile Power” thrown around, as well. </p>
<p>Our contacts are Lissa Soep and Asha Richardson. Paul Medlock-Walton was the MIT person running point on this until he went to Thunkable. Now the point person is Farzeen Harunani. </p>

<br></br><p><b>Where do the tutorials live? </b></p>
<p>Technically, here: http://appinventor.mit.edu/yrtoolkit/</p>
<p>Or, on github, mit-cml/yrtoolkit</p>

<br></br><p><b>Specifying the TutorialURL Property </b></p>
<p>So you want to add a tutorial URL to your project? For security reasons, you can only use a tutorial with an App Inventor URL. This means that technically, any App Inventor URL will work. That doesn’t mean every website looks good in a little sidebar. </p>
<p>If you want one of the toolkit tutorials, specify the URL such as: http://appinventor.mit.edu/yrtoolkit/yr/tutorials/snapRemix.html.</p> 
<p>Because this is a full html page this will look correct. If you put in something like the Hello Codi tutorial (yrtoolkit/tutorials/hello_codi.html), it won’t look correct, as this was not meant to stand by itself. </p>

<br></br><p><b>Running a Local Copy of the Toolkit </b></p>
<p>Run “python -m SimpleHTTPServer” to start the yrtoolkit on port 8000</p>
<p>If you want to view your local copy of your tutorials while testing, change Ode.java in your local copy of App Inventor to allow any URL in the TutorialURL property. </p>

<br></br><p><b>So you want to add a new tutorial?  </b></p>
<p>Easy. Add your html page in the tutorials folder, images to a new folder under images/ and your starter aia under aiaFiles. Also, use the convert asc python script to convert your aia to an asc and keep that in the folder as well. Finally, add it to tutorials/tutorials.html. Done! </p>
<p>However, if this is a tutorial you want to function as a standalone (such as a full-blown youth radio tutorial), add it under the yr folder (images, html, aia, asc as necessary). Modify your html file to be full-blown/standalone, with the headers and everything (TODO add details). </p>

<br></br><p><b>Pushing to the Real World </b></p>
<p>Update master branch! A git hook will do the work of putting it on the site for you. </p>
