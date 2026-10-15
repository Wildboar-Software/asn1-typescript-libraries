/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../Umts-HI3-PS/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../Umts-HI3-PS/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3DomainId
 * @description
 * 
 * HI3 domain identifier in the UMTS PS ULIC header. Under
 * `threeGPPSUBDomainId`: `hi3(2)`, `r7(7)`, `version-0(0)`.
 * `threeGPPSUBDomainId` is `threeGPP(4)` under `lawfulInterceptDomainId`.
 * 
 * 3GPP TS 33.108, annex C.1.3 and annex B.4.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3DomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3(2) r7(7) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi3DomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3 */ 2,
    /* r7 */ 7,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
