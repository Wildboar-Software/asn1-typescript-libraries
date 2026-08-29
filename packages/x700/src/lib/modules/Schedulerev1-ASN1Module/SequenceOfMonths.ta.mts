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
    MonthMask,
    _decode_MonthMask,
    _encode_MonthMask,
} from '../Schedulerev1-ASN1Module/MonthMask.ta.mjs';

/**
 * @summary SequenceOfMonths
 * @description
 *
 * Syntax of `sequenceOfMonths` (`{schedAtt 7}`). Sequence of
 * month masks with one-month periodicity. First element
 * applies when the object becomes active; then the sequence
 * repeats. A month begins at 12 am on the first; extraneous
 * days are ignored. Unspecified at create defaults to every
 * day, full day (continually active). ITU-T Rec. X.746 (02/00)
 * [§8.3.6](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.4.8, A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfMonths  ::=  SEQUENCE OF MonthMask
 * ```
 */
export type SequenceOfMonths = MonthMask[]; // SequenceOfType


let _cached_decoder_for_SequenceOfMonths: $.ASN1Decoder<SequenceOfMonths> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfMonths
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfMonths} The decoded data structure.
 */
export function _decode_SequenceOfMonths(el: _Element): SequenceOfMonths {
    if (!_cached_decoder_for_SequenceOfMonths) {
        _cached_decoder_for_SequenceOfMonths = $._decodeSequenceOf<MonthMask>(
            () => _decode_MonthMask
        );
    }
    return _cached_decoder_for_SequenceOfMonths(el);
}


let _cached_encoder_for_SequenceOfMonths: $.ASN1Encoder<SequenceOfMonths> | null = null;


/**
 * @summary Encodes a(n) SequenceOfMonths into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfMonths, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfMonths(
    value: SequenceOfMonths,
    elGetter: $.ASN1Encoder<SequenceOfMonths>
): _Element {
    if (!_cached_encoder_for_SequenceOfMonths) {
        _cached_encoder_for_SequenceOfMonths = $._encodeSequenceOf<MonthMask>(
            () => _encode_MonthMask,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfMonths(value, elGetter);
}


/* eslint-enable */
