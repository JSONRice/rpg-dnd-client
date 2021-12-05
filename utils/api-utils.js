const spellUrl = "https://www.dnd5eapi.co/api/spells/";

export const apiUtils = {
  grabSpell: (spell = "acid-arrow") => {
    return fetch(`${spellUrl}${spell}`)
      .then(res => res.json())
  }
}
