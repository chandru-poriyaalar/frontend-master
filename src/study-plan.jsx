
import { useState } from "react";

const studyData = [
  // --- Phase 1: JS Core (Days 1–10) ---
  {
    day: 1,
    phase: 1,
    title: "Variables, Types & Operators",
    topics: ["var/let/const & scoping", "Primitive vs Reference types", "Type coercion & typeof", "Comparison operators (== vs ===)"],
    practice: "Build a type-checker mini app that displays the type of any input in real time.",
    resources: ["MDN: JavaScript Basics", "freeCodeCamp: JS Fundamentals"]
  },
  {
    day: 2,
    phase: 1,
    title: "Control Flow & Loops",
    topics: ["if/else, switch, ternary", "for, while, do...while", "for...in vs for...of", "break, continue, labels"],
    practice: "Create a FizzBuzz variant with custom rules the user can define.",
    resources: ["Eloquent JavaScript Ch.2", "JavaScript.info: Loops"]
  },
  {
    day: 3,
    phase: 1,
    title: "Functions Deep Dive",
    topics: ["Function declarations vs expressions", "Arrow functions & this binding", "Default, rest & spread params", "IIFE & closures intro"],
    practice: "Write a utility library with 5 reusable helper functions using closures.",
    resources: ["MDN: Functions", "JavaScript.info: Functions"]
  },
  {
    day: 4,
    phase: 1,
    title: "Closures & Scope",
    topics: ["Lexical scoping", "Closure patterns", "Module pattern", "IIFE deep dive", "Practical closure use-cases"],
    practice: "Build a counter factory with increment, decrement, and reset using closures.",
    resources: ["JavaScript.info: Closures", "MDN: Closures"]
  },
  {
    day: 5,
    phase: 1,
    title: "The this Keyword",
    topics: ["Global vs local this", "this in methods & constructors", "call, apply, bind", "Arrow fn & this inheritance"],
    practice: "Implement a mini event emitter using this context correctly.",
    resources: ["JavaScript.info: this", "MDN: this"]
  },
  {
    day: 6,
    phase: 1,
    title: "Arrays & Array Methods",
    topics: ["map, filter, reduce", "find, findIndex, some, every", "sort & its pitfalls", "flat, flatMap, Array.from"],
    practice: "Build a student grade analyzer using only array methods (no loops).",
    resources: ["MDN: Array Methods", "Array Method Cheat Sheet"]
  },
  {
    day: 7,
    phase: 1,
    title: "Objects & Destructuring",
    topics: ["Object methods & shorthand", "Computed property names", "Object & Array destructuring", "Spread & rest with objects", "Object.keys/values/entries"],
    practice: "Write a deep clone function and a merge utility for nested objects.",
    resources: ["MDN: Objects", "JavaScript.info: Destructuring"]
  },
  {
    day: 8,
    phase: 1,
    title: "Prototypes & Classes",
    topics: ["Prototype chain", "Constructor functions", "ES6 Classes & inheritance", "static, getters & setters", "instanceof & typeof checks"],
    practice: "Build a Shape hierarchy (Circle, Rectangle) with area/perimeter methods.",
    resources: ["JavaScript.info: Classes", "MDN: Prototypes"]
  },
  {
    day: 9,
    phase: 1,
    title: "Promises & Async/Await",
    topics: ["Promise basics & chaining", "Promise.all, race, allSettled", "async/await syntax", "Error handling with try/catch", "Microtask queue"],
    practice: "Create a sequential task runner that executes async operations in order.",
    resources: ["JavaScript.info: Promises", "MDN: async/await"]
  },
  {
    day: 10,
    phase: 1,
    title: "Error Handling & Modules",
    topics: ["try/catch/finally", "Custom error classes", "ES Modules: import/export", "Default vs named exports", "Dynamic imports"],
    practice: "Refactor a messy monolithic script into clean ES modules with proper error handling.",
    resources: ["MDN: Error Handling", "JavaScript.info: Modules"]
  },

  // --- Phase 2: React Fundamentals (Days 11–18) ---
  {
    day: 11,
    phase: 2,
    title: "React Setup & JSX",
    topics: ["Vite / CRA setup", "JSX syntax & rules", "Rendering & Virtual DOM", "React DevTools setup", "Fragment & key basics"],
    practice: "Set up a React project and render a dynamic greeting card with conditional content.",
    resources: ["React Docs: Getting Started", "Vite Docs"]
  },
  {
    day: 12,
    phase: 2,
    title: "Components & Props",
    topics: ["Functional components", "Props passing & defaults", "Children prop", "Component composition", "Props validation (PropTypes)"],
    practice: "Build a reusable Card component system (Header, Body, Footer) using composition.",
    resources: ["React Docs: Components", "React Docs: Props"]
  },
  {
    day: 13,
    phase: 2,
    title: "State & useState",
    topics: ["useState basics", "State updates & re-renders", "Derived state", "Lifting state up", "State batching"],
    practice: "Create a shopping cart with add, remove, and quantity controls.",
    resources: ["React Docs: useState", "React Docs: State"]
  },
  {
    day: 14,
    phase: 2,
    title: "useEffect & Lifecycle",
    topics: ["useEffect basics", "Dependency array logic", "Cleanup functions", "Fetching data on mount", "Common useEffect patterns"],
    practice: "Build a component that fetches and displays user data with loading & error states.",
    resources: ["React Docs: useEffect", "React Hooks FAQ"]
  },
  {
    day: 15,
    phase: 2,
    title: "Event Handling & Forms",
    topics: ["Synthetic events", "Controlled vs uncontrolled forms", "Form validation", "onChange & onSubmit", "Prevent default behavior"],
    practice: "Build a fully validated signup form with real-time field validation.",
    resources: ["React Docs: Events", "React Docs: Forms"]
  },
  {
    day: 16,
    phase: 2,
    title: "Lists, Keys & Conditional Rendering",
    topics: ["Mapping arrays to JSX", "Key prop importance", "Conditional rendering patterns", "Ternary vs && operator", "Fragments for lists"],
    practice: "Create a filterable & sortable todo list with categories.",
    resources: ["React Docs: Lists", "React Docs: Conditional Rendering"]
  },
  {
    day: 17,
    phase: 2,
    title: "useRef, useMemo, useCallback",
    topics: ["useRef for DOM access", "Avoiding re-renders with useMemo", "Stable references with useCallback", "React.memo", "When to optimize"],
    practice: "Build a searchable list that uses memoization to handle 1000+ items smoothly.",
    resources: ["React Docs: useRef", "React Docs: Performance"]
  },
  {
    day: 18,
    phase: 2,
    title: "React Router",
    topics: ["BrowserRouter setup", "Route & Link components", "Params & query strings", "Nested & protected routes", "useNavigate & useParams"],
    practice: "Build a multi-page app with auth-protected routes and dynamic profile pages.",
    resources: ["React Router Docs v6", "React Router Tutorial"]
  },

  // --- Phase 3: Data Fetching (Days 19–22) ---
  {
    day: 19,
    phase: 3,
    title: "Fetch API Mastery",
    topics: ["fetch() basics & syntax", "GET, POST, PUT, DELETE", "Parsing JSON responses", "Headers & request options", "Error handling patterns"],
    practice: "Build a REST client wrapper around fetch with automatic retries and error handling.",
    resources: ["MDN: Fetch API", "REST API Best Practices"]
  },
  {
    day: 20,
    phase: 3,
    title: "Axios Deep Dive",
    topics: ["Axios vs fetch differences", "Interceptors (request/response)", "Axios instances & base URLs", "Handling timeouts & cancellation", "Axios with TypeScript types"],
    practice: "Create an Axios instance with global interceptors for auth token injection and error logging.",
    resources: ["Axios Docs", "Axios Cheat Sheet"]
  },
  {
    day: 21,
    phase: 3,
    title: "Fetch + React Integration",
    topics: ["Fetching in useEffect", "Loading & error states", "Abort controller for cleanup", "Polling & refetching", "Custom useFetch hook"],
    practice: "Build a custom useFetch hook and use it to create a paginated user list.",
    resources: ["React Docs: Data Fetching", "Custom Hooks Guide"]
  },
  {
    day: 22,
    phase: 3,
    title: "Axios + React Integration",
    topics: ["Axios in React components", "Centralized API service layer", "Loading skeletons pattern", "Optimistic updates", "API error boundaries"],
    practice: "Build a full CRUD dashboard (users) with Axios, loading states, and toast notifications.",
    resources: ["Axios + React Tutorial", "API Layer Architecture"]
  },

  // --- Phase 4: State Management (Days 23–30) ---
  {
    day: 23,
    phase: 4,
    title: "Why Global State? Context API",
    topics: ["Local vs global state", "React Context basics", "useContext hook", "Context performance pitfalls", "When NOT to use Context"],
    practice: "Build a theme switcher + auth context system using Context API only.",
    resources: ["React Docs: Context", "Context vs Redux comparison"]
  },
  {
    day: 24,
    phase: 4,
    title: "Redux Core Concepts",
    topics: ["Store, State, Actions, Reducers", "Pure functions & immutability", "Dispatch & subscribe", "Redux DevTools", "Combining reducers"],
    practice: "Build a vanilla Redux store (no toolkit) for a bookmark manager.",
    resources: ["Redux Docs: Core Concepts", "Redux Essentials Tutorial"]
  },
  {
    day: 25,
    phase: 4,
    title: "Redux Toolkit (RTK)",
    topics: ["createSlice & Immer", "configureStore", "RTK Query basics", "createAsyncThunk", "RTK vs vanilla Redux"],
    practice: "Rebuild the bookmark manager using Redux Toolkit with async data fetching.",
    resources: ["RTK Docs: Getting Started", "RTK Query Tutorial"]
  },
  {
    day: 26,
    phase: 4,
    title: "Redux + React Integration",
    topics: ["useSelector & useDispatch", "Connecting components", "Selectors & memoization", "Middleware (thunk)", "Testing Redux logic"],
    practice: "Build a full e-commerce cart app with Redux for cart + user state management.",
    resources: ["React-Redux Docs", "Redux + React Tutorial"]
  },
  {
    day: 27,
    phase: 4,
    title: "Recoil - Atom-Based State",
    topics: ["Atoms & selectors", "RecoilRoot setup", "useRecoilState & useRecoilValue", "Derived & async selectors", "Recoil vs Redux trade-offs"],
    practice: "Rebuild the e-commerce cart using Recoil atoms and async selectors.",
    resources: ["Recoil Docs", "Recoil vs Redux comparison"]
  },
  {
    day: 28,
    phase: 4,
    title: "Jotai - Minimalist State",
    topics: ["Jotai philosophy & atoms", "atom() & useAtom()", "Derived atoms", "Async atoms & suspense", "Jotai vs Recoil vs Redux"],
    practice: "Rebuild the e-commerce cart a third time using Jotai for a minimal footprint.",
    resources: ["Jotai Docs", "Jotai Getting Started"]
  },
  {
    day: 29,
    phase: 4,
    title: "State Management Comparison",
    topics: ["Redux vs Recoil vs Jotai vs Context", "Bundle size analysis", "Performance benchmarks", "When to use what", "Migration strategies"],
    practice: "Write a decision guide comparing all three libraries for a given app scenario.",
    resources: ["State Management Comparison Articles", "Bundle Size Analyzer"]
  },
  {
    day: 30,
    phase: 4,
    title: "Final Project — Full-Stack Mini App",
    topics: ["Plan a complete app architecture", "Integrate React Router + Axios + Redux/Jotai", "Implement auth flow", "Handle all edge cases", "Deploy to Vercel/Netlify"],
    practice: "Build a complete Task Manager app with auth, CRUD via API, global state, routing, and deployment.",
    resources: ["Vercel Docs", "Project Architecture Guide"]
  }
];

const phaseNames = {
  1: "JS Core",
  2: "React",
  3: "Data Fetching",
  4: "State Management"
};

const phaseColors = {
  1: { bg: "#1a1a2e", accent: "#e94560", light: "#ff6b6b" },
  2: { bg: "#16213e", accent: "#0f3460", light: "#61dafb" },
  3: { bg: "#1b2838", accent: "#c0392b", light: "#f39c12" },
  4: { bg: "#1a1a2e", accent: "#6c5ce7", light: "#a29bfe" }
};

export default function StudyPlan() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [completedDays, setCompletedDays] = useState(new Set());
  const [activePhase, setActivePhase] = useState(null);

  const toggleComplete = (day, e) => {
    e.stopPropagation();
    setCompletedDays(prev => {
      const next = new Set(prev);
      next.has(day) ? next.delete(day) : next.add(day);
      return next;
    });
  };

  const progress = Math.round((completedDays.size / 30) * 100);

  const filtered = activePhase
    ? studyData.filter(d => d.phase === activePhase)
    : studyData;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#e8e8e8",
      fontFamily: "'Georgia', serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Ambient background shapes */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(233,69,96,0.08) 0%, transparent 70%)"
        }} />
        <div style={{
          position: "absolute", bottom: "-15%", right: "-5%", width: "600px", height: "600px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(108,92,231,0.07) 0%, transparent 70%)"
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "800px", height: "800px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(97,218,251,0.04) 0%, transparent 70%)"
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "860px", margin: "0 auto", padding: "40px 20px 60px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-block", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase",
            color: "#e94560", marginBottom: "12px", fontFamily: "monospace"
          }}>
            30-Day Roadmap
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "300", margin: 0,
            color: "#fff", letterSpacing: "-1px", lineHeight: 1.2
          }}>
            JavaScript &<br /><span style={{ color: "#61dafb" }}>React Mastery</span>
          </h1>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "16px", fontFamily: "monospace", letterSpacing: "1px" }}>
            JS Core → React → Fetch/Axios → Redux/Recoil/Jotai
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{
          background: "#16161f", borderRadius: "16px", padding: "20px 24px",
          marginBottom: "32px", border: "1px solid #222"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <span style={{ fontSize: "13px", color: "#888", fontFamily: "monospace" }}>
              Progress: {completedDays.size} / 30 days
            </span>
            <span style={{
              fontSize: "22px", fontWeight: "300", color: progress === 100 ? "#61dafb" : "#e94560"
            }}>
              {progress}%
            </span>
          </div>
          <div style={{ height: "6px", background: "#252525", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${progress}%`, borderRadius: "3px",
              background: "linear-gradient(90deg, #e94560, #a29bfe, #61dafb)",
              transition: "width 0.5s cubic-bezier(.4,0,.2,1)"
            }} />
          </div>
        </div>

        {/* Phase Filter */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}>
          {[null, 1, 2, 3, 4].map(p => (
            <button
              key={p ?? "all"}
              onClick={() => setActivePhase(p)}
              style={{
                background: activePhase === p ? (p ? phaseColors[p].accent : "#e94560") : "transparent",
                border: `1px solid ${activePhase === p ? "transparent" : "#333"}`,
                color: activePhase === p ? "#fff" : "#777",
                padding: "6px 14px", borderRadius: "20px", fontSize: "12px",
                cursor: "pointer", fontFamily: "monospace", letterSpacing: "0.5px",
                transition: "all 0.2s ease"
              }}
            >
              {p ? phaseNames[p] : "All Phases"}
            </button>
          ))}
        </div>

        {/* Phase Legend */}
        <div style={{ display: "flex", gap: "24px", marginBottom: "28px", flexWrap: "wrap" }}>
          {[1, 2, 3, 4].map(p => {
            const days = studyData.filter(d => d.phase === p);
            const done = days.filter(d => completedDays.has(d.day)).length;
            return (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: phaseColors[p].light }} />
                <span style={{ fontSize: "11px", color: "#666", fontFamily: "monospace" }}>
                  {phaseNames[p]} ({done}/{days.length})
                </span>
              </div>
            );
          })}
        </div>

        {/* Day Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {filtered.map((item, idx) => {
            const isOpen = selectedDay === item.day;
            const isDone = completedDays.has(item.day);
            const color = phaseColors[item.phase];
            const isPhaseStart = idx === 0 || filtered[idx - 1].phase !== item.phase;

            return (
              <div key={item.day}>
                {/* Phase Divider */}
                {isPhaseStart && (
                  <div style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    marginTop: idx === 0 ? 0 : "28px", marginBottom: "12px"
                  }}>
                    <div style={{ flex: 1, height: "1px", background: "#222" }} />
                    <span style={{
                      fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase",
                      color: color.light, fontFamily: "monospace", fontWeight: "600"
                    }}>
                      Phase {item.phase} — {phaseNames[item.phase]}
                    </span>
                    <div style={{
                      fontSize: "9px", color: color.light, fontFamily: "monospace",
                      background: `${color.light}15`, padding: "2px 8px", borderRadius: "10px", border: `1px solid ${color.light}30`
                    }}>
                      Days {studyData.filter(d => d.phase === item.phase)[0].day}–{studyData.filter(d => d.phase === item.phase).slice(-1)[0].day}
                    </div>
                    <div style={{ flex: 1, height: "1px", background: "#222" }} />
                  </div>
                )}

                {/* Card */}
                <div
                  onClick={() => setSelectedDay(isOpen ? null : item.day)}
                  style={{
                    background: isOpen ? "#1e1e2a" : isDone ? "#151518" : "#14141a",
                    border: `1px solid ${isOpen ? color.light + "40" : isDone ? "#2a2a2a" : "#1e1e1e"}`,
                    borderRadius: "12px", cursor: "pointer", overflow: "hidden",
                    transition: "all 0.25s ease", position: "relative"
                  }}
                >
                  {/* Top accent line */}
                  <div style={{
                    height: "2px", background: isDone ? "#2a2a2a" : `linear-gradient(90deg, ${color.light}, transparent)`,
                    opacity: isOpen || !isDone ? 1 : 0.4
                  }} />

                  {/* Main row */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "14px 18px"
                  }}>
                    {/* Checkbox */}
                    <div
                      onClick={(e) => toggleComplete(item.day, e)}
                      style={{
                        width: "22px", height: "22px", borderRadius: "6px", flexShrink: 0,
                        border: `2px solid ${isDone ? color.light : "#444"}`,
                        background: isDone ? color.light : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "all 0.2s ease"
                      }}
                    >
                      {isDone && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="#0a0a0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>

                    {/* Day badge */}
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "8px",
                      background: isDone ? "#1f1f1f" : `${color.light}12`,
                      border: `1px solid ${isDone ? "#333" : `${color.light}25`}`,
                      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <span style={{ fontSize: "8px", color: isDone ? "#555" : color.light, fontFamily: "monospace", lineHeight: 1 }}>DAY</span>
                      <span style={{ fontSize: "14px", fontWeight: "300", color: isDone ? "#666" : "#fff", lineHeight: 1.4 }}>{item.day}</span>
                    </div>

                    {/* Title + Topics Preview */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: "15px", fontWeight: isDone ? "300" : "400", color: isDone ? "#555" : "#eee",
                        textDecoration: isDone ? "line-through" : "none", whiteSpace: "nowrap",
                        overflow: "hidden", textOverflow: "ellipsis", transition: "color 0.2s"
                      }}>
                        {item.title}
                      </div>
                      {!isOpen && (
                        <div style={{ fontSize: "11px", color: "#444", marginTop: "3px", fontFamily: "monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {item.topics.join(" · ")}
                        </div>
                      )}
                    </div>

                    {/* Expand icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", flexShrink: 0
                    }}>
                      <path d="M4 6L8 10L12 6" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Expanded Detail */}
                  {isOpen && (
                    <div style={{ padding: "0 18px 20px 18px", borderTop: "1px solid #222", paddingTop: "18px" }}>
                      {/* Topics */}
                      <div style={{ marginBottom: "16px" }}>
                        <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: color.light, fontFamily: "monospace", marginBottom: "10px" }}>
                          Topics
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {item.topics.map((t, i) => (
                            <span key={i} style={{
                              fontSize: "12px", color: "#bbb", background: "#1a1a22", border: "1px solid #2a2a2a",
                              padding: "5px 10px", borderRadius: "6px", fontFamily: "monospace"
                            }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Practice */}
                      <div style={{ marginBottom: "16px" }}>
                        <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#f39c12", fontFamily: "monospace", marginBottom: "8px" }}>
                          🎯 Practice Project
                        </div>
                        <p style={{ fontSize: "13px", color: "#aaa", margin: 0, lineHeight: 1.5, fontFamily: "monospace" }}>
                          {item.practice}
                        </p>
                      </div>

                      {/* Resources */}
                      <div>
                        <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#61dafb", fontFamily: "monospace", marginBottom: "8px" }}>
                          📚 Resources
                        </div>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                          {item.resources.map((r, i) => (
                            <span key={i} style={{
                              fontSize: "11px", color: "#61dafb", background: "rgba(97,218,251,0.08)",
                              border: "1px solid rgba(97,218,251,0.2)", padding: "4px 10px",
                              borderRadius: "4px", fontFamily: "monospace"
                            }}>
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "56px", paddingTop: "32px", borderTop: "1px solid #1e1e1e" }}>
          <p style={{ fontSize: "11px", color: "#444", fontFamily: "monospace", margin: 0, lineHeight: 1.8 }}>
            Tip: Click each day to expand topics & project details.<br />
            Check off days as you complete them to track progress.
          </p>
        </div>
      </div>
    </div>
  );
}
