/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";



/**
 * @summary pstnIsdnPDUObjId
 * @description
 *
 * Relative object identifier of the PstnIsdnPDU module, `{li-ps(5)
 * pstnIsdn(6) version6(6)}`.
 *
 * Definitions in this module are relative to `{itu-t(0)
 * identified-organization(4) etsi(0) securityDomain(2)
 * lawfulIntercept(2)}`, so the absolute OID is `0.4.0.2.2.5.6.6`. The ASN.1
 * is `PstnIsdnPDU,ver6.asn` in the electronic attachment. ETSI TR 102 503
 * surveys the OIDs used across the LI specifications.
 *
 * This module is part 6 of the ETSI TS 102 232 family: the service-specific
 * handover, over the part 1 IP delivery interface, of intercepted PSTN/ISDN
 * services, including emulated services such as those in ETSI ES 282 002.
 * IRI events themselves follow ETSI TS 101 671 (historical), with ISDN
 * guidance in ETSI TR 102 053. ETSI TS 187 005 is the NGN context in which
 * this handover may be used.
 *
 * ETSI TS 102 232-6 V3.5.1 (2023-03), clauses 1, 4.1, and A.2.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223206/03.05.01_60/ts_10223206v030501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pstnIsdnPDUObjId RELATIVE-OID ::= {li-ps(5) pstnIsdn(6) version6(6)}
 * ```
 * 
 * @constant
 */
export
const pstnIsdnPDUObjId: RELATIVE_OID = [ /* li-ps */ 5, /* pstnIsdn */ 6, /* version6 */ 6 ];

/* eslint-enable */
