
document.addEventListener('DOMContentLoaded', () => {
  var elementsToFadeIn = document.querySelectorAll('.fade-in');

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  elementsToFadeIn.forEach(element => observer.observe(element));
  // Select the container where the element is expected to be added
  const targetNode = document.body; // Or specify a more specific container
  const observerConfig = { childList: true, subtree: true };

  // Callback to execute when mutations are observed
  const observerCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Check if your element has been added
        const addedNode = mutation.target.querySelector('#bmc-wbtn');
        if (addedNode) {
          // Modify your element style here
          addedNode.style.maxHeight = '48px';
          addedNode.style.maxWidth = '48px';
          // Stop observing if you only care about this once
          observer2.disconnect();
        }
      }
    }
  };

  // Create an observer instance and start observing
  const observer2 = new MutationObserver(observerCallback);
  observer2.observe(targetNode, observerConfig);
});


const defaultValues = {
  'currentLevel': 1,
  'currentXP': 0,
  'averageDMScore': 600,
  'baseXP': 720
};

const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
function scrollToBottom() {
  var margin = 20;
  var duration = 1000;
  var div = document.querySelector('.window');

  var start = div.scrollTop;
  var end = div.scrollHeight - div.clientHeight + margin;
  var distance = end - start;

  let startTime = null;

  function scrollStep(timestamp) {
    if (!startTime) startTime = timestamp;

    var progress = Math.min((timestamp - startTime) / duration, 1);
    var easedProgress = easeInOutQuad(progress); 

    div.scrollTop = start + distance * easedProgress;

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  // Start the animation
  requestAnimationFrame(scrollStep);
}

/*document.querySelectorAll('.calculate-button').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.classList.remove('clicked');
  });

  button.addEventListener('mouseup', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200); // Matches the duration of the fade-out animation
  });
});*/

const scrollContainer = document.querySelector('.window');
const scrollTopButton = document.getElementById('scrollTopButton');

// Show/hide button based on scroll position
scrollContainer.addEventListener('scroll', () => {
  if (scrollContainer.scrollTop > 100) { 
    scrollTopButton.style.display = 'inline';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

// Scroll back to the top when the button is clicked
function scrollToTop() {
  scrollContainer.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
}
const scrollToTopButton = document.getElementById('scrollTopButton')
scrollToTopButton.addEventListener('click', scrollToTop)

document.querySelector('#startDate').valueAsDate = new Date();
if(document.querySelector('#endDate') != null) {
  document.querySelector('#endDate').valueAsDate = new Date(Date.UTC(new Date().getFullYear() + 1, 0, 1));
}


function validateInput() {
  // Allow only digits
  if (!/^\d*$/.test(levelField.value)) {
    levelField.value = levelField.value.replace(/\D/g, ""); // Remove non-numeric characters
  }
  if (!/^\d*$/.test(xpField.value)) {
    xpField.value = xpField.value.replace(/\D/g, ""); // Remove non-numeric characters
  }
  if (!/^\d*$/.test(scoreField.value)) {
    scoreField.value = scoreField.value.replace(/\D/g, ""); // Remove non-numeric characters
  }

  var levelValue = parseInt(levelField.value);
  if (isNaN(levelValue) || levelValue < 1 || levelValue > 39) {
    levelField.classList.add('error');
    levelErrorLabel.innerText = "Please input a number between 1 and 39";
  } else {
    levelField.classList.remove('error');
    levelErrorLabel.innerText = "";
  }

  var xpValue = parseInt(xpField.value);
  if (isNaN(xpValue) || xpValue < 0 || xpValue > 4999) {
    xpField.classList.add('error');
    xpErrorLabel.innerText = "Please input a number between 0 and 4999";
  } else {
    xpField.classList.remove('error');
    xpErrorLabel.innerText = "";
  }

  var scoreValue = parseInt(scoreField.value);
  if (isNaN(scoreValue) || scoreValue <= 0) {
    scoreField.classList.add('error');
    scoreErrorLabel.innerText = "Please input a number greater than 0";
  } else {
    scoreField.classList.remove('error');
    scoreErrorLabel.innerText = "";
  }
  checkErrors();
}

// ERRORS
var levelField = document.querySelector('#currentLevel');
var levelErrorLabel = document.querySelector('#currentLevelERROR');
var xpField = document.querySelector('#currentXP');
var xpErrorLabel = document.querySelector('#currentXPERROR');
var scoreField = document.querySelector('#averageDMScore');
var scoreErrorLabel = document.querySelector('#averageDMScoreERROR');
var dateField = document.querySelector('#startDate');
var dmCheckbox = document.querySelector('#useDeathmatch');
var missionsCheckbox = document.querySelector('#useMissions');
var missionsXPField = document.querySelector('#averageMissionsXP');

// Attach event listener to input field
levelField.addEventListener('input', validateInput);
xpField.addEventListener('input', validateInput);
scoreField.addEventListener('input', validateInput);

levelField.addEventListener('focusout', manageInput);
xpField.addEventListener('focusout', manageInput);
scoreField.addEventListener('focusout', manageInput);
dmCheckbox.addEventListener('change', managedmCheckbox);
missionsCheckbox.addEventListener('change', manageMissionsCheckbox);
missionsXPField.addEventListener('focusout', manageInput)

function manageInput() {
  if (levelField.value == "") {
    levelField.value = 1;
    validateInput();
  }
  if (xpField.value == "") {
    xpField.value = 0;
    validateInput();
  }
  if (scoreField.value == "") {
    scoreField.value = defaultValues.averageDMScore;
    validateInput();
  }
}

scoreLabel = document.querySelector('label[for="averageDMScore"]');
function managedmCheckbox() {
  if (dmCheckbox.checked) {
    scoreLabel.attributes["data-i18n"].value = 'averageDMScore';
    scoreLabel.innerText = translations[localStorage.language]['averageDMScore'];
    scoreField.value = defaultValues.averageDMScore;
  } else {
    scoreLabel.attributes["data-i18n"].value = 'baseXP';
    scoreLabel.innerText = translations[localStorage.language]['baseXP'];
    scoreField.value = defaultValues.baseXP;
  }
}

function manageMissionsCheckbox() {
  console.log('ok')
  if(missionsCheckbox.checked) {
    missionsXPField.classList.remove('disabled');
    missionsXPField.readOnly = false;
  } else {
    missionsXPField.classList.add('disabled');
    missionsXPField.readOnly = true;
  }
}

var currentMedals = document.querySelectorAll("input[name='current']");
currentMedals.forEach(element => element.addEventListener('change', manageMedals));
var targetMedals = document.querySelectorAll("input[name='target']");
targetMedals.forEach(element => element.addEventListener('change', manageMedals));
var currentLabels = document.querySelectorAll("label[name='current']");
var targetLabels = document.querySelectorAll("label[name='target']");


function manageMedals() {
  if (this.attributes.name.value == 'current') {
    for (var i = 0; i < (parseInt(this.value)); i++) {
      targetLabels[i].classList.add('disabled');
      targetMedals[i].checked = false;
    }
    for (var i = parseInt(this.value); i < targetMedals.length; i++) {
      targetLabels[i].classList.remove('disabled');
    }
    if (document.querySelector('input[name="target"]:checked') == null) {
      targetMedals[parseInt(this.value)].checked = true;
    }
  }
}

function resetValues() {
  if(currentMedals.length != 0) {
    for (var i = 0; i < (currentMedals.length); i++) {
      currentMedals[i].checked = false;
      targetLabels[i].classList.remove('disabled');
      targetMedals[i].checked = false;
    }
    currentMedals[0].checked = true;
    targetMedals[0].checked = true;
  }

  levelField.value = defaultValues.currentLevel;
  xpField.value = defaultValues.currentXP;
  dateField.valueAsDate = new Date();
  scoreField.value = defaultValues.averageDMScore;
  dmCheckbox.checked = true;
  managedmCheckbox();

  document.querySelector('#resultArea').classList.add('hidden');
  validateInput();
}

var reducedXP = 0;
function xpFromPlaytime(playtimeHours, baseXP) {
  const h1 = 4500 / (baseXP * 4);
  const h2 = h1 + 3000 / (baseXP * 2);
  const h3 = h2 + 3667 / baseXP;

  if (playtimeHours > 0 && playtimeHours <= h1) {
    // High XP rate
    return baseXP * 4 * playtimeHours;
  } else if (playtimeHours > h1 && playtimeHours <= h2) {
    // Reduced rate #1
    return baseXP * 2 * playtimeHours + 2250;
  } else if (playtimeHours > h2 && playtimeHours <= h3) {
    // Reduced rate #2
    return baseXP * playtimeHours + 4875;
  } else if (playtimeHours > h3) {
    // Very reduced rate
    reducedXP = (baseXP * 0.175 * playtimeHours + 10066) - 11167;
    return baseXP * 0.175 * playtimeHours + 10066;
  } else {
    return 0;
  }
}

function hoursForXP(neededWeeklyXP, baseXP) {
  var y = neededWeeklyXP;
  var h1 = 4500 / (baseXP * 4);
  var h2 = h1 + 3000 / (baseXP * 2);
  var h3 = h2 + 3667 / baseXP;
  if (0 < y && y <= 4 * baseXP * h1) {
    return y / (4 * baseXP);
  } else if (4 * baseXP * h1 < y && y <= 2 * baseXP * h2 + 2250) {
    return (y - 2250) / (2 * baseXP);
  } else if (2 * baseXP * h2 + 2250 < y && y <= baseXP * h3 + 4875) {
    return (y - 4875) / baseXP;
  } else if (y > baseXP * h3 + 4875) {
    return (y - 10066) / (0.175 * baseXP);
  } else {
    return NaN; // Handle undefined cases
  }
}

/**
* Simulates daily XP accumulation from `startDate` up to (but not including) `endDate`,
* playing `dailyHours` each day. 
* Every Wednesday the XP penalty "resets" — meaning we call xpFromPlaytime(...) 
* on whatever hours we've accumulated since the previous reset and then start a new chunk.
*/

var milestoneDates = new Array(6);

function countWednesdays(startDate, endDate) {
  let count = 0;
  const current = new Date(startDate);

  while (current <= endDate) {
    if (current.getDay() === 3) { // 3 = Wednesday
      count++;
    }
    current.setDate(current.getDate() + 1); // Move to next day
  }
  console.log(count);
  return count;
}

var totalReducedXP = 0;
function simulateXP(dailyHours, startDate, endDate, baseXP, currentLevelXP, currentMedal) {
  let totalXP = 0;

  // We accumulate weekly hours until a reset happens on Wednesday (dayOfWeek=3),
  // or we hit the `endDate`.
  let weeklyHours = 0;

  // Create local copies so we don't mutate the original inputs.
  let day = new Date(startDate);
  const end = new Date(endDate);

  const milestones = [
    195000,
    390000,
    585000,
    780000,
    975000,
    1170000
].map(xp => xp - currentLevelXP);

milestoneDates = milestoneDates.fill(null);
let nextMilestoneIndex = currentMedal;
let daysInWeek = 0;
let xpEarnedInWeek = 0;
let xpEarnedPerDay = 0;
  reducedXP = 0;
  totalReducedXP = 0;
  while (day < end) {
    // Add daily hours for this calendar day
    weeklyHours += dailyHours;
    daysInWeek++;

    // Figure out what tomorrow is
    let tomorrow = new Date(day);
    tomorrow.setDate(day.getDate() + 1);

    //TODO - FIX XPFROMPLAYTIME (doesn't consider time spent reaching 10066)  - FIND RIGHT DAY IN WEEK WHERE MEDAL IS EARNED  - ADD REDUCED XP COUNTER

    // If tomorrow is outside the date range OR is a Wednesday, 
    // we finalize the XP for the partial/current chunk:
    if (tomorrow >= end || tomorrow.getDay() === 3) {
      xpEarnedInWeek = xpFromPlaytime(weeklyHours, baseXP);
      xpEarnedPerDay = xpEarnedInWeek / daysInWeek;
      // Reset hours for the next chunk
      weeklyHours = 0;
      totalReducedXP += reducedXP;
      for(let i=0; i<daysInWeek; i++) {
        let medalDay = new Date(tomorrow);
        medalDay.setDate(medalDay.getDate()-daysInWeek+i);
        totalXP += xpEarnedPerDay;
        // check if there's a medal to be earned, and if neededXP + missionXP + tolerance (compensating for binary search) >= milestone
        if (nextMilestoneIndex < milestones.length && (totalXP+startingXP+0.01) >= milestones[nextMilestoneIndex]) 
        {
          milestoneDates[nextMilestoneIndex] = new Date(medalDay); // Medal achieved by this date
          if(tomorrow.getDate()==1 && tomorrow.getMonth()==0) {
            milestoneDates[nextMilestoneIndex] = new Date(medalDay);
          }
          nextMilestoneIndex++;
        }
      }
      daysInWeek = 0;
        // totalXP += xpEarnedInWeek;
        // if (nextMilestoneIndex < milestones.length && totalXP >= milestones[nextMilestoneIndex]) 
        // {
        //   milestoneDates[nextMilestoneIndex] = new Date(tomorrow); // Medal achieved by this date
        //   if(tomorrow.getDate()==1 && tomorrow.getMonth()==0) {
        //     milestoneDates[nextMilestoneIndex] = new Date(day);
        //   }
        //   nextMilestoneIndex++;
        // }
      }
    

    // Move to the next day
    day = tomorrow;
  }
  const diffInMs = endDate - startDate;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  totalReducedXP = totalReducedXP / diffInDays;
  return totalXP;
}

/**
* Uses a simple binary search to find the minimal daily hours required
* to reach at least `neededXP` over the period [startDate, endDate).
*/
function findDailyHours(neededXP, startDate, endDate, baseXP, currentXP, currentMedal) {
  let low = 0;
  let high = 24; // good luck playing more than 24 hours in a day
  let best = high;

  // We'll do ~40 iterations to get a fairly precise solution
  for (let i = 0; i < 40; i++) {
    let mid = (low + high) / 2;
    let xp = simulateXP(mid, startDate, endDate, baseXP, currentXP, currentMedal);

    if (xp >= neededXP) {
      // mid daily hours is enough -> try smaller
      best = mid;
      high = mid;
    } else {
      // mid is not enough -> need more hours
      low = mid;
    }

    // stop binary search when earned XP is within TOLERANCE
    if (Math.abs(xp-neededXP) < 0.001) {
      break;
    }
  }

  return best;
}

let playtimeData = {
  hours: 0,
  minutes: 0,
};

function formatPlaytime(hours) {
  // Get translation for playtime
  const template = translations[localStorage.language].playtime;
  // Calculate hours and minutes
  const h = Math.floor(hours);
  const m = Math.round(60 * (hours - h));
  playtimeData.hours = h;
  playtimeData.minutes = m;
  // Replace placeholders with actual values
  return template
    .replace("%{hours}", h)
    .replace("%{minutes}", m);
}


var startingXP = 0;
function calculate() {
  // Gather inputs as before
  if (document.querySelector('#useDeathmatch').checked) {
    var baseXP = Math.min(document.querySelector('#averageDMScore').value * 6 / 5, 1200);
  }
  else {
    var baseXP = document.querySelector('#averageDMScore').value;
  }
  const currentLevel = document.querySelector('#currentLevel').value;
  const currentXP = document.querySelector('#currentXP').value;
  const currentMedal = document.querySelector('input[name="current"]:checked').value;
  const targetMedal = document.querySelector('input[name="target"]:checked').value;

  // Start date: user provided
  const sd = new Date(document.querySelector('#startDate').value);
  // End date: Jan 1 of the following year
  const endDateObj = new Date(sd.getFullYear() + 1, 0, 1);

  // Compute total needed XP
  var neededXP = 195000 * (targetMedal - currentMedal)
    - 5000 * currentLevel
    + 5000
    - currentXP;

  if(missionsCheckbox.checked) {
    startingXP = missionsXPField.value*countWednesdays(sd, endDateObj);
    neededXP = neededXP - startingXP;
  }

  // Binary search for a single daily hour value
  const dailyHours = findDailyHours(neededXP, sd, endDateObj, baseXP, 195000*currentMedal+5000*(currentLevel-1)+parseInt(currentXP), currentMedal);

  // Show result in page
  document.querySelector('#resultArea').classList.remove('hidden');
  document.querySelector('#neededXP').innerText = neededXP.toString();
  document.querySelector('#reducedXP').innerText = Math.round(totalReducedXP.toString());

  document.querySelector('#neededPlaytime').innerText =
    formatPlaytime(dailyHours);
  document.querySelector('#neededDailyXP').innerText = Math.round(neededXP / ((endDateObj - sd) / (60 * 60 * 24 * 1000)));
  
  const medalIDs = ["#whiteDate", "#greenDate", "#blueDate", "#purpleDate", "#pinkDate", "#redDate"];
  for(let i=0; i<medalIDs.length; i+=1) {
    if(milestoneDates[i]!=null) {
      document.querySelector(medalIDs[i]+'Row').classList.remove('hidden');
      document.querySelector(medalIDs[i]).innerText = `${milestoneDates[i].getDate()}/${milestoneDates[i].getMonth()+1}`
    }
    else {
      document.querySelector(medalIDs[i]+'Row').classList.add('hidden');
    }
  }
  
}


function calculateXP() {
  var dailyHours = parseFloat(document.getElementById('playtimeInputHours').value) + parseFloat(document.getElementById('playtimeInputMinutes').value/60.0);
  const startDate = new Date(document.querySelector('#startDate').value);
  const endDate = new Date(document.querySelector('#endDate').value);
  if (document.querySelector('#useDeathmatch').checked) {
    var baseXP = Math.min(document.querySelector('#averageDMScore').value * 6 / 5, 1200);
  }
  else {
    var baseXP = document.querySelector('#averageDMScore').value;
  }
  const earnedXP = simulateXP(dailyHours, startDate, endDate, baseXP, 0);
  const currentLevel = parseInt(document.querySelector('#currentLevel').value);
  const currentXP = parseInt(document.querySelector('#currentXP').value);
  document.querySelector('#resultArea').classList.remove('hidden');
  document.querySelector('#earnedXP').innerText = Math.floor(earnedXP).toString();
  var levelsEarned = Math.floor((currentXP + earnedXP) / 5000);
  document.querySelector('#levelsEarned').innerText = levelsEarned;
  document.querySelector('#medalsEarned').innerText = Math.floor((currentLevel+Math.floor(levelsEarned/39)-1 + levelsEarned) / 40);

}


function checkErrors() {
  if (document.querySelectorAll("input[class='error']").length == 0) {
    document.querySelector(".calculate-button").disabled = false;
  }
  else {
    document.querySelector(".calculate-button").disabled = true;
  }
}

document.addEventListener('input', checkErrors);


function showHelp() {
  var calculator = document.getElementsByClassName('calculator')[0];
  var help = document.getElementById('helpPage');
  var helpWidget = document.getElementById('help-widget');

  setTimeout(() => {
    requestAnimationFrame(() => help.classList.add('active'));
  }, 0);
  calculator.style.display = 'none';
  // Show and fade-in Help
  help.style.display = 'block';
  setTimeout(() => {
    requestAnimationFrame(() => help.classList.add('active'));
  }, 0);
  calculator.classList.remove('active');
  helpWidget.attributes.onclick.value = 'showCalculator()';
  helpWidget.innerHTML = '<img src="icons/calculator.png" alt="Help">';
}

function showCalculator() {
  var calculator = document.getElementsByClassName('calculator')[0];
  var help = document.getElementById('helpPage');
  var helpWidget = document.getElementById('help-widget');
  help.style.display = 'none';
  calculator.style.display = 'block';

  setTimeout(() => {
    requestAnimationFrame(() => calculator.classList.add('active'));
  }, 0);
  help.classList.remove('active');
  helpWidget.attributes.onclick.value = 'showHelp()';
  helpWidget.innerHTML = '<span class="help-question-mark">?</span>';
}

document.getElementById('bmc-widget').addEventListener('click', function () {
  const popup = document.getElementById('support-popup');
  if (popup.classList.contains('show')) {
    popup.classList.remove('show'); // Fade out
  } else {
    popup.classList.add('show'); // Fade in
  }
});
