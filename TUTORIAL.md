# Introduction

> Welcome to the GitHub tutorial!

## 10. Start Terminal

### 10.1

**The first thing you need to do it start the terminal.** Open a new one by clicking the "hamburger" menu at the top left of the window, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello GitHub` into the terminal and press enter.

#### HINTS

- hint
- If the tests automatically run, trash the terminal with the "trash can" icon at the top right of the terminal and redo those instructions

## 20. Fork Repo on GitHub

### 20.1

GitHub is a place you can host your Git repositories. Open another tab in your browser window and go to the repository at https://github.com/mot03/inspirational_quotes. At the top right of the page, there's a `fork` button. Click it and fork it to your account. It must be the GitHub account you used to log in here. When you are done, click the `Run` button to run the tests. Keep this webpage open for the next step.

#### HINTS

- hint

## 30. git clone forked repo

### 30.1

Now there is two copies of the repo you just forked. One on your account, and one on the freeCodeCamp account. Next, you want to clone it to this machine. On the webpage of your new repo, there should be a green button that says `Code`. Click it and copy the URL in the dropdown menu it opens. This is your cloning URL. Clone your repo to this machine by entering `git clone <URL>` in the terminal. Make sure you are in the `project` folder first.

#### HINTS

- The webpage with the green button is `https://github.com/<your-username>/inspirational_quotes`
- The clone URL is `https://github.com/<your-username>/inspirational_quotes.git`
- Type `git clone https://github.com/<your-username>/inspirational_quotes.git` in the terminal to clone the repo

## 40. ls to view the repo

### 40.1

The output shows that it cloned the repo. Use the list command to see what's here.

#### HINTS

- It's the `ls` command

## 50. cd inspirational_quotes

### 50.1

Change into your new repo folder.

#### HINTS

- Use the "change directory" command
- It's the `cd` command
- Add the folder to change into after the command
- Enter `cd inspirational_quotes` into the terminal

## 60. git status

### 60.1

You are now in the repo. View the status of it.

#### HINTS

- Use the "git status" command in your repo
- Type `git status` in the terminal from your repo folder

## 70. git branch

### 70.1

git branch

#### HINTS

- hint

## 80. git branch -a

### 80.1

git branch -a

#### HINTS

- hint

## 90. git remote

### 90.1

You can see some remote branches there. git remote - this `origin` remote was set automically from the repo you cloned

#### HINTS

- hint

## 100. git remote -v

### 100.1

git remote -v

#### HINTS

- hint

## 110. git remote add upstream

### 110.1

git remote add upstream https://github.com/moT01/inspirational_quotes.git https://github.com/freeCodeCamp/inspirational_quotes.git

#### HINTS

- If you entered the wrong URL, you can update it with `git remote set-url <URL>`

## 120. git remote

### 120.1

git remote

#### HINTS

- hint

## 130. git remote -v

### 130.1

git remote -v

#### HINTS

- hint

## 140. run all_quotes.sh

### 140.1

run `./all_quotes.sh` - I may need to make these executable locally?

#### HINTS

- hint

## 150. run my_quotes.sh

### 150.1

run `./my_quotes.sh` - output should be "You have not supplied a username"

#### HINTS

- hint

## 160. cp sample.env .env

### 160.1

It's trying to find the username from the .env file - cp sample.env .env

#### HINTS

- hint

## 170. Add username to .env

### 170.1

Add your github username to the .env file

#### HINTS

- hint

## 180. run my_quotes.sh

### 180.1

run my_quotes.sh - "output should be You have not added any quotes yet" or something

#### HINTS

- hint

## 190. Account setup + git config -l

### 190.1

There's a few settings on your github account I need to you set before you can continue. `git config -l`

#### HINTS

- Hint

## 200. git config --global user.email

### 200.1

`git config --global user.email <email>`

#### HINTS

- Hint

## 210. git config -l

### 210.1

`git config -l`

#### HINTS

- Hint

## 220. git checkout -b feat/add-my-first-quote

### 220.1

git checkout -b feat/add-my-first-quote

#### HINTS

- hint

## 230. mkdir <username>

### 230.1

mkdir <username>

#### HINTS

- hint

## 240. touch <username>/my_quotes.json

### 240.1

touch <username>/my_quotes.json

#### HINTS

- hint

## 250. Add first quote

### 250.1

Make an array in your JSON file with one object in it. The one object should `quote` and `author` keys. Find an inspirational quote you like an put the value in for the quote an author. It can be a quote from you or anyone.

#### HINTS

- hint

## 260. git status

### 260.1

git status

#### HINTS

- hint

## 270. git add .

### 270.1

Add your changes to staging

#### HINTS

- hint

## 280. git status

### 280.1

git status

#### HINTS

- hint

## 290. git commit feat: add <username>'s first quote

### 290.1

commit your changes with: git commit -m "feat: <username>'s first quote

#### HINTS

- hint

## 300. git log -3

### 300.1

`git log -3` View the last four logs

#### HINTS

- hint

## 310. git push origin feat/add-my-first-quote

### 310.1

no 2fa, email can't be set to private `git push origin feat/add-my-first-quote`

#### HINTS

- hint

## 320. Create PR

### 320.1

Create a PR - back on github, go to your repo if you aren't there - 

#### HINTS

- Hint
- The message might not be there if you waited a while. In that case, click `Pull requests` at the top, then the green `New pull request` button, set the click the `compare across forks` button and set the branch to what is described in the instructions above.
