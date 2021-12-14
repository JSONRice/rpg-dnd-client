const spellUrl = "https://www.dnd5eapi.co/api/spells";
const heroku = "https://rpg-dnd-server.herokuapp.com"

export const apiUtils = {
  grabSpell: (spell = "acid-arrow") => {
    return fetch(`${spellUrl}/${spell}`)
      .then(res => res.json())
  },

  authenticate: (username, password) => {
    const utfUsername = encodeURIComponent(username)
    const utfPassword = encodeURIComponent(password)
    return fetch(`${heroku}/login?username=${utfUsername}&password=${utfPassword}`, {
      mode: 'no-cors'
    })
  }
}
