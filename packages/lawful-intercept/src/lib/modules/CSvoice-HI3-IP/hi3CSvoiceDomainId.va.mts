/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../CSvoice-HI3-IP/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../CSvoice-HI3-IP/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3CSvoiceDomainId
 * @description
 * 
 * HI3 domain identifier in the CS-voice correlation header. Under
 * `threeGPPSUBDomainId`: `hi3CSvoice(18)`, `r17(17)`, `version-0(0)`.
 * `threeGPPSUBDomainId` is `threeGPP(4)` under `lawfulInterceptDomainId`.
 * 
 * 3GPP TS 33.108, clause 5.7 and annex B.17.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CSvoiceDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3CSvoice(18) r17(17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi3CSvoiceDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3CSvoice */ 18,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
