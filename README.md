This is the **Architectural Blueprint** (`BLUEPRINT.md`).

This file is designed to sit in your repository (or pitch deck) to explain the **"Why"** and **"How"** behind the project, rather than the technical installation steps.

---

```markdown
# 📘 Project Blueprint: Resilience AI
> **"Not a Doctor. A Wise Friend."**

---

## 1. The Core Philosophy
Most mental health chatbots fail because they try to be a *cheap therapist*. They ask, *"How does that make you feel?"* and give long, generic textbook answers.

**Resilience AI is different.**
* **It is not Clinical:** It doesn’t diagnose. It doesn’t treat.
* **It is Stoic & Practical:** It validates feelings instantly but immediately pivots to *actionable resilience*.
* **It is Human-First:** It speaks like a peer (short texts, empathy, slang), not a medical journal.

> **The Goal:** To bridge the gap between "I'm having a bad day" and "I need a therapist" with immediate, wisdom-backed perspective shifts.

---

## 2. Technical Architecture: The "Hybrid Brain"
We are not just "prompting" a generic model. We use a **Hybrid RAG (Retrieval-Augmented Generation)** system that combines *Clinical Empathy* with *Curated Knowledge*.

### A. The Brain (Fine-Tuned Logic)
* **Role:** The "Conversationalist"
* **Source:** A dataset of 30+ "Vignettes" (Simulated Patient Scenarios) analyzed by real psychologists.
* **Tech:** Llama-3 (8B) fine-tuned using LoRA adapters.
* **Function:** It learns the "clinical instinct"—how to validate a student's feelings without being dismissive or overly clinical.

### B. The Memory (Vector Database)
* **Role:** The "Librarian"
* **Source:** A curated library of public domain philosophy (Stoicism) and open-access CBT manuals.
* **Tech:** ChromaDB (Vector Store).
* **Function:** It pulls specific, proven exercises (e.g., "The View from Above," "Box Breathing") to solve the specific problem at hand.

### C. The Synthesis
1.  **User Input:** *"I feel like I'm failing everyone."*
2.  **Retrieval:** System finds a quote from *Meditations* about "internal control."
3.  **Generation:** The Brain validates the emotion ("That's a heavy weight to carry") and weaves the quote into a practical suggestion.

---

## 3. The User Experience (UX): The "WhatsApp Effect"
We are solving the "Wall of Text" problem. Real friends don't send 300-word emails; they send multiple short bursts.

### The "Natural Flow" Engine
Our custom post-processing algorithm mimics human typing patterns:

1.  **The Split:** The AI generates a full thought, but the code chops it into "bubbles" (<15 words).
2.  **The Delay:** The system calculates a "human typing speed" delay (approx. 0.08s per character) between bubbles.
3.  **The Result:**
    > *(Typing...)*
    > **AI:** "Dude, that sucks. I'm sorry."
    >
    > *(Typing...)*
    > **AI:** "But honestly? One test doesn't define you."
    >
    > *(Typing...)*
    > **AI:** "Marcus Aurelius actually talked about this. He said the obstacle *is* the way."

---

## 4. Privacy & Safety Protocols
Mental health data is the most sensitive data in the world. We adhere to a **"Local-First"** doctrine.

* **100% Local:** The AI lives on the user's device (or a secure, private server). No API calls to OpenAI or Anthropic.
* **Zero-Retention Training:** We do not use user conversations to train the model. Your secrets stay yours.
* **The "Red Line" (Safety Rails):** The system is hard-coded to detect self-harm keywords. If detected, it breaks character and immediately provides crisis hotline numbers.

---

## 5. Strategic Roadmap

### Phase 1: Data Acquisition (Current)
* **Objective:** Build the "Ground Truth" datasets.
* **Actions:**
    * Collect 50+ "Vignette Responses" from Psychologists (Google Sheets).
    * Curate and clean 5-10 high-quality books for the Vector DB.

### Phase 2: The "Black Screen" Prototype
* **Objective:** Validate the conversation flow.
* **Deliverable:** A Python terminal app that runs the RAG loop + WhatsApp Splitter locally.

### Phase 3: The Beta Product
* **Objective:** User testing with students.
* **Deliverable:** A simple web interface (Streamlit/React) where beta testers can chat. Focus on "Tone" and "latency."

### Phase 4: Mobile Optimization
* **Objective:** Reach the students where they are.
* **Deliverable:** A Progressive Web App (PWA) optimized for mobile screens.

---

## 6. Dataset Structure (The "Secret Sauce")

### The Psychologist Dataset (Fine-Tuning)
| Input (Vignette) | Chain of Thought (Reasoning) | Output (Response) |
| :--- | :--- | :--- |
| *"I failed my test..."* | *Validate > Reframe (Growth Mindset) > Action* | *"It’s normal to feel crushed..."* |

### The Book Dataset (RAG)
| Concept | Source | Excerpt |
| :--- | :--- | :--- |
| *Failure* | *Meditations* | *"The impediment to action advances action."* |
| *Anxiety* | *CBT Manual* | *"Step 1: Ground yourself. Name 5 things..."* |

---

> **Built with:** Python, Llama-3, LangChain, ChromaDB.

```
