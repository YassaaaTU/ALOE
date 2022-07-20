  onEvent('jei.remove.categories', e => {
   
    e.remove(`industrialforegoing:dissolution_chamber/infinity_drill`);
    e.remove(`industrialforegoing:disenchant_infinity_drill`);
    e.remove(`industrialforegoing:dissolution_chamber/infinity_saw`);
    e.remove(`industrialforegoing:disenchant_infinity_saw`);
    e.remove(`industrialforegoing:dissolution_chamber/infinity_hammer`);
    e.remove(`industrialforegoing:disenchant_infinity_hammer`);
    e.remove(`industrialforegoing:dissolution_chamber/infinity_trident`);
    e.remove(`industrialforegoing:disenchant_infinity_trident`);
    e.remove(`industrialforegoing:dissolution_chamber/infinity_backpack`);
    e.remove(`industrialforegoing:disenchant_infinity_backpack`);
    e.remove(`industrialforegoing:dissolution_chamber/infinity_launcher`);
    e.remove(`industrialforegoing:disenchant_infinity_launcher`);
    e.remove(`industrialforegoing:dissolution_chamber/infinity_nuke`);
    e.remove(`industrialforegoing:disenchant_infinity_nuke`);

  })


//Made By: Lady Lexxie, Pie (Jerry Rig Everything) (aka ILIKEPIEFOO2)

  onEvent('jei.hide.items', e => {
    let json = JsonIO.read('kubejs/client_scripts/removal.json');
    e.hide(json.list);

    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"COMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"UNCOMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"RARE",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"EPIC",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"LEGENDARY",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_drill', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}'));

    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"COMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"UNCOMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"RARE",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"EPIC",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"LEGENDARY",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_saw', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}'));

    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"COMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"UNCOMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"RARE",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"EPIC",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"LEGENDARY",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_hammer', '{Beheading:0,CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}'));

    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"POOR",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"COMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"UNCOMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"RARE",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"EPIC",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"LEGENDARY",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"ARTIFACT",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_trident', '{CanCharge:1b,Channeling:0b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"ARTIFACT",Special:1b}'));

    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:0L,Selected:"POOR",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:4000000L,Selected:"COMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:16000000L,Selected:"UNCOMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:80000000L,Selected:"RARE",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:480000000L,Selected:"EPIC",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:3360000000L,Selected:"LEGENDARY",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:9223372036854775807L,Selected:"ARTIFACT",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_backpack', '{CanCharge:1b,Energy:9223372036854775807L,Selected:"ARTIFACT",Special:1b}'));

    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"POOR",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"COMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"UNCOMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"RARE",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"EPIC",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"LEGENDARY",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Plunger:0,Selected:"ARTIFACT",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_launcher', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Plunger:0,Selected:"ARTIFACT",Special:1b}'));

    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:4000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"COMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:16000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"UNCOMMON",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:80000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"RARE",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:480000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"EPIC",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:3360000000L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"LEGENDARY",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'));
    e.hide(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}'));
  })

  // onEvent('jei.hide.categories', e => {
    
  //   e.hide(`industrialforegoing:infinity_drill`);
  //   e.hide(`industrialforegoing:disenchant_infinity_drill`);
  //   e.hide(`industrialforegoing:infinity_saw`);
  //   e.hide(`industrialforegoing:disenchant_infinity_saw`);
  //   e.hide(`industrialforegoing:infinity_hammer`);
  //   e.hide(`industrialforegoing:disenchant_infinity_hammer`);
  //   e.hide(`industrialforegoing:infinity_trident`);
  //   e.hide(`industrialforegoing:disenchant_infinity_trident`);
  //   e.hide(`industrialforegoing:infinity_backpack`);
  //   e.hide(`industrialforegoing:disenchant_infinity_backpack`);
  //   e.hide(`industrialforegoing:infinity_launcher`);
  //   e.hide(`industrialforegoing:disenchant_infinity_launcher`);
  //   e.hide(`industrialforegoing:infinity_nuke`);
  //   e.hide(`industrialforegoing:disenchant_infinity_nuke`);

  // })