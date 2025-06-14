/* eslint-disable */
import {
    GraphicString,
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

/* START_OF_SYMBOL_DEFINITION NamingString */
/**
 * @summary NamingString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamingString  ::=  GraphicString(SIZE (0..32))
 * ```
 */
export type NamingString = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION NamingString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamingString */
let _cached_decoder_for_NamingString: $.ASN1Decoder<NamingString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamingString */

/* START_OF_SYMBOL_DEFINITION _decode_NamingString */
/**
 * @summary Decodes an ASN.1 element into a(n) NamingString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamingString} The decoded data structure.
 */
export function _decode_NamingString(el: _Element) {
    if (!_cached_decoder_for_NamingString) {
        _cached_decoder_for_NamingString = $._decodeGraphicString;
    }
    return _cached_decoder_for_NamingString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamingString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamingString */
let _cached_encoder_for_NamingString: $.ASN1Encoder<NamingString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamingString */

/* START_OF_SYMBOL_DEFINITION _encode_NamingString */
/**
 * @summary Encodes a(n) NamingString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamingString, encoded as an ASN.1 Element.
 */
export function _encode_NamingString(
    value: NamingString,
    elGetter: $.ASN1Encoder<NamingString>
) {
    if (!_cached_encoder_for_NamingString) {
        _cached_encoder_for_NamingString = $._encodeGraphicString;
    }
    return _cached_encoder_for_NamingString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamingString */

/* eslint-enable */
