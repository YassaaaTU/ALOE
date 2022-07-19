// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')

	event.hide('potionsmaster:unobtainium_powder')
	event.hide('potionsmaster:calcinatedunobtainium_powder')
	event.hide(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"potionsmaster:unobtainium_sight"}'))
	event.hide(Item.of('minecraft:potion', '{Potion:"potionsmaster:unobtainium_sight"}'))
	event.hide(Item.of('minecraft:splash_potion', '{Potion:"potionsmaster:unobtainium_sight"}'))
	event.hide(Item.of('minecraft:lingering_potion', '{Potion:"potionsmaster:unobtainium_sight"}'))
	event.hide(Item.of('minecraft:tipped_arrow', '{Potion:"potionsmaster:unobtainium_sight"}'))
	event.hide('potionsmaster:allthemodium_powder')
	event.hide('potionsmaster:calcinatedallthemodium_powder')
	event.hide(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"potionsmaster:allthemodium_sight"}'))
	event.hide(Item.of('immersiveengineering:potion_bucket', '{Potion:"potionsmaster:allthemodium_sight"}'))
	event.hide(Item.of('minecraft:potion', '{Potion:"potionsmaster:allthemodium_sight"}'))
	event.hide(Item.of('minecraft:splash_potion', '{Potion:"potionsmaster:allthemodium_sight"}'))
	event.hide(Item.of('minecraft:lingering_potion', '{Potion:"potionsmaster:allthemodium_sight"}'))
	event.hide(Item.of('minecraft:tipped_arrow', '{Potion:"potionsmaster:allthemodium_sight"}'))
	event.hide('potionsmaster:vibranium_powder')
	event.hide('potionsmaster:calcinatedvibranium_powder')
	event.hide(Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"potionsmaster:vibranium_sight"}'))
	event.hide(Item.of('minecraft:potion', '{Potion:"potionsmaster:vibranium_sight"}'))
	event.hide(Item.of('minecraft:splash_potion', '{Potion:"potionsmaster:vibranium_sight"}'))
	event.hide(Item.of('minecraft:lingering_potion', '{Potion:"potionsmaster:vibranium_sight"}'))
	event.hide(Item.of('minecraft:tipped_arrow', '{Potion:"potionsmaster:vibranium_sight"}'))

})