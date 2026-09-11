/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { IA5String, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SubjectOfCall
 * @description
 *
 * Subject or intent of the call (e.g. email subject line, or reason for a voice
 * call). Maximum length from capability exchange. ECMA-269 §12.2.27.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectOfCall  ::=  IA5String
 * ```
 */
export
type SubjectOfCall = IA5String; // IA5String

let _cached_decoder_for_SubjectOfCall: $.ASN1Decoder<SubjectOfCall> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectOfCall
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectOfCall (el: _Element): SubjectOfCall {
    if (!_cached_decoder_for_SubjectOfCall) { _cached_decoder_for_SubjectOfCall = $._decodeIA5String; }
    return _cached_decoder_for_SubjectOfCall(el);
}

let _cached_encoder_for_SubjectOfCall: $.ASN1Encoder<SubjectOfCall> | null = null;

/**
 * @summary Encodes a(n) SubjectOfCall into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectOfCall, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectOfCall (value: SubjectOfCall, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectOfCall) { _cached_encoder_for_SubjectOfCall = $._encodeIA5String; }
    return _cached_encoder_for_SubjectOfCall(value, elGetter);
}


/* eslint-enable */
