/* eslint-disable */
import {
    GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION DateOfLeap */
/**
 * @summary DateOfLeap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateOfLeap  ::=  GeneralizedTime
 * ```
 */
export type DateOfLeap = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateOfLeap */
let _cached_decoder_for_DateOfLeap: $.ASN1Decoder<DateOfLeap> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _decode_DateOfLeap */
/**
 * @summary Decodes an ASN.1 element into a(n) DateOfLeap
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DateOfLeap} The decoded data structure.
 */
export function _decode_DateOfLeap(el: _Element) {
    if (!_cached_decoder_for_DateOfLeap) {
        _cached_decoder_for_DateOfLeap = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_DateOfLeap(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateOfLeap */
let _cached_encoder_for_DateOfLeap: $.ASN1Encoder<DateOfLeap> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateOfLeap */

/* START_OF_SYMBOL_DEFINITION _encode_DateOfLeap */
/**
 * @summary Encodes a(n) DateOfLeap into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateOfLeap, encoded as an ASN.1 Element.
 */
export function _encode_DateOfLeap(
    value: DateOfLeap,
    elGetter: $.ASN1Encoder<DateOfLeap>
) {
    if (!_cached_encoder_for_DateOfLeap) {
        _cached_encoder_for_DateOfLeap = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_DateOfLeap(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DateOfLeap */

/* eslint-enable */
