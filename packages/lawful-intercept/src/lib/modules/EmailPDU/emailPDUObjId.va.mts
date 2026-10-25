/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";



/**
 * @summary emailPDUObjId
 * @description
 *
 * Relative object identifier of the EmailPDU module, `{li-ps(5) email(2)
 * version20(20)}`.
 *
 * Definitions in this module are relative to `{itu-t(0)
 * identified-organization(4) etsi(0) securityDomain(2) lawfulIntercept(2)}`, so
 * the absolute OID is `0.4.0.2.2.5.2.20`. The module is still named EmailPDU,
 * rather than MessagingPDU, for compatibility with earlier versions. The ASN.1
 * is `EmailPDU,ver20.asn` in the electronic attachment.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), annex D.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * emailPDUObjId RELATIVE-OID ::= {li-ps(5) email(2) version20(20)}
 * ```
 * 
 * @constant
 */
export
const emailPDUObjId: RELATIVE_OID = [ /* li-ps */ 5, /* email */ 2, /* version20 */ 20 ];

/* eslint-enable */
