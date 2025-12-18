import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from '../post.module.css';

export default function BertExplainer() {
  return (
    <>
      <Navigation />
      <main className={styles.postPage}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>
        <article className={styles.postContent}>
          <h1>How BERT Works</h1>
          <p className={styles.date}>December 17, 2025</p>

          <section>
            <p>
              BERT is a bidirectional transformer encoder. Let&apos;s break that down:
              <strong> Bidirectional</strong> means each word attends to words before AND after it—it sees the entire sentence&apos;s context at once.
              <strong> Transformer</strong> is the architecture using attention (dot product → softmax → weighted average).
              <strong> Encoder</strong> converts text into vectors (vs. a &quot;decoder&quot; which generates text).
            </p>
            <p>
              I&apos;ll explain this through an example classification task. We want to classify news titles into four topics: Business, Sports, World, and SciTech.
              Let&apos;s do it with: <em>&quot;Apple stock rises&quot;</em>
            </p>
          </section>

          <section>
            <h2>Step 1: Tokenize (text → integer IDs)</h2>
            <p>
              Computers can&apos;t process words directly, so we represent each word as a number called a token. 
              Think of your student ID—a unique number representing you. Tokens do the same for words.
            </p>
            <p>
              BERT has a fixed vocabulary file mapping ~30,000 words to integer IDs. We look up each word:
            </p>
            <pre>
{`Input:  "Apple stock rises"
Output: [101, 8347, 4518, 9012, 102]
         ↑     ↑      ↑     ↑    ↑
       [CLS] Apple  stock rises [SEP]`}
            </pre>
            <p>
              Two special tokens are added automatically:
              <strong> [CLS]</strong> (&quot;Classification&quot;)—a dummy token at the start that will accumulate sentence meaning.
              <strong> [SEP]</strong> (&quot;Separator&quot;)—marks the end of the sentence.
              These aren&apos;t part of the original text. BERT adds them to every input.
            </p>
          </section>

          <section>
            <h2>Step 2: Embed (integer IDs → vectors)</h2>
            <p>
              Goal: Turn each integer (word) into a richer representation (768 numbers instead of 1).
              Why 768 numbers? A single number can&apos;t capture meaning. With 768 numbers, similar words can have similar vectors, encoding relationships between words.
            </p>
            <p>
              BERT has a table with 30,000 rows, each row is 768 numbers:
            </p>
            <pre>
{`Row 0:    [0.02, -0.01, 0.05, 0.03, ... 768 numbers total]
Row 1:    [0.11, 0.08, -0.03, 0.14, ...]
...
Row 101:  [0.10, 0.20, 0.05, 0.15, ...]   ← [CLS]
Row 8347: [0.80, 0.20, 0.90, 0.40, ...]   ← "Apple"
Row 4518: [0.50, 0.50, 0.50, 0.60, ...]   ← "stock"
Row 9012: [0.30, 0.70, 0.60, 0.20, ...]   ← "rises"`}
            </pre>
            <p>
              Where did these numbers come from? Pre-training. BERT was trained on billions of sentences, and the numbers were adjusted until similar words had similar vectors.
            </p>
            <p>
              After Step 2, we have (using 4 numbers for simplicity; real BERT uses 768):
            </p>
            <pre>
{`[CLS]  → [0.10, 0.20, 0.05, 0.15]
Apple  → [0.80, 0.20, 0.90, 0.40]
stock  → [0.50, 0.50, 0.50, 0.60]
rises  → [0.30, 0.70, 0.60, 0.20]
[SEP]  → [0.15, 0.10, 0.25, 0.05]`}
            </pre>
            <p>
              Right now, [CLS] (and [SEP]) are the same for every sentence.
            </p>
          </section>

          <section>
            <h2>Step 3: Attention (vectors get blended together)</h2>
            <p>
              Goal: Right now, &quot;stock&quot; has the same vector whether it&apos;s in &quot;Apple stock&quot; or &quot;chicken stock.&quot; We want context to change the vector.
            </p>
            <p>
              How: Each word looks at every other word, computes similarity, and blends their vectors together.
              This is what makes BERT bidirectional: when processing &quot;stock,&quot; it looks at &quot;Apple&quot; (before) AND &quot;rises&quot; (after) simultaneously.
            </p>
            <p>
              <em>(Note: Real BERT transforms vectors through learned matrices Q, K, V before computing dot products. We&apos;re showing the simplified version using raw vectors.)</em>
            </p>

            <h3>Step 3a: Compute similarity (dot product)</h3>
            <p>
              Dot product = multiply corresponding numbers, then sum.
            </p>
            <pre>
{`[CLS] = [0.10, 0.20, 0.05, 0.15]

dot([CLS], [CLS])  = 0.10×0.10 + 0.20×0.20 + 0.05×0.05 + 0.15×0.15
                   = 0.01 + 0.04 + 0.0025 + 0.0225 = 0.075

dot([CLS], Apple)  = 0.10×0.80 + 0.20×0.20 + 0.05×0.90 + 0.15×0.40
                   = 0.08 + 0.04 + 0.045 + 0.06 = 0.225

dot([CLS], stock)  = 0.10×0.50 + 0.20×0.50 + 0.05×0.50 + 0.15×0.60
                   = 0.05 + 0.10 + 0.025 + 0.09 = 0.265

dot([CLS], rises)  = 0.10×0.30 + 0.20×0.70 + 0.05×0.60 + 0.15×0.20
                   = 0.03 + 0.14 + 0.03 + 0.03 = 0.23

dot([CLS], [SEP])  = 0.10×0.15 + 0.20×0.10 + 0.05×0.25 + 0.15×0.05
                   = 0.015 + 0.02 + 0.0125 + 0.0075 = 0.055

Similarity scores: [0.075, 0.225, 0.265, 0.23, 0.055]
                    [CLS]  Apple  stock  rises [SEP]`}
            </pre>

            <h3>Step 3b: Convert to weights (Softmax)</h3>
            <p>
              We want weights that sum to 1 (so we can do a weighted average).
            </p>
            <pre>
{`Scores: [0.075, 0.225, 0.265, 0.23, 0.055]

Step 1: exp() each number
  exp(0.075) = 1.078
  exp(0.225) = 1.252
  exp(0.265) = 1.303
  exp(0.23)  = 1.259
  exp(0.055) = 1.057
  Result: [1.078, 1.252, 1.303, 1.259, 1.057]

Step 2: sum them
  1.078 + 1.252 + 1.303 + 1.259 + 1.057 = 5.949

Step 3: divide each by sum
  1.078/5.949 = 0.18
  1.252/5.949 = 0.21
  1.303/5.949 = 0.22
  1.259/5.949 = 0.21
  1.057/5.949 = 0.18

Weights: [0.18, 0.21, 0.22, 0.21, 0.18]
          [CLS] Apple stock rises [SEP]`}
            </pre>

            <h3>Step 3c: Weighted average (blend vectors)</h3>
            <p>
              Multiply each vector by its weight, then add them all together.
            </p>
            <pre>
{`new_[CLS] = 0.18 × [0.10, 0.20, 0.05, 0.15]   ([CLS])
          + 0.21 × [0.80, 0.20, 0.90, 0.40]   (Apple)
          + 0.22 × [0.50, 0.50, 0.50, 0.60]   (stock)
          + 0.21 × [0.30, 0.70, 0.60, 0.20]   (rises)
          + 0.18 × [0.15, 0.10, 0.25, 0.05]   ([SEP])

Before attention: [CLS] = [0.10, 0.20, 0.05, 0.15]
After attention:  [CLS] = [0.386, 0.353, 0.479, 0.294]`}
            </pre>
            <p>
              Repeat 12 times (12 layers). Vectors keep refining.
              After layer 12, the [CLS] vector encodes the whole sentence.
            </p>
          </section>

          <section>
            <h2>Step 4: Classify (vector → topic)</h2>
            <p>
              Goal: Turn the [CLS] vector into one of 4 topics.
              How: Dot product with learned &quot;topic vectors.&quot;
            </p>
            <pre>
{`Final [CLS] = [0.386, 0.353, 0.479, 0.294]

Classification weights (randomly initialized before training):
  Business_weights = [0.9, 0.1, 0.8, 0.3]
  Sports_weights   = [0.1, 0.9, 0.2, 0.7]
  World_weights    = [0.4, 0.3, 0.5, 0.4]
  SciTech_weights  = [0.6, 0.2, 0.7, 0.25]

Compute dot products:
  Business = 0.386×0.90 + 0.353×0.10 + 0.479×0.80 + 0.294×0.30
           = 0.347 + 0.035 + 0.383 + 0.088 = 0.853

  Sports   = 0.386×0.10 + 0.353×0.90 + 0.479×0.20 + 0.294×0.70
           = 0.039 + 0.318 + 0.096 + 0.206 = 0.659

  World    = 0.386×0.40 + 0.353×0.30 + 0.479×0.50 + 0.294×0.40
           = 0.154 + 0.106 + 0.240 + 0.118 = 0.618

  SciTech  = 0.386×0.60 + 0.353×0.20 + 0.479×0.70 + 0.294×0.25
           = 0.232 + 0.071 + 0.335 + 0.074 = 0.712

Scores: Business=0.853, Sports=0.659, World=0.618, SciTech=0.712
Highest: Business (0.853)

PREDICTION: Business ✓`}
            </pre>
          </section>

          <section>
            <h2>Step 5: Training (adjusting weights when wrong)</h2>
            <p>
              Goal: If prediction was wrong, adjust the topic vectors so next time it&apos;s better.
            </p>
            <pre>
{`True label: Business
Prediction: Business
Correct! No update needed.`}
            </pre>
            <p>
              But what if we&apos;re wrong? Let&apos;s try another example:
            </p>
            <pre>
{`Next example: "touchdown wins game"
[CLS] vector after attention: [0.12, 0.88, 0.31, ...]

Scores:
  Business = dot([0.12, 0.88, 0.31, ...], Business_weights) = 0.72 ← highest
  Sports   = dot([0.12, 0.88, 0.31, ...], Sports_weights)   = 0.65

Prediction: Business
True label: Sports
WRONG!

Update weights:
  Sports_weights   += 0.01 × [CLS]_vector  (move toward this sentence)
  Business_weights -= 0.01 × [CLS]_vector  (move away from this sentence)

New weights:
  Sports_weights   = [0.1+0.0012, 0.9+0.0088, 0.2+0.0031, ...]
  Business_weights = [0.9-0.0012, 0.1-0.0088, 0.8-0.0031, ...]`}
            </pre>
            <p>
              Now Sports_weights is slightly more aligned with &quot;touchdown wins game&quot; type sentences.
              Repeat this millions of times, and the model learns to classify accurately.
            </p>
          </section>

        </article>
      </main>
    </>
  );
}