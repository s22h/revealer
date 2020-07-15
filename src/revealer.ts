/**

Copyright 2020 Steffen Franzkoch (frako) <frako@frako.dev>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

@preserve

*/

class Revealer {
	parent: HTMLElement | undefined;
	observer: IntersectionObserver;
	margin = "0px";
	threshold: number | number[] = [0, 0.25];

	construct(parent: HTMLElement | undefined) {
		this.parent = parent;
	}

	setMargin(margin: string) {
		this.margin = margin;
	}

	setThreshold(threshold: number | number[]) {
		this.threshold = threshold;
	}

	run(targets: HTMLElement[], callback: IntersectionObserverCallback | undefined) {
		if (!callback) {
			callback = this.defaultCallback;
		}

		let options: IntersectionObserverInit = {
			rootMargin: this.margin,
			threshold: this.threshold
		}

		if (this.parent) {
			options.root = this.parent;
		}

		this.observer = new IntersectionObserver(callback, options);

		targets.forEach(t => {
			this.observer.observe(t);
		});
	}

	defaultCallback(entries, observer) {
		entries.forEach(e => {
			if (e.isIntersecting && e.intersectionRatio >= 0.25) {
				e.target.style.transition = "opacity 2s ease";
				e.target.style.opacity = "1";
			} else if (!e.isIntersecting) {
				e.target.style.transition = "opacity 0.5s ease";
				e.target.style.opacity = "0";
			}
		});
	}
}

export default Revealer;
