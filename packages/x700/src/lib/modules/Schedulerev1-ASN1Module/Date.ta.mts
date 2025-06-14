/* eslint-disable */
import {
    VisibleString,
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

/* START_OF_SYMBOL_DEFINITION Date */
/**
 * @summary Date
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date  ::=  VisibleString(SIZE (8))
 * ```
 */
export type Date = VisibleString; // VisibleString
/* END_OF_SYMBOL_DEFINITION Date */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Date */
let _cached_decoder_for_Date: $.ASN1Decoder<Date> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Date */

/* START_OF_SYMBOL_DEFINITION _decode_Date */
/**
 * @summary Decodes an ASN.1 element into a(n) Date
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Date} The decoded data structure.
 */
export function _decode_Date(el: _Element) {
    if (!_cached_decoder_for_Date) {
        _cached_decoder_for_Date = $._decodeVisibleString;
    }
    return _cached_decoder_for_Date(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Date */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Date */
let _cached_encoder_for_Date: $.ASN1Encoder<Date> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Date */

/* START_OF_SYMBOL_DEFINITION _encode_Date */
/**
 * @summary Encodes a(n) Date into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date, encoded as an ASN.1 Element.
 */
export function _encode_Date(value: Date, elGetter: $.ASN1Encoder<Date>) {
    if (!_cached_encoder_for_Date) {
        _cached_encoder_for_Date = $._encodeVisibleString;
    }
    return _cached_encoder_for_Date(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Date */

/* eslint-enable */
