settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true
// ------- Constants FROM ATM PACK THANK YOU ------- \\

let energize = (event, ingredient, result, power, count) => {
  event.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
  })
}
let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(Item.of(result, count), pattern, ingredients)
}

// ------- Constants ------- \\


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

  event.remove({output: 'potionsmaster:unobtainium_powder'})
	event.remove({output: 'potionsmaster:calcinatedunobtainium_powder'})
	event.remove({output: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"potionsmaster:unobtainium_sight"}')})
	event.remove({output: Item.of('minecraft:potion', '{Potion:"potionsmaster:unobtainium_sight"}')})
	event.remove({output: Item.of('minecraft:splash_potion', '{Potion:"potionsmaster:unobtainium_sight"}')})
	event.remove({output: Item.of('minecraft:lingering_potion', '{Potion:"potionsmaster:unobtainium_sight"}')})
	event.remove({output: Item.of('minecraft:tipped_arrow', '{Potion:"potionsmaster:unobtainium_sight"}')})
	event.remove({output: 'potionsmaster:allthemodium_powder'})
	event.remove({output: 'potionsmaster:calcinatedallthemodium_powder'})
	event.remove({output: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"potionsmaster:allthemodium_sight"}')})
	event.remove({output: Item.of('immersiveengineering:potion_bucket', '{Potion:"potionsmaster:allthemodium_sight"}')})
	event.remove({output: Item.of('minecraft:potion', '{Potion:"potionsmaster:allthemodium_sight"}')})
	event.remove({output: Item.of('minecraft:splash_potion', '{Potion:"potionsmaster:allthemodium_sight"}')})
	event.remove({output: Item.of('minecraft:lingering_potion', '{Potion:"potionsmaster:allthemodium_sight"}')})
	event.remove({output: Item.of('minecraft:tipped_arrow', '{Potion:"potionsmaster:allthemodium_sight"}')})
	event.remove({output: 'potionsmaster:vibranium_powder'})
	event.remove({output: 'potionsmaster:calcinatedvibranium_powder'})
	event.remove({output: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"potionsmaster:vibranium_sight"}')})
	event.remove({output: Item.of('minecraft:potion', '{Potion:"potionsmaster:vibranium_sight"}')})
	event.remove({output: Item.of('minecraft:splash_potion', '{Potion:"potionsmaster:vibranium_sight"}')})
	event.remove({output: Item.of('minecraft:lingering_potion', '{Potion:"potionsmaster:vibranium_sight"}')})
	event.remove({output: Item.of('minecraft:tipped_arrow', '{Potion:"potionsmaster:vibranium_sight"}')})
  event.remove({ id: 'alltheores:enderium_dust_from_alloy_blending' })
  // ---------- Mekanism Section Begin ---------- \\

  //Mekanism -> ATO
  atoIngots.forEach((metal) => {
    REP("mekanism:ingot_" + metal, "alltheores:" + metal + "_ingot");
  });
  atoNuggets.forEach((metal) => {
    REP("mekanism:nugget_" + metal, "alltheores:" + metal + "_nugget");
  });
  atoRaw.forEach((metal) => {
    REP("mekanism:raw_" + metal, "alltheores:raw_" + metal);
  });
  atoDusts.forEach((metal) => {
    REP("mekanism:dust_" + metal, "alltheores:" + metal + "_dust");
  });
  atoDirtyDusts.forEach((metal) => {
    REP("mekanism:dirty_dust_" + metal, "alltheores:dirty_" + metal + "_dust");
  });
  atoShardCrystalClump.forEach((metal) => {
    REP("mekanism:shard_" + metal, "alltheores:" + metal + "_shard");
    REP("mekanism:crystal_" + metal, "alltheores:" + metal + "_crystal");
    REP("mekanism:clump_" + metal, "alltheores:" + metal + "_clump");
  });

  atoMystic.forEach((metal) => {
    event.remove({ id: `mysticalagriculture:essence/common/${metal}_ingot` });

    if (metal === "aluminum") {
      event.shaped(`8x alltheores:aluminum_ingot`, ["EEE", "E E", "EEE"], {
        E: `mysticalagriculture:aluminum_essence`,
      });
    } else if (metal === "steel") {
      event.shaped(`3x alltheores:steel_ingot`, ["EEE", "E E", "EEE"], {
        E: `mysticalagriculture:steel_essence`,
      });
    } else {
      event.shaped(`4x alltheores:${metal}_ingot`, ["EEE", "E E", "EEE"], {
        E: `mysticalagriculture:${metal}_essence`,
      });
    }
  });

  REP(`ftbic:charcoal_dust`, `mekanism:dust_charcoal`);
  REP(`ftbic:coal_dust`, `mekanism:dust_coal`);

  // ---------- Mekanism Section End ---------- \\

  // ---------- Immersive Engineering Section Begin ---------- \\

  //Immersiveengineering -> AlltheOres
  atoIngots.forEach((metal) => {
    REP(`immersiveengineering:ingot_${metal}`, `alltheores:${metal}_ingot`);
  });
  atoNuggets.forEach((metal) => {
    REP(`immersiveengineering:nugget_${metal}`, `alltheores:${metal}_nugget`);
  });
  atoRods.forEach((metal) => {
    REP(`immersiveengineering:stick_${metal}`, `alltheores:${metal}_rod`);
  });
  atoPlates.forEach((metal) => {
    REP(`immersiveengineering:plate_${metal}`, `alltheores:${metal}_plate`);
  });
  atoDusts.forEach((metal) => {
    REP(`immersiveengineering:dust_${metal}`, `alltheores:${metal}_dust`);
  });
  atoRaw.forEach((metal) => {
    REP(`immersiveengineering:raw_${metal}`, `alltheores:raw_${metal}`);
  });

  //IE -> Mekanism
  //Sulfur
  REP(`immersiveengineering:dust_sulfur`, `mekanism:dust_sulfur`);
  event.remove({ id: `mysticalagriculture:essence/common/sulfur` });
  event.shaped(`8x mekanism:dust_sulfur`, ["   ", "EEE", "   "], {
    E: `mysticalagriculture:sulfur_essence`,
  });

  //Remove IE hammer recipes (ATO provides the same recipes)
  atoIngots.concat(vanillaMetals).forEach(metal => {
    event.remove({ id: `immersiveengineering:crafting/plate_${metal}_hammering` });
    event.remove({ id: `immersiveengineering:crafting/hammercrushing_${metal}` });
    event.remove({ id: `immersiveengineering:crafting/raw_hammercrushing_${metal}` });
    // event.remove({id: `beyond_earth_giselle_addon:compat/immersiveengineering/crafting/plate_desh_hammering`});
  });

  //Unify IEs Sawdust with Mekanisms sawdust
  REP(`immersiveengineering:dust_wood`, `mekanism:sawdust`);

  // ---------- Immersive Engineering Section End ---------- \\

  // ---------- Biggerreactors Section Begin ---------- \\

  //Biggerreactors -> ATO
  REP(`biggerreactors:uranium_ingot`, `alltheores:uranium_ingot`);
  REP(`biggerreactors:uranium_dust`, `alltheores:uranium_dust`);

  // ---------- Biggerreactors Section End ---------- \\

  // ---------- Create & Co. Section Begin ---------- \\

  //Create -> ATO
  ["zinc", "brass"].forEach((metal) => {
    REP(`create:${metal}_ingot`, `alltheores:${metal}_ingot`);
  });
  ["brass", "copper", "zinc"].forEach((metal) => {
    REP(`create:${metal}_nugget`, `alltheores:${metal}_nugget`);
  });
  atoPlates.forEach((metal) => {
    REP(`create:${metal}_sheet`, `alltheores:${metal}_plate`);
  });
  REP(`create:golden_sheet`, `alltheores:gold_plate`);
  atoDusts.forEach((metal) => {
    REP(`create:crushed_${metal}_ore`, `alltheores:${metal}_dust`);
  });
  REP(`create:raw_zinc`, `alltheores:raw_zinc`);

  //Create:Alloyed -> ATO

  REP(`alloyed:bronze_ingot`, `alltheores:bronze_ingot`);
  REP(`alloyed:bronze_sheet`, `alltheores:bronze_plate`);
  REP(`alloyed:steel_ingot`, `alltheores:steel_ingot`);
  REP(`alloyed:steel_sheet`, `alltheores:steel_plate`);

  //Create Crafts & Additions -> ATO
  REP(`createaddition:zinc_sheet`, `alltheores:zinc_plate`);
  ["copper", "iron", "gold", "brass"].forEach((metal) => {
    REP(`createaddition:${metal}_rod`, `alltheores:${metal}_rod`);
  });
  REP(`createaddition:diamond_grit`, `alltheores:diamond_dust`);

  ["copper", "iron", "gold", "brass"].forEach((metal) => {
    event.remove({ id: `createaddition:rolling/${metal}_ingot` });

    event
      .custom({
        type: `createaddition:rolling`,
        input: {
          tag: `forge:ingots/${metal}`,
        },
        result: {
          item: `alltheores:${metal}_rod`,
          count: 2,
        },
      })
      .id(`createaddition:rolling/${metal}_ingot`);
  });

  //Create Deco -> ATO
  REP(`createdeco:zinc_sheet`, `alltheores:zinc_plate`);
  //Cyclic -> Create Deco
  REP(`cyclic:netherite_nugget`, `createdeco:netherite_nugget`);
  //Cyclic -> ATO
  REP(`cyclic:copper_nugget`, `alltheores:copper_nugget`);

  //Create powdered/dust obsidian <- Mekanism, Electrodynamics
  REP(`mekanism:dust_obsidian`, `create:powdered_obsidian`);
  // REP(`electrodynamics:dustobsidian`, `create:powdered_obsidian`);
  REP(`ftbic:obsidian_dust`, `create:powdered_obsidian`);

  // ---------- Create Section End ---------- \\

  // ---------- Basic Nether & End Ores Section Begin ---------- \\

  //Basic Nether Ores -> ATO
  atoIngots.forEach((metal) => {
    REP(`bno:${metal}_ingot`, `alltheores:${metal}_ingot`);
  });
  atoNuggets.forEach((metal) => {
    REP(`bno:${metal}_nugget`, `alltheores:${metal}_nugget`);
  });
  atoRaw.forEach((metal) => {
    REP(`bno:raw_${metal}`, `alltheores:raw_${metal}`);
  });

  //Basic End Ores -> ATO
  atoIngots.forEach((metal) => {
    REP(`beo:${metal}_ingot`, `alltheores:${metal}_ingot`);
  });
  atoNuggets.forEach((metal) => {
    REP(`beo:${metal}_nugget`, `alltheores:${metal}_nugget`);
  });
  atoRaw.forEach((metal) => {
    REP(`beo:raw_${metal}`, `alltheores:raw_${metal}`);
  });

  // ---------- Basic Nether & End Ores Section End ---------- \\

  // ---------- Silent Gear Section Begin ---------- \\

  REP(`silentgear:iron_rod`, `alltheores:iron_rod`);

  // ---------- Silent Gear Section End ---------- \\

  // ---------- Creative Wireless Transimtter Section Begin ---------- \\

  event.remove({ id: `creativewirelesstransmitter:creative_wireless_transmitter` });
  event.shaped(`creativewirelesstransmitter:creative_wireless_transmitter`, ["WGW", "GEG", "WCW"], {

    W: `refinedstorage:wireless_transmitter`,
    G: `forbidden_arcanus:dark_nether_star`,
    E: `minecraft:elytra`,
    C: `mysticalagradditions:nitro_crystal_crux`

  }
  );

  // ---------- Creative Wireless Transimtter Section End ---------- \\

  // ---------- Refined Storage & Co. Section Begin ---------- \\

  [`exporter`, `importer`, `constructor`, `destructor`, `disk_manipulator`, `requester`].forEach((type) => {
    event.remove({ id: `cabletiers:creative_${type}` });
  });

  modifyShaped(event, `cabletiers:elite_exporter`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/iron',
    P: 'extrastorage:neural_processor',
    E: 'refinedstorage:exporter'
  })
  modifyShaped(event, `cabletiers:ultra_exporter`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    E: 'cabletiers:elite_exporter'
  })
  modifyShaped(event, `cabletiers:elite_importer`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/iron',
    P: 'extrastorage:neural_processor',
    E: 'refinedstorage:importer'
  })
  modifyShaped(event, `cabletiers:ultra_importer`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    E: 'cabletiers:elite_importer'
  })
  modifyShaped(event, `cabletiers:elite_constructor`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/iron',
    P: 'extrastorage:neural_processor',
    E: 'refinedstorage:constructor'
  })
  modifyShaped(event, `cabletiers:ultra_constructor`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    E: 'cabletiers:elite_constructor'
  })
  modifyShaped(event, `cabletiers:elite_destructor`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/iron',
    P: 'extrastorage:neural_processor',
    E: 'refinedstorage:destructor'
  })
  modifyShaped(event, `cabletiers:ultra_destructor`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    E: 'cabletiers:elite_destructor'
  })
  modifyShaped(event, `cabletiers:elite_disk_manipulator`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/iron',
    P: 'extrastorage:neural_processor',
    E: 'refinedstorage:disk_manipulator'
  })
  modifyShaped(event, `cabletiers:ultra_disk_manipulator`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    E: 'cabletiers:elite_disk_manipulator'
  })
  modifyShaped(event, `cabletiers:elite_requester`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/iron',
    P: 'extrastorage:neural_processor',
    E: 'rsrequestify:requester'
  })
  modifyShaped(event, `cabletiers:ultra_requester`, 1, ['BEB', 'EPE', 'BEB'], {
    B: '#forge:storage_blocks/diamond',
    P: 'extrastorage:neural_processor',
    E: 'cabletiers:elite_requester'
  })
  

  // ---------- Refined Storage & Co. Section End ---------- \\

  // ---------- Powah! (Rearchitected) Section Begin ---------- \\
  
  energize(event, ['refinedstorage:wireless_grid', 'forbidden_arcanus:dark_nether_star', 'creativewirelesstransmitter:creative_wireless_transmitter', 'create:precision_mechanism'], 'refinedstorage:creative_wireless_grid', '2147483647')
  energize(event, ['refinedstorage:wireless_fluid_grid', 'forbidden_arcanus:dark_nether_star', 'creativewirelesstransmitter:creative_wireless_transmitter', 'create:precision_mechanism'], 'refinedstorage:creative_wireless_fluid_grid', '2147483647')
  energize(event, ['refinedstorage:wireless_crafting_monitor', 'forbidden_arcanus:dark_nether_star', 'creativewirelesstransmitter:creative_wireless_transmitter', 'create:precision_mechanism'], 'refinedstorage:creative_wireless_crafting_monitor', '2147483647')
  energize(event, ['refinedstorageaddons:wireless_crafting_grid', 'forbidden_arcanus:dark_nether_star', 'creativewirelesstransmitter:creative_wireless_transmitter', 'create:precision_mechanism'], 'refinedstorageaddons:creative_wireless_crafting_grid', '2147483647')
  energize(event, ['refinedstorage:portable_grid', 'forbidden_arcanus:dark_nether_star', 'creativewirelesstransmitter:creative_wireless_transmitter', 'create:precision_mechanism'], 'refinedstorage:creative_portable_grid', '2147483647')

  let powahcaps = [`blazing`, `niotic`, `spirited`, `nitro`];
  powahcaps.forEach(type => {

    event.remove({ id: `powah:crafting/capacitor_${type}` });

  });

  energize(event, ['powah:capacitor_hardened', 'powah:dielectric_paste', 'powah:crystal_blazing', 'powah:crystal_blazing', 'powah:crystal_blazing', 'powah:crystal_blazing'], 'powah:capacitor_blazing', '100000')
  energize(event, ['powah:capacitor_blazing', 'powah:dielectric_paste', 'powah:crystal_niotic', 'powah:crystal_niotic', 'powah:crystal_niotic', 'powah:crystal_niotic'], 'powah:capacitor_niotic', '200000')
  energize(event, ['powah:capacitor_niotic', 'powah:dielectric_paste', 'powah:crystal_spirited', 'powah:crystal_spirited', 'powah:crystal_spirited', 'powah:crystal_spirited'], 'powah:capacitor_spirited', '350000')
  energize(event, ['powah:capacitor_spirited', 'powah:dielectric_paste', 'powah:crystal_nitro', 'powah:crystal_nitro', 'powah:crystal_nitro', 'powah:crystal_nitro'], 'powah:capacitor_nitro', '800000')

  event.remove({ id: `powah:energizing/blazing_crystal_2`});
  event.remove({ id: `powah:energizing/blazing_crystal`});
  event.remove({ id: `powah:energizing/niotic_crystal`});
  event.remove({ id: `powah:energizing/spirited_crystal`});
  energize(event, ['minecraft:blaze_rod', 'cyclic:gem_amber'], 'powah:crystal_blazing', '120000')
  energize(event, ['minecraft:diamond', 'cyclic:gem_obsidian'], 'powah:crystal_niotic', '350000')
  energize(event, ['minecraft:emerald', 'cyclic:gem_obsidian'], 'powah:crystal_spirited', '1500000')
  
  event.remove({ id: `mysticalagriculture:essence/powah/energized_steel` });
  event.remove({ id: `mysticalagriculture:essence/powah/blazing_crystal`});
  event.remove({ id: `mysticalagriculture:essence/powah/niotic_crystal`});
  event.remove({ id: `mysticalagriculture:essence/powah/spirited_crystal`});
  event.remove({ id: `mysticalagriculture:essence/powah/nitro_crystal`});
  event.remove({ id: `mysticalagriculture:seed/infusion/energized_steel`});
  event.remove({ id: `mysticalagriculture:seed/infusion/blazing_crystal`});
  event.remove({ id: `mysticalagriculture:seed/infusion/niotic_crystal`});
  event.remove({ id: `mysticalagriculture:seed/infusion/spirited_crystal`});
  event.remove({ id: `mysticalagriculture:seed/infusion/nitro_crystal`});
  event.remove({ id: `mysticalagriculture:seed/reprocessor/energized_steel`});
  event.remove({ id: `mysticalagriculture:seed/reprocessor/blazing_crystal`});
  event.remove({ id: `mysticalagriculture:seed/reprocessor/niotic_crystal`});
  event.remove({ id: `mysticalagriculture:seed/reprocessor/spirited_crystal`});
  event.remove({ id: `mysticalagriculture:seed/reprocessor/nitro_crystal`});
  
  // ---------- Powah! (Rearchitected) Section End ---------- \\

  // ---------- FTB Industrial Contraptions Section Start ---------- \\

  atoIngots.forEach(metal => {
    REP(`ftbic:${metal}_ore`, `alltheores:${metal}_ore`);
    REP(`ftbic:deepslate_${metal}_ore`, `alltheores:${metal}_slate_ore`);
    REP(`ftbic:${metal}_ingot`, `alltheores:${metal}_ingot`);
  }
  );

  atoDusts.forEach(metal => {
    REP(`ftbic:${metal}_dust`, `allthedusts:${metal}_dust`);
  }
  );

  atoNuggets.forEach(metal => {
    REP(`ftbic:${metal}_nugget`, `allthenuggets:${metal}_nugget`);
  }
  );

  atoRods.forEach(metal => {
    REP(`ftbic:${metal}_rod`, `alltherods:${metal}_rod`);
  }
  );

  atoGears.forEach(metal => {
    REP(`ftbic:${metal}_gear`, `allthegears:${metal}_gear`);
  }
  );
  
  atoRaw.forEach(metal => {
    REP(`ftbic:${metal}_chunk`, `alltheores:raw_${metal}`);
  }
  );

  atoPlates.forEach(plate => {

    REP(`ftbic:${plate}_plate`, `alltheores:${plate}_plate`);
  }
  );

  event.remove({ id: `ftbic:shaped/mixed_metal_blend_1`});
  event.remove({ id: `ftbic:shaped/mixed_metal_blend_2`});
  event.remove({ id: `ftbic:shaped/mixed_metal_blend_3`});
  event.shaped(`3x ftbic:mixed_metal_blend`, [`EEE`, `III`, `BBB`], {
    E: `#forge:dusts/enderium`,
    I: `#forge:dusts/iridium`,
    B: `#forge:dusts/bronze`
    });

  event.remove({ id: `ftbic:shaped/enderium_ingot`});
  event.shaped(`2x alltheores:enderium_ingot`, [`LLL`, `FDF`, `EFE`], {
    L: `#forge:dusts/lead`,
    F: `minecraft:fire_charge`,
    D: `#forge:dusts/diamond`,
    E: `#forge:dusts/ender`
  })

  // ---------- FTB Industrial Contraptions Section End ---------- \\

  // ---------- Industrial Foregoing Section Start ---------- \\

    event.remove({ id: `industrialforegoing:dissolution_chamber/infinity_drill`})
    event.remove({ id: `industrialforegoing:disenchant_infinity_drill`})
    event.remove({ id: `industrialforegoing:dissolution_chamber/infinity_saw`})
    event.remove({ id: `industrialforegoing:disenchant_infinity_saw`})
    event.remove({ id: `industrialforegoing:dissolution_chamber/infinity_hammer`})
    event.remove({ id: `industrialforegoing:disenchant_infinity_hammer`})
    event.remove({ id: `industrialforegoing:dissolution_chamber/infinity_trident`})
    event.remove({ id: `industrialforegoing:disenchant_infinity_trident`})
    event.remove({ id: `industrialforegoing:dissolution_chamber/infinity_backpack`})
    event.remove({ id: `industrialforegoing:disenchant_infinity_backpack`})
    event.remove({ id: `industrialforegoing:dissolution_chamber/infinity_launcher`})
    event.remove({ id: `industrialforegoing:disenchant_infinity_launcher`})
    event.remove({ id: `industrialforegoing:dissolution_chamber/infinity_nuke`})
    event.remove({ id: `industrialforegoing:disenchant_infinity_nuke`})

    [`iron`, `gold`, `diamond`].forEach(metal => {
      REP(`industrialforegoing:${metal}_gear`, `allthegears:${metal}_gear`);
    });

  // ---------- Industrial Foregoing Section End ---------- \\

  // ---------- Galosphere Section Start ---------- \\

    REP(`galosphere:raw_silver`, `alltheores:raw_silver`);
    REP(`galosphere:silver_nugget`, `allthenuggets:silver_nugget`);

  // ---------- Galosphere Section End ---------- \\

  // ---------- Mystical World Section Start ---------- \\

    [`tin`, `lead`, `silver`].forEach(metal => {
      REP(`mysticalworld:${metal}_ingot`, `alltheores:${metal}_ingot`);
    }
    );
    REP(`mysticalworld:sapphire`, `alltheores:sapphire`);
    atoNuggets.forEach(metal => {
      REP(`mysticalworld:${metal}_nugget`, `allthenuggets:${metal}_nugget`);
    }
    );
    atoDusts.forEach(metal => {
      REP(`mysticalworld:${metal}_dust`, `allthedusts:${metal}_dust`);
    }
    );

    event.remove({ id: `jaopca:mekanism.dust_to_material.sapphire`});
    event
    .custom({
      type: `mekanism:enriching`,
        input: {
            item: `alltheores:sapphire_dust`,
        },
      output: {
        item: `alltheores:sapphire`,
      },
    })

  // ---------- Mystical World Section End ---------- \\

  /*
  ===== FIX/REMOVE BARRIER BLOCK RECIPES =====
  */
  //Cyclic stuff
  event.remove({ id: `cyclic:screen`});
  event.shaped(`cyclic:screen`, ["CAC", "RGB", "III"], {
  
    C: `alltheores:copper_nugget`,
    A: `minecraft:anvil`,
    R: `#forge:dyes/red`,
    G: `#forge:dyes/green`,
    B: `#forge:dyes/blue`,
    I: `minecraft:iron_bars`
  
  });

  event.remove({ id: `cyclic:soundproofing`});
  event.shaped(`cyclic:soundproofing`, [" T ", "TOT", " T "], {

    T: `minecraft:white_terracotta`,
    O: `#forge:dyes/orange`

  });

  //Mysticalagriculture stuff
  //tungsten, chrome, rubber, apatite, titanium, mithril
  event.remove({ id: `mysticalagriculture:seed/infusion/tungsten`});
  event.remove({ id: `mysticalagriculture:seed/infusion/chrome`});
  event.remove({ id: `mysticalagriculture:seed/infusion/rubber`});
  event.remove({ id: `mysticalagriculture:seed/infusion/apatite`});
  event.remove({ id: `mysticalagriculture:seed/infusion/titanium`});
  event.remove({ id: `mysticalagriculture:seed/infusion/mithril`});

  //Create stuff
  //rubby
  event.remove({ id: `allthecompatibility:create/crusher/ruby_block`});
  //sapphire
  event.remove({ id: `allthecompatibility:create/crusher/sapphire_block`});
  //peridot
  event.remove({ id: `allthecompatibility:create/crusher/peridot_block`});

});

console.info('Server-script Unify.js reloaded successfully!');