import { factory } from "./factory";

let count = factory(0, 1);

const start_at_control = document.getElementById("start_at") as HTMLInputElement;
const step_control = document.getElementById("step") as HTMLInputElement;
const count_button = document.querySelector(".count_button") as HTMLButtonElement;
const current_count = document.querySelector(".current_count",) as HTMLSpanElement;

function update_count() {
  current_count.innerText = count().toString();
}

function update_count_and_reset_counter() {
  const start_at = Number(start_at_control.value);
  const step = Number(step_control.value);
  count = factory(start_at, step);
  current_count.innerText = start_at.toString();
}

start_at_control?.addEventListener("change", update_count_and_reset_counter);
step_control?.addEventListener("change", update_count_and_reset_counter);
count_button.addEventListener("click", update_count);
