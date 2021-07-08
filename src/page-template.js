const generatePage = templateData =>
{
    const roster = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header>
            <h1 class="text-primary bg-dark p-3 text-center">My Team</h1>
        </header>
        <section>
            <div class="row justify-content-center">
            ${generateManagers(roster.managers)}
            ${generateEngineers(roster.engineers)}
            ${generateInterns(roster.interns)}
            </div>
        </section>
    </body>
    </html>
    `;
};

const generateManagers = managers => 
{
    if (!managers)
        return '';

    let returnData = ``;
    for(let i = 0; i < managers.length; i++)
    {
        returnData += `
        <div class="card col cell col-sm-12 col-med-6 col-lg-3 m-3">
            <div class="card-body">
                <h1 class="card-title text-primary">${managers[i].getName()}</h1>
                <h2 class="card-subtitle mb-2 text-muted">${managers[i].getRole()}</h2>
                <p class="id card-text">ID: ${managers[i].getId()}</p>
                <p class="email card-text">Email: <a href="mailto:${managers[i].getEmail()}">${managers[i].getEmail()}</a></p>
                <p class="officeNumber card-text">Office Number: ${managers[i].getOfficeNumber()}</p>
            </div>
        </div>`;
    }
    return returnData;
};

const generateEngineers = engineers => 
{
    if (!engineers)
        return '';

    let returnData = "";
    for(let i = 0; i < engineers.length; i++)
    {
        returnData += `
        <div class="card col cell col-sm-12 col-med-6 col-lg-3 m-3">
            <div class="card-body">
                <h1 class="card-title text-primary">${engineers[i].getName()}</h1>
                <h2 class="card-subtitle mb-2 text-muted">${engineers[i].getRole()}</h2>
                <p class="id card-text">ID: ${engineers[i].getId()}</p>
                <p class="email card-text">Email: <a href="mailto:${engineers[i].getEmail()}">${engineers[i].getEmail()}</a></p>
                <p class="github card-text">Github: <span><a href="https://github.com/${engineers[i].getGithub()}" target="_blank">${engineers[i].getGithub()}</a></span></p>
            </div>
        </div>
        `;
    }
    return returnData;
};

const generateInterns = interns => 
{
    if (!interns)
        return '';

    let returnData = "";
    for(let i = 0; i < interns.length; i++)
    {
        returnData += `
        <div class="card col cell col-sm-12 col-med-6 col-lg-3 m-3">
            <div class="card-body">
                <h1 class="card-title text-primary">${interns[i].getName()}</h1>
                <h2 class="card-subtitle mb-2 text-muted">${interns[i].getRole()}</h2>
                <p class="id card-text">ID: ${interns[i].getId()}</p>
                <p class="email card-text">Email: <a href="mailto:${interns[i].getEmail()}">${interns[i].getEmail()}</a></p>
                <p class="school card-text">School: ${interns[i].getSchool()}</p>
            </div>
        </div>
        `;
    }
    return returnData;
};

module.exports = generatePage;