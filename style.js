(function (blink) {
	'use strict';

	var BCEnglishOnlineStyle = function () {
		blink.theme.styles.basic.apply(this, arguments);
	},
	page = blink.currentPage;

	BCEnglishOnlineStyle.prototype = {
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_bc-englishonline',
		extraPlugins: ['image2'],
		ckEditorStyles: {
			name: 'bc-englishonline',
			styles: [

				{ name: 'Tí­tulo 1', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Tí­tulo 2', element: 'h4', attributes: { 'class': 'bck-title2'} },
				{ name: 'Tí­tulo 3', element: 'h4', attributes: { 'class': 'bck-title3'} },

				{ name: 'Énfasis', element: 'span', attributes: { 'class': 'bck-enfasis' }},
				{ name: 'Enunciado actividad', element: 'h4', attributes: { 'class': 'bck-title-activity' }},

				{ name: 'Tabla centrada', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table-center'} },
				{ name: 'Celda encabezado', element: 'td', attributes: { 'class': 'bck-td' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } }
			]
		},

		init: function (scope) {
			var that = scope || this;
			this.parent.init.call(that);
		},

		removeFinalSlide: function (scope) {
			var that = scope || this;
			this.parent.removeFinalSlide.call(that, true);
		}

	};

	BCEnglishOnlineStyle.prototype = _.extend({}, new blink.theme.styles.basic(), BCEnglishOnlineStyle.prototype);

	blink.theme.styles.bcenglishonline = BCEnglishOnlineStyle;

})( blink );
