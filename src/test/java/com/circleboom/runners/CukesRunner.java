package com.circleboom.runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty",
                "html:target/default-cucumber-reports",
                "json:target/cucumber.json"},
        features = "src/test/resources/com/circleboom/features/",
        glue = "com/circleboom/step_definitions",
        tags = "@CreateNewPost_PremiumAccount",
        dryRun = false
)
public class CukesRunner {

}
