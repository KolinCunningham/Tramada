# Tramada Replica

Offline Tramada-style UI built from the local walkthrough video/screenshots.

## Live Demo

https://tramada-replica.vercel.app

## Routes

- `/#itinerary` — booking itinerary table
- `/#edit` — add/edit segment form
- `/#sort` — auto sort screen
- `/#sortManual` — drag-and-drop manual sort
- `/#content` — content import (Outlook-style confirmations)
- `/#documents` — document preview
- `/#bookings` — sample bookings list

## Features

- Booking itinerary table with old Tramada-style sidebar, header, filters, action buttons, and status columns
- Add/Edit segment form with supplier info, creditor info, service info, supplier rates, and client due fields
- Calendar date inputs that save back to Australian `DD-MM-YYYY` format, plus required 24-hour start/finish times
- Manual sort screen with drag-and-drop segment ordering
- Document preview for generated itinerary
- Content import screen with extracted fields for adding a segment
- Editable summary, profile, references, passengers, lifecycle, status, quick edit, document, and transaction tabs
- Global airport/city lookup for departure and finish city fields, generated from OurAirports operating airport records
- Local Node server persistence for development, with browser storage fallback on static Vercel deployments

## Vercel

The Vercel project is linked at the repo root. The root build step copies `tramada-replica/index.html`, `styles.css`, and `script.js` into `public/` so the existing Vercel link serves the current replica after each GitHub push.
