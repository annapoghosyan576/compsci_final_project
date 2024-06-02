// Define vocabulary terms and their definitions

const vocabulary = [
    { term: "psychological disorders", definition: "a syndrome marked by a clinically significant disturbance in an individual's cognition, emotion regulation, or behavior" },
    { term: "medical model", definition: "the concept that diseases (in this case psychological disorders) have physical causes that can be diagnosed, treated, and, in most cases, cured, often through treatment in a hospital" },
    { term: "psychopathology", definition: "a mental illness" },
    { term: "epigenetics", definition: "the study of environmental influences on gene expression that occur without a DNA change" },
    { term: "DSM-5", definition: "the American Psychiatric Association's Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition; a widely used system for classifying psychological disorders." },
    { term: "attention-defecit/hyperactivity disorder (ADHD)", definition: "a psychological disorder marked by extreme inattention and/or hyperactivity and impulsivity" },
    { term: "therapist-patient privilege", definition: "provides strict rules about the confidentiality of the sessions" },
    { term: "D's of abnormal behavior", definition: "deviant: different from most people in one's culture... ex: hear voices (talking to the dead); homosexuality WAS considered deviant (not anymore) \n\ distressful: that which causes pain, suffering, and trouble \n\ danger: to self or others \n\ dysfunctional: impairs you life to become a disorder... intense fear of spiders may be deviant, but if it doesn't impair your life than it is not a disorder" },
    { term: "hallucinations", definition: "false sensory experiences, such as seeing something in the absence of an external visual stimulus; a symptom of severe mental illness" },
    { term: "delusions", definition: "extreme disorders that involved persistent false beliefs; a symptom of severe mental illness" },
    { term: "affect (emotion)", definition: "characteristically depressed, anxious, manic, or no emotional response; a symptom of severe mental illness" },
    { term: "trephining", definition: "cutting a hole through the head (including the skull) to let out the evil spirit" },
    { term: "anxiety disorders", definition: "psychological disorders characterized by distressing, persistent anxiety or maladaptive behaviors that reduce anxiety (includes generalized anxiety disorder, panic disorder, phobias, OCD, and PTSD); people with anxiety disorders tend to be hypervigilant" },
    { term: "social anxiety disorder (social phobia)", definition: "intense fear and avoidance of social situations" },
    { term: "generalized anxiety disorder", definition: "an anxiety disorder in which a person is continually tense, apprehensive, and in a state of autonomic nervous system arousal; often begins at an early age but symptoms may develop slowly" },
    { term: "panic disorder", definition: "an anxiety disorder marked by unpredictable minutes-long episodes of intense dread in which a person experiences terror and accompanying chest pain, choking, or other frightening sensations; often followed by worry over a possible next attack; smokes have doubled risk because of the nicotine" },
    { term: "agoraphobia", definition: "fear or avoidance of situations (such as crowds or wide open places) where one has felt loss of control and panic; often a product of a panic disorder" },
    { term: "phobia", definition: "an anxiety disorder marked by a persistent, irrational fear and avoidance of a specific object, activity, or situation" },
    { term: "obsessive-compulsive disorder (OCD)", definition: "an anxiety disorder characterized by unwanted repetitive thoughts (obsessions) and/or actions (compulsions) \n\ obsessive thoughts: unwanted and repetitive \n\ compulsive behaviors: responses to obsessive thoughts" },
    { term: "posttraumatic stress disorder (PTSD)", definition: "a disorder characterized by haunting memories, nightmares, social withdrawal, jumpy anxiety, numbness of feeling, and/or insomnia that lingers for four weeks or more after a traumatic experience" },
    { term: "stimulus generalization (classical conditioning)", definition: "occurs when a person experiences a fearful event and late develops a fear of similar events" },
    { term: "reinforcement (operant conditioning)", definition: "helps maintain learned fears and anxieties" },
    { term: "preparedness hypothesis", definition: "theory that suggests that we carry an innate biological tendency, acquired through natural selection, to respond quickly and automatically to stimuli that posed a survival threat to our ancestors \n\ explains why we develop phobias for snake and lightening more easily than automobiles and electrical outlets" },
    { term: "major depressive disorder", definition: "a disorder in which a person experiences (in the absence of drugs or another medical condition) two or more weeks with five or more symptoms, at least one of which must be either (1) depressed mood or (2) loss of interest or pleasure" },
    { term: "bipolar disorder", definition: "a disorder in which a person alternates between the hopelessness and lethargy of depression and the overexcited state of mania (formerly called manic-depressive disorder)" },
    { term: "mania", definition: "a hyperactive, wildly optimistic state in which dangerously poor judgement is common" },
    { term: "rumination", definition: "compulsive fretting; overthinking about our problems and their causes" },
    { term: "persistent depressive disorder (dysthymia)", definition: "mildly depressed mood more often than not for at least two years" },
    { term: "disruptive mood dysregulation disorder", definition: "diagnoses for children that are persistently irritable and have frequent behavior outbursts" },
    { term: "norepinephrine and serotonin", definition: "increases arousal and boosts mood; scare with depression" },
    { term: "nonsuicidal self-injury (NSSI)", definition: "cutting, burning, hitting oneself, pulling out hair, inserting objects under nails or skin, self-administered tattooing - done to release negative thoughts/feelings" },
    { term: "schizophrenia", definition: "a disorder characterized by delusions, hallucinations, disorganized speech, and/or diminished, inappropriate emotional expression \n\ symptoms: no logical order to thoughts, delusions, no selective attention, hallucinations, inappropriate behavior, flat affect (emotionless), senseless, catatonia (remaining motionless for hours then becoming agitated)" },
    { term: "psychotic disorders", definition: "a group of psychological disorders marked by irrational ideas, distorted perceptions, and a loss of contact with reality" },
    { term: "delusion", definition: "a false belief (often of persecution or grandeur) that may accompany psychotic disorders" },
    { term: "chronic schizophrenia (process schizophrenia)", definition: "a form of schizophrenia in which symptoms usually appear by late adolescence or early adulthood. as people age, psychotic episodes last longer and recovery periods shorten; recovery is unlikely" },
    { term: "acute schizophrenia (reactive schizophrenia)", definition: "a form of schizophrenia that can begin at any age, frequently occurs in response to an emotionally traumatic event, and has extended recovery periods" },
    { term: "positive symptoms", definition: "add to the situation (ex: delusions and hallucinations)" },
    { term: "negative symptoms", definition: "subtract from the situation (ex: social withdrawal, flat effect)" },
    { term: "somatic symptom disorder", definition: "a psychological disorder in which the symptoms take a somatic (bodily) form without apparent physical cause; formerly called somatoform disorder; must have one or more distressing somatic symptoms (taking bodily form)" },
    { term: "conversion disorder (functional neurological symptom disorder)", definition: "a disorder related to somatic symptom disorder in which a person experiences very specific physical symptoms that are not compatible with recognized or neurological conditions" },
    { term: "illness anxiety disorder", definition: "a disorder in which a person interprets normal physical sensations as symptoms of a disease; no or mild symptoms may be present" },
    { term: "dissociative disorders", definition: "controversial, rare disorders in which conscious awareness becomes separated (dissociated) from previous memories, thoughts, and feelings" },
    { term: "dissociative identity disorder (DID)", definition: "a rare dissociative disorder in which a person exhibits two or more distinct and alternating personalities; formerly called multiple personality disorder" },
    { term: "personality disorders", definition: "inflexible and enduring behavior patterns that impair social functioning (3 clusters: odd and eccentric, dramatic and emotional, anxious and fearful)" },
    { term: "antisocial personality disorder", definition: "a personality disorder in which the person (usually a man) exhibits a lack of conscience for wrongdoing, even toward friends and family members; may be aggressive and ruthless or a clever con artist; lower emotional intelligence" },
    { term: "anorexia nervosa", definition: "an eating disorder in which a person maintains a starvation diet despite being significantly underweight; sometimes accompanied by excessive exercise" },
    { term: "bulimia nervosa", definition: "an eating disorder in which a person alternates binge eating (usually of high-calorie foods) with purging (by vomiting or laxative use) or fasting" },
    { term: "binge-eating disorder", definition: "significant binge-eating episodes, followed by distress, disgust, or guilt, but without the compensatory purging, fasting, or excessive exercise that marks bulimia nervosa" },
    { term: "psychotherapy", definition: "treatment involving psychological techniques; consists of interactions between a trained therapist and someone seeking to overcome psychological difficulties or achieve personal growth" },
    { term: "biomedical theory", definition: "prescribed medications or procedures that act directly on the person's physiology" },
    { term: "eclectic approach", definition: "an approach to psychotherapy that uses techniques from various forms of therapy" },
    { term: "Sigmund Freud", definition: "psychoanalysis" },
    { term: "resistance", definition: "in psychoanalysis, the blocking from consciousness of anxiety-laden material" },
    { term: "interpretation", definition: "in psychoanalysis, the analyst's noting supposed dream meanings, resistances, and other significant behaviors and events in order to promote insight" },
    { term: "transference", definition: "in psychoanalysis, the patient's transfer to the analyst of emotions linked with other relationships (such as love or hatred for a parent)" },
    { term: "psychodynamic therapy", definition: "therapy deriving from the psychoanalytic tradition that views individuals as responding to unconscious forces and childhood experiences, and that seeks to enhance self-insight" },
    { term: "insight therapies", definition: "therapies that aim to improve psychological functioning by increasing a person's awareness of underlying motives and defenses" },
    { term: "client-centered therapy (person-centered therapy)", definition: "a humanistic therapy (developed by Carl Rogers) in which the therapist uses techniques such as active listening within a genuine, accepting, empathic environment to facilitate clients' growth" },
    { term: "active listening", definition: "empathic listening in which the listener echoes, restates, and clarifies; a feature of Rogers' client-centered therapy." },
    { term: "unconditional positive regard", definition: "a caring, accepting, non judgemental attitude, which Carl Rogers believed would help patients develop self-awareness and self-acceptance" },
    { term: "behavior therapy", definition: "therapy that applies learning principles to the elimination of unwanted behaviors" },
    { term: "counterconditioning", definition: "a behavior therapy procedure that uses classical conditioning to evoke new responses to stimuli that are triggering unwanted behaviors; includes exposure therapies and aversive conditioning" },
    { term: "Mary Cover Jones", definition: "behavioral psychologist (behavioral therapy)" },
    { term: "Joseph Wolpe", definition: "Psychiatrist who refined Jones' counterconditioning technique into the exposure therapy" },
    { term: "exposure therapy", definition: "behavioral techniques (such as systematic desensitization) that treat anxieties by exposing people (in imagination or actuality) to the things they fear and avoid" },
    { term: "systematic desensitization", definition: "a type of exposure therapy that associates a pleasant relaxed state with gradually increasing anxiety-triggering stimuli; commonly used to treat phobias." },
    { term: "virtual reality exposure therapy", definition: "a counterconditioning technique that treats anxiety by creative electronic simulations in which people can safely face their greatest fears (such as airplane flying, spiders, or public speaking)" },
    { term: "aversive conditioning", definition: "a type of counterconditioning that associates an unpleasant state (such as nausea) with an unwanted behavior (such as drinking alcohol)" },
    { term: "B.F. Skinner", definition: "operant conditioning" },
    { term: "token economy", definition: "an operant conditioning procedure in which people earn a token of some sort for exhibiting a desired behavior and can later exchange the tokens for various privileges or treats" },
    { term: "cognitive therapy", definition: "therapy that teaches people new, more adaptive ways of thinking and acting; based on the assumption that thoughts intervene between events and our emotional reactions" },
    { term: "rational-emotive behavior therapy (REBT)", definition: "a confrontational cognitive therapy, developed by Albert Ellis, that vigorously challenges people's illogical, self-defeating attitudes and assumptions" },
    { term: "cognitive-behavioral therapy (CBT)", definition: "a popular integrative therapy that combines cognitive therapy (changing self-defeating thinking) with behavior therapy (changing behavior)" },
    { term: "group therapy", definition: "therapy conducted with groups rather than individuals, permitting therapeutic benefits from group interaction" },
    { term: "family therapy", definition: "therapy that treats the family as a system; views an individual's unwanted behaviors as influenced by (or directed at) other family members" },
    { term: "meta-analysis", definition: "a procedure for statistically combining the results of many different research studies" },
    { term: "evidence-based practice", definition: "clinical decision making that integrates the best available research with clinical expertise and patient characteristics and preferences; BEST WORKING THERAPY" },
    { term: "therapeutic alliance", definition: "a bond of trust and mutual understanding between a therapist and client, who work together constructively to overcome the client's problem" },
    { term: "paraprofessionals", definition: "briefly trained people (such as professors) who have had a few hours of training in certain skills and may be recovered former clients" },
    { term: "eye movement desensitization and reprocessing (EMDR)", definition: "moving the eyes rapidly during the recall of traumatic events to distract the patient; somewhat of an exposure therapy" },
    { term: "light exposure therapy", definition: "used to treat seasonal depression" },
    { term: "psychopharmacology", definition: "the study of the effects of drugs on mind and behavior" },
    { term: "double-blind procedure", definition: "neither the staff nor patients know who got the drug; gives more accurate results on the effect of drugs" },
    { term: "antipsychotic drugs", definition: "drugs used to treat schizophrenia and other forms of severe thought disorder; antagonist drugs" },
    { term: "antianxiety drugs", definition: "drugs used to control anxiety and agitation" },
    { term: "antidepressant drugs", definition: "drugs used to treat depression, anxiety disorders, OCD, and PTSD; boosts serotonin levels; several widely used antidepressant drugs are selective serotonin reuptake inhibitors (SSRIs)" },
    { term: "neurogenesis", definition: "the birth of new brain cells" },
    { term: "electroconvulsive therapy (ECT)", definition: "a biomedical therapy for severely depressed patients in which a brief electric current is sent through the brain of an anesthetized patient; sometimes called shock therapy" },
    { term: "repetitive transcranial magnetic stimulation (rTMS)", definition: "the application of repeated pulses of magnetic energy to the brain; used to stimulate or suppress brain activity" },
    { term: "selective serotonin reuptake inhibitors (SSRIs)", definition: "block the reuptake of serotonin after it has been released (includes Prozac, Zoloft, and Paxil)" },
    { term: "psychosurgery", definition: "surgery that removes or destroys brain tissue in an effort to change behavior (was more common in the past; very rare now)" },
    { term: "lobotomy", definition: "a psychosurgical procedure once used to calm uncontrollably emotional or violent patients; the procedure cut the nerves connecting the frontal lobes to the emotion-controlling centers of the inner brain; leaves the person mentally dull and is rarely used today" },
    { term: "resilience", definition: "the personal strength that helps most people cope with stress and recover from adversity and even trauma" },
    { term: "posttraumatic growth", definition: "positive psychological changes as a result of struggling with extremely challenging circumstances and life crises" },
    { term: "lithium", definition: "a cheap salt used as a medication to treat bipolar disorder" }
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
