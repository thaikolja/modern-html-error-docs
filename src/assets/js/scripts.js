/**
 * Handles dynamic error page content updates based on error code.
 *
 * - Waits for DOMContentLoaded event.
 * - Reads the error code from the `.giant-404` element.
 * - Loads error messages from `./assets/data/messages.json`.
 * - Updates meta description, page title, h1 title, robot speech, main message, and sub message
 *   according to the error code data.
 * - Logs warnings if error code or message data is missing.
 * - Logs errors if loading or parsing the JSON fails.
 */
document.addEventListener('DOMContentLoaded', async () => {
  const errorCodeElement = document.querySelector('.giant-404');
  const errorCode = errorCodeElement ? errorCodeElement.textContent : null;

  if (!errorCode) {
    console.error('Error code element not found.');
    return;
  }

  try {
    const response = await fetch('./assets/data/messages.json');
    const messages = await response.json();

    if (messages[errorCode]) {
      const errorData = messages[errorCode];

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', errorData.meta_description);
      }

      // Update title
      const titleElement = document.querySelector('title');
      if (titleElement) {
        titleElement.textContent = `${errorCode} - ${errorData.title}`;
      }

      // Update h1 title
      const h1TitleElement = document.querySelector('.error-title');
      if (h1TitleElement) {
        h1TitleElement.textContent = errorData.title;
      }

      // Update robot speech
      const robotSpeechElement = document.querySelector('.speech-bubble-text');
      if (robotSpeechElement) {
        robotSpeechElement.textContent = errorData.robot_speech;
      }

      // Update main message
      const mainMessageElement = document.querySelector('.error-message .main');
      if (mainMessageElement) {
        mainMessageElement.textContent = errorData.main_message;
      }

      // Update sub message
      const subMessageElement = document.querySelector('.error-message .sub');
      if (subMessageElement) {
        subMessageElement.textContent = errorData.sub_message;
      }
    } else {
      console.warn(`No message data found for error code: ${errorCode}`);
    }
  } catch (error) {
    console.error('Error loading or parsing messages.json: ', error);
  }
});
