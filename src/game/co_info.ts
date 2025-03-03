export const coInfo = {
    "Andy": {
        "d2d": "No day-to-day abilities.",
        "cop": { name: "Hyper Repair", desc: "All units gain +2 HP." },
        "scop": { name: "Hyper Upgrade", desc: "All units gain +5 HP, +10% attack, and +1 movement." },
    },
    "Hachi": {
        "d2d": "Units cost is reduced to 90% (10% cheaper).",
        "cop": { name: "Barter", desc: "Units cost is reduced to 50%." },
        "scop": { name: "Merchant Union", desc: "Units cost reduced to 50%, and ground units can deploy from cities." },
    },
    "Jake": {
        "d2d": "Units (even air units) gain +10% attack power on plains.",
        "cop": { name: "Beat Down", desc: "Land indirects gain +1 range, and plains bonus is increased to +20%." },
        "scop": { name: "Block Rock", desc: "Land indirects gain +1 range, plains bonus is increased to +40%, and vehicles gain +2 movement." },
    },
    "Max": {
        "d2d": "Direct units (except footsoldiers) gain +20% attack. Indirect units lose -10% attack and have -1 range.",
        "cop": { name: "Max Force", desc: "Direct units (except footsoldiers) gain +1 movement and their attack increases to +30%." },
        "scop": { name: "Max Blast", desc: "Direct units (except footsoldiers) gain +2 movement and their attack increases to +50%." },
    },
    "Nell": {
        "d2d": "Luck on attacks is +0 to +19%.",
        "cop": { name: "Lucky Star", desc: "Luck is improved to +0% to +59%." },
        "scop": { name: "Lady Luck", desc: "Luck is improved to +0% to +99%." },
    },
    "Rachel": {
        "d2d": "Units repair +1 additional HP (note: liable for costs).",
        "cop": { name: "Lucky Lass", desc: "Luck is improved to +0% to +39%." },
        "scop": { name: "Covering Fire", desc: "Three 2-range missiles deal 3 HP damage each. The missiles target the opponents' greatest accumulation of footsoldier HP, unit value, and unit HP (in that order)." },
    },
    "Sami": {
        "d2d": "Footsoldiers gain +30% attack and a 50% capture point bonus (rounded down). Other direct units lose -10% attack. Transports gain +1 movement.",
        "cop": { name: "Double Time", desc: "Footsoldiers gain +1 movement and their attack is increased to +50%." },
        "scop": { name: "Victory March", desc: "Footsoldiers gain +2 movement and their attack is increased to +70%. Footsoldiers capture buildings instantly, regardless of their HP." },
    },
    "Colin": {
        "d2d": "Unit cost is reduced to 80% (20% cheaper), but lose -10% attack.",
        "cop": { name: "Gold Rush", desc: "Funds are multiplied by 1.5x." },
        "scop": { name: "Power of Money", desc: "Unit attack percentage increases by (3 * Funds / 1000)%." },
    },
    "Grit": {
        "d2d": "Indirect units have +1 range and gain +20% attack. Direct units (except footsoldiers) lose -20% attack.",
        "cop": { name: "Snipe Attack", desc: "Indirect units gain +1 range and their attack is increased to +40%." },
        "scop": { name: "Super Snipe", desc: "Indirect units gain +2 range and their attack is increased to +40%." },
    },
    "Olaf": {
        "d2d": "Unaffected by snow, but rain affects him the same as snow would for others.",
        "cop": { name: "Blizzard", desc: "Changes the weather to Snow for 1 day." },
        "scop": { name: "Winter Fury", desc: "Enemy units lose 2 HP (to a minimum of 0.1 HP), and the weather changes to snow for 1 day." },
    },
    "Sasha": {
        "d2d": "Receives +100 funds per property that grants funds and she owns. (Note: labs, comtowers, and 0 Funds games do not get additional income).",
        "cop": { name: "Market Crash", desc: "Reduces enemy power bar(s) by (10 * Funds / 5000)% of their maximum power bar." },
        "scop": { name: "War Bonds", desc: "Receives funds equal to 50% of the damage dealt when attacking enemy units." },
    },
    "Drake": {
        "d2d": "Naval units gain +1 movement and +10 defense. Air units lose -30% attack. Unaffected by rain (except vision), and has a higher chance of Rain in random weather.",
        "cop": { name: "Tsunami", desc: "All enemy units lose 1 HP (to a minimum of 0.1 HP) and half their fuel." },
        "scop": { name: "Typhoon", desc: "All enemy units lose 2 HP (to a minimum of 0.1 HP) and half their fuel. Weather changes to rain for 1 day." },
    },
    "Eagle": {
        "d2d": "Air units gain +15% attack and +10% defense, and consume -2 fuel per day. Naval units lose -30% attack.",
        "cop": { name: "Lightning Drive", desc: "Air units attack and defense are increased to +20%." },
        "scop": { name: "Lightning Strike", desc: "Air units attack and defense are increased to +20%. All non-footsoldier units may move and fire again, even if built this turn (use this power after moving!)." },
    },
    "Javier": {
        "d2d": "Units gain +20% defense against indirect units. Each comtower grants all units an additional +10% defense.",
        "cop": { name: "Tower Shield", desc: "Indirect defense is increased to +40%. Comtower bonuses are doubled." },
        "scop": { name: "Tower of Power", desc: "Indirect defense is increased to +80%. Comtower bonuses are tripled." },
    },
    "Jess": {
        "d2d": "Vehicles gain +10% attack, but all other units (including footsoldiers) lose -10% attack.",
        "cop": { name: "Turbo Charge", desc: "Vehicles gain +1 movement and their attack is increased to +20%. All units resupply fuel and ammo." },
        "scop": { name: "Overdrive", desc: "Vehicles gain +2 movement and their attack is increased to +40%. All units resupply fuel and ammo." },
    },
    "Grimm": {
        "d2d": "Units gain +30% attack, but lose -20% defense.",
        "cop": { name: "Knuckleduster", desc: "All units' attack is increased to +50%." },
        "scop": { name: "Haymaker", desc: "All units' attack is increased to +80%." },
    },
    "Kanbei": {
        "d2d": "Units cost +20% more to build, but gain +30% attack and defense.",
        "cop": { name: "Morale Boost", desc: "All units' attack is increased to +40%." },
        "scop": { name: "Samurai Spirit", desc: "All units' attack is increased to +40% and defense to +50%. Counterattacks do 1.5x more damage." },
    },
    "Sensei": {
        "d2d": "Copters gain +50% attack, footsoldiers gain +40% attack, but all other non-air units lose -10% attack. Transports gain +1 movement.",
        "cop": { name: "Copter Command", desc: "Copters' attack is increased to +65%. 9 HP unwaited infantry are placed on every owned, empty city." },
        "scop": { name: "Airborne Assault", desc: "Copters' attack is increased to +65%. 9 HP unwaited mechs are placed on every owned, empty city." },
    },
    "Sonja": {
        "d2d": "Units gain +1 vision in Fog of War, have hidden HP, and counterattacks do 1.5x more damage. Luck is reduced to -9% to +9%.",
        "cop": { name: "Enhanced Vision", desc: "All units gain +1 vision, and can see into forests and reefs." },
        "scop": { name: "Counter Break", desc: "All units gain +1 vision, and can see into forests and reefs. A unit being attacked will attack first (even if it would be destroyed by the attack)." },
    },
    "Adder": {
        "d2d": "No day-to-day abilities.",
        "cop": { name: "Sideslip", desc: "All units gain +1 movement." },
        "scop": { name: "Sidewinder", desc: "All units gain +2 movement." },
    },
    "Flak": {
        "d2d": "Luck on attacks is -9% to +24%.",
        "cop": { name: "Brute Force", desc: "Luck range is changed to -19% to +49%." },
        "scop": { name: "Barbaric Blow", desc: "Luck range is changed to -39% to +89%." },
    },
    "Hawke": {
        "d2d": "Units gain +10% attack.",
        "cop": { name: "Black Wave", desc: "All units gain +1 HP, and all enemy units lose -1 HP (to a minimum of 0.1 HP)." },
        "scop": { name: "Black Storm", desc: "All units gain +2 HP, and all enemy units lose -2 HP (to a minimum of 0.1 HP)." },
    },
    "Jugger": {
        "d2d": "Luck on attacks is -14% to +29%.",
        "cop": { name: "Overclock", desc: "Luck range is changed to -24% to +54%." },
        "scop": { name: "System Crash", desc: "Luck range is changed to -44% to +94%." },
    },
    "Kindle": {
        "d2d": "Units (even air units) gain +40% attack while on urban terrain. HQs, bases, airports, ports, cities, labs, and comtowers count as urban terrain.",
        "cop": { name: "Urban Blight", desc: "All enemy units lose -3 HP on urban terrain. Urban bonus is increased to +80%." },
        "scop": { name: "High Society", desc: "Urban bonus is increased to +130%, and attack for all units is increased by +3% for each of your owned urban terrain." },
    },
    "Koal": {
        "d2d": "Units (even air units) gain +10% attack power on roads.",
        "cop": { name: "Forced March", desc: "All units gain +1 movement, and the road bonus is increased to +20%." },
        "scop": { name: "Trail of Woe", desc: "All units gain +2 movement, and the road bonus is increased to +30%." },
    },
    "Lash": {
        "d2d": "Units gain +10% attack for every terrain star (note: air units are unaffected by terrain).",
        "cop": { name: "Terrain Tactics", desc: "Movement cost for all terrain is reduced to 1, except in Snow." },
        "scop": { name: "Prime Tactics", desc: "Terrain stars are doubled (attack and defense). Movement cost over all terrain is reduced to 1, except in Snow." },
    },
    "Sturm": {
        "d2d": "Movement cost over all terrain is reduced to 1, except in Snow. Units lose -20% attack and gain +20% defense.",
        "cop": { name: "Meteor Strike", desc: "A 2-range missile deals 4 HP damage. The missile targets an enemy unit located at the greatest accumulation of unit value." },
        "scop": { name: "Meteor Strike II", desc: "A 2-range missile deals 8 HP damage. The missile targets an enemy unit located at the greatest accumulation of unit value." },
    },
    "Von Bolt": {
        "d2d": "Units gain +10% attack and +10% defense.",
        "cop": { name: "Ex Machina", desc: "A 2-range missile deals 3 HP damage and prevents all affected units from acting next turn. The missile targets the opponents' greatest accumulation of unit value." },
        "scop": null,
    },
}