/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../ProSeHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../ProSeHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2ProSeDomainId
 * @description
 * 
 * ProSe HI2 domain: `hi2prose(15)`, release `r16(16)`, `version0(0)` under the
 * 3GPP LI subdomain.
 *
 * Carried in every ProSe IRI so the record identifies the 3GPP HI2 ProSe
 * domain. 3GPP TS 33.108, clause 13 and annex B.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2ProSeDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2prose(15) r16 (16) version0(0)}
 * ```
 * 
 * @constant
 */
export
const hi2ProSeDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2prose */ 15,
    /* r16 */ 16,
    /* version0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
