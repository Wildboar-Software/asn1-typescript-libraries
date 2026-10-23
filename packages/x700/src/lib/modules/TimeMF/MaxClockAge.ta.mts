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
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/**
 * @summary MaxClockAge
 * @description
 *
 * Maximum interval without an update that a reference clock
 * is still considered valid. Syntax of `maximumClockAge`.
 * Also the interval over which `maximumSkew` is measured.
 * ITU-T Rec. X.743 (06/98)
 * [§B.3.3](https://www.itu.int/rec/T-REC-X.743-199806-I), B.3.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxClockAge  ::=  TimeInterval
 * ```
 */
export type MaxClockAge = TimeInterval; // DefinedType

let _cached_decoder_for_MaxClockAge: $.ASN1Decoder<MaxClockAge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxClockAge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxClockAge} The decoded data structure.
 */
export function _decode_MaxClockAge(el: _Element): MaxClockAge {
    if (!_cached_decoder_for_MaxClockAge) {
        _cached_decoder_for_MaxClockAge = _decode_TimeInterval;
    }
    return _cached_decoder_for_MaxClockAge(el);
}

let _cached_encoder_for_MaxClockAge: $.ASN1Encoder<MaxClockAge> | null = null;

/**
 * @summary Encodes a(n) MaxClockAge into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxClockAge, encoded as an ASN.1 Element.
 */
export function _encode_MaxClockAge(
    value: MaxClockAge,
    elGetter: $.ASN1Encoder<MaxClockAge>
): _Element {
    if (!_cached_encoder_for_MaxClockAge) {
        _cached_encoder_for_MaxClockAge = _encode_TimeInterval;
    }
    return _cached_encoder_for_MaxClockAge(value, elGetter);
}


/* eslint-enable */
