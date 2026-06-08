/*!
 * 艾瑟兰大陆 · 作战面板 v2.0 — 聊天内嵌版
 * 注入到聊天消息流末尾，无折叠/弹出
 */
(function(){
'use strict';
var CSS=`:root{--abg:#0c1119;--asf:#111827;--ael:#182032; --agd:#bfa06a;--agl:#d9c48e;--agm:#7d693f;--ags:#4a3f2a; --adg:#c75245;--ads:rgba(199,82,69,0.12);--adb:rgba(199,82,69,0.25); --amg:#7b92d0;--ams:rgba(123,146,208,0.12);--amb:rgba(123,146,208,0.25); --ast:#c4933d;--ass:rgba(196,147,61,0.12);--asb:rgba(196,147,61,0.25); --aen:#d4952a;--ahy:#4d94c4;--afa:#8b6b9e;--asc:#5a9470; --ane:#7d7d72;--aaf:#d4697a; --atx:#e3ddd0;--at2:#a09882;--at3:#6a6357; --abd:rgba(191,160,106,0.08);--abc:rgba(191,160,106,0.14);--aba:rgba(191,160,106,0.3); --as1:0 1px 3px rgba(0,0,0,0.3);--as2:0 4px 12px rgba(0,0,0,0.4); --ar1:3px;--ar2:6px;--ar3:10px;--ar4:14px; --afd:'Cinzel','Times New Roman',serif;--afb:'Noto Serif SC','Source Han Serif SC',serif; --a12:0.65rem;--a13:0.72rem;--a14:0.8rem;--a15:0.88rem;--a16:0.95rem; --aeo:cubic-bezier(0.16,1,0.3,1);--adf:150ms;--ads:250ms} .aiselan-inline-wrap{margin:16px 0;animation:aisFadeIn .3s var(--aeo)} @keyframes aisFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}} .aiselan-inline-inner{display:flex;flex-direction:column;gap:12px} .ais-panel-row{display:grid;grid-template-columns:1fr 1.2fr 0.9fr;gap:10px} .ais-panel-card{background:var(--asf);border:1px solid var(--abd);border-radius:var(--ar3);overflow:hidden;transition:border-color var(--adf) var(--aeo)} .ais-panel-card:hover{border-color:var(--abc)} .ais-panel-card-hd{display:flex;align-items:center;gap:6px;padding:8px 12px;font-family:var(--afd);font-size:var(--a13);font-weight:700;color:var(--agd);letter-spacing:0.06em;background:rgba(191,160,106,0.04);border-bottom:1px solid var(--abd)} .ais-panel-card-bd{padding:10px 12px;max-height:320px;overflow-y:auto} .ais-panel-card-bd::-webkit-scrollbar{width:3px} .ais-panel-card-bd::-webkit-scrollbar-thumb{background:var(--ags);border-radius:3px} .ais-scene-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:8px} .ais-scene-col{border-radius:var(--ar2);padding:8px;transition:all var(--adf) var(--aeo)} .ais-scene-col.hostile{border-top:2px solid var(--adg)} .ais-scene-col.neutral{border-top:2px solid var(--ane)} .ais-scene-col.friendly{border-top:2px solid var(--asc)} .ais-scene-col-hd{display:flex;align-items:center;gap:4px;margin-bottom:6px;padding-bottom:4px;border-bottom:1px solid var(--abd);font-size:var(--a12)} .ais-scene-col.hostile .ais-scene-col-title{color:var(--adg)} .ais-scene-col.neutral .ais-scene-col-title{color:var(--ane)} .ais-scene-col.friendly .ais-scene-col-title{color:var(--asc)} .ais-scene-col-title{font-family:var(--afd);font-weight:700;letter-spacing:0.04em;text-transform:uppercase;font-size:var(--a12)} .ais-scene-col-num{font-size:var(--a12);color:var(--at3);margin-left:auto;background:var(--abd);padding:1px 6px;border-radius:12px} .ais-unit{background:var(--ael);border:1px solid var(--abd);border-radius:var(--ar2);padding:6px 8px;margin-bottom:4px;cursor:pointer;transition:all var(--adf) var(--aeo)} .ais-unit:hover{border-color:var(--abc);transform:translateX(2px)} .ais-unit-name{font-size:var(--a13);font-weight:600;color:var(--atx);margin-bottom:2px} .ais-unit-hp{display:flex;align-items:center;gap:4px} .ais-unit-hp-label{font-size:var(--a12);color:var(--at3);flex-shrink:0} .ais-unit-hp-wrap{flex:1;height:3px;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden} .ais-unit-hp-bar{height:100%;border-radius:3px;transition:width var(--ads) var(--aeo);background:var(--asc)} .ais-unit-hp-bar.low{background:var(--ast)} .ais-unit-hp-bar.crit{background:var(--adg);animation:aisPulse 1s infinite} .ais-unit-hp-val{font-size:var(--a12);color:var(--at3);min-width:40px;text-align:right} @keyframes aisPulse{0%,100%{opacity:1}50%{opacity:0.6}} .ais-unit-tags{display:flex;flex-wrap:wrap;gap:3px;margin-top:3px} .ais-unit-tag{font-size:0.6rem;padding:1px 6px;border-radius:10px;background:var(--abd);color:var(--agm);border:1px solid rgba(191,160,106,0.1)} .ais-unit-tag.danger{background:var(--ads);color:var(--adg);border-color:var(--adb)} .ais-unit-tag.magic{background:var(--ams);color:var(--amg);border-color:var(--amb)} .ais-unit-tag.stamina{background:var(--ass);color:var(--ast);border-color:var(--asb)} .ais-unit-tag.active-effect{animation:aisPulse 2s infinite} .ais-inv-sec{background:rgba(0,0,0,0.1);border-radius:var(--ar2);padding:8px 10px} .ais-inv-hd{display:flex;align-items:center;gap:4px;margin-bottom:6px;font-family:var(--afd);font-size:var(--a12);color:var(--agd)} .ais-inv-list{display:flex;flex-wrap:wrap;gap:4px} .ais-inv-item{display:flex;align-items:center;gap:4px;font-size:var(--a12);color:var(--at2);background:var(--ael);border:1px solid var(--abd);border-radius:var(--ar1);padding:3px 8px;cursor:pointer;transition:all var(--adf) var(--aeo)} .ais-inv-item:hover{border-color:var(--aba);color:var(--agl);background:rgba(191,160,106,0.05)} .ais-inv-dot{width:5px;height:5px;border-radius:50%} .ais-inv-dot.info{background:var(--amg)} .ais-inv-dot.loot{background:var(--agd)} .ais-inv-dot.danger{background:var(--adg)} .ais-status{display:grid;grid-template-columns:150px 1fr 1fr;gap:8px} .ais-status-col{overflow-y:auto;max-height:280px;padding-right:4px} .ais-status-col::-webkit-scrollbar{width:2px} .ais-status-col::-webkit-scrollbar-thumb{background:var(--ags);border-radius:2px} .ais-sit-item{display:flex;align-items:center;gap:6px;padding:6px 0;border-bottom:1px solid var(--abd)} .ais-sit-item:last-child{border-bottom:none} .ais-sit-icon{width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:rgba(191,160,106,0.06);border-radius:var(--ar1);color:var(--agd);flex-shrink:0} .ais-sit-label{font-size:var(--a12);color:var(--at3)} .ais-sit-val{font-size:var(--a13);font-weight:500;color:var(--atx)} .ais-stat{margin-bottom:6px} .ais-stat-hd{display:flex;justify-content:space-between;margin-bottom:2px;font-size:var(--a12)} .ais-stat-label{color:var(--at3);display:flex;align-items:center;gap:3px} .ais-stat-val{font-weight:600;color:var(--at2)} .ais-stat-bar-wrap{height:4px;background:rgba(255,255,255,0.05);border-radius:3px;overflow:hidden} .ais-stat-bar{height:100%;border-radius:3px;transition:width var(--ads) var(--aeo);position:relative} .ais-stat-bar::after{content:'';position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,0.12)0%,transparent 100%);border-radius:3px} .ais-stat-bar.hp{background:var(--adg)} .ais-stat-bar.mp{background:var(--amg)} .ais-stat-bar.stamina{background:var(--ast)} .ais-stat-bar.energy{background:var(--aen)} .ais-stat-bar.hydration{background:var(--ahy)} .ais-stat-bar.fatigue{background:var(--afa)} .ais-extras{margin-top:10px;padding-top:8px;border-top:1px solid var(--abd)} .ais-lv{font-family:var(--afd);font-size:var(--a14);color:var(--agd);margin-bottom:6px} .ais-attrs{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px} .ais-attr{display:flex;justify-content:space-between;background:var(--ael);border:1px solid var(--abd);border-radius:var(--ar1);padding:4px 8px;font-size:var(--a12)} .ais-attr:hover{border-color:var(--abc)} .ais-attr-name{color:var(--at3)} .ais-attr-val{font-weight:700;color:var(--agl)} .ais-tag-row{margin-top:6px} .ais-tag-label{font-size:var(--a12);color:var(--at3);display:block;margin-bottom:2px} .ais-tags{display:flex;flex-wrap:wrap;gap:3px} .ais-tag{font-size:var(--a12);padding:2px 8px;border-radius:10px;transition:all var(--adf) var(--aeo)} .ais-tag.eq{background:var(--abd);color:var(--agm);border:1px solid rgba(191,160,106,0.1)} .ais-tag.eq:hover{background:rgba(191,160,106,0.12);color:var(--agd)} .ais-tag.tal{background:var(--ams);color:var(--amg);border:1px solid var(--amb)} .ais-tag.tal:hover{background:rgba(123,146,208,0.2)} .ais-party-card{background:var(--ael);border:1px solid var(--abd);border-radius:var(--ar2);padding:8px;margin-bottom:4px;cursor:pointer;transition:all var(--adf) var(--aeo)} .ais-party-card:hover{border-color:var(--abc);transform:translateX(2px)} .ais-party-name{font-size:var(--a13);font-weight:600;color:var(--atx);margin-bottom:6px} .ais-party-stats{display:grid;grid-template-columns:1fr 1fr;gap:3px 10px} .ais-party-stat{display:flex;justify-content:space-between;font-size:var(--a12)} .ais-party-stat span:first-child{color:var(--at3)} .ais-party-stat span:last-child{font-weight:600;color:var(--at2)} .ais-party-aff{display:flex;align-items:center;gap:4px;margin-top:6px;padding-top:6px;border-top:1px solid var(--abd)} .ais-party-aff-icon{color:var(--aaf)} .ais-party-aff-label{font-size:var(--a12);color:var(--at3)} .ais-party-aff-wrap{flex:1;height:2px;background:rgba(255,255,255,0.05);border-radius:2px;overflow:hidden} .ais-party-aff-bar{height:100%;background:linear-gradient(90deg,var(--aaf),#e8939f);border-radius:2px;transition:width var(--ads) var(--aeo)} .ais-party-aff-val{font-size:var(--a12);color:var(--aaf);font-weight:600;min-width:20px;text-align:right} .ais-currency{display:flex;gap:10px;margin-bottom:8px} .ais-curr-item{display:flex;align-items:center;gap:4px} .ais-curr-icon{width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:50%} .ais-curr-icon.gold{background:rgba(191,160,106,0.1);color:var(--agd)} .ais-curr-icon.silver{background:rgba(160,160,170,0.1);color:#b0b0c0} .ais-curr-icon.copper{background:rgba(180,120,80,0.1);color:#c09060} .ais-curr-label{font-size:var(--a12);color:var(--at3)} .ais-curr-val{font-weight:700;font-size:var(--a14);color:var(--atx)} .ais-items{display:grid;grid-template-columns:1fr 1fr;gap:4px;max-height:200px;overflow-y:auto} .ais-items::-webkit-scrollbar{width:2px} .ais-items::-webkit-scrollbar-thumb{background:var(--ags);border-radius:2px} .ais-item{display:flex;align-items:center;gap:6px;background:var(--ael);border:1px solid var(--abd);border-radius:var(--ar2);padding:5px 8px;cursor:pointer;transition:all var(--adf) var(--aeo);position:relative} .ais-item:hover{border-color:var(--abc);background:var(--ael);transform:translateY(-1px)} .ais-item::before{content:'';position:absolute;left:0;top:3px;bottom:3px;width:2px;border-radius:0 2px 2px 0} .ais-item.common::before{background:var(--ane)} .ais-item.uncommon::before{background:var(--asc)} .ais-item.rare::before{background:var(--amg)} .ais-item.epic::before{background:var(--ast)} .ais-item.legendary::before{background:var(--agd)} .ais-item-icon{width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:rgba(191,160,106,0.05);border-radius:var(--ar1);flex-shrink:0} .ais-item-info{flex:1;min-width:0} .ais-item-name{font-size:var(--a12);font-weight:500;color:var(--atx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis} .ais-item-type{font-size:0.6rem;color:var(--at3)} .ais-item-qty{font-weight:700;font-size:var(--a12);color:var(--agl);background:rgba(191,160,106,0.08);padding:1px 6px;border-radius:10px} .ais-empty{text-align:center;padding:12px;color:var(--at3);font-size:var(--a12);font-style:italic} .ais-muted{color:var(--at3);font-size:var(--a12);font-style:italic} @media(max-width:900px){.ais-panel-row{grid-template-columns:1fr} .ais-scene-row{grid-template-columns:1fr} .ais-status{grid-template-columns:1fr} }`;

// 注入 CSS 到主页面
(function(){
    if(window.parent.document.getElementById('aiselan-inline-styles'))return;
    var s=window.parent.document.createElement('style');
    s.id='aiselan-inline-styles';
    s.textContent=CSS;
    window.parent.document.head.appendChild(s);
    console.log('[艾瑟兰面板] CSS 已注入');
})();

var P=window.parent||window;
var D=P.document;
if(!P||P===window){console.warn('[艾瑟兰面板] 不在 iframe 中，使用当前窗口');P=window;D=document;}
var STORAGE_KEY='aiselan_game_state';
var state=null;
var prevState=null;
var panelEl=null;
var observer=null;

function $(s){return D.querySelector(s);}
function $$(s){return D.querySelectorAll(s);}

function esc(s){var d=D.createElement('div');d.textContent=s||'';return d.innerHTML;}
function pct(c,m){if(!m||m<=0)return 0;return Math.max(0,Math.min(100,(c/m)*100));}
function hpCls(p){if(p<=25)return'crit';if(p<=50)return'low';return'';}
function rCls(r){var m={common:'common',uncommon:'uncommon',rare:'rare',epic:'epic',legendary:'legendary'};return m[r]||'common';}

function defState(){return{scene:{hostile:[],neutral:[],friendly:[],investigable:[]},status:{situation:{time:'清晨',location:'金穗城',place:'法师塔'},personal:{hp:100,maxHp:100,mp:50,maxMp:50,stamina:80,maxStamina:80,energy:70,maxEnergy:100,hydration:80,maxHydration:100,fatigue:0,maxFatigue:100,level:1,attributes:{str:8,agi:6,con:7,spr:9},equipment:[],talents:[]},party:[]},inventory:{currency:{gold:0,silver:0,copper:0},items:[]}};}

function load(){var s=localStorage.getItem(STORAGE_KEY);try{state=s?JSON.parse(s):defState();}catch(e){state=defState();}ensure();}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function ensure(){var d=defState();if(!state.scene)state.scene=d.scene;if(!state.status)state.status=d.status;if(!state.inventory)state.inventory=d.inventory;}

// ====== SVG Icons ======
var I={
sword:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/></svg>',
shield:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
scales:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="3" y1="6" x2="21" y2="6"/><path d="M3 12h18"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
search:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>',
clock:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
mapPin:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
building:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 18h6v4H9z"/></svg>',
heart:'<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
star:'<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
zap:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
battery:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="7" y1="10" x2="7" y2="14"/><line x1="11" y1="10" x2="11" y2="14"/></svg>',
droplet:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
moon:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
user:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
coin:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/></svg>',
bag:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg>',
check:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
alert:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
box:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
food:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>',
gem:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 22 8 12 22 2 8 12 2"/></svg>',
scroll:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z"/></svg>',
key:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7" cy="12" r="3"/><path d="M10 12h11l-2 3 2 3h-3l-1.5-2.25L15 18h-3l-2-6z"/></svg>',
potion:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 2h4"/><path d="M12 2v5.5"/><path d="M5 9.5C5 6.5 7.5 7 12 7s7-.5 7 2.5V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9.5z"/><line x1="8" y1="15" x2="16" y2="15"/></svg>',
empty:'<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>'
};

function itemIcon(t){var m={food:I.food,consumable:I.potion,weapon:I.sword,armor:I.shield,key:I.key,material:I.gem,scroll:I.scroll,treasure:I.coin,special:I.star};return m[t]||I.box;}

// ====== 渲染 ======
function renderScene(sc){
var h=sc.hostile||[],n=sc.neutral||[],f=sc.friendly||[],inv=sc.investigable||[];
var col=function(t,ti,ic,us){
var cards=us.length?us.map(function(u){var hpP=pct(u.hp,u.maxHp),bc=hpCls(hpP),tags=(u.status||[]).map(function(s){var cls=s.type||'',ac=s.active?' active-effect':'';return'<span class="ais-unit-tag '+cls+ac+'">'+esc(s.label||s)+'</span>';}).join('');return'<div class="ais-unit" title="'+esc(u.name||'')+'"><div class="ais-unit-name">'+esc(u.name||'?')+'</div><div class="ais-unit-hp"><span class="ais-unit-hp-label">生命</span><div class="ais-unit-hp-wrap"><div class="ais-unit-hp-bar '+bc+'" style="width:'+hpP+'%"></div></div><span class="ais-unit-hp-val">'+(u.hp||0)+'/'+(u.maxHp||0)+'</span></div>'+(tags?'<div class="ais-unit-tags">'+tags+'</div>':'')+'</div>';}).join(''):'<div class="ais-empty"><span>暂无'+ti+'</span></div>';
return'<div class="ais-scene-col '+t+'"><div class="ais-scene-col-hd">'+ic+'<span class="ais-scene-col-title">'+ti+'</span><span class="ais-scene-col-num">'+us.length+'</span></div>'+cards+'</div>';
};
var invHTML=inv.length?inv.map(function(it){var dc=it.type||'info',mi={info:I.search,loot:I.bag,danger:I.alert};return'<div class="ais-inv-item"><span class="ais-inv-dot '+dc+'"></span>'+(mi[dc]||I.search)+'<span>'+esc(it.name||it)+'</span></div>';}).join(''):'<span class="ais-muted">暂无</span>';
return'<div class="ais-scene"><div class="ais-scene-row">'+col('hostile','敌对',I.sword,h)+col('neutral','中立',I.scales,n)+col('friendly','友方',I.shield,f)+'</div><div class="ais-inv-sec"><div class="ais-inv-hd">'+I.search+'<span>可调查</span></div><div class="ais-inv-list">'+invHTML+'</div></div></div>';
}

function renderStatus(st){
var si=st.situation||{},pe=st.personal||{},pa=st.party||[];
var sit='<div class="ais-sit"><div class="ais-sit-item"><span class="ais-sit-icon">'+I.clock+'</span><div><div class="ais-sit-label">时间</div><div class="ais-sit-val">'+esc(si.time||'—')+'</div></div></div><div class="ais-sit-item"><span class="ais-sit-icon">'+I.mapPin+'</span><div><div class="ais-sit-label">地点</div><div class="ais-sit-val">'+esc(si.location||'—')+'</div></div></div><div class="ais-sit-item"><span class="ais-sit-icon">'+I.building+'</span><div><div class="ais-sit-label">场所</div><div class="ais-sit-val">'+esc(si.place||'—')+'</div></div></div></div>';

var bars=[{k:'hp',m:'maxHp',l:'生命',c:'hp',i:I.heart},{k:'mp',m:'maxMp',l:'法力',c:'mp',i:I.star},{k:'stamina',m:'maxStamina',l:'体力',c:'stamina',i:I.zap},{k:'energy',m:'maxEnergy',l:'能量',c:'energy',i:I.battery},{k:'hydration',m:'maxHydration',l:'水分',c:'hydration',i:I.droplet},{k:'fatigue',m:'maxFatigue',l:'疲劳',c:'fatigue',i:I.moon}];
var bHTML=bars.map(function(ba){var v=pe[ba.k]||0,mv=pe[ba.m]||100,pp=pct(v,mv);return'<div class="ais-stat"><div class="ais-stat-hd"><span class="ais-stat-label">'+ba.i+' '+ba.l+'</span><span class="ais-stat-val">'+v+'/'+mv+'</span></div><div class="ais-stat-bar-wrap"><div class="ais-stat-bar '+ba.c+'" style="width:'+pp+'%"></div></div></div>';}).join('');

var attrs=pe.attributes||{};
var attrHTML='<div class="ais-attrs"><div class="ais-attr"><span class="ais-attr-name">力量</span><span class="ais-attr-val">'+(attrs.str||0)+'</span></div><div class="ais-attr"><span class="ais-attr-name">敏捷</span><span class="ais-attr-val">'+(attrs.agi||0)+'</span></div><div class="ais-attr"><span class="ais-attr-name">体质</span><span class="ais-attr-val">'+(attrs.con||0)+'</span></div><div class="ais-attr"><span class="ais-attr-name">精神</span><span class="ais-attr-val">'+(attrs.spr||0)+'</span></div></div>';

var eqs=(pe.equipment||[]).length?(pe.equipment||[]).map(function(e){return'<span class="ais-tag eq">'+esc(e)+'</span>';}).join(''):'<span class="ais-muted">无</span>';
var tals=(pe.talents||[]).length?(pe.talents||[]).map(function(t){return'<span class="ais-tag tal">'+esc(t)+'</span>';}).join(''):'<span class="ais-muted">未觉醒</span>';

var per=bHTML+'<div class="ais-extras"><div class="ais-lv">⭐ Lv.'+(pe.level||1)+'</div>'+attrHTML+'<div class="ais-tag-row"><span class="ais-tag-label">装备</span><div class="ais-tags">'+eqs+'</div></div><div class="ais-tag-row"><span class="ais-tag-label">天赋</span><div class="ais-tags">'+tals+'</div></div></div>';

var partyHTML=pa.length?pa.map(function(m){var ap=pct(m.affection||0,100);return'<div class="ais-party-card"><div class="ais-party-name">'+I.user+' '+esc(m.name||'?')+'</div><div class="ais-party-stats"><div class="ais-party-stat"><span>'+I.heart+' 生命</span><span>'+(m.hp||0)+'/'+(m.maxHp||100)+'</span></div><div class="ais-party-stat"><span>'+I.zap+' 体力</span><span>'+(m.stamina||0)+'/'+(m.maxStamina||100)+'</span></div><div class="ais-party-stat"><span>'+I.battery+' 能量</span><span>'+(m.energy||0)+'/'+(m.maxEnergy||100)+'</span></div><div class="ais-party-stat"><span>'+I.droplet+' 水分</span><span>'+(m.hydration||0)+'/'+(m.maxHydration||100)+'</span></div></div><div class="ais-party-aff"><span class="ais-party-aff-icon">'+I.heart+'</span><span class="ais-party-aff-label">好感</span><div class="ais-party-aff-wrap"><div class="ais-party-aff-bar" style="width:'+ap+'%"></div></div><span class="ais-party-aff-val">'+(m.affection||0)+'</span></div></div>';}).join(''):'<div class="ais-empty"><span>暂无小队成员</span></div>';

return'<div class="ais-status"><div class="ais-status-col">'+sit+'</div><div class="ais-status-col">'+per+'</div><div class="ais-status-col">'+partyHTML+'</div></div>';
}

function renderInventory(inv){
var cur=inv.currency||{gold:0,silver:0,copper:0};
var curHTML='<div class="ais-currency"><div class="ais-curr-item"><span class="ais-curr-icon gold">'+I.coin+'</span><div><div class="ais-curr-label">金币</div><span class="ais-curr-val">'+(cur.gold||0)+'</span></div></div><div class="ais-curr-item"><span class="ais-curr-icon silver">'+I.coin+'</span><div><div class="ais-curr-label">银币</div><span class="ais-curr-val">'+(cur.silver||0)+'</span></div></div><div class="ais-curr-item"><span class="ais-curr-icon copper">'+I.coin+'</span><div><div class="ais-curr-label">铜币</div><span class="ais-curr-val">'+(cur.copper||0)+'</span></div></div></div>';

var items=inv.items||[];
var itemHTML=items.length?items.map(function(it){var rc=rCls(it.rarity||'common'),q=it.quantity||1;return'<div class="ais-item '+rc+'"><div class="ais-item-icon">'+itemIcon(it.type||'')+'</div><div class="ais-item-info"><div class="ais-item-name">'+esc(it.name||'?')+'</div><div class="ais-item-type">'+esc(it.typeLabel||it.type||'')+'</div></div>'+(q>1?'<span class="ais-item-qty">×'+q+'</span>':'')+'</div>';}).join(''):'<div class="ais-empty"><span>背包空空如也</span></div>';

return'<div class="ais-inventory">'+curHTML+'<div class="ais-items">'+itemHTML+'</div></div>';
}

function renderAll(){
return'<div class="ais-panel-row"><div class="ais-panel-card" id="ais-scene-panel"><div class="ais-panel-card-hd">'+I.sword+'<span>场景状态</span></div><div class="ais-panel-card-bd" id="ais-scene-content">'+renderScene(state.scene||{hostile:[],neutral:[],friendly:[],investigable:[]})+'</div></div><div class="ais-panel-card" id="ais-status-panel"><div class="ais-panel-card-hd">'+I.user+'<span>角色状态</span></div><div class="ais-panel-card-bd" id="ais-status-content">'+renderStatus(state.status||{situation:{},personal:{},party:[]})+'</div></div><div class="ais-panel-card" id="ais-inventory-panel"><div class="ais-panel-card-hd">'+I.bag+'<span>背包</span></div><div class="ais-panel-card-bd" id="ais-inventory-content">'+renderInventory(state.inventory||{currency:{},items:[]})+'</div></div></div>';
}

// ====== 注入面板到聊天区 ======
function injectPanel(){
var chat=D.getElementById('chat');
if(!chat){console.log('[艾瑟兰面板] 未找到 #chat，500ms 后重试...');setTimeout(injectPanel,500);return;}

var existing=D.getElementById('aiselan-inline-panel');
if(existing)existing.remove();

var wrap=D.createElement('div');
wrap.id='aiselan-inline-panel';
wrap.className='aiselan-inline-wrap';
wrap.innerHTML='<div class="aiselan-inline-inner">'+renderAll()+'</div>';
chat.appendChild(wrap);
panelEl=wrap;
console.log('[艾瑟兰面板] 已注入聊天区');
}

// ====== 安全注入（断开 observer 避免循环） ======
var injecting=false;
function safeInject(){
if(injecting)return;
injecting=true;
if(observer)observer.disconnect();
injectPanel();
if(observer){
var chat=D.getElementById('chat');
if(chat)observer.observe(chat,{childList:true,subtree:false});
}
injecting=false;
}

function startObserver(){
var chat=D.getElementById('chat');
if(!chat){setTimeout(startObserver,500);return;}

observer=new MutationObserver(function(mutations){
// 忽略由面板自身触发的变更
for(var i=0;i<mutations.length;i++){
var m=mutations[i];
for(var j=0;j<m.addedNodes.length;j++){
if(m.addedNodes[j].id==='aiselan-inline-panel')return;
}
for(var k=0;k<m.removedNodes.length;k++){
if(m.removedNodes[k].id==='aiselan-inline-panel')return;
}
}
safeInject();
});

observer.observe(chat,{childList:true,subtree:false});
console.log('[艾瑟兰面板] 消息监听已启动');
safeInject();
}

// ====== 初始化 ======
function init(){
load();
// 等待 ST 就绪
var tries=0;
function check(){
var chat=D.getElementById('chat');
if(chat){startObserver();return;}
if(++tries>50){console.error('[艾瑟兰面板] 超时：未找到 #chat');return;}
setTimeout(check,200);
}
check();
}

// ====== 全局 API ======
P.AiselanBridge={
setGameState:function(s){if(s){state=s;ensure();save();safeInject();}},
getGameState:function(){return state;},
update:function(path,value){var keys=path.split('.'),t=state,i;for(i=0;i<keys.length-1;i++){if(!t[keys[i]])t[keys[i]]={};t=t[keys[i]];}t[keys[keys.length-1]]=value;save();safeInject();},
refresh:function(){safeInject();}
};

init();
console.log('[艾瑟兰面板 v2.0] 聊天内嵌版已启动');
})();
