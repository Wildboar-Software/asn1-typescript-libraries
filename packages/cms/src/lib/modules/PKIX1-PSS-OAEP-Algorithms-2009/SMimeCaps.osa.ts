/* eslint-disable */
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.js";
import { kta_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/kta-rsaES-OAEP.oa.js";
import { sa_rsaSSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/sa-rsaSSA-PSS.oa.js";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.js";
export { kta_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/kta-rsaES-OAEP.oa.js";
export { sa_rsaSSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/sa-rsaSSA-PSS.oa.js";

/* START_OF_SYMBOL_DEFINITION SMimeCaps */
/**
 * @summary SMimeCaps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMimeCaps SMIME-CAPS ::= {
 * sa-rsaSSA-PSS.&smimeCaps |
 * kta-rsaES-OAEP.&smimeCaps,
 * ...
 * }
 * ```
 *
 * @constant
 * @type {SMIME_CAPS[]}
 *
 */
export const SMimeCaps: SMIME_CAPS[] = [
    sa_rsaSSA_PSS["&smimeCaps"],
    kta_rsaES_OAEP["&smimeCaps"],
];
/* END_OF_SYMBOL_DEFINITION SMimeCaps */

/* eslint-enable */
