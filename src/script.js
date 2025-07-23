{/* <script> */}
        // Translation data
        const translations = {
            en: {
                // Hero section
                // heroTitle: "🦷 HAPPY SMILE TODAY: Your All-Inclusive Dental Coverage!",
                // heroTitle: "🦷 HAPPY SMILE TODAY: «All Inclusive» Dental Insurance That Works: Right away! Day 1!",
                heroTitle: "🦷 HAPPY SMILE TODAY: Join the revolution in dental care - no waiting, no nonsense, just protection.",
                baner1: "IMPLANTS, CROWNS, CANALS COVERED day 1",
                baner2: "NO WAITING PERIOD. MISSING TOOTH-OK",
                baner3: "from $55/mo",
                go1: "👇 TO REVIEW and REGISTER:",
                go2: "👆 GO",
                advisorName: "Brought to you by Julia Barinova, MBA – Licensed Insurance Advisor and Broker",
                meetJulia: "👋 Meet Julia",
                juliaIntro: "Hello, I'm Julia Barinova, an independent Insurance Advisor and Broker based in New York City, with over 20 years of experience in financial services - from investment consulting and hedge fund marketing- to personalized insurance planning.",
                juliaPassion: "I am passionate about helping people protect themselves and their families and businesses from devastating financial risks - whether stemming from serious illness, income loss, long-term care needs, or the loss of a loved one - by educating them and building smart, customized insurance strategies. I also love uncovering innovative solutions that fill critical gaps and save real money on essential services like dental care.",
                clientStats: `👉 Dental care in the U.S. is notoriously expensive. Sadly, many people delay essential checkups and treatments simply because they can't afford them - only to face more serious dental problems later that may cost a fortune to fix. Or, just neglect their mouth altogether, which may result in significant overall health problems.
                <br><br>
                Most individual dental insurance plans - unless offered through an employer - come with long waiting periods for major procedures like crowns and root canals, and almost never cover implants.
                <br><br>
                About three years ago, I discovered a "hidden gem": group-access MetLife PPO and Delta Dental PPO plans with NO waiting periods and NO missing tooth exclusions - even for major treatments like implants and crowns. It worked so well for me(I saved nearly $2,000 on an implant) that I became a licensed representative for the company offering them, thrilled to help others benefit too.
                <br><br>
                Since then, over 1,000 clients and their families nationwide have used these plans to save thousands of dollars on cleanings, fillings, crowns, root canals - and yes, implants. Even local dentists in New York City, Philadelphia,Chicago and San Francisco, with whom we eventually developed warm professional relationships, were somewhat skeptical at first, but later became my strongest advocates - now referring hundreds of patients each year to get covered.
                <br><br>
                Now it's your turn! I'd be thrilled to help you restore your healthy, happy smile - with two trusted plans I personally use and recommend, and local dental professionals you already know and trust , or whom we can recommend, if needed.`,
                // Plans section
                plansTitle: "🌟 The Two Plans I Recommend",
                plansIntro: "MetLife PPO (PDP Network) and Delta Dental PPO 1500 - accepted and recommended by my trusted network of dentists in: New York, Philadelphia, Miami, San Francisco, Chicago, and more (ask us for a referral in your area!)",
                sharedAdvantages: "🔹 Shared Advantages of Both Plans",
                sharedList: [
                    "✔️ Accepted by most dentists nationwide",
                    "✔️ NO WAITING PERIOD - even for implants and crowns",
                    "✔️ NO MISSING TOOTH clause: covers already absent tooth",
                    "✔️ Coverage starts on the 1st of next month (if enrolled by the 20th of the current month)",
                    "✔️ Annual benefits reset on Jan 1 (you may be able to double your savings if planned strategically)",
                    "✔️ Minimal out-of-pocket surprises (receive an estimate of coverage from the Insurance company prior to beginning of a serious dental project!)"
                ],
                
                // MetLife section
                metlifeTitle: "🦷 MetLife PPO Platinum (PDP Network)",
                metlifeNotAvailable: "🚫 Not available in: AK, ID, LA, ME, MD, MT, NH, NM, OR, SD, WA",
                whyClientsLove: "Why Clients Love It:",
                metlifeFeatures: [
                    "Generous Annual Maximum Benefit: $3,000/year",
                    "Low Annual deductible: $25/person, $75 family based on ZIP code",
                    "NO Waiting Period, even on implants or crowns",
                    "NO Missing Teeth Clause",
                    "Widely accepted (<a href='https://providers.online.metlife.com/findDentist?searchType=findDentistMetLife' target='_blank' rel='noopener noreferrer'>search MetLife PPO Dental Providers – PDP Network</a>)",
                    "Child Orthodontia included (up to $2,000 lifetime, under age 19 on parent's plan)"
                ],
                coverage: "Coverage:",
                metlifeCoverage: [
                    "✅ 100% – Preventive (cleanings, X-rays, exams, fluoride)",
                    "✅ 80% – Basic (extractions, gum treatment)",
                    "✅ 50% – Major (crowns, root canals, bridges, dentures, oral surgery)"
                ],
                monthlyPremiumsMetlife: "💰 Monthly Premiums for an Individual (sample rates based on ZIP code, includes $5 association membership*):",
                monthlyPremiumsDelta: "💰 Monthly Premiums for an Individual (includes $5 association membership*):",
                metlifePricing: [
                    "$96 – Pennsylvania, Ohio",
                    "$110 – New Jersey, Staten Island",
                    "$123 – New York, Chicago, Miami",
                    "$133 – San Francisco"
                ],
                juliaRecommendationMetlife: 'JULIA\'S RECOMMENDATION: Best for those needing major dental work (implants, crowns, extensive treatments) or whose provider is in-network with MetLife only (will save you more money) <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Full Plan Description 📄</a>',
                
                // Delta Dental section
                deltaTitle: "🦷 Delta Dental PPO 1500",
                deltaFeatures: [
                    "Annual benefit: $1,500/ calendar year",
                    "Carryover Benefit – roll over part of the unused benefit onto the next year",
                    "NO Waiting Period",
                    "Covers Missing Teeth",
                    "Large national network (available in all 50 states – <a href='https://www.deltadental.com/us/en/member/find-a-dentist.html' target='_blank' rel='noopener noreferrer'>search Delta Dental PPO Providers</a>)"
                ],
                deltaCoverage: [
                    "✅ 100% – Preventive",
                    "✅ 80% – Basic (extractions, root canals)",
                    "✅ 50% – Major (crowns, bridges, surgery, implants, dentures)"
                ],
                deltaPricing: [
                    "$59.50 – Individual",
                    "$108.25 – Adult + Spouse",
                    "$100.75 – Adult + Children",
                    "$161.25 – Full Family"
                ],
                juliaRecommendationDelta: 'JULIA\'S RECOMMENDATION: A reliable, budget-friendly plan. Great for families. Will keep your teeth healthy and clean at minimal monthly cost. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Full Plan Description 📄</a>',
                
                // How coverage works
                coverageWorksTitle: "💡 How Coverage Percentages Work",
                coverageExplanation: [
                    "📌 The 100% (Preventive), 80% (Basic), and 50% (Major) coverage is calculated based on the in-network negotiated rate for each dental procedure.",
                    "👩‍⚕️ In-network dentists must follow pre-set rates between them and the insurer- and your share is based on those reduced rates.",
                    "❗ Going out-of-network? You may expect somewhat higher bills and more out-of-pocket expenses. Out-of-Network option is great to have if your favorite dentist is not in-network. Usually, you will still save quite a bit of money compared to paying cash!",
                    "👉 When choosing a new dentist, try to confirm with your dentist that they're in-network with your plan to avoid surprise bills."
                ],
                
                // Enrollment
                enrollmentTitle: "📝 How to Enroll",
                enrollmentSteps: [
                    "Visit <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> by the 20th of the month to become a Member on the 1st of the following month",
                    "Enter ZIP code and date of birth",
                    "Choose participant type: Individual / Adult + Kids / Couple / Family",
                    "Select plan(s): MetLife PPO Platinum / Delta Dental PPO 1500",
                    "Add EWA Membership ($5/month-see explanation below) to access group pricing",
                    "Click Enroll - receive instant confirmation"
                ],
                youllNeedTitle: "You'll Need:",
                youllNeedList: [
                    "Full name, date of birth, SOCIAL SECURITY NUMBER (required)",
                    "Address, email, phone number",
                    "Bank account information (routing + account number)",
                    "❌ Credit/debit cards are NOT accepted"
                ],
                
                // Payment & Billing
                paymentTitle: "💳 Payment & Billing Details",
                paymentDetails: [
                    "Your bank account will be charged automatically around the 28th of each month by NuEra",
                    "Payments continue monthly until you cancel through your broker",
                    "Please ensure sufficient funds are available to avoid a $30 return/bounce/reinstatement fee"
                ],
                
                // After Enrollment
                afterEnrollmentTitle: "🗓️ After Enrollment",
                afterEnrollmentDetails: [
                    "Usually, you will appear in the insurer's system between the 8th–15th of the first month",
                    "MetLife Member ID = your SSN",
                    "Delta Dental will mail your card and provide an online ID"
                ],
                trackBenefitsTitle: "Track & Manage Your Benefits:",
                trackBenefitsList: [
                    "🔹 metlife.com (you will be able to access it by mid-month after the start of your plan)",
                    "🔹 deltadentalct.com",
                    "🔹 corenroll.com or via the Corenroll app"
                ],
                
                additionalBenefits: "Explore additional benefits through *Elevate Wellness Association ($5/month membership fee is included in the above premium estimates):",
                ewaDescription: "*Elevate Wellness Association (EWA) is a national membership organization founded in 1993 that empowers small and mid-sized companies, self-employed individuals, individuals and families across the U.S. to access group-level health and wellness benefits typically reserved for larger employers. You can chose among the following important benefits:",
                ewaBenefits: [
                    "Vision, Medical, Life, Accident",
                    "Hospital Indemnity & Critical Illness",
                    "Telemedicine & Wellness programs"
                ],
                browseOptions: "Browse your options following the same <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> link. Pick the ones you need!",
                
                // Testimonials
                testimonialsTitle: "Grateful Clients Reviews",
                
                // Contact
                contactTitle: "📇 Contact Julia Barinova, MBA",
                contactIntro: "📢 I invite you to connect with me and schedule a free consultation to discuss your insurance planning - including protecting yourselves and your loved ones with life insurance with living benefits, disability coverage, long-term care, and any other questions you may have. Having lived and worked in the U.S. for nearly 30 years, I'm happy to support new immigrants with valuable information and resources to help them build a better life.",
                thankYou: "Thank you for your interest and your business.",
                contactInfo: {
                    name: "Julia Barinova, MBA",
                    title: "Licensed Insurance Broker",
                    license: "NYS Insurance License LA-937924",
                    phone: "347-922-8037",
                    website: "www.juliabarinova.com",
                    email: "julia@juliabarinova.com",
                    calendar: "calendly.com/jbarinova",
                    reviewsText: "Check our Google reviews, including dental:",
                    reviewsLink: "All reviews",
                    saveContact: "Save contact"
                },
                dentalProfessionalsAtention: `
                <h2 class="partners-title">🦷 Attention Dental Professionals! Let's Bring More Smiles Together</h2>
            <p>Are you looking for ways to help your patients move forward with treatment faster — and with less financial hesitation?</p>
            <p>We're inviting dentists like you to partner with us in offering two exciting group-access PPO dental plans: MetLife PPO and Delta Dental PPO 1500. These plans have no waiting periods, no missing tooth exclusions, and cover major procedures like implants, crowns, and root canals — right from day one.</p>
            <ul>
                <li>✅ Patients benefit from faster approvals, lower out-of-pocket costs, and greater motivation to follow through with necessary dental work.</li>
                <li>✅ Dentists benefit from fewer cancellations, quicker treatment turnaround, and happier, more loyal patients.</li>
            </ul>
            <p>Let's work together to make quality dental care more accessible and streamlined.</p>
            <p>📩 Get in touch today — we'll gladly send plan materials, educate your team, and even refer patients who are actively looking for in-network providers in your area.</p>
            <p>Together, we can make more smiles happen — with speed, savings, and satisfaction!</p>
            <p> <a href="mailto:julia@juliabarinova.com" target="_blank" rel="noopener noreferrer">Contact us to learn more.</a></p>
                `,
                // Disclaimer
                newDisclaimer: `<div class="privacy-notice">
                THIS SUMMARY HAS BEEN PREPARED SOLELY FOR INFORMATIONAL PURPOSES BY YOUR INSURANCE BROKER TO ASSIST YOU IN THE PLAN SELECTION PROCESS. PATIENTS ARE STRONGLY ENCOURAGED TO REVIEW THE DETAILED PLAN DOCUMENTS FOR COMPREHENSIVE INFORMATION ON COVERAGE, LIMITATIONS, AND EXCLUSIONS. ALL DISCUSSIONS REGARDING TREATMENT PLANS, COVERAGE APPROVALS, AND PAYMENT RESPONSIBILITIES SHOULD BE HANDLED DIRECTLY BETWEEN YOU, YOUR DENTAL PROVIDER, AND THE INSURANCE COMPANY.<br><br>
                    <h3>🛡️ Privacy Notice</h3>
                    <p><strong>Effective Date:</strong> 2025</p>
                    <p>Julia Barinova, Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Notice explains how we collect, use, and safeguard your data when you visit our website, submit forms, or communicate with us.</p>
                    <h4>What We Collect:</h4>
                    <p>We may collect personal details you provide, including your name, contact information, and insurance preferences. We also collect non-personal data like browser type, IP address, and site activity for analytics purposes.</p>
                    <h4>How We Use Your Information:</h4>
                    <ul>
                        <li>To respond to your inquiries</li>
                        <li>To provide insurance quotes or enrollment assistance</li>
                        <li>To send important updates and helpful information (you can unsubscribe at any time)</li>
                        <li>To improve our website and user experience</li>
                    </ul>
                    <h4>We DO NOT:</h4>
                    <ul>
                        <li>Sell or rent your personal information</li>
                        <li>Share your data with third parties without your consent, except where required by law or to fulfill your insurance requests</li>
                    </ul>
                    <p><strong>Data Security:</strong> We implement industry-standard measures to protect your information. However, no internet transmission is 100% secure.</p>
                    <p><strong>Cookies:</strong> Our website may use cookies for a smoother browsing experience and basic analytics.</p>
                    <p><strong>Your Consent:</strong> By using our site, you consent to this Privacy Notice.</p>
                    <p><strong>Contact Us:</strong> If you have questions about this policy, please contact Julia Barinova at <a href="tel:+13479228037">📞 347-922-8037</a> or <a href="mailto:julia@juliabarinova.com"> 📧 julia@juliabarinova.com.</a></p>
                </div>
                <hr class="disclaimer-divider">
                <div class="rights-reserved">
                    <h3>⚖️ All Rights Reserved</h3>
                    <p>©️ 2025 Julia Barinova, Inc.</p>
                    <p>All content on this website — including text, graphics, logos, images, and downloadable materials — is the property of Julia Barinova, Inc. and protected by U.S. and international copyright laws.</p>
                    <p>Unauthorized reproduction, distribution, or use of any part of this website is strictly prohibited without prior written consent.</p>
                </div>`,

                // Partners section
                partnersTitle: "Our trusted strategic dental partners",
                partnersTitle2: "Dental Photo Gallery",
                phoneLabel: "Phone:",
                websiteLabel: "Website:",
                emailLabel: "Email:",
                calendarLabel: "Book a Call:",
                saveContact: "Save contact"
            },
            ru: {
                // Hero section
                // heroTitle: '🦷 СЧАСТЛИВАЯ УЛЫБКА СЕГОДНЯ: Стоматологическая страховка - всё покрыто с первого дня!',
                // heroTitle: '🦷 Экономия с первой улыбки: уникальное покрытие без ожиданий!',
                // heroTitle: '🦷 Стоматологическое покрытие «Все включено - улыбайся и экономь с первого дня!',
                baner1: "ИМПЛАНТЫ, КОРОНКИ, КАНАЛЫ ПОКРЫТЫ с 1 дня",
                baner2: "БЕЗ ПЕРИОДА ОЖИДАНИЯ. ОТСУТСТВУЮЩИЙ ЗУБ-ОК",
                baner3: "от $55/мес",
                go1: "👇 ДЛЯ РЕГИСТРАЦИИ ПЕРЕХОДИ",
                go2: "👆 ПЕРЕХОДИ",
                // heroTitle: '🦷 Улыбайся и экономь с первого дня: стоматологическое покрытие «Всё включено»!',
                heroTitle: '🦷 Стоматологическое покрытие «Всё включено»: Улыбайся и экономь с первого дня!',
                advisorName: "Предлагает Юлия Баринова, MBA – Лицензированный страховой консультант и брокер",
                // meetJulia: "💬 «Моя страсть - это защита».",
                // juliaIntro: "Я помогаю людям избегать разрушительных финансовых рисков - от серьёзных заболеваний до потери дохода, от необходимости долгосрочного ухода до утраты близкого человека - создавая умные, персонализированные страховые стратегии.",
                meetJulia: "👋 Давайте познакомимся",
                juliaIntro: "Привет, меня зовут Юлия Баринова, я независимый страховой консультант и брокер из Нью-Йорка с более чем 20-летним опытом в финансовых услугах - от инвестиционного консалтинга и маркетинга хедж-фондов до персонализированного страхового планирования.",
                juliaPassion: "Моя профессиональная миссия - помогать людям защитить себя, свои семьи и бизнес от разрушительных финансовых рисков - будь то серьёзная болезнь, потеря дохода, потребность в долгосрочном уходе или утрата близкого человека - обучая их и создавая умные, индивидуальные страховые стратегии. Мне также нравится находить инновационные решения, которые закрывают критические пробелы и помогают реально экономить на жизненно важных услугах, таких как стоматологическая помощь.",
                clientStats: `👉 Стоматологическое обслуживание в США печально известно своей дороговизной. К сожалению, многие люди откладывают необходимые осмотры и лечение просто потому, что не могут себе этого позволить - и в итоге сталкиваются с более серьезными стоматологическими проблемами, которые могут стоить целое состояние. Или просто пренебрегают своим ртом в целом, что может привести к значительным общим проблемам со здоровьем.
<br><br>
Большинство индивидуальных планов стоматологического страхования - если они не предлагаются через работодателя - имеют долгие периоды ожидания для серьезных процедур, таких как коронки и лечение корневых каналов, и почти никогда не покрывают импланты.
<br><br>
Около трех лет назад я обнаружила "скрытую жемчужину": групповые планы MetLife PPO и Delta Dental PPO БЕЗ периодов ожидания и БЕЗ исключений по отсутствующим зубам - даже для серьезных процедур, таких как импланты и коронки. Это сработало так хорошо для меня (я сэкономила почти $2,000 на импланте), что я стала лицензированным представителем компании, предлагающей их, с радостью помогая другим получить такую же выгоду.
<br><br>
С тех пор более 1,000 клиентов и их семей по всей стране воспользовались этими планами, чтобы сэкономить тысячи долларов на чистках, пломбах, коронках, лечении корневых каналов - и да, имплантах. Даже местные стоматологи в Нью-Йорке, Филадельфии, Чикаго и Сан-Франциско, с которыми мы в конечном итоге развили теплые профессиональные отношения, поначалу были несколько скептически настроены, но позже стали моими самыми сильными сторонниками - теперь они направляют сотни пациентов каждый год, чтобы те получили покрытие.
<br><br>
Теперь ваша очередь! Я была бы рада помочь вам восстановить вашу здоровую, счастливую улыбку - с двумя проверенными планами, которые я лично использую и рекомендую, и местными стоматологами, которых вы уже знаете и которым доверяете, или которых мы можем рекомендовать, если необходимо.`,
                // Plans section
                plansTitle: "🌟 Два плана, которые я рекомендую",
                plansIntro: "MetLife PPO (PDP Network) и Delta Dental PPO 1500 - принимаются и рекомендованы моей проверенной сетью стоматологов в Нью-Йорке, Филадельфии, Майами, Сан-Франциско, Чикаго и других городах. (Спросите меня о враче в вашем регионе!)",
                sharedAdvantages: "🔹 Общие преимущества обоих планов",
                sharedList: [
                    "✔️ Принимаются большинством стоматологов по всей стране",
                    "✔️ НЕТ ПЕРИОДА ОЖИДАНИЯ - даже на импланты и коронки",
                    "✔️ Покрытие уже отсутствующих зубов (без исключения)",
                    "✔️ Начало действия - с 1 числа следующего месяца (если зарегистрироваться до 20 числа текущего)",
                    "✔️ Лимит обновляется 1 января (можно удвоить выгоду, если правильно спланировать)",
                    "✔️ Минимум сюрпризов - можно заранее запросить оценку покрытия"
                ],
                
                // MetLife section
                metlifeTitle: "🦷 MetLife PPO Platinum (PDP Network)",
                metlifeNotAvailable: "🚫 Недоступен в: AK, ID, LA, ME, MD, MT, NH, NM, OR, SD, WA",
                whyClientsLove: "Почему клиенты выбирают этот план:",
                metlifeFeatures: [
                    "Максимальное покрытие: $3,000 в год",
                    "Низкий ежегодный дедактибл: $25 на человека, $75 на семью",
                    "Без периода ожидания, даже для имплантов и коронок",
                    "Покрытие отсутствующих зубов",
                    "Принимается широкой сетью (<a href='https://providers.online.metlife.com/findDentist?searchType=findDentistMetLife' target='_blank' rel='noopener noreferrer'>MetLife PPO Dental – PDP Network</a>)",
                    "Детская ортодонтия до $2,000 lifetime (до 19 лет)"
                ],
                coverage: "Покрытие:",
                metlifeCoverage: [
                    "✅ 100% – Профилактика (чистка, рентген, осмотр, фтор)",
                    "✅ 80% – Базовые процедуры (пломбы, удаление, лечение дёсен)",
                    "✅ 50% – Крупные процедуры (импланты, коронки, каналы, мосты, протезы, хирургия)"
                ],
                monthlyPremiumsMetlife: "💰 Примерные ежемесячные стоимости, в зависимости от ZIP-кода (включая $5 членский взнос):",
                monthlyPremiumsDelta: "💰 Примерные ежемесячные стоимости(включая $5 членский взнос):",
                metlifePricing: [
                    "$96 – Пенсильвания, Огайо",
                    "$110 – Нью-Джерси, Стейтен-Айленд",
                    "$123 – Нью-Йорк, Чикаго, Майами",
                    "$133 – Сан-Франциско"
                ],
                juliaRecommendationMetlife: 'РЕКОМЕНДАЦИЯ ЮЛИИ: Подходит тем, кому нужно серьёзное стоматологическое лечение или у кого врач работает только с сетью MetLife. <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Полное описание плана 📄</a>',
                
                // Delta Dental section
                deltaTitle: "🦷 Delta Dental PPO 1500",
                deltaFeatures: [
                    "Годовой лимит: $1,500",
                    "Перенос неиспользованного лимита на следующий год",
                    "Без периода ожидания",
                    "Покрытие отсутствующих зубов",
                    "Крупнейшая сеть по всей стране (во всех 50 штатах - <a href='https://www.deltadental.com/us/en/member/find-a-dentist.html' target='_blank' rel='noopener noreferrer'>найдите своего специалиста</a>)"
                ],
                deltaCoverage: [
                    "✅ 100% – Профилактика",
                    "✅ 80% – Базовые процедуры (пломбы, удаление, лечение каналов)",
                    "✅ 50% – Крупные процедуры (Импланты, коронки, мосты, хирургия, протезы)"
                ],
                deltaPricing: [
                    "$59.50 – Индивидуально",
                    "$100.75 – Взрослый + дети",
                    "$108.25 – Взрослый + супруг(а)",
                    "$161.25 – Полная семья"
                ],
                juliaRecommendationDelta: 'РЕКОМЕНДАЦИЯ ЮЛИИ: Надёжный и доступный план для всей семьи. Поможет сохранить здоровье зубов по минимальной цене. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Полное описание плана 📄</a>',
                
                // How coverage works
                coverageWorksTitle: "💡 Как работают проценты покрытия",
                coverageExplanation: [
                    "📌 100%, 80%, 50% рассчитываются от фиксированных тарифов in-network",
                    "👩‍⚕️ Стоматологи обязаны следовать предварительно согласованным расценкам",
                    "❗ Вне сети - возможно, придётся доплатить больше, но это всё равно дешевле, чем платить наличными",
                    "👉 Всегда проверяйте, входит ли ваш врач в сеть"
                ],
                
                // Enrollment
                enrollmentTitle: "📝 Как зарегистрироваться",
                enrollmentSteps: [
                    "Перейдите на <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> до 20-го числа месяца, чтобы стать участником с 1-го числа следующего месяца",
                    "Введите ZIP-код и дату рождения",
                    "Выберите тип участия: индивидуально / взрослый + дети / пара / семья",
                    "Выберите план: MetLife PPO Platinum или Delta Dental PPO 1500",
                    "Добавьте членство EWA ($5/мес)",
                    "Нажмите Enroll - получите мгновенное подтверждение"
                ],
                youllNeedTitle: "Понадобится:",
                youllNeedList: [
                    "ФИО, дата рождения, номер SSN (обязательно)",
                    "Адрес, email, телефон",
                    "Данные банковского счёта (routing + account number)",
                    "❌ Кредитные/дебетовые карты не принимаются"
                ],
                
                // Payment & Billing
                paymentTitle: "💳 Оплата",
                paymentDetails: [
                    "Списание около 28 числа каждого месяца от NuEra",
                    "Автоматически, пока не отмените через брокера",
                    "При недостатке средств - штраф $30"
                ],
                
                // After Enrollment
                afterEnrollmentTitle: "🗓️ После регистрации",
                afterEnrollmentDetails: [
                    "В базу страховщика вы попадёте между 8 и 15 числом",
                    "MetLife ID = ваш SSN",
                    "Delta Dental пришлёт карту и выдаст онлайн ID"
                ],
                trackBenefitsTitle: "📲 Управление планом:",
                trackBenefitsList: [
                    "🔹 metlife.com",
                    "🔹 deltadentalct.com",
                    "🔹 corenroll.com или приложение"
                ],
                
                additionalBenefits: "🎁 Дополнительные выгоды через Elevate Wellness Association ($5/мес):",
                ewaDescription: "*Elevate Wellness Association (EWA) - национальная организация, основанная в 1993 году, которая помогает малым и средним компаниям, самозайнятим особам, окремым особам та сім'ям по всій Америці отримати доступ до групових медичних та велнес-пільг, які зазвичай зарезервовані для більших роботодавців. Ви можете обрати серед наступних важливих пільг:",
                ewaBenefits: [
                    "Зрение, медицина, страхование жизни, несчастные случаи",
                    "Критические болезни, телемедицина, wellness-программы"
                ],
                browseOptions: "Просмотрите опции по ссылке <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong>. Выберите подходящую!",
                
                // Testimonials
                testimonialsTitle: "Благодарные отзывы клиентов",
                
                // Contact
                contactTitle: "📇 Контакты: Юлия Баринова, MBA",
                contactIntro: "📢 Приглашаю вас на бесплатную консультацию для обсуждения страхового планирования: страхование жизни с живыми бенефитами, инвалидность, уход, и любые другие вопросы. Живя в США почти 30 лет, я с радостью поддержу новых иммигрантов полезной информацией и ресурсами для успешной адаптации.",
                thankYou: "Спасибо за интерес и доверие!",
                contactInfo: {
                    name: "Юлия Баринова, MBA",
                    title: "Лицензированный страховой брокер",
                    license: "Лицензия штата NY: LA-937924",
                    phone: "347-922-8037",
                    website: "www.juliabarinova.com",
                    email: "julia@juliabarinova.com",
                    calendar: "calendly.com/jbarinova",
                    reviewsText: "Отзывы Google:",
                    reviewsLink: "Julia Barinova – Insurance Broker",
                    saveContact: "Обменяться контактами"
                },
                dentalProfessionalsAtention:`
                <h2 class="partners-title">🦷 Внимание стоматологам! Давайте вместе дарить больше улыбок</h2>
            <p>Ищете способы помочь вашим пациентам быстрее приступить к лечению — и с меньшими финансовыми колебаниями?</p>
            <p>Мы приглашаем стоматологов, таких как вы, стать нашими партнерами в предложении двух захватывающих групповых планов PPO стоматологического страхования: MetLife PPO и Delta Dental PPO 1500. Эти планы не имеют периодов ожидания, исключений для отсутствующих зубов и покрывают серьезные процедуры, такие как имплантаты, коронки и лечение каналов — с первого дня.</p>
            <ul>
                <li>✅ Пациенты получают преимущества от более быстрых одобрений, меньших расходов из собственного кармана и большей мотивации следовать необходимому стоматологическому лечению.</li>
                <li>✅ Стоматологи получают преимущества от меньшего количества отмен, более быстрого оборота лечения и более счастливых, лояльных пациентов.</li>
            </ul>
            <p>Давайте работать вместе, чтобы сделать качественную стоматологическую помощь более доступной и упорядоченной.</p>
            <p>📩 Свяжитесь с нами сегодня — мы с радостью отправим материалы планов, обучим вашу команду и даже направим пациентов, которые активно ищут провайдеров в сети в вашем районе.</p>
            <p>Вместе мы можем создать больше улыбок — с быстротой, экономией и удовлетворением!</p>
            <p> <a href="mailto:julia@juliabarinova.com" target="_blank" rel="noopener noreferrer">Свяжитесь с нами, чтобы узнать больше.</a></p>
                `,
                
                // Disclaimer
                // disclaimer: "⚠️ ДАННОЕ РЕЗЮМЕ ПОДГОТОВЛЕНО ИСКЛЮЧИТЕЛЬНО В ИНФОРМАЦИОННЫХ ЦЕЛЯХ ВАШИМ СТРАХОВЫМ БРОКЕРОМ ДЛЯ ОКАЗАНИЯ ПОМОЩИ В ПРОЦЕССЕ ВЫБОРА ПЛАНА. ПАЦИЕНТАМ НАСТОЯТЕЛЬНО РЕКОМЕНДУЕТСЯ ИЗУЧИТЬ ПОДРОБНЫЕ ДОКУМЕНТЫ ПЛАНА ДЛЯ ПОЛУЧЕНИЯ ИСЧЕРПЫВАЮЩЕЙ ИНФОРМАЦИИ О ПОКРЫТИИ, ОГРАНИЧЕНИЯХ И ИСКЛЮЧЕНИЯХ. ВСЕ ОБСУЖДЕНИЯ ПЛАНОВ ЛЕЧЕНИЯ, ОДОБРЕНИЯ ПОКРЫТИЯ И ОТВЕТСТВЕННОСТИ ЗА ОПЛАТУ ДОЛЖНЫ ПРОВОДИТЬСЯ НЕПОСРЕДСТВЕННО МЕЖДУ ВАМИ, ВАШИМ СТОМАТОЛОГОМ И СТРАХОВОЙ КОМПАНИЕЙ.",
                newDisclaimer: `<div class="privacy-notice">
                    ⚠️ ДАННОЕ РЕЗЮМЕ ПОДГОТОВЛЕНО ИСКЛЮЧИТЕЛЬНО В ИНФОРМАЦИОННЫХ ЦЕЛЯХ ВАШИМ СТРАХОВЫМ БРОКЕРОМ ДЛЯ ОКАЗАНИЯ ПОМОЩИ В ПРОЦЕССЕ ВЫБОРА ПЛАНА. ПАЦИЕНТАМ НАСТОЯТЕЛЬНО РЕКОМЕНДУЕТСЯ ИЗУЧИТЬ ПОДРОБНЫЕ ДОКУМЕНТЫ ПЛАНА ДЛЯ ПОЛУЧЕНИЯ ИСЧЕРПЫВАЮЩЕЙ ИНФОРМАЦИИ О ПОКРЫТИИ, ОГРАНИЧЕНИЯХ И ИСКЛЮЧЕНИЯХ. ВСЕ ОБСУЖДЕНИЯ ПЛАНОВ ЛЕЧЕНИЯ, ОДОБРЕНИЯ ПОКРЫТИЯ И ОТВЕТСТВЕННОСТИ ЗА ОПЛАТУ ДОЛЖНЫ ПРОВОДИТЬСЯ НЕПОСРЕДСТВЕННО МЕЖДУ ВАМИ, ВАШИМ СТОМАТОЛОГОМ И СТРАХОВОЙ КОМПАНИЕЙ.<br><br>
                    
                    <h3>🛡️ Уведомление о конфиденциальности</h3>
                    <p><strong>Дата вступления в силу:</strong> 2025</p>
                    <p>Julia Barinova, Inc. («мы», «наш» или «нас») уважает вашу конфиденциальность и обязуется защищать ваши личные данные. Это Уведомление о конфиденциальности объясняет, как мы собираем, используем и защищаем ваши данные, когда вы посещаете наш веб-сайт, отправляете формы или общаетесь с нами.</p>
                    <h4>Что мы собираем:</h4>
                    <p>Мы можем собирать предоставленные вами личные данные, включая ваше имя, контактную информацию и предпочтения в страховании. Мы также собираем неличные данные, такие как тип браузера, IP-адрес и активность на сайте, в аналитических целях.</p>
                    <h4>Как мы используем вашу информацию:</h4>
                    <ul>
                        <li>Для ответа на ваши запросы</li>
                        <li>Для предоставления страховых предложений или помощи в регистрации</li>
                        <li>Для отправки важных обновлений и полезной информации (вы можете отписаться в любое время)</li>
                        <li>Для улучшения нашего веб-сайта и пользовательского опыта</li>
                    </ul>
                    <h4>Мы НЕ:</h4>
                    <ul>
                        <li>Продаем или сдаем в аренду вашу личную информацию</li>
                        <li>Передаем ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом или для выполнения ваших запросов по страхованию</li>
                    </ul>
                    <p><strong>Безопасность данных:</strong> Мы применяем стандартные отраслевые меры для защиты вашей информации. Однако ни одна передача данных через Интернет не является на 100% безопасной.</p>
                    <p><strong>Файлы cookie:</strong> Наш веб-сайт может использовать файлы cookie для более удобного просмотра и базовой аналитики.</p>
                    <p><strong>Ваше согласие:</strong> Используя наш сайт, вы соглашаетесь с настоящим Уведомлением о конфиденциальности.</p>
                    <p><strong>Свяжитесь с нами:</strong> Если у вас есть вопросы по поводу этой политики, пожалуйста, свяжитесь с Юлией Бариновой по телефону <a href="tel:+13479228037">📞 347-922-8037</a> или электронной почте <a href="mailto:julia@juliabarinova.com"> 📧 julia@juliabarinova.com.</a></p>
                </div>
                <hr class="disclaimer-divider">
                <div class="rights-reserved">
                    <h3>⚖️ Все права защищены</h3>
                    <p>©️ 2025 Julia Barinova, Inc.</p>
                    <p>Все содержимое этого веб-сайта, включая текст, графику, логотипы, изображения и загружаемые материалы, является собственностью Julia Barinova, Inc. и защищено законами США и международными законами об авторском праве.</p>
                    <p>Несанкционированное воспроизведение, распространение или использование любой части этого веб-сайта строго запрещено без предварительного письменного согласия.</p>
                </div>`,
                // Partners section
                partnersTitle: "Наши проверенные партнеры дантисты",
                partnersTitle2: "Галерея фотографий партнеров",
                phoneLabel: "Тел:",
                websiteLabel: "Cайт:",
                emailLabel: "Email:",
                calendarLabel: "Записаться на звонок:",
                saveContact: "Сохранить контакт"
            },
            uk: {
                // Hero section
                heroTitle: "🦷 ЩАСЛИВА ПОСМІШКА СЬОГОДНІ: Ваше комплексне стоматологічне страхування!",
                baner1: "ІМПЛАНТИ, КОРОНКИ, КАНАЛИ ПОКРИТІ з 1 дня",
                baner2: "БЕЗ ПЕРІОДУ ОЧІКУВАННЯ. ВІДСУТНІЙ ЗУБ-ОК",
                baner3: "від $55/міс",
                go1: "👇 ДЛЯ РЕЄСТРАЦІЇ ПЕРЕХОДЬ",
                go2: "👆 ПЕРЕХОДЬ",
                advisorName: "Пропонує Юлія Барінова, MBA – Ліцензований страховий консультант та брокер",
                meetJulia: "👋 Давайте познайомимося",
                juliaIntro: "Привіт, я Юлія Барінова, незалежний страховий консультант та брокер з Нью-Йорка, з понад 20-річним досвідом у фінансових послугах - від інвестиційного консалтингу та маркетингу хедж-фондів до персоналізованого страхового планування.",
                juliaPassion: "Я пристрасно допомагаю людям захистити себе, свої сім'ї та бізнес від руйнівних фінансових ризиків - чи то через серйозні захворювання, втрату доходу, потребу в довготривалому догляді або втрату близької людини - освічуючи їх та створюючи розумні, індивідуальні страхові стратегії. Мені також подобається знаходити інноваційні рішення, які заповнюють критичні прогалини та дозволяють реально заощаджувати на життєво важливих послугах, таких як стоматологічний догляд.",
                clientStats: `👉 Стоматологічне обслуговування в США печально відоме своєю дорожнечею. На жаль, багато людей відкладають необхідні огляди та лікування просто тому, що не можуть собі цього дозволити - і в результаті стикаються з більш серйозними стоматологічними проблемами, які можуть коштувати цілий статок на лікування. Або просто нехтують своїм ротом взагалі, що може призвести до значних загальних проблем зі здоров'ям.
                <br><br>
                Більшість індивідуальних планів стоматологічного страхування - якщо вони не пропонуються через роботодавця - мають довгі періоди очікування для серйозних процедур, таких як коронки та лікування кореневих каналів, і майже ніколи не покривають імпланти.
                <br><br>
                Близько трьох років тому я виявила "приховану перлину": групові плани MetLife PPO та Delta Dental PPO БЕЗ періодів очікування та БЕЗ виключень по відсутніх зубах - навіть для серйозних процедур, таких як імпланти та коронки. Це спрацювало так добре для мене (я заощадила майже $2,000 на імпланті), що я стала ліцензованим представником компанії, яка їх пропонує, з радістю допомагаючи іншим отримати таку ж вигоду.
                <br><br>
                З того часу понад 1,000 клієнтів та їхніх сімей по всій країні скористалися цими планами, щоб заощадити тисячі доларів на чищеннях, пломбах, коронках, лікуванні кореневих каналів - і так, імплантах. Навіть місцеві стоматологи в Нью-Йорку, Філадельфії, Чикаго та Сан-Франциско, з якими ми в кінцевому підсумку розвинули теплі професійні відносини, спочатку були дещо скептично налаштовані, але пізніше стали моїми найсильнішими прихильниками - тепер вони направляють сотні пацієнтів щороку, щоб ті отримали покриття.
                <br><br>
                Тепер ваша черга! Я була б рада допомогти вам відновити вашу здорову, щасливу посмішку - з двома перевіреними планами, які я особисто використовую та рекомендую, та місцевими стоматологами, яких ви вже знаєте і яким довіряєте, або яких ми можемо рекомендувати, якщо необхідно.`,
                // Plans section
                plansTitle: "🌟 Два плани, які я рекомендую",
                plansIntro: "MetLife PPO (PDP Network) та Delta Dental PPO 1500 - приймаються та рекомендуються моєю надійною мережею стоматологів у: Нью-Йорку, Філадельфії, Маямі, Сан-Франциско, Чикаго та інших містах (запитайте нас про направлення у вашому районі!)",
                sharedAdvantages: "🔹 Спільні переваги обох планів",
                sharedList: [
                    "✔️ Приймаються більшістю стоматологів по всій країні",
                    "✔️ НЕМАЄ ПЕРІОДУ ОЧІКУВАННЯ - навіть для імплантів та коронок",
                    "✔️ НЕМАЄ застереження про відсутні зуби: покриває вже відсутні зуби",
                    "✔️ Покриття починається з 1 числа наступного місяця (якщо зареєструватися до 20 числа поточного місяця)",
                    "✔️ Річні пільги оновлюються 1 січня (ви можете подвоїти свої заощадження, якщо правильно спланувати)",
                    "✔️ Мінімальні несподівані витрати (отримайте оцінку покриття від страхової компанії перед початком серйозного стоматологічного проекту!)"
                ],
                
                // MetLife section
                metlifeTitle: "🦷 MetLife PPO Platinum (PDP Network)",
                metlifeNotAvailable: "🚫 Недоступний в: AK, ID, LA, ME, MD, MT, NH, NM, OR, SD, WA",
                whyClientsLove: "Чому клієнти обирають це:",
                metlifeFeatures: [
                    "Щедра річна максимальна пільга: $3,000/рік",
                    "Низька річна франшиза: $25/особа, $75 сім'я в залежності від ZIP-коду",
                    "НЕМАЄ періоду очікування, навіть для імплантів чи коронок",
                    "НЕМАЄ застереження про відсутні зуби",
                    "Широко приймається (<a href='https://providers.online.metlife.com/findDentist?searchType=findDentistMetLife' target='_blank' rel='noopener noreferrer'>пошук MetLife PPO Dental Providers – PDP Network</a>)",
                    "Дитяча ортодонтія включена (до $2,000 за життя, до 19 років на батьківському плані)"
                ],
                coverage: "Покриття:",
                metlifeCoverage: [
                    "✅ 100% – Профілактика (чищення, рентген, огляди, фтор)",
                    "✅ 80% – Базові процедури (пломби, видалення, лікування ясен)",
                    "✅ 50% – Складні процедури (імпланти, коронки, лікування каналів, мости, протези, оральна хірургія)"
                ],
                monthlyPremiumsMetlife: "💰 Щомісячні внески для окремої особи (приблизні тарифи в залежності від ZIP-коду, включаючи $5 членський внесок*):",
                monthlyPremiumsDelta: "💰 Щомісячні внески для окремої особи (включаючи $5 членський внесок*):",
                metlifePricing: [
                    "$96 – Пенсільванія, Огайо",
                    "$110 – Нью-Джерсі, Стейтен-Айленд",
                    "$123 – Нью-Йорк, Чикаго, Маямі",
                    "$133 – Сан-Франциско"
                ],
                juliaRecommendationMetlife: 'РЕКОМЕНДАЦІЯ ЮЛІЇ: Найкраще для тих, хто потребує серйозної стоматологічної роботи (імпланти, коронки, обширне лікування) або чий лікар працює в мережі лише з MetLife (заощадить вам більше грошей). <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">MetLife план детально 📄</a>',
                
                // Delta Dental section
                deltaTitle: "🦷 Delta Dental PPO 1500",
                deltaFeatures: [
                    "Річна пільга: $1,500/ календарний рік",
                    "Перенесення пільги – перенесення частини невикористаної пільги на наступний рік",
                    "НЕМАЄ періоду очікування",
                    "Покриває відсутні зуби",
                    "Велика національна мережа (доступна у всіх 50 штатах – <a href='https://www.deltadental.com/us/en/member/find-a-dentist.html' target='_blank' rel='noopener noreferrer'>пошук Delta Dental PPO Providers</a>)"
                ],
                deltaCoverage: [
                    "✅ 100% – Профілактика",
                    "✅ 80% – Базові процедури (пломби, видалення, лікування каналів)",
                    "✅ 50% – Складні процедури (Імпланти, коронки, мости, хірургія, протези)"
                ],
                deltaPricing: [
                    "$59.50 – Індивідуальна особа",
                    "$100.75 – Дорослий + діти",
                    "$108.25 – Дорослий + чоловік/дружина",
                    "$161.25 – Повна сім'я"
                ],
                juliaRecommendationDelta: 'РЕКОМЕНДАЦІЯ ЮЛІЇ: Надійний, бюджетний план. Чудовий для сімей. Підтримає здоров\'я ваших зубів з мінімальними щомісячними витратами. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Delta Dental план детально 📄</a>',
                
                // How coverage works
                coverageWorksTitle: "💡 Як працюють відсотки покриття",
                coverageExplanation: [
                    "📌 100%(Профілактика), 80%(Базові процедури) та 50%(Складні процедури) покриття розраховується на основі узгодженого тарифу в мережі для кожної стоматологічної процедури.",
                    "👩‍⚕️ Стоматологи в мережі повинні дотримуватися попередньо встановлених тарифів між ними та страховиком - і ваша частка базується на цих знижених тарифах.",
                    "❗ Йдете поза мережу? Ви можете очікувати дещо вищих рахунків та більше власних витрат. Варіант поза мережею чудовий, якщо ваш улюблений стоматолог не в мережі. Зазвичай ви все одно заощадите чимало грошей порівняно з оплатою готівкою!",
                    "👉 Вибираючи нового стоматолога, спробуйте підтвердити з вашим стоматологом, що вони в мережі з вашим планом, щоб уникнути несподіваних рахунків."
                ],
                
                // Enrollment
                enrollmentTitle: "📝 Як зареєструватися",
                enrollmentSteps: [
                    "Відвідайте <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> до 20-го числа місяця, щоб стати учасником з 1-го числа наступного місяця",
                    "Введіть ZIP-код та дату народження",
                    "Оберіть тип учасника: Індивідуальна особа / Дорослий + діти / Пара / Сім'я",
                    "Оберіть план(и): MetLife PPO Platinum / Delta Dental PPO 1500",
                    "Додайте членство EWA ($5/місяць-див. пояснення нижче) для доступу до групових цін",
                    "Натисніть Enroll - отримайте миттєве підтвердження"
                ],
                youllNeedTitle: "Вам знадобиться:",
                youllNeedList: [
                    "Повне ім'я, дата народження, НОМЕР СОЦІАЛЬНОГО СТРАХУВАННЯ (обов'язково)",
                    "Адреса, електронна пошта, номер телефону",
                    "Інформація про банківський рахунок (routing + номер рахунку)",
                    "❌ Кредитні/дебетові картки НЕ приймаються"
                ],
                
                // Payment & Billing
                paymentTitle: "💳 Деталі оплати та виставлення рахунків",
                paymentDetails: [
                    "З вашого банківського рахунку буде автоматично списуватися приблизно 28 числа кожного місяця компанією NuEra",
                    "Платежі продовжуються щомісяця, поки ви не скасуєте через свого брокера",
                    "Будь ласка, переконайтеся, що достатньо коштів доступно, щоб уникнути $30 штрафу за повернення/відскок/відновлення"
                ],
                
                // After Enrollment
                afterEnrollmentTitle: "🗓️ Після реєстрації",
                afterEnrollmentDetails: [
                    "Зазвичай ви з'являєтесь у системі страховика між 8 та 15 числом першого місяця",
                    "MetLife ID учасника = ваш SSN",
                    "Delta Dental надішле вашу картку та надасть онлайн ID"
                ],
                trackBenefitsTitle: "Відстежуйте та керуйте своїми пільгами:",
                trackBenefitsList: [
                    "🔹 metlife.com (ви зможете отримати доступ до середини місяця після початку вашого плану)",
                    "🔹 deltadentalct.com",
                    "🔹 corenroll.com або через застосунок Corenroll"
                ],
                
                additionalBenefits: "Досліджуйте додаткові пільги через *Elevate Wellness Association ($5/місяць членський внесок включений у вищенаведені оцінки премій):",
                ewaDescription: "*Elevate Wellness Association (EWA) - це національна членська організація, заснована в 1993 році, яка надає можливість малим та середнім компаніям, самозайнятим особам, окремим особам та сім'ям по всій Америці отримати доступ до групових медичних та велнес-пільг, які зазвичай зарезервовані для більших роботодавців. Ви можете обрати серед наступних важливих пільг:",
                ewaBenefits: [
                    "Зір, медицина, страхування життя, нещасні випадки",
                    "Госпітальна компенсація та критичні захворювання",
                    "Телемедицина та велнес-програми"
                ],
                browseOptions: "Переглядайте свої варіанти за тим же посиланням <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong>. Оберіть те, що вам потрібно!",
                
                // Testimonials
                testimonialsTitle: "Відгуки вдячних клієнтів",
                
                // Contact
                contactTitle: "📇 Контакти: Юлія Барінова, MBA",
                contactIntro: "📢 Запрошую вас зв'язатися зі мною та запланувати безкоштовну консультацію для обговорення вашого страхового планування - включаючи захист себе та своїх близьких страхуванням життя з живими пільгами, страхуванням інвалідності, довготривалим доглядом та будь-якими іншими питаннями, які у вас можуть бути. Живучи та працюючи в США майже 30 років, я з радістю підтримаю нових іммігрантів цінною інформацією та ресурсами, щоб допомогти їм побудувати краще життя.",
                thankYou: "Дякую за ваш інтерес та ваш бізнес.",
                contactInfo: {
                    name: "Юлія Барінова, MBA",
                    title: "Ліцензований страховий брокер",
                    license: "Ліцензія страхування штату Нью-Йорк LA-937924",
                    phone: "347-922-8037",
                    website: "www.juliabarinova.com",
                    email: "julia@juliabarinova.com",
                    calendar: "calendly.com/jbarinova",
                    reviewsText: "Перевірте наші відгуки Google, включаючи стоматологічні:",
                    reviewsLink: "Всі відгуки",
                    saveContact: "Обменяться контактами"
                },
                dentalProfessionalsAtention: `
                <h2 class="partners-title">🦷 Увага стоматологічним професіоналам! Давайте разом створимо більше посмішок</h2>
            <p>Ви шукаєте способи допомогти своїм пацієнтам швидше приступити до лікування — і з меншою фінансовою вагомістю?</p>
            <p>Ми запрошуємо стоматологів, таких як ви, співпрацювати з нами в пропозиції двох захоплюючих групових PPO стоматологічних планів: MetLife PPO та Delta Dental PPO 1500. Ці плани не мають періодів очікування, немає виключень для втрачених зубів, і покривають основні процедури, такі як імплантати, коронки та лікування кореневих каналів — прямо з першого дня.</p>
            <ul>
                <li>✅ Пацієнти отримують користь від швидших схвалень, нижчих витрат із власної кишені та більшої мотивації довести до кінця необхідну стоматологічну роботу.</li>
                <li>✅ Стоматологи отримують користь від меншої кількості скасувань, швидшого обороту лікування та щасливіших, більш лояльних пацієнтів.</li>
            </ul>
            <p>Давайте працювати разом, щоб зробити якісну стоматологічну допомогу більш доступною та впорядкованою.</p>
            <p>📩 Зв'яжіться з нами сьогодні — ми з радістю надішлемо матеріали планів, навчимо вашу команду та навіть направимо пацієнтів, які активно шукають провайдерів у мережі у вашому районі.</p>
            <p>Разом ми можемо створити більше посмішок — зі швидкістю, економією та задоволенням!</p>
            <p> <a href="mailto:julia@juliabarinova.com" target="_blank" rel="noopener noreferrer">Зв'яжіться з нами, щоб дізнатися більше.</a></p>
                `,
                
                // Disclaimer
                // disclaimer: "⚠️ ЦЕ РЕЗЮМЕ ПІДГОТОВЛЕНО ВИКЛЮЧНО В ІНФОРМАЦІЙНИХ ЦІЛЯХ ВАШИМ СТРАХОВИМ БРОКЕРОМ ДЛЯ НАДАННЯ ДОПОМОГИ В ПРОЦЕСІ ВИБОРУ ПЛАНУ. ПАЦІЄНТАМ НАПОЛЕГЛИВО РЕКОМЕНДУЄТЬСЯ ВИВЧИТИ ДЕТАЛЬНІ ДОКУМЕНТИ ПЛАНУ ДЛЯ ОТРИМАННЯ ВИЧЕРПНОЇ ІНФОРМАЦІЇ ПРО ПОКРИТТЯ, ОБМЕЖЕННЯ ТА ВИКЛЮЧЕННЯ. УСІ ОБГОВОРЕННЯ ПЛАНІВ ЛІКУВАННЯ, СХВАЛЕННЯ ПОКРИТТЯ ТА ВІДПОВІДАЛЬНОСТІ ЗА ОПЛАТУ ПОВИННІ ПРОВОДИТИСЯ БЕЗПОСЕРЕДНЬО МІЖ ВАМИ, ВАШИМ СТОМАТОЛОГОМ ТА СТРАХОВОЮ КОМПАНІЄЮ.",
                newDisclaimer: `<div class="privacy-notice">
                    ⚠️ ЦЕ РЕЗЮМЕ ПІДГОТОВЛЕНО ВИКЛЮЧНО В ІНФОРМАЦІЙНИХ ЦІЛЯХ ВАШИМ СТРАХОВИМ БРОКЕРОМ ДЛЯ НАДАННЯ ДОПОМОГИ В ПРОЦЕСІ ВИБОРУ ПЛАНУ. ПАЦІЄНТАМ НАПОЛЕГЛИВО РЕКОМЕНДУЄТЬСЯ ВИВЧИТИ ДЕТАЛЬНІ ДОКУМЕНТИ ПЛАНУ ДЛЯ ОТРИМАННЯ ВИЧЕРПНОЇ ІНФОРМАЦІЇ ПРО ПОКРИТТЯ, ОБМЕЖЕННЯ ТА ВИКЛЮЧЕННЯ. УСІ ОБГОВОРЕННЯ ПЛАНІВ ЛІКУВАННЯ, СХВАЛЕННЯ ПОКРИТТЯ ТА ВІДПОВІДАЛЬНОСТІ ЗА ОПЛАТУ ПОВИННІ ПРОВОДИТИСЯ БЕЗПОСЕРЕДНЬО МІЖ ВАМИ, ВАШИМ СТОМАТОЛОГОМ ТА СТРАХОВОЮ КОМПАНІЄЮ.<br><br>
                    
                    <h3>🛡️ Повідомлення про конфіденційність</h3>
                    <p><strong>Дата набрання чинності:</strong> 2025</p>
                    <p>Julia Barinova, Inc. («ми», «наш» або «нас») поважає вашу конфіденційність і зобов'язується захищати ваші особисті дані. Це Повідомлення про конфіденційність пояснює, як ми збираємо, використовуємо та захищаємо ваші дані, коли ви відвідуєте наш веб-сайт, надсилаєте форми або спілкуєтеся з нами.</p>
                    <h4>Що ми збираємо:</h4>
                    <p>Ми можемо збирати надані вами особисті дані, включаючи ваше ім'я, контактну інформацію та уподобання у страхуванні. Ми також збираємо неособисті дані, такі як тип браузера, IP-адреса та активність на сайті, в аналітичних цілях.</p>
                    <h4>Як ми використовуємо вашу інформацію:</h4>
                    <ul>
                        <li>Для відповіді на ваші запити</li>
                        <li>Для надання страхових пропозицій або допомоги в реєстрації</li>
                        <li>Для надсилання важливих оновлень та корисної інформації (ви можете відписатися в будь-який час)</li>
                        <li>Для покращення нашого веб-сайту та користувацького досвіту</li>
                    </ul>
                    <h4>Ми НЕ:</h4>
                    <ul>
                        <li>Продаємо або здаємо в оренду вашу особисту інформацію</li>
                        <li>Передаємо ваші дані третім особам без вашої згоди, за винятком випадків, передбачених законом або для виконання ваших запитів щодо страхування</li>
                    </ul>
                    <p><strong>Безпека даних:</strong> Ми застосовуємо стандартні галузеві заходи для захисту вашої інформації. Однак жодна передача даних через Інтернет не є на 100% безпечною.</p>
                    <p><strong>Файли cookie:</strong> Наш веб-сайт може використовувати файли cookie для більш зручного перегляду та базової аналітики.</p>
                    <p><strong>Ваша згода:</strong> Використовуючи наш сайт, ви погоджуєтесь з цим Повідомленням про конфіденційності.</p>
                    <p><strong>Зв'яжіться з нами:</strong> Якщо у вас є питання щодо цієї політики, будь ласка, зв'яжіться з Юлією Баріновою за телефоном  <a href="tel:+13479228037">📞 347-922-8037</a> або електронною поштою <a href="mailto:julia@juliabarinova.com"> 📧 julia@juliabarinova.com.</a></p>
                </div>
                <hr class="disclaimer-divider">
                <div class="rights-reserved">
                    <h3>⚖️ Всі права захищені</h3>
                    <p>©️ 2025 Julia Barinova, Inc.</p>
                    <p>Весь вміст цього веб-сайту, включаючи текст, графіку, логотипи, зображення та завантажувані матеріали, є власністю Julia Barinova, Inc. та захищений законами США та міжнародними законами про авторське право.</p>
                    <p>Несанкціоноване відтворення, розповсюдження або використання будь-якої частини цього веб-сайту суворо заборонено без попередньої письмової згоди.</p>
                </div>`,
                // Partners section
                partnersTitle: "🤝 Наші перевірені партнери - стоматологи",
                partnersTitle2: "Галерея стоматологічних фотографій",
                phoneLabel: "Тел:",
                websiteLabel: "Сайт:",
                emailLabel: "Email:",
                calendarLabel: "Записатися на дзвінок:",
                saveContact: "Зберегти контакт"
            
            },
            // Georgian (ka) and Uzbek (uz) translations to add to your existing translations object

            ka: {
    // Hero section
    heroTitle: "🦷 ბედნიერი ღიმილი დღეს: «ყველაფერი შედის» - სტომატოლოგიური დაზღვევა, რომელიც მუშაობს: დაუყოვნებლივ! პირველ დღეს!",
    baner1: "იმპლანტები, კრონები, არხები დაფარულია 1 დღიდან",
    baner2: "ლოდინის პერიოდის გარეშე. დაკარგული კბილი-კარგია",
    baner3: "$55/თვიდან",
    go1: "👇 განხილვისა და რეგისტრაციისთვის:",
    go2: "👆 იდი",
    advisorName: "გთავაზობთ იულია ბარინოვა, MBA – ლიცენზირებული სადაზღვევო კონსულტანტი და ბროკერი",
    meetJulia: "👋 მოდით გავიცნოთ",
    juliaIntro: "გამარჯობა, მე ვარ იულია ბარინოვა, დამოუკიდებელი სადაზღვევო კონსულტანტი და ბროკერი ნიუ-იორკიდან, 20 წელზე მეტი გამოცდილებით ფინანსურ სერვისებში - საინვესტიციო კონსალტინგიდან და ჰეჯ ფონდების მარკეტინგიდან პერსონალიზებულ სადაზღვევო დაგეგმვამდე.",
    juliaPassion: "ვარ ვნებიანი ადამიანების დახმარებაში საკუთარი თავისა და ოჯახების, ბიზნესის დაცვაში დამანგრეველი ფინანსური რისკებისგან - იქნება ეს სერიოზული დაავადება, შემოსავლის დაკარგვა, გრძელვადიანი მოვლის საჭიროება, თუ საყვარელი ადამიანის დაკარგვა - მათ განათლებასა და გონიერი, მორგებული სადაზღვევო სტრატეგიების ჩამოყალიბებაში. ასევე მიყვარს ინოვაციური გადაწყვეტილებების აღმოჩენა, რომლებიც ავსებს კრიტიკულ ხარვეზებს და რეალურ ფულს იზოგავს არსებით სერვისებზე, როგორიცაა სტომატოლოგიური მოვლა.",
    clientStats: `👉 სტომატოლოგიური მოვლა ამერიკაში ცნობილია თავისი ძვირ ღირებულებით. სამწუხაროდ, ბევრი ადამიანი აჩერებს აუცილებელ გამოკვლევებსა და მკურნალობას მხოლოდ იმიტომ, რომ ვერ აძლევს ფინანსურად - რის შედეგადაც უფრო სერიოზული სტომატოლოგიური პრობლემები უნდა გადაჭრან, რაც შეიძლება ძვირი დაჯდეთ. ან უბრალოდ უგულებელყოფენ პირის ღრუს მთლიანად, რაც შეიძლება მნიშვნელოვან ზოგად ჯანმრთელობით პრობლემებამდე მიგვიყვანოს.
    <br><br>
    ინდივიდუალური სტომატოლოგიური დაზღვევის ბილიკების უმეტესობა - თუ არ არის დამსაქმებლის მიერ შეთავაზებული - გააჩნია გრძელი ლოდინის პერიოდები მთავარი პროცედურებისთვის, როგორიცაა კრონები და ფესვის არხების მკურნალობა, და თითქმის არასოდეს არ ფარავს იმპლანტებს.
    <br><br>
    დაახლოებით სამი წლის წინ აღმოვაჩინე "დამალული საუნჯე": ჯგუფური წვდომის MetLife PPO და Delta Dental PPO გეგმები ლოდინის პერიოდების გარეშე და დაკარგული კბილების გამონაკლისის გარეშე - მთავარი მკურნალობისთვისაც კი, როგორიცაა იმპლანტები და კრონები. ეს ისეთი კარგად იმუშავა ჩემთვის (დაახლოებით $2,000 დავზოგე იმპლანტზე), რომ გავხდი მათ შემთავაზებელი კომპანიის ლიცენზირებული წარმომადგენელი, ხალისიანი დავეხმარე სხვებსაც ასეთი სარგებლის მიღებაში.
    <br><br>
    მას შემდეგ, 1,000-ზე მეტმა კლიენტმა და მათმა ოჯახებმა მთელ ქვეყანაში გამოიყენეს ეს გეგმები ათასობით დოლარის დაზოგვისთვის გაწმენდაზე, შევსებებზე, კრონებზე, ფესვის არხების მკურნალობაზე - და კი, იმპლანტებზე. ადგილობრივ სტომატოლოგებსაც კი ნიუ-იორკში, ფილადელფიაში, ჩიკაგოსა და სან-ფრანცისკოში, რომლებთანაც ბოლოს განვიხილეთ თბილი პროფესიული ურთიერთობები, თავიდან რამდენადმე სკეპტიკურები იყვნენ, მაგრამ შემდეგ გახდნენ ჩემი ყველაზე ძლიერი მხარდამჭერები - ახლა ყოველწლიურად ასობით პაციენტს მიმართავენ დაფარვისთვის.
    <br><br>
    ახლა შენი რიგია! მხიარულებით დაგეხმარები ჯანსაღი, ბედნიერი ღიმილის აღდგენაში - ორი სანდო გეგმით, რომლებსაც პირადად ვიყენებ და ვურჩევ, და ადგილობრივ სტომატოლოგ პროფესიონალებთან, რომლებიც უკვე იცი და ენდობი, ან რომლებსაც შეგვიძლია გირჩიოთ, საჭიროების შემთხვევაში.`,
    // Plans section
    plansTitle: "🌟 ორი გეგმა, რომელსაც ვურჩევ",
    plansIntro: "MetLife PPO (PDP Network) და Delta Dental PPO 1500 - მიღებული და რეკომენდებული ჩემი სანდო სტომატოლოგების ქსელის მიერ: ნიუ-იორკში, ფილადელფიაში, მიამიში, სან-ფრანცისკოში, ჩიკაგოსა და სხვა ქალაქებში (იკითხეთ რეკომენდაცია თქვენს რაიონში!)",
    sharedAdvantages: "🔹 ორივე გეგმის საერთო უპირატესობები",
    sharedList: [
        "✔️ მიღებული მის უმეტეს სტომატოლოგთა მიერ ქვეყნის მასშტაბით",
        "✔️ ლოდინის პერიოდის გარეშე - იმპლანტებისა და კრონებისთვისაც კი",
        "✔️ დაკარგული კბილის დებულების გარეშე: ფარავს უკვე არარსებულ კბილს",
        "✔️ დაფარვა იწყება მომდევნო თვის პირველ რიცხვიდან (თუ რეგისტრირდები მიმდინარე თვის 20-მდე)",
        "✔️ წლიური სარგებელი ახლდება იანვრის 1-ს (შეიძლება ორმაგად გაზარდო დაზოგვა სწორი დაგეგმვით)",
        "✔️ მინიმალური არაჩვეული გაღიზიანება (მიიღე დაფარვის შეფასება სადაზღვევო კომპანიისგან სერიოზული სტომატოლოგიური პროექტის დაწყებამდე!)"
    ],
    
    // MetLife section
    metlifeTitle: "🦷 MetLife PPO Platinum (PDP Network)",
    metlifeNotAvailable: "🚫 მიუწვდომელია: AK, ID, LA, ME, MD, MT, NH, NM, OR, SD, WA",
    whyClientsLove: "რატომ უყვართ კლიენტებს:",
    metlifeFeatures: [
        "ზედმეტი წლიური მაქსიმალური სარგებელი: $3,000/წელიწადში",
        "დაბალი წლიური დედუქცია: $25/პირზე, $75 ოჯახისთვის ZIP კოდის მიხედვით",
        "ლოდინის პერიოდის გარეშე, იმპლანტებისა და კრონებისთვისაც კი",
        "დაკარგული კბილების დებულების გარეშე",
        "ფართოდ მიღებული (<a href='https://providers.online.metlife.com/findDentist?searchType=findDentistMetLife' target='_blank' rel='noopener noreferrer'>მოძებნე MetLife PPO სტომატოლოგ მომწოდებლები – PDP Network</a>)",
        "ბავშვის ორთოდონტია შედის (ცხოვრების განმავლობაში $2,000-მდე, 19 წლამდე ასაკში მშობლის გეგმაზე)"
    ],
    coverage: "დაფარვა:",
    metlifeCoverage: [
        "✅ 100% – პრევენციული (გაწმენდა, რენტგენი, გამოკვლევები, ფტორი)",
        "✅ 80% – ძირითადი (ამოღება, ღრძილის მკურნალობა)",
        "✅ 50% – მთავარი (კრონები, ფესვის არხები, ხიდები, საშნელები, პირის ოპერაცია)"
    ],
    monthlyPremiumsMetlife: "💰 ყოველთვიური პრემიები ინდივიდუალისთვის (ნიმუში ტარიფები ZIP კოდის მიხედვით, შედის $5 ასოციაციის წევრობა*):",
    monthlyPremiumsDelta: "💰 ყოველთვიური პრემიები ინდივიდუალისთვის (შედის $5 ასოციაციის წევრობა*):",
    metlifePricing: [
        "$96 – პენსილვანია, ოჰაიო",
        "$110 – ნიუ-ჯერსი, სტეიტენ-აილენდი",
        "$123 – ნიუ-იორკი, ჩიკაგო, მიამი",
        "$133 – სან-ფრანცისკო"
    ],
    juliaRecommendationMetlife: 'იულიას რეკომენდაცია: საუკეთესოა მათთვის, ვისაც სჭირდება მთავარი სტომატოლოგიური სამუშაო (იმპლანტები, კრონები, ექსტენსიური მკურნალობა) ან ვისი მომწოდებელიც მხოლოდ MetLife-თან არის ქსელში (გაზოგავს მეტ ფულს) <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">სრული გეგმის აღწერა 📄</a>',
    
    // Delta Dental section
    deltaTitle: "🦷 Delta Dental PPO 1500",
    deltaFeatures: [
        "წლიური სარგებელი: $1,500/ კალენდარული წელი",
        "გადატანადი სარგებელი – გადაიტანე გამოუყენებელი სარგებლის ნაწილი მომდევნო წელზე",
        "ლოდინის პერიოდის გარეშე",
        "ფარავს დაკარგულ კბილებს",
        "დიდი ეროვნული ქსელი (ხელმისაწვდომია ყველა 50 შტატში – <a href='https://www.deltadental.com/us/en/member/find-a-dentist.html' target='_blank' rel='noopener noreferrer'>მოძებნე Delta Dental PPO მომწოდებლები</a>)"
    ],
    deltaCoverage: [
        "✅ 100% – პრევენციული",
        "✅ 80% – ძირითადი (ამოღება, ფესვის არხები)",
        "✅ 50% – მთავარი (კრონები, ხიდები, ქირურგია, იმპლანტები, საშნელები)"
    ],
    deltaPricing: [
        "$59.50 – ინდივიდუალური",
        "$100.75 – ზრდასრული + ბავშვები",
        "$108.25 – ზრდასრული + მეუღლე",
        "$161.25 – სრული ოჯახი"
    ],
    juliaRecommendationDelta: 'იულიას რეკომენდაცია: საიმედო, ბიუჯეტურად მეგობრული გეგმა. შესანიშნავია ოჯახებისთვის. შენარჩუნებს კბილების ჯანსაღობას მინიმალური ყოველთვიური ღირებულებით. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">სრული გეგმის აღწერა 📄</a>',
    
    // How coverage works
    coverageWorksTitle: "💡 როგორ მუშაობს დაფარვის პროცენტები",
    coverageExplanation: [
        "📌 100% (პრევენციული), 80% (ძირითადი), და 50% (მთავარი) დაფარვა გამოითვლება ქსელში შეთანხმებული ტარიფის მიხედვით ყოველი სტომატოლოგიური პროცედურისთვის.",
        "👩‍⚕️ ქსელში არსებული სტომატოლოგები უნდა მიჰყვნენ წინასწარ დადგენილ ტარიფებს მათსა და მზღვეველს შორის - და შენი წილი ეფუძნება ამ შემცირებულ ტარიფებს.",
        "❗ ქსელგარე მიდიხარ? შეიძლება მოელოდო რამდენადმე მაღალ ანგარიშებს და მეტ საკუთარ ხარჯებს. ქსელგარე ვარიანტი მშვენიერია, თუ შენი საყვარელი სტომატოლოგი ქსელში არ არის. ჩვეულებრივ, მაინც დიდ ფულს დაზოგავ ნაღდით გადახდასთან შედარებით!",
        "👉 ახალი სტომატოლოგის არჩევისას, სცადე შენთან სტომატოლოგთან დაადასტურო, რომ ისინი შენს გეგმასთან ქსელში არიან მოულოდნელი ანგარიშების თავიდან ასაცილებლად."
    ],
    
    // Enrollment
    enrollmentTitle: "📝 როგორ დარეგისტრირდე",
    enrollmentSteps: [
        "ეწვიე <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong>-ს თვის 20-მდე, რომ გახდე წევრი მომდევნო თვის 1-ს",
        "შეიყვანე ZIP კოდი და დაბადების თარიღი",
        "აირჩიე მონაწილის ტიპი: ინდივიდუალური / ზრდასრული + ბავშვები / წყვილი / ოჯახი",
        "აირჩიე გეგმა(ები): MetLife PPO Platinum / Delta Dental PPO 1500",
        "დაამატე EWA წევრობა ($5/თვე-იხილე ახსნა ქვემოთ) ჯგუფური ფასების მისაღწევად",
        "დააჭირე Enroll - მიიღე დაუყოვნებლივ დასტური"
    ],
    youllNeedTitle: "დაგჭირდება:",
    youllNeedList: [
        "სრული სახელი, დაბადების თარიღი, სოციალური დაცვის ნომერი (სავალდებულო)",
        "მისამართი, ელ-ფოსტა, ტელეფონის ნომერი",
        "საბანკო ანგარიშის ინფორმაცია (მარშრუტიზაცია + ანგარიშის ნომერი)",
        "❌ საკრედიტო/სადებეტო ბარათები არ მიიღება"
    ],
    
    // Payment & Billing
    paymentTitle: "💳 გადახდისა და ანგარიშების დეტალები",
    paymentDetails: [
        "შენი საბანკო ანგარიში ავტომატურად გადაირიცხება თვის 28 რიცხვის გარშემო NuEra-ს მიერ",
        "გადახდები გრძელდება ყოველთვიურად, სანამ არ გააუქმებ ბროკერის მეშვეობით",
        "გთხოვ უზრუნველყო საკმარისი თანხები იყოს ხელმისაწვდომი $30 დაბრუნების/ბაუნსის/აღდგენის საკომისიოს თავიდან ასაცილებლად"
    ],
    
    // After Enrollment
    afterEnrollmentTitle: "🗓️ რეგისტრაციის შემდეგ",
    afterEnrollmentDetails: [
        "ჩვეულებრივ, მზღვეველის სისტემაში გამოჩნდები პირველი თვის 8-15 რიცხვებს შორის",
        "MetLife წევრის ID = შენი SSN",
        "Delta Dental გამოგიგზავნის ბარათს და მისცემს ონლაინ ID-ს"
    ],
    trackBenefitsTitle: "თვალყური ადევნე და მართე შენი სარგებლები:",
    trackBenefitsList: [
        "🔹 metlife.com (შეძლებ მიწვდომას შენი გეგმის დაწყების შემდეგ თვის შუა რიცხვებში)",
        "🔹 deltadentalct.com",
        "🔹 corenroll.com ან Corenroll აპლიკაციის მეშვეობით"
    ],
    
    additionalBenefits: "გაეცანი დამატებით სარგებლებს *Elevate Wellness Association-ის მეშვეობით ($5/თვე წევრობის საფასური შედის ზემოაღნიშნულ პრემიის შეფასებებში):",
    ewaDescription: "*Elevate Wellness Association (EWA) არის ეროვნული წევრობრივი ორგანიზაცია, დაარსებული 1993 წელს, რომელიც აძლიერებს პატარა და საშუალო კომპანიებს, თვითდასაქმებულ ინდივიდებს, ინდივიდებსა და ოჯახებს მთელი ამერიკის მასშტაბით ჯგუფური დონის ჯანმრთელობისა და კეთილდღეობის სარგებლების მისაღწევად, რომლებიც ჩვეულებრივ რეზერვირებულია უფრო დიდი დამსაქმებლებისთვის. შეგიძლია აირჩიო შემდეგ მნიშვნელოვან სარგებლებს შორის:",
    ewaBenefits: [
        "მხედველობა, სამედიცინო, სიცოცხლის, უბედური შემთხვევა",
        "საავადმყოფოს ანაზღაურება და კრიტიკული დაავადება",
        "ტელემედიცინა და კეთილდღეობის პროგრამები"
    ],
    browseOptions: "დაათვალიერე შენი ვარიანტები იმავე <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> ბმულზე. აირჩიე რაც გჭირდება!",
    
    // Testimonials
    testimonialsTitle: "მადლიერი კლიენტების მიმოხილვები",
    
    // Contact
    contactTitle: "📇 დაუკავშირდი იულია ბარინოვას, MBA",
    contactIntro: "📢 მიწვევ დამიკავშირდე და დანიშნე უფასო კონსულტაცია შენი სადაზღვევო დაგეგმვის განსახილველად - მათ შორის საკუთარი თავისა და საყვარელების დაცვა სიცოცხლის დაზღვევით ცოცხალი სარგებლებით, შეზღუდული შესაძლებლობის დაფარვა, გრძელვადიანი მოვლა, და ნებისმიერი სხვა კითხვები, რაც შეიძლება გქონდეს. ამერიკაში თითქმის 30 წელი ცხოვრებისა და მუშაობის შემდეგ, მხიარულებით დავეხმარები ახალ იმიგრანტებს ღირებული ინფორმაციითა და რესურსებით მათ უკეთესი ცხოვრების ასაშენებლად.",
    thankYou: "მადლობა შენი ინტერესისა და ბიზნესისთვის.",
    contactInfo: {
        name: "იულია ბარინოვა, MBA",
        title: "ლიცენზირებული სადაზღვევო ბროკერი",
        license: "NYS სადაზღვევო ლიცენზია LA-937924",
        phone: "347-922-8037",
        website: "www.juliabarinova.com",
        email: "julia@juliabarinova.com",
        calendar: "calendly.com/jbarinova",
        reviewsText: "შეამოწმე ჩვენი Google რეცენზიები, სტომატოლოგიურის ჩათვლით:",
        reviewsLink: "ყველა რეცენზია",
        saveContact: "შეინახე კონტაქტი"
    },
    dentalProfessionalsAtention: `
        <h2 class="partners-title">🦷 ყურადღება სტომატოლოგ პროფესიონალებს! მოდით ერთად უფრო მეტი ღიმილი შევქმნათ</h2>
    <p>ეძებ გზებს, რომ დაეხმარო შენს პაციენტებს უფრო სწრაფად წინ წავიდნენ მკურნალობაში — და ნაკლები ფინანსური ძვრადობით?</p>
    <p>ჩვენ გვიწვევთ სტომატოლოგებს, შენს მსგავსებს, რომ გახდნენ ჩვენი პარტნერები ორი საინტერესო ჯგუფური წვდომის PPO სტომატოლოგიური გეგმის შეთავაზებაში: MetLife PPO და Delta Dental PPO 1500. ამ გეგმებს არ აქვთ ლოდინის პერიოდები, დაკარგული კბილების გამონაკლისები და ფარავს მთავარ პროცედურებს როგორიცაა იმპლანტები, კრონები და ფესვის არხები — პირველი დღიდანვე.</p>
    <ul>
        <li>✅ პაციენტები ისარგებლებენ უფრო სწრაფი მოწონებებით, ნაკლები საკუთარი ხარჯებით და უფრო მეტი მოტივაციით აუცილებელი სტომატოლოგიური სამუშაოების განხორციელებაში.</li>
        <li>✅ სტომატოლოგები ისარგებლებენ ნაკლები გაუქმებებით, უფრო სწრაფი მკურნალობის ბრუნვით და უფრო ბედნიერი, ერთგული პაციენტებით.</li>
    </ul>
    <p>მოდით ერთად ვიმუშაოთ, რომ ხარისხიანი სტომატოლოგიური მოვლა უფრო ხელმისაწვდომი და სტრუქტურული გავხადოთ.</p>
    <p>📩 დღევე დაუკავშირდი — მხიარულებით გამოვიგზავნით გეგმის მასალებს, გავუფლოთ შენს გუნდს და ნაგულისხმევად მივმართოთ პაციენტებს, რომლებიც აქტიურად ეძებენ ქსელში მომწოდებლებს შენს რაიონში.</p>
    <p>ერთად შეგვიძლია უფრო მეტი ღიმილი შევქმნათ — სისწრაფით, დაზოგვითა და კმაყოფილებით!</p>
    <p> <a href="mailto:julia@juliabarinova.com" target="_blank" rel="noopener noreferrer">დაუკავშირდი მეტი ინფორმაციისთვის.</a></p>
    `,
    
    // Disclaimer
    newDisclaimer: `<div class="privacy-notice">
        ეს რეზიუმე მომზადებულია მხოლოდ ინფორმაციული მიზნებისთვის შენი სადაზღვევო ბროკერის მიერ გეგმის არჩევის პროცესში დასახმარებლად. პაციენტებს მტკიცედ ურჩევთ გადახედონ დეტალურ გეგმის დოკუმენტებს ყოვლისმომცველი ინფორმაციისთვის დაფარვის, შეზღუდვებისა და გამონაკლისების შესახებ. ყველა განხილვა მკურნალობის გეგმების, დაფარვის მოწონებისა და გადახდის ვალდებულებების შესახებ უნდა მოხდეს უშუალოდ შენს, შენს სტომატოლოგ მომწოდებელსა და სადაზღვევო კომპანიას შორის.<br><br>
        
        <h3>🛡️ კონფიდენციალურობის შეტყობინება</h3>
        <p><strong>ძალაში შესვლის თარიღი:</strong> 2025</p>
        <p>Julia Barinova, Inc. («ჩვენ», «ჩვენი» ან «ნაცვლად») პატივს სცემს შენს კონფიდენციალურობას და ვალდებულია შენი პირადი ინფორმაციის დაცვაზე. ეს კონფიდენციალურობის შეტყობინება ახსნის, როგორ ვაგროვებთ, ვიყენებთ და ვიცავთ შენს მონაცემებს, როდესაც სტუმრობ ჩვენს ვებსაიტს, აგზავნი ფორმებს ან გვიკავშირდები.</p>
        <h4>რას ვაგროვებთ:</h4>
        <p>შეიძლება ვაგროვებდეთ პირად დეტალებს, რომლებსაც წარმოადგენ, მათ შორის შენს სახელს, საკონტაქტო ინფორმაციასა და სადაზღვევო პრეფერენციებს. ასევე ვაგროვებთ არაპირად მონაცემებს როგორიცაა ბრაუზერის ტიპი, IP მისამართი და საიტის აქტივობა ანალიტიკური მიზნებისთვის.</p>
        <h4>როგორ ვიყენებთ შენს ინფორმაციას:</h4>
        <ul>
            <li>შენს კითხვებზე პასუხისთვის</li>
            <li>სადაზღვევო კოტირებების ან რეგისტრაციის დახმარების მისაცემად</li>
            <li>მნიშვნელოვანი განახლებებისა და სასარგებლო ინფორმაციის გასაგზავნად (შეიძლება ნებისმიერ დროს გამოიწერო)</li>
            <li>ჩვენი ვებსაიტისა და მომხმარებლის გამოცდილების გასაუმჯობესებლად</li>
        </ul>
        <h4>ჩვენ არ ვაკეთებთ:</h4>
        <ul>
            <li>არ ვყიდით ან ვქირაობთ შენს პირად ინფორმაციას</li>
            <li>არ ვუზიარებთ შენს მონაცემებს მესამე მხარეებს შენი თანხმობის გარეშე, გარდა იმ შემთხვევისა, როდესაც ეს კანონით იქნება მოთხოვნილი ან შენი სადაზღვევო მოთხოვნების შესრულებისთვის</li>
        </ul>
        <p><strong>მონაცემთა უსაფრთხოება:</strong> ვახორციელებთ ინდუსტრიის სტანდარტულ ღონისძიებებს შენი ინფორმაციის დასაცავად. თუმცა, ინტერნეტის მეშვეობით ვერცერთი გადაცემა 100% უსაფრთხო არ არის.</p>
        <p><strong>ქუქიზ:</strong> ჩვენმა ვებსაიტმა შეიძლება გამოიყენოს ქუქიზ უფრო გლუვი დათვალიერების გამოცდილებისა და ბაზისური ანალიტიკისთვის.</p>
        <p><strong>შენი თანხმობა:</strong> ჩვენი საიტის გამოყენებით, ეთანხმები ამ კონფიდენციალურობის შეტყობინებას.</p>
        <p><strong>დაგვიკავშირდი:</strong> თუ კითხვები გაქვს ამ პოლიტიკის შესახებ, გთხოვ დაუკავშირდი იულია ბარინოვას <a href="tel:+13479228037">📞 347-922-8037</a> ან <a href="mailto:julia@juliabarinova.com"> 📧 julia@juliabarinova.com.</a></p>
    </div>
    <hr class="disclaimer-divider">
    <div class="rights-reserved">
        <h3>⚖️ ყველა უფლება დაცულია</h3>
        <p>©️ 2025 Julia Barinova, Inc.</p>
        <p>ამ ვებსაიტზე არსებული ყველა მასალა — მათ შორის ტექსტი, გრაფიკა, ლოგოები, სურათები და ჩამოტვირთვადი მასალები — არის Julia Barinova, Inc.-ის საკუთრება და დაცულია ამერიკის და საერთაშორისო საავტორო უფლების კანონებით.</p>
        <p>ამ ვებსაიტის ნებისმიერი ნაწილის უნებართვო რეპროდუქცია, განაწილება ან გამოყენება მკაცრად აკრძალულია წინასწარი წერილობითი თანხმობის გარეშე.</p>
    </div>`,
    // Partners section
    partnersTitle: "ჩვენი სანდო სტრატეგიული სტომატოლოგი პარტნიორები",
    partnersTitle2: "სტომატოლოგიული ფოტოგალერია",
    phoneLabel: "ტელეფონი:",
websiteLabel: "ვებგვერდი:",
emailLabel: "ელფოსტა:",
calendarLabel: "დაჯავშნე ზარი:",
saveContact: "კონტაქტის შენახვა"
},

uz: {
    // Hero section
    heroTitle: "🦷 BUGUN BAXTLI TABASSUM: «Hammasini qamrab oluvchi» Tish davolash sug'urtasi: Darhol! Birinchi kundan!",
    baner1: "IMPLANTLAR, TOJLAR, KANALLAR 1-kundan boshlab qoplangan",
    baner2: "KUTISH DAVRI YO'Q. YO'QOLGAN TISH - YAXSHI",
    baner3: "$55/oydan boshlab",
    go1: "👇 KO'RIB CHIQISH VA RO'YXATDAN O'TISH:",
    go2: "👆 O'TING",
    advisorName: "Yuliya Barinova, MBA – litsenziyalangan sug'urta maslahatchi va broker tomonidan taklif qilinadi",
    meetJulia: "👋 Keling, tanishaylik",
    juliaIntro: "Salom, men Yuliya Barinova, Nyu-York shahrida joylashgan mustaqil sug'urta maslahatchi va brokerman, moliyaviy xizmatlarda 20 yildan ortiq tajribam bor - investitsiya maslahatidan va xej-fondlar marketingidan shaxsiy sug'urta rejalashtirish gacha.",
    juliaPassion: "Men odamlarni o'zlari, oilalari va bizneslarini halokatli moliyaviy xavflardan himoya qilishda yordam berishdan iborat bo'lgan ishqibozman - bu jiddiy kasallik, daromad yo'qolishi, uzoq muddatli g'amxo'rlik ehtiyojlari yoki yaqin kishini yo'qotishdan kelib chiqqan bo'lsin - ularni ta'lim berish va aqlli, moslashtirilgan sug'urta strategiyalarini qurish orqali. Men shuningdek, muhim bo'shliqlarni to'ldiruvchi va tish davolash kabi muhim xizmatlar uchun haqiqiy pulni tejovchi innovatsion yechimlarni ochishni yaxshi ko'raman.",
    clientStats: `👉 AQShda tish davolash o'zining qimmatligiga mashhur. Afsuski, ko'plab odamlar zaruriy tekshiruvlar va davolashni shunchaki moliyaviy imkoni yo'qligi sababli kechiktiradi - faqat keyinroq davolash uchun boylik talab qilishi mumkin bo'lgan yanada jiddiy tish muammolari bilan yuzlashish uchun. Yoki shunchaki og'zini umuman e'tiborsiz qoldirish, bu muhim umumiy sog'liq muammolariga olib kelishi mumkin.
    <br><br>
    Individual tish sug'urta rejalarining aksariyati - agar ish beruvchi tomonidan taklif qilinmagan bo'lsa - tojlar va ildiz kanallarini davolash kabi asosiy protseduralarda uzoq kutish davrlari bilan keladi va deyarli hech qachon implantlarni qoplamaydi.
    <br><br>
    Taxminan uch yil oldin men "yashirin gavharni" topdim: guruh kirish MetLife PPO va Delta Dental PPO rejalari kutish davrlari YO'Q va yo'qolgan tish istisnolari YO'Q - hatto implantlar va tojlar kabi asosiy davolash uchun ham. Bu men uchun shunchalik yaxshi ishladi (implantga deyarli $2,000 tejaganman), men ularni taklif qiluvchi kompaniyaning litsenziyalangan vakili bo'ldim, boshqalarning ham foyda olishiga yordam berishdan xursand bo'ldim.
    <br><br>
    O'shandan beri, butun mamlakat bo'ylab 1,000 dan ortiq mijozlar va ularning oilalari ushbu rejalardan foydalanib, tozalash, plomba, tojlar, ildiz kanallari davolash - va ha, implantlarga minglab dollar tejashgan. Hatto Nyu-York, Filadelfiya, Chikago va San-Frantsiskodagi mahalliy stomatologlar ham, biz bilan oxir-oqibat samimiy professional munosabatlarni rivojlantirgan, dastlab biroz shubhali edi, lekin keyinchalik mening eng kuchli himoyachilarimga aylandilar - endi har yili yuzlab bemorni qoplash uchun yo'naltiradilar.
    <br><br>
    Endi sizning navbatingiz! Men sizga sog'lom, baxtli tabassumingizni tiklashda yordam berishdan xursand bo'laman - men shaxsan foydalanib, tavsiya qilgan ikkita ishonchli reja va siz allaqachon bilgan va ishongan yoki kerak bo'lsa, tavsiya qilishimiz mumkin bo'lgan mahalliy tish davolash mutaxassislari bilan.`,
    // Plans section
    plansTitle: "🌟 Men tavsiya qilgan ikkita reja",
    plansIntro: "MetLife PPO (PDP Network) va Delta Dental PPO 1500 - mening ishonchli stomatologlar tarmog'im tomonidan qabul qilingan va tavsiya qilingan: Nyu-York, Filadelfiya, Mayami, San-Fransisko, Chikago va boshqa joylar (hududingizdagi yo'naltirish uchun bizdan so'rang!)",
    sharedAdvantages: "🔹 Ikkala rejaning umumiy afzalliklari",
    sharedList: [
        "✔️ Butun mamlakat bo'ylab ko'pchilik stomatologlar tomonidan qabul qilinadi",
        "✔️ KUTISH DAVRI YO'Q - hatto implantlar va tojlar uchun ham",
        "✔️ YO'QOLGAN TISH bandi yo'q: allaqachon yo'q tishni qoplaydi",
        "✔️ Qoplash keyingi oyning 1-kunidan boshlanadi (joriy oyning 20-kunigacha ro'yxatdan o'tgan bo'lsa)",
        "✔️ Yillik imtiyozlar yanvar 1-da yangilanadi (strategik reja tuzgan bo'lsangiz tejamingizni ikki barobarga oshirish mumkin)",
        "✔️ Minimal kutilmagan xarajatlar (jiddiy tish loyihasini boshlashdan oldin sug'urta kompaniyasidan qoplash bahosini oling!)"
    ],
    
    // MetLife section
    metlifeTitle: "🦷 MetLife PPO Platinum (PDP Network)",
    metlifeNotAvailable: "🚫 Mavjud emas: AK, ID, LA, ME, MD, MT, NH, NM, OR, SD, WA",
    whyClientsLove: "Mijozlar nima uchun yaxshi ko'radi:",
    metlifeFeatures: [
        "Saxovatli yillik maksimal imtiyoz: yiliga $3,000",
        "Past yillik ajratma: kishi uchun $25, ZIP kodiga asosan oila uchun $75",
        "Kutish davri YO'Q, hatto implantlar yoki tojlar uchun ham",
        "Yo'qolgan tishlar bandi yo'q",
        "Keng qabul qilingan (<a href='https://providers.online.metlife.com/findDentist?searchType=findDentistMetLife' target='_blank' rel='noopener noreferrer'>MetLife PPO tish davolash provayderlarini qidiring – PDP Network</a>)",
        "Bolalar ortodontiyasi qo'shilgan (umr bo'yi $2,000 gacha, ota-onaning rejasida 19 yoshgacha)"
    ],
    coverage: "Qoplash:",
    metlifeCoverage: [
        "✅ 100% – Profilaktika (tozalash, rentgen, tekshiruvlar, ftorid)",
        "✅ 80% – Asosiy (olib tashlash, mil'k davolash)",
        "✅ 50% – Asosiy (tojlar, ildiz kanallari, ko'priklar, tish protezlari, og'iz operatsiyasi)"
    ],
    monthlyPremiumsMetlife: "💰 Shaxs uchun oylik premiyalar (ZIP kodiga asoslangan namuna tariflar, $5 assotsiatsiya a'zoligi kiradi*):",
    monthlyPremiumsDelta: "💰 Shaxs uchun oylik premiyalar ($5 assotsiatsiya a'zoligi kiradi*):",
    metlifePricing: [
        "$96 – Pensilvaniya, Ogayo",
        "$110 – Nyu-Jersi, Staten-Aylend",
        "$123 – Nyu-York, Chikago, Mayami",
        "$133 – San-Fransisko"
    ],
    juliaRecommendationMetlife: 'YULIYANING TAVSIYASI: Asosiy tish ishi kerak bo\'lganlarga (implantlar, tojlar, keng davolash) yoki provayderini faqat MetLife bilan tarmoqda bo\'lganlarga eng yaxshisi (sizga ko\'proq pul tejaydi) <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">To\'liq reja tavsifi 📄</a>',
    
    // Delta Dental section
    deltaTitle: "🦷 Delta Dental PPO 1500",
    deltaFeatures: [
        "Yillik imtiyoz: kalendar yilida $1,500",
        "O'tkazish imtiyozi – foydalanilmagan imtiyozning bir qismini keyingi yilga o'tkazing",
        "Kutish davri YO'Q",
        "Yo'qolgan tishlarni qoplaydi",
        "Katta milliy tarmoq (barcha 50 shtatda mavjud – <a href='https://www.deltadental.com/us/en/member/find-a-dentist.html' target='_blank' rel='noopener noreferrer'>Delta Dental PPO provayderlarini qidiring</a>)"
    ],
    deltaCoverage: [
        "✅ 100% – Profilaktika",
        "✅ 80% – Asosiy (olib tashlash, ildiz kanallari)",
        "✅ 50% – Asosiy (tojlar, ko'priklar, operatsiya, implantlar, protezlar)"
    ],
    deltaPricing: [
        "$59.50 – Shaxsiy",
        "$100.75 – Kattalar + Bolalar",
        "$108.25 – Kattalar + Turmush o'rtog'i",
        "$161.25 – To'liq oila"
    ],
    juliaRecommendationDelta: 'YULIYANING TAVSIYASI: Ishonchli, byudjetga mos reja. Oilalar uchun ajoyib. Tishlaringizni minimal oylik xarajat bilan sog\'lom va toza saqlaydi. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">To\'liq reja tavsifi 📄</a>',
    
    // How coverage works
    coverageWorksTitle: "💡 Qoplash foizlari qanday ishlaydi",
    coverageExplanation: [
        "📌 100% (Profilaktika), 80% (Asosiy), va 50% (Asosiy) qoplash har bir tish davolash protsedurasining tarmoq ichidagi kelishilgan tarifiga asoslanib hisoblanadi.",
        "👩‍⚕️ Tarmoq ichidagi stomatologlar ular va sug'urtachi o'rtasidagi oldindan belgilangan tariflarga rioya qilishlari kerak - va sizning ulushingiz ushbu kamaytirilgan tariflarga asoslanadi.",
        "❗ Tarmoqdan tashqariga chiqqaningizmi? Biroz yuqoriroq hisob-kitoblar va ko'proq o'z xarajatlaringizni kutishingiz mumkin. Agar sevimli stomatologingiz tarmoqda bo'lmasa, tarmoqdan tashqari variantga ega bo'lish ajoyib. Odatda, naqd pul to'lash bilan solishtirganda baribir ancha pul tejaysiz!",
        "👉 Yangi stomatolog tanlashda, kutilmagan hisob-kitoblardan qochish uchun stomatologingiz bilan ularning sizning rejangiz bilan tarmoqda ekanligini tasdiqlashga harakat qiling."
    ],
    
    // Enrollment
    enrollmentTitle: "📝 Ro'yxatdan o'tish usuli",
    enrollmentSteps: [
        "Oyning 20-kunigacha <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> saytiga tashrif buyuring, keyingi oyning 1-kunidan a'zo bo'lish uchun",
        "ZIP kodini va tug'ilgan sanani kiriting",
        "Ishtirokchi turini tanlang: Shaxsiy / Kattalar + Bolalar / Er-xotin / Oila",
        "Reja(lar)ni tanlang: MetLife PPO Platinum / Delta Dental PPO 1500",
        "Guruh narxlariga kirish uchun EWA a'zoligini qo'shing (oyiga $5 - quyida tushuntirishni ko'ring)",
        "Enroll tugmasini bosing - darhol tasdiqlash oling"
    ],
    youllNeedTitle: "Sizga kerak bo'ladi:",
    youllNeedList: [
        "To'liq ism, tug'ilgan sana, IJTIMOIY HIMOYA RAQAMI (majburiy)",
        "Manzil, email, telefon raqami",
        "Bank hisobvarag'i ma'lumotlari (yo'naltirish + hisob raqami)",
        "❌ Kredit/debet kartalari qabul qilinmaydi"
    ],
    
    // Payment & Billing
    paymentTitle: "💳 To'lov va hisob-kitob tafsilotlari",
    paymentDetails: [
        "Sizning bank hisobvarag'ingizdan har oyning 28-kunida avtomatik ravishda NuEra tomonidan yechib olinadi",
        "To'lovlar brokeringiz orqali bekor qilmaguningizcha oylik davom etadi",
        "Iltimos, $30 qaytarish/qaytib kelish/qayta tiklash to'lovini oldini olish uchun yetarli mablag' mavjudligini ta'minlang"
    ],
    
    // After Enrollment
    afterEnrollmentTitle: "🗓️ Ro'yxatdan o'tgandan keyin",
    afterEnrollmentDetails: [
        "Odatda, birinchi oyning 8–15-kunlari orasida sug'urtachining tizimida paydo bo'lasiz",
        "MetLife a'zo ID = sizning SSN",
        "Delta Dental kartangizni pochta orqali yuboradi va onlayn ID beradi"
    ],
    trackBenefitsTitle: "Imtiyozlaringizni kuzating va boshqaring:",
    trackBenefitsList: [
        "🔹 metlife.com (rejangiz boshlanganidan keyin oy o'rtasigacha kirishingiz mumkin)",
        "🔹 deltadentalct.com",
        "🔹 corenroll.com yoki Corenroll ilovasi orqali"
    ],
    
    additionalBenefits: "*Elevate Wellness Association orqali qo'shimcha imtiyozlarni o'rganing ($5/oy a'zolik to'lovi yuqoridagi premium baholariga kiritilgan):",
    ewaDescription: "*Elevate Wellness Association (EWA) 1993 yilda tashkil etilgan milliy a'zolik tashkiloti bo'lib, u AQSh bo'ylab kichik va o'rta kompaniyalar, o'z-o'zini bandlash shaxslari, shaxslar va oilalarni odatda katta ish beruvchilar uchun ajratilgan guruh darajasidagi sog'liqni saqlash va farovonlik imtiyozlariga kirish imkoniyatini beradi. Quyidagi muhim imtiyozlar orasidan tanlashingiz mumkin:",
    ewaBenefits: [
        "Ko'rish, tibbiy, hayot, baxtsiz hodisa",
        "Kasalxona kompensatsiyasi va tanqidiy kasallik",
        "Telemeditsina va farovonlik dasturlari"
    ],
    browseOptions: "Xuddi shu <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> havolasi bo'yicha variantlaringizni ko'rib chiqing. Kerakligini tanlang!",
    
    // Testimonials
    testimonialsTitle: "Minnatdor mijozlar sharhlari",
    
    // Contact
    contactTitle: "📇 Yuliya Barinova, MBA bilan bog'laning",
    contactIntro: "📢 Men sizni men bilan bog'lanishga va sizning sug'urta rejalashtirish masalalaringizni muhokama qilish uchun bepul maslahat belgilashga taklif qilaman - shu jumladan o'zingiz va yaqinlaringizni tirik imtiyozlar bilan hayot sug'urtasi, nogironlik qoplovi, uzoq muddatli g'amxo'rlik va boshqa sizda bo'lishi mumkin bo'lgan savollar bilan himoya qilish. AQShda deyarli 30 yil yashab va ishlayotganim sababli, yangi muhojirlarni qimmatli ma'lumot va resurslar bilan qo'llab-quvvatlashdan xursandman, bu ularning yaxshiroq hayot qurishlariga yordam beradi.",
    thankYou: "Qiziqishingiz va biznesingiz uchun rahmat.",
    contactInfo: {
        name: "Yuliya Barinova, MBA",
        title: "Litsenziyalangan sug'urta brokeri",
        license: "NYS sug'urta litsenziyasi LA-937924",
        phone: "347-922-8037",
        website: "www.juliabarinova.com",
        email: "julia@juliabarinova.com",
        calendar: "calendly.com/jbarinova",
        reviewsText: "Bizning Google sharhlarimizni, shu jumladan tish davolashni tekshiring:",
        reviewsLink: "Barcha sharhlar",
        saveContact: "Kontaktni saqlash"
    },
    dentalProfessionalsAtention: `
        <h2 class="partners-title">🦷 Tish davolash mutaxassislariga e'tibor! Keling, ko'proq tabassum yarataylik</h2>
    <p>Bemorlaringizga davolashda tezroq oldinga siljishga yordam berish yo'llarini qidiryapsizmi - va kamroq moliyaviy ikkilanish bilan?</p>
    <p>Biz sizga o'xshagan stomatologlarni bizga sherik bo'lishga taklif qilamiz, ikkita qiziqarli guruh kirish PPO tish davolash rejalarini taklif qilishda: MetLife PPO va Delta Dental PPO 1500. Ushbu rejalarda kutish davrlari yo'q, yo'qolgan tish istisnolari yo'q va implantlar, tojlar va ildiz kanallari kabi asosiy protseduralani qoplaydi - birinchi kundan boshlab.</p>
    <ul>
        <li>✅ Bemorlar tezroq tasdiqlar, kamroq o'z xarajatlari va zaruriy tish ishlariga ergashishda ko'proq motivatsiyadan foydalanadilar.</li>
        <li>✅ Stomatologlar kamroq bekor qilishlar, tezroq davolash aylanishi va baxtliroq, sodiq bemorlardan foydalanadilar.</li>
    </ul>
    <p>Sifatli tish davolashni yanada qulayroq va tartibga solingan qilish uchun birgalikda ishlaylik.</p>
    <p>📩 Bugun bog'laning - biz reja materiallarini yuborishdan, jamoangizni o'rgatishdan va hatto hududingizdagi tarmoqdagi provayderlari faol qidirayotgan bemorlarni yo'naltirishdan mamnun bo'lamiz.</p>
    <p>Birgalikda ko'proq tabassum yaratishimiz mumkin - tezlik, tejamkorlik va mamnunlik bilan!</p>
    <p> <a href="mailto:julia@juliabarinova.com" target="_blank" rel="noopener noreferrer">Ko'proq ma'lumot olish uchun bog'laning.</a></p>
    `,
    
    // Disclaimer
    newDisclaimer: `<div class="privacy-notice">
        USHBU XULOSA FAQAT MA'LUMOT BERISH MAQSADLARI UCHUN SIZNING SUG'URTA BROKERINGIZ TOMONIDAN REJA TANLASH JARAYONIDA SIZGA YORDAM BERISH UCHUN TAYYORLANGAN. BEMORLARGA QOPLASH, CHEKLOVLAR VA ISTISNOLAR HAQIDA TO'LIQ MA'LUMOT OLISH UCHUN BATAFSIL REJA HUJJATLARINI KO'RIB CHIQISH TAVSIYA ETILADI. DAVOLASH REJALARI, QOPLASH TASDIQLARI VA TO'LOV MAS'ULIYATLARI HAQIDAGI BARCHA MUHOKAMALAR TO'G'RIDAN-TO'G'RI SIZ, SIZNING TISH DAVOLASH PROVAYDERINGIZ VA SUG'URTA KOMPANIYASI O'RTASIDA HAL QILINISHI KERAK.<br><br>
        
        <h3>🛡️ Maxfiylik haqida xabar</h3>
        <p><strong>Kuchga kirish sanasi:</strong> 2025</p>
        <p>Julia Barinova, Inc. ("biz," "bizning" yoki "bizni") sizning maxfiyligingizni hurmat qiladi va sizning shaxsiy ma'lumotlaringizni himoya qilishga majburdir. Ushbu maxfiylik haqida xabar biz sizning veb-saytimizga tashrif buyurganingizda, formalarni yuborgan yoki biz bilan muloqot qilganingizda ma'lumotlaringizni qanday yig'ishimiz, ishlatishimiz va himoya qilishimizni tushuntiradi.</p>
        <h4>Biz nima yig'amiz:</h4>
        <p>Biz siz bergan shaxsiy tafsilotlarni yig'ishimiz mumkin, shu jumladan sizning ismingiz, aloqa ma'lumotlari va sug'urta afzalliklari. Shuningdek, biz analitik maqsadlarda brauzer turi, IP manzili va sayt faolligi kabi shaxsiy bo'lmagan ma'lumotlarni yig'amiz.</p>
        <h4>Ma'lumotlaringizni qanday ishlatamiz:</h4>
        <ul>
            <li>Sizning so'rovlaringizga javob berish uchun</li>
            <li>Sug'urta takliflari yoki ro'yxatdan o'tish yordami berish uchun</li>
            <li>Muhim yangilanishlar va foydali ma'lumotlarni yuborish uchun (istalgan vaqtda obunani bekor qilishingiz mumkin)</li>
            <li>Veb-saytimiz va foydalanuvchi tajribasini yaxshilash uchun</li>
        </ul>
        <h4>Biz QILMAYMIZ:</h4>
        <ul>
            <li>Shaxsiy ma'lumotlaringizni sotmaymiz yoki ijaraga bermaymiz</li>
            <li>Ma'lumotlaringizni uchinchi tomonlar bilan sizning roziligingiz holda bo'lmasdan baham ko'rmaymiz, qonun talablari yoki sizning sug'urta so'rovlaringizni bajarish uchun talab qilingan holatlar bundan mustasno</li>
        </ul>
        <p><strong>Ma'lumotlar xavfsizligi:</strong> Biz ma'lumotlaringizni himoya qilish uchun sanoat standartlaridagi chora-tadbirlarni amalga oshiramiz. Biroq, hech bir internet orqali uzatish 100% xavfsiz emas.</p>
        <p><strong>Cookie-lar:</strong> Bizning veb-saytimiz silliqroq ko'rish tajribasi va asosiy tahlil uchun cookie-lardan foydalanishi mumkin.</p>
        <p><strong>Sizning roziliringiz:</strong> Saytimizdan foydalanish orqali siz ushbu maxfiylik haqidagi xabarga rozi bo'lasiz.</p>
        <p><strong>Biz bilan bog'laning:</strong> Agar bu siyosat haqida savollaringiz bo'lsa, iltimos Yuliya Barinova bilan bog'laning <a href="tel:+13479228037">📞 347-922-8037</a> yoki <a href="mailto:julia@juliabarinova.com"> 📧 julia@juliabarinova.com.</a></p>
    </div>
    <hr class="disclaimer-divider">
    <div class="rights-reserved">
        <h3>⚖️ Barcha huquqlar himoyalangan</h3>
        <p>©️ 2025 Julia Barinova, Inc.</p>
        <p>Ushbu veb-saytdagi barcha kontent — shu jumladan matn, grafika, logotiplar, rasmlar va yuklab olish mumkin bo'lgan materiallar — Julia Barinova, Inc. mulki hisoblanadi va AQSh va xalqaro mualliflik huquqi qonunlari bilan himoyalangan.</p>
        <p>Ushbu veb-saytning biron bir qismini ruxsatsiz ko'paytirish, tarqatish yoki foydalanish oldindan yozma rozilik holda qat'iyan taqiqlanadi.</p>
    </div>`,
    // Partners section
    partnersTitle: "Bizning ishonchli strategik tish davolash hamkorlari",
    partnersTitle2: "Tish davolash rasmlari galeriyasi",
    phoneLabel: "Telefon:",
websiteLabel: "Vebsayt:",
emailLabel: "Elektron pochta:",
calendarLabel: "Qo‘ng‘iroqni bron qilish:",
saveContact: "Kontaktni saqlash"
},
es: {
    // Hero section
    heroTitle: "🦷 SONRISA FELIZ HOY: Seguro Dental «Todo Incluido» que Funciona: ¡De inmediato! ¡Desde el día 1!",
    baner1: "IMPLANTES, CORONAS, CANALES CUBIERTOS desde el día 1",
    baner2: "SIN PERÍODO DE ESPERA. DIENTE FALTANTE - ESTÁ BIEN",
    baner3: "desde $55/mes",
    go1: "👇 PARA REVISAR Y REGISTRARSE:",
    go2: "👆 IR",
    advisorName: "Presentado por Julia Barinova, MBA – Asesora de Seguros Licenciada y Corredora",
    meetJulia: "👋 Vamos a conocernos",
    juliaIntro: "Hola, soy Julia Barinova, una Asesora de Seguros y Corredora independiente con sede en la ciudad de Nueva York, con más de 20 años de experiencia en servicios financieros - desde consultoría de inversiones y marketing de fondos de cobertura hasta planificación personalizada de seguros.",
    juliaPassion: "Soy apasionada por ayudar a las personas a protegerse a sí mismas, a sus familias y negocios de riesgos financieros devastadores - ya sea que surjan de enfermedades graves, pérdida de ingresos, necesidades de cuidado a largo plazo, o la pérdida de un ser querido - educándolos y construyendo estrategias de seguros inteligentes y personalizadas. También me encanta descubrir soluciones innovadoras que llenan vacíos críticos y ahorran dinero real en servicios esenciales como el cuidado dental.",
    clientStats: `👉 El cuidado dental en EE.UU. es notoriamente caro. Tristemente, muchas personas posponen chequeos y tratamientos esenciales simplemente porque no pueden pagarlos - solo para enfrentar problemas dentales más serios después que pueden costar una fortuna arreglar. O simplemente descuidan completamente su boca, lo que puede resultar en problemas de salud general significativos.
    <br><br>
    La mayoría de los planes individuales de seguro dental - a menos que sean ofrecidos a través de un empleador - vienen con largos períodos de espera para procedimientos mayores como coronas y endodoncias, y casi nunca cubren implantes.
    <br><br>
    Hace aproximadamente tres años, descubrí una "joya oculta": planes de acceso grupal MetLife PPO y Delta Dental PPO SIN períodos de espera y SIN exclusiones de dientes faltantes - incluso para tratamientos mayores como implantes y coronas. Funcionó tan bien para mí (ahorré casi $2,000 en un implante) que me convertí en representante licenciada de la compañía que los ofrece, emocionada de ayudar a otros a beneficiarse también.
    <br><br>
    Desde entonces, más de 1,000 clientes y sus familias a nivel nacional han usado estos planes para ahorrar miles de dólares en limpiezas, empastes, coronas, endodoncias - y sí, implantes. Incluso los dentistas locales en la ciudad de Nueva York, Filadelfia, Chicago y San Francisco, con quienes eventualmente desarrollamos relaciones profesionales cálidas, fueron algo escépticos al principio, pero luego se convirtieron en mis defensores más fuertes - ahora refieren cientos de pacientes cada año para obtener cobertura.
    <br><br>
    ¡Ahora es tu turno! Estaría encantada de ayudarte a restaurar tu sonrisa saludable y feliz - con dos planes confiables que uso personalmente y recomiendo, y profesionales dentales locales que ya conoces y en los que confías, o a quienes podemos recomendarte, si es necesario.`,
    // Plans section
    plansTitle: "🌟 Los Dos Planes que Recomiendo",
    plansIntro: "MetLife PPO (PDP Network) y Delta Dental PPO 1500 - aceptados y recomendados por mi red confiable de dentistas en: Nueva York, Filadelfia, Miami, San Francisco, Chicago, y más (¡pídenos una referencia en tu área!)",
    sharedAdvantages: "🔹 Ventajas Compartidas de Ambos Planes",
    sharedList: [
        "✔️ Aceptado por la mayoría de dentistas a nivel nacional",
        "✔️ SIN PERÍODO DE ESPERA - incluso para implantes y coronas",
        "✔️ SIN cláusula de DIENTE FALTANTE: cubre diente ya ausente",
        "✔️ La cobertura comienza el 1ro del próximo mes (si se inscribe antes del 20 del mes actual)",
        "✔️ Los beneficios anuales se reinician el 1 de enero (puedes duplicar tus ahorros si planificas estratégicamente)",
        "✔️ Mínimas sorpresas de gastos propios (¡recibe una estimación de cobertura de la compañía de seguros antes de comenzar un proyecto dental serio!)"
    ],
    
    // MetLife section
    metlifeTitle: "🦷 MetLife PPO Platinum (PDP Network)",
    metlifeNotAvailable: "🚫 No disponible en: AK, ID, LA, ME, MD, MT, NH, NM, OR, SD, WA",
    whyClientsLove: "Por qué los Clientes lo Aman:",
    metlifeFeatures: [
        "Beneficio Anual Máximo Generoso: $3,000/año",
        "Deducible Anual Bajo: $25/persona, $75 familia basado en código ZIP",
        "SIN Período de Espera, incluso en implantes o coronas",
        "SIN Cláusula de Dientes Faltantes",
        "Ampliamente aceptado (<a href='https://providers.online.metlife.com/findDentist?searchType=findDentistMetLife' target='_blank' rel='noopener noreferrer'>buscar Proveedores Dentales MetLife PPO – PDP Network</a>)",
        "Ortodoncia infantil incluida (hasta $2,000 de por vida, menores de 19 años en el plan de los padres)"
    ],
    coverage: "Cobertura:",
    metlifeCoverage: [
        "✅ 100% – Preventiva (limpiezas, rayos X, exámenes, flúor)",
        "✅ 80% – Básica (extracciones, tratamiento de encías)",
        "✅ 50% – Mayor (coronas, endodoncias, puentes, dentaduras, cirugía oral)"
    ],
    monthlyPremiumsMetlife: "💰 Primas Mensuales para un Individuo (tarifas de ejemplo basadas en código ZIP, incluye membresía de asociación de $5*):",
    monthlyPremiumsDelta: "💰 Primas Mensuales para un Individuo (incluye membresía de asociación de $5*):",
    metlifePricing: [
        "$96 – Pensilvania, Ohio",
        "$110 – Nueva Jersey, Staten Island",
        "$123 – Nueva York, Chicago, Miami",
        "$133 – San Francisco"
    ],
    juliaRecommendationMetlife: 'RECOMENDACIÓN DE JULIA: Mejor para aquellos que necesitan trabajo dental mayor (implantes, coronas, tratamientos extensivos) o cuyo proveedor está en la red solo con MetLife (te ahorrará más dinero) <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Descripción Completa del Plan 📄</a>',
    
    // Delta Dental section
    deltaTitle: "🦷 Delta Dental PPO 1500",
    deltaFeatures: [
        "Beneficio anual: $1,500/ año calendario",
        "Beneficio Transferible – transfiere parte del beneficio no usado al próximo año",
        "SIN Período de Espera",
        "Cubre Dientes Faltantes",
        "Gran red nacional (disponible en los 50 estados – <a href='https://www.deltadental.com/us/en/member/find-a-dentist.html' target='_blank' rel='noopener noreferrer'>buscar Proveedores Delta Dental PPO</a>)"
    ],
    deltaCoverage: [
        "✅ 100% – Preventiva",
        "✅ 80% – Básica (extracciones, endodoncias)",
        "✅ 50% – Mayor (coronas, puentes, cirugía, implantes, dentaduras)"
    ],
    deltaPricing: [
        "$59.50 – Individual",
        "$100.75 – Adulto + Niños",
        "$108.25 – Adulto + Cónyuge",
        "$161.25 – Familia Completa"
    ],
    juliaRecommendationDelta: 'RECOMENDACIÓN DE JULIA: Un plan confiable y económico. Excelente para familias. Mantendrá tus dientes saludables y limpios con costo mensual mínimo. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Descripción Completa del Plan 📄</a>',
    
    // How coverage works
    coverageWorksTitle: "💡 Cómo Funcionan los Porcentajes de Cobertura",
    coverageExplanation: [
        "📌 La cobertura del 100% (Preventiva), 80% (Básica), y 50% (Mayor) se calcula basada en la tarifa negociada dentro de la red para cada procedimiento dental.",
        "👩‍⚕️ Los dentistas dentro de la red deben seguir tarifas preestablecidas entre ellos y el asegurador - y tu parte se basa en esas tarifas reducidas.",
        "❗ ¿Vas fuera de la red? Puedes esperar facturas algo más altas y más gastos de tu bolsillo. La opción fuera de la red es genial tener si tu dentista favorito no está en la red. ¡Usualmente, aún ahorrarás bastante dinero comparado con pagar en efectivo!",
        "👉 Al elegir un nuevo dentista, trata de confirmar con tu dentista que están en la red con tu plan para evitar facturas sorpresa."
    ],
    
    // Enrollment
    enrollmentTitle: "📝 Cómo Inscribirse",
    enrollmentSteps: [
        "Visita <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong> antes del día 20 del mes para convertirte en Miembro el 1ro del mes siguiente",
        "Ingresa código ZIP y fecha de nacimiento",
        "Elige tipo de participante: Individual / Adulto + Niños / Pareja / Familia",
        "Selecciona plan(es): MetLife PPO Platinum / Delta Dental PPO 1500",
        "Agrega Membresía EWA ($5/mes-ver explicación abajo) para acceder a precios grupales",
        "Haz clic en Inscribir - recibe confirmación instantánea"
    ],
    youllNeedTitle: "Necesitarás:",
    youllNeedList: [
        "Nombre completo, fecha de nacimiento, NÚMERO DE SEGURO SOCIAL (requerido)",
        "Dirección, email, número de teléfono",
        "Información de cuenta bancaria (routing + número de cuenta)",
        "❌ Tarjetas de crédito/débito NO son aceptadas"
    ],
    
    // Payment & Billing
    paymentTitle: "💳 Detalles de Pago y Facturación",
    paymentDetails: [
        "Tu cuenta bancaria será cargada automáticamente alrededor del día 28 de cada mes por NuEra",
        "Los pagos continúan mensualmente hasta que canceles a través de tu corredor",
        "Por favor asegúrate de que haya fondos suficientes disponibles para evitar una tarifa de devolución/rebote/reinstalación de $30"
    ],
    
    // After Enrollment
    afterEnrollmentTitle: "🗓️ Después de la Inscripción",
    afterEnrollmentDetails: [
        "Usualmente, aparecerás en el sistema del asegurador entre el día 8–15 del primer mes",
        "ID de Miembro MetLife = tu SSN",
        "Delta Dental te enviará tu tarjeta por correo y proporcionará un ID en línea"
    ],
    trackBenefitsTitle: "Rastrea y Gestiona tus Beneficios:",
    trackBenefitsList: [
        "🔹 metlife.com (podrás acceder a mediados de mes después del inicio de tu plan)",
        "🔹 deltadentalct.com",
        "🔹 corenroll.com o través de la app Corenroll"
    ],
    
    additionalBenefits: "Explora beneficios adicionales a través de *Elevate Wellness Association (la tarifa de membresía de $5/mes está incluida en las estimaciones de prima anteriores):",
    ewaDescription: "*Elevate Wellness Association (EWA) es una organización de membresía nacional fundada en 1993 que empodera a pequeñas y medianas empresas, individuos auto-empleados, individuos y familias a través de EE.UU. para acceder a beneficios de salud y bienestar a nivel grupal típicamente reservados para empleadores más grandes. Puedes elegir entre los siguientes beneficios importantes:",
    ewaBenefits: [
        "Visión, Médico, Vida, Accidente",
        "Indemnización Hospitalaria y Enfermedad Crítica",
        "Telemedicina y programas de Bienestar"
    ],
    browseOptions: "Navega tus opciones siguiendo el mismo enlace <strong><a href='https://go.juliabarinova.com/smile' target='_blank'>go.juliabarinova.com/smile</a></strong>. ¡Elige los que necesites!",
    
    // Testimonials
    testimonialsTitle: "Reseñas de Clientes Agradecidos",
    
    // Contact
    contactTitle: "📇 Contacta a Julia Barinova, MBA",
    contactIntro: "📢 Te invito a conectarte conmigo y programar una consulta gratuita para discutir tu planificación de seguros - incluyendo protegerte a ti y a tus seres queridos con seguro de vida con beneficios vivientes, cobertura de discapacidad, cuidado a largo plazo, y cualquier otra pregunta que puedas tener. Habiendo vivido y trabajado en EE.UU. por casi 30 años, estoy feliz de apoyar a nuevos inmigrantes con información valiosa y recursos para ayudarlos a construir una mejor vida.",
    thankYou: "Gracias por tu interés y tu negocio.",
    contactInfo: {
        name: "Julia Barinova, MBA",
        title: "Corredora de Seguros Licenciada",
        license: "Licencia de Seguros NYS LA-937924",
        phone: "347-922-8037",
        website: "www.juliabarinova.com",
        email: "julia@juliabarinova.com",
        calendar: "calendly.com/jbarinova",
        reviewsText: "Revisa nuestras reseñas de Google, incluyendo dental:",
        reviewsLink: "Todas las reseñas",
        saveContact: "Guardar contacto"
    },
    dentalProfessionalsAtention: `
        <h2 class="partners-title">🦷 ¡Atención Profesionales Dentales! Creemos Más Sonrisas Juntos</h2>
    <p>¿Estás buscando formas de ayudar a tus pacientes a avanzar con el tratamiento más rápido — y con menos vacilación financiera?</p>
    <p>Estamos invitando a dentistas como tú a asociarse con nosotros en ofrecer dos emocionantes planes dentales PPO de acceso grupal: MetLife PPO y Delta Dental PPO 1500. Estos planes no tienen períodos de espera, no tienen exclusiones de dientes faltantes, y cubren procedimientos mayores como implantes, coronas, y endodoncias — desde el primer día.</p>
    <ul>
        <li>✅ Los pacientes se benefician de aprobaciones más rápidas, costos menores de bolsillo, y mayor motivación para seguir adelante con el trabajo dental necesario.</li>
        <li>✅ Los dentistas se benefician de menos cancelaciones, cambio de tratamiento más rápido, y pacientes más felices y leales.</li>
    </ul>
    <p>Trabajemos juntos para hacer el cuidado dental de calidad más accesible y simplificado.</p>
    <p>📩 Ponte en contacto hoy — con gusto enviaremos materiales del plan, educaremos a tu equipo, e incluso referiremos pacientes que están buscando activamente proveedores en la red en tu área.</p>
    <p>¡Juntos, podemos hacer que más sonrisas sucedan — con velocidad, ahorros, y satisfacción!</p>
    <p> <a href="mailto:julia@juliabarinova.com" target="_blank" rel="noopener noreferrer">Contáctanos para saber más.</a></p>
    `,
    // Disclaimer
    newDisclaimer: `<div class="privacy-notice">
        ESTE RESUMEN HA SIDO PREPARADO ÚNICAMENTE PARA PROPÓSITOS INFORMATIVOS POR TU CORREDOR DE SEGUROS PARA ASISTIRTE EN EL PROCESO DE SELECCIÓN DE PLAN. SE RECOMIENDA FUERTEMENTE A LOS PACIENTES QUE REVISEN LOS DOCUMENTOS DETALLADOS DEL PLAN PARA INFORMACIÓN COMPRENSIVA SOBRE COBERTURA, LIMITACIONES, Y EXCLUSIONES. TODAS LAS DISCUSIONES REFERENTES A PLANES DE TRATAMIENTO, APROBACIONES DE COBERTURA, Y RESPONSABILIDADES DE PAGO DEBEN SER MANEJADAS DIRECTAMENTE ENTRE TÚ, TU PROVEEDOR DENTAL, Y LA COMPAÑÍA DE SEGUROS.<br><br>
        
        <h3>🛡️ Aviso de Privacidad</h3>
        <p><strong>Fecha Efectiva:</strong> 2025</p>
        <p>Julia Barinova, Inc. ("nosotros," "nuestro," o "nos") respeta tu privacidad y está comprometida a proteger tu información personal. Este Aviso de Privacidad explica cómo recolectamos, usamos, y protegemos tus datos cuando visitas nuestro sitio web, envías formularios, o te comunicas con nosotros.</p>
        <h4>Lo que Recolectamos:</h4>
        <p>Podemos recolectar detalles personales que proporciones, incluyendo tu nombre, información de contacto, y preferencias de seguros. También recolectamos datos no personales como tipo de navegador, dirección IP, y actividad del sitio para propósitos analíticos.</p>
        <h4>Cómo Usamos tu Información:</h4>
        <ul>
            <li>Para responder a tus consultas</li>
            <li>Para proporcionar cotizaciones de seguros o asistencia de inscripción</li>
            <li>Para enviar actualizaciones importantes e información útil (puedes cancelar suscripción en cualquier momento)</li>
            <li>Para mejorar nuestro sitio web y experiencia del usuario</li>
        </ul>
        <h4>NO hacemos:</h4>
        <ul>
            <li>Vender o rentar tu información personal</li>
            <li>Compartir tus datos con terceros sin tu consentimiento, excepto donde sea requerido por ley o para cumplir tus solicitudes de seguros</li>
        </ul>
        <p><strong>Seguridad de Datos:</strong> Implementamos medidas estándar de la industria para proteger tu información. Sin embargo, ninguna transmisión de internet es 100% segura.</p>
        <p><strong>Cookies:</strong> Nuestro sitio web puede usar cookies para una experiencia de navegación más fluida y analíticos básicos.</p>
        <p><strong>Tu Consentimiento:</strong> Al usar nuestro sitio, consientes a este Aviso de Privacidad.</p>
        <p><strong>Contáctanos:</strong> Si tienes preguntas sobre esta política, por favor contacta a Julia Barinova al <a href="tel:+13479228037">📞 347-922-8037</a> o <a href="mailto:julia@juliabarinova.com"> 📧 julia@juliabarinova.com.</a></p>
    </div>
    <hr class="disclaimer-divider">
    <div class="rights-reserved">
        <h3>⚖️ Todos los Derechos Reservados</h3>
        <p>©️ 2025 Julia Barinova, Inc.</p>
        <p>Todo el contenido en este sitio web — incluyendo texto, gráficos, logos, imágenes, y materiales descargables — es propiedad de Julia Barinova, Inc. y protegido por leyes de derechos de autor de EE.UU. e internacionales.</p>
        <p>La reproducción, distribución, o uso no autorizado de cualquier parte de este sitio web está estrictamente prohibido sin consentimiento escrito previo.</p>
    </div>`,

    // Partners section
    partnersTitle: "Nuestros socios dentales estratégicos de confianza",
    partnersTitle2: "Galería de Fotos de Odontología",
    phoneLabel: "Teléfono:",
    websiteLabel: "Sitio Web:",
    emailLabel: "Email:",
    calendarLabel: "Reservar una Llamada:",
    saveContact: "Guardar contacto"
}
        };

        // Current language
        let currentLanguage = 'en';

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
                const translation = translate(key);
                
                if (Array.isArray(translation)) {
                    // Handle lists
                    if (element.tagName === 'UL' || element.tagName === 'OL') {
                        element.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
                    }
                } else if (key === 'clientStats' || key === 'juliaRecommendationMetlife' || key === 'juliaRecommendationDelta' || key === 'dentalProfessionalsAtention') {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            });

            // Handle special coverage explanation
            const coverageDiv = document.getElementById('coverageExplanation');
            if (coverageDiv) {
                const explanations = translate('coverageExplanation');
                if (Array.isArray(explanations)) {
                    coverageDiv.innerHTML = explanations.map(text => `<p>${text}</p>`).join('');
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
                element.innerHTML = translation;
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
                { name: "Dr. Boris Zats, Dr Dmitry Tokar, Sheepsheadbay Oral Surgery, Forest Hills Oral Surgery",city: "New York City", link: "https://share.google/O7ZBgf7rdE5hY2oX2"},
                { name: "Sheepshead Bay Oral Surgery PLLC - MY ORAL SURGEON",city: "New York City", link: "https://share.google/AXFZCzTV6frl7MzW8"},
                { name: "Royzman & Poznyansky, DDS (DENTAL CENTER OF BROOKLYN)",city: "New York City", link: "https://share.google/2260Jitf3tj7fnNFL"},
                { name: "Family Smile Dental",city: "New York City", link: "https://share.google/MyapQ9y2glGcX7Afs"},
                { name: "Dr. Mikhail Ruvinsky",city: "New York City", link: "https://share.google/z4oXraxYRLC7EVgNM"},
                {name: "Dr. David Poiman, DDS,  Yekaterina (Katya) Ryumina, Dental Hygienist ☺️",city: "New York City", link: "https://share.google/aAwz0Rxr7adJ15nzJ"},
                { name: "Alfa Dental", city: "New York City", link: "https://share.google/DgDz1bGgVqfbZbtjV" },
                { name: "Leona Kotlyar, DDS - Pristine Pediatric Dentistry", city: "New York City", link: "https://share.google/b86pT6BGa773OLruL" },
                { name: "Vadim Firdman Luxury Dental, PC", city: "New York City", link: "https://share.google/MAOOt0VPal0MGjnOi" }
            ],
            "Pennsylvania": [
                { name: "Dental Beauty", city: "Philadelphia", link: "https://share.google/v3iJsA63ipHEAvqKa" },
                { name: "BABINER DENTAL", city: "Philadelphia", link: "https://share.google/Qx537wYznsP6Lfgbr" },
                { name: "Dr. Boris Babiner, DMD", city: "Philadelphia", link: "https://share.google/KLL3G0Ic3PqLHBzT6" },
                { name: "Pennsylvania Center for Advanced Dentistry - Dr. Olga Shvarts", city: "Philadelphia", link: "https://share.google/btwempK1V4plMXSPM" },
                { name: "Alexandr Volchonok DDS PC", city: "Philadelphia", link: "https://share.google/tHfHkbpojsODJxLLh" },
                { name: "Advanced Dental Solutions", city: "Pittsburgh", link: "https://share.google/iAtwPef4Lcrc7BhJ0" },
                { name: "Dr David Agia Southampton Aesthetic Dentistry", city: "Southampton", link: "https://share.google/KixNABUGX5SqFz0qk" }
            ],
            "Illinois": [
                { name: "Dr Konstantin Gromov ImplantWIDE Schaumburg", city: "Schaumburg", link: "https://share.google/GDNd620yH51Yo5nRq" },
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
                // { name: "Dr. Yuliya Khodak DMD", city: "New Jersey", link: "https://share.google/9Kqz6eXCGqSMQ3k07" }
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
    {/* </script> */}