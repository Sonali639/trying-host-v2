const showAlert = ({ title, text, icon }) => {
    // Create a message string that combines the title, text, and icon
    const message = `${title || "Notification"}\n${text || ""}`;
  
    // Show a simple JavaScript alert
    alert(message);
  };
  
  export default showAlert;
  