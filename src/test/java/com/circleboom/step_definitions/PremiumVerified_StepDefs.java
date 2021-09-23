package com.circleboom.step_definitions;

import com.circleboom.pages.LoginFromHomePage;
import com.circleboom.utilities.BrowserUtils;
import com.circleboom.utilities.ConfigurationReader;
import com.circleboom.utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PremiumVerified_StepDefs {
    LoginFromHomePage homePage = new LoginFromHomePage();
    WebDriverWait wait = new WebDriverWait(Driver.get(), 3);


    @When("I enter right credentials for verified premium user")
    public void iEnterRightCredentialsForVerifiedPremiumUser() {
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

    @Then("I should go to my account page as verified premium user")
    public void iShouldGoToMyAccountPageAsVerifiedPremiumUser() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(Driver.get().getTitle().contains("Circleboom Publish"));
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
