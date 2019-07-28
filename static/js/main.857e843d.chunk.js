(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports=[{name:"Noble",size:"medium",type:"humanoid",alignment:["any alignment"],armor:{class:15,type:"breastplate"},hit_points:{average:9,roll:{dice:[8,8]},max:0,current:0},speed:30,stats:{str:11,dex:12,con:11,int:12,wis:14,cha:16},skills:[{name:"Deception",value:5},{name:"Insight",value:4},{name:"Persuasion",value:5}],senses:[{name:"Passive Perception",value:12}],languages:["any two languages"],challenge:{value:"1/8",xp:25},abilities:[],actions:[{name:"Rapier",type:"Melee Weapon Attack",modifier:3,reach:5,targets:1,hit:{average:5,roll:{dice:"1d8",modifier:1},type:"piercing"}}]},{name:"Cultist",size:"medium",type:"humanoid",alignment:["any non-good alignment"],armor:{class:12,type:"leather armor"},hit_points:{average:9,roll:{dice:[8,8]},max:0,current:0},speed:30,stats:{str:11,dex:12,con:10,int:10,wis:11,cha:10},skills:[{name:"Deception",value:2},{name:"Religion",value:2}],senses:[{name:"Passive Perception",value:10}],languages:["any one language"],challenge:{value:"1/8",xp:25},abilities:[{name:"Dark Devotion",description:"The cultist has advantage on saving throws against being charmed or frightened."}],actions:[{name:"Scimitar",type:"Melee Weapon Attack",modifier:3,reach:5,targets:1,hit:{average:4,roll:{dice:"1d6",modifier:1},type:"slashing"}}]},{name:"Giant Rat",size:"small",type:"beast",alignment:["unaligned"],armor:{class:12},hit_points:{average:7,roll:{dice:[6,6]},max:0,current:0},speed:30,stats:{str:7,dex:15,con:11,int:2,wis:10,cha:4},skills:[],senses:[{name:"Darkvision",value:60},{name:"Passive Perception",value:10}],languages:[],challenge:{value:"1/8",xp:25},abilities:[{name:"Keen Smell",description:"The rat has advantage on Wisdom (Perception) checks that rely on smell."},{name:"Pack Tactics",description:"The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated"}],actions:[{name:"Bite",type:"Melee Weapon Attack",modifier:4,reach:5,targets:1,hit:{average:4,roll:{dice:"1d4",modifier:2},type:"piercing"}}]},{name:"Gray Ooze",size:"medium",type:"ooze",alignment:["unaligned"],armor:{class:8},hit_points:{average:22,roll:{dice:[8,8,8],modifier:9},max:0,current:0},speed:{default:10,climb:10},stats:{str:12,dex:6,con:16,int:1,wis:6,cha:2},skills:[{name:"Stealth",value:2}],damage_resistances:["acid","cold","fire"],condition_immunities:["blinded","charmed","deafened","exhaustion","frightened","prone"],senses:[{name:"Blindsight",value:60},{name:"Passive Perception",value:8}],languages:[],challenge:{value:"1/2",xp:50},abilities:[{name:"Amorphous",description:"The ooze can move through a space as narrow as 1 inch wide without squeezing."},{name:"Corrode Metal",description:"Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.\r\nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round."},{name:"False Appearance",description:"While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."}],actions:[{name:"Psuedopod",type:"Melee Weapon Attack",modifier:3,reach:5,targets:1,hit:[{average:4,roll:{dice:"1d6",modifier:1},type:"bludgeoning"},{average:7,roll:{dice:"2d6"},type:"acid"}],effect:"If the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."}]},{name:"Goblin Gang Member",size:"small",type:"humanoid",alignment:["neutral","evil"],armor:{class:14,type:"leather armor"},hit_points:{average:10,roll:{dice:[6,6,6]},max:0,current:0},speed:30,stats:{str:8,dex:16,con:10,int:10,wis:10,cha:8},skills:[{name:"Stealth",value:5}],senses:[{name:"Darkvision",value:60},{name:"Passive Perception",value:10}],languages:["Common","Goblin"],challenge:{value:"1/4",xp:50},abilities:[{name:"Nimble Escape",description:"The goblin can take the Disengage or Hide action as a bonus action on each of its turns."}],actions:[{name:"Dagger",variants:[{type:"Melee Weapon Attack",modifier:5,reach:5,targets:1,hit:{average:5,roll:{dice:"1d4",modifier:3},type:"piercing"}},{type:"Ranged Weapon Attack",modifier:5,range:{short:20,long:60},targets:1,hit:{average:5,roll:{dice:"1d4",modifier:3},type:"piercing"}}]},{name:"Light Crossbow",type:"Ranged Weapon Attack",modifier:5,range:{short:80,long:320},targets:1,hit:{average:7,roll:{dice:"1d8",modifier:3},type:"piercing"}}]},{name:"Zombie",size:"medium",type:"undead",alignment:["neutral","evil"],armor:{class:8},hit_points:{average:22,roll:{dice:[8,8,8],modifier:9},max:0,current:0},speed:20,stats:{str:13,dex:6,con:16,int:3,wis:6,cha:5},saving_throws:[{name:"Wis",value:0}],damage_immunities:["poison"],condition_immunities:["poisoned"],senses:[{name:"Darkvision",value:60},{name:"Passive Perception",value:8}],languages:["Understands languages it knew in life but can't speak"],challenge:{value:"1/4",xp:50},abilities:[{name:"Undead Fortitude",description:"If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."}],actions:[{name:"Slam",type:"Melee Weapon Attack",modifier:3,reach:5,targets:1,hit:{average:4,roll:{dice:"1d6",modifier:1},type:"bludgeoning"}}]},{name:"Swarm of Insects",size:"medium",type:"swarm of tiny beasts",alignment:["unaligned"],armor:{class:12,type:"natural armor"},hit_points:{average:22,roll:{dice:[8,8,8,8,8]},max:0,current:0},speed:{default:20,climb:20},stats:{str:3,dex:13,con:10,int:1,wis:7,cha:1},damage_resistances:["bludgeoning","piercing","slashing"],condition_immunities:["charmed","frightened","grappled","paralyzed","petrified","prone","restrained","stunned"],senses:[{name:"Blindsight",value:10},{name:"Passive Perception",value:8}],languages:[],challenge:{value:"1/2",xp:100},abilities:[{name:"Swarm",description:"The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."}],actions:[{name:"Bites",variants:[{type:"Melee Weapon Attack",modifier:3,reach:0,targets:1,hit:{average:10,roll:{dice:"4d4"},type:"piercing"}},{type:"(with less than 1/2 max HP) Melee Weapon Attack",modifier:3,reach:0,targets:1,hit:{average:5,roll:{dice:"2d4"},type:"piercing"}}]}]},{name:"Goblin",size:"small",type:"humanoid",alignment:["neutral","evil"],armor:{class:15,type:"leather armor, shield"},hit_points:{average:7,roll:{dice:[6,6]},max:0,current:0},speed:30,stats:{str:8,dex:14,con:10,int:10,wis:8,cha:8},skills:[{name:"Stealth",value:6}],senses:[{name:"Darkvision",value:60},{name:"Passive Perception",value:9}],languages:["Common","Goblin"],challenge:{value:"1/4",xp:50},abilities:[{name:"Nimble Escape",description:"The goblin can take the Disengage or Hide action as a bonus action on each of its turns."}],actions:[{name:"Scimitar",type:"Melee Weapon Attack",modifier:4,reach:5,targets:1,hit:{average:5,roll:{dice:"1d6",modifier:2},type:"slashing"}},{name:"Shortbow",type:"Ranged Weapon Attack",modifier:4,range:{short:80,long:320},targets:1,hit:{average:5,roll:{dice:"1d6",modifier:2},type:"piercing"}}]}]},23:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),l=t.n(i),c=(t(28),t(8)),s=t(11),o=t(47),m=t(39),u=t(40),d=function(){var e=Object(n.useContext)(_),a=function(){return e.setDetailOpen(!1)};return e.detail.creature?r.a.createElement(o.a,{isOpen:e.detail.isOpen,toggle:a},r.a.createElement(m.a,{toggle:a},e.detail.creature.name),r.a.createElement(u.a,null,r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(h,null),r.a.createElement(p,null),r.a.createElement(g,null))):null},p=function(){var e=Object(n.useContext)(_).detail.creature;return r.a.createElement("div",null,e.abilities.map(function(e){return r.a.createElement("p",{key:e.name},r.a.createElement("strong",null,e.name,":")," ",e.description)}))},g=function(){var e=Object(n.useContext)(_).detail.creature,a=function(e){return"".concat(e.average," (").concat(e.roll.dice).concat(e.roll.hasOwnProperty("modifier")?e.roll.modifier>=0?" + ".concat(e.roll.modifier):" ".concat(e.roll.modifier):"",") ").concat(e.type)},t=function(e){return r.a.createElement("div",{key:"".concat(e.name,"-").concat(e.type),className:"mb-2"},r.a.createElement("em",null,e.type,":")," ",e.modifier>=0?"+":null,e.modifier," to hit,"," ",e.reach?"reach ".concat(e.reach," ft. "):null,e.range?"range ".concat(e.range.short,"/").concat(e.range.long," ft., "):null,e.targets," target(s). Hit:"," ",e.hit instanceof Array?e.hit.map(function(e){return a(e)}).join(", "):a(e.hit),". ",e.effect||null)};return r.a.createElement("dl",{className:"row mb-0"},e.actions.map(function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("dt",{className:"col-2"},e.name),r.a.createElement("dd",{className:"col-10"},e.variants?e.variants.map(function(e){return t(e)}):t(e)))}))},h=function(){var e=Object(n.useContext)(_).detail.creature;return r.a.createElement("dl",{className:"row mb-0"},e.saving_throws?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2"},"Saving Throws"),r.a.createElement("dd",{className:"col-10"},e.saving_throws.map(function(e){return"".concat(e.name," ").concat(e.value>=0?"+":null).concat(e.value)}).join(", "))):null,e.skills?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2"},"Skills"),r.a.createElement("dd",{className:"col-10"},e.skills.map(function(e){return"".concat(e.name," ").concat(e.value>=0?"+".concat(e.value):e.value)}).join(", "))):null,e.damage_resistances?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2"},"Damage Resistances"),r.a.createElement("dd",{className:"col-10"},e.damage_resistances.join(", "))):null,e.damage_immunities?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2"},"Damage Immunities"),r.a.createElement("dd",{className:"col-10"},e.damage_immunities.join(", "))):null,e.condition_resistances?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2"},"Condition Resistances"),r.a.createElement("dd",{className:"col-10"},e.condition_resistances.join(", "))):null,e.condition_immunities?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2"},"Condition Immunities"),r.a.createElement("dd",{className:"col-10"},e.condition_immunities.join(", "))):null,e.senses?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2"},"Senses"),r.a.createElement("dd",{className:"col-10"},e.senses.map(function(e){return"".concat(e.name," ").concat(e.value)}).join(", "))):null,r.a.createElement("dt",{className:"col-2"},"Languages"),r.a.createElement("dd",{className:"col-10"},e.languages.length?e.languages.join(", "):"None"),r.a.createElement("dt",{className:"col-2"},"Challenge"),r.a.createElement("dd",{className:"col-10"},e.challenge.value," (",e.challenge.xp," XP)"))},f=t(41),v=t(42),E=t(43),y=function(){var e=Object(n.useContext)(_).detail.creature.stats,a=[];for(var t in e)a.push(r.a.createElement(f.a,{sm:2,xs:4,key:t},r.a.createElement(v.a,{className:"p-1 text-center",body:!0},r.a.createElement("div",null,r.a.createElement("strong",null,t.toUpperCase())),r.a.createElement("div",null,e[t]),r.a.createElement("div",null,"(",Math.floor((e[t]-10)/2),")"))));return r.a.createElement(E.a,{noGutters:!0},a)},b=function(){var e=Object(n.useContext)(_).detail.creature;return r.a.createElement("dl",{className:"row mb-0"},r.a.createElement("dt",{className:"col-2"},"AC"),r.a.createElement("dd",{className:"col-10"},e.armor.class," (",e.armor.type,")"),r.a.createElement("dt",{className:"col-2"},"HP"),r.a.createElement("dd",{className:"col-10"},e.hit_points.current," / ",e.hit_points.max),r.a.createElement("dt",{className:"col-2"},"Speed"),r.a.createElement("dd",{className:"col-10"},function(e){if("object"===typeof e){var a=[];for(var t in e)a.push("default"===t?"".concat(e[t]," ft."):"".concat(t," ").concat(e[t]," ft."));return a.join(", ")}return"".concat(e," ft.")}(e.speed)))},x=d,k=t(12),w=t(14),C=function(e,a){var t=Object(w.a)(a.creatures),n=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce(function(e,a){return e+Math.ceil(Math.random()*a)},0)+a}(e.hit_points.roll.dice,e.hit_points.roll.modifier);return t.push(Object(c.a)({},JSON.parse(JSON.stringify(e)),{id:Date.now(),hit_points:Object(c.a)({},e.hit_points,{current:n,max:n})})),Object(c.a)({},a,{creatures:t})},N=function(e,a){switch(a.type){case"ADD_CREATURE":return C(a.creature,e);case"REMOVE_CREATURE":return function(e,a){var t=Object(w.a)(a.creatures),n=t.findIndex(function(a){return a.id===e});return t.splice(n,1),Object(c.a)({},a,{creatures:t})}(a.creatureId,e);case"SET_CREATURE_HP":return function(e,a){var t=Object(w.a)(a.creatures),n=t.findIndex(function(a){return a.id===e.creatureId});return t[n].hit_points[e.param]=e.value,Object(c.a)({},a,{creatures:t})}(a.params,e);default:return e}},_=r.a.createContext(),O=function(e){var a=Object(n.useReducer)(N,{creatures:[]}),t=Object(s.a)(a,2),i=t[0],l=t[1],o=Object(n.useState)({creature:null,isOpen:!1}),m=Object(s.a)(o,2),u=m[0],d=m[1],p=function(e){var a=k.find(function(a){return a.name===e});a&&l({type:"ADD_CREATURE",creature:a})};return Object(n.useEffect)(function(){["Goblin Gang Member"].map(function(e){return p(e)})},[]),r.a.createElement(_.Provider,{value:{creatures:i.creatures,detail:u,addCreature:p,removeCreature:function(e){l({type:"REMOVE_CREATURE",creatureId:e})},setCreatureHP:function(e,a){for(var t in a)l({type:"SET_CREATURE_HP",params:{creatureId:e,param:t,value:a[t]}})},showCreatureDetail:function(e){var a=i.creatures.find(function(a){return a.id===e});d({creature:a,isOpen:!0})},setDetailOpen:function(e){d(Object(c.a)({},u,{isOpen:Boolean(e)}))}}},e.children,r.a.createElement(x,null))},j=t(44),A=function(e){var a=e.creature,t=Object(n.useContext)(_);return r.a.createElement(v.a,{className:"text-center p-2 d-flex flex-direction-column justify-content-between",style:{height:"100%"},body:!0},r.a.createElement("div",{className:"creature-card-name"},a.name||"Unknown Creature"),r.a.createElement(P,{creature:a}),r.a.createElement("div",null,r.a.createElement(j.a,{color:"info",className:"p-1",onClick:function(){return t.showCreatureDetail(a.id)},block:!0},"View"),r.a.createElement(j.a,{color:"secondary",className:"p-1",onClick:function(){return t.removeCreature(a.id)},block:!0},"Remove")))},P=function(e){var a=e.creature,t=Object(n.useContext)(_),i="0 / 0";return a.hit_points&&(i=r.a.createElement("div",{className:"creature-card-hp"},a.hit_points.current||0," / ",a.hit_points.max||0)),r.a.createElement(r.a.Fragment,null,i,r.a.createElement(E.a,{className:"creature-card-hp-buttons my-2",noGutters:!0},r.a.createElement(f.a,{sx:6},r.a.createElement(j.a,{color:"success",className:"py-0 px-2",onClick:function(){return t.setCreatureHP(a.id,{current:a.hit_points.current+1})}},"+")),r.a.createElement(f.a,{sx:6},r.a.createElement(j.a,{color:"danger",className:"py-0 px-2",onClick:function(){return t.setCreatureHP(a.id,{current:a.hit_points.current-1})}},"-"))))},R=A,D=t(45);k.sort(function(e,a){return e.name<a.name?-1:e.name>a.name?1:0});var S=function(e){var a=Object(n.useContext)(_),t=Object(n.useState)(!1),i=Object(s.a)(t,2),l=i[0],c=i[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),g=p[0],h=p[1],f=r.a.createElement(j.a,{color:"success",onClick:function(){g&&(a.addCreature(g),c(!1),h(""))},disabled:!g},"Add Creature"),v=r.a.createElement(D.a,{type:"select",value:g,onChange:function(e){return h(e.target.value)}},r.a.createElement("option",{value:""},"Choose..."),k.map(function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{color:"success",onClick:function(){return c(!0)}},"+"),r.a.createElement(o.a,{isOpen:l,toggle:function(){return c(!1)}},r.a.createElement(m.a,{toggle:function(){return c(!1)}},"Add New Creature"),r.a.createElement(u.a,null,v,f)))},T=function(e){var a=Object(n.useContext)(_),t=r.a.createElement(r.a.Fragment,null,a.creatures.map(function(e){return r.a.createElement(f.a,{key:e.id,xs:4,md:3},r.a.createElement(R,{creature:e}))}));return r.a.createElement(v.a,{body:!0},r.a.createElement(E.a,{className:"d-flex align-items-stretch"},t,r.a.createElement(f.a,{xs:4,md:3},r.a.createElement(S,null))))},z=t(46),M=function(){return r.a.createElement(O,null,r.a.createElement(z.a,{className:"App my-3"},r.a.createElement(T,null)))};l.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.857e843d.chunk.js.map