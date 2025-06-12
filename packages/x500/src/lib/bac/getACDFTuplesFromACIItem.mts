import type ACDFTuple from "../types/ACDFTuple.mjs";
import type {
    ACIItem,
} from "../modules/BasicAccessControl/ACIItem.ta.mjs";

/**
 * Produces the Access Control Decision Function (ACDF) tuple types from
 * Access Control Information (ACI) items as defined in ITU Recommendation
 * X.501 (2016), Section 18.8.1.
 *
 * @param {ACIItem} aci The ACIItem from whence to produce the tuple.
 * @returns {ACDFTuple[]} An array of ACDF tuples.
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
