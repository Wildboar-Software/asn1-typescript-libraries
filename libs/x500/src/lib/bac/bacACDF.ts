import { OBJECT_IDENTIFIER, TRUE_BIT } from "asn1-ts";
import discardNonRelevantACDFTuples from "./discardNonRelevantACDFTuples";
import type ACDFTupleExtended from "../types/ACDFTupleExtended";
import type ProtectedItem from "../types/ProtectedItem";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta";
import type EqualityMatcher from "../types/EqualityMatcher";
import splitGrantsAndDenials from "./splitGrantsAndDenials";
import operationPermitted from "./operationPermitted";

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
    readonly relevantTuples: ACDFTupleExtended[];
    /**
     * The subset of ACDF tuples selected by being of the highest precedence.
     */
    readonly precedentTuples?: ACDFTupleExtended[];
    /**
     * The subset of ACDF tuples selected by targeting the most specific user
     * class.
     */
    readonly mostUserSpecificTuples?: ACDFTupleExtended[];
    /**
     * The subset of ACDF tuples selected by targeting the most specific items.
     */
    readonly mostItemSpecificTuples?: ACDFTupleExtended[];
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
 * recomputing these tuples. In addition, these tuples are expected to be
 * pre-filtered by their applicability to the current user, and extended by a
 * sixth element, which is a `number` indicating the specificity with which the
 * user matched the corresponding `UserClasses`. The former is implemented
 * so that the tuples can be filtered by their applicability to the current user
 * one time and re-used between calls to this function; the latter is
 * implemented so that this function can does not have to evaluate the user
 * classes applicability again just to determine how specific the match was.
 *
 * Outsourcing the user-class matching from this function also allows the
 * user-class matching function to be `async` without requiring this function
 * to be `async`. This is important, because group matching requires
 * reading an entry, which would probably be from a database or remote DSA. So
 * within an `async` function, you can pre-filter the ACDF tuples and annotate
 * them with their specificity, then you can call this function like normal.
 *
 * **Performance Tip: Ensure that all precedence values for all ACI items are
 * unique to avoid the more computationally-expensive code paths.**
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
 * @param {ACDFTupleExtended[]} tuples The tuples of inputs to the ACDF as described in
 *  ITU Recommendation X.501, Section 18.8.2. An array of five items:
 *  `( userClasses, authenticationLevel, protectedItems, grantsAndDenials, precedence )`
 *  with the addition of a user class specificity `number` tacked on the end.
 * @param {AuthenticationLevel} authLevel The authentication level of the user.
 * @param {ProtectedItem} request The thing that is being requested, which can
 *  be an entry, attribute type, or attribute value.
 * @param {number[]} operations The bit indices of the permissions that are
 *  being requested, divided by two. The permissions come from the definition of
 *  `GrantsAndDenials`. For clarification, an operation of 3 indicates a request
 *  for the remove permission.
 * @param {function} getEqualityMatcher A function that takes an object
 *  identifier and returns another function (if one can be found) that can be
 *  used to compare two values of the same attribute type.
 * @returns An object whose `authorized` property is a `boolean` that indicates
 *  whether the request was authorized by this ACDF. All other properties of
 *  this object are for diagnostic purposes.
 *
 * @function
 */
export
function bacACDF (
    tuples: ACDFTupleExtended[],
    authLevel: AuthenticationLevel,
    request: ProtectedItem,
    operations: number[], // Index of bits in GrantsAndDenials / 2.
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): BACACDFReturn {

    const tuplesSplitByGrantOrDenial = tuples
        .flatMap((tuple) => splitGrantsAndDenials(tuple[3])
            .map((gad): ACDFTupleExtended => [ tuple[0], tuple[1], tuple[2], gad, tuple[4], tuple[5] ]));
    const relevantTuples: ACDFTupleExtended[] = discardNonRelevantACDFTuples(
        tuplesSplitByGrantOrDenial,
        authLevel,
        request,
        operations,
        getEqualityMatcher,
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
    const sortedByDescendingPrecedence = relevantTuples.sort((a, b) => Number(b[4]) - Number(a[4]));
    const highestPrecedence = sortedByDescendingPrecedence[0][4];
    const betaIndex = sortedByDescendingPrecedence.findIndex((t) => (t[4] < highestPrecedence));
    const tuplesThatSurvivedStage1 = (betaIndex < 0)
        ? sortedByDescendingPrecedence // All were of the same precedence.
        : sortedByDescendingPrecedence.slice(0, betaIndex); // Select the most precedent.

    if (tuplesThatSurvivedStage1.length <= 1) {
        return {
            authorized: (
                (tuplesThatSurvivedStage1.length === 1)
                && operationPermitted(operations, tuplesThatSurvivedStage1[0])
            ),
            relevantTuples,
            precedentTuples: tuplesThatSurvivedStage1,
        };
    }

    // SORT BY USER CLASS SPECIFICITY
    const sortedByDescendingUserClassSpecificity: ACDFTupleExtended[] = tuplesThatSurvivedStage1
        .sort((a, b) => Math.floor(b[5]) - Math.floor(a[5])); // Must be floored. Search for: 1E9DC3EB-E3DB-4CFA-A7BE-B86342F7EF75
    const highestUserClassSpecificity: number = sortedByDescendingUserClassSpecificity[0][5];
    const charlieIndex = sortedByDescendingUserClassSpecificity
        .findIndex((t) => (t[5] < highestUserClassSpecificity));
    const tuplesThatSurvivedStage2: ACDFTupleExtended[] = ((charlieIndex < 0)
        ? sortedByDescendingUserClassSpecificity // All were of the same specificity.
        : sortedByDescendingUserClassSpecificity.slice(0, charlieIndex)); // Select the most specific.

    if (tuplesThatSurvivedStage2.length === 1) {
        return {
            authorized: tuplesThatSurvivedStage2
                .every((tuple) => operationPermitted(operations, tuple)),
            relevantTuples,
            precedentTuples: tuplesThatSurvivedStage1,
            mostUserSpecificTuples: tuplesThatSurvivedStage2,
        };
    }

    // SORT BY PROTECTED ITEM SPECIFICITY
    const sortedByDescedingProtectedItemSpecificity: [ ACDFTupleExtended, number ][] = tuplesThatSurvivedStage2
        .map((tuple): [ ACDFTupleExtended, number ] => [
            tuple,
            specificityOfProtectedItem(request, tuple[2]),
        ])
        .sort((a, b) => b[1] - a[1]);
    const highestProtectedItemSpecificity: number = sortedByDescedingProtectedItemSpecificity[0][1];
    const deltaIndex = sortedByDescedingProtectedItemSpecificity
        .findIndex((t) => (t[1] < highestProtectedItemSpecificity));
    const tuplesThatSurvivedStage3: ACDFTupleExtended[] = ((deltaIndex < 0)
        ? sortedByDescedingProtectedItemSpecificity // All were of the same specificity.
        : sortedByDescedingProtectedItemSpecificity.slice(0, deltaIndex)) // Select the most specific.
        .map(([ tuple, ]) => tuple);

    return {
        authorized: tuplesThatSurvivedStage3
            .every((tuple) => operationPermitted(operations, tuple)),
        relevantTuples,
        precedentTuples: tuplesThatSurvivedStage1,
        mostUserSpecificTuples: tuplesThatSurvivedStage2,
        mostItemSpecificTuples: tuplesThatSurvivedStage3,
    };
}

export default bacACDF;
