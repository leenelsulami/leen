window.alert("مرحبًا بكم في حفلة تخرج لين محمد السلمي");

  function toggleGreeting() {
    var paragraph = document.getElementById("myParagraph");
    var currentText = paragraph.textContent;
    
    if (currentText === "حفلة تخرجي من جامعة جدة") {
      paragraph.textContent = "مرحبًا بكم جميعا";
    } else {
      paragraph.textContent = "حفلة تخرجي من جامعة جدة";
    }
  }
  