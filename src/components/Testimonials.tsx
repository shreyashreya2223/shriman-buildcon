"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Siddharth Rathore",
    role: "Home Construction Client",
    text: "The work was done properly and the team was easy to coordinate with. They kept us updated during the work and handled the construction as discussed. Overall, we were happy with the quality and execution.",
  },
  {
    name: "Alka Dixit",
    role: "Home Renovation Client",
    text: "We got some renovation work done at our house and are quite happy with how it turned out. The finishing was good and the team was cooperative whenever we had any changes or suggestions. Overall, a good experience.",
  },
  {
    name: "Shulabh Gill",
    role: "Civil & Finishing Work Client",
    text: "Good experience working with Shriman Buildcon. The work was completed as planned and the finishing was up to the mark. They were responsive and sorted out things whenever there was an issue. Would recommend them for construction work.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0E2748] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-[#F4B400]" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#F4B400]">
              Client Feedback
            </span>

            <div className="h-px w-10 bg-[#F4B400]" />
          </div>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8"
            >
              <Quote size={35} className="text-[#F4B400]" />

              <div className="mt-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                    className="text-[#F4B400]"
                  />
                ))}
              </div>

              <p className="mt-5 leading-7 text-gray-600">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="mt-7 border-t border-gray-200 pt-5">
                <p className="font-bold text-[#0E2748]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}