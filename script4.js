// Define vocabulary terms and their definitions

const vocabulary = [
    {
        term: "Learning",
        definition: "A relatively permanent change in an organism's behavior due to experience."
    },
    {
        term: "Habituation",
        definition: "An organism's decreasing response to a stimulus with repeated exposure to it."
    },
    {
        term: "Associative Learning",
        definition: "Learning that certain events occur together."
    },
    {
        term: "Classical Conditioning",
        definition: "A type of learning in which one learns to link two or more stimuli and anticipate events."
    },
    {
        term: "Behaviorism",
        definition: "Psychology: (1) Should be an objective science that (2) studies behavior without reference to mental processes."
    },
    {
        term: "Unconditioned Response (UR)",
        definition: "The unlearned, naturally occurring reaction to US, such as salivation when food is in the mouth."
    },
    {
        term: "Unconditioned Stimulus (US)",
        definition: "A stimulus that naturally and automatically triggers a reaction (like food)."
    },
    {
        term: "Conditioned Response (CR)",
        definition: "The learned reaction to a previously neutral (but now conditioned) stimulus (CS)."
    },
    {
        term: "Conditioned Stimulus (CS)",
        definition: "An originally irrelevant stimulus that, after association with an US, comes to trigger a conditioned reaction."
    },
    {
        term: "Acquisition",
        definition: "The 'learned' behavior or response."
    },
    {
        term: "Higher-Order Conditioning",
        definition: "A procedure in which the CS in one conditioning experience is paired with a new NS, creating a second (often weaker) CS."
    },
    {
        term: "Extinction",
        definition: "The diminishing of a CR; when a response is no longer reinforced."
    },
    {
        term: "Spontaneous Recovery",
        definition: "The reappearance, after a pause, of an extinguished CR."
    },
    {
        term: "Generalization",
        definition: "The tendency, once a response has been conditioned, for stimuli similar to the CS to elicit responses."
    },
    {
        term: "Discrimination",
        definition: "The learned ability to distinguish between a CS and stimuli that do not signal an US."
    },
    {
        term: "Learned Helplessness",
        definition: "The hopelessness and passive resignation an animal or human learns when unable to avoid repeated aversive events."
    },
    {
        term: "Operant Conditioning",
        definition: "A type of learning in which behavior is strengthened if followed by a reinforcer or diminished followed by a punisher."
    },
    {
        term: "Law of Effect",
        definition: "Thorndike's principle that behaviors followed by favorable consequences become more likely, or where behaviors followed by unfavorable consequences become less likely."
    },
    {
        term: "Operant Chamber",
        definition: "Skinner box containing a bar or key that an animal can manipulate to obtain food or water reinforce; attached devices record the animal's rate of bar pressing or key pecking."
    },
    {
        term: "Shaping",
        definition: "Reinforcers guide behavior toward closer and closer approximations of the desired behavior."
    },
    {
        term: "Discriminative Stimulus",
        definition: "A stimulus that elicits a response after association with reinforcement (in contrast to related stimuli not associated with reinforcement)."
    },
    {
        term: "Reinforcer",
        definition: "Any event that strengthens the behavior it follows."
    },
    {
        term: "Positive Reinforcement",
        definition: "Increasing behaviors by presenting positive stimuli, such as food."
    },
    {
        term: "Negative Reinforcement",
        definition: "Increasing behaviors by stopping or reducing negative stimuli, such as shock."
    },
    {
        term: "Primary Reinforcer",
        definition: "An innately reinforcing stimulus, such as one that satisfies a biological need."
    },
    {
        term: "Continuous Reinforcement",
        definition: "Reinforcing the desired response every time it occurs."
    },
    {
        term: "Partial (Intermittent) Reinforcement",
        definition: "Reinforcing a response only part of the time; results in slower acquisition of a response but much greater resistance to extinction than does continuous reinforcement."
    },
    {
        term: "Fixed-Ratio Schedule",
        definition: "A reinforcement schedule that reinforces a response only after a specified number of responses."
    },
    {
        term: "Variable-Ratio Schedule",
        definition: "A reinforcement schedule that reinforces a response after an unpredictable number of responses."
    },
    {
        term: "Fixed-Interval Schedule",
        definition: "A reinforcement schedule that reinforces a response only after a specified time has elapsed."
    },
    {
        term: "Variable-Interval Schedule",
        definition: "A reinforcement schedule that reinforces a response at unpredictable time intervals."
    },
    {
        term: "Punishment",
        definition: "An event that decreases the behavior that it follows."
    },
    {
        term: "Cognitive Map",
        definition: "A mental representation of the layout of one's environment. (For example, after exploring a maze, rats act as if they have learned a cognitive map of it)."
    },
    {
        term: "Latent Learning",
        definition: "Learning that occurs but is not apparent until there is an incentive to demonstrate it later."
    },
    {
        term: "Insight",
        definition: "A sudden and often novel realization of the solution to a problem."
    },
    {
        term: "Intrinsic Motivation",
        definition: "A desire to perform a behavior effectively for its own sake; inside."
    },
    {
        term: "Extrinsic Motivation",
        definition: "A desire to perform a behavior to receive promised rewards or avoid threatened punishment, outside."
    },
    {
        term: "Modeling",
        definition: "The process of observing and imitating a specific behavior."
    },
    {
        term: "Mirror Neurons",
        definition: "Frontal lobe neurons that fire when performing certain actions or when observing another doing so. The brain's mirroring of another's actions may enable imitation and empathy."
    },
    {
        term: "Prosocial Behavior",
        definition: "Positive, constructive, helpful behavior. The opposite of antisocial behavior."
    },
    {
        term: "Little Albert",
        definition: "Subject in John Watson's experiment, proved classical conditioning principles, especially the generalization of fear."
    },
    {
        term: "Albert Bandura",
        definition: "Researcher famous for work in observational or social learning including the famous Bobo doll experiment."
    },
    {
        term: "John Garcia",
        definition: "Researched taste aversion. Showed that when rats ate a novel substance before being nauseated by a drug or radiation, they developed a conditioned taste aversion for the substance."
    },
    {
        term: "Ivan Pavlov",
        definition: "Russian physiologist who observed conditioned salivary responses in dogs (1849-1936)."
    },
    {
        term: "B.F. Skinner",
        definition: "He is famous for use of his operant conditioning aparatus which he used to study schedules of reinforcement on pidgeons and rats."
    },
    {
        term: "John Watson",
        definition: "Behaviorist; famous for Little Albert study in which a baby was taught to fear a white rat."
    },
    {
        term: "Biofeedback",
        definition: "A technique that trains people to improve their health by controlling certain bodily processes that normally happen involuntarily, such as heart rate, blood pressure, muscle tension, and skin temperature."
    },
    {
        term: "Aversion Theory",
        definition: "An aversive (causing a strong feeling of dislike or disgust) stimulus is paired with an undesirable behavior in order to reduce or eliminate that behavior."
    },
    {
        term: "Neutral Stimulus (NS)",
        definition: "Environmental factor that doesn't elicit a CR until it is repeatedly paired with the US (ex/ bell in Pavlov experiment)."
    },
    {
        term: "Token Economy",
        definition: "Object or point reward system used in jail, school, & at Chuck E Cheese."
    },
    {
        term: "Cognitive Learning",
        definition: "The acquisition of mental information, whether by observing events, by watching others, or through language."
    },
    {
        term: "Stimulus",
        definition: "A signal to which an organism responds."
    },
    {
        term: "Reinforcement",
        definition: "In operant conditioning, any event that strengthens the behavior it follows."
    },
    {
        term: "Conditioned Reinforcer",
        definition: "A stimulus that gains its reinforcing power through its association with a primary reinforcer; also known as a secondary reinforcer."
    },
    {
        term: "Reinforcement Schedule",
        definition: "The frequency and regularity with which rewards are offered; they can be based on a number of target behaviors (ratio) or on a time interval (interval); types include: fixed-ratio, variable-ratio, fixed-interval, and variable-interval."
    },
    {
        term: "Respondent Behavior",
        definition: "Behavior that occurs as an automatic response to some stimulus."
    },
    {
        term: "Coping",
        definition: "Alleviating stress using emotional, cognitive, or behavioral methods."
    },
    {
        term: "Learned Helplessness",
        definition: "The hopelessness and passive resignation an animal or human learns when unable to avoid repeated aversive events."
    },
    {
        term: "External Locus of Control",
        definition: "The perception that chance or outside forces beyond your personal control determine your fate."
    },
    {
        term: "Internal Locus of Control",
        definition: "The perception that you control your own fate."
    },
    {
        term: "Self-Control",
        definition: "The ability to control impulses and delay short-term gratification for greater long-term rewards."
    },
    {
        term: "Observational Learning",
        definition: "Learning by observing others; also called social learning."
    }
];

// Create flashcards 
 const flashcardContainer = document.querySelector('.flashcard-container');

    vocabulary.forEach(item => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');
        flashcard.innerHTML = `
            <div class="card">
                <div class="card-front">${item.term}</div>
                <div class="card-back">${item.definition}</div>
            </div>
        `;
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });
        flashcardContainer.appendChild(flashcard); 
    });
