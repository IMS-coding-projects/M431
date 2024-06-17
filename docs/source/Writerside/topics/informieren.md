<show-structure depth="3"/>

# Informieren

The first step we took in this project was reading
the [criterias and requirements](https://bldsg-my.sharepoint.com/personal/silvan_gehrig_bwz-rappi_ch/_layouts/OneNote.aspx?id=%2Fpersonal%2Fsilvan_gehrig_bwz-rappi_ch%2FDocuments%2FClass%20Notebooks%2FModul%20293%2C%20431%2C%20V-Web%20-%20IMST23a%20BZRA&wd=target%28_Content%20Library%2F12.06.2024%20IPERKA%20Auswerten%2C%20V-Web%20-%20Tag%201.one%7CCE97D6B5-3495-4BCA-A799-3C72901B96F2%2F10_Modulprogramm%7C96CE3A06-A889-4756-BEE6-8).

The plan was to:
> Plan a web presence and realize a prototype as well as document the procedure according to IPERKA. The aim
> therefore is to apply the concepts learned according to IPERKA and implement them with the web knowledge acquired in Module 293.

It was given that:
> In teams of two, create a website for a formal or informal organization (small business, club, band, running club,
> game community, etc...) or a product that does not have a website yet. Take a look at the problem domain and define the
> requirements for the website. The website must be technically fully implementable, including all content and technical
> details.

So thats what we did. After carefully analyzing the requirements, we went to hunt for a project idea.

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

Since it is always a good Idea to make a Mindmap (and since it is a part of Iperka), we created one. Below you can find a
mindmap of the project idea/personal requirements:

![mindmap.png](mindmap.png) {border-effect="rounded" thumbnail="true"}

## Requirements
The requirements for Stream Sphere are as follows:

- Stream Sphere should be an online website. (can it be connected from a Browser? (on port 80/443))
- Stream Sphere should be able to play YouTube videos.
- Stream Sphere should be able to play YouTube music.
- Stream Sphere should have different accounts with different perks. (see [mindmap of StreamSphere](#mindmap))
- Stream Sphere should be able to show the description of a video.
- Stream Sphere should be able to show the duration and artist of a song.


## User Story
As a user, I want:

- to be able to watch YouTube videos **without** ads.
- to be able to see the description of a video.
- to be able to listen to YouTube musics.
- to be able to see the artist and duration of a song.
- to have an uptime of `99.9%`.
- to have a secure connection to the website. (`https`)
- to have a fast connection to the website. (under `2000ms`)
- to be able to create an account so that my actions are remembered.

<seealso>
       <category ref="author">
            <a href="https://www.github.com/An0n-00/M431-WebProject">Chandra und Dario</a>           
       </category>
       <category ref="external">
           <a href="https://www.github.com/An0n-00/M431-WebProject">GitHub Repository</a>
           <a href="https://ims.youtrack.cloud/gantt-charts/199-1">YouTrack</a>
       </category>
</seealso>