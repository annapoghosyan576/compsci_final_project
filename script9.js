// Define vocabulary terms and their definitions

const vocabulary = [
    { 
        term: "Attribution Theory",
        definition: "The theory that we explain someone's behavior by crediting either the situation or the person's disposition."
    },
    { 
        term: "Fundamental Attribution Error",
        definition: "The tendency for observers, when analyzing another's behavior, to underestimate the impact of the situation and to overestimate the impact of personal disposition."
    },
    { 
        term: "Self-Serving Bias",
        definition: "A readiness to perceive oneself favorably."
    },
    { 
        term: "Attitudes",
        definition: "Feelings that lead us to respond in a particular way to objects, people, and events."
    },
    { 
        term: "Central Route Persuasion",
        definition: "Attitude change that occurs when people focus on the content of the arguments and respond with favorable thoughts."
    },
    { 
        term: "Peripheral Route Persuasion",
        definition: "Attitude change that occurs when people are influenced by incidental cues, such as a speaker's attractiveness."
    },
    { 
        term: "Foot-in-the-Door Phenomenon",
        definition: "The tendency for people who have first agreed to a small request to comply later with a larger request."
    },
    { 
        term: "Door-in-the-Face Phenomenon",
        definition: "The tendency for people who have first disagreed to a large request to comply later with a smaller, more reasonable request."
    },
    { 
        term: "Role",
        definition: "A set of expectations about a social position, defining how those in the position ought to behave."
    },
    { 
        term: "Stanford Prison Experiment",
        definition: "Philip Zimbardo's study that demonstrated the powerful impact of roles, perceived power, and toxic situations on attitudes and behaviors."
    },
    { 
        term: "Philip Zimbardo",
        definition: "Social psychologist who conducted the famous Stanford Prison Experiment."
    },
    { 
        term: "Cognitive Dissonance Theory",
        definition: "The theory that we act to reduce the discomfort we feel when two of our thoughts are inconsistent."
    },
    { 
        term: "Norms",
        definition: "Understood rules for accepted and expected behavior."
    },
    { 
        term: "Conformity",
        definition: "Adjusting our behavior or thinking to coincide with a group standard."
    },
    { 
        term: "Solomon Asch",
        definition: "Social psychologist who conducted studies on conformity in which participants' estimates of line lengths were influenced by the presence of others giving incorrect answers."
    },
    { 
        term: "Normative Social Influence",
        definition: "Conformity or influence resulting from a person's desire to gain approval or avoid disapproval."
    },
    { 
        term: "Informational Social Influence",
        definition: "Conformity or influence resulting from one's willingness to accept others' opinions about reality."
    },
    { 
        term: "Obedience",
        definition: "Compliance that occurs when people follow direct commands, usually from someone in a position of authority."
    },
    { 
        term: "Stanley Milgram",
        definition: "Social psychologist who conducted studies on obedience in which participants were told by an authority figure to electrically shock another individual."
    },
    { 
        term: "Social Facilitation",
        definition: "Improved performance on simple or well-learned tasks in the presence of others."
    },
    { 
        term: "Social Loafing",
        definition: "The tendency for people in a group to exert less effort when pooling their efforts toward attaining a common goal than when individually accountable."
    },
    { 
        term: "Deindividuation",
        definition: "The loss of self-awareness and self-restraint occurring in group situations that foster arousal and anonymity."
    },
    { 
        term: "Group Polarization",
        definition: "The enhancement of a group's prevailing opinions or feelings through discussion within the group."
    },
    { 
        term: "Groupthink",
        definition: "The mode of thinking that occurs when the desire for harmony in a decision-making group overrides realistic thinking in individuals."
    },
    { 
        term: "Culture",
        definition: "The enduring behaviors, ideas, attitudes, values, and traditions shared by a group of people and transmitted from one generation to the next."
    },
    { 
        term: "Prejudice",
        definition: "An unjustifiable attitude toward a group of people and its members."
    },
    { 
        term: "Stereotype",
        definition: "A generalized belief about a group of people."
    },
    { 
        term: "Discrimination",
        definition: "Unjustifiable negative behavior toward a group and its members."
    },
    { 
        term: "Ingroup Bias",
        definition: "The tendency to favor our own group."
    },
    { 
        term: "Scapegoat Theory",
        definition: "The theory that prejudice offers an outlet for anger by providing someone to blame."
    },
    { 
        term: "Just-World Phenomenon",
        definition: "The tendency for people to believe the world is just and that people therefore get what they deserve and deserve what they get."
    },
    { 
        term: "Contact Hypothesis",
        definition: "The idea that stereotypes and prejudice toward a group will diminish as contact with the group increases."
    },
    { 
        term: "Aggression",
        definition: "Any physical or verbal behavior intended to harm someone physically or emotionally."
    },
    { 
        term: "Frustration-Aggression Principle",
        definition: "The principle that frustration (the blocking of an attempt to achieve some goal) creates anger, which can generate aggression."
    },
    { 
        term: "Mere Exposure Effect",
        definition: "The phenomenon that repeated exposure to new, unfamiliar stimuli increases liking of them."
    },
    { 
        term: "Passionate Love",
        definition: "An aroused state of intense positive absorption in another, usually present at the beginning of a romantic relationship."
    },
    { 
        term: "Companionate Love",
        definition: "The deep affectionate attachment we feel for those with whom our lives are intertwined."
    },
    { 
        term: "Equity",
        definition: "A condition in which people receive from a relationship in proportion to what they give to it."
    },
    { 
        term: "Self-Disclosure",
        definition: "The act of revealing intimate aspects of ourselves to others."
    },
    { 
        term: "Altruism",
        definition: "Unselfish regard for the welfare of others."
    },
    { 
        term: "Bystander Effect",
        definition: "The tendency for any given person to be less likely to give aid to someone in need of help if other people are present."
    },
    { 
        term: "Social Exchange Theory",
        definition: "The theory that our social behavior is an exchange process, the aim of which is to maximize benefits and minimize costs."
    },
    { 
        term: "Reciprocity Norm",
        definition: "An expectation that people will help, not hurt, those who have helped them."
    },
    { 
        term: "Social-Responsibility Norm",
        definition: "An expectation that people will help those needing their help."
    },
    { 
        term: "Conflict",
        definition: "A perceived incompatibility of actions, goals, or ideas."
    },
    { 
        term: "Social Trap",
        definition: "A situation in which conflicting parties, by each pursuing their self-interest, rather than the good of the group, become caught in mutually destructive behavior."
    },
    { 
        term: "Mirror-Image Perceptions",
        definition: "Mutual views often held by conflicting people, as when each side sees itself as ethical and peaceful and views the other side as evil and aggressive."
    },
    { 
        term: "Self-Fulfilling Prophecy",
        definition: "A belief that leads to its own fulfillment."
    },
    { 
        term: "Superordinate Goals",
        definition: "Shared goals that override differences among people and require their cooperation."
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
