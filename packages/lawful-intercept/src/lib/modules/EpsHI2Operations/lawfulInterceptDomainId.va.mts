/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary lawfulInterceptDomainId
 * @description
 * 
 * ETSI lawful-interception arc under the security domain. The module comment
 * calls it the security domain id. Arcs: itu-t (0), identified-organization
 * (4), etsi (0), securityDomain (2), lawfulIntercept (2). It is not an IRI
 * parameter. hi2epsDomainId, which begins with this prefix, is the mandatory
 * IRI parameter of that name (annex B.9).
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
