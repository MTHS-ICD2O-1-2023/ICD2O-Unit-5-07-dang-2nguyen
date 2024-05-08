// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: May 2024
// This file contains the JS functions for index.html

function checking() {
  let sumOfNumbers = 0
  const number = parseInt(document.getElementById("number").value)

  for (let counter = 1; counter <= number; counter++) {
   sumOfNumbers = sumOfNumbers + counter
  }
  document.getElementById("result").innerHTML = sumOfNumbers
}