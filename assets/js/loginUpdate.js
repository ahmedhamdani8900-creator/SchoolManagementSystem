
  let selectedRole = 'Admin';
  function selectRole(el, role) {
    document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    selectedRole = role;
  }

  function doLogin() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('appLayout').style.display = 'block';
    document.getElementById('sidebarName').textContent = selectedRole + ' User';
    document.getElementById('sidebarRole').textContent = selectedRole === 'Admin' ? 'Administrator' : selectedRole === 'Teacher' ? 'Class Teacher' : 'Student';
    buildAttendance();
  }

  function doLogout() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('appLayout').style.display = 'none';
  }

  const pageTitles = { dashboard:'Dashboard', students:'Students', teachers:'Teachers', classes:'Classes & Sections', attendance:'Attendance', exams:'Exams & Results', fees:'Fee Management', reports:'Reports' };
  function goto(page, el) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('pageTitle').textContent = pageTitles[page];
    closeSidebar();
  }

  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
  }
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  }

  function openModal(id) { document.getElementById(id).classList.add('open'); }
  function closeModal(id) { document.getElementById(id).classList.remove('open'); }
  document.querySelectorAll('.modal-overlay').forEach(m => m.addEventListener('click', function(e) { if(e.target===this) this.classList.remove('open'); }));

  const students = ['Ahmed Ali','Sara Fatima','Hassan Raza','Ayesha Noor','Usman Tariq','Zara Malik','Ibrahim Shah','Amna Khalid','Bilal Ahmed','Rabia Hussain','Omer Farooq','Hira Khan','Shahzad Iqbal','Madiha Baig','Talha Mir','Nida Rahman','Faisal Yousuf','Saba Tariq','Waseem Shah','Kiran Malik','Adeel Raza','Sana Ali','Hamza Aziz','Asma Sheikh'];
  const statuses = ['present','present','present','present','present','present','present','present','present','present','present','present','present','present','present','present','present','present','present','present','absent','absent','absent','late','late'];
  let attData = [];

  function buildAttendance() {
    attData = students.map((n,i) => ({ name:n, roll:`#24${String(i+1).padStart(2,'0')}`, status: statuses[i]||'present' }));
    renderAtt();
  }

  function renderAtt() {
    const grid = document.getElementById('attGrid');
    grid.innerHTML = attData.map((s,i) => `
      <div class="att-card ${s.status}" onclick="cycleStatus(${i})">
        <div style="width:32px;height:32px;border-radius:50%;background:${s.status==='present'?'#86efac':s.status==='absent'?'#fca5a5':'#fcd34d'};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;flex-shrink:0">${s.name.split(' ').map(w=>w[0]).join('')}</div>
        <div><div class="att-name">${s.name}</div><div class="att-roll">${s.roll} · ${s.status}</div></div>
      </div>`).join('');
    const p=attData.filter(s=>s.status==='present').length, a=attData.filter(s=>s.status==='absent').length, l=attData.filter(s=>s.status==='late').length;
    document.getElementById('presentCount').textContent = 'Present: '+p;
    document.getElementById('absentCount').textContent = 'Absent: '+a;
    document.getElementById('lateCount').textContent = 'Late: '+l;
  }

  function cycleStatus(i) {
    const order = ['present','absent','late'];
    const idx = order.indexOf(attData[i].status);
    attData[i].status = order[(idx+1)%3];
    renderAtt();
  }

  function saveAttendance() {
    const btn = event.target;
    btn.textContent = '✓ Saved!';
    btn.style.background = '#16a34a';
    setTimeout(()=>{ btn.textContent='Save Attendance'; btn.style.background=''; }, 2000);
  }

  const examTabs = ['examList','resultEntry','resultView'];
  function switchTab(el, tabId) {
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    el.classList.add('active');
    examTabs.forEach(id => { const el=document.getElementById(id); if(el) el.style.display=id===tabId?'block':'none'; });
  }
