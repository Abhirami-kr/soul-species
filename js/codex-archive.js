// =============================================================================
// SoulSpecies — FIELD ARCHIVE DATA & RENDERING ENGINE
// 15 unique specimen entries using uploaded creature images.
// Images are referenced by relative path from the project root.
// =============================================================================

// ── Image paths (relative to index.html) ────────────────────────────────────
const IMG = {
    monkey:  'C:/Users/user/.gemini/antigravity/brain/034d49c8-0dff-4e6c-9d9b-7a71c74aa820/.user_uploaded/media_1788645680760.jpg',
    goblin:  'C:/Users/user/.gemini/antigravity/brain/034d49c8-0dff-4e6c-9d9b-7a71c74aa820/.user_uploaded/media_1788645699001.jpg',
    dragon:  'C:/Users/user/.gemini/antigravity/brain/034d49c8-0dff-4e6c-9d9b-7a71c74aa820/.user_uploaded/media_1788645721150.jpg',
    fox:     'C:/Users/user/.gemini/antigravity/brain/034d49c8-0dff-4e6c-9d9b-7a71c74aa820/.user_uploaded/media_1788645745372.jpg',
    kimono:  'C:/Users/user/.gemini/antigravity/brain/034d49c8-0dff-4e6c-9d9b-7a71c74aa820/.user_uploaded/media_1788645766911.jpg'
};

// ── 15 Specimen Records ──────────────────────────────────────────────────────
const FIELD_ARCHIVE = [
    {
        specimenNo: '01',
        img: IMG.monkey,
        imgPosition: 'center 22%',
        name: 'The Bramblecap Wanderer',
        latin: 'Vagabundus arboris mischievus',
        classification: 'Curious Forest Nomad',
        habitat: 'Ancient canopy roads, forgotten tree highways',
        temperament: 'Inquisitive · Excitable · Slightly impulsive',
        knownFor: 'Discovering things that were better left undiscovered',
        weakness: 'A single interesting-looking rock on the ground',
        carries: 'A worn satchel of half-finished maps',
        diet: 'Wild berries, stolen acorns, other creatures\' breakfasts',
        fieldNote: 'Was found sitting on our research tent. Denied all knowledge of the missing biscuits. The crumbs on its chin told a different story.',
        trait: '✦ Curiosity',
        danger: 'medium',
        dangerLabel: 'MODERATE CHAOS',
        traitKey: 'curious',
        stats: { curiosity: 94, mischief: 62, calmness: 18, wisdom: 45, energy: 88 }
    },
    {
        specimenNo: '02',
        img: IMG.goblin,
        imgPosition: 'center 20%',
        name: 'The Glimmock of the Hollows',
        latin: 'Trickster viridis luminosus',
        classification: 'Mischievous Light-Wielder',
        habitat: 'The luminous undergrowth of Thornwood Forest',
        temperament: 'Chaotic · Cheerful · Suspiciously friendly',
        knownFor: 'Making things glow that probably shouldn\'t glow',
        weakness: 'Being told it cannot have the shiny thing',
        carries: 'A crooked stick that may or may not be magical',
        diet: 'Forest mushrooms, golden beetles, borrowed snacks',
        fieldNote: 'Approached our camp holding what appeared to be a glowing acorn. Offered it as a gift. We accepted. We regret accepting.',
        trait: '✦ Mischief',
        danger: 'high',
        dangerLabel: 'HIGH CHAOS',
        traitKey: 'playful',
        stats: { curiosity: 78, mischief: 96, calmness: 12, wisdom: 30, energy: 91 }
    },
    {
        specimenNo: '03',
        img: IMG.fox,
        imgPosition: 'center 15%',
        name: 'Reynhardt the Path-Seeker',
        latin: 'Vulpes explorans audax',
        classification: 'Bold Adventurer · Class VII Wanderer',
        habitat: 'Crossroads, ridge-lines, places with a good view',
        temperament: 'Confident · Strategic · Slightly dramatic',
        knownFor: 'Having a plan — and a backup plan — and a backup to the backup',
        weakness: 'A locked door with no obvious key nearby',
        carries: 'A small vial of unknown liquid and a large attitude',
        diet: 'Trail rations, opportunistic meals, enemies\' doubt',
        fieldNote: 'Asked us for directions. Did not take them. Returned three hours later having apparently found something better. Would not say what.',
        trait: '✦ Adventurous',
        danger: 'high',
        dangerLabel: 'BOLD RISK',
        traitKey: 'adventurous',
        stats: { curiosity: 82, mischief: 55, calmness: 38, wisdom: 76, energy: 95 }
    },
    {
        specimenNo: '04',
        img: IMG.kimono,
        imgPosition: 'center 12%',
        name: 'Yuen-Sha the Still',
        latin: 'Sapiens tranquillus vinculum',
        classification: 'Ancient Wisdom-Keeper · Silent Observer',
        habitat: 'Mountain fog, slow rivers, anywhere quiet enough to think',
        temperament: 'Serene · Patient · Occasionally judgmental',
        knownFor: 'Knowing things without being told them',
        weakness: 'Loud chewing. It ends friendships.',
        carries: 'A hairpin. Its purpose is classified.',
        diet: 'Jasmine tea, measured silence, the occasional pine nut',
        fieldNote: 'Did not speak for our entire visit. As we left, said five words that resolved two ongoing research disputes and one personal crisis.',
        trait: '✦ Wisdom',
        danger: 'low',
        dangerLabel: 'CALM OBSERVER',
        traitKey: 'mysterious',
        stats: { curiosity: 66, mischief: 8, calmness: 98, wisdom: 99, energy: 22 }
    },
    {
        specimenNo: '05',
        img: IMG.monkey,
        imgPosition: 'center 25%',
        name: 'Pebblecap the Youngest',
        latin: 'Vagabundus arboris parvus',
        classification: 'Junior Scout · Unsupervised',
        habitat: 'Everywhere it is not supposed to be',
        temperament: 'Hyperactive · Endearing · Zero impulse control',
        knownFor: 'Falling into things while looking at something else',
        weakness: 'The concept of "danger"',
        carries: 'Pockets full of pebbles. Hence the name.',
        diet: 'Anything fast enough to catch or slow enough to steal',
        fieldNote: 'Climbed our measurement tower while we were measuring it. Added approximately 0.4 metres to our recorded height before anyone noticed.',
        trait: '✦ Energy',
        danger: 'medium',
        dangerLabel: 'UNPREDICTABLE',
        traitKey: 'playful',
        stats: { curiosity: 99, mischief: 74, calmness: 5, wisdom: 12, energy: 100 }
    },
    {
        specimenNo: '06',
        img: IMG.dragon,
        imgPosition: 'center 18%',
        name: 'Emberwing the Scholar Dragon',
        latin: 'Draco ceruleus pictor',
        classification: 'Artistic Sky Dragon · Creative Spirit',
        habitat: 'Sunlit studios, high cliff ledges, cozy pencil nooks',
        temperament: 'Imaginative · Gentle · Meticulous',
        knownFor: 'Sketching constellations and drawing portraits of researchers',
        weakness: 'Running out of purple colored pencils',
        carries: 'A jar of handcrafted enchanted pencils',
        diet: 'Sunlight, sweet berries, and warm vanilla tea',
        fieldNote: 'Sat silently beside our sketchpads and proceeded to draw a far better diagram of our camp than we had drawn ourselves. Left a tiny paw-print signature.',
        trait: '✦ Creativity',
        danger: 'low',
        dangerLabel: 'GENTLE CREATIVE',
        traitKey: 'creative',
        stats: { curiosity: 92, mischief: 25, calmness: 78, wisdom: 85, energy: 65 }
    },
    {
        specimenNo: '07',
        img: IMG.fox,
        imgPosition: 'center 12%',
        name: 'Auravix of the Dusk Roads',
        latin: 'Vulpes explorans nocturnus',
        classification: 'Shadow Cartographer · Nighttime Operative',
        habitat: 'Dusk roads, moonlit ridges, places between places',
        temperament: 'Mysterious · Calculated · Quietly dramatic',
        knownFor: 'Arriving precisely when needed and leaving without explanation',
        weakness: 'Being asked to explain itself',
        carries: 'A sealed letter. To whom. From whom. Unknown.',
        diet: 'Cold provisions, moon-cooled water, professional secrets',
        fieldNote: 'Appeared at the perimeter at exactly midnight. Left before dawn. A detailed map of the valley had been slipped under the research tent. We had not asked for a map.',
        trait: '✦ Mysterious',
        danger: 'medium',
        dangerLabel: 'ENIGMATIC',
        traitKey: 'mysterious',
        stats: { curiosity: 72, mischief: 44, calmness: 65, wisdom: 88, energy: 60 }
    },
    {
        specimenNo: '08',
        img: IMG.kimono,
        imgPosition: 'center 10%',
        name: 'Master Shu-Wei the Patient',
        latin: 'Sapiens tranquillus magistra',
        classification: 'Keeper of Old Patience · Order of the Still Paw',
        habitat: 'Bamboo groves at dawn, stone bridges over slow streams',
        temperament: 'Wise · Composed · Subtly intimidating',
        knownFor: 'Teaching lessons through prolonged, meaningful silence',
        weakness: 'Being rushed. Do not rush.',
        carries: 'A folded cloth. Its purpose changes each time it is used.',
        diet: 'Morning porridge, considered thoughts, cold tea revisited',
        fieldNote: 'We asked if we were being observed correctly. Shu-Wei looked at us for forty-five seconds. We corrected our posture and rescheduled the appointment.',
        trait: '✦ Calm',
        danger: 'low',
        dangerLabel: 'PEACEFUL',
        traitKey: 'calm',
        stats: { curiosity: 55, mischief: 5, calmness: 100, wisdom: 97, energy: 15 }
    },
    {
        specimenNo: '09',
        img: IMG.monkey,
        imgPosition: 'center 20%',
        name: 'Tumblefuzz the Overthought',
        latin: 'Vagabundus arboris contemplativus',
        classification: 'Accidental Philosopher · Canopy Thinker',
        habitat: 'The highest branches where nobody can bother asking questions',
        temperament: 'Thoughtful · Anxious · Unexpectedly profound',
        knownFor: 'Staring into the middle distance at inconvenient moments',
        weakness: 'Being asked "what are you thinking about?"',
        carries: 'A small stone described as "a reminder that things fall"',
        diet: 'Fruit eaten slowly while considering its implications',
        fieldNote: 'Was unresponsive for seventeen minutes. When we asked if it was alright, it said: "is anything, really?" We have included this in our research as a data point.',
        trait: '✦ Wisdom',
        danger: 'low',
        dangerLabel: 'PENSIVE',
        traitKey: 'curious',
        stats: { curiosity: 90, mischief: 20, calmness: 48, wisdom: 84, energy: 35 }
    },
    {
        specimenNo: '10',
        img: IMG.goblin,
        imgPosition: 'center 22%',
        name: 'Gloomspark the Reluctant',
        latin: 'Trickster viridis ambiguus',
        classification: 'Gifted but Suspicious · Self-Appointed Skeptic',
        habitat: 'Dark edges of bright places',
        temperament: 'Sceptical · Secretly warm · Socially exhausted',
        knownFor: 'Knowing exactly how things will go wrong before they do',
        weakness: 'Genuine, uncomplicated kindness — completely disarming',
        carries: 'A list of concerns. It is long.',
        diet: 'Things eaten alone, away from the group\'s conversation',
        fieldNote: 'Warned us the bridge would collapse. We crossed anyway. The bridge did not collapse. Gloomspark has never forgiven us for proving it wrong.',
        trait: '✦ Shyness',
        danger: 'low',
        dangerLabel: 'HARMLESS',
        traitKey: 'calm',
        stats: { curiosity: 65, mischief: 28, calmness: 70, wisdom: 75, energy: 25 }
    },
    {
        specimenNo: '11',
        img: IMG.fox,
        imgPosition: 'center 14%',
        name: 'Copperfang the Collector',
        latin: 'Vulpes explorans accumulator',
        classification: 'Artefact Enthusiast · Unlicensed Archivist',
        habitat: 'Abandoned market stalls, old ruins, "temporary" storage everywhere',
        temperament: 'Charming · Acquisitive · Technically honest',
        knownFor: 'Finding things. Keeping things. Not always in that order.',
        weakness: 'Telling the difference between "acquiring" and "borrowing"',
        carries: 'An implausible number of items for someone this small',
        diet: 'Whatever was on offer, taken slightly more than necessary',
        fieldNote: 'Returned a stolen compass with a handwritten note of apology that somehow also included a receipt. We are still unsure what the receipt was for.',
        trait: '✦ Mischief',
        danger: 'medium',
        dangerLabel: 'OPPORTUNISTIC',
        traitKey: 'adventurous',
        stats: { curiosity: 88, mischief: 80, calmness: 30, wisdom: 60, energy: 78 }
    },
    {
        specimenNo: '12',
        img: IMG.kimono,
        imgPosition: 'center 10%',
        name: 'Mistweave the Quiet',
        latin: 'Sapiens tranquillus speculum',
        classification: 'Reflective Spirit · Keeper of Forgotten Things',
        habitat: 'Forest pools, mist-covered highlands, places that echo',
        temperament: 'Observant · Gentle · Remembers everything',
        knownFor: 'Knowing what you meant to say, not what you said',
        weakness: 'Being asked to hurry',
        carries: 'A small mirror wrapped in old cloth',
        diet: 'Dew collected at first light, things remembered from good days',
        fieldNote: 'Spoke very little during the observation period. Each sentence, however, appeared to answer a question we had not yet asked. This was profoundly unnerving.',
        trait: '✦ Wisdom',
        danger: 'low',
        dangerLabel: 'SERENE',
        traitKey: 'mysterious',
        stats: { curiosity: 70, mischief: 10, calmness: 92, wisdom: 95, energy: 18 }
    },
    {
        specimenNo: '13',
        img: IMG.monkey,
        imgPosition: 'center 24%',
        name: 'Juniper the Cap-Wearer',
        latin: 'Vagabundus arboris fascinatus',
        classification: 'Urban-Adjacent Forager · Honorary Resident',
        habitat: 'Wherever humans left something interesting behind',
        temperament: 'Social · Adaptable · Somewhat imitative',
        knownFor: 'Wearing things that do not belong to it with great confidence',
        weakness: 'Reflective surfaces. The investigation takes hours.',
        carries: 'The cap. Always the cap. Identity confirmed.',
        diet: 'Urban scraps treated with the reverence of fine dining',
        fieldNote: 'Wore our senior researcher\'s hat for six hours. By the end, other creatures were approaching it for decisions. We chose not to intervene.',
        trait: '✦ Confidence',
        danger: 'low',
        dangerLabel: 'REMARKABLY CHARMING',
        traitKey: 'playful',
        stats: { curiosity: 80, mischief: 55, calmness: 40, wisdom: 42, energy: 85 }
    },
    {
        specimenNo: '14',
        img: IMG.goblin,
        imgPosition: 'center 20%',
        name: 'Thistlewick the Loud',
        latin: 'Trickster viridis sonorus',
        classification: 'Enthusiastic Communicator · Volume Specialist',
        habitat: 'Anywhere that needs livening up immediately',
        temperament: 'Bold · Generous · Constitutionally unable to whisper',
        knownFor: 'Bringing everyone together — whether they intended to meet or not',
        weakness: 'Empty rooms. They must be filled. Immediately.',
        carries: 'A small horn of unclear ceremonial purpose',
        diet: 'Celebratory foods, the energy of a crowd, borrowed enthusiasm',
        fieldNote: 'Appeared at camp uninvited. Within forty minutes, three separate research groups had merged and were sharing equipment. This was, objectively, an improvement.',
        trait: '✦ Energy',
        danger: 'medium',
        dangerLabel: 'BOISTEROUS',
        traitKey: 'playful',
        stats: { curiosity: 75, mischief: 65, calmness: 8, wisdom: 35, energy: 99 }
    },
    {
        specimenNo: '15',
        img: IMG.fox,
        imgPosition: 'center 13%',
        name: 'Velvetthorn the Wanderer-Last',
        latin: 'Vulpes explorans finis',
        classification: 'Veteran Scout · Final Entry of Record',
        habitat: 'The last road before the unknown begins',
        temperament: 'Weathered · Thoughtful · Quietly magnificent',
        knownFor: 'Having been everywhere once, most places twice',
        weakness: 'Doors that stay closed no matter how long you stand before them',
        carries: 'A compass that always points somewhere interesting',
        diet: 'Whatever the road provides',
        fieldNote: 'Oldest recorded specimen in the archive. Asked if the research was going well. When told it was, said: "It usually does, eventually." Then walked north. Has not returned. We are waiting.',
        trait: '✦ Adventurous',
        danger: 'medium',
        dangerLabel: 'STORIED WANDERER',
        traitKey: 'adventurous',
        stats: { curiosity: 85, mischief: 42, calmness: 68, wisdom: 92, energy: 72 }
    }
];

// ── Trait key → archetype mapping for user match ─────────────────────────────
// Maps twin generator archetype keys to which specimens feel closest.
const TRAIT_SPECIMEN_MAP = {
    curious:     ['01', '09'],
    adventurous: ['03', '15', '11'],
    creative:    ['06'],
    calm:        ['08', '10'],
    playful:     ['02', '05', '13', '14'],
    mysterious:  ['04', '07', '12']
};

// ── Archive Rendering Engine ──────────────────────────────────────────────────
window.FieldArchive = (function () {

    let activeModal = null;

    // Build card HTML for a single specimen
    function buildCard(spec) {
        const dangerClass = `danger-${spec.danger}`;
        return `
            <div class="codex-creature-card" data-specimen-no="${spec.specimenNo}" tabindex="0" role="button"
                 aria-label="Open specimen ${spec.specimenNo}: ${spec.name}">
                <div class="user-match-badge">✦ Your Species Match</div>
                <div class="specimen-no-banner">
                    <span class="specimen-no">SPECIMEN ${spec.specimenNo}</span>
                    <span class="specimen-danger ${dangerClass}">${spec.dangerLabel}</span>
                </div>
                <div class="specimen-img-frame">
                    <img src="${spec.img}" alt="${spec.name} illustration"
                         style="object-position: ${spec.imgPosition || 'center 18%'};"
                         loading="lazy">
                </div>
                <div class="specimen-card-body">
                    <div class="specimen-name">${spec.name}</div>
                    <div class="specimen-latin">${spec.latin}</div>
                    <div class="specimen-classification">${spec.classification}</div>
                    <div class="specimen-detail-row">
                        <span class="specimen-detail-label">🌿 Habitat</span>
                        <span class="specimen-detail-value">${spec.habitat}</span>
                    </div>
                    <div class="specimen-detail-row">
                        <span class="specimen-detail-label">⚡ Mood</span>
                        <span class="specimen-detail-value">${spec.temperament}</span>
                    </div>
                    <hr class="specimen-divider">
                    <div class="specimen-field-note">
                        <span class="specimen-field-note-label">📋 Field Note</span>
                        ${spec.fieldNote}
                    </div>
                    <div class="specimen-trait-pill">${spec.trait}</div>
                </div>
            </div>
        `;
    }

    // Render all cards into the grid
    function render() {
        const grid = document.getElementById('codex-grid-container');
        if (!grid) return;
        grid.innerHTML = FIELD_ARCHIVE.map(buildCard).join('');

        // Bind click/keyboard events to each card
        grid.querySelectorAll('.codex-creature-card').forEach(card => {
            card.addEventListener('click', () => {
                const no = card.dataset.specimenNo;
                const spec = FIELD_ARCHIVE.find(s => s.specimenNo === no);
                if (spec) openModal(spec);
            });
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });
    }

    // Open the specimen detail modal
    function openModal(spec) {
        activeModal = spec;
        const overlay = document.getElementById('specimen-modal-overlay');
        if (!overlay) return;

        // Populate fields
        _set('modal-specimen-no',  `SPECIMEN ${spec.specimenNo}`);
        _set('modal-name',         spec.name);
        _set('modal-latin',        spec.latin);
        _set('modal-class-tag',    spec.classification);
        _set('modal-habitat',      spec.habitat);
        _set('modal-temperament',  spec.temperament);
        _set('modal-knownFor',     spec.knownFor);
        _set('modal-weakness',     spec.weakness);
        _set('modal-carries',      spec.carries);
        _set('modal-diet',         spec.diet);
        _set('modal-field-note',   spec.fieldNote);

        // Image
        const img = document.getElementById('modal-img');
        if (img) {
            img.src = spec.img;
            img.style.objectPosition = spec.imgPosition || 'center 15%';
        }

        // Show overlay first
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Animate stat bars after a brief delay
        setTimeout(() => {
            _stat('curiosity', spec.stats.curiosity);
            _stat('mischief',  spec.stats.mischief);
            _stat('calmness',  spec.stats.calmness);
            _stat('wisdom',    spec.stats.wisdom);
            _stat('energy',    spec.stats.energy);
        }, 120);
    }

    function closeModal() {
        const overlay = document.getElementById('specimen-modal-overlay');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
        // Reset bars
        ['curiosity','mischief','calmness','wisdom','energy'].forEach(k => _stat(k, 0));
        activeModal = null;
    }

    // Highlight user's closest species match after quiz
    function highlightMatch(traitKey) {
        // Clear previous highlights
        document.querySelectorAll('.codex-creature-card.user-species-match')
            .forEach(el => el.classList.remove('user-species-match'));

        const matchNos = TRAIT_SPECIMEN_MAP[traitKey] || [];
        if (!matchNos.length) return;

        // Mark the first match prominently, secondary matches more subtly
        matchNos.forEach((no, idx) => {
            const card = document.querySelector(`.codex-creature-card[data-specimen-no="${no}"]`);
            if (card) {
                card.classList.add('user-species-match');
                if (idx === 0) {
                    // Scroll to it when codex is opened
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    // ── Helpers ───────────────────────────────────────────────────────────────
    function _set(id, val) {
        const el = document.getElementById(id);
        if (el) el.textContent = val || '—';
    }

    function _stat(key, val) {
        const fill = document.getElementById(`stat-${key}`);
        const txt  = document.getElementById(`stat-${key}-val`);
        if (fill) fill.style.width = `${val}%`;
        if (txt)  txt.textContent  = `${val}%`;
    }

    // ── Init: bind modal close events ─────────────────────────────────────────
    function init() {
        const closeBtn = document.getElementById('specimen-modal-close');
        const overlay  = document.getElementById('specimen-modal-overlay');

        if (closeBtn) closeBtn.addEventListener('click', closeModal);

        // Click outside journal to close
        if (overlay) {
            overlay.addEventListener('click', e => {
                if (e.target === overlay) closeModal();
            });
        }

        // Escape key
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && activeModal) closeModal();
        });
    }

    return { render, openModal, closeModal, highlightMatch, init };
})();
