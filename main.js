/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("rect_prism").addEventListener("click", rect_prism_volume);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let decimals = Number(document.getElementById("rounding").value)
    let user_number = Math.round(value * 10**decimals) / 10**decimals
    return user_number

}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

// Part 1 Task
function delta(a, b) {
    return (a - b);
}

function slope(x1, y1, x2, y2) {
    let m = delta(y2 , y1) / delta(x2 , x1)
    return m;
}

function average(n1, n2) {
    return (n1 + n2) / 2;
}

function length(x1, y1, x2, y2) {
    let l = Math.sqrt(delta(x2 , x1)**2 + delta(y2 , y1)**2)
    return l;
}

function rect_prism_volume() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let answer = Number(round_user(length * width * height))
    document.getElementById("result").textContent = `The volume of the rectangular prism is: ${answer}`
}

