import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: bold;
	font-size: 30px;
`;

const FACTOR = 1.5;
const TOP_PANEL = 100;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	height: ${FACTOR * 255 + TOP_PANEL}px;
`;

const Bar = styled.div`
	border-radius: 10px;
`;

const rgb = ['#ff7979', '#badc58', '#3498db'];

export const Colors: React.FC<{
	color: string;
}> = ({color}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const trimmed = color.replace('#', '').trim();
	const r = parseInt(trimmed.slice(0, 2), 16);
	const g = parseInt(trimmed.slice(2, 4), 16);
	const b = parseInt(trimmed.slice(4, 6), 16);

	const progress = spring({
		fps,
		frame,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	const barMargin = interpolate(progress, [0, 1], [0, 20]);

	return (
		<Container
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<Row>
				{[r, g, b].map((color, index) => {
					const barProgress = spring({
						fps,
						frame: frame - index * 10,
						config: {
							mass: 1.4,
							damping: 200,
						},
					});
					return (
						<div style={{textAlign: 'center'}}>
							<div
								style={{
									height: TOP_PANEL,
									marginBottom: 10,
									color: rgb[index],
									overflow: 'hidden',
								}}
							>
								<span style={{opacity: barProgress, fontSize: 80}}>
									{String(color)}
								</span>
							</div>
							<Bar
								key={index}
								style={{
									width: 250,
									marginLeft: barMargin,
									marginRight: barMargin,
									height: color * FACTOR * barProgress,
									backgroundColor: rgb[index],
								}}
							/>
							<div
								style={{marginTop: 20, color: rgb[index], overflow: 'hidden'}}
							>
								<span
									style={{
										transform: `translateY(${interpolate(
											barProgress,
											[0, 1],
											[30, 0]
										)}px)`,
										display: 'block',
									}}
								>
									{['Red', 'Green', 'Blue'][index]}
								</span>
							</div>
						</div>
					);
				})}
			</Row>
		</Container>
	);
};
