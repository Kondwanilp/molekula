# 🧬 MoleKula

### *Where molecules meet intelligence.*

> **See it. Understand it. Find it. Learn it.**

MoleKula is an AI-powered chemistry study platform being built to answer a deceptively simple question:

**What if you could point an AI at a molecule, reaction, or chemistry diagram and have it explain what you're looking at using the exact material you're studying?**

That's MoleKula.

---

## The Idea

Chemistry is weird.

Sometimes the hardest part isn't understanding the explanation. It's figuring out **what the heck you're looking at in the first place.**

You might have:

* A molecule drawn on a page
* A reaction mechanism you don't recognize
* A 700-page textbook
* A question that sends you down twelve Google searches
* An exam tomorrow

MoleKula is being built to connect all of those things.

The goal is to let a student:

```text
📄 Upload their course material
          ↓
🧬 Show MoleKula a chemical structure
          ↓
💬 Ask a question
          ↓
🔎 Search reliable chemistry sources
          ↓
📚 Find the relevant textbook sections
          ↓
🧠 Get an explanation grounded in both
```

Basically:

**Your textbook + the chemistry in front of you + an AI tutor.**

---

## 🔬 What MoleKula Will Eventually Do

### 📚 Course-Aware AI

Upload a:

* PDF
* DOCX
* TXT
* textbook
* lecture notes
* syllabus

MoleKula will build a searchable representation of your course material.

Instead of:

> "Here's a generic explanation of SN2 reactions."

You could ask:

> "Where does my textbook explain why this substrate undergoes SN2?"

And MoleKula should be able to point you toward the relevant **chapter, section, and page.**

---

### 🧬 See Chemistry

Upload an image containing:

* molecules
* reaction schemes
* mechanisms
* chemical structures
* diagrams

MoleKula will work toward identifying what is actually present in the image.

Eventually:

```text
Image
  ↓
Chemical structure
  ↓
SMILES / molecular representation
  ↓
Chemical identity
  ↓
Chemical knowledge
```

Because an image of a molecule shouldn't just be treated like another JPEG.

**It's chemistry.**

---

### 🌐 Beyond the Textbook

Your course material isn't the entire scientific universe.

MoleKula will also retrieve information from reliable chemistry sources such as:

* PubChem
* NIST
* PubMed
* RSC
* ACS resources
* scientific literature

The goal is to distinguish between:

> **"What does my course material say?"**

and

> **"What does the broader scientific literature say?"**

---

## 🧠 The Bigger Idea

MoleKula isn't supposed to be another chatbot that spits out an answer and says:

> *Trust me bro.*

The system is being designed around **grounded reasoning**.

```text
                  ┌───────────────┐
                  │    Student    │
                  └───────┬───────┘
                          │
                          ▼
                 ┌────────────────┐
                 │ Visual Question│
                 └───────┬────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
       ┌─────────────┐       ┌─────────────┐
       │ Course RAG  │       │ Web Retrieval│
       └──────┬──────┘       └──────┬──────┘
              │                     │
              └──────────┬──────────┘
                         ▼
                ┌─────────────────┐
                │ Chemistry AI    │
                │ Reasoning Layer │
                └────────┬────────┘
                         │
                         ▼
                 ┌───────────────┐
                 │ Grounded      │
                 │ Explanation   │
                 └───────────────┘
```

The long-term goal is for MoleKula to understand **both the chemistry and the context in which you're learning it.**

---

## 🧪 Tech Stack

MoleKula is being built with:

| Layer               | Technology           |
| ------------------- | -------------------- |
| Frontend            | Next.js + TypeScript |
| Backend             | Python + FastAPI     |
| Database            | PostgreSQL           |
| Vector Search       | pgvector             |
| Document Processing | Docling / PyMuPDF    |
| Chemistry           | RDKit                |
| AI                  | Multimodal LLMs      |
| Retrieval           | RAG + Web Search     |
| Version Control     | Git + GitHub         |

The stack will evolve as the project evolves.

No premature Kubernetes deployment.
No 47 microservices.
No distributed quantum hamster wheel.

**We build what we need, when we need it.**

---

## 🗺️ Roadmap

### Phase 1 — Make It Exist

* [ ] Project setup
* [ ] Frontend
* [ ] Backend API
* [ ] GitHub integration
* [ ] PDF upload
* [ ] Text extraction

### Phase 2 — Make It Smart

* [ ] Document chunking
* [ ] Embeddings
* [ ] Vector search
* [ ] Course-grounded answers
* [ ] Source citations

### Phase 3 — Teach It Chemistry

* [ ] Chemical structure recognition
* [ ] RDKit integration
* [ ] Molecular representations
* [ ] PubChem integration
* [ ] Reaction recognition

### Phase 4 — Make It a Tutor

* [ ] Interactive explanations
* [ ] Practice questions
* [ ] Socratic questioning
* [ ] Personalized study sessions
* [ ] Knowledge tracking

### Phase 5 — ??? 🧪

Whatever happens after we give an AI access to chemistry textbooks and molecular structures.

**We'll find out.**

---

## Why MoleKula?

Because chemistry shouldn't feel like memorizing a foreign language written entirely in subscripts.

A student should be able to look at something they don't understand and ask:

> **"What am I looking at?"**

Then:

> **"Why does it do that?"**

Then:

> **"Where did my professor teach this?"**

And finally:

> **"Okay. Give me another one."**

That's the experience we're building.

---

## ⚠️ Disclaimer

MoleKula is an educational project.

Chemical information should be verified against appropriate primary or authoritative sources, especially for laboratory, medical, pharmaceutical, environmental, or safety-critical applications.

---

### Built with 🧠 + 🧪 + way too many terminal windows.

**MoleKula**

*See it. Understand it. Find it. Learn it.*
