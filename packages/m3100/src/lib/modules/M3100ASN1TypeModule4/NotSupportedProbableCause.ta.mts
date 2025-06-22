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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta.mjs';

/**
 * @summary NotSupportedProbableCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotSupportedProbableCause  ::=  SET OF ProbableCause
 * ```
 */
export type NotSupportedProbableCause = ProbableCause[]; // SetOfType


let _cached_decoder_for_NotSupportedProbableCause: $.ASN1Decoder<NotSupportedProbableCause> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NotSupportedProbableCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotSupportedProbableCause} The decoded data structure.
 */
export function _decode_NotSupportedProbableCause(el: _Element) {
    if (!_cached_decoder_for_NotSupportedProbableCause) {
        _cached_decoder_for_NotSupportedProbableCause = $._decodeSetOf<ProbableCause>(
            () => _decode_ProbableCause
        );
    }
    return _cached_decoder_for_NotSupportedProbableCause(el);
}


let _cached_encoder_for_NotSupportedProbableCause: $.ASN1Encoder<NotSupportedProbableCause> | null = null;


/**
 * @summary Encodes a(n) NotSupportedProbableCause into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotSupportedProbableCause, encoded as an ASN.1 Element.
 */
export function _encode_NotSupportedProbableCause(
    value: NotSupportedProbableCause,
    elGetter: $.ASN1Encoder<NotSupportedProbableCause>
) {
    if (!_cached_encoder_for_NotSupportedProbableCause) {
        _cached_encoder_for_NotSupportedProbableCause = $._encodeSetOf<ProbableCause>(
            () => _encode_ProbableCause,
            $.BER
        );
    }
    return _cached_encoder_for_NotSupportedProbableCause(value, elGetter);
}


/* eslint-enable */
