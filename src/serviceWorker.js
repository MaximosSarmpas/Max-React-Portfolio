
// Check if the web application is running on localhost

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
     
      window.location.hostname === "[::1]" ||
    
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
// Export a function to register a service worker  
  export function register(config) {
      // Only register the service worker in production mode and if the browser supports it
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
     // Create a URL object for the public URL of the web application
  const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
     // If the origin of the public URL does not match the current origin, do not register the service worker
      if (publicUrl.origin !== window.location.origin) {

        return;
      }
  
       // When the page is loaded, register the service worker
  window.addEventListener("load", () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
   // If the web application is running on localhost, check if the service worker is valid
    if (isLocalhost) {
        
          checkValidServiceWorker(swUrl, config);
  
         
          navigator.serviceWorker.ready.then(() => {
            console.log(
              "This app is served by a service " +
                "worker."
            );
          });
          // If the web application is not running on localhost, register the service worker directly
        } else {
         
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  // Helper function to register a valid service worker
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
         // When the service worker is updated, notify the user
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed")
             {
              if (navigator.serviceWorker.controller) {
                
                console.log(
                  "New content is available and will be used when all " +
                    "tabs for this page are closed."
                );
    // If a success callback is provided in the config, call it with the registration object
         
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error("Error during service worker registration:", error);
      });
  }
  // Helper function to check if a service worker is valid
  function checkValidServiceWorker(swUrl, config) {
   
    fetch(swUrl, {
      headers: { "Service-Worker": "script" },
    })
      .then((response) => {
      
        const contentType = response.headers.get("content-type");
         // If the service worker is not found or is not a JavaScript file, unregister the service worker and reload the page
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf("javascript") === -1)
        ) {
        
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          "No internet connection found."
        );
      });
  }
  
  export function unregister() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
