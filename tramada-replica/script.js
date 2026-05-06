const bookings = [
  {
    id: "18618",
    client: "FLOWER/KERRIE MRS",
    clientName: "Mrs KERRIE FLOWER",
    passengers: ["BOLAND/LEE ELIZABETH MRS", "FLOWER/KERRIE LOUISE MRS"],
    pax: 2,
    debtor: "Retail Client",
    itinerary: "SYD-HND/SYD-HND-SY...",
    bookDate: "13-03-2026",
    depDate: "24-10-2026",
    consultant: "Kate Vasiliou",
    bookingReference: "1264931",
    title: "Best of Japan",
    contactEmail: "sora.jang@insidejapantours.com",
    supplierConsultant: "Sora Jang",
    segments: [
      seg("s1", "FLT", "QDOHOA / QF / 0059 / I", "Specific", "24-10-2026", "12:15", "24-10-2026", "20:10", "SYD", "HND", "HK", "QF59 Sydney Airport to Haneda Airport"),
      seg("s2", "FLT", "JGLICY / QF / 0059 / I", "Specific", "24-10-2026", "12:15", "24-10-2026", "20:10", "SYD", "HND", "HK", "QF59 Sydney Airport to Haneda Airport"),
      seg("s3", "TSF", "", "All", "24-10-2026", "", "24-10-2026", "", "NRT", "TYO", "HK", "Private car from Narita Airport to Tokyo Hotel"),
      seg("s4", "HTL", "QDOHOA", "Specific", "24-10-2026", "15:00", "27-10-2026", "12:00", "NRT", "NRT", "HK", "Own Tokyo Hotel arrangement - Shangri-La Tokyo (24-27 Oct)", "hotel"),
      seg("s5", "TUR", "", "All", "24-10-2026", "", "17-11-2026", "", "TYO", "TYO", "HK", "Inside Japan arrangements"),
      seg("s6", "TUR", "", "All", "25-10-2026", "09:00", "25-10-2026", "17:00", "TYO", "TYO", "HK", "Full Day Private Guide Service in Tokyo"),
      seg("s7", "TUR", "", "All", "26-10-2026", "", "26-10-2026", "", "TYO", "TYO", "HK", "Full Day Private Guide Service for Hakone & Mount Fuji"),
      seg("s8", "TSF", "", "All", "27-10-2026", "", "27-10-2026", "", "TYO", "TYO", "HK", "Private Car from Hotel to Tokyo Station"),
      seg("s9", "COM", "Tokyo to Kanazawa Train", "All", "27-10-2026", "", "27-10-2026", "", "TYO", "", "", "Transfer by train from Tokyo to Kanazawa"),
      seg("s10", "HTL", "", "All", "27-10-2026", "15:00", "29-10-2026", "11:00", "QKW", "QKW", "HK", "Hyatt Centric Kanazawa", "hotel"),
      seg("s11", "TUR", "", "All", "28-10-2026", "09:00", "28-10-2026", "17:00", "QKW", "QKW", "HK", "Full Day Private Guide Service in Kanazawa"),
      seg("s12", "COM", "Kanazawa to Kyoto Trains", "All", "29-10-2026", "", "29-10-2026", "", "QKW", "", "", "Kanazawa to Kyoto Trains"),
      seg("s13", "TSF", "", "All", "29-10-2026", "", "29-10-2026", "", "UKY", "UKY", "HK", "Station arrival transfer in Kyoto"),
      seg("s14", "HTL", "", "All", "29-10-2026", "15:00", "02-11-2026", "12:00", "UKY", "UKY", "HK", "Dhawa Yura Kyoto", "hotel"),
      seg("s15", "TUR", "", "All", "29-10-2026", "", "29-10-2026", "", "UKY", "UKY", "HK", "Evening orientation in Kyoto"),
      seg("s16", "TUR", "", "All", "30-10-2026", "09:00", "30-10-2026", "17:00", "UKY", "UKY", "HK", "Full Day Private Guide Service in Kyoto"),
      seg("s17", "TUR", "", "All", "31-10-2026", "", "31-10-2026", "", "UKY", "UKY", "HK", "Free day in Kyoto"),
      seg("s18", "TUR", "", "All", "01-11-2026", "09:00", "01-11-2026", "13:00", "UKY", "UKY", "HK", "Morning walking tour in Kyoto"),
      seg("s19", "TSF", "", "All", "02-11-2026", "", "02-11-2026", "", "UKY", "UKY", "HK", "Transfer from hotel to station"),
      seg("s20", "COM", "Kyoto to Hiroshima Trains", "All", "02-11-2026", "", "02-11-2026", "", "UKY", "", "", "Kyoto to Hiroshima Trains"),
      seg("s21", "TSF", "", "All", "02-11-2026", "", "02-11-2026", "", "HIJ", "HIJ", "HK", "Arrival transfer in Hiroshima"),
      seg("s22", "HTL", "", "All", "02-11-2026", "15:00", "04-11-2026", "11:00", "HIJ", "HIJ", "HK", "Sheraton Grand Hiroshima Hotel", "hotel"),
      seg("s23", "TUR", "", "All", "03-11-2026", "09:00", "03-11-2026", "17:00", "HIJ", "HIJ", "HK", "Private guide in Hiroshima and Miyajima"),
      seg("s24", "TSF", "", "All", "04-11-2026", "", "04-11-2026", "", "HIJ", "HIJ", "HK", "Transfer to Hiroshima station"),
      seg("s25", "TSF", "", "All", "04-11-2026", "", "04-11-2026", "", "TAK", "TAK", "HK", "Train to Takamatsu"),
      seg("s26", "HTL", "", "All", "04-11-2026", "15:00", "06-11-2026", "11:00", "TAK", "TAK", "HK", "Takamatsu hotel", "hotel"),
      seg("s27", "TSF", "", "All", "05-11-2026", "", "05-11-2026", "", "TAK", "TAK", "HK", "Island art transfer"),
      seg("s28", "TUR", "", "All", "05-11-2026", "09:00", "05-11-2026", "17:00", "OKJ", "OKJ", "HK", "Full day Naoshima touring"),
      seg("s29", "COM", "Takamatsu to Tokyo Trains", "All", "06-11-2026", "", "06-11-2026", "", "OKJ", "", "", "Takamatsu to Tokyo Trains"),
      seg("s30", "TSF", "", "All", "06-11-2026", "", "06-11-2026", "", "TAK", "TYO", "HK", "Station transfer to Tokyo"),
      seg("s31", "HTL", "QDOHOA", "Specific", "06-11-2026", "15:00", "08-11-2026", "12:00", "NRT", "NRT", "HK", "Final Tokyo airport hotel", "hotel"),
      seg("s32", "FLT", "JGLICY / QF / 0026 / I", "Specific", "08-11-2026", "", "08-11-2026", "", "TYO", "HND", "HK", "Domestic connection to Haneda"),
      seg("s33", "TSF", "", "Specific", "17-11-2026", "06:55", "18-11-2026", "18:50", "HND", "SYD", "HK", "Final transfer and international departure"),
      seg("s34", "FLT", "QDOHOA / QF / 0060 / C", "Specific", "17-11-2026", "", "17-11-2026", "", "TYO", "HND", "HK", "Flight from Tokyo to Sydney"),
      seg("s35", "COM", "Airfare Conditions", "Specific", "17-11-2026", "22:00", "18-11-2026", "09:55", "HND", "SYD", "", "Airfare Conditions")
    ]
  },
  {
    id: "17521",
    client: "WOOD/KERRIE ANNE MRS",
    clientName: "Mrs KERRIE WOOD",
    passengers: ["WOOD/KERRIE ANNE MRS", "WOOD/GARY WILFRED MR", "COLLETTE"],
    pax: 4,
    debtor: "Retail Client",
    itinerary: "SYD-BKK-IST-MLA/CT...",
    bookDate: "21-04-2025",
    depDate: "22-05-2025",
    consultant: "Natalie Hadikin",
    bookingReference: "1372420",
    title: "Mediterranean and Europe",
    contactEmail: "reservations@raileurope.com",
    supplierConsultant: "Rail Europe",
    segments: [
      seg("e1", "TUR", "1372420 / 25-08-2025", "All", "22-05-2025", "", "01-06-2025", "", "MLA", "CTA", "HK", "Europe independent touring"),
      seg("e2", "FLT", "TG / 0472 / Z / E4URY", "All", "19-05-2026", "14:35", "19-05-2026", "20:55", "SYD", "BKK", "HK", "Sydney to Bangkok"),
      seg("e3", "COM", "Lands End Boutique Hotel", "All", "21-05-2026", "15:00", "22-05-2026", "10:00", "MLA", "", "", "Hotel confirmation"),
      seg("e4", "TRN", "M35GDS / 22-05-2025", "All", "04-06-2026", "11:10", "04-06-2026", "13:56", "ROM", "FLR", "HK", "Rail Europe Rome to Florence"),
      seg("e5", "TRN", "M32ZJN / 22-05-2025", "All", "11-06-2026", "09:08", "11-06-2026", "12:50", "FLR", "MIL", "HK", "Rail Europe Florence to Milan"),
      seg("e6", "FLT", "TK / 1369 / J", "All", "21-05-2026", "07:30", "21-05-2026", "08:55", "IST", "MLA", "HK", "Istanbul to Malta"),
      seg("e7", "FLT", "AZ / 1724 / V", "All", "01-06-2026", "11:40", "01-06-2026", "13:10", "CTA", "FCO", "HK", "Catania to Rome"),
      seg("e8", "FLT", "TG / 0941 / Z", "All", "14-06-2026", "14:05", "15-06-2026", "05:55", "MXP", "BKK", "HK", "Milan to Bangkok"),
      seg("e9", "FLT", "TG / 0475 / Z", "All", "15-06-2026", "08:30", "15-06-2026", "20:30", "BKK", "SYD", "HK", "Bangkok to Sydney")
    ]
  }
];

const imports = [
  {
    id: "mail-rail",
    subject: "Your Rail Europe confirmation: Booking reference W631159892",
    from: "Rail Europe - Reservation",
    received: "Thu 5:13 PM",
    body: "Thank you for booking with Rail Europe. Order Summary: Marseille-St-Charles to Paris Gare de Lyon. 2 traveler(s): My Linh Quach, Claudia Lalich. Outbound Saturday 11 July 2026 - 9:03 AM. Ticket refs: JUQK99.",
    extracted: {
      type: "TRN",
      reference: "W631159892 / JUQK99",
      service: "Marseille-St-Charles to Paris Gare de Lyon",
      startDate: "11-07-2026",
      startTime: "09:03",
      finishDate: "11-07-2026",
      finishTime: "",
      startCity: "MRS",
      finishCity: "PAR",
      status: "HK",
      passengers: "All"
    }
  },
  {
    id: "mail-taap",
    subject: "FW: TAAP travel - Please load into Tramada",
    from: "Expedia TAAP",
    received: "Wed 4:18 PM",
    body: "Hotel confirmation for Lands End Boutique Hotel. Check-in 21 May 2026 15:00. Check-out 22 May 2026 10:00. Guest: Kerrie Wood.",
    extracted: {
      type: "HTL",
      reference: "TAAP / LANDSEND",
      service: "Lands End Boutique Hotel",
      startDate: "21-05-2026",
      startTime: "15:00",
      finishDate: "22-05-2026",
      finishTime: "10:00",
      startCity: "MLA",
      finishCity: "MLA",
      status: "HK",
      passengers: "Specific",
      rowClass: "hotel"
    }
  },
  {
    id: "mail-blacklane",
    subject: "Your Blacklane journey confirmation",
    from: "Blacklane",
    received: "Tue 8:09 AM",
    body: "Professional driver transfer. Pickup: CTA Airport. Dropoff: Hotel. Date 01 Jun 2026. Pickup time 09:00. Booking confirmed.",
    extracted: {
      type: "TSF",
      reference: "BLACKLANE / CTA",
      service: "Departure Transfer Hotel to CTA Airport",
      startDate: "01-06-2026",
      startTime: "09:00",
      finishDate: "01-06-2026",
      finishTime: "",
      startCity: "CTA",
      finishCity: "CTA",
      status: "HK",
      passengers: "All"
    }
  }
];

const state = {
  bookingId: "18618",
  view: "itinerary",
  segmentType: "Flight",
  showMode: "Non canceled itinerary segments",
  selectedSegmentId: "s6",
  selectedImportId: "mail-rail",
  sortIntroChoice: "itinerary"
};

const routeViews = new Set([
  "home",
  "bookings",
  "clients",
  "creditors",
  "debtors",
  "reports",
  "summary",
  "profile",
  "references",
  "passengers",
  "lifecycle",
  "content",
  "calypso",
  "itinerary",
  "edit",
  "documents",
  "emaildocs",
  "costing",
  "sort",
  "sortManual",
  "status",
  "quickedit",
  "paydocs",
  "account",
  "invoices",
  "receipts",
  "payments",
  "orderpayments",
  "ledgers",
  "proration",
  "pglog"
]);

const menuGroups = [
  {
    title: "Booking File",
    items: [
      ["summary", "Summary"],
      ["profile", "Profile"],
      ["references", "References"],
      ["passengers", "Passengers"],
      ["lifecycle", "Life Cycle"],
      ["content", "Content Import"],
      ["calypso", "Calypso Content Import"],
      ["itinerary", "Booking Segments"],
      ["documents", "Itinerary"],
      ["costing", "Costing"],
      ["sort", "Sort"],
      ["documents", "Documents"],
      ["emaildocs", "Email Documents"],
      ["status", "Status"],
      ["quickedit", "Quick Edit"],
      ["paydocs", "Pay Now Documents"]
    ]
  },
  {
    title: "Booking Transactions",
    items: [
      ["account", "Account"],
      ["invoices", "Invoices"],
      ["receipts", "Receipts"],
      ["payments", "Payments"],
      ["orderpayments", "Order Form Payments"],
      ["ledgers", "Ledgers"],
      ["proration", "Pro-Ration"],
      ["pglog", "PG Transaction Log"]
    ]
  }
];

function seg(id, type, reference, passengers, startDate, startTime, finishDate, finishTime, startCity, finishCity, status, service, rowClass = "") {
  return {
    id,
    type,
    reference,
    passengers,
    startDate,
    startTime,
    finishDate,
    finishTime,
    startCity,
    finishCity,
    status,
    service,
    rowClass,
    supplier: type === "HTL" ? service : "TYO-INSIDE JAPAN INSID",
    address1: type === "HTL" ? "1-8-3 Marunouchi" : "Suite 302",
    address2: type === "HTL" ? "Tokyo" : "9 Sherwood Road",
    address3: type === "HTL" ? "" : "Toowong",
    state: type === "HTL" ? "Tokyo" : "QLD",
    postcode: type === "HTL" ? "100-8283" : "4066",
    country: type === "HTL" ? "Japan [JP]" : "Australia [AU]",
    phone: type === "HTL" ? "+81 3 6739 7888" : "07 37033838",
    fax: type === "HTL" ? "" : "07 33713016",
    currency: "AUSTRALIAN DOLLAR",
    appliedRate: "1.00",
    supplierRate: "0.00",
    fee: "0.00",
    markup: "0.00",
    tax: "0.00",
    noPassengers: "1",
    duration: "Total"
  };
}

function booking() {
  return bookings.find((item) => item.id === state.bookingId) || bookings[0];
}

function selectedSegment() {
  return booking().segments.find((item) => item.id === state.selectedSegmentId) || booking().segments[0];
}

function selectedImport() {
  return imports.find((item) => item.id === state.selectedImportId) || imports[0];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  renderBookingCard();
  renderMenu();
  renderTopNav();
  renderMain();
}

function renderTopNav() {
  document.querySelectorAll(".primary-nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function renderBookingCard() {
  const current = booking();
  document.getElementById("bookingCard").innerHTML = `
    <div class="booking-details">
      <div class="line">Booking No. <strong>${escapeHtml(current.id)}</strong></div>
      <div class="line">Client:<br><a href="#" data-view="profile">${escapeHtml(current.client)}</a></div>
      <div class="line">Client Name:<br>${escapeHtml(current.clientName)}</div>
      <div class="line">No. of Pax: ${escapeHtml(current.pax)}</div>
      <div class="line">Debtor: <a href="#" data-view="account">${escapeHtml(current.debtor)}</a></div>
      <div class="line">Itinerary:<br>${escapeHtml(current.itinerary)}</div>
      <div class="line">Book. Date: ${escapeHtml(current.bookDate)}</div>
      <div class="line">Dep. Date: ${escapeHtml(current.depDate)}</div>
      <div class="line">Cons 1: ${escapeHtml(current.consultant)}</div>
    </div>
    <div class="left-actions">
      <button type="button" class="small-button" data-view="content">Booking Upload</button>
      <button type="button" class="small-button" data-action="copy-booking">Copy Booking</button>
      <button type="button" class="small-button" data-action="cancel-booking">Cancel Booking</button>
      <button type="button" class="small-button" data-action="diary-note">Add Diary Note</button>
    </div>
    <div class="booked-banner">Booked</div>
  `;
}

function renderMenu() {
  document.getElementById("sidebarMenu").innerHTML = menuGroups.map((group) => `
    <section class="menu-group">
      <span class="menu-title">${escapeHtml(group.title)}</span>
      <ul class="menu-list">
        ${group.items.map(([view, label]) => `
          <li><button type="button" data-view="${escapeHtml(view)}" class="${view === state.view ? "active" : ""}">${escapeHtml(label)}</button></li>
        `).join("")}
      </ul>
    </section>
  `).join("");
}

function renderMain() {
  const area = document.getElementById("workArea");
  if (state.view === "itinerary") area.innerHTML = itineraryView();
  else if (state.view === "edit") area.innerHTML = editView();
  else if (state.view === "sort") area.innerHTML = sortIntroView();
  else if (state.view === "sortManual") area.innerHTML = sortManualView();
  else if (state.view === "documents" || state.view === "emaildocs") area.innerHTML = documentsView();
  else if (state.view === "content" || state.view === "calypso") area.innerHTML = contentImportView();
  else if (state.view === "bookings") area.innerHTML = bookingsView();
  else if (state.view === "profile") area.innerHTML = profileView();
  else if (state.view === "passengers") area.innerHTML = passengersView();
  else if (state.view === "costing" || state.view === "account" || state.view === "invoices" || state.view === "payments") area.innerHTML = costingView();
  else area.innerHTML = placeholderView(state.view);
  wireCurrentView();
}

function pageHeading(title, actions = "") {
  return `
    <div class="page-heading">
      <h1>${escapeHtml(title)}</h1>
      <div class="help-links">Help<br>Knowledge Base</div>
    </div>
    ${actions}
  `;
}

function itineraryView() {
  const current = booking();
  return `
    ${pageHeading("Booking Itinerary - Manually Sorted", `
      <div class="toolbar">
        <label>Show
          <select id="showModeSelect">
            <option ${state.showMode === "Non canceled itinerary segments" ? "selected" : ""}>Non canceled itinerary segments</option>
            <option ${state.showMode === "All itinerary segments" ? "selected" : ""}>All itinerary segments</option>
          </select>
        </label>
        <label>Segment Type
          <select id="segmentTypeSelect">
            ${["Flight", "Tour", "Hotel", "Transfer", "Component", "All"].map((type) => `<option ${state.segmentType === type ? "selected" : ""}>${type}</option>`).join("")}
          </select>
        </label>
        <button class="table-button" type="button" data-action="print-table">Print Table</button>
        <button class="table-button" type="button" data-action="add-segment">Add Segment</button>
      </div>
    `)}
    ${segmentsTable(current.segments, true)}
  `;
}

function segmentsTable(segments, withActions) {
  return `
    <table class="grid-table" id="segmentsTable" data-testid="booking-segments-table">
      <thead>
        <tr>
          ${withActions ? "<th style=\"width:64px\">Action</th>" : "<th style=\"width:40px\">No.</th>"}
          <th style="width:58px">Seq.<br>Type</th>
          <th>Reference</th>
          <th style="width:92px">Passenger</th>
          <th style="width:86px">Start<br>Date</th>
          <th style="width:58px">Time</th>
          <th style="width:86px">Finish<br>Date</th>
          <th style="width:58px">Time</th>
          <th style="width:60px">Start<br>City</th>
          <th style="width:60px">Finish<br>City</th>
          <th style="width:56px">Status</th>
        </tr>
      </thead>
      <tbody>
        ${segments.map((item, index) => segmentRow(item, index, withActions)).join("")}
      </tbody>
    </table>
  `;
}

function segmentRow(item, index, withActions) {
  const className = [item.rowClass, item.id === state.selectedSegmentId ? "selected" : ""].filter(Boolean).join(" ");
  const referenceText = item.reference ? `${escapeHtml(item.reference)}<br>${escapeHtml(item.service)}` : escapeHtml(item.service);
  return `
    <tr class="${escapeHtml(className)}" data-segment-id="${escapeHtml(item.id)}" draggable="${withActions ? "false" : "true"}">
      <td class="${withActions ? "action-cell" : "center"}">
        ${withActions ? `
          <button class="icon-button" type="button" title="Edit segment" data-action="edit-segment" data-id="${escapeHtml(item.id)}">E</button>
          <button class="icon-button" type="button" title="Copy segment" data-action="copy-segment" data-id="${escapeHtml(item.id)}">C</button>
          <button class="icon-button delete" type="button" title="Cancel segment" data-action="delete-segment" data-id="${escapeHtml(item.id)}">X</button>
        ` : index + 1}
      </td>
      <td>${escapeHtml(item.type)}</td>
      <td>${referenceText}</td>
      <td>${escapeHtml(item.passengers)}</td>
      <td>${escapeHtml(item.startDate)}</td>
      <td>${escapeHtml(item.startTime)}</td>
      <td>${escapeHtml(item.finishDate)}</td>
      <td>${escapeHtml(item.finishTime)}</td>
      <td>${escapeHtml(item.startCity)}</td>
      <td>${escapeHtml(item.finishCity)}</td>
      <td>${escapeHtml(item.status)}</td>
    </tr>
  `;
}

function editView() {
  const item = selectedSegment();
  const current = booking();
  return `
    ${pageHeading(`Add / Edit ${segmentKind(item.type)} Segment (245252)`, `
      <div class="form-actions">
        <button class="form-button" type="button" data-action="undo-edit">Undo</button>
        <button class="form-button" type="submit" form="segmentForm">Save</button>
      </div>
    `)}
    <p class="micro-note">Segment Created : Wed 22 Apr 2026 11:00 AM By Clementine<br>Segment Last Updated : Tue 28 Apr 2026 11:59 AM By Clementine</p>
    <form id="segmentForm" data-segment-id="${escapeHtml(item.id)}">
      <div class="two-col">
        <div>
          <fieldset>
            <legend>Passengers</legend>
            <div class="toolbar"><button class="small-button" type="button" data-action="select-passengers">Select</button></div>
            <table class="grid-table">
              <thead><tr><th>Passenger Source</th><th>Passenger Name</th></tr></thead>
              <tbody>
                ${current.passengers.map((name, index) => `<tr><td>${index === 0 ? "QDOHOA_SABRE_9JM1" : "JGLCY_SABRE_9JM1"}</td><td>${escapeHtml(name)}</td></tr>`).join("")}
              </tbody>
            </table>
          </fieldset>
          ${supplierFieldset(item)}
          ${creditorFieldset(item)}
          ${serviceFieldset(item)}
        </div>
        <div>
          ${supplierRatesFieldset(item)}
          ${clientDueFieldset(item)}
        </div>
      </div>
    </form>
  `;
}

function segmentKind(type) {
  const names = { FLT: "Flight", HTL: "Hotel", TSF: "Transfer", TRN: "Train", COM: "Component", TUR: "Tour" };
  return names[type] || "Tour";
}

function supplierFieldset(item) {
  return `
    <fieldset>
      <legend>Supplier Info</legend>
      <div class="form-grid">
        <label for="supplier">Tour Company</label>
        <div><input id="supplier" name="supplier" value="${escapeHtml(item.supplier)}"> <button class="small-button" type="button">Edit</button></div>
        <label for="supplierFree">Tour Company<br>Free Form</label>
        <input id="supplierFree" name="supplierFree" value="">
        <label for="address1">Address 1</label>
        <input id="address1" name="address1" value="${escapeHtml(item.address1)}">
        <label for="address2">Address 2</label>
        <input id="address2" name="address2" value="${escapeHtml(item.address2)}">
        <label for="address3">Address 3<br>Town / Suburb</label>
        <input id="address3" name="address3" value="${escapeHtml(item.address3)}">
        <label for="state">State / Postcode</label>
        <div class="two-inputs"><input id="state" name="state" value="${escapeHtml(item.state)}"><input id="postcode" name="postcode" value="${escapeHtml(item.postcode)}"></div>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option>${escapeHtml(item.country)}</option>
          <option>Australia [AU]</option>
          <option>Japan [JP]</option>
          <option>Italy [IT]</option>
          <option>France [FR]</option>
        </select>
        <label for="phone">Phone No.</label>
        <input id="phone" name="phone" value="${escapeHtml(item.phone)}">
        <label for="fax">Fax No.</label>
        <input id="fax" name="fax" value="${escapeHtml(item.fax)}">
      </div>
    </fieldset>
  `;
}

function creditorFieldset(item) {
  return `
    <fieldset>
      <legend>Creditor Info</legend>
      <label><input type="radio" name="creditorMode" value="different">Different from supplier</label>
      <label><input type="radio" name="creditorMode" value="same" checked>Same as supplier</label>
      <div class="form-grid" style="margin-top:8px">
        <label for="creditor">Creditor Name</label>
        <div><input id="creditor" name="creditor" value="${escapeHtml(item.supplier)}"> <button class="small-button" type="button">Edit</button></div>
      </div>
    </fieldset>
  `;
}

function serviceFieldset(item) {
  return `
    <fieldset>
      <legend>Service Info</legend>
      <div class="form-grid">
        <label for="service">Free Text</label>
        <input id="service" name="service" value="${escapeHtml(item.service)}">
        <label for="startLocation">Start Location</label>
        <select id="startLocation" name="startLocation"><option>${escapeHtml(item.startCity)}</option><option>TYO</option><option>QKW</option><option>UKY</option></select>
        <label>Includes<br>International<br>Travel</label>
        <label><input type="checkbox" name="includesInternational" ${item.type === "FLT" ? "checked" : ""}> Includes</label>
        <label for="startCity">Departure City</label>
        <input id="startCity" name="startCity" value="${escapeHtml(item.startCity)}">
        <label for="startDate">Start Date</label>
        <input id="startDate" name="startDate" value="${escapeHtml(item.startDate)}">
        <label for="startTime">Start Time</label>
        <input id="startTime" name="startTime" value="${escapeHtml(item.startTime)}">
        <label for="finishCity">Finish City</label>
        <input id="finishCity" name="finishCity" value="${escapeHtml(item.finishCity)}">
        <label for="finishDate">Finish Date</label>
        <input id="finishDate" name="finishDate" value="${escapeHtml(item.finishDate)}">
        <label for="finishTime">Finish Time</label>
        <input id="finishTime" name="finishTime" value="${escapeHtml(item.finishTime)}">
        <label for="status">Status</label>
        <select id="status" name="status"><option>HK</option><option>PN</option><option>XX</option></select>
      </div>
    </fieldset>
  `;
}

function supplierRatesFieldset(item) {
  return `
    <fieldset>
      <legend>Supplier Rates</legend>
      <div class="form-grid">
        <label for="travelType">Travel Type</label>
        <select id="travelType" name="travelType"><option>International</option><option>Domestic</option></select>
        <label>Apply GST</label>
        <input type="checkbox" name="applyGst">
        <label>Lock Rates</label>
        <input type="checkbox" name="lockRates">
        <label>Rate Includes<br>GST</label>
        <strong>N</strong>
        <label>Virtuoso</label>
        <input type="checkbox" name="virtuoso">
        <label for="currency">Currency Code</label>
        <div><select id="currency" name="currency"><option>${escapeHtml(item.currency)}</option></select> <button class="small-button" type="button">Apply</button></div>
        <label for="appliedRate">Applied Rate</label>
        <input id="appliedRate" name="appliedRate" value="${escapeHtml(item.appliedRate)}" class="readonly">
        <label for="localRate">Local Rate incl GST</label>
        <input id="localRate" name="localRate" value="0.00">
        <label for="localLate">Local Late/Extra incl GST</label>
        <input id="localLate" name="localLate" value="0.00">
        <label for="audRate">AUD Rate incl GST</label>
        <input id="audRate" name="audRate" value="0.00">
        <label for="audLate">AUD Late/Extra incl GST</label>
        <input id="audLate" name="audLate" value="0.00">
        <label for="noPassengers">No. of Passengers</label>
        <input id="noPassengers" name="noPassengers" value="${escapeHtml(item.noPassengers)}">
        <label for="duration">Duration</label>
        <div class="two-inputs"><select id="duration" name="duration"><option>Total</option><option>Per Day</option></select><input name="durationAmount" value="1"></div>
      </div>
    </fieldset>
  `;
}

function clientDueFieldset(item) {
  const rows = [
    ["supplierRate", "Supplier Rate", item.supplierRate],
    ["supplierRateEx", "Supplier Rate excl GST", "0.00"],
    ["addChargesComm", "Add. Charges excl GST Comm.", "0.00"],
    ["addChargesNet", "Add. Charges excl GST Net Comm.", "0.00"],
    ["fee", "Fee excl GST", item.fee],
    ["fees", "Fees incl GST", "0.00"],
    ["markup", "Markup excl GST", item.markup],
    ["discount", "Discount excl GST", "0.00"],
    ["tax", "Tax excl GST", item.tax],
    ["taxAmount", "Tax Amount GST Free", "0.00"],
    ["gstOnTax", "GST on Tax", "0.00"],
    ["gstOverride", "GST Override", "0.00"],
    ["totalGstDue", "Total GST Due", "0.00"],
    ["clientDue", "Client Due", "0.00"]
  ];
  return `
    <fieldset>
      <legend>Client Due</legend>
      <div class="form-grid">
        ${rows.map(([name, label, value]) => `
          <label for="${name}">${escapeHtml(label)}</label>
          <input id="${name}" name="${name}" value="${escapeHtml(value)}" class="${name === "clientDue" ? "readonly" : ""}">
        `).join("")}
      </div>
    </fieldset>
  `;
}

function sortIntroView() {
  return `
    ${pageHeading("Booking Sort")}
    <section class="panel sort-choice">
      <label><input type="radio" name="sortChoice" value="itinerary" ${state.sortIntroChoice === "itinerary" ? "checked" : ""}>Sort Itinerary Segments</label>
      <label><input type="radio" name="sortChoice" value="costing" ${state.sortIntroChoice === "costing" ? "checked" : ""}>Sort Costing Segments</label>
    </section>
    <div class="sort-actions">
      <button class="form-button" type="button" data-view="itinerary">Cancel</button>
      <button class="form-button" type="button" data-view="sortManual">Continue</button>
    </div>
  `;
}

function sortManualView() {
  const current = booking();
  return `
    ${pageHeading("Itinerary Sort - Manually Sorted")}
    <button class="table-button" type="button" data-action="automatic-sort">Switch to Automatic Sort Order</button>
    <div class="success-strip">Reorder Segments by using Drag'n'Drop</div>
    ${segmentsTable(current.segments, false)}
    <div class="sort-actions">
      <button class="form-button" type="button" data-view="itinerary">Done</button>
    </div>
  `;
}

function documentsView() {
  const current = booking();
  const days = documentDays(current);
  return `
    ${pageHeading("Itinerary Document Preview", `
      <div class="toolbar">
        <button class="table-button" type="button" data-action="print-document">Print</button>
        <button class="table-button" type="button" data-action="email-document">Email Document</button>
      </div>
    `)}
    <article class="document-shell" data-testid="itinerary-document-preview">
      <h2>${escapeHtml(current.title)}</h2>
      <div class="document-meta">
        <div>
          <p><strong>Mosman Travel</strong></p>
          <h3>Passengers</h3>
          <p>${current.passengers.map(escapeHtml).join("<br>")}</p>
        </div>
        <div>
          <p><strong>Booking Reference:</strong> ${escapeHtml(current.bookingReference)}</p>
          <p><strong>Start Date:</strong> ${escapeHtml(current.depDate.replaceAll("-", "/"))}</p>
          <p><strong>Consultant:</strong> ${escapeHtml(current.supplierConsultant)}</p>
          <p><strong>Email:</strong><br>${escapeHtml(current.contactEmail)}</p>
        </div>
      </div>
      <h3 class="doc-section-title">Itinerary in brief</h3>
      ${days.map((day, index) => `
        <section>
          <h4>${escapeHtml(day.heading)}</h4>
          <div class="day-row">
            <div class="day-label">Day ${index + 1}</div>
            <ul>${day.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </div>
        </section>
      `).join("")}
    </article>
  `;
}

function documentDays(current) {
  if (current.id === "18618") {
    return [
      { heading: "Saturday 24 Oct 2026", items: ["Own Arrangements - Flight QF59 from Sydney Airport to Haneda Airport Arr. 20:10", "Private Car from Narita Airport to Tokyo Hotel", "Own Tokyo Hotel arrangement - Shangri-La Tokyo (24-27 Oct)"] },
      { heading: "Sunday 25 Oct 2026", items: ["Full Day Private Guide Service in Tokyo", "Suggested Guided Sightseeing in Tokyo: Traditional and Gardens"] },
      { heading: "Monday 26 Oct 2026", items: ["Full Day Private Guide Service for Hakone & Mount Fuji", "Private Car for Mount Fuji & Hakone Sightseeing"] },
      { heading: "Tuesday 27 Oct 2026", items: ["Private Car from Hotel to Tokyo Station", "Transfer by train from Tokyo to Kanazawa", "Kanazawa | Hyatt Centric Kanazawa"] },
      { heading: "Wednesday 28 Oct 2026", items: ["Full Day Private Guide Service in Kanazawa", "Kanazawa | Hyatt Centric Kanazawa"] }
    ];
  }
  return [
    { heading: "Friday 22 May 2026", items: ["Arrival in Malta", "Lands End Boutique Hotel"] },
    { heading: "Monday 01 Jun 2026", items: ["Departure Transfer Hotel to CTA Airport", "Flight Catania to Rome"] },
    { heading: "Thursday 04 Jun 2026", items: ["Rail Europe Rome to Florence", "Florence independent arrangements"] }
  ];
}

function contentImportView() {
  const mail = selectedImport();
  return `
    ${pageHeading("Content Import", `
      <div class="toolbar">
        <button class="table-button" type="button" data-action="refresh-mail">Refresh</button>
        <button class="table-button" type="button" data-action="extract-import">Create Segment</button>
      </div>
    `)}
    <div class="screen-split">
      <section>
        <h2 class="hidden">Mail source</h2>
        <div class="mail-window">
          <div class="mail-folders">
            <strong>Favorites</strong>
            <p>Inbox <strong>2</strong></p>
            <p>Sent Items</p>
            <p>Deleted Items 429</p>
            <hr>
            <p>Clementine@mosmantravel</p>
            <p>bali</p>
            <p>marketing</p>
            <p>railways tickets</p>
            <p>blacklane</p>
            <p>go insurance</p>
          </div>
          <div class="mail-list">
            ${imports.map((item) => `
              <button class="mail-row ${item.id === state.selectedImportId ? "active" : ""}" type="button" data-import-id="${escapeHtml(item.id)}">
                <span class="mail-subject">${escapeHtml(item.subject)}</span>
                <span class="mail-from">${escapeHtml(item.from)} - ${escapeHtml(item.received)}</span>
              </button>
            `).join("")}
          </div>
          <div class="mail-preview">
            <h3>${escapeHtml(mail.subject)}</h3>
            <p><strong>${escapeHtml(mail.from)}</strong></p>
            <p>${escapeHtml(mail.body)}</p>
          </div>
        </div>
      </section>
      <section class="extract-card">
        <h2>Extracted Tramada Fields</h2>
        <p>
          <span class="pill">${escapeHtml(mail.extracted.type)}</span>
          <span class="pill">${escapeHtml(mail.extracted.status)}</span>
          <span class="pill">${escapeHtml(mail.extracted.passengers)}</span>
        </p>
        <div class="form-grid">
          <label>Reference</label><input readonly value="${escapeHtml(mail.extracted.reference)}">
          <label>Free Text</label><input readonly value="${escapeHtml(mail.extracted.service)}">
          <label>Start Date</label><input readonly value="${escapeHtml(mail.extracted.startDate)}">
          <label>Start Time</label><input readonly value="${escapeHtml(mail.extracted.startTime)}">
          <label>Finish Date</label><input readonly value="${escapeHtml(mail.extracted.finishDate)}">
          <label>Finish Time</label><input readonly value="${escapeHtml(mail.extracted.finishTime)}">
          <label>Start City</label><input readonly value="${escapeHtml(mail.extracted.startCity)}">
          <label>Finish City</label><input readonly value="${escapeHtml(mail.extracted.finishCity)}">
        </div>
        <p class="micro-note">Use this screen to test the email-to-Tramada handoff without touching the real ASP system.</p>
        <button class="form-button" type="button" data-action="extract-import">Add to Booking ${escapeHtml(booking().id)}</button>
      </section>
    </div>
  `;
}

function bookingsView() {
  return `
    ${pageHeading("Booking Search")}
    <section class="panel">
      <div class="form-grid">
        <label for="bookingSearch">Booking No.</label>
        <input id="bookingSearch" value="${escapeHtml(state.bookingId)}">
        <label for="clientSearch">Client</label>
        <input id="clientSearch" value="">
      </div>
      <div class="form-actions">
        <button class="form-button" type="button" data-action="run-booking-search">Search</button>
      </div>
    </section>
    <table class="grid-table">
      <thead><tr><th>Booking No.</th><th>Client</th><th>Client Name</th><th>Dep. Date</th><th>Consultant</th><th>Status</th></tr></thead>
      <tbody>
        ${bookings.map((item) => `
          <tr data-booking-id="${escapeHtml(item.id)}">
            <td><button class="link-button" type="button" data-action="open-booking" data-id="${escapeHtml(item.id)}">${escapeHtml(item.id)}</button></td>
            <td>${escapeHtml(item.client)}</td>
            <td>${escapeHtml(item.clientName)}</td>
            <td>${escapeHtml(item.depDate)}</td>
            <td>${escapeHtml(item.consultant)}</td>
            <td>Booked</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function profileView() {
  const current = booking();
  return `
    ${pageHeading("Client Profile")}
    <section class="panel">
      <div class="two-col">
        <div class="form-grid">
          <label>Client</label><input value="${escapeHtml(current.client)}">
          <label>Client Name</label><input value="${escapeHtml(current.clientName)}">
          <label>Debtor</label><input value="${escapeHtml(current.debtor)}">
          <label>Consultant</label><input value="${escapeHtml(current.consultant)}">
        </div>
        <div class="form-grid">
          <label>Booking Reference</label><input value="${escapeHtml(current.bookingReference)}">
          <label>Book Date</label><input value="${escapeHtml(current.bookDate)}">
          <label>Dep. Date</label><input value="${escapeHtml(current.depDate)}">
          <label>Status</label><input value="Booked" class="readonly">
        </div>
      </div>
    </section>
  `;
}

function passengersView() {
  const current = booking();
  return `
    ${pageHeading("Passengers")}
    <table class="grid-table">
      <thead><tr><th>No.</th><th>Passenger Name</th><th>Passenger Source</th><th>Primary</th><th>Status</th></tr></thead>
      <tbody>
        ${current.passengers.map((name, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(name)}</td>
            <td>${index === 0 ? "QDOHOA_SABRE_9JM1" : "JGLCY_SABRE_9JM1"}</td>
            <td>${index === 0 ? "Y" : "N"}</td>
            <td>Active</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function costingView() {
  const current = booking();
  const totalSegments = current.segments.length;
  const confirmed = current.segments.filter((item) => item.status === "HK").length;
  return `
    ${pageHeading("Booking Account")}
    <div class="summary-grid">
      <div class="metric"><strong>${totalSegments}</strong>Segments</div>
      <div class="metric"><strong>${confirmed}</strong>Confirmed HK</div>
      <div class="metric"><strong>${escapeHtml(current.pax)}</strong>Passengers</div>
      <div class="metric"><strong>0.00</strong>Client Due</div>
    </div>
    <table class="grid-table">
      <thead><tr><th>Seq.</th><th>Type</th><th>Supplier</th><th>Supplier Rate</th><th>Fee</th><th>Markup</th><th>Client Due</th></tr></thead>
      <tbody>
        ${current.segments.slice(0, 14).map((item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(item.type)}</td>
            <td>${escapeHtml(item.supplier)}</td>
            <td>${escapeHtml(item.supplierRate)}</td>
            <td>${escapeHtml(item.fee)}</td>
            <td>${escapeHtml(item.markup)}</td>
            <td>0.00</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function placeholderView(name) {
  return `
    ${pageHeading(titleCase(name))}
    <section class="panel">
      <p>This Tramada test replica includes the visible shell and a working placeholder for this menu area.</p>
      <p>Use Booking Segments, Sort, Documents, Content Import, Profile, Passengers, or Booking Account for the interactive workflows from the video.</p>
    </section>
  `;
}

function titleCase(value) {
  return String(value || "Home").replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}

function wireCurrentView() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      setView(button.dataset.view);
    });
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      handleAction(button.dataset.action, button);
    });
  });

  const showMode = document.getElementById("showModeSelect");
  if (showMode) showMode.addEventListener("change", () => {
    state.showMode = showMode.value;
    toast(`Show changed to ${showMode.value}`);
  });

  const segmentType = document.getElementById("segmentTypeSelect");
  if (segmentType) segmentType.addEventListener("change", () => {
    state.segmentType = segmentType.value;
    toast(`Segment type changed to ${segmentType.value}`);
  });

  const form = document.getElementById("segmentForm");
  if (form) form.addEventListener("submit", saveSegmentForm);

  document.querySelectorAll("input[name='sortChoice']").forEach((radio) => {
    radio.addEventListener("change", () => {
      state.sortIntroChoice = radio.value;
    });
  });

  document.querySelectorAll(".mail-row").forEach((row) => {
    row.addEventListener("click", () => {
      state.selectedImportId = row.dataset.importId;
      renderMain();
    });
  });

  wireDragSort();
}

function setView(view) {
  state.view = view;
  if (routeViews.has(view)) {
    history.replaceState(null, "", `#${view}`);
  }
  if (view === "itinerary") {
    const first = booking().segments[0];
    state.selectedSegmentId = state.selectedSegmentId || first.id;
  }
  render();
  document.getElementById("workArea").focus({ preventScroll: true });
}

function handleAction(action, source) {
  const current = booking();
  if (action === "edit-segment") {
    state.selectedSegmentId = source.dataset.id;
    setView("edit");
  }
  if (action === "copy-segment") {
    const original = current.segments.find((item) => item.id === source.dataset.id);
    if (!original) return;
    const copy = { ...original, id: `copy-${Date.now()}`, reference: `${original.reference} COPY` };
    current.segments.splice(current.segments.indexOf(original) + 1, 0, copy);
    state.selectedSegmentId = copy.id;
    render();
    toast("Segment copied");
  }
  if (action === "delete-segment") {
    const item = current.segments.find((segment) => segment.id === source.dataset.id);
    if (!item) return;
    item.status = "XX";
    render();
    toast("Segment status changed to XX");
  }
  if (action === "add-segment") {
    const newSegment = seg(`new-${Date.now()}`, "TUR", "", "All", current.depDate, "09:00", current.depDate, "17:00", "TYO", "TYO", "HK", "New Tour Segment");
    current.segments.unshift(newSegment);
    state.selectedSegmentId = newSegment.id;
    setView("edit");
  }
  if (action === "undo-edit") {
    setView("itinerary");
  }
  if (action === "automatic-sort") {
    current.segments.sort((a, b) => dateKey(a.startDate, a.startTime).localeCompare(dateKey(b.startDate, b.startTime)));
    render();
    toast("Segments sorted by start date");
  }
  if (action === "extract-import") {
    const mail = selectedImport();
    const item = seg(
      `import-${Date.now()}`,
      mail.extracted.type,
      mail.extracted.reference,
      mail.extracted.passengers,
      mail.extracted.startDate,
      mail.extracted.startTime,
      mail.extracted.finishDate,
      mail.extracted.finishTime,
      mail.extracted.startCity,
      mail.extracted.finishCity,
      mail.extracted.status,
      mail.extracted.service,
      mail.extracted.rowClass || ""
    );
    current.segments.push(item);
    state.selectedSegmentId = item.id;
    setView("edit");
    toast("Imported confirmation added as a segment");
  }
  if (action === "open-booking") {
    state.bookingId = source.dataset.id;
    state.selectedSegmentId = booking().segments[0].id;
    setView("itinerary");
    toast(`Opened booking ${state.bookingId}`);
  }
  if (action === "print-table" || action === "print-document") {
    toast("Print preview requested");
  }
  if (action === "email-document") {
    toast("Email document queued");
  }
  if (action === "refresh-mail") {
    toast("Mail source refreshed");
  }
  if (action === "copy-booking") {
    toast("Booking copied to local test data");
  }
  if (action === "cancel-booking") {
    toast("Booking cancel action captured");
  }
  if (action === "diary-note") {
    toast("Diary note added");
  }
  if (action === "run-booking-search") {
    toast("Search completed");
  }
}

function saveSegmentForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const item = selectedSegment();
  item.supplier = data.get("supplier");
  item.address1 = data.get("address1");
  item.address2 = data.get("address2");
  item.address3 = data.get("address3");
  item.state = data.get("state");
  item.postcode = data.get("postcode");
  item.country = data.get("country");
  item.phone = data.get("phone");
  item.fax = data.get("fax");
  item.service = data.get("service");
  item.startCity = data.get("startCity");
  item.startDate = data.get("startDate");
  item.startTime = data.get("startTime");
  item.finishCity = data.get("finishCity");
  item.finishDate = data.get("finishDate");
  item.finishTime = data.get("finishTime");
  item.status = data.get("status");
  item.noPassengers = data.get("noPassengers");
  item.supplierRate = data.get("supplierRate") || item.supplierRate;
  item.fee = data.get("fee") || item.fee;
  item.markup = data.get("markup") || item.markup;
  item.tax = data.get("tax") || item.tax;
  setView("itinerary");
  toast("Segment saved");
}

function wireDragSort() {
  const rows = document.querySelectorAll("#segmentsTable tbody tr[draggable='true']");
  if (!rows.length) return;
  let draggedId = null;

  rows.forEach((row) => {
    row.addEventListener("dragstart", () => {
      draggedId = row.dataset.segmentId;
      row.classList.add("dragging");
    });
    row.addEventListener("dragend", () => {
      row.classList.remove("dragging");
    });
    row.addEventListener("dragover", (event) => {
      event.preventDefault();
    });
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      const targetId = row.dataset.segmentId;
      if (!draggedId || draggedId === targetId) return;
      reorderSegments(draggedId, targetId);
      renderMain();
      toast("Segment order updated");
    });
  });
}

function reorderSegments(draggedId, targetId) {
  const segments = booking().segments;
  const from = segments.findIndex((item) => item.id === draggedId);
  const to = segments.findIndex((item) => item.id === targetId);
  if (from < 0 || to < 0) return;
  const [moved] = segments.splice(from, 1);
  segments.splice(to, 0, moved);
}

function dateKey(date, time) {
  const [day, month, year] = String(date).split("-");
  return `${year || "0000"}-${month || "00"}-${day || "00"} ${time || "00:00"}`;
}

function toast(message) {
  const node = document.getElementById("statusToast");
  node.textContent = message;
  node.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => node.classList.remove("show"), 1800);
}

function applyInitialRoute() {
  const searchParams = new URLSearchParams(window.location.search);
  const requestedView = searchParams.get("view") || window.location.hash.replace("#", "");
  const requestedBooking = searchParams.get("booking");
  if (bookings.some((item) => item.id === requestedBooking)) {
    state.bookingId = requestedBooking;
    state.selectedSegmentId = booking().segments[0].id;
  }
  if (routeViews.has(requestedView)) {
    state.view = requestedView;
  }
}

window.addEventListener("hashchange", () => {
  const requestedView = window.location.hash.replace("#", "");
  if (routeViews.has(requestedView) && requestedView !== state.view) {
    state.view = requestedView;
    render();
  }
});

document.getElementById("logoutButton").addEventListener("click", () => toast("Logout captured in test replica"));
applyInitialRoute();
render();
