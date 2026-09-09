/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";



/**
 * @summary CalledDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledDevice  ::=  CalledDeviceID
 * ```
 */
export
type CalledDevice = CalledDeviceID; // DefinedType

let _cached_decoder_for_CalledDevice: $.ASN1Decoder<CalledDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalledDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalledDevice (el: _Element): CalledDevice {
    if (!_cached_decoder_for_CalledDevice) { _cached_decoder_for_CalledDevice = _decode_CalledDeviceID; }
    return _cached_decoder_for_CalledDevice(el);
}

let _cached_encoder_for_CalledDevice: $.ASN1Encoder<CalledDevice> | null = null;

/**
 * @summary Encodes a(n) CalledDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledDevice, encoded as an ASN.1 Element.
 */
export
function _encode_CalledDevice (value: CalledDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalledDevice) { _cached_encoder_for_CalledDevice = _encode_CalledDeviceID; }
    return _cached_encoder_for_CalledDevice(value, elGetter);
}


/* eslint-enable */
