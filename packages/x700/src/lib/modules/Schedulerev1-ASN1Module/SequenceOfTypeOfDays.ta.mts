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
import * as $ from '@wildboar/asn1/functional';
import {
    TypeOfDaysMaskWps,
    _decode_TypeOfDaysMaskWps,
    _encode_TypeOfDaysMaskWps,
} from '../Schedulerev1-ASN1Module/TypeOfDaysMaskWps.ta.mjs';

/**
 * @summary SequenceOfTypeOfDays
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfTypeOfDays  ::=  SEQUENCE SIZE (1) OF TypeOfDaysMaskWps
 * ```
 */
export type SequenceOfTypeOfDays = TypeOfDaysMaskWps[]; // SequenceOfType


let _cached_decoder_for_SequenceOfTypeOfDays: $.ASN1Decoder<SequenceOfTypeOfDays> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfTypeOfDays
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfTypeOfDays} The decoded data structure.
 */
export function _decode_SequenceOfTypeOfDays(el: _Element) {
    if (!_cached_decoder_for_SequenceOfTypeOfDays) {
        _cached_decoder_for_SequenceOfTypeOfDays = $._decodeSequenceOf<TypeOfDaysMaskWps>(
            () => _decode_TypeOfDaysMaskWps
        );
    }
    return _cached_decoder_for_SequenceOfTypeOfDays(el);
}


let _cached_encoder_for_SequenceOfTypeOfDays: $.ASN1Encoder<SequenceOfTypeOfDays> | null = null;


/**
 * @summary Encodes a(n) SequenceOfTypeOfDays into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfTypeOfDays, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfTypeOfDays(
    value: SequenceOfTypeOfDays,
    elGetter: $.ASN1Encoder<SequenceOfTypeOfDays>
) {
    if (!_cached_encoder_for_SequenceOfTypeOfDays) {
        _cached_encoder_for_SequenceOfTypeOfDays = $._encodeSequenceOf<TypeOfDaysMaskWps>(
            () => _encode_TypeOfDaysMaskWps,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfTypeOfDays(value, elGetter);
}


/* eslint-enable */
