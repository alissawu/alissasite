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
          <p className={styles.date}>A collection of panels I like. May contain spoilers. I'll set up a spoiler-block system later.</p>

          <section>
            <PanelCarousel
              title="Chainsaw Man"
              panels={[
                { src: "/blog/manga/chainsaw-man/ch1-denji.png", description: "From the start of CSM, Denji has gotten a lot of characterization by netizens for being comedically blatantly horny. This is reflective of later messaging / character arcs as well, but I found it interesting that as he’s telling Pochita his dreams, the last one he voices out loud before going to sleep, is that he wants to hug a girl - presumably one that loves him, but it's not stated, which is relevant because he doesn't really know what he wants. This is also implied when he talks about asking a girl to come over, going out on a date - Makima hugs him, she goes on a date with him, she brings him to her place – actually, she fulfills all these wishes, and it's through this empty fulfillment of his spoken wishes that he realizes it’s the underlying emotion that makes these things meaningful. I haven't decided how spoilery I'm making these captions so I'll leave it like this…"},
                { src: "/blog/manga/chainsaw-man/ch25-himeno.jpeg", description: "This is such an important scene for building the world of CSM, contracts, and human relationships. We know contracts can be made with anything you have - skin, hair, lifespan, etc. But this is the first time such an intense contract is made. The resolve to give absolutely everything you have to save the one you love from death... I also thought it was cool because it contrasts with Makima. Himeno sacrifices her life, her everything to hold one attack the Gun agents had. Makima basically cripples the team all the way from Kyoto."},
                { src: "/blog/manga/chainsaw-man/ch26-makima.png", description: "The audience kind of gets an offputting feeling from Makima from the start, but this is a moment where it goes from 'her personality is weird' to 'why is she lying to her allies?'"},
                { src: "/blog/manga/chainsaw-man/ch59-quanxi.png", description: "I like her facial expression..."},
                { src: "/blog/manga/chainsaw-man/ch44-reze.jpg", description: "I felt like the earnestness was palpable. Reze was sincere, she really was going to renege, and Denji even did consider it. He had never made choices for himself before, but...it's so tenuous, it's a raw moment of honesty and vulnerability. 'I'll make you happy'"},
                { src: "/blog/manga/chainsaw-man/ch74-makima.jpg", description: "I like how the intensity contrasts with Makima's emotions. She's always been eerily calm. A contract regarding all of oneself has always been intense. For example, Himeno's death. Yet Makima does it so casually. It's a facet in her broader story, how she's unable to connect with others. She's capable of obtaining the greatest thing someone can give another with a simple sentence. By the way, she did this before, in Hell, but that scene wasn't as relevant. We don't know that guy, and he's an enemy. This is impactful, because Aki is in the main trio... and just like that, everything he is, is no longer his own."},
                { src: "/blog/manga/chainsaw-man/ch168-yoru.jpg", description: "Denji gets a lot of characterization as a joke-material horny MC, but he's more earnest than a lot of people think. I felt really bad for him here. This is an act of assault from Yoru, but he wanted Asa to like him. It's a bid for a deeper emotional connection that gets completely rejected. And I'm pretty sure at this point he doesn't even know about the Yoru/Asa thing? So the girl he had started to trust and like did something like that...ow"},
                { src: "/blog/manga/chainsaw-man/ch193-yoru.jpeg", description: "I like panels without text. They feel emotionally charged. I feel like I can feel Denji's defeat here. He's never been good at exercising autonomy. He's been trying to though. Yoru physically props his head up to kiss him. In a defeated moment, he acts again like a dog."}
              ]}
            />

            <PanelCarousel
              title="Horimiya"
              panels={[
                { src: "/blog/manga/horimiya/ch3-toru.jpeg", description: "I like how there's no text here. You can kind of imagine the confession. And the way the panel backs away. It feels like a good way to represent the distance and awkwardness." },
                { src: "/blog/manga/horimiya/ch6-miya.jpeg", description: "I don't like the facial expressions that much in this panel. You can't take out the words and visualize the emotions, because it feels like, the emotions aren't drawn very indicatively. But the text is kind of heavy. It's spoken casually, but it's actually pretty important, because he's lightly conveying that he sees her in that way, but he's also very careful. There's just enough ambiguity to leave an opening without creating pressure." },
                { src: "/blog/manga/horimiya/ch21-shindou.jpeg", description: "This felt like a conversation more people should read. Miyamura doesn't have this insight, because he's been a loner, but there are so many intentions you can have with someone - borderline ownership? being inseperable? showing them off? casual/noncasual intimacy? emotional closeness? - infinite, but the goal is to convey them. Most intentions aren't inherently wrong, but you should know what you want; then you have your goal. It's a very straightforward message. Side note that deceptively portraying intent is wrong."},
                { src: "/blog/manga/horimiya/ch37-miya.jpeg", description: "I felt like I could feel Hori's emotions for Miyamura in this panel. The other way around too. It's her gaze that's drawn, and it's shadowed, and it feels intense because of the tight cropping - he's the sole focus, but also he's gazing at her. The partial view feels intimate. It's an expression no one can see but her. The rest of the chapter is also similarly partial-viewed, which I really liked."},
                { src: "/blog/manga/horimiya/ch37-hori.jpeg", description: "I like the intentional visual ambiguity/redaction. Too many manga do sex-appeal fanservice for sales, and it feels offputting, because it's not an externalization of emotion. I felt like the thoughts were kind of, what you feel when you love someone. Seeing and wanting them for everything they are. Closing the distance."}
              ]}
            />
          </section>
        </article>
      </main>
    </>
  );
}
