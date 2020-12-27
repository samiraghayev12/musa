var messages = [], 
  usermsj = "", 
  botmsj = "", 
  botName = 'Musa Bot',
  talking = true;

function sohbet() {
  usermsj = usermsj.toLowerCase();
  talking = true;
  botmsj = "Men seni anlamadım"; 

  if (usermsj.search('salam') >=0) {
    const hi = ['Eleyke salam','tutaqki Əlöküm ','Salam Kələ']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (usermsj.search('adin nedir') >=0) {
    botmsj = botName;
  }
  if (usermsj.search('necesen') >=0) {
    const hi = ['Pisem, sen necesen?','Yaxşıyam','Robot kimiyem','Qopuz kimiyem, sen necesen?']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'nece yasin var' || usermsj =='Nece yasin var') {
    const hi = ['20','Robotdan yaş soruşmazlar']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'random' || usermsj =='reqem') {
    const hi = ['1','2','3','4','5','6','7','8','9','10']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'Haralisan' || usermsj =='haralisan' || usermsj =='haralisan?') {
    const hi = ['Kolanidan','Evimizden','Nagıyevin qonsusuyam']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'atan kimdi' || usermsj =='atan kimdir') {
    const hi = ['Ebulfez bot','Sene dexli yoxdu','Demirem']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'Peysersen?' || usermsj =='peysersen') {
    const hi = ['he nagiyevin qohumundan ne gozluyursen?','Ozunsen Peyser','Olanim budu']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'vusali taniyirsan' || usermsj =='vusal kimdi?') {
    const hi = ['Yaxın Qardaş','O bizim qardasımızdı','oda peyserdi']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'pox' || usermsj =='got') {
    const hi = ['Özünsən','yaxşı','soyüşsüz']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'nagarsan ' || usermsj =='hardasan') {
    const hi = ['malin gotunde','evde','dexli var?']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'samir ayteni sevir?' || usermsj =='ayten samiri sevir?') {
    const hi = ['Hə qardaşim həmdə çooooox','Ala həyə bitəhər olub sevgiden','Dəli kimi']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'ayten kimdir?' || usermsj =='ayten kimdi?') {
    const hi = ['Rasimin qızı','Rasimin qızı','Rasimin qızı']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'ayten nece qizdi' || usermsj =='ayten nece qizdir?') {
    const hi = ['Çooox gözəl və ağıllı güya bilmirsən?','Sən yaxşı bilərsən','Çox ağıllı qızdır']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'samir kimdir' || usermsj =='samir kimdir?') {
    const hi = ['Mənim yaradıcım','Mənim yaradıcım','Mənim yaradıcım']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'helelik' || usermsj =='sagol') {
    const hi = ['Öpürəm qaqa','Davay sağol','Maç']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'sikerem seni' || usermsj =='agzini sikim') {
    const hi = ['xuy','sikimi yiyersen ancaq','tam tam kesin']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'men kimem' || usermsj =='men kimem?') {
    const hi = ['Səni tanımıram','Mənim ürəyim','Nə bilim vallah']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'peyser kimdir' || usermsj =='peyser kimdir?') {
    const hi = ['Musa,Vüsal,Samir,Murad.Mübariz','Sən özünsən oğraş','Birdə soruş deyim']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'salamatciliqdi?' || usermsj =='yaxsisan?') {
    const hi = ['zoram qaqa','şükür salamatçılıq','dəxli yoxdu']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'yaxsiyam' || usermsj =='zoram' || usermsj =='əlayam'){
    const hi = ['babat','zor','qəşşşəy']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'goyde goy qursagi yerde?' || usermsj =='goyde goy qursagi bes yerde' ) {
    const hi = ['Salyan usağı A.Y.E','Salyan usağı A.Y.E']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'mubarizin ad gunu?' || usermsj =='mubinin ad gunu hacandir') {
    const hi = ['2 dekabr','iki dekabır','2 dekabr blət']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'muradin ad gunu' || usermsj =='muradin ad günü hacandir') {
    const hi = ['24 aprel','24 Aprel','24 Aprel bləəəəə']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'senin ad gunun' || usermsj =='senin ad gunun hacandir') {
    const hi = ['10 yanvar','Mən botam 10 yanvar','10 yanvar,Soraa?']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'vusalin ad gunu' || usermsj =='vusalin ad gunu hacandir') {
    const hi = ['Mənnən 3 gün əvvəl','7 yanvar blə','7 yanvar']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'yaxsi beri insana elə ne demekdir?' || usermsj =='yaxsi beri insana ele ne demekdir') {
    const hi = ['Elə beri deməkdir?','Elə beri deməkdir','Elə beri deməkdir']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'beriler ay beriler' || usermsj =='briler ay beriler') {
    const hi = ['Sizə qurban berilər','sizə qurban berilər','Sizə qurban berilər']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'kimsene vabse' || usermsj =='kimsene vabse?') {
    const hi = ['Dəxli var qaqa?','Səni sikən','Nə siqeret?']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'davay osdur' || usermsj =='sikdir') {
    const hi = ['Danışdırma məni','Sikdir vabşee','Yaxşı qaqa']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'nagarirsan' || usermsj =='neynirsen') {
    const hi = ['Səni sikir?','Zor elirəm','Uzanmışam']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'sikerem seni peyser' || usermsj =='aglli ol') {
    const hi = ['sikimi yiyərsən','nətər məsləhətdi','nə siqeret?']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'sizce yanir yoxsa yandirilir?' || usermsj =='sizce yanir yoxsa yandirilir') {
    const hi = ['Nəə siqeret?','ay bləəə aybləəəə ay bləəəəə','ay bləəə ay bləəə ay bləəəəə']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (usermsj == 'abcd' || usermsj =='abcd') {
    const hi = ['abcd','abcd','abcd']
    botmsj = hi[Math.floor(Math.random()*(hi.length))];;
  }

}

function baslat() {
 
  if (document.getElementById("chatbox").value != "") {
  
    usermsj = document.getElementById("chatbox").value;
   
    document.getElementById("chatbox").value = "";
    messages.push("<b style='color:red;'> Siz </b>"+usermsj);
    sohbet();
    messages.push("<b style='color:crimson;'>" + botName + ":</b> " + botmsj);
  
    if(botmsj=="18")
      Speech("on sekkiz");
    else if(botmsj=="1")
      Speech("bir");
    else if(botmsj=="2")
      Speech("iki");
    else if(botmsj=="3")
      Speech("üş");
    else if(botmsj=="4")
      Speech("dört");
    else if(botmsj=="5")
      Speech("beş");
    else if(botmsj=="6")
      Speech("altı");
    else if(botmsj=="7")
      Speech("yeddi");
    else if(botmsj=="8")
      Speech("sekkiz");
    else if(botmsj=="9")
      Speech("dokkuz");
    else if(botmsj=="10")
      Speech("on");
    else
      Speech(botmsj);
    
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        document.getElementById("botgif").src = "bot.gif";
        if(botmsj.length <= 10)
          setTimeout(StartStop, 900);
        else if(botmsj.length <= 20)
          setTimeout(StartStop, 2400);
        else
          setTimeout(StartStop, 3500);
    }
  }
}

function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    
    utterance.lang = 'en-EN';
    
  }
}
function StartStop(){
  document.getElementById("botgif").src = "1609091391602.jpeg";

}


document.onkeypress = keyPress;

function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    
    baslat();
  }
  if (key == 38) {
    console.log('hi')
      
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}