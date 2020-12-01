# Log work JIRA plataform senior with tmetric

> Record your working hours at JIRA without a headache.

## Dependencies

You should be installed `node` and `npm`.

## Installation

Go to the folder `ReigstroHoras`. Use de package manager `npm` to install the project

```
npm i
```

Configure environment variables in folder `RegistroHoras/cypress.json`, modify with yours credentials

```json
{
    "env": {
        "baseUrlTMetric": "https://app.tmetric.com",
        "baseUrlJira": "https://jira.seudominio.com.br",
        "baseUrlSenior": "https://platform.senior.com.br",
        "userJira": "usuarioJira",
        "passwordJira": "senhaJira",
        "accountId": 111111,
        "userProfileId": 111111,
        "tokenTMetric": "Bearer token",
        "loginSenior": "loginSenior",
        "passwordSenior": "passwordSenior"
    }
}
```

### How to get the accountId and userProfileId

The easiest way to find your workspace ID and user ID is to generate a Team Summary report and copy these values from the browser address bar.
 
![alt text](https://tmetric.com/media/kahjypln/workspaceid_userid.png)

## Generate TMetric API token

To generate the API Token, follow this steps:

* Click your name in the left bottom corner;
* Select **My Profile** in the drop-down list  
    * On the **My Profile page**, click the **Get new API token** link.
    * however, keep a word **"Bearer "** at the beginning
* loginSenior and passwordSenior - Change if you need to punch the clock in platform senior

## Using TMetric

Use TMetric to log work, for each task put the project. You need to configure:

* the project description should include the issue key
   * **"issuekey - description issue summary"**
* execute file .bat you want
