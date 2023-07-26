var quotes = [
    '"Be yourself; everyone else is already taken."― Oscar Wilde',
    '"So many books, so little time."― Frank Zappa',
    '"A room without books is like a body without a soul."― Marcus Tullius Cicero',
    '"You only live once, but if you do it right, once is enough."― Mae West',
    '"Be the change that you wish to see in the world."― Mahatma Gandhi',
    '"If you tell the truth, you dont have to remember anything."― Mark Twain',
    '"To live is the rarest thing in the world. Most people exist, that is all."― Oscar Wilde',
    '"A friend is someone who knows all about you and still loves you."― Elbert Hubbard',
    '"We accept the love we think we deserve."― Stephen Chbosky',
    '"It is better to be hated for what you are than to be loved for what you are not."― Andre Gide',
];
function newQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('displayQuote').innerHTML = quotes[randomIndex];
}