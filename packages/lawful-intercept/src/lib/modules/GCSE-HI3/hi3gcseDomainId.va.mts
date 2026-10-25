/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../GCSE-HI3/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../GCSE-HI3/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3gcseDomainId
 * @description
 * 
 * HI3 domain identifier in the GCSE correlation header. Under
 * `threeGPPSUBDomainId`: `hi3gcse(14)`, `r17(17)`, `version-0(0)`.
 * `threeGPPSUBDomainId` is `threeGPP(4)` under `lawfulInterceptDomainId`.
 * 
 * 3GPP TS 33.108, annex B.14.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
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
