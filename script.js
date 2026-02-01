// Liuren Divination System - Core Logic

// ==================== CONFIGURATION ====================
const CONFIG = {
    APP_NAME: "Liuren Divination",
    VERSION: "1.0.0",
    DEFAULT_MONTH: 4,
    DEFAULT_DAY: 15,
    DEFAULT_HOUR: 7,
    ELEMENTS: {
        Wood: { color: "#2E7D32", icon: "fas fa-leaf" },
        Fire: { color: "#D84315", icon: "fas fa-fire" },
        Water: { color: "#1565C0", icon: "fas fa-tint" },
        Metal: { color: "#616161", icon: "fas fa-gem" },
        Earth: { color: "#8B7355", icon: "fas fa-mountain" }
    }
};

// ==================== KNOWLEDGE BASE ====================
const LIUREN_KNOWLEDGE = {
    basics: {
        id: "basics",
        title: "Getting Started",
        chineseTitle: "入門指南",
        content: `
            <h3><i class="fas fa-star"></i> What is Liuren?</h3>
            <p>Liuren (小六壬) is a traditional Chinese divination method that uses six fixed positions on the palm to analyze situations based on time and intuition.</p>
            
            <h3><i class="fas fa-calculator"></i> How It Works</h3>
            <p>The system uses three numbers:</p>
            <ol>
                <li><strong>Lunar Month</strong> (1-12)</li>
                <li><strong>Lunar Day</strong> (1-30)</li>
                <li><strong>Chinese Hour</strong> (1-12, two-hour periods)</li>
            </ol>
            <p>These numbers are mapped to six palm positions to determine the result.</p>
            
            <h3><i class="fas fa-history"></i> Historical Context</h3>
            <p>Liuren has been used in Chinese culture for centuries, originating from Daoist and folk traditions. It was often used for quick decisions in daily life.</p>
            
            <h3><i class="fas fa-lightbulb"></i> Key Principles</h3>
            <ul>
                <li><strong>Flexibility over rigidity</strong>: Interpretation depends on context</li>
                <li><strong>Intuition matters</strong>: The diviner's insight is important</li>
                <li><strong>Five Elements theory</strong>: Each position has an elemental association</li>
                <li><strong>Yin-Yang balance</strong>: Seeking harmony in interpretation</li>
            </ul>
            
            <div class="important-note">
                <h4><i class="fas fa-exclamation-circle"></i> Important Note</h4>
                <p>Liuren is a cultural tradition, not a scientific prediction method. Use it for reflection and cultural exploration, not for major life decisions.</p>
            </div>
        `
    },
    
    // Six Palm Positions
    positions: {
        daan: {
            id: "daan",
            name: "Da An",
            chinese: "大安",
            element: "Wood",
            auspiciousness: "auspicious",
            poem: "Great peace in all affairs, seek profit in the east direction. Lost items are not far, home is safe and sound. Travelers have not moved, the sick face no obstruction. The general returns to fields, examine carefully.",
            meanings: {
                general: "Stability, peace, security. Good for maintaining current situations.",
                career: "Stable work environment. Avoid rapid expansion.",
                wealth: "Steady income. Good for saving, not for risky investments.",
                love: "Harmonious relationships. May lack excitement.",
                health: "Generally healthy. Beware of diet-related issues.",
                travel: "No immediate movement. Travelers safe but not returning.",
                lost: "Items nearby, often at home.",
                timing: "1, 5, 7 (hours, days, months)",
                direction: "East",
                color: "Green/Blue",
                deity: "Azure Dragon"
            },
            weather: "Changeable weather with mild breezes",
            spirituality: {
                traditional: "解灾之神 (Disaster-resolving deity)",
                modern: "Associated with protective energies and stability",
                explanation: "In traditional belief, Da An represents protective forces that help resolve difficulties and maintain harmony."
            },
            adaptation: "Da An is stable but stagnant. For growth, add Wood element (green colors, east direction)."
        },
        
        liulian: {
            id: "liulian",
            name: "Liu Lian",
            chinese: "留連",
            element: "Water",
            auspiciousness: "neutral",
            poem: "Lingering delays in accomplishments, plans remain unclear. Legal matters should slow, travelers yet to appear. Lost items go southward, quick search brings clarity. Guard against arguments, human affairs are ordinary.",
            meanings: {
                general: "Delays, obstacles, uncertainties. Patience required.",
                career: "Slow progress. Follow procedures carefully.",
                wealth: "Difficult to obtain. Risk of loss if rushing.",
                love: "Communication issues. Possible misunderstandings.",
                health: "Digestive issues, stress-related problems.",
                travel: "Delays expected. Travelers enjoying elsewhere.",
                lost: "Check south direction. Search quickly.",
                timing: "2, 8, 10",
                direction: "North",
                color: "Black/Blue",
                deity: "Black Tortoise"
            },
            weather: "Continuous drizzling rain, good for crops",
            spirituality: {
                traditional: "过路游魂 (Wandering spirits)",
                modern: "Associated with lingering energies and unresolved matters",
                explanation: "Traditionally linked to wandering energies that can cause delays and confusion until properly addressed."
            },
            adaptation: "Liu Lian (Water) to West (Metal): Metal generates Water, so obstacles may lead to success."
        },
        
        suxi: {
            id: "suxi",
            name: "Su Xi",
            chinese: "速喜",
            element: "Fire",
            auspiciousness: "auspicious",
            poem: "Swift joy soon arriving, seek wealth toward the south. Lost items at Shen-Wei-Wu, ask people on the path. Legal matters bring fortune, sickness brings no harm. Home and livestock prosper, travelers send word warm.",
            meanings: {
                general: "Quick success, good news, rapid developments.",
                career: "Rapid progress possible. Watch documentation.",
                wealth: "Good profits but may require investment first.",
                love: "Passionate beginnings. Existing relationships may argue.",
                health: "Generally good. Elderly may have heart issues.",
                travel: "Quick returns. Messages expected.",
                lost: "Check south to southwest. Ask people.",
                timing: "3, 6, 9",
                direction: "South",
                color: "Red",
                deity: "Vermilion Bird"
            },
            weather: "Rainbows appear, bright sunshine",
            spirituality: {
                traditional: "火神，大兴火建将军 (Fire deity, Great Fire General)",
                modern: "Associated with transformative and purifying energies",
                explanation: "Connected with fire energy that brings transformation, purification, and rapid change."
            },
            adaptation: "Su Xi (Fire) near water: Water overcomes Fire, so expect some obstacles."
        },
        
        chikou: {
            id: "chikou",
            name: "Chi Kou",
            chinese: "赤口",
            element: "Metal",
            auspiciousness: "inauspicious",
            poem: "Red mouth brings arguments, guard against lawsuits and strife. Search quickly for lost items, travelers face trouble in life. Chickens and dogs act strange, sickness comes from western way. Beware of curses spoken, plague may come to stay.",
            meanings: {
                general: "Conflict, arguments, legal issues. Caution needed.",
                career: "Difficult environment. Good for military/police work.",
                wealth: "Unstable finances. Best time: 3-7 PM.",
                love: "Arguments likely. Possible separation.",
                health: "Respiratory issues, injuries. Serious for elderly.",
                travel: "Difficulties or dangers.",
                lost: "Search southeast/southwest quickly. Hard to find.",
                timing: "4, 7, 10",
                direction: "West",
                color: "White",
                deity: "White Tiger"
            },
            weather: "Cold like a knife, with thunderstorms, frost, snow or hail",
            spirituality: {
                traditional: "金神欺煞，白虎 (Metal deity, White Tiger)",
                modern: "Associated with sharp energies and potential conflicts",
                explanation: "Connected with the White Tiger, a symbol of metal energy that can be protective but also cause conflicts if unbalanced."
            },
            adaptation: "Chi Kou hours (3-7 PM) reduce conflict effects. Avoid important meetings at noon."
        },
        
        xiaoji: {
            id: "xiaoji",
            name: "Xiao Ji",
            chinese: "小吉",
            element: "Wood",
            auspiciousness: "auspicious",
            poem: "Small fortune brings prosperity, matters settle on the road. Women bring happy tidings, lost in southwest abode. Travelers arrive promptly, business dealings are strong. All affairs find harmony, sick pray to heaven long.",
            meanings: {
                general: "Help from others, smooth progress, small successes.",
                career: "Good teamwork. Clear communication needed.",
                wealth: "Income with help from others. Better when traveling.",
                love: "New relationships through introductions. Existing harmonious.",
                health: "Generally good. Mysterious recurring symptoms possible.",
                travel: "Quick arrivals. Already on the way.",
                lost: "Southwest direction. Near home if lost 7AM-3PM.",
                timing: "1, 5, 7",
                direction: "East",
                color: "Green",
                deity: "Six Harmonies"
            },
            weather: "Few stars and moon, mixed yin-yang weather",
            spirituality: {
                traditional: "六合 (Six Harmonies)",
                modern: "Associated with harmonious connections and helpful influences",
                explanation: "Represents the Six Harmonies, symbolizing balance and positive connections between different elements."
            },
            adaptation: "Xiao Ji benefits from cooperation. Seek help from southwest people."
        },
        
        kongwang: {
            id: "kongwang",
            name: "Kong Wang",
            chinese: "空亡",
            element: "Earth",
            auspiciousness: "inauspicious",
            poem: "Empty perish brings ill signs, women act contrary. Seeking wealth brings no gain, travelers meet calamity. Lost items cannot be found, lawsuits bring injury. Sick meet hidden ghosts, exorcism brings recovery.",
            meanings: {
                general: "Emptiness, failure, delays, unresolved matters.",
                career: "Job difficulties, betrayal, unsuccessful applications.",
                wealth: "Poor prospects. Save rather than spend.",
                love: "Arguments, third party interference.",
                health: "Digestive issues. Chronic illnesses dangerous.",
                travel: "Danger, accidents possible.",
                lost: "Very difficult to find.",
                timing: "3, 6, 9",
                direction: "Center",
                color: "Yellow",
                deity: "Gou Chen"
            },
            weather: "Thick fog, sun and moon obscured",
            spirituality: {
                traditional: "勾陈，暗鬼 (Gou Chen, hidden ghosts)",
                modern: "Associated with emptiness and unresolved spiritual matters",
                explanation: "Represents emptiness and unresolved spiritual issues that may need addressing through traditional balancing methods."
            },
            adaptation: "Kong Wang for bad events: emptiness can mean safety. For good events: may fail."
        }
    },
    
    adaptation: {
        id: "adaptation",
        title: "Adaptation Methods",
        chineseTitle: "變通之法",
        content: `
            <h3><i class="fas fa-exchange-alt"></i> The Art of Flexible Interpretation</h3>
            <p>True Liuren mastery comes from adapting interpretations to specific contexts, not rigidly applying fixed meanings.</p>
            
            <div class="adaptation-example">
                <h4><i class="fas fa-compass"></i> Example 1: Direction Matters</h4>
                <p><strong>Situation</strong>: Liu Lian (Water element) for a trip to the West (Metal direction)</p>
                <p><strong>Standard meaning</strong>: Delays and obstacles</p>
                <p><strong>Adapted interpretation</strong>: Metal generates Water in Five Elements theory, so the trip may eventually succeed despite initial delays</p>
                <p class="chinese-note">留連屬水，西方屬金，金生水反而能成</p>
            </div>
            
            <div class="adaptation-example">
                <h4><i class="fas fa-train"></i> Example 2: Context Changes Meaning</h4>
                <p><strong>Situation</strong>: Kong Wang (空亡) for finding a train seat</p>
                <p><strong>Literal meaning</strong>: "Empty perish" - nothing available</p>
                <p><strong>Adapted interpretation</strong>: The carriage might be empty, so plenty of seats available</p>
                <p class="chinese-note">空亡不一定無座，可能車廂人空</p>
            </div>
            
            <div class="adaptation-example">
                <h4><i class="fas fa-clock"></i> Example 3: Time Transitions</h4>
                <p><strong>Situation</strong>: 21:04 (just entered Hai hour - Su Xi)</p>
                <p><strong>Interpretation</strong>: Good news just starting, small obstacles from previous hour's influence</p>
                <p><strong>Situation</strong>: 20:50 (end of Xu hour - Liu Lian)</p>
                <p><strong>Interpretation</strong>: Still difficulties but about to improve</p>
            </div>
            
            <h3><i class="fas fa-balance-scale"></i> Good vs Bad Events</h3>
            <div class="comparison">
                <div class="comparison-item">
                    <h5>Bad Event + Kong Wang</h5>
                    <p>Dangerous situation encountering emptiness may become safe</p>
                    <p class="chinese-note">凶事逢空亡可能轉危為安</p>
                </div>
                <div class="comparison-item">
                    <h5>Good Event + Kong Wang</h5>
                    <p>Positive plan encountering emptiness may fail to materialize</p>
                    <p class="chinese-note">吉事逢空亡可能落空</p>
                </div>
            </div>
            
            <h3><i class="fas fa-brain"></i> Cultivating Intuition</h3>
            <p>The best Liuren practitioners develop intuitive connection:</p>
            <ul>
                <li>Practice regularly with different situations</li>
                <li>Keep records of divinations and outcomes</li>
                <li>Meditate to clear the mind before divining</li>
                <li>Trust the first number that comes to mind</li>
            </ul>
            
            <div class="philosophical-note">
                <h4><i class="fas fa-quote-left"></i> Philosophical Foundation</h4>
                <p>"What is destined will come, what is not destined cannot be forced."</p>
                <p>"Tools have no inherent morality - a sword can defend justice or commit robbery, depending on the user's heart."</p>
                <p class="source">— Traditional Chinese Wisdom</p>
            </div>
        `
    },
    
    spirituality: {
        id: "spirituality",
        title: "Traditional Energy Concepts",
        chineseTitle: "傳統能量觀念",
        content: `
            <h3><i class="fas fa-mountain"></i> Understanding "Spiritual" Concepts in Liuren</h3>
            <p>Traditional Chinese metaphysical systems often include concepts that Western cultures might label as "spiritual" or "supernatural." In Liuren, these concepts are better understood as traditional ways of describing energy patterns and environmental influences.</p>
            
            <div class="spirituality-warning">
                <h4><i class="fas fa-exclamation-triangle"></i> Cultural Context Note</h4>
                <p>These concepts are presented for cultural understanding of traditional Chinese thought. They reflect historical beliefs, not necessarily modern scientific views.</p>
            </div>
            
            <h3><i class="fas fa-yin-yang"></i> Key Traditional Concepts</h3>
            
            <div class="spirituality-concepts">
                <div class="spirituality-concept">
                    <h4>鬼神 (Guǐ Shén)</h4>
                    <p><strong>Literal</strong>: "Ghosts and Gods"</p>
                    <p><strong>Cultural Understanding</strong>: In traditional Chinese thought, this term often refers to various types of spiritual energies or influences, including ancestral spirits, natural energies, and what might be called "environmental factors" today.</p>
                    <p><strong>Modern Perspective</strong>: Can be understood as symbolic representations of psychological states, environmental influences, or unconscious factors affecting a situation.</p>
                </div>
                
                <div class="spirituality-concept">
                    <h4>冲犯 (Chōng Fàn)</h4>
                    <p><strong>Literal</strong>: "To offend or violate"</p>
                    <p><strong>Cultural Understanding</strong>: Refers to energy clashes or disharmonies between different elements, directions, or timing factors.</p>
                    <p><strong>Modern Perspective</strong>: Similar to concepts of environmental stress, psychological tension, or conflicting priorities in a situation.</p>
                </div>
                
                <div class="spirituality-concept">
                    <h4>穰解 (Ráng Jiě)</h4>
                    <p><strong>Literal</strong>: "To dispel or resolve"</p>
                    <p><strong>Cultural Understanding</strong>: Traditional methods for restoring balance and harmony, which might include rituals, adjustments to environment, or behavioral changes.</p>
                    <p><strong>Modern Perspective</strong>: Comparable to stress management techniques, environmental adjustments, or therapeutic interventions to restore wellbeing.</p>
                </div>
            </div>
            
            <h3><i class="fas fa-hand-sparkles"></i> Spiritual Associations by Palm Position</h3>
            
            <div class="spirituality-content">
                <h4><i class="fas fa-peace"></i> Da An (大安)</h4>
                <p><strong>Traditional</strong>: 解灾之神 (Disaster-resolving deity)</p>
                <p><strong>Modern Interpretation</strong>: Represents protective, stabilizing energies that help resolve difficulties.</p>
                
                <h4><i class="fas fa-cloud"></i> Liu Lian (留連)</h4>
                <p><strong>Traditional</strong>: 过路游魂 (Wandering spirits)</p>
                <p><strong>Modern Interpretation</strong>: Associated with lingering issues, unresolved matters, or distracting influences.</p>
                
                <h4><i class="fas fa-fire"></i> Su Xi (速喜)</h4>
                <p><strong>Traditional</strong>: 火神 (Fire deity)</p>
                <p><strong>Modern Interpretation</strong>: Connected with transformative, energizing forces that bring rapid change.</p>
                
                <h4><i class="fas fa-gem"></i> Chi Kou (赤口)</h4>
                <p><strong>Traditional</strong>: 白虎 (White Tiger)</p>
                <p><strong>Modern Interpretation</strong>: Associated with sharp, potentially conflicting energies that need careful handling.</p>
                
                <h4><i class="fas fa-handshake"></i> Xiao Ji (小吉)</h4>
                <p><strong>Traditional</strong>: 六合 (Six Harmonies)</p>
                <p><strong>Modern Interpretation</strong>: Represents harmonious connections and helpful influences from others.</p>
                
                <h4><i class="fas fa-cloud-moon"></i> Kong Wang (空亡)</h4>
                <p><strong>Traditional</strong>: 勾陈，暗鬼 (Gou Chen, hidden ghosts)</p>
                <p><strong>Modern Interpretation</strong>: Associated with emptiness, unresolved issues, or situations where something feels missing or incomplete.</p>
            </div>
            
            <h3><i class="fas fa-balance-scale"></i> Bridging Traditional and Modern Views</h3>
            <p>When encountering traditional spiritual concepts in Liuren:</p>
            <ul>
                <li><strong>See them as metaphorical</strong>: They represent patterns and relationships in a symbolic language</li>
                <li><strong>Understand their cultural context</strong>: These concepts made sense within traditional Chinese cosmology</li>
                <li><strong>Extract practical wisdom</strong>: Look for the practical advice about harmony, timing, and relationship management</li>
                <li><strong>Respect cultural heritage</strong>: These concepts are part of China's rich intangible cultural heritage</li>
            </ul>
            
            <div class="cultural-note">
                <h4><i class="fas fa-info-circle"></i> Cultural Preservation Note</h4>
                <p>Presenting these traditional concepts in their original form, while providing modern interpretations, helps preserve cultural heritage while making it accessible to contemporary audiences worldwide.</p>
            </div>
        `
    }
};

// ==================== CORE FUNCTIONS ====================
class LiurenSystem {
    constructor() {
        this.currentMethod = 'time';
        this.currentResult = null;
        this.initialized = false;
    }
    
    // Initialize the system
    init() {
        if (this.initialized) return;
        
        this.setupDateOptions();
        this.renderPalmChart();
        this.renderCourseAccordion();
        this.bindEvents();
        this.updateTimeDisplay();
        
        // Auto-divine with current time after delay
        setTimeout(() => {
            this.useCurrentTime();
        }, 1500);
        
        this.initialized = true;
        console.log(`${CONFIG.APP_NAME} v${CONFIG.VERSION} initialized`);
    }
    
    // Setup date dropdown options
    setupDateOptions() {
        const daySelect = document.getElementById('day');
        daySelect.innerHTML = '';
        
        for (let i = 1; i <= 30; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i}日`;
            if (i === CONFIG.DEFAULT_DAY) option.selected = true;
            daySelect.appendChild(option);
        }
        
        // Set default values
        document.getElementById('month').value = CONFIG.DEFAULT_MONTH;
        document.getElementById('hour').value = CONFIG.DEFAULT_HOUR;
    }
    
    // Render the palm chart
    renderPalmChart() {
        const chartContainer = document.getElementById('palm-chart');
        chartContainer.innerHTML = '';
        
        Object.values(LIUREN_KNOWLEDGE.positions).forEach(position => {
            const element = document.createElement('div');
            element.className = 'palm-position';
            element.dataset.id = position.id;
            
            // Set border color based on element
            const elementColor = CONFIG.ELEMENTS[position.element].color;
            element.style.borderLeftColor = elementColor;
            element.style.borderLeftWidth = '5px';
            
            element.innerHTML = `
                <div class="position-name">${position.chinese}</div>
                <div class="position-name-en">${position.name}</div>
                <div class="position-element">${position.element} Element</div>
                <div class="position-status">${this.getAuspiciousnessText(position.auspiciousness)}</div>
            `;
            
            element.addEventListener('click', () => {
                document.querySelectorAll('.palm-position').forEach(el => {
                    el.classList.remove('active');
                });
                element.classList.add('active');
                this.displayPositionDetails(position);
            });
            
            chartContainer.appendChild(element);
        });
    }
    
    // Get auspiciousness text
    getAuspiciousnessText(type) {
        switch(type) {
            case 'auspicious': return 'Auspicious 吉';
            case 'neutral': return 'Neutral 中平';
            case 'inauspicious': return 'Inauspicious 凶';
            default: return '';
        }
    }
    
    // Render course accordion
    renderCourseAccordion() {
        const accordion = document.getElementById('course-accordion');
        accordion.innerHTML = '';
        
        // Add basics course
        const basicsItem = this.createAccordionItem(
            LIUREN_KNOWLEDGE.basics.id,
            LIUREN_KNOWLEDGE.basics.title,
            LIUREN_KNOWLEDGE.basics.chineseTitle,
            LIUREN_KNOWLEDGE.basics.content
        );
        accordion.appendChild(basicsItem);
        
        // Add position courses
        Object.values(LIUREN_KNOWLEDGE.positions).forEach(position => {
            const content = this.generatePositionContent(position);
            const item = this.createAccordionItem(
                position.id,
                `${position.name} (${position.chinese})`,
                position.chinese,
                content
            );
            accordion.appendChild(item);
        });
        
        // Add adaptation course
        const adaptationItem = this.createAccordionItem(
            LIUREN_KNOWLEDGE.adaptation.id,
            LIUREN_KNOWLEDGE.adaptation.title,
            LIUREN_KNOWLEDGE.adaptation.chineseTitle,
            LIUREN_KNOWLEDGE.adaptation.content
        );
        accordion.appendChild(adaptationItem);
        
        // Add spirituality course
        const spiritualityItem = this.createAccordionItem(
            LIUREN_KNOWLEDGE.spirituality.id,
            LIUREN_KNOWLEDGE.spirituality.title,
            LIUREN_KNOWLEDGE.spirituality.chineseTitle,
            LIUREN_KNOWLEDGE.spirituality.content
        );
        accordion.appendChild(spiritualityItem);
        
        // Open first item
        setTimeout(() => {
            accordion.querySelector('.accordion-header').click();
        }, 1000);
    }
    
    // Create accordion item
    createAccordionItem(id, title, chineseTitle, content) {
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <div class="accordion-header" data-id="${id}">
                <div>
                    <div>${title}</div>
                    <div class="chinese-ref">${chineseTitle}</div>
                </div>
                <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content" id="content-${id}">
                ${content}
            </div>
        `;
        
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = header.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
            });
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.classList.remove('show');
            });
            
            // Open if not active
            if (!isActive) {
                header.classList.add('active');
                document.getElementById(`content-${id}`).classList.add('show');
            }
        });
        
        return item;
    }
    
    // Generate position content
    generatePositionContent(position) {
        const meanings = position.meanings;
        const spirituality = position.spirituality;
        
        return `
            <div class="position-content">
                <div class="position-header">
                    <h3>${position.chinese} - ${position.name}</h3>
                    <div class="position-meta">
                        <span class="element-badge" style="background: ${CONFIG.ELEMENTS[position.element].color}">
                            ${position.element} Element
                        </span>
                        <span class="auspiciousness-badge ${position.auspiciousness}">
                            ${this.getAuspiciousnessText(position.auspiciousness)}
                        </span>
                    </div>
                </div>
                
                <div class="position-poem">
                    <h4><i class="fas fa-quote-left"></i> Traditional Poem</h4>
                    <p>${position.poem}</p>
                </div>
                
                <div class="position-meanings">
                    <h4><i class="fas fa-book"></i> Meanings</h4>
                    <div class="meaning-grid">
                        <div class="meaning-item">
                            <strong>General</strong>
                            <p>${meanings.general}</p>
                        </div>
                        <div class="meaning-item">
                            <strong>Career</strong>
                            <p>${meanings.career}</p>
                        </div>
                        <div class="meaning-item">
                            <strong>Wealth</strong>
                            <p>${meanings.wealth}</p>
                        </div>
                        <div class="meaning-item">
                            <strong>Love</strong>
                            <p>${meanings.love}</p>
                        </div>
                        <div class="meaning-item">
                            <strong>Health</strong>
                            <p>${meanings.health}</p>
                        </div>
                        <div class="meaning-item">
                            <strong>Travel</strong>
                            <p>${meanings.travel}</p>
                        </div>
                    </div>
                </div>
                
                <div class="position-details">
                    <h4><i class="fas fa-info-circle"></i> Details</h4>
                    <div class="detail-list">
                        <div class="detail-item">
                            <strong>Weather Association</strong>: ${position.weather}
                        </div>
                        <div class="detail-item">
                            <strong>Timing</strong>: ${meanings.timing}
                        </div>
                        <div class="detail-item">
                            <strong>Direction</strong>: ${meanings.direction}
                        </div>
                        <div class="detail-item">
                            <strong>Color</strong>: ${meanings.color}
                        </div>
                        <div class="detail-item">
                            <strong>Deity/Energy</strong>: ${meanings.deity}
                        </div>
                    </div>
                </div>
                
                <div class="spirituality-section">
                    <h4><i class="fas fa-mountain"></i> Traditional Energy Concepts</h4>
                    <div class="spirituality-content">
                        <p><strong>Traditional View</strong>: ${spirituality.traditional}</p>
                        <p><strong>Modern Interpretation</strong>: ${spirituality.modern}</p>
                        <p><strong>Explanation</strong>: ${spirituality.explanation}</p>
                    </div>
                </div>
                
                <div class="adaptation-tip">
                    <h4><i class="fas fa-lightbulb"></i> Adaptation Tip</h4>
                    <p>${position.adaptation}</p>
                </div>
            </div>
        `;
    }
    
    // Bind event listeners
    bindEvents() {
        // Method buttons
        document.querySelectorAll('.method-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.method-btn').forEach(b => {
                    b.classList.remove('active');
                });
                btn.classList.add('active');
                this.currentMethod = btn.id.replace('method-', '');
                
                if (this.currentMethod === 'realtime') {
                    this.useCurrentTime();
                } else if (this.currentMethod === 'random') {
                    this.useRandomNumbers();
                }
            });
        });
        
        // Divination button
        document.getElementById('divinate-btn').addEventListener('click', () => {
            this.performDivination();
        });
        
        // Current time button
        document.getElementById('realtime-btn').addEventListener('click', () => {
            document.getElementById('method-realtime').click();
        });
        
        // Reset button
        document.getElementById('clear-btn').addEventListener('click', () => {
            this.resetToDefaults();
        });
    }
    
    // Update time display
    updateTimeDisplay() {
        const now = new Date();
        const timeDisplay = document.getElementById('time-display');
        
        // Update every minute
        setInterval(() => {
            const now = new Date();
            const solarDate = now.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            const solarTime = now.toLocaleTimeString('en-US');
            
            timeDisplay.innerHTML = `
                <h4><i class="far fa-clock"></i> Current Time</h4>
                <p><strong>Solar Date</strong>: ${solarDate}</p>
                <p><strong>Solar Time</strong>: ${solarTime}</p>
            `;
            timeDisplay.style.display = 'block';
        }, 60000);
        
        // Initial update
        const solarDate = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        const solarTime = now.toLocaleTimeString('en-US');
        
        timeDisplay.innerHTML = `
            <h4><i class="far fa-clock"></i> Current Time</h4>
            <p><strong>Solar Date</strong>: ${solarDate}</p>
            <p><strong>Solar Time</strong>: ${solarTime}</p>
        `;
        timeDisplay.style.display = 'block';
    }
    
    // Use current time for divination
    useCurrentTime() {
        try {
            const now = new Date();
            let lunarObj;
            
            // Try to use lunar.js if available
            if (typeof Lunar !== 'undefined') {
                lunarObj = Lunar.fromDate(now);
            } else {
                lunarObj = this.simplifiedLunarConvert(now);
            }
            
            const lunarMonth = lunarObj.getMonth();
            const lunarDay = lunarObj.getDay();
            const lunarHour = lunarObj.getTime();
            
            // Update form values
            document.getElementById('month').value = lunarMonth;
            document.getElementById('day').value = lunarDay;
            document.getElementById('hour').value = lunarHour;
            
            // Perform divination
            this.performDivination(lunarObj);
            
        } catch (error) {
            console.error("Error using current time:", error);
            alert("Unable to get current lunar time. Please check if lunar.js is loaded.");
        }
    }
    
    // Use random numbers
    useRandomNumbers() {
        const randomMonth = Math.floor(Math.random() * 12) + 1;
        const randomDay = Math.floor(Math.random() * 30) + 1;
        const randomHour = Math.floor(Math.random() * 12) + 1;
        
        document.getElementById('month').value = randomMonth;
        document.getElementById('day').value = randomDay;
        document.getElementById('hour').value = randomHour;
        
        this.performDivination();
    }
    
    // Reset to defaults
    resetToDefaults() {
        document.getElementById('month').value = CONFIG.DEFAULT_MONTH;
        document.getElementById('day').value = CONFIG.DEFAULT_DAY;
        document.getElementById('hour').value = CONFIG.DEFAULT_HOUR;
        document.getElementById('method-time').click();
        
        document.getElementById('default-result').style.display = 'block';
        document.getElementById('detailed-result').style.display = 'none';
        
        document.querySelectorAll('.palm-position').forEach(el => {
            el.classList.remove('active');
        });
        
        document.getElementById('time-display').style.display = 'none';
    }
    
    // Perform divination
    performDivination(lunarObj = null) {
        const month = parseInt(document.getElementById('month').value);
        const day = parseInt(document.getElementById('day').value);
        const hour = parseInt(document.getElementById('hour').value);
        
        // Validate inputs
        if (month < 1 || month > 12 || day < 1 || day > 30 || hour < 1 || hour > 12) {
            alert("Please enter valid values: Month (1-12), Day (1-30), Hour (1-12)");
            return;
        }
        
        // Calculate result
        const result = this.calculateLiuren(month, day, hour);
        this.displayResult(result, lunarObj);
    }
    
    // Calculate Liuren result
    calculateLiuren(month, day, hour) {
        // The six positions in order
        const positions = ['daan', 'liulian', 'suxi', 'chikou', 'xiaoji', 'kongwang'];
        
        // Calculate position indices
        const monthIndex = (month - 1) % 6;
        const dayIndex = (monthIndex + day - 1) % 6;
        const hourIndex = (dayIndex + hour - 1) % 6;
        
        // Get the result position
        const resultId = positions[hourIndex];
        const position = LIUREN_KNOWLEDGE.positions[resultId];
        
        return {
            id: resultId,
            name: position.name,
            chinese: position.chinese,
            element: position.element,
            auspiciousness: position.auspiciousness,
            monthIndex: monthIndex,
            dayIndex: dayIndex,
            hourIndex: hourIndex,
            position: position
        };
    }
    
    // Display result
    displayResult(result, lunarObj = null) {
        const defaultResult = document.getElementById('default-result');
        const detailedResult = document.getElementById('detailed-result');
        
        defaultResult.style.display = 'none';
        detailedResult.style.display = 'block';
        
        const position = result.position;
        const meanings = position.meanings;
        const spirituality = position.spirituality;
        
        // Get solar time for display
        const now = new Date();
        const solarDate = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        const solarTime = now.toLocaleTimeString('en-US');
        
        // Create result HTML
        detailedResult.innerHTML = `
            <div class="result-content">
                <div class="result-header">
                    <h2 class="result-title">${position.chinese} - ${position.name}</h2>
                    <div class="result-meta">
                        <span class="element-badge" style="background: ${CONFIG.ELEMENTS[position.element].color}">
                            ${position.element} Element
                        </span>
                        <span class="auspiciousness-badge ${position.auspiciousness}">
                            ${this.getAuspiciousnessText(position.auspiciousness)}
                        </span>
                    </div>
                </div>
                
                <div class="result-poem">
                    <h3><i class="fas fa-quote-left"></i> Traditional Poem</h3>
                    <p>${position.poem}</p>
                </div>
                
                <div class="result-interpretation">
                    <h3><i class="fas fa-book-open"></i> Interpretation</h3>
                    <div class="interpretation-grid">
                        <div class="interpretation-item">
                            <h4><i class="fas fa-briefcase"></i> Career & Work</h4>
                            <p>${meanings.career}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-money-bill-wave"></i> Wealth & Finance</h4>
                            <p>${meanings.wealth}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-heart"></i> Love & Relationships</h4>
                            <p>${meanings.love}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-user-md"></i> Health & Well-being</h4>
                            <p>${meanings.health}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-plane"></i> Travel & Movement</h4>
                            <p>${meanings.travel}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-search"></i> Lost Items</h4>
                            <p>${meanings.lost}</p>
                        </div>
                    </div>
                </div>
                
                <div class="result-details">
                    <h3><i class="fas fa-info-circle"></i> Additional Details</h3>
                    <div class="details-list">
                        <div class="detail">
                            <strong>Weather Association</strong>: ${position.weather}
                        </div>
                        <div class="detail">
                            <strong>Timing</strong>: ${meanings.timing}
                        </div>
                        <div class="detail">
                            <strong>Favorable Direction</strong>: ${meanings.direction}
                        </div>
                        <div class="detail">
                            <strong>Associated Color</strong>: ${meanings.color}
                        </div>
                        <div class="detail">
                            <strong>Deity/Energy Association</strong>: ${meanings.deity}
                        </div>
                    </div>
                </div>
                
                <div class="traditional-concepts">
                    <h3><i class="fas fa-mountain"></i> Traditional Energy Concepts</h3>
                    <div class="spirituality-content">
                        <p><strong>Traditional View</strong>: ${spirituality.traditional}</p>
                        <p><strong>Modern Interpretation</strong>: ${spirituality.modern}</p>
                        <p><strong>Cultural Explanation</strong>: ${spirituality.explanation}</p>
                        <div class="cultural-note-small">
                            <i class="fas fa-info-circle"></i> These traditional concepts reflect historical Chinese beliefs about energy and environment.
                        </div>
                    </div>
                </div>
                
                ${lunarObj ? `
                <div class="result-time">
                    <h3><i class="fas fa-calendar-alt"></i> Divination Time</h3>
                    <div class="time-info">
                        <p><strong>Solar Date</strong>: ${solarDate}</p>
                        <p><strong>Solar Time</strong>: ${solarTime}</p>
                        <p><strong>Lunar Date</strong>: ${lunarObj.getMonth()}月${lunarObj.getDay()}日</p>
                        <p><strong>Chinese Hour</strong>: ${this.getHourName(lunarObj.getTime())} (${this.getHourRange(lunarObj.getTime())})</p>
                    </div>
                </div>
                ` : ''}
                
                <div class="adaptation-section">
                    <h3><i class="fas fa-lightbulb"></i> Adaptation Advice</h3>
                    <p>${position.adaptation}</p>
                    <div class="button-group">
                        <button class="learn-more-btn" onclick="liurenSystem.openCourse('${result.id}')">
                            <i class="fas fa-graduation-cap"></i> Learn More About ${position.name}
                        </button>
                        <button class="spirituality-btn" onclick="liurenSystem.openCourse('spirituality')">
                            <i class="fas fa-mountain"></i> Traditional Energy Concepts
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Highlight corresponding palm position
        document.querySelectorAll('.palm-position').forEach(el => {
            el.classList.remove('active');
            if (el.dataset.id === result.id) {
                el.classList.add('active');
            }
        });
        
        // Scroll to results
        detailedResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Store current result
        this.currentResult = result;
    }
    
    // Display position details (from palm chart click)
    displayPositionDetails(position) {
        const defaultResult = document.getElementById('default-result');
        const detailedResult = document.getElementById('detailed-result');
        
        defaultResult.style.display = 'none';
        detailedResult.style.display = 'block';
        
        const meanings = position.meanings;
        const spirituality = position.spirituality;
        
        detailedResult.innerHTML = `
            <div class="result-content">
                <div class="result-header">
                    <h2 class="result-title">${position.chinese} - ${position.name}</h2>
                    <div class="result-meta">
                        <span class="element-badge" style="background: ${CONFIG.ELEMENTS[position.element].color}">
                            ${position.element} Element
                        </span>
                        <span class="auspiciousness-badge ${position.auspiciousness}">
                            ${this.getAuspiciousnessText(position.auspiciousness)}
                        </span>
                    </div>
                </div>
                
                <div class="result-intro">
                    <p>This is a detailed overview of the ${position.name} position. To get a personal divination, please use the calculator above with your specific date and time.</p>
                </div>
                
                <div class="result-poem">
                    <h3><i class="fas fa-quote-left"></i> Traditional Poem</h3>
                    <p>${position.poem}</p>
                </div>
                
                <div class="result-interpretation">
                    <h3><i class="fas fa-book-open"></i> General Meanings</h3>
                    <div class="interpretation-grid">
                        <div class="interpretation-item">
                            <h4><i class="fas fa-briefcase"></i> Career & Work</h4>
                            <p>${meanings.career}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-money-bill-wave"></i> Wealth & Finance</h4>
                            <p>${meanings.wealth}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-heart"></i> Love & Relationships</h4>
                            <p>${meanings.love}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-user-md"></i> Health & Well-being</h4>
                            <p>${meanings.health}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-plane"></i> Travel & Movement</h4>
                            <p>${meanings.travel}</p>
                        </div>
                        <div class="interpretation-item">
                            <h4><i class="fas fa-search"></i> Lost Items</h4>
                            <p>${meanings.lost}</p>
                        </div>
                    </div>
                </div>
                
                <div class="result-details">
                    <h3><i class="fas fa-info-circle"></i> Additional Details</h3>
                    <div class="details-list">
                        <div class="detail">
                            <strong>Weather Association</strong>: ${position.weather}
                        </div>
                        <div class="detail">
                            <strong>Timing</strong>: ${meanings.timing}
                        </div>
                        <div class="detail">
                            <strong>Favorable Direction</strong>: ${meanings.direction}
                        </div>
                        <div class="detail">
                            <strong>Associated Color</strong>: ${meanings.color}
                        </div>
                        <div class="detail">
                            <strong>Deity/Energy Association</strong>: ${meanings.deity}
                        </div>
                    </div>
                </div>
                
                <div class="traditional-concepts">
                    <h3><i class="fas fa-mountain"></i> Traditional Energy Concepts</h3>
                    <div class="spirituality-content">
                        <p><strong>Traditional View</strong>: ${spirituality.traditional}</p>
                        <p><strong>Modern Interpretation</strong>: ${spirituality.modern}</p>
                        <p><strong>Cultural Explanation</strong>: ${spirituality.explanation}</p>
                    </div>
                </div>
                
                <div class="adaptation-section">
                    <h3><i class="fas fa-lightbulb"></i> Adaptation Advice</h3>
                    <p>${position.adaptation}</p>
                    <div class="button-group">
                        <button class="learn-more-btn" onclick="liurenSystem.openCourse('${position.id}')">
                            <i class="fas fa-graduation-cap"></i> Learn More About ${position.name}
                        </button>
                        <button class="spirituality-btn" onclick="liurenSystem.openCourse('spirituality')">
                            <i class="fas fa-mountain"></i> Traditional Energy Concepts
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Scroll to results
        detailedResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Store current result
        this.currentResult = position;
    }
    
    // Open course in learning center
    openCourse(courseId) {
        // Close all courses
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
        });
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('show');
        });
        
        // Open target course
        const header = document.querySelector(`.accordion-header[data-id="${courseId}"]`);
        if (header) {
            header.classList.add('active');
            document.getElementById(`content-${courseId}`).classList.add('show');
            
            // Scroll to learning center
            document.querySelector('.knowledge-area').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    }
    
    // Simplified lunar conversion (fallback)
    simplifiedLunarConvert(date) {
        const hour = date.getHours();
        let hourIndex;
        
        // Convert to Chinese hour
        if (hour >= 23 || hour < 1) hourIndex = 1;        // Zi
        else if (hour >= 1 && hour < 3) hourIndex = 2;    // Chou
        else if (hour >= 3 && hour < 5) hourIndex = 3;    // Yin
        else if (hour >= 5 && hour < 7) hourIndex = 4;    // Mao
        else if (hour >= 7 && hour < 9) hourIndex = 5;    // Chen
        else if (hour >= 9 && hour < 11) hourIndex = 6;   // Si
        else if (hour >= 11 && hour < 13) hourIndex = 7;  // Wu
        else if (hour >= 13 && hour < 15) hourIndex = 8;  // Wei
        else if (hour >= 15 && hour < 17) hourIndex = 9;  // Shen
        else if (hour >= 17 && hour < 19) hourIndex = 10; // You
        else if (hour >= 19 && hour < 21) hourIndex = 11; // Xu
        else hourIndex = 12;                              // Hai
        
        // For simplicity, use solar month/day
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        return {
            getMonth: () => month,
            getDay: () => day,
            getTime: () => hourIndex,
            getTimeZhi: () => ['Zi', 'Chou', 'Yin', 'Mao', 'Chen', 'Si', 'Wu', 'Wei', 'Shen', 'You', 'Xu', 'Hai'][hourIndex - 1]
        };
    }
    
    // Get hour name
    getHourName(hourIndex) {
        const names = ['Zi', 'Chou', 'Yin', 'Mao', 'Chen', 'Si', 'Wu', 'Wei', 'Shen', 'You', 'Xu', 'Hai'];
        return names[hourIndex - 1] || '';
    }
    
    // Get hour range
    getHourRange(hourIndex) {
        const ranges = [
            "23:00-01:00", "01:00-03:00", "03:00-05:00", "05:00-07:00",
            "07:00-09:00", "09:00-11:00", "11:00-13:00", "13:00-15:00",
            "15:00-17:00", "17:00-19:00", "19:00-21:00", "21:00-23:00"
        ];
        return ranges[hourIndex - 1] || "";
    }
}

// ==================== MODAL FUNCTIONS ====================
function showAbout() {
    const modal = document.getElementById('info-modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <h2>About Liuren Divination</h2>
        <p>Liuren (小六壬) is a traditional Chinese divination method that has been used for centuries. The name means "Small Six Ren" - referring to the six palm positions used in the system.</p>
        
        <h3>Historical Background</h3>
        <p>Liuren originated from Chinese folk traditions and was influenced by Daoist philosophy. It was commonly used by ordinary people for daily decision-making, unlike more complex systems like I Ching which were studied by scholars.</p>
        
        <h3>How It Works</h3>
        <p>The system uses three numbers (month, day, hour from the lunar calendar) to determine which of the six palm positions applies to a situation. Each position has specific meanings related to different aspects of life.</p>
        
        <h3>Cultural Significance</h3>
        <p>Liuren represents an important part of China's intangible cultural heritage. It reflects traditional Chinese concepts of time, space, and the interconnectedness of all things through the Five Elements theory.</p>
        
        <h3>Modern Usage</h3>
        <p>Today, Liuren is still practiced by some traditional Chinese medicine practitioners, Feng Shui masters, and those interested in preserving cultural traditions. It's often used for personal reflection rather than serious prediction.</p>
        
        <div class="modal-footer">
            <button onclick="closeModal()">Close</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function showCulturalContext() {
    const modal = document.getElementById('info-modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <h2>Cultural Context of Liuren</h2>
        
        <h3><i class="fas fa-yin-yang"></i> Philosophical Foundations</h3>
        <p>Liuren is based on several key concepts from Chinese philosophy:</p>
        <ul>
            <li><strong>Yin and Yang</strong>: The balance of opposing forces</li>
            <li><strong>Five Elements (五行)</strong>: Wood, Fire, Earth, Metal, Water and their interactions</li>
            <li><strong>Qi (氣)</strong>: Vital energy that flows through all things</li>
            <li><strong>Dao (道)</strong>: The natural way or path of the universe</li>
        </ul>
        
        <h3><i class="fas fa-calendar-alt"></i> Lunar Calendar System</h3>
        <p>Unlike Western solar calendars, the traditional Chinese calendar is lunisolar - based on both moon phases and solar terms. This reflects the Chinese view of time as cyclical rather than linear.</p>
        
        <h3><i class="fas fa-clock"></i> Chinese Time Concept</h3>
        <p>The 12 two-hour periods (時辰) each have unique characteristics and associations with animals, elements, and energies. This reflects the belief that time has qualitative differences, not just quantitative.</p>
        
        <h3><i class="fas fa-hand-paper"></i> Palm Divination Tradition</h3>
        <p>Using the palm for divination is common in many cultures. In China, the palm represents the microcosm of the universe, with different positions corresponding to different aspects of life and cosmic forces.</p>
        
        <h3><i class="fas fa-book"></i> Ethical Considerations</h3>
        <p>Traditional Chinese divination emphasizes:</p>
        <ul>
            <li>Free will over predestination</li>
            <li>Moral cultivation as the foundation</li>
            <li>Flexible interpretation over rigid prediction</li>
            <li>Using insights for self-improvement</li>
        </ul>
        
        <div class="quote">
            <p>"Heaven's way is to benefit without harming; the sage's way is to act without contending."</p>
            <p class="source">— Dao De Jing, Chapter 81</p>
        </div>
        
        <div class="modal-footer">
            <button onclick="closeModal()">Close</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function showHowToUse() {
    const modal = document.getElementById('info-modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <h2>How to Use This System</h2>
        
        <h3><i class="fas fa-1"></i> Step 1: Choose a Method</h3>
        <p>You have three options:</p>
        <ul>
            <li><strong>By Time</strong>: Select specific lunar month, day, and hour</li>
            <li><strong>Current Time</strong>: Use your current time (automatically converted to lunar)</li>
            <li><strong>Random</strong>: Let the system choose random numbers</li>
        </ul>
        
        <h3><i class="fas fa-2"></i> Step 2: Understand Lunar Dates</h3>
        <p>Liuren uses the traditional Chinese lunar calendar:</p>
        <ul>
            <li><strong>Months</strong>: 1-12 (正月 to 臘月)</li>
            <li><strong>Days</strong>: 1-30 (following moon phases)</li>
            <li><strong>Hours</strong>: 12 two-hour periods starting at 11 PM</li>
        </ul>
        
        <h3><i class="fas fa-3"></i> Step 3: Read the Results</h3>
        <p>Each palm position has multiple layers of meaning:</p>
        <ul>
            <li><strong>Basic meaning</strong>: General interpretation</li>
            <li><strong>Specific aspects</strong>: Career, wealth, love, health, travel</li>
            <li><strong>Traditional concepts</strong>: Weather associations, energy concepts</li>
            <li><strong>Adaptation advice</strong>: How to apply the interpretation flexibly</li>
        </ul>
        
        <h3><i class="fas fa-4"></i> Step 4: Use the Learning Center</h3>
        <p>For deeper understanding, explore the Learning Center:</p>
        <ul>
            <li>Read about each palm position in detail</li>
            <li>Learn adaptation methods</li>
            <li>Study traditional energy concepts</li>
            <li>Check the glossary of terms</li>
        </ul>
        
        <h3><i class="fas fa-lightbulb"></i> Tips for Best Results</h3>
        <ul>
            <li>Approach with an open mind</li>
            <li>Consider the context of your question</li>
            <li>Use results for reflection, not prediction</li>
            <li>Keep a journal of your divinations</li>
            <li>Respect the cultural origins</li>
        </ul>
        
        <h3><i class="fas fa-exclamation-triangle"></i> Important Notes</h3>
        <div class="warning">
            <p>This tool is for:</p>
            <ul>
                <li>Cultural education and exploration</li>
                <li>Personal reflection and insight</li>
                <li>Understanding traditional Chinese thought</li>
            </ul>
            <p>This tool is NOT for:</p>
            <ul>
                <li>Making major life decisions</li>
                <li>Predicting the future with certainty</li>
                <li>Replacing professional advice</li>
            </ul>
        </div>
        
        <div class="modal-footer">
            <button onclick="closeModal()">Close</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('info-modal').style.display = 'none';
}

// ==================== INITIALIZATION ====================
// Create global instance
const liurenSystem = new LiurenSystem();

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    liurenSystem.init();
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('info-modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Add CSS for modal and additional styles
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }
        
        .modal-content {
            background-color: #FFFEF7;
            margin: 5% auto;
            padding: 40px;
            border-radius: 16px;
            width: 90%;
            max-width: 800px;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
            border: 2px solid #E8DFCA;
        }
        
        .close-modal {
            position: absolute;
            top: 20px;
            right: 25px;
            font-size: 28px;
            font-weight: bold;
            color: #8B1A1A;
            cursor: pointer;
        }
        
        .modal h2 {
            color: #8B1A1A;
            margin-bottom: 20px;
            border-bottom: 3px solid #1E6B8B;
            padding-bottom: 10px;
        }
        
        .modal h3 {
            color: #5D4037;
            margin: 25px 0 15px;
        }
        
        .modal-footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #E8DFCA;
        }
        
        .modal-footer button {
            background: #8B1A1A;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .modal-footer button:hover {
            background: #5D0F0F;
            transform: translateY(-2px);
        }
        
        .warning {
            background: #FFEBEE;
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #C62828;
            margin: 20px 0;
        }
        
        .quote {
            font-style: italic;
            color: #5D4037;
            padding: 20px;
            background: #F8F4E9;
            border-radius: 10px;
            margin: 20px 0;
            text-align: center;
        }
        
        .quote .source {
            text-align: right;
            font-size: 0.9rem;
            color: #8D6E63;
            margin-top: 10px;
        }
        
        /* Additional styles for spirituality content */
        .spirituality-section, .traditional-concepts {
            background: #F5F5F5;
            padding: 20px;
            border-radius: var(--border-radius-md);
            margin: 20px 0;
            border-left: 4px solid #9C27B0;
        }
        
        .spirituality-section h4, .traditional-concepts h3 {
            color: #9C27B0;
            margin-bottom: 15px;
        }
        
        .spirituality-content, .traditional-concepts .spirituality-content {
            background: white;
            padding: 15px;
            border-radius: var(--border-radius-sm);
            margin: 15px 0;
        }
        
        .learn-more-btn, .spirituality-btn {
            background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: var(--border-radius-sm);
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin: 5px;
        }
        
        .spirituality-btn {
            background: linear-gradient(135deg, #9C27B0, #BA68C8);
        }
        
        .learn-more-btn:hover, .spirituality-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-sm);
        }
        
        .button-group {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }
    `;
    document.head.appendChild(additionalStyles);
});

// Make functions globally available
window.showAbout = showAbout;
window.showCulturalContext = showCulturalContext;
window.showHowToUse = showHowToUse;
window.closeModal = closeModal;
window.liurenSystem = liurenSystem;
