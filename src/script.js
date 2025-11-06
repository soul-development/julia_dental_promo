import { translations } from './translations';
        // Current language
        let currentLanguage = 'en';

        // Replace all tooth emojis with SVG icon markup
        // FIXME: зачем вызывать каждый раз эту функцию, если можно сразу в translations засунуть это все?
        // вынести иконку как переменную или функцию, чтобы поддерживать динамические размеры и в translations уже вставлять через `${icon(...args)}`
        function replaceToothEmoji(text, iconHeight) {
            const style = iconHeight ? `style="height: ${iconHeight}px;"` : '';
            if (typeof text !== 'string') return text;
            const icon = `<img src="/cropped_tooth.svg" alt="" class="tooth-icon" ${style}>`;
            return text.replace(/🦷/g, icon);
        }

        // Translation function
        function translate(key) {
            const keys = key.split('.');
            let value = translations[currentLanguage];
            
            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k];
                } else {
                    console.warn(`Translation key not found: ${key}`);
                    return key;
                }
            }
            
            return value;
        }

        // Apply translations to the page
        function applyTranslations() {
            // Update all elements with data-translate attribute
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                const iconHeight = element.getAttribute('data-icon-height');
                const translation = translate(key);
                
                if (Array.isArray(translation)) {
                    // Handle lists
                    if (element.tagName === 'UL' || element.tagName === 'OL') {
                        element.innerHTML = translation.map(item => `<li>${replaceToothEmoji(item, iconHeight)}</li>`).join('');
                    }
                } else if (key === 'clientStats' || key === 'juliaRecommendationMetlife' || key === 'juliaRecommendationDelta' || key === 'dentalProfessionalsAtention' || key === 'metlifeWarning') {
                    element.innerHTML = replaceToothEmoji(translation, iconHeight);
                } else {
                    // If value contains the tooth emoji, inject HTML with SVG icon
                    const asString = typeof translation === 'string' ? translation : '';
                    if (asString.includes('🦷')) {
                        element.innerHTML = replaceToothEmoji(asString, iconHeight);
                    } else {
                        element.textContent = translation;
                    }
                }
            });

            // Handle special coverage explanation
            const coverageDiv = document.getElementById('coverageExplanation');
            if (coverageDiv) {
                const explanations = translate('coverageExplanation');
                if (Array.isArray(explanations)) {
                    coverageDiv.innerHTML = explanations.map(text => `<p>${replaceToothEmoji(text)}</p>`).join('');
                }
            }


            // Handle contact information
            const contactDiv = document.getElementById('contactInfo');
            if (contactDiv) {
                const info = translate('contactInfo');
                const phoneLabel = translate('phoneLabel');
                const websiteLabel = translate('websiteLabel');
                const emailLabel = translate('emailLabel');
                const calendarLabel = translate('calendarLabel');
                const saveContact = translate('saveContact');
                
                contactDiv.innerHTML = `
                    <p><strong>${info.name}<br>
                    ${info.title}<br>
                    ${info.license}</strong></p>
                    
                    <p><strong>📞 ${phoneLabel}</strong> <a href="tel:+13479228037">${info.phone}</a><br>
                    <strong>🌐 ${websiteLabel}</strong> <a href="https://www.juliabarinova.com" target="_blank">${info.website}</a><br>
                    <strong>📧 ${emailLabel}</strong> <a href="mailto:julia@juliabarinova.com">${info.email}</a><br>
                    <strong>📅 ${calendarLabel}</strong> <a href="https://calendly.com/jbarinova" target="_blank">${info.calendar}</a><br>
                    <strong>👤 ${saveContact}</strong> <a href="https://hihello.com/hi/jbarinova" target="_blank">${info.saveContact}</a></p>
                    
                    <p><strong>${info.reviewsText}</strong><br>
                    <a href="https://share.google/gyCCk8gsCUzwaWodn" target="_blank">${info.reviewsLink}</a></p>
                `;
            }

            // Handle partial translations for enrollment steps
            document.querySelectorAll('[data-translate-partial]').forEach(element => {
                const key = element.getAttribute('data-translate-partial');
                const translation = translate(key);
                
                if (element.tagName === 'SPAN') {
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            });

            // Update elements with data-translate-html for HTML content
            document.querySelectorAll('[data-translate-html]').forEach(element => {
                const key = element.getAttribute('data-translate-html');
                const translation = translate(key);
                element.innerHTML = replaceToothEmoji(translation);
            });
        }

        function switchLanguage(lang) {
            // Update button states
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Update current language
            currentLanguage = lang;
            
            // Update document language attribute for privacy modal
            document.documentElement.lang = lang;

            // Apply translations
            applyTranslations();

            // Store language preference
            localStorage.setItem('preferredLanguage', lang);
        }

        window.switchLanguage = switchLanguage;

        // Load saved language preference
        document.addEventListener('DOMContentLoaded', function() {
            const savedLang = localStorage.getItem('preferredLanguage') || 'en';
            currentLanguage = savedLang;
            
            // Set document language attribute
            document.documentElement.lang = savedLang;
            
            // Update button state
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[onclick="switchLanguage('${savedLang}')"]`).classList.add('active');
            
            // Apply initial translations
            applyTranslations();
        });

        // Partners Section Logic
        const partnersData = {
            "New York": [
                { name: "Dr. Boris Zats, Dr Dmitry Tokar, Sheepsheadbay Oral Surgery, Forest Hills Oral Surgery, Brooklyn",city: "New York City", link: "https://share.google/O7ZBgf7rdE5hY2oX2"},
                { name: "Sheepshead Bay Oral Surgery PLLC - MY ORAL SURGEON",city: "New York City", link: "https://share.google/AXFZCzTV6frl7MzW8"},
                { name: "Royzman & Poznyansky, DDS (DENTAL CENTER OF BROOKLYN)",city: "New York City", link: "https://share.google/2260Jitf3tj7fnNFL"},
                { name: "Family Smile Dental",city: "New York City", link: "https://share.google/MyapQ9y2glGcX7Afs"},
                { name: "Dr. Mikhail Ruvinsky",city: "New York City", link: "https://share.google/z4oXraxYRLC7EVgNM"},
                {name: "Dr. David Poiman, DDS,  Yekaterina (Katya) Ryumina, Dental Hygienist ☺️",city: "New York City", link: "https://share.google/aAwz0Rxr7adJ15nzJ"},
                { name: "Alfa Dental", city: "New York City", link: "https://share.google/DgDz1bGgVqfbZbtjV" },
                { name: "Leona Kotlyar, DDS - Pristine Pediatric Dentistry", city: "New York City", link: "https://share.google/b86pT6BGa773OLruL" },
                { name: "Vadim Firdman Luxury Dental, PC", city: "New York City", link: "https://share.google/MAOOt0VPal0MGjnOi" },
                { name: "Leona Kotlyar, Pediatric Dentist, Brooklyn, NY", city: "New York City", link: "https://g.co/kgs/nxLiScr" },
                { name: "Garry Shnayder, Oral Surgeon, Brooklyn, NY", city: "New York City", link: "https://www.pristineoralsurgery.com/meet-us/dr-garry-shnayder/" },
            ],
            "Pennsylvania": [
                { name: "Dental Beauty", city: "Philadelphia", link: "https://share.google/v3iJsA63ipHEAvqKa" },
                { name: "Dr Maxim Babiner, Babiner Dental", city: "Philadelphia", link: "https://share.google/Qx537wYznsP6Lfgbr" },
                { name: "Boris Babiner, DDS. Implantology", city: "Philadelphia", link: "https://share.google/KLL3G0Ic3PqLHBzT6" },
                { name: "Alexandr Volchonok DDS PC", city: "Philadelphia", link: "https://share.google/tHfHkbpojsODJxLLh" },
                { name: "Advanced Dental Solutions", city: "Pittsburgh", link: "https://share.google/iAtwPef4Lcrc7BhJ0" },
                { name: "Dr David Agia Southampton Aesthetic Dentistry", city: "Southampton", link: "https://share.google/KixNABUGX5SqFz0qk" },
                { name: "Pennsylvania Center for Advanced Dentistry - Dr. Olga Shvarts", city: "Southampton", link: "https://g.co/kgs/29UABT9" },
                // { name: "Dr Olga Shvarts", city: "", link: "https://g.co/kgs/29UABT9" }
            ],
            "Illinois": [
                { name: "Dr Konstantin Gromov, Implantwide.com", city: "Schaumburg", link: "https://share.google/GDNd620yH51Yo5nRq" },
                { name: "Dr. Gelena Roytman, DDS", city: "Chicago", link: "https://share.google/5xZD3bLT6k7JzC0OP" }
            ],
            "California": [
                { name: "Kevin Kafayi, D.D.S.", city: "San Francisco", link: "https://share.google/LUCVoOBnyykzbKjIm" },
                { name: "Alex Rabinovich, DDS, MD", city: "San Francisco", link: "https://share.google/DUJV6IjG7gWbE6iQr" },
                { name: "Nataly Vilderman, D.D.S.", city: "San Francisco", link: "https://share.google/qy2U2UOCFgQ8QnSqo" },
                { name: "Dr. Valentina Yasinsky", city: "San Francisco", link: "https://share.google/SVEi55QNBqT5JCQFU" },
                { name: "San Francisco Reconstructive Periodontics - Greg Meyers, DDS, MSD", city: "San Francisco", link: "https://share.google/UgB58zct5TaQ6Nld5" }
            ],
            "Florida": [
                { name: "Dr. Alexander Levin, DDS.", city: "Palm Coast", link: "https://share.google/SOq6Cyz0djjC6Hy1L" }
            ],
            "New Jersey": [
                { name: "Magic Dental Lawrenceville", city: "Lawrenceville", link: "https://share.google/z8spbjg2oenGxaPw1" },
                { name: "Dr. Yuliya Khodak DMD", city: "New Jersey", link: "https://share.google/9Kqz6eXCGqSMQ3k07" }
            ],
            "Maryland": [
                { name: "Dr. Nina Aks", city: "Germantown", link: "https://share.google/pxdFsSTyM0tsfPM0N" },
                { name: "Dr. Anna Grinitsyna, Cosmetic Dentist Injector", city: "Gaithersburg", link: "https://gaithersburgdentalbeauty.com/" }
            ]
        };

        const partnerImages = [
            "partners/Alexandr Volchonok DDS PC 2.jpeg",
            "partners/Alexandr Volchonok DDS PC 3.jpeg",
            "partners/Alexandr Volchonok DDS PC.jpeg",
            "partners/Babiner Dental.jpeg",
            "partners/Dr Boris Zats 2.jpeg",
            "partners/Dr Boris Zats.jpeg",
            "partners/Dr Maxim Babiner, Babiner Dental 2.jpeg",
            "partners/Dr Maxim Babiner, Babiner Dental.jpeg",
            "partners/Dr. Kontantin Gromov, Periodontist,  Implantwide.jpeg",
            "partners/Team of Dental Beauty, Dr Andrey Kurudim.jpeg",
            "partners/Yekaterina(Katya) Ryumina, Amazing Dental Hygieni.jpeg"
        ];
        
        let currentImageIndex = 0;

        function updateModalImage(index) {
            const modalImg = document.getElementById("modalImage");
            const captionText = document.getElementById("caption");
            const imageUrl = partnerImages[index];
            const rawName = imageUrl.split('/').pop().split('.').slice(0, -1).join('.');
            const name = rawName.replace(/ \d+$/, '').trim();

            modalImg.src = imageUrl;
            captionText.innerHTML = name;
            currentImageIndex = index;
        }

        function createPartnerGallery() {
            const galleryContainer = document.getElementById('partners-gallery-container');
            if (!galleryContainer) return;
            galleryContainer.innerHTML = ''; // Clear previous content to prevent duplicates

            const scrollContainer = document.createElement('div');
            scrollContainer.className = 'partners-gallery-scroll';

            partnerImages.forEach((imageUrl, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'partner-gallery-item';

                const img = document.createElement('img');
                img.src = imageUrl;
                
                img.onclick = function() {
                    const modal = document.getElementById("imageModal");
                    modal.style.display = "block";
                    updateModalImage(index);
                }

                const rawName = imageUrl.split('/').pop().split('.').slice(0, -1).join('.');
                const name = rawName.replace(/ \d+$/, '').trim();
                const nameElement = document.createElement('p');
                nameElement.textContent = name;

                galleryItem.appendChild(img);
                galleryItem.appendChild(nameElement);
                scrollContainer.appendChild(galleryItem);
            });

            galleryContainer.appendChild(scrollContainer);

            if (partnerImages.length > 3) {
                const leftButton = document.createElement('button');
                leftButton.textContent = '‹';
                leftButton.className = 'scroll-btn left';
                leftButton.onclick = () => {
                    scrollContainer.scrollBy({ left: -320, behavior: 'smooth' });
                };

                const rightButton = document.createElement('button');
                rightButton.textContent = '›';
                rightButton.className = 'scroll-btn right';
                rightButton.onclick = () => {
                    scrollContainer.scrollBy({ left: 320, behavior: 'smooth' });
                };

                galleryContainer.appendChild(leftButton);
                galleryContainer.appendChild(rightButton);
            }
        }
        const paginationContainer = document.querySelector('.partners-pagination');
        const contentContainer = document.querySelector('.partners-content');

        if (paginationContainer && contentContainer) {
            const states = Object.keys(partnersData);

            states.forEach((state, index) => {
                const button = document.createElement('button');
                button.className = 'partner-page-btn';
                button.textContent = state;
                button.dataset.state = state;
                if (index === 0) {
                    button.classList.add('active');
                }
                paginationContainer.appendChild(button);

                const list = document.createElement('div');
                list.className = 'partner-list';
                list.dataset.state = state;
                if (index === 0) {
                    list.classList.add('active');
                }

                let partnersHtml = '';
                partnersData[state].forEach(partner => {
                    partnersHtml += `<div class="partner-item"><a href="${partner.link}" target="_blank" rel="noopener noreferrer" . >${partner.name} (${partner.city})</a></div>`;
                });

                list.innerHTML = partnersHtml;
                contentContainer.appendChild(list);
            });

            paginationContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('partner-page-btn')) {
                    const targetState = e.target.dataset.state;

                    document.querySelectorAll('.partner-page-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');

                    document.querySelectorAll('.partner-list').forEach(list => {
                        list.classList.remove('active');
                        if (list.dataset.state === targetState) {
                            list.classList.add('active');
                        }
                    });
                }
            });
        }

        document.querySelectorAll('.testimonial-more a').forEach(link => {
            link.addEventListener('click', function(e) {
                const card = this.closest('.testimonial-card');
                const text = card.querySelector('.testimonial-text');
                
                if (this.textContent === 'More' || this.textContent === 'Подробнее' || this.textContent === 'Детальніше') {
                    e.preventDefault();
                    text.style.webkitLineClamp = 'unset';
                    if (document.documentElement.lang === 'ru') this.textContent = 'Свернуть';
                    else if (document.documentElement.lang === 'uk') this.textContent = 'Згорнути';
                    else this.textContent = 'Less';
                } else {
                    e.preventDefault();
                    text.style.webkitLineClamp = '3';
                    if (document.documentElement.lang === 'ru') this.textContent = 'Подробнее';
                    else if (document.documentElement.lang === 'uk') this.textContent = 'Детальніше';
                    else this.textContent = 'More';
                }
            });
        });

        // Privacy Policy Modal functionality
        function initPrivacyModal() {
            const privacyModal = document.getElementById('privacyModal');
            const privacyModalBody = document.getElementById('privacyModalBody');
            const privacyClose = document.querySelector('.privacy-close');
            
            // Function to open privacy modal
            function openPrivacyModal() {
                const currentLang = document.documentElement.lang || 'en';
                const content = translations[currentLang].privacyPolicyContent;
                privacyModalBody.innerHTML = content;
                privacyModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
            
            // Function to close privacy modal
            function closePrivacyModal() {
                privacyModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
            
            // Event listener for privacy notes link (using event delegation)
            document.addEventListener('click', function(e) {
                if (e.target && e.target.id === 'privacy-notes-link') {
                    e.preventDefault();
                    openPrivacyModal();
                }
            });
            
            // Event listener for close button
            if (privacyClose) {
                privacyClose.addEventListener('click', closePrivacyModal);
            }
            
            // Event listener for clicking outside modal content
            privacyModal.addEventListener('click', function(e) {
                if (e.target === privacyModal) {
                    closePrivacyModal();
                }
            });
            
            // Event listener for ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && privacyModal.style.display === 'block') {
                    closePrivacyModal();
                }
            });
        }
        
        // Initialize privacy modal when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initPrivacyModal);
        } else {
            initPrivacyModal();
        }

        // Dental Professionals Modal functionality
        function initDentalProfessionalsModal() {
            const dentalModal = document.getElementById('dentalProfessionalsModal');
            const dentalModalBody = document.getElementById('dentalProfessionalsModalBody');
            const dentalClose = document.querySelector('.dental-close');
            
            // Function to open dental professionals modal
            function openDentalModal() {
                const currentLang = document.documentElement.lang || 'en';
                const content = replaceToothEmoji(translations[currentLang].dentalProfessionalsFullContent, 30);
                dentalModalBody.innerHTML = content;
                dentalModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
            
            // Function to close dental professionals modal
            function closeDentalModal() {
                dentalModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
            
            // Event listener for dental professionals link (using event delegation)
            document.addEventListener('click', function(e) {
                if (e.target && e.target.id === 'dental-professionals-link') {
                    e.preventDefault();
                    openDentalModal();
                }
            });
            
            // Event listener for close button
            if (dentalClose) {
                dentalClose.addEventListener('click', closeDentalModal);
            }
            
            // Event listener for clicking outside modal content
            dentalModal.addEventListener('click', function(e) {
                if (e.target === dentalModal) {
                    closeDentalModal();
                }
            });
            
            // Event listener for ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && dentalModal.style.display === 'block') {
                    closeDentalModal();
                }
            });
        }

        // Initialize dental professionals modal when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initDentalProfessionalsModal);
        } else {
            initDentalProfessionalsModal();
        }
    {/* </script> */}