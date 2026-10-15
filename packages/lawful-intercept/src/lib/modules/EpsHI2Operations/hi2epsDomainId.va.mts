/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { threeGPPSUBDomainId } from "../EpsHI2Operations/threeGPPSUBDomainId.va.mjs";
// export { threeGPPSUBDomainId } from "../EpsHI2Operations/threeGPPSUBDomainId.va.mjs";


/**
 * @summary hi2epsDomainId
 * @description
 * 
 * Object identifier of the EPS HI2 domain, and of this EpsHI2Operations module
 * (annex B.9). It is the mandatory hi2epsDomainId component of every IRI
 * parameter set. The module comment on that component calls it the 3GPP HI2 EPS
 * domain.
 * 
 * Arcs, from the root: itu-t (0), identified-organization (4), etsi (0),
 * securityDomain (2), lawfulIntercept (2), threeGPP (4), hi2eps (8), r17 (17),
 * version-0 (0). The handover prose does not define the arc numbers; annex B.9
 * assigns them.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi2epsDomainId OBJECT IDENTIFIER ::= {threeGPPSUBDomainId hi2eps(8) r17(17) version-0 (0)}
 * ```
 * 
 * @constant
 */
export
const hi2epsDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi2eps */ 8,
    /* r17 */ 17,
    /* version-0 */ 0,
], threeGPPSUBDomainId);

/* eslint-enable */
