// Define vocabulary terms and their definitions

const vocabulary = [
    { term: "Learning", definition: "A relatively permanent change in an organism's behavior due to experience." },
    { term: "Habituation", definition: "An organism's decreasing response to a stimulus with repeated exposure to it." },
    { term: "Associative Learning", definition: "Learning that certain events occur together. The events may be two stimuli (as in classical conditioning) or a response and its consequences (as in operant conditioning)." },
    { term: "Classical Conditioning", definition: "A type of learning in which one learns to link two or more stimuli and anticipate events." },
    { term: "Behaviorism", definition: "The view that psychology (1) should be an objective science that (2) studies behavior without reference to mental processes. Most research psychologists today agree with (1) but not with (2)." },
    { term: "Unconditioned Response (UR)", definition: "In classical conditioning, the unlearned, naturally occurring response to the unconditioned stimulus (US), such as salivation when food is in the mouth." },
    { term: "Unconditioned Stimulus (US)", definition: "In classical conditioning, a stimulus that unconditionally—naturally and automatically—triggers a response." },
    { term: "Conditioned Response (CR)", definition: "In classical conditioning, the learned response to a previously neutral (but now conditioned) stimulus (CS)." },
    { term: "Conditioned Stimulus (CS)", definition: "In classical conditioning, an originally irrelevant stimulus that, after association with an unconditioned stimulus (US), comes to trigger a conditioned response." },
    { term: "Acquisition", definition: "In classical conditioning, the initial stage, when one links a neutral stimulus and an unconditioned stimulus so that the neutral stimulus begins triggering the conditioned response. In operant conditioning, the strengthening of a reinforced response." },
    { term: "Higher-Order Conditioning", definition: "A procedure in which the conditioned stimulus in one conditioning experience is paired with a new neutral stimulus, creating a second (often weaker) conditioned stimulus. For example, an animal that has learned that a tone predicts food might then learn that a light predicts the tone and begin responding to the light alone. (Also called second-order conditioning.)" },
    { term: "Extinction", definition: "The diminishing of a conditioned response; occurs in classical conditioning when an unconditioned stimulus (US) does not follow a conditioned stimulus (CS); occurs in operant conditioning when a response is no longer reinforced." },
    { term: "Spontaneous Recovery", definition: "The reappearance, after a pause, of an extinguished conditioned response." },
    { term: "Generalization", definition: "The tendency, once a response has been conditioned, for stimuli similar to the conditioned stimulus to elicit similar responses." },
    { term: "Discrimination", definition: "In classical conditioning, the learned ability to distinguish between a conditioned stimulus and stimuli that do not signal an unconditioned stimulus." },
    { term: "Learned Helplessness", definition: "The hopelessness and passive resignation an animal or human learns when unable to avoid repeated aversive events." },
    { term: "Respondent Behavior", definition: "Behavior that occurs as an automatic response to some stimulus." },
    { term: "Operant Conditioning", definition: "A type of learning in which behavior is strengthened if followed by a reinforcer or diminished if followed by a punisher." },
    { term: "Operant Behavior", definition: "Behavior that operates on the environment, producing consequences." },
    { term: "Law of Effect", definition: "Thorndike's principle that behaviors followed by favorable consequences become more likely, and that behaviors followed by unfavorable consequences become less likely." },
    { term: "Operant Chamber", definition: "In operant conditioning research, a chamber (also known as a Skinner box) containing a bar or key that an animal can manipulate to obtain a food or water reinforcer; attached devices record the animal's rate of bar pressing or key pecking." },
    { term: "Shaping", definition: "An operant conditioning procedure in which reinforcers guide behavior toward closer and closer approximations of the desired behavior." },
    { term: "Discriminative Stimulus", definition: "In operant conditioning, a stimulus that elicits a response after association with reinforcement (in contrast to related stimuli not associated with reinforcement)." },
    { term: "Reinforcer", definition: "In operant conditioning, any event that strengthens the behavior it follows." },
    { term: "Positive Reinforcement", definition: "Increasing behaviors by presenting positive stimuli, such as food. A positive reinforcer is any stimulus that, when presented after a response, strengthens the response." },
    { term: "Negative Reinforcement", definition: "Increasing behaviors by stopping or reducing negative stimuli, such as shock. A negative reinforcer is any stimulus that, when removed after a response, strengthens the response. (Note: Negative reinforcement is not punishment.)" },
    { term: "Primary Reinforcer", definition: "An innately reinforcing stimulus, such as one that satisfies a biological need." },
    { term: "Conditioned Reinforcer", definition: "A stimulus that gains its reinforcing power through its association with a primary reinforcer; also known as secondary reinforcer." },
    { term: "Continuous Reinforcement", definition: "Reinforcing the desired response every time it occurs." },
    { term: "Partial (Intermittent) Reinforcement", definition: "Reinforcing a response only part of the time; results in slower acquisition of a response but much greater resistance to extinction than does continuous reinforcement." },
    { term: "Fixed-Ratio Schedule", definition: "In operant conditioning, a reinforcement schedule that reinforces a response only after a specified number of responses." },
    { term: "Variable-Ratio Schedule", definition: "In operant conditioning, a reinforcement schedule that reinforces a response after an unpredictable number of responses." },
    { term: "Fixed-Interval Schedule", definition: "In operant conditioning, a reinforcement schedule that reinforces a response only after a specified time has elapsed." },
    { term: "Variable-Interval Schedule", definition: "In operant conditioning, a reinforcement schedule that reinforces a response at unpredictable time intervals." },
    { term: "Punishment", definition: "An event that decreases the behavior that it follows." },
    { term: "Cognitive Map", definition: "A mental representation of the layout of one's environment. For example, after exploring a maze, rats act as if they have learned a cognitive map of it." },
    { term: "Latent Learning", definition: "Learning that occurs but is not apparent until there is an incentive to demonstrate it." },
    { term: "Insight", definition: "A sudden and often novel realization of the solution to a problem." },
    { term: "Intrinsic Motivation", definition: "A desire to perform a behavior for its own sake." },
    { term: "Extrinsic Motivation", definition: "A desire to perform a behavior due to promised rewards or threats of punishment." },
    { term: "Biofeedback", definition: "A system for electronically recording, amplifying, and feeding back information regarding a subtle physiological state, such as blood pressure or muscle tension." },
    { term: "Observational Learning", definition: "Learning by observing others, also called social learning." },
    { term: "Modeling", definition: "The process of observing and imitating a specific behavior." },
    { term: "Mirror Neurons", definition: "Frontal lobe neurons that fire when performing certain actions or when observing another doing so. The brain's mirroring of another's action may enable imitation, language learning, and empathy." },
    { term: "Prosocial Behavior", definition: "Positive, constructive, helpful behavior. The opposite of antisocial behavior." }
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
        flashcardContainer.appendChild(flashcard); // Ensure this line is correctly adding the flashcard
    });
