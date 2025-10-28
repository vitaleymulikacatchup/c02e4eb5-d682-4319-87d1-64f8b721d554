"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Mail, Music, Quote, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="David Martinez"
          button={{
            text: "Book Session",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Professional Guitarist & Music Creator"
          description="Bringing emotion and artistry to every performance, recording session, and lesson. Let's create something beautiful together."
          tag="Available for Bookings"
          tagIcon={Music}
          buttons={[
            {
              text: "Book a Session",
              href: "contact"
            },
            {
              text: "Listen to My Work",
              href: "services"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/9419224/pexels-photo-9419224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional guitarist performing with acoustic guitar"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="My Musical Journey"
          description={[
            "With over 15 years of experience, I've had the privilege of performing on stages across the country, recording with talented artists, and sharing my passion through teaching.",
            "My approach combines technical skill with emotional depth, whether I'm crafting the perfect melody for a recording session or helping students discover their own musical voice."
          ]}
          buttons={[
            {
              text: "View My Services",
              href: "services"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="My Services"
          description="Professional guitar services tailored to bring your musical vision to life"
          tag="What I Offer"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Live Performances",
              description: "Captivating acoustic performances for weddings, events, and intimate venues. Creating memorable musical moments that resonate with your audience.",
              imageSrc: "https://images.pexels.com/photos/210766/pexels-photo-210766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Live guitar performance on stage"
            },
            {
              id: "02",
              title: "Studio Recording",
              description: "Professional guitar recording for albums, singles, and commercial projects. From fingerpicking to full arrangements, I bring your tracks to life.",
              imageSrc: "https://images.pexels.com/photos/8132969/pexels-photo-8132969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Guitar recording in professional studio"
            },
            {
              id: "03",
              title: "Guitar Lessons",
              description: "Personalized instruction for all skill levels. Learn proper technique, music theory, and develop your unique style in a supportive environment.",
              imageSrc: "https://images.pexels.com/photos/6671410/pexels-photo-6671410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Guitar lesson instruction session"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Clients Say"
          description="Hear from musicians, event planners, and students who've worked with me"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Sarah Thompson",
              role: "Wedding Planner",
              company: "Elegant Events Co.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Thompson",
              testimonial: "David's acoustic performances transformed our weddings into magical experiences. His ability to read the crowd and play the perfect songs at the perfect moments is unmatched."
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Producer",
              company: "Soundwave Studios",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7588101/pexels-photo-7588101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Rodriguez",
              testimonial: "Working with David on our album was incredible. His guitar work added layers of emotion and complexity that elevated every track. True professional."
            },
            {
              id: "3",
              name: "Emma Chen",
              role: "Music Student",
              company: "Berkeley Music School",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8546799/pexels-photo-8546799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Chen",
              testimonial: "David's teaching style is patient and inspiring. He helped me overcome my technical barriers and find my own voice as a guitarist. Highly recommend!"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Artist",
              company: "Independent Musician",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7586647/pexels-photo-7586647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Wilson",
              testimonial: "David brought my songs to life with his guitar arrangements. His musicality and creativity turned good songs into great ones. Can't wait to work together again."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about booking and working with me"
          faqs={[
            {
              id: "1",
              title: "How far in advance should I book?",
              content: "I recommend booking at least 2-4 weeks in advance for live performances and 1-2 weeks for recording sessions. For weddings and special events, booking 2-3 months ahead ensures availability."
            },
            {
              id: "2",
              title: "What genres do you specialize in?",
              content: "I specialize in acoustic folk, indie, classical, and contemporary styles. However, I'm versatile and can adapt to various genres including pop, rock, and jazz arrangements."
            },
            {
              id: "3",
              title: "Do you provide your own equipment?",
              content: "Yes, I bring all necessary equipment for performances including acoustic guitars, amplification, and basic sound setup. For larger venues, I can coordinate with your sound engineer."
            },
            {
              id: "4",
              title: "What are your lesson rates?",
              content: "Private lessons are $75 per hour. I offer package deals for multiple sessions and sliding scale rates for students. All lessons include personalized practice materials and ongoing support."
            },
            {
              id: "5",
              title: "Can you travel for performances?",
              content: "Absolutely! I regularly travel within a 100-mile radius. For destinations beyond that, we can discuss travel arrangements and additional costs."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Let's Create Music Together"
          description="Whether you're planning an event, recording a project, or looking to learn guitar, I'd love to hear from you. Send me a message and let's discuss how we can make your musical vision come to life."
          tagIcon={Mail}
          inputPlaceholder="Your email address"
          buttonText="Send Message"
          termsText="I'll get back to you within 24 hours. Your information is kept confidential."
          imageSrc="https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Close up of hands playing acoustic guitar"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Services",
              items: [
                { label: "Live Performances", href: "services" },
                { label: "Studio Recording", href: "services" },
                { label: "Guitar Lessons", href: "services" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "About", href: "about" },
                { label: "Testimonials", href: "testimonials" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | David Martinez - Professional Guitarist"
        />
      </div>
    </ThemeProvider>
  );
}