/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SigParamValue, _decode_SigParamValue, _encode_SigParamValue } from "../MEDIA-GATEWAY-CONTROL/SigParamValue.ta.mjs";
// export { SigParamValue, _decode_SigParamValue, _encode_SigParamValue } from "../MEDIA-GATEWAY-CONTROL/SigParamValue.ta.mjs";


/**
 * @summary SigParamValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SigParamValues  ::=  SEQUENCE OF SigParamValue
 * ```
 */
export
type SigParamValues = SigParamValue[]; // SequenceOfType

let _cached_decoder_for_SigParamValues: $.ASN1Decoder<SigParamValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SigParamValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SigParamValues (el: _Element): SigParamValues {
    if (!_cached_decoder_for_SigParamValues) { _cached_decoder_for_SigParamValues = $._decodeSequenceOf<SigParamValue>(() => _decode_SigParamValue); }
    return _cached_decoder_for_SigParamValues(el);
}

let _cached_encoder_for_SigParamValues: $.ASN1Encoder<SigParamValues> | null = null;

/**
 * @summary Encodes a(n) SigParamValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigParamValues, encoded as an ASN.1 Element.
 */
export
function _encode_SigParamValues (value: SigParamValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SigParamValues) { _cached_encoder_for_SigParamValues = $._encodeSequenceOf<SigParamValue>(() => _encode_SigParamValue, $.BER); }
    return _cached_encoder_for_SigParamValues(value, elGetter);
}


/* eslint-enable */
