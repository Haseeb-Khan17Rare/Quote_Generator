let text = document.getElementById('p1');
let author = document.getElementById('author');
let button = document.querySelector('button');

let quotes = [
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  }
];

function animateQuote() {
  // Remove animation classes
  text.classList.remove('fade-in-up');
  author.classList.remove('fade-in-up');

  // Trigger reflow
  void text.offsetWidth;

  // Re-add animation classes
  text.classList.add('fade-in-up');
  author.classList.add('fade-in-up');
}

button.addEventListener('click', () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];

  text.textContent = `“${quote.text}”`;
  author.textContent = `— ${quote.author}`;

  animateQuote();
});
