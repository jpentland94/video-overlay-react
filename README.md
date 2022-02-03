# To start this project

1. run `npm install`
2. run `npm start`

This task shows a video with images that appear at set timestamps. They will disappear at set timestamps and also they will only appear a set number of times. The background colour has been changed and if you hover over the video, the background colour of the body also changes.

Images will render as follows:

**Image 1**:

- shows at **3500ms**
- shows for **5000ms** (i.e. the image is visible from 3500ms-8500ms)
- shows in **top left** of the video
- \*\*shows up **once** (i.e. when rewinding it should not show up again)

**Image 2:**

- shows at **6000ms**
- shows for **2000ms** (i.e. 6000ms-8000ms)
- shows in **top right** of the video
- \*\*shows up **twice**

**Image 3:**

- shows at **7000ms**
- shows for **1500ms** (i.e. 7000ms-8500ms)
- shows up in **centre** of the video
- \*\*shows up **three** times

\*\* bonus objective

## Considerations going into the project

- Do the images need compressed? No they are small enough
- How will I test my code? I will use Jest
- Should I implememnt a CMS so the images can be changed? I do not have time or the project requirements do not specifify this
- Does the project need TypeScript? I will implement TypeScript to validate data being passed into components

## Issues

- The images appear for a set number of seconds, but if you pause the video halfway through the image showing, it will disappear after its pre-set appearance time. This is because the setTimout function that helps time this, runs even if the video is paused. If I had more time, I would look into either:
  a. passing through and checking to see if the video is paused or
  b. add logic to only run the setTimout function if the image has showed for its full allocation depending on the vide current time
- I would have liked more time to implement Jest and Typescript
