/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SchedulingParameters,
    _decode_SchedulingParameters,
    _encode_SchedulingParameters,
} from "../DirectoryShadowAbstractService/SchedulingParameters.ta.mjs";
/**
 * @summary ConsumerUpdateMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConsumerUpdateMode  ::=  SchedulingParameters
 * ```
 */
export type ConsumerUpdateMode = SchedulingParameters; // DefinedType

let _cached_decoder_for_ConsumerUpdateMode: $.ASN1Decoder<ConsumerUpdateMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConsumerUpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConsumerUpdateMode} The decoded data structure.
 */
export function _decode_ConsumerUpdateMode(el: _Element): ConsumerUpdateMode {
    if (!_cached_decoder_for_ConsumerUpdateMode) {
        _cached_decoder_for_ConsumerUpdateMode = _decode_SchedulingParameters;
    }
    return _cached_decoder_for_ConsumerUpdateMode(el);
}

let _cached_encoder_for_ConsumerUpdateMode: $.ASN1Encoder<ConsumerUpdateMode> | null = null;

/**
 * @summary Encodes a(n) ConsumerUpdateMode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsumerUpdateMode, encoded as an ASN.1 Element.
 */
export function _encode_ConsumerUpdateMode(
    value: ConsumerUpdateMode,
    elGetter: $.ASN1Encoder<ConsumerUpdateMode>
): _Element {
    if (!_cached_encoder_for_ConsumerUpdateMode) {
        _cached_encoder_for_ConsumerUpdateMode = _encode_SchedulingParameters;
    }
    return _cached_encoder_for_ConsumerUpdateMode(value, elGetter);
}


/* eslint-enable */
