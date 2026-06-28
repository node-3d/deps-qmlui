import type { getPaths } from '@node-3d/addon-tools';
import type depsQtQml from '@node-3d/deps-qt-qml';
import type { core as depsQtCore, gui as depsQtGui } from '@node-3d/deps-qt-qml';

type AddonPaths = ReturnType<typeof getPaths>;

export declare const core: typeof depsQtCore;
export declare const gui: typeof depsQtGui;
export declare const qml: typeof depsQtQml;
export declare const bin: AddonPaths['bin'];
export declare const include: AddonPaths['include'];

declare const depsQmlui: AddonPaths & {
	qml: typeof depsQtQml;
	gui: typeof depsQtGui;
	core: typeof depsQtCore;
};
export default depsQmlui;
