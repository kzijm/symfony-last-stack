import { Controller } from "@hotwired/stimulus";
import JSConfetti from "js-confetti";

/* stimulusFetch: 'lazy' */
export default class extends Controller {
  connect() {
    console.log("connecting celebrate");
  }

  poof() {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}
