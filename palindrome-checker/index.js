"strict mode";
const checkBtn = document.getElementById("check-btn");
checkBtn.addEventListener("click", function () {
  const text = document.getElementById("text-input").value;
  const resultBox = document.getElementById("result");
  const lowerText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const isPalindrome = lowerText === lowerText.split("").reverse().join("");
  if (text.trim() === "") {
    resultBox.textContent = "Please input a value";
  } else {
    resultBox.textContent = isPalindrome
      ? `Yes, ${text} a palindrome!`
      : `No, ${text} not a palindrome.`;
  }
});
