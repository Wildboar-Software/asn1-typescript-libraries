/* eslint-disable */
import {
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
import {
    MonthMask,
    _decode_MonthMask,
    _encode_MonthMask,
} from '../Schedulerev1-ASN1Module/MonthMask.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SequenceOfMonths */
/**
 * @summary SequenceOfMonths
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfMonths  ::=  SEQUENCE OF MonthMask
 * ```
 */
export type SequenceOfMonths = MonthMask[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfMonths */
let _cached_decoder_for_SequenceOfMonths: $.ASN1Decoder<SequenceOfMonths> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceOfMonths */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfMonths
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfMonths} The decoded data structure.
 */
export function _decode_SequenceOfMonths(el: _Element) {
    if (!_cached_decoder_for_SequenceOfMonths) {
        _cached_decoder_for_SequenceOfMonths = $._decodeSequenceOf<MonthMask>(
            () => _decode_MonthMask
        );
    }
    return _cached_decoder_for_SequenceOfMonths(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfMonths */
let _cached_encoder_for_SequenceOfMonths: $.ASN1Encoder<SequenceOfMonths> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfMonths */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceOfMonths */
/**
 * @summary Encodes a(n) SequenceOfMonths into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfMonths, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfMonths(
    value: SequenceOfMonths,
    elGetter: $.ASN1Encoder<SequenceOfMonths>
) {
    if (!_cached_encoder_for_SequenceOfMonths) {
        _cached_encoder_for_SequenceOfMonths = $._encodeSequenceOf<MonthMask>(
            () => _encode_MonthMask,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfMonths(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceOfMonths */

/* eslint-enable */
