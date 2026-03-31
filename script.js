

function formatNumber(value) {
  return Number(value).toLocaleString("en-IN", {
    maximumFractionDigits: 2
  });
}

// ================= DISTRICT PAY BILL =================

const districtEmployees = [
  { sn: 1,  name: "KULDEEP SINGH",    desg: "RECOVERY AGENT",  basic: 33000, gradePay: 2000, hda: 200,  ma: 30, sa: 1200, hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 2,  name: "BALBIR SINGH",     desg: "ASSISTANT ACCOUNTANT",  basic: 45400, gradePay: 2800, hda: 280,  ma: 30, sa: 0,    hra: 1400, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 3,  name: "PURAN SINGH",      desg: "ASSISTANT ACCOUNTANT",  basic: 45400, gradePay: 2800, hda: 280,  ma: 30, sa: 1200, hra: 1400, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 4,  name: "NEHA JOSHI",       desg: "RECOVERY AGENT",  basic: 32000, gradePay: 2000, hda: 200,  ma: 30, sa: 1200, hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 5,  name: "AAKANSHA BISHT",   desg: "RECOVERY AGENT",  basic: 32000, gradePay: 2000, hda: 200,  ma: 30, sa: 1200, hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 6,  name: "SANTOSH KUMAR",    desg: "RECOVERY AGENT",  basic: 32000, gradePay: 2000, hda: 200,  ma: 30, sa: 0,    hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 7,  name: "DAN SINGH DHAMI",  desg: "PEON",  basic: 24200, gradePay: 1800, hda: 180,  ma: 30, sa: 0,    hra: 900,  wa: 12, gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 8,  name: "DEVENDRA BORA",    desg: "JUNIOR CLERK",  basic: 30200, gradePay: 2000, hda: 200,  ma: 30, sa: 1200, hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 9,  name: "MANDEEP RAWAT",    desg: "JUNIOR CLERK",  basic: 30200, gradePay: 2000, hda: 200,  ma: 30, sa: 0,    hra: 1500, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 10, name: "GAURAV KUMAR",     desg: "PEON",  basic: 24200, gradePay: 1800, hda: 180,  ma: 30, sa: 0,    hra: 900,  wa: 12, gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 11, name: "PREVEEN KUMAR",    desg: "PEON",  basic: 24200, gradePay: 1800, hda: 1000, ma: 30, sa: 0,    hra: 900,  wa: 12, gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 12, name: "JITENDRA CHAND",   desg: "RECOVERY AGENT",  basic: 30200, gradePay: 2000, hda: 1000, ma: 30, sa: 1200, hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 13, name: "BALWANT SINGH",    desg: "PEON",  basic: 24200, gradePay: 1800, hda: 180,  ma: 30, sa: 0,    hra: 900,  wa: 12, gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 14, name: "JAYDEEP BHARDWAJ", desg: "JUNIOR CLERK",      basic: 30200, gradePay: 2000, hda: 200,  ma: 30, sa: 0,    hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 15, name: "R.P. JOSHI",       desg: "PEON",  basic: 42800, gradePay: 2800, hda: 280,  ma: 30, sa: 0,    hra: 1400, wa: 12, gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 16, name: "VINOD KOTHARI",    desg: "PEON",  basic: 42800, gradePay: 2800, hda: 280,  ma: 30, sa: 200,  hra: 1400, wa: 12, gis: 51.16, tds: 0, epf: 2350, fps: 1250 },
  { sn: 17, name: "RAJENDRA KUMAR",   desg: "JUNIOR CLERK",  basic: 30200, gradePay: 2000, hda: 200,  ma: 30, sa: 1200, hra: 1000, wa: 0,  gis: 51.16, tds: 0, epf: 2350, fps: 1250 }
];

function renderDistrictTable() {
  const body = document.getElementById("districtSalaryBody");
  const foot = document.getElementById("districtSalaryFoot");

  if (!body || !foot) return;

  body.innerHTML = "";
  foot.innerHTML = "";

  const totals = {
    basic: 0,
    da: 0,
    hda: 0,
    ma: 0,
    sa: 0,
    hra: 0,
    wa: 0,
    epfa: 0,
    epsa: 0,
    gross: 0,
    gis: 0,
    tds: 0,
    epf: 0,
    fps: 0,
    totalDed: 0,
    netSalary: 0
  };

  districtEmployees.forEach((emp, index) => {
    const da = emp.basic * 0.58;
    const epfa = 550;
    const epsa = 1250;

    const gross =
      emp.basic +
      da +
      emp.hda +
      emp.ma +
      emp.sa +
      emp.hra +
      emp.wa +
      epfa +
      epsa;

    const totalDed = emp.gis + emp.tds + emp.epf + emp.fps;
    const netSalary = gross - totalDed;

    totals.basic += emp.basic;
    totals.da += da;
    totals.hda += emp.hda;
    totals.ma += emp.ma;
    totals.sa += emp.sa;
    totals.hra += emp.hra;
    totals.wa += emp.wa;
    totals.epfa += epfa;
    totals.epsa += epsa;
    totals.gross += gross;
    totals.gis += emp.gis;
    totals.tds += emp.tds;
    totals.epf += emp.epf;
    totals.fps += emp.fps;
    totals.totalDed += totalDed;
    totals.netSalary += netSalary;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${emp.sn}</td>
      <td class="name-col">${emp.name}</td>
      <td class="desg-col">${emp.desg}</td>
      <td>${formatNumber(emp.gradePay)}</td>

      <td><input type="number" value="${emp.basic}" onchange="updateDistrictBasic(${index}, this.value)"></td>
      <td>${formatNumber(da)}</td>
      <td>${formatNumber(emp.hda)}</td>
      <td>${formatNumber(emp.ma)}</td>
      <td>${formatNumber(emp.sa)}</td>
      <td>${formatNumber(emp.hra)}</td>
      <td>${formatNumber(emp.wa)}</td>
      <td>${formatNumber(epfa)}</td>
      <td>${formatNumber(epsa)}</td>
      <td>${formatNumber(gross)}</td>

      <td>${formatNumber(emp.gis)}</td>
      <td><input type="number" value="${emp.tds}" onchange="updateDistrictTds(${index}, this.value)"></td>
      <td>${formatNumber(emp.epf)}</td>
      <td>${formatNumber(emp.fps)}</td>
      <td>${formatNumber(totalDed)}</td>
      <td>${formatNumber(netSalary)}</td>
    `;
    body.appendChild(row);
  });

 foot.innerHTML = `
  <tr>
    <td colspan="4">TOTAL</td>
    <td>${formatNumber(totals.basic)}</td>
    <td>${formatNumber(totals.da)}</td>
    <td>${formatNumber(totals.hda)}</td>
    <td>${formatNumber(totals.ma)}</td>
    <td>${formatNumber(totals.sa)}</td>
    <td>${formatNumber(totals.hra)}</td>
    <td>${formatNumber(totals.wa)}</td>
    <td>${formatNumber(totals.epfa)}</td>
    <td>${formatNumber(totals.epsa)}</td>
    <td>${formatNumber(totals.gross)}</td>
    <td>${formatNumber(totals.gis)}</td>
    <td>${formatNumber(totals.tds)}</td>
    <td>${formatNumber(totals.epf)}</td>
    <td>${formatNumber(totals.fps)}</td>
    <td>${formatNumber(totals.totalDed)}</td>
    <td>${formatNumber(totals.netSalary)}</td>
  </tr>
`;
}

function updateDistrictBasic(index, value) {
  districtEmployees[index].basic = Number(value) || 0;
  renderDistrictTable();
}

function updateDistrictTds(index, value) {
  districtEmployees[index].tds = Number(value) || 0;
  renderDistrictTable();
}

renderDistrictTable();
