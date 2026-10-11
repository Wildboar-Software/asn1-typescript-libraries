/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../ProSeHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../ProSeHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2ProSeDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2ProSeDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2prose(15) r16 (16) version0(0)}
 * ```
 * 
 * @constant
 */
export
const hi2ProSeDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2prose */ 15,
    /* r16 */ 16,
    /* version0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
