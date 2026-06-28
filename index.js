import { getPaths } from '@node-3d/addon-tools';
import qml, { core, gui } from '@node-3d/deps-qt-qml';

const paths = getPaths(import.meta.dirname);

export { core, gui, qml };
export const bin = paths.bin;
export const include = paths.include;

const depsQmlui = {
	qml,
	gui,
	core,
	...paths,
};

export default depsQmlui;
