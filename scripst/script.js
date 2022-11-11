const header = document.querySelector("header");
const main = document.querySelector("main");
const burger = document.querySelector(".burger_wrapper");
const navigation = document.querySelector(".navigation");
const navList = navigation.children;
const sections = document.querySelectorAll("section");


//part of the menueMarksAndScroll() function
let sectionsPos = null;

//part of the menueMarksAndScroll() function
function getSectionsPos() {
   let sectionsPos = [];
   for(let i = 0; i < sections.length; i++) {
      sectionsPos.push(sections[i].getBoundingClientRect().top)
   };

   return sectionsPos;
};

//to change active menu buttons as a user will be scroll a page
const menueMarksAndScroll = () => {
   if(window.pageYOffset >= sectionsPos[5] - header.clientHeight) {
      for(let navItem of navList) {
         if(navItem.classList.contains("active")) {
            navItem.classList.remove("active");
         };
      };
      navList[5].classList.add("active");
      return;
   }
   if(window.pageYOffset >= sectionsPos[4] - header.clientHeight) {
      for(let navItem of navList) {
         if(navItem.classList.contains("active")) {
            navItem.classList.remove("active");
         };
      };
      navList[4].classList.add("active");
      return
   }
   if(window.pageYOffset >= sectionsPos[3] - header.clientHeight) {
      for(let navItem of navList) {
         if(navItem.classList.contains("active")) {
            navItem.classList.remove("active");
         };
      };
      navList[3].classList.add("active");
      return
   }
   if(window.pageYOffset >= sectionsPos[2] - header.clientHeight) {
      for(let navItem of navList) {
         if(navItem.classList.contains("active")) {
            navItem.classList.remove("active");
         };
      };
      navList[2].classList.add("active");
      return
   }
   if(window.pageYOffset >= sectionsPos[1] - header.clientHeight) {
      for(let navItem of navList) {
         if(navItem.classList.contains("active")) {
            navItem.classList.remove("active");
         };
      };
      navList[1].classList.add("active");
      return
   }
   if(window.pageYOffset >= sectionsPos[0] - header.clientHeight) {
      for(let navItem of navList) {
         if(navItem.classList.contains("active")) {
            navItem.classList.remove("active");
         };
      };
      navList[0].classList.add("active");
      return
   }
}

//open and close burger menu
const menuMotion = () => {
   if(burger.classList.contains("open")) {
      burger.classList.remove("open");
      navigation.classList.remove("open");
   } else {
      navigation.classList.add("open");
      burger.classList.add("open");
   }
}
 
//when a user will click on menu buttons
const activateMenu = (event) => {
   let matchIndex = null;
   let count = 0;
   for( let el of navList) {
      if(el.classList.contains("active")){
         el.classList.remove("active");
      };

      if(el === event.target) {
         el.classList.add("active");
         matchIndex = count;
      }
      
      window.scrollTo(0, sectionsPos[matchIndex] - header.clientHeight / 2);
      count++
   }

   navigation.classList.remove("open");
   burger.classList.remove("open");
}

//change color of header when the scroll will be start
const scrolledHeader = () => {
   if(window.pageYOffset > 1 && header.classList.contains("scrolled")) {
      return;
   } else {
      header.classList.add("scrolled");
   }

   if (window.pageYOffset === 0) {
      header.classList.remove("scrolled");
   }
}

//moving an html elements in the article section
const showArticles = () => {
   if(window.pageYOffset >= sections[1].getBoundingClientRect().top - 300) {
      const articles = document.querySelectorAll(".articles_item");
      articles.forEach(element => {
         element.classList.add("onscroll");
      });
   } else if(window.pageYOffset < sections[1].getBoundingClientRect().top - 300 && !sections[1].classList.contains("onscroll")) {
      const articles = document.querySelectorAll(".articles_item");
      articles.forEach(element => {
         element.classList.remove("onscroll");
      });
   }
}

burger.addEventListener("click", menuMotion);

sectionsPos = getSectionsPos();
navigation.addEventListener("click", (e) => {
   activateMenu(e);
});

window.addEventListener('scroll', () => {
   scrolledHeader();
   showArticles();
   menueMarksAndScroll();
});