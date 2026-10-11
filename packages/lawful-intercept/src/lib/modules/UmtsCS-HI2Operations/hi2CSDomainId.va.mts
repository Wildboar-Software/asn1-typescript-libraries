/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../UmtsCS-HI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../UmtsCS-HI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2CSDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2CSDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2CS(3)  r17 (17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2CSDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2CS */ 3,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
