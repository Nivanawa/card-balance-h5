const CARD_DATA = {
  wood_stick: { name:'木棍', source:'神鞭', type:'attack', label:'攻击卡', rarity:'普通', cost:0, art:'ATK', desc:'8 点伤害，作用于多个敌人', effect:{kind:'damage',mode:'all',hit:8,shots:1}, evolvesTo:'spiked_bat' },
  spare_battery: { name:'备用电池', source:'空白之书', type:'resource', label:'资源卡', rarity:'普通', cost:0, art:'SYS', desc:'法力 +1', effect:{kind:'mana',value:1} },
  wood_board: { name:'木板', source:'防御', type:'defense', label:'防御卡', rarity:'普通', cost:0, art:'DEF', desc:'防御 +2', effect:{kind:'defense',value:2} },
  flashlight: { name:'手电筒', source:'蜡烛', type:'boost', label:'强化卡', rarity:'普通', cost:0, art:'MOD', desc:'攻击获得 +5% 溅射伤害', effect:{kind:'passive',key:'splash',value:.05} },
  lighter: { name:'打火机', source:'火焰魔杖', type:'attack', label:'攻击卡', rarity:'普通', cost:1, art:'ATK', desc:'造成 45 点伤害', effect:{kind:'damage',mode:'single',hit:45,shots:1}, evolvesTo:'flamethrower' },
  energy_drink: { name:'能量饮料', source:'菠菜', type:'boost', label:'强化卡', rarity:'普通', cost:1, art:'MOD', desc:'造成伤害 +10%', effect:{kind:'passive',key:'damageUp',value:.1}, evolvesTo:'flamethrower' },
  toolkit: { name:'工具包', source:'空虚之心', type:'boost', label:'强化卡', rarity:'进阶', cost:1, art:'MOD', desc:'最大生命 +3，随后销毁', effect:{kind:'maxHp',value:3}, destroy:true, evolvesTo:'spiked_bat' },
  radio: { name:'对讲机', source:'念力法球', type:'resource', label:'资源卡', rarity:'普通', cost:1, art:'SYS', desc:'抽取 1 张牌', effect:{kind:'draw',value:1} },
  iron_plate: { name:'铁板', source:'黄金防御', type:'defense', label:'防御卡', rarity:'普通', cost:1, art:'DEF', desc:'防御 +4', effect:{kind:'defense',value:4} },
  fire_axe: { name:'消防斧', source:'斧头', type:'attack', label:'攻击卡', rarity:'进阶', cost:2, art:'ATK', desc:'45 点伤害，作用于多个敌人，有概率击退', effect:{kind:'damage',mode:'all',hit:45,shots:1,knockback:.3} },
  riot_shield: { name:'防爆盾', source:'彩虹防御', type:'defense', label:'防御卡', rarity:'进阶', cost:2, art:'DEF', desc:'防御 +6', effect:{kind:'defense',value:6} },
  spiked_bat: { name:'带刺球棒', source:'血笞', type:'attack', label:'攻击卡', rarity:'合成', cost:2, art:'SYN', desc:'40 点多目标伤害；暴击时治疗 2 点生命', effect:{kind:'damage',mode:'projectile',hit:8,shots:5,crit:.25,critMultiplier:1.6,healOnCrit:2}, recipe:['wood_stick','toolkit'] },
  molotov: { name:'燃烧瓶', source:'圣徒水', type:'attack', label:'攻击卡', rarity:'稀有', cost:3, art:'ATK', desc:'60 点伤害，并附带持续燃烧', effect:{kind:'damage',mode:'single',hit:60,shots:1,burn:{turns:2,damage:8}} },
  freeze_spray: { name:'冷冻喷雾', source:'时钟柳叶刀', type:'attack', label:'攻击卡', rarity:'稀有', cost:3, art:'ATK', desc:'施加 1 点冰冻', effect:{kind:'freeze',turns:1,mode:'single'} },
  flamethrower: { name:'火焰喷射器', source:'地狱火', type:'attack', label:'攻击卡', rarity:'合成', cost:3, art:'SYN', desc:'225 点伤害，并有概率击退', effect:{kind:'damage',mode:'single',hit:225,shots:1,knockback:.35}, recipe:['lighter','energy_drink'] },
  spare_magazine: { name:'备用弹匣', source:'聚星宝珠', type:'wild', label:'万能卡', rarity:'进阶', cost:'wild', art:'WILD', desc:'抽取 1 张牌，随后销毁', effect:{kind:'draw',value:1}, destroy:true },
  first_aid: { name:'急救包', source:'小红心', type:'wild', label:'万能卡', rarity:'进阶', cost:'wild', art:'WILD', desc:'恢复 1 点生命，随后销毁', effect:{kind:'heal',value:1}, destroy:true },
  flashbang: { name:'闪光弹', source:'时祷怀表', type:'wild', label:'万能卡', rarity:'稀有', cost:'wild', art:'WILD', desc:'对前排施加 1 点冰冻，随后销毁', effect:{kind:'freeze',turns:1,mode:'front'}, destroy:true },
  evolution_workbench: { name:'工作台', source:'进化', type:'function', label:'功能', cost:null, art:'EVO', desc:'满足条件后使卡牌进化', effect:{kind:'passive',key:'workbench',value:1}, passiveOnly:true },
  fast_reload: { name:'快速装填', source:'抽牌', type:'gem', label:'宝石', cost:null, art:'GEM', desc:'打出镶嵌卡时额外抽取 1 张牌', gem:'draw', passiveOnly:true },
  reinforced_bullet: { name:'强化弹头', source:'双倍伤害', type:'gem', label:'宝石', cost:null, art:'GEM', desc:'镶嵌卡造成双倍伤害', gem:'double', attackOnly:true, passiveOnly:true },
  multi_attachment: { name:'多重配件', source:'发射数量', type:'gem', label:'宝石', cost:null, art:'GEM', desc:'镶嵌卡额外增加 1 个攻击目标或发射数量', gem:'multi', attackOnly:true, passiveOnly:true },
  continuous_action: { name:'连续行动', source:'煎饼叠高高', type:'artifact', label:'神器', cost:null, art:'ART', desc:'按法力费用递增出牌形成连击收益', effect:{kind:'passive',key:'comboEngine',value:1}, passiveOnly:true },
  artifact_workbench: { name:'工作台', source:'宝石锤子', type:'artifact', label:'神器', cost:null, art:'ART', desc:'开启卡牌镶嵌宝石功能', effect:{kind:'passive',key:'gemSocket',value:1}, passiveOnly:true },
  canned_food: { name:'罐头', source:'烤鸡腿', type:'item', label:'道具', cost:null, art:'ITEM', desc:'恢复 10 点生命', effect:{kind:'heal',value:10}, passiveOnly:true },
  energy_battery: { name:'能量电池', source:'法力宝珠', type:'function', label:'功能', cost:null, art:'SYS', desc:'本局最大法力 +1', effect:{kind:'maxMana',value:1}, passiveOnly:true },
  tactical_pack: { name:'战术背包', source:'护腕', type:'function', label:'功能', cost:null, art:'SYS', desc:'本局手牌容量 +1', effect:{kind:'maxHand',value:1}, passiveOnly:true },
  endless_fight: { name:'连续作战', source:'连击不绝', type:'arcana', label:'秘能', cost:null, art:'ARC', desc:'回合结束时连击不清零', effect:{kind:'passive',key:'comboPersist',value:1}, passiveOnly:true },
  lasting_defense: { name:'持久防御', source:'甲不离身', type:'arcana', label:'秘能', cost:null, art:'ARC', desc:'剩余防御保留至后续回合', effect:{kind:'passive',key:'defensePersist',value:1}, passiveOnly:true },
  counter_armor: { name:'反击装甲', source:'护盾猛击', type:'arcana', label:'秘能', cost:null, art:'ARC', desc:'敌人行动前，利用当前防御值攻击前排', effect:{kind:'passive',key:'counter',value:1}, passiveOnly:true }
};

const CATALOG_GROUPS = [
  {type:'attack',title:'攻击卡'},
  {type:'defense',title:'防御卡'},
  {type:'boost',title:'强化卡'},
  {type:'resource',title:'资源卡'},
  {type:'wild',title:'万能卡'},
  {type:'function',title:'功能'},
  {type:'gem',title:'宝石'},
  {type:'artifact',title:'神器'},
  {type:'item',title:'道具'},
  {type:'arcana',title:'秘能'}
];

const GAME_CONFIG = {
  initial:{hp:20,mana:2,handSize:3,deck:['wood_stick','spare_battery','wood_board','lighter','radio'],rerolls:3},
  defaultArtifacts:['continuous_action','artifact_workbench'],
  combo:{sequence:[0,1,2,3],multipliers:[1,1.1,1.25,1.5]},
  xp:{thresholdBase:18,thresholdGrowth:10,kill:{basic:6,stalker:8,elite:12,boss:30}},
  itemRewardChance:.65,
  knockbackDelay:2,
  upgradePools:[
    ['wood_stick','spare_battery','wood_board','flashlight','lighter','radio','iron_plate'],
    ['energy_drink','toolkit','fire_axe','riot_shield','spare_magazine','first_aid'],
    ['molotov','freeze_spray','flashbang']
  ],
  waveRewardPool:['canned_food','energy_battery','tactical_pack','evolution_workbench','fast_reload','reinforced_bullet','multi_attachment'],
  arcanaPool:['endless_fight','lasting_defense','counter_armor'],
  gemIds:['fast_reload','reinforced_bullet','multi_attachment'],
  maxGemsPerCard:3,
  recipes:[
    {result:'spiked_bat',parts:['wood_stick','toolkit'],text:'木棍 + 工具包 + 工作台'},
    {result:'flamethrower',parts:['lighter','energy_drink'],text:'打火机 + 能量饮料 + 工作台'}
  ]
};

const STAGES = [
  {title:'第 1 关 · 黄色走廊',subtitle:'基础费用曲线：0 费与 1 费',difficulty:0,waves:[
    {rows:[[['basic',2]],[['stalker',1]]]},{rows:[[['basic',3]],[['stalker',1]]]}
  ]},
  {title:'第 2 关 · 潮湿机房',subtitle:'补足 2 费牌并测试进化',difficulty:1,waves:[
    {rows:[[['stalker',2]],[['elite',1]]]},{rows:[[['basic',3]],[['elite',1]]]},{rows:[[['stalker',3]],[['elite',1]]]}
  ]},
  {title:'第 3 关 · 红色出口',subtitle:'完整费用链、状态与 Boss',difficulty:2,waves:[
    {rows:[[['elite',2]],[['stalker',2]]]},{rows:[[['elite',3]]]},{rows:[[['elite',2]],[['boss',1]]]}
  ]}
];

const ENEMY_TYPES = {
  basic:{name:'回声体',hp:34,atk:4,color:'basic',intent:'近身撕咬'},
  stalker:{name:'追迹者',hp:48,atk:6,color:'basic',intent:'快速突进'},
  elite:{name:'高个实体',hp:86,atk:10,color:'elite',intent:'重击'},
  boss:{name:'出口守门人',hp:430,atk:17,color:'boss',intent:'区域压制',boss:true}
};

const state = {
  phase:'home',stage:0,wave:0,turn:1,hp:20,maxHp:20,mana:2,maxMana:2,maxHand:3,defense:0,comboStep:0,comboMultiplier:1,
  exp:0,totalExp:0,level:1,xpThreshold:18,deck:[],hand:[],discard:[],destroyed:[],enemies:[],gems:[],passives:{},log:[],eventQueue:[],
  seed:1,rng:null,nextUid:1,busy:false,actionSeq:0,preview:null,rerollsLeft:0,upgradeOptions:[],kills:0,wavesReached:0,
  damage:0,taken:0,totalDamage:0,totalTaken:0,splashDamage:0,totalSplashDamage:0,overkill:0,totalOverkill:0,lastStageDamage:0,
  debug:{damageUp:0,extraShots:0,splash:0,splashDivisor:5}
};

const $ = (id) => document.getElementById(id);
function mulberry32(seed){return function(){let t=seed+=0x6D2B79F5;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(state.rng()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
function pushLog(text,kind=''){state.log.unshift({text,kind});state.log=state.log.slice(0,100);renderLog();}
function toast(text){const el=$('toast');el.textContent=text;el.classList.remove('hidden');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.add('hidden'),1800);}
function percentage(value){return `${Math.round(value*100)}%`;}
function cardPlayCost(card){return card.cost==='wild'||card.cost==null?0:card.cost;}
function displayCost(card){return card.cost==='wild'?'万能':card.cost==null?'—':card.cost;}
function passive(key){return state.passives[key]||0;}
function makeCard(id,gems=[]){return{uid:state.nextUid++,id,gems:[...gems]};}
function allOwnedCards(){return[...state.deck,...state.hand,...state.discard];}
function hasCard(id){return allOwnedCards().some((instance)=>instance.id===id);}
function aliveEnemies(){return state.enemies.filter((enemy)=>enemy.hp>0);}
function frontRowIndex(){const rows=aliveEnemies().map((enemy)=>enemy.row);return rows.length?Math.min(...rows):-1;}
function activeEnemies(){const row=frontRowIndex();return row<0?[]:aliveEnemies().filter((enemy)=>enemy.row===row);}
function stableRoll(...parts){const text=parts.join('|');let hash=2166136261;for(let i=0;i<text.length;i++){hash^=text.charCodeAt(i);hash=Math.imul(hash,16777619);}return(hash>>>0)/4294967296;}
function randomRunSeed(){let seed=state.seed;while(seed===state.seed){if(globalThis.crypto?.getRandomValues){const value=new Uint32Array(1);globalThis.crypto.getRandomValues(value);seed=value[0]%999999+1;}else seed=Math.floor(Math.random()*999999)+1;}return seed;}
function restartRun(){const seed=randomRunSeed();$('seed-input').value=String(seed);beginRun(seed);}

function beginRun(seed=1){
  state.phase='arcana';state.stage=0;state.wave=0;state.turn=1;state.maxHp=Number($('hp-slider').value)||GAME_CONFIG.initial.hp;state.hp=state.maxHp;
  state.maxMana=Number($('mana-slider').value)||GAME_CONFIG.initial.mana;state.mana=state.maxMana;state.maxHand=GAME_CONFIG.initial.handSize;
  state.defense=0;state.comboStep=0;state.comboMultiplier=1;state.exp=0;state.totalExp=0;state.level=1;state.xpThreshold=GAME_CONFIG.xp.thresholdBase;
  state.seed=Math.max(1,Number(seed)||1);state.rng=mulberry32(state.seed);state.nextUid=1;state.busy=false;state.actionSeq=0;state.preview=null;
  state.kills=0;state.wavesReached=0;state.damage=0;state.taken=0;state.totalDamage=0;state.totalTaken=0;state.splashDamage=0;state.totalSplashDamage=0;state.overkill=0;state.totalOverkill=0;state.lastStageDamage=0;state.log=[];state.eventQueue=[];
  state.passives={};GAME_CONFIG.defaultArtifacts.forEach((id)=>{const effect=CARD_DATA[id].effect;state.passives[effect.key]=effect.value;});
  state.gems=[];state.deck=shuffle(GAME_CONFIG.initial.deck.map((id)=>makeCard(id)));state.hand=[];state.discard=[];state.destroyed=[];state.enemies=[];
  pushLog(`新的测试运行已开始：5 张初始牌、${state.maxMana} 点法力、${state.maxHand} 张手牌`,'good');
  showArcanaChoice();renderAll();
}
function returnToSelection(){$('reward-modal').classList.add('hidden');$('synth-modal').classList.add('hidden');beginRun(Number($('seed-input').value)||state.seed||1);}
function showArcanaChoice(){state.phase='arcana';state.busy=true;openChoiceModal('秘能三选一','选择本局核心能力；选定后直到本局结束不能更换。',GAME_CONFIG.arcanaPool,chooseArcana,{showReroll:false});}
function chooseArcana(id){if(state.phase!=='arcana')return;const card=CARD_DATA[id];applyPassive(card.effect.key,card.effect.value);pushLog(`本局秘能锁定：${card.source}`,'good');closeChoiceModal();state.busy=false;enterStage(0);}
function enterStage(index){state.stage=index;state.wave=0;state.turn=1;state.mana=state.maxMana;state.preview=null;state.damage=0;state.taken=0;state.splashDamage=0;state.overkill=0;state.deck.push(...state.discard,...state.hand);state.discard=[];state.hand=[];shuffle(state.deck);drawToLimit();pushLog(`进入${STAGES[index].title}`,'good');startEncounter();}
function startEncounter(){state.phase='player';state.busy=false;state.turn=1;state.mana=state.maxMana;state.preview=null;state.wavesReached+=1;spawnWave();drawToLimit();pushLog(`进入第 ${state.stage+1} 关 · 第 ${state.wave+1} 波战斗`,'good');renderAll();}
function spawnWave(){const wave=STAGES[state.stage].waves[state.wave];state.enemies=[];wave.rows.forEach((groups,row)=>groups.forEach(([type,count])=>{for(let i=0;i<count;i++){const base=ENEMY_TYPES[type];const hp=Math.round(base.hp*Number($('enemy-hp-slider').value));state.enemies.push({id:`${type}-${row}-${i}-${state.stage}-${state.wave}`,type,row,name:base.name,hp,maxHp:hp,atk:Math.round(base.atk*Number($('enemy-atk-slider').value)),intent:base.intent,color:base.color,boss:!!base.boss,burn:0,freeze:0,knockback:0,counted:false});}}));pushLog(`敌人以 ${wave.rows.length} 排阵型出现；仅前排能够行动`);}
function drawOne(){if(!state.deck.length){if(!state.discard.length)return false;state.deck=shuffle(state.discard.splice(0));pushLog('抽牌堆为空：弃牌堆已洗回抽牌堆','good');}state.hand.push(state.deck.pop());return true;}
function drawCards(count){let drawn=0;while(drawn<count&&state.hand.length<state.maxHand&&drawOne())drawn+=1;return drawn;}
function drawToLimit(){return drawCards(Math.max(0,state.maxHand-state.hand.length));}

function updateCombo(card){
  if(card.cost==='wild')return state.comboMultiplier;const cost=cardPlayCost(card);const sequence=GAME_CONFIG.combo.sequence;const expected=sequence[state.comboStep];
  if(cost===expected)state.comboStep+=1;else state.comboStep=cost===sequence[0]?1:0;
  const index=Math.max(0,Math.min(state.comboStep,GAME_CONFIG.combo.multipliers.length)-1);state.comboMultiplier=passive('comboEngine')&&state.comboStep?GAME_CONFIG.combo.multipliers[index]:1;
  pushLog(state.comboStep?`费用连击 ${sequence.slice(0,state.comboStep).join('→')}，倍率 ×${state.comboMultiplier.toFixed(2)}`:`费用 ${cost} 未接上递增顺序，连击中断`);return state.comboMultiplier;
}
function attackModifiers(instance=null){const gems=instance?.gems||[];return{damageUp:passive('damageUp')+state.debug.damageUp,extraShots:state.debug.extraShots+(gems.includes('multi_attachment')?1:0),splash:passive('splash')+state.debug.splash,splashDivisor:Math.max(1,state.debug.splashDivisor),cardMultiplier:gems.includes('reinforced_bullet')?2:1};}
function calculateAttack(effect,source,handIndex=0,instance=null){
  const enemies=activeEnemies();const modifiers=attackModifiers(instance);const multiplier=(1+modifiers.damageUp)*modifiers.cardMultiplier*state.comboMultiplier;
  const perHit=Math.max(0,Math.round(effect.hit*multiplier));const shots=Math.max(1,effect.shots+modifiers.extraShots);const panelDamage=perHit*shots;const splashEach=modifiers.splash>0?Math.ceil(panelDamage*modifiers.splash/modifiers.splashDivisor):0;
  const direct=new Map();const statuses=new Map();let crits=0;const addHit=(enemy,shot)=>{const roll=stableRoll(state.seed,state.stage,state.wave,state.turn,state.actionSeq,handIndex,source,enemy.id,shot,'crit');const crit=!!effect.crit&&roll<effect.crit;const amount=crit?Math.round(perHit*(effect.critMultiplier??1)):perHit;const current=direct.get(enemy.id)||{amount:0,hits:0,crits:0};current.amount+=amount;current.hits+=1;current.crits+=crit?1:0;direct.set(enemy.id,current);crits+=crit?1:0;};
  if(enemies.length){if(effect.mode==='all')for(let shot=0;shot<shots;shot++)enemies.forEach((enemy)=>addHit(enemy,shot));else for(let shot=0;shot<shots;shot++)addHit(enemies[shot%enemies.length],shot);}
  if(effect.knockback)direct.forEach((_,enemyId)=>{const roll=stableRoll(state.seed,state.stage,state.wave,state.turn,state.actionSeq,handIndex,source,enemyId,'knockback');if(roll<effect.knockback)statuses.set(enemyId,'击退：下回合停止');});
  const splash=new Map();if(splashEach>0)enemies.forEach((enemy)=>{const remaining=enemy.hp-(direct.get(enemy.id)?.amount||0);if(remaining>0)splash.set(enemy.id,splashEach);});return{direct,splash,statuses,perHit,shots,panelDamage,splashEach,crits,modifiers};
}
function grantKill(enemy){if(enemy.counted)return;enemy.counted=true;const value=GAME_CONFIG.xp.kill[enemy.type]||0;state.kills+=1;state.exp+=value;state.totalExp+=value;pushLog(`击败 ${enemy.name}：经验 +${value}`,'good');}
function damageEnemy(enemy,value,source='卡牌',channel='direct'){if(!enemy||enemy.hp<=0)return 0;const intended=Math.max(0,Math.round(value));const actual=Math.min(enemy.hp,intended);const overkill=intended-actual;enemy.hp-=actual;state.damage+=actual;state.totalDamage+=actual;state.overkill+=overkill;state.totalOverkill+=overkill;if(channel==='splash'){state.splashDamage+=actual;state.totalSplashDamage+=actual;}pushLog(`${source}对${enemy.name}造成 ${actual} 点${channel==='splash'?'溅射':'直接'}伤害${overkill?`（过量 ${overkill}）`:''}`);if(enemy.hp<=0)grantKill(enemy);return actual;}
function playCard(index){
  if(state.phase!=='player'||state.busy||state.hp<=0||!state.hand[index])return;const instance=state.hand[index];const card=CARD_DATA[instance.id];const cost=cardPlayCost(card);if(cost>state.mana){toast('法力不足');return;}
  state.preview=null;state.mana-=cost;state.hand.splice(index,1);updateCombo(card);pushLog(`打出 ${card.name}，消耗 ${cost} 法力`);resolveEffect(card.effect,card.name,index,instance);state.actionSeq+=1;
  if(instance.gems.includes('fast_reload')){const drawn=drawCards(1);pushLog(`${card.name}的快速装填触发，抽取 ${drawn} 张牌`);}if(card.destroy){state.destroyed.push(instance);pushLog(`${card.name}使用后销毁`);}else state.discard.push(instance);checkWave();renderAll();
}
function resolveEffect(effect,source,handIndex=0,instance=null){
  if(!effect)return;if(effect.kind==='damage'){const result=calculateAttack(effect,source,handIndex,instance);result.direct.forEach((entry,enemyId)=>{const enemy=state.enemies.find((item)=>item.id===enemyId);damageEnemy(enemy,entry.amount,source,'direct');if(enemy&&enemy.hp>0&&effect.burn){enemy.burn=effect.burn.turns;enemy.burnDamage=effect.burn.damage;pushLog(`${enemy.name}获得燃烧 ${effect.burn.turns} 回合`);}if(enemy&&result.statuses.has(enemyId)){enemy.knockback=GAME_CONFIG.knockbackDelay;pushLog(`${enemy.name}被击退，将在下一回合停止行动`);}});result.splash.forEach((amount,enemyId)=>damageEnemy(state.enemies.find((item)=>item.id===enemyId),amount,source,'splash'));if(result.crits&&effect.healOnCrit)heal(result.crits*effect.healOnCrit);pushLog(`${source}结算：${effect.mode==='all'?'前排全体':effect.mode==='projectile'?'多弹道':'单体'} ${result.shots} 发 × ${result.perHit}；溅射 ${result.splashEach}/前排存活敌人`);}
  else if(effect.kind==='defense')state.defense+=effect.value;else if(effect.kind==='mana')state.mana+=effect.value;else if(effect.kind==='draw')drawCards(effect.value);else if(effect.kind==='heal')heal(effect.value);else if(effect.kind==='maxHp'){state.maxHp+=effect.value;state.hp+=effect.value;}else if(effect.kind==='freeze'){const targets=effect.mode==='front'?activeEnemies():activeEnemies().slice(0,1);targets.forEach((enemy)=>enemy.freeze=Math.max(enemy.freeze,effect.turns));pushLog(`${source}使前排 ${targets.length} 个敌人获得冰冻`);}else if(effect.kind==='passive')applyPassive(effect.key,effect.value);
}
function applyPassive(key,value){const stackable=['damageUp','splash'];state.passives[key]=stackable.includes(key)?passive(key)+value:Math.max(passive(key),value);pushLog(`属性生效：${passiveName(key)}${stackable.includes(key)?`累计为 ${formatPassive(key,passive(key))}`:''}`,'good');}
function passiveName(key){return({workbench:'工作台（进化）',gemSocket:'工作台（宝石锤子）',comboEngine:'连续行动',damageUp:'普通伤害',splash:'溅射伤害',comboPersist:'连击不绝',defensePersist:'甲不离身',counter:'护盾猛击'}[key]||key);}
function formatPassive(key,value){return['damageUp','splash'].includes(key)?percentage(value):String(value);}
function heal(value){const before=state.hp;state.hp=Math.min(state.maxHp,state.hp+value);pushLog(`恢复 ${state.hp-before} 点生命`);}
function endTurn(){
  if(state.phase!=='player'||state.busy||state.hp<=0)return;state.busy=true;state.preview=null;state.phase='enemy';renderAll();
  if(passive('counter')&&state.defense>0){const target=activeEnemies()[0];if(target){pushLog(`护盾猛击发动：使用 ${state.defense} 点防御攻击前排`);damageEnemy(target,state.defense,'护盾猛击');}}
  activeEnemies().forEach((enemy)=>{let skip=false;if(enemy.freeze>0){enemy.freeze-=1;skip=true;pushLog(`${enemy.name}被冻结，跳过行动`);}else if(enemy.knockback===1){enemy.knockback=0;skip=true;pushLog(`${enemy.name}受击退影响，跳过行动`);}else if(enemy.knockback>1)enemy.knockback-=1;if(!skip){let incoming=enemy.atk;const blocked=Math.min(state.defense,incoming);state.defense-=blocked;incoming-=blocked;if(incoming){state.hp=Math.max(0,state.hp-incoming);state.taken+=incoming;state.totalTaken+=incoming;pushLog(`${enemy.name}造成 ${incoming} 点伤害${blocked?`（防御抵挡 ${blocked}）`:''}`);}else if(blocked)pushLog(`${enemy.name}的攻击被完全抵挡`);}if(enemy.burn>0){damageEnemy(enemy,enemy.burnDamage||8,'燃烧');enemy.burn-=1;}});
  if(!passive('defensePersist'))state.defense=0;if(!passive('comboPersist')){state.comboStep=0;state.comboMultiplier=1;}state.turn+=1;state.mana=state.maxMana;drawToLimit();state.busy=false;
  if(state.hp<=0){state.phase='settlement';pushLog('生命归零，本局失败','bad');renderAll();showSettlement('defeat');return;}state.phase='player';checkWave();renderAll();
}
function checkWave(){if(aliveEnemies().length)return;if(state.phase!=='player'&&state.phase!=='enemy')return;state.phase='transition';state.busy=true;state.lastStageDamage=state.damage;pushLog(`第 ${state.stage+1} 关 · 第 ${state.wave+1} 波清理完成`,'good');queuePostWaveEvents();processNextEvent();}
function queuePostWaveEvents(){state.eventQueue=[];while(state.exp>=state.xpThreshold){state.exp-=state.xpThreshold;state.level+=1;state.xpThreshold=GAME_CONFIG.xp.thresholdBase+(state.level-1)*GAME_CONFIG.xp.thresholdGrowth;state.eventQueue.push({type:'upgrade'});}const hasBoss=STAGES[state.stage].waves[state.wave].rows.flat().some(([type])=>type==='boss');if(!hasBoss&&state.rng()<GAME_CONFIG.itemRewardChance)state.eventQueue.push({type:'item',id:GAME_CONFIG.waveRewardPool[Math.floor(state.rng()*GAME_CONFIG.waveRewardPool.length)]});else if(!hasBoss)pushLog('本波未发现道具或功能奖励');}
function processNextEvent(){const event=state.eventQueue.shift();if(event?.type==='upgrade'){showUpgrade();return;}if(event?.type==='item'){showItemReward(event.id);return;}const lastWave=state.wave>=STAGES[state.stage].waves.length-1;if(lastWave){showSettlement(state.stage>=STAGES.length-1?'victory':'stage');return;}state.wave+=1;state.busy=false;startEncounter();toast('下一波战斗开始');}
function upgradePool(){return GAME_CONFIG.upgradePools.slice(0,STAGES[state.stage].difficulty+1).flat();}
function sampleUnique(pool,count){const copy=[...new Set(pool)];const result=[];while(copy.length&&result.length<count)result.push(copy.splice(Math.floor(state.rng()*copy.length),1)[0]);return result;}
function rollUpgradeOptions(){state.upgradeOptions=sampleUnique(upgradePool(),3);}
function showUpgrade(){state.phase='upgrade';state.busy=true;state.rerollsLeft=GAME_CONFIG.initial.rerolls;rollUpgradeOptions();renderUpgradeModal();}
function renderUpgradeModal(){openChoiceModal(`升级 · LV.${state.level}`,'从当前难度卡池选择 1 张加入弃牌堆；候选可包含已有卡。',state.upgradeOptions,chooseUpgradeCard,{showReroll:true});$('reroll-btn').textContent=`重选（${state.rerollsLeft}）`;$('reroll-btn').disabled=state.rerollsLeft<=0;}
function rerollUpgrade(){if(state.phase!=='upgrade'||state.rerollsLeft<=0)return;state.rerollsLeft-=1;rollUpgradeOptions();renderUpgradeModal();pushLog(`升级候选已重选，剩余 ${state.rerollsLeft} 次`);}
function chooseUpgradeCard(id){if(state.phase!=='upgrade')return;state.discard.push(makeCard(id));pushLog(`升级获得卡牌：${CARD_DATA[id].name}，已加入弃牌堆`,'good');closeChoiceModal();processNextEvent();}
function showItemReward(id){state.phase='item';state.busy=true;openChoiceModal('发现奖励','清理本波后发现 1 项道具、功能或宝石。',[id],()=>claimItemReward(id),{claimLabel:'获得'});}
function claimItemReward(id){if(state.phase!=='item')return;const item=CARD_DATA[id];if(GAME_CONFIG.gemIds.includes(id)){state.gems.push(id);pushLog(`获得宝石：${item.name}，可在卡牌组合中镶嵌`,'good');}else if(item.effect?.kind==='maxMana'){state.maxMana+=item.effect.value;state.mana+=item.effect.value;pushLog(`获得${item.name}：本局最大法力 +${item.effect.value}`,'good');}else if(item.effect?.kind==='maxHand'){state.maxHand+=item.effect.value;drawToLimit();pushLog(`获得${item.name}：本局手牌容量 +${item.effect.value}`,'good');}else if(item.effect?.kind==='heal'){heal(item.effect.value);pushLog(`使用道具：${item.name}`,'good');}else if(item.effect?.kind==='passive')applyPassive(item.effect.key,item.effect.value);closeChoiceModal();processNextEvent();}

function showSettlement(mode){
  state.phase='settlement';state.busy=true;const isDefeat=mode==='defeat';const isFinal=mode==='victory';$('modal-title').textContent=isDefeat?'本局失败':isFinal?'三关测试胜利':`${STAGES[state.stage].title}完成`;$('modal-subtitle').textContent=isDefeat?'生命归零，本局结束。重新开始会回到第一关。':isFinal?'Demo仅展示结算数值，不发放局外奖励。':'本关胜利，可继续下一关。';$('reroll-btn').classList.add('hidden');$('modal-close').classList.add('hidden');
  const grid=$('reward-grid');grid.innerHTML='';const summary=document.createElement('div');summary.className='settlement-summary';summary.innerHTML=`<div><span>到达波次</span><strong>${state.wavesReached}</strong></div><div><span>击败敌人</span><strong>${state.kills}</strong></div><div><span>累计经验</span><strong>${state.totalExp}</strong></div><div><span>总伤害</span><strong>${state.totalDamage}</strong></div><div><span>受到伤害</span><strong>${state.totalTaken}</strong></div><div><span>最终生命</span><strong>${state.hp}/${state.maxHp}</strong></div>`;grid.append(summary);
  const actions=document.createElement('div');actions.className='settlement-actions';if(!isDefeat&&!isFinal)actions.append(makeActionButton('继续下一关',()=>{closeChoiceModal();state.stage+=1;state.busy=false;enterStage(state.stage);},true));else actions.append(makeActionButton('重新开始',()=>{closeChoiceModal();restartRun();},true));actions.append(makeActionButton('返回秘能选择',()=>{closeChoiceModal();returnToSelection();}));grid.append(actions);$('reward-modal').classList.remove('hidden');$('run-status').textContent=`RUN ${String(state.seed).padStart(3,'0')} · ${isDefeat?'失败':isFinal?'通关':'关卡完成'}`;
}
function makeActionButton(text,handler,primary=false){const button=document.createElement('button');button.className=`button${primary?' primary':''}`;button.textContent=text;button.onclick=handler;return button;}
function openChoiceModal(title,subtitle,ids,onChoose,options={}){
  $('modal-title').textContent=title;$('modal-subtitle').textContent=subtitle;$('modal-close').classList.add('hidden');$('reroll-btn').classList.toggle('hidden',!options.showReroll);const grid=$('reward-grid');grid.innerHTML='';
  ids.forEach((id)=>{const card=CARD_DATA[id];const button=document.createElement('button');button.className=`reward ${card.type}`;button.innerHTML=`<div class="card-art ${card.type}"><span>${card.art}</span><span class="cost">${displayCost(card)}</span></div><strong>${card.name}</strong><small>${card.label}${card.rarity?` · ${card.rarity}`:''} · 原型：${card.source}</small><p>${card.desc}</p>${options.claimLabel?`<b>${options.claimLabel}</b>`:''}`;button.onclick=()=>onChoose(id);grid.append(button);});$('reward-modal').classList.remove('hidden');
}
function closeChoiceModal(){$('reward-modal').classList.add('hidden');}
function catalogEntries(type){return Object.entries(CARD_DATA).filter(([,card])=>card.type===type);}
function catalogAcquisition(id){
  const inInitial=GAME_CONFIG.initial.deck.includes(id);const inUpgrade=GAME_CONFIG.upgradePools.flat().includes(id);
  if(GAME_CONFIG.recipes.some((recipe)=>recipe.result===id))return'合成进化';
  if(inInitial&&inUpgrade)return'初始牌 / 升级卡池';if(inUpgrade)return'升级卡池';
  if(GAME_CONFIG.waveRewardPool.includes(id))return'清怪奖励';if(GAME_CONFIG.defaultArtifacts.includes(id))return'默认功能';
  if(GAME_CONFIG.arcanaPool.includes(id))return'开局三选一';return'未配置获得方式';
}
function showSynthesis(){
  const box=$('synth-result');box.innerHTML='';CATALOG_GROUPS.forEach(({type,title})=>{const entries=catalogEntries(type);const section=document.createElement('section');section.className='catalog-group';section.innerHTML=`<div class="catalog-group-head"><strong>${title}</strong><span>${entries.length} 项</span></div>`;const rows=document.createElement('div');rows.className='catalog-rows';entries.forEach(([id,card])=>{const row=document.createElement('div');row.className='catalog-row';row.innerHTML=`<div><strong>${card.name}</strong><small>${displayCost(card)} 费 · 原型：${card.source}${card.rarity?` · ${card.rarity}`:''}</small></div><p>${card.desc}</p><span>${catalogAcquisition(id)}</span>`;rows.append(row);});section.append(rows);box.append(section);});
  const recipeTitle=document.createElement('h3');recipeTitle.className='synth-section-title';recipeTitle.textContent='进化配方';box.append(recipeTitle);GAME_CONFIG.recipes.forEach(({result,parts,text})=>{const ready=passive('workbench')&&parts.every((id)=>hasCard(id));const item=document.createElement('div');item.className='recipe';item.innerHTML=`<strong>${CARD_DATA[result].name} · ${ready?'可进化':'未满足条件'}</strong><small>${text}<br>${ready?'将移除各 1 张素材并生成合成卡。':'需要工作台与当前未销毁的对应素材。'}</small>`;if(ready)item.append(makeActionButton('执行进化',()=>synthesize(result,parts),true));box.append(item);});
  const gemBox=document.createElement('div');gemBox.className='recipe';gemBox.innerHTML=`<strong>宝石镶嵌 · 库存 ${state.gems.length}</strong><small>${passive('gemSocket')?'宝石只改变被镶嵌的单卡；每张卡最多 3 枚。':'需要宝石锤子工作台。'}</small>`;box.append(gemBox);if(passive('gemSocket')&&state.gems.length)state.gems.forEach((gemId,gemIndex)=>renderGemSocketRow(gemBox,gemId,gemIndex));$('synth-modal').classList.remove('hidden');
}
function renderGemSocketRow(container,gemId,gemIndex){const gem=CARD_DATA[gemId];const eligible=allOwnedCards().filter((instance)=>{const card=CARD_DATA[instance.id];return instance.gems.length<GAME_CONFIG.maxGemsPerCard&&!instance.gems.includes(gemId)&&(!gem.attackOnly||card.effect?.kind==='damage');});const row=document.createElement('div');row.className='gem-row';const label=document.createElement('span');label.textContent=gem.name;const select=document.createElement('select');eligible.forEach((instance)=>{const option=document.createElement('option');option.value=instance.uid;option.textContent=`${CARD_DATA[instance.id].name} #${instance.uid}`;select.append(option);});const button=makeActionButton('镶嵌',()=>socketGem(gemIndex,Number(select.value)));button.disabled=!eligible.length;row.append(label,select,button);container.append(row);}
function socketGem(gemIndex,uid){const instance=allOwnedCards().find((card)=>card.uid===uid);const gemId=state.gems[gemIndex];if(!instance||!gemId||instance.gems.includes(gemId)||instance.gems.length>=GAME_CONFIG.maxGemsPerCard)return;instance.gems.push(gemId);state.gems.splice(gemIndex,1);pushLog(`${CARD_DATA[gemId].name}已镶嵌到${CARD_DATA[instance.id].name} #${instance.uid}`,'good');showSynthesis();renderAll();}
function synthesize(result,parts){if(!passive('workbench')||!parts.every((id)=>hasCard(id)))return;parts.forEach(removeOwned);state.discard.push(makeCard(result));pushLog(`进化成功：${CARD_DATA[result].name}，已加入弃牌堆`,'good');toast(`已获得 ${CARD_DATA[result].name}`);showSynthesis();renderAll();}
function removeOwned(id){for(const pool of[state.hand,state.deck,state.discard]){const index=pool.findIndex((instance)=>instance.id===id);if(index>=0){pool.splice(index,1);return true;}}return false;}
function skipWave(){if(state.phase!=='player'||state.busy)return;state.preview=null;while(aliveEnemies().length)activeEnemies().forEach((enemy)=>damageEnemy(enemy,enemy.hp,'调试跳过'));checkWave();renderAll();}
function attackLabel(effect){if(!effect||effect.kind!=='damage')return'';return`${effect.mode==='all'?'前排全体':effect.mode==='projectile'?'多弹道':'单体'} · ${effect.shots} 发 × ${effect.hit}`;}
function showAttackPreview(instance,index,locked=false){const card=CARD_DATA[instance.id];if(card.effect.kind!=='damage'||state.phase!=='player'||state.busy||(state.preview?.locked&&!locked))return;const preview=calculateAttack(card.effect,card.name,index,instance);preview.key=`${state.actionSeq}-${instance.uid}`;preview.locked=locked;state.preview=preview;renderEnemies();renderPlayer();}
function toggleAttackPreview(instance,index){const key=`${state.actionSeq}-${instance.uid}`;if(state.preview?.locked&&state.preview.key===key)clearAttackPreview(true);else showAttackPreview(instance,index,true);}
function clearAttackPreview(force=false){if(!state.preview||(state.preview.locked&&!force))return;state.preview=null;renderEnemies();renderPlayer();}

function renderAll(){if(state.phase==='home')return;renderHeader();renderEnemies();renderPlayer();renderHand();renderSide();renderMechanics();renderLog();}
function renderHeader(){const stage=STAGES[state.stage];$('stage-title').textContent=stage.title;$('stage-subtitle').textContent=stage.subtitle;$('wave-badge').textContent=`WAVE ${state.wave+1} / ${stage.waves.length}`;[...$('stage-progress').children].forEach((el,index)=>el.className=index<state.stage?'done':index===state.stage?'active':'');$('top-hp-value').textContent=`${state.hp} / ${state.maxHp}`;$('top-xp-value').textContent=`${state.exp} / ${state.xpThreshold}`;$('top-xp-fill').style.width=`${Math.min(100,state.exp/state.xpThreshold*100)}%`;$('objective-text').textContent=state.phase==='player'?'击败当前前排敌人':state.phase==='enemy'?'敌人行动中':state.phase==='upgrade'?'选择升级卡牌':state.phase==='item'?'领取发现的奖励':'处理战斗结果';if(state.phase!=='settlement')$('run-status').textContent=`RUN ${String(state.seed).padStart(3,'0')} · ${state.phase==='player'?'玩家回合':state.phase==='enemy'?'敌人回合':'处理中'}`;}
function renderEnemies(){
  const zone=$('enemy-zone');zone.innerHTML='';const currentRow=frontRowIndex();const rows=[...new Set(aliveEnemies().map((enemy)=>enemy.row))].sort((a,b)=>a-b);
  rows.forEach((rowIndex,visibleIndex)=>{const enemies=aliveEnemies().filter((enemy)=>enemy.row===rowIndex);if(enemies.some((enemy)=>enemy.boss)&&rowIndex!==currentRow)return;const row=document.createElement('div');row.className=`enemy-row ${rowIndex===currentRow?'front':'back'}`;const label=document.createElement('div');label.className='row-label';label.textContent=rowIndex===currentRow?'前排 · 可攻击 / 会行动':`后排 ${visibleIndex} · 等待补位`;row.append(label);
    enemies.forEach((enemy)=>{const el=document.createElement('div');el.className=`enemy ${enemy.color} ${enemy.boss?'boss':''} ${rowIndex!==currentRow?'inactive':''}`;const hp=Math.max(0,Math.round(enemy.hp/enemy.maxHp*100));const direct=state.preview?.direct.get(enemy.id);const splash=state.preview?.splash.get(enemy.id)||0;const previewStatus=state.preview?.statuses.get(enemy.id);const preview=state.preview&&rowIndex===currentRow?`<div class="enemy-preview"><strong>预计 -${(direct?.amount||0)+splash}</strong><span>直接 ${direct?.amount||0}${direct?.hits?` / ${direct.hits} 发`:''} · 溅射 ${splash}</span>${previewStatus?`<span>${previewStatus}</span>`:''}</div>`:'';el.innerHTML=`${preview}<div class="enemy-mark">${enemy.boss?'BOSS':enemy.type==='elite'?'ELT':'ENT'}</div><div class="enemy-name">${enemy.name}</div><div class="enemy-meta">攻击 ${enemy.atk} · ${enemy.intent}</div><div class="enemy-vitals"><span>生命</span><strong>${enemy.hp} / ${enemy.maxHp}</strong></div><div class="hp-track"><div class="hp-fill" style="width:${hp}%"></div></div><div class="enemy-status">${enemy.burn?`<span class="status burn">燃烧 ${enemy.burn}</span>`:''}${enemy.freeze?`<span class="status freeze">冰冻 ${enemy.freeze}</span>`:''}${enemy.knockback?'<span class="status knockback">击退待生效</span>':''}</div>`;row.append(el);});zone.append(row);});
}
function renderPlayer(){$('hp-value').textContent=`${state.hp} / ${state.maxHp}`;$('player-hp-fill').style.width=`${Math.max(0,state.hp/state.maxHp*100)}%`;$('mana-value').textContent=`${state.mana} / ${state.maxMana}`;$('def-value').textContent=state.defense;$('combo-value').textContent=`${state.comboStep} · ×${state.comboMultiplier.toFixed(2)}`;$('xp-value').textContent=`${state.exp} / ${state.xpThreshold}`;$('level-value').textContent=`LV.${state.level}`;$('turn-value').textContent=`TURN ${state.turn}`;$('player-state').textContent=state.hp<=0?'已倒下':state.phase==='enemy'?'敌人行动中':state.phase==='player'?'准备行动':'等待选择';const sequence=GAME_CONFIG.combo.sequence;$('combo-track').innerHTML=sequence.map((cost,index)=>`<span class="${index<state.comboStep?'done':index===state.comboStep?'next':''}">${cost}</span>`).join('<i>→</i>');$('turn-tip').textContent=state.preview?'当前显示该卡对前排敌人的确定结算预览。':passive('comboPersist')?'按 0→1→2→3 出牌；连击跨回合保留。':'按 0→1→2→3 出牌；回合结束后连击清零。';$('end-turn-btn').disabled=state.phase!=='player'||state.busy||state.hp<=0;}
function renderHand(){const hand=$('hand');hand.innerHTML='';state.hand.forEach((instance,index)=>{const card=CARD_DATA[instance.id];const slot=document.createElement('div');slot.className='card-slot';const button=document.createElement('button');button.className=`card ${card.type}`;button.disabled=state.phase!=='player'||state.busy||cardPlayCost(card)>state.mana;const mechanics=attackLabel(card.effect);const gems=instance.gems.map((id)=>CARD_DATA[id].name).join(' · ');button.innerHTML=`<div class="card-art"><span>${card.art}</span><span class="cost">${displayCost(card)}</span></div><div class="card-name">${card.name}</div><div class="card-type">${card.label} · ${card.rarity} · 原型：${card.source}</div>${gems?`<div class="card-gems">${gems}</div>`:''}${mechanics?`<div class="card-mechanics">${mechanics}</div>`:''}<div class="card-desc">${card.desc}</div>`;button.onclick=()=>playCard(index);button.onmouseenter=()=>showAttackPreview(instance,index);button.onfocus=()=>showAttackPreview(instance,index);slot.append(button);if(mechanics){const previewButton=document.createElement('button');previewButton.className='preview-button';previewButton.textContent='预览';previewButton.onclick=()=>toggleAttackPreview(instance,index);slot.append(previewButton);}hand.append(slot);});$('hand-count').textContent=`${state.hand.length} / ${state.maxHand}`;$('pile-count').textContent=`抽牌 ${state.deck.length} · 弃牌 ${state.discard.length}`;}
function summarizeCards(instances){const counts=new Map();instances.forEach(({id})=>counts.set(id,(counts.get(id)||0)+1));return[...counts.entries()].map(([id,count])=>`${CARD_DATA[id].name}${count>1?` ×${count}`:''}`).join('、')||'空';}
function renderSide(){$('seed-value').textContent=String(state.seed).padStart(3,'0');$('deck-total-value').textContent=state.deck.length+state.hand.length+state.discard.length;$('hand-zone-value').textContent=state.hand.length;$('draw-pile-value').textContent=state.deck.length;$('discard-value').textContent=state.discard.length;$('destroyed-value').textContent=state.destroyed.length;$('deck-list-value').textContent=summarizeCards(state.deck);$('progress-value').textContent=`${state.wavesReached} 波 / ${state.kills} 击败 / ${state.totalExp} 经验`;$('gem-value').textContent=state.gems.length?state.gems.map((id)=>CARD_DATA[id].name).join('、'):'无';const names=Object.entries(state.passives).filter(([,value])=>value).map(([key,value])=>`${passiveName(key)}${['damageUp','splash'].includes(key)?` ${formatPassive(key,value)}`:''}`);$('unlock-value').textContent=names.join('、')||'无';$('damage-value').textContent=state.damage;$('splash-value').textContent=state.splashDamage;$('overkill-value').textContent=state.overkill;$('taken-value').textContent=state.taken;$('catalog-counts').innerHTML=CATALOG_GROUPS.map(({type,title})=>`<span><b>${title}</b>${catalogEntries(type).length}</span>`).join('');$('skip-wave-btn').disabled=state.phase!=='player'||state.busy;}
function renderMechanics(){const modifiers=attackModifiers();$('mechanic-summary').innerHTML=`<div><span>普通伤害</span><strong>+${percentage(modifiers.damageUp)}</strong></div><div><span>额外发射</span><strong>+${modifiers.extraShots}</strong></div><div><span>溅射伤害</span><strong>+${percentage(modifiers.splash)}</strong></div><div><span>连击倍率</span><strong>×${state.comboMultiplier.toFixed(2)}</strong></div>`;}
function renderLog(){const log=$('log');if(log)log.innerHTML=state.log.map((line)=>`<div class="log-line"><b>${line.kind==='bad'?'!':'·'}</b> ${line.text}</div>`).join('');}
function initSectionToggles(){
  document.querySelectorAll('.section-toggle').forEach((button)=>{const section=button.closest('.side-section');const key=`card-balance-section-${button.dataset.section}`;const setCollapsed=(collapsed)=>{section.classList.toggle('collapsed',collapsed);button.setAttribute('aria-expanded',String(!collapsed));button.title=collapsed?'展开此面板':'收起此面板';button.querySelector('.section-toggle-icon').textContent=collapsed?'+':'−';localStorage.setItem(key,collapsed?'1':'0');};setCollapsed(localStorage.getItem(key)==='1');button.onclick=()=>setCollapsed(!section.classList.contains('collapsed'));});
}
function applyDebugSettings(){$('enemy-hp-label').textContent=`${Number($('enemy-hp-slider').value).toFixed(1)}x`;$('enemy-atk-label').textContent=`${Number($('enemy-atk-slider').value).toFixed(1)}x`;$('hp-label').textContent=$('hp-slider').value;$('mana-label').textContent=$('mana-slider').value;state.debug.damageUp=Number($('damage-bonus-slider').value)/100;state.debug.extraShots=Number($('shots-slider').value);state.debug.splash=Number($('splash-slider').value)/100;state.debug.splashDivisor=Number($('splash-divisor-slider').value);state.maxHp=Number($('hp-slider').value);state.hp=state.maxHp;state.maxMana=Number($('mana-slider').value);state.mana=Math.min(state.maxMana,state.mana);if(state.phase==='player')spawnWave();renderAll();toast(state.phase==='player'?'参数已应用，生命与本波敌人已重置':'参数已应用');}

$('home-btn').onclick=returnToSelection;$('restart-btn').onclick=restartRun;$('end-turn-btn').onclick=endTurn;
$('reroll-btn').onclick=rerollUpgrade;$('skip-wave-btn').onclick=skipWave;$('synth-btn').onclick=showSynthesis;$('synth-close').onclick=()=>$('synth-modal').classList.add('hidden');$('apply-debug-btn').onclick=applyDebugSettings;
$('export-btn').onclick=()=>{const payload={exportedAt:new Date().toISOString(),config:{initial:{...GAME_CONFIG.initial,hp:Number($('hp-slider').value),mana:Number($('mana-slider').value)},combo:GAME_CONFIG.combo,xp:GAME_CONFIG.xp,itemRewardChance:GAME_CONFIG.itemRewardChance,debug:state.debug,enemyHpMultiplier:Number($('enemy-hp-slider').value),enemyAtkMultiplier:Number($('enemy-atk-slider').value)},result:{stage:state.stage+1,wave:state.wave+1,turn:state.turn,hp:state.hp,maxHp:state.maxHp,maxMana:state.maxMana,maxHand:state.maxHand,level:state.level,exp:state.exp,totalExp:state.totalExp,kills:state.kills,wavesReached:state.wavesReached,totalDamage:state.totalDamage,splashDamage:state.totalSplashDamage,overkill:state.totalOverkill,totalTaken:state.totalTaken,seed:state.seed},zones:{deck:state.deck,hand:state.hand,discard:state.discard,destroyed:state.destroyed,gems:state.gems},log:state.log.map((entry)=>entry.text)};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const anchor=document.createElement('a');anchor.href=URL.createObjectURL(blob);anchor.download=`card-balance-run-${String(state.seed).padStart(3,'0')}.json`;anchor.click();URL.revokeObjectURL(anchor.href);toast('日志已导出');};
$('enemy-hp-slider').oninput=(event)=>$('enemy-hp-label').textContent=`${Number(event.target.value).toFixed(1)}x`;$('enemy-atk-slider').oninput=(event)=>$('enemy-atk-label').textContent=`${Number(event.target.value).toFixed(1)}x`;$('hp-slider').oninput=(event)=>$('hp-label').textContent=event.target.value;$('mana-slider').oninput=(event)=>$('mana-label').textContent=event.target.value;
$('damage-bonus-slider').oninput=(event)=>$('damage-bonus-label').textContent=`+${event.target.value}%`;$('shots-slider').oninput=(event)=>$('shots-label').textContent=`+${event.target.value}`;$('splash-slider').oninput=(event)=>$('splash-label').textContent=`+${event.target.value}%`;$('splash-divisor-slider').oninput=(event)=>$('splash-divisor-label').textContent=event.target.value;
initSectionToggles();beginRun(Number($('seed-input').value)||1);
