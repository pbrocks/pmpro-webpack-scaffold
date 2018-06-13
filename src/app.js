console.log('PMPro Webpack Server test successful!');

html = '<img src="images/pmpro-logo.png" /><h1>Hello PMPro!!</h1><h3>from Webpack Dev Server</h3><p>Great!! It looks like you have run YARN!!</p><p>Now, the contents of the homepage div is replaced with html from app.js in the src folder. Cool, huh?';
document.getElementById("homepage").innerHTML = html;