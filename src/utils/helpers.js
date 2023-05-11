// Function to capitalize the first letter of a string
export function capitalizeFirstLetter(string) {
    // Get the first character and convert it to uppercase,
  // then append the rest of the string starting from the second character
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // Function to validate an email address
  export function validateEmail(email) {
       // Regular expression that matches valid email addresses
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       // Test the email address against the regular expression, after converting it to lowercase 
    return re.test(String(email).toLowerCase());
  }
  // Function to remove hyphens from a string and capitalize every word
  export function removeHyphensAndCapitalize(string) {
       // Replace all hyphens in the string with spaces 
    return string
      .replace(/-/g, " ")
      // Replace every first character in a word with its uppercase version
      .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  }
