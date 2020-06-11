document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('selectTemplate').addEventListener('change', function() {
    let input = document.getElementById('input');
    let selected = document.getElementById('selectTemplate').value;
    input.value = selected;
  }, false);
  document.getElementById('freeTagBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let freeTag = document.getElementById('freeTag');
    if(freeTag.value === ""){
      input.value = input.value;
    }else{
      input.value = input.value + "\n#" + freeTag.value;
      freeTag.value = "";
    }
  }, false);
  const hashtags = ["Popular","Language","Framework","Various"]
  hashtags.forEach(function(value){
    document.getElementById('select'+value).addEventListener('change', function() {
      let input = document.getElementById('input');
      let selected = document.getElementById('select'+value).value;
      if(selected === ""){
        input.value = input.value;
      }else{
        input.value = input.value + "\n#" + selected;
      }
    }, false);
  })
  document.getElementById('cheerBtn').addEventListener('click', function() {
    let input = document.getElementById('input');
    let cheerBtn = document.getElementById('cheerBtn');
    if (cheerBtn.checked === true){
      input.value = input.value + "\n" + cheerBtn.value;
    } else {
      input.value = input.value.replace("\nPostedBy:https://chobimusic.com/tweet", '');
    }
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
    let btn = document.getElementById('btn');
    btn.textContent = "変更"
  }, false);
}, false);