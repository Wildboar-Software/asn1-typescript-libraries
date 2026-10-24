/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary lawfulInterceptDomainId
 * @description
 *
 * Root of the lawful-interception object tree: `itu-t(0)`
 * `identified-organization(4)` `etsi(0)` `securityDomain(2)`
 * `lawfulIntercept(2)`. Clause D.2 places HI1, HI2, HI3, HI management, and
 * TETRA under this arc. ETSI TR 102 503 describes the ETSI domain and points at
 * the specifications that assign the OIDs. Each module in this annex assigns
 * the value again.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.8.
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
