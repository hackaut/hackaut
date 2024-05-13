import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col items-center justify-center rounded-full bg-blue-50 ">
      <div className="max-w-7xl mx-auto p-5 grid md:grid-cols-2 md:gap-20 ">
        <div className="col-span-1">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h1 className="text-3xl font-bold mb-4">About the Coding Club</h1>
            <p className="mb-4 ">
              This Coding Club is a student organization dedicated to teaching
              students the basics of coding and programming. We offer a variety
              of resources and workshops to help students learn how to code, and
              we also provide opportunities for students to work on coding
              projects together. Our mission is to create a community of
              students who are passionate about coding and to help them develop
              the skills they need to succeed in the tech industry. We believe
              that coding is an essential skill for everyone to learn, and we
              are committed to making coding education accessible to all
              students.
            </p>

            <h2 className="text-3xl font-bold mb-4">Our Goals</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To teach students the basics of coding and programming</li>
              <li>
                To provide opportunities for students to work on coding projects
                together
              </li>
              <li>
                To create a community of students who are passionate about
                coding
              </li>
              <li>To make coding education accessible to all students</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>We believe that everyone can learn to code.</li>
              <li>
                We believe that coding is an essential skill for everyone to
                learn.
              </li>
              <li>
                We believe that coding education should be accessible to all
                students.
              </li>
              <li>
                We believe that a community of learners is essential for
                success.
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="col-span-1">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 90 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our History</h2>
            <p className="mb-4">
              The Coding Club was founded in 2022 by a group of students who
              were passionate about coding. The club started with just a handful
              of members, but it has grown rapidly over the years. Today, the
              Coding Club has over 20+ active members and is one of the most active
              student organizations on the campus in the context of learning.
            </p>

            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="mb-4">
              The Coding Club has had a positive impact on the lives of many
              students. The club has helped students to learn the basics of
              coding, to develop their coding skills, and to find jobs in the
              tech industry. The Coding Club has also helped to create a
              community of students who are passionate about coding.
            </p>

            <h2 className="text-3xl font-bold mb-4">How to Get Involved</h2>
            <p className="mb-4">
              If you are interested in getting involved with the Coding Club,
              there are a few things you can do:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Attend our weekly meetings</li>
              <li>Join our mailing list</li>
              <li>Follow us on social media</li>
              <li>Volunteer to help with our workshops and events</li>
              <li>Work on a coding project with other club members</li>
            </ul>
          </motion.div>
        </div>
      </div>
      <p className="text-lg font-bold animate-pulse text-blue-900 md:pb-5 p-6 text-center">
        We welcome all students, regardless of their experience level, to join
        the Coding Club. We are here to help you learn to code and to succeed in
        the tech industry.
      </p>
    </div>
  );
}


export default About;
