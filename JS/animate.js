import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const happyText = document.querySelector(".happy_text");
const birthdayText = document.querySelector(".birthday_text");
const scrollTrackingTimeline = new ScrollTimeline (
    {
        scrollOffsets: [CSS.percent(22), CSS.percent(30)]
    }
);

happyText.animate (
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }

);

birthdayText.animate (
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }
    );
    
const birthdayPhoto = document.querySelector(".content_photo");
const scrollTrackingTimelineTwo = new ScrollTimeline (
    {
        scrollOffsets: [CSS.percent(30), CSS.percent(35)]
    }
);

birthdayPhoto.animate (
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimelineTwo
    }
    );

const colorChange = document.querySelector(".image_texts");
const scrollTrackingTimelineThree = new ScrollTimeline (
    {
        scrollOffsets: [CSS.percent(35), CSS.percent(45)]
    }
);

birthdayPhoto.animate (
    {
        color: [white]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimelineThree
    }
    );

