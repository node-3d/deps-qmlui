import { getPaths } from '@node-3d/addon-tools';

const paths = getPaths(import.meta.dirname);

export { default as qml, core, gui } from '@node-3d/deps-qt-qml';

export const bin = paths.bin;
export const include = paths.include;

const depsQmlui = {
	qml,
	gui,
	core,
	...paths,
};

export default depsQmlui;
