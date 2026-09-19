/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../EpsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../EpsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2epsDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2epsDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2eps(8) r16(16) version-1 (1)}
 * ```
 * 
 * @constant
 */
export
const hi2epsDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2eps */ 8,
    /* r16 */ 16,
    /* version-1 */ 1,
], threeGPPSUBDomainId);

/* eslint-enable */
