import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useState } from 'react';

const Demo = () => {
    const [name,setName]= useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name)
    }
    return (
        <form onSubmit={handleSubmit}>
            <Autocomplete
                id="combo-box-demo"
                options={superHeroNames}
                getOptionLabel={(option) => option.superHeroName}
                style={{ width: 300 }}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
        </form>
    )
}

const superHeroNames = [
    {
        "superHeroName": "A-Bomb"
    },
    {
        "superHeroName": "Abe Sapien"
    },
    {
        "superHeroName": "Abin Sur"
    },
    {
        "superHeroName": "Abomination"
    },
    {
        "superHeroName": "Abraxas"
    },
    {
        "superHeroName": "Absorbing Man"
    },
    {
        "superHeroName": "Adam Monroe"
    },
    {
        "superHeroName": "Adam Strange"
    },
    {
        "superHeroName": "Agent 13"
    },
    {
        "superHeroName": "Agent Bob"
    },
    {
        "superHeroName": "Agent Zero"
    },
    {
        "superHeroName": "Air-Walker"
    },
    {
        "superHeroName": "Ajax"
    },
    {
        "superHeroName": "Alan Scott"
    },
    {
        "superHeroName": "Alex Mercer"
    },
    {
        "superHeroName": "Alex Woolsly"
    },
    {
        "superHeroName": "Alfred Pennyworth"
    },
    {
        "superHeroName": "Alien"
    },
    {
        "superHeroName": "Allan Quatermain"
    },
    {
        "superHeroName": "Amazo"
    },
    {
        "superHeroName": "Ammo"
    },
    {
        "superHeroName": "Ando Masahashi"
    },
    {
        "superHeroName": "Angel"
    },
    {
        "superHeroName": "Angel"
    },
    {
        "superHeroName": "Angel Dust"
    },
    {
        "superHeroName": "Angel Salvadore"
    },
    {
        "superHeroName": "Angela"
    },
    {
        "superHeroName": "Animal Man"
    },
    {
        "superHeroName": "Annihilus"
    },
    {
        "superHeroName": "Ant-Man"
    },
    {
        "superHeroName": "Ant-Man II"
    },
    {
        "superHeroName": "Anti-Monitor"
    },
    {
        "superHeroName": "Anti-Spawn"
    },
    {
        "superHeroName": "Anti-Venom"
    },
    {
        "superHeroName": "Apocalypse"
    },
    {
        "superHeroName": "Aquababy"
    },
    {
        "superHeroName": "Aqualad"
    },
    {
        "superHeroName": "Aquaman"
    },
    {
        "superHeroName": "Arachne"
    },
    {
        "superHeroName": "Archangel"
    },
    {
        "superHeroName": "Arclight"
    },
    {
        "superHeroName": "Ardina"
    },
    {
        "superHeroName": "Ares"
    },
    {
        "superHeroName": "Ariel"
    },
    {
        "superHeroName": "Armor"
    },
    {
        "superHeroName": "Arsenal"
    },
    {
        "superHeroName": "Astro Boy"
    },
    {
        "superHeroName": "Atlas"
    },
    {
        "superHeroName": "Atlas"
    },
    {
        "superHeroName": "Atom"
    },
    {
        "superHeroName": "Atom"
    },
    {
        "superHeroName": "Atom Girl"
    },
    {
        "superHeroName": "Atom II"
    },
    {
        "superHeroName": "Atom III"
    },
    {
        "superHeroName": "Atom IV"
    },
    {
        "superHeroName": "Aurora"
    },
    {
        "superHeroName": "Azazel"
    },
    {
        "superHeroName": "Azrael"
    },
    {
        "superHeroName": "Aztar"
    },
    {
        "superHeroName": "Bane"
    },
    {
        "superHeroName": "Banshee"
    },
    {
        "superHeroName": "Bantam"
    },
    {
        "superHeroName": "Batgirl"
    },
    {
        "superHeroName": "Batgirl"
    },
    {
        "superHeroName": "Batgirl III"
    },
    {
        "superHeroName": "Batgirl IV"
    },
    {
        "superHeroName": "Batgirl V"
    },
    {
        "superHeroName": "Batgirl VI"
    },
    {
        "superHeroName": "Batman"
    },
    {
        "superHeroName": "Batman"
    },
    {
        "superHeroName": "Batman II"
    },
    {
        "superHeroName": "Battlestar"
    },
    {
        "superHeroName": "Batwoman V"
    },
    {
        "superHeroName": "Beak"
    },
    {
        "superHeroName": "Beast"
    },
    {
        "superHeroName": "Beast Boy"
    },
    {
        "superHeroName": "Beetle"
    },
    {
        "superHeroName": "Ben 10"
    },
    {
        "superHeroName": "Beta Ray Bill"
    },
    {
        "superHeroName": "Beyonder"
    },
    {
        "superHeroName": "Big Barda"
    },
    {
        "superHeroName": "Big Daddy"
    },
    {
        "superHeroName": "Big Man"
    },
    {
        "superHeroName": "Bill Harken"
    },
    {
        "superHeroName": "Billy Kincaid"
    },
    {
        "superHeroName": "Binary"
    },
    {
        "superHeroName": "Bionic Woman"
    },
    {
        "superHeroName": "Bird-Brain"
    },
    {
        "superHeroName": "Bird-Man"
    },
    {
        "superHeroName": "Bird-Man II"
    },
    {
        "superHeroName": "Birdman"
    },
    {
        "superHeroName": "Bishop"
    },
    {
        "superHeroName": "Bizarro"
    },
    {
        "superHeroName": "Black Abbott"
    },
    {
        "superHeroName": "Black Adam"
    },
    {
        "superHeroName": "Black Bolt"
    },
    {
        "superHeroName": "Black Canary"
    },
    {
        "superHeroName": "Black Canary"
    },
    {
        "superHeroName": "Black Cat"
    },
    {
        "superHeroName": "Black Flash"
    },
    {
        "superHeroName": "Black Goliath"
    },
    {
        "superHeroName": "Black Knight III"
    },
    {
        "superHeroName": "Black Lightning"
    },
    {
        "superHeroName": "Black Mamba"
    },
    {
        "superHeroName": "Black Manta"
    },
    {
        "superHeroName": "Black Panther"
    },
    {
        "superHeroName": "Black Widow"
    },
    {
        "superHeroName": "Black Widow II"
    },
    {
        "superHeroName": "Blackout"
    },
    {
        "superHeroName": "Blackwing"
    },
    {
        "superHeroName": "Blackwulf"
    },
    {
        "superHeroName": "Blade"
    },
    {
        "superHeroName": "Blaquesmith"
    },
    {
        "superHeroName": "Bling!"
    },
    {
        "superHeroName": "Blink"
    },
    {
        "superHeroName": "Blizzard"
    },
    {
        "superHeroName": "Blizzard"
    },
    {
        "superHeroName": "Blizzard II"
    },
    {
        "superHeroName": "Blob"
    },
    {
        "superHeroName": "Bloodaxe"
    },
    {
        "superHeroName": "Bloodhawk"
    },
    {
        "superHeroName": "Bloodwraith"
    },
    {
        "superHeroName": "Blue Beetle"
    },
    {
        "superHeroName": "Blue Beetle"
    },
    {
        "superHeroName": "Blue Beetle II"
    },
    {
        "superHeroName": "Blue Beetle III"
    },
    {
        "superHeroName": "Boba Fett"
    },
    {
        "superHeroName": "Bolt"
    },
    {
        "superHeroName": "Bomb Queen"
    },
    {
        "superHeroName": "Boom-Boom"
    },
    {
        "superHeroName": "Boomer"
    },
    {
        "superHeroName": "Booster Gold"
    },
    {
        "superHeroName": "Box"
    },
    {
        "superHeroName": "Box III"
    },
    {
        "superHeroName": "Box IV"
    },
    {
        "superHeroName": "Brainiac"
    },
    {
        "superHeroName": "Brainiac 5"
    },
    {
        "superHeroName": "Brother Voodoo"
    },
    {
        "superHeroName": "Brundlefly"
    },
    {
        "superHeroName": "Buffy"
    },
    {
        "superHeroName": "Bullseye"
    },
    {
        "superHeroName": "Bumblebee"
    },
    {
        "superHeroName": "Bumbleboy"
    },
    {
        "superHeroName": "Bushido"
    },
    {
        "superHeroName": "Cable"
    },
    {
        "superHeroName": "Callisto"
    },
    {
        "superHeroName": "Cameron Hicks"
    },
    {
        "superHeroName": "Cannonball"
    },
    {
        "superHeroName": "Captain America"
    },
    {
        "superHeroName": "Captain Atom"
    },
    {
        "superHeroName": "Captain Britain"
    },
    {
        "superHeroName": "Captain Cold"
    },
    {
        "superHeroName": "Captain Epic"
    },
    {
        "superHeroName": "Captain Hindsight"
    },
    {
        "superHeroName": "Captain Mar-vell"
    },
    {
        "superHeroName": "Captain Marvel"
    },
    {
        "superHeroName": "Captain Marvel"
    },
    {
        "superHeroName": "Captain Marvel II"
    },
    {
        "superHeroName": "Captain Midnight"
    },
    {
        "superHeroName": "Captain Planet"
    },
    {
        "superHeroName": "Captain Universe"
    },
    {
        "superHeroName": "Carnage"
    },
    {
        "superHeroName": "Cat"
    },
    {
        "superHeroName": "Cat II"
    },
    {
        "superHeroName": "Catwoman"
    },
    {
        "superHeroName": "Cecilia Reyes"
    },
    {
        "superHeroName": "Century"
    },
    {
        "superHeroName": "Cerebra"
    },
    {
        "superHeroName": "Chamber"
    },
    {
        "superHeroName": "Chameleon"
    },
    {
        "superHeroName": "Changeling"
    },
    {
        "superHeroName": "Cheetah"
    },
    {
        "superHeroName": "Cheetah II"
    },
    {
        "superHeroName": "Cheetah III"
    },
    {
        "superHeroName": "Chromos"
    },
    {
        "superHeroName": "Chuck Norris"
    },
    {
        "superHeroName": "Citizen Steel"
    },
    {
        "superHeroName": "Claire Bennet"
    },
    {
        "superHeroName": "Clea"
    },
    {
        "superHeroName": "Cloak"
    },
    {
        "superHeroName": "Clock King"
    },
    {
        "superHeroName": "Cogliostro"
    },
    {
        "superHeroName": "Colin Wagner"
    },
    {
        "superHeroName": "Colossal Boy"
    },
    {
        "superHeroName": "Colossus"
    },
    {
        "superHeroName": "Copycat"
    },
    {
        "superHeroName": "Corsair"
    },
    {
        "superHeroName": "Cottonmouth"
    },
    {
        "superHeroName": "Crimson Crusader"
    },
    {
        "superHeroName": "Crimson Dynamo"
    },
    {
        "superHeroName": "Crystal"
    },
    {
        "superHeroName": "Curse"
    },
    {
        "superHeroName": "Cy-Gor"
    },
    {
        "superHeroName": "Cyborg"
    },
    {
        "superHeroName": "Cyborg Superman"
    },
    {
        "superHeroName": "Cyclops"
    },
    {
        "superHeroName": "Cypher"
    },
    {
        "superHeroName": "Dagger"
    },
    {
        "superHeroName": "Danny Cooper"
    },
    {
        "superHeroName": "Daphne Powell"
    },
    {
        "superHeroName": "Daredevil"
    },
    {
        "superHeroName": "Darkhawk"
    },
    {
        "superHeroName": "Darkman"
    },
    {
        "superHeroName": "Darkseid"
    },
    {
        "superHeroName": "Darkside"
    },
    {
        "superHeroName": "Darkstar"
    },
    {
        "superHeroName": "Darth Maul"
    },
    {
        "superHeroName": "Darth Vader"
    },
    {
        "superHeroName": "Dash"
    },
    {
        "superHeroName": "Data"
    },
    {
        "superHeroName": "Dazzler"
    },
    {
        "superHeroName": "Deadman"
    },
    {
        "superHeroName": "Deadpool"
    },
    {
        "superHeroName": "Deadshot"
    },
    {
        "superHeroName": "Deathlok"
    },
    {
        "superHeroName": "Deathstroke"
    },
    {
        "superHeroName": "Demogoblin"
    },
    {
        "superHeroName": "Destroyer"
    },
    {
        "superHeroName": "Diamondback"
    },
    {
        "superHeroName": "DL Hawkins"
    },
    {
        "superHeroName": "Doc Samson"
    },
    {
        "superHeroName": "Doctor Doom"
    },
    {
        "superHeroName": "Doctor Doom II"
    },
    {
        "superHeroName": "Doctor Fate"
    },
    {
        "superHeroName": "Doctor Octopus"
    },
    {
        "superHeroName": "Doctor Strange"
    },
    {
        "superHeroName": "Domino"
    },
    {
        "superHeroName": "Donatello"
    },
    {
        "superHeroName": "Donna Troy"
    },
    {
        "superHeroName": "Doomsday"
    },
    {
        "superHeroName": "Doppelganger"
    },
    {
        "superHeroName": "Dormammu"
    },
    {
        "superHeroName": "Dr Manhattan"
    },
    {
        "superHeroName": "Drax the Destroyer"
    },
    {
        "superHeroName": "Ego"
    },
    {
        "superHeroName": "Elastigirl"
    },
    {
        "superHeroName": "Electro"
    },
    {
        "superHeroName": "Elektra"
    },
    {
        "superHeroName": "Elle Bishop"
    },
    {
        "superHeroName": "Elongated Man"
    },
    {
        "superHeroName": "Emma Frost"
    },
    {
        "superHeroName": "Enchantress"
    },
    {
        "superHeroName": "Energy"
    },
    {
        "superHeroName": "ERG-1"
    },
    {
        "superHeroName": "Ethan Hunt"
    },
    {
        "superHeroName": "Etrigan"
    },
    {
        "superHeroName": "Evil Deadpool"
    },
    {
        "superHeroName": "Evilhawk"
    },
    {
        "superHeroName": "Exodus"
    },
    {
        "superHeroName": "Fabian Cortez"
    },
    {
        "superHeroName": "Falcon"
    },
    {
        "superHeroName": "Fallen One II"
    },
    {
        "superHeroName": "Faora"
    },
    {
        "superHeroName": "Feral"
    },
    {
        "superHeroName": "Fighting Spirit"
    },
    {
        "superHeroName": "Fin Fang Foom"
    },
    {
        "superHeroName": "Firebird"
    },
    {
        "superHeroName": "Firelord"
    },
    {
        "superHeroName": "Firestar"
    },
    {
        "superHeroName": "Firestorm"
    },
    {
        "superHeroName": "Firestorm"
    },
    {
        "superHeroName": "Fixer"
    },
    {
        "superHeroName": "Flash"
    },
    {
        "superHeroName": "Flash Gordon"
    },
    {
        "superHeroName": "Flash II"
    },
    {
        "superHeroName": "Flash III"
    },
    {
        "superHeroName": "Flash IV"
    },
    {
        "superHeroName": "Forge"
    },
    {
        "superHeroName": "Franklin Richards"
    },
    {
        "superHeroName": "Franklin Storm"
    },
    {
        "superHeroName": "Frenzy"
    },
    {
        "superHeroName": "Frigga"
    },
    {
        "superHeroName": "Galactus"
    },
    {
        "superHeroName": "Gambit"
    },
    {
        "superHeroName": "Gamora"
    },
    {
        "superHeroName": "Garbage Man"
    },
    {
        "superHeroName": "Gary Bell"
    },
    {
        "superHeroName": "General Zod"
    },
    {
        "superHeroName": "Genesis"
    },
    {
        "superHeroName": "Ghost Rider"
    },
    {
        "superHeroName": "Ghost Rider II"
    },
    {
        "superHeroName": "Giant-Man"
    },
    {
        "superHeroName": "Giant-Man II"
    },
    {
        "superHeroName": "Giganta"
    },
    {
        "superHeroName": "Gladiator"
    },
    {
        "superHeroName": "Goblin Queen"
    },
    {
        "superHeroName": "Godzilla"
    },
    {
        "superHeroName": "Gog"
    },
    {
        "superHeroName": "Goku"
    },
    {
        "superHeroName": "Goliath"
    },
    {
        "superHeroName": "Goliath"
    },
    {
        "superHeroName": "Goliath"
    },
    {
        "superHeroName": "Goliath IV"
    },
    {
        "superHeroName": "Gorilla Grodd"
    },
    {
        "superHeroName": "Granny Goodness"
    },
    {
        "superHeroName": "Gravity"
    },
    {
        "superHeroName": "Greedo"
    },
    {
        "superHeroName": "Green Arrow"
    },
    {
        "superHeroName": "Green Goblin"
    },
    {
        "superHeroName": "Green Goblin II"
    },
    {
        "superHeroName": "Green Goblin III"
    },
    {
        "superHeroName": "Green Goblin IV"
    },
    {
        "superHeroName": "Groot"
    },
    {
        "superHeroName": "Guardian"
    },
    {
        "superHeroName": "Guy Gardner"
    },
    {
        "superHeroName": "Hal Jordan"
    },
    {
        "superHeroName": "Han Solo"
    },
    {
        "superHeroName": "Hancock"
    },
    {
        "superHeroName": "Harley Quinn"
    },
    {
        "superHeroName": "Harry Potter"
    },
    {
        "superHeroName": "Havok"
    },
    {
        "superHeroName": "Hawk"
    },
    {
        "superHeroName": "Hawkeye"
    },
    {
        "superHeroName": "Hawkeye II"
    },
    {
        "superHeroName": "Hawkgirl"
    },
    {
        "superHeroName": "Hawkman"
    },
    {
        "superHeroName": "Hawkwoman"
    },
    {
        "superHeroName": "Hawkwoman II"
    },
    {
        "superHeroName": "Hawkwoman III"
    },
    {
        "superHeroName": "Heat Wave"
    },
    {
        "superHeroName": "Hela"
    },
    {
        "superHeroName": "Hellboy"
    },
    {
        "superHeroName": "Hellcat"
    },
    {
        "superHeroName": "Hellstorm"
    },
    {
        "superHeroName": "Hercules"
    },
    {
        "superHeroName": "Hiro Nakamura"
    },
    {
        "superHeroName": "Hit-Girl"
    },
    {
        "superHeroName": "Hobgoblin"
    },
    {
        "superHeroName": "Hollow"
    },
    {
        "superHeroName": "Hope Summers"
    },
    {
        "superHeroName": "Howard the Duck"
    },
    {
        "superHeroName": "Hulk"
    },
    {
        "superHeroName": "Human Torch"
    },
    {
        "superHeroName": "Huntress"
    },
    {
        "superHeroName": "Husk"
    },
    {
        "superHeroName": "Hybrid"
    },
    {
        "superHeroName": "Hydro-Man"
    },
    {
        "superHeroName": "Hyperion"
    },
    {
        "superHeroName": "Iceman"
    },
    {
        "superHeroName": "Impulse"
    },
    {
        "superHeroName": "Indiana Jones"
    },
    {
        "superHeroName": "Indigo"
    },
    {
        "superHeroName": "Ink"
    },
    {
        "superHeroName": "Invisible Woman"
    },
    {
        "superHeroName": "Iron Fist"
    },
    {
        "superHeroName": "Iron Man"
    },
    {
        "superHeroName": "Iron Monger"
    },
    {
        "superHeroName": "Isis"
    },
    {
        "superHeroName": "Jack Bauer"
    },
    {
        "superHeroName": "Jack of Hearts"
    },
    {
        "superHeroName": "Jack-Jack"
    },
    {
        "superHeroName": "James Bond"
    },
    {
        "superHeroName": "James T. Kirk"
    },
    {
        "superHeroName": "Jar Jar Binks"
    },
    {
        "superHeroName": "Jason Bourne"
    },
    {
        "superHeroName": "Jean Grey"
    },
    {
        "superHeroName": "Jean-Luc Picard"
    },
    {
        "superHeroName": "Jennifer Kale"
    },
    {
        "superHeroName": "Jesse Quick"
    },
    {
        "superHeroName": "Jessica Cruz"
    },
    {
        "superHeroName": "Jessica Jones"
    },
    {
        "superHeroName": "Jessica Sanders"
    },
    {
        "superHeroName": "Jigsaw"
    },
    {
        "superHeroName": "Jim Powell"
    },
    {
        "superHeroName": "JJ Powell"
    },
    {
        "superHeroName": "Johann Krauss"
    },
    {
        "superHeroName": "John Constantine"
    },
    {
        "superHeroName": "John Stewart"
    },
    {
        "superHeroName": "John Wraith"
    },
    {
        "superHeroName": "Joker"
    },
    {
        "superHeroName": "Jolt"
    },
    {
        "superHeroName": "Jubilee"
    },
    {
        "superHeroName": "Judge Dredd"
    },
    {
        "superHeroName": "Juggernaut"
    },
    {
        "superHeroName": "Junkpile"
    },
    {
        "superHeroName": "Justice"
    },
    {
        "superHeroName": "Jyn Erso"
    },
    {
        "superHeroName": "K-2SO"
    },
    {
        "superHeroName": "Kang"
    },
    {
        "superHeroName": "Kathryn Janeway"
    },
    {
        "superHeroName": "Katniss Everdeen"
    },
    {
        "superHeroName": "Kevin 11"
    },
    {
        "superHeroName": "Kick-Ass"
    },
    {
        "superHeroName": "Kid Flash"
    },
    {
        "superHeroName": "Kid Flash II"
    },
    {
        "superHeroName": "Killer Croc"
    },
    {
        "superHeroName": "Killer Frost"
    },
    {
        "superHeroName": "Kilowog"
    },
    {
        "superHeroName": "King Kong"
    },
    {
        "superHeroName": "King Shark"
    },
    {
        "superHeroName": "Kingpin"
    },
    {
        "superHeroName": "Klaw"
    },
    {
        "superHeroName": "Kool-Aid Man"
    },
    {
        "superHeroName": "Kraven II"
    },
    {
        "superHeroName": "Kraven the Hunter"
    },
    {
        "superHeroName": "Krypto"
    },
    {
        "superHeroName": "Kyle Rayner"
    },
    {
        "superHeroName": "Kylo Ren"
    },
    {
        "superHeroName": "Lady Bullseye"
    },
    {
        "superHeroName": "Lady Deathstrike"
    },
    {
        "superHeroName": "Leader"
    },
    {
        "superHeroName": "Leech"
    },
    {
        "superHeroName": "Legion"
    },
    {
        "superHeroName": "Leonardo"
    },
    {
        "superHeroName": "Lex Luthor"
    },
    {
        "superHeroName": "Light Lass"
    },
    {
        "superHeroName": "Lightning Lad"
    },
    {
        "superHeroName": "Lightning Lord"
    },
    {
        "superHeroName": "Living Brain"
    },
    {
        "superHeroName": "Living Tribunal"
    },
    {
        "superHeroName": "Liz Sherman"
    },
    {
        "superHeroName": "Lizard"
    },
    {
        "superHeroName": "Lobo"
    },
    {
        "superHeroName": "Loki"
    },
    {
        "superHeroName": "Longshot"
    },
    {
        "superHeroName": "Luke Cage"
    },
    {
        "superHeroName": "Luke Campbell"
    },
    {
        "superHeroName": "Luke Skywalker"
    },
    {
        "superHeroName": "Luna"
    },
    {
        "superHeroName": "Lyja"
    },
    {
        "superHeroName": "Mach-IV"
    },
    {
        "superHeroName": "Machine Man"
    },
    {
        "superHeroName": "Magneto"
    },
    {
        "superHeroName": "Magog"
    },
    {
        "superHeroName": "Magus"
    },
    {
        "superHeroName": "Man of Miracles"
    },
    {
        "superHeroName": "Man-Bat"
    },
    {
        "superHeroName": "Man-Thing"
    },
    {
        "superHeroName": "Man-Wolf"
    },
    {
        "superHeroName": "Mandarin"
    },
    {
        "superHeroName": "Mantis"
    },
    {
        "superHeroName": "Martian Manhunter"
    },
    {
        "superHeroName": "Marvel Girl"
    },
    {
        "superHeroName": "Master Brood"
    },
    {
        "superHeroName": "Master Chief"
    },
    {
        "superHeroName": "Match"
    },
    {
        "superHeroName": "Matt Parkman"
    },
    {
        "superHeroName": "Maverick"
    },
    {
        "superHeroName": "Maxima"
    },
    {
        "superHeroName": "Maya Herrera"
    },
    {
        "superHeroName": "Medusa"
    },
    {
        "superHeroName": "Meltdown"
    },
    {
        "superHeroName": "Mephisto"
    },
    {
        "superHeroName": "Mera"
    },
    {
        "superHeroName": "Metallo"
    },
    {
        "superHeroName": "Metamorpho"
    },
    {
        "superHeroName": "Meteorite"
    },
    {
        "superHeroName": "Metron"
    },
    {
        "superHeroName": "Micah Sanders"
    },
    {
        "superHeroName": "Michelangelo"
    },
    {
        "superHeroName": "Micro Lad"
    },
    {
        "superHeroName": "Mimic"
    },
    {
        "superHeroName": "Minna Murray"
    },
    {
        "superHeroName": "Misfit"
    },
    {
        "superHeroName": "Miss Martian"
    },
    {
        "superHeroName": "Mister Fantastic"
    },
    {
        "superHeroName": "Mister Freeze"
    },
    {
        "superHeroName": "Mister Knife"
    },
    {
        "superHeroName": "Mister Mxyzptlk"
    },
    {
        "superHeroName": "Mister Sinister"
    },
    {
        "superHeroName": "Mister Zsasz"
    },
    {
        "superHeroName": "Mockingbird"
    },
    {
        "superHeroName": "MODOK"
    },
    {
        "superHeroName": "Mogo"
    },
    {
        "superHeroName": "Mohinder Suresh"
    },
    {
        "superHeroName": "Moloch"
    },
    {
        "superHeroName": "Molten Man"
    },
    {
        "superHeroName": "Monarch"
    },
    {
        "superHeroName": "Monica Dawson"
    },
    {
        "superHeroName": "Moon Knight"
    },
    {
        "superHeroName": "Moonstone"
    },
    {
        "superHeroName": "Morlun"
    },
    {
        "superHeroName": "Morph"
    },
    {
        "superHeroName": "Moses Magnum"
    },
    {
        "superHeroName": "Mr Immortal"
    },
    {
        "superHeroName": "Mr Incredible"
    },
    {
        "superHeroName": "Ms Marvel II"
    },
    {
        "superHeroName": "Multiple Man"
    },
    {
        "superHeroName": "Mysterio"
    },
    {
        "superHeroName": "Mystique"
    },
    {
        "superHeroName": "Namor"
    },
    {
        "superHeroName": "Namor"
    },
    {
        "superHeroName": "Namora"
    },
    {
        "superHeroName": "Namorita"
    },
    {
        "superHeroName": "Naruto Uzumaki"
    },
    {
        "superHeroName": "Nathan Petrelli"
    },
    {
        "superHeroName": "Nebula"
    },
    {
        "superHeroName": "Negasonic Teenage Warhead"
    },
    {
        "superHeroName": "Nick Fury"
    },
    {
        "superHeroName": "Nightcrawler"
    },
    {
        "superHeroName": "Nightwing"
    },
    {
        "superHeroName": "Niki Sanders"
    },
    {
        "superHeroName": "Nina Theroux"
    },
    {
        "superHeroName": "Nite Owl II"
    },
    {
        "superHeroName": "Northstar"
    },
    {
        "superHeroName": "Nova"
    },
    {
        "superHeroName": "Nova"
    },
    {
        "superHeroName": "Odin"
    },
    {
        "superHeroName": "Offspring"
    },
    {
        "superHeroName": "Omega Red"
    },
    {
        "superHeroName": "Omniscient"
    },
    {
        "superHeroName": "One Punch Man"
    },
    {
        "superHeroName": "One-Above-All"
    },
    {
        "superHeroName": "Onslaught"
    },
    {
        "superHeroName": "Oracle"
    },
    {
        "superHeroName": "Osiris"
    },
    {
        "superHeroName": "Overtkill"
    },
    {
        "superHeroName": "Ozymandias"
    },
    {
        "superHeroName": "Parademon"
    },
    {
        "superHeroName": "Paul Blart"
    },
    {
        "superHeroName": "Penance"
    },
    {
        "superHeroName": "Penance I"
    },
    {
        "superHeroName": "Penance II"
    },
    {
        "superHeroName": "Penguin"
    },
    {
        "superHeroName": "Phantom"
    },
    {
        "superHeroName": "Phantom Girl"
    },
    {
        "superHeroName": "Phoenix"
    },
    {
        "superHeroName": "Plantman"
    },
    {
        "superHeroName": "Plastic Lad"
    },
    {
        "superHeroName": "Plastic Man"
    },
    {
        "superHeroName": "Plastique"
    },
    {
        "superHeroName": "Poison Ivy"
    },
    {
        "superHeroName": "Polaris"
    },
    {
        "superHeroName": "Power Girl"
    },
    {
        "superHeroName": "Power Man"
    },
    {
        "superHeroName": "Predator"
    },
    {
        "superHeroName": "Professor X"
    },
    {
        "superHeroName": "Professor Zoom"
    },
    {
        "superHeroName": "Psylocke"
    },
    {
        "superHeroName": "Punisher"
    },
    {
        "superHeroName": "Purple Man"
    },
    {
        "superHeroName": "Pyro"
    },
    {
        "superHeroName": "Q"
    },
    {
        "superHeroName": "Quantum"
    },
    {
        "superHeroName": "Question"
    },
    {
        "superHeroName": "Quicksilver"
    },
    {
        "superHeroName": "Quill"
    },
    {
        "superHeroName": "Ra's Al Ghul"
    },
    {
        "superHeroName": "Rachel Pirzad"
    },
    {
        "superHeroName": "Rambo"
    },
    {
        "superHeroName": "Raphael"
    },
    {
        "superHeroName": "Raven"
    },
    {
        "superHeroName": "Ray"
    },
    {
        "superHeroName": "Razor-Fist II"
    },
    {
        "superHeroName": "Red Arrow"
    },
    {
        "superHeroName": "Red Hood"
    },
    {
        "superHeroName": "Red Hulk"
    },
    {
        "superHeroName": "Red Mist"
    },
    {
        "superHeroName": "Red Robin"
    },
    {
        "superHeroName": "Red Skull"
    },
    {
        "superHeroName": "Red Tornado"
    },
    {
        "superHeroName": "Redeemer II"
    },
    {
        "superHeroName": "Redeemer III"
    },
    {
        "superHeroName": "Renata Soliz"
    },
    {
        "superHeroName": "Rey"
    },
    {
        "superHeroName": "Rhino"
    },
    {
        "superHeroName": "Rick Flag"
    },
    {
        "superHeroName": "Riddler"
    },
    {
        "superHeroName": "Rip Hunter"
    },
    {
        "superHeroName": "Ripcord"
    },
    {
        "superHeroName": "Robin"
    },
    {
        "superHeroName": "Robin II"
    },
    {
        "superHeroName": "Robin III"
    },
    {
        "superHeroName": "Robin V"
    },
    {
        "superHeroName": "Robin VI"
    },
    {
        "superHeroName": "Rocket Raccoon"
    },
    {
        "superHeroName": "Rogue"
    },
    {
        "superHeroName": "Ronin"
    },
    {
        "superHeroName": "Rorschach"
    },
    {
        "superHeroName": "Sabretooth"
    },
    {
        "superHeroName": "Sage"
    },
    {
        "superHeroName": "Sandman"
    },
    {
        "superHeroName": "Sasquatch"
    },
    {
        "superHeroName": "Sauron"
    },
    {
        "superHeroName": "Savage Dragon"
    },
    {
        "superHeroName": "Scarecrow"
    },
    {
        "superHeroName": "Scarlet Spider"
    },
    {
        "superHeroName": "Scarlet Spider II"
    },
    {
        "superHeroName": "Scarlet Witch"
    },
    {
        "superHeroName": "Scorpia"
    },
    {
        "superHeroName": "Scorpion"
    },
    {
        "superHeroName": "Sebastian Shaw"
    },
    {
        "superHeroName": "Sentry"
    },
    {
        "superHeroName": "Shadow King"
    },
    {
        "superHeroName": "Shadow Lass"
    },
    {
        "superHeroName": "Shadowcat"
    },
    {
        "superHeroName": "Shang-Chi"
    },
    {
        "superHeroName": "Shatterstar"
    },
    {
        "superHeroName": "She-Hulk"
    },
    {
        "superHeroName": "She-Thing"
    },
    {
        "superHeroName": "Shocker"
    },
    {
        "superHeroName": "Shriek"
    },
    {
        "superHeroName": "Shrinking Violet"
    },
    {
        "superHeroName": "Sif"
    },
    {
        "superHeroName": "Silk"
    },
    {
        "superHeroName": "Silk Spectre"
    },
    {
        "superHeroName": "Silk Spectre II"
    },
    {
        "superHeroName": "Silver Surfer"
    },
    {
        "superHeroName": "Silverclaw"
    },
    {
        "superHeroName": "Simon Baz"
    },
    {
        "superHeroName": "Sinestro"
    },
    {
        "superHeroName": "Siren"
    },
    {
        "superHeroName": "Siren II"
    },
    {
        "superHeroName": "Siryn"
    },
    {
        "superHeroName": "Skaar"
    },
    {
        "superHeroName": "Snake-Eyes"
    },
    {
        "superHeroName": "Snowbird"
    },
    {
        "superHeroName": "Sobek"
    },
    {
        "superHeroName": "Solomon Grundy"
    },
    {
        "superHeroName": "Songbird"
    },
    {
        "superHeroName": "Space Ghost"
    },
    {
        "superHeroName": "Spawn"
    },
    {
        "superHeroName": "Spectre"
    },
    {
        "superHeroName": "Speedball"
    },
    {
        "superHeroName": "Speedy"
    },
    {
        "superHeroName": "Speedy"
    },
    {
        "superHeroName": "Spider-Carnage"
    },
    {
        "superHeroName": "Spider-Girl"
    },
    {
        "superHeroName": "Spider-Gwen"
    },
    {
        "superHeroName": "Spider-Man"
    },
    {
        "superHeroName": "Spider-Man"
    },
    {
        "superHeroName": "Spider-Man"
    },
    {
        "superHeroName": "Spider-Woman"
    },
    {
        "superHeroName": "Spider-Woman II"
    },
    {
        "superHeroName": "Spider-Woman III"
    },
    {
        "superHeroName": "Spider-Woman IV"
    },
    {
        "superHeroName": "Spock"
    },
    {
        "superHeroName": "Spyke"
    },
    {
        "superHeroName": "Stacy X"
    },
    {
        "superHeroName": "Star-Lord"
    },
    {
        "superHeroName": "Stardust"
    },
    {
        "superHeroName": "Starfire"
    },
    {
        "superHeroName": "Stargirl"
    },
    {
        "superHeroName": "Static"
    },
    {
        "superHeroName": "Steel"
    },
    {
        "superHeroName": "Stephanie Powell"
    },
    {
        "superHeroName": "Steppenwolf"
    },
    {
        "superHeroName": "Storm"
    },
    {
        "superHeroName": "Stormtrooper"
    },
    {
        "superHeroName": "Sunspot"
    },
    {
        "superHeroName": "Superboy"
    },
    {
        "superHeroName": "Superboy-Prime"
    },
    {
        "superHeroName": "Supergirl"
    },
    {
        "superHeroName": "Superman"
    },
    {
        "superHeroName": "Swamp Thing"
    },
    {
        "superHeroName": "Swarm"
    },
    {
        "superHeroName": "Sylar"
    },
    {
        "superHeroName": "Synch"
    },
    {
        "superHeroName": "T-1000"
    },
    {
        "superHeroName": "T-800"
    },
    {
        "superHeroName": "T-850"
    },
    {
        "superHeroName": "T-X"
    },
    {
        "superHeroName": "Taskmaster"
    },
    {
        "superHeroName": "Tempest"
    },
    {
        "superHeroName": "Thanos"
    },
    {
        "superHeroName": "The Cape"
    },
    {
        "superHeroName": "The Comedian"
    },
    {
        "superHeroName": "Thing"
    },
    {
        "superHeroName": "Thor"
    },
    {
        "superHeroName": "Thor Girl"
    },
    {
        "superHeroName": "Thunderbird"
    },
    {
        "superHeroName": "Thunderbird II"
    },
    {
        "superHeroName": "Thunderbird III"
    },
    {
        "superHeroName": "Thunderstrike"
    },
    {
        "superHeroName": "Thundra"
    },
    {
        "superHeroName": "Tiger Shark"
    },
    {
        "superHeroName": "Tigra"
    },
    {
        "superHeroName": "Tinkerer"
    },
    {
        "superHeroName": "Titan"
    },
    {
        "superHeroName": "Toad"
    },
    {
        "superHeroName": "Toxin"
    },
    {
        "superHeroName": "Toxin"
    },
    {
        "superHeroName": "Tracy Strauss"
    },
    {
        "superHeroName": "Trickster"
    },
    {
        "superHeroName": "Trigon"
    },
    {
        "superHeroName": "Triplicate Girl"
    },
    {
        "superHeroName": "Triton"
    },
    {
        "superHeroName": "Two-Face"
    },
    {
        "superHeroName": "Ultragirl"
    },
    {
        "superHeroName": "Ultron"
    },
    {
        "superHeroName": "Utgard-Loki"
    },
    {
        "superHeroName": "Vagabond"
    },
    {
        "superHeroName": "Valerie Hart"
    },
    {
        "superHeroName": "Valkyrie"
    },
    {
        "superHeroName": "Vanisher"
    },
    {
        "superHeroName": "Vegeta"
    },
    {
        "superHeroName": "Venom"
    },
    {
        "superHeroName": "Venom II"
    },
    {
        "superHeroName": "Venom III"
    },
    {
        "superHeroName": "Venompool"
    },
    {
        "superHeroName": "Vertigo II"
    },
    {
        "superHeroName": "Vibe"
    },
    {
        "superHeroName": "Vindicator"
    },
    {
        "superHeroName": "Vindicator"
    },
    {
        "superHeroName": "Violator"
    },
    {
        "superHeroName": "Violet Parr"
    },
    {
        "superHeroName": "Vision"
    },
    {
        "superHeroName": "Vision II"
    },
    {
        "superHeroName": "Vixen"
    },
    {
        "superHeroName": "Vulcan"
    },
    {
        "superHeroName": "Vulture"
    },
    {
        "superHeroName": "Walrus"
    },
    {
        "superHeroName": "War Machine"
    },
    {
        "superHeroName": "Warbird"
    },
    {
        "superHeroName": "Warlock"
    },
    {
        "superHeroName": "Warp"
    },
    {
        "superHeroName": "Warpath"
    },
    {
        "superHeroName": "Wasp"
    },
    {
        "superHeroName": "Watcher"
    },
    {
        "superHeroName": "Weapon XI"
    },
    {
        "superHeroName": "White Canary"
    },
    {
        "superHeroName": "White Queen"
    },
    {
        "superHeroName": "Wildfire"
    },
    {
        "superHeroName": "Winter Soldier"
    },
    {
        "superHeroName": "Wiz Kid"
    },
    {
        "superHeroName": "Wolfsbane"
    },
    {
        "superHeroName": "Wolverine"
    },
    {
        "superHeroName": "Wonder Girl"
    },
    {
        "superHeroName": "Wonder Man"
    },
    {
        "superHeroName": "Wonder Woman"
    },
    {
        "superHeroName": "Wondra"
    },
    {
        "superHeroName": "Wyatt Wingfoot"
    },
    {
        "superHeroName": "X-23"
    },
    {
        "superHeroName": "X-Man"
    },
    {
        "superHeroName": "Yellow Claw"
    },
    {
        "superHeroName": "Yellowjacket"
    },
    {
        "superHeroName": "Yellowjacket II"
    },
    {
        "superHeroName": "Ymir"
    },
    {
        "superHeroName": "Yoda"
    },
    {
        "superHeroName": "Zatanna"
    },
    {
        "superHeroName": "Zoom"
    },
    {
        "superHeroName": "Ironman"
    }
];


export default Demo
