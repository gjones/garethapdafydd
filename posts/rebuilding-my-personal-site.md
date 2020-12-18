---
title: How (and Why) I rebuilt my personal site
description: A blog post that delves into the reasons for, and tools used, when redesigning a website
date: '2013-10-17'
abstract: It occurs about once a year, sometimes more, and it's something that almost all web designers and creative types experience. I'm referring to the feeling that your website looks dated, your personal brand needs a shot in arm, or that you're just in a different place to where you were the last time
---

It occurs about once a year, sometimes more, and it's something that almost all web designers and creative types experience. I'm referring to the feeling that your website looks dated, your personal brand needs a shot in arm, or that you're just in a different place to where you were the last time you made the effort to update your site. Whatever the reason, the course of action remains the same: time for a revamp.

My own reasons for the redesign started innocuously enough; I'd recently move from Chicago to Charlotte and needed to update the location on my home page. Once I opened up Sublime Text, however, I remembered that I built the site using Ruby 1.9.2 and Rails 3.2.11. I decided that I would just upgrade the versions while I'm updating the content. So I set about upgrading the site to use the latest and greatest versions of my preferred language and framework. As I did, this that nagging voice in my head returned, the one telling me,

  %em using Rails for such a simple site is massive overkill

True, my personal site is very basic and does not even require a database. The reason I used Rails in the first place was the ease in which I could compile HAML, Sass and Compass along with such excellent ruby gems as turbolinks and topped off by the free hosting available via Heroku. Truth be told, I was using only about 1% of the power that Rails gives me. So I made the decision to switch to a lighter set up, one that was quick and easy to deploy, yet still gave me access to my core set of ruby gems.

After trying out a couple of options I settled on [Middleman](http://middlemanapp.com), Middleman is a Ruby and Sinatra based static site generator. Setup was quick and simple and using the helpful [Middleman-Sync](https://github.com/karlfreeman/middleman-sync) gem deployment to Amazon S3 was a breeze. Middleman also has a gem for the purpose of blogging so I added that and went about setting up the 'thoughts' portion of my site. With my technology stack and deployment now secure in my mind, it was time to get creative.

<div class='left'>
  <img src="/assets/images/posts/work-in-sketch.png" alt="Designing my Website in Sketch" title="Designing my Website in Sketch" width="640" height="360" />
</div>

_This site as designed in Sketch_
 
Most of my designs start in a notepad before graduating to [Sketch](http://www.bohemiancoding.com/sketch/) and how far through the design I get in Sketch varies before I inevitably switch to designing in a browser. I finally decided on what I felt was the right design for my needs, light and airy, subtle and spacious.

Coding the site was perhaps the easiest part of all, as I mentioned earlier I use HAML as a templating language and leverage the power of reusable variables in Sass to write minimal and concise stylesheets. [Susy](http://susy.oddbird.net) is my grid of choice, and I use the term loosely, Susy basically allows you to create your own responsive grid in the stylesheets keeping the HTML clean and clear of unsemantic code such as;

`<div class='6-columns'>`

It is important to me, as it should be for everyone, that my site is fully responsive, as many visitors will find this site while using a phone or tablet as well as a desktop or laptop computer. So, to ensure that my site works on as many devices as possible I use a combination of the iOS Simulator, an app that comes free with Apple's Xcode (Mac only), Brad Frost's excellent web tool, [Ish](http://bradfrostweb.com/demo/ish/) - which I'll usually throw on disco mode to give my layouts a real extensive test, and of course, real devices.

Finally is the issue of browser compatibility. I program using my MacBook Pro and so testing for most webkit browsers is simple enough. Internet Explorer, as many people can attest, is a different matter. Over the years I've acquired licenses to several different versions of Microsoft Windows and I have many installed on virtual machines via [VirtualBox](https://www.virtualbox.org), each running a different version of Internet Explorer. To test more obscure versions of IE, along with Firefox and Chrome running on Windows, which can sometime differ from their Mac counterparts, I use [Browser Stack](http://www.browserstack.com/).

The development cycle that we use generally boils down to what we are most comfortable with, above I've outlined my preferred work flow and I feel as though it has worked well for me over the years. I'm always interested in hearing suggestions and feedback from other devs, so hit me up on twitter, my handle is [@garethapdafydd](http://twitter.com/garethapdafydd) or on App.Net where I'm simply [Gareth](https://alpha.app.net/gareth).
