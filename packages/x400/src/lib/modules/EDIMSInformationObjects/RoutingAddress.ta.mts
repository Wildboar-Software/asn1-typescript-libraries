/* eslint-disable */
import {
    TeletexString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary RoutingAddress
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
 * RoutingAddress  ::=  TeletexString(SIZE (1..ub-routing-address))
 * ```
 */
export type RoutingAddress = TeletexString; // TeletexString


export const _decode_RoutingAddress = $._decodeTeletexString;


export const _encode_RoutingAddress = $._encodeTeletexString;


/* eslint-enable */
