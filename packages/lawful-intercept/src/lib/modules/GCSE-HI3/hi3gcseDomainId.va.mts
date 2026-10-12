/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../GCSE-HI3/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../GCSE-HI3/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3gcseDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3gcseDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3gcse(14) r17(17) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi3gcseDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3gcse */ 14,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
