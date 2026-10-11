/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../VoIP-HI3-IMS/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../VoIP-HI3-IMS/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3voipDomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3voipDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3voip(12)  r17 (17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi3voipDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3voip */ 12,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
