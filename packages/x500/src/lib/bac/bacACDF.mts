import discardNonRelevantACDFTuples from "./discardNonRelevantACDFTuples.mjs";
import type ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import splitGrantsAndDenials from "./splitGrantsAndDenials.mjs";
import operationPermitted from "./operationPermitted.mjs";
import type { EvaluateFilterSettings } from "../utils/evaluateFilter.mjs";
import type {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";

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

export
interface ACDFSettings extends EvaluateFilterSettings {

}

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
 * pre-filtered by their applicability to the current user, and annotated with
 * `userClassSpecificity`, a `number` indicating the specificity with which the
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
 * Array walks below are indexed loops. Ranking uses `Array.prototype.sort`.
 *
 * ### Compliance
 *
 * Constraints are evaluated before precedence and specificity. Requests must
 * supply post-operation counts and, for `restrictedBy`, the complete resulting
 * entry attributes. A constrained grant is discarded if the information needed
 * to establish that it satisfies a constraint is unavailable.
 *
 * ### Parameters
 *
 * @param {ACDFTupleExtended[]} tuples The tuples of inputs to the ACDF as described in
 *  ITU Recommendation X.501, Section 18.8.2: `userClasses`,
 *  `authenticationLevel`, `protectedItems`, `grantsAndDenials`, and
 *  `precedence`, plus `userClassSpecificity`.
 *  The tuples that are irrelevant according to ITU Recommendation X.501 (2016),
 *  Section 18.8.3, bullet point #1 are expected to be discarded from this
 *  array **BEFORE** calling this function.
 * @param {ProtectedItem} request The thing that is being requested, which can
 *  be an entry, attribute type, or attribute value.
 * @param {number[]} operations The bit indices of the permissions that are
 *  being requested, divided by two. The permissions come from the definition of
 *  `GrantsAndDenials`. For clarification, an operation of 3 indicates a request
 *  for the remove permission.
 * @param {Object} settings The same settings that evaluateFilter() takes.
 * @returns An object whose `authorized` property is a `boolean` that indicates
 *  whether the request was authorized by this ACDF. All other properties of
 *  this object are for diagnostic purposes.
 *
 * @function
 */

function precedenceKey (tuple: ACDFTupleExtended): number {
    const precedence = Number(tuple.precedence);
    // Values outside the safe-integer range do not survive `Number()` with
    // their order intact. Collapse each side to one infinity so a huge
    // extension precedence still outranks every ordinary 0..255 value.
    if (Number.isSafeInteger(precedence)) {
        return precedence;
    }
    return precedence < 0 ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
}

function userClassKey (tuple: ACDFTupleExtended): number {
    // Must be floored. Search for: 1E9DC3EB-E3DB-4CFA-A7BE-B86342F7EF75
    return Math.floor(tuple.userClassSpecificity);
}

/**
 * `items` must already be ordered so the greatest key is at index 0, or every
 * key must be equal. Returns the leading run of that greatest key.
 */
function takeHighest (
    items: ACDFTupleExtended[],
    keyOf: (item: ACDFTupleExtended) => number,
): ACDFTupleExtended[] {
    const count = items.length;
    const highest = keyOf(items[0]);
    let end = 1;
    while ((end < count) && (keyOf(items[end]) === highest)) {
        end++;
    }
    return (end === count) ? items : items.slice(0, end);
}

function everyPermitted (
    operations: number[],
    tuples: ACDFTupleExtended[],
    request: ProtectedItem,
): boolean {
    const count = tuples.length;
    for (let i = 0; i < count; i++) {
        if (!operationPermitted(operations, tuples[i], request)) {
            return false;
        }
    }
    return true;
}

/**
 * A mixed grant/deny bit string becomes one grant tuple and one denial tuple.
 * A pure bit string has no pair.
 */
function grantAndDenialTuples (
    tuple: ACDFTupleExtended,
): [ ACDFTupleExtended, ACDFTupleExtended ] | undefined {
    const parts = splitGrantsAndDenials(tuple.grantsAndDenials);
    if (parts.length === 1) {
        return undefined;
    }
    return [
        tuple.withGrantsAndDenials(parts[0]),
        tuple.withGrantsAndDenials(parts[1]),
    ];
}

/**
 * Separate mixed grant/deny bit strings into two tuples. Pure tuples — the
 * common case — are reused, and so is the input array when every tuple is pure.
 * `discardNonRelevantACDFTuples` copies whatever it keeps, so this does not
 * reorder the caller's array. A mixed tuple found later in the list still keeps
 * every pure tuple that preceded it.
 */
function splitByGrantAndDenial (tuples: ACDFTupleExtended[]): ACDFTupleExtended[] {
    const count = tuples.length;
    let split: ACDFTupleExtended[] | undefined;
    for (let i = 0; i < count; i++) {
        const tuple = tuples[i];
        const pair = grantAndDenialTuples(tuple);
        if (!pair) {
            split?.push(tuple);
            continue;
        }
        split ??= tuples.slice(0, i);
        split.push(pair[0], pair[1]);
    }
    return split ?? tuples;
}

function rankByProtectedItem (
    tuples: ACDFTupleExtended[],
    request: ProtectedItem,
): ACDFTupleExtended[] {
    const count = tuples.length;
    const copy = new Array<ACDFTupleExtended>(count);
    for (let i = 0; i < count; i++) {
        copy[i] = tuples[i];
    }
    const keyOf = (tuple: ACDFTupleExtended): number => (
        specificityOfProtectedItem(request, tuple.protectedItems)
    );
    copy.sort((a, b) => keyOf(b) - keyOf(a));
    return takeHighest(copy, keyOf);
}

export
function bacACDF (
    tuples: ACDFTupleExtended[],
    requester: NameAndOptionalUID | undefined | null,
    request: ProtectedItem,
    operations: number[], // Index of bits in GrantsAndDenials / 2.
    settings: EvaluateFilterSettings,
    tuplesAlreadySplit: boolean = false, // This will eventually be removed.
): BACACDFReturn {
    const tuplesSplitByGrantOrDenial = tuplesAlreadySplit
        ? tuples
        : splitByGrantAndDenial(tuples);
    const relevantTuples: ACDFTupleExtended[] = discardNonRelevantACDFTuples(
        tuplesSplitByGrantOrDenial,
        requester,
        request,
        operations,
        settings,
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
    if (relevantTuples.length === 1) {
        return {
            authorized: operationPermitted(operations, relevantTuples[0], request),
            relevantTuples,
            precedentTuples: relevantTuples,
        };
    }

    // SORT BY PRECEDENCE
    relevantTuples.sort((a, b) => precedenceKey(b) - precedenceKey(a));
    const tuplesThatSurvivedStage1 = takeHighest(relevantTuples, precedenceKey);

    if (tuplesThatSurvivedStage1.length <= 1) {
        return {
            authorized: (
                (tuplesThatSurvivedStage1.length === 1)
                && operationPermitted(operations, tuplesThatSurvivedStage1[0], request)
            ),
            relevantTuples,
            precedentTuples: tuplesThatSurvivedStage1,
        };
    }

    // SORT BY USER CLASS SPECIFICITY
    tuplesThatSurvivedStage1.sort((a, b) => userClassKey(b) - userClassKey(a));
    const tuplesThatSurvivedStage2 = takeHighest(tuplesThatSurvivedStage1, userClassKey);

    if (tuplesThatSurvivedStage2.length === 1) {
        return {
            authorized: operationPermitted(operations, tuplesThatSurvivedStage2[0], request),
            relevantTuples,
            precedentTuples: tuplesThatSurvivedStage1,
            mostUserSpecificTuples: tuplesThatSurvivedStage2,
        };
    }

    // SORT BY PROTECTED ITEM SPECIFICITY
    const tuplesThatSurvivedStage3 = rankByProtectedItem(tuplesThatSurvivedStage2, request);

    return {
        authorized: everyPermitted(operations, tuplesThatSurvivedStage3, request),
        relevantTuples,
        precedentTuples: tuplesThatSurvivedStage1,
        mostUserSpecificTuples: tuplesThatSurvivedStage2,
        mostItemSpecificTuples: tuplesThatSurvivedStage3,
    };
}

export default bacACDF;
