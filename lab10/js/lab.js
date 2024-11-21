/* 
    lab.js - This simple JavaScript/jQuery script appends new elements to an output div

    Requirements: jQuery must be loaded for this script to work.

    Author: Miki Foster
    Created: 6 November 2024
*/

    const lyrics=`I don't go out, but I'll do it for you
You never liked it when I drink too much
I hate to dance, but I'd dance with you
'Cause I'd do anything to feel your touch
Don't like anybody, tell me why it's different with you
Don't believe in love, but no one makes me feel like you do
I don't say it much 'cause I just always thought
That you knew, oh
It's what you do to me
I'm wrapped around your finger and I can't stop
You know I got a soft spot for you
You know I got a soft spot for you
Baby, can't you see?
I need you 'cause you're everything that I'm not
You know I got a soft spot for you
You know I got a soft spot for you
Too late, don't wanna fall, baby, I just
Don't need somebody else to throw me aside
But I'm up all night, thinkin' 'bout how
It could be you to change my heart, but I
Don't like anybody, tell me why it's different with you
Don't believe in love, but no one makes me feel like you do
I don't say it much 'cause I just always thought that
You knew, oh
It's what you do to me
I'm wrapped around your finger and I can't stop
You know I got a soft spot for you
You know I got a soft spot for you
Baby, can't you see?
I need you 'cause you're everything that I'm not
You know I got a soft spot for you
You know I got a soft spot for you
For you
For you
For you
You know I got a soft spot for you
It's what you do to me
I'm wrapped around your finger and I can't stop
You know I got a soft spot for you
You know I got a soft spot for you`;


const lyricsArray = lyrics.trim().split('\n');
let currentIndex = 0;

$("#make-convo").click(function() {
    if (currentIndex < lyricsArray.length) {
        const currentLine = lyricsArray[currentIndex].trim();

        $("#output").append('<div class="text"><p>' + currentLine + '</p></div>');

        currentIndex++;
    }
})
