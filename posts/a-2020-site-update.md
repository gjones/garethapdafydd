---
title: A 2020 site update
description: A new version of garethdjones.com is now available.
date: '2020-12-18'
abstract: After a long year, I decided to take a decent amount of time off work over this upcoming Christmas period. While it’s important for me to get away from the computer to give myself a chance to recharge, I also can’t help but start a few side projects.
---

After a long year, I decided to take a decent amount of time off work over this upcoming Christmas period. While it’s important for me to get away from the computer and give myself a chance to recharge, I also can’t help but tackle a few side projects.

The best place to start was my long, neglected personal website, I had an idea it was getting a little old in the tooth, but it was only when I found [this blog post](https://garethdjones.com/thoughts/rebuilding-my-personal-site) that I realised the last update had been back in 2013. In that post, I outline how I created the site using ruby and middleman, you can still find the [code here](https://github.com/gjones/GarethDJones). Time has moved on and I like to change up my tech stack every now and again so this time I opted for React and Nextjs.

<div class='left'>
	<img src="/assets/images/posts/2020-redesign.png" alt='Redesign of the 2020 website' title="Redesign of the 2020 website" />
</div>

I use React every day at work so it made sense to go in this direction. I was interested in trying out styled components which I hadn’t used before.

This was more than a visual refresh than a complete rethink of the experience. I don’t have tracking on this site but I know that it’s not highly trafficked, the existing sections `Home`, `Projects`, and `Thoughts` are still the only ones that I think may be interesting or relevant to those few who visit this remote outpost of the internet.

It took me a while to fully get my head around styled components, I’ve been using CSS since 2005, it’s very hard to shelve the mindset that styles should be managed in a separate directory. The turning point for me came when I started working on the different light/dark themes. It was like a light bulb went off as the `theme.tsx` works in a very similar way to how I usually use a `variables.scss`.

For deploying React projects in the past I’d used firebase and netlify, but this time I used Vercel, and it was incredibly easy. The onboarding process is really thoughtful and nicely done. The UI is clean and simple, and I love how it automatically deploys every time I push to my main github branch. I’m sure you can turn that feature off if you want to but right now I’m enjoying it. It’s a huge change for someone used to writing complex Capistrano for my Rails projects.

I think every website (within reason) should take its lead from the user’s OS theme. So if the OS is set to dark mode, the website should adapt its interface to avoid a glaringly bright background. However, I do believe that the user should be able to override this should they wish. 

The code for this site is open and available on [github](https://github.com/gjones/garethapdafydd).  
