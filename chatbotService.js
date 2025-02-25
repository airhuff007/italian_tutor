// ChatbotService.js - This file will handle the chatbot functionality

// Import dependencies (you'll need to install these)
// npm install axios

import axios from 'axios';

interface Correction {
    original: string;
    correction: string;
    explanation: string;
  }
  
  interface Message {
    role: 'user' | 'assistant';
    content: string;
  }

class ChatbotService {
  constructor() {
    // Set up initial state for the chatbot
    this.conversationHistory = [];
    this.proficiencyLevel = 'beginner'; // Can be: beginner, intermediate, advanced
    this.conversationContext = 'general'; // Default context
    
    // Common phrases and responses for fallback
    this.commonPhrases = {
      greetings: [
        { italian: "Ciao!", english: "Hello!" },
        { italian: "Buongiorno!", english: "Good morning!" },
        { italian: "Buonasera!", english: "Good evening!" },
        { italian: "Come stai?", english: "How are you?" }
      ],
      restaurant: [
        { italian: "Vorrei ordinare, per favore.", english: "I would like to order, please." },
        { italian: "Potrei vedere il menu?", english: "Could I see the menu?" },
        { italian: "Cosa mi consiglia?", english: "What do you recommend?" },
        { italian: "Il conto, per favore.", english: "The bill, please." }
      ],
      directions: [
        { italian: "Dov'è la stazione?", english: "Where is the station?" },
        { italian: "Come arrivo a...?", english: "How do I get to...?" },
        { italian: "È lontano?", english: "Is it far?" },
        { italian: "Mi sono perso.", english: "I'm lost." }
      ],
      shopping: [
        { italian: "Quanto costa?", english: "How much does it cost?" },
        { italian: "Sto solo guardando, grazie.", english: "I'm just looking, thanks." },
        { italian: "Avete la taglia media?", english: "Do you have medium size?" },
        { italian: "Lo prendo.", english: "I'll take it." }
      ]
    };
    
    // Grammar correction patterns
    this.grammarRules = [
      {
        pattern: /io (è|sono stato|sarò)/i,
        correction: "io sono",
        explanation: "With 'io' (I), use 'sono' for present tense."
      },
      {
        pattern: /tu (è|sei stato|sarai)/i,
        correction: "tu sei",
        explanation: "With 'tu' (you), use 'sei' for present tense."
      },
      // Add more grammar rules as needed
    ];
  }

  // Method to send a message to the chatbot
  async sendMessage(userMessage) {
    try {
      // Add user message to conversation history
      this.conversationHistory.push({ role: 'user', content: userMessage });
      
      // Check for grammar errors and create corrections
      const corrections = this.checkGrammar(userMessage);
      
      // If using an external API (like OpenAI), uncomment this section
      // Replace with your actual API implementation
      /*
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: this.generateSystemPrompt() },
          ...this.conversationHistory
        ],
        temperature: 0.7,
        max_tokens: 150
      }, {
        headers: {
          'Authorization': `Bearer ${YOUR_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      
      const botResponse = response.data.choices[0].message.content;
      */
      
      // For now, use our simple response generation (no external API)
      const botResponse = this.generateResponse(userMessage, corrections);
      
      // Add bot response to conversation history
      this.conversationHistory.push({ role: 'assistant', content: botResponse });
      
      return {
        message: botResponse,
        corrections: corrections.length > 0 ? corrections : null
      };
    } catch (error) {
      console.error('Error in chatbot communication:', error);
      return {
        message: "Mi dispiace, c'è stato un errore. Puoi riprovare? (Sorry, there was an error. Can you try again?)",
        error: true
      };
    }
  }
  
  // Generate a response without external API (for demonstration)
  generateResponse(userMessage, corrections) {
    // Convert to lowercase for easier matching
    const message = userMessage.toLowerCase();
    
    // Check context - detect if user is talking about a specific scenario
    if (message.includes("ristorante") || message.includes("mangiare") || message.includes("cibo")) {
      this.conversationContext = 'restaurant';
    } else if (message.includes("strada") || message.includes("direzione") || message.includes("dove")) {
      this.conversationContext = 'directions';
    } else if (message.includes("comprare") || message.includes("negozio") || message.includes("prezzo")) {
      this.conversationContext = 'shopping';
    }
    
    // Check for greetings
    if (message.includes("ciao") || message.includes("buongiorno") || message.includes("salve")) {
      return "Ciao! Come posso aiutarti oggi con il tuo italiano? (Hello! How can I help you with your Italian today?)";
    }
    
    // If corrections were found, prioritize teaching
    if (corrections.length > 0) {
      const correction = corrections[0];
      return `Ho capito cosa vuoi dire, ma c'è una piccola correzione: "${correction.correction}". ${correction.explanation} Prova di nuovo! (I understood what you meant, but there's a small correction: "${correction.correction}". ${correction.explanation} Try again!)`;
    }
    
    // Context-based responses
    if (this.conversationContext === 'restaurant') {
      return "Sei al ristorante! Cosa vorresti ordinare? Il menu offre pasta, pizza, pesce e carne. (You're at the restaurant! What would you like to order? The menu offers pasta, pizza, fish, and meat.)";
    } else if (this.conversationContext === 'directions') {
      return "Posso aiutarti a trovare la strada. Dove vuoi andare? (I can help you find your way. Where do you want to go?)";
    } else if (this.conversationContext === 'shopping') {
      return "Siamo in un negozio. Cosa stai cercando oggi? Abbiamo vestiti, scarpe e accessori. (We're in a shop. What are you looking for today? We have clothes, shoes, and accessories.)";
    }
    
    // Default responses for beginner level
    if (this.proficiencyLevel === 'beginner') {
      const responses = [
        "Capisco! Vuoi continuare a praticare? (I understand! Do you want to continue practicing?)",
        "Molto bene! Hai altre domande? (Very good! Do you have other questions?)",
        "Interessante! Parliamo di altro? (Interesting! Shall we talk about something else?)",
        "Stai facendo progressi! Continuiamo. (You're making progress! Let's continue.)"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // More complex responses for intermediate/advanced would go here
    return "Continua pure a praticare il tuo italiano con me! (Feel free to continue practicing your Italian with me!)";
  }
  
  // Check grammar in user message
  checkGrammar(message) {
    const corrections = [];
    
    // Apply grammar rules
    this.grammarRules.forEach(rule => {
      if (rule.pattern.test(message)) {
        corrections.push({
          original: message.match(rule.pattern)[0],
          correction: rule.correction,
          explanation: rule.explanation
        });
      }
    });
    
    return corrections;
  }
  
  // Generate system prompt for API (if using external API)
  generateSystemPrompt() {
    return `You are Sofia, an Italian language tutor chatbot. Respond in Italian with English translations in parentheses.
Current user level: ${this.proficiencyLevel}.
Conversation context: ${this.conversationContext}.
Your goal is to help the user practice Italian conversation naturally, while gently correcting major errors.
For beginners, use simple vocabulary and short sentences.
Always respond in Italian first, followed by an English translation in parentheses.`;
  }
  
  // Method to change the conversation context
  setContext(context) {
    const validContexts = ['general', 'restaurant', 'directions', 'shopping', 'weather', 'hotel', 'emergency'];
    if (validContexts.includes(context)) {
      this.conversationContext = context;
      return `Contesto cambiato a: ${context} (Context changed to: ${context})`;
    }
    return `Contesto non valido. Usa uno dei seguenti: ${validContexts.join(', ')} (Invalid context. Use one of the following: ${validContexts.join(', ')})`;
  }
  
  // Method to change user proficiency level
  setProficiencyLevel(level) {
    const validLevels = ['beginner', 'intermediate', 'advanced'];
    if (validLevels.includes(level)) {
      this.proficiencyLevel = level;
      return `Livello impostato a: ${level} (Level set to: ${level})`;
    }
    return `Livello non valido. Usa uno dei seguenti: ${validLevels.join(', ')} (Invalid level. Use one of the following: ${validLevels.join(', ')})`;
  }
  
  // Get conversation suggestions based on context
  getSuggestions() {
    if (this.conversationContext === 'general') {
      return this.commonPhrases.greetings;
    } else if (this.conversationContext === 'restaurant') {
      return this.commonPhrases.restaurant;
    } else if (this.conversationContext === 'directions') {
      return this.commonPhrases.directions;
    } else if (this.conversationContext === 'shopping') {
      return this.commonPhrases.shopping;
    }
    
    // Default to greetings if context not recognized
    return this.commonPhrases.greetings;
  }
  
  // Clear conversation history
  clearConversation() {
    this.conversationHistory = [];
    return "Conversazione azzerata. (Conversation cleared.)";
  }
}

export default ChatbotService;