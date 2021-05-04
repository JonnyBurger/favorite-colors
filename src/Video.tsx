import {Composition} from 'remotion';
import {Colors} from './Colors';
import {Main} from './Main';
import {Palette} from './Palette';
import {Shade} from './Shade';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Colors"
				component={Colors}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					color: '#e74c3c',
				}}
			/>
			<Composition
				id="Shade"
				component={Shade}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					color: '#e74c3c',
				}}
			/>
			<Composition
				id="Palette"
				component={Palette}
				durationInFrames={150}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					color: '#e74c3c',
				}}
			/>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={350}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					name: 'Jonny',
					color: '#e74c3c',
				}}
			/>
		</>
	);
};
