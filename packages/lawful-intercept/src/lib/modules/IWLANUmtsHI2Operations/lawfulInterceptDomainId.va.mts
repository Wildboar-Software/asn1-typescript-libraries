/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary lawfulInterceptDomainId
 * @description
 * 
 * Root of the lawful-intercept object identifiers in this module. Arcs:
 * itu-t(0), identified-organization(4), etsi(0), securityDomain(2),
 * lawfulIntercept(2).
 * 
 * 3GPP TS 33.108, annex B.7.
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
