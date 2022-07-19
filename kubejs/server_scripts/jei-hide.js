//Made by: Lady Lexxie, Pie (Jerry Rig Everything) (aka ILIKEPIEFOO2)

// You only need to generate this when recipes
// are changed or new mods are added.
// Keeping this on after every reload
// will just increase load times.
const CREATE_NEW_JEI_BLACKLIST = false


onEvent('recipes', e => {
  if (CREATE_NEW_JEI_BLACKLIST){
    let removeList = []
    Ingredient.of(/.*/).getItemIds().forEach(stack => {
      if(e.countRecipes({ or: [{ output: stack }, { input: stack }] }) == 0) removeList.push(stack)
    })
    JsonIO.write('kubejs/client_scripts/removal.json', { list: removeList })
  }
})