function focusOn(slide) {
  const currentFocus = document.getElementsByClassName("focus")[0];
  const newFocus = document.getElementById(slide);
  const slides = document.getElementsByClassName("slide-item");
  console.log(currentFocus);
  if (currentFocus.id === slide) {
    return;
  }

  newFocus.classList.add("focus");
  newFocus.classList.remove("unfocus");
  newFocus.classList.contains("unfocusTop")
    ? newFocus.classList.remove("unfocusTop")
    : newFocus.classList.remove("unfocusBottom");

  let focusNo = Number(/[0-9]/.exec(slide)[0]);
  console.log(focusNo);
  let unfocusBottomNo = focusNo + 1 > 2 ? 0 : focusNo + 1;
  let unfocusTopNo = unfocusBottomNo + 1 > 2 ? 0 : unfocusBottomNo + 1;
  console.log(focusNo, unfocusBottomNo, unfocusTopNo);

  [...slides].forEach((element, index) => {
    if (element.id !== slide) {
      if (element.classList.contains("focus"))
        element.classList.remove("focus");
      element.classList.add("unfocus");
      if (index == unfocusBottomNo) {
        element.classList.add("unfocusBottom");
        if (element.classList.contains("unfocusTop"))
          element.classList.remove("unfocusTop");
      }
      if (index == unfocusTopNo) {
        if (element.classList.contains("unfocusBottom"))
          element.classList.remove("unfocusBottom");
        element.classList.add("unfocusTop");
      }
    }
  });
}
