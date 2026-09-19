/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AP_invocation_id, _decode_AP_invocation_id, _encode_AP_invocation_id } from "../C1222-PROTOCOL/AP-invocation-id.ta.mjs";
// export { AP_invocation_id, _decode_AP_invocation_id, _encode_AP_invocation_id } from "../C1222-PROTOCOL/AP-invocation-id.ta.mjs";


/**
 * @summary Called_AP_invocation_id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Called-AP-invocation-id  ::=  AP-invocation-id
 * ```
 */
export
type Called_AP_invocation_id = AP_invocation_id; // DefinedType

let _cached_decoder_for_Called_AP_invocation_id: $.ASN1Decoder<Called_AP_invocation_id> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Called_AP_invocation_id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Called_AP_invocation_id (el: _Element): Called_AP_invocation_id {
    if (!_cached_decoder_for_Called_AP_invocation_id) { _cached_decoder_for_Called_AP_invocation_id = _decode_AP_invocation_id; }
    return _cached_decoder_for_Called_AP_invocation_id(el);
}

let _cached_encoder_for_Called_AP_invocation_id: $.ASN1Encoder<Called_AP_invocation_id> | null = null;

/**
 * @summary Encodes a(n) Called_AP_invocation_id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Called_AP_invocation_id, encoded as an ASN.1 Element.
 */
export
function _encode_Called_AP_invocation_id (value: Called_AP_invocation_id, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Called_AP_invocation_id) { _cached_encoder_for_Called_AP_invocation_id = _encode_AP_invocation_id; }
    return _cached_encoder_for_Called_AP_invocation_id(value, elGetter);
}


/* eslint-enable */
