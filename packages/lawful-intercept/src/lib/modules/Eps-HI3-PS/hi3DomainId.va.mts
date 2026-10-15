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
 * HI3 domain identifier in the EPS ULIC header. Under `threeGPPSUBDomainId`:
 * `hi3eps(9)`, `r17(17)`, `version-0(0)`. `threeGPPSUBDomainId` is
 * `threeGPP(4)` under `lawfulInterceptDomainId`.
 * 
 * 3GPP TS 33.108, annex C.1.3 and annex B.10.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
