import namer from 'color-namer';
import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {SELECTED_COLOR} from '../constants';
import {getReadableColor} from '../readable-color';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: bold;
	font-size: 100px;
	line-height: 1.1;
`;

export const Shade: React.FC = () => {
	const names = namer(SELECTED_COLOR);
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
				backgroundColor: getReadableColor(SELECTED_COLOR),
				flex: 1,
				color: SELECTED_COLOR,
			}}
		>
			<div
				style={{
					maxWidth: 1000,
					textAlign: 'center',
					transform: `scale(${progress})`,
				}}
			>
				It&apos;s a beautiful <br />
				shade of {names.roygbiv[0].name}!
			</div>
		</Container>
	);
};
