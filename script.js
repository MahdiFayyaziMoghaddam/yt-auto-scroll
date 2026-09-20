const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const autoScrollTrigger = $("#auto-scroll-trigger");

chrome.storage.local.get(["autoScrollEnabled"], (result) => {
	const enabled = !!result.autoScrollEnabled;
	autoScrollTrigger.checked = enabled;
});

autoScrollTrigger.addEventListener("change", (e) => {
	const checked = e.target.checked;
	chrome.storage.local.set({ autoScrollEnabled: checked });
});

chrome.storage.onChanged.addListener((changes, area) => {
	if (area !== "local" || !changes.autoScrollEnabled) return;
	const enabled = changes.autoScrollEnabled.newValue;
	autoScrollTrigger.checked = enabled;
});
