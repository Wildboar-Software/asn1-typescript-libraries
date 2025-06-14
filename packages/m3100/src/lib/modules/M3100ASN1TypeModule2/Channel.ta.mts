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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Channel */
/**
 * @summary Channel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Channel  ::=  INTEGER
 * ```
 */
export type Channel = INTEGER;
/* END_OF_SYMBOL_DEFINITION Channel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Channel */
let _cached_decoder_for_Channel: $.ASN1Decoder<Channel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Channel */

/* START_OF_SYMBOL_DEFINITION _decode_Channel */
/**
 * @summary Decodes an ASN.1 element into a(n) Channel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Channel} The decoded data structure.
 */
export function _decode_Channel(el: _Element) {
    if (!_cached_decoder_for_Channel) {
        _cached_decoder_for_Channel = $._decodeInteger;
    }
    return _cached_decoder_for_Channel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Channel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Channel */
let _cached_encoder_for_Channel: $.ASN1Encoder<Channel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Channel */

/* START_OF_SYMBOL_DEFINITION _encode_Channel */
/**
 * @summary Encodes a(n) Channel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Channel, encoded as an ASN.1 Element.
 */
export function _encode_Channel(
    value: Channel,
    elGetter: $.ASN1Encoder<Channel>
) {
    if (!_cached_encoder_for_Channel) {
        _cached_encoder_for_Channel = $._encodeInteger;
    }
    return _cached_encoder_for_Channel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Channel */

/* eslint-enable */
