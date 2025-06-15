/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    SingleAttribute,
    _decode_SingleAttribute,
    _encode_SingleAttribute,
} from "../PKIX-CommonTypes-2009/SingleAttribute.ta.mjs";

/**
 * @summary Controls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Controls   ::=  SEQUENCE SIZE(1..MAX) OF SingleAttribute
 *                 {{RegControlSet}}
 * ```
 */
export type Controls = SingleAttribute[]; // SequenceOfType


let _cached_decoder_for_Controls: $.ASN1Decoder<Controls> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Controls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Controls} The decoded data structure.
 */
export function _decode_Controls(el: _Element) {
    if (!_cached_decoder_for_Controls) {
        _cached_decoder_for_Controls = $._decodeSequenceOf<SingleAttribute>(
            () => _decode_SingleAttribute
        );
    }
    return _cached_decoder_for_Controls(el);
}


let _cached_encoder_for_Controls: $.ASN1Encoder<Controls> | null = null;


/**
 * @summary Encodes a(n) Controls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Controls, encoded as an ASN.1 Element.
 */
export function _encode_Controls(
    value: Controls,
    elGetter: $.ASN1Encoder<Controls>
) {
    if (!_cached_encoder_for_Controls) {
        _cached_encoder_for_Controls = $._encodeSequenceOf<SingleAttribute>(
            () => _encode_SingleAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_Controls(value, elGetter);
}


/* eslint-enable */
