package com.circleboom.step_definitions;

import com.circleboom.pages.CreateNewPost;
import com.circleboom.pages.LoginFromHomePage;
import com.circleboom.utilities.BrowserUtils;
import com.circleboom.utilities.Driver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CreateNewPost_StepDefs {
    LoginFromHomePage homePage = new LoginFromHomePage();
    CreateNewPost createNewPost = new CreateNewPost();


    @When("I click create new post button")
    public void i_click_create_new_post_button() {
        createNewPost.clickCreateNewPost();
    }

    @Then("I should land on Design and schedule page")
    public void i_should_land_on_Design_and_schedule_page() {
        BrowserUtils.waitFor(3);
        Assert.assertEquals("https://publish.circleboom.com/schedule", Driver.get().getCurrentUrl());
    }

    @When("I click select account link")
    public void i_click_select_account_link() {
        BrowserUtils.waitForVisibility(createNewPost.selectAccount, 11);
        createNewPost.clickSelectAccount();
    }

    @Then("I should be able to select an account")
    public void i_should_be_able_to_select_an_account() {
        createNewPost.clickTwiterPlatform();
        createNewPost.clickDone();
    }

    @Given("I selected an account")
    public void i_selected_an_account() {
    }

    @When("I started to enter my message")
    public void i_started_to_enter_my_message() {
        createNewPost.clickTextArea();
        createNewPost.enterText("Love is an elixir; a human lives with love, " +
                "is made happy by love and makes those around him or her happy with love. ");
        BrowserUtils.waitFor(1);

    }

    @Then("I should be able to see upload media")
    public void iShouldBeAbleToSeeUploadMedia() {
        createNewPost.uploadMedia.isDisplayed();
    }

    @Then("I should be able to see giphy")
    public void iShouldBeAbleToSeeGiphy() {
        createNewPost.giphy.isDisplayed();
    }

    @Then("I should be able to see unsplash")
    public void iShouldBeAbleToSeeUnsplash() {
        createNewPost.unsplash.isDisplayed();
    }

    @Then("I should be able to see design on canva")
    public void iShouldBeAbleToSeeDesignOnCanva() {
        createNewPost.designOnCanva.isDisplayed();
    }

    @Then("I should be able to post my message")
    public void iShouldBeAbleToPostMyMessage() {
        createNewPost.clickPostButton();
        createNewPost.clickContinueWithFreeAccount();
    }

    @Then("I should be able to add to my queue my message")
    public void iShouldBeAbleToAddToMyQueueMyMessage() {
        createNewPost.clickAddToMyQueue();
    }

    @Then("I should be able to schedule my message")
    public void iShouldBeAbleToScheduleMyMessage() {
        createNewPost.clickScheduleIt();
    }


    @When("I enter more than 265 character")
    public void i_enter_more_than_265_character() {
        createNewPost.clickTextArea();
        BrowserUtils.waitFor(1);
        createNewPost.enterTextMoreThan265();
        BrowserUtils.waitFor(3);
    }


    @Then("I should get This message will not be posted notification")
    public void iShouldGetThisMessageWillNotBePosted() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(Driver.get().getPageSource().contains("This message will not be posted"));
    }


    @Then("The buttons on Post Preview section disabled")
    public void the_buttons_on_Post_Preview_section_disabled() {
        Assert.assertFalse(createNewPost.disabledPost.isEnabled());
        Assert.assertFalse(createNewPost.disabledScheduleIt.isEnabled());
        Assert.assertFalse(createNewPost.disabledAddToMyQueue.isEnabled());
    }

    @Then("I should see via Circleboom note added at the end of message")
    public void i_should_see_via_Circleboom_note_added_at_the_end_of_message() {
        createNewPost.viaCircleboomNote.isDisplayed();
    }

    @Then("I should see the link with text Click here to learn more")
    public void i_should_see_the_link_with_Click_here_to_learn_more() {
        BrowserUtils.waitForVisibility(createNewPost.clickHereToLearnMore, 11);
        createNewPost.clickHereToLearnMore.isDisplayed();
    }

    @Then("When I click three dots notification I should see the rule")
    public void when_I_click_three_dots_notification_I_should_see_the_rule() {
        createNewPost.clickHereToLearnMore.click();
        System.out.println(createNewPost.clickHereToLearnMore.getText());
    }

    @Then("I should be able to see post preview screen with clickable Post it button")
    public void iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(createNewPost.postButton.isDisplayed());
    }

    @Then("I should be able to see post preview screen with clickable Add to my queue button")
    public void iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton() {
        createNewPost.verifyAddToMyQueue();
    }

    @Then("I should be able to see post preview screen with clickable Schedule button")
    public void iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton() {
        Assert.assertTrue(createNewPost.scheduleIt.isEnabled());
    }

    @When("click to post my message")
    public void clickToPostMyMessage() {
        createNewPost.clickPostButton();
        BrowserUtils.waitFor(3);
    }

    @When("I click CONTINUE WITH FREE PLAN button")
    public void iClickCONTINUEWITHFREEPLANButton() {
        createNewPost.continueWithFreePlan.click();
    }

    @Then("I should see CONTINUE WITH FREE PLAN button")
    public void iShouldSeeCONTINUEWITHFREEPLANButton() {
        Assert.assertTrue(createNewPost.continueWithFreePlan.isEnabled());
    }

    @And("I should see clickable UPGRADE button")
    public void iShouldSeeClickableUPGRADEButton() {
        Assert.assertTrue(createNewPost.upgradeAfterClickWithFreeAccount.isEnabled());
    }


    @Then("I should see a popup shows my message sent")
    public void iShouldSeeAPopupShowsMyMessageSent() {
        BrowserUtils.waitFor(3);
        Assert.assertEquals("Your post has been sent", createNewPost.sentMessage.getText());
    }


    @Then("I should see Post Preview section disabled")
    public void iShouldSeePostPreviewSectionDisabled() {
    }

    @And("I should see three dots notification")
    public void iShouldSeeThreeDotsNotification() {
        createNewPost.threeDots.isDisplayed();
    }


    @When("I click three dots notification")
    public void iClickThreeDotsNotification() {
        createNewPost.clickThreeDots();
    }

    @Then("I should see the rule")
    public void iShouldSeeTheRule() {

    }


    @Then("I should get this post will not be posted to Twitter due to its length notification in Post Prewiev")
    public void iShouldGetThisPostWillNotBePostedToTwitterDueToItsLengthNotificationInPostPrewiev() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(createNewPost.willNotSend.isDisplayed());
        ////*[contains(text(),'This message will not be posted to ')]
    }


    @When("I click Add to my queue button")
    public void iClickAddToMyQueueButton() {
        createNewPost.addToMyQueue.click();
    }

    @Then("I should see Time Queue Settings")
    public void iShouldSeeTimeQueueSettings() {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(Driver.get().getPageSource().contains("Time/Queue Settings"));

    }

    @When("I click the learn more link")
    public void iClickTheLearnMoreLink() {
        createNewPost.clickHereToLearnMore.click();
        BrowserUtils.waitFor(3);
    }

    @Then("I should lend on help page")
    public void iShouldLendOnHelpPage() {
        BrowserUtils.waitFor(3);
        // Assert.assertEquals("Getting Started - Circleboom Twitter / Help", Driver.get().getTitle()); Another assertion needed


    }

    @When("I click Schedule it button")
    public void iClickScheduleItButton() {
        BrowserUtils.waitFor(3);
        createNewPost.clickScheduleIt();
        BrowserUtils.waitFor(3);
    }

    @Then("I should see SCHEDULE YOUR POST box")
    public void iShouldSeeSCHEDULEYOURPOSTBox() {
        createNewPost.scheduleYourPostBox.isEnabled();
    }

    @And("I should see send time box")
    public void iShouldSeeSendTimeBox() {
        createNewPost.sendTime.isDisplayed();
    }

    @And("I should see send date box")
    public void iShouldSeeSendDateBox() {
        createNewPost.sendDate.isDisplayed();
    }

    @And("I should see clickable cancel button")
    public void iShouldSeeClickableCancelButton() {
    }

    @And("I should see clickable Schedule it button")
    public void iShouldSeeClickableScheduleItButton() {
    }


    @When("I enter date and time")
    public void iEnterDateAndTime() {
        BrowserUtils.waitFor(3);
        createNewPost.sendDate.click();

        createNewPost.sendTime.click();
    }

    @Then("I should see a popup shows my message scheduled")
    public void iShouldSeeAPopupShowsMyMessageScheduled() {
        BrowserUtils.waitForVisibility(createNewPost.yourPostHasBeenScheduledAlert, 11);

        Assert.assertTrue(createNewPost.yourPostHasBeenScheduledAlert.isDisplayed());

    }

    @When("I click Schedule it button in Schedule your post box")
    public void iClickScheduleItButtonInScheduleYourPostBox() {
        createNewPost.scheduleItInScheduleYourPostBox.click();
    }

    @Then("I should see Todays Post on first page")
    public void iShouldSeeTodaysPostOnFirstPage() {
        Assert.assertTrue(Driver.get().getPageSource().contains(" Todays Posts"));

    }

    @When("I enter date")
    public void iEnterDate() {
        BrowserUtils.waitForVisibility(createNewPost.sendDate, 11);
        createNewPost.sendDate.click();
        BrowserUtils.waitForVisibility(createNewPost.calendarDate30, 11);
        createNewPost.calendarDate30.click();
    }

    @And("I enter time")
    public void iEnterTime() {
        BrowserUtils.waitForVisibility(createNewPost.sendTime, 11);
        createNewPost.sendTime.click();
        BrowserUtils.waitForVisibility(createNewPost.calendarTime23, 11);
        createNewPost.calendarTime23.click();
        BrowserUtils.waitForVisibility(createNewPost.calendarMinute55, 11);
        createNewPost.calendarMinute55.click();


    }
}
