@CreateNewPost_PremiumAccount
Feature: Create New Post with Premium Account

  @postMessage
  Scenario: Post my message premium account
    Given I am on the home page
    And I hover over Get Started button
    And I click publish button
    When I enter right credentials for premium verified user
    And I click login button
    Then I should land on my account page as a premium user
    When I click create new post button
    Then I should land on Design and schedule page
    When I click select account link
    Then I should be able to select an account
    When I started to enter my message
    Then I should be able to see post preview screen with clickable Post it button
    Then I should be able to see post preview screen with clickable Add to my queue button
    Then I should be able to see post preview screen with clickable Schedule button
    Then I should be able to see upload media
    Then I should be able to see giphy
    Then I should be able to see unsplash
    Then I should be able to see design on canva
    When click to post my message
    Then I should see a popup shows my message sent

  @postMessageWithMedia
  Scenario: Post my message premium account
    Given I am on the home page
    And I hover over Get Started button
    And I click publish button
    When I enter right credentials for premium verified user
    And I click login button
    Then I should land on my account page as a premium user
    When I click create new post button
    Then I should land on Design and schedule page
    When I click select account link
    Then I should be able to select an account
    When I started to enter my message
    Then I should be able to see post preview screen with clickable Post it button
    Then I should be able to see post preview screen with clickable Add to my queue button
    Then I should be able to see post preview screen with clickable Schedule button
    Then I should be able to see upload media
    Then I should be able to see giphy
    Then I should be able to see unsplash
    Then I should be able to see design on canva
    When I click upload media
    And I click click here button
    Then I should be able to upload media
    When click to post my message
    Then I should see a popup shows my message sent

  @AddToMyQueue
  Scenario: Add my message My Queue premium account
    Given I am on the home page
    And I hover over Get Started button
    And I click publish button
    When I enter right credentials for premium verified user
    And I click login button
    Then I should land on my account page as a premium user
    When I click create new post button
    Then I should land on Design and schedule page
    When I click select account link
    Then I should be able to select an account
    When I started to enter my message
    Then I should be able to see post preview screen with clickable Add to my queue button
    Then I should be able to see post preview screen with clickable Schedule button
    Then I should be able to see post preview screen with clickable Post it button
    Then I should be able to see upload media
    Then I should be able to see giphy
    Then I should be able to see unsplash
    Then I should be able to add to my queue my message
    Then I should be able to see design on canva
    When I click Add to my queue button
    Then I should see Time Queue Settings

  @ScheduleMyMessage
  Scenario: Schedule my message premium account
    Given I am on the home page
    And I hover over Get Started button
    And I click publish button
    When I enter right credentials for premium verified user
    And I click login button
    Then I should land on my account page as a premium user
    When I click create new post button
    Then I should land on Design and schedule page
    When I click select account link
    Then I should be able to select an account
    When I started to enter my message
    Then I should be able to see post preview screen with clickable Add to my queue button
    Then I should be able to see post preview screen with clickable Schedule button
    Then I should be able to see post preview screen with clickable Post it button
    Then I should be able to see upload media
    Then I should be able to see giphy
    Then I should be able to see unsplash
    Then I should be able to see design on canva
    When I click Schedule it button
    Then I should see SCHEDULE YOUR POST box
    And I should see send time box
    And I should see send date box
    And I should see clickable cancel button
    And I should see clickable Schedule it button
    When I enter date
    And I enter time
    When I click Schedule it button in Schedule your post box
    Then I should see a popup shows my message scheduled

  @PostMessageSadPath
  Scenario: New Post rules sad path premium account
    Given I am on the home page
    And I hover over Get Started button
    And I click publish button
    When I enter right credentials for premium verified user
    And I click login button
    Then I should land on my account page as a premium user
    When I click create new post button
    Then I should land on Design and schedule page
    When I click select account link
    Then I should be able to select an account
    When I enter more than 265 character
    Then I should be able to see upload media
    Then I should be able to see giphy
    Then I should be able to see unsplash
    Then I should be able to see design on canva
    Then I should get this post will not be posted to Twitter due to its length notification in Post Prewiev
    Then I should see Post Preview section disabled
    And I should see the link with text Click here to learn more
    And I should see three dots notification
    When I click three dots notification
    Then I should see the rule
    When I click the learn more link
    Then I should lend on help page







