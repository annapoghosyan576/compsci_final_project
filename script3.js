// Define vocabulary terms and their definitions

const vocabulary = [
    {
        term: "Sensation",
        definition: "The process by which our sensory receptors and nervous system receive and represent stimulus energies from our environment."
    },
    {
        term: "Perception",
        definition: "The process of organizing and interpreting sensory information, enabling us to recognize meaningful objects and events."
    },
    {
        term: "Bottom-up Processing",
        definition: "Analysis that begins with the sensory receptors and works up to the brain's integration of sensory information."
    },
    {
        term: "Afferent Nerves",
        definition: "Nerves that carry information up to the brain from the sensory organs."
    },
    {
        term: "Top-down Processing",
        definition: "Information processing guided by higher-level mental processes, as when we construct perceptions drawing on our experience and expectations."
    },
    {
        term: "Efferent Nerves",
        definition: "Nerves that carry information from the brain out to the muscles, organs, etc."
    },
    {
        term: "Selective Attention",
        definition: "The focusing of conscious awareness on a particular stimulus. Also known as the cocktail party effect."
    },
    {
        term: "Inattentional Blindness",
        definition: "Failing to see visible objects when our attention is directed elsewhere."
    },
    {
        term: "Change Blindness",
        definition: "Failing to notice changes in the environment."
    },
    {
        term: "Psychophysics",
        definition: "The study of relationships between the physical characteristics of stimuli, such as their intensity, and our psychological experience of them."
    },
    {
        term: "Absolute Threshold",
        definition: "The minimum stimulation needed to detect a particular stimulus 50 percent of the time."
    },
    {
        term: "Signal Detection Theory",
        definition: "A theory predicting how and when we detect the presence of a faint stimulus (signal) amid background stimulation (noise). Assumes there is no single absolute threshold and that detection depends partly on a person's experience, expectations, motivation, and alertness."
    },
    {
        term: "Subliminal",
        definition: "Below the threshold of sensation or consciousness; perceived by or affecting someone's mind without their being aware of it. Example, listening to a song that has a 'hidden message' that you can't hear but is supposedly affecting you."
    },
    {
        term: "Priming",
        definition: "The activation, often unconsciously, of certain associations, thus predisposing one's perception, memory, or response. Often used in advertising."
    },
    {
        term: "Difference Threshold",
        definition: "The minimum difference between two stimuli required for detection 50 percent of the time. Also called the just noticeable difference (jnd)."
    },
    {
        term: "Weber's Law",
        definition: "The principle that, to be perceived as different, two stimuli must differ by a constant percentage (rather than a constant amount). Examples: there must be an 8% change to notice a change in lightwave energy and a 2% change to notice a change in pressure."
    },
    {
        term: "Sensory Adaptation",
        definition: "Diminished (lessened) sensitivity to a stimulus as a consequence of constant stimulation. Example: jumping into a cold pool and after a minute it feels less cold."
    },
    {
        term: "Transduction",
        definition: "Conversion of one form of energy into another. In sensation, the transforming of stimulus energies, such as sights, sounds, and smells, into neural impulses our brains can interpret."
    },
    {
        term: "Wavelength",
        definition: "The distance from the peak of one light or sound wave to the peak of the next. Electromagnetic versions of this vary from the short blips of cosmic rays to the long pulses of radio transmission."
    },
    {
        term: "Hue",
        definition: "The dimension of color that is determined by the wavelength of light; what we know as the color names blue, green, and so forth."
    },
    {
        term: "Intensity",
        definition: "The amount of energy in a light or sound wave, which we perceive as brightness or loudness, as determined by the wave's amplitude."
    },
    {
        term: "Pupil",
        definition: "The adjustable opening in the center of the eye through which light enters."
    },
    {
        term: "Iris",
        definition: "A ring of muscle tissue that forms the colored portion of the eye around the pupil and controls the size of the pupil opening."
    },
    {
        term: "Lens",
        definition: "The transparent structure behind the pupil that changes shape to help focus images on the retina."
    },
    {
        term: "Retina",
        definition: "The light-sensitive inner surface of the eye, containing the receptor rods and cones plus layers of neurons that begin the processing of visual information. The place of transduction in the eye."
    },
    {
        term: "Accommodation",
        definition: "The process by which the eye's lens changes shape to focus near or far objects on the retina."
    },
    {
        term: "Rods",
        definition: "Retinal receptors that detect black, white, and gray; necessary for peripheral and twilight vision, when cones don't respond."
    },
    {
        term: "Cones",
        definition: "Retinal receptor cells that are concentrated near the center of the retina and that function in daylight or in well-lit conditions. These detect fine detail and give rise to color sensations."
    },
    {
        term: "Optic Nerve",
        definition: "The nerve that carries neural impulses from the eye to the brain."
    },
    {
        term: "Blind Spot",
        definition: "The point at which the optic nerve leaves the eye and no receptor cells are located there."
    },
    {
        term: "Fovea",
        definition: "The central focal point in the retina, around which the eye's cones cluster."
    },
    {
        term: "Feature Detectors",
        definition: "Nerve cells in the brain that respond to specific features of the stimulus, such as shape, angle, or movement."
    },
    {
        term: "Young-Helmholtz Trichromatic (Three-Color) Theory",
        definition: "The theory that the retina contains three different color receptors—one most sensitive to red, one to green, one to blue—which, when stimulated in combination, can produce the perception of any color."
    },
    {
        term: "Opponent-Process Theory",
        definition: "The theory that opposing retinal processes (red-green, yellow-blue, white-black) enable color vision. For example, some cells are stimulated by green and inhibited by red; others are stimulated by red and inhibited by green."
    },
    {
        term: "Audition",
        definition: "The sense or act of hearing."
    },
    {
        term: "Frequency",
        definition: "The number of complete wavelengths that pass a point in a given time (for example, per second)."
    },
    {
        term: "Pitch",
        definition: "A tone's experienced highness or lowness; depends on frequency."
    },
    {
        term: "Middle Ear",
        definition: "The chamber between the eardrum and cochlea containing three tiny bones (hammer, anvil, and stirrup) that concentrate the vibrations of the eardrum on the cochlea's oval window."
    },
    {
        term: "Cochlea",
        definition: "A coiled, bony, fluid-filled tube in the inner ear through which sound waves trigger nerve impulses. The place of transduction in the ear."
    },
    {
        term: "Inner Ear",
        definition: "The innermost part of the ear, containing the cochlea, semicircular canals, and vestibular sacs."
    },
    {
        term: "Place Theory",
        definition: "In hearing, the theory that links the pitch we hear with the place where the cochlea's membrane is stimulated."
    },
    {
        term: "Frequency Theory",
        definition: "In hearing, the theory that the rate of nerve impulses traveling up the auditory nerve matches the frequency of a tone, thus enabling us to sense its pitch."
    },
    {
        term: "Conduction Hearing Loss",
        definition: "Hearing loss caused by damage to the mechanical system that conducts sound waves to the cochlea."
    },
    {
        term: "Sensorineural Hearing Loss",
        definition: "Hearing loss caused by damage to the cochlea's receptor cells or to the auditory nerves; also called nerve deafness."
    },
    {
        term: "Cochlear Implant",
        definition: "A device for converting sounds into electrical signals and stimulating the auditory nerve through electrodes threaded into the cochlea."
    },
    {
        term: "Olfaction",
        definition: "The sense of smell, a chemical sense. Only sense that does not go through the thalamus, straight to the limbic system (emotional reactions)."
    },
    {
        term: "Olfactory Bulb",
        definition: "Place of transduction for smell (in the nose)."
    },
    {
        term: "Gustation",
        definition: "The sense of taste. Another chemical sense."
    },
    {
        term: "Papillae",
        definition: "Fancy name for taste buds, the place of transduction for taste."
    },
    {
        term: "Kinesthesis",
        definition: "The system for sensing the position and movement of individual body parts."
    },
    {
        term: "Vestibular Sense",
        definition: "The sense of body movement and position, including the sense of balance. Regulated by the fluid in the semicircular canals."
    },
    {
        term: "Gate-Control Theory",
        definition: "The theory that the spinal cord contains a neurological 'gate' that blocks pain signals or allows them to pass on to the brain. The 'gate' is opened by the activity of pain signals traveling up small nerve fibers and is closed by activity in larger fibers or by information coming from the brain."
    },
    {
        term: "Sensory Interaction",
        definition: "The principle that one sense may influence another, as when the smell of food influences its taste."
    },
    {
        term: "Gestalt",
        definition: "An organized whole. These types of psychologists emphasized our tendency to integrate pieces of information into meaningful wholes."
    },
    {
        term: "Figure-Ground",
        definition: "The organization of the visual field into objects (the figures) that stand out from their surroundings (the ground)."
    },
    {
        term: "Grouping",
        definition: "The perceptual tendency to organize stimuli into coherent groups."
    },
    {
        term: "Depth Perception",
        definition: "The ability to see objects in three dimensions although the images that strike the retina are two-dimensional; allows us to judge distance."
    },
    {
        term: "Visual Cliff",
        definition: "A laboratory device for testing depth perception in infants and young animals."
    },
    {
        term: "Binocular Cues",
        definition: "Depth cues, such as retinal disparity, that depend on the use of two eyes."
    },
    {
        term: "Retinal Disparity",
        definition: "A binocular cue for perceiving depth by comparing images from the retinas in the two eyes, the brain computes distance—the greater the disparity (difference) between the two images, the closer the object."
    },
    {
        term: "Monocular Cues",
        definition: "Depth cues, such as interposition and linear perspective, available to either eye alone."
    },
    {
        term: "Phi Phenomenon",
        definition: "An illusion of movement created when two or more adjacent lights blink on and off in quick succession."
    },
    {
        term: "Perceptual Constancy",
        definition: "Perceiving objects as unchanging (having consistent shapes, size, lightness, and color) even as illumination and retinal images change."
    },
    {
        term: "Color Constancy",
        definition: "Perceiving familiar objects as having consistent color, even if changing illumination alters the wavelengths reflected by the object."
    },
    {
        term: "Perceptual Adaptation",
        definition: "In vision, the ability to adjust to an artificially displaced or even inverted visual field."
    },
    {
        term: "Perceptual Set",
        definition: "A mental predisposition/tendency to perceive things in a particular way. Affected by your gender, age, race, culture, religion, prior experience, etc."
    },
    {
        term: "Extrasensory Perception (ESP)",
        definition: "The controversial claim that perception can occur apart from sensory input; includes telepathy, clairvoyance, and precognition."
    },
    {
        term: "Parapsychology",
        definition: "The study of paranormal phenomena, including ESP and psychokinesis."
    },
    {
        term: "Synesthesia",
        definition: "When one kind of sensory stimulus evokes the subjective experience of another."
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
