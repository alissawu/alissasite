
## Images
It felt very nauseous when the project cards resized. After going on some shopping sites. I realized the issue was that I was resizing both height and width. 
The options were to either maintain card size, or only resize width. I only resized width, and stopped feeling nauseous

## CSS
I wasn't able to see CSS updates I made locally, because of browser CSS caching
Cmd-Opt-R (hard-reload on mac) bypasses the cache for CSS requests on subsequent page loads

## LocalStorage
I wanted to store the chapter a user is on in localStorage.
But because I was going to do CSS testing locally, I didn't want to forget to clear localStorage and screw the port for future things.
Especially not port 3000. FWIW I think changing the port would've been a bad solution.
Anyway I set a localStorage key
localStorage.setItem('alissasite-manga-spoilers', '{"csm": 50}')