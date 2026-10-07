    /* ============================================================
       1. DATASET: COMPLETE 124 IRREGULAR VERBS (OXFORD/CAMBRIDGE STANDARD)
       ============================================================ */
    const verbsData = [
      // GROUP 1: all identical (AAA) - 17 Verbs
      { inf: "bet", past: "bet", pp: "bet", meaning: "to risk money or assets on an outcome; to assert with complete confidence", pronInf: "/bɛt/", pronPast: "/bɛt/", pronPP: "/bɛt/", group: "group1", pattern: "AAA", icon: "🎲", collocations: "bet against the odds, safe bet", exBase: "I bet ten dollars on the home team.", exPast: "He bet all his savings yesterday.", exPP: "She has bet on this horse before." },
      { inf: "broadcast", past: "broadcast", pp: "broadcast", meaning: "to transmit audio or video over television, radio, or digital networks; to disseminate widely", pronInf: "/ˈbrɔːdkɑːst/", pronPast: "/ˈbrɔːdkɑːst/", pronPP: "/ˈbrɔːdkɑːst/", group: "group1", pattern: "AAA", icon: "📡", collocations: "broadcast live, broadcast news, broadcast wide", exBase: "Networks broadcast the championship live worldwide.", exPast: "The radio station broadcast emergency alerts all night.", exPP: "They have broadcast the special report on television." },
      { inf: "burst", past: "burst", pp: "burst", meaning: "to rupture or break open violently from internal pressure; to suddenly display strong emotion", pronInf: "/bɜːrst/", pronPast: "/bɜːrst/", pronPP: "/bɜːrst/", group: "group1", pattern: "AAA", icon: "💥", collocations: "burst into tears, burst into flames", exBase: "Balloons burst if you overfill them.", exPast: "The pipe burst during the hard frost.", exPP: "The river has burst its banks." },
      { inf: "cast", past: "cast", pp: "cast", meaning: "to register an official vote, project light or shadows, or select performers for dramatic roles", pronInf: "/kɑːst/", pronPast: "/kɑːst/", pronPP: "/kɑːst/", group: "group1", pattern: "AAA", icon: "🗳️", collocations: "cast a vote, cast doubt on, cast a shadow", exBase: "Citizens cast their ballots in November.", exPast: "The tall tower cast a long shadow at sunset.", exPP: "New evidence has cast doubt on his testimony." },
      { inf: "cost", past: "cost", pp: "cost", meaning: "to require the financial payment of a specific amount; to cause the sacrifice or loss of something valuable", pronInf: "/kɒst/", pronPast: "/kɒst/", pronPP: "/kɒst/", group: "group1", pattern: "AAA", icon: "🏷️", collocations: "cost an arm and a leg, at all costs", exBase: "These train tickets cost forty euros.", exPast: "The repairs cost far more than expected.", exPP: "That error has cost the company millions." },
      { inf: "cut", past: "cut", pp: "cut", meaning: "to penetrate, sever, or divide using a sharp-edged instrument; to reduce expenditures or quantities", pronInf: "/kʌt/", pronPast: "/kʌt/", pronPP: "/kʌt/", group: "group1", pattern: "AAA", icon: "✂️", collocations: "cut corners, cut down on sugar", exBase: "Please cut the bread into thick slices.", exPast: "He accidentally cut his finger cooking.", exPP: "They have cut the annual budget." },
      { inf: "hit", past: "hit", pp: "hit", meaning: "to strike forceful physical contact with a target; to negatively impact a level, region, or metric", pronInf: "/hɪt/", pronPast: "/hɪt/", pronPP: "/hɪt/", group: "group1", pattern: "AAA", icon: "🎯", collocations: "hit the nail on the head, hit the road", exBase: "Hit the ball toward center field.", exPast: "The baseball hit the bedroom window.", exPP: "A severe storm has hit the coast." },
      { inf: "hurt", past: "hurt", pp: "hurt", meaning: "to inflict bodily pain or injury; to cause emotional distress, sorrow, or material damage", pronInf: "/hɜːrt/", pronPast: "/hɜːrt/", pronPP: "/hɜːrt/", group: "group1", pattern: "AAA", icon: "🩹", collocations: "hurt someone's feelings, hurt like hell", exBase: "Tight shoes always hurt my feet.", exPast: "His harsh critique hurt her deeply.", exPP: "He has hurt his shoulder in training." },
      { inf: "let", past: "let", pp: "let", meaning: "to grant permission or enable an event to happen; to lease or rent out residential or commercial property", pronInf: "/lɛt/", pronPast: "/lɛt/", pronPP: "/lɛt/", group: "group1", pattern: "AAA", icon: "🔓", collocations: "let down, let go, let alone", exBase: "Please let me explain the decision.", exPast: "They let the visitors inside early.", exPP: "She has let her apartment to students." },
      { inf: "put", past: "put", pp: "put", meaning: "to move, deposit, or position an object into a specified place, arrangement, or condition", pronInf: "/pʊt/", pronPast: "/pʊt/", pronPP: "/pʊt/", group: "group1", pattern: "AAA", icon: "📥", collocations: "put up with, put off, put in place", exBase: "Put your keys on the counter.", exPast: "She put the milk back into the fridge.", exPP: "Where have you put the car keys?" },
      { inf: "quit", past: "quit", pp: "quit", meaning: "to voluntarily resign from employment; to discontinue a customary action, habit, or endeavor", pronInf: "/kwɪt/", pronPast: "/kwɪt/", pronPP: "/kwɪt/", group: "group1", pattern: "AAA", icon: "🛑", collocations: "quit a job, quit smoking, call it quits", exBase: "Doctors strongly advise patients to quit smoking.", exPast: "She quit her corporate job to travel the world.", exPP: "He has quit social media entirely this month." },
      { inf: "read", past: "read", pp: "read", meaning: "to decode and interpret written characters, analytical data, or musical notation with comprehension", pronInf: "/riːd/", pronPast: "/rɛd/", pronPP: "/rɛd/", group: "group1", pattern: "AAA", icon: "📖", collocations: "read between the lines, read aloud", exBase: "I read an inspiring chapter every day.", exPast: "She read the letter in absolute silence.", exPP: "He has read that classic novel twice." },
      { inf: "set", past: "set", pp: "set", meaning: "to position or adjust into a specified state, arrangement, or standard; to establish a formal rule or schedule", pronInf: "/sɛt/", pronPast: "/sɛt/", pronPP: "/sɛt/", group: "group1", pattern: "AAA", icon: "⏰", collocations: "set in stone, set an example", exBase: "Set the kitchen timer for ten minutes.", exPast: "They set the table before dinner.", exPP: "The wedding date has already been set." },
      { inf: "shut", past: "shut", pp: "shut", meaning: "to securely close an entrance, barrier, or aperture; to cease commercial or industrial operations", pronInf: "/ʃʌt/", pronPast: "/ʃʌt/", pronPP: "/ʃʌt/", group: "group1", pattern: "AAA", icon: "🚪", collocations: "shut down, shut up, keep eyes shut", exBase: "Please shut the front door quietly.", exPast: "A strong gust shut the window loudly.", exPP: "The old factory has shut down permanently." },
      { inf: "split", past: "split", pp: "split", meaning: "to divide or cleave lengthwise into distinct portions; to sever an interpersonal relationship or alliance", pronInf: "/splɪt/", pronPast: "/splɪt/", pronPP: "/splɪt/", group: "group1", pattern: "AAA", icon: "🪓", collocations: "split the bill, split hairs, split up with", exBase: "Let's split the dinner bill evenly.", exPast: "Lightning split the old oak tree in two.", exPP: "The rock band has split after twenty years together." },
      { inf: "spread", past: "spread", pp: "spread", meaning: "to disperse or expand across a broader geographic surface; to circulate information, ideas, or disease widely", pronInf: "/sprɛd/", pronPast: "/sprɛd/", pronPP: "/sprɛd/", group: "group1", pattern: "AAA", icon: "📢", collocations: "spread rumors, spread the word, spread out", exBase: "Warm butter spreads easily on toast.", exPast: "Wildfire spread rapidly across the dry hills.", exPP: "Rumors have spread throughout the entire office." },
      { inf: "upset", past: "upset", pp: "upset", meaning: "to overturn emotional composure or psychological stability; to unexpectedly defeat a heavily favored competitor", pronInf: "/ʌpˈsɛt/", pronPast: "/ʌpˈsɛt/", pronPP: "/ʌpˈsɛt/", group: "group1", pattern: "AAA", icon: "😟", collocations: "upset the balance, upset stomach, upset expectations", exBase: "Sudden policy shifts can upset market stability.", exPast: "The underdog team upset the reigning champions.", exPP: "The sudden cancellation has upset their holiday plans." },

      // GROUP 2: only simple past changes (AAB) - 1 Verb
      { inf: "beat", past: "beat", pp: "beaten", meaning: "to strike repeated forceful blows upon an object; to defeat an opponent decisively in a contest", pronInf: "/biːt/", pronPast: "/biːt/", pronPP: "/ˈbiːtən/", group: "group2", pattern: "AAB", icon: "🥊", collocations: "beat the clock, beat around the bush", exBase: "Our team can beat anyone on home turf.", exPast: "They beat the drums in celebration.", exPP: "He has beaten his own personal record." },

      // GROUP 3: only PP changes (ABA) - 4 Verbs
      { inf: "become", past: "became", pp: "become", meaning: "to undergo an organic or circumstantial transformation into a new state, condition, or identity", pronInf: "/bɪˈkʌm/", pronPast: "/bɪˈkeɪm/", pronPP: "/bɪˈkʌm/", group: "group3", pattern: "ABA", icon: "🦋", collocations: "become aware, become accustomed to", exBase: "Leaves become golden in autumn.", exPast: "She became a qualified pilot in 2021.", exPP: "It has become quite clear to everyone." },
      { inf: "come", past: "came", pp: "come", meaning: "to move toward, approach, or arrive at a designated location, person, or cognitive realization", pronInf: "/kʌm/", pronPast: "/keɪm/", pronPP: "/kʌm/", group: "group3", pattern: "ABA", icon: "🛬", collocations: "come across, come to terms with", exBase: "Please come inside out of the chill.", exPast: "They came to visit us last weekend.", exPP: "Spring has finally come to the valley." },
      { inf: "overcome", past: "overcame", pp: "overcome", meaning: "to successfully conquer, surmount, or prevail over severe adversity, physical obstacles, or emotional fear", pronInf: "/ˌoʊvərˈkʌm/", pronPast: "/ˌoʊvərˈkeɪm/", pronPP: "/ˌoʊvərˈkʌm/", group: "group3", pattern: "ABA", icon: "🧗", collocations: "overcome obstacles, overcome fear, overcome adversity", exBase: "Resilient people overcome severe challenges with grit.", exPast: "She overcame immense odds to graduate top of her class.", exPP: "They have overcome every hurdle in their path." },
      { inf: "run", past: "ran", pp: "run", meaning: "to move rapidly on foot with brisk strides; to direct, manage, or oversee organizational operations", pronInf: "/rʌn/", pronPast: "/ræn/", pronPP: "/rʌn/", group: "group3", pattern: "ABA", icon: "🏃", collocations: "run out of, run into someone", exBase: "Athletes run early in the morning.", exPast: "She ran five kilometers yesterday.", exPP: "He has run four full marathons." },

      // GROUP 4: past = PP (ABB) - 55 Verbs
      { inf: "bend", past: "bent", pp: "bent", meaning: "to curve or deflect an object from a straight posture; to yield or compromise flexibly under pressure", pronInf: "/bɛnd/", pronPast: "/bɛnt/", pronPP: "/bɛnt/", group: "group4", pattern: "ABB", icon: "🪝", collocations: "bend the rules, bend down, bend over backwards", exBase: "Branches bend in strong winds without breaking.", exPast: "He bent down to pick up his fallen wallet.", exPP: "The metal bar has bent under excessive weight." },
      { inf: "bind", past: "bound", pp: "bound", meaning: "to fasten securely with cords or bands; to constrain legally, morally, or emotionally by duty or contract", pronInf: "/baɪnd/", pronPast: "/baʊnd/", pronPP: "/baʊnd/", group: "group4", pattern: "ABB", icon: "🔗", collocations: "bound by duty, legally bound, spellbound", exBase: "Shared values bind the community together.", exPast: "The contract bound both companies for five years.", exPP: "Doctors are bound by strict codes of confidentiality." },
      { inf: "bleed", past: "bled", pp: "bled", meaning: "to discharge blood from the circulatory system; to steadily deplete financial reserves or resources", pronInf: "/bliːd/", pronPast: "/blɛd/", pronPP: "/blɛd/", group: "group4", pattern: "ABB", icon: "🩸", collocations: "bleed heavily, bleed dry, heart bleeds for", exBase: "Shallow cuts still bleed if touched.", exPast: "His knee bled after slipping on the pavement.", exPP: "The patient has bled less since the bandage was applied." },
      { inf: "breed", past: "bred", pp: "bred", meaning: "to produce offspring through reproduction; to raise specialized livestock; to cultivate or cause conditions", pronInf: "/briːd/", pronPast: "/brɛd/", pronPP: "/brɛd/", group: "group4", pattern: "ABB", icon: "🐾", collocations: "born and bred, familiarity breeds contempt, breed success", exBase: "Certain rare birds breed only in spring.", exPast: "They bred championship horses on their farm.", exPP: "Success has bred confidence across the entire team." },
      { inf: "bring", past: "brought", pp: "brought", meaning: "to carry, convey, or transport someone or something toward the speaker or a designated location", pronInf: "/brɪŋ/", pronPast: "/brɔːt/", pronPP: "/brɔːt/", group: "group4", pattern: "ABB", icon: "🛍️", collocations: "bring about, bring up a topic", exBase: "Bring an umbrella just in case.", exPast: "She brought delicious cookies.", exPP: "He has brought valuable experience." },
      { inf: "build", past: "built", pp: "built", meaning: "to construct a physical structure from materials; to incrementally establish a system, career, or alliance", pronInf: "/bɪld/", pronPast: "/bɪlt/", pronPP: "/bɪlt/", group: "group4", pattern: "ABB", icon: "🏗️", collocations: "build from scratch, build bridges", exBase: "Engineers build durable bridges.", exPast: "They built the house in two months.", exPP: "We have built a strong partnership." },
      { inf: "burn", past: "burnt / burned", pp: "burnt / burned", meaning: "to consume, damage, or produce heat and light through combustion; to expend physical or emotional energy intensely", pronInf: "/bɜːrn/", pronPast: "/bɜːrnt/", pronPP: "/bɜːrnt/", group: "group4", pattern: "ABB", icon: "🔥", collocations: "burn bridges, burn out, burn the midnight oil", exBase: "Dry logs burn fiercely in winter campfires.", exPast: "The chef accidentally burnt the garlic bread.", exPP: "She has burnt the midnight oil studying for finals." },
      { inf: "buy", past: "bought", pp: "bought", meaning: "to acquire goods, services, or property in exchange for financial currency; to accept a claim as true", pronInf: "/baɪ/", pronPast: "/bɔːt/", pronPP: "/bɔːt/", group: "group4", pattern: "ABB", icon: "💳", collocations: "buy time, buy into an idea", exBase: "I need to buy some groceries.", exPast: "She bought a vintage car yesterday.", exPP: "They have bought a new apartment." },
      { inf: "catch", past: "caught", pp: "caught", meaning: "to intercept and capture an object moving through space; to contract an illness; to discover someone unexpectedly", pronInf: "/kætʃ/", pronPast: "/kɔːt/", pronPP: "/kɔːt/", group: "group4", pattern: "ABB", icon: "🧤", collocations: "catch a cold, catch someone's eye", exBase: "Try to catch the tennis ball.", exPast: "The keeper caught the ball cleanly.", exPP: "The police have caught the suspect." },
      { inf: "cling", past: "clung", pp: "clung", meaning: "to hold tightly or adhere tenaciously to a physical surface; to remain stubbornly faithful to an idea or hope", pronInf: "/klɪŋ/", pronPast: "/klʌŋ/", pronPP: "/klʌŋ/", group: "group4", pattern: "ABB", icon: "🧲", collocations: "cling to hope, cling on for dear life, cling to power", exBase: "Young cubs cling tightly to their mother.", exPast: "Survivors clung to the overturned boat in the storm.", exPP: "He has clung to his childhood beliefs for decades." },
      { inf: "creep", past: "crept", pp: "crept", meaning: "to advance stealthily, quietly, or close to the ground; to progress unnoticed or incrementally into awareness", pronInf: "/kriːp/", pronPast: "/krɛpt/", pronPP: "/krɛpt/", group: "group4", pattern: "ABB", icon: "🐾", collocations: "creep up on, make your flesh creep, creep in", exBase: "Cats creep silently through tall grass.", exPast: "Doubt crept into his mind during the interview.", exPP: "The morning fog has crept over the harbor." },
      { inf: "deal", past: "dealt", pp: "dealt", meaning: "to take decisive action in handling a problem; to distribute cards; to trade commercial merchandise professionally", pronInf: "/diːl/", pronPast: "/dɛlt/", pronPP: "/dɛlt/", group: "group4", pattern: "ABB", icon: "🤝", collocations: "deal with a problem, deal cards", exBase: "We must deal with this issue promptly.", exPast: "She dealt the cards to the players.", exPP: "He has dealt with difficult clients." },
      { inf: "dig", past: "dug", pp: "dug", meaning: "to excavate, unearth, or break up soil using tools; to investigate deeply into hidden records or facts", pronInf: "/dɪɡ/", pronPast: "/dʌɡ/", pronPP: "/dʌɡ/", group: "group4", pattern: "ABB", icon: "⛏️", collocations: "dig deep, dig a hole, dig your heels in", exBase: "Gardeners dig flower beds before spring planting.", exPast: "The dog dug a deep trench under the fence.", exPP: "Archaeologists have dug up ancient Roman coins." },
      { inf: "feed", past: "fed", pp: "fed", meaning: "to supply nourishing food to people or animals; to provide fuel, material, or data to a mechanism or fire", pronInf: "/fiːd/", pronPast: "/fɛd/", pronPP: "/fɛd/", group: "group4", pattern: "ABB", icon: "🥣", collocations: "feed on, feed the fire", exBase: "Feed the cat every morning.", exPast: "He fed the ducks in the pond.", exPP: "Have you fed the horses today?" },
      { inf: "feel", past: "felt", pp: "felt", meaning: "to perceive physical sensations through the sense of touch; to experience emotional states or intuitive beliefs", pronInf: "/fiːl/", pronPast: "/fɛlt/", pronPP: "/fɛlt/", group: "group4", pattern: "ABB", icon: "❤️", collocations: "feel like doing, feel under the weather", exBase: "I feel great about the new project.", exPast: "She felt a cold breeze from the window.", exPP: "He has never felt so confident." },
      { inf: "fight", past: "fought", pp: "fought", meaning: "to contend in physical combat or armed warfare; to struggle tenaciously against injustice, illness, or adversity", pronInf: "/faɪt/", pronPast: "/fɔːt/", pronPP: "/fɔːt/", group: "group4", pattern: "ABB", icon: "⚔️", collocations: "fight for rights, fight back", exBase: "Soldiers fight for their homeland.", exPast: "The boxer fought bravely for ten rounds.", exPP: "They have fought against inequality." },
      { inf: "find", past: "found", pp: "found", meaning: "to discover by exploration or accidental encounter; to arrive at a judicial verdict or intellectual conclusion", pronInf: "/faɪnd/", pronPast: "/faʊnd/", pronPP: "/faʊnd/", group: "group4", pattern: "ABB", icon: "🔎", collocations: "find out, find common ground", exBase: "I can't find my car keys anywhere.", exPast: "She found a rare coin in the garden.", exPP: "Scientists have found water on Mars." },
      { inf: "flee", past: "fled", pp: "fled", meaning: "to run away with extreme haste from imminent danger, armed conflict, hostile forces, or persecution", pronInf: "/fliː/", pronPast: "/flɛd/", pronPP: "/flɛd/", group: "group4", pattern: "ABB", icon: "🏃", collocations: "flee the country, flee danger, flee in terror", exBase: "Civilians often flee regions affected by conflict.", exPast: "The frightened suspects fled the scene immediately.", exPP: "Thousands have fled their homes due to the flood." },
      { inf: "get", past: "got", pp: "got / gotten", meaning: "to receive, obtain, or acquire possession of something; to transition gradually into a designated condition", pronInf: "/ɡɛt/", pronPast: "/ɡɒt/", pronPP: "/ɡɒt/", group: "group4", pattern: "ABB", icon: "🎁", collocations: "get rid of, get along with", exBase: "Where did you get that jacket?", exPast: "He got a promotion last Friday.", exPP: "She has got the highest score." },
      { inf: "hang", past: "hung", pp: "hung", meaning: "to suspend or fasten an item from an elevated position with no bottom support; to display visual art on a wall", pronInf: "/hæŋ/", pronPast: "/hʌŋ/", pronPP: "/hʌŋ/", group: "group4", pattern: "ABB", icon: "🪝", collocations: "hang out, hang on every word", exBase: "Hang your coat in the closet.", exPast: "He hung the painting on the wall.", exPP: "The curtains have hung there for years." },
      { inf: "have", past: "had", pp: "had", meaning: "to possess, own, or hold; functions as the primary auxiliary verb in constructing all perfect tenses", pronInf: "/hæv/", pronPast: "/hæd/", pronPP: "/hæd/", group: "group4", pattern: "ABB", icon: "💼", collocations: "have a clue, have in mind", exBase: "We have two meetings today.", exPast: "They had a great vacation in Italy.", exPP: "I have had enough of this delay." },
      { inf: "hear", past: "heard", pp: "heard", meaning: "to perceive acoustic sound waves through the auditory organ; to be informed of news, reports, or rumors", pronInf: "/hɪər/", pronPast: "/hɜːrd/", pronPP: "/hɜːrd/", group: "group4", pattern: "ABB", icon: "👂", collocations: "hear through the grapevine, hear out", exBase: "Did you hear that strange noise?", exPast: "She heard a knock at the front door.", exPP: "We have heard wonderful reviews." },
      { inf: "hold", past: "held", pp: "held", meaning: "to grasp, clasp, or support with hands or arms; to contain within boundaries; to maintain an official gathering", pronInf: "/hoʊld/", pronPast: "/hɛld/", pronPP: "/hɛld/", group: "group4", pattern: "ABB", icon: "✊", collocations: "hold on, hold your breath", exBase: "Hold my hand while crossing the road.", exPast: "He held the microphone firmly.", exPP: "She has held that position for a decade." },
      { inf: "keep", past: "kept", pp: "kept", meaning: "to retain possession of something; to continue in a specified state or practice; to honor a solemn promise", pronInf: "/kiːp/", pronPast: "/kɛpt/", pronPP: "/kɛpt/", group: "group4", pattern: "ABB", icon: "🔐", collocations: "keep in touch, keep a secret", exBase: "Keep your valuables in a safe place.", exPast: "She kept her promise to return early.", exPP: "He has kept a diary since childhood." },
      { inf: "lay", past: "laid", pp: "laid", meaning: "to set or place something down gently in a flat, horizontal position (transitive verb taking a direct object)", pronInf: "/leɪ/", pronPast: "/leɪd/", pronPP: "/leɪd/", group: "group4", pattern: "ABB", icon: "🛏️", collocations: "lay the table, lay the foundation", exBase: "Lay the blanket over the grass.", exPast: "She laid the sleeping baby in the crib.", exPP: "They have laid the bricks carefully." },
      { inf: "lead", past: "led", pp: "led", meaning: "to guide, conduct, or direct along a route by traveling ahead; to exercise command over a group or project", pronInf: "/liːd/", pronPast: "/lɛd/", pronPP: "/lɛd/", group: "group4", pattern: "ABB", icon: "🧭", collocations: "lead the way, lead to success", exBase: "Good leaders lead by example.", exPast: "The guide led us through the forest.", exPP: "He has led the organization for 5 years." },
      { inf: "leave", past: "left", pp: "left", meaning: "to depart or go away from a place, person, or situation; to allow something to remain behind; to bequeath", pronInf: "/liːv/", pronPast: "/lɛft/", pronPP: "/lɛft/", group: "group4", pattern: "ABB", icon: "🚪", collocations: "leave behind, leave a message", exBase: "Trains leave the platform on schedule.", exPast: "We left the party before midnight.", exPP: "She has left her passport at home." },
      { inf: "lend", past: "lent", pp: "lent", meaning: "to grant the temporary use of money or property on condition that it will be returned or repaid with interest", pronInf: "/lɛnd/", pronPast: "/lɛnt/", pronPP: "/lɛnt/", group: "group4", pattern: "ABB", icon: "🤲", collocations: "lend a hand, lend an ear", exBase: "Can you lend me your dictionary?", exPast: "He lent his umbrella to a stranger.", exPP: "She has lent money to her brother." },
      { inf: "light", past: "lit / lighted", pp: "lit / lighted", meaning: "to ignite combustible fuel or produce flame; to illuminate, brighten, or clarify a dark space with radiance", pronInf: "/laɪt/", pronPast: "/lɪt/", pronPP: "/lɪt/", group: "group4", pattern: "ABB", icon: "🕯️", collocations: "light a candle, light up a room", exBase: "Light the campfire before dusk.", exPast: "He lit a match in the dark room.", exPP: "They have lit all the street lamps." },
      { inf: "lose", past: "lost", pp: "lost", meaning: "to be deprived of something through misplacement or theft; to fail to retain an advantage, contest, or vision", pronInf: "/luːz/", pronPast: "/lɒst/", pronPP: "/lɒst/", group: "group4", pattern: "ABB", icon: "❓", collocations: "lose one's mind, lose track of time", exBase: "Don't lose your luggage at the airport.", exPast: "She lost her wallet on the train.", exPP: "Our team has lost three matches." },
      { inf: "make", past: "made", pp: "made", meaning: "to construct, fabricate, or create an entity from raw materials; to cause a specific consequence or reaction", pronInf: "/meɪk/", pronPast: "/meɪd/", pronPP: "/meɪd/", group: "group4", pattern: "ABB", icon: "🛠️", collocations: "make sense, make a difference", exBase: "Let's make dinner together tonight.", exPast: "She made a delicious chocolate cake.", exPP: "They have made significant progress." },
      { inf: "mean", past: "meant", pp: "meant", meaning: "to signify, denote, or express an explicit concept; to harbor a conscious purpose, design, or intention", pronInf: "/miːn/", pronPast: "/mɛnt/", pronPP: "/mɛnt/", group: "group4", pattern: "ABB", icon: "💬", collocations: "mean well, meant to be", exBase: "What does this foreign phrase mean?", exPast: "I meant no disrespect by that remark.", exPP: "It has meant the world to our family." },
      { inf: "meet", past: "met", pp: "met", meaning: "to encounter or come face-to-face with someone; to satisfy requirements, statutory standards, or deadlines", pronInf: "/miːt/", pronPast: "/mɛt/", pronPP: "/mɛt/", group: "group4", pattern: "ABB", icon: "🤝", collocations: "meet deadlines, meet halfway", exBase: "Let's meet at the café tomorrow.", exPast: "We met our neighbors yesterday.", exPP: "Have you ever met a celebrity?" },
      { inf: "pay", past: "paid", pp: "paid", meaning: "to disburse monetary remuneration for merchandise or services rendered; to suffer consequences for an action", pronInf: "/peɪ/", pronPast: "/peɪd/", pronPP: "/peɪd/", group: "group4", pattern: "ABB", icon: "💵", collocations: "pay attention, pay the price", exBase: "Customers pay by credit card.", exPast: "She paid the bill promptly.", exPP: "We have paid all outstanding dues." },
      { inf: "say", past: "said", pp: "said", meaning: "to articulate words verbally; to pronounce aloud, state an opinion, or express an explicit declaration", pronInf: "/seɪ/", pronPast: "/sɛd/", pronPP: "/sɛd/", group: "group4", pattern: "ABB", icon: "🗣️", collocations: "say goodbye, needless to say", exBase: "What did you say to the manager?", exPast: "He said that he was feeling tired.", exPP: "Everything has been said already." },
      { inf: "seek", past: "sought", pp: "sought", meaning: "to actively search for, pursue, or attempt to acquire something intangible, elusive, or authoritative", pronInf: "/siːk/", pronPast: "/sɔːt/", pronPP: "/sɔːt/", group: "group4", pattern: "ABB", icon: "🔍", collocations: "seek advice, seek asylum, seek permission", exBase: "Wise students seek advice from experienced mentors.", exPast: "The refugees sought refuge in the neighboring town.", exPP: "Scientists have long sought a cure for this virus." },
      { inf: "sell", past: "sold", pp: "sold", meaning: "to transfer ownership of merchandise, property, or services to a buyer in exchange for financial currency", pronInf: "/sɛl/", pronPast: "/soʊld/", pronPP: "/soʊld/", group: "group4", pattern: "ABB", icon: "🏪", collocations: "sell out, sell like hotcakes", exBase: "They sell handcrafted jewelry here.", exPast: "She sold her bicycle last week.", exPP: "The author has sold thousands of copies." },
      { inf: "send", past: "sent", pp: "sent", meaning: "to dispatch, transmit, or cause someone or something to travel toward a designated remote destination", pronInf: "/sɛnd/", pronPast: "/sɛnt/", pronPP: "/sɛnt/", group: "group4", pattern: "ABB", icon: "📤", collocations: "send regards, send word", exBase: "Send me the report via email.", exPast: "He sent a postcard from Madrid.", exPP: "We have sent the invitations." },
      { inf: "shine", past: "shone", pp: "shone", meaning: "to emit or reflect radiant light; to excel conspicuously with exceptional brilliance in a domain or endeavor", pronInf: "/ʃaɪn/", pronPast: "/ʃɒn/", pronPP: "/ʃɒn/", group: "group4", pattern: "ABB", icon: "✨", collocations: "shine bright, shine a light on", exBase: "Stars shine across the night sky.", exPast: "The morning sun shone into the room.", exPP: "His talent has shone brightly." },
      { inf: "shoot", past: "shot", pp: "shot", meaning: "to discharge a projectile, bullet, or arrow from a weapon; to capture cinematic footage or photographic imagery", pronInf: "/ʃuːt/", pronPast: "/ʃɒt/", pronPP: "/ʃɒt/", group: "group4", pattern: "ABB", icon: "🏹", collocations: "shoot the breeze, shoot for the moon", exBase: "Photographers shoot scenes in daylight.", exPast: "The archer shot the arrow accurately.", exPP: "The director has shot the final scene." },
      { inf: "sit", past: "sat", pp: "sat", meaning: "to rest the body in a posture where weight is supported by the buttocks and thighs rather than the feet", pronInf: "/sɪt/", pronPast: "/sæt/", pronPP: "/sæt/", group: "group4", pattern: "ABB", icon: "🪑", collocations: "sit tight, sit on the fence", exBase: "Please sit down and make yourself comfortable.", exPast: "We sat by the fire for hours.", exPP: "She has sat in the same seat all term." },
      { inf: "sleep", past: "slept", pp: "slept", meaning: "to rest in a natural recurring physiological state characterized by reduced consciousness and suspended activity", pronInf: "/sliːp/", pronPast: "/slɛpt/", pronPP: "/slɛpt/", group: "group4", pattern: "ABB", icon: "😴", collocations: "sleep like a log, sleep on it", exBase: "Humans sleep approximately eight hours.", exPast: "He slept soundly despite the storm.", exPP: "The baby has slept through the night." },
      { inf: "slide", past: "slid", pp: "slid", meaning: "to glide smoothly and continuously along a low-friction surface while maintaining physical contact", pronInf: "/slaɪd/", pronPast: "/slɪd/", pronPP: "/slɪd/", group: "group4", pattern: "ABB", icon: "🛝", collocations: "let things slide, slide into home", exBase: "Children slide down the icy slope.", exPast: "The car slid on the wet asphalt.", exPP: "He has slid into third base." },
      { inf: "spend", past: "spent", pp: "spent", meaning: "to pay out currency; to dedicate or exhaust a measure of time, energy, or cognitive effort toward an objective", pronInf: "/spɛnd/", pronPast: "/spɛnt/", pronPP: "/spɛnt/", group: "group4", pattern: "ABB", icon: "⏳", collocations: "spend time, spend money like water", exBase: "I spend an hour reading each night.", exPast: "We spent the weekend in the mountains.", exPP: "She has spent all her allowance." },
      { inf: "stand", past: "stood", pp: "stood", meaning: "to maintain an upright vertical posture supported on the feet; to endure, tolerate, or remain steadfast against stress", pronInf: "/stænd/", pronPast: "/stʊd/", pronPP: "/stʊd/", group: "group4", pattern: "ABB", icon: "🧍", collocations: "stand out, stand up for", exBase: "Stand clear of the closing doors.", exPast: "He stood in line for forty minutes.", exPP: "She has stood by her friend through thick and thin." },
      { inf: "stick", past: "stuck", pp: "stuck", meaning: "to adhere or fasten firmly with adhesive; to remain steadfastly loyal; to become jammed or immobilized in place", pronInf: "/stɪk/", pronPast: "/stʌk/", pronPP: "/stʌk/", group: "group4", pattern: "ABB", icon: "🩹", collocations: "stick to the plan, get stuck", exBase: "Use glue to stick the label on.", exPast: "The postage stamp stuck firmly.", exPP: "We have stuck to our initial plan." },
      { inf: "strike", past: "struck", pp: "struck", meaning: "to deliver a forceful physical blow; to ignite through friction; to achieve a breakthrough agreement; to halt labor", pronInf: "/straɪk/", pronPast: "/strʌk/", pronPP: "/strʌk/", group: "group4", pattern: "ABB", icon: "⚡", collocations: "strike a balance, strike gold, strike a deal", exBase: "Clock towers strike twelve at noon and midnight.", exPast: "Lightning struck the communication mast during the storm.", exPP: "The negotiators have struck a breakthrough agreement." },
      { inf: "sweep", past: "swept", pp: "swept", meaning: "to clean or clear away debris using a broom; to move across a geographical expanse with overwhelming speed", pronInf: "/swiːp/", pronPast: "/swɛpt/", pronPP: "/swɛpt/", group: "group4", pattern: "ABB", icon: "🧹", collocations: "sweep under the rug, sweep off feet", exBase: "Sweep the floor before mopping.", exPast: "She swept the front porch thoroughly.", exPP: "A new trend has swept the country." },
      { inf: "swing", past: "swung", pp: "swung", meaning: "to oscillate rhythmically back and forth on an axis; to wield an instrument or fist in a sweeping circular arc", pronInf: "/swɪŋ/", pronPast: "/swʌŋ/", pronPP: "/swʌŋ/", group: "group4", pattern: "ABB", icon: "🔄", collocations: "swing both ways, in full swing", exBase: "Watch the pendulum swing evenly.", exPast: "He swung the golf club with precision.", exPP: "The pendulum has swung the other way." },
      { inf: "teach", past: "taught", pp: "taught", meaning: "to instruct, educate, or impart systematic knowledge, practical skills, or philosophical principles to students", pronInf: "/tiːtʃ/", pronPast: "/tɔːt/", pronPP: "/tɔːt/", group: "group4", pattern: "ABB", icon: "👨‍🏫", collocations: "teach a lesson, teach by example", exBase: "Professors teach advanced calculus.", exPast: "She taught English abroad for two years.", exPP: "He has taught hundreds of students." },
      { inf: "tell", past: "told", pp: "told", meaning: "to communicate information, narratives, or instructions directly to an auditor; to distinguish or identify differences", pronInf: "/tɛl/", pronPast: "/toʊld/", pronPP: "/toʊld/", group: "group4", pattern: "ABB", icon: "📢", collocations: "tell the truth, tell a story", exBase: "Always tell the truth to your doctor.", exPast: "He told us an entertaining story.", exPP: "She has told me all the details." },
      { inf: "think", past: "thought", pp: "thought", meaning: "to formulate cognitive ideas, exercise logical reasoning, or hold an informed judgment, opinion, or hypothesis", pronInf: "/θɪŋk/", pronPast: "/θɔːt/", pronPP: "/θɔːt/", group: "group4", pattern: "ABB", icon: "🧠", collocations: "think twice, think outside the box", exBase: "I think we should reconsider this.", exPast: "She thought about the proposal all night.", exPP: "We have thought through every scenario." },
      { inf: "understand", past: "understood", pp: "understood", meaning: "to comprehend the conceptual meaning, significance, cause, or nature of an explanation, language, or system", pronInf: "/ˌʌndərˈstænd/", pronPast: "/ˌʌndərˈstʊd/", pronPP: "/ˌʌndərˈstʊd/", group: "group4", pattern: "ABB", icon: "💡", collocations: "make yourself understood, mutually understood", exBase: "I understand the concept completely.", exPast: "She understood the instructions right away.", exPP: "They have understood the risks involved." },
      { inf: "win", past: "won", pp: "won", meaning: "to achieve triumphant victory in a contest or battle; to acquire a distinction, prize, or support through merit", pronInf: "/wɪn/", pronPast: "/wʌn/", pronPP: "/wʌn/", group: "group4", pattern: "ABB", icon: "🏆", collocations: "win hands down, win over", exBase: "Play hard to win the championship.", exPast: "They won the match in extra time.", exPP: "Our team has won three gold medals." },
      { inf: "wind", past: "wound", pp: "wound", meaning: "to coil, wrap, or twist something repeatedly around a core; to follow a twisting, curving trajectory through space", pronInf: "/waɪnd/", pronPast: "/waʊnd/", pronPP: "/waʊnd/", group: "group4", pattern: "ABB", icon: "🕰️", collocations: "wind down, wind up, wind the clock", exBase: "Rivers wind naturally through wide valleys.", exPast: "She wound the antique clock before going to sleep.", exPP: "The mountain trail has wound around steep cliffs." },

      // GROUP 5: all different (ABC) - 47 Verbs
      { inf: "arise", past: "arose", pp: "arisen", meaning: "to emerge, come into existence, or originate; to ascend vertically from a recumbent or seated posture", pronInf: "/əˈraɪz/", pronPast: "/əˈroʊz/", pronPP: "/əˈrɪzən/", group: "group5", pattern: "ABC", icon: "🌅", collocations: "problems arise, if the need arises, complications arise", exBase: "Complications often arise when details are neglected.", exPast: "An unexpected conflict arose between the two delegates.", exPP: "Several critical questions have arisen during the audit." },
      { inf: "awake", past: "awoke", pp: "awoken", meaning: "to rouse from sleep; to become acutely conscious, vigilant, or cognizant of an underlying reality", pronInf: "/əˈweɪk/", pronPast: "/əˈwoʊk/", pronPP: "/əˈwoʊkən/", group: "group5", pattern: "ABC", icon: "⏰", collocations: "awake to the truth, rudely awoken, wide awake", exBase: "Campers awake at dawn to hear the birds singing.", exPast: "She awoke to the distant rumble of thunder.", exPP: "The neighborhood was awoken by a loud siren." },
      { inf: "be", past: "was / were", pp: "been", meaning: "to exist as an entity, take place, or embody a specified identity, state, condition, or defining attribute", pronInf: "/biː/", pronPast: "/wɒz/ /wɜːr/", pronPP: "/biːn/", group: "group5", pattern: "ABC", icon: "👤", collocations: "be on time, be of the opinion", exBase: "To be honest, I agree with you.", exPast: "She was delighted; they were relieved.", exPP: "We have been friends for decades." },
      { inf: "bear", past: "bore", pp: "borne", meaning: "to carry or support a physical load; to tolerate hardship or endure severe adversity with fortitude", pronInf: "/beər/", pronPast: "/bɔːr/", pronPP: "/bɔːrn/", group: "group5", pattern: "ABC", icon: "🏋️", collocations: "bear in mind, bear fruit, bear the cost", exBase: "Please bear in mind that seats are limited.", exPast: "The foundation bore the entire weight of the roof.", exPP: "His research efforts have finally borne fruit." },
      { inf: "begin", past: "began", pp: "begun", meaning: "to initiate, commence, or start a sequential process, formal endeavor, or duration of activity", pronInf: "/bɪˈɡɪn/", pronPast: "/bɪˈɡæn/", pronPP: "/bɪˈɡʌn/", group: "group5", pattern: "ABC", icon: "🏁", collocations: "begin anew, to begin with", exBase: "Concerts begin at eight o'clock.", exPast: "The ceremony began on time.", exPP: "The meeting has already begun." },
      { inf: "bite", past: "bit", pp: "bitten", meaning: "to seize, sever, or puncture using the teeth; to grip mechanically or take a deceptive bait", pronInf: "/baɪt/", pronPast: "/bɪt/", pronPP: "/ˈbɪtən/", group: "group5", pattern: "ABC", icon: "🦷", collocations: "bite the bullet, bite off more than you can chew, once bitten twice shy", exBase: "Guard dogs rarely bite without severe provocation.", exPast: "The mosquito bit him three times on the arm.", exPP: "He was bitten by an aggressive stray cat." },
      { inf: "blow", past: "blew", pp: "blown", meaning: "to create or propel a stream of moving air; to be carried aloft by air currents; to squander an opportunity", pronInf: "/bloʊ/", pronPast: "/bluː/", pronPP: "/bloʊn/", group: "group5", pattern: "ABC", icon: "💨", collocations: "blow out of proportion, blow away", exBase: "Chilly winds blow across the plain.", exPast: "A gust blew the leaves everywhere.", exPP: "The gale has blown the fence down." },
      { inf: "break", past: "broke", pp: "broken", meaning: "to fracture, shatter, or separate into pieces under force; to violate a regulation, contract, or solemn promise", pronInf: "/breɪk/", pronPast: "/broʊk/", pronPP: "/ˈbroʊkən/", group: "group5", pattern: "ABC", icon: "💔", collocations: "break a record, break the ice", exBase: "Be careful not to break the vase.", exPast: "The mug broke when dropped.", exPP: "The window has been broken." },
      { inf: "choose", past: "chose", pp: "chosen", meaning: "to select one or more options intentionally from a range of available alternatives through preference or judgment", pronInf: "/tʃuːz/", pronPast: "/tʃoʊz/", pronPP: "/ˈtʃoʊzən/", group: "group5", pattern: "ABC", icon: "🗳️", collocations: "pick and choose, choose wisely", exBase: "Choose whichever book you prefer.", exPast: "She chose the blue gown.", exPP: "He has chosen to study law." },
      { inf: "do", past: "did", pp: "done", meaning: "to execute, perform, or accomplish a task, deed, or responsibility; functions as a vital primary auxiliary verb", pronInf: "/duː/", pronPast: "/dɪd/", pronPP: "/dʌn/", group: "group5", pattern: "ABC", icon: "⚡", collocations: "do your best, do someone a favor", exBase: "Do your homework before dinner.", exPast: "He did an exceptional job.", exPP: "She has done all the calculations." },
      { inf: "draw", past: "drew", pp: "drawn", meaning: "to produce an illustration or sketch using pencil or ink; to pull, drag, or extract toward oneself", pronInf: "/drɔː/", pronPast: "/druː/", pronPP: "/drɔːn/", group: "group5", pattern: "ABC", icon: "🎨", collocations: "draw a conclusion, draw curtains", exBase: "Artists draw inspiration from nature.", exPast: "She drew a magnificent portrait.", exPP: "He has drawn the correct conclusion." },
      { inf: "drink", past: "drank", pp: "drunk", meaning: "to ingest liquid into the body through the mouth for hydration, nourishment, or social refreshment", pronInf: "/drɪŋk/", pronPast: "/dræŋk/", pronPP: "/drʌŋk/", group: "group5", pattern: "ABC", icon: "🥤", collocations: "drink like a fish, drink in the view", exBase: "Remember to drink plenty of water.", exPast: "He drank an espresso after lunch.", exPP: "They have drunk all the lemonade." },
      { inf: "drive", past: "drove", pp: "driven", meaning: "to steer, navigate, and control a motor vehicle; to compel or motivate someone toward an action or state", pronInf: "/draɪv/", pronPast: "/droʊv/", pronPP: "/ˈdrɪvən/", group: "group5", pattern: "ABC", icon: "🚗", collocations: "drive someone crazy, drive a hard bargain", exBase: "I drive to the office every morning.", exPast: "She drove through the mountains.", exPP: "He has driven electric cars for years." },
      { inf: "eat", past: "ate", pp: "eaten", meaning: "to ingest solid nourishment by putting it into the mouth, masticating with teeth, and swallowing", pronInf: "/iːt/", pronPast: "/eɪt/", pronPP: "/ˈiːtən/", group: "group5", pattern: "ABC", icon: "🍽️", collocations: "eat humble pie, eat your words", exBase: "We eat fresh fruit every day.", exPast: "They ate dinner at a local bistro.", exPP: "Have you eaten lunch yet?" },
      { inf: "fall", past: "fell", pp: "fallen", meaning: "to descend freely by gravity from an elevated position; to decline sharply in magnitude, price, or rate", pronInf: "/fɔːl/", pronPast: "/fɛl/", pronPP: "/ˈfɔːlən/", group: "group5", pattern: "ABC", icon: "🍂", collocations: "fall in love, fall apart", exBase: "Leaves fall gently in October.", exPast: "The temperature fell overnight.", exPP: "Prices have fallen significantly." },
      { inf: "fly", past: "flew", pp: "flown", meaning: "to travel through the atmosphere utilizing aerodynamic wings or aircraft; to move with extraordinary velocity", pronInf: "/flaɪ/", pronPast: "/fluː/", pronPP: "/floʊn/", group: "group5", pattern: "ABC", icon: "✈️", collocations: "fly off the handle, fly high", exBase: "Migratory birds fly south for winter.", exPast: "The pilot flew through turbulent skies.", exPP: "She has flown across the Atlantic." },
      { inf: "forbid", past: "forbade", pp: "forbidden", meaning: "to formally prohibit, ban, or command that an action must not occur under penalty of law or authority", pronInf: "/fərˈbɪd/", pronPast: "/fərˈbeɪd/", pronPP: "/fərˈbɪdən/", group: "group5", pattern: "ABC", icon: "🚫", collocations: "rules forbid, forbidden fruit, time forbids", exBase: "Strict park regulations forbid open campfires here.", exPast: "The museum curator forbade photography in the gallery.", exPP: "Smoking has been strictly forbidden in all terminals." },
      { inf: "forget", past: "forgot", pp: "forgotten", meaning: "to fail to retain or retrieve information from memory; to inadvertently leave an object or duty behind", pronInf: "/fərˈɡɛt/", pronPast: "/fərˈɡɒt/", pronPP: "/fərˈɡɒtən/", group: "group5", pattern: "ABC", icon: "💭", collocations: "forget about it, forgive and forget", exBase: "Don't forget to lock the backdoor.", exPast: "He forgot his keys on the counter.", exPP: "I have forgotten her phone number." },
      { inf: "forgive", past: "forgave", pp: "forgiven", meaning: "to grant pardon, stop feeling resentment, or waive a moral debt or financial obligation owed by an offender", pronInf: "/fərˈɡɪv/", pronPast: "/fərˈɡeɪv/", pronPP: "/fərˈɡɪvən/", group: "group5", pattern: "ABC", icon: "🕊️", collocations: "forgive and forget, forgive a debt, seek forgiveness", exBase: "Wise people forgive mistakes rather than holding grudges.", exPast: "She quickly forgave him after his sincere apology.", exPP: "The bank has forgiven a substantial part of their debt." },
      { inf: "freeze", past: "froze", pp: "frozen", meaning: "to transform into ice through sub-zero temperatures; to become completely motionless from shock or fear", pronInf: "/friːz/", pronPast: "/froʊz/", pronPP: "/ˈfroʊzən/", group: "group5", pattern: "ABC", icon: "🧊", collocations: "freeze over, freeze in fear", exBase: "Water pipes freeze during harsh winters.", exPast: "The lake froze solid last December.", exPP: "The soil has frozen overnight." },
      { inf: "give", past: "gave", pp: "given", meaning: "to transfer ownership or possession of something voluntarily without expecting payment or reciprocal return", pronInf: "/ɡɪv/", pronPast: "/ɡeɪv/", pronPP: "/ˈɡɪvən/", group: "group5", pattern: "ABC", icon: "🎁", collocations: "give up, give way, give a hand", exBase: "Please give me your honest feedback.", exPast: "She gave a generous donation.", exPP: "He has given his final word." },
      { inf: "go", past: "went", pp: "gone", meaning: "to travel or move away from the current location toward a destination; to proceed, operate, or turn out", pronInf: "/ɡoʊ/", pronPast: "/wɛnt/", pronPP: "/ɡɒn/", group: "group5", pattern: "ABC", icon: "🚶", collocations: "go along with, go for it", exBase: "We go for a walk every evening.", exPast: "She went to Paris last summer.", exPP: "They have gone to the grocery store." },
      { inf: "grow", past: "grew", pp: "grown", meaning: "to increase in physical size, maturity, or complexity through biological development; to cultivate crops", pronInf: "/ɡroʊ/", pronPast: "/ɡruː/", pronPP: "/ɡroʊn/", group: "group5", pattern: "ABC", icon: "🪴", collocations: "grow up, grow out of", exBase: "Sunflowers grow rapidly in summer.", exPast: "The small startup grew into a giant.", exPP: "Children have grown so tall." },
      { inf: "hide", past: "hid", pp: "hidden", meaning: "to conceal someone or something from visual detection; to deliberately withhold feelings or information", pronInf: "/haɪd/", pronPast: "/hɪd/", pronPP: "/ˈhɪdən/", group: "group5", pattern: "ABC", icon: "🙈", collocations: "hide and seek, hide feelings", exBase: "Squirrels hide nuts in the ground.", exPast: "The sun hid behind dark clouds.", exPP: "The treasure has been hidden well." },
      { inf: "know", past: "knew", pp: "known", meaning: "to possess verified information, understanding, or cognitive familiarity; to be acquainted with a person", pronInf: "/noʊ/", pronPast: "/njuː/", pronPP: "/noʊn/", group: "group5", pattern: "ABC", icon: "📚", collocations: "know by heart, know better", exBase: "I know the answer to your question.", exPast: "She knew what was going to happen.", exPP: "He has known her since kindergarten." },
      { inf: "lie", past: "lay", pp: "lain", meaning: "to rest or recline horizontally upon a surface (intransitive verb taking no direct object)", pronInf: "/laɪ/", pronPast: "/leɪ/", pronPP: "/leɪn/", group: "group5", pattern: "ABC", icon: "🛋️", collocations: "lie down, lie in state", exBase: "I need to lie down for a nap.", exPast: "The cat lay in the warm sun yesterday.", exPP: "The book has lain on the table untouched." },
      { inf: "ride", past: "rode", pp: "ridden", meaning: "to sit astride and control the motion of an animal, bicycle, motorcycle, or conveyance", pronInf: "/raɪd/", pronPast: "/roʊd/", pronPP: "/ˈrɪdən/", group: "group5", pattern: "ABC", icon: "🚲", collocations: "ride a wave, along for the ride", exBase: "Children ride bicycles in the park.", exPast: "She rode a horse through the valley.", exPP: "He has ridden thousands of miles." },
      { inf: "ring", past: "rang", pp: "rung", meaning: "to emit a clear resonant metallic chime like a bell; to telephone a contact; to sound loudly across an area", pronInf: "/rɪŋ/", pronPast: "/ræŋ/", pronPP: "/rʌŋ/", group: "group5", pattern: "ABC", icon: "🔔", collocations: "ring a bell, ring true", exBase: "School bells ring at three o'clock.", exPast: "The alarm rang loudly this morning.", exPP: "The church bells have rung for centuries." },
      { inf: "rise", past: "rose", pp: "risen", meaning: "to ascend upward into the air, scale higher benchmarks, or awaken from sleep (intransitive verb)", pronInf: "/raɪz/", pronPast: "/roʊz/", pronPP: "/ˈrɪzən/", group: "group5", pattern: "ABC", icon: "🌅", collocations: "rise to the occasion, rise and shine", exBase: "The sun will rise at six in the morning.", exPast: "Smoke rose from the chimney.", exPP: "Prices have risen sharply this year." },
      { inf: "see", past: "saw", pp: "seen", meaning: "to perceive visual stimuli using the eyes; to understand intellectually; to meet or consult with an authority", pronInf: "/siː/", pronPast: "/sɔː/", pronPP: "/siːn/", group: "group5", pattern: "ABC", icon: "👁️", collocations: "see eye to eye, see the light", exBase: "I see a bird on the branch.", exPast: "We saw an incredible movie last night.", exPP: "She has seen this exhibit before." },
      { inf: "shake", past: "shook", pp: "shaken", meaning: "to vibrate, tremble, or agitate back and forth rapidly; to destabilize someone's emotional confidence", pronInf: "/ʃeɪk/", pronPast: "/ʃʊk/", pronPP: "/ˈʃeɪkən/", group: "group5", pattern: "ABC", icon: "🤝", collocations: "shake hands, shake in one's boots", exBase: "Shake the bottle before opening.", exPast: "The earthquake shook the entire city.", exPP: "He was deeply shaken by the news." },
      { inf: "show", past: "showed", pp: "shown", meaning: "to exhibit, display, or demonstrate for others to observe; to guide someone or prove a point conclusively", pronInf: "/ʃoʊ/", pronPast: "/ʃoʊd/", pronPP: "/ʃoʊn/", group: "group5", pattern: "ABC", icon: "🖼️", collocations: "show up, show someone the ropes", exBase: "Please show me your passport.", exPast: "The guide showed us around the museum.", exPP: "The research has shown positive results." },
      { inf: "sing", past: "sang", pp: "sung", meaning: "to produce melodic musical pitches and expressive cadence using the human vocal cords", pronInf: "/sɪŋ/", pronPast: "/sæŋ/", pronPP: "/sʌŋ/", group: "group5", pattern: "ABC", icon: "🎤", collocations: "sing along, sing like a canary", exBase: "Choir members sing in harmony.", exPast: "She sang a beautiful traditional ballad.", exPP: "He has sung in prestigious opera houses." },
      { inf: "sink", past: "sank", pp: "sunk", meaning: "to submerge or descend below the water surface; to decline into a weakened or impoverished state", pronInf: "/sɪŋk/", pronPast: "/sæŋk/", pronPP: "/sʌŋk/", group: "group5", pattern: "ABC", icon: "⚓", collocations: "sink or swim, sink in", exBase: "Heavy stones sink quickly in deep water.", exPast: "The ship sank near the rocky reef.", exPP: "The anchor has sunk to the ocean bed." },
      { inf: "speak", past: "spoke", pp: "spoken", meaning: "to articulate words and express linguistic communication verbally; to deliver a formal speech or oration", pronInf: "/spiːk/", pronPast: "/spoʊk/", pronPP: "/ˈspoʊkən/", group: "group5", pattern: "ABC", icon: "🗣️", collocations: "speak your mind, speak volume", exBase: "They speak multiple languages fluently.", exPast: "The ambassador spoke to the press.", exPP: "English is spoken worldwide." },
      { inf: "spring", past: "sprang", pp: "sprung", meaning: "to leap swiftly into the air; to rebound with elasticity; to emerge suddenly and unexpectedly from a source", pronInf: "/sprɪŋ/", pronPast: "/spræŋ/", pronPP: "/sprʌŋ/", group: "group5", pattern: "ABC", icon: "🦘", collocations: "spring to mind, spring to life", exBase: "Tigers spring upon their prey.", exPast: "He sprang out of bed at the noise.", exPP: "A leak has sprung in the basement." },
      { inf: "steal", past: "stole", pp: "stolen", meaning: "to take another's property dishonestly and covertly without legal consent or intention to return it", pronInf: "/stiːl/", pronPast: "/stoʊl/", pronPP: "/ˈstoʊlən/", group: "group5", pattern: "ABC", icon: "🕵️", collocations: "steal the show, steal a glance", exBase: "Thieves steal unguarded valuables.", exPast: "Someone stole his bicycle yesterday.", exPP: "Her diamond necklace was stolen." },
      { inf: "swear", past: "swore", pp: "sworn", meaning: "to make a solemn oath invoking truth; to utter profane or vulgar vocabulary when provoked", pronInf: "/sweər/", pronPast: "/swɔːr/", pronPP: "/swɔːrn/", group: "group5", pattern: "ABC", icon: "✋", collocations: "swear an oath, swear by, sworn enemy", exBase: "Witnesses swear to tell the truth before testifying.", exPast: "The newly elected governor swore the oath of office.", exPP: "She has sworn under oath that she was not present." },
      { inf: "swim", past: "swam", pp: "swum", meaning: "to propel one's body through water using coordinated physical strokes and kicking motions", pronInf: "/swɪm/", pronPast: "/swæm/", pronPP: "/swʌm/", group: "group5", pattern: "ABC", icon: "🏊", collocations: "swim against the tide, sink or swim", exBase: "We swim in the lake during summer.", exPast: "She swam across the entire bay.", exPP: "He has swum competitively for years." },
      { inf: "take", past: "took", pp: "taken", meaning: "to grasp, seize, or accept possession of something; to require a specified allotment of time", pronInf: "/teɪk/", pronPast: "/tʊk/", pronPP: "/ˈteɪkən/", group: "group5", pattern: "ABC", icon: "🖐️", collocations: "take for granted, take into account", exBase: "Please take your coat when leaving.", exPast: "She took a deep breath before speaking.", exPP: "They have taken all necessary precautions." },
      { inf: "tear", past: "tore", pp: "torn", meaning: "to rip, sever, or pull apart with force; to distress or divide psychological loyalties between choices", pronInf: "/tɛər/", pronPast: "/tɔːr/", pronPP: "/tɔːrn/", group: "group5", pattern: "ABC", icon: "📄", collocations: "tear down, torn between two choices", exBase: "Handle carefully so you don't tear it.", exPast: "He tore the envelope open eagerly.", exPP: "The sail was torn by the violent storm." },
      { inf: "throw", past: "threw", pp: "thrown", meaning: "to propel an object through the air using the arm and hand with explosive momentum", pronInf: "/θroʊ/", pronPast: "/θruː/", pronPP: "/θroʊn/", group: "group5", pattern: "ABC", icon: "⚾", collocations: "throw in the towel, throw caution to the wind", exBase: "Throw the ball to the catcher.", exPast: "The pitcher threw a fastball.", exPP: "He has thrown away old receipts." },
      { inf: "wake", past: "woke", pp: "woken", meaning: "to transition from sleep to full alertness and conscious awareness; to arouse another from slumber", pronInf: "/weɪk/", pronPast: "/woʊk/", pronPP: "/ˈwoʊkən/", group: "group5", pattern: "ABC", icon: "⏰", collocations: "wake up, wake-up call", exBase: "I wake up at seven o'clock every day.", exPast: "The baby woke up in the middle of the night.", exPP: "We have woken up early today." },
      { inf: "wear", past: "wore", pp: "worn", meaning: "to carry clothing, jewelry, or fragrance on the body; to erode or deteriorate gradually through friction or time", pronInf: "/wɛər/", pronPast: "/wɔːr/", pronPP: "/wɔːrn/", group: "group5", pattern: "ABC", icon: "👕", collocations: "wear thin, wear out, wear your heart on your sleeve", exBase: "People wear heavy coats in winter.", exPast: "She wore a vintage silk scarf.", exPP: "These hiking boots are completely worn out." },
      { inf: "weave", past: "wove", pp: "woven", meaning: "to interlace threads into textile fabric on a loom; to compose an intricate plot, narrative, or fantasy", pronInf: "/wiːv/", pronPast: "/woʊv/", pronPP: "/ˈwoʊvən/", group: "group5", pattern: "ABC", icon: "🧶", collocations: "weave a tale, weave through traffic", exBase: "Artisans weave intricate rugs by hand.", exPast: "She wove a blanket from sheep wool.", exPP: "The author has woven a captivating story." },
      { inf: "withdraw", past: "withdrew", pp: "withdrawn", meaning: "to remove or take back funds from an account; to retreat military forces or retract an official claim", pronInf: "/wɪðˈdrɔː/", pronPast: "/wɪðˈdruː/", pronPP: "/wɪðˈdrɔːn/", group: "group5", pattern: "ABC", icon: "🏧", collocations: "withdraw money, withdraw troops, withdraw a claim", exBase: "Customers withdraw cash from automated tellers daily.", exPast: "The army withdrew behind defensive fortification walls.", exPP: "The sponsor has withdrawn their funding for the project." },
      { inf: "write", past: "wrote", pp: "written", meaning: "to inscribe or compose text, literature, or analytical data onto a physical surface or digital document", pronInf: "/raɪt/", pronPast: "/roʊt/", pronPP: "/ˈrɪtən/", group: "group5", pattern: "ABC", icon: "✍️", collocations: "write off, write down, in black and white", exBase: "I write in my journal every night.", exPast: "He wrote an inspiring essay.", exPP: "She has written three bestselling novels." }
    ];

    /* ============================================================
       2. DATASET: 12 VERB TENSES (From tenses.html)
       ============================================================ */
    const tensesData = [
      {
        name: "Present Simple",
        example: "It rains",
        positive: "It rains",
        negative: "It doesn't rain",
        question: "Does it rain?",
        usage: "Used for routines, habits, general facts, and things that happen normally.",
        examples: [
          "I get up at 7 o'clock every day.",
          "Water freezes at 0°C.",
          "She plays the violin."
        ]
      },
      {
        name: "Past Simple",
        example: "It rained",
        positive: "It rained",
        negative: "It didn't rain",
        question: "Did it rain?",
        usage: "Used for actions completed at a specific moment in the past.",
        examples: [
          "I studied French at school.",
          "He put the wine on the table.",
          "We came back from holiday on Friday."
        ]
      },
      {
        name: "Future Simple",
        example: "It will rain",
        positive: "It will rain",
        negative: "It won't rain",
        question: "Will it rain?",
        usage: "Decisions made at the moment of speaking, promises, predictions.",
        examples: [
          "I will get it.",
          "I think you will enjoy the film!",
          "The show will start in 5 minutes."
        ]
      },
      {
        name: "Present Continuous",
        example: "It is raining",
        positive: "It is raining",
        negative: "It is not raining",
        question: "Is it raining?",
        usage: "Actions happening right now, temporary situations, developing actions.",
        examples: [
          "I'm teaching English right now.",
          "The sun is shining.",
          "A tropical storm is approaching."
        ]
      },
      {
        name: "Past Continuous",
        example: "It was raining",
        positive: "It was raining",
        negative: "It wasn't raining",
        question: "Was it raining?",
        usage: "Continuous action in the past, often interrupted by a shorter action.",
        examples: [
          "I was reading when the phone rang.",
          "She was working when I got home.",
          "The kids were playing while I was working."
        ]
      },
      {
        name: "Future Continuous",
        example: "It will be raining",
        positive: "It will be raining",
        negative: "It won't be raining",
        question: "Will it be raining?",
        usage: "Continuous actions that will be in progress at a specific future moment.",
        examples: [
          "I'll be sleeping when you come back.",
          "She will be travelling this summer.",
          "You'll be learning about perfect tenses in 2 minutes."
        ]
      },
      {
        name: "Present Perfect",
        example: "It has rained",
        positive: "It has rained",
        negative: "It hasn't rained",
        question: "Has it rained?",
        usage: "Actions in an unfinished time period, or past actions with present relevance.",
        examples: [
          "I have spoken to him three times today.",
          "I've lost my sunglasses. Can I borrow yours?",
          "She has never tried sushi."
        ]
      },
      {
        name: "Past Perfect",
        example: "It had rained",
        positive: "It had rained",
        negative: "It hadn't rained",
        question: "Had it rained?",
        usage: "The earlier action when two past events are mentioned.",
        examples: [
          "I had heard the news before you told me.",
          "She had eaten a packet of biscuits just before lunch.",
          "We had finished cleaning before we left."
        ]
      },
      {
        name: "Future Perfect",
        example: "It will have rained",
        positive: "It will have rained",
        negative: "It won't have rained",
        question: "Will it have rained?",
        usage: "An action that will be completed before another future action.",
        examples: [
          "By the time he wakes up, Santa will have brought presents.",
          "He will have made dinner when they get home.",
          "I will have graduated university when I turn 26."
        ]
      },
      {
        name: "Present Perfect Continuous",
        example: "It has been raining",
        positive: "It has been raining",
        negative: "It hasn't been raining",
        question: "Has it been raining?",
        usage: "Continuous actions that started in the past and are still happening now.",
        examples: [
          "I have been working with you for 3 months.",
          "They've been building their house for years.",
          "I've been craving chocolate cake for days!"
        ]
      },
      {
        name: "Past Perfect Continuous",
        example: "It had been raining",
        positive: "It had been raining",
        negative: "It hadn't been raining",
        question: "Had it been raining?",
        usage: "Continuous action that finished before another past action.",
        examples: [
          "I'd been looking for a job for months before I started my business.",
          "She had been feeling sick, so she saw a doctor.",
          "He had been travelling before he started at that company."
        ]
      },
      {
        name: "Future Perfect Continuous",
        example: "It will have been raining",
        positive: "It will have been raining",
        negative: "It won't have been raining",
        question: "Will it have been raining?",
        usage: "Duration of a continuous action up to a certain point in the future.",
        examples: [
          "In 2030 I will have been working here for 15 years.",
          "You will have been cooking for 3 hours when I come back.",
          "We'll be tired; we'll have been travelling all day."
        ]
      }
    ];

    const tensesQuizQuestions = [
      {
        text: "1. ________ when you called.",
        options: ["I slept", "I was sleeping", "I had been sleeping"],
        correct: 1
      },
      {
        text: "2. When we reached the station, the train ________.",
        options: ["left", "had been leaving", "had left"],
        correct: 2
      },
      {
        text: "3. You can watch TV at 8pm. We ________ dinner by then.",
        options: ["will finish", "will have finished", "will have been finishing"],
        correct: 1
      },
      {
        text: "4. ________ in Hong Kong before she moved to Germany.",
        options: ["She had been living", "She has been living", "She will be living"],
        correct: 0
      },
      {
        text: "5. Do you think you ________ at the same company next year?",
        options: ["will be working", "will have worked", "will have been working"],
        correct: 0
      },
      {
        text: "6. They ________ each other every day since they met.",
        options: ["texted", "will have been texting", "have texted"],
        correct: 2
      }
    ];

    /* ============================================================
       3. DATASET: 25 PREPOSITIONS WITH DEDICATED SVGs
       ============================================================ */
    const prepositionsData = [
      {
        id: 1, name: "In", category: "spatial-triad", badge: "Enclosed / General",
        rule: "Inside an enclosed 3D vessel or space, large geographic territories, broad eras/months, and print media.",
        bullets: [
          "Space: Inside an enclosed container or holding hands (in a pouch, in my hands, in the room).",
          "Broad Geography: Large areas and boundaries (in Pune, in France, in the park).",
          "Time & Print: Broad eras/months (in 1980, in September, in the afternoon) & print media (in the newspaper)."
        ],
        tip: "Think of In as broad, 3D enclosures or general timeframes.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="25" width="100" height="70" rx="8" stroke="#3b82f6" stroke-width="2.5" fill="rgba(59,130,246,0.1)" stroke-dasharray="4 2"/>
          <circle cx="100" cy="60" r="14" fill="#2563eb"/>
          <text x="100" y="65" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">IN</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Enclosed interior space / General boundary</text>
        </svg>`
      },
      {
        id: 2, name: "On", category: "spatial-triad", badge: "Surfaces / Specific Days",
        rule: "Direct contact on top of a surface, specific calendar days, and electronic screens/devices.",
        bullets: [
          "Physical Surface: Physical direct contact on top (on the table, on my hand, on a bicycle).",
          "Specific Days/Dates: Specific calendar days (on Tuesday, on the 20th of May).",
          "Digital / Screens / State: Electronic mediums (on television, on the internet) & operating state (switch is on)."
        ],
        tip: "Flat surface touching or digital devices. Contrasts with in (print) vs on (screen).",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="75" x2="170" y2="75" stroke="#10b981" stroke-width="4" stroke-linecap="round"/>
          <rect x="40" y="77" width="120" height="15" fill="rgba(16,185,129,0.15)" rx="3"/>
          <circle cx="100" cy="50" r="14" fill="#059669"/>
          <text x="100" y="55" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">ON</text>
          <path d="M100 24 L100 33" stroke="#059669" stroke-width="2" stroke-linecap="round"/>
          <path d="M96 30 L100 34 L104 30" stroke="#059669" stroke-width="2"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Flat surface contact / Specific day</text>
        </svg>`
      },
      {
        id: 3, name: "At", category: "spatial-triad", badge: "Pinpoint Spot / Exact Time",
        rule: "Specific designated point or doorway, precise moments in time, and specific events.",
        bullets: [
          "Pinpointed Target: Specific point or entrance (at the entrance, at the bus stop, at the door).",
          "Exact Clock Time: Precise moments (at 3:00 PM, at noon, at sunrise).",
          "Events & Activities: Gatherings (at the shoot, at a party)."
        ],
        tip: "The Triangle Rule: IN (General) > ON (More Specific) > AT (Most Specific).",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="55" r="28" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3 3"/>
          <line x1="100" y1="18" x2="100" y2="92" stroke="#d97706" stroke-width="1.5"/>
          <line x1="63" y1="55" x2="137" y2="55" stroke="#d97706" stroke-width="1.5"/>
          <circle cx="100" cy="55" r="10" fill="#f59e0b"/>
          <circle cx="100" cy="55" r="4" fill="#ffffff"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Pinpointed precise location / Exact hour</text>
        </svg>`
      },
      {
        id: 4, name: "Since", category: "time-cause", badge: "Starting Point in Time",
        rule: "Points to the exact moment an ongoing action began; also functions as 'because'.",
        bullets: [
          "Starting Point: Exact moment an ongoing action began (living in Pune since 2019, friends since high school).",
          "Reason / Cause: Functions like 'because' (Since it was raining, we stayed indoors)."
        ],
        tip: "Since asks 'From when did it start?' (a single point).",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="60" x2="170" y2="60" stroke="#475569" stroke-width="2"/>
          <line x1="60" y1="60" x2="165" y2="60" stroke="#8b5cf6" stroke-width="3.5"/>
          <path d="M165 56 L172 60 L165 64" fill="#8b5cf6"/>
          <circle cx="60" cy="60" r="7" fill="#6d28d9"/>
          <text x="60" y="45" font-size="10" font-weight="bold" fill="#a78bfa" text-anchor="middle">2019 (Start)</text>
          <text x="160" y="45" font-size="10" fill="#94a3b8" text-anchor="middle">Now</text>
          <text x="100" y="105" font-size="10" fill="#94a3b8" text-anchor="middle">Action began at a fixed point and continues</text>
        </svg>`
      },
      {
        id: 5, name: "For", category: "time-cause", badge: "Duration & Purpose",
        rule: "Total elapsed duration of time; also expresses purpose, recipient, agreement, and price.",
        bullets: [
          "Time Duration: Total amount of time elapsed (recording for 3 hours, friends for 10 years).",
          "Purpose / Recipient: Reason or recipient (a glass for drinking, this gift is for you).",
          "Agreement & Cost: Favoring (I'm for the motion) & cost (bought it for $200)."
        ],
        tip: "For asks 'How long in total?' (a continuous quantity of time).",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="45" width="120" height="24" rx="12" fill="rgba(236,72,153,0.15)" stroke="#ec4899" stroke-width="2"/>
          <text x="100" y="61" font-size="10.5" font-weight="bold" fill="#f472b6" text-anchor="middle">Duration: 3 Hours</text>
          <line x1="40" y1="78" x2="160" y2="78" stroke="#ec4899" stroke-width="1.5"/>
          <line x1="40" y1="74" x2="40" y2="82" stroke="#ec4899" stroke-width="1.5"/>
          <line x1="160" y1="74" x2="160" y2="82" stroke="#ec4899" stroke-width="1.5"/>
          <text x="100" y="105" font-size="10" fill="#94a3b8" text-anchor="middle">Total measure / span of time</text>
        </svg>`
      },
      {
        id: 6, name: "Over", category: "vertical-levels", badge: "Directly On Top / Across",
        rule: "Directly above with covering or contact, movement across an area, or exceeding limits.",
        bullets: [
          "Vertical Alignment & Covering: Covering directly (blanket over my head, plane flew over the city).",
          "Exceeding & Activity: More than a limit (over 100 people) or during an event (spoke over lunch)."
        ],
        tip: "Implies movement across or physical covering of the object underneath.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="75" y="65" width="50" height="30" rx="4" fill="#334155" stroke="#475569"/>
          <path d="M40 70 Q100 15 160 70" stroke="#38bdf8" stroke-width="3" fill="none" stroke-dasharray="3 3"/>
          <polygon points="160,70 150,62 153,74" fill="#38bdf8"/>
          <circle cx="100" cy="30" r="10" fill="#0284c7"/>
          <text x="100" y="34" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">OVER</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Directly vertical, covering or moving across</text>
        </svg>`
      },
      {
        id: 7, name: "Above", category: "vertical-levels", badge: "Higher Plane / Standards",
        rule: "Higher elevation without contact or covering, comparative standards, rank, and metrics.",
        bullets: [
          "Higher Level: Separated elevation without touching (shelf above the desk, above sea level).",
          "Standards & Rank: Higher performance/stature (above average, above suspicion, the officer above me).",
          "Idiom: 'Over and above' means extra/in addition to expectations."
        ],
        tip: "No contact or movement needed; simply located on an upper tier.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="25" width="100" height="16" rx="4" fill="#0891b2"/>
          <text x="100" y="37" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">SHELF (ABOVE)</text>
          <line x1="100" y1="48" x2="100" y2="70" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="2 2"/>
          <rect x="40" y="75" width="120" height="20" rx="3" fill="#1e293b" stroke="#475569"/>
          <text x="100" y="89" font-size="9" fill="#94a3b8" text-anchor="middle">TABLE SURFACE</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Higher elevation without touching or covering</text>
        </svg>`
      },
      {
        id: 8, name: "Under", category: "vertical-levels", badge: "Directly Beneath / Covered",
        rule: "Direct vertical downward positioning, covering, or conditions/states.",
        bullets: [
          "Physical Position: Directly beneath with covering or direct overlap (dog under the table, under the blanket).",
          "Conditions & Authority: Limits (under 18 years), legal control (under the law), mental state (under pressure)."
        ],
        tip: "Under corresponds directly as the inverse of Over.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="35" width="130" height="12" rx="3" fill="#ea580c"/>
          <line x1="45" y1="47" x2="45" y2="85" stroke="#ea580c" stroke-width="3"/>
          <line x1="155" y1="47" x2="155" y2="85" stroke="#ea580c" stroke-width="3"/>
          <circle cx="100" cy="65" r="13" fill="rgba(234,88,12,0.3)" stroke="#ea580c" stroke-width="2"/>
          <text x="100" y="69" font-size="8.5" font-weight="bold" fill="#fdba74" text-anchor="middle">UNDER</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Directly beneath a surface or physical cover</text>
        </svg>`
      },
      {
        id: 9, name: "Below", category: "vertical-levels", badge: "Lower Tier / Benchmark",
        rule: "Lower than a threshold without direct contact, scales, and text lower on a page.",
        bullets: [
          "Lower Elevation: Lower than a threshold without direct contact (the valley below the peak, below sea level).",
          "Metrics & Text: Scales (below freezing, below average) & page location (read the notes below)."
        ],
        tip: "Below is the exact counterpart to Above.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="40" x2="170" y2="40" stroke="#0d9488" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="175" y="44" font-size="9" fill="#0d9488" font-weight="bold">Base 0°</text>
          <rect x="60" y="65" width="80" height="24" rx="5" fill="rgba(13,148,136,0.2)" stroke="#0d9488" stroke-width="2"/>
          <text x="100" y="80" font-size="9" font-weight="bold" fill="#5eead4" text-anchor="middle">BELOW ZERO</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Lower tier / benchmark without direct alignment</text>
        </svg>`
      },
      {
        id: 10, name: "To", category: "trajectory", badge: "Destination Reached",
        rule: "Terminal destination reached, recipient of an action, time before an hour, or preference.",
        bullets: [
          "Final Destination: Arrival confirmed (went to the market).",
          "Recipient & Time: Giver to receiver (gave it to him) & minutes to the hour (ten to five).",
          "Preference & Ratios: Comparison (prefer tea to coffee, score was 3 to 1)."
        ],
        tip: "To implies the full completion of the trip to the endpoint.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="55" r="8" fill="#64748b"/>
          <line x1="48" y1="55" x2="145" y2="55" stroke="#6366f1" stroke-width="3"/>
          <polygon points="145,49 157,55 145,61" fill="#6366f1"/>
          <rect x="155" y="40" width="28" height="30" rx="4" fill="#4f46e5"/>
          <text x="169" y="59" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">GOAL</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Reaches and touches the terminal destination</text>
        </svg>`
      },
      {
        id: 11, name: "Towards", category: "trajectory", badge: "Directional Heading",
        rule: "Movement in that general heading without confirmed arrival; also attitude and contributions.",
        bullets: [
          "Heading / Vector: Walking in that direction (walking towards the school — might stop on the way).",
          "Attitude & Goal: Mindset (positive towards work) & contribution (saved towards retirement)."
        ],
        tip: "To = end destination. Towards = orientation/vector only.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="55" r="8" fill="#64748b"/>
          <line x1="48" y1="55" x2="115" y2="55" stroke="#a855f7" stroke-width="3" stroke-dasharray="4 2"/>
          <polygon points="115,49 127,55 115,61" fill="#a855f7"/>
          <rect x="155" y="40" width="28" height="30" rx="4" fill="rgba(168,85,247,0.15)" stroke="#a855f7" stroke-width="1.5"/>
          <text x="169" y="59" font-size="8" font-weight="bold" fill="#d8b4fe" text-anchor="middle">GOAL</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Headed in that direction without confirming arrival</text>
        </svg>`
      },
      {
        id: 12, name: "From", category: "trajectory", badge: "Origin & Transformation",
        rule: "Starting place, hour, or distance origin; transformed matter in 'made from'.",
        bullets: [
          "Origin & Time: Starting place or hour (from Brazil, works from 9 to 5, 5 km from here).",
          "Made From: Chemical change / transformation where raw substance can no longer be seen (plastic is made from oil)."
        ],
        tip: "Compare with made of (wood table) where material form did not chemically transform.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="45" cy="55" r="14" fill="#e11d48"/>
          <text x="45" y="59" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">ORIGIN</text>
          <line x1="62" y1="55" x2="155" y2="55" stroke="#e11d48" stroke-width="3"/>
          <polygon points="155,49 167,55 155,61" fill="#e11d48"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Point of departure, starting hour, or transformed matter</text>
        </svg>`
      },
      {
        id: 13, name: "Along", category: "motion-path", badge: "Parallel to Edge",
        rule: "Movement or layout following the linear direction of a boundary, road, path, or river.",
        bullets: [
          "Parallel Motion: Moving alongside a boundary or edge (walking along the river, driving along the highway).",
          "Arranged in a Line: Fixed placements (streetlights along the path)."
        ],
        tip: "Tracing the contour without crossing over it.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 45 C75 75 125 25 175 55" stroke="#64748b" stroke-width="8" stroke-linecap="round"/>
          <path d="M25 65 C75 95 125 45 175 75" stroke="#eab308" stroke-width="3" stroke-dasharray="5 3"/>
          <polygon points="175,75 165,70 166,80" fill="#eab308"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Following the curve, margin, or coastline</text>
        </svg>`
      },
      {
        id: 14, name: "Around", category: "motion-path", badge: "Surrounding / Approx",
        rule: "Circular surrounding movement, looking in all directions, or approximate numbers/times.",
        bullets: [
          "Circular Surrounding: Enclosing an object (sat around the bonfire, ran around the tree).",
          "Approximate Count/Time: Roughly (around 3 PM, around 50 dollars).",
          "Touring: Wandering different locations (backpacking around Europe)."
        ],
        tip: "Works spatially (360° circle) and numerically (estimate).",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="55" r="16" fill="#84cc16"/>
          <ellipse cx="100" cy="55" rx="42" ry="24" stroke="#84cc16" stroke-width="2.5" stroke-dasharray="4 2"/>
          <polygon points="142,55 137,47 146,47" fill="#84cc16"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Circular encircling motion or ballpark estimate</text>
        </svg>`
      },
      {
        id: 15, name: "Across", category: "motion-path", badge: "Side to Side / Open Plane",
        rule: "Crossing from one side to the opposite across a flat expanse; also widespread presence.",
        bullets: [
          "Transverse Motion: Crossing from one side to the opposite across a flat expanse (swam across the lake, walked across the street).",
          "Wide Distribution: Everywhere throughout a zone (news spread across the country)."
        ],
        tip: "Across is across an open 2D surface, while Through is within a 3D channel.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="25" x2="170" y2="25" stroke="#64748b" stroke-width="2"/>
          <line x1="30" y1="85" x2="170" y2="85" stroke="#64748b" stroke-width="2"/>
          <rect x="30" y="27" width="140" height="56" fill="rgba(255,255,255,0.03)"/>
          <line x1="60" y1="82" x2="140" y2="28" stroke="#10b981" stroke-width="3"/>
          <polygon points="140,28 130,31 137,39" fill="#10b981"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Transversing from one side across an open surface</text>
        </svg>`
      },
      {
        id: 16, name: "Through", category: "motion-path", badge: "Inside 3D Passage",
        rule: "In one side and out the other of a 3D volume or channel, time endurance, and medium.",
        bullets: [
          "Enclosed Passage: Going in and out of 3D spaces (drove through the tunnel, walked through the dense forest).",
          "Time & Method: Duration endurance (worked through the night) & medium (succeeded through diligence, read through the contract)."
        ],
        tip: "Complete immersion inside an environment from start to finish.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="70" y="30" width="60" height="50" rx="8" fill="#1e293b" stroke="#14b8a6" stroke-width="2"/>
          <ellipse cx="100" cy="55" rx="15" ry="20" fill="rgba(20,184,166,0.2)" stroke="#14b8a6" stroke-width="1.5"/>
          <line x1="25" y1="55" x2="175" y2="55" stroke="#14b8a6" stroke-width="3" stroke-dasharray="4 2"/>
          <polygon points="175,55 165,50 165,60" fill="#14b8a6"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Entering one side of a 3D channel & exiting the other</text>
        </svg>`
      },
      {
        id: 17, name: "Between", category: "distribution", badge: "Two Distinct Items",
        rule: "Separating exactly two distinct items; can exceed 2 if each entity is individually named.",
        bullets: [
          "Two Distinct Objects: Separating exactly two elements (between the two pillars, secret between you and me).",
          "Multiple Named Options: Can exceed 2 if each entity is individually named (choosing between Oxford, Cambridge, Harvard, and Yale)."
        ],
        tip: "The items are clearly separable individuals.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="55" r="20" fill="#3b82f6"/>
          <text x="50" y="59" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">A</text>
          <circle cx="150" cy="55" r="20" fill="#3b82f6"/>
          <text x="150" y="59" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">B</text>
          <circle cx="100" cy="55" r="14" fill="#60a5fa"/>
          <text x="100" y="59" font-size="9" font-weight="bold" fill="#090d16" text-anchor="middle">YOU</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Space separating two distinct, identifiable entities</text>
        </svg>`
      },
      {
        id: 18, name: "Among", category: "distribution", badge: "Collective Group of 3+",
        rule: "Part of an indistinct group or crowd of three or more non-distinct members.",
        bullets: [
          "Part of a Mass / Crowd: Surrounded by 3 or more indistinct members (lost my keys among the clothes, distribute sweets among students).",
          "Collective Agreement: Shared sense (discussed among friends)."
        ],
        tip: "2 distinct individuals = between. A generalized group = among.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="65" cy="38" r="13" fill="#6366f1"/>
          <circle cx="135" cy="40" r="13" fill="#6366f1"/>
          <circle cx="55" cy="72" r="13" fill="#6366f1"/>
          <circle cx="145" cy="70" r="13" fill="#6366f1"/>
          <circle cx="100" cy="85" r="13" fill="#6366f1"/>
          <circle cx="100" cy="55" r="15" fill="#a5b4fc"/>
          <text x="100" y="59" font-size="9" font-weight="bold" fill="#090d16" text-anchor="middle">ITEM</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Surrounded by a collective group / crowd</text>
        </svg>`
      },
      {
        id: 19, name: "Amid / Amidst", category: "distribution", badge: "Abstract State / Chaos",
        rule: "Surrounded by non-countable atmosphere, environmental turmoil, or prevailing conditions.",
        bullets: [
          "Abstract Atmosphere: In the midst of non-countable chaos or environmental turmoil (stayed calm amid the chaos, amidst cheering fans).",
          "Conditions: Prevailing state (profits grew amid difficult market conditions)."
        ],
        tip: "Use amid with uncountable nouns or intangible abstract environments.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 30 Q60 50 40 70 Q70 60 90 85 Q110 50 130 80 Q160 50 140 30" stroke="#f472b6" stroke-width="2.5" fill="none"/>
          <path d="M50 85 Q80 70 120 75 Q150 90 170 65" stroke="#f472b6" stroke-width="2" fill="none" stroke-dasharray="3 3"/>
          <circle cx="100" cy="55" r="14" fill="#ec4899"/>
          <text x="100" y="59" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">CALM</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Surrounded by disorder, atmosphere or noise</text>
        </svg>`
      },
      {
        id: 20, name: "Into", category: "dynamic-motion", badge: "Motion to Inside",
        rule: "Starting outside and crossing a boundary into an enclosure; also change of state.",
        bullets: [
          "Dynamic Motion Inward: Starting outside and crossing boundary into enclosure (walked into the conference hall, drove into the garage).",
          "Transformation: Change of state (caterpillar turned into a butterfly)."
        ],
        tip: "In is static position; Into requires active movement.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="85" y="30" width="75" height="55" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <path d="M30 57 C55 57 70 57 115 57" stroke="#38bdf8" stroke-width="3"/>
          <polygon points="115,51 127,57 115,63" fill="#38bdf8"/>
          <circle cx="125" cy="57" r="4" fill="#0284c7"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Dynamic action: Outside moving into the interior</text>
        </svg>`
      },
      {
        id: 21, name: "Onto", category: "dynamic-motion", badge: "Motion Landing on Surface",
        rule: "Moving toward and settling on top of a flat or elevated surface; also awareness.",
        bullets: [
          "Dynamic Landing: Moving toward and settling on a flat top (cat leaped onto the kitchen counter, climbed onto the roof).",
          "Awareness: Discovering something (they are onto our plan)."
        ],
        tip: "On = resting on surface; Onto = the trajectory to get there.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="90" y="60" width="80" height="30" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2"/>
          <path d="M40 75 Q70 20 125 54" stroke="#10b981" stroke-width="3" fill="none"/>
          <polygon points="125,54 117,46 126,43" fill="#10b981"/>
          <text x="130" y="78" font-size="8.5" font-weight="bold" fill="#6ee7b7" text-anchor="middle">SURFACE</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Dynamic action: Moving and landing upon surface</text>
        </svg>`
      },
      {
        id: 22, name: "Off", category: "dynamic-motion", badge: "Disconnection / Separation",
        rule: "Physical displacement away from a surface, removing attire, disconnection, and discounts.",
        bullets: [
          "Physical Separation: Leaving a surface (jumped off the table, fell off the bike).",
          "Removal / Disconnection: Removing attire or state (take your shoes off, switch off the lights).",
          "Discounts & Cancellations: Reductions (20% off) & cancellation (called the meeting off)."
        ],
        tip: "The exact physical and electrical opposite of On.",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="60" width="70" height="30" rx="4" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
          <path d="M70 54 Q100 20 145 65" stroke="#ef4444" stroke-width="3" fill="none"/>
          <polygon points="145,65 142,55 135,62" fill="#ef4444"/>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Disconnection, separation, or leaving surface</text>
        </svg>`
      },
      {
        id: 23, name: "Of", category: "possession-words", badge: "Possession & Pure Material",
        rule: "Belonging, fractions, recognized unchanged raw material in 'made of', and causes.",
        bullets: [
          "Part of Whole: Belonging or fractions (cover of the book, slice of pizza, cup of tea).",
          "Made Of: Source material is recognizable and not chemically altered (ring made of gold, table made of wood).",
          "Cause: Reason for death or feeling (died of cholera, proud of you)."
        ],
        tip: "Made of wood (material unchanged). Made from grapes (wine transformed).",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="55" r="32" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2"/>
          <path d="M90 55 L118 40 A32 32 0 0 1 122 58 Z" fill="#d97706"/>
          <circle cx="145" cy="55" r="16" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="145" y="58" font-size="7" font-weight="bold" fill="#fbbf24" text-anchor="middle">SLICE OF</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Component, relationship, or untransformed base material</text>
        </svg>`
      },
      {
        id: 24, name: "Beside", category: "possession-words", badge: "Next to / By the Side",
        rule: "Sitting or standing by the side of someone or something; physical proximity only.",
        bullets: [
          "Physical Proximity: Sitting or standing by the side of someone or something (she sat beside her friend, lamp placed beside the bed).",
          "Idiom: 'Beside oneself' means overwhelmed with emotion (beside oneself with joy)."
        ],
        tip: "Beside has NO extra 's' — it strictly refers to physical side position!",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="55" y="40" width="35" height="35" rx="6" fill="#334155" stroke="#64748b" stroke-width="2"/>
          <rect x="110" y="40" width="35" height="35" rx="6" fill="#2563eb" stroke="#3b82f6" stroke-width="2"/>
          <path d="M92 57 L108 57" stroke="#94a3b8" stroke-width="2" stroke-dasharray="2 2"/>
          <text x="72" y="61" font-size="8" font-weight="bold" fill="#cbd5e1" text-anchor="middle">ITEM</text>
          <text x="127" y="61" font-size="8" font-weight="bold" fill="#ffffff" text-anchor="middle">BESIDE</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">Physical proximity: immediately positioned next to</text>
        </svg>`
      },
      {
        id: 25, name: "Besides", category: "possession-words", badge: "In Addition to / Also",
        rule: "Means 'also', 'as well as', or 'apart from / except'.",
        bullets: [
          "In Addition To: Means 'also' or 'as well as' (Besides English, she speaks French and Spanish, Besides pizza, he ordered pasta).",
          "Apart From / Except: Excluding context (no one showed up besides Jack)."
        ],
        tip: "The letter 'S' stands for 'Something Extra' added!",
        svg: `<svg viewBox="0 0 200 120" class="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="55" r="20" fill="rgba(34,197,94,0.2)" stroke="#16a34a" stroke-width="2"/>
          <text x="70" y="58" font-size="8.5" font-weight="bold" fill="#86efac" text-anchor="middle">MAIN</text>
          <text x="105" y="60" font-size="18" font-weight="bold" fill="#16a34a" text-anchor="middle">+</text>
          <circle cx="140" cy="55" r="20" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
          <text x="140" y="58" font-size="8.5" font-weight="bold" fill="#ffffff" text-anchor="middle">EXTRA (+S)</text>
          <text x="100" y="112" font-size="10" fill="#94a3b8" text-anchor="middle">The extra 's' means something added / also</text>
        </svg>`
      }
    ];

    /* ============================================================
       4. DATASET: UNIFIED QUIZ HUB
       ============================================================ */
    const unifiedQuizData = [
      {
        q: "1. The artisan made this sturdy table _____ solid teak wood.",
        options: ["made of", "made from", "made by", "made with"],
        ans: 0,
        exp: "Use 'made of' because the base material (wood) didn't undergo chemical transformation—its physical properties are intact and visible."
      },
      {
        q: "2. He has been studying in this university _____ September 2021.",
        options: ["for", "since", "from", "in"],
        ans: 1,
        exp: "Use 'since' because September 2021 marks the exact starting point of an action that continues to the present."
      },
      {
        q: "3. The temperature in the mountain valley dropped _____ freezing last night.",
        options: ["under", "below", "down", "off"],
        ans: 1,
        exp: "Use 'below' for levels on a vertical scale or benchmark (e.g., below freezing, below average) where direct vertical coverage isn't implied."
      },
      {
        q: "4. The secret was safely kept _____ the four individual team leaders: Sarah, David, Elena, and Ken.",
        options: ["among", "between", "amid", "within"],
        ans: 1,
        exp: "Although there are 4 entities, 'between' is used when each individual option or party is specifically named and distinct."
      },
      {
        q: "5. He jumped excitedly _____ the stage as the crowd roared.",
        options: ["on", "onto", "in", "into"],
        ans: 1,
        exp: "'Onto' expresses dynamic movement leading to landing on top of a surface. 'On' would only indicate a static position."
      },
      {
        q: "6. _____ speaking fluent Spanish, she also understands Portuguese and Italian.",
        options: ["Beside", "Besides", "Between", "Of"],
        ans: 1,
        exp: "'Besides' with the extra 's' means 'in addition to' or 'also'. 'Beside' without the 's' only means next to someone or something."
      },
      {
        q: "7. By the time the doctor arrived, the patient's fever had already _____ sharply.",
        options: ["rose", "risen", "raised", "rised"],
        ans: 1,
        exp: "Past perfect requires 'had + past participle'. The past participle of 'rise' is 'risen' (rise - rose - risen)."
      },
      {
        q: "8. The sudden tremor _____ the crystal glasses on the mantelpiece.",
        options: ["shook", "shaked", "shaken", "was shook"],
        ans: 0,
        exp: "Past simple of 'shake' is 'shook' (shake - shook - shaken)."
      }
    ];
