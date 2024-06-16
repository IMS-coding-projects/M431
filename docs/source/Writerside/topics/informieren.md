<show-structure depth="4"/>

# Informieren

The first step we took to go at this project was to think about what we wanted to create. The only criteria we had was
that it had to be a website.


## Research

Upon searching for inspiration on the internet (various websites), we found a few interesting project ideas. The most
interesting and the most doable project was [iv-org/invidious](https://github.com/iv-org/invidious). Invidious is an
alternative front-end to YouTube. It allows you to watch YouTube videos without ads and without tracking. It also allows
you to download YouTube videos. The project is open-source and is written in Ruby.
But [the sad thing](https://docs.invidious.io/instances/#list-of-public-invidious-instances-sorted-from-oldest-to-newest)
is, is that invidious's CSS is (in our opinion) not very user-friendly.
![exampleofcss.png](exampleofcss.png) {border-effect="rounded" thumbnail="true"}
So we decided to create our own version of Invidious. We decided to call the project _StreamSphere_.

### Mindmap
Below you can find a mindmap of the project idea/personal requirements:
<<<<<<< HEAD:docs/source/Writerside/topics/inform.md

![mindmapv2.png](mindmapv2.png) {border-effect="rounded" thumbnail="true"}
=======
![mindmap of StreamSphere](mindmap.png) {border-effect="rounded" thumbnail="true"}
>>>>>>> 846232cc96c2e39ad46af067652e114199705413:docs/source/Writerside/topics/informieren.md

## Requirements
The requirements for Stream Sphere are as follows:

- Stream Sphere should be an online website. (can it be connected from a Browser? (on port 80/443))
- Stream Sphere should be able to play YouTube videos.
- Stream Sphere should be able to play YouTube music.
- Stream Sphere should be able to download YouTube videos.
- Stream Sphere should be able to download YouTube musics.
- Stream Sphere should have different accounts with different permissions. (see [mindmap of StreamSphere](#mindmap))
- Stream Sphere should be able to show the description of a video.
- Stream Sphere should be able to show the duration and artist of a song.

## User Story
As a user, I want:
<<<<<<< HEAD:docs/source/Writerside/topics/inform.md
- to be able to watch YouTube videos. (does it load...)
- to be able to listen to YouTube music. (does it play...)
- to be able to download YouTube videos / music. (does it download...)
- to have an uptime of 99.9% (is it always online...)
- to have a secure connection to the website. (https)
- to have a fast connection to the website. (under 2 seconds)
- to be able to see the comments of a video.
- to be able to see the description of a video.
- to be able to see the artist and duration of a song.
=======

- to be able to watch YouTube videos.
- to be able to download YouTube videos.
- to be able to listen to YouTube musics.
- to be able to download YouTube musics.
- to have an uptime of 99.9%.
- to have a secure connection to the website. (http**s**)
- to have a fast connection to the website. (under 2000ms)
- to be able to see the description of a video.
- to be able to see the artist and duration of a song.
>>>>>>> 846232cc96c2e39ad46af067652e114199705413:docs/source/Writerside/topics/informieren.md
