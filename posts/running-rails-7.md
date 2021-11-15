---
title: Running rails 7 apps
description: Creating a brand new project using rails 7 beta release.
date: '2021-11-15'
abstract: Over the years I've spun up countless rails apps, most of which don't amount to much, I usually just use whatever the latest Rails build is.
---

Over the years I've spun up countless rails apps, most of which don't amount to much. I usually just go with whatever the latest Rails version is. Recently though, I was looking to try out the new [Rails 7 alpha release](https://weblog.rubyonrails.org/2021/9/17/this-week-in-rails-rails-7-alpha-released/) and see how I felt about using it with esbuild. Most articles out there show how to upgrade an existing Rails app to using a alpha release. I wanted this to be a fresh project. 

After a little bit of digging I found exactly what I needed.

```
gem install rails -v '7.0.0.alpha2' -V --no-document
```

This installs the rails alpha, to double check that it installed correctly, you can run:

```
gem list rails --local
```

You should see the new version returned in the results. Once I'd verifed that it was correctly installed, I ran the `rails new` command making sure to include the specific Rails version. 

```
rails _7.0.0.alpha2_ new MYAPP
```

There you go, Rails 7 is now ready to go. If you're looking to use Rails 7 in conjuction with webpack or esbuild, I recommend reading through [this article](https://www.colby.so/posts/live-reloading-with-esbuild-and-rails), which does a really thorough job of explaining how to do that.
