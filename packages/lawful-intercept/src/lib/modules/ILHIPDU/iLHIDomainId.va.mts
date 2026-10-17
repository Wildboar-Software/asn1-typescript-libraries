/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary iLHIDomainId
 * @description
 *
 * Root of the Inter LEMF Handover Interface object-identifier tree:
 * `itu-t(0) identified-organization(4) etsi(0) securityDomain(2)
 * informationHandover(4) ilhi(0)`.
 *
 * A content type with no object identifier of its own may be allocated under
 * the `identifiers(1)` arc of this value.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 8.1, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iLHIDomainId     OBJECT IDENTIFIER ::= {itu-t(0) identified-organization(4) etsi(0) securityDomain(2) informationHandover(4) ilhi(0)}
 * ```
 * 
 * @constant
 */
export
const iLHIDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* securityDomain */ 2,
    /* informationHandover */ 4,
    /* ilhi */ 0,
]);

/* eslint-enable */
