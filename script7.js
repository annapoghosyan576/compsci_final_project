// Define vocabulary terms and their definitions

const vocabulary = [
    { term: "Memory", definition: "The persistence of learning over time through the storage and retrieval of information." },
    { term: "Encoding", definition: "The processing of information into the memory system--for example, by extracting meaning." },
    { term: "Storage", definition: "The retention of encoded information over time." },
    { term: "Retrieval", definition: "The process of getting information out of memory storage." },
    { term: "Sensory Memory", definition: "The immediate, very brief recording of sensory information in the memory system." },
    { term: "Short-Term Memory", definition: "Activated memory that holds a few items briefly, such as the seven digits of a phone number while dialing, before the information is stored or forgotten." },
    { term: "Long-Term Memory", definition: "The relatively permanent and limitless storehouse of the memory system. Includes knowledge, skills, and experiences." },
    { term: "Working Memory", definition: "A newer understanding of short-term memory that focuses on conscious, active processing of incoming auditory and visual-spatial information, and of information retrieved from long-term memory." },
    { term: "Parallel Processing", definition: "The processing of many aspects of a problem simultaneously; the brain's natural mode of information processing for many functions. Contrasts with the step-by-step (serial) processing of most computers and of conscious problem solving." },
    { term: "Automatic Processing", definition: "Unconscious encoding of incidental information, such as space, time, and frequency, and of well-learned information, such as word meanings." },
    { term: "Effortful Processing", definition: "Encoding that requires attention and conscious effort." },
    { term: "Rehearsal", definition: "The conscious repetition of information, either to maintain it in consciousness or to encode it for storage." },
    { term: "Spacing Effect", definition: "The tendency for distributed study or practice to yield better long-term retention than is achieved through massed study or practice." },
    { term: "Serial Position Effect", definition: "Our tendency to recall best the last and first items in a list." },
    { term: "Visual Encoding", definition: "The encoding of picture images." },
    { term: "Acoustic Encoding", definition: "The encoding of sound, especially the sound of words." },
    { term: "Semantic Encoding", definition: "The encoding of meaning, including the meaning of words." },
    { term: "Imagery", definition: "Mental pictures; a powerful aid to effortful processing, especially when combined with semantic encoding." },
    { term: "Mnemonics", definition: "Memory aids, especially those techniques that use vivid imagery and organizational devices." },
    { term: "Chunking", definition: "Organizing items into familiar, manageable units; often occurs automatically." },
    { term: "Iconic Memory", definition: "A momentary sensory memory of visual stimuli; a photographic or picture-image memory lasting no more than a few tenths of a second." },
    { term: "Echoic Memory", definition: "A momentary sensory memory of auditory stimuli; if attention is elsewhere, sounds and words can still be recalled within 3 or 4 seconds." },
    { term: "Long-Term Potentiation", definition: "An increase in a synapse's firing potential after brief, rapid stimulation. Believed to be a neural basis for learning and memory." },
    { term: "Flashbulb Memory", definition: "A clear memory of an emotionally significant moment or event." },
    { term: "Amnesia", definition: "The loss of memory." },
    { term: "Implicit Memory", definition: "Retention independent of conscious recollection. (Also called nondeclarative or procedural memory.)" },
    { term: "Explicit Memory", definition: "Memory of facts and experiences that one can consciously know and 'declare.' (Also called declarative memory.)" },
    { term: "Hippocampus", definition: "A neural center that is located in the limbic system; helps process explicit memories for storage." },
    { term: "Recall", definition: "A measure of memory in which the person must retrieve information learned earlier, as on a fill-in-the-blank test." },
    { term: "Recognition", definition: "A measure of memory in which the person need only identify items previously learned, as on a multiple-choice test." },
    { term: "Relearning", definition: "A measure of memory that assesses the amount of time saved when learning material for a second time." },
    { term: "Priming", definition: "The activation, often unconsciously, of particular associations in memory." },
    { term: "Deja Vu", definition: "That eerie sense that 'I've experienced this before.' Cues from the current situation may subconsciously trigger retrieval of an earlier experience." },
    { term: "Mood-Congruent Memory", definition: "The tendency to recall experiences that are consistent with one's current good or bad mood." },
    { term: "Proactive Interference", definition: "The disruptive effect of prior learning on the recall of new information." },
    { term: "Retroactive Interference", definition: "The disruptive effect of new learning on the recall of old information." },
    { term: "Repression", definition: "In psychoanalytic theory, the basic defense mechanism that banishes from consciousness anxiety-arousing thoughts, feelings, and memories." },
    { term: "Misinformation Effect", definition: "Incorporating misleading information into one's memory of an event." },
    { term: "Source Amnesia", definition: "Attributing to the wrong source an event we have experienced, heard about, read about, or imagined. (Also called source misattribution.) Source amnesia, along with the misinformation effect, is at the heart of many false memories." },
    { term: "Cognition", definition: "The mental activities associated with thinking, knowing, remembering, and communicating." },
    { term: "Concept", definition: "A mental grouping of similar objects, events, ideas, or people." },
    { term: "Prototype", definition: "A mental image or best example of a category. Matching new items to a _______ provides a quick and easy method for sorting items into categories (as when comparing feathered creatures to a prototypical bird, such as a robin)." },
    { term: "Algorithm", definition: "A methodical, logical rule or procedure that guarantees solving a particular problem. Contrasts with the usually speedier--but also more error-prone--use of heuristics." },
    { term: "Heuristic", definition: "A simple thinking strategy that often allows us to make judgments and solve problems efficiently; usually speedier but also more error-prone than algorithms." },
    { term: "Insight", definition: "A sudden and often novel realization of the solution to a problem; it contrasts with strategy-based solutions." },
    { term: "Creativity", definition: "The ability to produce novel and valuable ideas." },
    { term: "Confirmation Bias", definition: "A tendency to search for information that supports our preconceptions and to ignore or distort contradictory evidence." },
    { term: "Fixation", definition: "The inability to see a problem from a new perspective, by employing a different mental set." },
    { term: "Mental Set", definition: "A tendency to approach a problem in one particular way, often a way that has been successful in the past." },
    { term: "Functional Fixedness", definition: "The tendency to think of things only in terms of their usual functions; an impediment to problem solving." },
    { term: "Representativeness Heuristic", definition: "Judging the likelihood of things of terms of how well they seem to represent, or match, particular prototypes; may lead us to ignore other relevant information." },
    { term: "Availability Heuristic", definition: "Estimating the likelihood of events based on their availability in memory; if instances come readily to mind (perhaps because of their vividness), we presume such events are common." },
    { term: "Overconfidence", definition: "The tendency to be more confident than correct--to overestimate the accuracy of our beliefs and judgments." },
    { term: "Belief Perseverance", definition: "Clinging to one's initial conceptions after the basis on which they were formed has been discredited." },
    { term: "Intuition", definition: "An effortless, immediate, automatic feeling or thought, as contrasted with explicit, conscious reasoning." },
    { term: "Framing", definition: "The way an issue is posed; how an issue is _____ can significantly affect decisions and judgments." },
    { term: "Language", definition: "Our spoken, written, or signed words and the ways we combine them to communicate meaning." },
    { term: "Phoneme", definition: "In language, the smallest distinctive sound unit." },
    { term: "Morpheme", definition: "In a language, the smallest unit that carries meaning; may be a word or a part of a word (such as a prefix)." },
    { term: "Grammar", definition: "In a language, a system of rules that enables us to communicate with and understand others." },
    { term: "Semantics", definition: "The set of rules by which we derive meaning from morphemes, words, and sentences in a given language; also, the study of meaning." },
    { term: "Syntax", definition: "The rules for combining words into grammatically sensible sentences in a given language." },
    { term: "Babbling Stage", definition: "Beginning at about 4 months, the stage of speech development in which the infant spontaneously utters various sounds at first unrelated to the household language." },
    { term: "One-Word Stage", definition: "The stage in speech development, from about age 1 to 2, during which a child speaks mostly in single words." },
    { term: "Two-Word Stage", definition: "Beginning about age 2, the stage in speech development during which a child speaks mostly two-word statements." },
    { term: "Telegraphic Speech", definition: "Early speech stage in which a child speaks like a telegram--'go car'--using mostly nouns and verbs." },
    { term: "Linguistic Determinism", definition: "Whorf's hypothesis that language determines the way we think." }
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
