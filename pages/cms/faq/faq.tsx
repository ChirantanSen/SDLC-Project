// components/Faq.tsx
import React, { useState } from "react";
import { Box, Typography, Collapse, Divider } from "@mui/material";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How do I create a new account?",
    answer:
      "To create a new account, click on the 'Sign Up' button on the top right corner, fill in your details, and verify your email. Once verified, you can start using all the platform features.",
  },
  {
    question: "How can I post a job or project?",
    answer:
      "After logging in, navigate to the 'Find Talent' section and click 'Post a Job'. Fill in the project details, budget, and timeline. Once submitted, your posting will be visible to registered professionals.",
  },
  {
    question: "How do I apply for a job or project?",
    answer:
      "Visit the 'Find Work' section, browse available projects, and click 'Apply' on the ones that match your skills. Make sure your profile and portfolio are up to date for better chances.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support all major credit/debit cards, PayPal, and direct bank transfers. Payments are processed securely through our platform.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via the 'Contact' page or email us at support@jobjolt.com. We aim to respond within 24 hours on business days.",
  },
  {
    question: "Can I edit my profile information?",
    answer:
      "Yes, you can update your profile information, including skills, portfolio, and contact details, by navigating to your account settings.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ backgroundColor: "#f6f9fe", py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#0D0B4C",
            fontWeight: 700,
            backgroundColor: "#e7f1fd",
            display: "inline-block",
            px: 3,
            py: 1,
            borderRadius: "22px",
            fontFamily: "Roboto, sans-serif",
            fontSize: "13px",
          }}
        >
          F.A.Q
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mt: 2, mb: 2, fontFamily: "Roboto, sans-serif" }}
        >
          Frequently Asked <span style={{ color: "#0D0B4C" }}>Questions</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "#444", fontFamily: "Open Sans, sans-serif" }}>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1000, mx: "auto" }}>
        {faqItems.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                py: 3,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                color: openIndex === index ? "#0D0B4C" : "#0D0B4C",
                fontWeight: 500,
                fontSize: 18,
                transition: "color 0.3s",
              }}
              onClick={() => toggle(index)}
            >
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  mr: 2,
                  transition: "transform 0.3s",
                  transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  fontFamily: "FontAwesome",
                }}
              >
                ▼
              </Box>
              {item.question}
            </Box>
            <Collapse in={openIndex === index}>
              <Typography sx={{ mt: 1, mb: 2, color: "#222", fontSize: 14 }}>
                {item.answer}
              </Typography>
            </Collapse>
            {index < faqItems.length - 1 && <Divider />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
