/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../MmsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../MmsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2mmsDomainId
 * @description
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
