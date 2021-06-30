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
    return Array.from(permissions).some((perm, index) => (index % 2) ? perm : false);
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
            operations.every((op) => gad[op] === TRUE_BIT) // Every required "grant" bit is set.
            && !operations.some((op) => gad[op + 1]) // None of the corresponding "deny" bits are set.
        );
    }

    return tuples
        .filter((tuple) => {
            if (!("basicLevels" in tuple[1]) || !("basicLevels" in authLevel)) {
                return false; // We do not know how to compare EXTERNALs.
            }
            return (
                (
                    userWithinACIUserClass(
                        tuple[0],
                        user,
                        entry,
                        getEqualityMatcher,
                        isMemberOfGroup,
                    )
                    && (tuple[1].basicLevels.level <= authLevel.basicLevels.level)
                )
                || (
                    deniesAccess(tuple)
                    && (tuple[1].basicLevels.level > authLevel.basicLevels.level)
                )
            );
        })
        .filter((tuple) => itemIsProtected(request, tuple[2], getEqualityMatcher))
        // WARNING: Step 3 is skipped. I don't understand it.
        .filter((tuple) => operationPermitted(tuple[3]));
}

export default discardNonRelevantACDFTuples;
