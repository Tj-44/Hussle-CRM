import React from 'react';
import Logo from '@/assets/hussle-logo-top-left.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Twitter, GitHub, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function HussleSolutionsLandingPage() {
  const calendlyLink = 'https://calendly.com/taranjit-a/30min';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <motion.header
        className="bg-white shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <motion.img
            src={Logo}
            alt="Hussle Solutions Logo"
            className="h-10 transition-transform duration-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          <ul className="hidden md:flex space-x-8 font-medium">
            {['Home', 'Features', 'About', 'Contact'].map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition-colors duration-200 hover:text-blue-600"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            <Button className="transition-transform duration-200 hover:scale-105">
              Book Free Demo
            </Button>
          </a>
        </nav>
      </motion.header>

      <main>
        {/* Hero */}
        <motion.section
          id="home"
          className="bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto text-center py-24 px-6">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold"
              whileHover={{ color: '#2563EB' }}
            >
              Streamlining Veterinary Clinics
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Custom CRM & automation built for busy clinics — manage records, bookings, and communications all in one place.
            </motion.p>
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Button className="mt-8 px-10 py-4 text-lg">
                  Book a Free Demo
                </Button>
              </motion.div>
            </a>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          id="features"
          className="max-w-7xl mx-auto py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center">Key Features</h2>
          <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-3">
            {[
              { title: 'Pet Records', desc: 'Unified patient profiles with medical history, vaccinations, and billing details.' },
              { title: 'Scheduling', desc: 'Online booking, automated SMS & email reminders to reduce no-shows.' },
              { title: 'Dashboards', desc: 'Real-time insights into appointments, revenue, and patient care metrics.' }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="transition-shadow duration-200 hover:shadow-lg hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <Card>
                  <CardContent>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          className="bg-white py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Why Hussle Solutions?</h2>
            <p className="mt-4 text-gray-600">
              As a team of tech and veterinary experts, we understand the unique challenges clinics face. Our solution is designed to simplify workflows and enhance patient care so you can focus on what matters most.
            </p>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="max-w-7xl mx-auto py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                quote: '“Hussle Solutions transformed our booking process. No more missed appointments and our team loves the intuitive interface.”',
                author: 'Dr. Emily Carter, Greenfield Vet Clinic'
              },
              {
                quote: '“The dashboard gives us immediate visibility into patient flow and revenue. It’s like having a virtual clinic manager!”',
                author: 'Dr. Raj Patel, Oakwood Veterinary Services'
              }
            ].map((test, idx) => (
              <motion.blockquote
                key={idx}
                className="bg-white p-6 rounded-xl shadow transition-shadow duration-200 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1 }}
              >
                <p className="italic">{test.quote}</p>
                <footer className="mt-4 text-right font-semibold">— {test.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="bg-white py-20 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
            <form className="mt-8 grid gap-6">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <Input type="text" placeholder="Your Name" className="transition-shadow duration-200 focus:shadow-outline" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <Input type="email" placeholder="Your Email" className="transition-shadow duration-200 focus:shadow-outline" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                <Textarea placeholder="How can we help?" rows={5} className="transition-shadow duration-200 focus:shadow-outline" />
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <Button type="submit" className="w-full py-4 text-lg transition-transform duration-200 hover:scale-105">Send Message</Button>
              </motion.div>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-gray-400 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <motion.img
            src={Logo}
            alt="Hussle Solutions Logo"
            className="h-8 mb-4 md:mb-0 transition-transform duration-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          />
          <div className="space-x-4">
            {[
              { Icon: Twitter, label: 'Twitter' },
              { Icon: GitHub, label: 'GitHub' },
              { Icon: Linkedin, label: 'LinkedIn' }
            ].map(({ Icon, label }, idx) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="transition-colors duration-200 hover:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
              >
                <Icon className="inline h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm">© 2025 Hussle Solutions. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
