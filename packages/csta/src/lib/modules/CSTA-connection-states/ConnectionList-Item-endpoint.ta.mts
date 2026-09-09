/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { NULL, ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary ConnectionList_Item_endpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionList-Item-endpoint ::= CHOICE {
 *     deviceID [UNIVERSAL 16],
 *     notKnown [UNIVERSAL 5],
 *     restricted [1]
 * }
 * ```
 */
export
type ConnectionList_Item_endpoint =
    { deviceID: DeviceID } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */
    | { restricted: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConnectionList_Item_endpoint: $.ASN1Decoder<ConnectionList_Item_endpoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionList_Item_endpoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionList_Item_endpoint (el: _Element): ConnectionList_Item_endpoint {
    if (!_cached_decoder_for_ConnectionList_Item_endpoint) { _cached_decoder_for_ConnectionList_Item_endpoint = $._decode_inextensible_choice<ConnectionList_Item_endpoint>({
    "UNIVERSAL 16": [ "deviceID", _decode_DeviceID ],
    "UNIVERSAL 5": [ "notKnown", $._decodeNull ],
    "CONTEXT 1": [ "restricted", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_ConnectionList_Item_endpoint(el);
}

let _cached_encoder_for_ConnectionList_Item_endpoint: $.ASN1Encoder<ConnectionList_Item_endpoint> | null = null;

/**
 * @summary Encodes a(n) ConnectionList_Item_endpoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionList_Item_endpoint, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionList_Item_endpoint (value: ConnectionList_Item_endpoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionList_Item_endpoint) { _cached_encoder_for_ConnectionList_Item_endpoint = $._encode_choice<ConnectionList_Item_endpoint>({
    "deviceID": _encode_DeviceID,
    "notKnown": $._encodeNull,
    "restricted": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConnectionList_Item_endpoint(value, elGetter);
}


/* eslint-enable */
