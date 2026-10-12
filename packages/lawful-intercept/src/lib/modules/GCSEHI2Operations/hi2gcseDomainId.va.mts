/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../GCSEHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../GCSEHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2gcseDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2gcseDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2gcse(13) r16 (16) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi2gcseDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2gcse */ 13,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
