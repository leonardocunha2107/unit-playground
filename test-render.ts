import { renderBundle } from '@_unit/unit/lib/client/platform/web/render'

const root = document.getElementById('root')!;

const bundle = require('./bundle.json')

const [system, graph] = renderBundle(root, bundle)
