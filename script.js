function onSubmit(){
    var findMonth = document.getElementById("selectMonth").value;
    var findDay = document.getElementById("selectDay").value;
    if(isBirthday(findMonth, findDay)){
        bdayHoroscope(findMonth, findDay);
    }  else  {
        determineSign(findMonth, findDay);
    }
    console.log(sign);
}

function determineSign(month, day){
    console.log(month);
    console.log(day);
    var sign = "";
    var name = document.getElementById("name").value;
    if(month == 1){
        if(day <= 19){
            sign = "Capricorn";
            document.getElementById("image").innerHTML = "<img src=\"img/Capricorn.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", your creative energy is all fired up and ready to go -- so make something awesome happen! It's time to bust out your artistic toolkit -- whatever it is that lets you noodle around and explore all kinds of ideas. You're sure to feel inspired -- in fact, you may have so much fun playing around that you look for ways to incorporate play into your regular, everyday life.";

        }
        if(day > 19 && day <= 31){
            sign = "Aquarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Aquarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", tying up loose ends comes naturally to you, especially when it comes to financial and personal matters. Right now, you might have important issues popping up in both areas that need to be addressed. Is there a debt hanging over your head? If you can't pay it off right away, now is the time to figure out how to deal with it. If a relationship needs some attention, too, you've got the mojo for that.";
        }
    }
    if(month == 2){
        if(day <= 18){
            sign = "Aquarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Aquarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", tying up loose ends comes naturally to you, especially when it comes to financial and personal matters. Right now, you might have important issues popping up in both areas that need to be addressed. Is there a debt hanging over your head? If you can't pay it off right away, now is the time to figure out how to deal with it. If a relationship needs some attention, too, you've got the mojo for that.";
        }
        if(day > 18 && day <= 28){
            sign = "Pisces";
            document.getElementById("image").innerHTML = "<img src=\"img/Pisces.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", you need to seriously pay attention to yourself. In fact, if necessary, you should turn off all communication devices and let your loved ones know that this day is all about solitude. That may just mean watching three of your favorite comedies in a row or spending the day with a good book in a coffee shop. You may even feel the need to get on a roller coaster and howl during the big drops. Whatever it is, make sure you do it soon!";
        }
    }
    if(month == 3){
        if(day <= 20){
            sign = "Pisces";
            document.getElementById("image").innerHTML = "<img src=\"img/Pisces.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", you need to seriously pay attention to yourself. In fact, if necessary, you should turn off all communication devices and let your loved ones know that this day is all about solitude. That may just mean watching three of your favorite comedies in a row or spending the day with a good book in a coffee shop. You may even feel the need to get on a roller coaster and howl during the big drops. Whatever it is, make sure you do it soon!";

        }
        if(day > 20 && day <= 30){
            sign = "Aries";
            document.getElementById("image").innerHTML = "<img src=\"img/Aries.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", You need to stick to the schedule for now, rather than turning your life upside-down on a whim. Today's energy favors routine, regularity and consistency above all else. Even if you find yourself wistfully glancing at travel brochures, remember that virtue really is its own reward. You've got plenty of time for thrills -- on your terms, that is -- once you make sure to take care of everything on your to-do list.";
        }
    }
    if(month == 4){
        if(day <= 19){
            sign = "Aries";
            document.getElementById("image").innerHTML = "<img src=\"img/Aries.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", You need to stick to the schedule for now, rather than turning your life upside-down on a whim. Today's energy favors routine, regularity and consistency above all else. Even if you find yourself wistfully glancing at travel brochures, remember that virtue really is its own reward. You've got plenty of time for thrills -- on your terms, that is -- once you make sure to take care of everything on your to-do list.";
        }
        if(day > 19 && day <= 30){
            sign = "Taurus";
            document.getElementById("image").innerHTML = "<img src=\"img/Taurus.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", You're feeling inspired and ready to change your life -- and maybe the rest of the world, while you're at it! Rather than worrying about bring it all together right away, make sure you take some time to mull it over. Let your mind roam free and explore all the possibilities, rather than trying to set boundaries and solidify plans right now. Try to write it all down as soon as possible!";
        }
    }
    if(month == 5){
        if(day <= 20){
            sign = "Taurus";
            document.getElementById("image").innerHTML = "<img src=\"img/Taurus.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", You're feeling inspired and ready to change your life -- and maybe the rest of the world, while you're at it! Rather than worrying about bring it all together right away, make sure you take some time to mull it over. Let your mind roam free and explore all the possibilities, rather than trying to set boundaries and solidify plans right now. Try to write it all down as soon as possible!";
        }
        if(day > 20 && day <= 31){
            sign = "Gemini";
            document.getElementById("image").innerHTML = "<img src=\"img/Gemini.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", Career issues might be moving too slowly for you right now. Your mental energy is trying to tell you that there's some heavy emotional mud to slog through relating to work and success. Now is certainly the time to address those old feelings before making any sudden moves. When you do make your move, you want to follow it through all the way to the end, so don't put any pressure on yourself to come to a decision quite yet.";
        }
    }
    if(month == 6){
        if(day <= 20){
            sign = "Gemini";
            document.getElementById("image").innerHTML = "<img src=\"img/Gemini.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", Career issues might be moving too slowly for you right now. Your mental energy is trying to tell you that there's some heavy emotional mud to slog through relating to work and success. Now is certainly the time to address those old feelings before making any sudden moves. When you do make your move, you want to follow it through all the way to the end, so don't put any pressure on yourself to come to a decision quite yet.";
        }
        if(day > 20 && day <= 29){
            sign = "Cancer";
            document.getElementById("image").innerHTML = "<img src=\"img/Cancer.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", if you can just tap into your incredible energy right now, you can move mountains (if that's what you really want, anyway -- moving your desk may be more practical). Direct your focus and willpower toward a project you've been dying to initiate, or maybe some other area of your life you've been wanting to change. Anything can happen when you've got that special spark, you're lighting up the room right now.";
        }
    }
    if(month == 7){
        if(day <= 22){
            sign = "Cancer";
            document.getElementById("image").innerHTML = "<img src=\"img/Cancer.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", if you can just tap into your incredible energy right now, you can move mountains (if that's what you really want, anyway -- moving your desk may be more practical). Direct your focus and willpower toward a project you've been dying to initiate, or maybe some other area of your life you've been wanting to change. Anything can happen when you've got that special spark, you're lighting up the room right now.";
        }
        if(day > 22 && day <= 31){
            sign = "Leo";
            document.getElementById("image").innerHTML = "<img src=\"img/Leo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", someone new looks just right, says all the right things, and sparks something that feels like a real connection -- but you need to look before you leap, especially if you want to dive into some deep emotional waters. If you're not careful, you could seriously hurt yourself, especially if this person turns out to be a bit shallower than you had thought. Reserve judgment and action until you know them better.";
        }
    }
    if(month == 8){
        if(day <= 22){
            sign = "Leo";
            document.getElementById("image").innerHTML = "<img src=\"img/Leo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", someone new looks just right, says all the right things, and sparks something that feels like a real connection -- but you need to look before you leap, especially if you want to dive into some deep emotional waters. If you're not careful, you could seriously hurt yourself, especially if this person turns out to be a bit shallower than you had thought. Reserve judgment and action until you know them better.";
        }
        if(day > 22 && day <= 31){
            sign = "Virgo";
            document.getElementById("image").innerHTML = "<img src=\"img/Virgo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", are you feeling a little disconnected or maybe even somewhat distant from loved ones? If you want to remedy that, take some time dedicated to social business so you can call those friends and family members who you've been promising to get to eventually. If you follow through with your all that, your social life should receive just the shot in the arm that it needs.";
        }
    }
    if(month == 9){
        if(day <= 22){
            sign = "Virgo";
            document.getElementById("image").innerHTML = "<img src=\"img/Virgo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", are you feeling a little disconnected or maybe even somewhat distant from loved ones? If you want to remedy that, take some time dedicated to social business so you can call those friends and family members who you've been promising to get to eventually. If you follow through with your all that, your social life should receive just the shot in the arm that it needs.";
        }
        if(day > 22 && day <= 30){
            sign = "Libra";
            document.getElementById("image").innerHTML = "<img src=\"img/Libra.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", a blossoming of goodwill may be (temporarily) turning everything in sight rainbow-colored, so be wary of making any important long-term decisions that could seriously impact your future. If someone is pressing you, just tell them that you need to wait until you're ready and that it might be a while. Wait until this influence passes, and then you should be able to view it all with a more detached perspective.";
        }
    }
    if(month == 10){
        if(day <= 22){
            sign = "Libra";
            document.getElementById("image").innerHTML = "<img src=\"img/Libra.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", a blossoming of goodwill may be (temporarily) turning everything in sight rainbow-colored, so be wary of making any important long-term decisions that could seriously impact your future. If someone is pressing you, just tell them that you need to wait until you're ready and that it might be a while. Wait until this influence passes, and then you should be able to view it all with a more detached perspective.";
        }
        if(day > 22 && day <= 31){
            sign = "Scorpio";
            document.getElementById("image").innerHTML = "<img src=\"img/Scorpio.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", if you want to achieve it, first you have to dream it. Let your imagination have free rein for the time being before you really get to work. Keep a dream journal, see an unusual art exhibit or take a long walk somewhere you've never been before. In essence, you need to try things that are beyond your usual scope of experience so you can stimulate your creativity. You need plenty of stimulation to keep your interest from flagging, so seek it out.";
        }
    }
    if(month == 11){
        if(day <= 21){
            sign = "Scorpio";
            document.getElementById("image").innerHTML = "<img src=\"img/Scorpio.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", if you want to achieve it, first you have to dream it. Let your imagination have free rein for the time being before you really get to work. Keep a dream journal, see an unusual art exhibit or take a long walk somewhere you've never been before. In essence, you need to try things that are beyond your usual scope of experience so you can stimulate your creativity. You need plenty of stimulation to keep your interest from flagging, so seek it out.";
        }
        if(day > 21 && day <= 30){
            sign = "Sagittarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Sagittarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", listen to someone close as they ruminate on their personal life -- it's shockingly far from boring! Furthermore, it can give you a lot of unexpected (but welcome) insight into your own life. You may also get motivated to make some changes for the better. Before you figure out how to put these new ideas into action, make sure you really heard and absorbed the wisdom at the heart of the lesson.";
        }
    }
    if(month == 12){
        if(day <= 21){
            sign = "Sagittarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Sagittarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", listen to someone close as they ruminate on their personal life -- it's shockingly far from boring! Furthermore, it can give you a lot of unexpected (but welcome) insight into your own life. You may also get motivated to make some changes for the better. Before you figure out how to put these new ideas into action, make sure you really heard and absorbed the wisdom at the heart of the lesson.";
        }
        if(day > 21 && day <= 31){
            sign = "Capricorn";
            document.getElementById("image").innerHTML = "<img src=\"img/Capricorn.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", your creative energy is all fired up and ready to go -- so make something awesome happen! It's time to bust out your artistic toolkit -- whatever it is that lets you noodle around and explore all kinds of ideas. You're sure to feel inspired -- in fact, you may have so much fun playing around that you look for ways to incorporate play into your regular, everyday life.";
        }
    }
    document.getElementById("sign").innerHTML = sign;
}


function bdayHoroscope(month, day){
    console.log(month);
    console.log(day);
    var sign = "";
    var name = document.getElementById("name").value;
    if(month == 1){
        if(day <= 19){
            sign = "Capricorn";
            document.getElementById("image").innerHTML = "<img src=\"img/Capricorn.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Tying up loose ends comes naturally to you, especially when it comes to financial and personal matters. Right now, you might have important issues popping up in both areas that need to be addressed. Is there a debt hanging over your head? If you can't pay it off right away, now is the time to figure out how to deal with it. If a relationship needs some attention, too, you've got the mojo for that.";

        }
        if(day > 19 && day <= 31){
            sign = "Aquarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Aquarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! You need to seriously pay attention to yourself. In fact, if necessary, you should turn off all communication devices and let your loved ones know that this day is all about solitude. That may just mean watching three of your favorite comedies in a row or spending the day with a good book in a coffee shop. You may even feel the need to get on a roller coaster and howl during the big drops. Whatever it is, make sure you do it soon!";
        }
    }
    if(month == 2){
        if(day <= 18){
            sign = "Aquarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Aquarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! You need to seriously pay attention to yourself. In fact, if necessary, you should turn off all communication devices and let your loved ones know that this day is all about solitude. That may just mean watching three of your favorite comedies in a row or spending the day with a good book in a coffee shop. You may even feel the need to get on a roller coaster and howl during the big drops. Whatever it is, make sure you do it soon!";
        }
        if(day > 18 && day <= 28){
            sign = "Pisces";
            document.getElementById("image").innerHTML = "<img src=\"img/Pisces.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! You need to stick to the schedule for now, rather than turning your life upside-down on a whim. Today's energy favors routine, regularity and consistency above all else. Even if you find yourself wistfully glancing at travel brochures, remember that virtue really is its own reward. You've got plenty of time for thrills -- on your terms, that is -- once you make sure to take care of everything on your to-do list.";
        }
    }
    if(month == 3){
        if(day <= 20){
            sign = "Pisces";
            document.getElementById("image").innerHTML = "<img src=\"img/Pisces.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! You need to stick to the schedule for now, rather than turning your life upside-down on a whim. Today's energy favors routine, regularity and consistency above all else. Even if you find yourself wistfully glancing at travel brochures, remember that virtue really is its own reward. You've got plenty of time for thrills -- on your terms, that is -- once you make sure to take care of everything on your to-do list.";
        }
        if(day > 20 && day <= 30){
            sign = "Aries";
            document.getElementById("image").innerHTML = "<img src=\"img/Aries.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! You're feeling inspired and ready to change your life -- and maybe the rest of the world, while you're at it! Rather than worrying about bring it all together right away, make sure you take some time to mull it over. Let your mind roam free and explore all the possibilities, rather than trying to set boundaries and solidify plans right now. Try to write it all down as soon as possible!";
        }
    }
    if(month == 4) {
        if (day <= 19) {
            sign = "Aries";
            document.getElementById("image").innerHTML = "<img src=\"img/Aries.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! You're feeling inspired and ready to change your life -- and maybe the rest of the world, while you're at it! Rather than worrying about bring it all together right away, make sure you take some time to mull it over. Let your mind roam free and explore all the possibilities, rather than trying to set boundaries and solidify plans right now. Try to write it all down as soon as possible!";
        }
        if (day > 19 && day <= 30) {
            sign = "Taurus";
            document.getElementById("image").innerHTML = "<img src=\"img/Taurus.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Career issues might be moving too slowly for you right now. Your mental energy is trying to tell you that there's some heavy emotional mud to slog through relating to work and success. Now is certainly the time to address those old feelings before making any sudden moves. When you do make your move, you want to follow it through all the way to the end, so don't put any pressure on yourself to come to a decision quite yet.";
        }
    }
    if(month == 5){
        if(day <= 20){
            sign = "Taurus";
            document.getElementById("image").innerHTML = "<img src=\"img/Taurus.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Career issues might be moving too slowly for you right now. Your mental energy is trying to tell you that there's some heavy emotional mud to slog through relating to work and success. Now is certainly the time to address those old feelings before making any sudden moves. When you do make your move, you want to follow it through all the way to the end, so don't put any pressure on yourself to come to a decision quite yet.";
        }
        if(day > 20 && day <= 31){
            sign = "Gemini";
            document.getElementById("image").innerHTML = "<img src=\"img/Gemini.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! If you can just tap into your incredible energy right now, you can move mountains (if that's what you really want, anyway -- moving your desk may be more practical). Direct your focus and willpower toward a project you've been dying to initiate, or maybe some other area of your life you've been wanting to change. Anything can happen when you've got that special spark, you're lighting up the room right now.";
        }
    }
    if(month == 6){
        if(day <= 20){
            sign = "Gemini";
            document.getElementById("image").innerHTML = "<img src=\"img/Gemini.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! If you can just tap into your incredible energy right now, you can move mountains (if that's what you really want, anyway -- moving your desk may be more practical). Direct your focus and willpower toward a project you've been dying to initiate, or maybe some other area of your life you've been wanting to change. Anything can happen when you've got that special spark, you're lighting up the room right now.";
        }
        if(day > 20 && day <= 29){
            sign = "Cancer";
            document.getElementById("image").innerHTML = "<img src=\"img/Cancer.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Someone new looks just right, says all the right things, and sparks something that feels like a real connection -- but you need to look before you leap, especially if you want to dive into some deep emotional waters. If you're not careful, you could seriously hurt yourself, especially if this person turns out to be a bit shallower than you had thought. Reserve judgment and action until you know them better.";
        }
    }
    if(month == 7){
        if(day <= 22){
            sign = "Cancer";
            document.getElementById("image").innerHTML = "<img src=\"img/Cancer.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Someone new looks just right, says all the right things, and sparks something that feels like a real connection -- but you need to look before you leap, especially if you want to dive into some deep emotional waters. If you're not careful, you could seriously hurt yourself, especially if this person turns out to be a bit shallower than you had thought. Reserve judgment and action until you know them better.";
        }
        if(day > 22 && day <= 31){
            sign = "Leo";
            document.getElementById("image").innerHTML = "<img src=\"img/Leo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Are you feeling a little disconnected or maybe even somewhat distant from loved ones? If you want to remedy that, take some time dedicated to social business so you can call those friends and family members who you've been promising to get to eventually. If you follow through with your all that, your social life should receive just the shot in the arm that it needs.";
        }
    }
    if(month == 8){
        if(day <= 22){
            sign = "Leo";
            document.getElementById("image").innerHTML = "<img src=\"img/Leo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Are you feeling a little disconnected or maybe even somewhat distant from loved ones? If you want to remedy that, take some time dedicated to social business so you can call those friends and family members who you've been promising to get to eventually. If you follow through with your all that, your social life should receive just the shot in the arm that it needs.";
        }
        if(day > 22 && day <= 31){
            sign = "Virgo";
            document.getElementById("image").innerHTML = "<img src=\"img/Virgo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! A blossoming of goodwill may be (temporarily) turning everything in sight rainbow-colored, so be wary of making any important long-term decisions that could seriously impact your future. If someone is pressing you, just tell them that you need to wait until you're ready and that it might be a while. Wait until this influence passes, and then you should be able to view it all with a more detached perspective.";
        }
    }
    if(month == 9){
        if(day <= 22){
            sign = "Virgo";
            document.getElementById("image").innerHTML = "<img src=\"img/Virgo.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! A blossoming of goodwill may be (temporarily) turning everything in sight rainbow-colored, so be wary of making any important long-term decisions that could seriously impact your future. If someone is pressing you, just tell them that you need to wait until you're ready and that it might be a while. Wait until this influence passes, and then you should be able to view it all with a more detached perspective.";
        }
        if(day > 22 && day <= 30){
            sign = "Libra";
            document.getElementById("image").innerHTML = "<img src=\"img/Libra.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! If you want to achieve it, first you have to dream it. Let your imagination have free rein for the time being before you really get to work. Keep a dream journal, see an unusual art exhibit or take a long walk somewhere you've never been before. In essence, you need to try things that are beyond your usual scope of experience so you can stimulate your creativity. You need plenty of stimulation to keep your interest from flagging, so seek it out.";
        }
    }
    if(month == 10){
        if(day <= 22){
            sign = "Libra";
            document.getElementById("image").innerHTML = "<img src=\"img/Libra.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! If you want to achieve it, first you have to dream it. Let your imagination have free rein for the time being before you really get to work. Keep a dream journal, see an unusual art exhibit or take a long walk somewhere you've never been before. In essence, you need to try things that are beyond your usual scope of experience so you can stimulate your creativity. You need plenty of stimulation to keep your interest from flagging, so seek it out.";
        }
        if(day > 22 && day <= 31){
            sign = "Scorpio";
            document.getElementById("image").innerHTML = "<img src=\"img/Scorpio.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Listen to someone close as they ruminate on their personal life -- it's shockingly far from boring! Furthermore, it can give you a lot of unexpected (but welcome) insight into your own life. You may also get motivated to make some changes for the better. Before you figure out how to put these new ideas into action, make sure you really heard and absorbed the wisdom at the heart of the lesson.";
        }
    }
    if(month == 11){
        if(day <= 21){
            sign = "Scorpio";
            document.getElementById("image").innerHTML = "<img src=\"img/Scorpio.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Listen to someone close as they ruminate on their personal life -- it's shockingly far from boring! Furthermore, it can give you a lot of unexpected (but welcome) insight into your own life. You may also get motivated to make some changes for the better. Before you figure out how to put these new ideas into action, make sure you really heard and absorbed the wisdom at the heart of the lesson.";
        }
        if(day > 21 && day <= 30){
            sign = "Sagittarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Sagittarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Your creative energy is all fired up and ready to go -- so make something awesome happen! It's time to bust out your artistic toolkit -- whatever it is that lets you noodle around and explore all kinds of ideas. You're sure to feel inspired -- in fact, you may have so much fun playing around that you look for ways to incorporate play into your regular, everyday life.";
        }
    }
    if(month == 12){
        if(day <= 21){
            sign = "Sagittarius";
            document.getElementById("image").innerHTML = "<img src=\"img/Sagittarius.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Your creative energy is all fired up and ready to go -- so make something awesome happen! It's time to bust out your artistic toolkit -- whatever it is that lets you noodle around and explore all kinds of ideas. You're sure to feel inspired -- in fact, you may have so much fun playing around that you look for ways to incorporate play into your regular, everyday life.";
        }
        if(day > 21 && day <= 31){
            sign = "Capricorn";
            document.getElementById("image").innerHTML = "<img src=\"img/Capricorn.jpg\"/>";
            document.getElementById("horoscope").innerHTML = name + ", happy birthday! Tying up loose ends comes naturally to you, especially when it comes to financial and personal matters. Right now, you might have important issues popping up in both areas that need to be addressed. Is there a debt hanging over your head? If you can't pay it off right away, now is the time to figure out how to deal with it. If a relationship needs some attention, too, you've got the mojo for that.";
        }
    }
    document.getElementById("sign").innerHTML = sign;

}


function findDays(month){
    var mDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var result = "";
    for(var i = 1; i <= mDays[month -1]; i++){
        result += "<option value'" + i + "'>" + i + "</option>";
    }
    document.getElementById("selectDay").innerHTML = result;

}


function isBirthday(month, day) {
    var date = new Date();
    var todayDay = date.getDate();
    var todayMonth = date.getMonth() + 1;
    if (day == todayDay.toString() && month == todayMonth.toString()) {
        return true;
    } else {
        return false;
    }
}