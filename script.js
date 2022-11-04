fetch("https://whatyearisit-backend-obc7.vercel.app/year")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#p").textContent = `${data.year}`;
  });
