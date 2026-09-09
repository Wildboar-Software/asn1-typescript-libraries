/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";



/**
 * @summary AssociatedCalledDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociatedCalledDevice  ::=  AssociatedCalledDeviceID
 * ```
 */
export
type AssociatedCalledDevice = AssociatedCalledDeviceID; // DefinedType

let _cached_decoder_for_AssociatedCalledDevice: $.ASN1Decoder<AssociatedCalledDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedCalledDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociatedCalledDevice (el: _Element): AssociatedCalledDevice {
    if (!_cached_decoder_for_AssociatedCalledDevice) { _cached_decoder_for_AssociatedCalledDevice = _decode_AssociatedCalledDeviceID; }
    return _cached_decoder_for_AssociatedCalledDevice(el);
}

let _cached_encoder_for_AssociatedCalledDevice: $.ASN1Encoder<AssociatedCalledDevice> | null = null;

/**
 * @summary Encodes a(n) AssociatedCalledDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedCalledDevice, encoded as an ASN.1 Element.
 */
export
function _encode_AssociatedCalledDevice (value: AssociatedCalledDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociatedCalledDevice) { _cached_encoder_for_AssociatedCalledDevice = _encode_AssociatedCalledDeviceID; }
    return _cached_encoder_for_AssociatedCalledDevice(value, elGetter);
}


/* eslint-enable */
