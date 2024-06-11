//код с урока fruits
//до упрощения
addActionButton.addEventListener("click", () => {
    if (
      kindInput.value === "" ||
      colorInput.value === "" ||
      weightInput.value === ""
    ) {
      alert("Заполните сперва поля!");
    } else {
        fruits.push({
          kind: kindInput.value,
          color: colorInput.value,
          weight: weightInput.value,
        });
        display();
        kindInput.value = "";
        colorInput.value = "";
        weightInput.value = "";
      }
    });
//после упрощения
addActionButton.addEventListener("click", () => {
    const inputs = [kindInput, colorInput, weightInput];
    
    if (inputs.some(input => input.value === "")) {
      alert("Заполните сперва поля!");
      return;
    }
    
    fruits.push({
      kind: kindInput.value,
      color: colorInput.value,
      weight: weightInput.value,
    });
    
    display();
    inputs.forEach(input => input.value = "");
  });