# Tramada Replica Test Harness

Offline Tramada-style UI built from the local walkthrough video/screenshots.

Run locally with server-backed saving:

```sh
npm start
```

Then open `http://127.0.0.1:4173/`.

Useful routes:

```text
/#summary
/#itinerary
/#edit
/#sort
/#sortManual
/#content
/#documents
/#bookings
```

The replica includes:

- Booking itinerary table with old Tramada-style sidebar, header, filters, action buttons, and status columns.
- Add/Edit segment form with supplier info, creditor info, service info, supplier rates, and client due fields.
- Manual sort screen with drag-and-drop segment ordering.
- Document preview for the generated itinerary.
- Content import screen with Outlook-style supplier confirmations and extracted fields for adding a segment.
- Editable left-menu areas for summary, profile, references, passengers, life cycle, status, quick edit, documents, and transaction-style account tabs.
- Global airport/city lookup for departure and finish city fields, generated from OurAirports operating large, medium, small, and seaplane airport records.
- Local server persistence through `GET /api/state` and `PUT /api/state`, saved to `data/state.json` on your machine. Browser storage is used as a fallback if the site is opened without the server.
