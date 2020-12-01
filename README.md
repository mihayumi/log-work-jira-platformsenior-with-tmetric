# log-work-jira-platformsenior-with-tmetric
- Install npm modules and dependencies on project 'RegistroHoras' (npm i)
- Configure environment variables - RegistroHoras/cypress.json
  - baseUrlJira
  - userJira
  - passwordJira
  - accountId and userProfileId - TMetric - "The easiest way to find your workspace ID and user ID is to generate a Team Summary report and copy these values from the browser address bar."
    ![alt text](https://tmetric.com/media/kahjypln/workspaceid_userid.png)
  - tokenTMetric - To get a TMetric API token, on app.tmetric.com: 
    - Click your name in the left bottom corner.
    - Select My Profile in the drop-down list.  
    - On the My Profile page, click the Get new API token link.
    - however, keep a word "Bearer " at the beginning
  - loginSenior and passwordSenior - Change if you need to punch the clock in platform senior
- execute files .bat
