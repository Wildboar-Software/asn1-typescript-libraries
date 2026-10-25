/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary lawfulInterceptDomainId
 * @description
 * 
 * ETSI lawful-intercept object-identifier domain (annex B.2, "Security
 * DomainId" in the module). It is the prefix of threeGPPSUBDomainId. IRI
 * records carry hi2DomainId, which extends this domain.
 * 
 * Arcs: itu-t(0); identified-organization(4); etsi(0), the ETSI arc;
 * securityDomain(2), the security domain; lawfulIntercept(2), lawful intercept.
 * 3GPP TS 33.108, annex B.2 and annex B.3.
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lawfulInterceptDomainId OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0)
 * securityDomain(2) lawfulIntercept(2)}
 * ```
 * 
 * @constant
 */
export
const lawfulInterceptDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* securityDomain */ 2,
    /* lawfulIntercept */ 2,
]);

/* eslint-enable */
