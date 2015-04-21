#!/usr/bin/env node

var path = require('path');

var browserLessons = require('browser-lessons');

browserLessons( {

	name: 'Jam3 Programmatic Animation Lesson',
	description: 'This is a lesson on programmatic animation.',
	pathLessons: path.join(__dirname, 'lessons')
	/*
	styles: {
	    colorBG: '#121018',
	    colorText: '#7c7491',
	    colorBGHeading: '#1E1A29',
	    colorHeading: '#9d93b6',
	    colorBold: '#f191ae',
	 
	    colorInlineCode: '#e1f191',
	    colorBGInlineCode: '#3d3451',
	    
	    colorBGMenu: '#121018',
	    colorMenu: '#9D93B6',
	 
	    colorBorderMenuEven: '#94F0D9',
	    colorBorderMenuOdd: '#94F0D9',
	    colorBorderHeadingMenu: '#94F0D9',
	 
	    colorBorderPracticeOdd: '#E1F096',
	    colorBorderPracticeEven: '#E1F096',
	    colorBorderHeadingPractice: '#E1F096',
	    
	    colorBGPre: '#1e1a28',
	    colorBorderPre: '#EF92AE'
	  }
	});
	 */
});