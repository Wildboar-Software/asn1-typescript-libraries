/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../IWLANUmtsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../IWLANUmtsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2wlanDomainId
 * @description
 * 
 * Object identifier of the 3GPP HI2 WLAN domain. Under `threeGPPSUBDomainId`,
 * arc 6 is hi2wlan, arc 16 is r16, and arc 1 is version-1.
 * 
 * The module identifier uses version-0(0). This value uses version-1(1). Each
 * IRI record carries this identifier in `hi2iwlanDomainId`.
 * 
 * 3GPP TS 33.108, annex B.7.
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
