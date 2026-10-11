/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../Eps-HI3-PS/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../Eps-HI3-PS/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3DomainId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3DomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3eps(9) r17(17) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi3DomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3eps */ 9,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
