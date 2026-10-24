/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../UmtsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../UmtsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2DomainId
 * @description
 * 
 * Object identifier of this UMTS HI2 module and the 3GPP HI2 domain value
 * carried in every IRI-Parameters record (annex B.3). The module and the
 * parameter use the same identifier.
 * 
 * Arcs under threeGPPSUBDomainId: hi2(1) selects the HI2 (IRI) subtree, r17(17)
 * is Release 17, and version-0(0) is version 0 of this module. Annex B.3 notes
 * that hi2DomainId has identified the HI2 domain since the initial 33.108
 * v5.0.0 module, which is why the separate iRIversion enumeration is redundant;
 * when iRIversion is still sent, the same note recommends the value
 * lastVersion(8).
 * 
 * 3GPP TS 33.108, annex B.2 and annex B.3.
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2DomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2(1) r17 (17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2DomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2 */ 1,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
