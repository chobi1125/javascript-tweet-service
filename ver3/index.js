document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('tag-btn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let hashtag = document.getElementById('hashtag');
    input.value = input.value + "\n#" + hashtag.value;
    hashtag.value = "";
  }, false);
  document.getElementById('tag-btn2').addEventListener('click', function() {
    let input = document.getElementById('input');
    let hashtag = document.getElementById('hashtagTemp');
    const button = document.getElementById('tag-btn2');
    input.value = input.value + "\n#" + hashtag.value;
    button.disabled = true
  }, false);
  document.getElementById('tag-btn3').addEventListener('click', function() {
    let input = document.getElementById('input');
    let hashtag = document.getElementById('hashtagTemp2');
    const button = document.getElementById('tag-btn3');
    input.value = input.value + "\n#" + hashtag.value;
    button.disabled = true
  }, false);
  document.getElementById('cheer-btn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let cheerText = document.getElementById('cheerText');
    const button = document.getElementById('cheer-btn');
    input.value = input.value + "\n" + cheerText.value;
    button.disabled = true
  }, false);
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
    tweetText = tweetText.replace(/\#/g, '%23');
    let tweet_url = "https://twitter.com/intent/tweet?text="+ tweetText;
    button.className = "a_button";
    tweet.href = tweet_url;
    console.log(tweetText);
  }, false);
}, false);