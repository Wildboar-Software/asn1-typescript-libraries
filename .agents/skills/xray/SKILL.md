---
name: xray
description: |
  Help the user understand the code on an (almost) line-by-line basis by
  interspersing explanatory comments.
icon: scan-eye
color: magenta
license: MIT
full-license-text: | 
  MIT License
  
  Copyright (c) 2026 Jonathan M. Wilbur
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
---
# Code X-Ray Skill

This skill litters code with explanatory comments on a nearly line-by-line basis
to clarify what some code is doing.

For example, this skill might change something like this:

```c
int maxchar(char *bytes, int byte_len) {
    int cur = 0;
    for (int i = 0; i < byte_len; i++) {
        if (bytes[i] > cur)
            cur = bytes[i];
    }
    return cur;
}
```

Into this:

```c
int maxchar(char *bytes, int byte_len) {
    // The highest byte value we have encountered so far.
    // This is like the current "high score."
    int cur = 0;
    // Iterate over every byte in `bytes`
    for (int i = 0; i < byte_len; i++) {
        // If the current byte is larger than the current "high score"...
        if (bytes[i] > cur)
            // ...update the "high score"
            cur = bytes[i];
    }
    // Return the "highest score" encountered among all `bytes`
    return cur;
}
```

## When to Use

When specifically requested by a user, although this skill may be recommended
to the user if he seems to be having a hard time understanding the code. This
skill is useful for reviewing complex code.

## Terminology

Throughout this skill text, the following definitions apply:

- "User" refers to the person invoking the skill.
- "Agent" refers to the AI coding agent that is executing this skill.
- "Running locally" means that this skill is being invoked on somebody's
  personal or work computer, in contrast to a host that is assumed to be
  "owned" by the AI coding agent.
- "In the cloud" means that this skill is being invoked on a host that is
  assumed to be "owned" by the AI coding agent--such as the hosts on which
  Cursor's Cloud Agents run--rather than the invoking user.

## Caution

The "running locally" / "in the cloud" distinction is important, because we want
to exercise more caution when doing things on some person's computer, both
because doing so runs the risk of harming their computer (as opposed to some
ephemeral host) and it may result in actions that inadvertently--yet
illegitimately--impersonate them (e.g. commits being created and signed with
their PGP key).

## Invocation

This skill must be invoked with some particular code file(s), unless the
codebase has a single code file, in which case, that single file is implicitly
chosen. The file selection MAY (inclusively) be expressed as a glob of files or
as a relative or absolute file path and it MAY include POSIX-like aliases like
`~` for the home directory or variables like `%userprofile%` in Windows
environments.

A simple invocation may look like this:

```
/xray parser.c
```

In the above case, the commenting procedures (described below) shall be executed
upon that file in whatever commit is currently checked out, and it shall apply
to any uncommitted changes as well.

This skill may be invoked with a PR number, PR title, PR URL, or other PR
identification, and the agent shall execute the commenting procedures (described
below) on the latest commit of this PR, resulting in a new commit being added to
that PR.

Such an invocation may be as simple as this:

```
/xray parser.c in pr 42
```

The invoking user may alternatively request the creation of a new branch
(usually to avoid cluttering the the branch they are actually inspecting).
Simply including the word "branch" in the invocation is enough, unless it is
obvious that the word is included as part of another sentence, a ref name,
etc.

For example:

```
/xray parser.c in pr 42 as a branch
```

This shall create a branch named whose name is `xray/` followed by the
commit hash.

The user may name a specific commit, perhaps by its hash, tag, or some other
name like `HEAD`, `HEAD~2`, etc. If a specific commit is named, assume the
user wants the branching approach.

For example:

```
/xray parser.c in 91196029005a7cde45623c7b06777ac88dec5547
```

The invoking user may also name specific functions, classes, or even line
ranges of code (or configuration) within a file. For example:

```
/xray the postgresdb service in k8s/services.yml in pr 43 as a branch
/xray the virtual server configuration for api.foobar.com in nginx.conf
/xray is_valid_email in validation.rs in HEAD~3
/xray lines 34-59 in horsetinder.lua
```

## Undo

If this skill's invocation has left behind comments that are uncommitted
changes, the user may undo them by simply saying "undo" after another invocation
like so:

```
/xray undo
```

"Undo" takes all of the same paramters as the implicit "do."

When invoked like this, the comments added from the prior invocation MUST be
removed. If the prior invocation cannot be determined, prompt for specifics,
and abort if that is not possible.

## Commenting Procedures

Within the spans of text identified in the files named in the invocation,
execute the following procedures.

If the language of the file

Read the code and attempt to understand what it is doing, possibly with the use
of tools such as MCP servers. Understand what the locals, parameters, members of
classes, etc. mean. Attempt to understand not just _what_, but _why_ each line
of code exists.

You may enhance your understanding using tools. For example, if the user
provided a Jira bug identifier in describing what is being commented on, attempt
to read the description from that work item to inform your annotations. As
another example, if a user provided a URL to some documentation, you may fetch
it and read it. You may even read other documentation not explicitly mentioned
if you are confident that you can find it without too much wasted effort.
Generally, you only need to do this when something seems "business-specific."
For example, you do not need to research the user's concept of a "purchase
order" just to annotate a function that simply sorts purchase orders by ID,
since that is _behaviorally_ generic, even though it is applied to something
business-specific.

With this understanding, apply comments to the code (or configuration) that
describe what each "part" of the code is doing. Here, "part" does not mean
each line; annotating each line is not necessary, and even undesirable.

Some lines are trivial, such as lines with closing braces alone. Some other
regions of code are visually and functionally similar, so they can be covered
by a single comment.

```js
// Invoke the .register() method for each plugin. Ordering does not matter.
registerPlugin(authentication);
registerPlugin(themes);
registerPlugin(horseDating);

// Constants representing payment types
const PT_CC = 0;
const PT_CASH = 1;
const PT_DULAMAN = 2;
```

Extremely obvious code does not need to be annotated. For example, do not
annotate this:

```js
const customer = getCustomerById(id);
```

...unless `customer` can be null; in this case:

```js
// customer may be null, technically, but we already validated and cached it
// so this should never be null.
const customer = getCustomerById(id);
```

Other examples of code not needing annotations are things like adding two
numbers to produce a sum, especially when variables are well-named:

```js
const totalLength = tagLength + valueLength;
```

In describing heavily "algorithmic" code, such as code traversing trees, using
bloom filters, substring searches, malloc implementations, etc., feel free to
be quite verbose with comments, even generating ASCII diagrams to visually
enhance your explanation.

## Restrictions

Do NOT alter the code at all, other than by adding comments. Do not even apply
any whitespace formatting changes unless it is _required_ by the syntax of the
language to do so to add comments. Adding newlines within and after comments is
acceptable, however, if the language permits.

Do NOT stash or discard files to make a commit or branch. If there are
uncommitted changes, stop and prompt for what to do. If promting for a decision
is not available, simply abort. We do not want to clobber the user's work or
confuse them.

If running locally rather than as a cloud agent (or on some sort of ephemeral
host dedicated for this purpose), do NOT make commits unless explicitly asked
to (this is implied by a request to create a branch, however).

The only mutating version control operations allowed by this skill are
committing, fetching, branching, and pushing _only_ the commits and branches
created as a result of this skill's invocation. Do not merge, pull, or
cherry-pick anything as part of this skill's invocation.

Explicit user-provided instructions may override any of these restrictions.
