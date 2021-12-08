const navigation = document.querySelector('nav');
window.addEventListener('scroll', () => {
    
    if(window.scrollY > 100){
        navigation.classList.add('anim-nav');
    }  else {
        navigation.classList.remove('anim-nav');
    }
    
} )

const txtAnim = document.querySelector('h1')

new Typewriter(txtAnim, {
    //  loop: true,
     deleteSpeed: 20
})
.changeDelay(20)
.typeString('Hey i\'m Irfane_092')
.pauseFor(300)
.typeString('<strong>,...........</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #d60000;"> HTML</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #ea39ff;"> PhP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #fbff00;"> JavaScript</span> !')

.start()