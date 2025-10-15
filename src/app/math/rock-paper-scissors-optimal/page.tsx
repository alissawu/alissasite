import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from './problem.module.css';

export default function RPSOptimal() {
  return (
    <>
      <Navigation />
      <main className={styles.problemPage}>
        <Link href="/math" className={styles.backLink}>
          ← Back to Math Problems
        </Link>
        <article className={styles.problemContent}>
          <h1>Rock-Paper-Scissors Optimal Strategy</h1>
          <p className={styles.date}>September 26, 2025</p>
          
          <section className={styles.question}>
            <h2>Question</h2>
            <p>
              You are playing rock paper scissors with a perfectly optimal opponent.
              However, players lose the overall game the first time that they lose with rock, 
              the first time they lose with paper, or the third time they lose with scissors.
              Wins and ties do not affect this count. Losses do not have to be consecutive. 
              What is your strategy?
            </p>
          </section>

          <section className={styles.solution}>
            <h2>Solution</h2>
            
            <p>
              The issue with this question is that it&apos;s absolutely uninterpretable. Does the 
              ENTIRE game end the first time someone loses with rock/paper? Like game over tournament 
              done we walk away? Or are they assuming a &quot;Best of 3&quot; style rock paper scissors game, 
              where the &quot;overall&quot; game is the &quot;Best of 3&quot; game, and we want to maximize 
              &quot;Best of 3&quot; wins overall?
            </p>

            <h3>Less Likely Interpretation 1: Literal entire game ends at first rock/paper loss, third scissor loss</h3>
            
            <p>
              If the entire game ends the first time someone loses with rock/paper, the optimal play 
              is a symmetric Nash. We would always play scissors. Scissors are obviously optimal; I could 
              do a proof but I think this is intuitive. You have two more shots to lose. So you might expect 
              the opponent to play scissors, placing a positive probability on Rock. However, an optimal 
              opponent will naturally put some weight on Paper as a result of this reasoning, and you face 
              a non-zero chance of instant elimination.
            </p>

            <p>
              If you ever place positive probability on paper, an optimal opponent can put some weight on 
              Scissors, and you again face a non-zero chance of elimination. Scissors is the only move that 
              cannot knock you out in a single round; at worst it costs you one of three &quot;lives&quot; when the 
              opponent plays Rock. Against a perfectly optimal opponent, it&apos;s clear that Rock and Paper only 
              create an immediate-loss threat while giving the other player no reason to expose themselves.
            </p>

            <p>
              The unique safe fixed point is Scissors with probability 1, resulting in infinite ties unless 
              someone deviates; any deviation introduces a non-zero chance of losing the entire game immediately, 
              which is strictly worse in the minimax sense. So the strategy is to always throw Scissors. Which is 
              a really stupid solution, so I&apos;ll assume they meant this:
            </p>

            <h3>More Likely Interpretation 2: An &quot;Overall game&quot; is a round of three, and we want to maximize our total wins of these overall games</h3>

            <p>
              It&apos;s relevant to note that your optimal choice depends on which state you are in (first, second, 
              third game); this is a state process. Rock and Paper are &quot;one-life&quot; options: if you ever lose 
              with them you&apos;re instantly dead. Scissors is a &quot;three-life&quot; option: you only die after the third 
              time you lose with it. So your &quot;state&quot; in the game is just how many Scissors-losses you have 
              already accumulated: 0, 1, or 2. The game ends when you either hit a Rock-loss, a Paper-loss, or 
              reach 3 Scissors-losses.
            </p>

            <p>
              At each state k∈&#123;0,1,2&#125;, let your mixed strategy be (r<sub>k</sub>, p<sub>k</sub>, s<sub>k</sub>). 
              The opponent chooses a pure move to maximize your eventual chance of dying; your goal is to minimize that. 
              The win probabilities break down as follows:
            </p>

            <p>
              <strong>If the opponent plays Rock:</strong> the only relevant outcomes are you playing Paper (they 
              immediately lose) or Scissors (you take one strike and move to k+1). Their probability of eventually 
              winning is the product of terms s<sub>j</sub>/(p<sub>j</sub>+s<sub>j</sub>) (per time they play rock) 
              as you advance through states until either you throw a Paper or accumulate three strikes.
            </p>

            <p>
              <strong>If the opponent plays Paper:</strong> the first non-tie decides the game. If it&apos;s Rock you 
              instantly lose, if it&apos;s Scissors they instantly lose. So their winning probability is just 
              r<sub>k</sub>/(r<sub>k</sub>+s<sub>k</sub>)
            </p>

            <p>
              <strong>If the opponent plays Scissors:</strong> again the first non-tie decides it. If it&apos;s Paper 
              you instantly lose, if it&apos;s Rock they take one strike. They win unless the first three decisive rounds 
              are Rock, so their winning probability is 1−(r<sub>k</sub>/(r<sub>k</sub>+p<sub>k</sub>))<sup>3</sup>.
            </p>

            <p>
              To be unexploitable, we must pick (r<sub>k</sub>, p<sub>k</sub>, s<sub>k</sub>) at each state so that 
              these three quantities are equal, otherwise the opponent would have a strict best response. Solving these 
              equalities backwards from k=2 gives the following state-dependent optimal mixes:
            </p>

            <ul>
              <li><strong>State 0</strong> (no Scissors-losses yet): r<sub>0</sub>≈39.4%, p<sub>0</sub>≈8.1%, s<sub>0</sub>≈52.5%</li>
              <li><strong>State 1</strong> (one Scissors-loss): r<sub>1</sub>≈43.9%, p<sub>1</sub>≈11.2%, s<sub>1</sub>≈44.8%</li>
              <li><strong>State 2</strong> (two Scissors-losses, one life left): r<sub>2</sub>≈50.1%, p<sub>2</sub>≈19.0%, s<sub>2</sub>≈30.9%</li>
            </ul>

            <p>
              So the &quot;proof&quot; is just backward induction: define the eventual elimination probabilities for 
              each opponent action at each state, impose indifference conditions, and solve recursively. The solution 
              makes intuitive sense. Early on (state 0) you should use Scissors more because it takes three losses to 
              kill you, so you push Scissors above 50% and keep Paper very small. At state 1 you rebalance toward the 
              stationary 44/11/44 mix. And at state 2 you cut back on Scissors, as the benefits are now gone, so Rock and Paper are 
              more optimal. Note that state 2 isn&apos;t 33/33/33, because the opponent still has reason to be unbalanced.
            </p>

            <p>
              This guarantees that at every state the opponent is indifferent among Rock, Paper, and 
              Scissors, which is the exact condition for an optimal minimax strategy.
            </p>

            <p>
              The annoying thing is this still makes no sense. Why is the loss condition for Scissors the third loss, 
              when a RPS three-game is typically a best-of-three, only requiring 2 losses? Do you have one immunity 
              from scissors-losses? I haven&apos;t gotten around to getting the answer from BAC yet, but I&apos;ll get to it.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}