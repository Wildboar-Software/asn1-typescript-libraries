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

/* START_OF_SYMBOL_DEFINITION None */
/**
 * @summary None
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * None  ::=  NULL
 * ```
 */
export type None = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION None */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_None */
let _cached_decoder_for_None: $.ASN1Decoder<None> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_None */

/* START_OF_SYMBOL_DEFINITION _decode_None */
/**
 * @summary Decodes an ASN.1 element into a(n) None
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {None} The decoded data structure.
 */
export function _decode_None(el: _Element) {
    if (!_cached_decoder_for_None) {
        _cached_decoder_for_None = $._decodeNull;
    }
    return _cached_decoder_for_None(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_None */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_None */
let _cached_encoder_for_None: $.ASN1Encoder<None> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_None */

/* START_OF_SYMBOL_DEFINITION _encode_None */
/**
 * @summary Encodes a(n) None into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The None, encoded as an ASN.1 Element.
 */
export function _encode_None(value: None, elGetter: $.ASN1Encoder<None>) {
    if (!_cached_encoder_for_None) {
        _cached_encoder_for_None = $._encodeNull;
    }
    return _cached_encoder_for_None(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_None */

/* eslint-enable */
