import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('// Transmitting query... Standby...');
    setTimeout(() => {
      setStatus(`// Query received from ${name}. A Nexus agent will respond via ${email} shortly. End of line.`);
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#020215]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-black/50 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center justify-between px-4 py-2 border-b border-cyan-500/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm font-space-mono text-gray-400">/usr/nexus/contact_module</p>
            </div>
            <div className="p-8">
              <form onSubmit={handleSubmit} className="font-space-mono text-green-400">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm">
                    <span className="text-cyan-400">$</span> name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none transition-colors duration-300 caret-cyan-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    <span className="text-cyan-400">$</span> email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none transition-colors duration-300 caret-cyan-400"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm">
                    <span className="text-cyan-400">$</span> message:
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none transition-colors duration-300 caret-cyan-400 resize-none"
                    required
                  />
                </div>
                <button type="submit" className="w-full px-6 py-3 text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-xl mr-2">{'>'}</span> SUBMIT_QUERY
                </button>
              </form>
              {status && (
                <div className="mt-6 p-4 border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-space-mono whitespace-pre-wrap">
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;