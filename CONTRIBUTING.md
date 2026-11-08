# Contributing to Orgkeep

Thank you for your interest in Orgkeep. This repository is the website, https://orgkeep.org: a fix of a typo or a
broken link is welcome as a pull request. For a larger change of the content, open an issue first.

Security vulnerabilities in Orgkeep: never in a public issue. Use *Report a vulnerability* in the *Security* tab of
the repository concerned, which keeps the report private.

## Sign off your commits (DCO)

Orgkeep uses the [Developer Certificate of Origin](https://developercertificate.org) (DCO) instead of a contributor
license agreement. By signing off a commit, you certify that you wrote it, or that you have the right to submit it
under the license of the project.

Sign off each commit with `-s`:

```
git commit -s -m "Fix the link to the demo stack"
```

Git adds a line with the name and email of your Git configuration, which must match the author of the commit:

```
Signed-off-by: Jane Doe <jane@example.com>
```

A check fails on the pull request if a commit is not signed off. To fix the last commit, `git commit --amend -s`; for
all the commits of your branch, `git rebase --signoff main`, then push your branch again with `--force-with-lease`.

Contributions are licensed under the [Apache License 2.0](LICENSE), like the rest of the project (section 5 of the
license).

## Pull requests

- The site is plain HTML and CSS, without a build step: open `index.html` in a browser, or serve the folder with
  `python3 -m http.server 8000`, and check the page at desktop and phone widths.
- One change per pull request, on a branch created from `main`; bring `main` in with a rebase, not a merge. A pull
  request is squashed into one commit, unless its commits are clean and each makes sense on its own: they are then
  merged as they are.
