/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary lawfulInterceptDomainId
 * @description
 * 
 * ETSI lawful-intercept arc:
 * `itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2)`.
 *
 * Parent of `threeGPP(4)`. Not carried as a value in a ProSe IRI. 3GPP TS
 * 33.108, annex B.13.
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
