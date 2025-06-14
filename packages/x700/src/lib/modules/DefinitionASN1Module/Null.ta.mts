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

/* START_OF_SYMBOL_DEFINITION Null */
/**
 * @summary Null
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Null  ::=  NULL
 * ```
 */
export type Null = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION Null */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Null */
let _cached_decoder_for_Null: $.ASN1Decoder<Null> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Null */

/* START_OF_SYMBOL_DEFINITION _decode_Null */
/**
 * @summary Decodes an ASN.1 element into a(n) Null
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Null} The decoded data structure.
 */
export function _decode_Null(el: _Element) {
    if (!_cached_decoder_for_Null) {
        _cached_decoder_for_Null = $._decodeNull;
    }
    return _cached_decoder_for_Null(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Null */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Null */
let _cached_encoder_for_Null: $.ASN1Encoder<Null> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Null */

/* START_OF_SYMBOL_DEFINITION _encode_Null */
/**
 * @summary Encodes a(n) Null into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Null, encoded as an ASN.1 Element.
 */
export function _encode_Null(value: Null, elGetter: $.ASN1Encoder<Null>) {
    if (!_cached_encoder_for_Null) {
        _cached_encoder_for_Null = $._encodeNull;
    }
    return _cached_encoder_for_Null(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Null */

/* eslint-enable */
