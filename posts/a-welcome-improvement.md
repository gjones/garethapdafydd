---
title: A Welcome Improvement
description: Apple announce SKStoreReviewController
date: '2017-01-27'
abstract: 'This week Apple announced the new SKStoreReviewController API. In short, correct implementation will pop a modal asking the user to review the app that they’re currently using. This in itself isn’t big news, lots of app developers have implemented their own version of this functionality. It’s the details of what Apple have done that bares paying attention to.'
---

This week Apple announced the new [SKStoreReviewController](https://developer.apple.com/reference/storekit/skstorereviewcontroller') API. In short, correct implementation will pop a modal asking the user to review the app that they’re currently using. This in itself isn’t big news, lots of app developers have implemented their own version of this functionality. It’s the details of what Apple have done that bares paying attention to.

- They’ve taken responsibility for when these modals display. They'll show a maximum of 3 times a year and only to users who have not already submitted a review. On top of that, users will be able to turn off review request globally affecting all apps.
- They’re allowing users to perform the review without leaving the app. The users will be first asked to give a star rating then add their review. This should lower the barrier of entry and result in more reviews.
- Developers will soon be able to publicly respond to app store reviews.

As an independent app developer I'm very excited about this announcement, I've chosen to avoid the obtrusive modals in the past due to my own dislike of them. I have certainly paid the price for this, despite having hundreds of active users - my current app has just 1 review. This new approach however, is one that I feel comfortable using. I’m also hopeful that this will mark the beginning of the end of some apps degrading the user experience by requesting reviews too often.

If you’re interested in more information on this announcement, [Under the radar]('https://www.relay.fm/radar/64') has an excellent 30 minute summary.

*![Fight Scores Reviews](/assets/images/posts/skstorereviewcontroller@2x.png "Fight Scores Reviews")*