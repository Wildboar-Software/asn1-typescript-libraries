/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";



/**
 * @summary iPAccessPDUObjId
 * @description
 *
 * Relative OID of this module under
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulIntercept(2)}` (ETSI TS 102 232-3 V3.9.1, clause 8).
 *
 * This constant is `version20(20)`. Clause 8 of V3.9.1 assigns
 * `version14(14)`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPAccessPDUObjId RELATIVE-OID ::= {li-ps(5) iPAccess(3) version20(20)}
 * ```
 * 
 * @constant
 */
export
const iPAccessPDUObjId: RELATIVE_OID = [ /* li-ps */ 5, /* iPAccess */ 3, /* version20 */ 20 ];

/* eslint-enable */
