const quotes = [
    {quote: 'All that glitters is not gold.', who: 'William Shakespeare'},
    {quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.', who: 'Thomas Edison'},
    {quote: 'Go ahead, make my day.', who: 'Harry Callahan'},
    {quote: 'Knowledge is power.', who: 'Sir Francis Bacon'},
    {quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.', who: 'Albert Einstein'},
    {quote: 'Make it count.', who: 'Jack Dawson, \'Titanic\''},
    {quote: 'Carpe diem. Seize the day, boys. Make your lives extraordinary.', who: 'John Keating, \'Dead Poets\' Society\''},
    {quote: 'I don’t regret the things I’ve done, but those I did not do.', who: 'Lucas, \'Empire Records\''},
    {quote: 'In the Chinese language, the word "crisis" is composed of two characters, one representing danger and the other, opportunity.', who: 'John F. Kennedy'},
    {quote: '역시 내가 너무 귀여운 탓인가', who: 'Undefined'},
    {quote: 'You mustn’t be afraid to dream a little bigger, darling.', who: 'Eames, \'Inception\''},
    {quote: '가는 말이 고우면 얕본다', who: '박명수'},
    {quote: 'You are never too old to set another goal or to dream a new dream.', who: 'C.S. Lewis'},
    {quote: 'Do not follow where the path may lead. Go instead where there is no path and leave a trail.', who: 'Ralph Waldo Emerson'},
    {quote: 'Dream as if you\'ll live forever, live as if you\'ll die today.', who: 'James Dean'},
    {quote: 'There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other.', who: 'Douglas H. Everett'},
    {quote: 'It is our choices, Harry, that show what we truly are, far more than our abilities', who: 'Albus Dumbledore,\'Chamber of Secrets\''},
    {quote: 'Always', who: 'Severus Snape, \'Deathly Hallows\''},
    {quote: 'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.', who: 'Mark Twain'},
    {quote: 'You don’t have to see the whole staircase, just take the first step.', who: 'Martin Luther King, Jr.'},
    {quote: 'Yesterday is but today\'s memory, tomorrow is today\'s dream.', who: 'Kahlil Gibran'},
    {quote: 'I have had dreams, and I’ve had nightmares. I overcame the nightmares because of my dreams.', who: 'Jonas Salk'},
    {quote: 'If someone hates you for no reason. Give that jerk a reason', who: 'the Joker'},
    {quote: 'Never let the fear of striking out keep you from playing the game.', who: 'Babe Ruth'},
    {quote: 'Always stay gracious, best revenge is your paper.', who: '"Formation" by Beyonce'},
    {quote: 'Remind yourself. Nobody built like you, you design yourself.', who: '"A Dream" by Jay-Z'},
    {quote: '꿈은 도망가지 않는다. 도망가는 것은 언제나 나 자신이다', who: '노하라 히로시(野原ひろし)'},
    {quote: 'They can because they think they can.', who: 'Vergilius'},
    {quote: '계획은 무슨! 계획대로 되지 않는 게 인생이라는 거야. 똑똑히 기억해 둬!', who: '노하라 히로시(野原ひろし)'},
    {quote: 'Beware; for I am fearless, and therefore powerful.', who: 'Mary Shelley, Frankenstein'},
]
const quote = document.querySelector('span#quote')
const who = document.querySelector('span#who')
const selectQuote = quotes[Math.floor(Math.random()*30)]

quote.innerText = selectQuote['quote']
who.innerText = selectQuote['who']