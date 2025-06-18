/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AcceptableResponses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcceptableResponses  ::=  SEQUENCE OF RESPONSE.&id({ResponseSet})
 * ```
 */
export type AcceptableResponses = OBJECT_IDENTIFIER[]; // SequenceOfType


let _cached_decoder_for_AcceptableResponses: $.ASN1Decoder<AcceptableResponses> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AcceptableResponses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptableResponses} The decoded data structure.
 */
export function _decode_AcceptableResponses(el: _Element) {
    if (!_cached_decoder_for_AcceptableResponses) {
        _cached_decoder_for_AcceptableResponses = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
        );
    }
    return _cached_decoder_for_AcceptableResponses(el);
}


let _cached_encoder_for_AcceptableResponses: $.ASN1Encoder<AcceptableResponses> | null = null;


/**
 * @summary Encodes a(n) AcceptableResponses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptableResponses, encoded as an ASN.1 Element.
 */
export function _encode_AcceptableResponses(
    value: AcceptableResponses,
    elGetter: $.ASN1Encoder<AcceptableResponses>
) {
    if (!_cached_encoder_for_AcceptableResponses) {
        _cached_encoder_for_AcceptableResponses = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
            () => $._encodeObjectIdentifier,
            $.DER
        );
    }
    return _cached_encoder_for_AcceptableResponses(value, elGetter);
}


/* eslint-enable */
