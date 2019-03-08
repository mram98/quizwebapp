/**
 * This is a singleton class containing various helper methods.
 *
 * User: Sohail Alam
 * Version: 1.0.0
 * Date: 28/8/13
 * Time: 5:41 PM
 */
define('regexValidation', [], function () {

        var regexValidation = new function () {
            // Regex Variables http://www.ex-parrot.com/pdw/Mail-RFC822-Address.html
            var emailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

            /**
             * Validate a given email address corresponding to RFC822 specifications.
             *
             * @param email The email to test
             * @returns {boolean} true if email is correctly formatted, false otherwise
             */
            this.isValidEmail = function (email) {
                return emailRegex.test(email);
            }
        };

        return regexValidation;
    }
);