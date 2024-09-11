

// Example: If your form has an id attribute, you can select it like this
// document.getElementById()

const formElement = localStorage.getItem("formElement");

let redirectURL = "https://google.com"; // Declaration
console.log(redirectURL);




// const formElement = document.querySelector('#yourFormId');

function renderBlogList() {
    // Your rendering logic goes here
    console.log("Rendering the blog list...");
}

// Call the renderBlogList function
renderBlogList();


// Call light mode and dark mode




function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("light-mode");
}

    





    //// Declare formElement variable before accessing it
    


// Accessing the formElement variable
console.log(formElement);

document.addEventListener('DOMContentLoaded', function() {


});

console.log(formElement)



    // Your form handling code here



// Make sure to assign a value to formElement before accessing it


    
   
    // Declare and define the storeLocalStorage function
//if (condition) {
    //var x = 10; // This is correct
//}

// Example usage of storeLocalStorage
const data = { name: 'John', age: 30 };
storeLocalStorage('userData', data);

function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Return parsed data or null
}

// Call the function after its definition
const myData = readLocalStorage('exampleKey');


    
    // Access formElement after initialization
    console.log(formElement);


    
    

function storeLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Call the function after its definition
storeLocalStorage('exampleKey', { example: 'data' });
    
    

// Check if formElement is not null before accessing it
if (formElement) {
    // Access formElement here
    console.log('Form Element:', formElement);
} else {
    const formElement = document.getElementById('myForm');
}



// Check if formElement is not null before accessing it
if (formElement) {
    // Access formElement here
    console.log('Form Element:', formElement);
} else {
     const formElement = document.getElementById('myForm');
}

const error = document.getElementById('error');
    if (error) {
        error.textContent = "An error occurred!";
    }

    

// Assign a value to formElement
// formElement = document.getElementById('myForm');

// Access formElement after declaration
if (formElement) {
    // Perform actions using formElement
    formElement.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Your custom logic here
    });
} else {
    console.log('Form element not found');
}
    
    
    document.addEventListener('DOMContentLoaded', function() {
//    formElement = document.getElementById("myForm");
    
    // Check if the form element is successfully selected
    var formElement = document.querySelector('form');

    if (formElement) {
        // Your code here that uses formElement
    } else {
        console.error('formElement is not defined or assigned a value.');
    }
    
    // TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission behavior
      
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
      
        // Check if any field is empty
        if (!username || !title || !content) {
          const errorElement = document.getElementById('error');
          errorElement.textContent = 'Please complete the form.';
        } else {
          // Store form data in local storage
          const blogPost = { username, title, content };
          localStorage.setItem('blogPost', JSON.stringify(blogPost));
      
          // Redirect to the blog page
          redirectPage('blog.html'); // Assuming the blog page is named 'blog.html'
        }
      }
    // TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
    function handleFormSubmission(event) {
      event.preventDefault(); // Prevent the default form submission behavior
    
      // Add your form submission logic here
      // For example, you can access form data using event.target
      const formData = new FormData(event.target);
    }

      // Process the form data as needed
      
          //const formElement = document.getElementById('myForm');
          formElement.addEventListener('submit', function(event) {
            event.preventDefault();

            event.preventDefault(); // Prevent the default form submission
         

            // Access form data
            const formData = new FormData(event.target);
            const formValues = Object.fromEntries(formData.entries());
            
            // Process form data (you can send it to the backend here)
            console.log(formValues);



      
      
    
      // Reset the form after submission
      event.target.reset();
    })
    
    // Add event listener to the form on submit
   formElement.addEventListener('submit', function(event) {
    event.preventDefault();

    // get the form data
    const formDatao = new FormData(formElement);

    // Convert the form data to a JSON object
  
  });

  // Convert the object to a JSON string
  const form = document.getElementById('myForm');

  // Store the object in local storage
  const blogPost = {
            username: username,
            title: title,
            content: content
        };

        // Store the object in local storage
        localStorage.setItem('formData', JSON.stringify(blogPost));
  
  

  // Store the JSON string in local storage
   function formData() {
            const form = document.getElementById('myForm');
            const formData = new FormData(form);

            // Access form data using FormData object
            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }
        }
  // Optionally, you can submit the form data to a server here
  // const formElement = document.querySelector('#yourFormId');

    // Reset the form
  formElement.reset();
});
    
    
      // Add your form submission logic here
    
      document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        const errorElement = document.getElementById('error');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const username = document.getElementById('username').value;
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
    
            if (username === '' || title === '' || content === '') {
                errorElement.textContent = 'Please complete the form.';
            } else {
                const blogPost = {
                    username: username,
                    title: title,
                    content: content
                };
    
                // Store the form data in local storage
                localStorage.setItem('blogPost', JSON.stringify(blogPost));
    
                // Redirect to the blog page
                window.location.href = 'blog.html';
            }
        });
    });

    
    
    
      // This function should handle form data, validation, storage, and redirection
      function handleFormSubmission(formData) {
        // Client-side validation
        if (!validateFormData(formData)) {
            // Display validation error messages to the user
            return;
        }

        // Create the variable readLocalStorage
        let readLocalStorage = JSON.parse(localStorage.getItem('formData'));

        // Check if the data exists and display it
        if (readLocalStorage){
            document.getElementById('output').innerHTML = `
                <h2>Retrieved Data:</h2>
                <p>Username: ${readLocalStorage.username}</p>
                <p>Title: ${readLocalStorage.title}</p>
                <p>Content: ${readLocalStorage.content}</p>
            `;
        } else {
            document.getElementById('output').innerHTML = "No data found in local storage.";
        }
        // Send form data to the server
        fetch('/submitForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                // Redirect to a new page upon successful submission
                window.location.href = '/successPage';
            } else {
                // Handle server-side errors and display appropriate messages
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    // Function to validate form data on the client side
    function validateFormData(formData) {
      // Implement your validation logic here
      // Return true if data is valid, false otherwise
    }
    
    // Server-side route to handle form submission
    //app.post('/submitForm', (req, res) => {
    //   const formData = req.body;
    
    //   // Server-side validation
    //   if (!validateFormData(formData)) {
    //       return res.status(400).json({ error: 'Invalid form data' });
    //   }
    
    //   // Store the valid form data in the database or local storage
    //   // Redirect to a success page
    //   res.redirect('/successPage');
    
    
    
    // });

