//Partie HTML

/*
<!-- wrap the pictures in anchor link elements to make them click-able & focus-able -->
<main>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A dog gazing at the sky and at a promising future. Or a nearby squirrel." />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A bulldog with a lot of moxie" />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A daring dog carrying a flower between its romantic fangs" />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A cuddly young pup with a sassy red collar" />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="An extremely active dog jumping between the ocean's waves" />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Two dogs cheerfully hopping along a beaten path. At least one of them is." />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A dog diligently sitting and waiting for someone special, with a welcoming flower" />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A carefree dog licking its nose in a rather blurry picture" />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A smart, glass-wearing dog resting on an open book" />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Two curious dogs looking above with great expectations" />
  </a>
</main>

<!-- display an arbitrary picture in a div container
the idea is to show the the container as a modal, on top of the existing content

  -->
<div>
  <button aria-label="Close overlay">
    <svg viewBox="-50 -50 100 100" width="40" height="40">
      <g fill="none" stroke="currentColor" stroke-width="20" stroke-linecap="round">
        <path transform="rotate(45)" d="M -40 0 h 80 m -40 -40 v 80" />
      </g>
    </svg>
  </button>
  <!-- be sure to update the src & alt attributes as an image is selected -->
  <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A dog gazing at the sky and at a promising future. Or a nearby squirrel." />
</div>
//END PARTIE HTML
*/



//Partie CSS
/*
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
/* center the grid in the viewport */
body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: hsl(0, 0%, 100%);
  background: hsl(210, 5%, 7%);
}

main {
  max-width: 800px;
  width: 90vw;
  /* display the anchor links in a grid */
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-auto-rows: 150px;
  /* center the content horizontally & vertically */
  justify-content: center;
  align-content: center;
  grid-auto-flow: dense;
}
/* remove overflow to give the impression of a zoom when scaling the image up */
main a {
  overflow: hidden;
}
/* update the size of a few selected cells */
main a:nth-of-type(2) {
  grid-column: span 2;
}
main a:nth-of-type(5) {
  grid-column: span 2;
  grid-row: span 2;
}
main a:nth-of-type(7) {
  grid-row: span 2;
}
/* the default overflow is substituted by the scale/brightness of the nested images */
main a:focus {
  outline: none;
}
main img {
  object-fit: cover;
  display: block;
  width: 100%;
  height: 100%;
  /* transition the scale and brightness of the image when hover/focus-ing on the anchor link */
  filter: brightness(0.6);
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transform: scale(1);
}
main a:focus img,
main a:hover img {
  transform: scale(1.1);
  filter: brightness(1);
}

/* stretch the overlay to cover the available viewport */
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* center te image horizontally & vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 0%, 0.6);
  backdrop-filter: blur(5px);
  /* transition the opacity and visibility when the class of .overlay is added on the div container */
  transition: all 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
}
/* slight delay as the class is added and the overlay is meant to be shown */
div.overlay {
  transition-delay: 0.2s;
  opacity: 1;
  visibility: visible;
}
/* size the image according to both the width and height of the viewport */
div img {
  height: 90vh;
  width: 85vw;
  max-width: 700px;
  object-fit: contain;
}
/* absolute position the button in the top right corner of the overlay */
div button {
  color: inherit;
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background: none;
  border: none;
  padding: 0.25rem;
  outline-color: currentColor;
  /* transition the opacity on hover/focus */
  opacity: 0.5;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
div button:hover,
div button:focus {
  opacity: 1;
}
div button svg {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}

//END PARTIE CSS
*/


//PARTIE JS
// target the anchor links and div container
const links = document.querySelectorAll('a');
const overlay = document.querySelector('div');

// following a click event on the links show the overlay
function showOverlay() {
  // use the src & alt attribute of the selected image in the overlay
  const src = this.querySelector('img').getAttribute('src');
  const alt = this.querySelector('img').getAttribute('alt');
  overlay.querySelector('img').setAttribute('src', src);
  overlay.querySelector('img').setAttribute('alt', alt);

  overlay.classList.add('overlay');

  // to remove the anchor links from reach set the tabindex attribute to a negative value
  links.forEach(link => link.setAttribute('tabindex', -1));
}

links.forEach(link => link.addEventListener('click', showOverlay));

// following a click event on the overlay, consider if the click was registered on the button
// if so hide the overlay back
function hideOverlay(e) {
  if (e.target.tagName === 'BUTTON') {
    overlay.classList.remove('overlay');
    // restore the default value of the anchor links
    links.forEach(link => link.setAttribute('tabindex', 0));
  }
}

overlay.addEventListener('click', hideOverlay);
