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
    ExpressionMatch,
    _decode_ExpressionMatch,
    _encode_ExpressionMatch,
} from '../MHSRoutingORAddressSubtree/ExpressionMatch.ta.mjs';
/**
 * @summary ExpressionMatches
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpressionMatches  ::=  SEQUENCE OF ExpressionMatch
 * ```
 */
export type ExpressionMatches = ExpressionMatch[]; // SequenceOfType

let _cached_decoder_for_ExpressionMatches: $.ASN1Decoder<ExpressionMatches> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExpressionMatches
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpressionMatches} The decoded data structure.
 */
export function _decode_ExpressionMatches(el: _Element) {
    if (!_cached_decoder_for_ExpressionMatches) {
        _cached_decoder_for_ExpressionMatches = $._decodeSequenceOf<ExpressionMatch>(
            () => _decode_ExpressionMatch
        );
    }
    return _cached_decoder_for_ExpressionMatches(el);
}

let _cached_encoder_for_ExpressionMatches: $.ASN1Encoder<ExpressionMatches> | null = null;

/**
 * @summary Encodes a(n) ExpressionMatches into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpressionMatches, encoded as an ASN.1 Element.
 */
export function _encode_ExpressionMatches(
    value: ExpressionMatches,
    elGetter: $.ASN1Encoder<ExpressionMatches>
) {
    if (!_cached_encoder_for_ExpressionMatches) {
        _cached_encoder_for_ExpressionMatches = $._encodeSequenceOf<ExpressionMatch>(
            () => _encode_ExpressionMatch,
            $.BER
        );
    }
    return _cached_encoder_for_ExpressionMatches(value, elGetter);
}


/* eslint-enable */
