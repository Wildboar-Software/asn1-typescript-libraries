/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../IWLANUmtsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../IWLANUmtsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2wlanDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2wlanDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2wlan(6)  r16 (16) version-1 (1)}
 * ```
 * 
 * @constant
 */
export
const hi2wlanDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2wlan */ 6,
    /* r16 */ 16,
    /* version-1 */ 1,
], threeGPPSUBDomainId);

/* eslint-enable */
