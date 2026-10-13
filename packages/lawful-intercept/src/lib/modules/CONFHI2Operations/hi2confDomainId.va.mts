/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../CONFHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../CONFHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2confDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2confDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2conf(10) r16 (16) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2confDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2conf */ 10,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
