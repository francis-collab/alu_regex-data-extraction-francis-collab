# Regex Data Extraction - Onboarding Hackathon

## Overview
This project extracts specific types of data from text using **Regular Expressions (Regex)**. It supports:
- **Email Addresses**
- **URLs**
- **Phone Numbers**
- **Credit Card Numbers**
- **Time Formats (12-hour & 24-hour)**

## Setup Instructions
Follow these steps to set up and run the project:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/francis-collab/alu_regex-data-extraction-francis-collab.git
cd alu_regex-data-extraction-francis-collab
```

### 2️⃣ Run the Extraction Script
```bash
node test.js
```

## Features & Edge Cases Handled
| Feature | Regex Pattern | Edge Cases Handled |
|---------|--------------|--------------------|
| **Emails** | `/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g` | Ignores malformed emails like `bad@.com` |
| **URLs** | `/\bhttps?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}(\/\S*)?\b/g` | Only matches `http/https`, not `ftp://` |
| **Phone Numbers** | `/\b(\(\d{3}\)\s?\d{3}[-.]\d{4}|\d{3}[-.]\d{3}[-.]\d{4})\b/g` | Rejects improperly formatted numbers like `1234567890` |
| **Credit Cards** | `/\b(?:\d{4}[- ]?){3}\d{4}\b/g` | Ignores `0000 0000 0000 0000` |
| **Time Formats** | `/\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM)|([01]?[0-9]|2[0-3]):[0-5][0-9])\b/g` | Rejects `25:00 PM`, `99:99` |

## Example Test Case
The script extracts the following information from text:

### **Sample Input**
```txt
Emails: user@example.com, firstname.lastname@company.co.uk, bad@.com, test@invalid
URLs: https://www.example.com, http://sub.example.org/page, ftp://wrong.com
Phones: (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456, 0000 0000 0000 0000
Time: 14:30, 2:30 PM, 25:00 PM, 99:99
```

### **Expected Output**
```
Extracted Data:
Emails: ['user@example.com', 'firstname.lastname@company.co.uk']
URLs: ['https://www.example.com', 'http://sub.example.org/page']
Phone Numbers: ['(123) 456-7890', '123-456-7890', '123.456.7890']
Credit Cards: ['1234 5678 9012 3456', '1234-5678-9012-3456']
Time Formats: ['14:30', '2:30 PM']
```

## How to Contribute
Feel free to fork this repository and submit a pull request if you have any improvements.

## Author
- **Francis Mutabazi**  
- Email: f.mutabazi1@alustudent.com

## License
This project is licensed under the ISC License.
