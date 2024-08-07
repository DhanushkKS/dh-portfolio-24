"use client";
import { SectionHeading } from "@/components/SectionHeading";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitButton } from "@/components/SubmitButton";
import toast from "react-hot-toast";

export const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <>
      <motion.section
        id="contact"
        ref={ref}
        className="scroll-mt-40 mb-28 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-gray-700 -mt-5 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:ksdhanushka777@gmail.com">
            ksdhanushka777@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent Successfully!");
          }}
          className="mt-10 flex flex-col dark:text-black"
        >
          <input
            type="email"
            name="senderEmail"
            required
            maxLength={500}
            placeholder="Your Email"
            className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          />
          <textarea
            required
            name="message"
            maxLength={1000}
            placeholder="Your Message"
            className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          />
          <SubmitButton />
        </form>
      </motion.section>
    </>
  );
};
