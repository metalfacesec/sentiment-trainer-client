## Sentiment Trainer Client
React Javascript client side code for a sentiment analysis training algorithm data seed.  This client works with the sentiment trainer server to pull random tweets and allow you to rate them as positive or negative. You can then add your classified tweets to the nltk tweets json files and use them to train sentiment analysis algorithms.

### Requirements
* nodejs v8.10.0+

### Installation
Run the npm install command as shown below in the root of the repo.

```
npm install
```

### Configuration
The 'config.json' file that we created in the last step contains all the configuration items needed for the program to run.  Below is a list of each key in the json object and what they represent.

- server
  - host
    - IP address of your server side
  - port
    - Port number your server side code is listening on

### Starting The Client
The client can be started using the command below.
```
npm start
```