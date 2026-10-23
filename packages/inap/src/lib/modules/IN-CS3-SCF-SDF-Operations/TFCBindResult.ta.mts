/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TFCBindArgument, _decode_TFCBindArgument, _encode_TFCBindArgument } from "../IN-CS3-SCF-SDF-Operations/TFCBindArgument.ta.mjs";
// export { TFCBindArgument, _decode_TFCBindArgument, _encode_TFCBindArgument } from "../IN-CS3-SCF-SDF-Operations/TFCBindArgument.ta.mjs";


/**
 * @summary TFCBindResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFCBindResult  ::= 
 *   TFCBindArgument
 * ```
 */
export
type TFCBindResult = TFCBindArgument; // DefinedType

let _cached_decoder_for_TFCBindResult: $.ASN1Decoder<TFCBindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TFCBindResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TFCBindResult (el: _Element): TFCBindResult {
    if (!_cached_decoder_for_TFCBindResult) { _cached_decoder_for_TFCBindResult = _decode_TFCBindArgument; }
    return _cached_decoder_for_TFCBindResult(el);
}

let _cached_encoder_for_TFCBindResult: $.ASN1Encoder<TFCBindResult> | null = null;

/**
 * @summary Encodes a(n) TFCBindResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TFCBindResult, encoded as an ASN.1 Element.
 */
export
function _encode_TFCBindResult (value: TFCBindResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TFCBindResult) { _cached_encoder_for_TFCBindResult = _encode_TFCBindArgument; }
    return _cached_encoder_for_TFCBindResult(value, elGetter);
}


/* eslint-enable */
