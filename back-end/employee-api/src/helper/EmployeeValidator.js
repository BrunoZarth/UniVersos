class MessageValidator {
    
    static verifyIfIsValidOrThrowError(message) {
        verifySQLInjection(message);
        verifyMessageLength(message);
    }

    verifySQLInjection(message) {
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

    verifyMessageLength(message){
        if (message.length > 50000) {
            throw new Error('Message is too long');
        }
    }
}