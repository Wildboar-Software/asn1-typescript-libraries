import { OBJECT_IDENTIFIER, TRUE_BIT } from "asn1-ts";
import discardNonRelevantACDFTuples from "./discardNonRelevantACDFTuples";
import type ACDFTuple from "../types/ACDFTuple";
import type ProtectedItem from "../types/ProtectedItem";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import type {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import userWithinACIUserClass from "./userWithinACIUserClass";
import splitGrantsAndDenials from "./splitGrantsAndDenials";
import type { GrantsAndDenials } from "../modules/BasicAccessControl/GrantsAndDenials.ta";

// * As ITU Recommendation X.501 (2016), Section 18.8.4 specifies, the order of
// * specificity is as such (in order of ascending specificity):
// *
// * - `allUsers`
// * - `subtree`
// * - `userGroup`
// * - `name` and `thisEntry` (both having equal precedence)
// *
// * This means that, if you have to sort `UserClasses`, sort them by return
// * values in this order of precedence: `1 = 2 > 3 > 4 > 0`.
// *
function rankOfTagOfMatchingUserClass (tag: number): number {
    return [
        0, // allUsers is the most generic
        3, // thisEntry
        3, // name
        2, // userGroup
        1, // subtree
    ][tag] ?? 0;
}

function specificityOfProtectedItem (
    request: ProtectedItem,
    pi: ProtectedItems,
): number {
    if ("entry" in request) {
        return 0;
    } else if ("attributeType" in request) {
        return (pi.attributeType && (pi.attributeType.length > 0))
            ? 1
            : 0;
    } else if ("value" in request) {
        return (
            (pi.attributeValue)
            || (pi.selfValue)
            || (pi.rangeOfValues)
        )
            ? 1
            : 0;
    } else {
        return -1;
    }
}

export const PERMISSION_CATEGORY_ADD: number = 0;
export const PERMISSION_CATEGORY_DISCLOSE_ON_ERROR: number = 1;
export const PERMISSION_CATEGORY_READ: number = 2;
export const PERMISSION_CATEGORY_REMOVE: number = 3;
export const PERMISSION_CATEGORY_BROWSE: number = 4;
export const PERMISSION_CATEGORY_EXPORT: number = 5;
export const PERMISSION_CATEGORY_IMPORT: number = 6;
export const PERMISSION_CATEGORY_MODIFY: number = 7;
export const PERMISSION_CATEGORY_RENAME: number = 8;
export const PERMISSION_CATEGORY_RETURN_DN: number = 9;
export const PERMISSION_CATEGORY_COMPARE: number = 10;
export const PERMISSION_CATEGORY_FILTER_MATCH: number = 11;
export const PERMISSION_CATEGORY_INVOKE: number = 12;

/**
 * The return type of an Access Control Decision Function (ACDF).
 */
export
interface ACDFReturn {
    /**
     * Whether the ACDF authorized the request.
     */
    readonly authorized: boolean;
}

/**
 * The return type of the Basic Access Control (BAC) / Simplified Access Control
 * (SAC) ACDF.
 */
export
interface BACACDFReturn extends ACDFReturn {
    /**
     * The ACDF tuples that were determined by the function to be relevant.
     */
    readonly relevantTuples: ACDFTuple[];
    /**
     * The subset of ACDF tuples selected by being of the highest precedence.
     */
    readonly precedentTuples?: ACDFTuple[];
    /**
     * The subset of ACDF tuples selected by targeting the most specific user
     * class.
     */
    readonly mostUserSpecificTuples?: ACDFTuple[];
    /**
     * The subset of ACDF tuples selected by targeting the most specific items.
     */
    readonly mostItemSpecificTuples?: ACDFTuple[];
}

/**
 * @summary The Access Control Decision Function for X.501 Basic Access Control.
 * @description
 *
 * This function is an implementation of the Access Control Decision Function
 * (ACDF) defined in the International Telecommunication Union's (ITU)
 * Recommendation X.501 (2016 version), Section 18.8. This function can be used
 * to implement both Basic Access Control and Simplified Access Control.
 *
 * ### Performance
 *
 * Because this function may be called dozens of times for a single request to
 * an entry and all of its attributes, it is important for it to be performant.
 * For this reason, this function does not accept ACI items directly, but the
 * pre-processed ACDF tuples that are trivially produced from ACI items to avoid
 * recomputing these tuples. In addition, this function can avoid checking that
 * the ACDF tuples apply to the user by setting the
 * `tuplesAreAlreadyFilteredByUser` argument to `true`. This is implemented
 * so that the tuples can be filtered by their applicability to the current user
 * one time and re-used between calls to this function.
 *
 * **Performance Tip: Ensure that all precedence values for all ACI items are
 * unique to avoid the more computationally-expensive code paths.**
 *
 * This function is implemented almost exactly as it is defined in ITU
 * Recommendation X.501 (2016), section 18.8. As you read that recommendation,
 * the code of this function should clearly correspond.
 *
 * ### Compliance
 *
 * This function deviates from the specification in these ways:
 *
 * - The function `discardNonRelevantACDFTuples()`, which is called by this
 *   function, does not observe the `maxValueCount`, `maxImmSub`, `restrictedBy`
 *   or `contexts` constraints.
 * - If the authorization level is anything other than `basicLevels`, access is
 *   denied (because there's no way to know the semantics of any other option in
 *   advance).
 *
 * ### Parameters
 *
 * @param {DistinguishedName} administrativePoint The distinguished name of the
 *  administrative point in which the user resides.
 * @param {ACDFTuple[]} tuples The tuples of inputs to the ACDF as described in
 *  ITU Recommendation X.501, Section 18.8.2. An array of five items:
 *  `( userClasses, authenticationLevel, protectedItems, grantsAndDenials, precedence )`
 * @param {AuthenticationLevel} authLevel The authentication level of the user.
 * @param {NameAndOptionalUID} user The distinguished name and optional unique
 *  identifier of the user whose authorization is determined by this function.
 * @param {DistinguishedName} entryDN The entry that is the predicate of the
 *  ACDF, or whose attributes are. The entry to whose entirety or whose
 *  attributes the subject is seeking authorization.
 * @param {ProtectedItem} request The thing that is being requested, which can
 *  be an entry, attribute type, or attribute value.
 * @param {number[]} operations The bit indices of the permissions that are
 *  being requested, divided by two. The permissions come from the definition of
 *  `GrantsAndDenials`. For clarification, an operation of 3 indicates a request
 *  for the remove permission.
 * @param {function} getEqualityMatcher A function that takes an object
 *  identifier and returns another function (if one can be found) that can be
 *  used to compare two values of the same attribute type.
 * @param {function} isMemberOfGroup A function that takes a user group and user
 *  and returns a `boolean` indicating whether the user is a member of the group.
 * @param {boolean} tuplesAreAlreadyFilteredByUser Whether all of the tuples
 *  supplied to this function are already filtered to be only those related to
 *  the current user.
 * @returns An object whose `authorized` property is a `boolean` that indicates
 *  whether the request was authorized by this ACDF. All other properties of
 *  this object are for diagnostic purposes.
 *
 * @function
 */
export
function bacACDF (
    administrativePoint: DistinguishedName,
    tuples: ACDFTuple[],
    authLevel: AuthenticationLevel,
    user: NameAndOptionalUID,
    entryDN: DistinguishedName,
    request: ProtectedItem,
    operations: number[], // Index of bits in GrantsAndDenials / 2.
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => boolean | undefined,
    tuplesAreAlreadyFilteredByUser: boolean = false,
): BACACDFReturn {

    function operationPermitted (gad: GrantsAndDenials): boolean {
        return (
            operations.every((op) => gad[(op * 2)] === TRUE_BIT) // Every required "grant" bit is set.
            && !operations.some((op) => gad[(op * 2) + 1] === TRUE_BIT) // None of the corresponding "deny" bits are set.
        );
    }

    const tuplesSplitByGrantOrDenial = tuples
        .flatMap((tuple) => splitGrantsAndDenials(tuple[3])
            .map((gad): ACDFTuple => [
                tuple[0],
                tuple[1],
                tuple[2],
                gad,
                tuple[4],
            ]));
    const relevantTuples: ACDFTuple[] = discardNonRelevantACDFTuples(
        administrativePoint,
        tuplesSplitByGrantOrDenial,
        authLevel,
        user,
        entryDN,
        request,
        operations,
        getEqualityMatcher,
        isMemberOfGroup,
        tuplesAreAlreadyFilteredByUser,
    );

    /**
     * From ITU Recommendation X.501, Section 18.8.4:
     *
     * > Grant access if and only if one or more tuples remain[...]
     */
    if (relevantTuples.length === 0) {
        return {
            authorized: false,
            relevantTuples,
        };
    }

    // SORT BY PRECEDENCE
    const sortedByDescendingPrecedence = relevantTuples.sort((a, b) => b[4] - a[4]);
    const highestPrecedence = sortedByDescendingPrecedence[0][4];
    const betaIndex = sortedByDescendingPrecedence.findIndex((t) => (t[4] < highestPrecedence));
    const tuplesThatSurvivedStage1 = (betaIndex < 0)
        ? sortedByDescendingPrecedence // All were of the same precedence.
        : sortedByDescendingPrecedence.slice(0, betaIndex); // Select the most precedent.

    if (tuplesThatSurvivedStage1.length <= 1) {
        return {
            authorized: (
                (tuplesThatSurvivedStage1.length === 1)
                && operationPermitted(tuplesThatSurvivedStage1[0][3])
            ),
            relevantTuples,
            precedentTuples: tuplesThatSurvivedStage1,
        };
    }

    // SORT BY USER CLASS SPECIFICITY
    const sortedByDescendingUserClassSpecificity: [ ACDFTuple, number ][] = tuplesThatSurvivedStage1
        .map((tuple): [ ACDFTuple, number ] => [ tuple, userWithinACIUserClass(
            administrativePoint,
            tuple[0],
            user,
            entryDN,
            getEqualityMatcher,
            isMemberOfGroup,
        )])
        .filter(([ , tagThatMatched ]) => (tagThatMatched > -1))
        .map(([ tuple, matchedTag ]): [ ACDFTuple, number ] => [
            tuple,
            rankOfTagOfMatchingUserClass(matchedTag),
        ])
        .sort((a, b) => b[1] - a[1]);
    const highestUserClassSpecificity: number = sortedByDescendingUserClassSpecificity[0][1];
    const charlieIndex = sortedByDescendingUserClassSpecificity
        .findIndex((t) => (t[1] < highestUserClassSpecificity));
    const tuplesThatSurvivedStage2: ACDFTuple[] = ((charlieIndex < 0)
        ? sortedByDescendingUserClassSpecificity // All were of the same specificity.
        : sortedByDescendingUserClassSpecificity.slice(0, charlieIndex)) // Select the most specific.
        .map(([ tuple, ]) => tuple);

    if (tuplesThatSurvivedStage2.length === 1) {
        return {
            authorized: tuplesThatSurvivedStage2
                .every((tuple) => operationPermitted(tuple[3])),
            relevantTuples,
            precedentTuples: tuplesThatSurvivedStage1,
            mostUserSpecificTuples: tuplesThatSurvivedStage2,
        };
    }

    // SORT BY PROTECTED ITEM SPECIFICITY
    const sortedByDescedingProtectedItemSpecificity: [ ACDFTuple, number ][] = tuplesThatSurvivedStage2
        .map((tuple): [ ACDFTuple, number ] => [
            tuple,
            specificityOfProtectedItem(request, tuple[2]),
        ])
        .sort((a, b) => b[1] - a[1]);
    const highestProtectedItemSpecificity: number = sortedByDescedingProtectedItemSpecificity[0][1];
    const deltaIndex = sortedByDescedingProtectedItemSpecificity
        .findIndex((t) => (t[1] < highestProtectedItemSpecificity));
    const tuplesThatSurvivedStage3: ACDFTuple[] = ((deltaIndex < 0)
        ? sortedByDescedingProtectedItemSpecificity // All were of the same specificity.
        : sortedByDescedingProtectedItemSpecificity.slice(0, deltaIndex)) // Select the most specific.
        .map(([ tuple, ]) => tuple);

    return {
        authorized: tuplesThatSurvivedStage3
            .every((tuple) => operationPermitted(tuple[3])),
        relevantTuples,
        precedentTuples: tuplesThatSurvivedStage1,
        mostUserSpecificTuples: tuplesThatSurvivedStage2,
        mostItemSpecificTuples: tuplesThatSurvivedStage3,
    };
}

export default bacACDF;
