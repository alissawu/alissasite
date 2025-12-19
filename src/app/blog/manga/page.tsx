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
              slug="chainsaw-man"
              panels={[
                {
                  src: "ch1-denji.png",
                  chapter: 1,
                  description: `From the start of CSM, Denji has gotten a lot of characterization by netizens for being
                    comedically blatantly horny. This is reflective of later messaging / character arcs as well, but I
                    found it interesting that as he's telling Pochita his dreams, the last one he voices out loud before
                    going to sleep, is that he wants to hug a girl - presumably one that loves him, but it's not stated,
                    which is relevant because he doesn't really know that. This is also implied when he talks about asking
                    a girl to come over, going out on a date - Makima hugs him, she goes on a date with him, she brings
                    him to her place - actually, she fulfills all these stated wishes, and it's through this empty
                    fulfillment of his spoken wishes that he realizes it's the underlying emotion that makes these things
                    meaningful. I haven't decided how spoilery I'm making these captions so I'll leave it like this…`
                },
                {
                  src: "ch25-himeno.jpeg",
                  chapter: 25,
                  description: `This is such an important scene for building the world of CSM, contracts, and human
                    relationships. We know contracts can be made with anything you have - skin, hair, lifespan, etc. But
                    this is the first time such an intense contract is made. The resolve to give absolutely everything
                    you have to save the one you love, sacrificing the most precious thing you have... I also thought it
                    was cool because it contrasts with Makima. Himeno sacrifices her life, her everything to hold one
                    attack the Gun agents had. Makima basically cripples the team all the way from Kyoto.`
                },
                {
                  src: "ch26-makima.png",
                  chapter: 26,
                  description: `The audience kind of gets an offputting feeling from Makima from the start, but this is a
                    moment where it goes from 'her personality is weird' to 'why is she lying to her allies?'`
                },
                {
                  src: "ch59-quanxi.jpeg",
                  chapter: 59,
                  description: "I like her facial expression..."
                },
                {
                  src: "ch44-reze.jpg",
                  chapter: 44,
                  description: `I felt like the earnestness was palpable. Reze was sincere, she really was going to
                    renege, and Denji even did consider it. He had never made choices for himself before, but...it's so
                    tenuous, it's a raw moment of honesty and vulnerability. 'I'll make you happy'`
                },
                {
                  src: "ch74-makima.jpg",
                  chapter: 74,
                  description: `I like how the intensity contrasts with Makima's emotions. She's always been eerily calm.
                    A contract regarding all of oneself has always been intense. For example, Himeno's death. Yet Makima
                    does it so casually. It's a facet in her broader story, how she's unable to connect with others.
                    She's capable of obtaining the greatest thing someone can give another with a simple sentence. By the
                    way, she did this before, in Hell, but that scene wasn't as relevant. We don't know that guy, and
                    he's an enemy. This is impactful, because Aki is in the main trio... and just like that, everything
                    he is, is no longer his own.`
                },
                {
                  src: "ch113-asa.jpg",
                  chapter: 113,
                  description: "me"
                },
                {
                  src: "ch168-yoru.jpg",
                  chapter: 168,
                  description: `Denji gets a lot of characterization as a joke-material horny MC, but he's actually pretty
                    earnest. I felt really bad for him here. I don't necessarily think he's interpreting it as assault
                    (technically it is). Like Denji is lowkey down if a girl is down. It's kinda bad. But like not that
                    bad, because it's not the situation itself that's net negative, but rather that the girl ends up
                    betraying him. But here it's specifically because this is an emotionally vulnerable moment where he
                    makes a bid for a deeper emotional connection that gets completely rejected. And I'm pretty sure at
                    this point he doesn't even know about the Yoru/Asa thing? He finds out about it like 30 chapters
                    later I think, and the first thing he asks is which one of them jerked him off.`
                },
                {
                  src: "ch193-yoru.jpeg",
                  chapter: 193,
                  description: `I like panels without text. They feel emotionally charged. I feel like I can feel Denji's
                    defeat here. He's never been good at exercising autonomy. He's been trying to though. Yoru physically
                    props his head up to kiss him. In a defeated moment, he acts again like a dog.`
                }
              ]}
            />

            <PanelCarousel
              title="Horimiya"
              slug="horimiya"
              panels={[
                {
                  src: "ch3-toru.jpeg",
                  chapter: 3,
                  description: `I like how there's no text here. You can kind of imagine the confession. And the way the
                    panel backs away. It feels like a good way to represent the distance and awkwardness.`
                },
                {
                  src: "ch6-miya.jpeg",
                  chapter: 6,
                  description: `I don't like the facial expressions that much in this panel. You can't take out the words
                    and visualize the emotions, because it feels like, the emotions aren't drawn very indicatively. But
                    the text is kind of heavy. It's spoken casually, but it's actually pretty important, because he's
                    lightly conveying that he sees her in that way, but he's also very careful. There's just enough
                    lightness to not leave pressure (this doesn't read as ambiguous but the prior context is needed).`
                },
                {
                  src: "ch21-shindou.jpeg",
                  chapter: 21,
                  description: `This felt like a conversation more people should read. Miyamura doesn't have this insight,
                    because he's been a loner, but there are so many intentions you can have with someone - borderline
                    ownership? being inseperable? showing them off? casual/noncasual intimacy? emotional closeness? -
                    infinite, and no intentions are inherently wrong when accurately communicated and accepted, but the
                    ultimate goal is to convey them and seek alignment. *I think the only bad intentions derive from
                    deception.`
                },
                {
                  src: "ch37-miya.jpeg",
                  chapter: 37,
                  description: `I felt like I could feel Hori's emotions for Miyamura in this panel. The other way around
                    too. It's her gaze that's drawn, and it's shadowed, and it feels intense because of the tight
                    cropping - he's the sole focus, but also he's gazing at her. The partial view feels intimate. It's an
                    expression no one can see but her. The rest of the chapter is also similarly partial-viewed, which I
                    really liked.`
                },
                {
                  src: "ch37-hori.jpeg",
                  chapter: 37,
                  description: `I like the intentional visual ambiguity/redaction. Too many manga do sex-appeal fanservice
                    for sales, and it feels offputting, because it's not an externalization of emotion. I felt like the
                    thoughts were kind of, what you feel when you love someone. Seeing and wanting them for everything
                    they are. Closing the distance.`
                }
              ]}
            />

            <PanelCarousel
              title="Eden's Zero"
              slug="edens-zero"
              panels={[
                {
                  src: "ch124-elsie.jpeg",
                  chapter: 124,
                  description: `I don't watch Eden's Zero. I watched one ep and dropped it a few min in. But my
                    childhood show is Fairy Tail, and I've waited almost 10 years for Jellal and Erza to get together.
                    I'm a really huge Jerza fan. Fairy Tail and 100YQ are over, and Mashima refused
                    to create a confirmed ending… like it's going to happen, but he doesn't want to give the audience
                    catharsis, which is kind of cruel. Anyway, along with cruelty and perversion (FT has ridiculous
                    fanservice, so I don't reread it), he isn't creative, so he reuses his character designs.
                    Anyway this is Elsie and Justice from Eden's Zero. Their character context is 'two former lovers
                    turned enemies', which is pretty similar to Jellal and Erza - what they're introduced as, in the
                    Heaven's Tower Arc.`
                }
              ]}
            />
          </section>
        </article>
      </main>
    </>
  );
}
