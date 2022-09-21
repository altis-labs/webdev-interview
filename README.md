# Altis Labs - Code Review Exercise

This exercise is intended to simulate a code review which is part of the development process at `Altis Labs`. Please perform the following instructions:

- Review the [requirements](#requirements) for the application contained within this repository
- Clone this repository to your local workstation (or other suitable development environment)
- Review the contents  of this repository as if this was a pull request into a production branch and create a review document (i.e. Google doc, .txt file, etc.) containing any feedback/issues/improvements/nit-picks. We are not specifying a code/design style, so provide any feedback, even if you deem it to be minor/too subjective
- Send your completed review document to your interviewer. They will review your submission and determine the next steps of the interview process

## counter-app

### Requirements

#### Functionality

- A web-based application that contains the following:

  - A card containing :

    - One button which, when clicked, increments a counter which initializes at 0
    - Another button that, when clicked, resets the counter to 0. This button shall only appear when the counter is greater than 0
    - Text which instructs the user to click the button when the counter is 0, otherwise shows the current counter value

  - A card in the top left corner of the page containing:

    - When the counter (see above) is 0, a message instructing the user to click the button

      **OR**

    - When the counter is greater than 0, a message containing a `value` after applying the following math:

      - `value = <counter> + 3*(<counter>^2)`

#### UI/UX

- Common elements of the same type (i.e. card, buttons, etc) should have a consistent visual style

#### Deployment

- The application shall be package-able in a docker image which can be run to serve the application via http server

#### General

- Strong typing shall be enforced
- There should be automated tests for important operations, such as math operations