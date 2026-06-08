/*!
 * 艾瑟兰大陆 · 作战面板 v1.0.0
 * Aiselan Continent Game Panel
 * License: MIT
 */
(function(){
'use strict';
var AP_CSS = `:root{--ap-bg-deepest:#070a0f;--ap-bg-deep:#0c1119;--ap-bg-surface:#111827;--ap-bg-elevated:#182032;--ap-bg-overlay:#1d2840;--ap-gold:#bfa06a;--ap-gold-light:#d9c48e;--ap-gold-pale:#e8d9b4;--ap-gold-dim:#7d693f;--ap-gold-subtle:#4a3f2a;--ap-danger:#c75245;--ap-danger-soft:rgba(199,82,69,0.15);--ap-danger-border:rgba(199,82,69,0.3);--ap-magic:#7b92d0;--ap-magic-soft:rgba(123,146,208,0.15);--ap-magic-border:rgba(123,146,208,0.3);--ap-stamina:#c4933d;--ap-stamina-soft:rgba(196,147,61,0.15);--ap-stamina-border:rgba(196,147,61,0.3);--ap-energy:#d4952a;--ap-energy-soft:rgba(212,149,42,0.15);--ap-hydration:#4d94c4;--ap-hydration-soft:rgba(77,148,196,0.15);--ap-fatigue:#8b6b9e;--ap-fatigue-soft:rgba(139,107,158,0.15);--ap-success:#5a9470;--ap-success-soft:rgba(90,148,112,0.15);--ap-neutral:#7d7d72;--ap-neutral-soft:rgba(125,125,114,0.12);--ap-affection:#d4697a;--ap-affection-soft:rgba(212,105,122,0.15);--ap-text-primary:#e3ddd0;--ap-text-secondary:#a09882;--ap-text-muted:#6a6357;--ap-text-label:#8b8576;--ap-border-subtle:rgba(191,160,106,0.08);--ap-border-card:rgba(191,160,106,0.14);--ap-border-active:rgba(191,160,106,0.35);--ap-border-focus:rgba(191,160,106,0.5);--ap-shadow-sm:0 1px 3px rgba(0,0,0,0.4);--ap-shadow-md:0 4px 16px rgba(0,0,0,0.5);--ap-shadow-lg:0 8px 32px rgba(0,0,0,0.6);--ap-shadow-gold:0 0 32px rgba(191,160,106,0.04);--ap-shadow-gold-hover:0 0 48px rgba(191,160,106,0.08);--ap-space-xs:4px;--ap-space-sm:8px;--ap-space-md:12px;--ap-space-lg:16px;--ap-space-xl:24px;--ap-space-2xl:32px;--ap-radius-xs:3px;--ap-radius-sm:5px;--ap-radius-md:8px;--ap-radius-lg:12px;--ap-radius-xl:16px;--ap-radius-full:999px;--ap-font-display:'Cinzel','Times New Roman',serif;--ap-font-body:'Noto Serif SC','Source Han Serif SC','Songti SC','SimSun',serif;--ap-font-mono:'Crimson Text','Georgia',serif;--ap-text-2xs:0.625rem;--ap-text-xs:0.7rem;--ap-text-sm:0.8rem;--ap-text-base:0.875rem;--ap-text-md:0.95rem;--ap-text-lg:1.05rem;--ap-text-xl:1.2rem;--ap-text-2xl:1.4rem;--ap-ease-out:cubic-bezier(0.16,1,0.3,1);--ap-ease-in-out:cubic-bezier(0.65,0,0.35,1);--ap-ease-spring:cubic-bezier(0.34,1.56,0.64,1);--ap-duration-fast:120ms;--ap-duration-normal:200ms;--ap-duration-slow:300ms;--ap-duration-expand:350ms;--ap-panel-height:360px;--ap-handle-height:36px}@media(prefers-reduced-motion:reduce){:root{--ap-duration-fast:0ms;--ap-duration-normal:0ms;--ap-duration-slow:0ms;--ap-duration-expand:0ms}}.aiselan-panel{position:fixed;bottom:0;left:0;right:0;z-index:1000;background:var(--ap-bg-deep);border-top:1px solid var(--ap-border-card);box-shadow:0 -4px 32px rgba(0,0,0,0.5),var(--ap-shadow-gold);font-family:var(--ap-font-body);font-size:var(--ap-text-sm);color:var(--ap-text-primary);line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transform:translateY(0);transition:transform var(--ap-duration-expand)var(--ap-ease-out);will-change:transform;user-select:none}.aiselan-panel.collapsed{transform:translateY(calc(100% - var(--ap-handle-height)))}.aiselan-handle{display:flex;align-items:center;height:var(--ap-handle-height);padding:0 var(--ap-space-lg);cursor:pointer;background:linear-gradient(180deg,rgba(191,160,106,0.06)0%,rgba(191,160,106,0.02)100%);border-bottom:1px solid var(--ap-border-subtle);transition:background var(--ap-duration-fast)var(--ap-ease-out);position:relative;gap:var(--ap-space-sm)}.aiselan-handle:hover{background:linear-gradient(180deg,rgba(191,160,106,0.1)0%,rgba(191,160,106,0.04)100%)}.aiselan-handle:active{background:rgba(191,160,106,0.08)}.aiselan-handle-bar{width:28px;height:3px;background:var(--ap-gold-dim);border-radius:var(--ap-radius-full);transition:all var(--ap-duration-normal)var(--ap-ease-out)}.aiselan-panel:not(.collapsed).aiselan-handle-bar{width:36px;background:var(--ap-gold)}.aiselan-handle-label{font-family:var(--ap-font-display);font-size:var(--ap-text-xs);font-weight:600;color:var(--ap-gold-dim);letter-spacing:0.12em;text-transform:uppercase;flex:1;transition:color var(--ap-duration-normal)var(--ap-ease-out)}.aiselan-panel:not(.collapsed).aiselan-handle-label{color:var(--ap-gold)}.aiselan-handle-toggle{display:flex;align-items:center;justify-content:center;width:28px;height:28px;background:transparent;border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-sm);color:var(--ap-gold-dim);cursor:pointer;transition:all var(--ap-duration-normal)var(--ap-ease-out);flex-shrink:0}.aiselan-handle-toggle:hover{border-color:var(--ap-border-active);color:var(--ap-gold);background:rgba(191,160,106,0.06)}.aiselan-panel:not(.collapsed).aiselan-handle-toggle svg{transform:rotate(180deg);transition:transform var(--ap-duration-slow)var(--ap-ease-out)}.aiselan-panel.collapsed .aiselan-handle-toggle svg{transform:rotate(0deg);transition:transform var(--ap-duration-slow)var(--ap-ease-out)}.aiselan-panel-body{height:var(--ap-panel-height);display:flex;flex-direction:column;overflow:hidden}.aiselan-tabs{display:flex;gap:2px;padding:var(--ap-space-sm)var(--ap-space-lg);background:rgba(0,0,0,0.2);border-bottom:1px solid var(--ap-border-subtle);flex-shrink:0}.aiselan-tab{display:flex;align-items:center;gap:6px;padding:6px 16px;font-family:var(--ap-font-body);font-size:var(--ap-text-xs);font-weight:500;color:var(--ap-text-muted);background:transparent;border:1px solid transparent;border-radius:var(--ap-radius-md);cursor:pointer;transition:all var(--ap-duration-normal)var(--ap-ease-out);white-space:nowrap;letter-spacing:0.03em;position:relative}.aiselan-tab svg{opacity:0.5;transition:opacity var(--ap-duration-normal)var(--ap-ease-out)}.aiselan-tab:hover{color:var(--ap-text-secondary);background:rgba(191,160,106,0.04)}.aiselan-tab:hover svg{opacity:0.8}.aiselan-tab.active{color:var(--ap-gold-light);background:rgba(191,160,106,0.08);border-color:var(--ap-border-active)}.aiselan-tab.active svg{opacity:1;color:var(--ap-gold)}.aiselan-tab:active{transform:scale(0.97)}.aiselan-tab.active::after{content:'';position:absolute;bottom:-9px;left:50%;transform:translateX(-50%);width:24px;height:2px;background:var(--ap-gold);border-radius:var(--ap-radius-full);animation:tabIndicatorIn var(--ap-duration-slow)var(--ap-ease-spring)}@keyframes tabIndicatorIn{from{width:0;opacity:0}to{width:24px;opacity:1}}.aiselan-content{flex:1;overflow-y:auto;overflow-x:hidden;padding:var(--ap-space-lg);scroll-behavior:smooth}.aiselan-content::-webkit-scrollbar{width:4px}.aiselan-content::-webkit-scrollbar-track{background:transparent}.aiselan-content::-webkit-scrollbar-thumb{background:var(--ap-gold-subtle);border-radius:var(--ap-radius-full)}.aiselan-content::-webkit-scrollbar-thumb:hover{background:var(--ap-gold-dim)}.aiselan-tab-panel{display:none;animation:panelFadeIn var(--ap-duration-slow)var(--ap-ease-out)}.aiselan-tab-panel.active{display:block}@keyframes panelFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.scene-layout{display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--ap-space-lg);margin-bottom:var(--ap-space-lg)}.scene-column{background:var(--ap-bg-surface);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-lg);padding:var(--ap-space-md);transition:all var(--ap-duration-normal)var(--ap-ease-out)}.scene-column:hover{border-color:var(--ap-border-card);box-shadow:var(--ap-shadow-md)}.scene-column-header{display:flex;align-items:center;gap:var(--ap-space-sm);margin-bottom:var(--ap-space-md);padding-bottom:var(--ap-space-sm);border-bottom:1px solid var(--ap-border-subtle)}.scene-column-header svg{flex-shrink:0}.scene-col-title{font-family:var(--ap-font-display);font-size:var(--ap-text-xs);font-weight:700;letter-spacing:0.08em;text-transform:uppercase}.scene-col-count{font-family:var(--ap-font-mono);font-size:var(--ap-text-2xs);color:var(--ap-text-muted);margin-left:auto;background:rgba(191,160,106,0.06);padding:1px 8px;border-radius:var(--ap-radius-full)}.scene-column.hostile{border-top:2px solid var(--ap-danger)}.scene-column.hostile .scene-col-title{color:var(--ap-danger)}.scene-column.hostile .scene-col-title svg{color:var(--ap-danger)}.scene-column.neutral{border-top:2px solid var(--ap-neutral)}.scene-column.neutral .scene-col-title{color:var(--ap-neutral)}.scene-column.neutral .scene-col-title svg{color:var(--ap-neutral)}.scene-column.friendly{border-top:2px solid var(--ap-success)}.scene-column.friendly .scene-col-title{color:var(--ap-success)}.scene-column.friendly .scene-col-title svg{color:var(--ap-success)}.unit-card{background:var(--ap-bg-elevated);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-md);padding:var(--ap-space-sm)var(--ap-space-md);margin-bottom:var(--ap-space-sm);transition:all var(--ap-duration-fast)var(--ap-ease-out);cursor:pointer;position:relative}.unit-card:hover{border-color:var(--ap-border-card);background:var(--ap-bg-overlay);transform:translateX(2px)}.unit-card:active{transform:scale(0.98)}.unit-name{font-size:var(--ap-text-sm);font-weight:600;color:var(--ap-text-primary);margin-bottom:4px}.unit-hp-row{display:flex;align-items:center;gap:var(--ap-space-sm)}.unit-hp-label{font-size:var(--ap-text-2xs);color:var(--ap-text-muted);flex-shrink:0;min-width:22px}.unit-hp-bar-wrap{flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:var(--ap-radius-full);overflow:hidden}.unit-hp-bar{height:100%;border-radius:var(--ap-radius-full);transition:width var(--ap-duration-slow)var(--ap-ease-out);background:var(--ap-success)}.unit-hp-bar.low{background:var(--ap-stamina)}.unit-hp-bar.crit{background:var(--ap-danger)}.unit-status-tags{display:flex;flex-wrap:wrap;gap:4px;margin-top:var(--ap-space-xs)}.unit-status-tag{font-size:var(--ap-text-2xs);padding:1px 8px;border-radius:var(--ap-radius-full);background:rgba(191,160,106,0.08);color:var(--ap-gold-dim);border:1px solid rgba(191,160,106,0.12);letter-spacing:0.03em;transition:all var(--ap-duration-fast)var(--ap-ease-out)}.unit-status-tag:hover{background:rgba(191,160,106,0.14);color:var(--ap-gold);border-color:var(--ap-border-active)}.unit-status-tag.danger{background:var(--ap-danger-soft);color:var(--ap-danger);border-color:var(--ap-danger-border)}.unit-status-tag.magic{background:var(--ap-magic-soft);color:var(--ap-magic);border-color:var(--ap-magic-border)}.unit-status-tag.stamina{background:var(--ap-stamina-soft);color:var(--ap-stamina);border-color:var(--ap-stamina-border)}.investigable-section{background:var(--ap-bg-surface);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-lg);padding:var(--ap-space-md)var(--ap-space-lg);transition:all var(--ap-duration-normal)var(--ap-ease-out)}.investigable-section:hover{border-color:var(--ap-border-card)}.investigable-header{display:flex;align-items:center;gap:var(--ap-space-sm);margin-bottom:var(--ap-space-md);font-family:var(--ap-font-display);font-size:var(--ap-text-xs);font-weight:600;color:var(--ap-gold);letter-spacing:0.06em}.investigable-list{display:flex;flex-wrap:wrap;gap:var(--ap-space-sm)}.investigable-item{display:flex;align-items:center;gap:6px;font-size:var(--ap-text-xs);color:var(--ap-text-secondary);background:var(--ap-bg-elevated);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-sm);padding:4px 12px;cursor:pointer;transition:all var(--ap-duration-fast)var(--ap-ease-out)}.investigable-item:hover{border-color:var(--ap-border-active);color:var(--ap-gold-light);background:rgba(191,160,106,0.06);transform:translateY(-1px)}.investigable-item:active{transform:scale(0.97)}.investigable-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}.investigable-dot.info{background:var(--ap-magic)}.investigable-dot.loot{background:var(--ap-gold)}.investigable-dot.danger{background:var(--ap-danger)}.status-layout{display:grid;grid-template-columns:200px 1fr 1fr;gap:var(--ap-space-lg);height:100%}.status-column{background:var(--ap-bg-surface);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-lg);padding:var(--ap-space-lg);transition:all var(--ap-duration-normal)var(--ap-ease-out);overflow-y:auto}.status-column:hover{border-color:var(--ap-border-card)}.status-column::-webkit-scrollbar{width:3px}.status-column::-webkit-scrollbar-thumb{background:var(--ap-gold-subtle);border-radius:var(--ap-radius-full)}.status-col-title{font-family:var(--ap-font-display);font-size:var(--ap-text-xs);font-weight:700;color:var(--ap-gold);letter-spacing:0.08em;margin-bottom:var(--ap-space-md);padding-bottom:var(--ap-space-sm);border-bottom:1px solid var(--ap-border-subtle);text-transform:uppercase}.situation-item{display:flex;align-items:center;gap:var(--ap-space-sm);padding:var(--ap-space-sm)0;border-bottom:1px solid var(--ap-border-subtle)}.situation-item:last-child{border-bottom:none}.situation-icon{width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:rgba(191,160,106,0.06);border-radius:var(--ap-radius-sm);color:var(--ap-gold);flex-shrink:0}.situation-label{font-size:var(--ap-text-2xs);color:var(--ap-text-muted);letter-spacing:0.06em}.situation-value{font-size:var(--ap-text-sm);font-weight:500;color:var(--ap-text-primary)}.stat-row{margin-bottom:var(--ap-space-sm)}.stat-label-row{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:3px}.stat-name{font-size:var(--ap-text-2xs);color:var(--ap-text-label);letter-spacing:0.04em}.stat-value{font-family:var(--ap-font-mono);font-size:var(--ap-text-2xs);font-weight:600;color:var(--ap-text-secondary);letter-spacing:0.02em}.stat-bar-wrap{height:5px;background:rgba(255,255,255,0.05);border-radius:var(--ap-radius-full);overflow:hidden;position:relative}.stat-bar{height:100%;border-radius:var(--ap-radius-full);transition:width var(--ap-duration-slow)var(--ap-ease-out);position:relative}.stat-bar::after{content:'';position:absolute;top:0;left:0;right:0;height:50%;background:linear-gradient(180deg,rgba(255,255,255,0.15)0%,transparent 100%);border-radius:var(--ap-radius-full)}.stat-bar.hp{background:var(--ap-danger)}.stat-bar.mp{background:var(--ap-magic)}.stat-bar.stamina{background:var(--ap-stamina)}.stat-bar.energy{background:var(--ap-energy)}.stat-bar.hydration{background:var(--ap-hydration)}.stat-bar.fatigue{background:var(--ap-fatigue)}.attrs-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--ap-space-sm);margin:var(--ap-space-md)0}.attr-item{display:flex;align-items:center;justify-content:space-between;background:var(--ap-bg-elevated);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-sm);padding:6px 10px;transition:all var(--ap-duration-fast)var(--ap-ease-out)}.attr-item:hover{border-color:var(--ap-border-card);background:var(--ap-bg-overlay)}.attr-name{font-size:var(--ap-text-2xs);color:var(--ap-text-muted);letter-spacing:0.04em}.attr-value{font-family:var(--ap-font-mono);font-size:var(--ap-text-sm);font-weight:700;color:var(--ap-gold-light)}.tag-list{display:flex;flex-wrap:wrap;gap:4px;margin-top:var(--ap-space-sm)}.equip-tag{font-size:var(--ap-text-2xs);padding:2px 10px;border-radius:var(--ap-radius-full);background:rgba(191,160,106,0.08);color:var(--ap-gold-dim);border:1px solid rgba(191,160,106,0.1);letter-spacing:0.03em;transition:all var(--ap-duration-fast)var(--ap-ease-out)}.equip-tag:hover{background:rgba(191,160,106,0.14);color:var(--ap-gold);border-color:var(--ap-border-active)}.talent-tag{font-size:var(--ap-text-2xs);padding:2px 10px;border-radius:var(--ap-radius-full);background:var(--ap-magic-soft);color:var(--ap-magic);border:1px solid var(--ap-magic-border);letter-spacing:0.03em;transition:all var(--ap-duration-fast)var(--ap-ease-out)}.talent-tag:hover{background:rgba(123,146,208,0.22);color:#a3b5e8}.party-member-card{background:var(--ap-bg-elevated);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-md);padding:var(--ap-space-md);margin-bottom:var(--ap-space-sm);transition:all var(--ap-duration-fast)var(--ap-ease-out);cursor:pointer}.party-member-card:hover{border-color:var(--ap-border-card);transform:translateX(2px);box-shadow:var(--ap-shadow-sm)}.party-member-name{font-size:var(--ap-text-sm);font-weight:600;color:var(--ap-text-primary);margin-bottom:var(--ap-space-sm)}.party-mini-stats{display:grid;grid-template-columns:1fr 1fr;gap:4px var(--ap-space-md)}.party-mini-stat{display:flex;align-items:center;justify-content:space-between;font-size:var(--ap-text-2xs)}.party-mini-label{color:var(--ap-text-muted)}.party-mini-value{font-family:var(--ap-font-mono);font-weight:600;color:var(--ap-text-secondary)}.party-affection-row{display:flex;align-items:center;gap:var(--ap-space-sm);margin-top:var(--ap-space-sm);padding-top:var(--ap-space-sm);border-top:1px solid var(--ap-border-subtle)}.party-affection-icon{color:var(--ap-affection);flex-shrink:0}.party-affection-bar-wrap{flex:1;height:3px;background:rgba(255,255,255,0.05);border-radius:var(--ap-radius-full);overflow:hidden}.party-affection-bar{height:100%;background:linear-gradient(90deg,var(--ap-affection),#e8939f);border-radius:var(--ap-radius-full);transition:width var(--ap-duration-slow)var(--ap-ease-out)}.party-affection-value{font-family:var(--ap-font-mono);font-size:var(--ap-text-2xs);color:var(--ap-affection);font-weight:600;min-width:24px}.inventory-layout{display:flex;flex-direction:column;gap:var(--ap-space-lg);height:100%}.currency-bar{display:flex;gap:var(--ap-space-lg);padding:var(--ap-space-md)var(--ap-space-lg);background:var(--ap-bg-surface);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-lg);flex-shrink:0}.currency-item{display:flex;align-items:center;gap:var(--ap-space-sm)}.currency-icon{width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0}.currency-icon.gold{background:rgba(191,160,106,0.12);color:var(--ap-gold)}.currency-icon.silver{background:rgba(160,160,170,0.12);color:#b0b0c0}.currency-icon.copper{background:rgba(180,120,80,0.12);color:#c09060}.currency-label{font-size:var(--ap-text-2xs);color:var(--ap-text-muted);letter-spacing:0.04em}.currency-value{font-family:var(--ap-font-mono);font-size:var(--ap-text-md);font-weight:700;color:var(--ap-text-primary)}.items-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:var(--ap-space-sm);overflow-y:auto;flex:1;align-content:start}.items-grid::-webkit-scrollbar{width:3px}.items-grid::-webkit-scrollbar-thumb{background:var(--ap-gold-subtle);border-radius:var(--ap-radius-full)}.item-card{display:flex;align-items:center;gap:var(--ap-space-sm);background:var(--ap-bg-elevated);border:1px solid var(--ap-border-subtle);border-radius:var(--ap-radius-md);padding:var(--ap-space-sm)var(--ap-space-md);cursor:pointer;transition:all var(--ap-duration-fast)var(--ap-ease-out);position:relative}.item-card:hover{border-color:var(--ap-border-card);background:var(--ap-bg-overlay);transform:translateY(-2px);box-shadow:var(--ap-shadow-md)}.item-card:active{transform:scale(0.97)}.item-icon-wrap{width:28px;height:28px;display:flex;align-items:center;justify-content:center;background:rgba(191,160,106,0.06);border-radius:var(--ap-radius-sm);flex-shrink:0}.item-info{flex:1;min-width:0}.item-name{font-size:var(--ap-text-xs);font-weight:500;color:var(--ap-text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item-meta{font-size:var(--ap-text-2xs);color:var(--ap-text-muted);margin-top:1px}.item-count-badge{font-family:var(--ap-font-mono);font-size:var(--ap-text-xs);font-weight:700;color:var(--ap-gold-light);background:rgba(191,160,106,0.1);padding:2px 8px;border-radius:var(--ap-radius-full);flex-shrink:0}.item-card::before{content:'';position:absolute;left:0;top:4px;bottom:4px;width:2px;border-radius:0 var(--ap-radius-xs)var(--ap-radius-xs)0;transition:all var(--ap-duration-fast)var(--ap-ease-out)}.item-card.common::before{background:var(--ap-neutral)}.item-card.uncommon::before{background:var(--ap-success)}.item-card.rare::before{background:var(--ap-magic)}.item-card.epic::before{background:var(--ap-stamina)}.item-card.legendary::before{background:var(--ap-gold)}.aiselan-toast-container{position:absolute;top:-52px;left:50%;transform:translateX(-50%);z-index:1010;display:flex;flex-direction:column;gap:6px;pointer-events:none}.aiselan-toast{display:flex;align-items:center;gap:var(--ap-space-sm);padding:8px 16px;font-size:var(--ap-text-xs);font-weight:500;border-radius:var(--ap-radius-md);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:var(--ap-shadow-lg);pointer-events:auto;letter-spacing:0.03em;animation:toastSlideIn var(--ap-duration-slow)var(--ap-ease-spring);transition:all var(--ap-duration-normal)var(--ap-ease-out)}.aiselan-toast.removing{opacity:0;transform:translateY(-8px)scale(0.95)}.aiselan-toast.info{background:rgba(17,24,39,0.92);border:1px solid var(--ap-border-active);color:var(--ap-text-primary)}.aiselan-toast.success{background:rgba(90,148,112,0.15);border:1px solid rgba(90,148,112,0.3);color:#7ab88e}.aiselan-toast.warning{background:rgba(196,147,61,0.15);border:1px solid var(--ap-stamina-border);color:var(--ap-stamina)}.aiselan-toast.error{background:rgba(199,82,69,0.15);border:1px solid var(--ap-danger-border);color:#d47366}@keyframes toastSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes subtlePulse{0%,100%{opacity:1}50%{opacity:0.7}}.unit-status-tag.active-effect{animation:subtlePulse 2s ease-in-out infinite}@keyframes hpPulse{0%,100%{opacity:1}50%{opacity:0.6}}.unit-hp-bar.crit{animation:hpPulse 1s ease-in-out infinite}@keyframes itemEnter{from{opacity:0;transform:scale(0.9)translateY(8px)}to{opacity:1;transform:scale(1)translateY(0)}}.item-card.new-item{animation:itemEnter var(--ap-duration-slow)var(--ap-ease-spring)}@keyframes valueFlash{0%{color:var(--ap-gold-light)}100%{color:inherit}}.stat-value.changed,.currency-value.changed{animation:valueFlash 1.5s var(--ap-ease-out)}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--ap-space-2xl);color:var(--ap-text-muted);text-align:center;gap:var(--ap-space-sm);font-size:var(--ap-text-xs);letter-spacing:0.04em}.empty-state svg{opacity:0.3;margin-bottom:var(--ap-space-xs)}.empty-state-text{font-style:italic;color:var(--ap-text-muted)}@media(max-width:900px){.scene-layout{grid-template-columns:1fr}.status-layout{grid-template-columns:1fr}.items-grid{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}.currency-bar{flex-wrap:wrap;gap:var(--ap-space-sm)}}@media(max-width:600px){.aiselan-panel-body{--ap-panel-height:320px;height:var(--ap-panel-height)}.aiselan-tabs{padding:var(--ap-space-xs)var(--ap-space-sm)}.aiselan-tab{padding:4px 10px;font-size:var(--ap-text-2xs);gap:3px}.aiselan-tab svg{width:12px;height:12px}.aiselan-content{padding:var(--ap-space-sm)}}`;

/* ============ CSS 注入 ============ */
(function injectCSS(){
    if(document.getElementById('aiselan-panel-styles'))return;
    var style=document.createElement('style');
    style.id='aiselan-panel-styles';
    style.textContent=AP_CSS;
    document.head.appendChild(style);
})();

/* ============ 等待 DOM 就绪后初始化 ============ */
function waitForST(cb){
    if(document.getElementById('sheld')){
        cb();
        return;
    }
    var count=0;
    var timer=setInterval(function(){
        if(document.getElementById('sheld')){
            clearInterval(timer);
            cb();
            return;
        }
        if(++count>100){clearInterval(timer);}
    },200);
}

waitForST(function(){
    buildPanelDOM();
    loadState();
    bindEvents();
    render();
});

/* ============ 状态管理 ============ */
var STORAGE_KEY='aiselan_game_state';
var state=null;
var activeTab='scene';
var prevValues={};

function defaultState(){
    return {
        scene:{hostile:[],neutral:[],friendly:[],investigable:[]},
        status:{
            situation:{time:'清晨',location:'金穗城',place:'法师塔'},
            personal:{
                hp:100,maxHp:100,mp:50,maxMp:50,
                stamina:80,maxStamina:80,energy:70,maxEnergy:100,
                hydration:80,maxHydration:100,fatigue:0,maxFatigue:100,
                level:1,attributes:{str:8,agi:6,con:7,spr:9},
                equipment:[],talents:[]
            },
            party:[]
        },
        inventory:{currency:{gold:0,silver:0,copper:0},items:[]}
    };
}

function loadState(){
    var saved=localStorage.getItem(STORAGE_KEY);
    if(saved){try{state=JSON.parse(saved);}catch(e){state=defaultState();}}
    else{state=defaultState();}
    ensureDefaults();
}

function ensureDefaults(){
    state.scene=state.scene||defaultState().scene;
    state.scene.hostile=state.scene.hostile||[];
    state.scene.neutral=state.scene.neutral||[];
    state.scene.friendly=state.scene.friendly||[];
    state.scene.investigable=state.scene.investigable||[];
    state.status=state.status||defaultState().status;
    state.status.situation=state.status.situation||defaultState().status.situation;
    state.status.personal=state.status.personal||defaultState().status.personal;
    state.status.party=state.status.party||[];
    state.inventory=state.inventory||defaultState().inventory;
    state.inventory.currency=state.inventory.currency||defaultState().inventory.currency;
    state.inventory.items=state.inventory.items||[];
}

function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}

/* ============ DOM 构建 ============ */
var $=function(s){return document.querySelector(s);};
var $$=function(s){return document.querySelectorAll(s);};

function buildPanelDOM(){
    if(document.getElementById('aiselan-game-panel'))return;
    var panel=document.createElement('div');
    panel.id='aiselan-game-panel';
    panel.className='aiselan-panel collapsed';
    panel.setAttribute('aria-label','艾瑟兰大陆作战面板');
    panel.setAttribute('role','region');
    panel.innerHTML='<div class="aiselan-handle" id="aiselan-handle" title="展开/收起作战面板">'+
        '<div class="aiselan-handle-bar"></div>'+
        '<span class="aiselan-handle-label">艾瑟兰大陆 · 作战面板</span>'+
        '<button class="aiselan-handle-toggle" id="aiselan-toggle-btn" aria-label="展开面板">'+
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button></div>'+
        '<div class="aiselan-panel-body" id="aiselan-panel-body">'+
        '<nav class="aiselan-tabs" id="aiselan-tabs" role="tablist">'+
        '<button class="aiselan-tab active" data-tab="scene" role="tab" aria-selected="true" id="tab-scene">'+
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><polygon points="12,2 22,12 12,22 2,12"/></svg><span>场景状态</span></button>'+
        '<button class="aiselan-tab" data-tab="status" role="tab" id="tab-status">'+
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>角色状态</span></button>'+
        '<button class="aiselan-tab" data-tab="inventory" role="tab" id="tab-inventory">'+
        '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 11h20"/></svg><span>背包</span></button></nav>'+
        '<div class="aiselan-content" id="aiselan-content">'+
        '<div class="aiselan-tab-panel active" id="panel-scene" role="tabpanel"></div>'+
        '<div class="aiselan-tab-panel" id="panel-status" role="tabpanel"></div>'+
        '<div class="aiselan-tab-panel" id="panel-inventory" role="tabpanel"></div></div></div>'+
        '<div class="aiselan-toast-container" id="aiselan-toast-container" aria-live="polite"></div>';
    var sheld=document.getElementById('sheld');
    (sheld||document.body).appendChild(panel);
}

/* ============ SVG Icons ============ */
var I={
    sword:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M8 8l1 1"/></svg>',
    shield:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    scales:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><path d="M3 12h18"/><line x1="3" y1="18" x2="21" y2="18"/><circle cx="8" cy="6" r="1.5"/><circle cx="16" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/></svg>',
    search:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>',
    clock:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    mapPin:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    building:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><path d="M9 18h6v4H9z"/></svg>',
    heart:'<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
    star:'<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    zap:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    battery:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="10" x2="23" y2="14"/><line x1="7" y1="10" x2="7" y2="14"/><line x1="11" y1="10" x2="11" y2="14"/></svg>',
    droplet:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
    moon:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    user:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    coin:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',
    bag:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    check:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    alert:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    info:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    x:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    box:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    food:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    gem:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8 12 22 2 8 12 2"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="8" x2="22" y2="8"/></svg>',
    scroll:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z"/></svg>',
    key:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="3"/><path d="M10 12h11l-2 3 2 3h-3l-1.5-2.25L15 18h-3l-2-6z"/></svg>',
    potion:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4"/><path d="M12 2v5.5"/><path d="M5 9.5C5 6.5 7.5 7 12 7s7-.5 7 2.5V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9.5z"/><line x1="8" y1="15" x2="16" y2="15"/></svg>',
    empty:'<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>'
};

/* ============ 工具 ============ */
function esc(s){var d=document.createElement('div');d.textContent=s||'';return d.innerHTML;}
function pct(c,m){if(!m||m<=0)return 0;return Math.max(0,Math.min(100,(c/m)*100));}
function hpCls(p){if(p<=25)return'crit';if(p<=50)return'low';return'';}
function rarityCls(r){var m={common:'common',uncommon:'uncommon',rare:'rare',epic:'epic',legendary:'legendary'};return m[r]||'common';}
function itemIcon(t){var m={food:I.food,consumable:I.potion,weapon:I.sword,armor:I.shield,key:I.key,material:I.gem,scroll:I.scroll,treasure:I.coin,special:I.star};return m[t]||I.box;}

/* ============ Toast ============ */
var toastTimer=null;
function showToast(type,msg,dur){
    dur=dur||3000;
    var ct=$('#aiselan-toast-container');if(!ct)return;
    var t=document.createElement('div');t.className='aiselan-toast '+type;
    var im={info:I.info,success:I.check,warning:I.alert,error:I.x};
    t.innerHTML=(im[type]||im.info)+'<span>'+esc(msg)+'</span>';
    ct.appendChild(t);
    clearTimeout(toastTimer);
    toastTimer=setTimeout(function(){t.classList.add('removing');setTimeout(function(){t.remove();},200);},dur);
    t.addEventListener('click',function(){t.classList.add('removing');setTimeout(function(){t.remove();},200);});
}

/* ============ 渲染 ============ */
function render(){
    if(!state)return;
    var prevP=state.status&&state.status.personal?JSON.parse(JSON.stringify(state.status.personal)):{};
    if($('#panel-scene'))$('#panel-scene').innerHTML=renderScene();
    if($('#panel-status'))$('#panel-status').innerHTML=renderStatus();
    if($('#panel-inventory'))$('#panel-inventory').innerHTML=renderInventory();
    prevValues.personal=prevP;
    setTimeout(function(){$$('.stat-value.changed,.currency-value.changed').forEach(function(e){e.classList.remove('changed');});},1600);
}

function renderScene(){
    var sc=state.scene;
    return '<div class="scene-layout">'+
        renderUnitCol('hostile','敌对单位',I.sword,sc.hostile||[])+
        renderUnitCol('neutral','中立单位',I.scales,sc.neutral||[])+
        renderUnitCol('friendly','友好单位',I.shield,sc.friendly||[])+
        '</div>'+renderInvestigable(sc.investigable||[]);
}

function renderUnitCol(type,title,icon,units){
    var cards=units.length?units.map(function(u){return renderUnitCard(u);}).join(''):'<div class="empty-state"><div class="empty-state-text">暂无'+title+'</div></div>';
    return '<div class="scene-column '+type+'"><div class="scene-column-header">'+icon+'<span class="scene-col-title">'+title+'</span><span class="scene-col-count">'+units.length+'</span></div>'+cards+'</div>';
}

function renderUnitCard(u){
    var hpP=pct(u.hp,u.maxHp),bc=hpCls(hpP);
    var tags=(u.status||[]).map(function(s){var cls=s.type||'',ac=s.active?' active-effect':'';return'<span class="unit-status-tag '+cls+ac+'">'+esc(s.label||s)+'</span>';}).join('');
    return '<div class="unit-card" title="'+esc(u.name||'')+'"><div class="unit-name">'+esc(u.name||'未知')+'</div><div class="unit-hp-row"><span class="unit-hp-label">生命</span><div class="unit-hp-bar-wrap"><div class="unit-hp-bar '+bc+'" style="width:'+hpP+'%"></div></div><span style="font-family:var(--ap-font-mono);font-size:var(--ap-text-2xs);color:var(--ap-text-muted);min-width:44px;text-align:right;">'+(u.hp||0)+'/'+(u.maxHp||0)+'</span></div>'+(tags?'<div class="unit-status-tags">'+tags+'</div>':'')+'</div>';
}

function renderInvestigable(items){
    var list=items.length?items.map(function(it){var dc=it.type||'info',im2={info:I.info,loot:I.bag,danger:I.alert};return'<div class="investigable-item"><span class="investigable-dot '+dc+'"></span>'+(im2[dc]||I.search)+'<span>'+esc(it.name||it)+'</span></div>';}).join(''):'<span style="color:var(--ap-text-muted);font-size:var(--ap-text-xs);font-style:italic;">暂无值得调查的目标</span>';
    return '<div class="investigable-section"><div class="investigable-header">'+I.search+'<span>可调查目标</span></div><div class="investigable-list">'+list+'</div></div>';
}

function renderStatus(){
    var st=state.status,sit=st.situation||{},per=st.personal||{},pty=st.party||[];
    return '<div class="status-layout"><div class="status-column"><div class="status-col-title">现状</div>'+renderSituation(sit)+'</div><div class="status-column"><div class="status-col-title">个人状态</div>'+renderPersonal(per)+'</div><div class="status-column"><div class="status-col-title">小队成员</div>'+renderParty(pty)+'</div></div>';
}

function renderSituation(s){
    return '<div class="situation-item"><span class="situation-icon">'+I.clock+'</span><div><div class="situation-label">时间</div><div class="situation-value">'+esc(s.time||'—')+'</div></div></div>'+
        '<div class="situation-item"><span class="situation-icon">'+I.mapPin+'</span><div><div class="situation-label">地点</div><div class="situation-value">'+esc(s.location||'—')+'</div></div></div>'+
        '<div class="situation-item"><span class="situation-icon">'+I.building+'</span><div><div class="situation-label">场所</div><div class="situation-value">'+esc(s.place||'—')+'</div></div></div>';
}

function renderPersonal(p){
    var attrs=p.attributes||{},equip=p.equipment||[],talents=p.talents||[];
    var prevP=prevValues.personal||{};
    var bars=[{k:'hp',mk:'maxHp',l:'生命值',c:'hp',i:I.heart},{k:'mp',mk:'maxMp',l:'法力值',c:'mp',i:I.star},{k:'stamina',mk:'maxStamina',l:'体力',c:'stamina',i:I.zap},{k:'energy',mk:'maxEnergy',l:'能量',c:'energy',i:I.battery},{k:'hydration',mk:'maxHydration',l:'水分',c:'hydration',i:I.droplet},{k:'fatigue',mk:'maxFatigue',l:'疲劳',c:'fatigue',i:I.moon}];
    var bHTML=bars.map(function(s){var v=p[s.k]||0,mv=p[s.mk]||100,pp=pct(v,mv),ch=prevP&&prevP[s.k]!==undefined&&prevP[s.k]!==v;return'<div class="stat-row"><div class="stat-label-row"><span class="stat-name">'+s.i+' '+s.l+'</span><span class="stat-value'+(ch?' changed':'')+'">'+v+'/'+mv+'</span></div><div class="stat-bar-wrap"><div class="stat-bar '+s.c+'" style="width:'+pp+'%"></div></div></div>';}).join('');
    var eqT=equip.length?equip.map(function(e){return'<span class="equip-tag">'+esc(e)+'</span>';}).join(''):'<span style="font-size:var(--ap-text-2xs);color:var(--ap-text-muted);">无装备</span>';
    var taT=talents.length?talents.map(function(t){return'<span class="talent-tag">'+esc(t)+'</span>';}).join(''):'<span style="font-size:var(--ap-text-2xs);color:var(--ap-text-muted);">未觉醒</span>';
    return bHTML+'<div style="margin-top:var(--ap-space-md);padding-top:var(--ap-space-sm);border-top:1px solid var(--ap-border-subtle);"><div class="stat-label-row" style="margin-bottom:6px;"><span class="stat-name">⭐ 等级</span><span class="stat-value" style="font-size:var(--ap-text-md);">Lv.'+(p.level||1)+'</span></div><div class="attrs-grid"><div class="attr-item"><span class="attr-name">力量</span><span class="attr-value">'+(attrs.str||0)+'</span></div><div class="attr-item"><span class="attr-name">敏捷</span><span class="attr-value">'+(attrs.agi||0)+'</span></div><div class="attr-item"><span class="attr-name">体质</span><span class="attr-value">'+(attrs.con||0)+'</span></div><div class="attr-item"><span class="attr-name">精神</span><span class="attr-value">'+(attrs.spr||0)+'</span></div></div><div style="margin-top:var(--ap-space-sm);"><div class="stat-label-row"><span class="stat-name">装备</span></div><div class="tag-list">'+eqT+'</div></div><div style="margin-top:var(--ap-space-sm);"><div class="stat-label-row"><span class="stat-name">天赋</span></div><div class="tag-list">'+taT+'</div></div></div>';
}

function renderParty(members){
    if(!members||!members.length)return'<div class="empty-state">'+I.empty+'<div class="empty-state-text">暂无小队成员</div></div>';
    return members.map(function(m){var ap=pct(m.affection||0,100);return'<div class="party-member-card"><div class="party-member-name">'+I.user+' '+esc(m.name||'未知')+'</div><div class="party-mini-stats"><div class="party-mini-stat"><span class="party-mini-label">'+I.heart+' 生命</span><span class="party-mini-value">'+(m.hp||0)+'/'+(m.maxHp||100)+'</span></div><div class="party-mini-stat"><span class="party-mini-label">'+I.zap+' 体力</span><span class="party-mini-value">'+(m.stamina||0)+'/'+(m.maxStamina||100)+'</span></div><div class="party-mini-stat"><span class="party-mini-label">'+I.battery+' 能量</span><span class="party-mini-value">'+(m.energy||0)+'/'+(m.maxEnergy||100)+'</span></div><div class="party-mini-stat"><span class="party-mini-label">'+I.droplet+' 水分</span><span class="party-mini-value">'+(m.hydration||0)+'/'+(m.maxHydration||100)+'</span></div></div><div class="party-affection-row">'+I.heart+'<span style="font-size:var(--ap-text-2xs);color:var(--ap-text-muted);flex-shrink:0;">好感度</span><div class="party-affection-bar-wrap"><div class="party-affection-bar" style="width:'+ap+'%"></div></div><span class="party-affection-value">'+(m.affection||0)+'</span></div></div>';}).join('');
}

function renderInventory(){
    var inv=state.inventory,cur=inv.currency||{gold:0,silver:0,copper:0},items=inv.items||[];
    var iCards=items.length?items.map(function(it){var rc=rarityCls(it.rarity||'common'),ic=itemIcon(it.type||''),q=it.quantity||1;return'<div class="item-card '+rc+'"><div class="item-icon-wrap">'+ic+'</div><div class="item-info"><div class="item-name">'+esc(it.name||'未知物品')+'</div><div class="item-meta">'+esc(it.typeLabel||it.type||'杂项')+'</div></div>'+(q>1?'<span class="item-count-badge">×'+q+'</span>':'')+'</div>';}).join(''):'<div class="empty-state">'+I.bag+'<div class="empty-state-text">背包空空如也</div></div>';
    return '<div class="inventory-layout"><div class="currency-bar"><div class="currency-item"><span class="currency-icon gold">'+I.coin+'</span><div><div class="currency-label">金币</div><span class="currency-value">'+(cur.gold||0)+'</span></div></div><div class="currency-item"><span class="currency-icon silver">'+I.coin+'</span><div><div class="currency-label">银币</div><span class="currency-value">'+(cur.silver||0)+'</span></div></div><div class="currency-item"><span class="currency-icon copper">'+I.coin+'</span><div><div class="currency-label">铜币</div><span class="currency-value">'+(cur.copper||0)+'</span></div></div></div><div class="items-grid">'+iCards+'</div></div>';
}

/* ============ 交互 ============ */
function togglePanel(){
    var p=$('#aiselan-game-panel');if(!p)return;
    p.classList.toggle('collapsed');
    var btn=$('#aiselan-toggle-btn');
    if(btn)btn.setAttribute('aria-label',p.classList.contains('collapsed')?'展开面板':'收起面板');
}

function switchTab(name){
    activeTab=name;
    $$('.aiselan-tab').forEach(function(t){var ia=t.dataset.tab===name;t.classList.toggle('active',ia);t.setAttribute('aria-selected',ia?'true':'false');});
    var panels={scene:$('#panel-scene'),status:$('#panel-status'),inventory:$('#panel-inventory')};
    Object.keys(panels).forEach(function(k){if(panels[k])panels[k].classList.toggle('active',k===name);});
}

function bindEvents(){
    var h=$('#aiselan-handle');if(h)h.addEventListener('click',function(e){if(e.target.closest('#aiselan-toggle-btn'))return;togglePanel();});
    var tb=$('#aiselan-toggle-btn');if(tb)tb.addEventListener('click',function(e){e.stopPropagation();togglePanel();});
    var tabs=$('#aiselan-tabs');if(tabs)tabs.addEventListener('click',function(e){var tab=e.target.closest('.aiselan-tab');if(!tab)return;var tn=tab.dataset.tab;if(tn)switchTab(tn);});
    document.addEventListener('keydown',function(e){if(e.ctrlKey&&e.code==='Backquote'){e.preventDefault();togglePanel();}});
    var ct=$('#aiselan-content');if(ct){
        ct.addEventListener('click',function(e){
            var uc=e.target.closest('.unit-card'),ii=e.target.closest('.investigable-item'),ic=e.target.closest('.item-card'),pc=e.target.closest('.party-member-card');
            if(uc){var n=uc.querySelector('.unit-name');showToast('info','已选中目标：'+(n?n.textContent:'未知'),2000);}
            if(ii){var s=ii.querySelector('span:last-child');showToast('info','正在调查：'+(s?s.textContent:'未知'),2000);}
            if(ic){var nm=ic.querySelector('.item-name');showToast('info','物品详情：'+(nm?nm.textContent:'未知'),2000);}
            if(pc){var pn=pc.querySelector('.party-member-name');showToast('info','查看成员：'+(pn?pn.textContent.replace(/^\S+\s/,''):'未知'),2000);}
        });
    }
}

/* ============ 全局 API ============ */
window.AiselanBridge={
    setGameState:function(s){if(s){state=s;ensureDefaults();saveState();render();}},
    getGameState:function(){return state;},
    update:function(path,value){var keys=path.split('.'),t=state,i;for(i=0;i<keys.length-1;i++){if(!t[keys[i]])t[keys[i]]={};t=t[keys[i]];}t[keys[keys.length-1]]=value;saveState();render();},
    notify:showToast,
    toggle:togglePanel,
    switchTab:switchTab,
    refresh:render
};

console.log('[艾瑟兰作战面板] Bundle 已加载');
})();
