/* eslint-disable */
import {
    type RELATIVE_OID
} from "@wildboar/asn1";



/**
 * @summary l2AccessPDUObjId
 * @description
 *
 * Relative object identifier of the `L2AccessPDU` module,
 * `{li-ps(5) l2Access(4) version10(10)}`. It is relative to
 * `{itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * lawfulIntercept(2)}`. The module header uses that spelling; a comment
 * below the value assignments spells the same arc `lawfulintercept(2)`.
 *
 * Clause 8.1 identifies the accompanying module as
 * `L2AccessPDU,ver10.asn`. ETSI TR 102 503 catalogues the lawful-interception
 * object identifiers and points at the specification that defines each one.
 *
 * `l2IRIObjId`, `l2CCObjId`, and `l2IRIOnlyObjId` are arcs under this value.
 *
 * ETSI TS 102 232-4 V3.8.1 (2025-08), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223204/03.08.01_60/ts_10223204v030801p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * l2AccessPDUObjId RELATIVE-OID ::= {li-ps(5) l2Access(4) version10(10)}
 * ```
 * 
 * @constant
 */
export
const l2AccessPDUObjId: RELATIVE_OID = [ /* li-ps */ 5, /* l2Access */ 4, /* version10 */ 10 ];

/* eslint-enable */
