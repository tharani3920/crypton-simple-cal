const process = require("process");

const args = process.argv.slice(2);
const question = args.join(" ");

const calc = (question) => {
  let regex =
    /What\s+is\s+(-?\d+)\s+(plus|minus|multiplied\s+by|divided\s+by)\s+(-?\d+)\?/i;
  let match = question.match(regex);

  if (!match) {
    return "Invalid question format!";
  }

  let num1 = parseInt(match[1]);
  let operation = match[2].toLowerCase();
  let num2 = parseInt(match[3]);
  let result;

  switch (operation) {
    case "plus":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    case "multiplied by":
      result = num1 * num2;
      break;
    case "divided by":
      if (num2 === 0) return "Cannot divide by zero!";
      result = num1 / num2;
      break;
    default:
      return "Unknown operation!";
  }

  return `${num1} ${operation.replace("by", "").trim()} ${num2} is ${result}`;
};

console.log(calc(question));
