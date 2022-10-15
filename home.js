 
  
    //ul
    $(document).ready(function(){
      console.log(1)
      $(window).bind('scroll', function() {
        console.log(2)
      var navHeight = $( window ).height() -70;
        if ($(window).scrollTop() > navHeight) {
          console.log(3)
          $('.filters_menu').addClass('fixed');
        }
        else {
          console.log(4)
          $('.filters_menu').removeClass('fixed');
        }
     });
   });
  
console.log(233)

//carousel
function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('step-animation');
      document.querySelector('#toggle-animation').addEventListener('click', classToggle);
      console.log(233)
  }
  
//down
  $(function() {
    console.log(2433)
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');
  
        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');
  
            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');
  
            }, 800);
        } else {
            card.addClass('mc-active');
  
            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');
  
            }, 800);
        }
    });
  });



  var signUpBtn = document.querySelector('#signUp');
  var logInBtn = document.querySelector('#logIn');
  // var msg = document.getElementById('message');
  
  
  //註冊
  function signUpcheck() {
  
    // model
    var username = document.querySelector('#username').value;
    var emailStr = document.querySelector('#emailLogup').value;
    var passwordStr = document.querySelector('#passwordLogup').value;
    console.log("email",emailStr);
    console.log("password",passwordStr);
    var account = {}; //輸入的資料，填入空物件
    account.name=username;
    account.email = emailStr; //填入的 email
    account.password = passwordStr; //填入的密碼
  
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:8080/api/user/register', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    var data = JSON.stringify(account); //因為格式是 JSON，所以要轉字串
    console.log("data",data);
    console.log("account",account);
    console.log("a");
    xhr.send(data);
    console.log("b");
    xhr.onload = function () {
      console.log("c");
      var callbackData = JSON.parse(xhr.responseText); //因為輸入資料目前是字串，要轉成物件才能使用
      // var str = callbackData.message;
      // if (str == "帳號註冊成功") {
      //   alert('帳號註冊成功');
      // } else {
      //   alert('帳號已被使用');
      // }
    }
  }
  
  //登入
  function logIncheck() {
  
    // model
    var emailStr = document.querySelector('#emailLogin').value;

    var passwordStr = document.querySelector('#passwordLogin').value;
    console.log(emailStr);
    console.log(passwordStr);
    var account = {}; //輸入的資料，填入空物件
    account.email = emailStr; //填入的 email
    account.password = passwordStr; //填入的密碼
  
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:8080/api/user/login', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(account); //因為格式是 JSON，所以要轉字串
    xhr.send(data);
    xhr.onload = function () {
      console.log((xhr.responseText)); 
      var callbackData = JSON.parse(xhr.responseText); //因為輸入資料目前是字串，要轉成物件才能使用
      console.log(callbackData); 
      var str = callbackData.message;
      console.log(str);
      if (callbackData == "登入成功") {
        alert('登入成功');
      } else {
        alert('此帳號不存在或帳號密碼錯誤');
      }
    }
  
  }
  
  // event
  signUpBtn.addEventListener('click', signUpcheck, false);
  logInBtn.addEventListener('click', logIncheck, false);

//login
/**
 * Variables
 */
 const signupButton = document.getElementById('signup-button'),
 loginButton = document.getElementById('login-button'),
 userForms = document.getElementById('user_options-forms')

/**
* Add event listener to the "Sign Up" button
*/
signupButton.addEventListener('click', () => {
userForms.classList.remove('bounceRight')
userForms.classList.add('bounceLeft')
}, false)

/**
* Add event listener to the "Login" button
*/
loginButton.addEventListener('click', () => {
userForms.classList.remove('bounceLeft')
userForms.classList.add('bounceRight')
}, false)

// setting
console.clear();

const toggle = document.querySelectorAll('.toggle');

for (var i = 0; toggle.length > i; i++) {if (window.CP.shouldStopExecution(0)) break;
  toggle[i].addEventListener('click', function () {
    this.classList.toggle('is-on');
  });
}window.CP.exitedLoop(0);

const radioItem = document.querySelectorAll('.radio__item');

for (var i = 0; radioItem.length > i; i++) {if (window.CP.shouldStopExecution(1)) break;
  radioItem[i].addEventListener('click', function () {
    const siblingItems = this.parentNode.getElementsByClassName('radio__item');
    for (var i = 0; siblingItems.length > i; i++) {if (window.CP.shouldStopExecution(2)) break;
      siblingItems[i].classList.remove('is-active');
    }window.CP.exitedLoop(2);
    this.classList.toggle('is-active');
  });
}window.CP.exitedLoop(1);

const sliderInput = document.querySelectorAll('.slider__input');

for (var i = 0; sliderInput.length > i; i++) {if (window.CP.shouldStopExecution(3)) break;
  sliderInput[i].addEventListener('input', function () {
    const valueContainer = this.parentNode.parentNode.querySelector('.slider__value');
    const sliderValue = this.value;
    const maxVal = this.getAttribute('max');
    const posWidth = this.value / maxVal;
    this.parentNode.querySelector('.slider__positive').style.width = posWidth * 100 + '%';
    valueContainer.innerHTML = sliderValue;
  });
}

// Credits
window.CP.exitedLoop(3);const credits = document.createElement('footer');
credits.innerHTML = '<p><small>Designed and inspired by <a href="https://dribbble.com/shots/3922216-Daily-UI-Challenge-007-Settings" target="_blank" class="link--dribbble">devinvm\'s dribbble shot</a></small></p>';
credits.classList = 'credits';
document.body.appendChild(credits);


// isotope js
$(document).ready(function(){
  console.log(2433)
  console.log(1);
  $('.filters_menu li').click(function () {
      $('.filters_menu li').removeClass('active');
      $(this).addClass('active');

      var data = $(this).attr('data-filter');
      $grid.isotope({
          filter: data
      })
  });

  var $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: false,
      masonry: {
          columnWidth: ".all"
      }
  })
});
