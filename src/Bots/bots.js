import Cat1 from "../assets/Cat1.gif";
import Cat2 from "../assets/Cat2.gif";
import Cat3 from "../assets/Cat3.gif";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const shiFuMi = () => {
  const coup = getRandomInt(3);
  switch (coup) {
    case 0:
      return "Pierre !";
    case 1:
      return "Feuille !";
    case 2:
      return "Ciseaux !";
    default:
      return "Puit";
  }
};

const getRandomEnigme = () => {
  const chance = getRandomInt(9);
  switch (chance) {
    case 0:
      return "Qu'est-ce qui a 13 cœurs mais aucun autre organes ?";
    case 1:
      return "A quelle question est-ce que vous ne pourrez jamais répondre 'oui'?";
    case 2:
      return "Qu'est ce que l'on doit casser avant de l'utiliser? (Attention, ce n'est pas votre ordinateur!!!)";
    case 3:
      return "Qui se lève sans faire de bruit ?";
    case 4:
      return "Qu'est-ce qu'une éclipse ?";
    case 5:
      return "Qu'est ce que du ciment dans un pot ? ";
    case 6:
      return "Quel est le mode de transport préféré des vampires ?";
    case 7:
      return "Combien font 3 et 3 ?";
    case 8:
      return "Qu'est-ce qui a deux aiguilles mais qui ne pique pas ?.";
  }
};

const getRandomProverbe = () => {
  const chance = getRandomInt(9);
  switch (chance) {
    case 0:
      return "Il vaut mieux se taire et passer pour un con plutôt que de parler et de ne laisser aucun doute sur le sujet.";
    case 1:
      return "Le divertissement est le meilleur régime contre le poids de l'existence.";
    case 2:
      return "Il vaut mieux mobiliser son intelligence sur des conneries que mobiliser sa connerie sur des choses intelligentes.";
    case 3:
      return "Les hommes sont toujours sincères. Ils changent de sincérité voilà tout.";
    case 4:
      return "Depuis que j'ai appris à rire de moi-même, je ne m'ennuie plus jamais.";
    case 5:
      return "Le culte de Dieu mortifie la concupiscence";
    case 6:
      return "La religion sans la conscience morale n'est qu'un culte superstitieux.";
    case 7:
      return "Ayez le culte de l'esprit critique.";
    case 8:
      return "Un tiens vaut mieux que deux tu l'auras.";
  }
};

const getRandomHello = () => {
  const chance = getRandomInt(9);
  switch (chance) {
    case 0:
      return "Kikoo ^_^/";
    case 1:
      return "Greetings traveler";
    case 2:
      return "Salution, je suis le chef";
    case 3:
      return "Salut à tous les amis c'est chavidLaFarge";
    case 4:
      return "Salut à toi jeune entrepreneur";
    case 5:
      return "Hello world";
    case 6:
      return "Salut à tous, c'est ChiabloX9";
    case 7:
      return "Tu viens pour la onche onche onche party ? ~O~ Tu as rammené le cochon grillay ?";
    case 8:
      return "Bonjour.";
  }
};

const getMeteo = () => {
  const chance = getRandomInt(9);
  switch (chance) {
    case 0:
      return "ensoleillé";
    case 1:
      return "pluvieux";
    case 2:
      return "nuaguex";
    case 3:
      return "orageux";
    case 4:
      return "OURAGAN";
    case 5:
      return "tempête";
    case 6:
      return "dégueulasse";
    case 7:
      return "apacalyptique";
    case 8:
      return "rempli d'opportunité";
  }
};

const getSort = () => {
  const chance = getRandomInt(9);
  switch (chance) {
    case 0:
      return "Avada kedavra";
    case 1:
      return "Allohomora";
    case 2:
      return "Endoloris";
    case 3:
      return "Expelliarmus";
    case 4:
      return "Flipendo";
    case 5:
      return "Incendio";
    case 6:
      return "Lumos";
    case 7:
      return "Oubliette";
    case 8:
      return "Wingardium leviosaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  }
};

function sensDeLaVie(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklm nopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const createBotMessage = (name, message) => ({
  from: name,
  to: "user",
  date: new Date(),
  content: message,
});

const chatNiversaireAnswer = (message) => {
  const name = "ChatNiversaire";
  const string = message.toLowerCase();
  if (
    string.includes("help") ||
    string.includes("aled") ||
    string.includes("aide") ||
    string.includes("commandes")
  ) {
    return createBotMessage(
      name,
      "Voici les commandes que je vous offre: 'salut', 'random', 'shifumi"
    );
  }
  if (
    string.includes("salut") ||
    string.includes("slt") ||
    string.includes("bonjour") ||
    string.includes("bjr") ||
    string.includes("cc") ||
    string.includes("coucou") ||
    string.includes("hi") ||
    string.includes("hello") ||
    string.includes("greetings")
  ) {
    return createBotMessage(name, getRandomHello());
  }
  if (string.includes("random")) {
    return createBotMessage(
      name,
      `Votre nombre porte bonheur est le: ${getRandomInt(100)}`
    );
  }
  if (string.includes("tricheur") || string.includes("cheater")) {
    return createBotMessage(name, "Rageux !");
  }
  if (
    string.includes("shifumi") ||
    string.includes("pierre") ||
    string.includes("ciseaux") ||
    string.includes("feuille")
  ) {
    if (string.includes("pierre")) {
      return createBotMessage(name, `Shi, Fu, Mi ! Feuille`);
    } else if (string.includes("ciseaux")) {
      return createBotMessage(name, `Shi, Fu, Mi ! Pierre`);
    } else if (string.includes("feuille")) {
      return createBotMessage(name, `Shi, Fu, Mi ! Ciseaux`);
    }
    return createBotMessage(name, `Shi, Fu, Mi ! ${shiFuMi()}`);
  }
  return createBotMessage(name, "Joyeux chatniversaire !");
};

const holmesAnswer = (message) => {
  const name = "Chat-Lock Holmes";
  const string = message.toLowerCase();
  if (
    string.includes("help") ||
    string.includes("aled") ||
    string.includes("aide") ||
    string.includes("commandes")
  ) {
    return createBotMessage(
      name,
      "Les  indices actuelles sont: 'salut', 'énigme', 'proverbe', 'oui', 'non'"
    );
  }
  if (
    string.includes("salut") ||
    string.includes("slt") ||
    string.includes("bonjour") ||
    string.includes("bjr") ||
    string.includes("cc") ||
    string.includes("coucou") ||
    string.includes("hi") ||
    string.includes("hello") ||
    string.includes("greetings")
  ) {
    return createBotMessage(name, getRandomHello());
  }
  if (string.includes("proverbe")) {
    return createBotMessage(name, getRandomProverbe());
  }
  if (string.includes("énigme") || string.includes("enigme")) {
    return createBotMessage(name, getRandomEnigme());
  }
  if (string.includes("oui") || string.includes("si")) {
    return createBotMessage(name, "Non.");
  }
  if (string.includes("non") || string.includes("no")) {
    return createBotMessage(name, "Si.");
  }

  return createBotMessage(name, "Élémentaire mon chère chatson !");
};

const magicAnswer = (message) => {
  const name = "Chat-Lock Holmes";
  const string = message.toLowerCase();
  if (
    string.includes("help") ||
    string.includes("aled") ||
    string.includes("aide") ||
    string.includes("commandes")
  ) {
    return createBotMessage(
      name,
      "Je ne répondrais qu'au phrase suivante: 'salut', 'meteo', 'sort', 'sens de la vie'"
    );
  }
  if (
    string.includes("salut") ||
    string.includes("slt") ||
    string.includes("bonjour") ||
    string.includes("bjr") ||
    string.includes("cc") ||
    string.includes("coucou") ||
    string.includes("hi") ||
    string.includes("hello") ||
    string.includes("greetings")
  ) {
    return createBotMessage(name, getRandomHello());
  }
  if (string.includes("meteo")) {
    return createBotMessage(name, `Demain sera ${getMeteo()}.`);
  }
  if (string.includes("sort")) {
    return createBotMessage(name, `En garde ! ${getSort()} !`);
  }
  if (string.includes("sens de la vie") || string.includes("42")) {
    return createBotMessage(
      name,
      `Très bien... Le sens de la vie est ${sensDeLaVie(
        getRandomInt(200) + 15
      )} !`
    );
  }
  return createBotMessage(name, "Il me faut de la mana");
};

const catBots = [
  {
    id: "0",
    name: "ChatNiversaire",
    class: "ChatNiversaire",
    avatar: Cat1,
    messages: [
      {
        from: "ChatNiversaire",
        to: "user",
        date: new Date(),
        content:
          "Miaou, parle moi si tu l'oses, écris help si tu as des questions ! ",
      },
    ],
    answer: chatNiversaireAnswer,
  },
  {
    id: "1",
    name: "Chat-Lock Holmes",
    class: "ChatSherlockHolmes",
    avatar: Cat2,
    messages: [
      {
        from: "Chat-Lock Holmes",
        to: "user",
        date: new Date(),
        content: "Élémentaire mon cher Chatson.",
      },
    ],
    answer: holmesAnswer,
  },
  {
    id: "2",
    name: "ChatGicien",
    class: "ChatGicien",
    avatar: Cat3,
    messages: [
      {
        from: "ChatGicien",
        to: "user",
        date: new Date(),
        content: "Miaou, Cadabra !",
      },
    ],
    answer: magicAnswer,
  },
];

export { catBots };
