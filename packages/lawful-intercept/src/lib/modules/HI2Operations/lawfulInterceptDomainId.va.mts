/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary lawfulInterceptDomainId
 * @description
 * 
 * ETSI lawful-interception object-identifier arc
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2)}`.
 * HI2 is `hi2(1)` under this arc. Clause D.2 places the HI2 module at section
 * D.5 on this tree. ETSI TR 102 503 describes the surrounding ETSI LI arcs;
 * this module does not restate that report.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
