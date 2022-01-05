# LearningResourcesAndWordFinder

This application is divided into two parts, `Learning Resources` and `Word Finder`.

## Learning Resources [link](https://rememberme.vercel.app/learning-resources)
Learning Resources is an app that saves links to learning resources added on the page (in your local machine haha).

## Word Finder [link](https://rememberme.vercel.app/find-word)
Word Finder was actually an idea from my niece's school homework, she got some scrambled words that needed to be unscrambled. 
I thought I could find a free dictionary API and yep! I found one. 

### What the app does:
- Unscramble a word
- Send a request to the dictionary with the newly unscrambled word
- If the word is a proper English word, I display the word and its meaning on the page
- If it is not a proper English word, I unscramble the newly unscrambled word and rerun the request to fetch the meaning of the new word
- I play around with `timer` from `rxjs` to do the request reruns.

### Probable Improvements:
- Rework the scrambling algorithm: it takes a while to randomize an entry to get an actual word. (It works now though)
- Work more with the responses from the API: especially in cases where the API returns multiple items for a word
- Explore other ideas with the Word Finder idea.

## Got An Idea To Improve This?
Open an issue. Thanks
