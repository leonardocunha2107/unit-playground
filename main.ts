import { renderBundle } from 'unit/client/platform/web/render.js'
import { fromBundle } from 'unit/spec/fromBundle'
import { BundleSpec } from 'unit/types/BundleSpec';
import { bundle_editor } from './bundle_editor';
import myBundle from './bundle.json';
const _specs = require("unit/system/_specs.js").default;
// import bun

// myBundle.spec.units = {};

const root = document.getElementById('root')!;

let bundleEditor = bundle_editor(myBundle);

// console.log('bundle', bundle);

const [system, graph] = renderBundle(root, bundleEditor as BundleSpec);
console.log('system', system);