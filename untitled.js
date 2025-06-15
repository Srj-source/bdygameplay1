  document.addEventListener('DOMContentLoaded', function() {
            const body = document.body;
            
            // Create the main div
            const div = document.createElement('div');
            div.style.textAlign = 'center';
            div.style.width = '100%';
            div.style.height = '100%';
            div.style.top = '0px';
            div.style.left = '0px';
            
            // Create and append the h1 elements
            const h1_1 = document.createElement('h1');
            h1_1.style.fontSize = '100px';
            h1_1.textContent = 'Hello😀';
            div.appendChild(h1_1);
            
            const h1_2 = document.createElement('h1');
            h1_2.textContent = 'meeting after a time';
            div.appendChild(h1_2);
            
            const h1_3 = document.createElement('h1');
            h1_3.textContent = 'please use laptop';
            div.appendChild(h1_3);
            
            const h1_4 = document.createElement('h1');
            h1_4.textContent = 'please';
            div.appendChild(h1_4);
            
            const h1_5 = document.createElement('h1');
            h1_5.innerHTML = 'good now <a href="untitled.html" style="color: #000;">click on me ;-) </a>';
            div.appendChild(h1_5);
            
            // Append the div to the body
            body.appendChild(div);
        });


        
