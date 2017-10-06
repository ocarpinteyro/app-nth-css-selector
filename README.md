# :NTH CSS Selector

**:NTH CSS Selector** can test the equations of the CSS Selectors. Simple and easy to use. Designed with simplicity, usability and beauty in mind. Made with [React Native](https://facebook.github.io/react-native/docs/getting-started.html).

## Why Open-Source?

I want to share this project with everyone to help them to learn and understand how React Native works, **using this real-world iOS App**. Feel free to comment or make questions, I'm here to help if I can. Let's go!

> Note: This APP is not available in the App Store right now :'(

## Global dependencies

You need to install the React Native dependencies. Basically they are:

* Node
* Watchman
* React Native
* Xcode
* Xcode Command Line Tools

More info: [React Native Official Website](https://facebook.github.io/react-native/docs/getting-started.html)

This project in particular runs with next versions:

* Node v6.11.3
* Watchman v4.9.0
* React Native CLI v2.0.1
* Xcode v8.3.3

> Note: See the package.json for other dependencies. I using a basic lock for them.

## Installation

To install the project dependencies, run in terminal:

```sh
$ npm install
```

## To run the app in Simulator

##### Step 1: Open the Xcode Project

Open the next file with Xcode:

```sh
$YOUR_PROJECT_PATH/ios/nthapp.xcodeproj
```

##### Step 2: Build and the run the current scheme

In Xcode select a device and hit the `Run` button and you got it!

## Demo application running

![demo](demo_app_running.gif?raw=true)

## How the app works

The core files are:

* `index.ios.js` for initial load and navigator config
* `components/ios/Welcome.js` to Welcome View. In this view you can share the app.
* `components/ios/NthChild.js` to NTH-CHILD View. Here, I show the main form with a basic input text to introduce the :nth-child equation.
* `components/ios/KernelEquation.js` to calculate the nth-child items to select.
* `components/ios/HelpNthChild.js` to HELP View.

Others:

* `components/ios/in_array.js` is a simple script to find an element in array.

## 3rd Party dependencies

I want to thank you the next 3rd party dependencies and projects that are used in the app:

* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) to use some FontAwesome icons
* [react-native-activity-view](https://github.com/naoufal/react-native-activity-view) for app sharing

## Promote the app

I used a simple [GitHub Page](https://pages.github.com/) To promove this app [:nth application site](http://ocarpinteyro.github.io/nth-app/).

## Getting Help

Please use the community resources for getting general help. I use the GitHub issues for tracking bugs and feature requests or you can send me a tweet anytime.

## Know issues

##### [Getting Started] Error: ignoring return value of function declared with warn_unused_result attribute

Just doubleclick on the `RCTWebSocket` project in your navigator and remove the flags under `Build Settings > Custom Compiler Flags`

## Opening Issues

If you encounter a bug, let me know. Search the existing issues and try to make sure your problem doesn't already exist before opening a new issue.

This app is open source software, and I welcome contribution from the wider community. If you are able to fix your bug, or find a way to fix another existing issue, I encourage you to submit a Pull Request to address it.

## Contributing

Contributions will be licensed under the [MIT license](https://opensource.org/licenses/MIT). Please fork the repository, perform your work on a feature branch, and submit a pull request to this repository's master branch from your fork's branch.

## Acknowledgments

Sorted alphabetically by nickname:

* [@ACIDminds](https://twitter.com/acidminds?lang=en): (Ulises Rivera) for some design improvements.

## Me

[@OCarpinteyro](https://twitter.com/ocarpinteyro) on Twitter.
