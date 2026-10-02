const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

let intervalId = null;

function startAutoScroll() {
	if (intervalId) return;
	intervalId = setInterval(() => {
		const nextBtn = $$(
			".ytSpecButtonShapeNextHost.ytSpecButtonShapeNextTonal.ytSpecButtonShapeNextMono.ytSpecButtonShapeNextSizeXl.ytSpecButtonShapeNextIconButton.ytSpecButtonShapeNextEnableBackdropFilterExperiment.ytSpecButtonShapeNextMainstageIconSize.ytSpecButtonShapeNextMainstagePadding"
		)[1];
		const videoElem = $("video");
		if (videoElem.currentTime >= +videoElem.duration.toFixed(4)) nextBtn.click();
	}, 500);
}

function stopAutoScroll() {
	if (intervalId) {
		clearInterval(intervalId);
		intervalId = null;
	}
}

chrome.storage.local.get(["autoScrollEnabled"], (result) => {
	if (result.autoScrollEnabled) startAutoScroll();
});

chrome.storage.onChanged.addListener((changes, area) => {
	if (area !== "local" || !changes.autoScrollEnabled) return;
	changes.autoScrollEnabled.newValue ? startAutoScroll() : stopAutoScroll();
});
