function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(par) {
  if (par === "*") {
    return function (x = "special") {
      return `You are *${x}*!`;
    };
  } else if (par === "||") {
    return function (x = "special") {
      return `You are ||${x}||!`;
    };
  }
}

const encouragingPromptFunction = wrapAdjective();
