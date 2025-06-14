/* eslint-disable */
import {
    NULL,
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

/* START_OF_SYMBOL_DEFINITION Nothing */
/**
 * @summary Nothing
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Nothing  ::=  NULL
 * ```
 */
export type Nothing = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION Nothing */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Nothing */
let _cached_decoder_for_Nothing: $.ASN1Decoder<Nothing> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Nothing */

/* START_OF_SYMBOL_DEFINITION _decode_Nothing */
/**
 * @summary Decodes an ASN.1 element into a(n) Nothing
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Nothing} The decoded data structure.
 */
export function _decode_Nothing(el: _Element) {
    if (!_cached_decoder_for_Nothing) {
        _cached_decoder_for_Nothing = $._decodeNull;
    }
    return _cached_decoder_for_Nothing(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Nothing */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Nothing */
let _cached_encoder_for_Nothing: $.ASN1Encoder<Nothing> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Nothing */

/* START_OF_SYMBOL_DEFINITION _encode_Nothing */
/**
 * @summary Encodes a(n) Nothing into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Nothing, encoded as an ASN.1 Element.
 */
export function _encode_Nothing(
    value: Nothing,
    elGetter: $.ASN1Encoder<Nothing>
) {
    if (!_cached_encoder_for_Nothing) {
        _cached_encoder_for_Nothing = $._encodeNull;
    }
    return _cached_encoder_for_Nothing(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Nothing */

/* eslint-enable */
