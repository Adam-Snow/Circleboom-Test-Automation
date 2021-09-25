package com.circleboom.pages;

import com.circleboom.utilities.BrowserUtils;
import com.circleboom.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateNewPost {

    public CreateNewPost() {
        PageFactory.initElements(Driver.get(), this);
    }


    @FindBy(linkText = "Create new post")
    public WebElement createNewPost;
    @FindBy(css = "div[class='accountselection_handler__3ba-C']")
    public WebElement selectAccount;
    @FindBy(xpath = "//*[@class='accountselection_selection_display__1zCOy accountselection_selection_display_platform__1ecN5 accountselection_twitter__2zdV_']")
    public WebElement selectPlatformTwitter;
    @FindBy(xpath = "//*[@class='accountselection_selection_display__1zCOy accountselection_selection_display_platform__1ecN5 accountselection_linkedin__3jWcQ']")
    public WebElement selectPlatformLinkedin;
    @FindBy(xpath = "//*[@class='accountselection_selection_display__1zCOy accountselection_selection_display_platform__1ecN5 accountselection_facebook__1CJI1']")
    public WebElement selectPlatformFacebook;
    @FindBy(css = "div.accountselection_selection_display__1zCOy.accountselection_selection_display_platform__1ecN5.accountselection_instagram__SqIRT > svg")
    public WebElement selectPlatformInstagram;
    @FindBy(xpath = "//*[@class='accountselection_selection_display__1zCOy accountselection_selection_display_platform__1ecN5 accountselection_selection_display_platform__active__3aSzq accountselection_google__1Ivl6']")
    public WebElement selectPlatformGoogle;
    @FindBy(xpath = "//div[@class='accountselection_account_display__2YY4M']")
    public WebElement twitterAccount;
    @FindBy(xpath = "//*[@class='accountselection_account_display__2YY4M accountselection_account_display_active__1uDUf accountselection_linkedin__3jWcQ'][1]")
    public WebElement linkedInMarketing;
    @FindBy(xpath = "//*[@class='accountselection_account_display__2YY4M accountselection_account_display_active__1uDUf accountselection_linkedin__3jWcQ'][2]")
    public WebElement linkedInAccount;
    @FindBy(css = "div.accountselection_account_display__2YY4M.accountselection_account_display_active__1uDUf.accountselection_google__1Ivl6 > img")
    public WebElement googleAccount;
    @FindBy(xpath = "//*[@class='accountselection_account_display__2YY4M accountselection_account_display_active__1uDUf accountselection_instagram__SqIRT']")
    public WebElement instagramAccount;
    @FindBy(css = "//*[@class='accountselection_account_display__2YY4M accountselection_account_display_active__1uDUf accountselection_facebook__1CJI1'][1]")
    public WebElement facebookSocialMediaInsiderAccount;
    @FindBy(css = "//*[@class='accountselection_account_display__2YY4M accountselection_account_display_active__1uDUf accountselection_facebook__1CJI1'][2]")
    public WebElement facebookSocialMediaTrendsAccount;
    @FindBy(xpath = "//*[@class='accountselection_select_all_users__3HB9s']")
    public WebElement selectAll;

    @FindBy(xpath = "//*[@class='btn btn-blue btn-sm']")
    public WebElement done;
    @FindBy(xpath = "//*[@class='schedule_textarea__3NHe7']")
    public WebElement textArea;
    @FindBy(xpath = "//*[@class='btn btn-green']")
    public WebElement postButton;
    @FindBy(xpath = "//*[@class='btn btn-default btn-sm']")
    public WebElement continueWithFreePlan;
    @FindBy(xpath = "//*[@class='btn btn-blue']")
    public WebElement addToMyQueue;
    @FindBy(xpath = "//*[@class='btn btn-lightblue']")
    public WebElement scheduleIt;
    @FindBy(xpath = "//span[.='Upload Media']")
    public WebElement uploadMedia;
    @FindBy(css = "input[type=file]")
    public WebElement clickHereUploadMedia;
    @FindBy(xpath = "//span[.='Giphy']")//??? true, because it is first element
    public WebElement giphy;
    @FindBy(xpath = "//span[.='Unsplash']")// wrong??
    public WebElement unsplash;
    @FindBy(xpath = "//span[.='DESIGN ON CANVA']")// wrong???
    public WebElement designOnCanva;
    @FindBy(xpath = "//*[contains(text(), 'This message will not be posted to ')]")
    public WebElement willNotBePostedNotification;
    @FindBy(xpath = "//*[@id='__next']/div[1]/main/section/div[2]/div[2]/div/div[3]/div/button[1]")
    public WebElement disabledAddToMyQueue;
    @FindBy(xpath = "//*[@id='__next']/div[1]/main/section/div[2]/div[2]/div/div[3]/div/button[2]")
    public WebElement disabledScheduleIt;
    @FindBy(xpath = "//*[@id='__next']/div[1]/main/section/div[2]/div[2]/div/div[3]/div/button[3]")
    public WebElement disabledPost;
    @FindBy(xpath = "//*[contains(text(),'via Circleboom')]")
    public WebElement viaCircleboomNote;
    @FindBy(linkText = "Click here to learn more")
    public WebElement clickHereToLearnMore;
    @FindBy(xpath = "//*[@id='__next']/div[2]/div/div/div[1]")
    public WebElement sentMessage;
    @FindBy(xpath = "//*[@id='__next']/div[1]/main/section/div[2]/div[1]/div[2]/div[2]/div[2]/div/button")
    public WebElement threeDots;
    @FindBy(xpath = "//*[@class='btn btn-upgrade btn-sm']")
    public WebElement upgradeAfterClickWithFreeAccount;
    @FindBy(xpath = "//*[@class='btn btn-blue']")
    public WebElement goToMyQueueSettings;
    @FindBy(xpath = "//*[contains(text(),'This message will not be posted to ')]")
    public WebElement willNotSend;
    @FindBy(xpath = "//*[@class='react-datepicker__input-container']/input")
    public WebElement sendDate;
    @FindBy(xpath = "//*[@class='rc-time-picker-input']")
    public WebElement sendTime;
    @FindBy(xpath = "//*[@class='schedule_schedule_box_title__3UwgE']")
    public WebElement scheduleYourPostBox;
    @FindBy(xpath = "(//*[@class='btn btn-lightblue'])[2]")
    public WebElement scheduleItInScheduleYourPostBox;
    @FindBy(xpath = "//*[@class='Toastify__toast-body']")
    public WebElement yourPostHasBeenScheduledAlert;
    @FindBy(xpath = "//*[@class='react-datepicker__day react-datepicker__day--030']")
    public WebElement calendarDate30;
    @FindBy(xpath = "//*[.='23']")
    public WebElement calendarTime23;
    @FindBy(xpath = "//*[.='55']")
    public WebElement calendarMinute55;


    public void clickCreateNewPost() {
        createNewPost.click();
    }

    public void clickSelectAccount() {
        selectAccount.click();
    }

    public void clickTwiterPlatform() {
        BrowserUtils.waitForVisibility(selectPlatformTwitter, 11);
        selectPlatformTwitter.click();
    }

    public void clickLinkedinPlatform() {
        selectPlatformLinkedin.click();
    }

    public void clickTwitterAccount() {
        twitterAccount.click();
    }

    public void clickGoogleAccount() {
        googleAccount.click();
    }

    public void clickFacebookAccount() {

    }

    public void clickDone() {
        BrowserUtils.waitFor(3);
        done.click();
    }

    public void clickGoToMyQueueSettings() {
        goToMyQueueSettings.click();
    }

    public void clickTextArea() {
        textArea.click();
    }

    public void enterText(String text) {
        BrowserUtils.waitForVisibility(textArea, 3);
        textArea.sendKeys("Patience is the key to contentment.");
        textArea.click();
    }

    public void enterTextMoreThan265() {
        BrowserUtils.waitForVisibility(textArea, 3);
        textArea.sendKeys("Love is an elixir; a human lives with love, is made happy by love and makes those around him or her happy with love. In the vocabulary of humanity, love is life; we feel and sense each other with love. God Almighty has not created a stronger relation than love, this chain that binds humans one to another. In fact, the Earth is nothing but a ruin without love to keep it fresh and alive. Jinn and humans have sultans; bees, ants and termites have their queens; for each of these there is a throne. Kings and queens are come to power in different ways, and then they ascend their thrones. Love is the sultan that reigns on the throne of our hearts, with no power struggle being involved. The tongue and lips, the eyes and the ears only have a value as long as they carry the flag of love, yet love is only valuable in and of itself. The heart, the pavilion of love, is priceless because of the love it carries. Castles can be conquered without bloodshed merely by waving flags of love in front of them. Sultans become soldiers of affection when conquered by the soldiers of love.");
        textArea.click();

    }

    public void clickPostButton() {
        postButton.click();
    }

    public void clickContinueWithFreeAccount() {
        BrowserUtils.waitForVisibility(continueWithFreePlan, 11);
        continueWithFreePlan.click();
    }

    public void verifyAddToMyQueue() {
        Assert.assertTrue(addToMyQueue.isEnabled());
    }

    public void clickAddToMyQueue() {

        BrowserUtils.waitForVisibility(addToMyQueue, 11);
        addToMyQueue.click();
    }

    public void clickScheduleIt() {
        scheduleIt.click();
    }

    public void clickUploadMedia() {
        BrowserUtils.waitForVisibility(uploadMedia, 11);
        uploadMedia.click();
    }

    public void clickGiphy() {
        BrowserUtils.waitForVisibility(giphy, 11);
        giphy.click();
    }

    public void clickUnsplash() {
        BrowserUtils.waitForVisibility(unsplash, 11);
        unsplash.click();
    }

    public void clickDesignOnCanva() {
        BrowserUtils.waitForVisibility(designOnCanva, 11);
        designOnCanva.click();
    }

    public void clickThreeDots() {
        BrowserUtils.waitForVisibility(threeDots, 11);
        threeDots.click();
    }

    public void clickLinkedInAccount() {
        BrowserUtils.waitForVisibility(linkedInAccount, 11);
        linkedInAccount.click();
    }

    public void clickLinkedInMarketing() {
        BrowserUtils.waitForVisibility(linkedInMarketing, 11);
        linkedInMarketing.click();
    }

    public void clickPlatformFacebook() {
        BrowserUtils.waitForVisibility(selectPlatformFacebook, 11);
        selectPlatformFacebook.click();
    }

    public void clickLinkedInPlatform() {
        BrowserUtils.waitForVisibility(selectPlatformLinkedin, 11);
        selectPlatformLinkedin.click();
    }

    public void clickInstagramPlatform() {
        BrowserUtils.waitForVisibility(selectPlatformInstagram, 11);
        selectPlatformInstagram.click();
    }

    public void clickGooglePlatform() {
        BrowserUtils.waitForVisibility(selectPlatformGoogle, 11);
        selectPlatformGoogle.click();
    }

    public void clickFacebookSocialMediaInsiderAccount() {
        BrowserUtils.waitForVisibility(facebookSocialMediaInsiderAccount, 11);
        facebookSocialMediaInsiderAccount.click();
    }

    public void clickFacebookSocialMediaTrendsAccount() {
        BrowserUtils.waitForVisibility(facebookSocialMediaTrendsAccount, 11);
        facebookSocialMediaTrendsAccount.click();
    }

    public void clickInstagramAccount() {
        BrowserUtils.waitForVisibility(instagramAccount, 11);
        instagramAccount.click();
    }

    public void clickSelectAll() {
        BrowserUtils.waitForVisibility(selectAll, 11);
        selectAll.click();
    }
}