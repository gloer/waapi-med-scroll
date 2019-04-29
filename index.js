const skip = document.querySelector("#skip");

const skipKeyframes = [
    {left: "100px", top: "10px", transform: "rotate(0deg)"},
    {left: "400px", top: "300px", transform: "rotate(180deg)"},
    {left: "800px", top: "20px", transform: "rotate(0deg)"}
];

const skipSettings = {
    duration: 8000
}

const skipsAnimasjon = skip.animate(skipKeyframes, skipSettings);
skipsAnimasjon.pause();

function spillAnimasjon() {
    const y = scrollY;

    // Ganger med 3 for å få litt fart på animasjonen
    skipsAnimasjon.currentTime = y * 3;

}

document.addEventListener("scroll", spillAnimasjon);

