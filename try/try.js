
// back to top button

let mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};
            
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
            
function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
} 

//dark-mode  button

function dark() {
    var menu = document.getElementById("darkMode");

    menu.classList.toggle("active");
    document.body.classList.toggle ("dark");
}


//drop down menu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

// Array of projects with their images and captions

// Get the modal
var modal = document.getElementById("myModal");

// Get the modal image and caption text elements
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// Function to open the modal
function openModal(index) {
    var images = [
        {
            src: "projects/eyes-open/eyes-open-sign.jpg",
            caption: "Made in a continuing education course at School of Visual Arts."
        },

        {
            src: "projects/eyes-open/eyes-open-landing-page.png",
            caption: "Landing page made with Wix. Made in a continuing education course at School of Visual Arts."
        },

        {
            src: "projects/package-design/deco-honey.jpg",
            caption: "Made in a continuing education course at School of Visual Arts."
        },

        {
            src: "projects/WPNA/WPNA.jpg",
            caption: "I participated in an accessible web design competition called 'AIR' (short for Accessibility Internet Rally), where I worked with a team of 5 developers to rebuild 10 pages of the website belonging to a neighborhood association in Austin, Texas called Windsor Park. I helped guide the visual design of the website and provided both branding and logo design services as an additional perk that wasn't required for the competition.<br><br> I redesigned the WPNA logo, staying true to the clients' desire to maintain certain elements of their original logo (namely the original tree illustration that they have used since the 80s) while incorporating elements from a new sign in the neighborhood. I offered several variations of the logo- as the client expressed the need for different logos that could be used in different contexts.<br><br> I also created a style guide for Windsor Park, which includes accessibility tips that they can refer to when maintaining their website/brand."
        },

        {
            src: "projects/package-design/bread-factory.png",
            caption: "Made in a continuing education course at School of Visual Arts."
        },

        {
            src: "projects/websites/one-thousand-words-square.png",
            caption: "'1,000 words', a website about alt text and image description, was my senior thesis project for the BFA Graphic Design program at Virginia Commonwealth University. <br><br> The website contains educational content, such as an “Introduction to alt text” section that defines both alt text and image description, and shows examples of what these might look like. In addition to this is an interactive section of the website where one can practice writing alt text and image descriptions on a few select images I chose.<br><br> I also included an asynchronous workshop that one can participate in alone or with others, providing hands-on experience writing alt text and image descriptions while making mini zines with photos found in magazines.<br><br> Website was coded using HTML, CSS and Javascript."
        },

        {
            src: "projects/johnsons-spec-ad/Johnsons.png",
            caption: "Collaborated with copywriter Charlotte Boland to design a speculative email for Johnson's Baby Conditioner."
        },

        {
            src: "projects/websites/plants-square.png",
            caption: "This website was created as a final project for a web design class at Virginia Commonwealth University called 'Handmade Web'. In the website, I showcase my photography while documenting plants that I encountered during my daily life over the span of a few months. <br><br> I've tried to identify which plants are native to the area they were found in or considered invasive of particular concern by local conservation groups. I also added a feature where others can help me identify. <br><br> Website was coded using HTML, CSS and Javascript."
        },

        {
            src: "projects/package-design/texas-pete.jpg",
            caption: "Made in a continuing education course at School of Visual Arts."
        },

        {
            src: "projects/websites/structure-square.png",
            caption: "This was made for a web-design class at Virginia Commonwealth University, where I learned HTML, CSS and a little bit of Javascript. <br><br> Our assignment was to create a website that referenced a structure in some way. I chose to reference a piano/keyboard. I wanted the viewer to be able to 'play the piano' by clicking the keys. But instead of 'piano sounds' coming out of each key, a song would play instead.<br><br>Accessibility is really important to me and I wanted to make my website perceivable to viewers who are deaf or hard of hearing, which is why I included the lyrics and sound descriptions. I decided to approach the sound descriptions as if I were describing the songs to a friend."
        },

        {
            src: "projects/book-covers/alice-in-wonderland.jpg",
            caption: "Made in a continuing education course at School of Visual Arts."
        },

        {
            src: "projects/word-search/wordsearch-square.jpg",
            caption: "I created this 5 ft. by 5 ft. word search for a class project at VCU. We were told to 'recycle' a text of around 1500 words and to try and push the boundaries of what it means to publish something. The word list is part of an episode of the show 'Grey's Anatomy'."
        },

    ];

    modal.style.display = "block";
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].caption;
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Function to change slides (if you're implementing navigation)
function changeSlide(n) {
    var currentSrc = modalImg.src;
    var images = [
        "projects/eyes-open/eyes-open-sign.jpg",
        "projects/eyes-open/eyes-open-landing-page.png"
        // Add more image sources as needed
    ];

    var index = images.indexOf(currentSrc);
    var newIndex = index + n;

    if (newIndex >= 0 && newIndex < images.length) {
        modalImg.src = images[newIndex];
        captionText.innerHTML = images[newIndex];
    }
}
