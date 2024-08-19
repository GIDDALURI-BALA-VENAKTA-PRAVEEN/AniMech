<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
 .grid-container {
  display: grid;
  grid-template-columns: 2fr 3fr; /* Two columns: first is 2 parts wide, second is 3 parts wide */
  gap: 16px; /* Gap between columns */
  border: 2px solid #000; /* Border around the entire grid container for clarity */
  padding: 16px; /* Padding inside the grid container */
}

.main-column {
  display: flex;
  border: 2px solid #ff0000; /* Border around the main column */
  padding: 8px; /* Padding inside the main column */
}

.sub-columns {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three equal sub-columns */
  gap: 16px; /* Gap between sub-columns */
  border: 2px solid #00ff00; /* Border around the sub-columns container */
  padding: 8px; /* Padding inside the sub-columns container */
}

.sub-column {
  padding: 8px;
  border: 2px solid #0000ff; /* Border around each sub-column */
}

.main-content {
  padding: 8px;
  border: 2px solid #ff00ff; /* Border around the main content */
}
@media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr; /* Stack columns on small screens */
      grid-template-rows: auto auto; /* Ensure rows stack vertically */
    }
  
    .sub-columns {
      grid-template-columns: 1fr; /* Stack sub-columns vertically */
      grid-template-rows: repeat(3, auto); /* Ensure sub-columns stack vertically */
    }
  }
        
    </style>
</head>
<body>
    <div class="grid-container">
   
        <div class="main-column">
          <div class="main-content">Main Column Data
            <h1>We are Animech</h1>
            <p>
              We are Animech – a leader in advanced visualization tools that
              redefine digital commerce. With our expertise, we strive for
              tailor-made solutions that improve sales and customer experience for
              our partners.
            </p>
            <br></br>
            <p>Ekeby Bruk 4J</p>
            <p>752 63 Uppsala</p>
            <p>Sweden</p>
            <br></br>
            <p>
              T: <span>+46 (0) 18 53 92 20</span>
            </p>
            <p>
              E:<span> hello@animech.com</span>
            </p>
          </div>
        </div>
        <div class="sub-columns">
          <div class="sub-column">Sub Colu <h3>About Us</h3>
            <h2>This is</h2>
            <h2>Products</h2>
            <h2>services</h2>
            <h3>About Us</h3>mn 1</div>
          <div class="sub-column">Sub C <h3>About Us</h3>
            <h2>This is</h2>
            <h2>Products</h2>
            <h2>services</h2>
            <h3>About Us</h3>olumn 2</div>
          <div class="sub-column">Sub C <h3>About Us</h3>
            <h2>This is</h2>
            <h2>Products</h2>
            <h2>services</h2>
            <h3>About Us</h3>olumn 3</div>
        </div>
      </div>
      <div>

        <ul>

            <ul>
                <li>hh</li>
                <li>hh</li>
                <li>hh</li>
                <li>hh</li>
            </ul>
        </ul>
      </div>
      
</body>
</html>