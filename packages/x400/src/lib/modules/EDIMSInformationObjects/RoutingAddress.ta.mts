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
let _cached_decoder_for_RoutingAddress: $.ASN1Decoder<RoutingAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RoutingAddress */

/* START_OF_SYMBOL_DEFINITION _decode_RoutingAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) RoutingAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoutingAddress} The decoded data structure.
 */
export function _decode_RoutingAddress(el: _Element) {
    if (!_cached_decoder_for_RoutingAddress) {
        _cached_decoder_for_RoutingAddress = $._decodeTeletexString;
    }
    return _cached_decoder_for_RoutingAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RoutingAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAddress */
let _cached_encoder_for_RoutingAddress: $.ASN1Encoder<RoutingAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RoutingAddress */

/* START_OF_SYMBOL_DEFINITION _encode_RoutingAddress */
/**
 * @summary Encodes a(n) RoutingAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingAddress, encoded as an ASN.1 Element.
 */
export function _encode_RoutingAddress(
    value: RoutingAddress,
    elGetter: $.ASN1Encoder<RoutingAddress>
) {
    if (!_cached_encoder_for_RoutingAddress) {
        _cached_encoder_for_RoutingAddress = $._encodeTeletexString;
    }
    return _cached_encoder_for_RoutingAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RoutingAddress */

/* eslint-enable */
