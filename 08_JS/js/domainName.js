// ### Задача
// Напишите функцию, которая при задании URL-адреса в виде строки анализирует только доменное имя и возвращает его в виде строки.

// https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/63a30f329319b4000133cea6

function domainName(url) {
  return url.replace(/.+\/\/|www\./g, "").replace(/\..*/, "");
}

console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("https://youtube.com")); // "youtube"
console.log(domainName("http://github.com/carbonfive/raygun")); // "github"
console.log(domainName("http://www.zombie-bites.com")); // "zombie-bites"
console.log(domainName("https://www.cnet.com")); // "cnet"
