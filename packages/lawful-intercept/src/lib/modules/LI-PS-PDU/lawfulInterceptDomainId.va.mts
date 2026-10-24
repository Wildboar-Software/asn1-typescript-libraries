/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary lawfulInterceptDomainId
 * @description
 * 
 * Root of the ETSI lawful-interception object-identifier tree: `{itu-t(0)
 * identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2)}`.
 * HI1, HI2, HI3, HIM, 3GPP, and the IP handover family (`li-ps`) are arcs under
 * this value. Annex A.1 draws the tree.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex A, clause A.1.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lawfulInterceptDomainId OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2)}
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
