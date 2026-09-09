/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";



/**
 * @summary CSTAObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAObject  ::=  CHOICE
 * {    deviceObject DeviceID,
 *     callObject   ConnectionID }
 * ```
 */
export
type CSTAObject =
    { deviceObject: DeviceID } /* CHOICE_ALT_ROOT */
    | { callObject: ConnectionID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CSTAObject: $.ASN1Decoder<CSTAObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAObject (el: _Element): CSTAObject {
    if (!_cached_decoder_for_CSTAObject) { _cached_decoder_for_CSTAObject = $._decode_inextensible_choice<CSTAObject>({
    "UNIVERSAL 16": [ "deviceObject", _decode_DeviceID ],
    "APPLICATION 11": [ "callObject", _decode_ConnectionID ]
}); }
    return _cached_decoder_for_CSTAObject(el);
}

let _cached_encoder_for_CSTAObject: $.ASN1Encoder<CSTAObject> | null = null;

/**
 * @summary Encodes a(n) CSTAObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAObject, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAObject (value: CSTAObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAObject) { _cached_encoder_for_CSTAObject = $._encode_choice<CSTAObject>({
    "deviceObject": _encode_DeviceID,
    "callObject": _encode_ConnectionID,
}, $.BER); }
    return _cached_encoder_for_CSTAObject(value, elGetter);
}


/* eslint-enable */
