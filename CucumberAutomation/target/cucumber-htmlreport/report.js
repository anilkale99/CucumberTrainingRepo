$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SharingData.feature");
formatter.feature({
  "line": 1,
  "name": "Registration page with sharing data",
  "description": "As a new user, I want to enter firstname and lastname as a parameter",
  "id": "registration-page-with-sharing-data",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5657461213,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "validate Registration Scenario2",
  "description": "",
  "id": "registration-page-with-sharing-data;validate-registration-scenario2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the user is on registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he enters \"David\" as user name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "he enters \"Rogers\" as user last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "check username is present in textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "OneFolderStepDefs1.the_user_is_on_registration_Page()"
});
formatter.result({
  "duration": 10039300120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 11
    }
  ],
  "location": "OneFolderStepDefs1.He_enters_user_name(String)"
});
formatter.result({
  "duration": 121420816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rogers",
      "offset": 11
    }
  ],
  "location": "OneFolderStepDefs2.He_enters_user_last_name(String)"
});
formatter.result({
  "duration": 7091955990,
  "status": "passed"
});
formatter.match({
  "location": "OneFolderStepDefs2.check_signup_should()"
});
formatter.result({
  "duration": 660465172,
  "status": "passed"
});
formatter.after({
  "duration": 91380,
  "status": "passed"
});
formatter.before({
  "duration": 5036221666,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "validate Registration Scenario3",
  "description": "",
  "id": "registration-page-with-sharing-data;validate-registration-scenario3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "the user is on registration Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "he enters \"David\" as user name",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "he enters \"Rogers\" as user last name",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "check username is present in textbox",
  "keyword": "Then "
});
formatter.match({
  "location": "OneFolderStepDefs1.the_user_is_on_registration_Page()"
});
formatter.result({
  "duration": 9719424954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 11
    }
  ],
  "location": "OneFolderStepDefs1.He_enters_user_name(String)"
});
formatter.result({
  "duration": 153600894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rogers",
      "offset": 11
    }
  ],
  "location": "OneFolderStepDefs2.He_enters_user_last_name(String)"
});
formatter.result({
  "duration": 7086484102,
  "status": "passed"
});
formatter.match({
  "location": "OneFolderStepDefs2.check_signup_should()"
});
formatter.result({
  "duration": 665367257,
  "status": "passed"
});
formatter.after({
  "duration": 41718,
  "status": "passed"
});
});