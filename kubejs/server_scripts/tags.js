//------- LIST START -------\\

let vanillaMetals = ['iron', 'gold', 'copper', 'emerald', 'diamond', 'netherite'];

// ATO Metals \\
let atoIngots = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'iridium'];
let atoNuggets = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel', 'steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'iridium', 'copper'];
let atoDusts = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iron', 'copper', 'gold', 'diamond', 'netherite', 'bronze', 'constantan', 'electrum', 'enderium', 'lumium', 'signalum', 'steel', 'invar', 'brass', 'iridium', 'ruby', 'peridot', 'sapphire'];
let atoDirtyDusts = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc'];
let atoRaw = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'iridium'];
let atoShardCrystalClump = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc'];
let atoRods = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'steel', 'invar', 'electrum', 'bronze', 'iron', 'gold', 'diamond', 'copper', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'iridium'];
let atoGears = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'steel', 'invar', 'electrum', 'bronze', 'iron', 'gold', 'diamond', 'copper', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'iridium'];
let atoPlates = ['aluminum', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'steel', 'invar', 'electrum', 'bronze', 'iron', 'gold', 'diamond', 'copper', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'iridium'];
let atoMystic = ['aluminum', 'brass', 'bronze', 'constantan', 'electrum', 'invar', 'iridium', 'lead', 'nickel', 'platinum', 'silver', 'steel', 'tin', 'uranium', 'zinc'];
let circuits = ['basic', 'advanced', 'elite', 'ultimate'];

//Dorian is boiah gay
let dorianIngots = ['copper', 'tin', 'lead', 'silver', 'nickel', 'steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass', 'iridium'];

// ... Metals \\

//------- LIST END -------\\ 

//remove tags
onEvent('tags.items', event => {

    //Remove Tags from Mekanism
    atoIngots.forEach(metal => {
        event.removeAllTagsFrom(`mekanism:ingot_` + metal);
    })
    atoNuggets.forEach(metal => {
        event.removeAllTagsFrom(`mekanism:nugget_` + metal);
    })
    atoRaw.forEach(metal => {
        event.removeAllTagsFrom(`mekanism:raw_` + metal);
    })
    atoDusts.forEach(metal => {
        event.removeAllTagsFrom(`mekanism:dust_` + metal);
    })
    atoDirtyDusts.forEach(metal => {
        event.removeAllTagsFrom(`mekanism:dirty_dust_` + metal);
    })
    atoShardCrystalClump.forEach(metal => {
        event.removeAllTagsFrom(`mekanism:shard_` + metal);
        event.removeAllTagsFrom(`mekanism:crystal_` + metal);
        event.removeAllTagsFrom(`mekanism:clump_` + metal);
    })

    //add tags to atoDirtyDust
    atoDirtyDusts.forEach(metal => {
        event.add(`mekanism:dirty_dusts/${metal}`, `alltheores:dirty_${metal}_dust`);
    })
    //add tags to atoDust
    event.add(`forge:dusts/netherite`, `alltheores:netherite_dust`);
    //add tags to atoShardCrystalClump
    atoShardCrystalClump.forEach(metal => {
        event.add(`mekanism:shards/${metal}`, `alltheores:${metal}_shard`);
        event.add(`mekanism:crystals/${metal}`, `alltheores:${metal}_crystal`);
        event.add(`mekanism:clumps/${metal}`, `alltheores:${metal}_clump`);
    })


    //Add Andesite plates and nuggets tags to andesite alloy
    event.add(`forge:nuggets/andesite`, `create:andesite_alloy`)
    event.add(`forge:plates/andesite`, `create:andesite_alloy`)

    //Remove Create, Alloyed & createaddition Tags
    event.removeAllTagsFrom(`create:zinc_ingot`);
    event.removeAllTagsFrom(`create:brass_ingot`);
    event.removeAllTagsFrom(`create:brass_nugget`);
    event.removeAllTagsFrom(`create:zinc_nugget`);
    event.removeAllTagsFrom(`create:copper_nugget`);
    atoDusts.forEach(metal => {
        event.removeAllTagsFrom(`create:crushed_${metal}_ore`);
    });
    atoPlates.forEach(metal => {
        event.removeAllTagsFrom(`create:${metal}_sheet`);
    });
    event.removeAllTagsFrom(`create:golden_sheet`);
    event.removeAllTagsFrom(`create:raw_zinc`);


    event.removeAllTagsFrom(`alloyed:bronze_ingot`);
    event.removeAllTagsFrom(`alloyed:steel_ingot`);
    event.removeAllTagsFrom(`alloyed:bronze_sheet`);
    event.removeAllTagsFrom(`alloyed:steel_sheet`);

    event.removeAllTagsFrom(`createaddition:zinc_sheet`);
    ['copper', 'iron', 'gold', 'brass'].forEach(metal => {
        event.removeAllTagsFrom(`createaddition:${metal}_rod`);
    })
    event.removeAllTagsFrom(`createaddition:diamond_grit`);

    event.removeAllTagsFrom(`createdeco:zinc_sheet`);


    //remove cyclic netherite nugget tags
    event.removeAllTagsFrom(`cyclic:netherite_nugget`);
    event.removeAllTagsFrom(`cyclic:copper_nugget`);
    //Remove Obsidian Dust tags from Mekanism and add them to Create
    event.removeAllTagsFrom(`mekanism:dust_obsidian`);
    event.add(`mekanism:dust_obsidian`, `create:powdered_obsidian`);

    //remove tags from Immersiveengineering
    atoIngots.forEach(metal => {
        event.removeAllTagsFrom(`immersiveengineering:ingot_${metal}`);
    });
    atoNuggets.forEach(metal => {
        event.removeAllTagsFrom(`immersiveengineering:nugget_${metal}`);
    });
    atoRods.forEach(metal => {
        event.removeAllTagsFrom(`immersiveengineering:stick_${metal}`);
    });
    atoPlates.forEach(metal => {
        event.removeAllTagsFrom(`immersiveengineering:plate_${metal}`);
    });
    atoDusts.forEach(metal => {
        event.removeAllTagsFrom(`immersiveengineering:dust_${metal}`);
    });
    atoRaw.forEach(metal => {
        event.removeAllTagsFrom(`immersiveengineering:raw_${metal}`);
    });
    // event.removeAllTagsFrom(`immersiveengineering:dust_saltpeter`);
    event.removeAllTagsFrom(`immersiveengineering:dust_sulfur`);
    event.removeAllTagsFrom(`immersiveengineering:dust_wood`);

    //remove tags from Basic nether ores & Basic End Ores

    //Basic Nether Ores Tags
    atoIngots.forEach(metal => {
        event.removeAllTagsFrom(`bno:${metal}_ingot`);
    })
    atoNuggets.forEach(metal => {
        event.removeAllTagsFrom(`bno:${metal}_nugget`);
    });
    atoRaw.forEach(metal => {
        event.removeAllTagsFrom(`bno:raw_${metal}`);
    });

    //Basic End Ores Tags
    atoIngots.forEach(metal => {
        event.removeAllTagsFrom(`beo:${metal}_ingot`);
    });
    atoNuggets.forEach(metal => {
        event.removeAllTagsFrom(`beo:${metal}_nugget`);
    });
    atoRaw.forEach(metal => {
        event.removeAllTagsFrom(`beo:raw_${metal}`);
    });

    //Biggerreactors Tags
    event.removeAllTagsFrom(`biggerreactors:uranium_ingot`);

    //Silent gear tags
    event.removeAllTagsFrom(`silentgear:iron_rod`);

    //Mystical Agriculture Tags
    event.add(`mysticalagriculture:tier0`, `mysticalagriculture:basic_reprocessor`)
	event.add(`mysticalagriculture:tier1`, `mysticalagriculture:inferium_reprocessor`)
	event.add(`mysticalagriculture:tier2`, `mysticalagriculture:prudentium_reprocessor`)
	event.add(`mysticalagriculture:tier3`, `mysticalagriculture:tertium_reprocessor`)
	event.add(`mysticalagriculture:tier4`, `mysticalagriculture:imperium_reprocessor`)
	event.add(`mysticalagriculture:tier5`, `mysticalagriculture:supremium_reprocessor`)
	event.add(`mysticalagriculture:tier6`, `mysticaladaptations:insanium_reprocessor`)


    //ftbic tags
    atoIngots.forEach(metal => {
        event.removeAllTagsFrom(`ftbic:${metal}_ingot`);
    }
    );
    atoDusts.forEach(metal => {
        event.removeAllTagsFrom(`ftbic:${metal}_dust`);
    }
    );
    event.removeAllTagsFrom(`ftbic:coal_dust`);
    event.removeAllTagsFrom(`ftbic:charcoal_dust`);
    event.removeAllTagsFrom(`ftbic:obsidian_dust`);
    atoPlates.forEach(metal => {
        event.removeAllTagsFrom(`ftbic:${metal}_plate`);
    }
    );
    atoRaw.forEach(metal => {
        event.removeAllTagsFrom(`ftbic:${metal}_chunk`);
    }
    );
    atoNuggets.forEach(metal => {
        event.removeAllTagsFrom(`ftbic:${metal}_nugget`);
    }
    );
    atoRods.forEach(metal => {
        event.removeAllTagsFrom(`ftbic:${metal}_rod`);
    }
    );
    atoGears.forEach(metal => {
        event.removeAllTagsFrom(`ftbic:${metal}_gear`);
    }
    );

    event.removeAllTagsFrom(`mysticalworld:sapphire`);
})

console.info('Server-script Tags.js reloaded successfully!');