import { renderBundle } from './unit/src/client/platform/web/render'
import { fromBundle } from './unit/src/spec/fromBundle'
import { BundleSpec } from './unit/src/types/BundleSpec';
import { bundle_editor } from './bundle_editor.';
import myBundle from './final.json';
const _specs = require("./unit/src/system/_specs.js").default;
// import bun

// myBundle.spec.units = {};

const root = document.getElementById('root')!;

let bundleEditor = bundle_editor(myBundle);

// console.log('bundle', bundle);

const [system, graph] = renderBundle(root, bundleEditor as BundleSpec);
console.log('system', system);