/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Response_Item, _decode_Response_Item, _encode_Response_Item } from "../AccessControlFormat-Prompt-1/Response-Item.ta.mjs";
// export { Response_Item, _decode_Response_Item, _encode_Response_Item } from "../AccessControlFormat-Prompt-1/Response-Item.ta.mjs";


/**
 * @summary Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Response  ::=  SEQUENCE OF SEQUENCE {
 *         promptId      [1] PromptId,
 *                              -- Corresponds to a prompt in the challenge, or
 *                              -- may be unprompted, for example "newPassword."
 *                              -- If unprompted, should be "enumerated." 
 *                              -- If this responds to a non-enumerated prompt,
 *                              -- then nonEnumeratedPrompt should contain the
 *                              -- prompt string from the challenge.
 *       promptResponse  [2] CHOICE{
 *                              string       [1] IMPLICIT InternationalString,
 *                              accept       [2] IMPLICIT BOOLEAN,
 *                              acknowledge  [3] IMPLICIT NULL,
 *                              diagnostic   [4] DiagRec,
 *                              encrypted    [5] IMPLICIT Encryption}}
 * ```
 */
export
type Response = Response_Item[]; // SequenceOfType

let _cached_decoder_for_Response: $.ASN1Decoder<Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Response (el: _Element): Response {
    if (!_cached_decoder_for_Response) { _cached_decoder_for_Response = $._decodeSequenceOf<Response_Item>(() => _decode_Response_Item); }
    return _cached_decoder_for_Response(el);
}

let _cached_encoder_for_Response: $.ASN1Encoder<Response> | null = null;

/**
 * @summary Encodes a(n) Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Response, encoded as an ASN.1 Element.
 */
export
function _encode_Response (value: Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Response) { _cached_encoder_for_Response = $._encodeSequenceOf<Response_Item>(() => _encode_Response_Item, $.BER); }
    return _cached_encoder_for_Response(value, elGetter);
}


/* eslint-enable */
