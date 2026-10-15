/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../CONFHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../CONFHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2confDomainId
 * @description
 * 
 * IMS conference HI2 domain: `hi2conf(10)`, release `r16(16)`, `version-0(0)`
 * under the 3GPP LI subdomain.
 *
 * Carried in every conference IRI so the record identifies the 3GPP HI2
 * conference domain. 3GPP TS 33.108, clause 11 and annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2confDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2conf(10) r16 (16) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2confDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2conf */ 10,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
