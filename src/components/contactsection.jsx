import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'

const Contactsection = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    if (loading) return
    setLoading(true)

    const toastId = toast.loading('Sending message...')

    try {
      await emailjs.sendForm(
        'service_mrebe2n',     // 👈 replace
        'template_b5ggv95',    // 👈 replace
        formRef.current,
        'NhVq1Kyt2RHGV5uet'      // 👈 replace
      )

      toast.success('Message sent successfully 🚀', { id: toastId })
      formRef.current.reset()
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message. Please try again.', {
        id: toastId,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 px-4 relative" id='contact'>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8 my-auto">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="mailto:moezunethway.dev@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  moezunethway.dev@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="tel:+447587446614"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  07587446614
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  NW9, London
                </span>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/moe-zune-thway-web-developer" target='_blank' aria-label="LinkedIn">
                  <Linkedin className="hover:text-primary" />
                </a>
                <a href="https://github.com/MoeZuneThway" aria-label="GitHub">
                  <Github className="hover:text-primary" />
                </a>
                <a href="https://www.instagram.com/yoshikage_mz?igsh=ZHh1cmY1OHRob2w0l" target='_blank' aria-label="Instagram">
                  <Instagram className="hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-card gradient-border card-hover p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="xyz@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactsection
