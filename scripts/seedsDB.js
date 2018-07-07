const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact");

const articleSeed = [
    {
        title: "Trump Starts a Trade War, but the Path to Success Remains Unclear",
        date: new Date(Date.now()),
        url: "https://www.nytimes.com/2018/07/06/us/politics/trump-trade-war-unclear-outcome.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news"
    },
    {
        title: "At This July 4 Parade, It’s Survival of the Wettest",
        date: new Date(Date.now()),
        url: "https://www.nytimes.com/2018/07/06/nyregion/at-this-july-4-parade-its-survival-of-the-wettest.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=photo-spot-region&region=top-news&WT.nav=top-news"
    },
    {
        title: "Why Europe Could Melt Down Over a Simple Question of Borders",
        date: new Date(Date.now()),
        url: "https://www.nytimes.com/2018/07/06/world/europe/europe-borders-nationalism-identity.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news"
    }
]

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedCount + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


