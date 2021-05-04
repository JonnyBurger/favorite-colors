import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Big} from './Big';
import {Colors} from './Colors';
import {Name} from './Name';
import {Palette} from './Palette';
import {Shade} from './Shade';

export const Main: React.FC<{
	color: string;
	name: string;
}> = ({color, name}) => {
	return (
		<AbsoluteFill>
			<Sequence from={0} durationInFrames={120}>
				<Name name={name} />
			</Sequence>
			<Sequence from={50} durationInFrames={140}>
				<Palette color={color} />
			</Sequence>
			<Sequence from={110} durationInFrames={80}>
				<Big color={color} />
			</Sequence>
			<Sequence from={190} durationInFrames={80}>
				<Colors color={color} />
			</Sequence>
			<Sequence from={270} durationInFrames={80}>
				<Shade color={color} />
			</Sequence>
		</AbsoluteFill>
	);
};
