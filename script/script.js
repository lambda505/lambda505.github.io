// Get all the window elements
var windows = document.querySelectorAll('.window');

// Add event listeners to each window
windows.forEach(function (window) {
  window.addEventListener('mousedown', function (event) {
    if (!event.target.classList.contains('window-close')) {
      bringWindowToTop(window);
    }
  });
});

// Function to bring the clicked window to the top
function bringWindowToTop(clickedWindow) {
  // Move the clicked window to the end of the windows list
  clickedWindow.parentNode.appendChild(clickedWindow);

  // Bring the clicked window to the top visually by updating its z-index
  var highestZIndex = 0;
  windows.forEach(function (window) {
    var zIndex = parseInt(window.style.zIndex);
    if (!isNaN(zIndex) && zIndex > highestZIndex) {
      highestZIndex = zIndex;
    }
  });
  clickedWindow.style.zIndex = highestZIndex + 1;
}


function openWindow(windowId) {
    const window = document.getElementById(windowId);
    window.style.display = "block";
  }
  
  function closeWindow(windowId) {
    const window = document.getElementById(windowId);
    window.style.display = "none";
  }
  
  function dragWindow(e, windowId) {
    const window = document.getElementById(windowId);
    const initialX = e.clientX;
    const initialY = e.clientY;
    const offsetX = initialX - window.offsetLeft;
    const offsetY = initialY - window.offsetTop;
  
    function moveWindow(e) {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;
      window.style.left = newX + "px";
      window.style.top = newY + "px";
    }
  
    function releaseWindow() {
      window.removeEventListener("mousemove", moveWindow);
      window.removeEventListener("mouseup", releaseWindow);
    }
  
    window.addEventListener("mousemove", moveWindow);
    window.addEventListener("mouseup", releaseWindow);
  }
  
  function getRandomGif() {
    const gifFolder = "./img/gifs/";
    const gifList = [
      "gif1.gif",
      "gif2.gif",
      "gif3.gif",
      "gif4.gif",
      "gif5.gif"
      // Add more GIF filenames here
    ];
    const randomIndex = Math.floor(Math.random() * gifList.length);
    const randomGif = gifFolder + gifList[randomIndex];
    return randomGif;
  }
  
  window.addEventListener("load", function() {
    const randomGif = getRandomGif();
    document.getElementById("randomGif").src = randomGif;
  });

  function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    
    document.getElementById('time').textContent = timeString;
  }
  
  // Call the function to update the time every second
  setInterval(updateTime, 1000);