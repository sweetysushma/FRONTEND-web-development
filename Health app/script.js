const getFeedback = () => {
    // Get the values of the stats.
    const fruits = document.querySelector(".stats > p:nth-child(1)").textContent;
    const vegetables = document.querySelector(".stats > p:nth-child(2)").textContent;
    const wholeGrains = document.querySelector(".stats > p:nth-child(3)").textContent;
    const steps = document.querySelector(".stats > p:nth-child(4)").textContent;
    const caloriesBurned = document.querySelector(".stats > p:nth-child(5)").textContent;
    const timeSpent = document.querySelector(".stats > p:nth-child(6)").textContent;
    const hoursSlept = document.querySelector(".stats > p:nth-child(7)").textContent;
    const qualityOfSleep = document.querySelector(".stats > p:nth-child(8)").textContent;
  
    // Send the values to the server to get feedback.
    const feedback = awaitfetch("/get-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fruits,
        vegetables,
        wholeGrains,
        steps,
        caloriesBurned,
        timeSpent,
        hoursSlept,
        qualityOfSleep,
      }),
    });
  
    // Display the feedback.
    const feedbackText = awaitfeedback.text();
    document.querySelector("#get-feedback").innerHTML = feedbackText;
  };
  
  document.querySelector("#get-feedback").addEventListener("click", getFeedback);
  