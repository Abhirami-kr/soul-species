// SoulSpecies — 10 Personalized Personality Questions
// Funny, relatable, unpredictable — yet each answer maps to real personality traits
// that drive the Twin Generator's archetype + visual output.

// ─── TRAIT KEY REFERENCE ──────────────────────────────────────────────────────
// curious      → Twin gets scholar/intellectual traits, book props, constellation scene
// adventurous  → Twin gets explorer gear, bold pose, wilderness scene
// creative     → Twin gets artist smock, quill, sparkle scene
// calm         → Twin gets cozy sweater, tea mug, cottage scene
// playful      → Twin gets winking pose, waving paw, berry grove scene
// mysterious   → Twin gets dark cloak, orb prop, starlight/fog scene
//
// Additional trait blends feed into the secondary stats:
// chaotic, humorous, strategic, empathetic, dramatic, independent, observant
// ─────────────────────────────────────────────────────────────────────────────

const QUIZ_QUESTIONS = [
    {
        id: 1,
        topic: 'Social Battery',
        icon: '🎭',
        question: 'You enter a room full of strangers. What\'s your natural behaviour?',
        options: [
            {
                letter: 'A',
                emoji: '🐭',
                text: 'Find a corner and silently observe everyone like you\'re collecting evidence.',
                scores: { curious: 3, calm: 2, mysterious: 1 }
            },
            {
                letter: 'B',
                emoji: '🦜',
                text: 'Somehow become friends with three people within ten minutes.',
                scores: { playful: 3, adventurous: 2, creative: 1 }
            },
            {
                letter: 'C',
                emoji: '🕶️',
                text: 'Stand mysteriously and wait for someone interesting to approach you.',
                scores: { mysterious: 3, calm: 1, creative: 1 }
            },
            {
                letter: 'D',
                emoji: '🌀',
                text: 'Accidentally become the centre of attention without even trying.',
                scores: { playful: 2, adventurous: 2, chaotic: 2 }
            }
        ]
    },
    {
        id: 2,
        topic: 'Superpower Selection',
        icon: '⚡',
        question: 'You suddenly discover you have a superpower. Obviously, you abuse it immediately. Which power are you choosing?',
        options: [
            {
                letter: 'A',
                emoji: '👁️🧠',
                text: 'Mind Reading — because knowing what people actually think would be very entertaining.',
                scores: { curious: 3, strategic: 2, mysterious: 1 }
            },
            {
                letter: 'B',
                emoji: '🫥✨',
                text: 'Invisibility — disappear from awkward situations, responsibilities, and people you don\'t feel like talking to.',
                scores: { calm: 2, mysterious: 2, playful: 2 }
            },
            {
                letter: 'C',
                emoji: '🔥🐉',
                text: 'Fire Powers — slight inconvenience? Burn the drama. (Figuratively... mostly.)',
                scores: { adventurous: 3, chaotic: 2, dramatic: 1 }
            },
            {
                letter: 'D',
                emoji: '🐙🙌',
                text: 'Extra Arms — more hands = more snacks, more multitasking, more chaos.',
                scores: { creative: 2, chaotic: 3, playful: 1 }
            }
        ]
    },
    {
        id: 3,
        topic: 'Snack Justice',
        icon: '🍪',
        question: 'Someone eats your favourite snack without asking. What happens next?',
        options: [
            {
                letter: 'A',
                emoji: '😐📝',
                text: 'Say "it\'s okay" but secretly add their name to your mental enemy list.',
                scores: { mysterious: 2, strategic: 2, calm: 2 }
            },
            {
                letter: 'B',
                emoji: '😭📢',
                text: 'Loudly announce the betrayal to everyone in the room.',
                scores: { playful: 2, dramatic: 3, chaotic: 1 }
            },
            {
                letter: 'C',
                emoji: '🕵️‍♀️🔍',
                text: 'Investigate silently until you find undeniable evidence and confront the criminal.',
                scores: { curious: 3, strategic: 3 }
            },
            {
                letter: 'D',
                emoji: '😈🍪',
                text: 'Say nothing. Eat their favourite snack tomorrow.',
                scores: { mysterious: 3, strategic: 2, adventurous: 1 }
            }
        ]
    },
    {
        id: 4,
        topic: 'Dream Home',
        icon: '🏠',
        question: 'Where would you choose to live?',
        options: [
            {
                letter: 'A',
                emoji: '🌿🍄',
                text: 'Cozy Forest Den — plants, fairy lights, soft blankets, suspicious mushrooms and absolutely no unwanted visitors.',
                scores: { calm: 3, curious: 2, creative: 1 }
            },
            {
                letter: 'B',
                emoji: '🛸✨',
                text: 'Floating Spaceship — high-tech, cool views and an emergency escape button.',
                scores: { adventurous: 3, curious: 2, mysterious: 1 }
            },
            {
                letter: 'C',
                emoji: '🕯️🦇',
                text: 'Mysterious Cave — dark, dramatic, slightly scary — but aesthetically perfect.',
                scores: { mysterious: 3, creative: 2, dramatic: 1 }
            },
            {
                letter: 'D',
                emoji: '🧸🍕',
                text: 'Chaos Nest — blankets everywhere, snacks on the floor and absolutely zero organisation.',
                scores: { calm: 2, playful: 2, chaotic: 2 }
            }
        ]
    },
    {
        id: 5,
        topic: 'Friend Group Role',
        icon: '🫂',
        question: 'Your friends have to describe you using only one label. Which one would they most likely choose?',
        options: [
            {
                letter: 'A',
                emoji: '🧠🫂',
                text: 'The Therapist — everyone somehow ends up telling you their entire life story.',
                scores: { calm: 3, curious: 2, empathetic: 3 }
            },
            {
                letter: 'B',
                emoji: '🤡🎤',
                text: 'The Comedian — your coping mechanism is making everything a joke.',
                scores: { playful: 3, chaotic: 2, creative: 1 }
            },
            {
                letter: 'C',
                emoji: '👑✨',
                text: 'The Main Character — even buying groceries feels like a movie scene.',
                scores: { adventurous: 2, dramatic: 3, creative: 2 }
            },
            {
                letter: 'D',
                emoji: '🐈💨',
                text: 'The Disappearing Species — replies enthusiastically for three days, then vanishes for two weeks.',
                scores: { mysterious: 3, calm: 2, independent: 2 }
            }
        ]
    },
    {
        id: 6,
        topic: 'Unnecessary Feature',
        icon: '✨',
        question: 'Every creature needs one completely unnecessary physical feature. If you were one, what would you choose?',
        options: [
            {
                letter: 'A',
                emoji: '🐌✨',
                text: 'Sparkly antennae — they glow whenever you sense gossip nearby.',
                scores: { curious: 3, playful: 2, creative: 1 }
            },
            {
                letter: 'B',
                emoji: '🦖🤏',
                text: 'Tiny dinosaur arms — almost useless, but extremely cute.',
                scores: { playful: 3, calm: 2, chaotic: 1 }
            },
            {
                letter: 'C',
                emoji: '👁️👁️👁️',
                text: 'Seven eyes — perfect for noticing things you were definitely not supposed to notice.',
                scores: { curious: 3, mysterious: 2, strategic: 1 }
            },
            {
                letter: 'D',
                emoji: '🦋🫠',
                text: 'Wings that only work on weekends — nobody knows why. Not even you.',
                scores: { adventurous: 2, creative: 3, chaotic: 1 }
            }
        ]
    },
    {
        id: 7,
        topic: 'Late-Night Life',
        icon: '🌙',
        question: 'It\'s 2:17 AM. You should be sleeping, but instead...',
        options: [
            {
                letter: 'A',
                emoji: '📱🫠',
                text: 'Scrolling through random videos and suddenly questioning your entire existence.',
                scores: { curious: 3, mysterious: 2, creative: 1 }
            },
            {
                letter: 'B',
                emoji: '🧠💀',
                text: 'Remembering something embarrassing you did 6 years ago and physically cringing.',
                scores: { calm: 1, dramatic: 2, empathetic: 2, curious: 2 }
            },
            {
                letter: 'C',
                emoji: '🍜🕵️',
                text: 'Sneaking around looking for snacks like a midnight raccoon.',
                scores: { playful: 3, adventurous: 2, chaotic: 1 }
            },
            {
                letter: 'D',
                emoji: '💃🪩',
                text: 'Dancing dramatically in your room because nobody is watching.',
                scores: { creative: 3, playful: 2, dramatic: 2 }
            }
        ]
    },
    {
        id: 8,
        topic: 'Fatal Flaw',
        icon: '💀',
        question: 'You have one fatal personality weakness. Which one is the most dangerous?',
        options: [
            {
                letter: 'A',
                emoji: '🥹💘',
                text: 'Gets emotionally attached and then pretends they don\'t care.',
                scores: { empathetic: 3, mysterious: 2, creative: 1 }
            },
            {
                letter: 'B',
                emoji: '😤🌋',
                text: 'Stays calm for 99 days, then randomly explodes over one tiny thing.',
                scores: { calm: 2, chaotic: 3, dramatic: 2 }
            },
            {
                letter: 'C',
                emoji: '🛌🦥',
                text: 'Has amazing plans but absolutely no motivation to execute them.',
                scores: { calm: 3, creative: 2, adventurous: 1 }
            },
            {
                letter: 'D',
                emoji: '🤡🎢',
                text: 'Makes questionable decisions purely because "it would make life more interesting."',
                scores: { adventurous: 3, chaotic: 3, playful: 1 }
            }
        ]
    },
    {
        id: 9,
        topic: 'Creature Conflict',
        icon: '⚔️',
        question: 'A creature challenges you to a fight. No escape. No adult supervision. What will you do?',
        options: [
            {
                letter: 'A',
                emoji: '🏃💨',
                text: 'Run. Survival is more important than pride.',
                scores: { calm: 2, strategic: 2, adventurous: 2 }
            },
            {
                letter: 'B',
                emoji: '😈🧠',
                text: 'Use psychological warfare. Make them question their entire existence.',
                scores: { mysterious: 3, strategic: 3, curious: 1 }
            },
            {
                letter: 'C',
                emoji: '🗣️⚖️',
                text: 'Argue so well that they eventually apologise to you.',
                scores: { creative: 2, strategic: 2, empathetic: 2 }
            },
            {
                letter: 'D',
                emoji: '🦖📢',
                text: 'Make yourself look bigger, scream loudly and hope for the best.',
                scores: { adventurous: 3, chaotic: 2, dramatic: 2 }
            }
        ]
    },
    {
        id: 10,
        topic: 'Signature Item',
        icon: '🎒',
        question: 'You have to carry one signature item everywhere. What are you choosing?',
        options: [
            {
                letter: 'A',
                emoji: '👑🫠',
                text: 'A slightly crooked crown — because you may be struggling, but you\'re still royalty.',
                scores: { dramatic: 3, creative: 2, adventurous: 1 }
            },
            {
                letter: 'B',
                emoji: '🕶️😎',
                text: 'Tiny sunglasses — maximum attitude, minimum visibility.',
                scores: { mysterious: 3, playful: 2, independent: 2 }
            },
            {
                letter: 'C',
                emoji: '🎀✨',
                text: 'An oversized bow — cute enough to distract everyone from your crimes.',
                scores: { playful: 3, creative: 2, chaotic: 1 }
            },
            {
                letter: 'D',
                emoji: '🥄⚔️',
                text: 'A suspiciously powerful spoon — nobody knows what it does. Nobody wants to find out.',
                scores: { curious: 2, mysterious: 2, creative: 2, chaotic: 1 }
            }
        ]
    }
];

class QuizEngine {
    constructor() {
        this.questions = QUIZ_QUESTIONS;
        this.mode = 'full'; // always 10 questions
        this.currentIndex = 0;
        this.answers = [];
        this.tally = {};
    }

    setMode(mode) {
        // Mode argument ignored — always runs all 10 questions
        this.reset();
    }

    getActiveQuestions() {
        return this.questions; // always all 10
    }

    reset() {
        this.currentIndex = 0;
        this.answers = [];
        // Initialize all trait keys to 0
        this.tally = {
            curious: 0,
            adventurous: 0,
            creative: 0,
            calm: 0,
            playful: 0,
            mysterious: 0,
            chaotic: 0,
            dramatic: 0,
            strategic: 0,
            empathetic: 0,
            independent: 0
        };
    }

    getCurrentQuestion() {
        const active = this.getActiveQuestions();
        return active[this.currentIndex] || null;
    }

    recordAnswer(optionIndex, biometricSeed = {}) {
        const q = this.getCurrentQuestion();
        if (!q || !q.options[optionIndex]) return;

        const selected = q.options[optionIndex];
        this.answers.push({
            questionId: q.id,
            optionIndex: optionIndex,
            selectedText: selected.text
        });

        // Add trait scores from this answer
        if (selected.scores) {
            Object.entries(selected.scores).forEach(([trait, points]) => {
                this.tally[trait] = (this.tally[trait] || 0) + points;
            });
        }

        this.currentIndex++;
    }

    isComplete() {
        const active = this.getActiveQuestions();
        return this.currentIndex >= active.length;
    }

    getProgress() {
        const active = this.getActiveQuestions();
        return {
            current: Math.min(this.currentIndex + 1, active.length),
            total: active.length,
            percentage: Math.round((this.currentIndex / active.length) * 100)
        };
    }

    calculateResult(biometricData = {}) {
        // Compute a dynamic match percentage 93.4%–99.8%
        const totalScore = Object.values(this.tally).reduce((a, b) => a + b, 0);
        const seed = biometricData && biometricData.seed ? biometricData.seed : 42;
        const matchPercentage = (93 + ((totalScore * 7 + seed) % 68) / 10).toFixed(1);

        return {
            creature: null, // will be filled by app.js via TwinGenerator
            matchScore: totalScore,
            matchPercentage: matchPercentage,
            answersCount: this.answers.length
        };
    }
}

window.quizEngine = new QuizEngine();
