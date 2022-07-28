let slider1 = document.querySelector('#slider-1') as HTMLInputElement;
let slider2 = document.querySelector('#slider-2') as HTMLInputElement;

let sliderBackground = document.querySelector('.slider') as HTMLElement;
let sliderMaxValue = Number(slider1.max);

let displayValueOne = document.querySelector('#range1');
let displayValueTwo = document.querySelector('#range2');

let minGap: number = 1;

export function sliderOne() {
  slider1.value = String(
    (Number(slider1.value) > Number(slider2.value)
      ? Number(slider2.value)
      : Number(slider1.value)) - minGap,
  );
  if (displayValueOne != null) {
    displayValueOne.textContent = String(slider1.value);
  }
  fillColor();
}
export function sliderTwo() {
  if (Number(slider2.value) - Number(slider1.value) <= minGap) {
    slider2.value = String(Number(slider1.value) + minGap);
  }
  if (displayValueTwo != null) {
    displayValueTwo.textContent = String(slider2.value);
  }
  fillColor();
}

export function fillColor() {
  let percent1 = ~~((+slider1.value / sliderMaxValue) * 100);
  let percent2 = ~~((+slider2.value / sliderMaxValue) * 100);

  sliderBackground.style.background = `linear-gradient(to right, #dadae5, ${percent1}%,
        #3264fe ${percent1}%, #3264fe ${percent2}%,
        #dadae5 ${percent2}%)`;
}