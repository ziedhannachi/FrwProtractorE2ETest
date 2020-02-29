Feature: Authentification

    Scenario: Authentification
        Given I go to the application
        When I enter "Admin" in the username field
        And I enter "admin123" in the password field
        And I press the login button
        Then The dashboard page is displayed