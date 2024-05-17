#!/usr/bin/env node

function add_numbers(a,b){
	sum = a + b;
	return sum;
}

function power(a,b){
	pow = a ** b
	return pow
}

function modulo(a,b){
	mod = a % b
	return mod
}
console.log(add_numbers(3,5))
console.log(power(3,5))
console.log(modulo(3,5))