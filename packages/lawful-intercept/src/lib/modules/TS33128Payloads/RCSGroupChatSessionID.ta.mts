/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIPURI, _decode_SIPURI, _encode_SIPURI } from "../TS33128Payloads/SIPURI.ta.mjs";
// export { SIPURI, _decode_SIPURI, _encode_SIPURI } from "../TS33128Payloads/SIPURI.ta.mjs";


/**
 * @summary RCSGroupChatSessionID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSGroupChatSessionID  ::=  SIPURI
 * ```
 */
export
type RCSGroupChatSessionID = SIPURI; // DefinedType

let _cached_decoder_for_RCSGroupChatSessionID: $.ASN1Decoder<RCSGroupChatSessionID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSGroupChatSessionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSGroupChatSessionID (el: _Element): RCSGroupChatSessionID {
    if (!_cached_decoder_for_RCSGroupChatSessionID) { _cached_decoder_for_RCSGroupChatSessionID = _decode_SIPURI; }
    return _cached_decoder_for_RCSGroupChatSessionID(el);
}

let _cached_encoder_for_RCSGroupChatSessionID: $.ASN1Encoder<RCSGroupChatSessionID> | null = null;

/**
 * @summary Encodes a(n) RCSGroupChatSessionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSGroupChatSessionID, encoded as an ASN.1 Element.
 */
export
function _encode_RCSGroupChatSessionID (value: RCSGroupChatSessionID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSGroupChatSessionID) { _cached_encoder_for_RCSGroupChatSessionID = _encode_SIPURI; }
    return _cached_encoder_for_RCSGroupChatSessionID(value, elGetter);
}


/* eslint-enable */
