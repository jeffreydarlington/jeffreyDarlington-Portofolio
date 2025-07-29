import { useForm, ValidationError } from '@formspree/react';
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xvgqrnpp");

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-green-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          {state.succeeded ? (
            <p className="text-green-400 text-center">Thanks for your message!</p>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-100 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                  placeholder="Name..."
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-100 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                  placeholder="example@gmail.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-100 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                  placeholder="Your Message..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
