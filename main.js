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
document.getElementById("rect_area").addEventListener("click" , rect_prism_area);
document.getElementById("sphere_vol").addEventListener("click" , sphere_volume);
document.getElementById("sphere_area").addEventListener("click" , sphere_area);
document.getElementById("slope").addEventListener("click" , slope);
document.getElementById("line_l").addEventListener("click" , line_length);
document.getElementById("mid_p").addEventListener("click" , midpoint);

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
let y = Number(a * x**2 + b * x + c)
return y;
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x_1 = round_user(((-b) +(Math.sqrt((b ** 2) - (4 * a * c))))/ (2 * a));
    let x_2 = round_user(((-b) -(Math.sqrt((b ** 2) - (4 * a * c))))/ (2 * a));
    document.getElementById("quadratic_output").textContent = `The zeros are: (${x_1}, 0) and (${x_2}, 0)`;
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x = Number(round_user((-b) / (2*a)));
    let ver = y_quad(a, b, c, x);
    document.getElementById("quadratic_output").textContent = `The vertex is: (${x}, ${ver})`;
}

// Part 1 Task
function delta(a, b) {
    return (a - b);
}

function slope(x1, y1, x2, y2) {
    let m = delta(y2 , y1) / delta(x2 , x1)
    document.getElementById("line_result").textContent = `The slope is: ${m}`
}

function average(n1, n2) {
    return (n1 + n2) / 2;
}

function line_length(x1, y1, x2, y2) {
    let l = Math.sqrt(delta(x2 , x1)**2 + delta(y2 , y1)**2)
    document.getElementById("line_result").textContent = `The length of the line is: ${l}`
}

function rect_prism_volume() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let answer = Number(round_user(length * width * height))
    document.getElementById("result").textContent = `The volume of the rectangular prism is: ${answer}`
}

function rect_prism_area() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let area = Number(round_user(2 * (width * length + height * length + height * width)))
    document.getElementById("result").textContent = `The surface area of the rectangular prism is: ${area}`
}

function sphere_volume() {
    let radius = document.getElementById("radius").value;
    let sphereV = Number(round_user(4/3 * Math.PI * radius**3))
    document.getElementById("result").textContent = `The volume of the sphere is: ${sphereV}`
}

function sphere_area() {
    let radius = document.getElementById("radius").value;
    let sphereA = Number(round_user(4 * Math.PI * radius**2))
    document.getElementById("result").textContent = `The surface area of the sphere is: ${sphereA}`
}

function midpoint() {
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y1 = Number(document.getElementById("y1").value);
    let y2 = Number(document.getElementById("y2").value);
    let midP_x = Number(round_user(average(x1 , x2)));
    let midP_y = Number(round_user(average(y1 , y2)));
    document.getElementById("line_result").textContent = `The midpoint is: (${midP_x}, ${midP_y})`
}

