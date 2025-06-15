/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    MarkingCode,
    _decode_MarkingCode,
    _encode_MarkingCode,
} from "../SIOsAccessControl-MODULE/MarkingCode.ta.mjs";

/**
 * @summary MarkingCodes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MarkingCodes  ::=  SEQUENCE SIZE (1..MAX) OF MarkingCode
 * ```
 */
export type MarkingCodes = MarkingCode[]; // SequenceOfType


let _cached_decoder_for_MarkingCodes: $.ASN1Decoder<MarkingCodes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MarkingCodes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MarkingCodes} The decoded data structure.
 */
export function _decode_MarkingCodes(el: _Element) {
    if (!_cached_decoder_for_MarkingCodes) {
        _cached_decoder_for_MarkingCodes = $._decodeSequenceOf<MarkingCode>(
            () => _decode_MarkingCode
        );
    }
    return _cached_decoder_for_MarkingCodes(el);
}


let _cached_encoder_for_MarkingCodes: $.ASN1Encoder<MarkingCodes> | null = null;


/**
 * @summary Encodes a(n) MarkingCodes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MarkingCodes, encoded as an ASN.1 Element.
 */
export function _encode_MarkingCodes(
    value: MarkingCodes,
    elGetter: $.ASN1Encoder<MarkingCodes>
) {
    if (!_cached_encoder_for_MarkingCodes) {
        _cached_encoder_for_MarkingCodes = $._encodeSequenceOf<MarkingCode>(
            () => _encode_MarkingCode,
            $.BER
        );
    }
    return _cached_encoder_for_MarkingCodes(value, elGetter);
}


/* eslint-enable */
