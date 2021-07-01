import { TRUE_BIT } from "asn1-ts";
import type ACDFTuple from "../types/ACDFTuple";
import type ProtectedItem from "../types/ProtectedItem";
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
    GrantsAndDenials,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta";
import userWithinACIUserClass from "./userWithinACIUserClass";
import itemIsProtected from "./itemIsProtected";

function deniesAccess (tuple: ACDFTuple): boolean {
    const permissions = tuple[3];
    // All the odd bits are denials.
    return Array.from(permissions).some((perm, index) => (index % 2) ? Boolean(perm) : false);
}

/**
 * Implementation of the algorithm outlined in ITU Recommendation X.501 (2016),
 * Section 18.8.3.
 *
 * @param tuples The tuples to filter
 * @param authLevel The AuthenticationLevel of the requestor
 * @param user The distinguished name (and optional unique identifier) of the requestor.
 * @param entry
 * @param request
 * @param operations
 * @param getEqualityMatcher
 * @param isMemberOfGroup
 * @returns
 */
export
function discardNonRelevantACDFTuples (
    tuples: ACDFTuple[],
    authLevel: AuthenticationLevel,
    user: NameAndOptionalUID,
    entry: DistinguishedName,
    request: ProtectedItem,
    operations: number[],
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => boolean | undefined,
): ACDFTuple[] {

    function operationPermitted (gad: GrantsAndDenials): boolean {
        return (
            operations.every((op) => gad[(op * 2)] === TRUE_BIT) // Every required "grant" bit is set.
            && !operations.some((op) => gad[(op * 2) + 1] === TRUE_BIT) // None of the corresponding "deny" bits are set.
        );
    }

    return tuples
        .filter((tuple) => (userWithinACIUserClass(
            tuple[0],
            user,
            entry,
            getEqualityMatcher,
            isMemberOfGroup,
        ) > -1))
        .filter((tuple) => {
            const aci = tuple[1];
            if (!("basicLevels" in aci) || !("basicLevels" in authLevel)) {
                return false; // We do not know how to compare EXTERNALs.
            }
            const aciBL = aci.basicLevels;
            const userBL = authLevel.basicLevels;
            const denies = deniesAccess(tuple);
            const userLQ = userBL.localQualifier ?? 0;
            const aciLQ = aciBL.localQualifier ?? 0;
            const sufficientAuthentication = (
                (userBL.level >= aci.basicLevels.level) // User's auth level meets the threshold.
                && (userLQ >= aciLQ) // User's local qualifier meets the minimum.
                && (!aciBL.signed || (Boolean(aciBL.signed) === Boolean(userBL.signed))) // Signing requirements met.
            );
            return (
                (!denies && sufficientAuthentication)
                || (denies && !sufficientAuthentication)
            );
        })
        .filter((tuple) => itemIsProtected(request, tuple[2], getEqualityMatcher))
        // WARNING: Step 3 is skipped. I don't understand it.
        .filter((tuple) => operationPermitted(tuple[3]));
}

export default discardNonRelevantACDFTuples;
