export const ChangeColor = () => {
  let r = document.getElementById("firstI").value;
  let g = document.getElementById("secI").value;
  let b = document.getElementById("thirdI").value;
  return `rgb(${r},${g},${b}`;
};

export const RandColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
};

export const myArr = [
  {
    country: "",
  },
  {
    country: "Israel",
  },
  {
    country: "USA",
  },
  {
    country: "Spain",
  },
  {
    country: "France",
  },
  {
    country: "Germany",
  },
  {
    country: "United Kingdom",
  },
];
