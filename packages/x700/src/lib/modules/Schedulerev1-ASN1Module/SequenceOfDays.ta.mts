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
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SequenceOfDays */
/**
 * @summary SequenceOfDays
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfDays  ::=  SEQUENCE OF TimesOfDayWps
 * ```
 */
export type SequenceOfDays = TimesOfDayWps[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SequenceOfDays */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfDays */
let _cached_decoder_for_SequenceOfDays: $.ASN1Decoder<SequenceOfDays> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceOfDays */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceOfDays */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfDays
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfDays} The decoded data structure.
 */
export function _decode_SequenceOfDays(el: _Element) {
    if (!_cached_decoder_for_SequenceOfDays) {
        _cached_decoder_for_SequenceOfDays = $._decodeSequenceOf<TimesOfDayWps>(
            () => _decode_TimesOfDayWps
        );
    }
    return _cached_decoder_for_SequenceOfDays(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceOfDays */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfDays */
let _cached_encoder_for_SequenceOfDays: $.ASN1Encoder<SequenceOfDays> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceOfDays */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceOfDays */
/**
 * @summary Encodes a(n) SequenceOfDays into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfDays, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfDays(
    value: SequenceOfDays,
    elGetter: $.ASN1Encoder<SequenceOfDays>
) {
    if (!_cached_encoder_for_SequenceOfDays) {
        _cached_encoder_for_SequenceOfDays = $._encodeSequenceOf<TimesOfDayWps>(
            () => _encode_TimesOfDayWps,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfDays(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceOfDays */

/* eslint-enable */
