export const content = {
  title: "CTF Purity Test",
  
  main: {
    subtitle: "Check off everything you (optionally, your team) has done.",
    description: "Caution: This is not a bucket list. Completion of all items on this test will likely result in disqualification.",
    submitButton: "Submit",
    resetButton: "Reset",
    footer: "Results are calculated client-side and not stored."
  },

  score: {
    title: "Your CTF Purity Score",
    noScoreTitle: "No Score Found",
    noScoreMessage: "Please take the test first.",
    takeTestButton: "Take the Test",
    takeAgainButton: "Take Again",
    shareButton: "Share Score",
    shareDetailsLabel: "Include detailed results when sharing",
    checkedItemsTitle: "Items you've checked:",
    
    description: "The CTF Purity Test is a self-graded survey that  how degenerate of a CTF player you are, with a score of 100 being the most pure, and 0 being the most cursed.",
    disclaimer: "This test is for entertainment purposes only and should not be taken seriously.",
    
    shareText: {
      basic: (score: number, origin: string) => `I scored ${score} on the CTF Purity Test! ${origin}`,
      detailed: (score: number, url: string) => `I scored ${score} on the CTF Purity Test! See my detailed results: ${url}`
    },
    
    shareTitle: "My CTF Purity Score",
    clipboardMessage: "Score copied to clipboard!"
  },

  scoreMessages: {
    veryPure: "You don't really play CTFs. 🫥",
    prettyPure: "You've played a few CTFs here and there, but it's not like they're a huge part of your life. 🤓",
    moderate: "You've played a decent amount of CTFs. You generally like to keep things above board. Let's play fair and square! 😇",
    experienced: "You've played a lot of CTFs, and you've seen (and participated in) your fair share of antics and cursed tactics. Good for you. 🙃",
    veryExperienced: "CTFs are a big part of your life, and you have the stories to show for it. Just don't go overboard 😉",
    veteran: "You are a menace to the CTF community. 💀"
  }
};