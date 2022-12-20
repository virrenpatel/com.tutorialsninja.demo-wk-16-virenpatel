package com.tutorialsninja.demo.cucumber.steps;

import com.tutorialsninja.demo.pages.MyAccount;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MyAccountSteps {
    @When("^I Click on My Account Link$")
    public void iClickOnMyAccountLink() {
        new MyAccount().clickonMyAccount();
    }

    @And("^Call the method selectMyAccountOptions method and pass the parameter Register$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterRegister() {
        new MyAccount().selectMyAccountOptions("Register");
    }

    @Then("^Verify the text Register Account$")
    public void verifyTheTextRegisterAccount() {
        Assert.assertEquals(new MyAccount().getVerifyRegister(), "Register Account", "Error Message not displayed");
    }

    @When("^I Click on My Account Link1$")
    public void iClickOnMyAccountLink1() {
        new MyAccount().clickonMyAccount();
    }

    @And("^Call the method selectMyAccountOptions method and pass the parameter Login$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin() {
        new MyAccount().selectMyAccountOptions("Login");
    }

    @Then("^Verify the text Returning Customer$")
    public void verifyTheTextReturningCustomer() {
        Assert.assertEquals(new MyAccount().getVerifyReturning(), "Returning Customer", "Error Message not displayed");
    }

    @When("^I Click on My Account Link2$")
    public void iClickOnMyAccountLink2() {
        new MyAccount().clickonMyAccount();
    }

    @And("^Call the method “selectMyAccountOptions method and pass the parameter Register$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterRegister1() {
        new MyAccount().selectMyAccountOptions("Register");
    }

    @And("^Enter First Name$")
    public void enterFirstName() {
        new MyAccount().enterFirstName("Manan");

    }

    @And("^Enter Last Name$")
    public void enterLastName() {
        new MyAccount().enterLastName("Shah");
    }

    @And("^Enter Email$")
    public void enterEmail() {
        new MyAccount().enterEmailAdd("123manan@gmail.com");
    }

    @And("^Enter Telephone$")
    public void enterTelephone() {
        new MyAccount().enterPhone("02029223");
    }

    @And("^Enter Password$")
    public void enterPassword() {
        new MyAccount().enterPassword("password1");
    }

    @And("^Enter Password Confirm$")
    public void enterPasswordConfirm() {
        new MyAccount().enterConfirmPass("password1");
    }

    @And("^Select Subscribe Yes radio button$")
    public void selectSubscribeYesRadioButton() {
        new MyAccount().clickYesonNewsLetter();
    }

    @And("^Click on Privacy Policy check box$")
    public void clickOnPrivacyPolicyCheckBox() {
        new MyAccount().clickOnPrivacy();
    }

    @And("^Verify the message “Your Account Has Been Created$")
    public void verifyTheMessageYourAccountHasBeenCreated() {
        Assert.assertEquals(new MyAccount().getVerifyMessage(), "Your Account Has Been Created!", "Error Message not displayed");
    }

    @And("^Clickr on My Account Link\\.$")
    public void clickrOnMyAccountLink() {
        new MyAccount().clickOnContinueButton();
    }

    @And("^Call the method “selectMyAccountOptions” method and pass the parameter Logout$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogout() {
        new MyAccount().selectMyAccountOptions("Logout");
    }

    @And("^Verify the text “Account Logout”$")
    public void verifyTheTextAccountLogout() {
        Assert.assertEquals(new MyAccount().getVerifyLogout(), "Account Logout", "Error Message not displayed");
    }

    @And("^Click on Comtinie Link\\.$")
    public void clickrOnContinueLink() {
        new MyAccount().clickOnContinueTab();
    }
//******************************************************************************
@When("^Click on MyAccount Link4$")
public void clickOnMyAccountLink4() {
    new MyAccount().clickonMyAccount();
}

    @And("^Call the method “selectMyAccountOptions” method and pass the parameter Login$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogin2() {
        new MyAccount().selectMyAccountOptions("Login");
    }

    @And("^Enter Email address$")
    public void enterEmailAddress() {
        new MyAccount().enterEmailAdd("123manan@gmail.com");
    }

    // @And("^Enter LastName$")
    // public void enterLastName() {
    //}

    @And("^Enter Pass word$")
    public void enterPassWord() {
        new MyAccount().enterPassword("password1");
    }

    @And("^Click on Login button$")
    public void clickOnLoginButton() {
        new MyAccount().clickOnLogin();
    }

    //  @And("^Verify text My Account$")
    //  public void verifyTextMyAccount() {
    //   Assert.assertEquals(new MyAccount().getVerifyMessage(), "My Account", "Error Message not displayed");
    // }

    @And("^Click on My Account Link5$")
    public void clickOnMyAccountLink5() {
        new MyAccount().clickOnLogin();
    }

    @And("^Call the method selectMyAccountOptions method and pass the parameter Logout$")
    public void callTheMethodSelectMyAccountOptionsMethodAndPassTheParameterLogout2() {
        new MyAccount().selectMyAccountOptions("Logout");
    }

    @And("^Verify the text Account Logout$")
    public void verifyTheTextAccountLogout2() {
        Assert.assertEquals(new MyAccount().getVerifyLogout(), "Account Logout", "Error Message not displayed");
    }

    @And("^Click on Continue button(\\d+)$")
    public void clickOnContinueButton(int arg0) {
        new MyAccount().clickOnContinueTab();
    }
}
