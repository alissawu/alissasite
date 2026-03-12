import Navigation from '@/components/Navigation';
import PhotoCarousel from '@/components/PhotoCarousel';
import styles from './photos.module.css';

export default function PhotosPage() {
  return (
    <>
      <Navigation />

      <main className={styles.photosPage}>
        <h1>Photos</h1>
        <p className={styles.subtitle}>Some photos I like.</p>

        <PhotoCarousel
          basePath="/photos/"
          photos={[
            {
              src: "bojack.jpg",
              date: "may 18, 2025",
              title: "Watching Bojack on the plane to SF",
              description: "My first time going to SF (aside from one time as a child). I really liked this quote."
            },
            {
              src: "sfopic.jpeg",
              date: "may 18, 2025",
              title: "Driving from SFO",
              description: "I took this pic from the window of my Uber from SFO."
            },
            {
              src: "goldengate.jpeg",
              date: "may 24, 2025",
              title: "Being a Tourist",
              description: "Tourist transplant moment obviously I visited The bridge. went with a friend from nyu, the only friend I knew in SF at the time."
            },
            {
              src: "stanford.jpg",
              date: "june 1, 2025",
              title: "First time at Stanford",
              description: "Visited a friend at Stanford and found a new favorite dessert spot. I posted this on my story which somehow got to his sister who thought it was a soft launch (it was not)."
            },
            {
              src: "internhike.jpeg",
              date: "june 7, 2025",
              title: "Intern Hike",
              description: "SF / Bay intern insta groupchat first meetup. I don't like hiking but it was nice to meet everyone :)"
            },
            {
              src: "twinpeaks.jpeg",
              date: "june 17, 2025",
              title: "Twin Peaks AI SUS Afterparty",
              description: "I thought this was a really aesthetic pic."
            },
            {
              src: "barcoding.jpeg",
              date: "june 19, 2025",
              title: "Performatively Coding at the Bar",
              description: "Coding at Shoji. Unironically though everyone was working so it's not really performative if it's the canonical activity. Also I made my X.com account on this day."
            },
            {
              src: "ycsummerconf.jpg",
              date: "july 26, 2026",
              title: "YC Summer Conference",
              description: "I use this pic for all professional purposes atm. First actually good headshot. It's also the pic on the Home page lol."
            },
            {
              src: "matchaevent.jpg",
              date: "aug 2, 2025",
              title: "Cards Against Humanities",
              description: "Went to event at same.next office and totally beat everyone at cards against humanities."
            },
            {
              src: "dress.jpg",
              date: "oct 11, 2025",
              title: "Making a Dress",
              description: "Hung out with a friend experimenting with clothing-making. Dress never got made :p"
            },
            {
              src: "dedaluscolumbia.jpg",
              date: "oct 24, 2025",
              title: "Dedalus Agents Hackathon",
              description: "I encountered an absolutely ridiculous localStorage issue here."
            },
            {
              src: "oaipton.jpg",
              date: "nov 8, 2025",
              title: "OpenAI Dinner at HackPrinceton",
              description: "The food here was decently good. I met some interesting OAIers."
            },
            {
              src: "agentichack.jpg",
              date: "nov 15, 2025",
              title: "YC Agentic Hackathon",
              description: "It was nice to see my SF friends again after a while. I teammed w a X mutual who also didn't know there was a separate hackathon discord to find teammates."
            },
            {
              src: "alignmentcat.jpg",
              date: "feb 7, 2026",
              title: "AI Alignment",
              description: "Pic I took with Columbia's AI Alignment club mascot, max the misaligned cat, while at DevFest. Cats and ai alignment :) (the ears are a joke)"
            },
            {
              src: "vcsteakdinner.jpg",
              date: "feb 9, 2026",
              title: "VC Steak Dinner",
              description: "I met a lot of cool people Doing Things"
            },
            {
              src: "llama.jpg",
              date: "feb 14, 2026",
              title: "Treehacks llama",
              description: "Maybe it was an alpaca idk. It was taller than me."
            },
            {
              src: "claudius.jpg",
              date: "feb 17, 2026",
              title: "Tungsten Cubes",
              description: "Visited Anthropic office and saw tungsten cube. Lol"
            },
            
          ]}
        />
      </main>
    </>
  );
}
