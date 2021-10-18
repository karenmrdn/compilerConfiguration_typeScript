let appId = "123"; // ts is not able to detect if it is used or not, because it can be used in another file

const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let username = "Andrew"; // ts can detect if it is used or not because it is local variable
  console.log("Clicked! " + message);
}

// Some comment
if (button) {
  button.addEventListener("click", clickHandler.bind(this, "You are welcome"));
}
