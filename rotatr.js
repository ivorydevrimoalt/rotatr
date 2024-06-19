function rotateContent(elementId, angle) {
  // Get the element by its ID
  const element = document.getElementById(elementId);

  // Check if element exists
  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  // Apply the rotation using CSS transform
  element.style.transform = `rotate(${angle}deg)`;
}
