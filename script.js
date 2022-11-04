fetch("https://whatyearisit-backend-nine.vercel.app")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("#year").textContent = `${data}`;
  });
