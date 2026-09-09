/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";



/**
 * @summary CallingDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingDevice  ::=  CallingDeviceID
 * ```
 */
export
type CallingDevice = CallingDeviceID; // DefinedType

let _cached_decoder_for_CallingDevice: $.ASN1Decoder<CallingDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallingDevice (el: _Element): CallingDevice {
    if (!_cached_decoder_for_CallingDevice) { _cached_decoder_for_CallingDevice = _decode_CallingDeviceID; }
    return _cached_decoder_for_CallingDevice(el);
}

let _cached_encoder_for_CallingDevice: $.ASN1Encoder<CallingDevice> | null = null;

/**
 * @summary Encodes a(n) CallingDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingDevice, encoded as an ASN.1 Element.
 */
export
function _encode_CallingDevice (value: CallingDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallingDevice) { _cached_encoder_for_CallingDevice = _encode_CallingDeviceID; }
    return _cached_encoder_for_CallingDevice(value, elGetter);
}


/* eslint-enable */
