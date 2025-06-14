/* eslint-disable */
import {
    IA5String,
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

/* START_OF_SYMBOL_DEFINITION TelephonyString */
/**
 * @summary TelephonyString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelephonyString  ::=
 *   IA5String
 *     (FROM ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "*" |
 *            "#"))(SIZE (1..15))
 * ```
 */
export type TelephonyString = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION TelephonyString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephonyString */
let _cached_decoder_for_TelephonyString: $.ASN1Decoder<TelephonyString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TelephonyString */

/* START_OF_SYMBOL_DEFINITION _decode_TelephonyString */
/**
 * @summary Decodes an ASN.1 element into a(n) TelephonyString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TelephonyString} The decoded data structure.
 */
export function _decode_TelephonyString(el: _Element) {
    if (!_cached_decoder_for_TelephonyString) {
        _cached_decoder_for_TelephonyString = $._decodeIA5String;
    }
    return _cached_decoder_for_TelephonyString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TelephonyString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephonyString */
let _cached_encoder_for_TelephonyString: $.ASN1Encoder<TelephonyString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TelephonyString */

/* START_OF_SYMBOL_DEFINITION _encode_TelephonyString */
/**
 * @summary Encodes a(n) TelephonyString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TelephonyString, encoded as an ASN.1 Element.
 */
export function _encode_TelephonyString(
    value: TelephonyString,
    elGetter: $.ASN1Encoder<TelephonyString>
) {
    if (!_cached_encoder_for_TelephonyString) {
        _cached_encoder_for_TelephonyString = $._encodeIA5String;
    }
    return _cached_encoder_for_TelephonyString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TelephonyString */

/* eslint-enable */
