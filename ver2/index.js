document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let check = document.getElementById('check');
    let tweet = document.getElementById('tweet');
    let button = document.getElementById('button');
    let replacedText = input.value.replace(/\s+/g, '\n');
    replacedText = replacedText.replace(/\\n/g, '');
    check.textContent = replacedText;
    let tweetText = input.value.replace(/\s+/g, '%0a');
    tweetText = tweetText.replace(/\\n/g, '');
    let tweet_url = "https://twitter.com/intent/tweet?text="+ tweetText;
    button.className = "a_button";
    tweet.href = tweet_url;
    console.log(tweetText);
  }, false);
}, false);