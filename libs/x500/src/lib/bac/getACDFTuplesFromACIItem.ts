import type ACDFTuple from "../types/ACDFTuple";
import type {
    ACIItem,
} from "../modules/BasicAccessControl/ACIItem.ta";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta";

/**
 * Produces the Access Control Decision Function (ACDF) tuple types from
 * Access Control Information (ACI) items as defined in ITU Recommendation
 * X.501 (2016), Section 18.8.1.
 *
 * @param aci The ACIItem from whence to produce the tuple.
 * @param authLevel The AuthenticationLevel of the user.
 * @returns An array of ACDF tuples.
 * @function
 */
export
function getACDFTuplesFromACIItem (aci: ACIItem): ACDFTuple[] {
    if ("userFirst" in aci.itemOrUserFirst) {
        const userFirst = aci.itemOrUserFirst.userFirst;
        return userFirst.userPermissions
            .map((user) => [
                userFirst.userClasses,
                aci.authenticationLevel,
                user.protectedItems,
                user.grantsAndDenials,
                user.precedence ?? aci.precedence,
            ]);
    } else if ("itemFirst" in aci.itemOrUserFirst) {
        const itemFirst = aci.itemOrUserFirst.itemFirst;
        return itemFirst.itemPermissions
            .map((item) => [
                item.userClasses,
                aci.authenticationLevel,
                itemFirst.protectedItems,
                item.grantsAndDenials,
                item.precedence ?? aci.precedence,
            ]);
    } else {
        return []; // We just ignore other options.
    }
}

export default getACDFTuplesFromACIItem;
