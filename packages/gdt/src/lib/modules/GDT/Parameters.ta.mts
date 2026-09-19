/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Parameter, _decode_Parameter, _encode_Parameter } from "../GDT/Parameter.ta.mjs";
// export { Parameter, _decode_Parameter, _encode_Parameter } from "../GDT/Parameter.ta.mjs";


/**
 * @summary Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Parameters  ::=  SEQUENCE OF Parameter
 * ```
 */
export
type Parameters = Parameter[]; // SequenceOfType

let _cached_decoder_for_Parameters: $.ASN1Decoder<Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Parameters (el: _Element): Parameters {
    if (!_cached_decoder_for_Parameters) { _cached_decoder_for_Parameters = $._decodeSequenceOf<Parameter>(() => _decode_Parameter); }
    return _cached_decoder_for_Parameters(el);
}

let _cached_encoder_for_Parameters: $.ASN1Encoder<Parameters> | null = null;

/**
 * @summary Encodes a(n) Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_Parameters (value: Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Parameters) { _cached_encoder_for_Parameters = $._encodeSequenceOf<Parameter>(() => _encode_Parameter, $.BER); }
    return _cached_encoder_for_Parameters(value, elGetter);
}


/* eslint-enable */
