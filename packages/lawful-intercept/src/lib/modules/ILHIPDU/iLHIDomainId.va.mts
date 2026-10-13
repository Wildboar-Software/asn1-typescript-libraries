/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary iLHIDomainId
 * @description
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
