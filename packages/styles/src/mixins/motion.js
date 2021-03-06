import { css } from '../style-system';
import { REDUCED_MOTION_MODE_ATTR } from '../theme';

export function reducedMotion(strings, ...interpolations) {
	const interpolatedStyles = css(strings, ...interpolations);

	return css`
		@media (prefers-reduced-motion) {
			transition: none !important;
			${interpolatedStyles};
		}
		${REDUCED_MOTION_MODE_ATTR} & {
			transition: none !important;
			${interpolatedStyles};
		}
	`;
}
