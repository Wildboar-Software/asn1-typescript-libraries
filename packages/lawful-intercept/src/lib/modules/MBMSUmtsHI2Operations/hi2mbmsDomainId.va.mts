/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../MBMSUmtsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../MBMSUmtsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2mbmsDomainId
 * @description
 * 
 * Object identifier of the 3GPP HI2 MBMS domain. Under `threeGPPSUBDomainId`,
 * arc 7 is hi2mbms, arc 16 is r16, and arc 0 is version0. Each IRI record
 * carries this identifier in `hi2mbmsDomainId`.
 * 
 * 3GPP TS 33.108, annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2mbmsDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2mbms(7)  r16 (16) version0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2mbmsDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2mbms */ 7,
    /* r16 */ 16,
    /* version0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
