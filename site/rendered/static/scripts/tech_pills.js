document.addEventListener("DOMContentLoaded", function () {
  const techPills = document.querySelectorAll("span.tech-pill");

  techPills.forEach((pill) => {
    const icon = document.createElement("i");
    let textContent = "";

    if (pill.classList.contains("python")) {
      icon.className = "fab fa-python";
      textContent = " Python";
      pill.style.backgroundColor = "#f7e8d1";
      pill.style.color = "#ab8f5e";
    } else if (pill.classList.contains("cpp")) {
      icon.className = "fas fa-code";
      textContent = " C++";
      pill.style.backgroundColor = "#cce4f6";
      pill.style.color = "#00599C";
    } else if (pill.classList.contains("dart")) {
      icon.className = "fa-brands fa-dart-lang";
      textContent = " Dart";
      pill.style.backgroundColor = "#cceeff";
      pill.style.color = "#0175C2";
    } else if (pill.classList.contains("js")) {
      icon.className = "fa-brands fa-js";
      textContent = " JavaScript";
      pill.style.backgroundColor = "#fff4c2";
      pill.style.color = "#e5c700";
    } else if (pill.classList.contains("ts")) {
      icon.className = "fa-brands fa-js";
      textContent = " TypeScript";
      pill.style.backgroundColor = "#d1e0f7";
      pill.style.color = "#3178C6";
    } else if (pill.classList.contains("flutter")) {
      icon.className = "fa-brands fa-flutter";
      textContent = " Flutter";
      pill.style.backgroundColor = "#cce4f6";
      pill.style.color = "#02569B";
    } else if (pill.classList.contains("react")) {
      icon.className = "fa-brands fa-react";
      textContent = " React";
      pill.style.backgroundColor = "#c6eafd";
      pill.style.color = "#217a91";
    } else if (pill.classList.contains("playwright")) {
      icon.className = "fas fa-theater-masks";
      textContent = " Playwright";
      pill.style.backgroundColor = "#ffd6d6";
      pill.style.color = "#d32f2f";
    } else if (pill.classList.contains("html/css")) {
      icon.className = "fab fa-html5";
      textContent = " HTML/CSS";
      pill.style.backgroundColor = "#ffe5b4";
      pill.style.color = "#ff8800";
    } else if (pill.classList.contains("scikit-learn")) {
      icon.className = "fas fa-code";
      textContent = " scikit-learn";
      pill.style.backgroundColor = "#cce4f6";
      pill.style.color = "#3294C7";
    } else if (pill.classList.contains("flask")) {
      icon.className = "fas fa-flask";
      textContent = " Flask";
      pill.style.backgroundColor = "#d4f7d4";
      pill.style.color = "#2EAD33";
    } else if (pill.classList.contains("swift")) {
      icon.className = "fab fa-swift";
      textContent = " Swift";
      pill.style.backgroundColor = "#ffe5cc";
      pill.style.color = "#fa5723";
    } else if (pill.classList.contains("swiftui")) {
      icon.className = "fab fa-swift";
      textContent = " SwiftUI";
      pill.style.backgroundColor = "#e6f3ff";
      pill.style.color = "#007aff";
    } else {
      icon.className = "fas fa-code";
    }

    pill.appendChild(icon);
    const text = document.createTextNode(textContent);
    pill.appendChild(text);
  });
});
