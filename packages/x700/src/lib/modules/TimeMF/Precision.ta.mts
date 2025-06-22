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
 * @summary Precision
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precision  ::=
 *   TimeInterval
 * ```
 */
export type Precision = TimeInterval; // DefinedType

let _cached_decoder_for_Precision: $.ASN1Decoder<Precision> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Precision
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Precision} The decoded data structure.
 */
export function _decode_Precision(el: _Element) {
    if (!_cached_decoder_for_Precision) {
        _cached_decoder_for_Precision = _decode_TimeInterval;
    }
    return _cached_decoder_for_Precision(el);
}

let _cached_encoder_for_Precision: $.ASN1Encoder<Precision> | null = null;

/**
 * @summary Encodes a(n) Precision into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Precision, encoded as an ASN.1 Element.
 */
export function _encode_Precision(
    value: Precision,
    elGetter: $.ASN1Encoder<Precision>
) {
    if (!_cached_encoder_for_Precision) {
        _cached_encoder_for_Precision = _encode_TimeInterval;
    }
    return _cached_encoder_for_Precision(value, elGetter);
}


/* eslint-enable */
