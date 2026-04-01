import React, { useMemo, useState } from "react";

export default function App() {
  const mainSectionId = "lesson-content";

  const modules = [
    {
      id: 1,
      title: "What is DesignOps?",
      subtitle: "The team behind smoother UX work",
      info: [
        "UX Design Operations, often called DesignOps, helps design teams work better together.",
        "Instead of designing the product itself, DesignOps improves the systems around design work: workflows, tools, communication, documentation, onboarding, and team coordination.",
        "A strong DesignOps team helps designers spend less time fighting process problems and more time solving user problems."
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
      feedback: "Exactly. DesignOps supports the design team by improving how design work happens."
    },
    {
      id: 2,
      title: "Why DesignOps Matters",
      subtitle: "Better process, better outcomes",
      info: [
        "As design teams grow, problems can appear quickly: duplicated work, unclear feedback, messy handoff, inconsistent files, and weak collaboration.",
        "DesignOps helps create consistency. This can improve design quality, speed, team morale, and communication across departments.",
        "When the process is healthier, designers can focus more on research, problem-solving, and creating meaningful user experiences."
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
      feedback: "Nice. Clear workflows, faster onboarding, and consistency are all common DesignOps benefits."
    },
    {
      id: 3,
      title: "Key Responsibilities",
      subtitle: "What a DesignOps team often handles",
      info: [
        "DesignOps can support a UX team in many ways, including managing design systems, improving feedback processes, organizing documentation, planning team rituals, and helping with tool adoption.",
        "They may also support hiring, onboarding, project planning, and cross-functional collaboration with developers, product managers, and stakeholders.",
        "Their work often sits at the intersection of people, process, and tools."
      ],
      type: "match",
      prompt: "Pick the category each responsibility fits into.",
      items: [
        { text: "Onboarding new designers", category: "People" },
        { text: "Improving critique workflow", category: "Process" },
        { text: "Managing design tools", category: "Tools" }
      ],
      categories: ["People", "Process", "Tools"],
      feedback: "That’s the big DesignOps lens: people, process, and tools working together."
    },
    {
      id: 4,
      title: "DesignOps and Collaboration",
      subtitle: "Helping teams work across roles",
      info: [
        "UX work rarely happens in isolation. Designers often work with researchers, product managers, developers, content teams, and business stakeholders.",
        "DesignOps can reduce confusion by creating shared systems for communication, reviews, handoff, and accountability.",
        "This makes collaboration smoother and helps teams move with more confidence."
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
      feedback: "Correct. DesignOps often solves recurring team issues by improving systems and shared practices."
    },
    {
      id: 5,
      title: "Design Systems and Consistency",
      subtitle: "Keeping experiences unified",
      info: [
        "A design system is a shared collection of reusable components, patterns, and guidelines.",
        "DesignOps often supports the structure, governance, and rollout of design systems so teams can create more consistent products.",
        "This helps reduce repetitive work and keeps interfaces more aligned across pages, features, and platforms."
      ],
      type: "reflect",
      prompt: "Type one reason design consistency matters in UX.",
      placeholder: "Example: It helps users feel more confident because screens behave in familiar ways.",
      feedback: "Good thinking. In UX, consistency helps users learn faster and reduces friction."
    },
    {
      id: 6,
      title: "Your DesignOps Takeaway",
      subtitle: "Connect the idea to your future work",
      info: [
        "Even as a first-year UX student, understanding DesignOps can help you see that good design is not only about creativity. It also depends on structure, communication, and sustainable teamwork.",
        "Learning how teams stay organized is valuable because strong UX outcomes usually come from strong collaboration systems.",
        "As teams scale, DesignOps becomes more important, not less."
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
      feedback: "Exactly. Great UX is supported by strong systems as well as strong ideas."
    },
    {
      id: 7,
      title: "Final Scenario Challenge",
      subtitle: "Apply what you learned to a realistic team problem",
      info: [
        "A growing UX team at a retail company is struggling with inconsistent Figma files, unclear developer handoff, and long onboarding time for new designers.",
        "Product managers say projects are slowing down, developers keep asking for missing details, and newer designers feel unsure about where to find the latest components and documentation.",
        "A DesignOps team has been asked to improve the situation. Think about which actions would best solve the root problems instead of only treating the symptoms."
      ],
      type: "capstone",
      prompt: "Select the best DesignOps actions for this scenario.",
      questions: [
        {
          question: "What should the team prioritize first?",
          options: [
            "Create a clearer shared system for files, components, and documentation",
            "Tell each designer to organize files however they prefer",
            "Stop doing design reviews to save time",
            "Wait until the team gets much larger before changing anything"
          ],
          answer: 0
        },
        {
          question: "What would best improve developer handoff?",
          options: [
            "Use a repeatable handoff checklist and shared documentation standard",
            "Ask developers to figure out missing details themselves",
            "Avoid writing annotations because they take too long",
            "Let every project team invent its own handoff process from scratch"
          ],
          answer: 0
        },
        {
          question: "What would help new designers onboard faster?",
          options: [
            "A central place for tools, guidelines, and team processes",
            "A rule that new designers should learn everything by trial and error",
            "Less documentation so there is less to read",
            "Removing the design system entirely"
          ],
          answer: 0
        }
      ],
      feedback: "Great job. The strongest DesignOps decisions usually create shared structure, reduce confusion, and make collaboration easier across the whole team."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [multiAnswers, setMultiAnswers] = useState({});
  const [matchAnswers, setMatchAnswers] = useState({});
  const [reflections, setReflections] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [capstoneAnswers, setCapstoneAnswers] = useState({});

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

    return false;
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
                Interactive learning site for first-year UX students
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "rgba(91,130,160,0.25)" }}>
                  Learn the role of a <span className="text-black">UX Design Operations</span> team
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                  Explore how DesignOps supports people, process, and tools through bite-sized modules,
                  quick activities, and interactive reflection.
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
                  Jump to final takeaway
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
                  Each section gives you a concept, then lets you test or apply it right away.
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
                          Module {index + 1}
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
                <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  Module {current + 1}
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "rgba(91,130,160,0.25)" }}>
                  {module.title}
                </h2>
                <p className="mt-2 text-lg text-slate-600">{module.subtitle}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Learn</h3>
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
                    Interactive check-in
                  </div>
                </div>

                <div className="mt-5">{renderActivity(module)}</div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => submitModule(module.id)}
                    className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                  >
                    {module.type === "capstone" ? "Submit final challenge" : "Check answer"}
                  </button>

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

                {submitted[module.id] && (
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
              </div>
            </div>
          </main>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">People</div>
            <h3 className="mt-3 text-xl font-bold text-slate-900">Supporting teams</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              DesignOps helps designers succeed through onboarding, team rituals, communication support, and role clarity.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Process</div>
            <h3 className="mt-3 text-xl font-bold text-slate-900">Improving workflows</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              It creates structure around critique, handoff, documentation, prioritization, and collaboration.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Tools</div>
            <h3 className="mt-3 text-xl font-bold text-slate-900">Scaling the work</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              It helps teams use systems, platforms, and design libraries in a more organized and sustainable way.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}