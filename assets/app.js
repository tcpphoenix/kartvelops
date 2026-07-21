/* ============================================================
   KartvelOps — zero-dependency page script
   i18n (en/ka) · scroll reveals · header state · contact form
   ============================================================ */
(function () {
  "use strict";

  // Mark JS as available (reveal styles only apply with this class,
  // so content is never hidden if scripts fail to load)
  document.documentElement.classList.add("js");

  /* ---------- i18n ---------- */

  var I18N = {
    en: {
      "meta.title": "KartvelOps — Cloud, DevOps & Banking Systems · Tbilisi",
      "meta.desc": "KartvelOps is a Tbilisi-based IT consultancy. We implement, integrate and operate enterprise platforms — cloud infrastructure, DevOps and banking systems — with engineering discipline.",
      "skip": "Skip to content",
      "nav.services": "Services",
      "nav.process": "How we work",
      "nav.why": "Why us",
      "nav.contact": "Contact",
      "nav.cta": "Book a call",
      "hero.eyebrow": "Tbilisi, Georgia — IT consultancy",
      "hero.title": "Cloud infrastructure and banking systems, run with engineering discipline.",
      "hero.lead": "KartvelOps implements, integrates and operates enterprise platforms — from CI/CD pipelines and Kubernetes to banking-sector rollouts. Senior engineers, project-based delivery, nothing you don't need.",
      "hero.cta1": "Discuss your project",
      "hero.cta2": "See services",
      "status.available": "available for new projects",
      "trust.1": "Senior engineers only",
      "trust.2": "Financial-sector delivery",
      "trust.3": "Project-based pricing",
      "trust.4": "Tbilisi, on-site + remote",
      "services.eyebrow": "Services",
      "services.title": "What we take responsibility for",
      "svc1.title": "Cloud & DevOps engineering",
      "svc1.body": "CI/CD pipelines, Kubernetes, infrastructure as code, observability. We design the platform, automate delivery, and leave your team faster than we found it.",
      "svc2.title": "Banking systems implementation",
      "svc2.body": "Rollout and configuration of banking software platforms — environment setup, data migration, testing and go-live, delivered to financial-sector standards.",
      "svc3.title": "Systems integration",
      "svc3.body": "Connecting core platforms to the systems around them — APIs, middleware, reporting flows — with clean contracts and documented interfaces.",
      "svc4.title": "Managed operations",
      "svc4.body": "After go-live we stay accountable: monitoring, incident response, upgrades and SLAs — so the platform keeps earning trust.",
      "process.eyebrow": "How we work",
      "process.title": "Three phases, fixed responsibilities",
      "p1.title": "Assess",
      "p1.body": "We audit your current setup, define scope and success criteria, and give you a fixed plan with honest estimates.",
      "p2.title": "Implement",
      "p2.body": "Project-based delivery with weekly demos. You always know what changed, what's next, and what it costs.",
      "p3.title": "Operate",
      "p3.body": "We hand over cleanly — documentation, runbooks, training — or stay on under a managed-operations agreement.",
      "why.eyebrow": "Why KartvelOps",
      "why.title": "Small by design. Senior by default.",
      "why.body": "You work directly with the engineers who deliver — no account layers, no hand-offs. That is the point of a boutique consultancy: decisions are fast and accountability is personal.",
      "why.1": "Senior engineers only — no juniors learning on your budget.",
      "why.2": "Financial-sector experience — we understand audit, compliance and uptime pressure.",
      "why.3": "Project-based engagement — clear scope, clear price, no seat-filling.",
      "why.4": "Based in Tbilisi — on-site when it matters, remote when it's faster.",
      "contact.eyebrow": "Contact",
      "contact.title": "Tell us about your project",
      "contact.body": "Write a few lines about your systems and goals — we reply within one business day.",
      "contact.email": "Email",
      "contact.location": "Location",
      "contact.city": "Tbilisi, Georgia",
      "contact.response": "Response",
      "contact.responseTime": "Within one business day",
      "form.name": "Name",
      "form.email": "Work email",
      "form.message": "Message",
      "form.send": "Send message",
      "form.note": "The button opens your email client with the message prepared — or write to us directly.",
      "footer.line": "© 2026 KartvelOps · Tbilisi, Georgia"
    },
    ka: {
      "meta.title": "KartvelOps — ღრუბელი, DevOps და საბანკო სისტემები · თბილისი",
      "meta.desc": "KartvelOps — IT საკონსულტაციო კომპანია თბილისში. ვნერგავთ, ვაინტეგრირებთ და ვემსახურებით საწარმოო პლატფორმებს — ღრუბლოვან ინფრასტრუქტურას, DevOps-სა და საბანკო სისტემებს — საინჟინრო დისციპლინით.",
      "skip": "გადადით შინაარსზე",
      "nav.services": "სერვისები",
      "nav.process": "როგორ ვმუშაობთ",
      "nav.why": "რატომ ჩვენ",
      "nav.contact": "კონტაქტი",
      "nav.cta": "დაჯავშნეთ ზარი",
      "hero.eyebrow": "თბილისი, საქართველო — IT კონსალტინგი",
      "hero.title": "ღრუბლოვანი ინფრასტრუქტურა და საბანკო სისტემები — საინჟინრო დისციპლინით.",
      "hero.lead": "KartvelOps ნერგავს, აინტეგრირებს და ემსახურება საწარმოო პლატფორმებს — CI/CD და Kubernetes-იდან საბანკო სექტორის სისტემებამდე. მხოლოდ გამოცდილი ინჟინრები, პროექტული მიწოდება, არაფერი ზედმეტი.",
      "hero.cta1": "მოგვიყევით პროექტზე",
      "hero.cta2": "სერვისების ნახვა",
      "status.available": "ვიღებთ ახალ პროექტებს",
      "trust.1": "მხოლოდ სენიორი ინჟინრები",
      "trust.2": "გამოცდილება ფინანსურ სექტორში",
      "trust.3": "პროექტული ფასწარმოქმნა",
      "trust.4": "თბილისი — ადგილზე + დისტანციურად",
      "services.eyebrow": "სერვისები",
      "services.title": "რაზეც პასუხისმგებლობას ვიღებთ",
      "svc1.title": "ღრუბლოვანი და DevOps ინჟინერია",
      "svc1.body": "CI/CD მილსადენები, Kubernetes, ინფრასტრუქტურა როგორც კოდი, მონიტორინგი. ვაპროექტებთ პლატფორმას, ვაავტომატებთ მიწოდებას და თქვენს გუნდს უფრო ძლიერს ვტოვებთ, ვიდრე დავხვდით.",
      "svc2.title": "საბანკო სისტემების დანერგვა",
      "svc2.body": "საბანკო პროგრამული პლატფორმების გაშვება და კონფიგურაცია — გარემოს მომზადება, მონაცემთა მიგრაცია, ტესტირება და ექსპლუატაციაში გაშვება ფინანსური სექტორის სტანდარტებით.",
      "svc3.title": "სისტემური ინტეგრაცია",
      "svc3.body": "ძირითადი პლატფორმების დაკავშირება გარემომცველ სისტემებთან — API-ები, შუალედური პროგრამები, საანგარიშო ნაკადები — მკაფიო კონტრაქტებითა და დოკუმენტირებული ინტერფეისებით.",
      "svc4.title": "მართული ოპერაციები",
      "svc4.body": "გაშვების შემდეგ პასუხისმგებლობა ჩვენზე რჩება: მონიტორინგი, ინციდენტებზე რეაგირება, განახლებები და SLA — რომ პლატფორმამ ნდობა შეინარჩუნოს.",
      "process.eyebrow": "როგორ ვმუშაობთ",
      "process.title": "სამი ეტაპი, მკაფიო პასუხისმგებლობა",
      "p1.title": "შეფასება",
      "p1.body": "ვამოწმებთ არსებულ ინფრასტრუქტურას, განვსაზღვრავთ ფარგლებსა და წარმატების კრიტერიუმებს და გაძლევთ ფიქსირებულ გეგმას გულწრფელი შეფასებებით.",
      "p2.title": "დანერგვა",
      "p2.body": "პროექტული მიწოდება ყოველკვირეული დემონსტრაციებით. ყოველთვის იცით, რა შეიცვალა, რა იქნება შემდეგ და რა ღირს.",
      "p3.title": "ოპერირება",
      "p3.body": "ვაბარებთ სუფთად — დოკუმენტაცია, ინსტრუქციები, ტრენინგი — ან ვრჩებით მართული ოპერაციების შეთანხმებით.",
      "why.eyebrow": "რატომ KartvelOps",
      "why.title": "მცირე — განზრახ. სენიორი — ყოველთვის.",
      "why.body": "თქვენ პირდაპირ მუშაობთ იმ ინჟინრებთან, ვინც პროექტს ასრულებს — შუამავლებისა და გადაბარებების გარეშე. ეს არის ბუტიკ-კონსალტინგის უპირატესობა: გადაწყვეტილებები სწრაფია, პასუხისმგებლობა — პირადი.",
      "why.1": "მხოლოდ სენიორი ინჟინრები — არავინ სწავლობს თქვენი ბიუჯეტის ხარჯზე.",
      "why.2": "ფინანსური სექტორის გამოცდილება — გვესმის აუდიტის, შესაბამისობისა და უწყვეტობის მოთხოვნები.",
      "why.3": "პროექტული თანამშრომლობა — მკაფიო ფარგლები, მკაფიო ფასი.",
      "why.4": "ვართ თბილისში — ადგილზე, როცა ეს მნიშვნელოვანია; დისტანციურად, როცა ეს უფრო სწრაფია.",
      "contact.eyebrow": "კონტაქტი",
      "contact.title": "მოგვიყევით თქვენს პროექტზე",
      "contact.body": "მოგვწერეთ რამდენიმე წინადადება თქვენი სისტემებისა და მიზნების შესახებ — გიპასუხებთ ერთ სამუშაო დღეში.",
      "contact.email": "ელფოსტა",
      "contact.location": "მდებარეობა",
      "contact.city": "თბილისი, საქართველო",
      "contact.response": "პასუხი",
      "contact.responseTime": "ერთ სამუშაო დღეში",
      "form.name": "სახელი",
      "form.email": "სამუშაო ელფოსტა",
      "form.message": "შეტყობინება",
      "form.send": "გაგზავნა",
      "form.note": "ღილაკი გახსნის თქვენს საფოსტო პროგრამას მომზადებული შეტყობინებით — ან მოგვწერეთ პირდაპირ.",
      "footer.line": "© 2026 KartvelOps · თბილისი, საქართველო"
    }
  };

  var LANG_KEY = "kartvelops-lang";

  function setLang(lang) {
    if (!I18N[lang]) lang = "en";
    var dict = I18N[lang];

    document.documentElement.setAttribute("lang", lang);
    document.title = dict["meta.title"];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict["meta.desc"]) metaDesc.setAttribute("content", dict["meta.desc"]);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (dict[key]) nodes[i].textContent = dict[key];
    }

    var opts = document.querySelectorAll(".lang-opt");
    for (var j = 0; j < opts.length; j++) {
      opts[j].classList.toggle("active", opts[j].getAttribute("data-lang-opt") === lang);
    }

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* private mode */ }
  }

  var saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* private mode */ }
  var initial = saved || (navigator.language && navigator.language.indexOf("ka") === 0 ? "ka" : "en");
  setLang(initial);

  var toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("lang");
      setLang(current === "en" ? "ka" : "en");
    });
  }

  /* ---------- scroll reveals ---------- */

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in window)) {
    for (var r = 0; r < revealEls.length; r++) revealEls[r].classList.add("in");
  } else {
    var io = new IntersectionObserver(function (entries) {
      for (var k = 0; k < entries.length; k++) {
        if (entries[k].isIntersecting) {
          entries[k].target.classList.add("in");
          io.unobserve(entries[k].target);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    for (var m = 0; m < revealEls.length; m++) io.observe(revealEls[m]);
  }

  /* ---------- header state ---------- */

  var header = document.querySelector(".site-header");
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
      ticking = false;
    });
  }, { passive: true });

  /* ---------- contact form (mailto — no backend required) ---------- */

  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var email = document.getElementById("f-email").value.trim();
      var msg = document.getElementById("f-msg").value.trim();
      if (!name || !email || !msg) {
        form.reportValidity();
        return;
      }
      var subject = "Project inquiry — " + name;
      var body = msg + "\n\n— " + name + " <" + email + ">";
      window.location.href = "mailto:hello@kartvelops.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
