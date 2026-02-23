import React from 'react';
import SuccessStoryDetail, { SuccessStoryData } from './SuccessStoryDetail';

const CaseStudyIndusGo: React.FC = () => {
    const indusGoStory: SuccessStoryData = {
        client: "IndusGo",
        industry: "Transportation & Logistics",
        tagline: "AI WhatsApp Chatbot for end-to-end booking via text/voice in any language",
        description: "How Zartek UK helped IndusGo revolutionize bus booking through an AI-powered WhatsApp chatbot supporting multilingual text and voice interactions.",
        metrics: [
            { value: "85%", label: "Booking Automation" },
            { value: "12+", label: "Languages Supported" },
            { value: "3.5x", label: "Faster Booking Time" }
        ],
        challenge: {
            title: "The Challenge",
            paragraphs: [
                "IndusGo, a leading intercity bus service provider, faced significant challenges with their traditional booking system. Customers struggled with language barriers, complex web interfaces, and limited accessibility for users in rural areas with low digital literacy.",
                "The existing booking process required multiple steps through a web portal, creating friction for users who preferred simple, conversational interactions. This resulted in high drop-off rates and increased customer support costs."
            ]
        },
        solution: {
            title: "Our Solution",
            intro: "We developed an intelligent WhatsApp chatbot that enables end-to-end bus booking through natural conversations in text or voice, supporting 12+ Indian languages:",
            points: [
                "Natural language processing for conversational booking in multiple languages",
                "Voice-to-text integration for hands-free booking experience",
                "Real-time seat availability and dynamic pricing",
                "Automated payment processing through UPI and digital wallets",
                "Smart route recommendations based on user preferences",
                "Instant booking confirmations and e-tickets via WhatsApp"
            ]
        },
        results: {
            title: "The Results",
            paragraphs: [
                "Within six months of deployment, IndusGo saw an 85% automation rate in bookings through the WhatsApp chatbot. The multilingual voice support opened access to previously underserved markets, particularly in rural areas.",
                "Booking time reduced from an average of 8 minutes to just 2.5 minutes, while customer support costs decreased by 60%. The conversational interface achieved a 92% customer satisfaction rating, significantly higher than the traditional web portal."
            ]
        },
        testimonial: {
            quote: "Zartek UK's AI chatbot transformed how our customers book tickets. The multilingual voice support was a game-changer for reaching rural markets.",
            author: "Rajesh Kumar",
            role: "CTO, IndusGo"
        }
    };

    return <SuccessStoryDetail story={indusGoStory} />;
};

export default CaseStudyIndusGo;
