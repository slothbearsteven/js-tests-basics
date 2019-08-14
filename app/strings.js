// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
  let letter = str.substr(position, 1)
  return letter
}

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
  final = str1.concat(seperator, str2)
  return final
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  let text1 = str.substr(position, 1)
  let text2 = text1.toUpperCase()
  return text2
}