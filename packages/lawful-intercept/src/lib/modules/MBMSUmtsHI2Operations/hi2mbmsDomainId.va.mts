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
