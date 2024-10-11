<!--  -->
<!--  -->

REFERENCES -

<!--  -->
<!--  -->
<!-- SECTION 1 - CODE REFERENCES -->

[1.a] Chat GPt (In index.js, index.html, base.css)

      Question asked: How to add rotating text to a text in my website where there is “Hi” written and I want it to write in rotations continuously with a pause of roughly 3 seconds, The rotation text is - Hi. Hola. Bonjour. Namaste.
      My design structure is HTML, CSS, Js, I want to learn how to do this using <div> tag in HTML, styling in CSS, and rotational function working from Js.
      Answer:
      To create a rotating text effect in your website where the text alternates between "Hi," "Hola," "Bonjour," and "Namaste" with a pause of roughly 3 seconds, you can follow these steps using HTML, CSS, and JavaScript.

      Step 1: HTML Structure
      First, create a simple HTML structure using a <div> to hold your rotating text.

      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Rotating Text</title>
          <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <div class="rotating-text" id="rotatingText">Hi</div>

          <script src="script.js"></script>
      </body>
      </html>

      Step 2: CSS Styling
      Next, add some basic styling to make your text look nice. You can customize this as needed.
      /_ styles.css _/
      body {
      display: flex;
      justify-content: center;
      align-items: center;
      Height: /_ Full viewport height _/
      background-color: /_ Design background _/
      font-family: Arial, sans-serif; /_ Font family _/
      }

      .rotating-text {
      Font-size: /_ Text size _/
      color: /_ Text color _/
      transition: opacity 0.5s ease; /_ Transition for fading effect according to design _/
      }

      Step 3: JavaScript for Rotation
      Now, create the JavaScript function that will handle the rotation of the text.
      // script.js
      const texts = ["Hi", "Hola", "Bonjour", "Namaste"];
      let index = 0;
      const rotatingText = document.getElementById("rotatingText");

      function rotateText() {
      rotatingText.style.opacity = 0; // Fade out
      setTimeout(() => {
      rotatingText.textContent = texts[index]; // Change text
      rotatingText.style.opacity = 1; // Fade in
      index = (index + 1) % texts.length; // Update index
      }, 500); // Match this with the transition time in CSS
      }

      // Rotate text every 3 seconds
      setInterval(rotateText, 3000);

[1.b] Navbar Flower element (index.html, base.css)

      Question asked: \*\*\*Screenshot added, I need to make this interactive and rotate flowers teach me how to do this using CSS not js. These flowers are in my navbar and I will place them accordingly.
      Answer:

      CSS for Rotating Navigation Items on Hover:

      /* Nav Styles */
      nav ul li {
          display: inline-block;
          margin-right: 30px;
      }

      nav ul li:last-child {
          margin-right: 0;
      }

      nav ul li a {
          text-decoration: none;
          color: #fff;
          font-size: 18px;
          font-family: 'Arial', sans-serif;
          padding: 10px 20px;
          transition: transform 1s ease; /* Transition for rotation */
          display: inline-block; /* Required for rotation to work smoothly */
      }

      /* Rotate on hover */
      nav ul li a:hover {
          transform: rotate(360deg); /* Rotate 360 degrees */
      }

      Continuous Rotation with CSS Keyframes:

      /* Add keyframes for rotation */
      @keyframes rotate360 {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(360deg);
          }
      }

      /* Continuous rotation on hover */
      nav ul li a:hover {
          animation: rotate360 3s linear infinite; /* Rotate continuously every 3 seconds */
      }

[1.c] File and folder structuring (All folders in Annotated Process Portfolio)

      DECO 7140 - Introduction to Web Design
      For HTML, CSS -
      Studio Guides - Week 2, 3, 4

      For Java Script -
      Studio Guides - Week 7,8,9,10

[1.d] Chat GPt (In all js files)

      Question: Explain how to create an active state of Navigation bar while using java script. I have a navigation bar which has class nav-links and I want to add a property where my link (a) is active. This is my CSS code for your reference.

      nav ul li a.active {
      color: rgba(137, 112, 137, 1);
      border-bottom: 2px solid rgba(137, 112, 137, 1);
      }

      nav ul li a {
      font-family: "MuseoModerno", Arial, sans-serif;
      text-decoration: none;
      color: #f5f2ed;
      font-size: 18px;
      padding: 10px 15px;
      transition: border-bottom 0.3s ease, color 0.3s ease;
      }

      nav ul li a:hover {
      color: rgba(137, 112, 137, 1);
      }
      Answer:
      JavaScript:

      <script>
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-links a');

        // Loop through each link and check if the URL matches the current page URL
        navLinks.forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add('active'); // Add 'active' class to the current page link
          }
        });
      </script>

      Explanation:
      CSS .active Class: This style will be applied to the currently active link, giving it a different color and a bottom border to make it visually distinct.
      JavaScript for Active Link Detection: The script compares the URL of each navigation link (link.href) with the current page’s URL (window.location.href). When a match is found, it adds the active class to that link, highlighting it.
      Transition Effect: The transition in the CSS provides a smooth visual effect when hovering or applying the active state.

[1.e] Youtube link - for creating scrollable image section

       - https://www.youtube.com/watch?v=PsNaoDhzQm0
         Used this video to learn and create the scrollable images in the journey container section.

<!--  -->
<!--  -->
<!-- SECTION 2 - PORTFOLIO CONTENT -->

[2.a] Figma Prototype Link -
Please note : The image references for this are in the figma file.

[2.b] Figma Prototype Link -
Please note : The image references for this are in the figma file.

[2.c] Figma Prototype Link -
Please note : The image references for this are in the figma file.

<!--  -->
<!--  -->
<!-- SECTION 3 - DESIGN REFERENCES -->

[3.a] Figma Prototype Link -

      Please note : The image references for this are in the figma file.

      https://www.figma.com/design/TWm0pge6egyRjymNjzy3Sd/Individual-Portfolio---DECO7180---Design-Computing-Studio---I-(OCT2024)?node-id=0-1&t=jOOke39OK4wNHsOV-1

[3.b] Icons in the website

[3.c] Image source link

[3.d] Inspiration to iterate over design ideas like color palettes, fonts, etc

[3.e] Fonts used in code are downloaded from Google fonts (Used in this file)
https://fonts.google.com/specimen/MuseoModerno
