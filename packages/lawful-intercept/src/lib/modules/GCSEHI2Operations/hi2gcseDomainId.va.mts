/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../GCSEHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../GCSEHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2gcseDomainId
 * @description
 * 
 * GCSE HI2 domain: `hi2gcse(13)`, release `r16(16)`, `version-0(0)` under the
 * 3GPP LI subdomain.
 *
 * Carried in every GCSE IRI so the record identifies the 3GPP HI2 GCSE domain.
 * 3GPP TS 33.108, clause 14 and annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2gcseDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2gcse(13) r16 (16) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi2gcseDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2gcse */ 13,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
