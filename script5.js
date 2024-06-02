// Define vocabulary terms and their definitions

const vocabulary = [
    {
        term: "Acoustic Encoding",
        definition: "The encoding of sound, especially the sound of words."
    },
    {
        term: "Visual Encoding",
        definition: "The encoding of picture images."
    },
    {
        term: "Semantic Encoding",
        definition: "The encoding of meaning, including the meaning of words."
    },
    {
        term: "Acronym",
        definition: "A word formed from the initial letters of a multi-word name."
    },
    {
        term: "Acrostic",
        definition: "An arrangement of words in which the first letters in each line spell out a word."
    },
    {
        term: "Amnesia",
        definition: "Partial or total loss of memory."
    },
    {
        term: "Infantile Amnesia",
        definition: "The inability to remember events that occurred during one's early years (before age three)."
    },
    {
        term: "Anterograde Amnesia",
        definition: "Loss of memory for events immediately following a trauma."
    },
    {
        term: "Retrograde Amnesia",
        definition: "Loss of memory for events immediately preceding a trauma."
    },
    {
        term: "Central Executive",
        definition: "The part of working memory that is responsible for monitoring and directing attention and other mental resources."
    },
    {
        term: "Phonological Loop",
        definition: "Speech-based part of working memory that allows for the verbal rehearsal of sounds or words."
    },
    {
        term: "Visual-Spatial Sketchpad",
        definition: "Aspect of working memory. Visual representation of item to be remembered, for example, a picture text page where exam answers appear."
    },
    {
        term: "Chunking",
        definition: "Organizing items into familiar, manageable units; often occurs automatically."
    },
    {
        term: "Context-Dependent Memory",
        definition: "Theory that information learned in a particular situation or place is better remembered when in that same situation or place."
    },
    {
        term: "Mood-Dependent Memory",
        definition: "Tendency to recall experiences that are consistent with one's current good or bad mood."
    },
    {
        term: "State-Dependent Memory",
        definition: "Theory that information learned in a particular state of mind (e.g., depressed, happy, somber) is more easily recalled when in that same state of mind."
    },
    {
        term: "Decay",
        definition: "Loss of memory due to the passage of time, during which the memory trace is not used."
    },
    {
        term: "Encoding Failure",
        definition: "The inability to recall specific information because of insufficient encoding of the information for storage in long-term memory."
    },
    {
        term: "Repression",
        definition: "In psychoanalytic theory, the basic defense mechanism that banishes from consciousness anxiety-arousing thoughts, feelings, and memories."
    },
    {
        term: "Suppression",
        definition: "In psychology, the conscious exclusion of unacceptable thoughts or desires."
    },
    {
        term: "Interference",
        definition: "The suppression of one bit of information by another."
    },
    {
        term: "Proactive Interference",
        definition: "The disruptive effect of prior learning on the recall of new information."
    },
    {
        term: "Retroactive Interference",
        definition: "The disruptive effect of new learning on the recall of old information."
    },
    {
        term: "Declarative Memory",
        definition: "Memory of knowledge that can be called forth consciously as needed."
    },
    {
        term: "Non-Declarative Memory",
        definition: "Implicit Memory."
    },
    {
        term: "Déjà Vu",
        definition: "The experience of thinking that a new situation had occurred before."
    },
    {
        term: "Distributed Practice",
        definition: "Spacing the study of material to be remembered by including breaks between study periods."
    },
    {
        term: "Mass Practice",
        definition: "A practice schedule in which studying continues for long periods without interruption."
    },
    {
        term: "Echoic Memory",
        definition: "A momentary sensory memory of auditory stimuli; if attention is elsewhere, sounds and words can still be recalled within 3 or 4 seconds."
    },
    {
        term: "Iconic Memory",
        definition: "A momentary sensory memory of visual stimuli; a photographic or picture-image memory lasting no more than a few tenths of a second."
    },
    {
        term: "Effortful Processing",
        definition: "Encoding that requires attention and conscious effort."
    },
    {
        term: "Automatic Processing",
        definition: "Unconscious encoding of incidental information, such as space, time, and frequency, and of well-learned information, such as word meanings."
    },
    {
        term: "Eidetic Imagery",
        definition: "A form of memory, often called photographic memory, which consists of especially vivid visual recollections of material."
    },
    {
        term: "Elaborative Rehearsal",
        definition: "A memorization method that involves thinking about how new information relates to information already stored in long-term memory."
    },
    {
        term: "Maintenance Rehearsal",
        definition: "A system for remembering involving repeating information to oneself without attempting to find meaning in it."
    },
    {
        term: "Episodic Memory",
        definition: "The collection of past personal experiences that occurred at a particular time and place."
    },
    {
        term: "Semantic Memory",
        definition: "Your memory for meanings and general (impersonal) facts."
    },
    {
        term: "Procedural Memory",
        definition: "Memory of learned skills that does not require conscious recollection."
    },
    {
        term: "Explicit Memory",
        definition: "Memory of facts and experiences that one can consciously know and 'declare'."
    },
    {
        term: "Implicit Memory",
        definition: "Memories we don't deliberately remember or reflect on consciously."
    },
    {
        term: "Eyewitness Testimony",
        definition: "Persuasive but flawed memory recall subjected to interpretation by the person reporting it."
    },
    {
        term: "Flashbulb Memory",
        definition: "A clear memory of an emotionally significant moment or event."
    },
    {
        term: "Forgetting Curve",
        definition: "Founded by Hermann Ebbinghaus, it displays retention of information and forgetting over time. Conclusions from this were that most forgetting happens right after learning something. This was modified to show that forgetting doesn't occur that quickly if the subject is memorizing more meaningful material."
    },
    {
        term: "Hippocampus",
        definition: "A neural center located in the limbic system that helps process explicit memories for storage."
    },
    {
        term: "Information-Processing Model",
        definition: "A model of memory in which information must pass through discrete stages via the processes of attention, encoding, storage, and retrieval."
    },
    {
        term: "Long-Term Memory",
        definition: "The relatively permanent and limitless storehouse of the memory system. Includes knowledge, skills, and experiences."
    },
    {
        term: "Long-Term Potentiation",
        definition: "An increase in a synapse's firing potential after brief, rapid stimulation. Believed to be a neural basis for learning and memory."
    },
    {
        term: "Method of Loci",
        definition: "Use of familiar locations as cues to recall items that have been associated with them."
    },
    {
        term: "Peg Word Method",
        definition: "A mnemonic system in which items to be remembered are associated with a set of mental pegs that one already has in memory, such as key words of a rhyme."
    },
    {
        term: "Mnemonic Devices",
        definition: "Techniques for using associations to memorize and retrieve information."
    },
    {
        term: "Overlearning",
        definition: "Continued rehearsal of material after one first appears to have mastered it."
    },
    {
        term: "Primacy Effect",
        definition: "The tendency to show greater memory for information that comes first in a sequence."
    },
    {
        term: "Recency Effect",
        definition: "The tendency to show greater memory for information that comes last in a sequence."
    },
    {
        term: "Recall",
        definition: "The process of remembering (especially the process of recovering information by mental effort)."
    },
    {
        term: "Recognition",
        definition: "A measure of memory in which the person need only identify items previously learned, as on a multiple-choice test."
    },
    {
        term: "Repression",
        definition: "(Psychiatry) The classical defense mechanism that protects you from impulses or ideas that would cause anxiety by preventing them from becoming conscious."
    },
    {
        term: "Retrieval",
        definition: "The process of obtaining information that has been stored in memory."
    },
    {
        term: "Retrieval Cues",
        definition: "Stimuli that aid the recall or recognition of information stored in memory."
    },
    {
        term: "Schema",
        definition: "A concept or framework that organizes and interprets information."
    },
    {
        term: "Self Reference Effect",
        definition: "The tendency to process efficiently and remember well information related to oneself."
    },
    {
        term: "Semantic Memory",
        definition: "Knowledge of language, including its rules, words, and meanings."
    },
    {
        term: "Short-Term Memory",
        definition: "Activated memory that holds a few items briefly, such as the seven digits of a phone number while dialing, before the information is stored or forgotten."
    },
    {
        term: "Source Amnesia",
        definition: "Attributing to the wrong source an event we have experienced, heard about, read about, or imagined."
    },
    {
        term: "Source Misattributions",
        definition: "Occur when individuals misremember the time, place, person, or circumstances involved with a memory."
    },
    {
        term: "Spacing Effect",
        definition: "The tendency for distributed study or practice to yield better long-term retention than is achieved through massed study or practice."
    },
    {
        term: "Distributed Study",
        definition: "Spacing out your study sessions over several days gives you a better long-term recall of information."
    },
    {
        term: "Tip of the Tongue Phenomenon",
        definition: "Condition of being almost, but not quite, able to remember something; used to investigate the nature of semantic memory."
    },
    {
        term: "Algorithms",
        definition: "Problem-solving procedures or formulas that guarantee a correct outcome, if correctly applied."
    },
    {
        term: "Analogical Reasoning",
        definition: "Reasoning in which a speaker compares two similar cases and infers that what is true for the first case is also true for the second."
    },
    {
        term: "Availability Heuristic",
        definition: "Estimating the likelihood of events based on their availability in memory; if instances come readily to mind, we presume such events are common."
    },
    {
        term: "Representativeness Heuristic",
        definition: "Judging the likelihood of things in terms of how well they seem to represent, or match, particular prototypes; may lead one to ignore other relevant information."
    },
    {
        term: "Belief Bias",
        definition: "The tendency for one's preexisting beliefs to distort logical reasoning, sometimes by making invalid conclusions seem valid, or valid conclusions seem invalid."
    },
    {
        term: "Belief Perseverance",
        definition: "Clinging to one's initial conceptions after the basis on which they were formed has been discredited."
    },
    {
        term: "Cognitive Psychology",
        definition: "The scientific study of all the mental activities associated with thinking, knowing, remembering, and communicating."
    },
    {
        term: "Concept",
        definition: "A mental grouping of similar objects, events, ideas, or people."
    },
    {
        term: "Confirmation Bias",
        definition: "A tendency to search for information that supports our preconceptions and to ignore or distort contradictory evidence."
    },
    {
        term: "Convergent Thinking",
        definition: "Thinking that brings together information focused on solving a problem (especially solving problems that have a single correct solution)."
    },
    {
        term: "Divergent Thinking",
        definition: "Thinking that moves away in diverging directions so as to involve a variety of aspects and which sometimes leads to novel ideas and solutions."
    },
    {
        term: "Deductive Reasoning",
        definition: "Reasoning from the general to the particular (or from cause to effect)."
    },
    {
        term: "Inductive Reasoning",
        definition: "Reasoning from detailed facts to general principles."
    },
    {
        term: "Exemplar",
        definition: "A model or original; an example."
    },
    {
        term: "Prototype",
        definition: "A mental image or best example of a category (as when comparing feathered creatures to a bird, such as a robin)."
    },
    {
        term: "Framing",
        definition: "The way an issue is posed; how an issue is framed can significantly affect decisions and judgments."
    },
    {
        term: "Functional Fixedness",
        definition: "The tendency to think of things only in terms of their usual functions; an impediment to problem solving."
    },
    {
        term: "Mental Set",
        definition: "A tendency to approach a problem in a particular way, especially a way that has been successful in the past but may or may not be helpful in solving a new problem."
    },
    {
        term: "Hindsight Bias",
        definition: "The tendency to believe, after learning an outcome, that one would have foreseen it."
    },
    {
        term: "Incubation Period",
        definition: "A period of unconscious processing that leads to a solution to a problem."
    },
    {
        term: "Insight",
        definition: "A sudden and often novel realization of the solution to a problem."
    },
    {
        term: "Natural Concept",
        definition: "A mental category that is formed as a result of everyday experience."
    },
    {
        term: "Formal Concept",
        definition: "A mental category that is formed by learning the rules or features that define it."
    },
    {
        term: "Overconfidence Bias",
        definition: "The tendency to overestimate the accuracy of our beliefs and judgments."
    },
    {
        term: "Syllogism",
        definition: "Deductive reasoning in which a conclusion is derived from two premises."
    },
    {
        term: "Trial and Error Learning",
        definition: "Learning that takes place when a child tries several solutions before finding one that works."
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
