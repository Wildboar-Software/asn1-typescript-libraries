/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary ub_routing_address
 * @description
 *
 * The Routing Address, if present, is an address for routing to the sender/recipient
 * specified in the Identification Code. This is semantically identical to the "Address for
 * reverse routing / Routing address" component of the Interchange sender/recipient of the
 * EDIFACT UNB segment. See ITU-T X.435 (1999), §8.1.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-routing-address INTEGER ::= 14
 * ```
 *
 * @constant
 */
export const ub_routing_address: INTEGER = 14;

/* eslint-enable */
