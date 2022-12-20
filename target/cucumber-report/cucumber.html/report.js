$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktops.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Test",
  "description": "as a user I want to check Desktop menu",
  "id": "desktop-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4110739100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verifyProductAddedToShoppingCartSuccessFully()",
  "description": "",
  "id": "desktop-test;verifyproductaddedtoshoppingcartsuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on currency link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "chane currency to pound",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Mouse hover on Desktops Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Show All Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select Sort By position Name A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select product HP LP3065",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify the Text HP LP3065",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Delivery Date 2022-11-30",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#    And Enter Qty 1 using Select class"
    }
  ],
  "line": 15,
  "name": "Click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the Message Success: You have added HP LP3065 to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the text Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the Product name HP LP3065",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#    And Verify the Delivery Date 2022-11-30"
    }
  ],
  "line": 21,
  "name": "Verify the Model Product21",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the Total £74.73",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 117883900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.clickOnCurrencyLink()"
});
formatter.result({
  "duration": 88655100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.chaneCurrencyToPound()"
});
formatter.result({
  "duration": 549855300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.mouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 65373100,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.clickOnShowAllDesktops()"
});
formatter.result({
  "duration": 762666400,
  "status": "passed"
});
formatter.match({
  "location": "DesktopSteps.selectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 484246200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 20
    }
  ],
  "location": "DesktopSteps.selectProductHPLP()"
});
formatter.result({
  "duration": 221700,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.demo.cucumber.steps.DesktopSteps.selectProductHPLP() in file:/C:/Users/viren/IdeaProjects/com.tutorialsninja.demo-wk-16-virenpatel/target/test-classes/\u0027 with pattern [^Select product HP LP(\\d+)$] is declared with 0 parameters. However, the gherkin step has 1 arguments [3065]. \nStep: And Select product HP LP3065\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 21
    }
  ],
  "location": "DesktopSteps.verifyTheTextHPLP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 21
    },
    {
      "val": "11",
      "offset": 26
    },
    {
      "val": "30",
      "offset": 29
    }
  ],
  "location": "DesktopSteps.selectDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 48
    }
  ],
  "location": "DesktopSteps.verifyTheMessageSuccessYouHaveAddedHPLPToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopSteps.verifyTheTextShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 29
    }
  ],
  "location": "DesktopSteps.verifyTheProductNameHPLP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 24
    }
  ],
  "location": "DesktopSteps.verifyTheModelProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "74",
      "offset": 18
    },
    {
      "val": "73",
      "offset": 21
    }
  ],
  "location": "DesktopSteps.verifyTheTodat£()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 830807600,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "TopMenu Test",
  "description": "as a user I want to check topmenu Tab",
  "id": "topmenu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2830478200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verifyUserShouldNavigateToDesktopsPageSuccessfully",
  "description": "",
  "id": "topmenu-test;verifyusershouldnavigatetodesktopspagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse hover on “Desktops” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "call selectMenu method and pass the menu \u003d Show All Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the text ‘Desktops’",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.mouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 74396700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.callSelectMenuMethodAndPassTheMenuShowAllDesktops()"
});
formatter.result({
  "duration": 783352900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyTheTextDesktops()"
});
formatter.result({
  "duration": 33101600,
  "status": "passed"
});
formatter.after({
  "duration": 651173000,
  "status": "passed"
});
formatter.before({
  "duration": 2652968700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verifyUserShouldNavigateToLaptopsAndNotebooksPageSuccessfully",
  "description": "",
  "id": "topmenu-test;verifyusershouldnavigatetolaptopsandnotebookspagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Mouse hover on “Laptops \u0026 Notebooks” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "call selectMenu method and pass the menu \u003d Show All Laptops \u0026 Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the text ‘Laptops \u0026 Notebooks’",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.mouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 73879100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.callSelectMenuMethodAndPassTheMenuShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 599819900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyTheTextLaptopsNotebooks(int,int)"
});
formatter.result({
  "duration": 136000,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.demo.cucumber.steps.HomePageSteps.verifyTheTextLaptopsNotebooks(int,int) in file:/C:/Users/viren/IdeaProjects/com.tutorialsninja.demo-wk-16-virenpatel/target/test-classes/\u0027 with pattern [^Verify the text ‘Laptops \u0026 Notebooks’$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: Then Verify the text ‘Laptops \u0026 Notebooks’\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 866584600,
  "status": "passed"
});
formatter.before({
  "duration": 2802116000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "verifyUserShouldNavigateToComponentsPageSuccessfully",
  "description": "",
  "id": "topmenu-test;verifyusershouldnavigatetocomponentspagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Mouse hover on “Components” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "call selectMenu method and pass the menu \u003d Show All Components",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the text ‘Components’",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.mouseHoverOnComponentsTabAndClick()"
});
formatter.result({
  "duration": 77386700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.callSelectMenuMethodAndPassTheMenuShowAllComponents()"
});
formatter.result({
  "duration": 57849100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyTheTextComponents()"
});
formatter.result({
  "duration": 40108148400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Components\u0027)]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ee55f7b5b5f10119a37ca6fc5beeabc3, findElement {using\u003dxpath, value\u003d//h2[contains(text(),\u0027Components\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52684}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52684/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ee55f7b5b5f10119a37ca6fc5beeabc3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat com.tutorialsninja.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.tutorialsninja.demo.pages.HomePage.getVerifyText2(HomePage.java:74)\r\n\tat com.tutorialsninja.demo.cucumber.steps.HomePageSteps.verifyTheTextComponents(HomePageSteps.java:58)\r\n\tat ✽.Then Verify the text ‘Components’(homepage.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1033394100,
  "status": "passed"
});
formatter.uri("laptopandnotebooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebooks Test",
  "description": "as a user I want to check LaptopAndNotebooks Tab",
  "id": "laptop-and-notebooks-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6073196300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verifyProductsPriceDisplayHighToLowSuccessfully()",
  "description": "",
  "id": "laptop-and-notebooks-test;verifyproductspricedisplayhightolowsuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Mouse hover on Laptops \u0026 NotebooksTabandclick",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on Show All Laptops \u0026 Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select Sort By Price (High \u003e Low)",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 65700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.mouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 153791900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 744822500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.selectSortByPriceHighLow()"
});
formatter.result({
  "duration": 1064804100,
  "status": "passed"
});
formatter.after({
  "duration": 867595300,
  "status": "passed"
});
formatter.before({
  "duration": 3867154900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verifyThatUserPlaceOrderSuccessfully()",
  "description": "",
  "id": "laptop-and-notebooks-test;verifythatuserplaceordersuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Mouse hover on Laptops \u0026 NotebooksTabandclick1",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Click on Show All Laptops \u0026 Notebooks1",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Sort By Price (High \u003e Low)",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select Product MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the text MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Click on Add To Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the message Success: You have added MacBook to your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the text \"Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Product name \"MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Change Quantity two",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on Update Tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify the message Success: You have modified your shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Total",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the text Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Text New Customer",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Guest Checkout radio button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Add Comments About your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify the message Warning: Payment method required",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.mouseHoverOnLaptopsNotebooksTabAndClick1()"
});
formatter.result({
  "duration": 75097500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnShowAllLaptopsNotebooks1()"
});
formatter.result({
  "duration": 555235500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.selectSortByPriceHighLow()"
});
formatter.result({
  "duration": 582323600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.selectProductMacBook()"
});
formatter.result({
  "duration": 1063128700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextMacBook()"
});
formatter.result({
  "duration": 36155900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnAddToCartButton()"
});
formatter.result({
  "duration": 120444500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart()"
});
formatter.result({
  "duration": 190589600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage1()"
});
formatter.result({
  "duration": 389448100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextShoppingCart()"
});
formatter.result({
  "duration": 40080418200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Laptops \u0026 Notebooks\u0027)]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fd309abecc32ca0aa10c5eec4e3edfce, findElement {using\u003dxpath, value\u003d//h2[contains(text(),\u0027Laptops \u0026 Notebooks\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52743}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52743/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd309abecc32ca0aa10c5eec4e3edfce\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.getText(Unknown Source)\r\n\tat com.tutorialsninja.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.tutorialsninja.demo.pages.LaptopsAndNotebooks.getVerifyCart(LaptopsAndNotebooks.java:219)\r\n\tat com.tutorialsninja.demo.cucumber.steps.LaptopAndNoteBooksSteps.verifyTheTextShoppingCart(LaptopAndNoteBooksSteps.java:76)\r\n\tat ✽.And Verify the text \"Shopping Cart(laptopandnotebooks.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheProductNameMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.changeQuantity(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnUpdateTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheMessageSuccessYouHaveModifiedYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheTextNewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.addCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.checkTheTermsConditionsCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueButton2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.verifyTheMessageWarningPaymentMethodRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 896962900,
  "status": "passed"
});
formatter.uri("myaccount.feature");
formatter.feature({
  "line": 1,
  "name": "My Account Test",
  "description": "as a user I want to check My Account",
  "id": "my-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3490645900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "verifyUserShouldNavigateToRegisterPageSuccessfully()",
  "description": "",
  "id": "my-account-test;verifyusershouldnavigatetoregisterpagesuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Call the method selectMyAccountOptions method and pass the parameter Register",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify the text Register Account",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 146795500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterRegister()"
});
formatter.result({
  "duration": 20976366700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.verifyTheTextRegisterAccount()"
});
formatter.result({
  "duration": 29515100,
  "status": "passed"
});
formatter.after({
  "duration": 723681200,
  "status": "passed"
});
formatter.before({
  "duration": 3248146500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verifyUserShouldNavigateToLoginPageSuccessfully()",
  "description": "",
  "id": "my-account-test;verifyusershouldnavigatetologinpagesuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Call the method selectMyAccountOptions method and pass the parameter Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the text Returning Customer",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 97675000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin()"
});
formatter.result({
  "duration": 412677400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.verifyTheTextReturningCustomer()"
});
formatter.result({
  "duration": 77316400,
  "status": "passed"
});
formatter.after({
  "duration": 751236200,
  "status": "passed"
});
formatter.before({
  "duration": 2684347900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verifyThatUserRegisterAccountSuccessfully()",
  "description": "",
  "id": "my-account-test;verifythatuserregisteraccountsuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I Click on My Account Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Call the method “selectMyAccountOptions method and pass the parameter Register",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Enter First Name",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter Email",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter Telephone",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter Password Confirm",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select Subscribe Yes radio button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the message “Your Account Has Been Created",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Clickr on My Account Link.",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Call the method “selectMyAccountOptions” method and pass the parameter Logout",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Verify the text “Account Logout”",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 22600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 46252800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterRegister1()"
});
formatter.result({
  "duration": 20627620800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterFirstName()"
});
formatter.result({
  "duration": 82315900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterLastName()"
});
formatter.result({
  "duration": 103359400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterEmail()"
});
formatter.result({
  "duration": 105466800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterTelephone()"
});
formatter.result({
  "duration": 75967300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterPassword()"
});
formatter.result({
  "duration": 60318700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterPasswordConfirm()"
});
formatter.result({
  "duration": 71414200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.selectSubscribeYesRadioButton()"
});
formatter.result({
  "duration": 55175100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.clickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 52106000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueButton2()"
});
formatter.result({
  "duration": 20046964000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027button-payment-method\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c05f702731ea9854777d2c58edc23f84, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027button-payment-method\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52845}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52845/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c05f702731ea9854777d2c58edc23f84\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat com.tutorialsninja.demo.utility.Utility.clickOnElement(Utility.java:46)\r\n\tat com.tutorialsninja.demo.pages.LaptopsAndNotebooks.clickContinue(LaptopsAndNotebooks.java:350)\r\n\tat com.tutorialsninja.demo.cucumber.steps.LaptopAndNoteBooksSteps.clickOnContinueButton2(LaptopAndNoteBooksSteps.java:204)\r\n\tat ✽.And Click on Continue button(myaccount.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountSteps.verifyTheMessageYourAccountHasBeenCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueButton2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountSteps.clickrOnMyAccountLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountSteps.verifyTheTextAccountLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksSteps.clickOnContinueButton2()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 831336500,
  "status": "passed"
});
formatter.before({
  "duration": 3111863300,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "verifyThatUserShouldLoginAndLogoutSuccessfully()",
  "description": "",
  "id": "my-account-test;verifythatusershouldloginandlogoutsuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Click on MyAccount Link4",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Call the method selectMyAccountOptions method and pass the parameter Login",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Enter Email address",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "#    And Enter LastName"
    }
  ],
  "line": 42,
  "name": "Enter Pass word",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#    And Verify text My Account"
    }
  ],
  "line": 45,
  "name": "Click on My Account Link5",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Call the method selectMyAccountOptions method and pass the parameter Logout",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Verify the text Account Logout",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Continue button1",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 71500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.clickOnMyAccountLink4()"
});
formatter.result({
  "duration": 110888100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin()"
});
formatter.result({
  "duration": 449709600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterEmailAddress()"
});
formatter.result({
  "duration": 207264400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.enterPassWord()"
});
formatter.result({
  "duration": 115759400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.clickOnLoginButton()"
});
formatter.result({
  "duration": 562097800,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.clickOnMyAccountLink5()"
});
formatter.result({
  "duration": 40078498500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//form[contains(@action,\u0027login\u0027)]//input[@type\u003d\u0027submit\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dfe2bc075c74a7f38bbb538de5f103d9, findElement {using\u003dxpath, value\u003d//form[contains(@action,\u0027login\u0027)]//input[@type\u003d\u0027submit\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52877}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52877/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dfe2bc075c74a7f38bbb538de5f103d9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.tutorialsninja.demo.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.tutorialsninja.demo.pages.MyAccount.clickOnLogin(MyAccount.java:165)\r\n\tat com.tutorialsninja.demo.cucumber.steps.MyAccountSteps.clickOnMyAccountLink5(MyAccountSteps.java:152)\r\n\tat ✽.And Click on My Account Link5(myaccount.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyAccountSteps.callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogout2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyAccountSteps.verifyTheTextAccountLogout2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "MyAccountSteps.clickOnContinueButton(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 846029000,
  "status": "passed"
});
});