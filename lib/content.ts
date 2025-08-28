export const content = {
  title: "CTF Purity Test",
  
  main: {
    subtitle: "Check off everything you have done.",
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
    veryPure: "Very pure! You haven't experienced much yet.",
    prettyPure: "Pretty pure! You've dipped your toes in the water.",
    moderate: "Moderately experienced. You've had some fun!",
    experienced: "Quite experienced! You've explored quite a bit.",
    veryExperienced: "Very experienced! You've seen and done a lot.",
    veteran: "Wow! You've really lived life to the fullest!"
  }
};