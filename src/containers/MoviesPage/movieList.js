import Episode1 from '../../assets/imgs/movie-episode-1.jpg';
import Episode2 from '../../assets/imgs/movie-episode-2.jpg';
import Episode3 from '../../assets/imgs/movie-episode-3.jpg';
import Episode4 from '../../assets/imgs/movie-episode-4.jpg';
import Episode5 from '../../assets/imgs/movie-episode-5.jpg';
import Episode6 from '../../assets/imgs/movie-episode-6.jpg';
import Episode7 from '../../assets/imgs/movie-episode-7.jpg';
import Episode8 from '../../assets/imgs/movie-episode-8.jpg';
import Episode9 from '../../assets/imgs/movie-episode-9.jpg';

const movieList = [
  {
    id: 'ep1',
    rank: 1,
    name: 'Episode I – The Phantom Menace',
    photo: Episode1,
    releaseDate: 'May 19, 1999',
    synopsis: `The seeds for the eventual rise of the evil Empire are sown in a seemingly routine place: a trade dispute between the Republic and the Trade Federation. Two Jedi, the keepers of peace and justice, are dispatched to negotiate the dispute, but (wait for it) it's a trap! They end up barely escaping with their lives, though they do meet R2-D2, who saves their lives. They end up on remote Tatooine, where they meet slave boy Anakin Skywalker and his protocol droid C3PO. Jedi Qui-Gon Jinn senses the Force in Anakin - and believes he's the "Chosen One" who will bring balance to the Force. There's a podrace and Anakin is freed. Qui-Gon wants to train Anakin, but the Jedi Council knows something is up with this boy and rejects it. But he helps the Republic win a battle against the Trade Federation so the Council lets Obi-Wan Kenobi take him as his apprentice.`,
  },
  {
    id: 'ep2',
    rank: 2,
    name: 'Episode II – Attack of the Clones',
    photo: Episode2,
    releaseDate: 'May 16, 2002',
    synopsis: `Anakin is older now, but just as bad an actor. The weird trade dispute has grown to a full-scale revolt against the Republic. Anakin is assigned to protect Republic loyalist Sen. Padme Amidala, and they fall in love. Meanwhile, Obi-Wan discovers that a Jedi master has ordered the creation of an army of clones based on a single bounty hunter, Jango Fett, whom Obi-Wan determines is the assassin trying to kill Padme - though he does not know why. He also has no idea why the Jedi have ordered up a clone army. Meanwhile, Anakin's mom is murdered and he freaks out, channeling the dark side that everyone knows he has in him. The full-scale revolt against the Republic is being led by Count Dooku, a former Jedi, who has built his own droid army. Under pressure, the Galactic Senate votes the Chancellor emergency powers, which (wait for it!) is also a trap! The two armies battle and the Jedi and the Clones barely win. The movie ends with the revelation that Dooku, the revolt, the clones and the droids are all being controlled by an evil Sith Lord - who is actually the Chancellor!`,
  },
  {
    id: 'ep3',
    rank: 3,
    name: 'Episode III – Revenge of the Sith',
    photo: Episode3,
    releaseDate: 'May 19, 2005',
    synopsis: `The Chancellor has been captured by a revolt leader General Grievous, but Obi-Wan and Anakin rescue him heroically. The Chancellor, seeking to draw out Anakin's dark side, demands that Anakin assassinate Dooku, which he does. Anakin is dealing with his demons, including visions of Padme dying in childbirth. The Council declines to elevate him to Master status, so the Chancellor puts him on the Jedi Council as his representative (spy). He also brags to Anakin that he knows how to harness the dark side to cheat death — though you can't learn that from any (dismissively) Jedi. But (wait for it!), it's a trap. Anakin eventually figures out that the Chancellor is a Sith Lord, but when the Jedi try to arrest him, Anakin comes to his aid because he still wants to save Padme from the visions of death. The Chancellor makes Anakin his apprentice and dubs him Darth Vader. He also orders him to kill everyone, including younglings, though a few Jedi, including Yoda, escape. Obi-Wan tries to stop him with an epic lightsaber battle on the molten planet Mustafar, leaving Anakin next to a lava river as little more than a burnt up torso. The Chancellor saves him, puts him in Darth Vader's famous black suit and they start the Death Star. Padme dies in childbirth and her twins, Luke and Leia are separated and hidden from the now-Empire, with Leia going to Alderaan and Luke ending up on Tatooine, with Obi-Wan going into exile there to watch over the boy.`,
  },
  {
    id: 'ep4',
    rank: 4,
    name: 'Episode IV – A New Hope',
    photo: Episode4,
    releaseDate: 'May 25, 1977',
    synopsis: `Now older, Luke is just a moisture farmer's boy with no idea of his backstory. But Leia is a major figure in a new rebellion against the Empire. Her ship is attacked by Vader, who makes no mention of the fact that he's her dad. She sneaks the stolen plans for the Death Star into R2-D2, who ends up escaping to Tatooine with C3PO, who is as shrill as ever. The droids end up in service to Luke and his family, but R2 escapes to find Obi-Wan. Few have seen such loyalty in a droid! Obi-Wan tells Luke about his father - but leaves out all the part about him turning evil. They hook up with roguish Han Solo for a flight on the Millennium Falcon so they can get to Alderaan and join the rebellion. First, Solo shoots first and kills Greedo. Then they take off. En route, the Death Star proves that it's the ultimate power in the universe by destroying Alderaan in one shot. The Falcon comes out of hyperspace into the rubble and (wait for it!) it's a trap! The ship is captured by the Empire. Obi-Wan sneaks around and shuts down the forcefield so the Falcon and passengers can escape, but he's struck down by Vader as he flees. The rebels still have the plans for the Death Star and plot a suicide mission that involves dropping a laser bomb into a tiny vent shaft. Solo declines to participate because, hey, he has to pay off Jabba the Hutt anyway. Luke is disappointed, but Solo shows up just in time to save his life and allow him to finish his mission, using the Force and his experience bulls-eyeing womp rats in his T-16. Much celebrations ensue.`,
  },
  {
    id: 'ep5',
    rank: 5,
    name: 'Episode V – The Empire Strikes Back',
    photo: Episode5,
    releaseDate: 'May 21, 1980',
    synopsis: `Vader pursues the rebels to a new hideout on the ice planet of Hoth. Luke is visited by the spirit of Obi-Wan and told to go to Dagobah to study the ways of the Force with Yoda. Han and Leia barely escape and head to the Cloud City run by Han's scoundrel friend Lando Calrissian. But (wait for it!) it's a trap as the Falcon was tracked by Boba Fett - Jango's revenge-seeking son - who alerts Vader what's going on. He shows up and captures Leia and freezes Han in carbonite so Boba Fett can take him to Jabba. Vader has little interest in Solo because he doesn't have the Force. Lando helps Leia escape, but then Luke bails on his training and shows up (it's another trap!), where Vader reveals that he's Luke's father ("Noooooooooooo!"). Luke barely escapes. Lando and Chewbacca head to Tatooine to free Han and Luke and Leia wait for the next movie.`,
  },
  {
    id: 'ep6',
    rank: 6,
    name: 'Episode VI – Return of the Jedi',
    photo: Episode6,
    releaseDate: 'May 25, 1983',
    synopsis: `Luke and Leia head to Tatooine to save Han, but Leia is taken as a slave and given a super-hot metal bikini that changed every teenage boy's life. Using super-Jedi powers, Luke infiltrates Jabba's palace and gives Jabba one last warning. The crime boss ignores it and captures Luke. He takes him, Lando, Chewy and Han to a Sarlacc pit intending to drop them in to be digested over many years, but they turn the tables on him, which reminds us all why it's important to heed a Jedi's warning. Luke goes for more training and Yoda reveals that Darth Vader really is his father. Meanwhile, Han and Leia try to stop the completion of a second Death Star by knocking out an energy field that is protecting the construction site. But (wait for it!) it's a trap. Vader brings Luke to the Death Star to meet the Emperor, who tempts Luke to give into his dark side. At one point, the Emperor even asks Luke to kill Vader to take his place, but Luke won't do it - he's a Jedi, he says, "like my father!" That redeems Vader, who kills the Emperor, but dies in the process - but not before revealing to Luke that he still has good in him. The forcefield down, the rebels destroy the second Death Star and there is much rejoicing. Leia tells Han she loves him - and he knows!`,
  },
  {
    id: 'ep7',
    rank: 7,
    name: 'Episode VII – The Force Awakens',
    photo: Episode7,
    releaseDate: 'December 18, 2015',
    synopsis: `OK, so 30 years have passed. Luke has disappeared. Han and Leia have split up. He's reverted to his old ways and gone to seed as a freighter captain still holding a grudge, mourning his failed marriage and, most important, missing his first love, the Millennium Falcon. Leia remains a big wig with the rebels — who are now called The Resistence (though it is not clear what they are actually resisting). Meanwhile, there's a new evil group in the galaxy far far away called The First Order. It's leader, Kylo Ren, is a Darth Vader fanboy (right down to the Force and the melted Vader helmet he carries around like a trophy) bent on destroying what's left of the Republic. Oh, and (spoiler alert) he's Leia and Han's son. This wouldn't be a "Star Wars" film without a hero emerging from a desert planet so remote that even the bad guys don't know about it. This time, the hero is a woman, Rey, who slowly begins to feel the Force inside her and uses it to help locate the missing Skywalker, who (spoiler alert) handled Han and Leia's son's Jedi training so badly that he became Kylo Ren. Han helps the Resistence destroy The First Order's planet-munching machine (isn't there always one of those in a "Star Wars" movie?), but (spoiler alert) dies in the effort. It's all very sad. But it sets up a great few sequels.`,
  },
  {
    id: 'ep8',
    rank: 8,
    name: 'Episode VIII – The Last Jedi',
    photo: Episode8,
    releaseDate: 'December 15, 2017',
    synopsis: `Rey has found the legendary Luke Skywalker, hoping to be trained in the ways of the Force. Meanwhile, the First Order seeks to destroy the remnants of the Resistance and rule the galaxy unopposed.`,
  },
  {
    id: 'ep9',
    rank: 9,
    name: 'Episode IX – The Rise of Skywalker',
    photo: Episode9,
    releaseDate: 'December 20, 2019',
    synopsis: `A powerful enemy returns and Rey must face her destiny.`,
  },
];

export default movieList;
