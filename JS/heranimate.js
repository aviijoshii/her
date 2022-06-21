import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const youText = document.querySelector(".you");
const scrollTrackingTimeline = new ScrollTimeline (
    {
        scrollOffsets: [CSS.percent(0), CSS.percent(8)]
    }
);

youText.animate (
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }
    );

const thankYou = document.querySelector(".make");
const scrollTrackingTimelineOne = new ScrollTimeline (
    {
        scrollOffsets: [CSS.percent(20), CSS.percent(28)]
    }
);

thankYou.animate (
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimelineOne
    }
    );

const forText = document.querySelector(".me");
const scrollTrackingTimelineTwo = new ScrollTimeline (
        {
            scrollOffsets: [CSS.percent(45), CSS.percent(60)]
        }
    );
    
 forText.animate (
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimelineTwo
    }
    );

