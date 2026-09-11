/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary ConnectionList_Item_associatedNID
 * @description
 *
 * Network Interface Device (trunk, CO line) associated with an
 * external far-end in a `ConnectionList` entry (ECMA-269 §12.2.9).
 * Mandatory on external calls; omit when the device is inside the
 * switching sub-domain. If present, `endpoint` (when provided) is
 * that external device.
 *
 * - `deviceID`: NID is provided (any Clause 10 format).
 * - `notKnown`: switching function cannot provide the NID.
 *
 * Restricted is not a status for this component.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionList-Item-associatedNID ::= CHOICE {
 *     deviceID [UNIVERSAL 16],
 *     notKnown [UNIVERSAL 5]
 * }
 * ```
 */
export
type ConnectionList_Item_associatedNID =
    { deviceID: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConnectionList_Item_associatedNID: $.ASN1Decoder<ConnectionList_Item_associatedNID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionList_Item_associatedNID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionList_Item_associatedNID (el: _Element): ConnectionList_Item_associatedNID {
    if (!_cached_decoder_for_ConnectionList_Item_associatedNID) { _cached_decoder_for_ConnectionList_Item_associatedNID = $._decode_inextensible_choice<ConnectionList_Item_associatedNID>({
    "UNIVERSAL 16": [ "deviceID", _decode_DeviceID ],
    "UNIVERSAL 5": [ "notKnown", $._decodeNull ]
}); }
    return _cached_decoder_for_ConnectionList_Item_associatedNID(el);
}

let _cached_encoder_for_ConnectionList_Item_associatedNID: $.ASN1Encoder<ConnectionList_Item_associatedNID> | null = null;

/**
 * @summary Encodes a(n) ConnectionList_Item_associatedNID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionList_Item_associatedNID, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionList_Item_associatedNID (value: ConnectionList_Item_associatedNID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionList_Item_associatedNID) { _cached_encoder_for_ConnectionList_Item_associatedNID = $._encode_choice<ConnectionList_Item_associatedNID>({
    "deviceID": _encode_DeviceID,
    "notKnown": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ConnectionList_Item_associatedNID(value, elGetter);
}


/* eslint-enable */
