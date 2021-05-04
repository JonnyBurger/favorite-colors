import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {SELECTED_COLOR} from './constants';
import {getReadableColor} from './readable-color';

const Container = styled(AbsoluteFill)`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: bold;
`;

export const Big: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});
	return (
		<Container
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
				color: getReadableColor(SELECTED_COLOR),
				fontSize: 150,
			}}
		>
			<span
				style={{
					display: 'block',
					transform: `translateY(${interpolate(
						progress,
						[0, 1],
						[1000, 0]
					)}px)`,
				}}
			>
				{SELECTED_COLOR}
			</span>
		</Container>
	);
};
