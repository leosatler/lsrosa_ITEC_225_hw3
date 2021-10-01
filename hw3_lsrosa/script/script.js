function force() {
  let m = parseFloat(document.getElementById("mass").value);
  let a = parseFloat(document.getElementById("acc").value);

  if ((m !== "" && m != null) || (a !== "" && m !== null)) {
    let f = m * a;
    document.getElementById("force").innerHTML = f.toString() + "N";
  } else alert("Invalid Inputs!");
}

function disp() {
  let vi = parseFloat(document.getElementById("velocity").value);
  let t = parseFloat(document.getElementById("time").value);
  let acc = parseFloat(document.getElementById("acc2").value);
  let ans2 = 0.0;

  if (
    (vi !== "" && vi !== null) ||
    (t !== "" && t !== null) ||
    (acc !== "" && acc !== null)
  ) {
    let t2 = Math.pow(t, 2);
    ans2 = vi * t + (1 / 2) * (acc * t2);
  } else {
    alert("Invalid Inputs!");
  }
  document.getElementById("dis").innerHTML = ans2.toString();
}

function quad() {
  // I had to look up some help for this one I had the >0 and ==0 right but it would't work properly without the img root in place
  // that's what i had to research online for a bit I hope thats ok.
  let a1 = parseFloat(document.getElementById("a").value);
  let b1 = parseFloat(document.getElementById("b").value);
  let c1 = parseFloat(document.getElementById("c").value);
  let root = b1 * b1 - 4 * a1 * c1;

  if (
    (a1 !== "" && a1 !== null) ||
    (b1 !== "" && b1 !== null) ||
    (c1 !== "" && c1 !== null)
  ) {
    if (root > 0) {
      let cal1 = (-b1 + Math.sqrt(root)) / (2 * a1);
      let cal2 = (-b1 - Math.sqrt(root)) / (2 * a1);
      document.getElementById("quadr").innerHTML =
        "The answers are: " + cal1.toString() + " and " + cal2.toString();
    } else if (root == 0) {
      cal1 = cal2 = -b1 / (2 * a1);
      document.getElementById("quadr").innerHTML =
        "The answers are: " + cal1.toString() + " and " + cal2.toString();
    } else {
      let real = (-b1 / (2 * a1)).toFixed(2);
      let img = (Math.sqrt(-root) / (2 * a1)).toFixed(2);
      document.getElementById("quadr").innerHTML =
        "The answers are: " +
        real.toString() +
        " + " +
        img.toString() +
        "i" +
        " and " +
        real.toString() +
        " - " +
        img.toString() +
        "i";
    }
  } else {
    alert("Invalid Inputs!");
  }
}

function finance() {
  let pmt = parseFloat(document.getElementById("amount").value);
  let r = parseFloat(document.getElementById("interest").value);
  let n = parseFloat(document.getElementById("peri").value);
  let p2 = 0.0;
  let r2 = Math.pow(1 + r, n);

  let p = pmt * 1 - 1 / r2;
  p2 = p / r;
  document.getElementById("fin").innerHTML = p2.toString();
}
