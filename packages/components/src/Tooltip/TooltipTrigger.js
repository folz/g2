import { TooltipReference } from '@wp-g2/a11y';
import { connect } from '@wp-g2/context';
import { css, cx } from '@wp-g2/styles';
import React from 'react';

import { useTooltipContext } from './Tooltip.Context';
import * as styles from './Tooltip.styles';

function TooltipTrigger({
	as = 'span',
	className,
	css: cssProp,
	forwardedRef,
	...props
}) {
	const { tooltip } = useTooltipContext();
	const classes = cx([styles.noOutline, className, css(cssProp)]);

	return (
		<TooltipReference
			{...props}
			{...tooltip}
			as={as}
			className={classes}
			ref={forwardedRef}
		/>
	);
}

export default connect(TooltipTrigger, 'TooltipTrigger');
