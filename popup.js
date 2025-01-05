document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleBlocker');
    const statusText = document.getElementById('status');
  
    // Check if storage API is available
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      // Check the current state of the blocker and update the button text
      chrome.storage.local.get('blockerEnabled', (data) => {
        const isEnabled = data.blockerEnabled || false;
        updateUI(isEnabled);
      });
  
      // Toggle blocker state on button click
      toggleButton.addEventListener('click', () => {
        chrome.storage.local.get('blockerEnabled', (data) => {
          const newState = !data.blockerEnabled;
  
          chrome.storage.local.set({ blockerEnabled: newState }, () => {
            updateUI(newState);
            alert(`Blocker ${newState ? 'Enabled' : 'Disabled'}!`);
          });
        });
      });
    } else {
      console.error('Chrome storage API is not available.');
      statusText.textContent = 'Error: Unable to access storage.';
      toggleButton.disabled = true;
    }
  
    // Function to update the UI based on the blocker state
    function updateUI(isEnabled) {
      toggleButton.textContent = isEnabled ? 'Disable Blocker' : 'Enable Blocker';
      statusText.textContent = `Blocker is ${isEnabled ? 'Enabled' : 'Disabled'}`;
      toggleButton.classList.toggle('enable', isEnabled);
      toggleButton.classList.toggle('disable', !isEnabled);
    }
  });
  console.log('Current state:', data.blockerEnabled);
console.log('New state:', newState);
