package com.tutorialsninja.demo.cucumber.steps;

import com.tutorialsninja.demo.pages.Desktops;
import com.tutorialsninja.demo.pages.HomePage;
import com.tutorialsninja.demo.pages.LaptopsAndNotebooks;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class DesktopSteps {
    @When("^Click on currency link$")
    public void clickOnCurrencyLink() {
        new Desktops().clickOnCurrencyLink();
    }

    @And("^chane currency to pound$")
    public void chaneCurrencyToPound() {
        new LaptopsAndNotebooks().changeCurrency();
    }

    @When("^Mouse hover on Desktops Tab and click$")
    public void mouseHoverOnDesktopsTabAndClick() {
        new HomePage().clickOnDesktopLink();
    }

    @And("^Click on Show All Desktops$")
    public void clickOnShowAllDesktops() {
        new Desktops().clickOnAllDesktop();
    }

    @And("^Select Sort By position Name A to Z$")
    public void selectSortByPositionNameAToZ() {
        new Desktops().SortByNameZtoAfromDropdown();
    }

    @And("^Select product HP LP(\\d+)$")
    public void selectProductHPLP() {
        new Desktops().clickOnHPlp3065();
    }

    @And("^Verify the Text HP LP(\\d+)$")
    public void verifyTheTextHPLP() {
        Assert.assertEquals(new Desktops().getVerifyTextHp(), "HP LP3065", "Error Message not displayed");
    }

    @And("^Select Delivery Date (\\d+)-(\\d+)-(\\d+)$")
    public void selectDeliveryDate() {
        new Desktops().selectDeliveryDate();
    }

    // @And("^Enter Qty (\\d+) using Select class$")
    // public void enterQtyUsingSelectClass() {
    // }

    @And("^Click on Add to Cart button$")
    public void clickOnAddToCartButton() {
        new Desktops().clickOnAdToCart();
    }

    @And("^Verify the Message Success: You have added HP LP(\\d+) to your shopping cart$")
    public void verifyTheMessageSuccessYouHaveAddedHPLPToYourShoppingCart() {
        Assert.assertEquals(new Desktops().getVerifyMessage(), "Success: You have added HP LP3065 to your shopping cart!\n" +
                "×", "Error Message not displayed");
    }

    @And("^Click on link shopping cart display into success message2$")
    public void clickOnLinkShoppingCartDisplayIntoSuccessMessage2() {
        new Desktops().clickOnShppingCart();

    }

    @And("^Verify the text Shopping Cart$")
    public void verifyTheTextShoppingCart() {
        Assert.assertEquals(new Desktops().getVerifyShoppingCart(), "Shopping Cart  (1.00kg)", "Error Message not displayed");
    }

    @And("^Verify the Product name HP LP(\\d+)$")
    public void verifyTheProductNameHPLP() {
        Assert.assertEquals(new Desktops().getVerifyProductName(), "HP LP3065", "Error Message not displayed");
    }

    //@And("^Verify the Delivery Date (\\d+)-(\\d+)-(\\d+)$")
    //public void verifyTheDeliveryDate() {
    //Assert.assertEquals(desktops.getVerifyDeliveryDate(), "2023-11-30", "Error Message not displayed");
    //}

    @And("^Verify the Model Product(\\d+)$")
    public void verifyTheModelProduct() {
        Assert.assertEquals(new Desktops().getVerifyModel(), "Product 21", "Error Message not displayed");
    }

    @Then("^Verify the Total £(\\d+)\\.(\\d+)$")
    public void verifyTheTodat£() {
        Assert.assertEquals(new Desktops().getVerifyTotal(), "£74.73", "Error Message not displayed");
    }
}
