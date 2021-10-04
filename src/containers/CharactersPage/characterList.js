import CharK2SO from '../../assets/imgs/char-k2so.jpg';
import CharC3PO from '../../assets/imgs/char-c3po.jpg';
import CharRey from '../../assets/imgs/char-rey.jpg';
import CharFinn from '../../assets/imgs/char-finn.jpg';
import CharLuke from '../../assets/imgs/char-luke.jpg';
import CharR2D2 from '../../assets/imgs/char-r2d2.jpg';
import CharYoda from '../../assets/imgs/char-yoda.jpg';
import CharChewbacca from '../../assets/imgs/char-chewbacca.jpg';
import CharObiWan from '../../assets/imgs/char-obiwan.jpg';
import CharLeia from '../../assets/imgs/char-leia.jpg';
import CharHanSolo from '../../assets/imgs/char-han-solo.jpg';
import CharDarthVader from '../../assets/imgs/char-darth-vader.jpg';

const charList = [
  {
    id: 'k2so',
    rank: 1200,
    name: 'K-2SO',
    photo: CharK2SO,
    keyline: 'I find that argument vague and unconvincing.',
    who: [
      'The lanky, cranky ex-Imperial security droid who helps the Rebels break into the Imperial compound in ‘Rogue One’. Think C-3PO with a bad attitude and verbal diarrhoea (though with the same clipped British accent).',
    ],
    why: [
      'Because he’s the first Star Wars sidekick who’s genuinely funny – K-2’s way with a dry, often unintentional putdown is sardonically hilarious. The design is great, too – he’s all hulking and ungainly, like an overgrown metal teenager.',
    ],
  },
  {
    id: 'c3po',
    rank: 1100,
    name: 'C-3PO',
    photo: CharC3PO,
    keyline: 'We’re doomed.',
    who: [
      'A gleaming golden God to some, a deeply annoying buzz-kill to others, protocol droid Threepio is fluent in over 6,000,000 forms of communication, and boy does he love to go on about it.',
    ],
    why: [
      'If Threepio had restricted himself to the original ‘Star Wars’ trilogy he’d be higher on this list: his appearances in those movies, whether it’s berating R2-D2 for his obstinacy, tapping Han Solo on the shoulder mid-snog or awkwardly buddying up to Jabba the Hutt, are consistently charming and funny. But the prequel trilogy tended to use him as an automatic gag generator, punctuating the action with inappropriate asides (‘this is such a drag!’). Also, how did a slave boy on a remote desert world manage to build a droid that knows 6,000,000 languages? Anyway, let’s hope the new movies restore our cybernetic hero to his former glory.',
    ],
  },
  {
    id: 'rey',
    rank: 1000,
    name: 'Rey',
    photo: CharRey,
    keyline:
      'You will remove these restraints and leave this cell with the door open.',
    who: [
      'The mysterious heroine of ‘The Force Awakens’, a young orphan with a hidden past who dreams of escape from her drab, backwater existence – but when she gets the chance, isn’t sure if adventure was such a great idea after all. The mysterious heroine of ‘The Force Awakens’, a young orphan with a hidden past who dreams of escape from her drab, backwater existence – but when she gets the chance, isn’t sure if adventure was such a great idea after all.',
    ],
    why: [
      'Because she’s like something out of an old-fashioned British kids adventure novel: plucky, proud and a bit posh, with nerves of steel and a whip-smart mouth. Watching actress Daisy Ridley bound up those stone steps on the planet Ahch-To in the final moments of ‘The Force Awakens’, we couldn’t help but be reminded of the BBC fantasy stories we loved as kids: ‘The Owl Service’ or ‘The Secret Garden’, perhaps, with their feisty stage-school heroines. The way she ‘handles’ John Boyega’s Finn is hilarious, too – we can’t wait to see where that relationship goes.',
    ],
  },
  {
    id: 'finn',
    rank: 900,
    name: 'Finn',
    photo: CharFinn,
    keyline: "The name's Finn. And I'm in charge.",
    who: [
      'The rootless, nameless First Order stormtrooper and part-time plumbing technician – born FN-2187 – who has a crisis of conscience on manoeuvres on Jakku, rescues Resistance maverick Poe Dameron and sets out to find his way in this big ol’ universe.',
    ],
    why: [
      'Because he’s our wide-eyed guide to the eye-frazzling wonders of ‘The Force Awakens’, desperately trying to come across as cool and collected while permanently panicking on the inside. And also because he’s played by Peckham’s own John Boyega, a remarkable young actor who has unexpectedly muscled his way to the top through a combination of nerdy charm and quiet, steely toughness – perfect for the character of a child soldier who smashes his chains and goes rogue. We’re expecting big things from Finn in the next two movies: if he isn’t a Resistance general with his own fleet of starships by the end of episode IX, we’ll be mightily disappointed.',
    ],
  },
  {
    id: 'luke',
    rank: 800,
    name: 'Luke Skywalker',
    photo: CharLuke,
    keyline: 'I care!',
    who: [
      'The hero, of course! Luke is the clean-livin’, hard-workin’, elders-respectin’, sister-kissin’, all-American boy from Tatooine whose adventures form the backbone of the original ‘Star Wars’ trilogy. Just a simple kid from a broken home, Luke pulls himself up by his own utility belt and goes on to master the Force and save the entire galaxy from evil (at least temporarily). Yes, his return in ‘The Last Jedi’ was rather more downbeat, but he did manage to rally his strength and face evil one last time…',
    ],
    why: [
      'C’mon! He’s the ultimate family-friendly adventure hero: kind to animals and droids, good at fighting, flying spaceships, swinging across chasms on ropes and doing the right thing. Mark Hamill’s performance in the original trilogy is consistently intelligent, heartfelt and witty; and Luke never comes close to crossing that line between upstanding hero and annoying goody-goody.',
      'His return in the sequel trilogy proved wildly controversial, as the Force’s erstwhile champion flat-out refused to throw himself back into the fight. But whether or not you bitterly disagree with writer-director Rian Johnson’s choices here (and frankly, we’re still torn), there’s no arguing with the sheer dramatic heft that Hamill brought to the character, grey and grizzled and alone, torn between friendship and honour and fear of his own terrible power.',
    ],
  },
  {
    id: 'r2d2',
    rank: 700,
    name: 'R2-D2',
    photo: CharR2D2,
    keyline: 'Concerned uh-oh type beep, as if to say, ‘here we go again’.',
    who: [
      'A cheeky, level-headed dustbin on legs who comes complete with an Inspector Gadget-like array of convenient little nozzles and appendages. Think Henry the Hoover meets a Swiss army knife, only with personality.',
    ],
    why: [
      'Because he’s the real hero of the ‘Star Wars’ movies, consistently getting the others out of trouble just when things look their bleakest. From juggling turbolifts on an enemy battleship to save Anakin Skywalker’s miserable life to fixing Luke’s X-Wing stabilisers during the first Death Star run, from mending the hyperdrive on the Millennium Falcon to cutting his way out of an Ewok trap, Artoo does all the hard galaxy-saving work and gets precious little credit. It’s no surprise he was the first cast member to be confirmed for the third ‘Star Wars’ trilogy: without him the Imperial forces would be ruling the galaxy and Luke, Leia, Han and Chewie would be little more than glutinous splodges on the inside wall of a trash compactor. We’re a little concerned by his behaviour in ‘The Force Awakens’ though – did he really have to leave it so long to tell everyone that he knew where Luke was? Or was he just being dramatic?',
    ],
  },
  {
    id: 'yoda',
    rank: 600,
    name: 'Yoda',
    photo: CharYoda,
    keyline: 'Do, or do not. There is no try.',
    who: [
      'The diminutive backwards-talking mystical muppet whose knowledge of the Force is second to none. In the original trilogy he’s a marvel of creature design: tactile, sympathetic and loveable. His CGI incarnation in ‘The Phantom Menace’ looks like a rubber troll sprung unnervingly to life, though this does improve somewhat over the next two movies.',
    ],
    why: [
      'The diminutive backwards-talking mystical muppet whose knowledge of the Force is second to none. In the original trilogy he’s a marvel of creature design: tactile, sympathetic and loveable. His CGI incarnation in ‘The Phantom Menace’ looks like a rubber troll sprung unnervingly to life, though this does improve somewhat over the next two movies.',
      'Everything about him is iconic: that idiosyncratic manner of speech (part ageing Jewish comedian, part inscrutable samurai warrior), that unique raspy voice (supplied by Frank Oz, so the similarity to Miss Piggy is understandable), the amazing puppet work, even the really-not-so-terrible CGI in the last two prequels (the way he bounces off the walls during the lightsaber battle is amazing).',
    ],
  },
  {
    id: 'chewbacca',
    rank: 500,
    name: 'Chewbacca',
    photo: CharChewbacca,
    keyline:
      'His dismayed howl when the Echo Base doors slam shut against the Hoth night is heartbreaking.',
    who: [
      'A seven-foot walking carpet with natural furry flares, a resistance-chic bandolier and a vocal repertoire consisting of barks, rumbles and surprisingly-hard-to-imitate growls. Co-pilot of the Millennium Falcon, Chewie is another of those ‘Star Wars’ characters who inspires a deep devotion despite his inability to speak – in English, at least.',
    ],
    why: [
      'Because he’s the ultimate man, despite being a Wookiee. Chewbacca is tall, hirsute, fashionable, tough, endlessly loyal, a bit of a joker, a crack shot with a crossbow, an expert driver, is great at spaceship DIY and we reckon he probably gives the best hugs in the universe. Every man would love to be his buddy, and what woman wouldn’t want a partner this hardworking, affectionate and dashing? Sure, those heart-to-heart chats might be slightly hard work, but perhaps this is what they mean by ‘sweet nothings’. We also love Chewie because he’s played by the lovable Surrey giant Peter Mayhew, who has the best Twitter feed of all the ‘Star Wars’ alumni (it’s @thewookieeroars, if you’re interested).',
    ],
  },
  {
    id: 'obi-wan',
    rank: 400,
    name: 'Obi-Wan Kenobi',
    photo: CharObiWan,
    keyline:
      'If you strike me down, I shall become more powerful than you could possibly imagine.',
    who: [
      'From thrusting young Jedi hero to desert-wandering retainer to shimmering blue apparition, Obi-Wan is either the selfless, beating heart of the entire ‘Star Wars’ saga, or a total doormat. Still, like the great man said, many of the truths we cling to depend greatly on our own point of view.',
    ],
    why: [
      'Because he’s absolutely ruthless with a lightsaber (as our hapless number 30 knows only too well). Because his shades-of-beige wardrobe is both functional and stylish. Because he wears a trimmed beard with boundless elan. And because he’s played by two very fine actors, including perhaps the greatest thespian ever to emerge from this sceptered isle, Sir Alec Guinness.',
      'Still, it does give us slight concern that he’s basically a one-man walking support network for the accident-prone Skywalker family. And where does it get him, really? He’s forced almost to kill his best friend (who is, let’s face it, kind of a dick anyway). He’s left to shuffle around a desert for two decades as a glorified long-distance babysitter. Then, as soon as his life starts getting interesting again, he’s unceremoniously knocked off by said best friend and forced to spend the remainder of eternity as a ghost in the company of the guy who killed him! Now that’s loyalty.',
    ],
  },
  {
    id: 'princess-leia',
    rank: 300,
    name: 'Princess Leia Organa',
    photo: CharLeia,
    keyline: 'I am not a committee!',
    who: [
      'The proud, upraised face of the Rebel Alliance: a beautiful, sarcastic, blaster-packing, man-juggling, no-bullshit-taking, Danish-pastry-haircut wearing icon of womanhood – for two movies, at least. That whole gold bikini incident may have dented her feminist credentials ever so slightly, but at least she got to throttle Jabba the Hutt for it. And she came back swinging in ‘The Force Awakens’, as a full-blown General with her own Resistance army.',
    ],
    why: [
      "When we were little, Princess Leia was just an annoyance: the last action figure we’d want to unwrap on Christmas morning. Then, as adolescents, she became a bit more (ahem) interesting, but hardly a character to be taken seriously, gold bikini or no gold bikini. But now, as grown-ups, we can look back and realise that Leia, token female though she may be, is actually the most shaded, complex character in the entire 'Star Wars' saga. As a very public figure working for an outlawed cause who doesn’t just lose her family but her entire home planet, she’s got a lot more at stake than either of her flyboy toyboys. As a woman in a man’s universe she stands her ground at every turn – see how she faces down both Tarkin and Vader without breaking a sweat – becoming neither a remote aristocratic figurehead like Mon Mothma or a put-upon drudge like Aunt Beru. As the only eligible female in several light years she clearly gets a kick out of playing off Han and Luke against each other, and refuses to get sucked into any of that mushy stuff (the ‘just… hold me’ episode notwithstanding). She has the quickest mind, the sharpest tongue and, lest we forget, the most money – but as the decades pass, she remains willing to risk everything for the cause she believes in. They picked the wrong Skywalker!",
    ],
  },
  {
    id: 'han-solo',
    rank: 200,
    name: 'Han Solo',
    photo: CharHanSolo,
    keyline: 'I know.',
    who: [
      'Captain of the Millennium Falcon and cockiest space pilot in the galaxy. Han Solo is every boy’s hero, cruising from star system to star system with his hairy BFF, getting into scrapes, shooting the place up, performing occasional acts of random heroism and being rude to women until they fall madly in love with him.',
    ],
    why: [
      'It’s damn near impossible not to. His hair is great, his Bogart-cowboy-hipster outfit is legendary, his wisecracks are second to none and his lop-sided grin has broken a million hearts on a thousand worlds. But there’s more to it, somehow: in ‘The Empire Strikes Back’, Lawrence Kasdan’s crackling, old-Hollywood dialogue combines with Harrison Ford’s insouciance as a performer to elevate Han to a place few other movie heroes ever reach, creating a vital bond between character and audience.',
      'Ford’s importance to the enigma that is Han was thrown into sharp relief by the arrival of spin-off story ‘Solo’, in which Alden Ehrenreich tried to make the character his own and failed spectacularly, despite being a perfectly serviceable actor. To many of us, Han’s ultimate end in ‘The Force Awakens’ came as a real body blow: losing him was like losing an old friend – a friend with a really, really cool spaceship.',
    ],
  },
  {
    id: 'darth-vader',
    rank: 100,
    name: 'Darth Vader',
    photo: CharDarthVader,
    keyline: 'If you only knew the power of the Dark Side.',
    who: [
      'We don’t think it’s going too far to suggest that here is the single most iconic screen villain of all time: his appearance is terrifying, his voice bone-chilling, his words pure, dripping evil. But what really turns Darth into the stuff of our childhood nightmares are his actions: from snapping necks left and right – both in person and remotely – to cutting off his own son’s hand (let’s just let that one sink in for a moment), this is a guy who really, really shouldn’t be trifled with.',
    ],
    why: [
      'Because, however much we love them, the movies are full of sarcastic space pilots, pistol-packing princesses, upstanding blonde heroes, robot sidekicks and wise old wizards, but there will only ever be one Darth Vader.',
      'His backstory is perhaps problematic – the pre-teen Anakin is just a horrid little squirt, while Hayden Christensen’s grown-up incarnation can’t quite get beyond the terrible dialogue and fully engage as a character. That said, his descent into evil is convincingly handled, and the climactic battle between Anakin and Obi-Wan Kenobi is operatically magnificent.',
      'But it’s nothing next to Darth’s greatest hits: lightsabering a platoon of Rebel soldiers without so much as a shrug; tuning up his TIE-fighter controls like a snooker player chalking his cue; throttling his commanders one by one like the expendable flies they are; revealing the truth to Luke on that rickety gantry; turning on his former master as unearthly electricity howls in the bones of his face; and finally, heartbreakingly, lying stretched out on that medieval pyre as black smoke wreathes around his broken corpse. He is a perfect creation, never to be improved upon. Darth, we tremblingly salute you.',
    ],
  },
];

export default charList;
