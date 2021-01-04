const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '朝８時、外は寒かった。 :insertx: は、仕事に行く準備をする。しかし、:inserty:を忘れる。そして、:insertz:。 :insertx: はよくあることだ。;
let insertX = ['お父さん','お母さん','お兄ちゃん'];
let insertY = ['財布','携帯電話','眼鏡'];
let insertZ = ['転んだ','走って戻った','気が付かずに駅に向かった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' キロ';
    const temperature =  Math.round((94-32) * 5 / 9) + '度';
    newStory = newStory.replace('華氏０度',temperature);
    newStory = newStory.replace('300ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
