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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.mjs';

/**
 * @summary SequenceOfDays
 * @description
 *
 * Syntax of `sequenceOfDays` (`{schedAtt 6}`). Sequence of
 * daily time-of-day schedules with 24-hour periodicity. The
 * first element applies when the object becomes active; each
 * successor in turn, then the sequence repeats. Unspecified at
 * create defaults to a single full-day interval (SMO activity
 * continually active). ITU-T Rec. X.746 (02/00)
 * [§8.3.4](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.4.7, A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfDays  ::=  SEQUENCE OF TimesOfDayWps
 * ```
 */
export type SequenceOfDays = TimesOfDayWps[]; // SequenceOfType


let _cached_decoder_for_SequenceOfDays: $.ASN1Decoder<SequenceOfDays> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfDays
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfDays} The decoded data structure.
 */
export function _decode_SequenceOfDays(el: _Element): SequenceOfDays {
    if (!_cached_decoder_for_SequenceOfDays) {
        _cached_decoder_for_SequenceOfDays = $._decodeSequenceOf<TimesOfDayWps>(
            () => _decode_TimesOfDayWps
        );
    }
    return _cached_decoder_for_SequenceOfDays(el);
}


let _cached_encoder_for_SequenceOfDays: $.ASN1Encoder<SequenceOfDays> | null = null;


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
): _Element {
    if (!_cached_encoder_for_SequenceOfDays) {
        _cached_encoder_for_SequenceOfDays = $._encodeSequenceOf<TimesOfDayWps>(
            () => _encode_TimesOfDayWps,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfDays(value, elGetter);
}


/* eslint-enable */
