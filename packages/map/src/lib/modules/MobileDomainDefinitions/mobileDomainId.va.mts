/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary mobileDomainId
 * @description
 *
 * Root of the ETSI mobile-domain OID: `{ccitt(0) identified-organization(4)
 * etsi(0) mobileDomain(0)}`. MAP module OIDs in clause 17 are under this arc
 * (3GPP TS 29.002 V19.1.0 clauses 17.1.5 and 17.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mobileDomainId OBJECT IDENTIFIER ::= {ccitt (0) identified-organization (4) etsi (0) mobileDomain (0)}
 * ```
 * 
 * @constant
 */
export
const mobileDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ccitt */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* mobileDomain */ 0,
]);

/* eslint-enable */
