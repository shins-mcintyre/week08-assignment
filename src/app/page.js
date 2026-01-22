import Image from "next/image";
import profilePhoto from "@/../public/assets/square.jpg"

export default function HomePage() {
  return (
    <>
    <section className="homepage-content">
      <h2>Soft hiking</h2>
      <p>Soft hiking is a gentle, inclusive approach to walking in nature that prioritizes enjoyment, mindfulness, and self-compassion over speed, distance, or physical challenge, focusing on soaking in surroundings, taking breaks, and moving at a comfortable pace for pure pleasure.</p>

      <h3>About me</h3>
      <Image src={profilePhoto} alt="Profile photo of blog author" placeholder="blur"/>
      <p>I am, like many others out there, an outdoor enthusiast who seeks to explore the world on foot, embracing the journey rather than just the destination. Hiking for me is a way to clear my head, recharge, and connect with nature, and I view hiking as a form of "trail therapy". However hiking does not need to be long, it does not need to be steep, it doesn't even need to be challenging to achieve these things. If you like to hike for fun, or maybe you're just curious, come and join our community to learn and share!</p>
    </section>


    </>
  );
}
