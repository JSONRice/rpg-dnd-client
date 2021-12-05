import styled from '@emotion/styled'
import React from 'react'
import { DndAccordion } from './DdnAccordion'
import {CharacterStats} from '../CharacterStats'
import {SpecialStats} from '../SpecialStats'
import {characterUtils} from '../../utils'
import {Divider} from '@chakra-ui/react'
import {SkillStats} from '../SkillStats'
import {SpellStats} from '../SpellStats'

const Label = styled.span`
  font-weight: bold;
`

export default {
  title: "DndAccordion",
  component: DndAccordion
};

const Title = ({children}) => (
  <div>
    <h5>{children}</h5>
  </div>
)

export const DndAccordionStorybook = () => {
  const parsedCharacter = characterUtils.parseCharacter(character)
  const {name, races, skills} = parsedCharacter

  return (
    <>
      <DndAccordion title={<Title>{name}</Title>}>
        {races}
        <Divider/>
        <CharacterStats character={parsedCharacter}/>
        <Divider/>
      </DndAccordion>
      <DndAccordion title={<Title>Skills</Title>}>
        <SkillStats skills={skills}/>
      </DndAccordion>
      <DndAccordion title={<Title>Specials</Title>}>
        <SpecialStats character={parsedCharacter}/>
      </DndAccordion>
      <DndAccordion title={<Title>Spells</Title>}>
        <SpellStats character={parsedCharacter}/>
      </DndAccordion>
    </>
  )
}

// TODO: fetch this from the Java server API
const character = {
  "_id": {
    "$oid": "6198657827fb35ffe5e2ce68"
  },
  "name": "Rollo",
  "active": true,
  "role": "pc",
  "backStory": "A lonely man on a lonely road looking for some friendly faces",
  "player": "Russell Longo",
  "gender": "male",
  "age": {
    "raw": {
      "$numberInt": "30"
    },
    "adj": {
      "$numberInt": "30"
    }
  },
  "race": {
    "Elf": {
      "$numberDouble": "0.5"
    },
    "Human": {
      "$numberDouble": "0.5"
    }
  },
  "alignment": "Neutral Good",
  "hair": "brown",
  "eyes": "gray",
  "skin": "pale",
  "height": {
    "raw": {
      "$numberInt": "70"
    },
    "adj": {
      "$numberInt": "70"
    }
  },
  "weight": {
    "raw": {
      "$numberInt": "165"
    },
    "adj": {
      "$numberInt": "165"
    }
  },
  "size": {
    "raw": {
      "$numberInt": "5"
    },
    "adj": {
      "$numberInt": "5"
    }
  },
  "reach": {
    "$numberInt": "5"
  },
  "hitpoint": {
    "raw": {
      "$numberInt": "6"
    },
    "adj": {
      "$numberInt": "6"
    }
  },
  "damage": {
    "$numberInt": "0"
  },
  "diety": [
    "Eldath"
  ],
  "experience": {
    "raw": {
      "$numberInt": "5"
    },
    "adj": {
      "$numberInt": "5"
    }
  },
  "classes": [
    {
      "level": {
        "$numberInt": "1"
      },
      "name": "Wizard",
      "spells": "Spellbook",
      "castLevel": {
        "$numberInt": "1"
      },
      "spellAttack": {
        "$numberInt": "5"
      },
      "spellSave": {
        "$numberInt": "13"
      },
      "castSource": "Arcane",
      "spellAbility": "Intelligence",
      "classHitDice": "1d6"
    }
  ],
  "senses": [],
  "auras": [],
  "purse": {
    "platinum": {
      "$numberInt": "0"
    },
    "gold": {
      "$numberInt": "110"
    },
    "electrum": {
      "$numberInt": "0"
    },
    "silver": {
      "$numberInt": "20"
    },
    "copper": {
      "$numberInt": "0"
    }
  },
  "languages": [
    {
      "name": "Elvish",
      "type": "language",
      "stat": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      }
    },
    {
      "name": "Common",
      "type": "language",
      "stat": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      }
    },
    {
      "name": "Dwarvish",
      "type": "language",
      "stat": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      }
    },
    {
      "name": "Sylvan",
      "type": "language",
      "stat": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      }
    },
    {
      "name": "Goblin",
      "type": "language",
      "stat": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      }
    }
  ],
  "toolProfs": [],
  "weaponProfs": [],
  "armorProfs": [],
  "abilities": [
    {
      "name": "strength",
      "type": "ability",
      "stat": {
        "raw": {
          "$numberInt": "10"
        },
        "adj": {
          "$numberInt": "10"
        }
      }
    },
    {
      "name": "dexterity",
      "type": "ability",
      "stat": {
        "raw": {
          "$numberInt": "14"
        },
        "adj": {
          "$numberInt": "14"
        }
      }
    },
    {
      "name": "constition",
      "type": "ability",
      "stat": {
        "raw": {
          "$numberInt": "13"
        },
        "adj": {
          "$numberInt": "13"
        }
      }
    },
    {
      "name": "intelligence",
      "type": "ability",
      "stat": {
        "raw": {
          "$numberInt": "16"
        },
        "adj": {
          "$numberInt": "16"
        }
      }
    },
    {
      "name": "wisdom",
      "type": "ability",
      "stat": {
        "raw": {
          "$numberInt": "12"
        },
        "adj": {
          "$numberInt": "12"
        }
      }
    },
    {
      "name": "charisma",
      "type": "ability",
      "stat": {
        "raw": {
          "$numberInt": "12"
        },
        "adj": {
          "$numberInt": "12"
        }
      }
    }
  ],
  "abilityMods": [
    {
      "name": "strength",
      "type": "abilityMod",
      "stat": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      }
    },
    {
      "name": "dexterity",
      "type": "abilityMod",
      "stat": {
        "raw": {
          "$numberInt": "2"
        },
        "adj": {
          "$numberInt": "2"
        }
      }
    },
    {
      "name": "constition",
      "type": "abilityMod",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      }
    },
    {
      "name": "intelligence",
      "type": "abilityMod",
      "stat": {
        "raw": {
          "$numberInt": "3"
        },
        "adj": {
          "$numberInt": "3"
        }
      }
    },
    {
      "name": "wisdom",
      "type": "abilityMod",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      }
    },
    {
      "name": "charisma",
      "type": "abilityMod",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      }
    }
  ],
  "skills": [
    {
      "name": "Acrobatics",
      "stat": {
        "raw": {
          "$numberInt": "2"
        },
        "adj": {
          "$numberInt": "2"
        }
      },
      "passive": {
        "$numberInt": "12"
      },
      "description": "Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation, such as when you're trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship's deck. The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips."
    },
    {
      "name": "Animal Handling",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      },
      "passive": {
        "$numberInt": "11"
      },
      "description": "When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver."
    },
    {
      "name": "Arcana",
      "stat": {
        "raw": {
          "$numberInt": "3"
        },
        "adj": {
          "$numberInt": "5"
        }
      },
      "passive": {
        "$numberInt": "15"
      },
      "description": "Your Intelligence (Arcana) check measures your ability to recall lore about spells, magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes."
    },
    {
      "name": "Athletics",
      "stat": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      },
      "passive": {
        "$numberInt": "10"
      },
      "description": "Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming. Examples include the following activities:\n\n• You attempt to climb a sheer or slippery cliff, avoid hazards while scaling a wall, or cling to a surface while something is trying to knock you off.\n• You try to jump an unusually long distance or pull off a stunt midjump.\n• You struggle to swim or stay afloat in treacherous currents, storm-tossed waves, or areas of thick seaweed. Or another creature tries to push or pull you underwater or otherwise interfere with your swimming."
    },
    {
      "name": "Deception",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      },
      "passive": {
        "$numberInt": "11"
      },
      "description": "Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies. Typical situations include trying to fast-talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie."
    },
    {
      "name": "History",
      "stat": {
        "raw": {
          "$numberInt": "3"
        },
        "adj": {
          "$numberInt": "5"
        }
      },
      "passive": {
        "$numberInt": "15"
      },
      "description": "Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations."
    },
    {
      "name": "Insight",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "3"
        }
      },
      "passive": {
        "$numberInt": "13"
      },
      "description": "Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move. Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms."
    },
    {
      "name": "Intimidation",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      },
      "passive": {
        "$numberInt": "11"
      },
      "description": "When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check. Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision."
    },
    {
      "name": "Investigation",
      "stat": {
        "raw": {
          "$numberInt": "3"
        },
        "adj": {
          "$numberInt": "3"
        }
      },
      "passive": {
        "$numberInt": "13"
      },
      "description": "When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check. You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse. Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check."
    },
    {
      "name": "Medicine",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "3"
        }
      },
      "passive": {
        "$numberInt": "13"
      },
      "description": "A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness."
    },
    {
      "name": "Nature",
      "stat": {
        "raw": {
          "$numberInt": "3"
        },
        "adj": {
          "$numberInt": "3"
        }
      },
      "passive": {
        "$numberInt": "13"
      },
      "description": "Your Intelligence (Nature) check measures your ability to recall lore about terrain, plants and animals, the weather, and natural cycles."
    },
    {
      "name": "Perception",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "3"
        }
      },
      "passive": {
        "$numberInt": "13"
      },
      "description": "Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses. For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest. Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door."
    },
    {
      "name": "Performance",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      },
      "passive": {
        "$numberInt": "11"
      },
      "description": "Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment."
    },
    {
      "name": "Persuasion",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "1"
        }
      },
      "passive": {
        "$numberInt": "11"
      },
      "description": "When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check. Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette. Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk."
    },
    {
      "name": "Religion",
      "stat": {
        "raw": {
          "$numberInt": "3"
        },
        "adj": {
          "$numberInt": "3"
        }
      },
      "passive": {
        "$numberInt": "13"
      },
      "description": "Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults."
    },
    {
      "name": "Sleight of Hand",
      "stat": {
        "raw": {
          "$numberInt": "2"
        },
        "adj": {
          "$numberInt": "2"
        }
      },
      "passive": {
        "$numberInt": "12"
      },
      "description": "Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check. The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket."
    },
    {
      "name": "Stealth",
      "stat": {
        "raw": {
          "$numberInt": "2"
        },
        "adj": {
          "$numberInt": "2"
        }
      },
      "passive": {
        "$numberInt": "12"
      },
      "description": "Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies, slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard."
    },
    {
      "name": "Survival",
      "stat": {
        "raw": {
          "$numberInt": "1"
        },
        "adj": {
          "$numberInt": "3"
        }
      },
      "passive": {
        "$numberInt": "13"
      },
      "description": "The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards."
    }
  ],
  "allSaves": [
    {
      "name": "Fey Ancestry: Advantage vs. being charmed",
      "type": "Advantage vs. being charmed",
      "stat": {
        "raw": {
          "$numberInt": "2"
        },
        "adj": {
          "$numberInt": "2"
        }
      }
    }
  ],
  "armorClass": {
    "raw": {
      "$numberInt": "12"
    },
    "adj": {
      "$numberInt": "12"
    }
  },
  "initiative": {
    "raw": {
      "$numberInt": "2"
    },
    "adj": {
      "$numberInt": "2"
    }
  },
  "speed": {
    "raw": {
      "$numberInt": "30"
    },
    "adj": {
      "$numberInt": "30"
    }
  },
  "encumbrance": {
    "raw": {
      "$numberInt": "150"
    },
    "adj": {
      "$numberInt": "150"
    }
  },
  "carriedWeight": {
    "raw": {
      "$numberDouble": "76.02"
    },
    "adj": {
      "$numberDouble": "76.02"
    }
  },
  "inventories": [
    {
      "name": "Backpack (empty)",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "5"
      },
      "cost": {
        "$numberInt": "2"
      },
      "gearType": "adventuring gear",
      "description": "Bag for holding inventories being carried"
    },
    {
      "name": "Crowbar",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "5"
      },
      "cost": {
        "$numberInt": "2"
      },
      "gearType": "adventuring gear",
      "description": "Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied."
    },
    {
      "name": "dagger",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "1"
      },
      "cost": {
        "$numberInt": "2"
      },
      "gearType": "weapon",
      "description": "small blade weapon"
    },
    {
      "name": "hammer",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "3"
      },
      "cost": {
        "$numberInt": "1"
      },
      "gearType": "adventuring gear",
      "description": "Tool: Hammer"
    },
    {
      "name": "piton",
      "quantity": {
        "$numberInt": "10"
      },
      "weight": {
        "$numberDouble": "2.5"
      },
      "cost": {
        "$numberDouble": "0.5"
      },
      "gearType": "adventuring gear",
      "description": "metal spike that is driven into a crack or seam in the climbing surface with a climbing hammer"
    },
    {
      "name": "quarterstaff",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "4"
      },
      "cost": {
        "$numberDouble": "0.2"
      },
      "gearType": "weapon",
      "description": "stick weapon"
    },
    {
      "name": "rations",
      "quantity": {
        "$numberInt": "10"
      },
      "weight": {
        "$numberInt": "20"
      },
      "cost": {
        "$numberInt": "5"
      },
      "gearType": "adventuring gear",
      "description": "Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts."
    },
    {
      "name": "robes",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "4"
      },
      "cost": {
        "$numberInt": "1"
      },
      "gearType": "adventuring gear",
      "description": "Plain 'ole travelling robes"
    },
    {
      "name": "Rope, hempen (50 feet)",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "4"
      },
      "cost": {
        "$numberInt": "1"
      },
      "gearType": "adventuring gear",
      "description": "Plain 'ole travelling robes"
    },
    {
      "name": "Rope, hempen (50 feet)",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "10"
      },
      "cost": {
        "$numberInt": "1"
      },
      "gearType": "adventuring gear",
      "description": "Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check."
    },
    {
      "name": "sling",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "0"
      },
      "cost": {
        "$numberDouble": "0.1"
      },
      "gearType": "weapon",
      "description": "standard range weapon"
    },
    {
      "name": "sling bullets",
      "quantity": {
        "$numberInt": "40"
      },
      "weight": {
        "$numberInt": "3"
      },
      "cost": {
        "$numberDouble": "0.08"
      },
      "gearType": "ammo",
      "description": "ammunition for slings"
    },
    {
      "name": "tinderbox",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "1"
      },
      "cost": {
        "$numberDouble": "0.5"
      },
      "gearType": "adventuring gear",
      "description": "This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch - or anything else with abundant, exposed fuel - takes an action. Lighting any other fire takes 1 minute."
    },
    {
      "name": "torch",
      "quantity": {
        "$numberInt": "10"
      },
      "weight": {
        "$numberInt": "10"
      },
      "cost": {
        "$numberDouble": "0.1"
      },
      "gearType": "adventuring gear",
      "description": "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage."
    },
    {
      "name": "waterskin",
      "quantity": {
        "$numberInt": "1"
      },
      "weight": {
        "$numberInt": "5"
      },
      "cost": {
        "$numberDouble": "0.2"
      },
      "gearType": "adventuring gear",
      "description": "Leather bladder for holding water"
    }
  ],
  "spells": [
    {
      "name": "Acid Splash",
      "type": "cantrip",
      "level": {
        "$numberInt": "0"
      },
      "castTime": "1 action",
      "range": {
        "$numberInt": "60"
      },
      "duration": "Instantaneous",
      "dc": {
        "$numberInt": "13"
      },
      "casterLevel": {
        "$numberInt": "1"
      },
      "castsLeft": {
        "$numberInt": "1"
      },
      "unlimited": true,
      "description": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "components": [
        "Verbal",
        "Somatic"
      ],
      "schools": [
        "Conjuration"
      ]
    },
    {
      "name": "Fire Bolt",
      "type": "cantrip",
      "level": {
        "$numberInt": "0"
      },
      "castTime": "1 action",
      "range": {
        "$numberInt": "120"
      },
      "duration": "instant",
      "dc": {
        "$numberInt": "13"
      },
      "casterLevel": {
        "$numberInt": "1"
      },
      "components": [
        "Verbal",
        "Somatic"
      ],
      "schools": [
        "Evocation"
      ],
      "castsLeft": {
        "$numberInt": "1"
      },
      "unlimited": true,
      "traits": [
        "fire"
      ],
      "description": "Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried. This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
    },
    {
      "name": "Light",
      "type": "cantrip",
      "level": {
        "$numberInt": "0"
      },
      "castTime": "1 action",
      "range": {
        "$numberInt": "0"
      },
      "duration": "1 hour",
      "dc": {
        "$numberInt": "13"
      },
      "casterLevel": {
        "$numberInt": "1"
      },
      "castsLeft": {
        "$numberInt": "1"
      },
      "unlimited": true,
      "traits": [],
      "description": "You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20 foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.\nIf you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.",
      "components": [
        "Verbal",
        "Material"
      ],
      "schools": [
        "Evocation"
      ]
    },
    {
      "name": "Detect Magic",
      "type": "spell",
      "level": {
        "$numberInt": "1"
      },
      "castTime": "1 action",
      "range": {
        "$numberInt": "-1"
      },
      "duration": "Concentration, up to 10 minutes",
      "dc": {
        "$numberInt": "13"
      },
      "casterLevel": {
        "$numberInt": "1"
      },
      "castsLeft": {
        "$numberInt": "1"
      },
      "unlimited": false,
      "traits": [],
      "description": "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.\nThe spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
      "components": [
        "Verbal",
        "Somatic"
      ],
      "schools": [
        "Divination"
      ]
    },
    {
      "name": "Fog Cloud",
      "type": "spell",
      "level": {
        "$numberInt": "1"
      },
      "castTime": "1 action",
      "range": {
        "$numberInt": "120"
      },
      "duration": "Concentration, up to 1 hour",
      "dc": {
        "$numberInt": "13"
      },
      "casterLevel": {
        "$numberInt": "1"
      },
      "castsLeft": {
        "$numberInt": "1"
      },
      "unlimited": false,
      "traits": [],
      "description": "You create a 20 foot radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
      "components": [
        "Verbal",
        "Somatic"
      ],
      "schools": [
        "Conjuration"
      ]
    },
    {
      "name": "Magic Missile",
      "type": "spell",
      "level": {
        "$numberInt": "1"
      },
      "castTime": "1 action",
      "range": {
        "$numberInt": "120"
      },
      "duration": "Instantaneous",
      "dc": {
        "$numberInt": "13"
      },
      "casterLevel": {
        "$numberInt": "1"
      },
      "castsLeft": {
        "$numberInt": "1"
      },
      "unlimited": false,
      "traits": [],
      "description": "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.\nAt Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.",
      "components": [
        "Verbal",
        "Somatic"
      ],
      "schools": [
        "Evocation"
      ]
    },
    {
      "name": "Shield",
      "type": "spell",
      "level": {
        "$numberInt": "1"
      },
      "castTime": "1 reaction",
      "range": {
        "$numberInt": "-1"
      },
      "duration": "1 round",
      "dc": {
        "$numberInt": "13"
      },
      "casterLevel": {
        "$numberInt": "1"
      },
      "castsLeft": {
        "$numberInt": "1"
      },
      "unlimited": false,
      "traits": [],
      "description": "An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.",
      "components": [
        "Verbal",
        "Somatic"
      ],
      "schools": [
        "Abjuration"
      ]
    }
  ],
  "specials": [
    {
      "name": "Arcane Recovery (1 level, 1/day)",
      "type": "",
      "source": "Wizard",
      "description": "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher. For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
    },
    {
      "name": "Darkvision (60 feet)",
      "type": "Sense",
      "source": "Half-Elf",
      "description": "Many creatures in fantasy gaming worlds, especially those that dwell underground, have darkvision. Within a specified range, a creature with darkvision can see in darkness as if the darkness were dim light, so areas of darkness are only lightly obscured as far as that creature is concerned. However, the creature can't discern color in darkness, only shades of gray."
    },
    {
      "name": "Fey Ancestry",
      "type": "",
      "source": "Half-Elf",
      "description": "You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    },
    {
      "name": "Researcher",
      "type": "",
      "source": "Sage",
      "description": "Whenever you attempt to learn or recall information or lore, if it’s something unknown, you can usually find out where that information can be obtained.  Usually from a library, scriptorium, university, a sage or another educated person or creature.  Your Dungeon Master might rule that the knowledge is too difficult to get to, or it’s such a guarded secret, or is just unattainable.   The DM might even require its own adventure or campaign to gain access."
    }
  ],
  "defenses": [],
  "weapons": [
    {
      "name": "Dagger",
      "category": [
        "Melee",
        "Thrown"
      ],
      "type": [
        "Piercing"
      ],
      "attack": {
        "$numberInt": "4"
      },
      "damage": "1d4+2",
      "proficient": true,
      "range": {
        "raw": {
          "$numberInt": "20"
        },
        "adj": {
          "$numberInt": "60"
        }
      },
      "special": ""
    },
    {
      "name": "Quarterstaff",
      "category": [
        "Melee"
      ],
      "type": [
        "Bludgeoning"
      ],
      "attack": {
        "$numberInt": "2"
      },
      "damage": "1d6",
      "proficient": true,
      "range": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      },
      "special": ""
    },
    {
      "name": "Unarmed strike",
      "category": [
        "Melee"
      ],
      "type": [
        "Bludgeoning"
      ],
      "attack": {
        "$numberInt": "2"
      },
      "damage": "1",
      "proficient": true,
      "range": {
        "raw": {
          "$numberInt": "0"
        },
        "adj": {
          "$numberInt": "0"
        }
      },
      "special": ""
    },
    {
      "name": "Sling",
      "category": [
        "Projectile"
      ],
      "type": [
        "Bludgeoning"
      ],
      "attack": {
        "$numberInt": "4"
      },
      "damage": "1",
      "proficient": true,
      "range": {
        "raw": {
          "$numberInt": "30"
        },
        "adj": {
          "$numberInt": "120"
        }
      },
      "special": ""
    }
  ]
}
