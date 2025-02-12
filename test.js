const extractData = require('./index');

const sampleText = `
    Emails: user@example.com, firstname.lastname@company.co.uk, bad@.com, test@invalid
    URLs: https://www.example.com, http://sub.example.org/page, ftp://wrong.com
    Phones: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456, 0000 0000 0000 0000
    Time: 14:30, 2:30 PM, 25:00 PM, 99:99
`;

const extracted = extractData(sampleText);

console.log("Extracted Data:");
console.log("Emails:", extracted.emails);
console.log("URLs:", extracted.urls);
console.log("Phone Numbers:", extracted.phoneNumbers);
console.log("Credit Cards:", extracted.creditCards);
console.log("Time Formats:", extracted.timeFormats);
