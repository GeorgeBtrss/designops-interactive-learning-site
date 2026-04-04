import React, { useMemo, useState } from "react";
 
export default function App() {
  const mainSectionId = "lesson-content";
 
  const modules = [
    {
      id: 1,
      title: "What is DesignOps?",
      subtitle: "The team behind smoother UX work",
      info: [
        "UX Design Operations (DesignOps for short) is about making the environment around design work better. Not the designs themselves, but everything that shapes how design gets done.",
        "That means things like workflows, documentation, tool decisions, onboarding, and how teams communicate. DesignOps people are often the ones asking: why does this keep breaking, and how do we fix it for good?",
        "When DesignOps is working well, designers spend less time wrestling with process problems and more time solving actual user problems."
      ],
      type: "quiz",
      prompt: "Which option best describes the main role of a UX DesignOps team?",
      options: [
        "To replace UX designers and make all design decisions",
        "To improve the processes, tools, and systems that support design work",
        "To focus only on coding prototypes for developers",
        "To collect personal data from users"
      ],
      answer: 1,
      feedback: "Exactly. DesignOps supports the design team by improving how design work happens — not by doing the design itself."
    },
    {
      id: 2,
      title: "Why DesignOps Matters",
      subtitle: "Better process, better outcomes",
      info: [
        "Design teams run into the same problems once they grow past a handful of people: duplicated work, unclear feedback loops, messy handoff to developers, and files that nobody can find.",
        "DesignOps brings some structure to that chaos. Better workflows, faster onboarding, more consistent output. These aren't just productivity wins, they actually affect the quality of what gets shipped.",
        "When the process is healthier, designers can put their energy into research and problem-solving instead of chasing down the right file version."
      ],
      type: "sort",
      prompt: "Choose the items that are DesignOps benefits.",
      options: [
        "Clearer workflows",
        "Faster onboarding",
        "Random file naming",
        "Better design consistency"
      ],
      correctSet: [0, 1, 3],
      feedback: "Right — clearer workflows, faster onboarding, and consistency are all things DesignOps actively works toward. Random file naming is more of a symptom of not having it."
    },
    {
      id: 3,
      title: "Key Responsibilities",
      subtitle: "What a DesignOps team often handles",
      info: [
        "DesignOps teams touch a lot of ground. On any given week, they might be refining a critique process, updating documentation, evaluating a new design tool, or figuring out why onboarding takes so long.",
        "They also work across functions, coordinating with a business' teams on things like handoff standards and project planning.",
        "One useful way to think about it: DesignOps work tends to fall into three buckets: the people side, the process side, the tools side. Most DesignOps work lives somewhere in that triangle."
      ],
      type: "match",
      prompt: "Pick the category each responsibility fits into.",
      items: [
        { text: "Improving critique workflow", category: "Process" },
        { text: "Managing design tools", category: "Tools" },
        { text: "Onboarding new designers", category: "People" }
      ],
      categories: ["People", "Process", "Tools"],
      feedback: "That's the core DesignOps lens: people, process, and tools. Most challenges in a design team trace back to one of these three."
    },
    {
      id: 4,
      title: "DesignOps and Collaboration",
      subtitle: "Helping teams work across roles",
      info: [
        "UX work almost never happens in a bubble. Designers collaborate with multiple people from different teams within a business, often all at once, whether it be engineers or stakeholders.",
        "Without shared systems, this gets messy fast. DesignOps can step in with things like handoff checklists, review frameworks, and clear documentation standards that everyone agrees on.",
        "The goal isn't to add bureaucracy, but to reduce the friction that slows teams down and causes things to fall through the cracks."
      ],
      type: "scenario",
      prompt: "A design team keeps missing details during developer handoff. What DesignOps solution makes the most sense?",
      options: [
        "Remove developers from the process entirely",
        "Create a clearer handoff system with shared documentation and checklists",
        "Tell designers to work faster",
        "Stop using components"
      ],
      answer: 1,
      feedback: "Right. When handoff keeps breaking down, the fix is usually a better shared system — not more pressure on individuals."
    },
    {
      id: 5,
      title: "Design Systems and Consistency",
      subtitle: "Keeping experiences unified",
      info: [
        "A design system is a shared library of components, patterns, and guidelines that a team builds and maintains together. Think of it as a living style guide that actually gets used.",
        "DesignOps often owns (or at least supports) the governance and rollout of design systems, making sure people know what exists, where to find it, and how to contribute to it.",
        "This reduces repetitive work and helps keep the product experience consistent from pages and features to the platforms they're used on — which matters a lot to users."
      ],
      type: "reflect",
      prompt: "Type one reason design consistency matters in UX.",
      placeholder: "Example: It helps users feel more confident because screens behave in familiar ways.",
      feedback: "Good thinking. Consistency is one of the foundational principles of usable design — when patterns are predictable, users don't have to relearn things."
    },
    {
      id: 6,
      title: "Your DesignOps Takeaway",
      subtitle: "Connect the idea to your future work",
      info: [
        "As a new UX student, you might not be managing a design system or running onboarding programs yet, but understanding DesignOps changes how you think about design work.",
        "Good UX isn't just about creativity. It depends on structure, communication, and sustainable ways of working together. The teams that ship great products usually have strong collaboration systems behind them.",
        "As teams grow, DesignOps doesn't become less relevant, rather it becomes more important. Starting to think about it now gives you a real edge."
      ],
      type: "checklist",
      prompt: "Choose the statements that feel true after completing this lesson.",
      options: [
        "DesignOps supports the environment around design work",
        "DesignOps can improve team efficiency and consistency",
        "UX success depends only on visual creativity",
        "Process can shape the quality of user experience"
      ],
      correctSet: [0, 1, 3],
      feedback: "Exactly. Strong UX outcomes tend to come from strong systems, not just strong ideas."
    },
    {
      id: 7,
      title: "Final Recap",
      subtitle: "Test your understanding across all modules",
      info: [
        "You've made it through all six modules. This final quiz pulls one question from each topic — a chance to see how much has actually stuck.",
        "There are 6 questions total, one for each concept you covered. Read each one carefully; a few of them are more nuanced than they first appear.",
        "Your score will appear once you submit. Good luck!"
      ],
      type: "finalquiz",
      prompt: "Answer all 6 questions, then submit to see your score.",
      questions: [
        {
          question: "What is the primary focus of a DesignOps team?",
          options: [
            "Designing the visual interface of products",
            "Improving the systems and processes that support design work",
            "Managing the company marketing campaigns",
            "Replacing UX researchers on the team"
          ],
          answer: 1
        },
        {
          question: "Which of these is a common benefit of investing in DesignOps?",
          options: [
            "Designers work in more isolation",
            "Handoff documents become optional",
            "Faster onboarding for new team members",
            "Less need for a design system"
          ],
          answer: 2
        },
        {
          question: "DesignOps responsibilities are often grouped into three areas. Which set is correct?",
          options: [
            "Branding, Typography, Color",
            "Research, Testing, Delivery",
            "People, Process, Tools",
            "Strategy, Marketing, Sales"
          ],
          answer: 2
        },
        {
          question: "A design team keeps having problems during developer handoff. What is the most sustainable DesignOps fix?",
          options: [
            "Ask developers to ask fewer questions",
            "Stop doing handoffs and let developers use Figma directly",
            "Implement a shared handoff checklist and documentation standard",
            "Switch design tools every quarter"
          ],
          answer: 2
        },
        {
          question: "What role does DesignOps typically play in a design system?",
          options: [
            "Designing all the components from scratch each sprint",
            "Supporting the structure and rollout of the design system",
            "Deciding which colors and fonts are used",
            "Preventing designers from contributing to the system"
          ],
          answer: 1
        },
        {
          question: "For a growing UX team struggling with messy files and slow onboarding, what would a DesignOps team most likely do first?",
          options: [
            "Hire more senior designers",
            "Tell each person to manage their own files differently",
            "Create a central shared system for components and documentation, as well as guidelines",
            "Reduce the number of ongoing projects"
          ],
          answer: 2
        }
      ],
      feedback: "That's a wrap. Review any questions you missed — each one maps back to a specific module if you want to revisit the concept."
    }
  ];
 
  const [current, setCurrent] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [multiAnswers, setMultiAnswers] = useState({});
  const [matchAnswers, setMatchAnswers] = useState({});
  const [reflections, setReflections] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [capstoneAnswers, setCapstoneAnswers] = useState({});
  const [finalQuizAnswers, setFinalQuizAnswers] = useState({});
 
  const module = modules[current];
 
  const progress = useMemo(() => {
    return Math.round(((current + 1) / modules.length) * 100);
  }, [current, modules.length]);
 
  function submitModule(id) {
    setSubmitted((prev) => ({ ...prev, [id]: true }));
  }
 
  function isCorrect(mod) {
    if (!submitted[mod.id]) return null;
 
    if (mod.type === "quiz" || mod.type === "scenario") {
      return quizAnswers[mod.id] === mod.answer;
    }
 
    if (mod.type === "sort" || mod.type === "checklist") {
      const selected = multiAnswers[mod.id] || [];
      const a = [...selected].sort().join(",");
      const b = [...mod.correctSet].sort().join(",");
      return a === b;
    }
 
    if (mod.type === "match") {
      return mod.items.every(
        (item, index) => matchAnswers[`${mod.id}-${index}`] === item.category
      );
    }
 
    if (mod.type === "reflect") {
      return (reflections[mod.id] || "").trim().length > 0;
    }
 
    if (mod.type === "capstone") {
      return mod.questions.every((question, index) => {
        return capstoneAnswers[`${mod.id}-${index}`] === question.answer;
      });
    }
 
    if (mod.type === "finalquiz") {
      return mod.questions.every((question, index) => {
        return finalQuizAnswers[`${mod.id}-${index}`] === question.answer;
      });
    }
 
    return false;
  }
 
  function getFinalQuizScore(mod) {
    if (!submitted[mod.id]) return null;
    return mod.questions.reduce((score, question, index) => {
      return finalQuizAnswers[`${mod.id}-${index}`] === question.answer ? score + 1 : score;
    }, 0);
  }
 
  function renderActivity(mod) {
    if (mod.type === "quiz" || mod.type === "scenario") {
      return (
        <div className="space-y-4">
          <p className="text-base md:text-lg font-medium text-slate-800">{mod.prompt}</p>
          <div className="grid gap-3">
            {mod.options.map((option, index) => {
              const selected = quizAnswers[mod.id] === index;
              return (
                <button
                  key={option}
                  onClick={() => setQuizAnswers((prev) => ({ ...prev, [mod.id]: index }))}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                    selected
                      ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                      : "border-slate-200 bg-white/90 text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
 
    if (mod.type === "sort" || mod.type === "checklist") {
      const selected = multiAnswers[mod.id] || [];
      return (
        <div className="space-y-4">
          <p className="text-base md:text-lg font-medium text-slate-800">{mod.prompt}</p>
          <div className="grid gap-3">
            {mod.options.map((option, index) => {
              const active = selected.includes(index);
              return (
                <button
                  key={option}
                  onClick={() => {
                    setMultiAnswers((prev) => {
                      const currentSet = prev[mod.id] || [];
                      const next = currentSet.includes(index)
                        ? currentSet.filter((i) => i !== index)
                        : [...currentSet, index];
                      return { ...prev, [mod.id]: next };
                    });
                  }}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                    active
                      ? "border-cyan-700 bg-cyan-50 text-cyan-950 shadow-md"
                      : "border-slate-200 bg-white/90 text-slate-700 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
 
    if (mod.type === "match") {
      return (
        <div className="space-y-5">
          <p className="text-base md:text-lg font-medium text-slate-800">{mod.prompt}</p>
          <div className="space-y-4">
            {mod.items.map((item, index) => (
              <div
                key={item.text}
                className="grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 md:grid-cols-[1.6fr_1fr]"
              >
                <div className="font-medium text-slate-800">{item.text}</div>
                <select
                  value={matchAnswers[`${mod.id}-${index}`] || ""}
                  onChange={(e) =>
                    setMatchAnswers((prev) => ({
                      ...prev,
                      [`${mod.id}-${index}`]: e.target.value,
                    }))
                  }
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-700 outline-none focus:border-slate-500"
                >
                  <option value="">Choose a category</option>
                  {mod.categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      );
    }
 
    if (mod.type === "reflect") {
      return (
        <div className="space-y-4">
          <p className="text-base md:text-lg font-medium text-slate-800">{mod.prompt}</p>
          <textarea
            rows={5}
            value={reflections[mod.id] || ""}
            onChange={(e) => setReflections((prev) => ({ ...prev, [mod.id]: e.target.value }))}
            placeholder={mod.placeholder}
            className="w-full rounded-2xl border border-slate-300 bg-white/90 px-4 py-4 text-slate-700 outline-none transition focus:border-slate-500"
          />
        </div>
      );
    }
 
    if (mod.type === "capstone") {
      return (
        <div className="space-y-6">
          <p className="text-base md:text-lg font-medium text-slate-800">{mod.prompt}</p>
          <div className="space-y-5">
            {mod.questions.map((question, qIndex) => (
              <div
                key={question.question}
                className="rounded-2xl border border-slate-200 bg-white/90 p-4"
              >
                <p className="text-sm font-semibold text-slate-800 md:text-base">
                  {question.question}
                </p>
                <div className="mt-3 grid gap-3">
                  {question.options.map((option, optionIndex) => {
                    const selected = capstoneAnswers[`${mod.id}-${qIndex}`] === optionIndex;
                    return (
                      <button
                        key={option}
                        onClick={() =>
                          setCapstoneAnswers((prev) => ({
                            ...prev,
                            [`${mod.id}-${qIndex}`]: optionIndex,
                          }))
                        }
                        className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition-all duration-200 md:text-base ${
                          selected
                            ? "border-violet-700 bg-violet-50 text-violet-950 shadow-md"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
 
    if (mod.type === "finalquiz") {
      const isSubmitted = submitted[mod.id];
      const score = isSubmitted ? getFinalQuizScore(mod) : null;
      const total = mod.questions.length;
 
      return (
        <div className="space-y-6">
          <p className="text-base md:text-lg font-medium text-slate-800">{mod.prompt}</p>
 
          {isSubmitted && score !== null && (
            <div className={`rounded-2xl border p-5 ${
              score === total
                ? "border-emerald-200 bg-emerald-50"
                : score >= Math.ceil(total * 0.7)
                ? "border-cyan-200 bg-cyan-50"
                : "border-amber-200 bg-amber-50"
            }`}>
              <div className={`text-2xl font-bold ${
                score === total ? "text-emerald-800" : score >= Math.ceil(total * 0.7) ? "text-cyan-800" : "text-amber-800"
              }`}>
                {score} / {total}
              </div>
              <p className={`mt-1 text-sm font-medium ${
                score === total ? "text-emerald-700" : score >= Math.ceil(total * 0.7) ? "text-cyan-700" : "text-amber-700"
              }`}>
                {score === total
                  ? "Perfect score — you really nailed it."
                  : score >= Math.ceil(total * 0.7)
                  ? "Solid work. A few to revisit, but you've got the core ideas."
                  : "Worth going back through the modules — the concepts will click more on a second pass."}
              </p>
            </div>
          )}
 
          <div className="space-y-5">
            {mod.questions.map((question, qIndex) => {
              const selectedAnswer = finalQuizAnswers[`${mod.id}-${qIndex}`];
              return (
                <div
                  key={question.question}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-4"
                >
                  <p className="text-sm font-semibold text-slate-800 md:text-base">
                    <span className="mr-2 text-slate-400">Q{qIndex + 1}.</span>
                    {question.question}
                  </p>
                  <div className="mt-3 grid gap-2">
                    {question.options.map((option, optionIndex) => {
                      const isSelected = selectedAnswer === optionIndex;
                      const isCorrectAnswer = optionIndex === question.answer;
                      let style = "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm";
 
                      if (isSubmitted) {
                        if (isCorrectAnswer) {
                          style = "border-emerald-400 bg-emerald-50 text-emerald-900";
                        } else if (isSelected && !isCorrectAnswer) {
                          style = "border-red-300 bg-red-50 text-red-800";
                        } else {
                          style = "border-slate-200 bg-white text-slate-400";
                        }
                      } else if (isSelected) {
                        style = "border-violet-700 bg-violet-50 text-violet-950 shadow-md";
                      }
 
                      return (
                        <button
                          key={option}
                          onClick={() => {
                            if (!isSubmitted) {
                              setFinalQuizAnswers((prev) => ({
                                ...prev,
                                [`${mod.id}-${qIndex}`]: optionIndex,
                              }));
                            }
                          }}
                          disabled={isSubmitted}
                          className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 md:text-base ${style} ${isSubmitted ? "cursor-default" : ""}`}
                        >
                          {option}
                          {isSubmitted && isCorrectAnswer && (
                            <span className="ml-2 text-xs font-semibold text-emerald-600">correct</span>
                          )}
                          {isSubmitted && isSelected && !isCorrectAnswer && (
                            <span className="ml-2 text-xs font-semibold text-red-500">your answer</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
 
    return null;
  }
 
  const correct = isCorrect(module);
 
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_25%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_40%,_#ecfeff_100%)] text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-10">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />
 
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                Interactive learning site for new UX students
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "rgba(91,130,160,0.25)" }}>
                  Learn the role of a <span className="text-black">UX Design Operations</span> team
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                  Explore how DesignOps supports people, process, and tools through bite-sized lessons 
                  followed by a quick activity, then a final quiz to test what you've learned.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setCurrent(0);
                    requestAnimationFrame(() => {
                      document
                        .getElementById(mainSectionId)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    });
                  }}
                  className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Start lesson
                </button>
                <button
                  onClick={() => setCurrent(modules.length - 1)}
                  className="rounded-2xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                >
                  Jump to overall quiz
                </button>
              </div>
            </div>
 
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-5 shadow-lg">
                <div className="text-sm font-medium text-slate-500">Main focus</div>
                <div className="mt-2 text-2xl font-bold text-slate-900">People<br></br>Process<br></br>Tools</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  DesignOps creates the conditions that help designers do their best work.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-lg">
                <div className="text-sm font-medium text-white/70">Lesson structure</div>
                <div className="mt-2 text-2xl font-bold">7 interactive modules</div>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Each section covers a concept, then lets you test or apply it right away.
                </p>
              </div>
            </div>
          </div>
        </section>
 
        <section id={mainSectionId} className="mt-8 grid gap-6 scroll-mt-24 lg:grid-cols-[290px_1fr]">
          <aside className="rounded-[2rem] border border-white/50 bg-white/70 p-5 shadow-xl backdrop-blur-xl">
            <div className="mb-5">
              <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                <span>Course progress</span>
                <span>{progress}%</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
 
            <div className="space-y-3">
              {modules.map((item, index) => {
                const done = submitted[item.id] && isCorrect(item);
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrent(index)}
                    className={`w-full rounded-2xl border p-4 text-left transition-all ${
                      current === index
                        ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                        : "border-slate-200 bg-white/80 text-slate-700 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div
                          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                            current === index ? "text-white/60" : "text-slate-400"
                          }`}
                        >
                          {item.type === "finalquiz" ? "Quiz" : `Module ${index + 1}`}
                        </div>
                        <div className="mt-1 text-sm font-semibold leading-6">{item.title}</div>
                      </div>
                      <div
                        className={`mt-1 h-3 w-3 rounded-full ${
                          done ? "bg-emerald-400" : current === index ? "bg-cyan-300" : "bg-slate-300"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
 
          <main className="rounded-[2rem] border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 md:text-left">
              <div>
                <div className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
                  module.type === "finalquiz"
                    ? "border-violet-200 bg-violet-50 text-violet-700"
                    : "border-cyan-200 bg-cyan-50 text-cyan-700"
                }`}>
                  {module.type === "finalquiz" ? "Overall Quiz" : `Module ${current + 1}`}
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "rgba(91,130,160,0.25)", marginTop: "10px" }}>
                  {module.title}
                </h2>
                <p className="mt-2 text-lg text-slate-600">{module.subtitle}</p>
              </div>
            </div>
 
            <div className={`mt-8 grid gap-6 ${current + 1 === 7 ? "grid-cols-1" : "xl:grid-cols-[1fr_0.95fr]"}`}> 
             <div className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{module.type === "finalquiz" ? "Quiz Overview" : "Learn"}</h3>
                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate-600 md:text-base">
                  {module.info.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
 
              <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">Activity</h3>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                    {module.type === "finalquiz" ? "6-question quiz" : "Interactive check-in"}
                  </div>
                </div>
 
                <div className="mt-5">{renderActivity(module)}</div>
 
                <div className="mt-6 flex flex-wrap gap-3">
                  {!submitted[module.id] && (
                    <button
                      onClick={() => submitModule(module.id)}
                      className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                    >
                      {module.type === "capstone"
                        ? "Submit final challenge"
                        : module.type === "finalquiz"
                        ? "Submit quiz"
                        : "Check answer"}
                    </button>
                  )}
 
                  <button
                    onClick={() => {
                      if (current > 0) setCurrent(current - 1);
                    }}
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  >
                    Previous
                  </button>
 
                  <button
                    onClick={() => {
                      if (current < modules.length - 1) setCurrent(current + 1);
                    }}
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                  >
                    {current === modules.length - 1 ? "Review lesson" : "Next"}
                  </button>
                </div>
 
                {submitted[module.id] && module.type !== "finalquiz" && (
                  <div
                    className={`mt-6 rounded-2xl border p-4 ${
                      correct
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-amber-200 bg-amber-50 text-amber-900"
                    }`}
                  >
                    <div className="font-semibold">{correct ? "Nice work" : "Give it another look"}</div>
                    <p className="mt-1 text-sm leading-7">{module.feedback}</p>
                  </div>
                )}
 
                {submitted[module.id] && module.type === "finalquiz" && (
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
                    <p className="text-sm leading-7">{module.feedback}</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </section>
 
        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">People</div>
            <h3 className="mt-3 text-xl font-bold text-slate-900">Supporting teams</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              DesignOps helps designers succeed through onboarding and different aspects of team dynamics.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Process</div>
            <h3 className="mt-3 text-xl font-bold text-slate-900">Improving workflows</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              DesignOps creates structure around critique, handoff, documentation, prioritization, collaboration.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Tools</div>
            <h3 className="mt-3 text-xl font-bold text-slate-900">Scaling the work</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              DesignOps helps teams use the resources they're given in a more organized and sustainable way.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
 
