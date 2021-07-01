import { TRUE_BIT } from "asn1-ts";
import discardNonRelevantACDFTuples from "./discardNonRelevantACDFTuples";
import type ACDFTuple from "../types/ACDFTuple";
import type ProtectedItem from "../types/ProtectedItem";
import type {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import type {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import type {
    ACIItem,
} from "../modules/BasicAccessControl/ACIItem.ta";
import userWithinACIUserClass from "./userWithinACIUserClass";
import getACDFTuplesFromACIItem from "./getACDFTuplesFromACIItem";
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

interface ACDFReturn {
    readonly authorized: boolean;
}

interface BACACDFReturn extends ACDFReturn {
    readonly relevantTuples: ACDFTuple[];
    readonly precedentTuples?: ACDFTuple[];
    readonly mostUserSpecificTuples?: ACDFTuple[];
    readonly mostItemSpecificTuples?: ACDFTuple[];
}

// Performance advice: ensure all precedence values are unique.
export
function bacACDF (
    acis: ACIItem[],
    authLevel: AuthenticationLevel,
    user: NameAndOptionalUID,
    entry: DistinguishedName,
    request: ProtectedItem,
    operations: number[], // Index of bits in GrantsAndDenials / 2.
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => boolean | undefined,
): BACACDFReturn {

    function operationPermitted (gad: GrantsAndDenials): boolean {
        return (
            operations.every((op) => gad[(op * 2)] === TRUE_BIT) // Every required "grant" bit is set.
            && !operations.some((op) => gad[(op * 2) + 1] === TRUE_BIT) // None of the corresponding "deny" bits are set.
        );
    }

    const tuples: ACDFTuple[] = acis
        .flatMap((aci) => getACDFTuplesFromACIItem(aci))
        .flatMap((aci) => splitGrantsAndDenials(aci[3]).map((gad): ACDFTuple => [
            aci[0],
            aci[1],
            aci[2],
            gad,
            aci[4],
        ]));
    const relevantTuples: ACDFTuple[] = discardNonRelevantACDFTuples(
        tuples,
        authLevel,
        user,
        entry,
        request,
        operations,
        getEqualityMatcher,
        isMemberOfGroup,
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
            tuple[0],
            user,
            entry,
            getEqualityMatcher,
            isMemberOfGroup,
        )])
        .filter(([ , tagThatMatched ]) => (tagThatMatched > -1))
        .map(([ tuple, matchedTag ]): [ ACDFTuple, number ] => [
            tuple,
            // matchedTag,
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
        .map((tuple): [ ACDFTuple, number] => [
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
