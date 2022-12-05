const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.log(event.target.children[1].value);

    // fetch(`http://localhost:3000/movies/${event.target.children[1].value}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    const input = document.querySelector("input#searchByID");
    // console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        console.log("error5");
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");
        title.innerText = data.title;
        summary.innerText = data.summary;
      })
      .catch((err) => {
        console.log("error");
        const title = document.querySelector("section#movieDetails h4");
        title.innerText = "Movie does not exist!";
        console.log(title.innerText);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
