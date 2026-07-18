// server.js
// Day 14 HTTP server satisfying Parts C and E (Q1, Q2, Q4)

const http = require('http');

const PORT = 3000;

// Datasets
const students = [
  { id: "201", name: "Rupa Reddy Kunam", email: "rupa.reddy.kunam@gmail.com", course: "Computer Science", gpa: 8.9 },
  { id: "202", name: "Ananya Rao", email: "ananya.rao@gmail.com", course: "Information Tech", gpa: 9.2 },
  { id: "203", name: "Vijay Kumar", email: "vijay.kumar@gmail.com", course: "Electrical Eng", gpa: 8.5 }
];

const books = [
  { id: "101", title: "Introduction to Node.js", author: "Ryan Dahl", pages: 320 },
  { id: "102", title: "JavaScript: The Good Parts", author: "Douglas Crockford", pages: 176 },
  { id: "103", title: "Eloquent JavaScript", author: "Marijn Haverbeke", pages: 472 }
];

const courses = [
  { id: "CS-101", name: "Backend Web Architectures", credits: 4 },
  { id: "IT-204", name: "Mobile App Development", credits: 3 },
  { id: "EE-110", name: "Circuit Design & Analysis", credits: 4 }
];

const server = http.createServer((req, res) => {
  // Set JSON headers by default (Part C Q3)
  res.setHeader('Content-Type', 'application/json');

  const url = req.url;

  // 1. Root route returning welcome message (Part C Q1 & Q2)
  if (url === '/' || url === '') {
    res.statusCode = 200;
    return res.end(JSON.stringify({
      message: "Hello from Rupa's Node.js HTTP Server!",
      status: "Online",
      endpoints: [
        "/",
        "/about",
        "/contact",
        "/api/students",
        "/api/students/:id",
        "/api/books",
        "/api/books/:id",
        "/api/courses"
      ]
    }));
  }

  // 2. About route (Part C Q2)
  if (url === '/about') {
    res.statusCode = 200;
    return res.end(JSON.stringify({
      title: "About Day 14 Server",
      description: "Demonstrating raw Node.js HTTP request-response cycle and backend routing protocols.",
      developer: "Rupa Reddy Kunam"
    }));
  }

  // 3. Contact route (Part C Q2)
  if (url === '/contact') {
    res.statusCode = 200;
    return res.end(JSON.stringify({
      email: "rupa.reddy.kunam@gmail.com",
      github: "https://github.com/RupaReddyKunam",
      location: "Hyderabad, India"
    }));
  }

  // 4. Students list API (Part E Q1 / Part E Q4)
  if (url === '/api/students') {
    res.statusCode = 200;
    return res.end(JSON.stringify({
      resource: "students",
      count: students.length,
      data: students
    }));
  }

  // 5. Dynamic Student lookup parameter route (Part C Q5 / Part E Q1)
  const studentMatch = url.match(/^\/api\/students\/([^\/]+)$/);
  if (studentMatch) {
    const id = studentMatch[1];
    const student = students.find(s => s.id === id);
    if (student) {
      res.statusCode = 200;
      return res.end(JSON.stringify(student));
    } else {
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: `Student with ID "${id}" was not found.` }));
    }
  }

  // 6. Books API (Part E Q2)
  if (url === '/api/books') {
    res.statusCode = 200;
    return res.end(JSON.stringify({
      resource: "books",
      count: books.length,
      data: books
    }));
  }

  // Dynamic Book lookup
  const bookMatch = url.match(/^\/api\/books\/([^\/]+)$/);
  if (bookMatch) {
    const id = bookMatch[1];
    const book = books.find(b => b.id === id);
    if (book) {
      res.statusCode = 200;
      return res.end(JSON.stringify(book));
    } else {
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: `Book with ID "${id}" was not found.` }));
    }
  }

  // 7. Courses API (Part E Q4)
  if (url === '/api/courses') {
    res.statusCode = 200;
    return res.end(JSON.stringify({
      resource: "courses",
      count: courses.length,
      data: courses
    }));
  }

  // 8. Catch-all unmatched routes 404 (Part C Q4)
  res.statusCode = 404;
  return res.end(JSON.stringify({
    error: "404 Route Not Found",
    message: `The path "${url}" does not exist on this server.`
  }));
});

server.listen(PORT, () => {
  console.log(`✓ Node.js HTTP Server is listening on http://localhost:${PORT}`);
  console.log("Press Ctrl+C to terminate the process.");
});
