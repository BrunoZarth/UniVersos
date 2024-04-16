class MessageValidator {
    
    static verifyIfIsValidOrThrowError(message) {
        this.verifySQLInjection(message);
        this.verifyMessageLength(message);
    }

    static verifySQLInjection(message) {
        const sqlInjectionPatterns = [
            /['"\\;()#*?%&_={}<>]/g,  
            /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE)?|INSERT( INTO)?|MERGE|SELECT|UPDATE|UNION( ALL)?)\b/i 
        ];

        for (let pattern of sqlInjectionPatterns) {
            if (pattern.test(message)) {
                throw new Error('Possible SQL injection attack detected');
            }
        }
    }

    static verifyMessageLength(message){
        if (message.length > 50000) {
            throw new Error('Message is too long');
        }
    }
}

module.exports = MessageValidator;
