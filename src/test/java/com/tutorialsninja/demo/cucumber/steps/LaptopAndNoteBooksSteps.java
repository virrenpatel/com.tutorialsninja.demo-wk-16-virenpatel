package com.tutorialsninja.demo.cucumber.steps;

import com.tutorialsninja.demo.pages.Desktops;
import com.tutorialsninja.demo.pages.LaptopsAndNotebooks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LaptopAndNoteBooksSteps {
    @When("^Mouse hover on Laptops & NotebooksTabandclick$")
    public void mouseHoverOnLaptopsNotebooksTabAndClick() {
        new LaptopsAndNotebooks().clickOnLaptoptopLink();
    }

    @And("^Click on Show All Laptops & Notebooks$")
    public void clickOnShowAllLaptopsNotebooks() {
        new LaptopsAndNotebooks().clickOnAllLaptopAndNotebooksLink();
    }

    @Then("^Select Sort By Price \\(High > Low\\)$")
    public void selectSortByPriceHighLow() {
        new LaptopsAndNotebooks().shortPriceLowToHigh();
    }

    @When("^Click on currency link1$")
    public void clickOnCurrencyLink1() {
        new Desktops().clickOnCurrencyLink();
    }

    @And("^chane currency to pound1$")
    public void chaneCurrencyToPound1() {
        new LaptopsAndNotebooks().changeCurrency();
    }

    @When("^Mouse hover on Laptops & NotebooksTabandclick1$")
    public void mouseHoverOnLaptopsNotebooksTabAndClick1() {
        new LaptopsAndNotebooks().clickOnLaptoptopLink();
    }

    @And("^Click on Show All Laptops & Notebooks1$")
    public void clickOnShowAllLaptopsNotebooks1() {
        new LaptopsAndNotebooks().clickOnAllLaptopAndNotebooksLink();
    }

    @And("^Select Product MacBook$")
    public void selectProductMacBook() {
        new LaptopsAndNotebooks().clickOnMacbookLink();

    }

    @And("^Verify the text MacBook$")
    public void verifyTheTextMacBook() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyMacbook(), "MacBook", "Error Message not displayed");
    }

    @And("^Click on Add To Cart button$")
    public void clickOnAddToCartButton() {
        new LaptopsAndNotebooks().clickOnAddToCart();
    }

    @And("^Verify the message Success: You have added MacBook to your shopping cart$")
    public void verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifySuccess(), "Success: You have added MacBook to your shopping cart!\n" +
                "×", "Error Message not displayed");
    }

    @And("^Click on link shopping cart display into success message$")
    public void clickOnLinkShoppingCartDisplayIntoSuccessMessage1() {
        new Desktops().clickOnShppingCart();

    }

    @And("^Verify the text \"Shopping Cart$")
    public void verifyTheTextShoppingCart() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyCart(), "shopping cart", "Error Message not displayed");

    }

    @And("^Verify the Product name \"MacBook$")
    public void verifyTheProductNameMacBook() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyProductMacbook(), "MacBook", "Error Message not displayed");

    }

    @And("^Clear text")
    public void cleareText(int arg0) {
        new LaptopsAndNotebooks().clearTextInQuantityField();
    }

    @And("^Change Quantity two")
    public void changeQuantity(int arg0) {
        new LaptopsAndNotebooks().sendTextToQuantityField();
    }

    @And("^Click on Update Tab$")
    public void clickOnUpdateTab() {
        new LaptopsAndNotebooks().clickOnUpdateCart();
    }

    @And("^Verify the message Success: You have modified your shopping cart$")
    public void verifyTheMessageSuccessYouHaveModifiedYourShoppingCart() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyCarttext(), "Success: You have added MacBook to your shopping cart!\n" +
                "×", "Error Message not displayed");
    }

    @And("^Verify the Total$")
    public void verifyTheTotal() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyTotal(), "£1,472.45", "Error Message not displayed");
    }

    @And("^Click on Checkout button$")
    public void clickOnCheckoutButton() {
        new LaptopsAndNotebooks().clickOnCheckoutCart();
    }

    @And("^Click on Final Checkout button$")
    public void clickOnFinalCheckout() {
        new LaptopsAndNotebooks().clickOnFinalCheckout();
    }

    @And("^Verify the text Checkout$")
    public void verifyTheTextCheckout() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyCheckout(), "Checkout", "Error Message not displayed");
    }

    @And("^Verify the Text New Customer$")
    public void verifyTheTextNewCustomer() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyNewCustomer(), "New Customer", "Error Message not displayed");
    }

    @And("^Click on Guest Checkout radio button$")
    public void clickOnGuestCheckoutRadioButton() {
        new LaptopsAndNotebooks().clickOnGuestCheckout();
    }

    @And("^Click on Continue tab$")
    public void clickOnContinueTab() {
        new LaptopsAndNotebooks().clickOnContinueTab();
    }

    @And("^Name$")
    public void enterName() {
        new LaptopsAndNotebooks().enterName("Prime");
    }

    @And("^Last Name$")
    public void enterLastName() {
        new LaptopsAndNotebooks().enterLastName("testing");
    }

    @And("^Email field$")
    public void enterEmail() {
        new LaptopsAndNotebooks().enterEmail("prime123@gmail.com");
    }

    @And("^Phone$")
    public void enterPhoneNumber() {
        new LaptopsAndNotebooks().enterTelephone("123634568425");
    }

    @And("^address$")
    public void enterAddress() {
        new LaptopsAndNotebooks().enterAddress("cucumber");
    }

    @And("^City$")
    public void enterCityName() {
        new LaptopsAndNotebooks().enterCity("adtala");
    }

    @And("^Pastcode$")
    public void enterPostcode() {
        new LaptopsAndNotebooks().enterPostcode("365430");
    }

    @And("^County Name$")
    public void enterCountyName() {
        new LaptopsAndNotebooks().enterName("Iceland");
    }

    @And("^State Name$")
    public void enterStateName() {
        new LaptopsAndNotebooks().enterState("Austurland");
    }

    @And("^Click on Continue Button$")
    public void clickOnContinueButton() {
        new LaptopsAndNotebooks().clickOnCheckout();
    }

    @And("^Add Comments About your order into text area$")
    public void addCommentsAboutYourOrderIntoTextArea() {
        new LaptopsAndNotebooks().enterText("thank you very much");
    }

    @And("^Check the Terms & Conditions check box$")
    public void checkTheTermsConditionsCheckBox() {
        new LaptopsAndNotebooks().clickOnTerms();
    }

    @And("^Click on Continue button$")
    public void clickOnContinueButton2() {
        new LaptopsAndNotebooks().clickContinue();
    }

    @Then("^Verify the message Warning: Payment method required$")
    public void verifyTheMessageWarningPaymentMethodRequired() {
        Assert.assertEquals(new LaptopsAndNotebooks().getVerifyWarningMsg(), "Warning: Payment method required!\n" +
                "×", "Error Message not displayed");
    }
}
