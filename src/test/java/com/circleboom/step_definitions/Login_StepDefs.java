package com.circleboom.step_definitions;

import com.circleboom.pages.LoginFromHomePage;
import com.circleboom.utilities.BrowserUtils;
import com.circleboom.utilities.ConfigurationReader;
import com.circleboom.utilities.Driver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login_StepDefs {
    LoginFromHomePage homePage = new LoginFromHomePage();
    WebDriverWait wait = new WebDriverWait(Driver.get(), 3);

    @Given("I am on the home page")
    public void i_am_on_the_home_page() {
        Driver.get().get(ConfigurationReader.get("url"));
        Driver.get().manage().window().maximize();
    }

    @And("I hover over Get Started button")
    public void iHoverOverGetStartedButton() {
        Actions action = new Actions(Driver.get());
        action.moveToElement(homePage.getStartedButton).build().perform();
    }

    @And("I click publish button")
    public void iClickPublishButton() {
        homePage.publishButtonHomePage.click();
    }


    @When("I enter right credentials for free verified user")
    public void i_enter_right_credentialsFreeVerified() {
        for (String handle : Driver.get().getWindowHandles()) {
            Driver.get().switchTo().window(handle);
            if (Driver.get().getTitle().equals("Login | Circleboom")) {
                break;
            }
        }
        wait.until(ExpectedConditions.visibilityOf(homePage.userName));
        String userNameStr = ConfigurationReader.get("userNameFreeVerified1");
        String passwordStr = ConfigurationReader.get("passwordFreeVerified1");
        homePage.loginPublish(userNameStr, passwordStr);
    }

    @When("I enter right credentials for premium verified user")
    public void iEnterRightCredentialsForPremiumVerifiedUser() {
        for (String handle : Driver.get().getWindowHandles()) {
            Driver.get().switchTo().window(handle);
            if (Driver.get().getTitle().equals("Login | Circleboom")) {
                break;
            }
        }
        wait.until(ExpectedConditions.visibilityOf(homePage.userName));
        String userNameStr = ConfigurationReader.get("userNamePremVerified");
        String passwordStr = ConfigurationReader.get("passwordPremVerified");
        homePage.loginPublish(userNameStr, passwordStr);
    }



    @And("I click login button")
    public void iClickLoginButton() {
    }

    @Then("I should go to my account page as verified free user")
    public void iShouldGoToMyAccountPageAsVerifiedFreeUser() {
        BrowserUtils.waitFor(3);

        Assert.assertTrue(Driver.get().getTitle().contains("Circleboom Publish"));
        // If the user is signed with the social account
        Assert.assertTrue(Driver.get().getPageSource().contains("Schedule or add your post to your queue"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Create new post"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Add new account"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Free"));
        Assert.assertTrue(Driver.get().getPageSource().contains(" UPGRADE"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Manage your accounts"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Connect an RSS Feed"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Twitter"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Facebook Page"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Facebook Group"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Linkedin Page"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Linkedin Profile"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Google My Business"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Instagram"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Pinterest"));

    }


    @Then("I should land on my account page as a premium user")
    public void iShouldLandOnMyAccountPageAsAPremiumUser() {
        BrowserUtils.waitFor(5);
        Assert.assertTrue(Driver.get().getTitle().contains("Circleboom Publish"));
        // If the user is signed with the social account
        Assert.assertTrue(Driver.get().getPageSource().contains("Schedule or add your post to your queue"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Create new post"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Add new account"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Manage your accounts"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Connect an RSS Feed"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Twitter"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Facebook Page"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Facebook Group"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Linkedin Page"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Linkedin Profile"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Google My Business"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Instagram"));
        Assert.assertTrue(Driver.get().getPageSource().contains("Pinterest"));
    }
}
