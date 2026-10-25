/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../MmsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../MmsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2mmsDomainId
 * @description
 * 
 * Object identifier of the 3GPP HI2 MMS domain. Under `threeGPPSUBDomainId`,
 * arc 16 is hi2mms, arc 16 is r16, and arc 0 is version-0. Each IRI record
 * carries this identifier in `hi2mmsDomainId`.
 * 
 * 3GPP TS 33.108, annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2mmsDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2mms(16) r16(16) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2mmsDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2mms */ 16,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
