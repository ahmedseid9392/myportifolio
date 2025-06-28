//cose button
let navbar2=document.querySelector(".navbar2");
let close=document.getElementById("btn1");

close.addEventListener('click',()=>{
navbar2.style.display='none';
navbar2.style.transition='0.8s ease-in-out';
navbar2.style.opacity='0.8s ease-in-out';


});
//menu bar
let menu=document.getElementById ("menubar");
menu.addEventListener('click',()=>{
   
    navbar2.style.display='block';
    navbar2.style.transition='0.8s ease-in-out';
     navbar2.style.opacity='0.8s ease-in-out';
    
})
// dark mode
let dark=document.getElementById("light");
var x=1;
dark.addEventListener('click',()=>{
    x++;
    if(x%2==0){
        document.body.style.backgroundColor='#262223';
        document.body.style.color='white';
        dark.src='icon/brightnes.png'
        document.body.style.transition='0.9s   ';
    }
    else{
        document.body.style.backgroundColor='#f4e4f5';
        document.body.style.color='black';
        dark.src='icon/moon.png';
        document.body.style.transition='0.9s  ';
    }
})
//let=document.getElementsByName("")

//back from contact to me
let back=document.getElementById("left-arrow");
let contact_list=document.querySelector(".contact-list");
let email_card=document.querySelector(".email-card");
let contact=document.getElementById("btn2");
contact.addEventListener('click',()=>{
    contact_list.style.display='block';
})
back.addEventListener('click',()=>{
    contact_list.style.display='none';
    email_card.style.display='none';
})
// for email card

let email_back=document.getElementById("email-back");
let email_btn=document.getElementById("btn3");
email_btn.addEventListener('click',()=>{
    email_card.style.display='block';
    contact_list.style.display='none';
})
email_back.addEventListener('click',()=>{
    email_card.style.display='none';
    contact_list.style.display='block';
})
// if(email_card.style.display=='block'){
//     contact_list.style.display='none'; 
// }

// for phone call card
let phone_card=document.querySelector(".phone-card");
let phone_back=document.getElementById("phone-back");
let phone_btn=document.getElementById("btn4");
phone_back.addEventListener('click',()=>{
    phone_card.style.display='none';
    contact_list.style.display='block';
})
phone_btn.addEventListener('click',()=>{
    phone_card.style.display='block';
    contact_list.style.display='none';
})

//project card
let more_btn=document.getElementById("more-project");
 let reset_btn=document.getElementById("reset-project");
let project4=document.querySelector(".project4");
more_btn.addEventListener('click',()=>{
    project4.style.display='block';
    more_btn.style.display='none';
    reset_btn.style.display='block';
})
// if(project4.style.display=='block'){
//     more_btn.style.display='none';   
reset_btn.addEventListener('click',()=>{
    project4.style.display='none';
    more_btn.style.display='block';
    reset_btn.style.display='none';
})

//skill card
let skill_btn=document.getElementById("skill-btn");
let skill_card=document.querySelector(".skill-card");

let more_skill=document.getElementById("more-skill");
let reset_skill=document.getElementById("reset-skill");
let skill3=document.querySelector(".skill3");
let skill4=document.querySelector(".skill4");
more_skill.addEventListener('click',()=>{
    skill3.style.display='block';
    skill4.style.display='block';
    more_skill.style.display='none';
    reset_skill.style.display='block';

})
reset_skill.addEventListener('click',()=>{
    skill3.style.display='none';
    skill4.style.display='none';
    more_skill.style.display='block';
    reset_skill.style.display='none';
})

//for footer social link text
// facebook
let facebook = document.getElementById("facebook-link");
let facebook_text = document.getElementById("facebook-text");
facebook.addEventListener('mouseenter', () => {
  facebook_text.style.display = 'block';
  facebook_text.style.transition = '0.9s';
});
facebook.addEventListener('mouseleave', () => {
  facebook_text.style.display = 'none';
  facebook_text.style.transition = '0.9s';
});

let github = document.getElementById("github-link");
let github_text = document.getElementById("github-text");
github.addEventListener('mouseenter', () => {
  github_text.style.display = 'block';
  github_text.style.transition = '0.9s';
});
github.addEventListener('mouseleave', () => {
  github_text.style.display = 'none';
  github_text.style.transition = '0.9s';
});

let youtube = document.getElementById("youtube-link");
let youtube_text = document.getElementById("youtube-text");
youtube.addEventListener('mouseenter', () => {
  youtube_text.style.display = 'block';
  youtube_text.style.transition = '0.9s';
});
youtube.addEventListener('mouseleave', () => {
  youtube_text.style.display = 'none';
  youtube_text.style.transition = '0.9s';
});

// LinkedIn
let linkedin = document.getElementById("linkedin-link");
let linkedin_text = document.getElementById("linkedin-text");
linkedin.addEventListener('mouseenter', () => {
  linkedin_text.style.display = 'block';
  linkedin_text.style.opacity = '1';
  linkedin_text.style.transition = 'opacity 0.9s ease-in-out';
});
linkedin.addEventListener('mouseleave', () => {
  linkedin_text.style.display = 'none';
  linkedin_text.style.opacity = '0';
  linkedin_text.style.transition = 'opacity 0.9s ease-in-out';
});

// Instagram
let instagram = document.getElementById("instagram-link");
let instagram_text = document.getElementById("instagram-text");
instagram.addEventListener('mouseenter', () => {
  instagram_text.style.display = 'block';
  instagram_text.style.opacity = '1';
  instagram_text.style.transition = 'opacity 0.9s ease-in-out';
});
instagram.addEventListener('mouseleave', () => {
  instagram_text.style.display = 'none';
  instagram_text.style.opacity = '0';
  instagram_text.style.transition = 'opacity 0.9s ease-in-out';
});

// TikTok
let tiktok = document.getElementById("tiktok-link");
let tiktok_text = document.getElementById("tiktok-text");
tiktok.addEventListener('mouseenter', () => {
  tiktok_text.style.display = 'block';
  tiktok_text.style.opacity = '1';
  tiktok_text.style.transition = 'opacity 0.9s ease-in-out';
});
tiktok.addEventListener('mouseleave', () => {
  tiktok_text.style.display = 'none';
  tiktok_text.style.opacity = '0';
  tiktok_text.style.transition = 'opacity 0.9s ease-in-out';
});