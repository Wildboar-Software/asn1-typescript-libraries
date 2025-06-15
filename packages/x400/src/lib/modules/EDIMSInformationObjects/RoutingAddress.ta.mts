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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION RoutingAddress */
/**
 * @summary RoutingAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoutingAddress  ::=  TeletexString(SIZE (1..ub-routing-address))
 * ```
 */
export type RoutingAddress = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION RoutingAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingAddress */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingAddress */

/* START_OF_SYMBOL_DEFINITION _decode_RoutingAddress */
export const _decode_RoutingAddress = $._decodeTeletexString;
/* END_OF_SYMBOL_DEFINITION _decode_RoutingAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAddress */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAddress */

/* START_OF_SYMBOL_DEFINITION _encode_RoutingAddress */
export const _encode_RoutingAddress = $._encodeTeletexString;

/* END_OF_SYMBOL_DEFINITION _encode_RoutingAddress */

/* eslint-enable */
