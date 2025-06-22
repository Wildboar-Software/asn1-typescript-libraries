# X.500 in TypeScript

TypeScript implementation of the ASN.1 data structures and PDUs defined in the
X.500 series of recommendations published by the
[International Telecommunication Union's (ITU)](https://www.itu.int/en/Pages/default.aspx).

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

This library only implements the ASN.1 data structures and PDUs defined in these
specifications, as well as subset of the business logic, such as:

- Matching Rules
- Context Matching
- Stringifying
- Comparison
- Filter evaluation

The protocols whose PDUs and data structures are implemented in this library
are (inclusively):

- Directory Access Protocol (DAP) - Which is used for reading X.500 directories.
- Directory Information Shadowing Protocol (DISP) - Which is used for replicating X.500 directories.
- Directory System Protocol (DSP) - Which is used for X.500 directories to read other X.500 directories.
- Directory Operational Binding Management Protocol (DOP) - Which manages rules for how X.500 directories interact.
- Certificate Authority Subscription Protocol (CASP)
- Authorization Validation Management Protocol (AVMP)
- Trust Broker Protocol (TBP)

This documentation will not discuss how to use the compiled ASN.1 definitions
found under the `modules` folder. This will only detail how to use everything
else provided by this library. To see this general ASN.1 serialization
documentation, go
[here](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md).

## Basic Access Control

Utilties for evaluating Basic Access Controls are present in `src/lib/bac`.

- `bacACDF.mts` - This exports `bacACDF` which is the Basic Access Control (BAC)
  Access Control Decision Function (ACDF) described in ITU Recommendation X.501.
- `deniesAccess.mts` - This exports the function `deniesAccess`, which takes an
  ACDF tuple and determines if it denies access or grants access. This is a part
  of the ACDF.
- `discardNonRelevantACDFTuples.mts` - Exports the function
  `discardNonRelevantACDFTuples`, which filters out the ACDF tuples that are not
  relevant to the current authorization request.
- `getACDFTuplesFromACIItem.mts` - Exports the function
  `getACDFTuplesFromACIItem`, which converts `ACIItem`s into "ACDF tuples,"
  which are described in ITU Recommendation X.501.
- `grantsAccess.mts` - The opposite of `deniesAccess.mts`.
- `itemIsProtected.mts` - Exports the function `itemIsProtected` that can be used
  to determine a subject of an authorization request is covered by an ACI item's
  `ProtectedItems`.
- `operationPermitted.mts` - Exports the function `operationIsPermitted`, which
  is the last step of the BAC ACDF: this function evaluates whether the
  operation is permitted by checking that at least one relevant ACDF tuple
  grants access and that none deny access.
- `splitGrantsAndDenials.mts` - Exports the function `splitGrantsAndDenials`,
  which splits a `GrantsAndDenials` `BIT STRING` into two separate
  `GrantsAndDenials` `BIT STRING`s, where one contains only the set granting
  bits and the other contains only the set denying bits.
- `userWithinACIUserClass.mts` - Exports the function `userWithinACIUserClass`
  which determines whether a user falls within an `ACIItem`'s `UserClasses`.

Here is an example for how you would use the functions exported from this
folder to evaluate the Basic Access Controls for a given authorization request:

```typescript
// relevantACIItems is an array of the relevant ACIItems.
// We want to convert the ACIItems to ACDF Tuples right away.
const acdfTuples: ACDFTuple[] = relevantACIItems
    .flatMap((aci) => getACDFTuplesFromACIItem(aci));

// We determine which ACDF tuples are relevant to the user + request + subject, etc.
const relevantTuples: ACDFTupleExtended[] = (await Promise.all(
    acdfTuples.map(async (tuple): Promise<ACDFTupleExtended> => [
        ...tuple,
        await userWithinACIUserClass( // The resolved value of this is tuple[5].
            tuple[0],
            boundNameAndUID,
            targetDN,
            equalityMatcherGetter, // Takes an attribute type and returns a function that can compare two values.
            isMemberOfGroup, // An async function that takes a user group and user and resolves if the user is a member.
        ),
    ]),
))
    .filter((tuple) => (tuple[5] > 0)); // Only keep extended tuples for which the user fell within the `UserClasses`.

// Finally, we can evaluate if the request is authorized, based on the relevant
// ACDF tuples.
const {
    authorized,
} = bacACDF(
    relevantTuples, // NOTE: These are not of type `ACDFTuple`. They are `ACDFTupleExtended`.
    authLevel, // The AuthenticationLevel of the request.
    {
        // objectClasses is an array of object identifiers that identify the
        // object classes of the entry to which authorization is sought.
        entry: objectClasses,
    },
    [
        PERMISSION_CATEGORY_ADD,
    ],
    equalityMatcherGetter,
);

if (authorized) {
    console.log("Authorized!");
} else {
    console.log("Not authorized!");
}

```

You might wonder: why is this access control checking split among these three
functions? Access controls are typically checked several times throughout an
operation. For instance, when adding an entry, access controls are checked to
ensure that the user has permission to add the entry, but also to write every
attribute and value the user has supplied. Because the ACDF will be called
multiple times, it makes sense to optimize performance by re-using anything that
we can between evaluations.

Computing which tuples are "relevant" is asynchronous (namely because looking
up members of a group may involve a network request or database read), and could
be computationally expensive, so it makes sense to break it out into a separate
function and determine which tuples are relevant only once, then re-use those
tuples for every decision point for which those tuples are still relevant.

## Collections

- `attributes.mts` contains compiled information objects of class `ATTRIBUTE`.
- `contexts.mts` contains compiled information objects of class `CONTEXT`.
- `ldapSyntaxes.mts` contains compiled information objects of class `SYNTAX-NAME`.
- `matchingRules.mts` contains compiled information objects of class `MATCHING-RULE`.
- `nameForms.mts` contains compiled information objects of class `NAME-FORM`.
- `objectClasses.mts` contains compiled information objects of class `OBJECT-CLASS`.

## Comparators

This folder contains functions for comparing two things of like type. Each
function returns `true` if the two things are equal and `false` if they are not.

The contents of this folder will not be listed here, because it will change
throughout time.

## Directory Access Protocol

The folder `src/lib/dap` contains code that is specifically useful to the
Directory Access Protocol (DAP):

- `errors.mts` - This exports all of the errors defined in ITU Recommendation
  X.511, which inherit from `Error` and can be thrown.
- `extensions.mts` - This exports information about the critical extensions
  `BIT STRING` defined in ITU Recommendation X.511.
- `sort.mts` - This exports the function `sort`, which sorts two
  `EntryInformation` objects as provided by paged results requests, which is
  described in ITU Recommendation X.511.

## Distributed Operations

Code for dealing with distributed operations can be found in
`src/lib/distributed`.

- `compareSocketToNSAP.mts` - Exports `compareSocketToNSAP`, which determines if
  an NSAP matches a TCP socket.
- `ipv4.mts` - Exports `ipv4FromNSAP` and `ipv4ToNSAP` which convert IPv4 addresses
  to NSAPs and back, respectively.
- `loopDetected.mts` - Exports the function `loopDetected`, which takes
  `TraceInformation` (as described in ITU Recommendation X.518) and returns a
  boolean indicating whether that trace information indicates a loop.

## Matching Rules

The folder `src/lib/matching` contains functions that implement the logic of
the matching rules described in ITU Recommendation X.520 and elsewhere.

There are four sub-folders within: `equality`, `ordering`, `substring`, and
`context`, which implement the logic of selected equality, ordering and
substring matching rules, respectively. `context` contains code for comparing
context values.

Each function within `equality` has type `EqualityMatcher`. Each function takes
two `ASN1Element`s and returns a `boolean` indicating whether the two values are
equal.

Each function within `ordering` has type `OrderingMatcher`. Each function takes
two `ASN1Element`s and returns a `number` that indicates whether two values are
equal, or whether the first or second value is greater. This `number` is used
in the same way that the return value from the predicate function used in
JavaScript's `Array.sort(predicate)` is used.

Each function within `substring` has type `SubstringsMatcher`. Each function
takes two `ASN1Elements`s and the type of substring selection (`initial`,
`final`, `any`, etc.) and returns a `boolean` indicating whether that substring
is present.

## Stringifiers

Functions exported from `stringifiers` can be used to convert certain types to
and from `String`.

As of this writing these functions are:

- `attributeTypeAndValueToString`
- `directoryStringToString`
- `distinguishedNameToString`
- `generalNameToString`
- `nameToString`
- `oidToAttributeName`
- `rdnSequenceFromString`
- `rdnSequenceToString`
- `relativeDistinguishedNameToString`
- `teletexToString`

Hopefully their function is obvious by their names.

## Types

There are more types than what follows, but the types excluded from this list
are either deprecated or not intended for external use:

- `ACDFTuple.mts` - An ACDF Tuple, as defined in ITU Recommendation X.501.
- `ACDFTupleExtended.mts` - An extension of an ACDF Tuple, with another element for indicating which user class matched.
- `ApproxMatcher.mts` - A function that _approximately_ evaluates an equality matching rule against a value.
- `AttributeTypeValueAndContextsTuple.mts` - A three-element array containing an attribute type, value, and contexts.
- `ContextMatcher.mts` - A function that evaluates an assertion against a context.
- `EqualityMatcher.mts` - A function that evaluates an equality matching rule against a value.
- `OrderingMatcher.mts` - A function that evaluates an ordering matching rule against a value.
- `ProtectedItem.mts` - A type representing the object of an authorization request.
- `StringDecoder.mts` - A function that converts an LDAP string into an `ASN1Element`
- `StringEncoder.mts` - A function that converts an `ASN1Element` to an LDAP string
- `SubstringSelection.mts` - An enum describing a subset of a string to be matched in a substrings match.
- `SubstringsMatcher.mts` - A function that evaluates an substrings matching rule against a value.

## Utilities

- `boundariesOfPeriodOccurrence.mts` - Get bounds of an occurrence in a period in which a point in time occurs.
- `checkNameForm.mts` - Evaluate the compliance of an RDN to a name form
- `compareCode.mts` - Compare two Remote Operation Service Element (ROSE) Operation Codes
- `dateIsBetweenDayTimeBand.mts` - Determine if a point in time occurs between a day time band
- `defaultEntryInformationSelection.mts` - Convenience default value for EntryInformationSelection.
- `determineStructuralObjectClass.mts` - Determine the structural object class among a set of object classes
- `dnWithinGeneralSubtree.mts` - Determine whether a distinguished name falls within a `GeneralSubtree`.
- `dnWithinSubtree.mts` - Determine whether a distinguished name falls within a subtree
- `dnWithinSubtreeSpecification.mts` - Determine whether a distinguished name falls within a subtree specification.
- `evaluateContextAssertion.mts` - Evaluate a `ContextAssertion`
- `evaluateFilter.mts` - Evaluate a `Filter`
- `getAttributeSize.mts` - Get the size of an attribute
- `getAttributeTypesFromFilter.mts` - Get the attribute types mentioned in a `Filter`
- `getAttributeTypesFromFilterItem.mts` - Get the attribute types mentioned in a `FilterItem`
- `getDateFromTime.mts` - Get a native ECMAScript `Date` from an X.509 `Time` value
- `getMatchingRulesFromFilter.mts` - Get the OIDs of matching rules used in a `Filter`
- `getOptionallyProtectedValue.mts` - Where `op` is `OPTIONALLY_PROTECTED<T>`, get `T`
- `getRDN.mts` - Get the relative distinguished name from a distinguished name.
- `getValueTuplesFromAttribute.mts` - Get type-value-context tuples for an attribute
- `groupByOID.mts` - Group items by object identifier
- `isModificationOperation.mts` - Determine whether an operation is a modification operation
- `objectClassesWithinRefinement.mts` - Determine whether object classes match a refinement
- `prepString.mts` - Prepare a string for matching, per ITU Recommendation X.520, Section 7.
- `selectFromEntry.mts` - Select information from an entry to produce `EntryInformation`
- `splitIntoMastersAndShadows.mts` - Group access points into masters and shadows
- `validateObjectClasses.mts` - Validate a set of object classes

## ESM-Only

As of June 12th, 2025, this module is only compiled to ESM. CommonJS will no
longer be supported.

## Footnote

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).
