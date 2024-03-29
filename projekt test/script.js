document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const article = document.querySelector('article');
    const aside = document.querySelector('aside');
  
    toggleButton.addEventListener('click', function () {
      const asideWidth = 250; // Szerokość aside w pikselach
     // aside.style.display='block';
     // aside.style.transition='margin-right 1s ease-in-out';
      
      if (article.style.marginRight === `${asideWidth}px`) {
        // Jeśli aside jest już wysunięte, schowaj je
        article.style.marginRight = '0';
        article.style.transition='margin-right 1s ease-in-out';
        aside.style.marginRight = `-${asideWidth}px`;
      //  aside.style.display='none';
        // var chowanie=document.getElementById('article');
        // chowanie.addEventListener('animationed',function(){
        //   console.log('animacja zakończona');
        //   aside.style.display='none';
        // });
        
      } else {
        // Jeśli aside jest schowane, wysuń je
        article.style.marginRight = `${asideWidth}px`;
        aside.style.marginRight = '0';
        // aside.style.display='block';
        aside.style.transition='margin-right 1s ease-in-out';
        // var wysuwanie=document.getElementById('aside');
        // toggleButton.addEventListener('click',function(){
        //   aside.style.display='block';
        //   aside.style.transition='margin-right 1s ease-in-out';
        // });
      }
    });
  });
  // trzeba dodać addEventListener żeby wykrywał koniec 
  // animacji i tam display none przy schowanym a przy wysuniętym block
  