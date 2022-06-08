import React, { useState } from "react";
import "./App.css";

function Questions(props) {
  let [id, setId] = useState(0);
  let [selected, setSelected] = useState(null);
  let [history, setHistory] = useState([]);

  function nextClick() {
    if (selected === null) {
      return;
    }
    if (id + 1 > quizQuestions.length-1) {
      props.setAppState("result");
      props.setResults(history);
      return;
    }

    setHistory([...history, selected]);
    setSelected(null);
    setId(id + 1);
  }

  const quizQuestions = [
    {
      id: 0,
      question: "Do you feel so physically and mentally exhausted from work each day that you cannot handle normal household responsibilities like cooking or paying bills?",
      options: [
        {
          label:
            "Yes, I feel totally exhausted",
          value: "a",
        },
        {
          label:
            "I barely manage to get some work done",
          value: "b",
        },
        { label: "I'm still fit and I get a lot done when I'm home from work", value: "c" },
      ],
    },
    {
      id: 1,
      question: "Do your family or friends complain that they do not get to see you enough or that you are always tired or short-tempered?",
      options: [
        { label: "Always", value: "a" },
        {
          label: "Sometimes",
          value: "b",
        },
        { label: "Never", value: "c" },
      ],
    },
    {
      id: 2,
      question: "Have you noticed subtle changes in your physical health?",
      options: [
        {
          label: "I feel much weaker these days",
          value: "a",
        },
        { label: "I don't think so", value: "b" },
        { label: "I'm perfectly fine", value: "c" },
      ],
    },
    {
      id: 3,
      question: "Is work the last thing on your mind when you fall asleep at night?",
      options: [
        { label: "I always have work on my mind before I sleep", value: "a" },
        {
          label:
            "Some of the time",
          value: "b",
        },
        { label: "I have other productive thoughts on my mind when I fall asleep", value: "c" },
      ],
    },
    {
      id: 4,
      question: "How long is your daily commute?",
      options: [
        { label: "over 3 hours", value: "a" },
        { label: "1-3 hours", value: "b" },
        { label: "less than an hour", value: "c" },
      ],
    },
    {
      id: 5,
      question: "Do you enjoy your work?",
      options: [
        { label: "No. It's just a necessity", value: "a" },
        { label: "I am indifferent", value: "b" },
        { label: "Yes, I enjoy my work a lot", value: "c" },
      ],
    },
    {
      id: 6,
      question: "Do you have enough time to destress from your work schedule?",
      options: [
        {
          label: "Not in any way enough",
          value: "a",
        },
        {
          label:
            "Barely enough time",
          value: "b",
        },
        {
          label:
            "I have enough time to destress",
          value: "c",
        },
      ],
    },
    {
      id: 7,
      question: "Do you need extra help to complete your work tasks?",
      options: [
        {
          label:
            "I'm in dire need of help",
          value: "a",
        },
        {
          label:
            "A little help might suffice",
          value: "b",
        },
        {
          label:
            "I do fine on my own",
          value: "c",
        },
      ],
    },
    {
      id: 8,
      question: "Have you ever disregarded your personal commitments due to work?",
      options: [
        {
          label: "A lot of times",
          value: "a",
        },
        {
          label: "Sometimes",
          value: "b",
        },
        {
          label: "No, I don't think so",
          value: "c",
        },
      ],
    },
    {
      id: 9,
      question: "Are you suffering from burnout or work-related illnesses?",
      options: [
        { label: "Yes, I am", value: "a" },
        { label: "I am not sure", value: "b" },
        { label: "No, I am not", value: "c" },
      ],
    },
    {
      id: 10,
      question: "Are you having trouble at home as a result of your job",
      options: [
        {
          label: "I'm struggling to balance both home and work ",
          value: "a",
        },
        { label: "It's not what i can't handle", value: "b" },
        {
          label:
            "The home front is great",
          value: "c",
        },
      ],
    },
  ];

  let currentQuestion = quizQuestions.find((item) => item.id === id);

  return (
    <div className="Questions">
      <div className="container">
        <section className="question-number">
          <p>
            Question {id + 1} of {quizQuestions.length}
          </p>
        </section>
        <section className="Question-btns">
          <h3 className="Question-1">{currentQuestion.question}</h3>
          <div>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={
                  selected === option.value
                    ? "Question-btn-selected Question-btn"
                    : "Question-btn"
                }
                onClick={() => setSelected(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
        <section>
          <button className="next-btn" onClick={nextClick}>
            Go To Next Question
          </button>
        </section>
      </div>
    </div>
  );
}

export default Questions;
