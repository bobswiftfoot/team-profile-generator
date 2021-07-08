const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const writeFile = require('../src/generate-site');
const generatePage = require('../src/page-template');

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the Team Manager\'s name? (Required)',
        validate: managerName => 
        {
            if (managerName)
                return true;
            else
            {
                console.log("Please enter the Team Manager\'s name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the Team Manager\'s employee ID? (Required)',
        validate: managerId => 
        {
            if (managerId)
                return true;
            else
            {
                console.log("Please enter the Team Manager\'s employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the Team Manager\'s email adress? (Required)',
        validate: managerEmail => 
        {
            if (managerEmail)
                return true;
            else
            {
                console.log("Please enter the Team Manager\'s email adress!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerPhone',
        message: 'What is the Team Manager\'s office phone number? (Required)',
        validate: managerPhone => 
        {
            if (managerPhone)
                return true;
            else
            {
                console.log("Please enter the Team Manager\'s office phone number!");
                return false;
            }
        }
    }
];

const teamQuestions = [
    {
        type: 'list',
        message: 'Add what kind of member to your team?',
        name: 'teamRole',
        choices: ['Engineer', 'Intern', 'Finish Building Team']
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the Intern\'s name? (Required)',
        validate: internName => 
        {
            if (internName)
                return true;
            else
            {
                console.log("Please enter the Intern\'s name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the Intern\'s employee ID? (Required)',
        validate: internId => 
        {
            if (internId)
                return true;
            else
            {
                console.log("Please enter the Intern\'s employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the Intern\'s email adress? (Required)',
        validate: internEmail => 
        {
            if (internEmail)
                return true;
            else
            {
                console.log("Please enter the Intern\'s email adress!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school does the Intern\'s go to? (Required)',
        validate: internSchool => 
        {
            if (internSchool)
                return true;
            else
            {
                console.log("Please enter the Intern\'s school!");
                return false;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the Engineer\'s name? (Required)',
        validate: engineerName => 
        {
            if (engineerName)
                return true;
            else
            {
                console.log("Please enter the Engineer\'s name!");
                return false;
            }
        }   
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the Engineer\'s employee ID? (Required)',
        validate: engineerId => 
        {
            if (engineerId)
                return true;
            else
            {
                console.log("Please enter the Engineer\'s employee ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the Engineer\'s email adress? (Required)',
        validate: engineerEmail => 
        {
            if (engineerEmail)
                return true;
            else
            {
                console.log("Please enter the Engineer\'s email adress!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the Engineer\'s github? (Required)',
        validate: engineerGithub => 
        {
            if (engineerGithub)
                return true;
            else
            {
                console.log("Please enter the Engineer\'s github!");
                return false;
            }
        }
    }
];

class Roster
{
    constructor()
    {
        this.engineers = [];
        this.interns = [];
        this.managers = [];
    }

    initilizeRoster()
    {
        this.promptManager();
    }

    promptManager()
    {
        inquirer.prompt(managerQuestions)
            .then(managerData =>
            {
                this.managers.push(new Manager(managerData.managerName, managerData.managerId, managerData.managerEmail, managerData.managerPhone));
                this.promptTeamMembers();
            })
            .catch(err =>
            {
                console.log(err);
            });
    }

    promptTeamMembers()
    {
        inquirer.prompt(teamQuestions)
            .then(teamData =>
            {
                switch (teamData.teamRole)
                {
                    case "Engineer":
                    {
                        return this.promptEngineer();
                    }
                    case "Intern":
                    {
                        return this.promptIntern();
                    }
                    case "Finish Building Team":
                    {
                        const pageHTML = generatePage(this)
                        writeFile(pageHTML);
                        return "Finish Building Team";
                    }
                }
            })
    }

    promptEngineer()
    {
        inquirer.prompt(engineerQuestions)
            .then(engineerData =>
            {
                this.engineers.push(new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub));
                this.promptTeamMembers();
            })
            .catch(err =>
            {
                console.log(err);
            });

    }

    promptIntern()
    {
        inquirer.prompt(internQuestions)
            .then(internData =>
            {
                this.interns.push(new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool));
                this.promptTeamMembers();
            })
            .catch(err =>
            {
                console.log(err);
            });
    }
}

module.exports = Roster;