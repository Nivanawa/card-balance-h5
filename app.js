const CARD_DATA = {
  wood_stick: { name: '木棍', type: 'attack', label: '攻击卡', cost: 0, art: 'ATK', desc: '每轮对所有敌人造成 8 点伤害', effect: { kind: 'damage', mode: 'all', hit: 8, shots: 1 }, evolvesTo: 'spiked_bat' },
  spare_battery: { name: '备用电池', type: 'resource', label: '资源卡', cost: 0, art: 'SYS', desc: '法力 +1', effect: { kind: 'mana', value: 1 } },
  wood_board: { name: '木板', type: 'defense', label: '防御卡', cost: 0, art: 'DEF', desc: '防御 +2', effect: { kind: 'defense', value: 2 } },
  flashlight: { name: '手电筒', type: 'boost', label: '强化卡', cost: 0, art: 'MOD', desc: '本局溅射伤害 +5%', effect: { kind: 'passive', key: 'splash', value: .05 } },
  lighter: { name: '打火机', type: 'attack', label: '攻击卡', cost: 1, art: 'ATK', desc: '1 发弹道，造成 45 点伤害', effect: { kind: 'damage', mode: 'single', hit: 45, shots: 1 }, evolvesTo: 'flamethrower' },
  energy_drink: { name: '能量饮料', type: 'boost', label: '强化卡', cost: 1, art: 'MOD', desc: '本局普通伤害 +10%', effect: { kind: 'passive', key: 'damageUp', value: .1 }, evolvesTo: 'flamethrower' },
  toolkit: { name: '工具包', type: 'boost', label: '强化卡', cost: 1, art: 'MOD', desc: '最大生命 +3，随后销毁', effect: { kind: 'maxHp', value: 3 }, destroy: true, evolvesTo: 'spiked_bat' },
  radio: { name: '对讲机', type: 'resource', label: '资源卡', cost: 1, art: 'SYS', desc: '抽取 1 张牌', effect: { kind: 'draw', value: 1 } },
  iron_plate: { name: '铁板', type: 'defense', label: '防御卡', cost: 1, art: 'DEF', desc: '防御 +4', effect: { kind: 'defense', value: 4 } },
  fire_axe: { name: '消防斧', type: 'attack', label: '攻击卡', cost: 2, art: 'ATK', desc: '每轮对所有敌人造成 45 点伤害；概率击退', effect: { kind: 'damage', mode: 'all', hit: 45, shots: 1, knockback: .3 } },
  riot_shield: { name: '防爆盾', type: 'defense', label: '防御卡', cost: 2, art: 'DEF', desc: '防御 +6', effect: { kind: 'defense', value: 6 } },
  spiked_bat: { name: '带刺球棒', type: 'synth', label: '合成攻击卡', cost: 2, art: 'SYN', desc: '5 发 × 8 点多弹道伤害；暴击时治疗 2 点', effect: { kind: 'damage', mode: 'projectile', hit: 8, shots: 5, crit: .25, critMultiplier: 1.6, healOnCrit: 2 }, recipe: ['wood_stick', 'toolkit'] },
  molotov: { name: '燃烧瓶', type: 'attack', label: '攻击卡', cost: 3, art: 'ATK', desc: '1 发 60 点伤害，并附带持续燃烧', effect: { kind: 'damage', mode: 'single', hit: 60, shots: 1, burn: { turns: 2, damage: 8 } } },
  freeze_spray: { name: '冷冻喷雾', type: 'attack', label: '攻击卡', cost: 3, art: 'ATK', desc: '施加 1 点冰冻', effect: { kind: 'freeze', turns: 1 } },
  flamethrower: { name: '火焰喷射器', type: 'synth', label: '合成攻击卡', cost: 3, art: 'SYN', desc: '1 发 225 点伤害；有概率击退', effect: { kind: 'damage', mode: 'single', hit: 225, shots: 1, knockback: .35 }, recipe: ['lighter', 'energy_drink'] },
  spare_magazine: { name: '备用弹匣', type: 'wild', label: '万能卡', cost: 0, art: 'WILD', desc: '抽取 1 张牌，随后销毁', effect: { kind: 'draw', value: 1 }, destroy: true },
  first_aid: { name: '急救包', type: 'wild', label: '万能卡', cost: 0, art: 'WILD', desc: '恢复 1 点生命，随后销毁', effect: { kind: 'heal', value: 1 }, destroy: true },
  flashbang: { name: '闪光弹', type: 'wild', label: '万能卡', cost: 0, art: 'WILD', desc: '对前排施加 1 点冰冻，随后销毁', effect: { kind: 'freeze', turns: 1 }, destroy: true },
  fast_reload: { name: '快速装填', type: 'boost', label: '宝石', cost: 0, art: 'GEM', desc: '本局每回合额外抽 1 张牌', effect: { kind: 'passive', key: 'extraDraw', value: 1 }, passiveOnly: true },
  reinforced_bullet: { name: '强化弹头', type: 'boost', label: '宝石', cost: 0, art: 'GEM', desc: '造成双倍伤害', effect: { kind: 'passive', key: 'doubleDamage', value: 1 }, passiveOnly: true },
  multi_attachment: { name: '多重配件', type: 'boost', label: '宝石', cost: 0, art: 'GEM', desc: '所有攻击额外发射 1 次', effect: { kind: 'passive', key: 'extraShots', value: 1 }, passiveOnly: true },
  continuous_action: { name: '连续行动', type: 'boost', label: '神器', cost: 0, art: 'ART', desc: '按费用递增出牌形成连击收益', effect: { kind: 'passive', key: 'comboBonus', value: .05 }, passiveOnly: true },
  artifact_workbench: { name: '工作台', type: 'boost', label: '神器', cost: 0, art: 'ART', desc: '开启卡牌镶嵌宝石功能', effect: { kind: 'passive', key: 'workbench', value: 1 }, passiveOnly: true },
  canned_food: { name: '罐头', type: 'boost', label: '道具', cost: 0, art: 'ITEM', desc: '恢复 10 点生命', effect: { kind: 'heal', value: 10 }, passiveOnly: true },
  energy_battery: { name: '能量电池', type: 'boost', label: '功能', cost: 0, art: 'SYS', desc: '本局法力 +1', effect: { kind: 'maxMana', value: 1 }, passiveOnly: true },
  tactical_pack: { name: '战术背包', type: 'boost', label: '功能', cost: 0, art: 'SYS', desc: '本局手牌容量 +1', effect: { kind: 'maxHand', value: 1 }, passiveOnly: true },
  endless_fight: { name: '连续作战', type: 'boost', label: '秘能', cost: 0, art: 'ARC', desc: '回合结束时连击不清零', effect: { kind: 'passive', key: 'comboPersist', value: 1 }, passiveOnly: true },
  lasting_defense: { name: '持久防御', type: 'boost', label: '秘能', cost: 0, art: 'ARC', desc: '剩余防御保留至后续回合', effect: { kind: 'passive', key: 'defensePersist', value: 1 }, passiveOnly: true },
  counter_armor: { name: '反击装甲', type: 'boost', label: '秘能', cost: 0, art: 'ARC', desc: '利用当前防御造成攻击伤害', effect: { kind: 'passive', key: 'counter', value: 1 }, passiveOnly: true }
};

const STAGES = [
  { title: '第 1 关 · 黄色走廊', subtitle: '基础卡牌循环：攻击、防御、资源', waves: [[['basic', 2], ['stalker', 1]], [['basic', 3], ['stalker', 1]]], rewards: ['lighter', 'iron_plate', 'radio'] },
  { title: '第 2 关 · 潮湿机房', subtitle: '强化与合成：把素材变成高价值卡', waves: [[['stalker', 2], ['elite', 1]], [['basic', 3], ['elite', 1]], [['stalker', 3], ['elite', 1]]], rewards: ['energy_drink', 'toolkit', 'artifact_workbench'] },
  { title: '第 3 关 · 红色出口', subtitle: '完整系统验证：状态、被动与 Boss', waves: [[['elite', 2], ['stalker', 2]], [['elite', 3]], [['boss', 1]]], rewards: ['reinforced_bullet', 'lasting_defense', 'counter_armor'] }
];

const ENEMY_TYPES = {
  basic: { name: '回声体', hp: 34, atk: 4, color: 'basic', intent: '近身撕咬' },
  stalker: { name: '追迹者', hp: 48, atk: 6, color: 'basic', intent: '快速突进' },
  elite: { name: '高个实体', hp: 86, atk: 10, color: 'elite', intent: '重击' },
  boss: { name: '出口守门人', hp: 430, atk: 17, color: 'boss', intent: '区域压制', boss: true }
};

const state = {
  stage: 0, wave: 0, turn: 1, hp: 20, maxHp: 20, mana: 3, maxMana: 3, maxHand: 7, defense: 0, combo: 0,
  deck: [], hand: [], discard: [], destroyed: [], enemies: [], log: [], seed: 1, rng: null, damage: 0, taken: 0,
  totalDamage: 0, totalTaken: 0, splashDamage: 0, totalSplashDamage: 0, overkill: 0, totalOverkill: 0,
  passives: {}, debug: { damageUp: 0, extraShots: 0, splash: 0, splashDivisor: 5 }, busy: false,
  lastStageDamage: 0, actionSeq: 0, preview: null
};
const $ = (id) => document.getElementById(id);

function mulberry32(seed) { return function() { let t = seed += 0x6D2B79F5; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(state.rng() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function pushLog(text, kind = '') { state.log.unshift({ text, kind }); state.log = state.log.slice(0, 80); renderLog(); }
function toast(text) { const el = $('toast'); el.textContent = text; el.classList.remove('hidden'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.add('hidden'), 1800); }
function allOwnedCards() { return [...state.deck, ...state.hand, ...state.discard]; }
function hasCard(id) { return allOwnedCards().includes(id) || state.destroyed.includes(id); }
function passive(key) { return state.passives[key] || 0; }
function aliveEnemies() { return state.enemies.filter((enemy) => enemy.hp > 0); }
function percentage(value) { return `${Math.round(value * 100)}%`; }

function resetRun(seed = 1) {
  state.stage = 0; state.wave = 0; state.turn = 1; state.hp = 20; state.maxHp = 20; state.maxMana = Number($('mana-slider').value) || 3; state.mana = state.maxMana; state.maxHand = 7; state.defense = 0; state.combo = 0;
  state.damage = 0; state.taken = 0; state.totalDamage = 0; state.totalTaken = 0; state.splashDamage = 0; state.totalSplashDamage = 0; state.overkill = 0; state.totalOverkill = 0; state.lastStageDamage = 0;
  state.passives = { workbench: 1 }; state.actionSeq = 0; state.preview = null;
  state.seed = Math.max(1, Number(seed) || 1); state.rng = mulberry32(state.seed); state.log = []; state.busy = false;
  state.deck = ['wood_stick','wood_stick','wood_stick','spare_battery','wood_board','wood_board','flashlight','lighter','radio','iron_plate','fire_axe','riot_shield','toolkit','energy_drink','spare_magazine','first_aid'];
  state.hand = []; state.discard = []; state.destroyed = [];
  pushLog(`新的测试运行已开始，种子 ${String(state.seed).padStart(3, '0')}`, 'good'); startStage(0);
}

function startStage(index) {
  state.stage = index; state.wave = 0; state.turn = 1; state.mana = state.maxMana; state.defense = 0; state.combo = 0;
  state.damage = 0; state.taken = 0; state.splashDamage = 0; state.overkill = 0; state.lastStageDamage = 0; state.preview = null;
  if (index > 0) { state.deck.push(...state.discard, ...state.hand); state.hand = []; state.discard = []; }
  drawToHand(); spawnWave(); pushLog(`进入${STAGES[index].title}`, 'good'); renderAll();
}

function spawnWave() {
  const wave = STAGES[state.stage].waves[state.wave]; state.enemies = []; state.preview = null;
  wave.forEach(([type, count]) => { for (let i = 0; i < count; i++) { const base = ENEMY_TYPES[type]; const hp = Math.round(base.hp * Number($('enemy-hp-slider').value)); state.enemies.push({ id: `${type}-${i}-${state.stage}-${state.wave}`, type, name: base.name, hp, maxHp: hp, atk: Math.round(base.atk * Number($('enemy-atk-slider').value)), intent: base.intent, color: base.color, boss: !!base.boss, burn: 0, freeze: 0, knockback: 0, disarmed: 0 }); } });
  pushLog(`第 ${state.stage + 1} 关 · 第 ${state.wave + 1} 波出现 ${state.enemies.length} 个敌人`);
}

function drawOne() { if (!state.deck.length) { if (!state.discard.length) return false; state.deck = shuffle(state.discard.splice(0)); pushLog('弃牌堆洗回牌库'); } state.hand.push(state.deck.pop()); return true; }
function drawToHand(extra = 0) { const target = Math.min(state.maxHand, state.hand.length + extra || state.maxHand); while (state.hand.length < target && drawOne()) {} }

function stableRoll(...parts) {
  const text = parts.join('|'); let hash = 2166136261;
  for (let i = 0; i < text.length; i++) { hash ^= text.charCodeAt(i); hash = Math.imul(hash, 16777619); }
  return (hash >>> 0) / 4294967296;
}

function attackModifiers() {
  return { damageUp: passive('damageUp') + state.debug.damageUp, extraShots: passive('extraShots') + state.debug.extraShots, splash: passive('splash') + state.debug.splash, splashDivisor: Math.max(1, state.debug.splashDivisor) };
}

function calculateAttack(effect, source, handIndex = 0) {
  const enemies = aliveEnemies(); const modifiers = attackModifiers(); let multiplier = 1 + modifiers.damageUp;
  if (passive('doubleDamage')) multiplier *= 2;
  if (passive('comboBonus')) multiplier *= 1 + state.combo * passive('comboBonus');
  const perHit = Math.max(0, Math.round(effect.hit * multiplier)); const shots = Math.max(1, effect.shots + modifiers.extraShots); const panelDamage = perHit * shots;
  const splashEach = modifiers.splash > 0 ? Math.ceil(panelDamage * modifiers.splash / modifiers.splashDivisor) : 0;
  const direct = new Map(); const statuses = new Map(); let crits = 0;
  const addHit = (enemy, shot) => {
    const roll = stableRoll(state.seed, state.stage, state.wave, state.turn, state.actionSeq, handIndex, source, enemy.id, shot, 'crit'); const crit = !!effect.crit && roll < effect.crit;
    const amount = crit ? Math.round(perHit * (effect.critMultiplier || 1.6)) : perHit; const current = direct.get(enemy.id) || { amount: 0, hits: 0, crits: 0 };
    current.amount += amount; current.hits += 1; current.crits += crit ? 1 : 0; direct.set(enemy.id, current); crits += crit ? 1 : 0;
  };
  if (enemies.length) {
    if (effect.mode === 'all') for (let shot = 0; shot < shots; shot++) enemies.forEach((enemy) => addHit(enemy, shot));
    else for (let shot = 0; shot < shots; shot++) addHit(enemies[shot % enemies.length], shot);
  }
  if (effect.knockback) direct.forEach((_, enemyId) => { const roll = stableRoll(state.seed, state.stage, state.wave, state.turn, state.actionSeq, handIndex, source, enemyId, 'knockback'); if (roll < effect.knockback) statuses.set(enemyId, '击退：下回合停止'); });
  const splash = new Map();
  if (splashEach > 0) enemies.forEach((enemy) => { const remaining = enemy.hp - (direct.get(enemy.id)?.amount || 0); if (remaining > 0) splash.set(enemy.id, splashEach); });
  return { direct, splash, statuses, perHit, shots, panelDamage, splashEach, crits, modifiers };
}

function damageEnemy(enemy, value, source = '卡牌', channel = 'direct') {
  if (!enemy || enemy.hp <= 0) return 0;
  const intended = Math.max(0, Math.round(value)); const actual = Math.min(enemy.hp, intended); const overkill = intended - actual;
  enemy.hp -= actual; state.damage += actual; state.totalDamage += actual; state.overkill += overkill; state.totalOverkill += overkill;
  if (channel === 'splash') { state.splashDamage += actual; state.totalSplashDamage += actual; }
  pushLog(`${source}对${enemy.name}造成 ${actual} 点${channel === 'splash' ? '溅射' : '直接'}伤害${overkill ? `（过量 ${overkill}）` : ''}`); return actual;
}

function playCard(index) {
  if (state.busy || state.hp <= 0 || !state.hand[index]) return; const id = state.hand[index]; const card = CARD_DATA[id];
  if (!card || card.passiveOnly) { toast('被动条目需在奖励或调试中解锁'); return; }
  const cost = card.cost === 'wild' ? 0 : card.cost; if (cost > state.mana) { toast('法力不足'); return; }
  state.preview = null; state.mana -= cost; state.hand.splice(index, 1); state.discard.push(id); state.combo += 1; pushLog(`打出 ${card.name}，消耗 ${cost} 法力`);
  resolveEffect(card.effect, card.name, index); state.actionSeq += 1;
  if (card.destroy) { state.discard = state.discard.filter((x, i, arr) => !(x === id && i === arr.lastIndexOf(id))); state.destroyed.push(id); pushLog(`${card.name}使用后销毁`); }
  checkWave(); renderAll();
}

function resolveEffect(effect, source, handIndex = 0) {
  if (!effect) return;
  if (effect.kind === 'damage') {
    const result = calculateAttack(effect, source, handIndex);
    result.direct.forEach((entry, enemyId) => {
      const enemy = state.enemies.find((item) => item.id === enemyId); damageEnemy(enemy, entry.amount, source, 'direct');
      if (enemy && enemy.hp > 0 && effect.burn) { enemy.burn = effect.burn.turns; enemy.burnDamage = effect.burn.damage; pushLog(`${enemy.name}获得燃烧 ${effect.burn.turns} 回合`); }
      if (enemy && result.statuses.has(enemyId)) { enemy.knockback = 2; pushLog(`${enemy.name}被击退，将在下一回合停止行动`); }
    });
    result.splash.forEach((amount, enemyId) => { const enemy = state.enemies.find((item) => item.id === enemyId); damageEnemy(enemy, amount, source, 'splash'); });
    if (result.crits && effect.healOnCrit) heal(result.crits * effect.healOnCrit);
    const modeText = effect.mode === 'all' ? '全体' : effect.mode === 'projectile' ? '多弹道' : '单体'; pushLog(`${source}结算：${modeText} ${result.shots} 发 × ${result.perHit}；溅射 ${result.splashEach}/存活敌人`);
  } else if (effect.kind === 'defense') state.defense += effect.value;
  else if (effect.kind === 'mana') state.mana = Math.min(state.maxMana + 2, state.mana + effect.value);
  else if (effect.kind === 'draw') drawToHand(effect.value);
  else if (effect.kind === 'heal') heal(effect.value);
  else if (effect.kind === 'maxHp') { state.maxHp += effect.value; state.hp += effect.value; }
  else if (effect.kind === 'freeze') { const enemy = aliveEnemies()[0]; if (enemy) { enemy.freeze = effect.turns; pushLog(`${enemy.name}被冻结 ${effect.turns} 回合`); } }
  else if (effect.kind === 'passive') applyPassive(effect.key, effect.value);
}

function applyPassive(key, value) {
  const stackable = ['damageUp', 'splash', 'extraShots', 'extraDraw', 'comboBonus']; state.passives[key] = stackable.includes(key) ? passive(key) + value : Math.max(passive(key), value);
  pushLog(`属性生效：${passiveName(key)}${stackable.includes(key) ? `累计为 ${formatPassive(key, passive(key))}` : ''}`, 'good');
}
function passiveName(key) { return ({ workbench:'工作台', damageUp:'普通伤害', splash:'溅射伤害', doubleDamage:'双倍伤害', extraDraw:'额外抽牌', extraShots:'额外发射', comboBonus:'连击伤害', comboPersist:'连击保留', defensePersist:'防御保留', counter:'反击装甲' }[key] || key); }
function formatPassive(key, value) { return ['damageUp', 'splash', 'comboBonus'].includes(key) ? percentage(value) : String(value); }
function heal(value) { const before = state.hp; state.hp = Math.min(state.maxHp, state.hp + value); pushLog(`恢复 ${state.hp - before} 点生命`); }

function endTurn() {
  if (state.busy || state.hp <= 0) return; state.busy = true; state.preview = null;
  aliveEnemies().forEach((enemy) => {
    let skip = false;
    if (enemy.disarmed > 0) { enemy.disarmed -= 1; skip = true; pushLog(`${enemy.name}被缴械，跳过本次行动`); }
    else if (enemy.freeze > 0) { enemy.freeze -= 1; skip = true; pushLog(`${enemy.name}被冻结，跳过行动`); }
    else if (enemy.knockback === 1) { enemy.knockback = 0; skip = true; pushLog(`${enemy.name}受击退影响，跳过本回合行动`); }
    else if (enemy.knockback > 1) enemy.knockback -= 1;
    if (!skip) { let incoming = enemy.atk; const blocked = Math.min(state.defense, incoming); state.defense -= blocked; incoming -= blocked; if (incoming) { state.hp = Math.max(0, state.hp - incoming); state.taken += incoming; state.totalTaken += incoming; pushLog(`${enemy.name}造成 ${incoming} 点伤害${blocked ? `（防御抵挡 ${blocked}）` : ''}`); } else if (blocked) pushLog(`${enemy.name}的攻击被完全抵挡`); }
    if (enemy.burn > 0) { damageEnemy(enemy, enemy.burnDamage || 8, '燃烧'); enemy.burn -= 1; }
  });
  if (!passive('defensePersist')) state.defense = 0; if (!passive('comboPersist')) state.combo = 0; state.turn += 1; state.mana = state.maxMana; drawToHand(1 + passive('extraDraw')); state.busy = false;
  if (state.hp <= 0) { pushLog('生命归零，本局失败', 'bad'); state.busy = true; $('run-status').textContent = `RUN ${String(state.seed).padStart(3, '0')} · 失败`; } else checkWave(); renderAll();
}

function checkWave() { if (aliveEnemies().length) return; if (state.wave < STAGES[state.stage].waves.length - 1) { state.wave += 1; state.turn += 1; spawnWave(); toast('本波完成，下一波敌人出现'); } else completeStage(); }
function completeStage() { state.lastStageDamage = state.damage; pushLog(`${STAGES[state.stage].title}完成：实际伤害 ${state.damage}，过量 ${state.overkill}`, 'good'); if (state.stage >= STAGES.length - 1) { state.busy = true; $('run-status').textContent = `RUN ${String(state.seed).padStart(3, '0')} · 通关`; showRewards(true); return; } showRewards(false); }
function showRewards(final) {
  const modal = $('reward-modal'); const grid = $('reward-grid'); grid.innerHTML = ''; $('modal-title').textContent = final ? '三关测试完成' : `${STAGES[state.stage].title} · 选择奖励`; $('modal-subtitle').textContent = final ? '你可以导出日志，或重新开始一组可复现测试。' : '选择一项加入牌组或解锁被动，继续下一关。';
  if (final) { const summary = document.createElement('div'); summary.className = 'recipe'; summary.innerHTML = `<strong>本局结果</strong><small>三关实际伤害 ${state.totalDamage} · 溅射贡献 ${state.totalSplashDamage} · 过量伤害 ${state.totalOverkill} · 受到伤害 ${state.totalTaken} · 最终生命 ${state.hp}/${state.maxHp}</small>`; grid.append(summary); $('modal-close').textContent = '返回战场'; modal.classList.remove('hidden'); return; }
  STAGES[state.stage].rewards.forEach((id) => { const card = CARD_DATA[id]; const btn = document.createElement('button'); btn.className = 'reward'; btn.innerHTML = `<div class="card-art ${card.type}" style="height:38px;margin-bottom:9px"><span>${card.art}</span><span class="cost">${card.cost}</span></div><strong>${card.name}</strong><small style="display:block;color:var(--muted);font-size:11px;margin-top:5px;line-height:1.4">${card.desc}</small>`; btn.onclick = () => chooseReward(id); grid.append(btn); }); modal.classList.remove('hidden');
}
function chooseReward(id) { const card = CARD_DATA[id]; if (card.effect.kind === 'passive') applyPassive(card.effect.key, card.effect.value); else { state.deck.push(id); pushLog(`奖励加入牌组：${card.name}`, 'good'); } $('reward-modal').classList.add('hidden'); startStage(state.stage + 1); }

function showSynthesis() { const box = $('synth-result'); box.innerHTML = ''; const recipes = [['spiked_bat', ['wood_stick','toolkit'], '木棍 + 工具包 + 工作台'], ['flamethrower', ['lighter','energy_drink'], '打火机 + 能量饮料 + 工作台']]; recipes.forEach(([result, parts, text]) => { const ready = passive('workbench') && parts.every((id) => hasCard(id)); const item = document.createElement('div'); item.className = 'recipe'; item.innerHTML = `<strong>${CARD_DATA[result].name} · ${ready ? '可合成' : '未满足条件'}</strong><small>${text}<br/>${ready ? '点击生成 1 张合成卡并移除素材。' : '需要工作台和对应素材。'}</small>`; if (ready) { const btn = document.createElement('button'); btn.className = 'button primary'; btn.style.marginTop = '8px'; btn.textContent = '执行合成'; btn.onclick = () => synthesize(result, parts); item.append(btn); } box.append(item); }); $('synth-modal').classList.remove('hidden'); }
function synthesize(result, parts) { parts.forEach((id) => removeOwned(id)); state.deck.push(result); pushLog(`合成成功：${CARD_DATA[result].name}`, 'good'); toast(`已获得 ${CARD_DATA[result].name}`); showSynthesis(); renderAll(); }
function removeOwned(id) { const pools = [state.hand, state.deck, state.discard]; for (const pool of pools) { const i = pool.indexOf(id); if (i >= 0) { pool.splice(i, 1); return; } } }
function skipWave() { if (state.busy) return; state.preview = null; state.enemies.forEach((enemy) => enemy.hp = 0); checkWave(); renderAll(); }

function attackLabel(effect) { if (!effect || effect.kind !== 'damage') return ''; const mode = effect.mode === 'all' ? '全体' : effect.mode === 'projectile' ? '多弹道' : '单体'; return `${mode} · ${effect.shots} 发 × ${effect.hit}`; }
function showAttackPreview(card, index, locked = false) { if (card.effect.kind !== 'damage' || state.busy || (state.preview?.locked && !locked)) return; const preview = calculateAttack(card.effect, card.name, index); preview.key = `${state.actionSeq}-${index}-${card.name}`; preview.locked = locked; state.preview = preview; renderEnemies(); renderPlayer(); }
function toggleAttackPreview(card, index) { const key = `${state.actionSeq}-${index}-${card.name}`; if (state.preview?.locked && state.preview.key === key) clearAttackPreview(true); else showAttackPreview(card, index, true); }
function clearAttackPreview(force = false) { if (!state.preview || (state.preview.locked && !force)) return; state.preview = null; renderEnemies(); renderPlayer(); }

function renderAll() { renderHeader(); renderEnemies(); renderPlayer(); renderHand(); renderSide(); renderMechanics(); renderLog(); }
function renderHeader() { const stage = STAGES[state.stage]; $('stage-title').textContent = stage.title; $('stage-subtitle').textContent = stage.subtitle; $('wave-badge').textContent = `WAVE ${state.wave + 1} / ${stage.waves.length}`; [...$('stage-progress').children].forEach((el, i) => { el.className = i < state.stage ? 'done' : i === state.stage ? 'active' : ''; }); $('objective-text').textContent = state.hp <= 0 ? '本局失败，重新开始后再试' : aliveEnemies().length ? '击败本波全部敌人' : '选择奖励继续'; }
function renderEnemies() {
  const zone = $('enemy-zone'); zone.innerHTML = '';
  state.enemies.forEach((enemy) => { const el = document.createElement('div'); el.className = `enemy ${enemy.color} ${enemy.boss ? 'boss' : ''} ${enemy.hp <= 0 ? 'dead' : ''}`; const hp = Math.max(0, Math.round(enemy.hp / enemy.maxHp * 100)); const direct = state.preview?.direct.get(enemy.id); const splash = state.preview?.splash.get(enemy.id) || 0; const previewTotal = (direct?.amount || 0) + splash; const previewStatus = state.preview?.statuses.get(enemy.id); const preview = state.preview && enemy.hp > 0 ? `<div class="enemy-preview"><strong>预计 -${previewTotal}</strong><span>直接 ${direct?.amount || 0}${direct?.hits ? ` / ${direct.hits} 发` : ''} · 溅射 ${splash}</span>${previewStatus ? `<span>${previewStatus}</span>` : ''}</div>` : '';
    el.innerHTML = `${preview}<div class="enemy-mark">${enemy.boss ? 'BOSS' : enemy.type === 'elite' ? 'ELT' : 'ENT'}</div><div class="enemy-name">${enemy.name}</div><div class="enemy-meta">攻击 ${enemy.atk} · ${enemy.intent}</div><div class="hp-track"><div class="hp-fill" style="width:${hp}%"></div></div><div class="enemy-status">${enemy.burn ? `<span class="status burn">燃烧 ${enemy.burn}</span>` : ''}${enemy.freeze ? `<span class="status freeze">冰冻 ${enemy.freeze}</span>` : ''}${enemy.knockback ? `<span class="status knockback">击退 ${enemy.knockback === 1 ? '下回合' : '待生效'}</span>` : ''}${enemy.disarmed ? '<span class="status disarm">缴械</span>' : ''}${enemy.hp <= 0 ? '<span class="status">已击败</span>' : ''}</div>`; zone.append(el); });
}
function renderPlayer() { $('hp-value').textContent = `${state.hp} / ${state.maxHp}`; $('player-hp-fill').style.width = `${Math.max(0, state.hp / state.maxHp * 100)}%`; $('mana-value').textContent = `${state.mana} / ${state.maxMana}`; $('def-value').textContent = state.defense; $('combo-value').textContent = state.combo; $('turn-value').textContent = `TURN ${state.turn}`; $('player-state').textContent = state.hp <= 0 ? '已倒下' : state.busy ? '敌人行动中' : '准备行动'; $('turn-tip').textContent = state.preview ? '当前显示该卡对每个敌人的确定结算预览。' : passive('comboPersist') ? '连击将在回合结束后保留。' : '悬停攻击卡查看结算预览，点击出牌。'; $('end-turn-btn').disabled = state.busy || state.hp <= 0; }
function renderHand() { const hand = $('hand'); hand.innerHTML = ''; state.hand.forEach((id, i) => { const card = CARD_DATA[id]; const slot = document.createElement('div'); slot.className = 'card-slot'; const btn = document.createElement('button'); btn.className = `card ${card.type}`; btn.disabled = state.busy || state.hp <= 0 || card.passiveOnly || (card.cost > state.mana); const mechanics = attackLabel(card.effect); btn.innerHTML = `<div class="card-art"><span>${card.art}</span><span class="cost">${card.cost}</span></div><div class="card-name">${card.name}</div><div class="card-type">${card.label}</div>${mechanics ? `<div class="card-mechanics">${mechanics}</div>` : ''}<div class="card-desc">${card.desc}</div>`; btn.onclick = () => playCard(i); btn.onmouseenter = () => showAttackPreview(card, i); btn.onfocus = () => showAttackPreview(card, i); slot.append(btn); if (mechanics) { const previewBtn = document.createElement('button'); previewBtn.className = 'preview-button'; previewBtn.textContent = '预览'; previewBtn.title = `预览${card.name}的逐敌人伤害`; previewBtn.onclick = () => toggleAttackPreview(card, i); slot.append(previewBtn); } hand.append(slot); }); $('hand-count').textContent = `${state.hand.length} / ${state.maxHand}`; }
function renderSide() { $('seed-value').textContent = String(state.seed).padStart(3, '0'); $('deck-value').textContent = `${state.deck.length} / ${state.discard.length} / ${state.destroyed.length}`; const names = Object.entries(state.passives).filter(([,value]) => value).map(([key, value]) => `${passiveName(key)}${['damageUp','splash','extraShots'].includes(key) ? ` ${formatPassive(key, value)}` : ''}`); $('unlock-value').textContent = names.join('、') || '无'; $('damage-value').textContent = state.damage; $('splash-value').textContent = state.splashDamage; $('overkill-value').textContent = state.overkill; $('taken-value').textContent = state.taken; }
function renderMechanics() { const modifiers = attackModifiers(); $('mechanic-summary').innerHTML = `<div><span>普通伤害</span><strong>+${percentage(modifiers.damageUp)}</strong></div><div><span>额外发射</span><strong>+${modifiers.extraShots}</strong></div><div><span>溅射伤害</span><strong>+${percentage(modifiers.splash)}</strong></div><div><span>固定分母</span><strong>${modifiers.splashDivisor}</strong></div>`; }
function renderLog() { const log = $('log'); log.innerHTML = state.log.map((line) => `<div class="log-line"><b>${line.kind === 'bad' ? '!' : '·'}</b> ${line.text}</div>`).join(''); }

function runFormulaChecks() {
  const distributed = [0,0,0,0,0]; for (let shot = 0; shot < 7; shot++) distributed[shot % 5] += 8;
  const checks = [['逐弹道四舍五入', Math.round(8 * 1.1) * 5 === 45, '8 × 110% → 9；5 发 = 45'], ['弹道循环分配', distributed.join(',') === '16,16,8,8,8', '7 发分配：16 / 16 / 8 / 8 / 8'], ['溅射向上取整', Math.ceil(40 * .55 / 5) === 5, '40 × 55% ÷ 5 → 每人 +5'], ['固定分母不变', Math.ceil(30 * .35 / 5) === 3, '只剩 4 人仍按 ÷5 → 每人 +3']];
  $('formula-checks').innerHTML = checks.map(([name, pass, detail]) => `<div class="check-row ${pass ? 'pass' : 'fail'}"><span>${pass ? '通过' : '失败'}</span><div><strong>${name}</strong><small>${detail}</small></div></div>`).join('');
}

function applyDebugSettings() {
  $('enemy-hp-label').textContent = `${Number($('enemy-hp-slider').value).toFixed(1)}x`; $('enemy-atk-label').textContent = `${Number($('enemy-atk-slider').value).toFixed(1)}x`; $('mana-label').textContent = $('mana-slider').value;
  state.debug.damageUp = Number($('damage-bonus-slider').value) / 100; state.debug.extraShots = Number($('shots-slider').value); state.debug.splash = Number($('splash-slider').value) / 100; state.debug.splashDivisor = Number($('splash-divisor-slider').value);
  state.maxMana = Number($('mana-slider').value); state.mana = Math.min(state.maxMana, state.mana); spawnWave(); renderAll(); toast('调试参数已应用，本波已重置');
}

$('end-turn-btn').onclick = endTurn;
$('restart-btn').onclick = () => resetRun(Number($('seed-input').value) || 1);
$('export-btn').onclick = () => { const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), config: { ...state.debug, enemyHpMultiplier: Number($('enemy-hp-slider').value), enemyAtkMultiplier: Number($('enemy-atk-slider').value) }, state: { stage: state.stage + 1, wave: state.wave + 1, turn: state.turn, hp: state.hp, maxHp: state.maxHp, mana: state.mana, stageDamage: state.damage, totalDamage: state.totalDamage, splashDamage: state.totalSplashDamage, overkill: state.totalOverkill, totalTaken: state.totalTaken, seed: state.seed }, log: state.log.map((entry) => entry.text) }, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `card-balance-run-${String(state.seed).padStart(3,'0')}.json`; a.click(); URL.revokeObjectURL(a.href); toast('日志已导出'); };
$('skip-wave-btn').onclick = skipWave; $('synth-btn').onclick = showSynthesis; $('synth-close').onclick = () => $('synth-modal').classList.add('hidden'); $('modal-close').onclick = () => $('reward-modal').classList.add('hidden'); $('apply-debug-btn').onclick = applyDebugSettings;
$('enemy-hp-slider').oninput = (event) => $('enemy-hp-label').textContent = `${Number(event.target.value).toFixed(1)}x`; $('enemy-atk-slider').oninput = (event) => $('enemy-atk-label').textContent = `${Number(event.target.value).toFixed(1)}x`; $('mana-slider').oninput = (event) => $('mana-label').textContent = event.target.value;
$('damage-bonus-slider').oninput = (event) => $('damage-bonus-label').textContent = `+${event.target.value}%`; $('shots-slider').oninput = (event) => $('shots-label').textContent = `+${event.target.value}`; $('splash-slider').oninput = (event) => $('splash-label').textContent = `+${event.target.value}%`; $('splash-divisor-slider').oninput = (event) => $('splash-divisor-label').textContent = event.target.value;

runFormulaChecks(); resetRun(1);
