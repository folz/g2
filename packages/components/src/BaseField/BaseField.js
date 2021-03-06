import { connect } from '@wp-g2/context';
import React from 'react';

import { useControlGroupContext } from '../ControlGroup';
import * as styles from './BaseField.styles';

const { BaseFieldView } = styles;

function BaseField({ isFocused, ...props }) {
	const { styles: controlGroupStyles } = useControlGroupContext();
	const cx = [controlGroupStyles, isFocused && styles.focus];

	return <BaseFieldView {...props} cx={cx} />;
}

export default connect(BaseField, 'BaseField');
