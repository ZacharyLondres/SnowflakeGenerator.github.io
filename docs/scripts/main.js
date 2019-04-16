let Areas = ['Underground', 'Mortaynia', 'Tirrawinnin', 'Desert', 'One Chunk', 'Fremenik', 'Islands and Ports', 'Karamja', 'Wilderness', 'Surface', 'Zeah', 'Fossile Island', 'Castles'];
let Restrictions = ['No Coins', 'NoStore', 'Specific color items', 'Primitive', 'Nudist', 'Range Only', 'Mage Only', 'Melee Only', 'RP Character', 'Pure', 'Skiller', '99 one at a time', 'One level at a time', 'By release', 'Vampire', 'Clue scroll', 'No quests' ];
let IronType = ['Ironman', 'Hardcore Ironman', 'Ultimate Ironman'];

const AreaBox = document.querySelector('#area');
const RestrictionsBox = document.querySelector('#restrictions');
const TypeBox = document.querySelector('#type');
const GenButton = document.querySelector('#GenerateButton');

GenButton.addEventListener('click', Generate);


function Generate(){
//Area
let index = RandomFromZero(Areas.length);
AreaBox.textContent = Areas[index];

//Restrictions
index = RandomFromZero(Restrictions.length);
RestrictionsBox.textContent = Restrictions[index];

//Ironman Type
index = RandomFromZero(IronType.length);
TypeBox.textContent = IronType[index];
}


function RandomFromZero(MaxValue = 0){
    let x = Math.random();
    let multi = x * MaxValue;
    let y = Math.floor(multi);
    return y;
}