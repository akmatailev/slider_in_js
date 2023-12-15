let imgs = document.getElementById("mainImg");
let i = 0;
let imges = [
  "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*",
  "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
  "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
];
  
let img = document.getElementsByClassName("img");

const b = (index) => {
  for (let i = 0; i < img.length; i++) {
    img[i].style.border = index === i ? "5px solid red" : null;
  }
};

const next = () => {
  imgs.src = imges[i];
  b(i); 
  if (i === 0) {
    i = 3;
  } else {
    i--;
  }
};
const prev = () => {
  imgs.src = imges[i];
  b(i);
  if (i === 3) {
    i = 0;  
  } else {
    i++;
  }
};

const imgClick = (index) => {
  imgs.src = imges[index];
  b(index);
};
