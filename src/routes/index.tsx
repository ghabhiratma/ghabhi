import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, lazy, Suspense } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Loader } from "@/components/Loader";
import { toast } from "sonner";

const IceScene = lazy(() => import("@/components/IceScene").then((m) => ({ default: m.IceScene })));


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaddi Ghabhi Ratma — AI Engineer" },
      {
        name: "description",
        content:
          "AI Engineer specializing in Computer Vision, Agentic AI, and autonomous reasoning. Builder of EchoSight, 16fps, and WOAT.",
      },
      { property: "og:title", content: "Vaddi Ghabhi Ratma — AI Engineer" },
      { property: "og:description", content: "Building intelligent systems that see, reason, and act." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ghabhi.in" },
    ],
    links: [
      { rel: "canonical", href: "https://ghabhi.in" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    name: "EchoSight",
    year: "2024",
    tag: "Patent Pending",
    subtitle: "Assistive navigation glasses for the visually impaired.",
    description:
      "Real-time object detection at 45+ FPS on edge hardware with spatial awareness and voice-based contextual alerts.",
    stack: ["YOLOv8", "Raspberry Pi", "OpenCV", "GCP", "TTS"],
  },
  {
    name: "16fps",
    year: "2024",
    tag: "Commercial SaaS",
    subtitle: "Multi-video generation agent.",
    description:
      "Autonomous multi-agent video orchestration with long-form consistency, style transfer, and synchronized audio.",
    stack: ["Python", "LangChain", "Stable Video Diffusion", "AnimateDiff"],
  },
  {
    name: "WOAT",
    year: "2024",
    tag: "Agentic",
    subtitle: "Context-aware conversational agent.",
    description:
      "Human-like reasoning with persistent context memory, tone adaptation, and WhatsApp integration.",
    stack: ["Gemini API", "Python", "GCP"],
  },
];

const skillGroups = [
  {
    title: "AI & ML",
    items: ["Neural Networks", "CNNs", "Transformers", "Deep Learning", "PyTorch", "TensorFlow", "RL"],
  },
  {
    title: "Computer Vision",
    items: ["YOLOv8", "OpenCV", "DeepLabV3+", "Object Detection", "Segmentation"],
  },
  {
    title: "LLMs & Agents",
    items: ["LangChain", "LLaMA", "Hugging Face", "RAG", "Multi-Agent Systems", "Prompt Engineering"],
  },
  {
    title: "Engineering",
    items: ["Python", "Java", "JavaScript", "Next.js", "Docker", "GCP", "MLflow", "CI/CD"],
  },
];

const achievements = [
  { year: "2024", title: "Winner — Engineering Clinics", org: "VIT-AP University" },
  { year: "2024", title: "Patent Pending — EchoSight", org: "Assistive Navigation System" },
  { year: "2023", title: "AWS Academy Graduate", org: "Cloud Foundations" },
  { year: "2023", title: "IBM Accelerated Deep Learning", org: "with GPU" },
  { year: "2023", title: "IBM Machine Learning with Python", org: "Certification" },
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D scene */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <IceScene />
        </Suspense>
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.07_0.01_260)_90%)]" />

      {/* Overlay UI */}
      <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
        {/* Top row */}
        <div className="flex items-start justify-between text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-foreground animate-pulse" />
            <span>Available · 2026</span>
          </div>
          <div className="text-right leading-relaxed">
            <p>N 16.5°</p>
            <p>E 80.6°</p>
          </div>
        </div>

        {/* Center wordmark */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="font-display font-medium tracking-[-0.06em] leading-[0.85] text-[clamp(4rem,18vw,18rem)]"
          >
            GHABHI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="mt-2 md:-mt-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.5em] text-muted-foreground"
          >
            AI Engineer · Vision · Agents
          </motion.p>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <div className="max-w-[180px] md:max-w-xs leading-relaxed">
            Building intelligent systems that see, reason, and act.
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-foreground hidden md:block"
          >
            ↓ Scroll
          </motion.div>
          <div className="text-right leading-relaxed">
            <p>Vaddi Ghabhi Ratma</p>
            <p>Index — 001 / 006</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


/* ---------------- SECTION HELPERS ---------------- */
function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-6 mb-16 md:mb-24">
      <span className="text-xs font-mono text-muted-foreground tracking-[0.25em]">{index}</span>
      <span className="h-px flex-1 bg-border" />
      <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
    </div>
  );
}

function BigStatement({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="font-display font-medium tracking-[-0.03em] leading-[0.95] text-[clamp(2.25rem,6vw,5.5rem)] max-w-5xl">
        {children}
      </h2>
    </Reveal>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-10">
        <SectionLabel index="01" label="About" />
        <BigStatement>
          Engineer at the intersection of <span className="text-muted-foreground/50">perception, reasoning</span>, and action.
        </BigStatement>

        <div className="mt-20 md:mt-32 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-6 md:col-start-7 space-y-6 text-base md:text-lg text-foreground/70 leading-relaxed">
            <p>
              B.Tech Computer Science at <span className="text-foreground">VIT-AP University</span>, building AI-powered
              products across computer vision, autonomous systems, and agentic AI.
            </p>
            <p>
              My work focuses on the messy middle of intelligence — turning real-world signals into decisions, and
              decisions into actions, with reliability and speed.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-6 border-t border-border">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">CGPA</p>
                <p className="font-display text-3xl">8.1<span className="text-muted-foreground text-lg">/10</span></p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">Location</p>
                <p className="font-display text-3xl">India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const roles = [
    {
      role: "Career Associate",
      org: "Scale.jobs",
      period: "Jun 2024 — Present",
      notes: "Job market research, employer analysis, candidate support, application strategy.",
    },
  ];
  return (
    <section id="experience" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-10">
        <SectionLabel index="02" label="Experience" />
        <div className="divide-y divide-border">
          {roles.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.05}>
              <div className="py-10 md:py-14 grid md:grid-cols-12 gap-6 items-start group">
                <p className="md:col-span-2 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground pt-3">
                  {r.period}
                </p>
                <div className="md:col-span-6">
                  <h3 className="font-display text-3xl md:text-5xl tracking-[-0.02em]">{r.role}</h3>
                  <p className="text-muted-foreground mt-2">{r.org}</p>
                </div>
                <p className="md:col-span-4 text-foreground/70 leading-relaxed pt-3">{r.notes}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-10">
        <SectionLabel index="03" label="Selected Work" />
        <BigStatement>
          Shipped systems blending perception, reasoning, and autonomous action.
        </BigStatement>

        <div className="mt-24 md:mt-32 divide-y divide-border border-t border-border">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative py-10 md:py-16 grid md:grid-cols-12 gap-6 items-baseline cursor-pointer transition-colors"
      >
        <span className="md:col-span-1 text-xs font-mono text-muted-foreground">0{index + 1}</span>
        <div className="md:col-span-5">
          <h3
            className={`font-display text-4xl md:text-6xl tracking-[-0.03em] transition-all duration-500 ${
              hover ? "translate-x-2" : ""
            }`}
          >
            {project.name}
          </h3>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">{project.subtitle}</p>
        </div>
        <p className="md:col-span-4 text-foreground/70 leading-relaxed">{project.description}</p>
        <div className="md:col-span-2 flex flex-col items-start md:items-end gap-3">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">{project.tag}</span>
          <ArrowUpRight
            className={`size-6 transition-all duration-500 ${hover ? "translate-x-1 -translate-y-1 text-foreground" : "text-muted-foreground"}`}
          />
        </div>
        <div className="md:col-span-11 md:col-start-2 flex flex-wrap gap-x-5 gap-y-2 mt-4">
          {project.stack.map((s) => (
            <span key={s} className="text-xs font-mono text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-10">
        <SectionLabel index="04" label="Capabilities" />
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-8 tracking-[-0.02em]">{g.title}</h3>
                <ul className="space-y-3">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline justify-between border-b border-border pb-3 text-foreground/80"
                    >
                      <span>{item}</span>
                      <span className="text-xs font-mono text-muted-foreground">↗</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function Achievements() {
  return (
    <section id="achievements" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-10">
        <SectionLabel index="05" label="Recognition" />
        <div className="divide-y divide-border border-t border-border">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.04}>
              <div className="py-8 md:py-10 grid md:grid-cols-12 gap-4 items-baseline">
                <span className="md:col-span-2 text-xs font-mono text-muted-foreground tracking-[0.2em]">
                  {a.year}
                </span>
                <h3 className="md:col-span-7 font-display text-2xl md:text-4xl tracking-[-0.02em]">{a.title}</h3>
                <p className="md:col-span-3 text-muted-foreground md:text-right">{a.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent. I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="container mx-auto px-6 md:px-10">
        <SectionLabel index="06" label="Contact" />

        <Reveal>
          <h2 className="font-display font-medium tracking-[-0.04em] leading-[0.9] text-[clamp(3rem,10vw,9rem)]">
            Let's build
            <br />
            <span className="text-muted-foreground/50">something.</span>
          </h2>
        </Reveal>

        <div className="mt-24 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5 space-y-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Email</p>
              <a
                href="mailto:ghabhiratma@gmail.com"
                className="font-display text-xl md:text-2xl hover:text-muted-foreground transition-colors"
              >
                ghabhiratma@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">Socials</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 font-display text-xl hover:text-muted-foreground transition-colors group"
                  >
                    <Icon className="size-5" /> {label}
                    <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              <Download className="size-3.5" /> Download Resume
            </a>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-7">
            <form onSubmit={onSubmit} className="space-y-8">
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    {f.label}
                  </label>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-lg transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors disabled:opacity-50"
              >
                {sending ? "Sending…" : "Send Message"}
                <Send className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span>© 2026 Vaddi Ghabhi Ratma</span>
        <a href="#top" className="hover:text-foreground transition-colors">Back to top ↑</a>
        <span>ghabhi.in</span>
      </div>
    </footer>
  );
}
