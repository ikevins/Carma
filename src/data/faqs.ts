export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'mesoneedling' | 'wrinkle-relaxers' | 'dermal-fillers' | 'prp';
}

export const faqs: FAQ[] = [
  // General FAQs
  {
    id: 1,
    category: 'general',
    question: "What is Botox?",
    answer: "Botox, more commonly known as a neuromodulator, is a commonly used drug in aesthetics to temporarily paralyze muscles to reduce or eliminate fine lines and wrinkles of the face. The toxin is a purified substance that is derived from bacteria and, when injected into the muscle, it blocks the nerve signals that cause the muscle to contract. Without this signal, the muscle cannot contract, therefore, reducing unwanted facial wrinkles."
  },
  {
    id: 2,
    category: 'general',
    question: "Is Botox safe?",
    answer: "Botulinum toxin has been used for medical and cosmetic purposes for several decades and is generally considered safe when administered by a trained and experienced healthcare provider. The cosmetic form of botulinum toxin is purified and highly diluted, therefore the volume injected is not sufficient to cause botulism. Like any medical procedure, it carries some risks and side effects including temporary bruising, swelling or redness at the injection site, headaches, mild flu-like symptoms that typically resolve on its own. In rare case, brow or eyelid drooping can occur if the injection spreads beyond the intended area, which is why this procedure should always be performed by a qualified provider."
  },
  {
    id: 3,
    category: 'general',
    question: "What is the difference between Botox and the other brands?",
    answer: "In the US, there are currently five FDA-approved brands which are all derived from Botulinum toxin type A. Each brand varies slightly in the molecular weight of the core protein, inactive ingredients, and manufacturer. However, the underlying mechanism of the drug all works the same."
  },
  {
    id: 4,
    category: 'general',
    question: "How long does Botox last?",
    answer: "Botox typically lasts around 3-4 months depending on the area that was treated. For some areas, such as the masseters, it can last up to 6 months. The benefit of being consistent with Botox treatments is that, over time, the muscle will start to atrophy or shrink, and for some patients this allows them to go for longer periods before having to treat again."
  },
  {
    id: 5,
    category: 'general',
    question: "What are dermal fillers?",
    answer: "Dermal fillers are injectable substances that are used to add volume, smooth out fine lines, and enhance certain facial features such as lips and cheeks. Most fillers are made of hyaluronic acid, which is a sugar molecule naturally found in connective tissues, joints, and skin. Hyaluronic acid is known for its ability to retain moisture and can bind up to 1000 times its volume in water, which makes it ideal for keeping tissues hydrated and plump. There are other types of fillers available at Carma Aesthetics, such as calcium hydroxylapatite (CaHa) which helps to stimulate your own collagen and are often used in cases where there is more significant volume loss."
  },
  {
    id: 6,
    category: 'general',
    question: "How long do fillers typically last?",
    answer: "The duration of fillers depends on where it was placed and the type of product used. On average, your body will begin to break down filler in 9-12 months, sometimes longer. Many patients think they need to add more filler after 1 year, which is not always the case. It is always best to follow up with your injector to determine what the best course of treatment is."
  },
  {
    id: 7,
    category: 'general',
    question: "What should I expect during a consultation?",
    answer: "At your initial consultation, we will discuss your medical history and aesthetic goals before performing a full face assessment to determine what procedures would best fit your needs. It is important to discuss any medications that you are taking and any current medical conditions to reduce the risk of complications down the line. During the consultation, should you decide you want to proceed with the procedure if it is determined that you are a good candidate, the treatment can be performed on the same day. After care instructions will be given to after your procedure to help achieve optimal results."
  },
  {
    id: 8,
    category: 'general',
    question: "Is there anything I should avoid before my appointment?",
    answer: "It is recommended to avoid aspirin, anti-inflammatory medications (i.e ibuprofen), anticoagulants (blood thinners), Vitamin E, ginkgo biloba, and fish oil 7 days prior to receiving any injections. Alcohol should be avoided 24 hours before your appointment to reduce the risk of bleeding. Always consult with your primary care physician prior to discontinuing any of these medications."
  },

  // Mesoneedling FAQs
  {
    id: 9,
    category: 'mesoneedling',
    question: "How is Mesoneedling different from Microneedling?",
    answer: "While both treatments use tiny needles to create micro-injuries in the skin to stimulate collagen, Mesoneedling does not create direct trauma to the blood vessels (therefore no bleeding is involved) and goes a step further by infusing active ingredients during the treatment. This makes it more effective for addressing specific concerns like hydration, pigmentation, and fine lines."
  },
  {
    id: 10,
    category: 'mesoneedling',
    question: "What skin concerns can Mesoneedling treat?",
    answer: "Mesoneedling can help improve fine lines and wrinkles, uneven skin tone, sun damage and pigmentation, acne scars, dull or dehydrated skin, enlarged pores and skin laxity."
  },
  {
    id: 11,
    category: 'mesoneedling',
    question: "Does the treatment hurt?",
    answer: "Most patients find Mesoneedling tolerable. We offer the option of topical numbing cream which is applied before the procedure to ensure the treatment is as comfortable as possible."
  },
  {
    id: 12,
    category: 'mesoneedling',
    question: "When will I see results?",
    answer: "Results vary, but many clients notice an improvement in their skin's radiance and texture within a few days. Full results, including enhanced collagen production, typically become more apparent after 4-6 weeks."
  },
  {
    id: 13,
    category: 'mesoneedling',
    question: "How many treatments will I need?",
    answer: "For optimal results, a series of 3-6 treatments spaced 2-3 weeks apart is recommended. Your provider will design a personalized plan based on your skin goals."
  },
  {
    id: 14,
    category: 'mesoneedling',
    question: "Is there any downtime?",
    answer: "Mesoneedling has minimal downtime. You may experience mild redness and sensitivity for 1-2 days post-treatment, similar to a mild sunburn. Proper aftercare, including sunscreen and gentle skincare, is essential."
  },

  // Wrinkle Relaxers FAQs
  {
    id: 15,
    category: 'wrinkle-relaxers',
    question: "What are Botox®, Daxxify®, and Xeomin®?",
    answer: "These are injectable neurotoxins derived from botulinum toxin type A. They work by temporarily blocking nerve signals to the muscles that cause dynamic wrinkles. Each has unique properties: Xeomin® is a 'naked' neurotoxin without additional proteins, making it ideal for those seeking a purified formula. Botox® is the most well-known brand, offering reliable results for targeted areas. Daxxify® is known for its quicker onset and natural spread, ideal for larger treatment areas like the forehead."
  },
  {
    id: 16,
    category: 'wrinkle-relaxers',
    question: "When will I see results?",
    answer: "Results typically start to appear within 3-5 days after treatment, with full effects visible by 10-14 days."
  },
  {
    id: 17,
    category: 'wrinkle-relaxers',
    question: "How long do results last?",
    answer: "The effects of wrinkle relaxers usually last 3-4 months, depending on the individual and the area treated. Regular maintenance treatments can help prolong results."
  },
  {
    id: 18,
    category: 'wrinkle-relaxers',
    question: "How many treatments will I need?",
    answer: "Most clients start with one treatment and return every 3-4 months for maintenance. Our experts will guide you on a schedule that aligns with your goals and lifestyle."
  },
  {
    id: 19,
    category: 'wrinkle-relaxers',
    question: "Will I need time to recover?",
    answer: "There's minimal downtime associated with wrinkle relaxers. Most people return to their normal activities immediately after their appointment. However, we recommend avoiding strenuous exercise or alcohol for 24 hours and avoid lying down for 4-6 hours post treatment."
  },

  // Dermal Fillers FAQs
  {
    id: 20,
    category: 'dermal-fillers',
    question: "What are dermal fillers?",
    answer: "Dermal fillers are gel-like substances injected beneath the skin to restore lost volume, smooth lines, enhance facial contours, and improve overall appearance. They are typically made from hyaluronic acid, a naturally occurring substance in the body."
  },
  {
    id: 21,
    category: 'dermal-fillers',
    question: "Are dermal fillers safe?",
    answer: "Yes, dermal fillers are FDA-approved and safe when administered by trained professionals. At Carma Aesthetics, we prioritize your safety and use only high-quality, medical-grade products."
  },
  {
    id: 22,
    category: 'dermal-fillers',
    question: "How long do dermal fillers last?",
    answer: "The longevity of dermal fillers depends on the type of filler and the treatment area. On average fillers last between 12-18 months, sometimes longer. Your provider will recommend the best option for your desired results."
  },
  {
    id: 23,
    category: 'dermal-fillers',
    question: "Is the treatment painful?",
    answer: "Dermal filler treatments are generally well-tolerated. Many fillers include a numbing agent, and a topical anesthetic may also be applied to enhance comfort during the procedure."
  },
  {
    id: 24,
    category: 'dermal-fillers',
    question: "What is the recovery time?",
    answer: "You can resume most normal activities immediately after treatment. Mild bruising and redness may occur and typically subsides within 5-7 days. Swelling typically subsides within 2 weeks."
  },
  {
    id: 25,
    category: 'dermal-fillers',
    question: "Are the results permanent?",
    answer: "Dermal fillers provide temporary results, as they are gradually metabolized by the body. Maintenance treatments are recommended to sustain your desired look."
  },
  {
    id: 26,
    category: 'dermal-fillers',
    question: "Are there any side effects?",
    answer: "Temporary side effects like swelling, redness, bruising, or tenderness are possible but typically mild. Rare complications will be discussed during your consultation to ensure your peace of mind."
  },
  {
    id: 27,
    category: 'dermal-fillers',
    question: "Can dermal fillers be combined with other treatments?",
    answer: "Yes! Dermal fillers often complement treatments like Botox or microneedling for comprehensive facial rejuvenation. Your provider will help design a treatment plan tailored to your goals."
  },

  // PRP FAQs
  {
    id: 28,
    category: 'prp',
    question: "Is PRP safe?",
    answer: "Yes, PRP is very safe because it uses your own blood, eliminating the risk of allergic reactions or synthetic substances. The procedure is minimally invasive and performed under sterile conditions by trained professionals."
  },
  {
    id: 29,
    category: 'prp',
    question: "How long does a PRP treatment take?",
    answer: "A typical PRP session takes about 45 minutes to an hour. This includes drawing your blood, processing it to extract the platelet-rich plasma, and administering the treatment."
  },
  {
    id: 30,
    category: 'prp',
    question: "What can I expect during recovery?",
    answer: "PRP has minimal downtime. You may experience slight redness, swelling, or tenderness in the treated area, which usually subsides within 5-7 days. Avoid exercise or strenuous activity for 24 hours."
  },
  {
    id: 31,
    category: 'prp',
    question: "When will I see results?",
    answer: "Results vary, but many patients notice improvements in skin texture and tone within a few weeks. Hair restoration effects may take a few months to become noticeable, as new growth takes time."
  },
  {
    id: 32,
    category: 'prp',
    question: "How does PRP work with other treatments?",
    answer: "PRP can be combined with microneedling, laser treatments, or other aesthetic procedures to boost their effectiveness. It enhances collagen production and accelerates healing, making it an excellent add-on for maximizing results."
  },
  {
    id: 33,
    category: 'prp',
    question: "Are there any side effects?",
    answer: "Because PRP is derived from your own blood, side effects are rare. You may experience minor redness, swelling, or bruising at the treatment site, but these typically resolve within a few days."
  }
];