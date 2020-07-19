let name = prompt('Name');
name = name.charAt(0).toUpperCase() + name.slice(1);
const linkedIn = prompt('LinkedIn Profile');

document.title = "Home · " + name;
document.querySelector('body > div > div > p').innerText = name + " and friends are currently working hard building this page!";
document.querySelector('body > div > div > a').href = linkedIn;

document.documentElement.innerHTML.toString();