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
    NormalValue,
    _decode_NormalValue,
    _encode_NormalValue,
} from '../E-health-Data-Message/NormalValue.ta.mjs';

/**
 * @summary NormalValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NormalValues  ::=  SEQUENCE OF NormalValue
 * ```
 */
export type NormalValues = NormalValue[]; // SequenceOfType


let _cached_decoder_for_NormalValues: $.ASN1Decoder<NormalValues> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NormalValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NormalValues} The decoded data structure.
 */
export function _decode_NormalValues(el: _Element) {
    if (!_cached_decoder_for_NormalValues) {
        _cached_decoder_for_NormalValues = $._decodeSequenceOf<NormalValue>(
            () => _decode_NormalValue
        );
    }
    return _cached_decoder_for_NormalValues(el);
}


let _cached_encoder_for_NormalValues: $.ASN1Encoder<NormalValues> | null = null;


/**
 * @summary Encodes a(n) NormalValues into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NormalValues, encoded as an ASN.1 Element.
 */
export function _encode_NormalValues(
    value: NormalValues,
    elGetter: $.ASN1Encoder<NormalValues>
) {
    if (!_cached_encoder_for_NormalValues) {
        _cached_encoder_for_NormalValues = $._encodeSequenceOf<NormalValue>(
            () => _encode_NormalValue,
            $.BER
        );
    }
    return _cached_encoder_for_NormalValues(value, elGetter);
}


/* eslint-enable */
