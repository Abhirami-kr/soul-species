// SoulSpecies Creature Codex
// 15 Hilarious Creature & Object Archetypes with Vintage Journal Colored-Pencil SVG Artworks

const CREATURES_DATABASE = [
    {
        id: 'goose',
        name: 'The Chaos Goose with a Knife',
        latin: 'Honkus Anarchicus',
        tagline: 'Wakes up every day and chooses pure violence. Peace was never an option.',
        category: 'Unhinged Avian Menace',
        quote: '"HONK! Your existence is a personal insult to me."',
        roast: 'You don\'t resolve conflicts; you escalate them until the other person leaves the continent. You will fight a Wi-Fi router if the signal drops.',
        habitat: 'Wherever rules are meant to be broken and sidewalks that need terrorizing.',
        diet: 'Spite, breadcrumbs stolen from small children, and raw audacity.',
        stats: {
            chaos: 100,
            napNeed: 15,
            snackUrgency: 40,
            dramaLevel: 98,
            patience: 0
        },
        badgeColor: '#A86F55',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-goose">
            <!-- Animated Soundwaves / Honk -->
            <path class="honk-wave wave1" d="M165,70 Q180,60 175,45" stroke="#A86F55" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path class="honk-wave wave2" d="M175,80 Q195,70 190,50" stroke="#C88A4C" stroke-width="3" fill="none" stroke-linecap="round"/>
            
            <!-- Goose Body -->
            <path d="M40,140 Q40,110 80,110 Q110,110 130,130 Q150,150 120,170 Q80,180 50,165 Q40,155 40,140 Z" fill="#FDFBF7" stroke="#30251F" stroke-width="4"/>
            <!-- Goose Wing -->
            <path class="goose-wing" d="M60,130 Q90,120 105,145 Q85,160 60,145 Z" fill="#EAD8C5" stroke="#30251F" stroke-width="3"/>
            <!-- Long Angry Neck -->
            <path class="goose-neck" d="M110,120 Q120,60 145,50 Q155,50 150,70 Q135,90 125,125 Z" fill="#FDFBF7" stroke="#30251F" stroke-width="4"/>
            <!-- Head -->
            <circle cx="150" cy="55" r="16" fill="#FDFBF7" stroke="#30251F" stroke-width="4"/>
            <!-- Angry Eye -->
            <circle cx="154" cy="50" r="4" fill="#A86F55"/>
            <circle cx="155" cy="49" r="1.5" fill="#FFFFFF"/>
            <!-- Angry Eyebrow Angle -->
            <line x1="148" y1="44" x2="160" y2="48" stroke="#30251F" stroke-width="3" stroke-linecap="round"/>
            <!-- Beak -->
            <polygon points="164,48 188,58 162,64" fill="#D4A259" stroke="#30251F" stroke-width="3"/>
            
            <!-- The Butter Knife -->
            <g class="held-knife">
                <rect x="170" y="56" width="30" height="7" rx="2" fill="#D8D2C9" stroke="#30251F" stroke-width="2" transform="rotate(15 170 56)"/>
                <rect x="162" y="55" width="10" height="9" rx="2" fill="#30251F" transform="rotate(15 170 56)"/>
                <!-- Knife Glint -->
                <polygon points="195,58 198,54 201,58 198,62" fill="#FFFFFF"/>
            </g>
            
            <!-- Amber Webbed Feet -->
            <path d="M70,175 L65,192 L80,192" stroke="#C88A4C" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M100,173 L105,192 L120,192" stroke="#C88A4C" stroke-width="4" stroke-linecap="round" fill="none"/>
        </svg>`
    },
    {
        id: 'sloth',
        name: 'The Sloth Bear',
        latin: 'Ursus Snoozus',
        tagline: 'Will sleep for 14 hours and still wake up needing a 2-hour recovery nap.',
        category: 'Extreme Energy Conservationist',
        quote: '"I am not ignoring you. I am simply buffering at 0.5% speed."',
        roast: 'You consider sitting upright an athletic achievement. If an emergency happens, you will politely ask the emergency to reschedule for Tuesday after lunch.',
        habitat: 'Buried deep beneath 4 plush blankets and a memory foam pillow.',
        diet: 'Delivery food ordered from bed, snacks that don\'t require chewing, and chamomile tea.',
        stats: {
            chaos: 5,
            napNeed: 100,
            snackUrgency: 75,
            dramaLevel: 10,
            patience: 95
        },
        badgeColor: '#6B4938',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-sloth">
            <!-- Cozy Tree Branch -->
            <path d="M10,105 Q100,120 190,95" stroke="#795548" stroke-width="14" stroke-linecap="round"/>
            <path d="M40,110 Q50,135 60,130" stroke="#8D6E63" stroke-width="6" stroke-linecap="round"/>
            
            <!-- Hanging Sloth Body -->
            <path class="sloth-body" d="M60,108 Q60,165 110,165 Q150,165 145,108 Z" fill="#8D6E63" stroke="#3E2723" stroke-width="4"/>
            <!-- Hanging Arms hooked over branch -->
            <path d="M70,110 Q65,85 75,95 Q85,105 80,118" stroke="#6D4C41" stroke-width="10" stroke-linecap="round"/>
            <path d="M130,108 Q135,85 125,95 Q115,105 120,118" stroke="#6D4C41" stroke-width="10" stroke-linecap="round"/>
            <!-- Sloth Face Mask -->
            <ellipse cx="105" cy="135" rx="25" ry="20" fill="#EAD8C5"/>
            <ellipse cx="94" cy="133" rx="7" ry="5" fill="#6D4C41"/>
            <ellipse cx="116" cy="133" rx="7" ry="5" fill="#6D4C41"/>
            <!-- Sleeping Curved Eyes -->
            <path d="M90,133 Q94,138 98,133" stroke="#30251F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M112,133 Q116,138 120,133" stroke="#30251F" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <!-- Cute Smiling Nose & Mouth -->
            <ellipse cx="105" cy="140" rx="3.5" ry="2.5" fill="#30251F"/>
            <path d="M101,144 Q105,148 109,144" stroke="#30251F" stroke-width="2" fill="none"/>
            
            <!-- Nightcap Hat with Pom-pom -->
            <path d="M85,118 Q105,95 130,115" fill="#825B6C" stroke="#4A3B32" stroke-width="2"/>
            <circle class="pom-pom" cx="132" cy="116" r="6" fill="#F5EBDD"/>
            
            <!-- Floating Zzz Doodles -->
            <g class="zzz-doodles">
                <text x="145" y="75" font-family="'Caveat', cursive, sans-serif" font-weight="bold" font-size="22" fill="#B58B68">Z</text>
                <text x="162" y="55" font-family="'Caveat', cursive, sans-serif" font-weight="bold" font-size="17" fill="#A86F55">z</text>
                <text x="174" y="40" font-family="'Caveat', cursive, sans-serif" font-weight="bold" font-size="13" fill="#C48D80">z</text>
            </g>
        </svg>`
    },
    {
        id: 'espresso',
        name: 'The Screaming Espresso Machine',
        latin: 'Espresso Hystericus',
        tagline: 'Runs on 100% pure panic and caffeine. Vibrates under slight emotional pressure.',
        category: 'High-Strung Kitchen Appliance',
        quote: '"I AM COMPLETELY RELAXED! WHY ARE YOU ASKING ME IF I AM RELAXED?!"',
        roast: 'You have 18 unread to-do lists and you type an average of 400 words per minute while your eyelid twitches in Morse code.',
        habitat: 'Hovering anxiously over a desk with 3 half-empty mugs.',
        diet: 'Triple shots of dark roast, sugar rushes, and pure existential dread.',
        stats: {
            chaos: 78,
            napNeed: 0,
            snackUrgency: 35,
            dramaLevel: 92,
            patience: 10
        },
        badgeColor: '#A84F45',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-espresso">
            <!-- Steam Puffs -->
            <g class="steam-puffs">
                <circle cx="85" cy="40" r="8" fill="#EAD8C5" opacity="0.8"/>
                <circle cx="95" cy="25" r="11" fill="#EAD8C5" opacity="0.6"/>
                <circle cx="120" cy="35" r="9" fill="#EAD8C5" opacity="0.7"/>
            </g>
            
            <!-- Machine Body -->
            <rect x="55" y="65" width="90" height="95" rx="14" fill="#A84F45" stroke="#30251F" stroke-width="4"/>
            <rect x="65" y="75" width="70" height="35" rx="8" fill="#30251F"/>
            
            <!-- Pressure Gauge (Twitching Needle) -->
            <circle cx="100" cy="92" r="14" fill="#F5EBDD" stroke="#A84F45" stroke-width="2"/>
            <line class="gauge-needle" x1="100" y1="92" x2="108" y2="84" stroke="#A84F45" stroke-width="2.5" stroke-linecap="round"/>
            
            <!-- Shaking Cartoon Eyes -->
            <g class="freaked-eyes">
                <circle cx="82" cy="125" r="9" fill="#FFFFFF" stroke="#30251F" stroke-width="2.5"/>
                <circle cx="84" cy="125" r="4" fill="#30251F"/>
                <circle cx="118" cy="125" r="9" fill="#FFFFFF" stroke="#30251F" stroke-width="2.5"/>
                <circle cx="116" cy="125" r="4" fill="#30251F"/>
            </g>
            <!-- Wobbly Screaming Mouth -->
            <path class="screaming-mouth" d="M90,145 Q100,155 110,145 Z" fill="#30251F" stroke="#30251F" stroke-width="2"/>
            
            <!-- Portafilter / Spout dripping espresso -->
            <rect x="88" y="160" width="24" height="8" rx="2" fill="#685950"/>
            <circle class="coffee-drip" cx="100" cy="176" r="3.5" fill="#30251F"/>
            
            <!-- Espresso Cup below -->
            <path d="M88,180 L112,180 L108,193 L92,193 Z" fill="#F5EBDD" stroke="#30251F" stroke-width="2"/>
        </svg>`
    },
    {
        id: 'capybara',
        name: 'The Zen Capybara',
        latin: 'Hydrochoerus Chillax',
        tagline: 'Zero thoughts, zero stress. Currently chilling in a hot spring while the world collapses.',
        category: 'Unbothered Zen Master',
        quote: '"It is what it is. And even if it isn\'t, it still is."',
        roast: 'Nothing bothers you. You could be in the middle of a category 5 hurricane and your only thought would be whether the water temperature is refreshing.',
        habitat: 'Soaking in an onsen with an orange balanced gracefully on your head.',
        diet: 'Watermelon slices, fresh greens, and unconditional inner peace.',
        stats: {
            chaos: 2,
            napNeed: 80,
            snackUrgency: 50,
            dramaLevel: 0,
            patience: 100
        },
        badgeColor: '#7B8573',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-capybara">
            <!-- Hot Spring Water Ripple -->
            <ellipse cx="100" cy="165" rx="85" ry="25" fill="#8FA3A6" opacity="0.6"/>
            <path class="water-wave" d="M20,165 Q60,175 100,165 Q140,155 180,165" stroke="#FFFFFF" stroke-width="2.5" fill="none" opacity="0.8"/>
            
            <!-- Capybara Body submerged -->
            <path d="M50,165 Q45,115 100,115 Q155,115 150,165 Z" fill="#9E6F4A" stroke="#30251F" stroke-width="4"/>
            <!-- Capybara Snout -->
            <rect x="68" y="90" width="64" height="48" rx="16" fill="#9E6F4A" stroke="#30251F" stroke-width="4"/>
            <!-- Cute Nose -->
            <path d="M90,105 Q100,112 110,105" stroke="#30251F" stroke-width="3.5" fill="none" stroke-linecap="round"/>
            <circle cx="95" cy="100" r="2.5" fill="#30251F"/>
            <circle cx="105" cy="100" r="2.5" fill="#30251F"/>
            <!-- Tiny Chill Ears -->
            <circle cx="65" cy="90" r="8" fill="#6B4938" stroke="#30251F" stroke-width="3"/>
            <circle cx="135" cy="90" r="8" fill="#6B4938" stroke="#30251F" stroke-width="3"/>
            
            <!-- Dark Vintage Sunglasses -->
            <g class="cool-shades">
                <rect x="70" y="86" width="26" height="15" rx="4" fill="#30251F"/>
                <rect x="104" y="86" width="26" height="15" rx="4" fill="#30251F"/>
                <line x1="96" y1="92" x2="104" y2="92" stroke="#30251F" stroke-width="3"/>
                <!-- Sunglasses Glare -->
                <line x1="73" y1="90" x2="82" y2="98" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6"/>
                <line x1="107" y1="90" x2="116" y2="98" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6"/>
            </g>
            
            <!-- Floating Yuzu Citrus on Head -->
            <g class="floating-yuzu">
                <circle cx="100" cy="72" r="12" fill="#D4A259" stroke="#30251F" stroke-width="2.5"/>
                <!-- Green Leaf -->
                <path d="M100,60 Q106,52 112,56 Q106,62 100,60 Z" fill="#5D7860" stroke="#30251F" stroke-width="1.5"/>
            </g>
        </svg>`
    },
    {
        id: 'raccoon',
        name: 'The 3 AM Snack Raccoon',
        latin: 'Procyon Chaos',
        tagline: 'Wakes up at midnight hungry for snacks, drama, and shiny stolen treasures.',
        category: 'Nocturnal Kitchen Bandit',
        quote: '"If it wasn\'t meant to be eaten at 3 AM, why does the fridge have a light?"',
        roast: 'Your peak productivity hours are between 1:00 AM and 4:15 AM. You can open a bag of Doritos without making a single sound in pitch darkness.',
        habitat: 'Lurking in front of the illuminated refrigerator door with both hands full.',
        diet: 'String cheese eaten like a banana, pizza rolls, and forbidden leftover cupcakes.',
        stats: {
            chaos: 90,
            napNeed: 60,
            snackUrgency: 100,
            dramaLevel: 65,
            patience: 30
        },
        badgeColor: '#685950',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-raccoon">
            <!-- Sneaky Shadow / Aura -->
            <ellipse cx="100" cy="175" rx="60" ry="14" fill="#30251F" opacity="0.25"/>
            
            <!-- Raccoon Body -->
            <path d="M60,165 Q50,110 100,105 Q150,110 140,165 Z" fill="#7D6E65" stroke="#30251F" stroke-width="4"/>
            <!-- Raccoon Head -->
            <polygon points="55,100 145,100 100,140" fill="#B2A69D" stroke="#30251F" stroke-width="4"/>
            <!-- Pointy Ears with white fluff -->
            <polygon points="58,95 72,60 85,90" fill="#7D6E65" stroke="#30251F" stroke-width="3"/>
            <polygon points="65,90 73,70 80,88" fill="#F5EBDD"/>
            <polygon points="142,95 128,60 115,90" fill="#7D6E65" stroke="#30251F" stroke-width="3"/>
            <polygon points="135,90 127,70 120,88" fill="#F5EBDD"/>
            
            <!-- Dark Bandit Eye Mask -->
            <path d="M62,102 Q100,115 138,102 Q125,122 100,118 Q75,122 62,102 Z" fill="#30251F"/>
            <!-- Glowing Amber Sneaky Eyes -->
            <ellipse cx="82" cy="110" rx="6" ry="7" fill="#E5B84A"/>
            <circle cx="82" cy="110" r="3" fill="#30251F"/>
            <ellipse cx="118" cy="110" rx="6" ry="7" fill="#E5B84A"/>
            <circle cx="118" cy="110" r="3" fill="#30251F"/>
            
            <!-- Cute Black Nose -->
            <polygon points="96,134 104,134 100,140" fill="#30251F"/>
            
            <!-- Paws holding a slice of Pizza -->
            <g class="snack-holding">
                <!-- Pizza Slice -->
                <polygon points="90,150 120,150 105,180" fill="#D4A259" stroke="#30251F" stroke-width="2"/>
                <circle cx="102" cy="158" r="3" fill="#A84F45"/>
                <circle cx="108" cy="166" r="2.5" fill="#A84F45"/>
                <!-- Melting Cheese drips -->
                <path d="M96,152 Q100,162 104,152" fill="#ECC463"/>
                <!-- Paws -->
                <ellipse cx="88" cy="155" rx="7" ry="5" fill="#30251F"/>
                <ellipse cx="122" cy="155" rx="7" ry="5" fill="#30251F"/>
            </g>
            
            <!-- Striped Ringtail peeking out -->
            <path class="raccoon-tail" d="M135,145 Q175,130 165,170 Q145,180 135,160" fill="none" stroke="#4A3B32" stroke-width="12" stroke-linecap="round"/>
        </svg>`
    },
    {
        id: 'retriever',
        name: 'The Overly Excited Golden Retriever',
        latin: 'Canis Enthusiasticus',
        tagline: 'Loves everyone and everything. Gets aggressively hyped when a plastic bag flies by.',
        category: 'Hyper-Supportive Bestie',
        quote: '"OMG HI! YOU SAT DOWN? AMAZING! HIGH FIVE! I LOVE YOU SO MUCH!"',
        roast: 'You have zero filter on your enthusiasm. You applaud when the airplane lands, and you think the delivery driver is your soulmate.',
        habitat: 'At your feet, bouncing on all four paws, smiling with tongue out.',
        diet: 'Whatever you\'re eating, plus grass, tennis ball fuzz, and unconditional love.',
        stats: {
            chaos: 45,
            napNeed: 40,
            snackUrgency: 90,
            dramaLevel: 25,
            patience: 60
        },
        badgeColor: '#C88A4C',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-dog">
            <!-- Wagging Tail behind -->
            <path class="dog-tail" d="M135,140 Q175,120 160,95" stroke="#DDA758" stroke-width="14" stroke-linecap="round" fill="none"/>
            
            <!-- Golden Body -->
            <path d="M60,165 Q55,120 100,120 Q145,120 140,165 Z" fill="#DDA758" stroke="#30251F" stroke-width="4"/>
            <!-- Floppy Golden Ears -->
            <path class="dog-ear-left" d="M65,70 Q45,95 55,125 Q70,120 75,90 Z" fill="#BA7B3A" stroke="#30251F" stroke-width="3"/>
            <path class="dog-ear-right" d="M135,70 Q155,95 145,125 Q130,120 125,90 Z" fill="#BA7B3A" stroke="#30251F" stroke-width="3"/>
            
            <!-- Dog Head -->
            <circle cx="100" cy="85" r="35" fill="#DDA758" stroke="#30251F" stroke-width="4"/>
            <!-- Muzzle -->
            <ellipse cx="100" cy="100" rx="20" ry="16" fill="#F5EBDD"/>
            <!-- Big Black Boop Snoot -->
            <ellipse cx="100" cy="92" rx="8" ry="6" fill="#30251F"/>
            <circle cx="98" cy="90" r="2" fill="#FFFFFF"/>
            
            <!-- Hipster Glasses -->
            <g class="dog-glasses">
                <circle cx="86" cy="78" r="13" fill="none" stroke="#30251F" stroke-width="3"/>
                <circle cx="114" cy="78" r="13" fill="none" stroke="#30251F" stroke-width="3"/>
                <line x1="99" y1="78" x2="101" y2="78" stroke="#30251F" stroke-width="3"/>
                <!-- Happy Sparkle Eyes behind glasses -->
                <circle cx="86" cy="78" r="4" fill="#30251F"/>
                <circle cx="87" cy="76" r="1.5" fill="#FFFFFF"/>
                <circle cx="114" cy="78" r="4" fill="#30251F"/>
                <circle cx="115" cy="76" r="1.5" fill="#FFFFFF"/>
            </g>
            
            <!-- Big Happy Tongue Panting -->
            <path class="dog-tongue" d="M96,108 Q100,126 104,108 Z" fill="#C48D80" stroke="#A86F55" stroke-width="2"/>
        </svg>`
    },
    {
        id: 'cat',
        name: 'The Judging Cat',
        latin: 'Felis Superior',
        tagline: 'Knocks your glass off the table while staring directly into your eyes with pure disdain.',
        category: 'Aristocratic Ruler of Mortals',
        quote: '"I asked for affection, but who gave you permission to touch me?"',
        roast: 'You believe you are the smartest organism in the room. You leave people on read for 4 days just to maintain psychological supremacy.',
        habitat: 'Perched on the highest cabinet, looking down upon your peasant lifestyle.',
        diet: 'Gourmet salmon fillets served in fine porcelain, followed by judging glances.',
        stats: {
            chaos: 70,
            napNeed: 85,
            snackUrgency: 60,
            dramaLevel: 80,
            patience: 15
        },
        badgeColor: '#825B6C',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-cat">
            <!-- Glass of water on ledge about to fall -->
            <g class="falling-glass">
                <rect x="155" y="140" width="18" height="24" rx="2" fill="#8FA3A6" opacity="0.6" stroke="#30251F" stroke-width="2"/>
                <path d="M152,145 Q165,135 175,145" stroke="#8FA3A6" stroke-width="2" fill="none"/>
            </g>
            
            <!-- Sleek Ink Cat Body -->
            <path d="M60,165 Q50,115 90,110 Q130,115 125,165 Z" fill="#3A353B" stroke="#30251F" stroke-width="4"/>
            <!-- Swishing Sassy Tail -->
            <path class="cat-tail" d="M55,150 Q20,130 35,100" stroke="#3A353B" stroke-width="8" stroke-linecap="round" fill="none"/>
            
            <!-- Cat Head -->
            <circle cx="95" cy="85" r="30" fill="#4A444C" stroke="#30251F" stroke-width="4"/>
            <!-- Pointy Aristocratic Ears -->
            <polygon points="70,70 65,35 90,62" fill="#3A353B" stroke="#30251F" stroke-width="3"/>
            <polygon points="72,65 70,45 84,60" fill="#C48D80"/>
            <polygon points="120,70 125,35 100,62" fill="#3A353B" stroke="#30251F" stroke-width="3"/>
            <polygon points="118,65 120,45 106,60" fill="#C48D80"/>
            
            <!-- Tiny Golden Tiara -->
            <polygon points="85,55 90,45 95,52 100,43 105,52 110,45 115,55" fill="#D4A259" stroke="#30251F" stroke-width="1.5"/>
            
            <!-- Narrowed Sage Judging Eyes -->
            <path d="M78,82 Q86,76 92,84" stroke="#7B8573" stroke-width="4" fill="none" stroke-linecap="round"/>
            <circle cx="86" cy="81" r="2.5" fill="#30251F"/>
            <path d="M102,84 Q108,76 116,82" stroke="#7B8573" stroke-width="4" fill="none" stroke-linecap="round"/>
            <circle cx="108" cy="81" r="2.5" fill="#30251F"/>
            
            <!-- Paws batting the glass -->
            <circle class="batting-paw" cx="145" cy="142" r="9" fill="#F5EBDD" stroke="#30251F" stroke-width="2"/>
        </svg>`
    },
    {
        id: 'plant',
        name: 'The Dramatic Houseplant',
        latin: 'Ficus Melodramaticus',
        tagline: 'Gets watered 5 minutes late -> drops 8 leaves and writes its last will and testament.',
        category: 'High-Maintenance Flora',
        quote: '"I am wilting because you looked at me with negative energy."',
        roast: 'You are so emotionally sensitive that a change in ambient lighting causes you to spiral. You need 3 compliments an hour to stay alive.',
        habitat: 'A trendy terracotta pot placed exactly 4.2 inches from indirect sunlight.',
        diet: 'Filtered artisan water, ambient lo-fi jazz music, and constant reassurance.',
        stats: {
            chaos: 30,
            napNeed: 70,
            snackUrgency: 20,
            dramaLevel: 100,
            patience: 5
        },
        badgeColor: '#5B7358',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-plant">
            <!-- Terracotta Pot -->
            <polygon points="65,125 135,125 125,185 75,185" fill="#B56F45" stroke="#30251F" stroke-width="4"/>
            <rect x="60" y="115" width="80" height="14" rx="3" fill="#A86F55" stroke="#30251F" stroke-width="2"/>
            
            <!-- Plant Pot Face with Crying Tears -->
            <circle cx="88" cy="148" r="3" fill="#30251F"/>
            <circle cx="112" cy="148" r="3" fill="#30251F"/>
            <path d="M96,162 Q100,156 104,162" stroke="#30251F" stroke-width="2" fill="none"/>
            <!-- Animated Teardrop -->
            <circle class="tear-drop" cx="87" cy="158" r="2.5" fill="#7CA2B0"/>
            
            <!-- Stems and Big Drooping Leaves -->
            <path d="M100,115 Q100,75 80,60" stroke="#4A6546" stroke-width="5" fill="none"/>
            <path class="plant-leaf leaf-left" d="M80,60 Q50,65 55,95 Q75,90 80,60 Z" fill="#5D7860" stroke="#30251F" stroke-width="3"/>
            
            <path d="M100,115 Q105,70 125,55" stroke="#4A6546" stroke-width="5" fill="none"/>
            <path class="plant-leaf leaf-right" d="M125,55 Q155,60 145,90 Q125,85 125,55 Z" fill="#5D7860" stroke="#30251F" stroke-width="3"/>
            
            <!-- Single Sad Falling Leaf -->
            <path class="falling-leaf" d="M135,110 Q150,120 140,135 Q125,130 135,110 Z" fill="#C88A4C" stroke="#30251F" stroke-width="2"/>
        </svg>`
    },
    {
        id: 'toast',
        name: 'The Warm Buttered Toast',
        latin: 'Panis Butyrum',
        tagline: 'Warm, comforting, loved by everyone, but crumbles under slight emotional pressure.',
        category: 'Edible Emotional Support Object',
        quote: '"I just want everyone to be cozy, safe, and slightly buttery."',
        roast: 'You are the people-pleaser of the century. You apologize to the doorframe when you bump into it, and you can\'t make a decision without group consensus.',
        habitat: 'Under a warm weighted blanket with a steaming mug of tea.',
        diet: 'Cinnamon sugar, strawberry jam, and warm hugs from trusted friends.',
        stats: {
            chaos: 0,
            napNeed: 85,
            snackUrgency: 95,
            dramaLevel: 15,
            patience: 90
        },
        badgeColor: '#B58B68',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-toast">
            <!-- Toast Slice Body -->
            <path d="M60,65 Q60,50 80,50 Q100,45 120,50 Q140,50 140,65 L145,155 Q145,170 130,170 L70,170 Q55,170 55,155 Z" fill="#EAD8C5" stroke="#A06A3B" stroke-width="5"/>
            <!-- Toast Crust Highlight -->
            <path d="M68,75 Q100,60 132,75 L135,155 L65,155 Z" fill="#F5EBDD"/>
            
            <!-- Melting Pat of Butter on Head -->
            <rect class="melting-butter" x="85" y="70" width="30" height="18" rx="5" fill="#ECC463" stroke="#B58B68" stroke-width="2"/>
            <path class="butter-drip" d="M96,88 Q97,105 102,105 Q107,105 106,88 Z" fill="#ECC463"/>
            
            <!-- Kawaii Happy Face -->
            <circle cx="86" cy="115" r="4.5" fill="#30251F"/>
            <circle cx="87" cy="113" r="1.5" fill="#FFFFFF"/>
            <circle cx="114" cy="115" r="4.5" fill="#30251F"/>
            <circle cx="115" cy="113" r="1.5" fill="#FFFFFF"/>
            <!-- Rosy Cheeks -->
            <circle cx="78" cy="122" r="6" fill="#C48D80" opacity="0.6"/>
            <circle cx="122" cy="122" r="6" fill="#C48D80" opacity="0.6"/>
            <!-- Sweet Smile -->
            <path d="M94,124 Q100,132 106,124" stroke="#30251F" stroke-width="3" fill="none" stroke-linecap="round"/>
            
            <!-- Floating Sparkle Hearts -->
            <g class="toast-sparkles">
                <text x="145" y="65" font-size="16" fill="#C48D80">♥</text>
                <text x="45" y="80" font-size="14" fill="#C48D80">✦</text>
            </g>
        </svg>`
    },
    {
        id: 'phone',
        name: 'The Overheated Smartphone',
        latin: 'Batteria Explodus',
        tagline: 'At 3% battery, hot enough to fry an egg, running 47 apps you opened in 2023.',
        category: 'Technological Panic Entity',
        quote: '"STORAGE FULL. PLEASE DELETE YOUR CHERISHED MEMORIES IMMEDIATELY."',
        roast: 'You are juggling 15 different ideas at once and executing none of them. Your internal temperature rises 10 degrees whenever someone asks you a question.',
        habitat: 'Plugged into a loose wall socket that only charges if you hold it in place.',
        diet: 'Electricity, 50 open browser tabs, and constant push notifications.',
        stats: {
            chaos: 82,
            napNeed: 10,
            snackUrgency: 40,
            dramaLevel: 88,
            patience: 12
        },
        badgeColor: '#A84F45',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-phone">
            <!-- Heat Wave Waves -->
            <g class="heat-waves">
                <path d="M50,45 Q55,30 50,20" stroke="#A84F45" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M100,35 Q105,20 100,10" stroke="#A84F45" stroke-width="3" fill="none" stroke-linecap="round"/>
                <path d="M150,45 Q155,30 150,20" stroke="#A84F45" stroke-width="3" fill="none" stroke-linecap="round"/>
            </g>
            
            <!-- Phone Body Glowing Hot -->
            <rect x="60" y="45" width="80" height="135" rx="16" fill="#BA5245" stroke="#30251F" stroke-width="4"/>
            <!-- Phone Screen -->
            <rect x="66" y="55" width="68" height="115" rx="10" fill="#2E2825"/>
            
            <!-- Sweating / Dizzy Face on Screen -->
            <circle cx="85" cy="100" r="8" fill="none" stroke="#F5EBDD" stroke-width="2.5"/>
            <line x1="81" y1="96" x2="89" y2="104" stroke="#F5EBDD" stroke-width="2"/>
            <line x1="89" y1="96" x2="81" y2="104" stroke="#F5EBDD" stroke-width="2"/>
            
            <circle cx="115" cy="100" r="8" fill="none" stroke="#F5EBDD" stroke-width="2.5"/>
            <line x1="111" y1="96" x2="119" y2="104" stroke="#F5EBDD" stroke-width="2"/>
            <line x1="119" y1="96" x2="111" y2="104" stroke="#F5EBDD" stroke-width="2"/>
            
            <!-- Wavy mouth -->
            <path d="M92,120 Q100,126 108,120" stroke="#F5EBDD" stroke-width="2.5" fill="none"/>
            
            <!-- Critical 1% Battery Icon -->
            <rect x="80" y="70" width="36" height="14" rx="3" fill="none" stroke="#C48D80" stroke-width="2"/>
            <rect x="116" y="74" width="3" height="6" rx="1" fill="#C48D80"/>
            <rect class="flashing-battery" x="82" y="72" width="6" height="10" rx="2" fill="#C48D80"/>
            
            <!-- Sweating Drop -->
            <path class="sweat-drop" d="M128,85 Q135,95 128,105 Q120,95 128,85 Z" fill="#7CA2B0"/>
        </svg>`
    },
    {
        id: 'trolley',
        name: 'The Squeaky Supermarket Cart',
        latin: 'Wobblus Trolley',
        tagline: 'One wheel spins uncontrollably and drags you violently into the snack aisle.',
        category: 'Chaotic Metal Apparatus',
        quote: '"SQUEEEAAAK! I don\'t care where you wanted to go, we are buying cookies."',
        roast: 'You lack impulse control. You start with a detailed budget and finish by impulse-buying an inflatable pool and 4 boxes of gourmet cheese at midnight.',
        habitat: 'Rattling down grocery aisles, causing minor traffic jams.',
        diet: 'Oreos, party packs, stickers, and anything on the end-cap discount shelf.',
        stats: {
            chaos: 88,
            napNeed: 20,
            snackUrgency: 95,
            dramaLevel: 60,
            patience: 35
        },
        badgeColor: '#658085',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-trolley">
            <!-- Speed / Squeak Lines -->
            <path d="M20,100 L40,100" stroke="#7CA2B0" stroke-width="3" stroke-linecap="round"/>
            <path d="M25,120 L45,120" stroke="#7CA2B0" stroke-width="3" stroke-linecap="round"/>
            
            <!-- Shopping Cart Basket Wireframe -->
            <path d="M50,70 L150,70 L135,130 L65,130 Z" fill="#EAD8C5" opacity="0.3" stroke="#685950" stroke-width="3"/>
            <!-- Grid Lines inside cart -->
            <line x1="75" y1="70" x2="80" y2="130" stroke="#685950" stroke-width="2"/>
            <line x1="100" y1="70" x2="100" y2="130" stroke="#685950" stroke-width="2"/>
            <line x1="125" y1="70" x2="120" y2="130" stroke="#685950" stroke-width="2"/>
            <line x1="57" y1="90" x2="145" y2="90" stroke="#685950" stroke-width="2"/>
            <line x1="62" y1="110" x2="140" y2="110" stroke="#685950" stroke-width="2"/>
            
            <!-- Snacks piled high in cart -->
            <circle cx="85" cy="60" r="14" fill="#A84F45"/>
            <rect x="95" y="45" width="22" height="25" rx="3" fill="#D4A259" transform="rotate(10 95 45)"/>
            <ellipse cx="125" cy="58" rx="16" ry="10" fill="#5D7860" transform="rotate(-15 125 58)"/>
            
            <!-- Handle -->
            <path d="M50,70 L35,55 L25,55" stroke="#A84F45" stroke-width="5" stroke-linecap="round" fill="none"/>
            
            <!-- Frame and Wheels -->
            <path d="M65,130 L70,165 L130,165 L135,130" stroke="#30251F" stroke-width="4" fill="none"/>
            
            <!-- Normal Wheels -->
            <circle cx="70" cy="175" r="8" fill="#30251F"/>
            <circle cx="70" cy="175" r="3" fill="#FFFFFF"/>
            <circle cx="130" cy="175" r="8" fill="#30251F"/>
            <circle cx="130" cy="175" r="3" fill="#FFFFFF"/>
            
            <!-- Squeaking Spinning Wobble Wheel -->
            <g class="squeak-wheel">
                <circle cx="145" cy="168" r="7" fill="#C88A4C"/>
                <circle cx="145" cy="168" r="2.5" fill="#FFFFFF"/>
                <path d="M152,160 Q160,165 155,175" stroke="#A86F55" stroke-width="2" fill="none"/>
            </g>
        </svg>`
    },
    {
        id: 'hedgehog',
        name: 'The Introverted Hedgehog',
        latin: 'Erinaceus Antisocialis',
        tagline: 'Cute from a distance, but rolls into a spiky ball if you try to make small talk.',
        category: 'Selective Socialite',
        quote: '"I like you, I just like you much better when you are at your house and I am at mine."',
        roast: 'You get an instant spike of adrenaline when the doorbell rings unexpectedly. Your favorite party activity is finding the host\'s pet and never speaking to a human again.',
        habitat: 'A cozy corner nook behind two locked doors with noise-canceling headphones.',
        diet: 'Single-serving snacks, comforting tea, and solitary peace.',
        stats: {
            chaos: 8,
            napNeed: 75,
            snackUrgency: 65,
            dramaLevel: 5,
            patience: 80
        },
        badgeColor: '#7D6E65',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-hedgehog">
            <!-- Blanket Fold -->
            <path d="M40,165 Q100,140 160,165" stroke="#B58B68" stroke-width="8" stroke-linecap="round" fill="none"/>
            
            <!-- Hedgehog Body (Spikes Array) -->
            <g class="hedgehog-spikes">
                <polygon points="100,60 90,40 110,40" fill="#685950"/>
                <polygon points="75,70 60,50 80,55" fill="#685950"/>
                <polygon points="125,70 140,50 120,55" fill="#685950"/>
                <polygon points="55,90 35,80 50,100" fill="#685950"/>
                <polygon points="145,90 165,80 150,100" fill="#685950"/>
                <polygon points="45,115 25,115 45,130" fill="#685950"/>
                <polygon points="155,115 175,115 155,130" fill="#685950"/>
            </g>
            
            <!-- Round Hedgehog Ball Body -->
            <circle cx="100" cy="115" r="50" fill="#8D7B70" stroke="#30251F" stroke-width="4"/>
            <!-- Snout -->
            <polygon points="85,125 115,125 100,150" fill="#D7CCC8" stroke="#30251F" stroke-width="3"/>
            <!-- Nose -->
            <circle cx="100" cy="148" r="4" fill="#30251F"/>
            
            <!-- Shy Peek-a-boo Eyes -->
            <circle cx="88" cy="115" r="4.5" fill="#30251F"/>
            <circle cx="89" cy="113" r="1.5" fill="#FFFFFF"/>
            <circle cx="112" cy="115" r="4.5" fill="#30251F"/>
            <circle cx="113" cy="113" r="1.5" fill="#FFFFFF"/>
            <!-- Shy Blush -->
            <circle cx="80" cy="122" r="5" fill="#C48D80" opacity="0.6"/>
            <circle cx="120" cy="122" r="5" fill="#C48D80" opacity="0.6"/>
            
            <!-- "Do Not Disturb" Mini Sign -->
            <g class="mini-sign">
                <rect x="70" y="160" width="60" height="20" rx="4" fill="#A84F45" stroke="#30251F" stroke-width="2"/>
                <text x="76" y="174" font-size="9" font-family="'Patrick Hand', cursive, sans-serif" font-weight="bold" fill="#FFFFFF">SHHH! GO AWAY</text>
            </g>
        </svg>`
    },
    {
        id: 'duck',
        name: 'The Rubber Duck in an Ocean',
        latin: 'Anas Existentialis',
        tagline: 'Floating aimlessly on the waves, squeaks when squeezed, has zero idea what is happening.',
        category: 'Existential Drifter',
        quote: '"No thoughts, head completely empty, just bobbing along."',
        roast: 'You don\'t plan for the future; you just float into it. When people ask for your 5-year career plan, your brain plays the Wii sports theme song.',
        habitat: 'Bobbing gently across the infinite ocean of life.',
        diet: 'Bubbles, sunlight, and whatever vibe is currently floating past.',
        stats: {
            chaos: 15,
            napNeed: 65,
            snackUrgency: 30,
            dramaLevel: 0,
            patience: 95
        },
        badgeColor: '#D4A259',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-duck">
            <!-- Animated Ocean Waves -->
            <path class="ocean-wave wave-back" d="M10,150 Q50,135 100,150 Q150,165 190,150" stroke="#7A9EA6" stroke-width="6" fill="none"/>
            <path class="ocean-wave wave-front" d="M10,165 Q60,175 110,160 Q160,145 190,165" stroke="#9BB8BE" stroke-width="8" fill="none"/>
            
            <!-- Rubber Duck Body -->
            <g class="bobbing-duck">
                <path d="M65,145 Q50,120 75,105 Q125,95 135,120 Q145,135 130,150 Q100,160 65,145 Z" fill="#ECC463" stroke="#30251F" stroke-width="3"/>
                <!-- Duck Head -->
                <circle cx="120" cy="90" r="22" fill="#ECC463" stroke="#30251F" stroke-width="3"/>
                <!-- Duck Tail -->
                <polygon points="55,125 40,110 65,120" fill="#ECC463" stroke="#30251F" stroke-width="2"/>
                <!-- Orange Beak -->
                <path d="M138,88 Q158,92 138,98 Z" fill="#BA7B3A" stroke="#30251F" stroke-width="2"/>
                <!-- Big Innocent Eyes -->
                <circle cx="122" cy="84" r="5" fill="#30251F"/>
                <circle cx="124" cy="82" r="2" fill="#FFFFFF"/>
                <!-- Cute Bubble -->
                <circle cx="150" cy="70" r="8" fill="#9EBFC8" opacity="0.6"/>
                <circle cx="162" cy="55" r="5" fill="#9EBFC8" opacity="0.5"/>
            </g>
        </svg>`
    },
    {
        id: 'flamingo',
        name: 'The Drama Flamingo',
        latin: 'Phoenicopterus Extra',
        tagline: 'Stands on one leg purely to show off. Needs to be the center of attention or will faint.',
        category: 'Theatrical Royalty',
        quote: '"Excuse me, the spotlight is over here. Start admiring me whenever you\'re ready."',
        roast: 'You don\'t enter a room; you make an entrance. You take 85 selfies before finding the one where your lighting looks heavenly, and you consider sweatpants a crime.',
        habitat: 'Directly in front of the biggest mirror in the building.',
        diet: 'Pink drinks, compliments, and gourmet shrimp salads.',
        stats: {
            chaos: 60,
            napNeed: 35,
            snackUrgency: 45,
            dramaLevel: 100,
            patience: 20
        },
        badgeColor: '#C48D80',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-flamingo">
            <!-- Spotlight Beam -->
            <polygon points="100,10 40,190 160,190" fill="#D4A259" opacity="0.12"/>
            
            <!-- Flamingo Standing on One Leg -->
            <line x1="95" y1="140" x2="95" y2="185" stroke="#A86F55" stroke-width="4" stroke-linecap="round"/>
            <!-- Bent Leg -->
            <path d="M95,145 L115,160 L105,170" stroke="#A86F55" stroke-width="4" stroke-linecap="round" fill="none"/>
            
            <!-- Fluffy Dusty Rose Body -->
            <ellipse cx="95" cy="125" rx="28" ry="22" fill="#DCA196" stroke="#30251F" stroke-width="3"/>
            <!-- Feather Boa Texture -->
            <path d="M80,120 Q95,135 110,120" stroke="#C48D80" stroke-width="3" fill="none"/>
            
            <!-- Elegant S-Curved Neck -->
            <path d="M115,120 Q135,90 120,60 Q110,40 100,45" stroke="#DCA196" stroke-width="8" stroke-linecap="round" fill="none"/>
            <!-- Head -->
            <circle cx="98" cy="45" r="12" fill="#DCA196" stroke="#30251F" stroke-width="2"/>
            <!-- Curved Beak with Black Tip -->
            <path d="M90,45 Q75,50 82,65 Q88,58 92,50 Z" fill="#C48D80" stroke="#30251F" stroke-width="1.5"/>
            <path d="M78,57 Q75,50 82,65 Z" fill="#30251F"/>
            
            <!-- Sassy Eyelash Eye -->
            <circle cx="96" cy="42" r="3" fill="#30251F"/>
            <line x1="94" y1="39" x2="91" y2="36" stroke="#30251F" stroke-width="1.5"/>
            <line x1="97" y1="38" x2="97" y2="34" stroke="#30251F" stroke-width="1.5"/>
            
            <!-- Sparkles -->
            <text x="130" y="45" font-size="16" fill="#D4A259">✨</text>
            <text x="60" y="80" font-size="14" fill="#C48D80">♥</text>
        </svg>`
    },
    {
        id: 'turtle',
        name: 'The Procrastinating Turtle',
        latin: 'Testudo Later',
        tagline: 'Takes 3 business days to start anything. Will do it tomorrow. Always tomorrow.',
        category: 'Master of Delay',
        quote: '"If it isn\'t due in the next 14 minutes, it doesn\'t truly exist."',
        roast: 'You are capable of doing 8 hours of laundry, cleaning baseboards, and reading Wikipedia articles about ancient Rome just to avoid doing one 5-minute task.',
        habitat: 'Snuggled inside your defensive shell whenever responsibility approaches.',
        diet: 'Lettuce chewed at 0.1 mph, cold coffee from yesterday, and delayed gratification.',
        stats: {
            chaos: 20,
            napNeed: 90,
            snackUrgency: 60,
            dramaLevel: 25,
            patience: 85
        },
        badgeColor: '#5D7860',
        svg: `<svg viewBox="0 0 200 200" class="creature-svg animated-turtle">
            <!-- Little Shadow -->
            <ellipse cx="100" cy="170" rx="55" ry="12" fill="#30251F" opacity="0.2"/>
            
            <!-- Turtle Shell -->
            <path d="M50,150 Q50,80 100,80 Q150,80 150,150 Z" fill="#5D7860" stroke="#30251F" stroke-width="5"/>
            <!-- Hexagonal Shell Patterns -->
            <polygon points="100,92 115,105 115,125 100,135 85,125 85,105" fill="#7B8573" stroke="#30251F" stroke-width="2"/>
            <line x1="100" y1="92" x2="100" y2="80" stroke="#30251F" stroke-width="2"/>
            <line x1="85" y1="105" x2="65" y2="105" stroke="#30251F" stroke-width="2"/>
            <line x1="115" y1="105" x2="135" y2="105" stroke="#30251F" stroke-width="2"/>
            
            <!-- Turtle Feet -->
            <ellipse cx="60" cy="155" rx="12" ry="8" fill="#7B8573" stroke="#30251F" stroke-width="2"/>
            <ellipse cx="140" cy="155" rx="12" ry="8" fill="#7B8573" stroke="#30251F" stroke-width="2"/>
            
            <!-- Slow Peeking Head -->
            <g class="turtle-head">
                <ellipse cx="160" cy="135" rx="16" ry="12" fill="#7B8573" stroke="#30251F" stroke-width="3"/>
                <!-- Sleepy Half-Closed Eye -->
                <circle cx="164" cy="132" r="3.5" fill="#30251F"/>
                <circle cx="165" cy="131" r="1" fill="#FFFFFF"/>
                <!-- Gentle Smile -->
                <path d="M165,140 Q170,143 173,138" stroke="#30251F" stroke-width="2" fill="none"/>
            </g>
            
            <!-- Sticky Note on Shell: "TOMORROW" -->
            <g class="sticky-note">
                <rect x="75" y="110" width="50" height="22" fill="#EAD8C5" stroke="#B58B68" stroke-width="1.5" transform="rotate(-5 75 110)"/>
                <text x="80" y="125" font-size="9" font-family="'Patrick Hand', cursive, sans-serif" font-weight="bold" fill="#30251F" transform="rotate(-5 75 110)">LATER :)</text>
            </g>
        </svg>`
    }
];

// Helper to look up creature by ID
function getCreatureById(id) {
    return CREATURES_DATABASE.find(c => c.id === id) || CREATURES_DATABASE[0];
}
