/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../UMTS-HI3CircuitLIOperations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../UMTS-HI3CircuitLIOperations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi3CSDomainId
 * @description
 * 
 * HI3 domain identifier in the CS user-data report. Under
 * `threeGPPSUBDomainId`: `hi3CS(4)`, `r16(16)`, `version-0(0)`.
 * `threeGPPSUBDomainId` is `threeGPP(4)` under `lawfulInterceptDomainId`. When
 * FTP is used, the report shall carry this identifier.
 * 
 * 3GPP TS 33.108, annex B.6.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CSDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi3CS(4) r16 (16) version-0(0)}
 * ```
 * 
 * @constant
 */
export
const hi3CSDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3CS */ 4,
    /* r16 */ 16,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
