---
title: Scaling design beyond the design team
description: Thoughts on the ever evolving and changing dynamic of design in the workplace
date: '2026-05-31'
abstract: I've spent a lot of time over the last few years thinking about how design teams scale. Mostly because I've been watching ours stop being able to.
---

I've spent a lot of time over the last few years thinking about how design teams scale. Mostly because I've been watching ours stop being able to.

At a small company, quality is maintained through people. At minimum, a designer reviews a product change. Someone casts an eye over a marketing asset before it goes live. A deck gets tidied up before it reaches a customer. The design team becomes the narrow point that most things pass through on their way out the door, and for a while that works beautifully. You can hold the whole thing in your head.

Then you blink and there are 600+ of you.

We now have more engineers and product managers shipping product features, more marketers making content, and more teams building customer-facing things than at any point in the company's history. The idea that the design team could review every product change, social graphic, slide, event banner, landing page and blog image is no longer realistic. Honestly, it never was, we'd just been getting away with it. It also raises the uncomfortable feeling that all we're doing is policing other people's work rather than creating impactful work ourselves. 

This isn't a design problem, of course. It's what happens to every specialist function as a company grows. Eventually the volume of decisions outgrows the group meant to be governing them, and you're left with a choice: become a bottleneck, or become invisible.

Historically we've wriggled out of that choice with infrastructure. Design systems, templates, guidelines, documentation, component libraries, reusable patterns — they all exist for the same reason, which is to let good decisions happen without a designer in the room every single time. A decision made once, paid out many times over.

Lately I've started wondering whether AI is just the next layer of that same idea.

### How it started

I'd actually sat down to poke at ChatGPT's new Agents tooling. I've been fairly deep in the Claude ecosystem for a while now — MCPs, agents, the usual rabbit holes — and yet I'd been hearing great things about Codex and the whole developer environment. 

Somewhere in the middle of that, my mind wandered to the questions our design team fields in Slack every week. Most of them are trivial:
- How do I work with design?
- Where are the latest slide templates?
- Which designer owns this part of the product?
- How do I make a QR code for an event?
- Where do I find the latest funnel metrics?
- How do I generate UTMs?

Any one of them takes a minute to answer. The problem isn't the minute, it's the dozen minutes, scattered across the day, each one yanking someone out of whatever they were concentrating on. Death by a thousand pings.

So the first thought was the obvious one: what if something else answered them?

### Building Tamarin

I got surprisingly far with ChatGPT in about an hour, right up until it came time to talk to Slack, at which point everything quietly fell apart. Even after some quality time with our security and admin folks getting the permissions just so, I couldn't get it to behave consistently. So testing Codex went out the window and I moved everything over to Claude and Cursor.

The genuinely interesting bit was that I barely had to write anything new. Almost everything already existed. We have a brand guide. We have product design principles. We have Click UI documentation, onboarding material, process guides, and years of accumulated organisational knowledge sprawled across GitHub, Notion, Slack and a dozen internal docs. The problem was never a shortage of information. It was that the information was scattered like socks after a house move — all present, none of it where you'd look first.

One decision I made early and held to: I didn't want another source of truth. The last thing anyone needs is a parallel set of "AI docs" drifting quietly out of sync with the real ones. So instead of copying everything into prompts and context files, I had the agent read directly from the same places people already use. GitHub became the backbone — the agent reads the same markdown we maintain for brand standards, Click UI, design principles and process. If a human would trust it, so does Tamarin. If it's wrong, we fix it once, in one place.

From there it came together quickly. It's a Next.js app on Vercel. Slack events arrive through an API endpoint, relevant context gets pulled from GitHub, Slack thread history, Notion, Linear and a lightweight memory layer, and the whole lot is handed to Claude before the answer goes back to Slack. The eventual feature list looked like this:
- Slack integration with threaded conversations
- GitHub-backed design documentation
- Notion search and retrieval
- Linear integration
- Image analysis and critique
- GitHub PR reviews
- Team memory and context
- Langfuse tracing and observability

As with most of these projects, building the application was the easy part. The real work was teaching the thing where everything lives and how to carry itself.

### Giving it a personality

I'm a designer. I was never going to leave it as a grey little chatbot.

My favourite animal is the emperor tamarin, chiefly on account of their preposterous moustaches, so I built the character around that. The brief I gave myself was: approachable, not corporate. British. A touch cheeky. Informal enough that people actually enjoy using it, but not so informal that it feels out of place at work — the line between "charming colleague" and "the bloke who replies to everything with a meme."

Naturally that meant a logo, and in the spirit of the thing I generated the entire identity with AI — a few iterations against reference photos of tamarins and some geometric illustration, until I landed on a face worth putting on it.

Tamarin was born.

<strong class="logo"><img src="/assets/images/posts/tamarin.png" alt="Tamarin Slack App logo" title="Tamarin Slack App logo" /></strong>

### Beyond answering questions

The plan was originally FAQs and communicating design standards. The scope, as scope does, immediately started misbehaving.

Once the foundations were in place it became obvious the same architecture could do far more interesting things. Tamarin can now:
- Answer design and onboarding questions
- Point people to the right design processes
- Pull information out of Notion
- Show designers their assigned Linear issues, and create new tickets
- Review GitHub pull requests
- Analyse screenshots
- Critique marketing assets against our brand standards
- Review conference booth concepts
- Help with content and copywriting

The visual critique turned out to be my favourite. You drop an image into Slack and ask what it thinks. For a marketer that might be a LinkedIn graphic before it goes out; for a designer, a quick gut-check on hierarchy or spacing before walking into a proper review. It's not there to replace human feedback — it's there so the first round of feedback is available the second you want it, rather than whenever someone happens to be free.

The practical bits crept in too. A new starter can simply tell Tamarin they're new and get pointed at onboarding docs, profile assets, social banners, meeting backgrounds — all the things people sheepishly ask for in their first fortnight. Marketing can ask about event tracking, promo codes, UTMs or company metrics without having to find and interrupt the one person who knows.

The more I used it, the less it felt like a chatbot and the more it felt like a conversation sitting on top of everything the company already knows.

### Design systems were always knowledge systems

The deeper I got, the more I kept circling back to design systems.

Say "design system" and most people picture components. Buttons, forms, spacing tokens, typography, colour. Those matter, but they're the visible tip of it. What a design system actually does is distribute decisions, you decide something once, and hundreds of people get to benefit from that decision without ever having to make it themselves.

Look at it that way and an AI agent stops feeling exotic. Documentation, templates, guidelines, review processes, onboarding, the accumulated lore of an organisation, all of it gets dramatically more useful the moment you can simply ask for it, rather than excavating it from folders and three-year-old Slack threads.

Design systems distribute decisions. This distributes the knowledge behind them. The gap between those two things is smaller than I'd assumed.

### Watching how knowledge moves

A happy accident of the project was getting properly hands-on with Langfuse, a company we joined forces with [back in January](https://langfuse.com/blog/joining-clickhouse).

I wired its tracing into the agent so I could see how people were actually using it — which questions came up most, where it confidently fell on its face. Setup took minutes; the payoff was immediate. For the first time I could watch a design system being used rather than guess at it.

We've always measured outputs. This lets you measure the flow of information itself, where knowledge is hard to reach, where the docs are thin, where teams keep tripping over the same missing answer. That feels like a thread worth pulling.

**![Langfuse recording Tamarin](/assets/images/posts/langfuse.png "Langfuse recording Tamarin")**


### What happens next

Whether Tamarin is actually successful is a different question. The technology works, that much I can see in the traces. Whether people find it genuinely useful is the only test that counts, and it's one I can't run from my own laptop. Over the next few months I'll be watching adoption closely.

Who gets the most out of it? Designers? New starters? Will marketing end up using it more than design ever does? Will it cut the interruptions, or just shuffle them somewhere I can't see? I don't know yet. That's rather the point of shipping it.

The broader idea, though, I'm fairly settled on. For a decade we've poured effort into systems that help people build consistent interfaces. I suspect the next decade is about systems that help people make consistent decisions.

So whether Tamarin sinks or swims doesn't keep me up at night. The more interesting question is whether AI quietly becomes part of the plumbing of a design organisation, the way design systems and documentation did before it. My money's on yes.

The teams that scale well from here won't be the ones with the most reviewers. They'll be the ones best at handing their knowledge around. 🍻


### Side quest
In an attempt to help adoption and because it just seemed like fun, I created a quick promo video for Tamarin. Created using Claude and Remotion, I then hooked up ElevenLabs to get the voice over and sound effects. Utterly absurd use of my time, but I think it came out quite perfectly. 

<p><strong><video src="/assets/images/posts/Tamarin.mp4" controls playsinline title="Tamarin Slack App Promo Video"></video></strong></p>
