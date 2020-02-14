const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685130/coffee/coffee1_iwyor2.jpg"
  },
  {
    name: "Voluptatem",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685126/coffee/coffee2_llsfu2.jpg"
  },
  {
    name: "Explicabo",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685123/coffee/coffee3_wrwdgg.jpg"
  },
  {
    name: "Rchitecto",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685120/coffee/coffee4_qsj1c1.jpg"
  },
  {
    name: " Beatae",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685120/coffee/coffee5_b5mjfa.jpg"
  },
  {
    name: " Vitae",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685134/coffee/coffee6_ra9qr5.jpg"
  },
  {
    name: "Inventore",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685132/coffee/coffee7_mknf0i.jpg"
  },
  {
    name: "Veritatis",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685120/coffee/coffee8_s2jhsv.jpg"
  },
  {
    name: "Accusantium",
    image: "https://res.cloudinary.com/jidecloudy/image/upload/v1581685123/coffee/coffee9_gy999u.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
