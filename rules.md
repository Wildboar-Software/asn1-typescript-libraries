# Instructions for Coding Agents

These are coding instructions for programming in TypeScript. If using a
different programming language, apply these principles to the extent possible
without running afowl of any standard formatting (such as the formatting
produced by `go fmt` in Golang).

## Use parentheses to group boolean logic expressions, even when precedence is obvious

Example:

```typescript
const isAuthorized = (
    (user.role === "admin")
    || (user.role === "moderator")
);
```

Counter-examples:

```typescript
// Yes, it is obvious what this does, but it could be interpreted as
// user.role === ("admin" || user.role === "moderator") or
// (user.role === "admin" || user.role) === "moderator"
const isAuthorized = user.role === "admin" || user.role === "moderator";

// A much less obvious example. Is this a ternary expression or an OR
// expression that contains a ternary subexpression on the right-hand side?
const isAuthorizedToEditComments = user.role === "admin"
    || user.otherRoles
    ? other.otherRoles.includes("moderator")
    : undefined;
```

The rationale for this is that humans sometimes make mistakes of precedence.
Even though you are a coding agent, fallible humans might edit your code or
interpret it, so being unambiguous is important.

You do not have to put parentheses around expressions that consist of a single
symbol or function invocation, even if it is negated or double-negated (to
coerce it to a `boolean`). This is fine:

```typescript
const isAuthorized = !user.isBanned;
```

And this is fine as well:

```typescript
const isAuthorized = (
    !user.isBannedUntil(new Date())
    || (user.role === "moderator")
    || !!user.promotionTimestamp
);
```

## Write code that produces more legible diffs

When writing conditions that consist of multiple expressions combined with a
logical AND (`&&`) or OR (`||`), put the parentheses and each condition on
new lines of their own.

Example:

```typescript
const isAuthorized = (
    (user.role === "admin")
    || (user.role === "moderator")
);
```

Counter-example:

```typescript
const isAuthorized = ((user.role === "admin") || (user.role === "moderator"));
```

The logical operator MUST appear on the left-hand side of each subexpression.
This enhances legibility, because programmers tend to look at the left-hand
side of the code more, but it also means that the previous line does not have
to be modified to add a new condition, which produces smaller diffs. Here is
a counter example:

```typescript
const isAuthorized = (
    (user.role === "admin") ||
    (user.role === "moderator")
);
```

If you wanted to add the condition `user.isAdmin` to the counter-example above,
you would have to add a `||` at the end of the last expression, then add a new
line for the new subcondition. Two lines had to be modified when this could
have been a single-line diff if the operators were kept on the left-hand side.

You do not have to do this when the expression is really simple and small. If
the entire expression manages to fit within an 80-character line length limit,
and if the expression is not likely to change in the future, you can put it
all on one line, like so:

```typescript
const isIndentationCharacter = ((c === "\t") || (c === " "));
```

The same logic applies to objects and function arguments. Separate all
arguments and object fields by newlines, and use trailing commas so that
additions do not require changing semantically unrelated lines.

Example:

```typescript
const person = {
    username: "jwilbur",
    age: 33,
};
```

In the example above, we can add a new field to the end of this object without
touching the `age` line.

The same goes for function invocations. Here is an example:

```typescript
applyClusterUpdate(
    cluster,
    update,
);
```

In the example above, if we decide to add a `deferUntil` parameter after
`update`, we do not have to modify the line with `update`. This makes the diff
smaller.

Ternaries follow the same principles. Please write them like this:

```typescript
const displayedRole = (user.role === "admin")
    ? "Administrator"
    : "Peasant"
    ;
```

Finally, when writing functional-style code, place each "stage" on a new line
and put the semi-colon (if any) on a line of its own.

```typescript
const authorizedUserIds = users
    .map((user) => user.id)
    .filter((id) => isAuthorized(id))
    ;
```

The rationale for this is that we can add additional `filter()`, `map()`,
`reduce()`, etc. "stages" to the expression without editing previous lines.

Exceptions are made for the above principles for things that are "small."
Small objects, simple function invocations, and simple functional programming
that all fits comfortably on one line can be written on one line.

Examples:

```typescript
const user = { username: "jwilbur" };
applyClusterUpdate(cluster, update);
const userIds = users.map((user) => user.id);
```

## Variable and Parameter Naming

If a variable or parameter names a data structure, any meaning imputed to the
structure that isn't obvious should be part of the parameter name.

If the variable is an array, and the ordering of elements is significant, the
variable name should include something to indicate what this ordering is
expected to be, including the term "ascending" or "descending" if there is an
obvious sorting behavior to the array items or the field within these items
that is used as the sort key. For example: `usersSortedByAgeAscending`. A
variable that is an array should always be named with a plural noun unless
its name includes "array" or "list."

If the variable is a `Map`, `Set`, `WeakSet`, `WeakMap`, `Object` being used
like a `Map` or `Set`, or any other data structure that provides some sort of
generic key-value lookup, and if the key is a primitive type, such as a
`string` or `number` or some type that represents binary data, the variable
name should clarify what the formatting of the string or bytes is, or where
the `number` comes from. For example: prefer a name like `usersByEmailAddress`
instead of `users` to refer to a `Map` whose keys are email addresses.

Once named as such, a variable should never be modified by reference in such
a way that contradicts its name. For example, no code should push a user object
to the end of an array called `usersSortedByAgeAscending` if doing so would
make the array no longer sorted by ascending age.

In small arrow functions, parameter names SHOULD be extremely small, sometimes
just a single character.

Example:

```typescript
const authorizedUsers = emailAddresses.filter((e) => isAuthorized(e));
```

While `e` is non-descript, the example above is fine because `e` is used on the
same line on which it is defined, so a human reading this code would be able to
see and understand the data type of `e` without searching or scrolling.

In functions that compare or sort values of the same type, it is fine to refer
to them as `a` and `b`, `this` and `other`, or other similar "meaningless"
naming schemes.

## Never "re-throw" errors

Never convert a thrown error into another thrown error.

```typescript
try {
    const emailAddress = parseEmailAddress(emailString);
} catch {
    throw new Error("invalid email address");
}
```

Doing this only suppresses the true origin of the problem.

## Fail Loudly

Do not "silently fail."

Counter-example:

```typescript
const url = user.getHomePage() ?? "";
openNewBrowserWindow(url);
```

In the example above, the variable `url` insinuates that it is a `string` or
`URL`, but if `user.getHomePage()` returns a falsy value, we set it to `""`.
`openNewBrowserWindow`, which requires a URL in this example, will receive
an invalid input in this case. Instead, if `url` is truly required, an error
should be thrown or some kind of obvious error result should be returned.

Example:

```typescript
const url = user.getHomePage();
if (!url) {
    throw new Error(`unable to get homepage for user ${user.id}`);
}
openNewBrowserWindow(url);
```

## Use type and variable aliases to convey meaning

Even if it seems trivial, use aliases to make code "self-documenting."

For example:

```typescript
type PunycodedDNSName = string;

function getSMTPServerName(domainName: PunycodedDNSName): PunycodedDNSName | null {
    // ...
}
```

In the example above, even though `PunycodedDNSName` is just a `string`, its
name alone clarifies that the string must be punycoded. Even though it is
harder to look at the code and understand the underlying type, it "forces"
the developer to "drill into" the type. Further, you can apply JSDoc comments
to type aliases to convey additional information.

As another example, when a variable is nullable, it should be named to reflect
this until the null case has been ruled out. For example:

```typescript
const maybeUser = await db.findUser({ id: 5 });
if (!maybeUser) {
    throw new Error("no such user");
}
const user = maybeUser; // We rename this to reflect the fact that it is no longer "maybe."
```

## Use standard codes

Prefer codes defined by standards bodies wherever possible, and if there are no
such codes defined, try to use something that already exists as a standard. For
example, for country identifiers, use ISO 3166 country codes. If classifying
pets, use all lowercased genus names from the Linnaean taxonomy; for example use
`canis` and `felis` to refer to dogs and cats respectively. This is better than
defining an `enum`, because some people might have weird pets, such as a
starfish, and it would be impossible to define an enum variant for each possible
pet type. As another example, if defining error codes, try to parallel error
codes used in existing, widespread protocols, such as using an error code 403
represent an authorization error just like how 403 is used to represent
"forbidden" in HTTP.

## Use all lowercase logging and error messages

Use all lowercase characters in logging and error messages, except when referring to
defined symbols, function names, etc.

## Implement APIs the way others have

When implementing APIs, defer to the expertise embodied in existing popular
software projects. For example, if implementing a data type that represents a
range of some kind, consider modeling its API after the VS Code Extensions
API's `Range` class, and give the type functions like `intersection` and
`union` as such, unless you believe they will not be used.

## Prefer Map and Set over objects, unless serialization matters

Unless serialization is required, prefer `Map` and `Set` over plain objects
when mapping keys to values, ensuring uniqueness, etc. These are faster and
purpose-built for these use cases... but they do not serialize gracefully to
JSON, so keep that use case in mind.

## Extract constants out as constants

You should not define data structures that get repeatedly instantiated within
a function body.

Counter-example:

```typescript
function isAuthorized(userRole: string): boolean {
    return ["admin", "moderator"].includes(userRole);
}
```

Do this instead:

```typescript
const AUTHORIZED_ROLES: string[] = ["admin", "moderator"];

function isAuthorized(userRole: string): boolean {
    return AUTHORIZED_ROLES.includes(userRole);
}
```

## Beware time and space complexity

Always consider what gigantic or maliciously-crafted user inputs could do to
computer-time or memory requirements. Do not trust user inputs or assume that
they will always be small or reasonable. Use techniques like truncation,
less-correct-but-more-efficient techniques as a fallback, or just returning
errors upon unreasonable inputs. For example, if you have to do a many-to-many
comparison, where hashing is not possible, the `O(n^2)` approach is acceptable
if you constrain the size of the inputs; beyond this constraint, you may fall
back upon a "dumb method" such as hashing that is not entirely accurate. Ensure
that this "dumb" code is separated so that it can be tested easily and have
breakpoints applied.

TODO: Note the utility of "breakpoint functions"

## Destructure Early

In functions that receive plain objects as inputs, destructure them before use.
This is to avoid changes to the internal structure of the object from impacting
a lot of code.

As a counter example:

```typescript
function getDisplayedContactInfo(employee): string {
    return (
        employee.contactInfo.workPhone
        || employee.contactInfo.mobilePhone
    );
}
```

In the above code, if `contactInfo` is renamed to `contact`, the code now
has to change in two places, compared to this:

```typescript
function getDisplayedContactInfo(employee): string {
    const { contactInfo: { workPhone, mobilePhone } } = employee;
    return workPhone || mobilePhone;
}
```

In other words, if the function has no reason to care about the structure of
the object, get rid of that structure: flatten the object into local variables
by destructuring it.

This does not apply to class objects, which are generally defined because
there is some functionality bundled with these objects. This does not need to
be done for extremely simple functions, either.

## Use options objects instead of lots of parameters

If a function takes a lot of parameters, put all of the optional ones in an
`options` object. By using an object, the parameters can appear in any order.

Counter example:

```typescript
updateUser(
    username,
    data,
    undefined,
    undefined,
    undefined,
    true,
);
```

The above is ugly and its not clear visually what parameters all of those
`undefined`s are filling in.

This example is much more readable and future-proof:

```typescript
updateUser(
    username,
    data,
    { invalidateCache: true },
);
```

## For strings of a particular format, use Typescript template literal types and/or branded types

Template literal types are more strict. They should be used to enforce
correctness of strings at compile-time.

Example:

```typescript
type EmailAddress = `${string}@${string}`;
type UnitedStatesPhoneNumber = `+1 (${number}) ${number}-${number}`;
type ISODate = `${number}-${number}-${number}`;
```

Branded types are also encouraged to enforce validation.

Example:

```typescript
type UserId = string & { readonly __brand: unique symbol };
function parseUserId(value: string): UserId {
    if (!isValidUserId(value)) throw new Error("Invalid user ID");
    return value as UserId;
}
```

From then onwards, functions can be defined to take `UserId` as a parameter,
and therefore, that strings have gone through some semblance of validation
prior to being used as a `UserId`.

## In APIs that provide lookups, provide functions, not data structures


## Be choosy in what APIs are exposed


## Prefer pure functions


## Use branchless code if possible


## Always put code blocks in brackets, even if it is just a single statement
