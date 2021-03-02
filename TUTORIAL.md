# Introduction

> Welcome to the GitHub tutorial!

## 10. Start Terminal

### 10.1

**The first thing you need to do it start the terminal.** Open a new one by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello GitHub` into the terminal and press enter.

#### HINTS

- If the tests don't automatically run, trash the terminal with the "trash can" icon at the top right of the terminal and redo those instructions

## 20. gh auth status

### 20.1

GitHub is a place you can host your Git repositories and contribute to open source projects. Open another tab in your browser window and go to the repository at https://github.com/freeCodeCamp/inspirational_quotes. At the top right of that page, there's a `fork` button. Click it and fork the repo to your account. It must be the GitHub account you used to log in here. When you are done, click the `Run` button to run the tests. You will want to keep this webpage open for the rest of the tutorial.

#### HINTS

- Follow the instructions closely
- You should have forked the suggested repo to your account

## 30. gh auth login

### 30.1

There is now a copy of the repo on your account and the freeCodeCamp account. Next, you want to clone it to this machine. On the webpage of your new repo, there should be a green button that says `Code`. Click it and copy the URL in the dropdown menu. This is your cloning URL. Clone your repo to this machine by entering `git clone <URL>` in the terminal. Make sure you are in the `project` folder first.

#### HINTS

- The webpage with the green button is `https://github.com/<your-username>/inspirational_quotes`
- The clone URL is `https://github.com/<your-username>/inspirational_quotes.git`
- Type `git clone https://github.com/<your-username>/inspirational_quotes.git` in the terminal to clone the repo

## 40. gh auth status

### 40.1

The output shows that it cloned the repo. List what's in this folder for me.

#### HINTS

- It's the `ls` command
- Type `ls` in the terminal and press enter
- Make sure you are in the `project` folder first

## 50. ls

### 50.1

It cloned the repo in the `inspirational-quotes` folder. Change into your new repo folder.

#### HINTS

- Use the "change directory" command
- It's the `cd` command
- Add the folder to change into after the command
- Enter `cd inspirational_quotes` into the terminal

## 60. gh repo fork

### 60.1

You are now in the repo. View the status of it.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` in the terminal from your repo folder

## 70. ls

### 70.1

ls

#### HINTS

- Hints

## 80. cd inspirational-quotes

### 80.1

It cloned the repo in the `inspirational-quotes` folder. Change into your new repo folder.

#### HINTS

- Use the "change directory" command
- It's the `cd` command
- Add the folder to change into after the command
- Enter `cd inspirational_quotes` into the terminal

## 90. ls -a

### 90.1

ls -a

#### HINTS

- Hints

## 100. git status

### 100.1

You are now in the repo. View the status of it.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` in the terminal from your repo folder

## 110. git branch

### 110.1

It says you are on `main` and that it is up to date with `origin/main`. View the branches.

#### HINTS

- Use the "git branch" command
- Type `git branch` into the terminal and press enter
- Make sure you are in your repo folder

## 120. git branch -a

### 120.1

These are your local branches. When you cloned the repo, some remote branches that link to your fork came with it. View them with `git branch -a`. The `-a` stands for "all".

#### HINTS

- Type `git branch -a` in the terminal and press enter
- Make sure you are in your repo folder first

## 130. git remote

### 130.1

There's a `remote/origin/main` branch, that's the `main` branch of your repo on GitHub. When it said your branch was up-to-date, it meant your local `main` branch has all the same commits as this remote branch. When you cloned the repo, it set up this `origin` remote for you. View your remotes with `git remote`.

#### HINTS

- Type `git remote` in the terminal and press enter
- Make sure you are in your repo folder first

## 140. git remote -v

### 140.1

There's your one remote, `origin`. View more about it with `git remote -v`. `-v` stands for "verbose".

#### HINTS

- Type `git remote -v` in the terminal and press enter
- Make sure you are in your repo folder first

## 150. ls

### 150.1

ls

#### HINTS

- Hints

## 160. run all_quotes.sh

### 160.1

There's a number of folders which contain inspirational quotes contributed from other people. You will make your own later. Run the `all_quotes.sh` script to see all the quotes people have added.

#### HINTS

- Type `./all_quotes.sh` in the terminal and press enter
- Make sure you are in your repo folder first

## 170. run my_quotes.sh

### 170.1

The other script will show you what quotes you have added. Run it to see what it does.

#### HINTS

- It's the `my_quotes.sh` file
- Type `./my_quotes.sh` in the terminal and press enter
- Make sure you are in your repo folder first

## 180. cp sample.env .env

### 180.1

It says there isn't a `.env` file. Fortunately, there's a `sample.env` file for you. Use the terminal to copy the `sample.env` into a file named `.env`.

#### HINTS

- You can copy a file with `cp file new_name`
- Type `cp sample.env .env` in the terminal and press enter
- Make sure you are in your repo folder first

## 190. Add username to .env

### 190.1

Okay, the `.env` is being ignored so Git won't recognize any changes here. Add your github username to the `.env` file.

#### HINTS

- Don't use any spaces around the variable, `=`, or value
- Make sure it's the username you used to log in here

## 200. run my_quotes.sh

### 200.1

Run the script to view your quotes again.

#### HINTS

- It's the `my_quotes.sh` file
- Type `./my_quotes.sh` in the terminal and press enter
- Make sure you are in your repo folder first

## 210. git config -l

### 210.1

Okay, its almost time to start adding your quotes. First, there's a few settings I need you to check on your GitHub account. Back on GitHub, click your profile icon at the top right of any page and go to the settings page. Click the `account security` tab on the left. Make sure two factor authentication is disabled. This needs to be disabled to push code from here.

Next, you are going to anonymize your email address. Click the `emails` tab on the left. A little ways down, there's a checkbox that says `Keep my email addresses private`. Check that box and copy the anonymized email address right below it. It should look something like `<numbers>+<username>@users.noreply.github.com`. This part is optional, but I would do it just to follow along. 

After you have done those type `git config -l` in the terminal to see your config. `-l` stands for "list".

#### HINTS

- The URL for the first setting is `https://github.com/settings/security`
- The URL for the second setting is `https://github.com/settings/emails`
- Type `git config -l` in the terminal and press enter

## 220. git config --global user.email

### 220.1

Using that anonymized email you copied, type `git config --global user.email <email>` to use it. If you choose not to anonymize your email, type `git skip` in the terminal.

#### HINTS

- If you lost the copy of your anonymized email, it can be found at `https://github.com/settings/emails` right below the `Keep my email addresses private` option

## 230. git config -l

### 230.1

Now when you make a commit, this email will be attached to it. List your config again with `git config -l` to see your new email.

#### HINTS

- Type `git config -l` in the terminal and press enter
- Make sure you are in your repo folder first

## 240. git checkout -b feat/first-quote-from-<username>

### 240.1

Time to add your own quote. You don't want to make changes to the `main` branch when working on an open source project. So, create and checkout a new branch named `feat/first-quote-from-<username>`.

#### HINTS

- Use the `git checkout` command with the `-b` flag to create and checkout a new branch
- Here's an example: `git checkout -b <branch_name>`
- Type `git checkout -b feat/first-quote-from-<username>` in the terminal and press enter

## 250. mkdir <username>

### 250.1

Using the terminal, create a new directory in repo with your username as it's name. Make sure to use the same capitalization.

#### HINTS

- Use the "make directory" command
- It's the `mkdir` command
- Here's an example: `mkdir <directory_name>`
- Enter`mkdir <your_username>` in the terminal with your GitHub username in place of `<your_username>`

## 260. touch <username>/my_quotes.json

### 260.1

From here, use `touch` to create `my_quotes.json` in your new folder.

#### HINTS

- Here's an example: `touch <path/file_name>`
- Enter `touch <your_username>/my_quotes.json` in the terminal with your GitHub username in place of `<your_username>`

## 270. Add first quote

### 270.1

Open your new JSON file in the editor and add an array to it. In the array, add a single object with two keys, `quote` and `author`. Find an inspirational quote you like an put the value in for the `quote` and `author`. It can be a quote from you or anyone.

#### HINTS

- View one of the other files to see what it might look like
- Your file should look something like this but with a different quote:
```json
[
  {
    "quote": "Be the change that you wish to see in the world",
    "author": "Mahatma Gandhi"
  }
]
```

## 280. git status

### 280.1

View your status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` in the terminal from your repo folder

## 290. git add .

### 290.1

You should only have one your one folder showing as untracked. It doesn't show the file yet. Add your changes to staging with `git add <folder_name>`.

#### HINTS

- Don't add extra changes

## 300. git status

### 300.1

View the status again.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` in the terminal from your repo folder

## 310. git commit feat: add <username>'s first quote

### 310.1

Commit your changes with the message `feat: add <your_username>'s first quote`.

#### HINTS

- Here's an example: `git commit -m "<message>"`
- Enter `git commit -m "feat: <your_username>'s first quote"` in the terminal with your username in place of `<your_username>`
- Enter `git log -1` to see if the message is correct
- If it's wrong, type `git reset HEAD~1` to unstage the changes, then `git add .` to add them back. Then commit them with the correct message

## 320. git log -3

### 320.1

View the last three logs in your repo.

#### HINTS

- Use the "git log" command with the correct argument
- It's the `git log` command
- The argument is `-3`
- Type `git log -3` in the terminal and press enter

## 330. gh pr create --fill

### 330.1

gh pr create --fill

#### HINTS

- hint

## 340. gh pr list

### 340.1

gh pr list

#### HINTS

- Hint
