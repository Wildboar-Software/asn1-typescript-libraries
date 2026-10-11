/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UUID, _decode_UUID, _encode_UUID } from "../TS33128Payloads/UUID.ta.mjs";
// export { UUID, _decode_UUID, _encode_UUID } from "../TS33128Payloads/UUID.ta.mjs";


/**
 * @summary RCSConversationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSConversationID  ::=  UUID
 * ```
 */
export
type RCSConversationID = UUID; // DefinedType

let _cached_decoder_for_RCSConversationID: $.ASN1Decoder<RCSConversationID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSConversationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSConversationID (el: _Element): RCSConversationID {
    if (!_cached_decoder_for_RCSConversationID) { _cached_decoder_for_RCSConversationID = _decode_UUID; }
    return _cached_decoder_for_RCSConversationID(el);
}

let _cached_encoder_for_RCSConversationID: $.ASN1Encoder<RCSConversationID> | null = null;

/**
 * @summary Encodes a(n) RCSConversationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSConversationID, encoded as an ASN.1 Element.
 */
export
function _encode_RCSConversationID (value: RCSConversationID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSConversationID) { _cached_encoder_for_RCSConversationID = _encode_UUID; }
    return _cached_encoder_for_RCSConversationID(value, elGetter);
}


/* eslint-enable */
