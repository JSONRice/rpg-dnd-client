/**
 * Parse the data out of th raw field
 * @param field
 * @param key can be raw or adj (adjusted) - default is raw
 * @returns {*}
 */
const parse = (field, key = "raw") => field && field[key]["$numberInt"]

const parseNum = (field, key = "$numberInt") => field && parseInt(field[key])

const formatSkills = rawSkills => {
  return rawSkills.map(({name, stat, passive, description}) => {
    return {
      name,
      stat: parse(stat),
      passive: passive["$numberInt"],
      description
    }
  })
}

const formatSpells = rawSpells => {
  const uniqueLvs = new Set()
  rawSpells.forEach(({level}) => {
    uniqueLvs.add(parseNum(level))
  })

  // Init each element with an empty array
  let levels = new Array(uniqueLvs.size)
    .fill(0)
    .map(() => []);

  let results = [...levels]

  // The levels are an array-of-arrays (2D array). Each spell level is stored at the element corresponding to it's level.
  // Spell levels start at level (index) 0.
  levels.forEach((spellsArray, i) => {
    let parsedSpells = []

    rawSpells
      .filter(({level}) => i === parseNum(level))
      .forEach(({name, level, range, type, description}) => {
        parsedSpells.push({
          name,
          type,
          level: parseNum(level),
          range: parseNum(range),
          description
        })
      })

    results[i] = [...parsedSpells]
  })

  return results
}

export const characterUtils = {
  parseCharacter: character => {
    if (character) {
      const {
        name,
        race,
        speed,
        armorClass,
        hitpoint,
        abilityMods: abilities,
        specials,
        spells,
        skills
      } = character

      let races = ''
      if (race) {
        races = Object.keys(race)
          .reduce((combined, race) => {
            return combined + ", " + race
          })
      }

      return {
        armorClass: parse(armorClass),
        hitPoints: parse(hitpoint),
        name,
        races,
        speed: parse(speed),
        abilities: abilities.map(({name, stat}) => {
          return {
            name,
            stat: parse(stat)
          }
        }),
        specials,
        spellLevels: formatSpells(spells),
        skills: formatSkills(skills)
      }
    }
  }
}
