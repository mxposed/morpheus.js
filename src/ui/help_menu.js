morpheus.HelpMenu = function() {
	var html = [];
	html.push('<div style="margin-left:2px;" class="btn-group">');
	html
			.push('<span style="color:#ca0020;" data-toggle="dropdown" class="fa fa-lg fa-border fa-question-circle"></span>');
	html
			.push('<ul class="dropdown-menu dropdown-menu-right" role="menu">');
	html.push('<li><a data-name="contact" href="#">Contact</a></li>');
	// <li role="presentation" class="divider"></li>

	html.push('<li><a data-name="linking" href="#">Linking</a></li>');
	html.push('<li><a data-name="tutorial" href="#">Tutorial</a></li>');
	html.push('<li><a data-name="source" href="#">Source Code</a></li>');

	html.push('</ul>');
	html.push('</div>');
	this.$el = $(html.join(''));
	this.$el.find('button').on('click', function(e) {
		e.stopImmediatePropagation();
	});
	this.$el.find('[data-name=contact]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		window.open('mailto:morpheus@broadinstitute.org');
		morpheus.Util.trackEvent({
			eventCategory : 'ToolBar',
			eventAction : 'contact'
		});
	});
	this.$el.find('[data-name=tutorial]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		window.open(morpheus.Util.URL + 'tutorial.html');
		morpheus.Util.trackEvent({
			eventCategory : 'ToolBar',
			eventAction : 'tutorial'
		});

	});

	this.$el.find('[data-name=linking]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		window.open(morpheus.Util.URL + 'linking.html');
		morpheus.Util.trackEvent({
			eventCategory : 'ToolBar',
			eventAction : 'linking'
		});
	});
	this.$el.find('[data-name=source]').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
		window.open('https://github.com/joshua-gould/morpheus.js');
		morpheus.Util.trackEvent({
			eventCategory : 'ToolBar',
			eventAction : 'source'
		});
	});
};
