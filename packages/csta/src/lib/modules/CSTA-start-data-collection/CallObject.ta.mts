/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";



/**
 * @summary CallObject
 * @description
 *
 * `device`: next connection at that device (rejected if any call is already
 * present). `call`: that connection (ECMA-269 §25.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallObject  ::=  CHOICE 
 * {    device                DeviceID,
 *     call                ConnectionID }
 * ```
 */
export
type CallObject =
    { device: DeviceID } /* CHOICE_ALT_ROOT */
    | { call: ConnectionID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallObject: $.ASN1Decoder<CallObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallObject (el: _Element): CallObject {
    if (!_cached_decoder_for_CallObject) { _cached_decoder_for_CallObject = $._decode_inextensible_choice<CallObject>({
    "UNIVERSAL 16": [ "device", _decode_DeviceID ],
    "APPLICATION 11": [ "call", _decode_ConnectionID ]
}); }
    return _cached_decoder_for_CallObject(el);
}

let _cached_encoder_for_CallObject: $.ASN1Encoder<CallObject> | null = null;

/**
 * @summary Encodes a(n) CallObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallObject, encoded as an ASN.1 Element.
 */
export
function _encode_CallObject (value: CallObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallObject) { _cached_encoder_for_CallObject = $._encode_choice<CallObject>({
    "device": _encode_DeviceID,
    "call": _encode_ConnectionID,
}, $.BER); }
    return _cached_encoder_for_CallObject(value, elGetter);
}


/* eslint-enable */
