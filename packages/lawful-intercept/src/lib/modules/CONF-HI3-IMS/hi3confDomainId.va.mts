/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../CONF-HI3-IMS/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../CONF-HI3-IMS/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3confDomainId
 * @description
 * 
 * HI3 domain identifier in the conference correlation header. Under
 * `threeGPPSUBDomainId`: `hi3conf(11)`, `r17(17)`, `version-0(0)`.
 * `threeGPPSUBDomainId` is `threeGPP(4)` under `lawfulInterceptDomainId`.
 * 
 * 3GPP TS 33.108, annex L.2 and annex B.11.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3confDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3conf(11)  r17 (17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi3confDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3conf */ 11,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
