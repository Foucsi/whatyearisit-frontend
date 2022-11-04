fetch("https://backend-whatyearisit.vercel.app/year")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("#year").textContent = `${data.year}`;
  });
