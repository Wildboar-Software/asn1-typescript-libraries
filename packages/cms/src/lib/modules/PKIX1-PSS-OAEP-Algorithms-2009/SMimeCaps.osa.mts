/* eslint-disable */
import { type SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
import { kta_rsaES_OAEP } from "../PKIX1-PSS-OAEP-Algorithms-2009/kta-rsaES-OAEP.oa.mjs";
import { sa_rsaSSA_PSS } from "../PKIX1-PSS-OAEP-Algorithms-2009/sa-rsaSSA-PSS.oa.mjs";

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

/* eslint-enable */
