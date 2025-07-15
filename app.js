let tb = [];
let at = 0;

function newTab() {
  tb.push({ his: [], idx: -1 });
  at = tb.length - 1;
  draw();
}

function setTab(i) {
  at = i;
  draw();
}

function nav() {
  const val = document.getElementById('inp').value;
  if (!val) return;
  let t = tb[at];
  t.his = t.his.slice(0, t.idx + 1);
  t.his.push(val);
  t.idx++;
  draw();
}

function back() {
  if (tb[at].idx > 0) {
    tb[at].idx--;
    draw();
  }
}

function fwd() {
  if (tb[at].idx < tb[at].his.length - 1) {
    tb[at].idx++;
    draw();
  }
}

function draw() {
  const tbBtns = document.getElementById('tabs');
  tbBtns.innerHTML = tb.map((t, i) =>
    `<button onclick="setTab(${i})" class="px-4 py-1 rounded ${i === at ? 'bg-blue-600 text-white' : 'bg-gray-200'}">Tab ${i + 1}</button>`
  ).join(' ');

  const cur = tb[at];
  const view = document.getElementById('page');
  const inp = document.getElementById('inp');
  const val = cur.his[cur.idx] || '';

  inp.value = val;

  if (val) {
    view.innerHTML = `<iframe src="${val}" class="w-full h-[400px] border rounded" onerror="this.parentNode.innerHTML='❌ Page cannot be loaded (iframe blocked).'"></iframe>`;
  } else {
    view.textContent = "🌐 No page loaded";
  }
}

window.onload = () => {
  newTab();
};
