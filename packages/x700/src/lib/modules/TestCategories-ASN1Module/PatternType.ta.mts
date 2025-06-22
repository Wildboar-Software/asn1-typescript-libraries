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
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../TestCategories-ASN1Module/DataType.ta.mjs';
/**
 * @summary PatternType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PatternType  ::=  DataType
 * ```
 */
export type PatternType = DataType; // DefinedType

let _cached_decoder_for_PatternType: $.ASN1Decoder<PatternType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PatternType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PatternType} The decoded data structure.
 */
export function _decode_PatternType(el: _Element) {
    if (!_cached_decoder_for_PatternType) {
        _cached_decoder_for_PatternType = _decode_DataType;
    }
    return _cached_decoder_for_PatternType(el);
}

let _cached_encoder_for_PatternType: $.ASN1Encoder<PatternType> | null = null;

/**
 * @summary Encodes a(n) PatternType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PatternType, encoded as an ASN.1 Element.
 */
export function _encode_PatternType(
    value: PatternType,
    elGetter: $.ASN1Encoder<PatternType>
) {
    if (!_cached_encoder_for_PatternType) {
        _cached_encoder_for_PatternType = _encode_DataType;
    }
    return _cached_encoder_for_PatternType(value, elGetter);
}


/* eslint-enable */
