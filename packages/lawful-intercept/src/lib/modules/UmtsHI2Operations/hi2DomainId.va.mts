/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../UmtsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../UmtsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2DomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2DomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2(1) r17 (17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2DomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2 */ 1,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
