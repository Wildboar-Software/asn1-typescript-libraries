/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../UmtsCS-HI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../UmtsCS-HI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2CSDomainId
 * @description
 * 
 * Circuit-switched HI2 domain: `hi2CS(3)`, release `r17(17)`, `version-0(0)`
 * under the 3GPP LI subdomain.
 *
 * Carried on every CS IRI. Annex B.3a treats this identifier as what makes a
 * separate version enumeration redundant, and recommends still sending the
 * version value lastVersion. 3GPP TS 33.108, clause 5 and annex B.3a.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2CSDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2CS(3)  r17 (17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2CSDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2CS */ 3,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
