/*
API url:
http://weeklyplugin.com/wp-json/wp/v2/pages/
Page :
https://weeklyplugin.com/acf-demo/
*/

const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://weeklyplugin.com",
      "title": "Weekly Plugin",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
   {
     "name":"jsnation-theme",
     "state":{
       "theme":{
        "featured": {
          "showOnList": true,
          "showOnPost": true
        }
       }
     }
   },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://weeklyplugin.com/wp-json"
        }
      },
      
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
