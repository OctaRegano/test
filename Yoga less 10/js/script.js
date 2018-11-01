window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }



    //Timer

    let deadLine = '2018-11-03';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            
            };
           
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (hours.textContent.length < 2) {
                hours.textContent = '0' + t.hours;
            }
            if (minutes.textContent.length < 2) {
                 minutes.textContent = '0' + t.minutes;
            }
            if (seconds.textContent.length < 2) {
                 seconds.textContent = '0' + t.seconds;
            }            

            if(t.total <= 0) {
                clearInterval(timeInterval);
                document.querySelector('.hours').textContent = '00';
                document.querySelector('.minutes').textContent = '00';
                document.querySelector('.seconds').textContent = '00';
            }
        }
    }  
    
    setClock('timer', deadLine);


    // Modal

    let overlay = document.querySelector('.overlay');
        

    
    document.body.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('description-btn') || target.classList.contains('more')) {
             overlay.style.display = 'block';
             document.body.style.overflow = 'hidden';
        }
        if (target.classList.contains('popup-close')) {
             overlay.style.display = 'none';
             document.body.style.overflow = '';
        }
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
      
    
});