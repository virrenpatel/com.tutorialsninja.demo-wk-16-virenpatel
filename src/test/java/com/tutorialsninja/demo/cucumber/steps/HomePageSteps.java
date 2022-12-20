package com.tutorialsninja.demo.cucumber.steps;

import com.tutorialsninja.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class HomePageSteps {
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
    }

    @When("^Mouse hover on “Desktops” Tab and click$")
    public void mouseHoverOnDesktopsTabAndClick() {
        new HomePage().clickOnDesktopLink();
    }

    @And("^call selectMenu method and pass the menu = Show All Desktops$")
    public void callSelectMenuMethodAndPassTheMenuShowAllDesktops() {
        new HomePage().selectMenu("Show All Desktops");
    }

    @Then("^Verify the text ‘Desktops’$")
    public void verifyTheTextDesktops() {
        Assert.assertEquals(new HomePage().getVerifyText(), "Desktops", "Error Message not displayed");

    }

    @When("^Mouse hover on “Laptops & Notebooks” Tab and click$")
    public void mouseHoverOnLaptopsNotebooksTabAndClick() {
        new HomePage().clickOnLaptopNotebooksLink();
    }

    @And("^call selectMenu method and pass the menu = Show All Laptops & Notebooks$")
    public void callSelectMenuMethodAndPassTheMenuShowAllLaptopsNotebooks() {
        new HomePage().selectMenu("Show All Laptops & Notebooks");
    }

    @Then("^Verify the text ‘Laptops & Notebooks’$")
    public void verifyTheTextLaptopsNotebooks(int arg0, int arg1) {
        Assert.assertEquals(new HomePage().getVerifyText1(), "Laptops & Notebooks", "Error Message not displayed");
    }

    @When("^Mouse hover on “Components” Tab and click$")
    public void mouseHoverOnComponentsTabAndClick() {
        new HomePage().clickOnComponantsLink();
    }

    @And("^call selectMenu method and pass the menu = Show All Components$")
    public void callSelectMenuMethodAndPassTheMenuShowAllComponents() {
        new HomePage().selectMenu("Show All Component");
    }

    @Then("^Verify the text ‘Components’$")
    public void verifyTheTextComponents() {
        Assert.assertEquals(new HomePage().getVerifyText2(), "Components", "Error Message not displayed");

    }
}
