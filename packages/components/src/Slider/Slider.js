import { connect } from '@wp-g2/context';
import { clamp, noop, useControlledState } from '@wp-g2/utils';
import React from 'react';

import { useFormGroupContext } from '../FormGroup';
import * as styles from './Slider.styles';

const { SliderView } = styles;

function Slider({
	onChange = noop,
	id: idProp,
	max = 100,
	min = 0,
	size = 'medium',
	style,
	value: valueProp,
	...props
}) {
	const [value, setValue] = useControlledState(valueProp, { initial: 50 });
	const { id: contextId } = useFormGroupContext();
	const id = idProp || contextId;

	const handleOnChange = (event) => {
		const next = parseFloat(event.target.value);
		setValue(next);
		onChange(next, { event });
	};

	const currentValue = clamp(value, min, max);
	const componentStyles = {
		...style,
		'--progress': `${currentValue}%`,
	};

	const cx = [styles[size]];

	return (
		<SliderView
			{...props}
			cx={cx}
			id={id}
			max={max}
			min={min}
			onChange={handleOnChange}
			style={componentStyles}
			type="range"
			value={value}
		/>
	);
}

export default connect(Slider, 'Slider');
