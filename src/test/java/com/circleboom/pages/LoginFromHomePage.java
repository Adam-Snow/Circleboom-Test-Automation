package com.circleboom.pages;

import com.circleboom.utilities.BrowserUtils;
import com.circleboom.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginFromHomePage {

    public LoginFromHomePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "div[class='layout_get_started__1zbPU']")
    public WebElement getStartedButton;

    @FindBy(css = "a[href='https://twitter.circleboom.com']")
    public WebElement twitterButtonHomePage;

    @FindBy(css = "a[href='https://publish.circleboom.com']")
    public WebElement publishButtonHomePage;

    @FindBy(id = "loginId")
    public WebElement userName;

    @FindBy(id = "password")
    public WebElement password;

    @FindBy(xpath = "//button[@class='blue button']")
    public WebElement submit;

    @FindBy(xpath = "//*[@id='__next']/div[1]/header/div/div/a/text()")
    public WebElement upgradeNotice;

    @FindBy(xpath = "//a[text()='Click here to verify now']")
    public WebElement verifyMessage;

    @FindBy(linkText = "Create new post")
    public WebElement createNewPost;

    public void clickLoginButton() {
        BrowserUtils.waitFor(3);
        submit.click();
    }

    public void clickTwitterButtonHomePage() {
        twitterButtonHomePage.click();
    }

    public void clickGetStartedButton() {
        getStartedButton.click();
    }

    public void clickPublishButton() {
        publishButtonHomePage.click();
    }


    public void verifyMessage() {
        WebDriverWait wait = new WebDriverWait(Driver.get(), 3);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='__next']/div[1]/header/div/div/a/text()")));
        upgradeNotice.isDisplayed();
    }

    public void clickVerifyMessage() {
        WebDriverWait wait = new WebDriverWait(Driver.get(), 5);
        wait.until(ExpectedConditions.elementToBeClickable(verifyMessage));
        verifyMessage.click();
    }

    public void clickGoToPublish() {
        WebDriverWait wait = new WebDriverWait(Driver.get(), 5);
        wait.until(ExpectedConditions.elementToBeClickable(publishButtonHomePage));
        publishButtonHomePage.click();
    }

    public void clickCreateNewPost() {
        createNewPost.click();
    }

    public void loginPublish(String userNameStr, String passwordStr) {
        userName.sendKeys(userNameStr);
        password.sendKeys(passwordStr);
        submit.click();
    }
}
