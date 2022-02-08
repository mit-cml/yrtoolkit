# MIT App Inventor Sidebar Tutorials

This toolkit was developed as part of the Youth Radio "Youth Mobile Power" grant. As such, much of this documentation refers to the toolkit as the "yrtoolkit" - however, this can (and is used) in many non-Youth Radio App Inventor implementations. Depending on your implementation, some of the commands may have slightly different names.

## Setup

Need:

* git 2.11 or later
* ruby 2.6
* bundler 2.0.1

1. Clone the repository:

        git clone git@github.com:mit-cml/yrtoolkit.git
        cd yrtoolkit

2. Install dependencies:

        bundle install --path vendor/bundle

## Run

1. Start the Jekyll server:

        bundle exec jekyll serve -b /yrtoolkit

2. Edit any tutorial files. Jekyll will rebuild the site as changes are made.
3. In App Inventor, you can set the TutorialURL of Screen1 to view the tutorial based on the path in the file tree. For example, `yr/tutorials/markdown-tutorial.md` becomes `http://localhost:4000/yrtoolkit/yr/tutorials/markdown-tutorial.html`.

## Publish

1. Before publishing your template project, make sure to change the domain to `appinventor.mit.edu` from `localhost:4000`.
2. Convert your AIA file to ASC:

        base64 template.aia | tr -d '\n' > tutorial.asc

3. Deploy your ASC file on a server that supports CORS headers from ai2.appinventor.mit.edu/code.appinventor.mit.edu (such as this repository, which is published with GitHub pages).

## Adding a Tutorial to your MIT App Inventor Project

So you want to add a tutorial to your project? All you need to do is specify the TutorialURL property of Screen1! For security reasons, you can only use a tutorial with an App Inventor URL. This means that technically, any App Inventor URL will work. That doesn’t mean every website looks good in the sidebar.

If you want one of the toolkit tutorials, specify the URL such as: http://appinventor.mit.edu/yrtoolkit/yr/tutorials/snapRemix.html.

Because this is a full html page this will look correct. If you put in one of the grouped tutorials, it won’t function correctly. If you want to link the grouped tutorials, just put http://appinventor.mit.edu/yrtoolkit as the TutorialURL.

## FAQ

### Why is it the “yrtoolkit”?

yrtoolkit stands for Youth Radio Toolkit, which is how this tutorial toolkit was started. Youth Radio has since rebranded as YR Media.

Youth Radio Interactive is the technical branch of Youth Radio. They are exploring alternate ways of telling their stories, such as through mobile apps. You may see “Youth Mobile Power” thrown around, as well.

### Where do the tutorials live?

The tutorials are served to the world at http://appinventor.mit.edu/yrtoolkit/, although they are usually embedded in App Inventor template projects using the TutorialURL property on Screen1. The source materials are hosted on GitHub at https://github.com/mit-cml/yrtoolkit.

**The Two Systems**

There are actually two systems of tutorials within this toolkit, called the "standalone" tutorials and the "grouped" tutorials. They are NOT interchangeable. All the grouped tutorials are within tutorials. The standalone tutorials currently have three homes: yr/tutorials, malden/tutorials, and mcsp. YR tutorials are the ones in collaboration with YR Media, alone with some others that we use often (like the Hour of Code activity, accessible at http://bit.ly/MITAppInventorHoC). Malden tutorials are related to a Computational Action study done in Malden High School. MCSP tutorials are controlled by Beryl Hoffman at Mobile CSP. </p>

**Last Updated: 2022-02-08**
