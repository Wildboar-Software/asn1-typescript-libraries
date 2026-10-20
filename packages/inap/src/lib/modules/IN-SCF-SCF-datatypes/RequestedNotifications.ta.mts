/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedNotifications_Item, _decode_RequestedNotifications_Item, _encode_RequestedNotifications_Item } from "../IN-SCF-SCF-datatypes/RequestedNotifications-Item.ta.mjs";
// export { RequestedNotifications_Item, _decode_RequestedNotifications_Item, _encode_RequestedNotifications_Item } from "../IN-SCF-SCF-datatypes/RequestedNotifications-Item.ta.mjs";


/**
 * @summary RequestedNotifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedNotifications  ::= 
 *   SET OF
 *     CHOICE {callCondition             CallConditions,
 *             callConditionWithPartyID
 *               SEQUENCE {callCondition  CallConditions,
 *                         partyID        [9]  PartyID}}
 * ```
 */
export
type RequestedNotifications = RequestedNotifications_Item[]; // SetOfType

let _cached_decoder_for_RequestedNotifications: $.ASN1Decoder<RequestedNotifications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedNotifications
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedNotifications (el: _Element): RequestedNotifications {
    if (!_cached_decoder_for_RequestedNotifications) { _cached_decoder_for_RequestedNotifications = $._decodeSetOf<RequestedNotifications_Item>(() => _decode_RequestedNotifications_Item); }
    return _cached_decoder_for_RequestedNotifications(el);
}

let _cached_encoder_for_RequestedNotifications: $.ASN1Encoder<RequestedNotifications> | null = null;

/**
 * @summary Encodes a(n) RequestedNotifications into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedNotifications, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedNotifications (value: RequestedNotifications, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedNotifications) { _cached_encoder_for_RequestedNotifications = $._encodeSetOf<RequestedNotifications_Item>(() => _encode_RequestedNotifications_Item, $.BER); }
    return _cached_encoder_for_RequestedNotifications(value, elGetter);
}


/* eslint-enable */
