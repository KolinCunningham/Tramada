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
  selectedSegmentId: "",
  selectedImportId: "mail-rail",
  sortIntroChoice: "itinerary"
};

const browserStorageKey = "tramadaReplicaState";
const persistence = {
  loaded: false,
  serverReady: false,
  saveTimer: 0
};

Object.assign(bookings[0], {
  client: "CLIENT/NEW",
  clientName: "Imported Client",
  passengers: [],
  pax: 0,
  itinerary: "Imported itinerary",
  bookDate: "",
  depDate: "",
  bookingReference: "",
  title: "Imported Booking",
  contactEmail: "",
  supplierConsultant: "",
  status: "Booked",
  priority: "Normal",
  statusNote: "",
  profileNotes: "",
  quickNote: "",
  references: [],
  lifecycle: [],
  documents: [],
  transactions: [],
  segments: [blankSegment("blank-1")]
});
state.selectedSegmentId = "blank-1";
bookings.forEach(ensureBookingShape);

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

function blankSegment(id = `new-${Date.now()}`, type = "") {
  return seg(id, type, "", "", "", "", "", "", "", "", "", "");
}

function ensureBookingShape(item) {
  item.id = item.id || `booking-${Date.now()}`;
  item.client = item.client || "CLIENT/NEW";
  item.clientName = item.clientName || "Imported Client";
  item.passengers = Array.isArray(item.passengers) ? item.passengers : [];
  item.pax = item.passengers.length;
  item.debtor = item.debtor || "Retail Client";
  item.itinerary = item.itinerary || item.title || "Imported itinerary";
  item.bookDate = item.bookDate || "";
  item.depDate = item.depDate || "";
  item.consultant = item.consultant || "";
  item.bookingReference = item.bookingReference || "";
  item.title = item.title || "Imported Booking";
  item.contactEmail = item.contactEmail || "";
  item.supplierConsultant = item.supplierConsultant || "";
  item.status = item.status || "Booked";
  item.priority = item.priority || "Normal";
  item.statusNote = item.statusNote || "";
  item.profileNotes = item.profileNotes || "";
  item.quickNote = item.quickNote || "";
  item.references = Array.isArray(item.references) ? item.references : [];
  item.lifecycle = Array.isArray(item.lifecycle) ? item.lifecycle : [];
  item.documents = Array.isArray(item.documents) ? item.documents : [];
  item.transactions = Array.isArray(item.transactions) ? item.transactions : [];
  item.segments = Array.isArray(item.segments) && item.segments.length ? item.segments : [blankSegment("blank-1")];
  item.segments.forEach((segment) => {
    segment.id = segment.id || `segment-${Date.now()}`;
    segment.type = segment.type || "";
    segment.reference = segment.reference || "";
    segment.passengers = segment.passengers || "";
    segment.startDate = segment.startDate || "";
    segment.startTime = segment.startTime || "";
    segment.finishDate = segment.finishDate || "";
    segment.finishTime = segment.finishTime || "";
    segment.startCity = segment.startCity || "";
    segment.finishCity = segment.finishCity || "";
    segment.status = segment.status || "";
    segment.service = segment.service || "";
    segment.supplier = segment.supplier || "";
    segment.supplierRate = segment.supplierRate || "0.00";
    segment.fee = segment.fee || "0.00";
    segment.markup = segment.markup || "0.00";
    segment.tax = segment.tax || "0.00";
  });
  return item;
}

function replaceBookings(nextBookings) {
  if (Array.isArray(nextBookings) && nextBookings.length) {
    bookings.splice(0, bookings.length, ...nextBookings.map(ensureBookingShape));
  } else {
    bookings.forEach(ensureBookingShape);
  }
  if (!bookings.some((item) => item.id === state.bookingId)) {
    state.bookingId = bookings[0]?.id || "18618";
  }
  state.selectedSegmentId = booking().segments[0]?.id || "";
}

function booking() {
  return ensureBookingShape(bookings.find((item) => item.id === state.bookingId) || bookings[0]);
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

let airportSearchRows = null;
let airportClickWired = false;

function airportInput(id, name, value, label, compact = false) {
  return `
    <div class="airport-field ${compact ? "compact" : ""}">
      <input id="${escapeHtml(id)}" name="${escapeHtml(name)}" value="${escapeHtml(value)}" autocomplete="off" data-airport-input aria-label="${escapeHtml(label)}">
      <div class="airport-results" data-airport-results role="listbox"></div>
    </div>
  `;
}

function dateInput(id, name, value, label, compact = false) {
  return `<input class="${compact ? "compact-date" : ""}" id="${escapeHtml(id)}" name="${escapeHtml(name)}" type="date" value="${escapeHtml(toDateInputValue(value))}" aria-label="${escapeHtml(label)}">`;
}

function timeInput(id, name, value, label, required = false) {
  return `<input id="${escapeHtml(id)}" name="${escapeHtml(name)}" type="time" step="60" value="${escapeHtml(normaliseTime(value))}" pattern="[0-2][0-9]:[0-5][0-9]" ${required ? "required" : ""} aria-label="${escapeHtml(label)}">`;
}

function toDateInputValue(value) {
  const text = String(value || "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) return text;
  const match = text.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/);
  if (!match) return "";
  const [, day, month, year] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function fromDateInputValue(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return text.replaceAll("/", "-");
  const [, year, month, day] = match;
  return `${day}-${month}-${year}`;
}

function normaliseTime(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const match = text.match(/^([01]?\d|2[0-3])(?::?([0-5]\d))$/);
  if (!match) return text;
  return `${match[1].padStart(2, "0")}:${match[2] || "00"}`;
}

function isValidTwentyFourHourTime(value) {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(String(value || "").trim());
}

function validateSegmentTimes(startTime, finishTime) {
  if (!isValidTwentyFourHourTime(startTime) || !isValidTwentyFourHourTime(finishTime)) {
    toast("Use 24 hour times for start and finish, e.g. 09:30 or 17:45");
    return false;
  }
  return true;
}

function airports() {
  if (!airportSearchRows) {
    airportSearchRows = (window.TRAMADA_AIRPORTS || []).map(([code, city, name, country, codes, type, scheduled]) => {
      const search = `${code} ${codes} ${city} ${name} ${country}`.toLowerCase();
      return { code, city, name, country, codes, type, scheduled, search };
    });
  }
  return airportSearchRows;
}

function findAirports(query, limit = 12) {
  const term = String(query || "").trim().toLowerCase();
  if (!term) return [];
  const upper = term.toUpperCase();
  return airports()
    .map((airport) => {
      const codes = String(airport.codes || "").split(/\s+/);
      let score = -1;
      if (airport.code === upper) score = 0;
      else if (codes.includes(upper)) score = 1;
      else if (airport.code.startsWith(upper)) score = 2;
      else if (String(airport.city || "").toLowerCase().startsWith(term)) score = 3;
      else if (String(airport.name || "").toLowerCase().startsWith(term)) score = 4;
      else if (airport.search.includes(term)) score = 5;
      if (score < 0) return null;
      const scheduledBonus = airport.scheduled ? 0 : 1;
      const typeScore = { large: 0, medium: 1, small: 2, seaplane: 3 }[airport.type] ?? 4;
      return { airport, score, scheduledBonus, typeScore };
    })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score || a.scheduledBonus - b.scheduledBonus || a.typeScore - b.typeScore || a.airport.code.localeCompare(b.airport.code))
    .slice(0, limit)
    .map((match) => match.airport);
}

function airportOptionMarkup(airport) {
  const place = [airport.city, airport.country].filter(Boolean).join(", ");
  const meta = [airport.name, airport.type, airport.scheduled ? "scheduled" : "private/general"].filter(Boolean).join(" · ");
  return `
    <button type="button" class="airport-option" data-airport-value="${escapeHtml(airport.code)}" title="${escapeHtml(meta)}">
      <strong>${escapeHtml(airport.code)}</strong>
      <span>${escapeHtml(place || airport.name)}</span>
      <small>${escapeHtml(meta)}</small>
    </button>
  `;
}

function wireAirportFields() {
  if (!airportClickWired) {
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".airport-field")) closeAirportResults();
    });
    airportClickWired = true;
  }

  document.querySelectorAll("[data-airport-input]").forEach((input) => {
    const update = () => renderAirportResults(input);
    input.addEventListener("input", update);
    input.addEventListener("focus", update);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeAirportResults(input);
    });
  });
}

function renderAirportResults(input) {
  const panel = input.parentElement.querySelector("[data-airport-results]");
  const matches = findAirports(input.value);
  if (!panel || !matches.length) {
    closeAirportResults(input);
    return;
  }
  panel.innerHTML = matches.map(airportOptionMarkup).join("");
  panel.classList.add("show");
  panel.querySelectorAll(".airport-option").forEach((button) => {
    button.addEventListener("mousedown", (event) => event.preventDefault());
    button.addEventListener("click", () => {
      input.value = button.dataset.airportValue;
      input.dispatchEvent(new Event("change", { bubbles: true }));
      closeAirportResults(input);
    });
  });
}

function closeAirportResults(input) {
  const panels = input
    ? [input.parentElement.querySelector("[data-airport-results]")]
    : Array.from(document.querySelectorAll("[data-airport-results]"));
  panels.filter(Boolean).forEach((panel) => {
    panel.classList.remove("show");
    panel.innerHTML = "";
  });
}

function stateSnapshot() {
  return {
    savedAt: new Date().toISOString(),
    bookings
  };
}

async function loadPersistedState() {
  updateSaveStatus("Loading saved data...");
  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      persistence.serverReady = true;
      if (Array.isArray(data.bookings) && data.bookings.length) {
        replaceBookings(data.bookings);
        updateSaveStatus("Loaded from server");
        return;
      }
    }
  } catch (error) {
    persistence.serverReady = false;
  }

  const saved = window.localStorage.getItem(browserStorageKey);
  if (saved) {
    try {
      replaceBookings(JSON.parse(saved).bookings);
      updateSaveStatus("Loaded from browser");
      return;
    } catch (error) {
      window.localStorage.removeItem(browserStorageKey);
    }
  }
  replaceBookings(bookings);
  updateSaveStatus("Ready to save");
}

function persistData(reason = "Saved") {
  if (!persistence.loaded) return;
  const payload = stateSnapshot();
  window.localStorage.setItem(browserStorageKey, JSON.stringify(payload));
  window.clearTimeout(persistence.saveTimer);
  persistence.saveTimer = window.setTimeout(() => saveToServer(payload, reason), 150);
  updateSaveStatus("Saving...");
}

async function saveToServer(payload, reason) {
  if (!persistence.serverReady) {
    updateSaveStatus("Saved in browser");
    return;
  }
  try {
    const response = await fetch("/api/state", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    updateSaveStatus(`${reason} to server`);
  } catch (error) {
    persistence.serverReady = false;
    updateSaveStatus("Server unavailable, saved in browser");
  }
}

function updateSaveStatus(message) {
  const node = document.getElementById("saveStatus");
  if (node) node.textContent = message;
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
  if (state.view === "summary") area.innerHTML = summaryView();
  else if (state.view === "itinerary") area.innerHTML = itineraryView();
  else if (state.view === "edit") area.innerHTML = editView();
  else if (state.view === "sort") area.innerHTML = sortIntroView();
  else if (state.view === "sortManual") area.innerHTML = sortManualView();
  else if (state.view === "documents") area.innerHTML = documentsView("Itinerary Document Preview");
  else if (state.view === "emaildocs") area.innerHTML = documentsView("Email Documents");
  else if (state.view === "content" || state.view === "calypso") area.innerHTML = contentImportView();
  else if (state.view === "bookings") area.innerHTML = bookingsView();
  else if (state.view === "profile") area.innerHTML = profileView();
  else if (state.view === "references") area.innerHTML = referencesView();
  else if (state.view === "passengers") area.innerHTML = passengersView();
  else if (state.view === "lifecycle") area.innerHTML = lifecycleView();
  else if (state.view === "status") area.innerHTML = statusView();
  else if (state.view === "quickedit") area.innerHTML = quickEditView();
  else if (state.view === "paydocs") area.innerHTML = documentsView("Pay Now Documents");
  else if (state.view === "costing") area.innerHTML = costingView();
  else if (["account", "invoices", "receipts", "payments", "orderpayments", "ledgers", "proration", "pglog"].includes(state.view)) area.innerHTML = transactionView(state.view);
  else if (["home", "clients", "creditors", "debtors", "reports"].includes(state.view)) area.innerHTML = searchShellView(state.view);
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

function summaryView() {
  const current = booking();
  return `
    ${pageHeading("Booking Summary", `
      <div class="form-actions">
        <button class="form-button" type="submit" form="bookingSummaryForm">Save Summary</button>
      </div>
    `)}
    <form id="bookingSummaryForm" data-booking-details>
      <section class="panel">
        <div class="two-col">
          <div class="form-grid">
            <label for="client">Client</label><input id="client" name="client" value="${escapeHtml(current.client)}">
            <label for="clientName">Client Name</label><input id="clientName" name="clientName" value="${escapeHtml(current.clientName)}">
            <label for="debtor">Debtor</label><input id="debtor" name="debtor" value="${escapeHtml(current.debtor)}">
            <label for="itinerary">Itinerary</label><input id="itinerary" name="itinerary" value="${escapeHtml(current.itinerary)}">
            <label for="title">Booking Title</label><input id="title" name="title" value="${escapeHtml(current.title)}">
          </div>
          <div class="form-grid">
            <label for="bookingReference">Booking Ref.</label><input id="bookingReference" name="bookingReference" value="${escapeHtml(current.bookingReference)}">
            <label for="bookDate">Book Date</label><input id="bookDate" name="bookDate" value="${escapeHtml(current.bookDate)}">
            <label for="depDate">Dep. Date</label><input id="depDate" name="depDate" value="${escapeHtml(current.depDate)}">
            <label for="consultant">Consultant</label><input id="consultant" name="consultant" value="${escapeHtml(current.consultant)}">
            <label for="status">Status</label>
            <select id="status" name="status">${["Booked", "Pending", "Ticketed", "Cancelled"].map((value) => `<option ${current.status === value ? "selected" : ""}>${value}</option>`).join("")}</select>
          </div>
        </div>
      </section>
    </form>
    <div class="summary-grid">
      <div class="metric"><strong>${escapeHtml(current.segments.length)}</strong>Segments</div>
      <div class="metric"><strong>${escapeHtml(current.passengers.length)}</strong>Passengers</div>
      <div class="metric"><strong>${escapeHtml(current.references.length)}</strong>References</div>
      <div class="metric"><strong>${escapeHtml(current.transactions.length)}</strong>Transactions</div>
    </div>
  `;
}

function searchShellView(view) {
  const labels = {
    home: "Home",
    clients: "Client Search",
    creditors: "Creditor Search",
    debtors: "Debtor Search",
    reports: "Reports"
  };
  const current = booking();
  return `
    ${pageHeading(labels[view] || titleCase(view))}
    <section class="panel">
      <div class="form-grid">
        <label>Current Booking</label><input readonly value="${escapeHtml(current.id)} - ${escapeHtml(current.clientName)}">
        <label>Search</label><input value="">
        <label>Result</label><input readonly value="This replica keeps searches inside the current test booking file.">
      </div>
    </section>
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
  if (!item) {
    return `
      ${pageHeading("Add / Edit Segment")}
      <section class="panel">
        <p>No segment is selected.</p>
        <button class="form-button" type="button" data-action="add-segment">Add Segment</button>
      </section>
    `;
  }
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
  return names[type] || "Segment";
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
        <label for="reference">Reference</label>
        <input id="reference" name="reference" value="${escapeHtml(item.reference)}">
        <label for="service">Free Text</label>
        <input id="service" name="service" value="${escapeHtml(item.service)}">
        <label for="startLocation">Start Location</label>
        <select id="startLocation" name="startLocation"><option>${escapeHtml(item.startCity)}</option><option>TYO</option><option>QKW</option><option>UKY</option></select>
        <label>Includes<br>International<br>Travel</label>
        <label><input type="checkbox" name="includesInternational" ${item.type === "FLT" ? "checked" : ""}> Includes</label>
        <label for="startCity">Departure City</label>
        ${airportInput("startCity", "startCity", item.startCity, "Departure City")}
        <label for="startDate">Start Date</label>
        ${dateInput("startDate", "startDate", item.startDate, "Start Date")}
        <label for="startTime">Start Time</label>
        ${timeInput("startTime", "startTime", item.startTime, "Start Time", true)}
        <label for="finishCity">Finish City</label>
        ${airportInput("finishCity", "finishCity", item.finishCity, "Finish City")}
        <label for="finishDate">Finish Date</label>
        ${dateInput("finishDate", "finishDate", item.finishDate, "Finish Date")}
        <label for="finishTime">Finish Time</label>
        ${timeInput("finishTime", "finishTime", item.finishTime, "Finish Time", true)}
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

function documentsView(title = "Itinerary Document Preview") {
  const current = booking();
  const days = documentDays(current);
  return `
    ${pageHeading(title, `
      <div class="toolbar">
        <button class="table-button" type="button" data-action="print-document">Print</button>
        <button class="table-button" type="button" data-action="email-document">Email Document</button>
        <button class="table-button" type="submit" form="documentListForm">Save Changes</button>
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
    <section class="panel" style="margin-top:14px">
      <form id="documentForm">
        <div class="form-grid">
          <label for="documentType">Document Type</label>
          <select id="documentType" name="type"><option>Itinerary</option><option>Email</option><option>Voucher</option><option>Pay Now</option><option>Supplier PDF</option></select>
          <label for="documentTitle">Title</label><input id="documentTitle" name="title" value="">
          <label for="documentNote">Notes</label><input id="documentNote" name="note" value="">
        </div>
        <div class="record-actions"><button class="form-button" type="submit">Add Document Record</button></div>
      </form>
    </section>
    <form id="documentListForm">
      <table class="grid-table">
        <thead><tr><th style="width:70px">Action</th><th>Type</th><th>Title</th><th>Notes</th></tr></thead>
        <tbody>
          ${current.documents.map((item) => `
            <tr>
              <td><button class="icon-button delete" type="button" data-action="delete-document" data-id="${escapeHtml(item.id)}">X</button></td>
              <td><input name="${escapeHtml(item.id)}__type" value="${escapeHtml(item.type)}"></td>
              <td><input name="${escapeHtml(item.id)}__title" value="${escapeHtml(item.title)}"></td>
              <td><input name="${escapeHtml(item.id)}__note" value="${escapeHtml(item.note)}"></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </form>
  `;
}

function documentDays(current) {
  const datedSegments = current.segments.filter((item) => item.service || item.reference || item.startDate);
  if (!datedSegments.length) return [{ heading: "No itinerary loaded", items: ["Add booking segments or import a client PDF to build the document preview."] }];
  const grouped = datedSegments.reduce((days, item) => {
    const heading = readableDate(item.startDate || item.finishDate || "");
    const key = heading || "Unscheduled";
    if (!days[key]) days[key] = [];
    days[key].push(`${item.type || "SEG"} ${item.service || item.reference || "Untitled segment"}`);
    return days;
  }, {});
  return Object.entries(grouped).map(([heading, items]) => ({ heading, items }));
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
    ${pageHeading("Client Profile", `
      <div class="form-actions">
        <button class="form-button" type="submit" form="clientProfileForm">Save Profile</button>
      </div>
    `)}
    <form id="clientProfileForm" data-booking-details>
      <section class="panel">
        <div class="two-col">
          <div class="form-grid">
            <label for="profileClient">Client</label><input id="profileClient" name="client" value="${escapeHtml(current.client)}">
            <label for="profileClientName">Client Name</label><input id="profileClientName" name="clientName" value="${escapeHtml(current.clientName)}">
            <label for="profileDebtor">Debtor</label><input id="profileDebtor" name="debtor" value="${escapeHtml(current.debtor)}">
            <label for="profileConsultant">Consultant</label><input id="profileConsultant" name="consultant" value="${escapeHtml(current.consultant)}">
            <label for="profileEmail">Client Email</label><input id="profileEmail" name="contactEmail" value="${escapeHtml(current.contactEmail)}">
          </div>
          <div class="form-grid">
            <label for="profileBookingReference">Booking Reference</label><input id="profileBookingReference" name="bookingReference" value="${escapeHtml(current.bookingReference)}">
            <label for="profileBookDate">Book Date</label><input id="profileBookDate" name="bookDate" value="${escapeHtml(current.bookDate)}">
            <label for="profileDepDate">Dep. Date</label><input id="profileDepDate" name="depDate" value="${escapeHtml(current.depDate)}">
            <label for="profileTitle">Itinerary Title</label><input id="profileTitle" name="title" value="${escapeHtml(current.title)}">
            <label for="profileStatus">Status</label><input id="profileStatus" name="status" value="${escapeHtml(current.status)}">
          </div>
        </div>
        <div class="form-grid" style="margin-top:10px">
          <label for="profileNotes">Client Notes</label>
          <textarea class="wide-textarea" id="profileNotes" name="profileNotes">${escapeHtml(current.profileNotes)}</textarea>
        </div>
      </section>
    </form>
  `;
}

function referencesView() {
  const current = booking();
  return `
    ${pageHeading("References", `
      <div class="form-actions">
        <button class="form-button" type="submit" form="referenceListForm">Save Changes</button>
      </div>
    `)}
    <section class="panel">
      <form id="referenceForm">
        <div class="form-grid">
          <label for="referenceType">Reference Type</label>
          <select id="referenceType" name="type"><option>Supplier</option><option>Airline</option><option>Hotel</option><option>Client</option><option>Internal</option></select>
          <label for="referenceValue">Reference</label><input id="referenceValue" name="value" value="">
          <label for="referenceNotes">Notes</label><input id="referenceNotes" name="notes" value="">
        </div>
        <div class="record-actions"><button class="form-button" type="submit">Add Reference</button></div>
      </form>
    </section>
    <form id="referenceListForm">
      <table class="grid-table">
        <thead><tr><th style="width:70px">Action</th><th>Type</th><th>Reference</th><th>Notes</th></tr></thead>
        <tbody>
          ${current.references.map((item) => `
            <tr>
              <td><button class="icon-button delete" type="button" data-action="delete-reference" data-id="${escapeHtml(item.id)}">X</button></td>
              <td><input name="${escapeHtml(item.id)}__type" value="${escapeHtml(item.type)}"></td>
              <td><input name="${escapeHtml(item.id)}__value" value="${escapeHtml(item.value)}"></td>
              <td><input name="${escapeHtml(item.id)}__notes" value="${escapeHtml(item.notes)}"></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </form>
  `;
}

function lifecycleView() {
  const current = booking();
  return `
    ${pageHeading("Life Cycle", `
      <div class="form-actions">
        <button class="form-button" type="submit" form="lifecycleListForm">Save Changes</button>
      </div>
    `)}
    <section class="panel">
      <form id="lifecycleForm">
        <div class="form-grid">
          <label for="lifecycleDate">Date</label><input id="lifecycleDate" name="date" value="${new Date().toLocaleDateString("en-GB").replaceAll("/", "-")}">
          <label for="lifecycleType">Type</label>
          <select id="lifecycleType" name="type"><option>Note</option><option>Email</option><option>Call</option><option>Task</option><option>Imported PDF</option></select>
          <label for="lifecycleNote">Details</label><input id="lifecycleNote" name="note" value="">
        </div>
        <div class="record-actions"><button class="form-button" type="submit">Add Entry</button></div>
      </form>
    </section>
    <form id="lifecycleListForm">
      <table class="grid-table">
        <thead><tr><th style="width:70px">Action</th><th>Date</th><th>Type</th><th>Details</th></tr></thead>
        <tbody>
          ${current.lifecycle.map((item) => `
            <tr>
              <td><button class="icon-button delete" type="button" data-action="delete-lifecycle" data-id="${escapeHtml(item.id)}">X</button></td>
              <td><input name="${escapeHtml(item.id)}__date" value="${escapeHtml(item.date)}"></td>
              <td><input name="${escapeHtml(item.id)}__type" value="${escapeHtml(item.type)}"></td>
              <td><input name="${escapeHtml(item.id)}__note" value="${escapeHtml(item.note)}"></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </form>
  `;
}

function statusView() {
  const current = booking();
  return `
    ${pageHeading("Status", `
      <div class="form-actions">
        <button class="form-button" type="submit" form="statusForm">Save Status</button>
      </div>
    `)}
    <form id="statusForm">
      <section class="panel">
        <div class="form-grid">
          <label for="bookingStatus">Booking Status</label>
          <select id="bookingStatus" name="status">${["Booked", "Pending", "Ticketed", "Cancelled"].map((value) => `<option ${current.status === value ? "selected" : ""}>${value}</option>`).join("")}</select>
          <label for="priority">Priority</label>
          <select id="priority" name="priority">${["Normal", "Watch", "Urgent"].map((value) => `<option ${current.priority === value ? "selected" : ""}>${value}</option>`).join("")}</select>
          <label for="statusNote">Status Note</label>
          <textarea class="wide-textarea" id="statusNote" name="statusNote">${escapeHtml(current.statusNote)}</textarea>
        </div>
      </section>
    </form>
  `;
}

function quickEditView() {
  const current = booking();
  return `
    ${pageHeading("Quick Edit", `
      <div class="form-actions">
        <button class="form-button" type="submit" form="quickEditForm">Save Quick Edit</button>
      </div>
    `)}
    <form id="quickEditForm">
      <table class="grid-table">
        <thead><tr><th style="width:56px">Type</th><th>Reference</th><th>Free Text</th><th style="width:105px">Start Date</th><th style="width:76px">Start Time</th><th style="width:105px">Finish Date</th><th style="width:76px">Finish Time</th><th style="width:70px">From</th><th style="width:70px">To</th><th style="width:54px">Status</th></tr></thead>
        <tbody>
          ${current.segments.map((item) => `
            <tr>
              <td><input name="${escapeHtml(item.id)}__type" value="${escapeHtml(item.type)}"></td>
              <td><input name="${escapeHtml(item.id)}__reference" value="${escapeHtml(item.reference)}"></td>
              <td><input name="${escapeHtml(item.id)}__service" value="${escapeHtml(item.service)}"></td>
              <td>${dateInput(`${item.id}__startDate`, `${item.id}__startDate`, item.startDate, "Start Date", true)}</td>
              <td>${timeInput(`${item.id}__startTime`, `${item.id}__startTime`, item.startTime, "Start Time")}</td>
              <td>${dateInput(`${item.id}__finishDate`, `${item.id}__finishDate`, item.finishDate, "Finish Date", true)}</td>
              <td>${timeInput(`${item.id}__finishTime`, `${item.id}__finishTime`, item.finishTime, "Finish Time")}</td>
              <td>${airportInput(`${item.id}__startCity`, `${item.id}__startCity`, item.startCity, "Departure City", true)}</td>
              <td>${airportInput(`${item.id}__finishCity`, `${item.id}__finishCity`, item.finishCity, "Finish City", true)}</td>
              <td><input name="${escapeHtml(item.id)}__status" value="${escapeHtml(item.status)}"></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <section class="panel" style="margin-top:12px">
        <div class="form-grid">
          <label for="quickNote">Quick Note</label>
          <textarea class="wide-textarea" id="quickNote" name="quickNote">${escapeHtml(current.quickNote)}</textarea>
        </div>
      </section>
    </form>
  `;
}

function passengersView() {
  const current = booking();
  return `
    ${pageHeading("Passengers", `
      <div class="toolbar">
        <input id="newPassengerName" type="text" placeholder="SURNAME/FIRST TITLE" aria-label="Passenger name">
        <button class="table-button" type="button" data-action="add-passenger">Add Passenger</button>
      </div>
    `)}
    <table class="grid-table">
      <thead><tr><th style="width:70px">Action</th><th>No.</th><th>Passenger Name</th><th>Passenger Source</th><th>Primary</th><th>Status</th></tr></thead>
      <tbody>
        ${current.passengers.map((name, index) => `
          <tr>
            <td><button class="icon-button delete" type="button" title="Delete passenger" data-action="delete-passenger" data-index="${index}">X</button></td>
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

function transactionView(kind) {
  const current = booking();
  const titles = {
    account: "Account",
    invoices: "Invoices",
    receipts: "Receipts",
    payments: "Payments",
    orderpayments: "Order Form Payments",
    ledgers: "Ledgers",
    proration: "Pro-Ration",
    pglog: "PG Transaction Log"
  };
  const rows = current.transactions.filter((item) => item.kind === kind);
  return `
    ${pageHeading(titles[kind] || titleCase(kind), `
      <div class="form-actions">
        <button class="form-button" type="submit" form="transactionListForm">Save Changes</button>
      </div>
    `)}
    <section class="panel">
      <form id="transactionForm" data-kind="${escapeHtml(kind)}">
        <div class="form-grid">
          <label for="transactionDate">Date</label><input id="transactionDate" name="date" value="${new Date().toLocaleDateString("en-GB").replaceAll("/", "-")}">
          <label for="transactionDescription">Description</label><input id="transactionDescription" name="description" value="">
          <label for="transactionAmount">Amount</label><input id="transactionAmount" name="amount" value="0.00">
          <label for="transactionStatus">Status</label>
          <select id="transactionStatus" name="status"><option>Draft</option><option>Pending</option><option>Paid</option><option>Cancelled</option></select>
        </div>
        <div class="record-actions"><button class="form-button" type="submit">Add ${escapeHtml(titles[kind] || "Transaction")}</button></div>
      </form>
    </section>
    <form id="transactionListForm">
      <table class="grid-table">
        <thead><tr><th style="width:70px">Action</th><th>Date</th><th>Description</th><th style="width:100px">Amount</th><th style="width:90px">Status</th></tr></thead>
        <tbody>
          ${rows.map((item) => `
            <tr>
              <td><button class="icon-button delete" type="button" data-action="delete-transaction" data-id="${escapeHtml(item.id)}">X</button></td>
              <td><input name="${escapeHtml(item.id)}__date" value="${escapeHtml(item.date)}"></td>
              <td><input name="${escapeHtml(item.id)}__description" value="${escapeHtml(item.description)}"></td>
              <td><input name="${escapeHtml(item.id)}__amount" value="${escapeHtml(item.amount)}"></td>
              <td><input name="${escapeHtml(item.id)}__status" value="${escapeHtml(item.status)}"></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </form>
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

  document.querySelectorAll("[data-booking-details]").forEach((detailsForm) => {
    detailsForm.addEventListener("submit", saveBookingDetailsForm);
  });

  const referenceForm = document.getElementById("referenceForm");
  if (referenceForm) referenceForm.addEventListener("submit", saveReferenceForm);

  const referenceListForm = document.getElementById("referenceListForm");
  if (referenceListForm) referenceListForm.addEventListener("submit", saveReferenceListForm);

  const lifecycleForm = document.getElementById("lifecycleForm");
  if (lifecycleForm) lifecycleForm.addEventListener("submit", saveLifecycleForm);

  const lifecycleListForm = document.getElementById("lifecycleListForm");
  if (lifecycleListForm) lifecycleListForm.addEventListener("submit", saveLifecycleListForm);

  const statusForm = document.getElementById("statusForm");
  if (statusForm) statusForm.addEventListener("submit", saveStatusForm);

  const quickEditForm = document.getElementById("quickEditForm");
  if (quickEditForm) quickEditForm.addEventListener("submit", saveQuickEditForm);

  const documentForm = document.getElementById("documentForm");
  if (documentForm) documentForm.addEventListener("submit", saveDocumentForm);

  const documentListForm = document.getElementById("documentListForm");
  if (documentListForm) documentListForm.addEventListener("submit", saveDocumentListForm);

  const transactionForm = document.getElementById("transactionForm");
  if (transactionForm) transactionForm.addEventListener("submit", saveTransactionForm);

  const transactionListForm = document.getElementById("transactionListForm");
  if (transactionListForm) transactionListForm.addEventListener("submit", saveTransactionListForm);

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

  wireAirportFields();
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
    const copy = { ...original, id: `copy-${Date.now()}`, reference: original.reference ? `${original.reference} COPY` : "" };
    current.segments.splice(current.segments.indexOf(original) + 1, 0, copy);
    state.selectedSegmentId = copy.id;
    render();
    persistData("Segment copied");
    toast("Segment copied");
  }
  if (action === "delete-segment") {
    current.segments = current.segments.filter((segment) => segment.id !== source.dataset.id);
    if (current.segments.length === 0) {
      current.segments.push(blankSegment("blank-1"));
    }
    state.selectedSegmentId = current.segments[0].id;
    render();
    persistData("Segment deleted");
    toast("Segment deleted");
  }
  if (action === "add-segment") {
    const newSegment = blankSegment(`new-${Date.now()}`, labelToSegmentType(state.segmentType));
    current.segments.unshift(newSegment);
    state.selectedSegmentId = newSegment.id;
    persistData("Segment added");
    setView("edit");
  }
  if (action === "undo-edit") {
    setView("itinerary");
  }
  if (action === "automatic-sort") {
    current.segments.sort((a, b) => dateKey(a.startDate, a.startTime).localeCompare(dateKey(b.startDate, b.startTime)));
    render();
    persistData("Sort saved");
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
    persistData("Imported segment saved");
    toast("Imported confirmation added as a segment");
  }
  if (action === "open-booking") {
    state.bookingId = source.dataset.id;
    state.selectedSegmentId = booking().segments[0]?.id || "";
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
    const copy = JSON.parse(JSON.stringify(current));
    copy.id = String(Date.now()).slice(-6);
    copy.clientName = `${current.clientName} Copy`;
    copy.client = toTramadaClientCode(copy.clientName);
    copy.segments = copy.segments.map((item, index) => ({ ...item, id: `copy-${Date.now()}-${index}` }));
    bookings.unshift(ensureBookingShape(copy));
    state.bookingId = copy.id;
    state.selectedSegmentId = copy.segments[0]?.id || "";
    setView("summary");
    persistData("Booking copied");
    toast("Booking copied to local test data");
  }
  if (action === "cancel-booking") {
    current.status = "Cancelled";
    render();
    persistData("Booking cancelled");
    toast("Booking cancel action captured");
  }
  if (action === "diary-note") {
    current.lifecycle.unshift({
      id: `life-${Date.now()}`,
      date: new Date().toLocaleDateString("en-GB").replaceAll("/", "-"),
      type: "Diary",
      note: "Diary note added from booking card"
    });
    persistData("Diary note saved");
    toast("Diary note added");
  }
  if (action === "run-booking-search") {
    toast("Search completed");
  }
  if (action === "add-passenger") {
    const input = document.getElementById("newPassengerName");
    const name = input?.value?.trim();
    if (!name) {
      toast("Enter a passenger name");
      return;
    }
    current.passengers.push(name.toUpperCase());
    current.pax = current.passengers.length;
    input.value = "";
    render();
    persistData("Passenger added");
    toast("Passenger added");
  }
  if (action === "delete-passenger") {
    const index = Number(source.dataset.index);
    current.passengers.splice(index, 1);
    current.pax = current.passengers.length;
    render();
    persistData("Passenger deleted");
    toast("Passenger deleted");
  }
  if (action === "delete-reference") {
    current.references = current.references.filter((item) => item.id !== source.dataset.id);
    render();
    persistData("Reference deleted");
    toast("Reference deleted");
  }
  if (action === "delete-lifecycle") {
    current.lifecycle = current.lifecycle.filter((item) => item.id !== source.dataset.id);
    render();
    persistData("Life cycle entry deleted");
    toast("Life cycle entry deleted");
  }
  if (action === "delete-document") {
    current.documents = current.documents.filter((item) => item.id !== source.dataset.id);
    render();
    persistData("Document deleted");
    toast("Document record deleted");
  }
  if (action === "delete-transaction") {
    current.transactions = current.transactions.filter((item) => item.id !== source.dataset.id);
    render();
    persistData("Transaction deleted");
    toast("Transaction deleted");
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
  item.reference = data.get("reference");
  item.service = data.get("service");
  const startTime = normaliseTime(data.get("startTime"));
  const finishTime = normaliseTime(data.get("finishTime"));
  if (!validateSegmentTimes(startTime, finishTime)) return;
  item.startCity = uppercaseCode(data.get("startCity"));
  item.startDate = fromDateInputValue(data.get("startDate"));
  item.startTime = startTime;
  item.finishCity = uppercaseCode(data.get("finishCity"));
  item.finishDate = fromDateInputValue(data.get("finishDate"));
  item.finishTime = finishTime;
  item.status = data.get("status");
  item.noPassengers = data.get("noPassengers");
  item.supplierRate = data.get("supplierRate") || item.supplierRate;
  item.fee = data.get("fee") || item.fee;
  item.markup = data.get("markup") || item.markup;
  item.tax = data.get("tax") || item.tax;
  setView("itinerary");
  persistData("Segment saved");
  toast("Segment saved");
}

function saveBookingDetailsForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const current = booking();
  [
    "client",
    "clientName",
    "debtor",
    "itinerary",
    "title",
    "bookingReference",
    "bookDate",
    "depDate",
    "consultant",
    "contactEmail",
    "supplierConsultant",
    "status",
    "profileNotes"
  ].forEach((field) => {
    if (data.has(field)) current[field] = data.get(field);
  });
  current.pax = current.passengers.length;
  render();
  persistData("Booking saved");
  toast("Booking details saved");
}

function saveReferenceForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const value = String(data.get("value") || "").trim();
  if (!value) {
    toast("Enter a reference");
    return;
  }
  booking().references.unshift({
    id: `ref-${Date.now()}`,
    type: data.get("type"),
    value,
    notes: data.get("notes")
  });
  event.currentTarget.reset();
  render();
  persistData("Reference saved");
  toast("Reference added");
}

function saveReferenceListForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  booking().references.forEach((item) => {
    ["type", "value", "notes"].forEach((field) => {
      const key = `${item.id}__${field}`;
      if (data.has(key)) item[field] = field === "startCity" || field === "finishCity" ? uppercaseCode(data.get(key)) : data.get(key);
    });
  });
  render();
  persistData("References saved");
  toast("References saved");
}

function saveLifecycleForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const note = String(data.get("note") || "").trim();
  if (!note) {
    toast("Enter lifecycle details");
    return;
  }
  booking().lifecycle.unshift({
    id: `life-${Date.now()}`,
    date: data.get("date"),
    type: data.get("type"),
    note
  });
  event.currentTarget.reset();
  render();
  persistData("Life cycle saved");
  toast("Life cycle entry added");
}

function saveLifecycleListForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  booking().lifecycle.forEach((item) => {
    ["date", "type", "note"].forEach((field) => {
      const key = `${item.id}__${field}`;
      if (data.has(key)) item[field] = data.get(key);
    });
  });
  render();
  persistData("Life cycle saved");
  toast("Life cycle changes saved");
}

function saveStatusForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const current = booking();
  current.status = data.get("status");
  current.priority = data.get("priority");
  current.statusNote = data.get("statusNote");
  render();
  persistData("Status saved");
  toast("Status saved");
}

function saveQuickEditForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const current = booking();
  current.segments.forEach((item) => {
    ["type", "reference", "service", "startDate", "startTime", "finishDate", "finishTime", "startCity", "finishCity", "status"].forEach((field) => {
      const key = `${item.id}__${field}`;
      if (!data.has(key)) return;
      if (field === "startDate" || field === "finishDate") item[field] = fromDateInputValue(data.get(key));
      else if (field === "startTime" || field === "finishTime") item[field] = normaliseTime(data.get(key));
      else if (field === "startCity" || field === "finishCity") item[field] = uppercaseCode(data.get(key));
      else item[field] = data.get(key);
    });
  });
  current.quickNote = data.get("quickNote");
  render();
  persistData("Quick edit saved");
  toast("Quick edit saved");
}

function saveDocumentForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const title = String(data.get("title") || "").trim();
  if (!title) {
    toast("Enter a document title");
    return;
  }
  booking().documents.unshift({
    id: `doc-${Date.now()}`,
    type: data.get("type"),
    title,
    note: data.get("note")
  });
  event.currentTarget.reset();
  render();
  persistData("Document saved");
  toast("Document record added");
}

function saveDocumentListForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  booking().documents.forEach((item) => {
    ["type", "title", "note"].forEach((field) => {
      const key = `${item.id}__${field}`;
      if (data.has(key)) item[field] = data.get(key);
    });
  });
  render();
  persistData("Documents saved");
  toast("Document changes saved");
}

function saveTransactionForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const description = String(data.get("description") || "").trim();
  if (!description) {
    toast("Enter a description");
    return;
  }
  booking().transactions.unshift({
    id: `txn-${Date.now()}`,
    kind: event.currentTarget.dataset.kind,
    date: data.get("date"),
    description,
    amount: data.get("amount"),
    status: data.get("status")
  });
  event.currentTarget.reset();
  render();
  persistData("Transaction saved");
  toast("Transaction added");
}

function saveTransactionListForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  booking().transactions.forEach((item) => {
    ["date", "description", "amount", "status"].forEach((field) => {
      const key = `${item.id}__${field}`;
      if (data.has(key)) item[field] = data.get(key);
    });
  });
  render();
  persistData("Transactions saved");
  toast("Transaction changes saved");
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

function readableDate(date) {
  const [day, month, year] = String(date || "").split("-");
  if (!day || !month || !year) return "";
  const parsed = new Date(`${year}-${month}-${day}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-AU", { weekday: "long", day: "2-digit", month: "short", year: "numeric" });
}

function toast(message) {
  const node = document.getElementById("statusToast");
  node.textContent = message;
  node.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => node.classList.remove("show"), 1800);
}

function importItinerary(itinerary) {
  const current = booking();
  const importedPassengers = Array.isArray(itinerary?.passengers)
    ? itinerary.passengers.map((name) => String(name || "").trim()).filter(Boolean)
    : [];
  const importedSegments = Array.isArray(itinerary?.segments) ? itinerary.segments : [];

  current.passengers = importedPassengers;
  current.pax = importedPassengers.length;
  current.clientName = itinerary?.client || importedPassengers[0] || "Imported Client";
  current.client = toTramadaClientCode(current.clientName);
  current.bookingReference = itinerary?.bookingReference || current.bookingReference || "";
  current.title = itinerary?.bookingTitle || current.title || "Imported Booking";
  current.itinerary = current.title;
  current.consultant = itinerary?.consultant || current.consultant || "";
  current.depDate = importedSegments[0]?.startDate || current.depDate || "";
  current.bookDate = current.bookDate || new Date().toLocaleDateString("en-GB").replaceAll("/", "-");
  current.segments = importedSegments.map((item, index) => importedSegment(item, index, importedPassengers.length));
  ensureBookingShape(current);
  state.selectedSegmentId = current.segments[0]?.id || "";
  state.view = "itinerary";
  render();
  persistData("Imported booking saved");
  toast(`Imported ${current.segments.length} segment(s) and ${current.passengers.length} passenger(s)`);
}

function importedSegment(item, index, passengerCount) {
  const type = sanitizeSegmentType(item?.type);
  return seg(
    `import-${Date.now()}-${index}`,
    type,
    item?.reference || "",
    passengerLabel(type, item?.noPassengers, passengerCount),
    item?.startDate || "",
    item?.startTime || "",
    item?.finishDate || item?.startDate || "",
    item?.finishTime || "",
    uppercaseCode(item?.startCity),
    uppercaseCode(item?.finishCity),
    sanitizeStatus(item?.status),
    item?.service || "",
    type === "HTL" ? "hotel" : ""
  );
}

function passengerLabel(type, segmentPassengerCount, bookingPassengerCount) {
  if (type === "FLT") return "Specific";
  if (Number(segmentPassengerCount) === 1 && bookingPassengerCount > 1) return "Specific";
  return "All";
}

function sanitizeSegmentType(type) {
  const value = String(type || "COM").toUpperCase();
  return ["FLT", "HTL", "TSF", "TUR", "TRN", "COM", "CRC"].includes(value) ? value : "COM";
}

function labelToSegmentType(label) {
  const value = String(label || "").toLowerCase();
  if (value === "flight") return "FLT";
  if (value === "hotel") return "HTL";
  if (value === "transfer") return "TSF";
  if (value === "tour") return "TUR";
  if (value === "train") return "TRN";
  if (value === "component") return "COM";
  return "";
}

function sanitizeStatus(status) {
  const value = String(status || "HK").toUpperCase();
  return ["HK", "PN", "XX"].includes(value) ? value : "HK";
}

function uppercaseCode(value) {
  return String(value || "").trim().toUpperCase();
}

function toTramadaClientCode(name) {
  const parts = String(name || "Imported Client").trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return `${parts.at(-1)}/${parts.slice(0, -1).join(" ")}`.toUpperCase();
  return String(name || "Imported Client").toUpperCase();
}

window.__tramadaReplica = {
  importItinerary,
  resetBooking() {
    Object.assign(booking(), {
      client: "CLIENT/NEW",
      clientName: "Imported Client",
      passengers: [],
      pax: 0,
      itinerary: "Imported itinerary",
      depDate: "",
      bookingReference: "",
      title: "Imported Booking",
      status: "Booked",
      priority: "Normal",
      statusNote: "",
      profileNotes: "",
      quickNote: "",
      references: [],
      lifecycle: [],
      documents: [],
      transactions: [],
      segments: [blankSegment("blank-1")]
    });
    state.selectedSegmentId = "blank-1";
    state.view = "itinerary";
    render();
    persistData("Booking reset");
    toast("Booking reset");
  }
};

function applyInitialRoute() {
  const searchParams = new URLSearchParams(window.location.search);
  const requestedView = searchParams.get("view") || window.location.hash.replace("#", "");
  const requestedBooking = searchParams.get("booking");
  if (bookings.some((item) => item.id === requestedBooking)) {
    state.bookingId = requestedBooking;
    state.selectedSegmentId = booking().segments[0]?.id || "";
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

async function boot() {
  await loadPersistedState();
  applyInitialRoute();
  persistence.loaded = true;
  render();
}

boot();
