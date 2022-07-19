//Made By: Lady Lexxie, Pie (Jerry Rig Everything) (aka ILIKEPIEFOO2)

onEvent('jei.hide.items', e => {
    let json = JsonIO.read('kubejs/client_scripts/removal.json')
    e.hide(json.list)
  })