(function (blink) {
	'use strict';

	var albaygaelStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	albaygaelStyle.prototype = {
		bodyClassName: 'content_type_clase_albaygael',
		ckEditorStyles: {
			name: 'albaygael',
			styles: [

				{ name: 'Título 1', element: 'h4', attributes: { 'class': 'bck-title bck-title1'} },
				{ name: 'Título 2', element: 'h4', attributes: { 'class': 'bck-title bck-title2'} },
				{ name: 'Título 3', element: 'h4', attributes: { 'class': 'bck-title bck-title3'} },
			

				{ name: 'Énfasis Subrayado Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-1'} },
				{ name: 'Énfasis Amarillo con fondo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-2'} },
				{ name: 'Énfasis Amarillo con fondo Verde', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-3'} },
				{ name: 'Énfasis Rodear Amarillo', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-4'} },
				{ name: 'Énfasis Verde', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-5'} },
				{ name: 'Énfasis Rosa', element: 'span', attributes: { 'class': 'bck-enfasis bck-enfasis-6'} },

				{ name: 'Lista ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },
				{ name: 'Lista ordenada 6', element: 'ol', attributes: { 'class': 'bck-ol bck-ol6' } },
				{ name: 'Lista ordenada 7', element: 'ol', attributes: { 'class': 'bck-ol bck-ol7' } },
				{ name: 'Lista ordenada 8', element: 'ol', attributes: { 'class': 'bck-ol bck-ol8' } },
				{ name: 'Lista ordenada 9', element: 'ol', attributes: { 'class': 'bck-ol bck-ol9' } },
				{ name: 'Lista ordenada 10', element: 'ol', attributes: { 'class': 'bck-ol bck-ol10' } },

				{ name: 'Lista desordenada 1', element: 'ul', attributes: { 'class': 'bck-ul bck-ul1' } },
				{ name: 'Lista desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul bck-ul2' } },
				{ name: 'Lista desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul bck-ul3' } },
				{ name: 'Lista desordenada 4', element: 'ul', attributes: { 'class': 'bck-ul bck-ul4' } },
				{ name: 'Lista desordenada 5', element: 'ul', attributes: { 'class': 'bck-ul bck-ul5' } },
				{ name: 'Lista desordenada 6', element: 'ul', attributes: { 'class': 'bck-ul bck-ul6' } },
				{ name: 'Lista desordenada 7', element: 'ul', attributes: { 'class': 'bck-ul bck-ul7' } },
				{ name: 'Lista desordenada 8', element: 'ul', attributes: { 'class': 'bck-ul bck-ul8' } },
				{ name: 'Lista desordenada 9', element: 'ul', attributes: { 'class': 'bck-ul bck-ul9' } },
				{ name: 'Lista desordenada 10', element: 'ul', attributes: { 'class': 'bck-ul bck-ul10' } },

				{ name: 'Tabla 1', element: 'table', attributes: { 'class': 'table-1' } },
				{ name: 'Tabla 2', element: 'table', attributes: { 'class': 'table-2' } },
				{ name: 'Tabla 3', element: 'table', attributes: { 'class': 'table-3' } },
				{ name: 'Tabla 4', element: 'table', attributes: { 'class': 'table-4' } },

				{ name: 'Celda 1', element: 'td', attributes: { 'class': 'bck-td-1' } },
				{ name: 'Celda 2', element: 'td', attributes: { 'class': 'bck-td-2' } },
				{ name: 'Celda 3', element: 'td', attributes: { 'class': 'bck-td-3' } },
				{ name: 'Celda 4', element: 'td', attributes: { 'class': 'bck-td-4' } },
				{ name: 'Celda 5', element: 'td', attributes: { 'class': 'bck-td-5' } },
				{ name: 'Celda 6', element: 'td', attributes: { 'class': 'bck-td-6' } },
				{ name: 'Celda 7', element: 'td', attributes: { 'class': 'bck-td-7' } },
				{ name: 'Celda 8', element: 'td', attributes: { 'class': 'bck-td-8' } },

			
				{ name: 'Icono Escucha', element: 'span', attributes: { 'class': 'icon icon-escucha' } },
				{ name: 'Icono Habla', element: 'span', attributes: { 'class': 'icon icon-habla' } },
				{ name: 'Icono Repite', element: 'span', attributes: { 'class': 'icon icon-repite' } },
				{ name: 'Icono Escribe', element: 'span', attributes: { 'class': 'icon icon-escribe' } },
				{ name: 'Icono Dibuja', element: 'span', attributes: { 'class': 'icon icon-dibuja' } },
				{ name: 'Icono Recorta', element: 'span', attributes: { 'class': 'icon icon-recorta' } },
				{ name: 'Icono Mira', element: 'span', attributes: { 'class': 'icon icon-mira' } },
				{ name: 'Icono Relaciona', element: 'span', attributes: { 'class': 'icon icon-relaciona' } },
				{ name: 'Icono Juega', element: 'span', attributes: { 'class': 'icon icon-juega' } },
				{ name: 'Icono Representa', element: 'span', attributes: { 'class': 'icon icon-representa' } },
				{ name: 'Icono Canta', element: 'span', attributes: { 'class': 'icon icon-canta' } },
				{ name: 'Icono Señala', element: 'span', attributes: { 'class': 'icon icon-senala' } },
				{ name: 'Icono Lee', element: 'span', attributes: { 'class': 'icon icon-lee' } },
				{ name: 'Icono Habla con tus compañeros', element: 'span', attributes: { 'class': 'icon icon-hablacompaneros' } },
				

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box3' } },
				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box4' } },
				{ name: 'Caja 5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box5' } },
				{ name: 'Caja 6', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box6' } },
				{ name: 'Caja 7', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box7' } },
				{ name: 'Caja 8', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box8' } },
				{ name: 'Caja 9', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box9' } },
				{ name: 'Caja 10', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box10' } },
				{ name: 'Caja 11', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box11' } },
				{ name: 'Caja 12', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box12' } },
				{ name: 'Caja 13', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box13' } }
			]
		},

		init: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.init.call(this);
			this.addActivityTitle();
			if(window.esWeb) return;
			this.removeFinalSlide();
			this.handleScrollEnd();
			this.setTooltip();
			window.editar && this.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', this.handleScrollEnd);
		 		this.handleScrollEnd.call(scroll);
	 		}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html().trim() + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		setTooltip: function () {},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		}
	};

	albaygaelStyle.prototype = _.extend({}, new blink.theme.styles.basic(), albaygaelStyle.prototype);

	blink.theme.styles.albaygael = albaygaelStyle;

})( blink );
