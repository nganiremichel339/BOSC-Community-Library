 const resources = [
 "JavaScript",
 "Python",
 "GitHub"
];

function searchResource(term) {
 return resources.filter(r =>
 r.toLowerCase().includes(term.toLowerCase())
 );
}

console.log(searchResource("python"));