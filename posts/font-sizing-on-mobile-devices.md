---
title: Font Sizing for the Mobile Web
description: Investigating what size fonts you should use when designing for the mobile web.
date: '2013-12-11'
absract: Typography can be a daunting prospect when it comes to designing for mobile devices, there are lots of discussions on the topic out there, many of which arrive at differing conclusions. So for a mobile web app project I’m currently working on I decided to brush up on my font sizing theory to ensure that everything we release passes mobile UX conventions.
---

Typography can be a daunting prospect when it comes to designing for mobile devices, there are lots of discussions on the topic out there, many of which arrive at differing conclusions. So for a mobile web app project I’m currently working on I decided to brush up on my font sizing theory to ensure that everything we release passes mobile UX conventions.

First off, if you’re not doing anything particularly intensive, you can save yourself time and use the following, letting the devices and their browsers calculate the sizing on your behalf. 

```
font-size: small
font-size: medium
font-size: large
```

However this technique is unlikely to be anywhere near sophisticated enough to meet the designs many of us work with. Delving a little deeper, a common rule of thumb when dealing with fonts is to go no lower the 12pt (Apple’s [Human Interface Guidelines](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/ColorImagesText.html) actually specifies 13pt). Well that was easy, but wait, what exactly is a point? It’s true that a point size reference isn’t particularly helpful for web developers who, unlike print designers, will generally make use of pixels, or preferably ems. Do not fear though, there is a simple calculation that can be made to figure out the values: 

`points / 0.75 = pixels or pixels * 0.75 = points`

So when its recommended never to use fonts smaller than 12pt, using the equation stated above we can deduce that the minimum font size we should be using is 16px. 

`12pt = 16px or 1em`

## References

[Quora Question]('http://www.quora.com/iPhone-Applications/Is-there-a-minimum-font-size-spec-for-designing-iPhone-applications)  
[Luke W: Designing for the Retina Display](http://www.lukew.com/ff/entry.asp?1142)  
[UX StackExchange Question](http://ux.stackexchange.com/questions/7820/font-size-for-mobile-sites)  
[KD Peterson: Font Size in Mobile Browsers](http://kdpeterson.net/blog/2011/06/font-size-in-mobile-browsers.html)  
[RedDesign: Approximate Conversion from Points to Pixels](http://reeddesign.co.uk/test/points-pixels.html)  