// =============================================================================
// SoulSpecies – PERSONALIZED FANTASY SPIRIT TWIN GENERATOR
// Renders rich, expressive, polished fantasy creature illustrations directly in SVG.
// Every user gets a uniquely crafted visual Twin deterministically generated
// from their personality quiz answers and biometric seed.
// =============================================================================

window.TwinGenerator = (function () {

    // ── 8 Distinct Color Palettes (Harmonized with Vintage Scrapbook) ─────────
    const PALETTES = [
        {
            id: 'forest-gold',
            name: 'Forest Gold & Sage',
            primary: '#5D7860',
            secondary: '#7B8573',
            accent: '#D4A259',
            skin: '#F5EBDD',
            shadow: '#30251F',
            glow: '#ECC463',
            blush: '#C48D80',
            bgGrad1: '#3D5240',
            bgGrad2: '#243427',
            magicColor: '#ECC463'
        },
        {
            id: 'dusty-rose',
            name: 'Dusty Rose & Honey',
            primary: '#C48D80',
            secondary: '#A86F55',
            accent: '#D4A259',
            skin: '#FFF6F0',
            shadow: '#3E2A24',
            glow: '#F2D399',
            blush: '#E5988A',
            bgGrad1: '#6E453D',
            bgGrad2: '#3D2520',
            magicColor: '#F7D6B5'
        },
        {
            id: 'terracotta-ember',
            name: 'Terracotta & Copper',
            primary: '#A84F45',
            secondary: '#B58B68',
            accent: '#ECC463',
            skin: '#FDFBF7',
            shadow: '#30251F',
            glow: '#F5A623',
            blush: '#C48D80',
            bgGrad1: '#5E2B25',
            bgGrad2: '#2D1613',
            magicColor: '#FFA726'
        },
        {
            id: 'midnight-starlight',
            name: 'Midnight Indigo & Silver',
            primary: '#3F4E66',
            secondary: '#5B7490',
            accent: '#D4BC9F',
            skin: '#F0F3F7',
            shadow: '#1C2533',
            glow: '#C8D8E8',
            blush: '#B8A4C9',
            bgGrad1: '#232D3D',
            bgGrad2: '#121824',
            magicColor: '#90CAF9'
        },
        {
            id: 'toasted-caramel',
            name: 'Toasted Caramel & Cream',
            primary: '#8D6346',
            secondary: '#B58B68',
            accent: '#D4A259',
            skin: '#FAF4EB',
            shadow: '#3E291D',
            glow: '#FCE4B8',
            blush: '#D4956A',
            bgGrad1: '#543A27',
            bgGrad2: '#2D1E14',
            magicColor: '#FFE082'
        },
        {
            id: 'lilac-dusk',
            name: 'Lilac Dusk & Amethyst',
            primary: '#7E6B88',
            secondary: '#A892B3',
            accent: '#ECC463',
            skin: '#FBF7FC',
            shadow: '#2E2235',
            glow: '#E1BEE7',
            blush: '#C48D80',
            bgGrad1: '#473950',
            bgGrad2: '#221927',
            magicColor: '#CE93D8'
        },
        {
            id: 'ocean-teal',
            name: 'Ocean Teal & Pearl',
            primary: '#4E7D7A',
            secondary: '#76A3A0',
            accent: '#D4BC9F',
            skin: '#F2F8F8',
            shadow: '#1E3634',
            glow: '#B2DFDB',
            blush: '#C48D80',
            bgGrad1: '#264A47',
            bgGrad2: '#122624',
            magicColor: '#80CBC4'
        },
        {
            id: 'autumn-amber',
            name: 'Autumn Amber & Walnut',
            primary: '#6B4938',
            secondary: '#C88A4C',
            accent: '#ECC463',
            skin: '#FDFBF7',
            shadow: '#30251F',
            glow: '#FFE082',
            blush: '#C48D80',
            bgGrad1: '#4A3125',
            bgGrad2: '#24160E',
            magicColor: '#FFD54F'
        }
    ];

    // ── 6 Core Personality Archetypes ─────────────────────────────────────────
    const ARCHETYPES = {
        curious: {
            trait: 'curious',
            label: 'The Inquisitive Seeker',
            quote: 'Every question is a secret door waiting for someone brave enough to turn the knob.',
            roast: 'You have 47 open tabs in your mind and you will stay awake until 3 AM reading about ancient moss.',
            pose: 'curious',
            clothing: 'Scholar coat with brass buckles and leather field satchel',
            accessory: 'Brass spectacles & antique star chart',
            habitat: 'The Grand Starlight Archive & Sunlit Study',
            diet: 'Earl grey tea, cinnamon scones, and midnight Wikipedia spirals'
        },
        adventurous: {
            trait: 'adventurous',
            label: 'The Bold Pathfinder',
            quote: 'Maps are merely suggestions. The best adventures happen where the ink runs out.',
            roast: 'Your idea of relaxation is hiking up a mountain during an electrical storm just to feel something.',
            pose: 'adventurous',
            clothing: 'Explorer tunic with double-stitched belt and brass compass',
            accessory: 'Traveler feathered hat & rolled treasure scroll',
            habitat: 'Windswept Crags & Whispering Pines',
            diet: 'Trail mix, wild mountain berries, and campfire cider'
        },
        creative: {
            trait: 'creative',
            label: 'The Dreamweaver Artisan',
            quote: 'Reality is only a rough draft. We are here to paint the margins with wonder.',
            roast: 'You start five masterpieces a week, finish none of them, and have paint on clothes you bought yesterday.',
            pose: 'creative',
            clothing: 'Artist smock splashed with stardust ink and velvet beret',
            accessory: 'Luminous quill casting radiant sparkles',
            habitat: 'The Sun-Drenched Attic Studio & Twilight Meadow',
            diet: 'Matcha lattes, macaroons, and raw inspiration'
        },
        calm: {
            trait: 'calm',
            label: 'The Gentle Hearthkeeper',
            quote: 'The world spins fast enough on its own. Sit with me; the tea is fresh and the fire is warm.',
            roast: 'You move at the speed of warm honey. An impending crisis has to wait until your afternoon tea is finished.',
            pose: 'calm',
            clothing: 'Oversized cable-knit wool sweater with folded cuffs',
            accessory: 'Warm ceramic tea mug with a tiny heart steam swirl',
            habitat: 'Mossy Cottage Under the Ancient Oak',
            diet: 'Chamomile tea, warm buttered toast, and honey biscuits'
        },
        playful: {
            trait: 'playful',
            label: 'The Mischievous Sprite',
            quote: 'Life without a little chaos is like tea without sugar — completely uninspired.',
            roast: 'You cannot walk past a shiny button without pressing it. You treat rules like decorative suggestions.',
            pose: 'playful',
            clothing: 'Playful patchwork vest with brass bell buttons',
            accessory: 'Winking eye & floating musical stardust',
            habitat: 'Enchanted Berry Groves & Sunlit Canopy',
            diet: 'Stolen cookies, fizzy soda, and pure audacity'
        },
        mysterious: {
            trait: 'mysterious',
            label: 'The Twilight Enchanter',
            quote: 'Silence speaks in ancient alphabets that only those who listen in the dark can understand.',
            roast: 'You leave people on read for four business days and call it "preserving your spiritual frequency."',
            pose: 'mysterious',
            clothing: 'Embroidered velvet twilight cape with constellation lining',
            accessory: 'Crescent moon talisman & orbiting starlight runes',
            habitat: 'The Moonlit Obsidian Spire & Foggy Glade',
            diet: 'Blackberry wine, pomegranate seeds, and quiet supremacy'
        }
    };

    // ── Creature Species Variations ───────────────────────────────────────────
    const SPECIES = [
        { id: 'foxkin',    name: 'Foxkin',         ears: 'fox',    tail: 'fox',    horns: null },
        { id: 'bunny',     name: 'Moon Bunny',     ears: 'bunny',  tail: 'bunny',  horns: null },
        { id: 'elfkin',    name: 'Forest Elfkin',   ears: 'elf',    tail: null,     horns: null },
        { id: 'drakeling', name: 'Star Drakeling', ears: 'fin',    tail: 'dragon', horns: 'dragon' },
        { id: 'catfolk',   name: 'Shadow Cat',     ears: 'cat',    tail: 'cat',    horns: null },
        { id: 'fairy',     name: 'Fairy Sprite',   ears: 'elf',    tail: null,     horns: null, wings: true },
        { id: 'owlfolk',   name: 'Sage Owlfolk',   ears: 'tuft',   tail: null,     horns: null }
    ];

    // ── Name Generators ───────────────────────────────────────────────────────
    const FIRST_NAMES = ['Aurelia', 'Pip', 'Barnaby', 'Caspian', 'Zephyr', 'Rowan', 'Lyra', 'Finneas', 'Milo', 'Ember', 'Sylvie', 'Orion', 'Bramble', 'Juniper', 'Thistle', 'Nesta', 'Corin', 'Kael', 'Wren', 'Elio'];
    const EPITHETS = ['the Star-Eyed', 'the Soft-Hearted', 'the Clockwork Dreamer', 'the Meadow-Whisperer', 'the Pocket-Sized Menace', 'the Quiet Sage', 'the Brave-Pawed', 'the Tea-Master', 'the Secret-Keeper', 'the Wandering Quill'];

    // =========================================================================
    // ANALYSIS: Deterministically map answers to personality profile
    // =========================================================================
    function analyzePersonality(tally, biometricSeed) {
        const seed = (biometricSeed && biometricSeed.seed) ? biometricSeed.seed : 42;

        // Support both old creature-ID tallies and new direct trait-key tallies.
        const hasDirectTraits = ['curious', 'adventurous', 'creative', 'calm', 'playful', 'mysterious']
            .some(k => (tally[k] || 0) > 0);

        let scores;

        if (hasDirectTraits) {
            // ── NEW: direct trait-key tally from the updated quiz ──────────────
            const t = tally;
            scores = {
                curious:     (t.curious     || 0) * 3.0 + (t.strategic   || 0) * 1.5 + (t.independent || 0) * 0.5 + 10,
                adventurous: (t.adventurous || 0) * 3.0 + (t.chaotic     || 0) * 1.2 + (t.dramatic    || 0) * 0.8 + 10,
                creative:    (t.creative    || 0) * 3.0 + (t.dramatic    || 0) * 1.5 + (t.chaotic     || 0) * 0.8 + 10,
                calm:        (t.calm        || 0) * 3.0 + (t.empathetic  || 0) * 1.5 + (t.independent || 0) * 0.8 + 10,
                playful:     (t.playful     || 0) * 3.0 + (t.chaotic     || 0) * 1.0 + (t.dramatic    || 0) * 0.7 + 10,
                mysterious:  (t.mysterious  || 0) * 3.0 + (t.strategic   || 0) * 1.2 + (t.independent || 0) * 1.0 + 10
            };
        } else {
            // ── LEGACY: old creature-ID tally (backward compatibility) ─────────
            const total = Math.max(Object.values(tally || {}).reduce((a, b) => a + b, 0), 1);
            const getScore = (id) => ((tally[id] || 0) / total) * 100;
            scores = {
                curious:     getScore('raccoon') * 1.3 + getScore('espresso') * 0.9 + getScore('phone') * 0.8 + 10,
                adventurous: getScore('goose') * 1.2 + getScore('retriever') * 1.1 + getScore('trolley') * 0.9 + 10,
                creative:    getScore('plant') * 1.2 + getScore('flamingo') * 1.1 + getScore('toast') * 0.7 + 10,
                calm:        getScore('sloth') * 1.4 + getScore('capybara') * 1.3 + getScore('toast') * 1.1 + 10,
                playful:     getScore('retriever') * 1.3 + getScore('raccoon') * 1.2 + getScore('duck') * 1.0 + 10,
                mysterious:  getScore('cat') * 1.4 + getScore('hedgehog') * 1.2 + getScore('turtle') * 0.9 + 10
            };
        }

        // Deterministic seed modulation for personality variance
        scores.curious     += (seed * 3) % 13;
        scores.adventurous += (seed * 7) % 13;
        scores.creative    += (seed * 11) % 13;
        scores.calm        += (seed * 5) % 13;
        scores.playful     += (seed * 13) % 13;
        scores.mysterious  += (seed * 17) % 13;

        // Determine dominant archetype
        let dominantKey = 'curious';
        let maxVal = -1;
        Object.entries(scores).forEach(([key, val]) => {
            if (val > maxVal) { maxVal = val; dominantKey = key; }
        });

        // Compute hash for stable visual variation (species / palette / name)
        let hash = seed * 31;
        Object.entries(tally || {}).forEach(([k, v], i) => {
            const kHash = k.split('').reduce((h, c) => h * 17 + c.charCodeAt(0), 1);
            hash = (hash * 37 + v * 17 + kHash + i) % 1000003;
        });
        hash = Math.abs(hash);

        const speciesIndex = hash % SPECIES.length;
        const paletteIndex = (hash >> 3) % PALETTES.length;
        const nameIndex    = (hash >> 5) % FIRST_NAMES.length;
        const epithetIndex = (hash >> 7) % EPITHETS.length;

        const archetype = ARCHETYPES[dominantKey];
        const species   = SPECIES[speciesIndex];
        const palette   = PALETTES[paletteIndex];
        const fullName  = `${FIRST_NAMES[nameIndex]} ${EPITHETS[epithetIndex]}`;

        // Compute 5 visual telemetry stats
        const chaoticBonus = (tally.chaotic   || 0) * 2;
        const dramBonus    = (tally.dramatic   || 0) * 2;
        const empBonus     = (tally.empathetic || 0) * 2;

        const stats = {
            chaos:        Math.min(100, Math.max(15, Math.round(scores.adventurous * 0.7 + scores.playful * 0.5 + chaoticBonus))),
            napNeed:      Math.min(100, Math.max(10, Math.round(scores.calm * 0.9 + (seed % 10)))),
            snackUrgency: Math.min(100, Math.max(20, Math.round(scores.curious * 0.6 + scores.playful * 0.6 + chaoticBonus * 0.5))),
            dramaLevel:   Math.min(100, Math.max(10, Math.round(scores.creative * 0.8 + scores.mysterious * 0.5 + dramBonus))),
            patience:     Math.min(100, Math.max(5,  Math.round(scores.calm * 0.8 + 10 - (scores.playful * 0.2) + empBonus * 0.5)))
        };

        return {
            archetype,
            species,
            palette,
            name: fullName,
            traitKey: dominantKey,
            stats,
            hash
        };
    }

    // =========================================================================
    // SVG RENDERING ENGINE: Polished Cute Fantasy Character Illustration
    // =========================================================================
    function renderTwinSVG(profile) {
        const { archetype, species, palette, traitKey } = profile;
        const p = palette;

        // Visual components based on pose and species
        const isWinking = traitKey === 'playful';
        const isDreamy  = traitKey === 'creative' || traitKey === 'calm';
        const isScholar = traitKey === 'curious';
        const isAdventurer = traitKey === 'adventurous';
        const isMystic = traitKey === 'mysterious';

        // 1. Background Scene (Atmospheric Fantasy Gradient & Elements)
        const bgId = `twinBgGrad_${profile.hash % 9999}`;
        const eyeGradId = `twinEyeGrad_${profile.hash % 9999}`;

        let sceneDecor = '';
        if (traitKey === 'curious' || traitKey === 'mysterious') {
            // Star constellations & floating magic dust
            sceneDecor = `
                <g class="constellations" opacity="0.6">
                    <line x1="25" y1="35" x2="45" y2="25" stroke="${p.accent}" stroke-width="1" stroke-dasharray="2 2"/>
                    <line x1="45" y1="25" x2="70" y2="40" stroke="${p.accent}" stroke-width="1" stroke-dasharray="2 2"/>
                    <circle cx="25" cy="35" r="2.5" fill="${p.glow}"/>
                    <circle cx="45" cy="25" r="3.5" fill="#FFFFFF"/>
                    <circle cx="70" cy="40" r="2" fill="${p.glow}"/>
                    <circle cx="170" cy="30" r="2.5" fill="${p.glow}"/>
                    <circle cx="155" cy="48" r="1.5" fill="#FFFFFF"/>
                    <line x1="170" y1="30" x2="155" y2="48" stroke="${p.accent}" stroke-width="1" stroke-dasharray="2 2"/>
                    <text x="160" y="22" font-size="12" fill="${p.glow}">✦</text>
                    <text x="35" y="65" font-size="10" fill="${p.glow}">✧</text>
                </g>
            `;
        } else if (traitKey === 'adventurous' || traitKey === 'calm') {
            // Mountain silhouettes & floating leaves
            sceneDecor = `
                <g class="nature-decor" opacity="0.5">
                    <polygon points="10,195 55,125 105,195" fill="${p.bgGrad2}" opacity="0.8"/>
                    <polygon points="85,195 135,115 185,195" fill="${p.bgGrad2}" opacity="0.6"/>
                    <path d="M25,85 Q35,75 30,65 Q40,75 25,85 Z" fill="${p.primary}" opacity="0.8"/>
                    <path d="M170,95 Q180,85 175,75 Q185,85 170,95 Z" fill="${p.accent}" opacity="0.8"/>
                    <circle cx="40" cy="45" r="14" fill="${p.glow}" opacity="0.15"/>
                    <circle cx="40" cy="45" r="8" fill="${p.glow}" opacity="0.3"/>
                </g>
            `;
        } else {
            // Floating sparkles, bubbles, & hearts
            sceneDecor = `
                <g class="sparkle-decor" opacity="0.7">
                    <text x="30" y="45" font-size="16" fill="${p.glow}">✦</text>
                    <text x="165" y="40" font-size="14" fill="${p.magicColor}">✧</text>
                    <text x="25" y="110" font-size="12" fill="${p.blush}">♥</text>
                    <text x="170" y="105" font-size="14" fill="${p.glow}">✦</text>
                    <circle cx="160" cy="70" r="4" fill="${p.glow}" opacity="0.4"/>
                    <circle cx="35" cy="80" r="3" fill="${p.accent}" opacity="0.4"/>
                </g>
            `;
        }

        // 2. Wings (if Fairy)
        let wingsSVG = '';
        if (species.wings) {
            wingsSVG = `
                <g class="fairy-wings" opacity="0.85">
                    <path d="M100,105 Q30,40 45,95 Q55,130 100,120 Z" fill="${p.glow}" opacity="0.5" stroke="#FFFFFF" stroke-width="1.5"/>
                    <path d="M100,105 Q170,40 155,95 Q145,130 100,120 Z" fill="${p.glow}" opacity="0.5" stroke="#FFFFFF" stroke-width="1.5"/>
                    <path d="M100,118 Q45,125 55,150 Q75,155 100,130 Z" fill="${p.primary}" opacity="0.4"/>
                    <path d="M100,118 Q155,125 145,150 Q125,155 100,130 Z" fill="${p.primary}" opacity="0.4"/>
                </g>
            `;
        }

        // 3. Tail (based on species)
        let tailSVG = '';
        if (species.tail === 'fox') {
            tailSVG = `
                <g class="creature-tail">
                    <path d="M130,150 Q185,140 180,95 Q170,75 150,90 Q135,115 125,145 Z" fill="${p.primary}" stroke="${p.shadow}" stroke-width="2.5"/>
                    <path d="M180,95 Q170,75 150,90 Q158,105 175,102 Z" fill="#FFFFFF"/>
                </g>
            `;
        } else if (species.tail === 'bunny') {
            tailSVG = `
                <circle cx="65" cy="165" r="14" fill="#FFFFFF" stroke="${p.shadow}" stroke-width="2"/>
                <circle cx="63" cy="163" r="10" fill="${p.skin}"/>
            `;
        } else if (species.tail === 'cat') {
            tailSVG = `
                <path d="M125,160 Q175,170 170,125 Q165,100 150,110" fill="none" stroke="${p.primary}" stroke-width="10" stroke-linecap="round"/>
                <circle cx="150" cy="110" r="5" fill="#FFFFFF"/>
            `;
        } else if (species.tail === 'dragon') {
            tailSVG = `
                <path d="M130,165 Q175,175 180,135 Q182,110 165,120" fill="none" stroke="${p.primary}" stroke-width="9" stroke-linecap="round"/>
                <polygon points="165,115 155,128 175,125" fill="${p.accent}"/>
            `;
        }

        // 4. Ears / Horns (based on species)
        let earsSVG = '';
        if (species.ears === 'fox') {
            earsSVG = `
                <!-- Fox Ears -->
                <polygon points="68,75 52,25 86,60" fill="${p.primary}" stroke="${p.shadow}" stroke-width="3"/>
                <polygon points="68,70 58,35 82,60" fill="${p.accent}" opacity="0.9"/>
                <path d="M60,45 Q70,55 65,65" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round"/>

                <polygon points="132,75 148,25 114,60" fill="${p.primary}" stroke="${p.shadow}" stroke-width="3"/>
                <polygon points="132,70 142,35 118,60" fill="${p.accent}" opacity="0.9"/>
                <path d="M140,45 Q130,55 135,65" stroke="#FFFFFF" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            `;
        } else if (species.ears === 'bunny') {
            earsSVG = `
                <!-- Cute Floppy Bunny Ears -->
                <g transform="rotate(-8 70 70)">
                    <path d="M62,75 Q50,15 70,12 Q85,15 76,75 Z" fill="${p.skin}" stroke="${p.shadow}" stroke-width="3"/>
                    <path d="M65,70 Q56,22 70,20 Q80,22 74,70 Z" fill="${p.blush}" opacity="0.6"/>
                </g>
                <g transform="rotate(16 130 70)">
                    <path d="M124,75 Q115,22 130,18 Q145,22 138,75 Z" fill="${p.skin}" stroke="${p.shadow}" stroke-width="3"/>
                    <path d="M126,70 Q120,28 130,25 Q138,28 134,70 Z" fill="${p.blush}" opacity="0.6"/>
                </g>
            `;
        } else if (species.ears === 'elf') {
            earsSVG = `
                <!-- Pointed Elven Ears -->
                <path d="M65,85 Q30,70 42,95 Q55,98 66,95 Z" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2.5"/>
                <path d="M52,85 Q40,78 48,92" stroke="${p.blush}" stroke-width="1.5" fill="none"/>

                <path d="M135,85 Q170,70 158,95 Q145,98 134,95 Z" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2.5"/>
                <path d="M148,85 Q160,78 152,92" stroke="${p.blush}" stroke-width="1.5" fill="none"/>
            `;
        } else if (species.horns === 'dragon') {
            earsSVG = `
                <!-- Curled Dragon Horns -->
                <path d="M68,70 Q45,35 60,18 Q72,25 78,58" fill="${p.accent}" stroke="${p.shadow}" stroke-width="2.5"/>
                <line x1="62" y1="35" x2="70" y2="42" stroke="${p.shadow}" stroke-width="1.5"/>
                <line x1="58" y1="48" x2="68" y2="52" stroke="${p.shadow}" stroke-width="1.5"/>

                <path d="M132,70 Q155,35 140,18 Q128,25 122,58" fill="${p.accent}" stroke="${p.shadow}" stroke-width="2.5"/>
                <line x1="138" y1="35" x2="130" y2="42" stroke="${p.shadow}" stroke-width="1.5"/>
                <line x1="142" y1="48" x2="132" y2="52" stroke="${p.shadow}" stroke-width="1.5"/>
            `;
        } else {
            // Rounded cat or tufted ears
            earsSVG = `
                <polygon points="68,75 58,40 84,65" fill="${p.primary}" stroke="${p.shadow}" stroke-width="3"/>
                <polygon points="68,70 63,48 78,65" fill="${p.blush}" opacity="0.8"/>

                <polygon points="132,75 142,40 116,65" fill="${p.primary}" stroke="${p.shadow}" stroke-width="3"/>
                <polygon points="132,70 137,48 122,65" fill="${p.blush}" opacity="0.8"/>
            `;
        }

        // 5. Body & Outfit Base
        let outfitSVG = '';
        if (traitKey === 'adventurous') {
            // Explorer gear with double-stitched belt & collar
            outfitSVG = `
                <!-- Adventure Explorer Outfit -->
                <path d="M62,152 Q55,128 100,122 Q145,128 138,152 Q125,188 100,190 Q75,188 62,152 Z" fill="${p.primary}" stroke="${p.shadow}" stroke-width="3"/>
                <!-- Cream lapels -->
                <polygon points="100,122 88,142 100,145 112,142" fill="${p.skin}"/>
                <line x1="100" y1="145" x2="100" y2="185" stroke="${p.shadow}" stroke-width="2"/>
                <!-- Leather Belt -->
                <rect x="72" y="162" width="56" height="8" rx="2" fill="${p.shadow}"/>
                <rect x="94" y="160" width="12" height="12" rx="2" fill="${p.accent}" stroke="${p.shadow}" stroke-width="1.5"/>
            `;
        } else if (traitKey === 'calm') {
            // Big comfy cable-knit sweater
            outfitSVG = `
                <!-- Cozy Cable-Knit Sweater -->
                <path d="M60,152 Q55,125 100,122 Q145,125 140,152 Q125,190 100,192 Q75,190 60,152 Z" fill="${p.secondary}" stroke="${p.shadow}" stroke-width="3"/>
                <!-- Ribbed turtleneck collar -->
                <rect x="80" y="118" width="40" height="14" rx="6" fill="${p.primary}" stroke="${p.shadow}" stroke-width="2"/>
                <line x1="88" y1="118" x2="88" y2="132" stroke="${p.shadow}" stroke-width="1.5" opacity="0.5"/>
                <line x1="100" y1="118" x2="100" y2="132" stroke="${p.shadow}" stroke-width="1.5" opacity="0.5"/>
                <line x1="112" y1="118" x2="112" y2="132" stroke="${p.shadow}" stroke-width="1.5" opacity="0.5"/>
                <!-- Knitted lines -->
                <path d="M92,138 L92,185" stroke="${p.primary}" stroke-width="2.5" stroke-dasharray="3 3"/>
                <path d="M108,138 L108,185" stroke="${p.primary}" stroke-width="2.5" stroke-dasharray="3 3"/>
            `;
        } else if (traitKey === 'mysterious') {
            // Arcane cloak with glowing star gem
            outfitSVG = `
                <!-- Twilight Arcane Robe -->
                <path d="M58,150 Q52,125 100,120 Q148,125 142,150 Q128,192 100,195 Q72,192 58,150 Z" fill="${p.shadow}"/>
                <path d="M68,145 Q80,128 100,128 Q120,128 132,145 L125,190 L75,190 Z" fill="${p.primary}" stroke="${p.accent}" stroke-width="1.5"/>
                <!-- Gold clasp -->
                <circle cx="100" cy="132" r="6" fill="${p.accent}" stroke="${p.shadow}" stroke-width="1.5"/>
                <circle cx="100" cy="132" r="2.5" fill="${p.glow}"/>
            `;
        } else if (traitKey === 'creative') {
            // Artist smock with painter's bandana/bow
            outfitSVG = `
                <!-- Artist Smock -->
                <path d="M62,150 Q55,126 100,122 Q145,126 138,150 Q125,190 100,192 Q75,190 62,150 Z" fill="${p.skin}" stroke="${p.shadow}" stroke-width="3"/>
                <!-- Paint splashes -->
                <circle cx="82" cy="148" r="4.5" fill="${p.primary}"/>
                <circle cx="118" cy="155" r="5" fill="${p.accent}"/>
                <circle cx="95" cy="168" r="3.5" fill="${p.blush}"/>
                <!-- Necktie / Bow -->
                <polygon points="90,126 100,132 110,126 100,136" fill="${p.primary}"/>
                <circle cx="100" cy="130" r="3" fill="${p.accent}"/>
            `;
        } else {
            // Scholar vest with buttons & shirt collar
            outfitSVG = `
                <!-- Scholar Vest & Crisp Shirt -->
                <path d="M62,150 Q55,126 100,122 Q145,126 138,150 Q125,190 100,192 Q75,190 62,150 Z" fill="${p.primary}" stroke="${p.shadow}" stroke-width="3"/>
                <!-- Inner shirt -->
                <polygon points="100,122 88,140 112,140" fill="${p.skin}"/>
                <circle cx="100" cy="148" r="2.5" fill="${p.accent}"/>
                <circle cx="100" cy="158" r="2.5" fill="${p.accent}"/>
                <circle cx="100" cy="168" r="2.5" fill="${p.accent}"/>
                <!-- Satchel Strap -->
                <line x1="72" y1="126" x2="128" y2="182" stroke="${p.shadow}" stroke-width="5"/>
                <line x1="72" y1="126" x2="128" y2="182" stroke="${p.accent}" stroke-width="2"/>
            `;
        }

        // 6. Cute Chubby Face Base
        const headBaseSVG = `
            <!-- Chubby Soft Cheeks Face -->
            <ellipse cx="100" cy="95" rx="38" ry="34" fill="${p.skin}" stroke="${p.shadow}" stroke-width="3"/>
            <!-- Watercolor Blush Cheeks -->
            <ellipse cx="76" cy="103" rx="8" ry="5" fill="${p.blush}" opacity="0.55"/>
            <ellipse cx="124" cy="103" rx="8" ry="5" fill="${p.blush}" opacity="0.55"/>
            <!-- Tiny Boop Nose -->
            <ellipse cx="100" cy="98" rx="3.5" ry="2.5" fill="${p.shadow}"/>
        `;

        // 7. Hair / Head Tuft (Fluffy & Expressive)
        let hairSVG = '';
        if (traitKey === 'creative') {
            // Beret & curly fringe
            hairSVG = `
                <!-- Chic Artist Beret -->
                <path d="M58,74 Q60,42 100,42 Q140,42 142,74 Z" fill="${p.primary}" stroke="${p.shadow}" stroke-width="3"/>
                <circle cx="100" cy="42" r="3.5" fill="${p.accent}"/>
                <path d="M78,74 Q88,85 100,74 Q112,85 122,74" stroke="${p.shadow}" stroke-width="2.5" fill="none"/>
            `;
        } else if (traitKey === 'adventurous') {
            // Traveler hat with a jaunty feather
            hairSVG = `
                <!-- Traveler Fedora & Feather -->
                <ellipse cx="100" cy="68" rx="46" ry="10" fill="${p.shadow}"/>
                <path d="M70,68 Q72,42 100,44 Q128,42 130,68 Z" fill="${p.secondary}" stroke="${p.shadow}" stroke-width="2.5"/>
                <path d="M125,52 Q145,28 140,20 Q130,35 122,46" fill="${p.accent}" stroke="${p.shadow}" stroke-width="1.5"/>
            `;
        } else {
            // Fluffy hair tuft with floral clip or bangs
            hairSVG = `
                <path d="M75,68 Q100,52 125,68 Q115,58 100,58 Q85,58 75,68 Z" fill="${p.primary}"/>
                <path d="M88,62 Q100,46 112,62 Q105,52 100,52 Q95,52 88,62 Z" fill="${p.accent}"/>
                ${traitKey === 'calm' ? `<circle cx="120" cy="70" r="5" fill="#FFFFFF" stroke="${p.shadow}" stroke-width="1"/><circle cx="120" cy="70" r="2" fill="${p.accent}"/>` : ''}
            `;
        }

        // 8. Big Expressive Anime/Storybook Eyes
        let eyesSVG = '';
        if (isWinking) {
            eyesSVG = `
                <!-- Left Eye: Big Open Sparkle Eye -->
                <ellipse cx="80" cy="90" rx="9" ry="11" fill="${p.shadow}"/>
                <ellipse cx="80" cy="91" rx="7.5" ry="9" fill="url(#${eyeGradId})"/>
                <circle cx="80" cy="92" r="5" fill="${p.shadow}"/>
                <!-- Gleams -->
                <circle cx="77" cy="86" r="3.2" fill="#FFFFFF"/>
                <circle cx="83" cy="95" r="1.6" fill="#FFFFFF"/>
                <!-- Upper Eyelash -->
                <path d="M70,82 Q80,78 90,82" stroke="${p.shadow}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <!-- Right Eye: Cheerful Wink -->
                <path d="M110,91 Q120,83 130,91" stroke="${p.shadow}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                <path d="M112,94 Q120,87 128,94" stroke="${p.blush}" stroke-width="2" stroke-linecap="round" fill="none"/>
            `;
        } else if (isDreamy) {
            eyesSVG = `
                <!-- Left Eye: Large Gentle Soulful Eye -->
                <ellipse cx="80" cy="90" rx="9" ry="11" fill="${p.shadow}"/>
                <ellipse cx="80" cy="91" rx="7.5" ry="9" fill="url(#${eyeGradId})"/>
                <circle cx="80" cy="92" r="5" fill="${p.shadow}"/>
                <circle cx="77" cy="86" r="3.4" fill="#FFFFFF"/>
                <circle cx="83" cy="95" r="1.8" fill="#FFFFFF"/>
                <text x="80" y="93" font-size="6" fill="#FFFFFF" opacity="0.8">✦</text>
                <path d="M70,81 Q80,77 90,82" stroke="${p.shadow}" stroke-width="2.5" stroke-linecap="round" fill="none"/>

                <!-- Right Eye: Matching Dreamy Eye -->
                <ellipse cx="120" cy="90" rx="9" ry="11" fill="${p.shadow}"/>
                <ellipse cx="120" cy="91" rx="7.5" ry="9" fill="url(#${eyeGradId})"/>
                <circle cx="120" cy="92" r="5" fill="${p.shadow}"/>
                <circle cx="117" cy="86" r="3.4" fill="#FFFFFF"/>
                <circle cx="123" cy="95" r="1.8" fill="#FFFFFF"/>
                <text x="120" y="93" font-size="6" fill="#FFFFFF" opacity="0.8">✦</text>
                <path d="M110,82 Q120,77 130,81" stroke="${p.shadow}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            `;
        } else {
            eyesSVG = `
                <!-- Left Eye: Intelligent Sharp Inquisitive Eye -->
                <ellipse cx="80" cy="90" rx="8.5" ry="10.5" fill="${p.shadow}"/>
                <ellipse cx="80" cy="91" rx="7" ry="8.5" fill="url(#${eyeGradId})"/>
                <circle cx="80" cy="92" r="4.5" fill="${p.shadow}"/>
                <circle cx="78" cy="87" r="3" fill="#FFFFFF"/>
                <circle cx="83" cy="94" r="1.4" fill="#FFFFFF"/>
                <path d="M71,81 Q80,78 89,83" stroke="${p.shadow}" stroke-width="2.5" stroke-linecap="round" fill="none"/>

                <!-- Right Eye -->
                <ellipse cx="120" cy="90" rx="8.5" ry="10.5" fill="${p.shadow}"/>
                <ellipse cx="120" cy="91" rx="7" ry="8.5" fill="url(#${eyeGradId})"/>
                <circle cx="120" cy="92" r="4.5" fill="${p.shadow}"/>
                <circle cx="118" cy="87" r="3" fill="#FFFFFF"/>
                <circle cx="123" cy="94" r="1.4" fill="#FFFFFF"/>
                <path d="M111,83 Q120,78 129,81" stroke="${p.shadow}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            `;
        }

        // 9. Mouth (Cute & Expressive)
        let mouthSVG = '';
        if (traitKey === 'playful') {
            // Playful smile with tiny pink tongue
            mouthSVG = `
                <path d="M93,105 Q100,115 107,105" stroke="${p.shadow}" stroke-width="2" fill="none"/>
                <path d="M96,108 Q100,114 104,108 Z" fill="${p.blush}"/>
            `;
        } else if (traitKey === 'calm') {
            // Serene gentle smile
            mouthSVG = `
                <path d="M94,105 Q100,109 106,105" stroke="${p.shadow}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            `;
        } else if (traitKey === 'mysterious') {
            // Subtle sly half-smile
            mouthSVG = `
                <path d="M95,106 Q103,106 107,103" stroke="${p.shadow}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            `;
        } else {
            // Cute cat-like happy mouth ':3'
            mouthSVG = `
                <path d="M94,104 Q97,107 100,104 Q103,107 106,104" stroke="${p.shadow}" stroke-width="2" fill="none" stroke-linecap="round"/>
            `;
        }

        // 10. Distinctive Personality Props & Hands
        let propsSVG = '';
        if (isScholar) {
            // Spectacles on left eye + holding a miniature book
            propsSVG = `
                <!-- Brass Monocle / Spectacles -->
                <circle cx="80" cy="90" r="13" fill="none" stroke="${p.accent}" stroke-width="2"/>
                <line x1="67" y1="90" x2="60" y2="85" stroke="${p.accent}" stroke-width="1.5"/>
                <!-- Miniature Leather Grimoire in Paws -->
                <g class="held-book" transform="translate(85, 142) rotate(8)">
                    <rect x="0" y="0" width="30" height="24" rx="3" fill="${p.shadow}"/>
                    <rect x="3" y="2" width="24" height="20" rx="2" fill="${p.accent}"/>
                    <line x1="8" y1="2" x2="8" y2="22" stroke="${p.shadow}" stroke-width="2"/>
                    <text x="14" y="15" font-size="9" fill="#FFFFFF">✦</text>
                </g>
                <!-- Chubby Paws -->
                <circle cx="86" cy="154" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
                <circle cx="116" cy="154" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
            `;
        } else if (traitKey === 'calm') {
            // Holding a warm steaming tea mug with both paws
            propsSVG = `
                <!-- Cozy Steaming Ceramic Mug -->
                <g class="held-mug" transform="translate(86, 140)">
                    <rect x="0" y="6" width="28" height="24" rx="4" fill="#FFFFFF" stroke="${p.shadow}" stroke-width="2"/>
                    <rect x="3" y="9" width="22" height="6" rx="2" fill="${p.accent}"/>
                    <!-- Handle -->
                    <path d="M28,10 Q36,14 28,24" fill="none" stroke="${p.shadow}" stroke-width="2.5"/>
                    <!-- Steam Swirls -->
                    <path d="M8,2 Q10,-6 14,-2 Q18,2 20,-6" stroke="${p.glow}" stroke-width="2" fill="none" opacity="0.8"/>
                </g>
                <!-- Paws Wrapped Around Mug -->
                <circle cx="84" cy="152" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
                <circle cx="116" cy="152" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
            `;
        } else if (traitKey === 'creative') {
            // Holding a luminous magic quill
            propsSVG = `
                <!-- Magic Glowing Feather Quill -->
                <g class="magic-quill" transform="translate(112, 122) rotate(-25)">
                    <path d="M0,0 Q12,-25 24,-20 Q20,-5 0,15 Z" fill="${p.magicColor}" stroke="${p.shadow}" stroke-width="1.5"/>
                    <line x1="0" y1="15" x2="20" y2="-18" stroke="#FFFFFF" stroke-width="1.5"/>
                    <circle cx="2" cy="14" r="4" fill="${p.accent}"/>
                    <!-- Sparkle burst from tip -->
                    <text x="-12" y="24" font-size="14" fill="${p.glow}">✨</text>
                </g>
                <circle cx="82" cy="155" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
                <circle cx="115" cy="142" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
            `;
        } else if (traitKey === 'playful') {
            // One paw waving cheerfully
            propsSVG = `
                <!-- Cheerful Waving Paw -->
                <path d="M128,140 Q145,120 148,105" stroke="${p.primary}" stroke-width="10" stroke-linecap="round" fill="none"/>
                <circle cx="148" cy="104" r="7" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
                <circle cx="72" cy="155" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
                <text x="156" y="100" font-size="14" fill="${p.glow}">✨</text>
            `;
        } else if (traitKey === 'adventurous') {
            // Hand on hip + compass hanging
            propsSVG = `
                <!-- Confident Explorer Stance -->
                <path d="M68,142 Q50,150 56,165" stroke="${p.primary}" stroke-width="9" stroke-linecap="round" fill="none"/>
                <path d="M132,142 Q150,150 144,165" stroke="${p.primary}" stroke-width="9" stroke-linecap="round" fill="none"/>
                <circle cx="56" cy="165" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
                <circle cx="144" cy="165" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
            `;
        } else {
            // Mysterious orb floating between hands
            propsSVG = `
                <!-- Floating Glowing Orb -->
                <circle cx="100" cy="152" r="11" fill="${p.magicColor}" opacity="0.75"/>
                <circle cx="100" cy="152" r="6" fill="#FFFFFF"/>
                <text x="94" y="156" font-size="12" fill="${p.glow}">✦</text>
                <!-- Hands cupping the orb -->
                <circle cx="86" cy="154" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
                <circle cx="114" cy="154" r="6" fill="${p.skin}" stroke="${p.shadow}" stroke-width="2"/>
            `;
        }

        // Combine into full, beautiful, responsive SVG
        return `
            <svg viewBox="0 0 200 200" width="200" height="200" class="creature-svg twin-visual-artwork" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%; display:block;">
                <defs>
                    <radialGradient id="${bgId}" cx="50%" cy="45%" r="65%">
                        <stop offset="0%" stop-color="${p.bgGrad1}"/>
                        <stop offset="100%" stop-color="${p.bgGrad2}"/>
                    </radialGradient>
                    <linearGradient id="${eyeGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="${p.accent}"/>
                        <stop offset="100%" stop-color="${p.primary}"/>
                    </linearGradient>
                </defs>

                <!-- Background Landscape Circle / Arch -->
                <rect width="200" height="200" fill="url(#${bgId})"/>
                ${sceneDecor}

                <!-- Wings (behind body) -->
                ${wingsSVG}

                <!-- Tail (behind body) -->
                ${tailSVG}

                <!-- Ears (behind head) -->
                ${earsSVG}

                <!-- Outfit & Torso -->
                ${outfitSVG}

                <!-- Chubby Face -->
                ${headBaseSVG}

                <!-- Hair / Head Decor -->
                ${hairSVG}

                <!-- Big Expressive Eyes -->
                ${eyesSVG}

                <!-- Cute Mouth -->
                ${mouthSVG}

                <!-- Held Props & Hands -->
                ${propsSVG}
            </svg>
        `;
    }

    // =========================================================================
    // PUBLIC GENERATE API
    // =========================================================================
    function generate(tally, biometricSeed) {
        const profile = analyzePersonality(tally, biometricSeed);
        const svg = renderTwinSVG(profile);

        return {
            id: profile.species.id,
            name: profile.name,
            latin: `${profile.species.name} · ${profile.traitKey.toUpperCase()}`,
            category: profile.archetype.label,
            quote: profile.archetype.quote,
            roast: profile.archetype.roast,
            creatureLabel: profile.species.name,
            trait: profile.traitKey,
            archetypeLabel: profile.archetype.label,
            description: profile.archetype.roast,
            palette: profile.palette.name,
            outfit: profile.archetype.clothing,
            environment: profile.archetype.habitat,
            habitat: profile.archetype.habitat,
            diet: profile.archetype.diet,
            pose: profile.archetype.pose,
            stats: profile.stats,
            svg: svg
        };
    }

    return { generate };
})();
