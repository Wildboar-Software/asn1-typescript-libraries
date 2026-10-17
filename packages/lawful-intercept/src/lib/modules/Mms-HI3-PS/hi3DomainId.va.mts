/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../Mms-HI3-PS/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../Mms-HI3-PS/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3DomainId
 * @description
 * 
 * HI3 domain identifier in the MMS correlation header. Under
 * `threeGPPSUBDomainId`: `hi3mms(17)`, `r16(16)`, `version-0(0)`.
 * `threeGPPSUBDomainId` is `threeGPP(4)` under `lawfulInterceptDomainId`.
 * 
 * 3GPP TS 33.108, annex B.16.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3DomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3mms(17) r16(16) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi3DomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3mms */ 17,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
