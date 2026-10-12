/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../UMTS-HI3CircuitLIOperations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../UMTS-HI3CircuitLIOperations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3CSDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CSDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3CS(4) r16 (16) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi3CSDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3CS */ 4,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
