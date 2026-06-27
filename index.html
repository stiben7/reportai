<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ReportAI — Agency Client Report Generator</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:        #EEE9DF;
      --surface-1: #F5F2EC;
      --surface-2: #FFFFFF;
      --oatmeal:   #C9C1B1;
      --navy:      #2C3B4D;
      --navy-deep: #1B2632;
      --flame:     #FFB162;
      --truffle:   #A35139;
      --text-primary:   #1B2632;
      --text-secondary: #4a4438;
      --text-muted:     #8a8070;
      --border:         rgba(201,193,177,0.5);
      --border-strong:  rgba(201,193,177,0.9);
      --radius: 8px;
      --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      --font-mono: 'SF Mono', 'Fira Code', monospace;
    }

    body { font-family: var(--font-sans); background: var(--bg); color: var(--text-primary); min-height: 100vh; }
    .page { max-width: 760px; margin: 0 auto; padding: 2rem 1.25rem 4rem; }

    /* Topbar */
    .topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }
    .logo { display: flex; align-items: center; gap: 12px; }
    .logo-mark { width: 36px; height: 36px; background: var(--navy); border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .logo-mark i { color: var(--flame); font-size: 18px; }
    .logo-name { font-size: 18px; font-weight: 700; color: var(--navy-deep); letter-spacing: -0.3px; }
    .logo-sub { font-size: 12px; color: var(--text-muted); }
    .topbar-right { display: flex; align-items: center; gap: 10px; }
    .build-badge { display: inline-flex; align-items: center; gap: 5px; background: var(--surface-1); border: 0.5px solid var(--border-strong); border-radius: 20px; padding: 3px 10px; font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); }
    .cog-btn { width: 36px; height: 36px; border: 0.5px solid var(--border-strong); border-radius: var(--radius); background: var(--surface-1); cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: background 0.1s, color 0.1s; }
    .cog-btn:hover { background: var(--surface-2); color: var(--navy); }
    .cog-btn.active { background: var(--navy); color: var(--flame); border-color: var(--navy); }

    /* Settings panel */
    .settings-panel { background: var(--surface-2); border: 0.5px solid var(--border-strong); border-radius: 12px; margin-bottom: 1.25rem; overflow: hidden; }
    .settings-tabs { display: flex; border-bottom: 0.5px solid var(--border-strong); background: var(--surface-1); }
    .stab { flex: 1; padding: 11px; background: none; border: none; border-bottom: 2px solid transparent; margin-bottom: -1px; font-size: 13px; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 7px; font-family: var(--font-sans); transition: color 0.1s; }
    .stab.active { color: var(--navy-deep); border-bottom-color: var(--flame); font-weight: 500; }
    .stab:hover:not(.active) { color: var(--text-primary); }
    .settings-body { padding: 1.375rem; }
    .profile-row { display: flex; align-items: center; gap: 12px; padding: 1rem; background: var(--bg); border-radius: var(--radius); margin-bottom: 1.125rem; border: 0.5px solid var(--border-strong); }
    .avatar { width: 42px; height: 42px; border-radius: 50%; background: var(--navy); display: flex; align-items: center; justify-content: center; color: var(--flame); font-size: 15px; font-weight: 700; flex-shrink: 0; }

    /* Fields */
    .field { margin-bottom: 1rem; }
    .field:last-of-type { margin-bottom: 0; }
    .field label { display: block; font-size: 13px; color: var(--text-secondary); margin-bottom: 5px; font-weight: 500; }
    .field input, .field select { width: 100%; padding: 9px 11px; font-size: 14px; border: 0.5px solid var(--border-strong); border-radius: var(--radius); background: var(--bg); color: var(--text-primary); font-family: var(--font-sans); transition: border-color 0.15s; }
    .field input:focus, .field select:focus { outline: none; border-color: var(--flame); box-shadow: 0 0 0 3px rgba(255,177,98,0.15); }
    .field .hint { font-size: 12px; color: var(--text-muted); margin-top: 5px; line-height: 1.5; }
    .field .hint a { color: var(--truffle); }
    .save-row { display: flex; justify-content: flex-end; margin-top: 1.125rem; }
    .save-btn { padding: 8px 18px; background: var(--navy); color: #fff; border: none; border-radius: var(--radius); font-size: 13px; font-weight: 600; cursor: pointer; font-family: var(--font-sans); transition: opacity 0.15s; }
    .save-btn:hover { opacity: 0.85; }

    /* Hero */
    .hero { margin-bottom: 1.75rem; }
    .hero h1 { font-size: 24px; font-weight: 700; color: var(--navy-deep); margin-bottom: 8px; line-height: 1.25; letter-spacing: -0.4px; }
    .hero p { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
    .steps { display: flex; flex-direction: column; background: var(--surface-2); border: 0.5px solid var(--border-strong); border-radius: 12px; overflow: hidden; }
    .step { display: flex; gap: 14px; padding: 14px 16px; border-bottom: 0.5px solid var(--border-strong); }
    .step:last-child { border-bottom: none; }
    .step-num { width: 24px; height: 24px; border-radius: 50%; background: var(--navy); color: var(--flame); font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
    .step-title { font-size: 13px; font-weight: 600; color: var(--navy-deep); margin-bottom: 3px; }
    .step-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }

    /* Cards */
    .card { background: var(--surface-2); border: 0.5px solid var(--border-strong); border-radius: 12px; padding: 1.375rem; margin-bottom: 1rem; }
    .card-title { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.125rem; }

    /* Buttons */
    .btn-primary { width: 100%; padding: 12px; background: var(--navy); color: #fff; border: none; border-radius: var(--radius); font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-sans); transition: background 0.15s; }
    .btn-primary:hover { background: var(--navy-deep); }
    .btn-ghost { padding: 7px 13px; background: transparent; border: 0.5px solid var(--border-strong); border-radius: var(--radius); font-size: 13px; color: var(--text-secondary); cursor: pointer; display: inline-flex; align-items: center; gap: 6px; transition: background 0.1s, color 0.1s; font-family: var(--font-sans); }
    .btn-ghost:hover { background: var(--bg); color: var(--navy); }
    .sample-btn { font-size: 12px; color: var(--truffle); background: none; border: none; cursor: pointer; padding: 0; text-decoration: underline; font-family: var(--font-sans); font-weight: 500; }

    /* Sheet analyzer */
    .analyze-row { display: flex; gap: 8px; }
    .analyze-row input { flex: 1; padding: 9px 11px; font-size: 14px; border: 0.5px solid var(--border-strong); border-radius: var(--radius); background: var(--bg); color: var(--text-primary); font-family: var(--font-sans); transition: border-color 0.15s; }
    .analyze-row input:focus { outline: none; border-color: var(--flame); box-shadow: 0 0 0 3px rgba(255,177,98,0.15); }
    .analyze-btn { padding: 9px 16px; background: var(--navy); color: #fff; border: none; border-radius: var(--radius); font-size: 13px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; font-family: var(--font-sans); transition: background 0.15s; }
    .analyze-btn:hover { background: var(--navy-deep); }
    .analyze-btn:disabled { opacity: 0.4; cursor: not-allowed; }

    /* Sheet list */
    .sheet-list { margin-top: 1rem; display: flex; flex-direction: column; gap: 6px; }
    .sheet-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 0.5px solid var(--border-strong); border-radius: var(--radius); cursor: pointer; background: var(--bg); transition: border-color 0.15s, background 0.1s; }
    .sheet-item:hover { border-color: var(--oatmeal); background: var(--surface-1); }
    .sheet-item.selected { border-color: var(--flame); background: var(--surface-2); }
    .sheet-item-left { display: flex; align-items: center; gap: 10px; }
    .sheet-item-left i { font-size: 16px; color: var(--text-muted); }
    .sheet-item.selected .sheet-item-left i { color: var(--flame); }
    .sheet-name { font-size: 13px; font-weight: 600; color: var(--text-primary); }
    .sheet-meta { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
    .sheet-check { width: 18px; height: 18px; border-radius: 50%; border: 0.5px solid var(--border-strong); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .sheet-item.selected .sheet-check { background: var(--flame); border-color: var(--flame); color: var(--navy-deep); }

    /* Preview table */
    .preview-table-wrap { margin-top: 1rem; border: 0.5px solid var(--border-strong); border-radius: var(--radius); overflow: hidden; }
    .preview-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); padding: 8px 12px; border-bottom: 0.5px solid var(--border-strong); background: var(--bg); }
    .preview-table { width: 100%; border-collapse: collapse; font-size: 12px; }
    .preview-table th { text-align: left; padding: 6px 10px; border-bottom: 0.5px solid var(--border-strong); color: var(--text-secondary); font-weight: 600; white-space: nowrap; background: var(--surface-1); }
    .preview-table td { padding: 5px 10px; border-bottom: 0.5px solid var(--border); color: var(--text-primary); white-space: nowrap; }
    .preview-table tr:last-child td { border-bottom: none; }

    /* Alerts */
    .status-bar { display: flex; align-items: center; gap: 10px; padding: 12px; background: rgba(255,177,98,0.12); border: 0.5px solid rgba(255,177,98,0.4); border-radius: var(--radius); margin-bottom: 1rem; font-size: 13px; color: var(--navy-deep); }
    .spinner { width: 14px; height: 14px; border: 2px solid rgba(255,177,98,0.3); border-top-color: var(--flame); border-radius: 50%; animation: spin 0.7s linear infinite; flex-shrink: 0; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .error-bar { display: flex; align-items: flex-start; gap: 10px; padding: 12px; background: rgba(163,81,57,0.08); border: 0.5px solid rgba(163,81,57,0.3); border-radius: var(--radius); margin-bottom: 1rem; font-size: 13px; color: var(--truffle); line-height: 1.5; }

    /* Report */
    .report-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .report-title { font-size: 21px; font-weight: 700; color: var(--navy-deep); line-height: 1.3; letter-spacing: -0.3px; }
    .report-meta { font-size: 13px; color: var(--text-muted); margin-top: 4px; }
    .report-actions { display: flex; gap: 8px; flex-shrink: 0; flex-wrap: wrap; }
    .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 1rem; }
    .metric-card { background: var(--bg); border-radius: var(--radius); padding: 0.875rem; border: 0.5px solid var(--border-strong); }
    .metric-label { font-size: 11px; color: var(--text-muted); margin-bottom: 4px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
    .metric-value { font-size: 20px; font-weight: 700; color: var(--navy-deep); }
    .section-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 10px; }
    .prose { font-size: 14px; line-height: 1.8; color: var(--text-primary); white-space: pre-wrap; }
    .insight-block { border-left: 2.5px solid var(--flame); padding-left: 14px; margin-bottom: 12px; border-radius: 0; }
    .insight-block p { font-size: 14px; line-height: 1.7; color: var(--text-primary); }
    .divider { border: none; border-top: 0.5px solid var(--border-strong); margin: 1.375rem 0; }

    /* Tabs */
    .tab-row { display: flex; gap: 4px; margin-bottom: 1.25rem; }
    .tab { padding: 5px 13px; border-radius: 20px; font-size: 13px; cursor: pointer; background: none; border: 0.5px solid transparent; color: var(--text-muted); font-family: var(--font-sans); transition: background 0.1s; }
    .tab.active { background: var(--navy); color: #fff; border-color: var(--navy); font-weight: 500; }
    .tab:hover:not(.active) { background: var(--bg); color: var(--text-primary); }

    /* Raw table */
    .raw-table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .raw-table th { text-align: left; padding: 7px 10px; border-bottom: 0.5px solid var(--border-strong); color: var(--text-secondary); font-weight: 600; white-space: nowrap; background: var(--bg); }
    .raw-table td { padding: 7px 10px; border-bottom: 0.5px solid var(--border); color: var(--text-primary); }
    .raw-table tr:last-child td { border-bottom: none; }

    /* Export */
    .export-card { background: var(--surface-2); border: 0.5px solid var(--border-strong); border-radius: 12px; padding: 1.375rem; margin-top: 1rem; }
    .export-title { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; }
    .export-options { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .export-btn { display: flex; align-items: center; gap: 12px; padding: 13px 14px; border: 0.5px solid var(--border-strong); border-radius: var(--radius); background: var(--bg); cursor: pointer; transition: border-color 0.15s, background 0.1s; font-family: var(--font-sans); text-align: left; }
    .export-btn:hover { border-color: var(--flame); background: var(--surface-2); }
    .export-icon { width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 20px; }
    .export-icon.pptx { background: rgba(255,177,98,0.15); color: var(--truffle); }
    .export-icon.docx { background: rgba(44,59,77,0.1); color: var(--navy); }
    .export-label { font-size: 13px; font-weight: 600; color: var(--text-primary); }
    .export-desc { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
    .export-generating { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--navy); margin-top: 1rem; }

    /* Footer */
    .footer { text-align: center; margin-top: 3rem; font-size: 12px; color: var(--text-muted); }

    @media (max-width: 500px) { .export-options { grid-template-columns: 1fr; } }
    @media print {
      body { background: #fff; }
      .topbar, .settings-panel, .hero, .tab-row, .report-actions, .btn-primary, .export-card, .footer { display: none !important; }
      .card { border: none; padding: 0; }
      .page { padding: 0; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- Topbar -->
  <div class="topbar">
    <div class="logo">
      <div class="logo-mark"><i class="ti ti-report-analytics" aria-hidden="true"></i></div>
      <div>
        <div class="logo-name">ReportAI</div>
        <div class="logo-sub">Agency client report generator</div>
      </div>
    </div>
    <div class="topbar-right">
      <div class="build-badge"><i class="ti ti-clock" aria-hidden="true"></i>&nbsp;Built in 1h 50m</div>
      <button class="cog-btn" id="cog-btn" onclick="toggleSettings()" aria-label="Settings">
        <i class="ti ti-settings" style="font-size:18px;" aria-hidden="true"></i>
      </button>
    </div>
  </div>

  <!-- Settings panel -->
  <div class="settings-panel" id="settings-panel" style="display:none;">
    <div class="settings-tabs">
      <button class="stab active" id="stab-profile" onclick="switchStab('profile')">
        <i class="ti ti-user" style="font-size:15px;" aria-hidden="true"></i> Profile
      </button>
      <button class="stab" id="stab-about" onclick="switchStab('about')">
        <i class="ti ti-info-circle" style="font-size:15px;" aria-hidden="true"></i> About
      </button>
    </div>
    <div class="settings-body">
      <div id="stab-body-profile">
        <div class="profile-row">
          <div class="avatar" id="avatar-initials">?</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--navy-deep);" id="profile-display-name">Your name</div>
            <div style="font-size:12px;color:var(--text-muted);margin-top:2px;" id="profile-display-agency">Your agency</div>
          </div>
        </div>
        <div class="field">
          <label>Your name</label>
          <input type="text" id="profile-name" placeholder="Jane Smith" oninput="updateAvatar()" />
        </div>
        <div class="field">
          <label>Agency name</label>
          <input type="text" id="profile-agency" placeholder="Growth Studio" oninput="updateAvatar()" />
        </div>
        <div class="save-row">
          <button class="save-btn" id="save-profile-btn" onclick="saveProfile()">Save profile</button>
        </div>
      </div>
      <div id="stab-body-about" style="display:none;">
        <div style="font-size:14px;color:var(--text-secondary);line-height:1.7;">
          <p style="margin-bottom:10px;">ReportAI turns Google Sheets campaign data into polished client reports using Claude AI — in seconds.</p>
          <p style="margin-bottom:10px;">Built for marketing agencies to save hours of manual report writing per client per month.</p>
          <p style="font-size:12px;color:var(--text-muted);">Built in 1h 50m &nbsp;·&nbsp; Powered by Claude AI &nbsp;·&nbsp; Integrated with Google Sheets</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Input view -->
  <div id="view-input">
    <div class="hero">
      <h1>Turn campaign data into client-ready reports</h1>
      <p>Paste your Google Sheets link, pick a sheet, and ReportAI writes a polished performance report powered by Claude AI — then export as PowerPoint or Word.</p>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div>
            <div class="step-title">Paste your Google Sheets URL and analyze</div>
            <div class="step-desc">Make sure your sheet is shared publicly (File → Share → Anyone with the link → Viewer). Click Analyze to fetch all tabs.</div>
          </div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div>
            <div class="step-title">Pick your sheet and check the preview</div>
            <div class="step-desc">Select the correct tab — you'll see a live 3-row preview to confirm it's the right data before generating.</div>
          </div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div>
            <div class="step-title">Fill in report details and generate</div>
            <div class="step-desc">Enter the client name, period, and tone. Hit Generate — Claude reads your data and writes a complete report in about 10 seconds.</div>
          </div>
        </div>
        <div class="step">
          <div class="step-num">4</div>
          <div>
            <div class="step-title">Export as PowerPoint or Word</div>
            <div class="step-desc">Copy, print as PDF, or export slide-ready PowerPoint content and a formatted Word document to send to your client.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sheet analyzer -->
    <div class="card">
      <div class="card-title">Sheet analyzer</div>
      <div class="analyze-row">
        <input type="text" id="sheet-url" placeholder="https://docs.google.com/spreadsheets/d/..." />
        <button class="analyze-btn" id="analyze-btn" onclick="analyzeSheet()">
          <i class="ti ti-table-search" aria-hidden="true"></i> Analyze
        </button>
      </div>
      <div style="margin-top:8px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span style="font-size:12px;color:var(--text-muted);">Share sheet publicly: File → Share → Anyone with link → Viewer.</span>
        <button class="sample-btn" onclick="loadSample()">Use sample data instead</button>
        <span style="font-size:12px;color:var(--text-muted);">·</span>
        <button class="sample-btn" id="change-url-btn" onclick="changeUrl()" style="color:var(--navy);display:none;"><i class="ti ti-edit" style="font-size:12px;vertical-align:-1px;" aria-hidden="true"></i> Change URL</button>
      </div>
      <div id="sheet-list-wrap" style="display:none;">
        <div class="sheet-list" id="sheet-list"></div>
        <div id="sheet-preview-wrap" style="display:none;">
          <div class="preview-table-wrap">
            <div class="preview-label" id="preview-label">Preview</div>
            <div style="overflow-x:auto;"><table class="preview-table" id="preview-table"></table></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Report settings -->
    <div class="card">
      <div class="card-title">Report settings</div>
      <div class="field">
        <label>Client name</label>
        <input type="text" id="client-name" placeholder="Acme Corp" />
      </div>
      <div class="field">
        <label>Report period</label>
        <input type="text" id="report-period" placeholder="Q2 2026 (April – June)" />
      </div>
      <div class="field">
        <label>Tone</label>
        <select id="tone">
          <option value="professional">Professional</option>
          <option value="friendly">Friendly and conversational</option>
          <option value="executive">Executive summary (brief)</option>
        </select>
      </div>
    </div>

    <div id="error-box" style="display:none;"></div>
    <button class="btn-primary" onclick="startGenerate()">
      <i class="ti ti-sparkles" aria-hidden="true"></i> Generate report
    </button>
  </div>

  <!-- Loading view -->
  <div id="view-loading" style="display:none;">
    <div class="status-bar">
      <div class="spinner"></div>
      <span id="loading-msg">Reading campaign data…</span>
    </div>
    <div class="card" style="opacity:0.4;pointer-events:none;">
      <div style="height:220px;display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:13px;">Generating your report…</div>
    </div>
  </div>

  <!-- Report view -->
  <div id="view-report" style="display:none;">
    <div class="card">
      <div class="report-header">
        <div>
          <div class="report-title" id="rpt-title">Client Report</div>
          <div class="report-meta" id="rpt-meta"></div>
        </div>
        <div class="report-actions">
          <button class="btn-ghost" onclick="copyReport()"><i class="ti ti-copy" aria-hidden="true"></i> Copy</button>
          <button class="btn-ghost" onclick="window.print()"><i class="ti ti-printer" aria-hidden="true"></i> Print</button>
          <button class="btn-ghost" onclick="resetApp()"><i class="ti ti-refresh" aria-hidden="true"></i> New report</button>
        </div>
      </div>
      <div class="tab-row">
        <button class="tab active" onclick="switchTab('summary',this)">Summary</button>
        <button class="tab" onclick="switchTab('raw',this)">Raw data</button>
      </div>
      <div id="tab-summary">
        <div class="section-label">Performance overview</div>
        <div class="metrics-grid" id="rpt-metrics"></div>
        <hr class="divider">
        <div class="section-label">Executive summary</div>
        <div class="prose" id="rpt-summary" style="margin-bottom:1.25rem;"></div>
        <hr class="divider">
        <div class="section-label">Key insights</div>
        <div id="rpt-insights"></div>
        <hr class="divider">
        <div class="section-label">Recommendations</div>
        <div class="prose" id="rpt-recs"></div>
      </div>
      <div id="tab-raw" style="display:none;">
        <div class="section-label">Imported campaign data</div>
        <div id="rpt-raw-table" style="overflow-x:auto;"></div>
      </div>
    </div>

    <!-- Export -->
    <div class="export-card">
      <div class="export-title">Export report</div>
      <div class="export-options">
        <button class="export-btn" onclick="generateExport('pptx')">
          <div class="export-icon pptx"><i class="ti ti-presentation" aria-hidden="true"></i></div>
          <div>
            <div class="export-label">PowerPoint deck</div>
            <div class="export-desc">Slide-ready content for each section</div>
          </div>
        </button>
        <button class="export-btn" onclick="generateExport('docx')">
          <div class="export-icon docx"><i class="ti ti-file-text" aria-hidden="true"></i></div>
          <div>
            <div class="export-label">Word document</div>
            <div class="export-desc">Formatted .docx ready to send</div>
          </div>
        </button>
      </div>
      <div id="export-status" style="display:none;" class="export-generating">
        <div class="spinner"></div>
        <span id="export-msg">Generating content…</span>
      </div>
      <div id="export-output" style="display:none;margin-top:1rem;"></div>
    </div>
  </div>

  <div class="footer">ReportAI &mdash; Built for marketing agencies &mdash; <span style="font-family:var(--font-mono)">⏱ 1h 50m</span></div>
</div>

<script>
  const SAMPLE_DATA = [
    ['Account','Date of Insight','Campaign ID','Reach','Impressions','Cost per engagement','Amount spent','CPC','Link clicks'],
    ['Alpha Fitness','2025-01-01','NOV-AF-CMP-001','12450','45320','0.18','680.5','0.52','1310'],
    ['Bella Cafe','2025-01-01','NOV-BC-CMP-001','9830','30110','0.21','545','0.58','940'],
    ['Alpha Fitness','2025-02-01','NOV-CT-CMP-001','15600','52890','0.19','790.75','0.49','1620'],
    ['Bella Cafe','2025-02-01','NOV-DT-CMP-001','8420','24560','0.24','410.2','0.61','670'],
    ['Alpha Fitness','2025-03-01','NOV-EA-CMP-001','17950','61005','0.17','905.3','0.47','1930'],
    ['Bella Cafe','2025-03-01','NOV-AF-CMP-002','11230','38720','0.20','620.4','0.53','1170'],
  ];

  let rawData = [];
  let settingsOpen = false;
  let sheetsData = {};
  let reportContent = { title:'', meta:'', summary:'', insights:[], recs:'', metrics:[] };

  function toggleSettings() {
    settingsOpen = !settingsOpen;
    document.getElementById('settings-panel').style.display = settingsOpen ? 'block' : 'none';
    document.getElementById('cog-btn').classList.toggle('active', settingsOpen);
    if (settingsOpen) loadSavedSettings();
  }

  function loadSavedSettings() {
    document.getElementById('profile-name').value = localStorage.getItem('rpt_name') || '';
    document.getElementById('profile-agency').value = localStorage.getItem('rpt_agency') || '';
    updateAvatar();
  }

  function updateAvatar() {
    const name = document.getElementById('profile-name').value.trim();
    const agency = document.getElementById('profile-agency').value.trim();
    const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0,2).join('').toUpperCase() || '?';
    document.getElementById('avatar-initials').textContent = initials;
    document.getElementById('profile-display-name').textContent = name || 'Your name';
    document.getElementById('profile-display-agency').textContent = agency || 'Your agency';
  }

  function saveProfile() {
    localStorage.setItem('rpt_name', document.getElementById('profile-name').value.trim());
    localStorage.setItem('rpt_agency', document.getElementById('profile-agency').value.trim());
    updateAvatar();
    const btn = document.getElementById('save-profile-btn');
    btn.textContent = 'Saved';
    setTimeout(() => btn.textContent = 'Save profile', 1800);
  }

  function switchStab(tab) {
    ['profile','about'].forEach(t => {
      document.getElementById('stab-' + t).classList.toggle('active', t === tab);
      document.getElementById('stab-body-' + t).style.display = t === tab ? 'block' : 'none';
    });
  }

  function show(id) {
    ['view-input','view-loading','view-report'].forEach(v => {
      document.getElementById(v).style.display = v === id ? 'block' : 'none';
    });
  }

  function showError(msg) {
    const box = document.getElementById('error-box');
    if (!msg) { box.style.display = 'none'; return; }
    box.style.display = 'flex';
    box.className = 'error-bar';
    box.innerHTML = '<i class="ti ti-alert-circle" aria-hidden="true"></i><span>' + msg + '</span>';
  }

  function loadSample() {
    rawData = SAMPLE_DATA;
    sheetsData = { 'Sample Campaign Data': SAMPLE_DATA };
    document.getElementById('sheet-url').value = 'sample://demo-data';
    document.getElementById('sheet-url').disabled = true;
    document.getElementById('analyze-btn').disabled = true;
    document.getElementById('change-url-btn').style.display = 'inline';
    renderSheetList(['Sample Campaign Data'], true);
    selectSheet('Sample Campaign Data');
    showError('');
  }

  function changeUrl() {
    const input = document.getElementById('sheet-url');
    input.disabled = false;
    input.value = '';
    input.focus();
    document.getElementById('analyze-btn').disabled = false;
    document.getElementById('sheet-list-wrap').style.display = 'none';
    document.getElementById('sheet-preview-wrap').style.display = 'none';
    document.getElementById('change-url-btn').style.display = 'none';
    sheetsData = {};
    rawData = [];
    showError('');
  }

  function resetAnalyzer() {
    document.getElementById('sheet-url').disabled = false;
    document.getElementById('sheet-url').value = '';
    document.getElementById('analyze-btn').disabled = false;
    document.getElementById('sheet-list-wrap').style.display = 'none';
    document.getElementById('sheet-preview-wrap').style.display = 'none';
    document.getElementById('change-url-btn').style.display = 'none';
    sheetsData = {};
    rawData = [];
  }

  async function analyzeSheet() {
    const url = document.getElementById('sheet-url').value.trim();
    if (!url) { showError('Enter a Google Sheets URL first.'); return; }
    const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
    if (!match) { showError('Could not parse the Sheet ID. Copy the full Google Sheets URL.'); return; }
    const sheetId = match[1];
    const btn = document.getElementById('analyze-btn');
    btn.disabled = true;
    btn.innerHTML = '<div style="width:12px;height:12px;border:2px solid rgba(255,255,255,0.3);border-top-color:#fff;border-radius:50%;animation:spin 0.7s linear infinite;flex-shrink:0;"></div> Analyzing…';
    try {
      const metaRes = await fetch('/api/sheets?sheetId=' + sheetId + '&metaOnly=true');
      if (!metaRes.ok) { const e = await metaRes.json().catch(() => ({})); throw new Error(e?.error || 'Could not read spreadsheet. Make sure it is shared publicly.'); }
      const meta = await metaRes.json();
      const sheetNames = meta.sheets.map(s => s.properties.title);
      sheetsData = {};
      for (const name of sheetNames) {
        const r = await fetch('/api/sheets?sheetId=' + sheetId + '&range=' + encodeURIComponent(name + '!A1:Z200'));
        if (r.ok) { const d = await r.json(); if (d.values && d.values.length > 1) sheetsData[name] = d.values; }
      }
      renderSheetList(Object.keys(sheetsData), false);
      document.getElementById('change-url-btn').style.display = 'inline';
      showError('');
    } catch (err) {
      showError(err.message || 'Could not connect to Google Sheets.');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="ti ti-table-search" aria-hidden="true"></i> Analyze';
    }
  }

  function renderSheetList(names, isSample) {
    const wrap = document.getElementById('sheet-list-wrap');
    const list = document.getElementById('sheet-list');
    wrap.style.display = 'block';
    if (!names.length) { list.innerHTML = '<div style="font-size:13px;color:var(--text-muted);padding:8px 0;">No sheets with data found.</div>'; return; }
    list.innerHTML = names.map(name => {
      const rows = sheetsData[name] ? sheetsData[name].length - 1 : 0;
      const cols = sheetsData[name] ? sheetsData[name][0].length : 0;
      const sid = name.replace(/[^a-zA-Z0-9]/g, '_');
      return '<div class="sheet-item" id="si_' + sid + '" onclick="selectSheet(\'' + name.replace(/\\/g,'\\\\').replace(/'/g,"\\'") + '\')">' +
        '<div class="sheet-item-left"><i class="ti ti-table" aria-hidden="true"></i>' +
        '<div><div class="sheet-name">' + name + '</div>' +
        '<div class="sheet-meta">' + rows + ' rows · ' + cols + ' columns' + (isSample ? ' · sample data' : '') + '</div></div></div>' +
        '<div class="sheet-check" id="sc_' + sid + '"></div></div>';
    }).join('');
  }

  function selectSheet(name) {
    document.querySelectorAll('.sheet-item').forEach(el => el.classList.remove('selected'));
    document.querySelectorAll('.sheet-check').forEach(el => el.innerHTML = '');
    const sid = name.replace(/[^a-zA-Z0-9]/g, '_');
    const item = document.getElementById('si_' + sid);
    const check = document.getElementById('sc_' + sid);
    if (item) item.classList.add('selected');
    if (check) check.innerHTML = '<i class="ti ti-check" style="font-size:12px;" aria-hidden="true"></i>';
    rawData = sheetsData[name];
    renderPreview(name);
  }

  function renderPreview(name) {
    const data = sheetsData[name];
    const wrap = document.getElementById('sheet-preview-wrap');
    if (!data || data.length < 2) { wrap.style.display = 'none'; return; }
    wrap.style.display = 'block';
    document.getElementById('preview-label').textContent = 'Preview — ' + name + ' (first 3 rows)';
    const headers = data[0];
    const rows = data.slice(1, 4);
    document.getElementById('preview-table').innerHTML =
      '<thead><tr>' + headers.map(h => '<th>' + h + '</th>').join('') + '</tr></thead>' +
      '<tbody>' + rows.map(r => '<tr>' + headers.map((_, i) => '<td>' + (r[i] || '—') + '</td>').join('') + '</tr>').join('') + '</tbody>';
  }

  function computeMetrics(data) {
    const headers = data[0].map(h => h.toLowerCase());
    const rows = data.slice(1);
    const col = n => headers.findIndex(h => h.includes(n));
    const parseNum = v => { if (!v || v === '—') return null; return parseFloat(String(v).replace(/[$,%x]/g,'')) || null; };
    const sum = ci => rows.reduce((a,r) => { const n = parseNum(r[ci]); return n !== null ? a + n : a; }, 0);
    const metrics = [];
    const ri = col('reach'); if (ri >= 0) { const v = sum(ri); metrics.push({ label:'Total reach', value: v >= 1e6 ? (v/1e6).toFixed(2)+'M' : v.toLocaleString() }); }
    const ii = col('impression'); if (ii >= 0) { const v = sum(ii); metrics.push({ label:'Total impressions', value: v >= 1e6 ? (v/1e6).toFixed(2)+'M' : v.toLocaleString() }); }
    const si = col('amount spent') >= 0 ? col('amount spent') : col('spend'); if (si >= 0) metrics.push({ label:'Total spent', value: '$'+Math.round(sum(si)).toLocaleString() });
    const li = col('link click'); if (li >= 0) metrics.push({ label:'Link clicks', value: Math.round(sum(li)).toLocaleString() });
    const ci = col('cpc'); if (ci >= 0) { const avg = rows.reduce((a,r,_,arr)=>{ const n=parseNum(r[ci]); return n!==null?a+n/arr.length:a; },0); metrics.push({ label:'Avg CPC', value: '$'+avg.toFixed(2) }); }
    const ei = col('cost per eng') >= 0 ? col('cost per eng') : col('engagement'); if (ei >= 0) { const avg = rows.reduce((a,r,_,arr)=>{ const n=parseNum(r[ei]); return n!==null?a+n/arr.length:a; },0); metrics.push({ label:'Avg CPE', value: '$'+avg.toFixed(2) }); }
    return metrics;
  }

  async function callAI(messages, maxTokens) {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, max_tokens: maxTokens || 1200 })
    });
    if (!res.ok) { const e = await res.json().catch(() => ({})); throw new Error(e?.error || 'AI generation failed. Try again.'); }
    const json = await res.json();
    return json.content?.[0]?.text || '';
  }

  function parseReport(text) {
    const s = { summary:'', insights:[], recommendations:'' };
    let cur = '', buf = '';
    for (const line of text.split('\n')) {
      const l = line.trim();
      if (/^#+\s*executive summary/i.test(l) || /^executive summary/i.test(l)) { cur='summary'; continue; }
      if (/^#+\s*key insight/i.test(l) || /^key insight/i.test(l)) { cur='insights'; continue; }
      if (/^#+\s*recommendation/i.test(l) || /^recommendation/i.test(l)) { if (buf) { s.insights.push(buf.trim()); buf=''; } cur='recs'; continue; }
      if (cur==='summary') s.summary += l+'\n';
      else if (cur==='insights') {
        if (/^[-•*]\s/.test(l)||/^\d+\.\s/.test(l)) { if (buf) s.insights.push(buf.trim()); buf=l.replace(/^[-•*\d.]\s+/,''); }
        else if (l && buf) buf += ' '+l;
        else if (l) buf = l;
      } else if (cur==='recs') s.recommendations += l+'\n';
    }
    if (buf) s.insights.push(buf.trim());
    if (!s.insights.length && !s.summary) s.summary = text;
    return s;
  }

  async function startGenerate() {
    showError('');
    if (!rawData || !rawData.length) { showError('Select a sheet first — use Analyze or load sample data.'); return; }
    const client = document.getElementById('client-name').value.trim() || 'the client';
    const period = document.getElementById('report-period').value.trim() || 'the reporting period';
    const tone = document.getElementById('tone').value;
    const toneGuide = { professional:'formal and professional', friendly:'friendly and conversational, warm but data-driven', executive:'concise executive style — brevity is key' }[tone];
    show('view-loading');
    try {
      document.getElementById('loading-msg').textContent = 'Analyzing campaign data…';
      await new Promise(r => setTimeout(r, 400));
      const tableText = [rawData[0].join(' | '), ...rawData.slice(1).map(r => r.join(' | '))].join('\n');
      const prompt = 'You are a senior performance marketing strategist writing a client report for ' + client + ' covering ' + period + '.\n\nCampaign data:\n' + tableText + '\n\nWrite a report with exactly these three sections:\n## Executive Summary\n## Key Insights\n## Recommendations\n\nTone: ' + toneGuide + '. In Key Insights use 3-5 bullet points starting with "-". Reference specific numbers. Be direct and actionable.';
      document.getElementById('loading-msg').textContent = 'Writing your report with AI…';
      const text = await callAI([{ role:'user', content: prompt }], 1200);
      document.getElementById('loading-msg').textContent = 'Formatting report…';
      await new Promise(r => setTimeout(r, 300));
      const parsed = parseReport(text);
      const metrics = computeMetrics(rawData);
      const title = client + ' — Performance Report';
      const meta = period + ' · Generated ' + new Date().toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' });
      reportContent = { title, meta, summary: parsed.summary.trim(), insights: parsed.insights, recs: parsed.recommendations.trim(), metrics };
      document.getElementById('rpt-title').textContent = title;
      document.getElementById('rpt-meta').textContent = meta;
      document.getElementById('rpt-metrics').innerHTML = metrics.map(m => '<div class="metric-card"><div class="metric-label">'+m.label+'</div><div class="metric-value">'+m.value+'</div></div>').join('');
      document.getElementById('rpt-summary').textContent = parsed.summary.trim();
      document.getElementById('rpt-insights').innerHTML = parsed.insights.length
        ? parsed.insights.map(i => '<div class="insight-block"><p>'+i+'</p></div>').join('')
        : '<div class="insight-block"><p>'+parsed.summary.trim()+'</p></div>';
      document.getElementById('rpt-recs').textContent = parsed.recommendations.trim();
      document.getElementById('rpt-raw-table').innerHTML = '<table class="raw-table"><thead><tr>'+rawData[0].map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+rawData.slice(1).map(r=>'<tr>'+rawData[0].map((_,i)=>'<td>'+(r[i]||'—')+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
      document.getElementById('export-output').style.display = 'none';
      document.getElementById('export-status').style.display = 'none';
      show('view-report');
    } catch (err) {
      show('view-input');
      showError(err.message || 'Something went wrong. Try again.');
    }
  }

  function switchTab(tab, btn) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-summary').style.display = tab==='summary' ? 'block' : 'none';
    document.getElementById('tab-raw').style.display = tab==='raw' ? 'block' : 'none';
  }

  function copyReport() {
    const insights = reportContent.insights.map(i => '• '+i).join('\n');
    const full = reportContent.title+'\n'+reportContent.meta+'\n\nEXECUTIVE SUMMARY\n'+reportContent.summary+'\n\nKEY INSIGHTS\n'+insights+'\n\nRECOMMENDATIONS\n'+reportContent.recs;
    navigator.clipboard.writeText(full).then(() => {
      const btn = document.querySelector('[onclick="copyReport()"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="ti ti-check"></i> Copied';
      setTimeout(() => btn.innerHTML = orig, 2000);
    });
  }

  async function generateExport(type) {
    const status = document.getElementById('export-status');
    const output = document.getElementById('export-output');
    status.style.display = 'flex';
    output.style.display = 'none';
    document.getElementById('export-msg').textContent = type==='pptx' ? 'Generating PowerPoint content…' : 'Generating Word document content…';
    const metricsText = reportContent.metrics.map(m => m.label+': '+m.value).join(' | ');
    const insightsText = reportContent.insights.map((i,n) => (n+1)+'. '+i).join('\n');
    const prompt = type === 'pptx'
      ? 'Create PowerPoint slide content for: ' + reportContent.title + '\nPeriod: ' + reportContent.meta + '\nMetrics: ' + metricsText + '\nSummary: ' + reportContent.summary + '\nInsights:\n' + insightsText + '\nRecommendations: ' + reportContent.recs + '\n\nFormat as:\nSLIDE 1 — TITLE\nTitle: ...\nSubtitle: ...\n\nSLIDE 2 — PERFORMANCE OVERVIEW\nTitle: Performance Overview\nBullets: ...\n\nSLIDE 3 — EXECUTIVE SUMMARY\nTitle: Executive Summary\nBody: ...\n\nSLIDE 4 — KEY INSIGHTS\nTitle: Key Insights\nBullets: ...\n\nSLIDE 5 — RECOMMENDATIONS\nTitle: Recommendations\nBullets: ...\n\nSLIDE 6 — THANK YOU\nTitle: Thank You\nBody: ...\n\nKeep each slide concise.'
      : 'Create a Word document for: ' + reportContent.title + '\nPeriod: ' + reportContent.meta + '\nMetrics: ' + metricsText + '\nSummary: ' + reportContent.summary + '\nInsights:\n' + insightsText + '\nRecommendations: ' + reportContent.recs + '\n\nFormat using:\n# ' + reportContent.title + '\n\n## Performance Overview\n\n## Executive Summary\n\n## Key Insights\n\n## Recommendations\n\n## Next Steps\n\nWrite in a polished, client-ready tone.';
    try {
      const text = await callAI([{ role:'user', content: prompt }], 1500);
      status.style.display = 'none';
      output.style.display = 'block';
      const icon = type==='pptx' ? 'ti-presentation' : 'ti-file-text';
      const color = type==='pptx' ? 'var(--truffle)' : 'var(--navy)';
      const label = type==='pptx' ? 'PowerPoint content' : 'Word document content';
      const escaped = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      output.innerHTML = '<div style="border:0.5px solid var(--border-strong);border-radius:var(--radius);overflow:hidden;">' +
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--bg);border-bottom:0.5px solid var(--border-strong);">' +
        '<div style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--navy-deep);"><i class="ti '+icon+'" style="color:'+color+';font-size:16px;" aria-hidden="true"></i> '+label+' ready</div>' +
        '<button class="btn-ghost" style="font-size:12px;padding:4px 10px;" onclick="copyExport()"><i class="ti ti-copy" aria-hidden="true"></i> Copy all</button></div>' +
        '<pre id="export-text" style="padding:14px;font-size:12px;line-height:1.7;color:var(--text-primary);white-space:pre-wrap;font-family:var(--font-mono);max-height:340px;overflow-y:auto;background:var(--surface-2);">'+escaped+'</pre></div>' +
        '<div style="font-size:12px;color:var(--text-muted);margin-top:8px;">Copy the content above and paste it into '+(type==='pptx'?'PowerPoint':'Word')+' — each section maps to a slide or heading.</div>';
    } catch (err) {
      status.style.display = 'none';
      output.style.display = 'block';
      output.innerHTML = '<div class="error-bar"><i class="ti ti-alert-circle" aria-hidden="true"></i><span>'+(err.message||'Export failed. Try again.')+'</span></div>';
    }
  }

  function copyExport() {
    const text = document.getElementById('export-text')?.textContent || '';
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.querySelector('[onclick="copyExport()"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="ti ti-check"></i> Copied';
      setTimeout(() => btn.innerHTML = orig, 2000);
    });
  }

  function resetApp() {
    resetAnalyzer();
    showError('');
    show('view-input');
  }
</script>
</body>
</html>
