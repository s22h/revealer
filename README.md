# Revealer

Reveals elements on a website when they intersect the viewport using the IntersectionObserver API.

## Usage

```js
import Revealer from "./revealer.min.js";

const revealer = new Revealer();
revealer.run(document.querySelectorAll(".reveal"));
```

This will fade in all elements which have the class _reveal_ using the default callback, which fades in at 25% of the
element visible and fades out when the element is out of the viewport.

You can pass a callback as the second parameter to `run`, which will be called whenever the threshold is met.

The following passes a custom callback:

```js
import Revealer from "./revealer.min.js";

const revealer = new Revealer();
revealer.run(document.querySelectorAll(".reveal"), (entries, observer) => {
		entries.forEach(e => {
			if (e.isIntersecting && e.intersectionRatio >= 0.25) {
				e.target.style.transition = "opacity 2s ease";
				e.target.style.opacity = "1";
			} else if (!e.isIntersecting) {
				e.target.style.transition = "opacity 0.5s ease";
				e.target.style.opacity = "0";
			}
		});
	});
```
