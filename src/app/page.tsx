"use client";
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import 'flowbite';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Asylum in Canada</title>
        <meta
          name="description"
          content="Helping asylum seekers find a new home in Canada."
        />
      </Head>

      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 py-32 text-center text-white">
          <h1 className="text-5xl font-bold">A New Home Awaits</h1>
          <p className="mt-6 text-xl">
            We help asylum seekers find hope and a new beginning in Canada.
          </p>
          <a
            href="#about"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Mission
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Our web app is dedicated to assisting asylum seekers in finding safe
          haven in Canada. Whether through sponsorship or the regular immigration
          process, we provide resources and guidance every step of the way.
        </p>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Benefits of Seeking Asylum in Canada
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Discover the opportunities and support awaiting you.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/benefit1.jpg"
                alt="Safe and Welcoming Communities"
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Safe and Welcoming Communities
              </h3>
              <p className="mt-4 text-gray-600">
                Experience the warmth and hospitality of Canadian communities
                that embrace diversity and inclusion.
              </p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/benefit2.jpg"
                alt="Access to Quality Healthcare"
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Access to Quality Healthcare
              </h3>
              <p className="mt-4 text-gray-600">
                Receive world-class medical care through Canada&apos;s universal
                healthcare system.
              </p>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/benefit3.jpg"
                alt="Educational Opportunities"
                width={400}
                height={160}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                Educational Opportunities
              </h3>
              <p className="mt-4 text-gray-600">
                Unlock your potential with access to excellent educational
                institutions for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Come to Canada */}
      <section id="ways" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Ways to Seek Asylum
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Find the path that&apos;s right for you.
        </p>
        <div className="mt-10 space-y-8">
          {/* Way 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/private-sponsorship.jpg"
                alt="Private Sponsorship"
                width={600}
                height={256}
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-gray-800">
                Private Sponsorship
              </h3>
              <p className="mt-4 text-gray-600">
                Learn how Canadian citizens and organizations can sponsor you,
                providing support and assistance as you settle into your new
                life.
              </p>
            </div>
          </div>
          {/* Way 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:order-2">
              <Image
                src="/images/government-assisted.jpg"
                alt="Government-Assisted Refugees"
                width={600}
                height={256}
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <div className="md:w-1/2 md:pr-10 mt-6 md:mt-0 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-800">
                Government-Assisted Refugees
              </h3>
              <p className="mt-4 text-gray-600">
                Understand how the Canadian government can help you resettle,
                providing essential services and support.
              </p>
            </div>
          </div>
          {/* Way 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <Image
                src="/images/asylum-claim.jpg"
                alt="Making an Asylum Claim"
                width={600}
                height={256}
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0">
              <h3 className="text-2xl font-semibold text-gray-800">
                Making an Asylum Claim
              </h3>
              <p className="mt-4 text-gray-600">
                Find out how to make a refugee claim upon arrival in Canada and
                the steps involved in the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Get in Touch
          </h2>
          <p className="mt-4 text-center text-gray-600">
            We&apos;re here to help you with any questions you may have.
          </p>
          <div className="mt-10 max-w-lg mx-auto">
            <form action="#" method="POST">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full mt-2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-6 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Asylum in Canada. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}