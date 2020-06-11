document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('selectTemplate').addEventListener('change', function() {
    let input = document.getElementById('input');
    let selected = document.getElementById('selectTemplate').value;
    input.value = selected;
  }, false);
  document.getElementById('freeTagBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let freeTag = document.getElementBy('freeTag');
    input.value = input.value + "\n#" + freeTag.value;
    freeTag.value = "";
  }, false);
  document.getElementById('selectPopularBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let selected = document.getElementById('selectPopular').value;
    if(selected === ""){
      input.value = input.value;
    }else{
      input.value = input.value + "\n#" + selected;
    }
  }, false);
  document.getElementById('selectLanguageBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let selected = document.getElementById('selectLanguage').value;
    if(selected === ""){
      input.value = input.value;
    }else{
      input.value = input.value + "\n#" + selected;
    }
  }, false);
  document.getElementById('selectFrameworkBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let selected = document.getElementById('selectFramework').value;
    if(selected === ""){
      input.value = input.value;
    }else{
      input.value = input.value + "\n#" + selected;
    }
  }, false);
  document.getElementById('selectVariousBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let selected = document.getElementById('selectVarious').value;
    if(selected === ""){
      input.value = input.value;
    }else{
      input.value = input.value + "\n#" + selected;
    }
  }, false);
  document.getElementById('cheerBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let cheerText = document.getElementById('cheerText');
    const button = document.getElementById('cheerBtn');
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