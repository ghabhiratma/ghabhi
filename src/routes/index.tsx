import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Cpu,
  Eye,
  Bot,
  Sparkles,
  Trophy,
  GraduationCap,
  Briefcase,
  Send,
  MapPin,
} from "lucide-react";
import { Particles } from "@/components/Particles";
import { Nav } from "@/components/Nav";
import { Reveal, SectionHeader } from "@/components/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaddi Ghabhi Ratma — AI Engineer & Computer Vision Developer" },
      {
        name: "description",
        content:
          "AI Engineer specializing in Computer Vision, Agentic AI, and autonomous reasoning. Builder of EchoSight, 16fps, and WOAT.",
      },
      { property: "og:title", content: "Vaddi Ghabhi Ratma — AI Engineer" },
      { property: "og:description", content: "Building intelligent systems that see, reason, and act autonomously." },
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
    tag: "Patent Pending",
    icon: Eye,
    subtitle: "Assistive Navigation Glasses for the Visually Impaired",
    stack: ["YOLOv8", "Roboflow", "Raspberry Pi", "OpenCV", "GCP", "TTS"],
    highlights: [
      "Real-time object detection with 50+ custom classes",
      "45+ FPS performance on edge hardware",
      "Spatial awareness and navigation guidance",
      "Voice-based contextual alerts via Bluetooth earbuds",
    ],
    accent: "from-cyan-400/30 to-blue-500/10",
  },
  {
    name: "16fps",
    tag: "SaaS · Commercial",
    icon: Sparkles,
    subtitle: "Multi-Video Generation Agent",
    stack: ["Python", "LangChain", "Stable Video Diffusion", "AnimateDiff"],
    highlights: [
      "Autonomous multi-agent video orchestration",
      "Long-form video consistency & style transfer",
      "Audio synchronization pipeline",
      "Commercially licensed SaaS deployment",
    ],
    accent: "from-fuchsia-500/25 to-violet-500/10",
  },
  {
    name: "WOAT",
    tag: "Agentic",
    icon: Bot,
    subtitle: "Context-Aware Conversational Agent",
    stack: ["Gemini API", "Python", "GCP", "Agentic Workflows"],
    highlights: [
      "Human-like reasoning with context memory",
      "Tone adaptation & relationship-aware responses",
      "WhatsApp integration",
      "Adversarial testing framework",
    ],
    accent: "from-emerald-400/25 to-teal-500/10",
  },
];

const skillGroups = [
  {
    title: "AI & Machine Learning",
    items: ["Neural Networks", "CNNs", "Transformers", "Deep Learning", "PyTorch", "TensorFlow", "Reinforcement Learning"],
  },
  {
    title: "Computer Vision",
    items: ["YOLOv8", "OpenCV", "DeepLabV3+", "Object Detection", "Semantic Segmentation", "Vision-Based Perception"],
  },
  {
    title: "LLMs & Agentic AI",
    items: ["LangChain", "LLaMA", "Hugging Face", "RAG Pipelines", "Tool-Using Agents", "Autonomous Reasoning", "Prompt Engineering", "Multi-Agent Systems"],
  },
  {
    title: "Engineering",
    items: ["Python", "Java", "JavaScript", "Next.js", "Vite.js", "Docker", "Git", "CI/CD", "GCP", "MLflow", "W&B"],
  },
];

const achievements = [
  { icon: Trophy, title: "Winner — Engineering Clinics 2024", subtitle: "VIT-AP University" },
  { icon: Sparkles, title: "Patent Pending — EchoSight", subtitle: "Assistive Navigation System" },
  { icon: GraduationCap, title: "AWS Academy Graduate", subtitle: "Cloud Foundations" },
  { icon: GraduationCap, title: "IBM Accelerated Deep Learning", subtitle: "with GPU" },
  { icon: GraduationCap, title: "IBM Machine Learning with Python", subtitle: "Certification" },
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20">
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />
      <Particles />

      <div className="container relative mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            Available for AI engineering work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02]"
          >
            Vaddi Ghabhi
            <br />
            <span className="text-gradient">Ratma</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg font-mono text-muted-foreground"
          >
            AI Engineer · Computer Vision Developer · Agentic AI Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-xl md:text-2xl text-foreground/90 max-w-2xl"
          >
            Building intelligent systems that{" "}
            <span className="text-gradient font-semibold">see, reason, and act</span> autonomously.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 text-muted-foreground max-w-xl"
          >
            Specializing in Computer Vision, Agentic AI, Autonomous Reasoning, and Real-Time
            Intelligent Applications combining perception, reasoning, and action.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition shadow-[0_0_30px_-5px_var(--primary)]"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass glow-border rounded-full px-6 py-3 font-medium hover:bg-card/80 transition"
            >
              <Mail className="size-4" /> Contact Me
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-muted-foreground hover:text-foreground transition"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-violet-500/20 to-fuchsia-500/30 blur-3xl animate-pulse-glow" />
            <div className="absolute inset-6 glass rounded-full glow-border animate-float-slow flex items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-border/50" />
              <div className="absolute inset-16 rounded-full border border-border/30" />
              <div className="absolute inset-24 rounded-full border border-border/20" />
              <Cpu className="size-20 text-primary drop-shadow-[0_0_20px_var(--primary)]" />
              {/* Orbiting dots */}
              {[0, 120, 240].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14 + i * 4, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50% 50%" }}
                >
                  <div
                    className="absolute top-2 left-1/2 -translate-x-1/2 size-3 rounded-full bg-primary shadow-[0_0_15px_var(--primary)]"
                    style={{ transform: `rotate(${deg}deg) translateY(-2px)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const expertise = [
    "Artificial Intelligence", "Machine Learning", "Computer Vision", "Agentic AI",
    "Multi-Agent Systems", "LLM Applications", "Autonomous Reasoning", "Robotics",
    "Deep Learning", "Cloud AI Deployment",
  ];
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="// 01 — About" title="Engineer at the intersection of perception, reasoning & action." />

        <div className="grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <div className="glass rounded-2xl p-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a B.Tech Computer Science student at <span className="text-foreground font-medium">VIT-AP University</span>{" "}
                with hands-on experience building AI-powered products across Computer Vision,
                Autonomous Systems, and Agentic AI.
              </p>
              <p>
                My work focuses on the messy middle of intelligence: turning real-world signals into
                decisions, and decisions into actions, with reliability and speed.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {expertise.map((e) => (
                  <span key={e} className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary/60 border border-border">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="glass rounded-2xl p-8 h-full glow-border">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="size-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">Education</h3>
              </div>
              <p className="font-display text-2xl font-semibold">B.Tech CSE-Core</p>
              <p className="text-muted-foreground mt-1">VIT-AP University</p>
              <div className="mt-6 pt-6 border-t border-border flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="text-4xl font-display font-bold text-gradient">8.1<span className="text-xl text-muted-foreground">/10</span></p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  Active<br />Undergraduate
                </div>
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
  return (
    <section id="experience" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="// 02 — Experience" title="Where I've contributed." />
        <Reveal>
          <div className="glass rounded-2xl p-8 glow-border max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-xl bg-primary/15 grid place-items-center shrink-0">
                <Briefcase className="size-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-display font-semibold">Career Associate</h3>
                  <span className="text-xs font-mono text-muted-foreground">Jun 2024 — Present</span>
                </div>
                <p className="text-primary text-sm mt-1">Scale.jobs</p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  {[
                    "Job market research",
                    "Employer analysis",
                    "Candidate support",
                    "Career guidance",
                    "Application strategy",
                    "Professional communication",
                  ].map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-primary" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  const Icon = p.icon;

  return (
    <section id="projects" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          kicker="// 03 — Featured Work"
          title="Selected projects."
          description="Shipped systems blending perception, reasoning, and autonomous action."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Project list */}
          <div className="lg:col-span-5 space-y-3">
            {projects.map((proj, i) => {
              const PIcon = proj.icon;
              const isActive = i === active;
              return (
                <Reveal key={proj.name} delay={i * 0.05}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left glass rounded-2xl p-5 transition-all group ${
                      isActive ? "glow-border bg-card/80 -translate-y-0.5" : "hover:bg-card/70"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/15 grid place-items-center">
                          <PIcon className="size-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-display font-semibold">{proj.name}</p>
                          <p className="text-xs text-muted-foreground">{proj.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full border border-border text-muted-foreground">
                        {proj.tag}
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Project detail */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative glass rounded-2xl p-8 overflow-hidden h-full glow-border"
            >
              <div className={`absolute -top-24 -right-24 size-72 rounded-full blur-3xl bg-gradient-to-br ${p.accent}`} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="size-6 text-primary" />
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/15 text-primary">{p.tag}</span>
                </div>
                <h3 className="text-3xl font-display font-bold">{p.name}</h3>
                <p className="text-muted-foreground mt-1">{p.subtitle}</p>

                <div className="mt-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary border border-border">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">Highlights</p>
                  <ul className="space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 size-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
                  <ExternalLink className="size-4" /> Case study available on request
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="// 04 — Skills" title="Toolkit." />
        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="glass rounded-2xl p-6 h-full hover:bg-card/80 transition group">
                <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary group-hover:shadow-[0_0_10px_var(--primary)] transition" />
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary/60 border border-border hover:border-primary/50 hover:text-primary transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>
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
    <section id="achievements" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="// 05 — Achievements" title="Recognition & certifications." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.05}>
                <div className="glass rounded-2xl p-6 h-full hover:-translate-y-1 hover:bg-card/80 transition">
                  <div className="size-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 grid place-items-center mb-4">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <p className="font-display font-semibold">{a.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{a.subtitle}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEADERSHIP ---------------- */
function Leadership() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="glass rounded-3xl p-10 glow-border relative overflow-hidden">
            <div className="absolute -top-32 -left-32 size-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-6 items-center">
              <div className="size-20 rounded-2xl bg-gradient-to-br from-cyan-400/40 to-fuchsia-500/30 grid place-items-center">
                <Trophy className="size-9 text-foreground" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-2">Leadership</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold">
                  Vice President — ACS International Student Chapter
                </h3>
                <p className="text-muted-foreground mt-2">
                  VIT-AP University · Leading student initiatives, technical events, AI workshops,
                  and community engagement programs.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    toast.success("Message ready — opening your email client.");
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\n— ${form.get("name")} (${form.get("email")})`);
    window.location.href = `mailto:ghabhiratma1@gmail.com?subject=${subject}&body=${body}`;
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          kicker="// 06 — Contact"
          title="Let's build something intelligent."
          description="Open to collaborations, research, and full-time AI engineering roles."
        />

        <div className="grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-5 space-y-3">
            <a href="mailto:ghabhiratma1@gmail.com" className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-card/80 transition group">
              <div className="size-11 rounded-lg bg-primary/15 grid place-items-center"><Mail className="size-5 text-primary" /></div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-mono text-sm truncate">ghabhiratma1@gmail.com</p>
              </div>
              <ArrowRight className="ml-auto size-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition" />
            </a>
            <a href="tel:+918074143163" className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-card/80 transition group">
              <div className="size-11 rounded-lg bg-primary/15 grid place-items-center"><Phone className="size-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-mono text-sm">+91 80741 43163</p>
              </div>
              <ArrowRight className="ml-auto size-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-card/80 transition group">
              <div className="size-11 rounded-lg bg-primary/15 grid place-items-center"><Linkedin className="size-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="font-mono text-sm">Connect with me</p>
              </div>
              <ArrowRight className="ml-auto size-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition" />
            </a>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="size-11 rounded-lg bg-primary/15 grid place-items-center"><MapPin className="size-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="font-mono text-sm">VIT-AP University, India</p>
              </div>
            </div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); toast("Resume download coming soon."); }}
              className="mt-3 inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-primary text-primary-foreground px-6 py-3.5 font-medium hover:opacity-90 transition shadow-[0_0_30px_-5px_var(--primary)]"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="glass rounded-2xl p-8 glow-border space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
                  <input name="name" required className="mt-1 w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition" placeholder="you@domain.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" required rows={6} className="mt-1 w-full bg-background/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none" placeholder="Tell me about your project, role, or idea..." />
              </div>
              <button
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                {sending ? "Sending..." : (<>Send Message <Send className="size-4" /></>)}
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
    <footer className="relative border-t border-border mt-10">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Vaddi Ghabhi Ratma · Built with intent.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="mailto:ghabhiratma1@gmail.com" className="hover:text-primary transition"><Mail className="size-4" /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition"><Linkedin className="size-4" /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition"><Github className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}
