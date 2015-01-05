/**
Generate a random number between max and min.
*/
function rnd_number(max, min) {
    return  Math.floor(Math.random() * (max - min)) + min;
}

