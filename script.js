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
  element.classList.contains("unfocusTop")
    ? element.classList.remove("unfocusTop")
    : element.classList.remove("unfocusBottom");

  slides.forEach((element) => {
    if (element.id !== slide) {
      if (element.classList.contains("focus"))
        element.classList.remove("focus");
      element.classList.add("unfocus");
    }
  });
}
