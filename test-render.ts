import { renderBundle } from '@_unit/unit/lib/client/platform/web/render'
import { fromBundle } from '@_unit/unit/lib/spec/fromBundle'
import { BundleSpec } from '@_unit/unit/lib/types/BundleSpec';
import { bundle_editor } from './bundle_editor.';
import myBundle from './double_inference2.json';
const _specs = require("@_unit/unit/lib/system/_specs.js").default;
// import bun

// myBundle.spec.units = {};

const root = document.getElementById('root')!;

let bundleEditor = bundle_editor(myBundle);

// console.log('bundle', bundle);

const [system, graph] = renderBundle(root, bundleEditor as BundleSpec);
console.log('system', system);