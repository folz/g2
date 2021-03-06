import { get } from '../core';
import { getFontSize } from '../mixins';
import { css, cx } from '../style-system';

function getFontColor(color) {
	return css({ color });
}

getFontColor.black = getFontColor(get('black'));
getFontColor.white = getFontColor(get('white'));
getFontColor.admin = getFontColor(get('admin'));
getFontColor.purple = getFontColor(get('purple500'));
getFontColor.green = getFontColor(get('green500'));
getFontColor.yellow = getFontColor(get('yellow500'));
getFontColor.orange = getFontColor(get('orange500'));
getFontColor.darkGray = getFontColor(get('darkGray500'));
getFontColor.lightGray = getFontColor(get('lightGray500'));

const fontFamily = {
	default: css({
		color: get('colorText'),
		fontFamily: get('fontFamily'),
		fontWeight: 400,
	}),
	monospace: css({ fontFamily: get('fontFamilyMono') }),
};

const fontStyles = {
	bold: css({ fontWeight: 600 }),
	italic: css({ fontStyle: 'italic' }),
	smallCaps: css({
		fontSize: getFontSize(10),
		fontWeight: 600,
		textTransform: 'uppercase',
	}),
};

const fontSizes = {
	body: css({ fontSize: getFontSize(13) }),
	caption: css({ fontSize: getFontSize(10) }),
	footnote: css({ fontSize: getFontSize(11) }),
	headline: cx([fontStyles.bold, css({ fontSize: getFontSize(13) })]),
	largeTitle: css({ fontSize: getFontSize(28) }),
	subheadline: css({ fontSize: getFontSize(12) }),
	title: css({ fontSize: getFontSize(20) }),
};

const fontMixins = {
	color: getFontColor,
	size: (size) => css({ fontSize: getFontSize(size) }),
};

export const font = {
	...fontFamily,
	...fontSizes,
	...fontStyles,
	...fontMixins,
};
