// Define vocabulary terms and their definitions

const vocabulary = [
    { term: "Empiricism", definition: "View that (a) knowledge comes from experience via the senses and (b) science flourishes through observation & experiment" },
    { term: "Experiment", definition: "A research method in which an investigator manipulates one or more factors (independent variables) to observe the effect on some behavior or mental process (the dependent variables) By random assignment of participants the experiment controls other relevant factors" },
    { term: "Functionalism", definition: "A school of psychology that focused on how mental and behavioral processes function how they enable the organism to adapt, survive, and flourish." },
    { term: "Structuralism", definition: "An early school of psychology that used introspection to explore the elemental structure of the human mind." },
    { term: "Psychology", definition: "The science and behavior and mental processes" },
    { term: "Nature-Nurture Issue", definition: "The longstanding controversy over the relative contribution that genes and experience make to the development of psychological traits & behaviors" },
    { term: "Basic Research", definition: "Pure science that aims to increase the scientific knowledge base" },
    { term: "Applied Research", definition: "Scientific study that aims to solve practical problems" },
    { term: "Clinical Psychology", definition: "A branch of psychological studies that assess and treats with psychological disorders" },
    { term: "Psychiatry", definition: "A branch of medicine dealing with psychological disorders, practiced by physicians who sometimes provide medical (e.g. drug) treatments as well as psychological therapy" },
    { term: "Hindsight Bias", definition: "The tendency to believe, after learning an outcome, that one would have foreseen it (aka. the I knew it all along phenomenon)" },
    { term: "Critical Thinking", definition: "Thinking that does not blindly accept arguments & conclusions. Rather, it examines assumptions, and discerns hidden values, evaluates evidence, & assesses conclusions" },
    { term: "Theory", definition: "An explanation using an integrated set of principles that organizes & predicts observations" },
    { term: "Hypothesis", definition: "A testable prediction often implied by a theory" },
    { term: "Operational Definition", definition: "A statement of the procedures (operations) used to define research variables." },
    { term: "Replication", definition: "A repeating the essence of a research study, usually with different participants in different situations, to see whether the basic finding generalizes to other participants & circumstances" },
    { term: "Case Study", definition: "An observation technique in which one person is studied in depth in the hope of revealing universal principles" },
    { term: "Survey", definition: "A technique for ascertaining the self-reported attitudes or behaviors of people, usually by questioning a representative, random sample of them" },
    { term: "Population", definition: "All the cases in a group, from which samples may be drawn for a study" },
    { term: "Random Sample", definition: "A sample that fairly represents a population because each member has a an equal chance of inclusion" },
    { term: "Naturalistic Observation", definition: "Observing and recording behavior in naturally occurring situations without trying to manipulate and control the situation" },
    { term: "Correlation Coefficient", definition: "A statistical measure of the extent to which 2 factors vary together and thus of how well either factor predicts the other" },
    { term: "Illusory Correlation", definition: "The perception of a relationship when none exists" },
    { term: "Placebo", definition: "Latin for 'I shall please', an inert substance or condition that may be administered instead of a presumed active agent, such as a drug, to see if it triggers the effects believed to characterize the active agent" },
    { term: "Double Blind Procedure", definition: "An experimental procedure in which both the research participants and the research staff are ignorant(blind) about whether the research participants have received the treatment or a placebo. Commonly used in drug-evaluation studies." },
    { term: "Placebo Effect", definition: "Any effect on behavior caused by a placebo" },
    { term: "Experimental Condition", definition: "The condition of an experiment that exposes participants to the treatment that is to one version of the independent variable" },
    { term: "Control Condition", definition: "The condition of an experiment that contrasts with the experimental condition and serves as a comparison for evaluating the effect of the treatment" },
    { term: "Random Assignment", definition: "Assigning participants to experimental and control conditions by chance, thus minimizing preexisting differences between those assigned to the different groups" },
    { term: "Independent Variable", definition: "The experimental factor that is manipulated the variable whose effect is being studied" },
    { term: "Dependent Variable", definition: "The experimental factor in psychology, the behavior or mental process-- that is being measure the variable that may change in response to manipulations of the independent variable" },
    { term: "Culture", definition: "The enduring behaviors, ideas, attitudes, and traditions shared by a large group of people and transmitted from one generation to the next" },
    { term: "SQ3R", definition: "A study method incorporating 5 steps: Survey, Question, Read, Rehearse, Review" },
    { term: "Statistical Significance", definition: "A statistical statement of how likely it is that an obtained result occurred by chance" },
    { term: "Regression Toward the Mean", definition: "The tendency for extreme of unusual scores to fall back (regress) toward the average" },
    { term: "Normal Curve", definition: "The symmetrical bell-shaped curve that describes the distribution of many physical and psychological attributes. Most scores fall near the average, and fewer and fewer scores lie near the extremes." },
    { term: "Standard Deviation", definition: "A measure of variability that describes an average distance of every score from the mean" },
    { term: "Range", definition: "The difference between the highest and lowest scores in a distribution" },
    { term: "Median", definition: "The middle score in a distribution; half the scores are above it and half are below it" },
    { term: "Mean", definition: "The arithmetic average of a distribution, obtained by adding the scores and then dividing by the number of scores." },
    { term: "Mode", definition: "The most frequently occurring score in a distribution" }
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
