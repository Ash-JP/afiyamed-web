"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: "What is your typical delivery timeframe?",
        answer: "We offer next-day delivery across the UAE for all in-stock consumables. Our strategic central warehousing ensures unbroken, rapid fulfillment for critical medical and surgical supplies when you need them most."
    },
    {
        question: "Do you handle custom clinical procurement?",
        answer: "Yes. Our procurement specialists leverage a global network of ISO-certified manufacturers to source highly specialized capital equipment and specific diagnostic product lines tailored exactly to your facility's requirements."
    },
    {
        question: "How do you ensure compliance and quality?",
        answer: "Every item in our supply chain strictly adheres to UAE Ministry of Health and Prevention (MOHAP) regulations. We distribute exclusively from verified, globally recognized brands, ensuring uncompromised clinical safety and reliability."
    }
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white/60 backdrop-blur-xl rounded-[24px] border border-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(38,125,145,0.1)] transition-all duration-300 p-8">
            <h3 className="font-serif font-bold text-[#0B3D54] text-xl mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#3AABB8] to-transparent block"></span>
                Frequently Asked Questions
            </h3>
            
            <div className="space-y-2">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="border-b border-[#D6E9EC]/60 last:border-0 pb-3 last:pb-0 pt-1">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left flex justify-between items-start py-2 focus:outline-none group"
                            >
                                <span className="font-bold text-[#0B3D54] text-[17px] group-hover:text-[#3AABB8] transition-colors pr-6 mt-1">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-[#D6E9EC] shadow-sm group-hover:border-[#3AABB8] group-hover:bg-[#EBF5F8] flex items-center justify-center transition-all duration-300">
                                    {isOpen ? (
                                        <Minus className="w-4 h-4 text-[#0B3D54]" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-[#3AABB8]" />
                                    )}
                                </div>
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-2 pb-2 text-[#4A6870] text-[16px] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
