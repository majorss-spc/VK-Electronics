# Image assets

The site retains its remotely hosted Unsplash photographs for the hero, service, and original gallery imagery. Four client-provided JPEGs are also included in the home page's repair-bench gallery:

- `tv-signal-screen-test.jpeg` — television screen during signal troubleshooting
- `tv-internal-components.jpeg` — open TV with internal components and ribbon cables
- `tv-panel-circuit-inspection.jpeg` — television panel connections and circuit boards
- `tv-mainboard-repair.jpeg` — close view of a television mainboard

The Unsplash image URLs in `index.html`, `about.html`, `services.html`, `contact.html`, and `css/style.css` can be replaced with the client's own optimized shop and repair photos when available.

Use descriptive alt text when replacing content images. The home hero background is decorative and its accessible description is provided in the HTML. Gallery images use responsive fixed-height frames with `object-fit: cover` to crop without distortion.
