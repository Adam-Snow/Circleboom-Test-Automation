Feature: Login from HomePage to Publish
  Agile story:
  As a user,
  when I am on the circleboom homepage
  and I hover over get started button
  and click publish button
  and I enter right credentials
  then I should go to my account page

  Background:
    Given I am on the home page
    And I hover over Get Started button
    And I click publish button

  @postMessage
  Scenario: Login to Publish from homepage as free verified user
    When I enter right credentials for free verified user
    And I click login button
    Then I should go to my account page as verified free user

  @premVerified
  Scenario: Login to Publish from homepage as verified premium user
    When I enter right credentials for verified premium user
    And I click login button
    Then I should go to my account page as verified premium user

