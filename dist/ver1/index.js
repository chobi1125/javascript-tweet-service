document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', function() {
    let input = document.getElementById('input');
    console.log(input.value)
    let result = document.getElementById('result');
    let tweet = document.getElementById('tweet');
    let tweet_url = "https://twitter.com/intent/tweet?text="+ input.value;
    result.value = input.value;
    tweet.href = tweet_url;
  }, false);
}, false);
