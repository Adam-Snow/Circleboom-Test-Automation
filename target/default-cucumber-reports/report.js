$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/circleboom/features/CreateNewPost_FreeAccount.feature");
formatter.feature({
  "name": "Create New Post with Free Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateNewPost_FreeAccount"
    }
  ]
});
formatter.scenario({
  "name": "Post my message free account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_FreeAccount"
    },
    {
      "name": "@postMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for free verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.i_enter_right_credentialsFreeVerified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see via Circleboom note added at the end of message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_see_via_Circleboom_note_added_at_the_end_of_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to post my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.clickToPostMyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see CONTINUE WITH FREE PLAN button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeCONTINUEWITHFREEPLANButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable UPGRADE button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableUPGRADEButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click CONTINUE WITH FREE PLAN button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickCONTINUEWITHFREEPLANButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a popup shows my message sent",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeAPopupShowsMyMessageSent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add my my message to My Queue",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_FreeAccount"
    },
    {
      "name": "@AddToMyQueue"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for free verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.i_enter_right_credentialsFreeVerified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see via Circleboom note added at the end of message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_see_via_Circleboom_note_added_at_the_end_of_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to add to my queue my message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToAddToMyQueueMyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Add to my queue button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Time Queue Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeTimeQueueSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Schedule my message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_FreeAccount"
    },
    {
      "name": "@ScheduleMyMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for free verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.i_enter_right_credentialsFreeVerified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see via Circleboom note added at the end of message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_see_via_Circleboom_note_added_at_the_end_of_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule it button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickScheduleItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see SCHEDULE YOUR POST box",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSCHEDULEYOURPOSTBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see send time box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSendTimeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see send date box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSendDateBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable Schedule it button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableScheduleItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter date",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iEnterDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter time",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iEnterTime()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule it button in Schedule your post box",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickScheduleItButtonInScheduleYourPostBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable UPGRADE button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableUPGRADEButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click CONTINUE WITH FREE PLAN button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickCONTINUEWITHFREEPLANButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a popup shows my message scheduled",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeAPopupShowsMyMessageScheduled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New Post rules sad path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_FreeAccount"
    },
    {
      "name": "@PostMessageSadPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for free verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.i_enter_right_credentialsFreeVerified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter more than 265 character",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_enter_more_than_265_character()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get this post will not be posted to Twitter due to its length notification in Post Prewiev",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldGetThisPostWillNotBePostedToTwitterDueToItsLengthNotificationInPostPrewiev()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Post Preview section disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeePostPreviewSectionDisabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the link with text Click here to learn more",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_see_the_link_with_Click_here_to_learn_more()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see three dots notification",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeThreeDotsNotification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click three dots notification",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickThreeDotsNotification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the rule",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeTheRule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the learn more link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickTheLearnMoreLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should lend on help page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldLendOnHelpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/circleboom/features/CreateNewPost_MultipleAccount.feature");
formatter.feature({
  "name": "Create New Post with Multiple Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateNewPost_MultipleAccount"
    }
  ]
});
formatter.scenario({
  "name": "Post my message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_MultipleAccount"
    },
    {
      "name": "@postMessageMultipleAccount"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select multiple account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSelectMultipleAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select multiple account",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iSelectMultipleAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to post my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.clickToPostMyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a popup shows my message sent",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeAPopupShowsMyMessageSent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add my message to My Queue multiple account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_MultipleAccount"
    },
    {
      "name": "@AddToMyQueue"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to add to my queue my message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToAddToMyQueueMyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Add to my queue button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Time Queue Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeTimeQueueSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Schedule my message multiple account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_MultipleAccount"
    },
    {
      "name": "@ScheduleMyMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule it button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickScheduleItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see SCHEDULE YOUR POST box",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSCHEDULEYOURPOSTBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see send time box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSendTimeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see send date box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSendDateBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable Schedule it button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableScheduleItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter date",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iEnterDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter time",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iEnterTime()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule it button in Schedule your post box",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickScheduleItButtonInScheduleYourPostBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a popup shows my message scheduled",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeAPopupShowsMyMessageScheduled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New Post rules sad path multiple account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_MultipleAccount"
    },
    {
      "name": "@PostMessageSadPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter more than 265 character",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_enter_more_than_265_character()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get this post will not be posted to Twitter due to its length notification in Post Prewiev",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldGetThisPostWillNotBePostedToTwitterDueToItsLengthNotificationInPostPrewiev()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Post Preview section disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeePostPreviewSectionDisabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the link with text Click here to learn more",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_see_the_link_with_Click_here_to_learn_more()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see three dots notification",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeThreeDotsNotification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click three dots notification",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickThreeDotsNotification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the rule",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeTheRule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the learn more link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickTheLearnMoreLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should lend on help page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldLendOnHelpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/circleboom/features/CreateNewPost_PremiumAccount.feature");
formatter.feature({
  "name": "Create New Post with Premium Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateNewPost_PremiumAccount"
    }
  ]
});
formatter.scenario({
  "name": "Post my message premium account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_PremiumAccount"
    },
    {
      "name": "@postMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to post my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.clickToPostMyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a popup shows my message sent",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeAPopupShowsMyMessageSent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Post my message premium account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_PremiumAccount"
    },
    {
      "name": "@postMessageWithMedia"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click upload media",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click click here button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickClickHereButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to post my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.clickToPostMyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a popup shows my message sent",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeAPopupShowsMyMessageSent()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add my message My Queue premium account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_PremiumAccount"
    },
    {
      "name": "@AddToMyQueue"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to add to my queue my message",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToAddToMyQueueMyMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Add to my queue button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Time Queue Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeTimeQueueSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Schedule my message premium account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_PremiumAccount"
    },
    {
      "name": "@ScheduleMyMessage"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I started to enter my message",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_started_to_enter_my_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Add to my queue button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableAddToMyQueueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Schedule button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickableScheduleButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see post preview screen with clickable Post it button",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeePostPreviewScreenWithClickablePostItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule it button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickScheduleItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see SCHEDULE YOUR POST box",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSCHEDULEYOURPOSTBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see send time box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSendTimeBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see send date box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeSendDateBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see clickable Schedule it button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeClickableScheduleItButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter date",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iEnterDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter time",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iEnterTime()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Schedule it button in Schedule your post box",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickScheduleItButtonInScheduleYourPostBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a popup shows my message scheduled",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeAPopupShowsMyMessageScheduled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "New Post rules sad path premium account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateNewPost_PremiumAccount"
    },
    {
      "name": "@PostMessageSadPath"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter right credentials for premium verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.iEnterRightCredentialsForPremiumVerifiedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on my account page as a premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldLandOnMyAccountPageAsAPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click create new post button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_create_new_post_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on Design and schedule page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_land_on_Design_and_schedule_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click select account link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_click_select_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to select an account",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_be_able_to_select_an_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter more than 265 character",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_enter_more_than_265_character()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see upload media",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUploadMedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see giphy",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeGiphy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see unsplash",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeUnsplash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see design on canva",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldBeAbleToSeeDesignOnCanva()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get this post will not be posted to Twitter due to its length notification in Post Prewiev",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldGetThisPostWillNotBePostedToTwitterDueToItsLengthNotificationInPostPrewiev()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Post Preview section disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeePostPreviewSectionDisabled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the link with text Click here to learn more",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.i_should_see_the_link_with_Click_here_to_learn_more()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see three dots notification",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeThreeDotsNotification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click three dots notification",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickThreeDotsNotification()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the rule",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldSeeTheRule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the learn more link",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iClickTheLearnMoreLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should lend on help page",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewPost_StepDefs.iShouldLendOnHelpPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/circleboom/features/LoginFromHomePage.feature");
formatter.feature({
  "name": "Login from HomePage to Publish",
  "description": "  Agile story:\n  As a user,\n  when I am on the circleboom homepage\n  and I hover over get started button\n  and click publish button\n  and I enter right credentials\n  then I should go to my account page",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to Publish from homepage as free verified user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@postMessage"
    }
  ]
});
formatter.step({
  "name": "I enter right credentials for free verified user",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDefs.i_enter_right_credentialsFreeVerified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should go to my account page as verified free user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefs.iShouldGoToMyAccountPageAsVerifiedFreeUser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hover over Get Started button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iHoverOverGetStartedButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click publish button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickPublishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to Publish from homepage as verified premium user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@premVerified"
    }
  ]
});
formatter.step({
  "name": "I enter right credentials for verified premium user",
  "keyword": "When "
});
formatter.match({
  "location": "PremiumVerified_StepDefs.iEnterRightCredentialsForVerifiedPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login_StepDefs.iClickLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should go to my account page as verified premium user",
  "keyword": "Then "
});
formatter.match({
  "location": "PremiumVerified_StepDefs.iShouldGoToMyAccountPageAsVerifiedPremiumUser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});