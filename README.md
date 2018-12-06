# XCTest-React-native

Automate UI Testing with React Native on iOS

Steps to create UI Test cases

  - Add ```testID={"element_identifier_name"} & accessible={false}``` to elements
  - Create ```iOS UI Testing bundle```
  - Edit ```YOUR_PROJECT_NAME_Tests.swift```
  - Edit ```testExample()```
  - Example 
  ``` 
    let app = XCUIApplication()
    app.textFields["element_identifier_name"].tap
    app.textFields["element_identifier_name"].typeText("xyz")
    app.staticTexts["xyz"].tap()```
