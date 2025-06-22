/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_cms_namespaces
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cms-namespaces OID ::= { iso(1) identified-organization(3) tc68(133)
 * country(16) x9(840) x9Standards(9) x9-73(73) namespaces(2) }
 * ```
 *
 * @constant
 */
export const id_cms_namespaces: OID = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* tc68 */ 133,
    /* country */ 16,
    /* x9 */ 840,
    /* x9Standards */ 9,
    /* x9-73 */ 73,
    /* namespaces */ 2,
]);

/* eslint-enable */
