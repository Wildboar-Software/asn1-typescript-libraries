/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-SCF-SCF-datatypes/CallConditions.ta.mjs";
// export { CallConditions, _decode_CallConditions, _encode_CallConditions } from "../IN-SCF-SCF-datatypes/CallConditions.ta.mjs";
import { RequestedNotifications_Item_callConditionWithPartyID, _decode_RequestedNotifications_Item_callConditionWithPartyID, _encode_RequestedNotifications_Item_callConditionWithPartyID } from "../IN-SCF-SCF-datatypes/RequestedNotifications-Item-callConditionWithPartyID.ta.mjs";
// export { RequestedNotifications_Item_callConditionWithPartyID, _decode_RequestedNotifications_Item_callConditionWithPartyID, _encode_RequestedNotifications_Item_callConditionWithPartyID } from "../IN-SCF-SCF-datatypes/RequestedNotifications-Item-callConditionWithPartyID.ta.mjs";


/**
 * @summary RequestedNotifications_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedNotifications-Item ::=
 * CHOICE {
 *   callCondition CallConditions,
 *   callConditionWithPartyID SEQUENCE {
 *     callCondition CallConditions,
 *     partyID [9] PartyID
 *   }
 * }
 * ```
 */
export
type RequestedNotifications_Item =
    { callCondition: CallConditions } /* CHOICE_ALT_ROOT */
    | { callConditionWithPartyID: RequestedNotifications_Item_callConditionWithPartyID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RequestedNotifications_Item: $.ASN1Decoder<RequestedNotifications_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedNotifications_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedNotifications_Item (el: _Element): RequestedNotifications_Item {
    if (!_cached_decoder_for_RequestedNotifications_Item) { _cached_decoder_for_RequestedNotifications_Item = $._decode_inextensible_choice<RequestedNotifications_Item>({
    "CONTEXT 0": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 1": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 2": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 3": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 4": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 5": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 6": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 7": [ "callCondition", _decode_CallConditions ],
    "CONTEXT 8": [ "callCondition", _decode_CallConditions ],
    "UNIVERSAL 16": [ "callConditionWithPartyID", _decode_RequestedNotifications_Item_callConditionWithPartyID ]
}); }
    return _cached_decoder_for_RequestedNotifications_Item(el);
}

let _cached_encoder_for_RequestedNotifications_Item: $.ASN1Encoder<RequestedNotifications_Item> | null = null;

/**
 * @summary Encodes a(n) RequestedNotifications_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedNotifications_Item, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedNotifications_Item (value: RequestedNotifications_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedNotifications_Item) { _cached_encoder_for_RequestedNotifications_Item = $._encode_choice<RequestedNotifications_Item>({
    "callCondition": _encode_CallConditions,
    "callConditionWithPartyID": _encode_RequestedNotifications_Item_callConditionWithPartyID,
}, $.BER); }
    return _cached_encoder_for_RequestedNotifications_Item(value, elGetter);
}


/* eslint-enable */
