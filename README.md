# brandonconcepcion.com/dogs → Pawse

This repo only exists so **https://brandonconcepcion.com/dogs/** forwards to Pawse at
**https://brandonconcepcion.com/pawse/** (source: [brandonconcepcion/pawse](https://github.com/brandonconcepcion/pawse)).

- `index.html` / `404.html`: redirect to `/pawse/`, keeping any `#/...` in-app page.
- `sw.js`: removes the service worker that Pawse registered while it briefly lived at `/dogs/`.
