import Navigation from '@/components/Navigation';
import Link from 'next/link';
import styles from '../post.module.css';
import PanelCarousel from '@/components/PanelCarousel';

export default function MangaPage() {
  return (
    <>
      <Navigation />

      <main className={styles.postPage}>
        <Link href="/blog" className={styles.backLink}>
          &larr; Back to Blog
        </Link>

        <article className={styles.postContent}>
          <h1>Manga Panels</h1>
          <p className={styles.date}>A collection of panels I like</p>

          <section>
            <PanelCarousel
              title="Chainsaw Man"
              panels={[
                { src: "/blog/manga/chainsaw-man/ch26-makima.png", description: "I feel like this is one of the first moments the audience gets an 'off' feeling about Makima. Why is she lying to her allies?" },
                { src: "/blog/manga/chainsaw-man/ch44-reze.jpg", description: "I felt like the earnestness was palpable. Reze was sincere, despite her orders, she really did want to make Denji happy, and Denji even did consider it. He had never made choices for himself before, but... 'I'll make you happy'"},
                { src: "/blog/manga/chainsaw-man/ch74-makima.jpg", description: "I like how the intensity contrasts with Makima's emotions. She's always been eerily calm. A contract regarding all of oneself has always been intense. For example, Himeno's death. Yet Makima does it so casually. It's a facet in her broader story, how she's unable to connect with others. She's capable of obtaining the greatest thing someone can give another with a simple sentence - how could she expect to care and love as equals? It's interesting, anyway."},
                { src: "/blog/manga/chainsaw-man/ch168-yoru.jpg", description: "Denji gets a lot of characterization as a joke-material horny MC, but he's more earnest than a lot of people think. I felt really bad for him here. This is an act of assault from Yoru, but he wanted Asa to like him. It's a bid for a deeper emotional connection that gets completely rejected. And I'm pretty sure at this point he doesn't even know about the Yoru/Asa thing? So the girl he had started to trust and like did something like that...ow"},
                { src: "/blog/manga/chainsaw-man/ch193-yoru.jpeg", description: "I like panels without text. They feel emotionally charged. I feel like I can feel Denji's defeat here. He's never been good at exercising autonomy. He's been trying to though. Yoru physically props his head up to kiss him. In a defeated moment, he acts again like a dog."}
              ]}
            />

            <PanelCarousel
              title="Horimiya"
              panels={[
                { src: "/blog/manga/horimiya/ch3-toru.jpeg", description: "I like how there's no text here. You can kind of imagine the confession. And the way the panel backs away. It feels like a good way to represent the distance and awkwardness." },
                { src: "/blog/manga/horimiya/ch6-miya.jpeg", description: "I don't like the facial expressions that much in this panel. You can't take out the words and visualize the emotions, because it feels like, the emotions aren't drawn very indicatively. But the text is important. Miyamura is - indicative here. It's spoken casually, but it's actually pretty important, because it shows that he's been considering it, but he's also very careful." },
                { src: "/blog/manga/horimiya/ch37-miya.jpeg", description: "I felt like I could feel Hori's emotions for Miyamura in this panel. The other way around too. It's her gaze that's drawn, and it's shadowed, and it feels intense because of the tight cropping - he's the sole focus, but also he's gazing at her. The partial view feels intimate. It's an expression no one can see but her. The rest of the chapter is also similarly partial-viewed, which I really liked."},
                { src: "/blog/manga/horimiya/ch37-hori.jpeg", description: "I like how they don't show what happens. Too many manga do sex-appeal-sales fanservice, and it feels offputting, because it's not an externalization of emotion. I felt like the thoughts were kind of, what you feel when you love someone. Liking them, completely. Closing the distance."}
              ]}
            />
          </section>
        </article>
      </main>
    </>
  );
}
