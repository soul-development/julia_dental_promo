{/* <script> */}
        // Translation data
        const translations = {
            en: {
                // Hero section
                // heroTitle: "🦷 HAPPY SMILE TODAY: Your All-Inclusive Dental Coverage!",
                heroTitle: "🦷 HAPPY SMILE TODAY: «All Inclusive» Dental Insurance That Works: Right away! Day 1!",
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
                juliaRecommendationMetlife: 'JULIA\'S RECOMMENDATION: Best for those needing major dental work (implants, crowns, extensive treatments) or whose provider is in-network with MetLife only (will save you more money) <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Full Plan Description</a>',
                
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
                    "$55 – Individual",
                    "$100 – Adult + Children",
                    "$112 – Adult + Spouse",
                    "$156 – Full Family"
                ],
                juliaRecommendationDelta: 'JULIA\'S RECOMMENDATION: A reliable, budget-friendly plan. Great for families. Will keep your teeth healthy and clean at minimal monthly cost. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Full Plan Description</a>',
                
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
                testimonialsTitle: "Grateful Messages from Grateful Clients",
                
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
                juliaRecommendationMetlife: 'РЕКОМЕНДАЦИЯ ЮЛИИ: Подходит тем, кому нужно серьёзное стоматологическое лечение или у кого врач работает только с сетью MetLife. <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Полное описание плана</a>',
                
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
                    "$55 – Индивидуально",
                    "$100 – Взрослый + дети",
                    "$112 – Взрослый + супруг(а)",
                    "$156 – Полная семья"
                ],
                juliaRecommendationDelta: 'РЕКОМЕНДАЦИЯ ЮЛИИ: Надёжный и доступный план для всей семьи. Поможет сохранить здоровье зубов по минимальной цене. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Полное описание плана</a>',
                
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
                meetJulia: "👋 Знайомтеся з Юлією",
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
                juliaRecommendationMetlife: 'РЕКОМЕНДАЦІЯ ЮЛІЇ: Найкраще для тих, хто потребує серйозної стоматологічної роботи (імпланти, коронки, обширне лікування) або чий лікар працює в мережі лише з MetLife (заощадить вам більше грошей). <a href="MetLife Dental Plan Summary.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">MetLife план детально</a>',
                
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
                    "$55 – Індивідуальна особа",
                    "$100 – Дорослий + діти",
                    "$112 – Дорослий + чоловік/дружина",
                    "$156 – Повна сім'я"
                ],
                juliaRecommendationDelta: 'РЕКОМЕНДАЦІЯ ЮЛІЇ: Надійний, бюджетний план. Чудовий для сімей. Підтримає здоров\'я ваших зубів з мінімальними щомісячними витратами. <a href="Delta-Dental-Plan Description.pdf" target="_blank" rel="noopener noreferrer" class="plan-summary-link">Delta Dental план детально</a>',
                
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
                testimonialsTitle: "Вдячні повідомлення від вдячних клієнтів",
                
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
                const phoneLabel = currentLanguage === 'en' ? 'Phone:' : 'Тел:';
                const websiteLabel = currentLanguage === 'en' ? 'Website:' : 'Сайт:';
                const emailLabel = 'Email:';
                const calendarLabel = currentLanguage === 'en' ? 'Book a Call:' : 'Запись:';
                const saveContact = currentLanguage === 'en' ? 'Save Contact:' : 'Сохранить контакт:';
                
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