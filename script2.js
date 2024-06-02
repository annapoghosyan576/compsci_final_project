// Define vocabulary terms and their definitions

const vocabulary = [
    { term: "Absolute Refractory Period", definition: "The minimum length of time after an action potential during which another action potential cannot begin." },
    { term: "Acetylcholine (Ach)", definition: "A neurotransmitter involved in learning, memory, and muscle movement." },
    { term: "Action Potential", definition: "A neural impulse; a brief electrical charge that travels down an axon." },
    { term: "Adrenal Glands", definition: "A pair of endocrine glands just above the kidneys. The adrenals secrete the hormones epinephrine (adrenaline) and norepinephrine (noradrenaline), which help to arouse the body in times of stress." },
    { term: "Afferent Nerve Fibers", definition: "Axons that carry information inward to the central nervous system from the periphery of the body." },
    { term: "Agonist", definition: "Substances that excite neurons by mimicking natural neurotransmitters or blocking their reuptake to keep more in your system." },
    { term: "Alzheimer's Disease", definition: "An irreversible, progressive brain disorder characterized by the deterioration of memory, language, and eventually physical functioning." },
    { term: "Amygdala", definition: "Two almond-shaped neural clusters that are components of the limbic system and are linked to emotion." },
    { term: "Antagonist", definition: "Substances that block neural impulses by blocking receptor sites or diminishing their release." },
    { term: "Aphasia", definition: "Inability to use or understand language (spoken or written) because of a brain lesion." },
    { term: "Association Areas", definition: "Areas of the cerebral cortex that are not involved in primary motor or sensory functions; rather, they are involved in higher mental functions such as learning, remembering, thinking, and speaking." },
    { term: "Autonomic Nervous System", definition: "The part of the nervous system of vertebrates that controls involuntary actions of the smooth muscles, heart, and glands." },
    { term: "Axon", definition: "A long nerve fiber that conducts away from the cell body of the neuron." },
    { term: "Biopsychology (Biological Psychology)", definition: "A specialty in psychology that studies the interaction of biology, behavior, and mental processes." },
    { term: "Behavioral Genetics", definition: "The study of hereditary influences and how they influence behavior and thinking." },
    { term: "Brainstem", definition: "The part of the brain continuous with the spinal cord and comprising the medulla oblongata, pons, and midbrain, and parts of the hypothalamus." },
    { term: "Central Nervous System", definition: "The portion of the vertebrate nervous system consisting of the brain and spinal cord." },
    { term: "Cerebellum", definition: "The 'little brain' attached to the rear of the brainstem; it helps coordinate voluntary movement and balance." },
    { term: "Cerebral Cortex", definition: "The layer of unmyelinated neurons (the gray matter) forming the cortex of the cerebrum." },
    { term: "Cerebral Hemispheres", definition: "The right and left halves of the cerebrum." },
    { term: "Cerebrospinal Fluid", definition: "Clear liquid produced in the ventricles of the brain." },
    { term: "Computerized Tomography", definition: "A method of examining body organs by scanning them with X-rays and using a computer to construct a series of cross-sectional scans along a single axis." },
    { term: "Corpus Callosum", definition: "A broad transverse nerve tract connecting the two cerebral hemispheres." },
    { term: "Dendrites", definition: "Branching extensions of a neuron that receive messages from neighboring neurons." },
    { term: "Efferent Nerve Fibers", definition: "Axons that carry information outward from the central nervous system to the periphery of the body." },
    { term: "Electroencephalogram", definition: "A graphical record of electrical activity of the brain." },
    { term: "Endocrine System", definition: "The system of glands that produce endocrine secretions that help to control bodily metabolic activity." },
    { term: "Endorphins", definition: "Natural, opiate-like neurotransmitters linked to pain control and to pleasure." },
    { term: "Exitatory PSP", definition: "An electric potential that increases the likelihood that a postsynaptic neuron will fire action potentials." },
    { term: "Forebrain", definition: "The top of the brain which includes the thalamus, hypothalamus, and cerebral cortex; responsible for emotional regulation, complex thought, memory aspect of personality." },
    { term: "Glial Cell", definition: "A type of cell that surrounds neurons, influences the communication among neurons, and generally helps in the 'care and feeding' of neurons." },
    { term: "Hindbrain", definition: "Division which includes the cerebellum, pons, and medulla; responsible for involuntary processes; blood pressure, body temperature, heart rate, breathing, sleep cycles." },
    { term: "Hormones", definition: "Chemical messengers, mostly those manufactured by the endocrine glands, that are produced in one tissue and affect another." },
    { term: "Hypothalamus", definition: "A neural structure lying below the thalamus; directs eating, drinking, body temperature; helps govern the endocrine system via the pituitary gland, and is linked to emotion." },
    { term: "Interneuron", definition: "A nerve cell located entirely in the central nervous system that integrates sensory information and sends motor commands." },
    { term: "Inhibitory PSP", definition: "An electric potential that decreases the likelihood that a postsynaptic neuron will fire action potentials." },
    { term: "Lesioning", definition: "Destroying a piece of the brain." },
    { term: "Limbic System", definition: "A system of functionally related neural structures in the brain that are involved in emotional behavior." },
    { term: "Magnetic Resonance Imaging", definition: "The use of nuclear magnetic resonance of protons to produce proton density images." },
    { term: "Medulla", definition: "The base of the brainstem; controls heartbeat and breathing." },
    { term: "Functional MRI", definition: "Allows researchers to scan areas of the brain while a participant performs a physical or cognitive task." },
    { term: "Midbrain", definition: "The middle division of the brain responsible for hearing and sight; location where pain is registered; includes temporal lobe, occipital lobe, and most of the parietal lobe." },
    { term: "Myelin Sheath", definition: "A layer of myelin encasing (and insulating) the axons of medullated nerve fibers." },
    { term: "Nerves", definition: "Neural 'cables' containing many axons. These bundled axons, which are part of the peripheral nervous system, connect the central nervous system with muscles, glands, and sense organs." },
    { term: "Neural Networks", definition: "Interconnected neural cells. With experience, networks can learn, as feedback strengthens or inhibits connections that produce certain results. Computer simulations of neural networks show analogous learning." },
    { term: "Neuron", definition: "A cell that is specialized to conduct nerve impulses." },
    { term: "Neuroscience", definition: "The scientific study of the nervous system." },
    { term: "Neurotransmitters", definition: "Chemical messengers that traverse the synaptic gaps between neurons." },
    { term: "Parasympathetic Nervous System", definition: "The division of the autonomic nervous system that calms the body, conserving its energy." },
    { term: "Peripheral Nervous System", definition: "The section of the nervous system lying outside the brain and spinal cord." },
    { term: "Pituitary Gland", definition: "The master gland of the endocrine system." },
    { term: "Plasticity", definition: "The brain's capacity for modification, as evident in brain reorganization following damage (especially in children) and in experiments on the effects of experience on brain development." },
    { term: "Positron Emission Tomography", definition: "Using a computerized radiographic technique to examine the metabolic activity in various tissues (especially in the brain)." },
    { term: "Postsynaptic Potential", definition: "The change in the membrane potential of a neuron that has received stimulation from another neuron." },
    { term: "Reflex", definition: "An automatic instinctive unlearned reaction to a stimulus." },
    { term: "Resting Potential", definition: "The potential difference between the two sides of the membrane of a nerve cell when the cell is not conducting an impulse." },
    { term: "Reticular Formation", definition: "A nerve network in the brainstem that plays an important role in controlling arousal." },
    { term: "Reuptake", definition: "A neurotransmitter's reabsorption by the sending neuron." },
    { term: "Soma", definition: "Cell body of a neuron." },
    { term: "Somatic Nervous System", definition: "The division of the peripheral nervous system that controls the body's skeletal muscles." },
    { term: "Sympathetic Nervous System", definition: "The division of the autonomic nervous system that arouses the body, mobilizing its energy in stressful situations." },
    { term: "Synapse", definition: "The junction between two neurons (axon-to-dendrite)." },
    { term: "Synaptic Cleft", definition: "The tiny gap between the terminal of one neuron and the dendrites of another neuron (almost never touch); location of the transfer of an impulse from one neuron to the next." },
    { term: "Synaptic Vesicle", definition: "A spherical sac containing neurotransmitters." },
    { term: "Terminal Buttons", definition: "Small knobs at the end of axons that secrete chemicals called neurotransmitters." },
    { term: "Thalamus", definition: "The brain's sensory switchboard, located on top of the brainstem; it directs messages to the sensory receiving areas in the cortex and transmits replies to the cerebellum and medulla." },
    { term: "Threshold", definition: "The level of stimulation required to trigger a neural impulse." },
    { term: "Pons", definition: "Just above the medulla; relays signals to the cerebellum that deal with sleep, respiration, swallowing, bladder control, hearing, equilibrium, taste, eye movement, facial expressions, facial sensations, and posture." },
    { term: "Hippocampus", definition: "Connect present with past to remember locations of things in space; if damaged may lose ability to make new memories." },
    { term: "Frontal Lobe", definition: "Involved in speaking and muscle movement, plans, and judgment. Also contains the primary motor cortex." },
    { term: "Parietal Lobe", definition: "Top rear of brain, behind frontal lobe. Integrates visual input and monitors body position in space." },
    { term: "Somasensory Cortex", definition: "Primary processor for sensations of touch, temperature, pain, and pressure. Helps locate sensation on the body." },
    { term: "Occipital Lobe", definition: "Back of the head; primary visual cortex, shows what we see. Includes visual areas, which receive info from the opposite visual field." },
    { term: "Temporal Lobe", definition: "Primary auditory info; receives auditory information from the opposite ear. Damage can impair comprehension of speech and language. The left side is dedicated to speech sounds." }
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
