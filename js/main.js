$(document).ready(function() {
	increaseProgressBar('.btn-success', 1);
	increaseProgressBar('.btn-warning', 3);
	increaseProgressBar('.btn-danger', 7);
		
	let count = 0;
	function increaseProgressBar(btn, valueOfIncrese){
		$(btn).on('click', function(){		
		count = count + valueOfIncrese;

			$('.progress-bar').width(count + '%');
		});
	};	
});