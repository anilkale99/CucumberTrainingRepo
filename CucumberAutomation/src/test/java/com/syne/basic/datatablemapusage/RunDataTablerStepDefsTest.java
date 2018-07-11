package com.syne.basic.datatablemapusage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/com/syne/basic/datatablemapusage/" }, 
					glue = {"com/syne/basic/datatablemapusage/" }, 
					monochrome = true, // console output in readable format
					//dryRun = true,
					plugin = {"pretty", 
							"html:target/cucumber-htmlreport", 
							"json:target/cucumber-report"+91244+".json",
							"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"
							
					}
					)

public class RunDataTablerStepDefsTest {

}
