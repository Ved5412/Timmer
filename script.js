var clock;
var isPaused = false;

$(document).ready(function () {
	// Initialize FlipClock with 0
	clock = $('#clock1').FlipClock(0, {
		clockFace: 'HourlyCounter',
		countdown: true,
		autoStart: false,
		callbacks: {
			stop: function () {
				if (!isPaused) {
					alert("Time's up!");
				}
			}
		}
	});

	// Start Button
	$('#startBtn').click(function () {
		let minutes = parseInt($('#minutes').val()) || 0;
		let seconds = parseInt($('#seconds').val()) || 0;
		let totalSeconds = (minutes * 60) + seconds;

		if (totalSeconds > 0) {
			clock.setTime(totalSeconds);
			clock.setCountdown(true);
			isPaused = false;
			clock.start();
		} else {
			alert("Please enter a valid time.");
		}
	});

	// Pause Button
	$('#pauseBtn').click(function () {
		if (clock.running) {
			clock.stop();
			isPaused = true;
		} else if (clock.getTime().time > 0) {
			isPaused = false;
			clock.start();
		}
	});

	// Reset Button
	$('#resetBtn').click(function () {
		clock.stop();
		clock.setTime(0);
		isPaused = false;
	});

	// Theme Toggle
	$('#themeSwitch').on('change', function () {
		$('body').toggleClass('dark');
	});
});
