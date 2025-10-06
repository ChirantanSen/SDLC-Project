import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Collapse,
  List,
  ListItemButton,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

// ✅ Predefined Q&A
const faqs = [
  {
    question: "Having issues during login?",
    answer:
      "👉 Please create an account. If you already have one, check your email and password.",
  },
  {
    question: "Did not get any OTP?",
    answer:
      "👉 Please provide a correct email and check your spam/junk folder.",
  },
  {
    question: "Forgot your password?",
    answer: "👉 Click on 'Forgot Password' on the login page to reset it.",
  },
  {
    question: "Need more help?",
    answer: "👉 Please contact our support team at support@example.com.",
  },
];

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { type: "question" | "answer"; text: string }[]
  >([]);

  const handleQuestionClick = (faq: { question: string; answer: string }) => {
    setMessages((prev) => [
      ...prev,
      { type: "question", text: faq.question },
      { type: "answer", text: faq.answer },
    ]);
  };

  return (
    <>
      {/* ✅ Floating Chat Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            bgcolor: "#0b0b6b",
            color: "white",
            p: 2,
            "&:hover": { bgcolor: "#0b0bb0" },
            boxShadow: 3,
          }}
        >
          {open ? <CloseIcon /> : <ChatIcon />}
        </IconButton>
      </Box>

      {/* ✅ Chat Window */}
      <Collapse in={open}>
        <Card
          sx={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 320,
            maxHeight: 420,
            display: "flex",
            flexDirection: "column",
            borderRadius: 3,
            boxShadow: 4,
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          {/* Header */}
          <Box sx={{ bgcolor: "#0b0b6b", color: "white", p: 2 }}>
            <Typography variant="h6">HelpBot 🤖</Typography>
            <Typography variant="body2">
              Select a question below to start chatting
            </Typography>
          </Box>

          {/* Messages */}
          <CardContent
            sx={{
              flex: 1,
              overflowY: "auto",
              px: 2,
              py: 1,
              bgcolor: "#f9f9f9",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  alignSelf:
                    msg.type === "question" ? "flex-end" : "flex-start",
                  bgcolor: msg.type === "question" ? "#0b0b6b" : "#e0e0e0",
                  color: msg.type === "question" ? "white" : "black",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: "80%",
                  fontSize: "14px",
                  boxShadow: 1,
                }}
              >
                {msg.text}
              </Box>
            ))}
          </CardContent>

          {/* FAQ Quick Questions */}
          <Box
            sx={{
              borderTop: "1px solid #ddd",
              bgcolor: "white",
              maxHeight: 150,
              overflowY: "auto",
            }}
          >
            <List>
              {faqs.map((faq, index) => (
                <ListItemButton
                  key={index}
                  onClick={() => handleQuestionClick(faq)}
                >
                  ❓ {faq.question}
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Card>
      </Collapse>
    </>
  );
};

export default ChatBot;
