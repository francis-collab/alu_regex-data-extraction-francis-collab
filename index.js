#!/usr/bin/node

// Regex Extraction Utility

const extractData = (text) => {
    return {
        emails: text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g) || [],
        urls: text.match(/\bhttps?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}(\/\S*)?\b/g) || [],
        phoneNumbers: text.match(/\b(\(\d{3}\)\s?\d{3}[-.]\d{4}|\d{3}[-.]\d{3}[-.]\d{4})\b/g) || [],
        creditCards: text.match(/\b(?:\d{4}[- ]?){3}\d{4}\b/g) || [],
        timeFormats: text.match(/\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)|([01]?[0-9]|2[0-3]):[0-5][0-9])\b/g) || []
    };
};

// Export for testing
module.exports = extractData;
