# Memory Game 
## Initial Criteria ##
The game has to meet following criteria:
* Randomly shuffle cards
* Two identical cards are matched and remain open. If the cards don't match, they flip back.
* The game contains a move counter, a rating, a timer and a reset button.
* After all pairs are found and matched, a modal with total time, rating and moves appear.

The game can be reviewed here:

## Implementation ##
I used Vanilla JS and tried to apply the theory from lesson 2 ("Javascript & The DOM"). To implement an animation effects, I used the library animate.css. I also used Google Fonts (Bangers and Coda).
Following resources provided major help while implementing the code:
* Tutorial with Ryan Waite: https://www.youtube.com/watch?v=oECVwum-7Zc
* Tutorial with Mike Wales: https://www.youtube.com/watch?v=oECVwum-7Zc
* Tutorial on scotch.io: https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript - in particular to understand the matching logic
* Memory Game Walkthrough by Matthew Cranford: https://matthewcranford.com/category/blog-posts/walkthrough/memory-game/ - in particular to understand how to implement a modal

Although it was helpful to discuss other ressources in case of bugs or further issues, my objective was to create a code on my own with my actual knowledge.

The major difficulty was to find a workaround for IE11. Although I transpiled the code via Babel, the page still didn't work properly. At the moment I am surely lacking skills to implement a polyfill or more time to get familiar with Babel, however, I will check on this topic later.


