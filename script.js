/*
 * UREDI OVAJ POPIS ZA DODAVANJE ILI MIJENJANJE PROMOTIVNIH KRUGOVA.
 * naziv = naziv u tablici; akcija = kategorija za filter; popust = glavni tekst;
 * tekst = opcionalni redak ispod.
 * boja = HEX boja teksta za popust i tekst (npr. "#e83e8c"); zadano bijela.
 * datum = tekst unutar donjeg dijela kruga; uvijek string, prazan ako se ne koristi.
 * Predložak određuje broj i veličinu krugova na A4. Količina se bira u tablici.
 */
const KRUGOVI = [
  { naziv: "obican-5%", akcija: "Obična", popust: "-5%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-10%", akcija: "Obična", popust: "-10%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-15%", akcija: "Obična", popust: "-15%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-20%", akcija: "Obična", popust: "-20%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-25%", akcija: "Obična", popust: "-25%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-30%", akcija: "Obična", popust: "-30%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-35%", akcija: "Obična", popust: "-35%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-40%", akcija: "Obična", popust: "-40%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-45%", akcija: "Obična", popust: "-45%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-50%", akcija: "Obična", popust: "-50%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-55%", akcija: "Obična", popust: "-55%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-60%", akcija: "Obična", popust: "-60%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-65%", akcija: "Obična", popust: "-65%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-70%", akcija: "Obična", popust: "-70%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-75%", akcija: "Obična", popust: "-75%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-80%", akcija: "Obična", popust: "-80%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-85%", akcija: "Obična", popust: "-85%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "obican-90%", akcija: "Obična", popust: "-90%", tekst: "", boja: "#ffffff", datum: "" },
  { naziv: "jbl-5%", akcija: "JBL - Listopad", popust: "-5%", tekst: "Uz kod: JBL5", boja: "#ffff00", datum: "" },
  { naziv: "jbl-10%", akcija: "JBL - Listopad", popust: "-10%", tekst: "Uz kod: JBL10", boja: "#ffff00", datum: "" },
  { naziv: "jbl-15%", akcija: "JBL - Listopad", popust: "-15%", tekst: "Uz kod: JBL15", boja: "#ffff00", datum: "" },
  { naziv: "jbl-20%", akcija: "JBL - Listopad", popust: "-20%", tekst: "Uz kod: JBL20", boja: "#ffff00", datum: "" },
  { naziv: "jbl-25%", akcija: "JBL - Listopad", popust: "-25%", tekst: "Uz kod: JBL25", boja: "#ffff00", datum: "" },
  { naziv: "jbl-30%", akcija: "JBL - Listopad", popust: "-30%", tekst: "Uz kod: JBL30", boja: "#ffff00", datum: "" },
  { naziv: "jbl-35%", akcija: "JBL - Listopad", popust: "-35%", tekst: "Uz kod: JBL35", boja: "#ffff00", datum: "" },
  { naziv: "jbl-40%", akcija: "JBL - Listopad", popust: "-40%", tekst: "Uz kod: JBL40", boja: "#ffff00", datum: "" },
  { naziv: "jbl-45%", akcija: "JBL - Listopad", popust: "-45%", tekst: "Uz kod: JBL45", boja: "#ffff00", datum: "" },
  { naziv: "jbl-50%", akcija: "JBL - Listopad", popust: "-50%", tekst: "Uz kod: JBL50", boja: "#ffff00", datum: "" },
  { naziv: "super-5%", akcija: "Super Prilika - Listopad", popust: "-5%", tekst: "Uz kod: SUPER5", boja: "#ffff00", datum: "Do: 3.11.2026." },
  { naziv: "super-10%", akcija: "Super Prilika - Listopad", popust: "-10%", tekst: "Uz kod: SUPER10", boja: "#ffff00", datum: "Do: 3.11.2026." },
  { naziv: "super-15%", akcija: "Super Prilika - Listopad", popust: "-15%", tekst: "Uz kod: SUPER15", boja: "#ffff00", datum: "Do: 3.11.2026." },
  { naziv: "super-20%", akcija: "Super Prilika - Listopad", popust: "-20%", tekst: "Uz kod: SUPER20", boja: "#ffff00", datum: "Do: 3.11.2026." },
  { naziv: "super-25%", akcija: "Super Prilika - Listopad", popust: "-25%", tekst: "Uz kod: SUPER25", boja: "#ffff00", datum: "Do: 3.11.2026." },
  { naziv: "super-30%", akcija: "Super Prilika - Listopad", popust: "-30%", tekst: "Uz kod: SUPER30", boja: "#ffff00", datum: "Do: 3.11.2026." }
];

const CIRCLE_PINK = "#e83e8c";

/*
 * Tri rasporeda A4. Cijela mreža krugova je centrirana lijevo-desno;
 * ispis počinje pri vrhu stranice i popunjava mjesta redom, bez preskakanja.
 */
const LAYOUTS = {
  dense: {
    label: "4 x 6 krugova po A4 (24 po stranici)",
    columns: 4, rows: 6, perPage: 24,
    diameterMm: 44.5, gapXmm: 5, rowPitchMm: 45,
    template: "small"
  },
  large: {
    label: "2 x 3 kruga po A4 (6 po stranici)",
    columns: 2, rows: 3, perPage: 6,
    diameterMm: 90, gapXmm: 8, rowPitchMm: 92,
    template: "large"
  },
  extraLarge: {
    label: "1 x 2 kruga po A4 (2 po stranici)",
    columns: 1, rows: 2, perPage: 2,
    diameterMm: 140, gapXmm: 0, rowPitchMm: 140,
    template: "large"
  }
};
const TEMPLATES = {
  // Omjeri su gornje granice; stvarna veličina uvijek raste do najveće koja stane
  // u prostor pojedinog retka, za sva tri rasporeda A4.
  small: { mainOnlyRatio: .62, mainWithDateRatio: .43, mainWithSubRatio: .34, subRatio: .16, dateRatio: .065, minFont: 2.4 },
  large: { mainOnlyRatio: .62, mainWithDateRatio: .43, mainWithSubRatio: .34, subRatio: .16, dateRatio: .065, minFont: 2.6 }
};
const ITEMS_PER_PAGE = 20;

const tbody = document.getElementById("circleTableBody");
const layoutSelect = document.getElementById("layoutSelect");
const printBtn = document.getElementById("printBtn");
const selectionInfo = document.getElementById("selectionInfo");
const printInfo = document.getElementById("printInfo");
const layoutInfo = document.getElementById("layoutInfo");
const emptyState = document.getElementById("emptyState");
const circleSearch = document.getElementById("circleSearch");
const actionFilter = document.getElementById("actionFilter");
const tablePagination = document.getElementById("tablePagination");
const tableResultInfo = document.getElementById("tableResultInfo");
const state = KRUGOVI.map(() => ({ selected: false, quantity: 1 }));
let tablePage = 1;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function currentLayout() {
  return LAYOUTS[layoutSelect?.value] || LAYOUTS.dense;
}

function safeTextColor(circle) {
  const color = String(circle.boja ?? "#ffffff").trim();
  return /^#[0-9a-fA-F]{6}$/.test(color) ? color : "#ffffff";
}

function actionLabel(circle) {
  return String(circle.akcija ?? "Ostalo").trim() || "Ostalo";
}

function initActionFilter() {
  if (!actionFilter) return;
  const actions = [...new Set(KRUGOVI.map(actionLabel))]
    .sort((left, right) => left.localeCompare(right, "hr"));
  actions.forEach(action => {
    const option = document.createElement("option");
    option.value = action;
    option.textContent = action;
    actionFilter.appendChild(option);
  });
}

function circleMarkup(circle, layout) {
  const mainText = String(circle.popust ?? "").trim();
  const subText = String(circle.tekst ?? "").trim();
  const dateText = String(circle.datum ?? "").trim();
  const hasSub = subText.length > 0;
  const hasDate = dateText.length > 0;
  const template = `template-${layout.template}`;
  const textColor = safeTextColor(circle);

  // Klase has-sub/has-date su izričite; CSS i auto-fit ne moraju pogađati
  // postoji li dodatni tekst ili datum prema skrivenim/praznim elementima.
  return `<div class="promo-item ${hasSub ? "has-sub" : "no-sub"} ${hasDate ? "has-date" : "no-date"}" data-template="${layout.template}">
    <div class="promo-circle ${template} ${hasSub ? "has-sub" : "no-sub"}" style="--circle-color:${CIRCLE_PINK};--text-color:${textColor}" data-template="${layout.template}">
      <div class="promo-content ${hasSub ? "has-sub" : "no-sub"} ${hasDate ? "has-date" : "no-date"}">
        <div class="promo-main">${escapeHtml(mainText)}</div>
        ${hasSub ? `<div class="promo-sub">${escapeHtml(subText)}</div>` : ""}
        ${hasDate ? `<div class="promo-date">${escapeHtml(dateText)}</div>` : ""}
      </div>
    </div>
  </div>`;
}

function renderTable() {
  tbody.innerHTML = "";
  const searchTerm = String(circleSearch?.value || "").trim().toLocaleLowerCase("hr");
  const selectedAction = String(actionFilter?.value || "");
  const matchingIndexes = KRUGOVI
    .map((circle, index) => ({ circle, index }))
    .filter(({ circle }) =>
      String(circle.naziv || "").toLocaleLowerCase("hr").includes(searchTerm) &&
      (!selectedAction || actionLabel(circle) === selectedAction)
    );
  const totalPages = Math.max(1, Math.ceil(matchingIndexes.length / ITEMS_PER_PAGE));
  tablePage = Math.min(Math.max(1, tablePage), totalPages);
  const pageStart = (tablePage - 1) * ITEMS_PER_PAGE;
  const pageItems = matchingIndexes.slice(pageStart, pageStart + ITEMS_PER_PAGE);
  if (emptyState) emptyState.hidden = matchingIndexes.length > 0;

  pageItems.forEach(({ circle, index }) => {
    const itemState = state[index];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><input type="checkbox" aria-label="Označi ${escapeHtml(circle.naziv)} za ispis" ${itemState.selected ? "checked" : ""}></td>
      <td><strong>${escapeHtml(circle.naziv)}</strong></td>
      <td>${escapeHtml(actionLabel(circle))}</td>
      <td><a class="preview-link" href="#preview-${index}" target="_blank" rel="noopener">Pretpregled ↗</a></td>
      <td><input type="number" min="1" max="9999" step="1" value="${itemState.quantity}" aria-label="Količina za ${escapeHtml(circle.naziv)}"></td>`;

    row.querySelector('input[type="checkbox"]').addEventListener("change", event => {
      itemState.selected = event.target.checked;
      updateSummary();
    });

    row.querySelector('input[type="number"]').addEventListener("change", event => {
      itemState.quantity = Math.max(1, Math.min(9999, Math.floor(Number(event.target.value) || 1)));
      event.target.value = itemState.quantity;
      updateSummary();
    });

    /* Pravi link na blob otvara običnu novu karticu, bez popup dimenzija. */
    row.querySelector(".preview-link").addEventListener("click", event => {
      const anchor = event.currentTarget;
      const html = previewDocument(circle, currentLayout());
      const blobUrl = URL.createObjectURL(new Blob([html], { type: "text/html;charset=utf-8" }));
      anchor.href = blobUrl;
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5 * 60 * 1000);
    });

    tbody.appendChild(row);
  });

  renderPagination(matchingIndexes.length, totalPages, pageStart);

  updateSummary();
}

function renderPagination(totalItems, totalPages, pageStart) {
  if (tableResultInfo) {
    tableResultInfo.textContent = totalItems
      ? `Prikazano ${pageStart + 1}–${Math.min(pageStart + ITEMS_PER_PAGE, totalItems)} od ${totalItems} stavki`
      : "Nema stavki za upisani naziv.";
  }
  if (!tablePagination) return;
  tablePagination.innerHTML = "";
  if (totalPages <= 1) return;

  const addButton = (label, page, disabled = false, current = false) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.disabled = disabled;
    if (current) button.setAttribute("aria-current", "page");
    button.addEventListener("click", () => {
      tablePage = page;
      renderTable();
    });
    tablePagination.appendChild(button);
  };
  addButton("‹ Prethodna", tablePage - 1, tablePage === 1);
  // Kod većeg broja zapisa držimo navigaciju kratkom, bez stotina tipki.
  const pagesToShow = [...new Set([1, tablePage - 1, tablePage, tablePage + 1, totalPages])]
    .filter(page => page >= 1 && page <= totalPages)
    .sort((left, right) => left - right);
  let previousPage = 0;
  pagesToShow.forEach(page => {
    if (page - previousPage > 1) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "…";
      ellipsis.setAttribute("aria-hidden", "true");
      tablePagination.appendChild(ellipsis);
    }
    addButton(String(page), page, false, page === tablePage);
    previousPage = page;
  });
  addButton("Sljedeća ›", tablePage + 1, tablePage === totalPages);
}

function getSelected() {
  return KRUGOVI.map((circle, index) => ({ circle, index, ...state[index] }))
    .filter(item => item.selected && item.quantity > 0);
}

function pagesWord(count) {
  const lastTwo = count % 100;
  const last = count % 10;
  if (last === 1 && lastTwo !== 11) return "stranica";
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return "stranice";
  return "stranica";
}

function updateSummary() {
  const selected = getSelected();
  const total = selected.reduce((sum, item) => sum + item.quantity, 0);
  const layout = currentLayout();
  const pages = total ? Math.ceil(total / layout.perPage) : 0;

  if (selectionInfo) {
    selectionInfo.textContent = `Označeno: ${selected.length} vrsta • ukupno primjeraka: ${total}`;
  }
  if (layoutInfo) {
    layoutInfo.textContent = `A4 • ${layout.label} • vodoravni razmak ${layout.gapXmm} mm`;
  }
  if (printInfo) {
    printInfo.textContent = selected.length
      ? `${layout.label}. Odabrana količina: ${pages} ${pagesWord(pages)}.`
      : "Označi željene krugove i upiši količine za ispis.";
  }
}

function autoFitScript() {
  return `
    const TEMPLATE_FIT = ${JSON.stringify(TEMPLATES)};
    function fitsInBox(element) {
      return element.scrollWidth <= element.clientWidth + 1 &&
             element.scrollHeight <= element.clientHeight + 1;
    }
    // Font se smanjuje samo koliko je potrebno da tekst stane unutar
    // pripadajućeg polja. Dodatni redovi lome se po razmacima, ne po slovima.
    function fitOneText(element, maxFontPx, minFontPx) {
      if (!element || !element.textContent.trim()) return;
      const minimum = Math.max(1, minFontPx);
      const maximum = Math.max(minimum, maxFontPx);
      element.style.fontSize = maximum + 'px';
      if (fitsInBox(element)) return;

      // Prvo se dopušta prijelom teksta. Tek ako ni na uobičajenoj minimalnoj
      // veličini sadržaj ne stane, font se dodatno smanjuje kao krajnja mjera.
      let fittingLow = minimum;
      element.style.fontSize = fittingLow + 'px';
      while (!fitsInBox(element) && fittingLow > 1) {
        fittingLow = Math.max(1, fittingLow * 0.82);
        element.style.fontSize = fittingLow + 'px';
      }
      if (!fitsInBox(element)) return;

      let nonFittingHigh = maximum;
      let best = fittingLow;
      for (let iteration = 0; iteration < 26; iteration++) {
        const middle = (fittingLow + nonFittingHigh) / 2;
        element.style.fontSize = middle + 'px';
        if (fitsInBox(element)) {
          best = middle;
          fittingLow = middle;
        } else {
          nonFittingHigh = middle;
        }
      }
      element.style.fontSize = best + 'px';
    }
    function fitPromoCircles() {
      document.querySelectorAll('.promo-circle').forEach(circle => {
        const template = TEMPLATE_FIT[circle.dataset.template] || TEMPLATE_FIT.small;
        const diameter = Math.min(circle.clientWidth, circle.clientHeight);
        const main = circle.querySelector('.promo-main');
        const sub = circle.querySelector('.promo-sub');
        const date = circle.querySelector('.promo-date');
        const hasSub = circle.classList.contains('has-sub') && !!sub;
        const hasDate = circle.querySelector('.promo-content').classList.contains('has-date') && !!date;
        const mainRatio = hasSub ? template.mainWithSubRatio : (hasDate ? template.mainWithDateRatio : template.mainOnlyRatio);
        fitOneText(main, diameter * mainRatio, template.minFont);
        if (sub) fitOneText(sub, diameter * template.subRatio, template.minFont);
        if (date) fitOneText(date, diameter * template.dateRatio, template.minFont);
      });
    }
    window.addEventListener('load', () => requestAnimationFrame(() => requestAnimationFrame(fitPromoCircles)));
    window.addEventListener('resize', fitPromoCircles);
  `;
}

function commonCircleStyles() {
  return `<style>
    * { box-sizing: border-box; }
    html, body { margin: 0; font-family: Arial, Helvetica, sans-serif; }
    .promo-item {
      --circle-size: 40mm;
      width: var(--circle-size);
      display: flex;
      flex-direction: column;
      align-items: stretch;
      flex: none;
      margin-inline: auto;
    }
    .promo-circle {
      width: var(--circle-size);
      height: var(--circle-size);
      position: relative;
      flex: none;
      display: grid;
      place-items: center;
      border-radius: 50%;
      overflow: hidden;
      background: var(--circle-color, #e83e8c);
      color: var(--text-color, #ffffff);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      margin-inline: auto;
    }
    .promo-circle::after {
      content: "";
      position: absolute;
      inset: 3.5%;
      border-radius: 50%;
      border: .35mm solid rgba(255,255,255,.94);
      pointer-events: none;
    }
    .template-large::after { inset: 4.3%; border-width: .65mm; }

    /* Grid redovi imaju namjenski prostor za glavni tekst, dodatni tekst i datum.
       Tako datum ne gura ostali sadržaj preko unutarnje crte kruga. */
    .promo-content {
      width: 76%;
      height: 76%;
      min-width: 0;
      min-height: 0;
      display: grid;
      grid-template-rows: minmax(0, 1fr);
      gap: 2%;
      align-items: stretch;
      justify-items: stretch;
      text-align: center;
      overflow: hidden;
      z-index: 1;
    }
    .promo-content.has-sub.no-date {
      grid-template-rows: minmax(0, 1.25fr) minmax(0, 1fr);
    }
    .promo-content.has-sub.has-date {
      grid-template-rows: minmax(0, 1.2fr) minmax(0, .95fr) minmax(0, .62fr);
    }
    .promo-content.no-sub.has-date {
      grid-template-rows: minmax(0, 1.7fr) minmax(0, .62fr);
    }
    .promo-main, .promo-sub, .promo-date {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: var(--text-color, #ffffff);
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 900;
      text-align: center;
      line-height: 1.02;
      letter-spacing: -.025em;
      overflow: hidden;
    }
    /* Glavni tekst ostaje u jednom retku i po potrebi se smanjuje. */
    .promo-main {
      font-size: 50px;
      white-space: nowrap;
      word-break: normal;
      overflow-wrap: normal;
    }
    /* Dodatni tekst prvo se lomi između riječi. Duga riječ ostaje cijela dok
       auto-fit ne smanji font dovoljno da stane, umjesto da je razreže na slova. */
    .promo-sub {
      font-size: 20px;
      font-weight: 900;
      line-height: 1.06;
      letter-spacing: -.015em;
      white-space: normal;
      word-break: normal;
      overflow-wrap: normal;
      hyphens: none;
    }
    .promo-date {
      font-size: 8px;
      font-weight: 400;
      line-height: 1.05;
      letter-spacing: 0;
      white-space: normal;
      word-break: normal;
      overflow-wrap: normal;
      hyphens: none;
    }
  </style>`;
}

function previewDocument(circle, layout) {
  const heading = escapeHtml(circle.naziv);
  return `<!doctype html>
  <html lang="hr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pretpregled: ${heading}</title>${commonCircleStyles()}
  <style>
    body { min-height: 100vh; padding: 22px; background: #f5f5f5; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; gap: 18px; }
    h1 { margin: 0; color: #0073c2; font: 600 18px/1.3 'Segoe UI', Tahoma, sans-serif; text-align: center; overflow-wrap: anywhere; }
    .preview-note { margin: 0; color: #555; font: 14px/1.4 'Segoe UI', Tahoma, sans-serif; text-align: center; }
    .promo-item { --circle-size: min(78vw, 460px); }
    @media (max-width: 480px) { body { padding: 12px; } .promo-item { --circle-size: min(84vw, 460px); } }
  </style></head>
  <body>
    <h1>${heading}</h1>
    ${circleMarkup(circle, layout)}
    <p class="preview-note">Predložak za ispis: ${layout.label}</p>
    <script>${autoFitScript()}
      window.addEventListener('load', () => requestAnimationFrame(fitPromoCircles));
    <\/script>
  </body></html>`;
}

function printDocument(selectedItems = getSelected()) {
  const selected = selectedItems;
  if (!selected.length) return null;

  const layout = currentLayout();
  const d = layout.diameterMm;
  const copies = [];
  selected.forEach(item => {
    for (let copy = 0; copy < item.quantity; copy++) {
      copies.push(circleMarkup(item.circle, layout));
    }
  });

  /* Fiksne koordinate u mm izbjegavaju automatsko prelamanje u dodatne stranice. */
  let pagesHtml = "";
  for (let start = 0; start < copies.length; start += layout.perPage) {
    const pageCopies = copies.slice(start, start + layout.perPage);
    /* Vrh je fiksan; ne centriramo vertikalno kad je količina mala. */
    const marginY = 8;
    const gridWidth = layout.columns * d + (layout.columns - 1) * layout.gapXmm;
    const gridLeft = (210 - gridWidth) / 2;
    const positioned = pageCopies.map((markup, position) => {
      const column = position % layout.columns;
      const row = Math.floor(position / layout.columns);
      /* Cijela mreža ostaje centrirana; primjerci pune sljedeću poziciju redom. */
      const left = gridLeft + column * (d + layout.gapXmm);
      const top = marginY + row * layout.rowPitchMm;
      // Uključi stil pozicioniranja i kada promo-item već ima dodatne klase
      // (has-sub/no-sub, has-date/no-date). To je važno jer inače svi stoje na (0,0).
      return markup.replace(/<div class="promo-item([^"]*)"/, (match, classes) =>
        `<div class="promo-item${classes}" style="--circle-size:${d}mm;left:${left}mm;top:${top}mm"`
      );
    }).join("");
    pagesHtml += `<section class="print-page">${positioned}</section>`;
  }

  return `<!doctype html>
  <html lang="hr"><head><meta charset="utf-8"><title>Ispis promotivnih krugova</title>
  ${commonCircleStyles()}
  <style>
    @page { size: A4 portrait; margin: 0; }
    html, body { margin: 0 !important; padding: 0 !important; width: 210mm; background: #fff; }
    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    .print-page {
      position: relative;
      width: 210mm;
      height: 297mm;
      margin: 0;
      padding: 0;
      overflow: hidden;
      page-break-after: always;
      break-after: page;
      background: #fff;
    }
    .print-page:last-child { page-break-after: auto; break-after: auto; }
    .print-page .promo-item { position: absolute; }
    @media screen {
      body { background: #e9e9e9; }
      .print-page { margin: 12px auto; box-shadow: 0 1px 8px rgba(0,0,0,.2); }
    }
  </style></head><body>
    ${pagesHtml}
    <script>${autoFitScript()}
      window.addEventListener('load', () => {
        fitPromoCircles();
        setTimeout(() => { window.focus(); window.print(); }, 350);
      });
    <\/script>
  </body></html>`;
}

function openPrintTab(html, errorMessage) {
  const blobUrl = URL.createObjectURL(new Blob([html], { type: "text/html;charset=utf-8" }));
  const printTab = window.open(blobUrl, "_blank");
  if (!printTab) {
    URL.revokeObjectURL(blobUrl);
    alert(errorMessage || "Preglednik je blokirao novu karticu. Dopusti skočne prozore za ovu stranicu pa pokušaj ponovno.");
    return false;
  }
  setTimeout(() => URL.revokeObjectURL(blobUrl), 5 * 60 * 1000);
  const timer = setInterval(() => {
    if (printTab.closed) {
      clearInterval(timer);
      window.location.reload();
    }
  }, 500);
  return true;
}

function getCustomSticker() {
  const valueOf = id => document.getElementById(id)?.value ?? "";
  return {
    naziv: valueOf("customNaziv").trim() || "custom-sticker",
    popust: valueOf("customPopust").trim(),
    tekst: valueOf("customTekst").trim(),
    boja: valueOf("customBoja") || "#ffffff",
    datum: valueOf("customDatum").trim()
  };
}

function customStickerCode(sticker) {
  // JSON.stringify safely quotes strings but produces a JavaScript object literal,
  // compatible with the existing KRUGOVI array format.
  const quote = value => JSON.stringify(String(value ?? ""));
  return `{ naziv: ${quote(sticker.naziv)}, akcija: "custom", popust: ${quote(sticker.popust)}, tekst: ${quote(sticker.tekst)}, boja: ${quote(sticker.boja)}, datum: ${quote(sticker.datum)} },`;
}

function updateCustomCode() {
  const codeField = document.getElementById("customCode");
  if (codeField) codeField.value = customStickerCode(getCustomSticker());
}

function setCustomMessage(message) {
  const status = document.getElementById("customMessage");
  if (status) status.textContent = message;
}

function validateCustomSticker(sticker) {
  if (!sticker.popust) {
    setCustomMessage("Unesi glavni tekst prije pregleda ili ispisa.");
    document.getElementById("customPopust")?.focus();
    return false;
  }
  return true;
}

function initCustomTools() {
  const customForm = document.getElementById("customStickerForm");
  const customPreviewBtn = document.getElementById("customPreviewBtn");
  const customPrintBtn = document.getElementById("customPrintBtn");
  const customCode = document.getElementById("customCode");
  if (!customForm) return;

  customForm.addEventListener("submit", event => event.preventDefault());
  ["customNaziv", "customPopust", "customTekst", "customBoja", "customDatum"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", updateCustomCode);
    document.getElementById(id)?.addEventListener("change", updateCustomCode);
  });

  customPreviewBtn?.addEventListener("click", () => {
    const sticker = getCustomSticker();
    if (!validateCustomSticker(sticker)) return;
    const html = previewDocument(sticker, currentLayout());
    const blobUrl = URL.createObjectURL(new Blob([html], { type: "text/html;charset=utf-8" }));
    const previewTab = window.open(blobUrl, "_blank");
    if (!previewTab) {
      URL.revokeObjectURL(blobUrl);
      setCustomMessage("Preglednik je blokirao novu karticu. Dopusti skočne prozore pa pokušaj ponovno.");
      return;
    }
    setTimeout(() => URL.revokeObjectURL(blobUrl), 5 * 60 * 1000);
    setCustomMessage("Otvoren je pretpregled. Unos nije spremljen u KRUGOVI.");
  });

  customPrintBtn?.addEventListener("click", () => {
    const sticker = getCustomSticker();
    if (!validateCustomSticker(sticker)) return;
    // A single temporary item is sent to the print engine; KRUGOVI and table state stay unchanged.
    const html = printDocument([{ circle: sticker, quantity: 1 }]);
    if (!html) {
      setCustomMessage("Nije moguće pripremiti probni ispis.");
      return;
    }
    const opened = openPrintTab(html, "Preglednik je blokirao karticu za ispis. Dopusti skočne prozore pa pokušaj ponovno.");
    setCustomMessage(opened ? "Pripremljen je jedan probni sticker. Unos nije spremljen u KRUGOVI." : "Kartica za ispis nije otvorena.");
  });

  if (customCode) {
    customCode.addEventListener("focus", () => customCode.select());
    customCode.addEventListener("click", () => customCode.select());
  }
  updateCustomCode();
}

printBtn?.addEventListener("click", () => {
  const html = printDocument();
  if (!html) {
    alert("Prvo označi barem jedan krug za ispis.");
    return;
  }

  openPrintTab(html, "Preglednik je blokirao novu karticu za ispis. Dopusti otvaranje novih kartica za ovu stranicu pa pokušaj ponovno.");
});

layoutSelect?.addEventListener("change", updateSummary);
circleSearch?.addEventListener("input", () => {
  tablePage = 1;
  renderTable();
});
actionFilter?.addEventListener("change", () => {
  tablePage = 1;
  renderTable();
});

initActionFilter();
renderTable();
initCustomTools();
