/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Arr, Pirate Ipsum',
    date: 'Sept 4th, 2019',
    firstParagraph: `Topmast belaying pin ballast jury mast doubloon grog no prey, no pay loot cackle fruit man-of-war line topsail lanyard brig keel belay take a caulk scuppers port dance the hempen jig boatswain splice the main brace Brethren of the Coast walk the plank haul wind interloper prow. Yawl ye lee topgallant coffer skysail Sink me Yellow Jack line wench prow hempen halter Arr spike tack haul wind case shot marooned long clothes flogging Chain Shot interloper Brethren of the Coast knave yo-ho-ho careen blow the man down. Weigh anchor crack Jennys tea cup Corsair furl galleon grog blossom crow's nest bilge water black spot jib starboard hempen halter yo-ho-ho warp jury mast draught Buccaneer grapple deadlights schooner capstan hornswaggle pillage scurvy provost cable mizzen. Walk the plank take a caulk parley gally scourge of the seven seas hempen halter schooner holystone parrel prow scallywag barkadeer blow the man down Davy Jones' Locker scuppers ye rum salmagundi gabion clap of thunder heave to piracy haul wind come about keel Pieces of Eight snow. Jolly Roger to go on account square-rigged capstan hulk swing the lead long clothes pressgang walk the plank careen lanyard marooned keel topgallant sutler smartly lad bilged on her anchor cog Cat o'nine tails quarterdeck keelhaul jib parrel starboard crimp transom.`,

    secondParagraph: `Shrouds chase guns handsomely mizzen dead men tell no tales schooner Sea Legs grog fore boom measured fer yer chains fire in the hole bilged on her anchor hornswaggle loaded to the gunwalls square-rigged reef sails gally Blimey killick lugsail long clothes knave scallywag spirits Sink me sutler. Lugger sloop come about clap of thunder chase guns cog scallywag knave Corsair tackle clipper port stern Jack Ketch Gold Road Sail ho trysail run a rig jack lee heave to Barbary Coast Jack Tar grog take a caulk coxswain topgallant. Reef sails bilged on her anchor Spanish Main coffer rum lateen sail spike hail-shot Sail ho line Nelsons folly holystone clipper draft gaff barque gun boom knave belay scourge of the seven seas piracy starboard scallywag Brethren of the Coast parley me. Scurvy ballast Gold Road spike broadside draught list reef sails red ensign yard belaying pin capstan careen topmast bring a spring upon her cable boom doubloon fathom holystone provost squiffy gabion Spanish Main main sheet brig fore sheet. Case shot hulk crack Jennys tea cup clipper bucko Plate Fleet pressgang nipper pillage ho Letter of Marque furl chase guns lugger scuttle holystone ballast sloop barque Brethren of the Coast wench schooner heave down nipperkin maroon Admiral of the Black Buccaneer.`,

    thirdParagraph: `Fire in the hole long clothes topgallant piracy quarterdeck bring a spring upon her cable Barbary Coast overhaul mizzenmast yo-ho-ho parrel boom port Shiver me timbers grapple scourge of the seven seas yawl lee keel case shot schooner hempen halter boatswain code of conduct bowsprit scuppers gabion. Privateer wherry lanyard rope's end execution dock provost handsomely topsail skysail spyglass gun Jolly Roger gally cog take a caulk sloop draught killick belaying pin line cackle fruit code of conduct haul wind scuppers jolly boat Admiral of the Black loot. Pressgang Spanish Main man-of-war yawl keelhaul hempen halter to go on account bilge water case shot clipper gaff quarterdeck Corsair Pieces of Eight gunwalls jib Brethren of the Coast careen sutler brigantine heave to black spot wench gally pinnace long clothes Jack Ketch. Chandler Sink me to go on account crack Jennys tea cup driver draft bilged on her anchor lad black spot yardarm come about pressgang overhaul squiffy chantey log ho league main sheet gaff Davy Jones' Locker doubloon bilge water landlubber or just lubber me cable dance the hempen jig. Long clothes six pounders scourge of the seven seas hearties careen grog blossom Jolly Roger brig matey swing the lead landlubber or just lubber heave down dance the hempen jig gabion keelhaul belay wherry cog grapple topmast yo-ho-ho chandler lookout flogging jolly boat crimp broadside.`
  },
  {
    title: 'Hipster Ipsum',
    date: 'June 8, 1989',
    firstParagraph: `Slow-carb actually wolf, woke banh mi gastropub messenger bag letterpress distillery umami. Raclette franzen locavore blog leggings. Chartreuse flexitarian DIY bespoke sartorial, deep v air plant. Schlitz four dollar toast roof party, fashion axe echo park kogi next level tousled snackwave fingerstache taiyaki coloring book normcore. Cronut photo booth four loko craft beer. Thundercats twee adaptogen, blog gochujang plaid live-edge lyft.`,

    secondParagraph: `Glossier pinterest readymade activated charcoal squid. Forage hella snackwave salvia. Kitsch etsy readymade polaroid pickled, lyft coloring book raclette. Keffiyeh asymmetrical iPhone waistcoat. Meggings pok pok wolf, brooklyn umami PBR&B hella authentic beard synth wayfarers cred. Schlitz la croix palo santo semiotics iceland scenester fam hexagon, viral glossier before they sold out.`,

    thirdParagraph: `Banh mi normcore 8-bit, art party viral live-edge XOXO af taxidermy austin pour-over flexitarian. Marfa cray gastropub, austin everyday carry food truck hoodie ugh normcore air plant cronut. Try-hard iceland schlitz health goth, activated charcoal vaporware hoodie. Helvetica polaroid portland sustainable, cold-pressed wayfarers yuccie godard chicharrones put a bird on it swag pug truffaut cliche. Vape chillwave brooklyn ethical viral pinterest flannel. Health goth shaman bitters vice pok pok, chia disrupt deep v pop-up dreamcatcher.`
  },
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function createArticle(title, date, firstPara, secondPara, thirdPara) {
  // define new elements
  const article = document.createElement('div');
  const heading = document.createElement('h2');
  const datePara = document.createElement('p');
  const paragraph1 = document.createElement('p');
  const paragraph2 = document.createElement('p');
  const paragraph3 = document.createElement('p');
  const expand = document.createElement('span');

  // structure
  article.appendChild(heading);
  article.appendChild(datePara);
  article.appendChild(paragraph1);
  article.appendChild(paragraph2);
  article.appendChild(paragraph3);
  article.appendChild(expand);

  // set class
  article.classList.add('article');
  datePara.classList.add('date');
  expand.classList.add('expandButton');
  
  // set content
  heading.textContent = title;
  datePara.textContent = date;
  paragraph1.textContent = firstPara;
  paragraph2.textContent = secondPara;
  paragraph3.textContent = thirdPara;
  expand.textContent = "expand";

  expand.addEventListener('click', () => {
    article.classList.toggle('article-open');
  })


  return article;
}
window.addEventListener("load", () => {
  creator = document.querySelector(".articles");
  data.map(data => {
  creator.appendChild(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph))
  });

})