// src/components/Chatbot.js
import React, { useState, useRef } from 'react';

const Chatbot = () => {
    const [chatbotVisible, setChatbotVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const chatWindowRef = useRef(null);

    const aiReplies = [
        "You can register for our online university courses by visiting our registration page.",
        "We offer a variety of courses including Computer Science, Business Administration, and Psychology.",
        "Our university is accredited and offers both undergraduate and postgraduate programs.",
        "For more details on the courses, you can visit our course catalog.",
        "If you need assistance with the registration form, please let us know."
    ];

    const getAIReply = () => {
        return aiReplies[Math.floor(Math.random() * aiReplies.length)];
    };

    const addMessage = (message, isUser = true) => {
        setMessages(prevMessages => [...prevMessages, { text: message, isUser }]);
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    };

    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            addMessage(inputValue);
            setInputValue('');

            setTimeout(() => {
                addMessage(getAIReply(), false);
            }, 1000);
        }
    };

    const handleUnsendMessage = () => {
        setMessages(prevMessages => prevMessages.slice(0, -1));
    };

    return (
        <>
            <div 
                className={`fixed bottom-4 right-4 text-white p-4 rounded-full cursor-pointer shadow-lg ${chatbotVisible ? '' : ''}`} 
                onClick={() => setChatbotVisible(!chatbotVisible)}
                style={{ background: 'linear-gradient(135deg, #4f46e5, #6b5ae2)' }}
            >
                <i className="fas fa-comment-dots"></i>
            </div>

            {chatbotVisible && (
                <div className="w-full max-w-md bg-white rounded-lg shadow-lg fixed bottom-16 right-4">
                    <div className="bg-purple-500 text-white p-4 rounded-t-lg flex items-center justify-between">
                        <div className="flex items-center">
                            <img alt="Chatbot icon" className="w-10 h-10 rounded-full mr-3" src="https://cdn-icons-png.flaticon.com/512/10534/10534087.png" />
                            <span className="font-medium">General Enquiry Chatbot</span>
                        </div>
                        <button onClick={() => setChatbotVisible(false)} className="text-white">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div 
                        ref={chatWindowRef} 
                        className="p-4 space-y-4 max-h-80 overflow-y-auto"
                    >
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.isUser ? 'justify-end' : ''}`}>
                                {!msg.isUser && (
                                    <img alt="Chatbot icon" className="w-10 h-10 rounded-full mr-3" src="https://cdn-icons-png.flaticon.com/512/10534/10534087.png" />
                                )}
                                <div className={`${msg.isUser ? 'bg-purple-500 text-white' : 'bg-gray-200'} p-3 rounded-lg max-w-xs`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-200 flex">
                        <input 
                            value={inputValue} 
                            onChange={e => setInputValue(e.target.value)} 
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
                            placeholder="Type a message..." 
                            type="text" 
                        />
                        <button onClick={handleSendMessage} className="ml-2 chatbot-button">Send</button>
                        <button onClick={handleUnsendMessage} className="ml-2 chatbot-button">Unsend</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
