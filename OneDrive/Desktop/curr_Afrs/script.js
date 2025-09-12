const questions = {
  1: {q: "भारत के 76 वें गणतंत्र दिवस (26 जनवरी 2025) पर किस देश के राष्ट्रपति मुख्य अतिथि  थे?", a: "इंडोनेशिया के राष्ट्रपति प्रबोवो सुबियांतो"},
  2: {q: "भारत के ग्रुप कैप्टन शुभांशु शुक्ला जिस अंतरिक्ष मिशन पर गये थे, उसका नाम क्या था ? ", a: " एक्सिओम-4 मिशन(Axiom-4 mission)"},
  3: {q: "BIMSTEC शिखर वार्ता किस देश में हुई?", a: "थाईलैंड में"},
  4: {q: "हाल ही में किस राज्य की चपटा मिर्च (टमाटर मिर्च) को भौगोलिक संकेतक टैग प्राप्त हुआ है?", a: "तेलंगाना"},
  5: {q: "TIME मैगज़ीन की ‘वुमन ऑफ द ईयर 2025’ सूची में शामिल एकमात्र भारतीय महिला कौन हैं?", a: "डॉ. पूर्णिमा देवी बर्मन  "},
  6: {q: "हाल ही में चर्चा में रहा Golden Dome मिसाइल डिफेंस सिस्टम किस देश का है?", a: "संयुक्त राज्य अमेरिका"},
  7: {q: "ए.आई. एक्शन समिट 2025(AI Action Summit) की मेजबानी किस शहर ने की?", a: "पेरिस (फ्रांस) "},
  8: {q: "भारत में पहला सेमीकंडक्टर प्लांट किस राज्य में स्थापित किया गया?   ", a: "गुजरात (साणंद)             "},
  9: {q: "अभी हाल में जेन जेड (Gen Z) ने नेपाल में तख्तापलट कर दिया, Gen Z क्या है? ", a: "जेनरेशन जेड (Gen Z ) में 1997 से 2012 के बीच पैदा हुए लोग शामिल हैं"},
  10: {q: "अभी हाल ही में किस देश में रोबोट ओलंपिक हुआ?  ", a: "चीन में (बीजिंग)"},
  11: {q: "निसार (NISAR) मिशन किनकी संयुक्त परियोजना है? ", a: "नासा और इसरो"},
  12: {q: " ग्लोबल लिवेबिलिटी इंडेक्स 2025 के अनुसार दुनिया का सबसे रहने योग्य शहर कौन सा है?  ", a: " कोपेनहेगन, डेनमार्क"},
  13: {q: "आदि कर्मयोगी कार्यक्रम किससे संबंधित है? ", a: "आदिवासी से"},
  14: {q: "किस देश ने जुलाई 2025 में ‘जीनियस एक्ट’ नामक पहली बड़ी राष्ट्रीय क्रिप्टोकरेंसी कानून पारित किया है?    ", a: "संयुक्त राज्य अमेरिका ने "},
  15: {q: "हाल ही में 22वां दिव्य कला मेला किस शहर में आयोजित किया गया?    ", a: "नई दिल्ली"},
  16: {q: "वैश्विक शांति सूचकांक (जीपीआई) 2025 में किस देश को एशिया का सबसे सुरक्षित देश बताया गया है?   ", a: "सिंगापुर को"}
};

let currentCircle = null;

function openQuestion(num) {
  currentCircle = num;
  document.getElementById("home-page").style.display = "none";
  document.getElementById("question-page").style.display = "block";
  document.getElementById("question-text").innerText = questions[num].q;
  document.getElementById("answer-text").innerText = questions[num].a;
  document.getElementById("answer-text").classList.remove("show");
  document.querySelector(".close-btn").style.display = "none";
}

function showAnswer() {
  document.getElementById("answer-text").classList.add("show");
  document.querySelector(".close-btn").style.display = "inline-block";
}

function closeQuestion() {
  document.getElementById("home-page").style.display = "block";
  document.getElementById("question-page").style.display = "none";
  let circles = document.querySelectorAll(".circle");
  circles[currentCircle - 1].classList.add("visited");
}