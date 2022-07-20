//------- LIST START -------\\

let vanillaMetals = [
    "iron",
    "gold",
    "copper",
    "emerald",
    "diamond",
    "netherite",
];

// ATO Metals \\
let atoIngots = [
    "aluminum",
    "osmium",
    "platinum",
    "zinc",
    "uranium",
    "tin",
    "lead",
    "silver",
    "nickel",
    "steel",
    "invar",
    "electrum",
    "bronze",
    "enderium",
    "lumium",
    "signalum",
    "constantan",
    "brass",
    "iridium",
];
let atoNuggets = [
    "aluminum",
    "osmium",
    "platinum",
    "zinc",
    "uranium",
    "tin",
    "lead",
    "silver",
    "nickel",
    "steel",
    "invar",
    "electrum",
    "bronze",
    "enderium",
    "lumium",
    "signalum",
    "constantan",
    "brass",
    "iridium",
    "copper",
];
let atoDusts = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "iron",
    "copper",
    "gold",
    "diamond",
    "netherite",
    "bronze",
    "constantan",
    "electrum",
    "enderium",
    "lumium",
    "signalum",
    "steel",
    "invar",
    "brass",
    "iridium",
    "ruby",
    "peridot",
    "sapphire",
];
let atoDirtyDusts = [
    "aluminum",
    "copper",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
];
let atoRaw = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "iridium",
];
let atoShardCrystalClump = [
    "aluminum",
    "copper",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
];
let atoRods = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "steel",
    "invar",
    "electrum",
    "bronze",
    "iron",
    "gold",
    "diamond",
    "copper",
    "enderium",
    "lumium",
    "signalum",
    "constantan",
    "brass",
    "iridium",
];
let atoGears = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "steel",
    "invar",
    "electrum",
    "bronze",
    "iron",
    "gold",
    "diamond",
    "copper",
    "enderium",
    "lumium",
    "signalum",
    "constantan",
    "brass",
    "iridium",
];
let atoPlates = [
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "zinc",
    "steel",
    "invar",
    "electrum",
    "bronze",
    "iron",
    "gold",
    "diamond",
    "copper",
    "enderium",
    "lumium",
    "signalum",
    "constantan",
    "brass",
    "iridium",
];
let atoMystic = [
    "aluminum",
    "brass",
    "bronze",
    "constantan",
    "electrum",
    "invar",
    "iridium",
    "lead",
    "nickel",
    "platinum",
    "silver",
    "steel",
    "tin",
    "uranium",
    "zinc",
];
let circuits = ["basic", "advanced", "elite", "ultimate"];

// ... Metals \\

//------- LIST END -------\\

//Unify Recipes
onEvent("recipes", (event) => {
    //FUNCTIONS:
    function REP(input, output) {
        event.replaceInput({}, input, output);
        event.replaceOutput({}, input, output);
    }

});

onEvent("lootjs", (event) => {

    // Immersiveengineering ore drops -> ATO ore drops
    [`aluminum`, `lead`, `silver`, `nickel`, `uranium`].forEach((item) => {

        event
            .addBlockLootModifier(`immersiveengineering:ore_${item}`)
            .replaceLoot(`immersiveengineering:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();

        event
            .addBlockLootModifier(`immersiveengineering:deepslate_ore_${item}`)
            .replaceLoot(`immersiveengineering:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();
    });

    // Create Zinc Ore
    event
        .addBlockLootModifier(`create:zinc_ore`)
        .replaceLoot(`create:raw_zinc`, `alltheores:raw_zinc`, true)
        .applyOreBonus("minecraft:fortune")
        .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
        .smeltLoot();

    event
        .addBlockLootModifier(`create:deepslate_zinc_ore`)
        .replaceLoot(`create:raw_zinc`, `alltheores:raw_zinc`, true)
        .applyOreBonus("minecraft:fortune")
        .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
        .smeltLoot();

    //Mekanism ore drops -> ATO ore drops
    [`tin`, `osmium`, `uranium`, `lead`].forEach((item) => {

        event
            .addBlockLootModifier(`mekanism:${item}_ore`)
            .replaceLoot(`mekanism:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();
        event
            .addBlockLootModifier(`mekanism:deepslate_${item}_ore`)
            .replaceLoot(`mekanism:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();

    });

    //Biggerreactors Uranium Ore -> ATO ore drops
    event
        .addBlockLootModifier(`biggerreactors:uranium_ore`)
        .replaceLoot(`biggerreactors:uranium_ore`, `alltheores:raw_uranium`, true)
        .applyOreBonus("minecraft:fortune")
        .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
        .smeltLoot();

    //Basic nether/end Ores -> ATO ore drops
    [`silver`, `lead`, `nickel`, `aluminum`, `tin`, `osmium`, `uranium`, `zinc`].forEach((item) => {

        event
            .addBlockLootModifier(`bno:nether_${item}_ore`)
            .replaceLoot(`bno:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();

        event
            .addBlockLootModifier(`beo:end_${item}_ore`)
            .replaceLoot(`beo:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();
    });

    //FTB Industrial Contraptions Ores -> ATO ore drops
    [`aluminum`, `iridium`, `lead`, `tin`, `uranium`].forEach((item) => {
            
            event
                .addBlockLootModifier(`ftbic:${item}_ore`)
                .replaceLoot(`ftbic:${item}_chunk`, `alltheores:raw_${item}`, true)
                .applyOreBonus("minecraft:fortune")
                .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
                .smeltLoot();
            event
                .addBlockLootModifier(`ftbic:deepslate_${item}_ore`)
                .replaceLoot(`ftbic:${item}_chunk`, `alltheores:raw_${item}`, true)
                .applyOreBonus("minecraft:fortune")
                .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
                .smeltLoot();
        }
    );

    //Galosphere Ores -> ATO ore drops
    event
        .addBlockLootModifier(`galosphere:silver_ore`)
        .replaceLoot(`galosphere:raw_silver`, `alltheores:raw_silver`, true)
        .applyOreBonus("minecraft:fortune")
        .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
        .smeltLoot();
    event
        .addBlockLootModifier(`galosphere:deepslate_silver_ore`)
        .replaceLoot(`galosphere:raw_silver`, `alltheores:raw_silver`, true)
        .applyOreBonus("minecraft:fortune")
        .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
        .smeltLoot();

    //Mystical World Ores -> ATO ore drops
    [`tin`, `lead`, `silver`].forEach((item) => {

        event
            .addBlockLootModifier(`mysticalworld:${item}_ore`)
            .replaceLoot(`mysticalworld:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();
        event
            .addBlockLootModifier(`mysticalworld:deepslate_${item}_ore`)
            .replaceLoot(`mysticalworld:raw_${item}`, `alltheores:raw_${item}`, true)
            .applyOreBonus("minecraft:fortune")
            .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
            .smeltLoot();
    });

    event
        .addBlockLootModifier(`mysticalworld:sapphire_ore`)
        .replaceLoot(`mysticalworld:sapphire`, `alltheores:sapphire`, true)
        .applyOreBonus("minecraft:fortune")
        .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
        .smeltLoot();
    event
        .addBlockLootModifier(`mysticalworld:deepslate_sapphire_ore`)
        .replaceLoot(`mysticalworld:sapphire`, `alltheores:sapphire`, true)
        .applyOreBonus("minecraft:fortune")
        .matchMainHand(ItemFilter.hasEnchantment("cyclic:auto_smelt"))
        .smeltLoot();

});

console.info('Server-script Unify-Drops.js reloaded successfully!');