/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";



/**
 * @summary AssociatedCallingDevice
 * @description
 *
 * Synonym for `AssociatedCallingDeviceID` (ECMA-285 §9.2). See that
 * type for NID-of-calling-device semantics (ECMA-269 §12.3.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssociatedCallingDevice  ::=  AssociatedCallingDeviceID
 * ```
 */
export
type AssociatedCallingDevice = AssociatedCallingDeviceID; // DefinedType

let _cached_decoder_for_AssociatedCallingDevice: $.ASN1Decoder<AssociatedCallingDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedCallingDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssociatedCallingDevice (el: _Element): AssociatedCallingDevice {
    if (!_cached_decoder_for_AssociatedCallingDevice) { _cached_decoder_for_AssociatedCallingDevice = _decode_AssociatedCallingDeviceID; }
    return _cached_decoder_for_AssociatedCallingDevice(el);
}

let _cached_encoder_for_AssociatedCallingDevice: $.ASN1Encoder<AssociatedCallingDevice> | null = null;

/**
 * @summary Encodes a(n) AssociatedCallingDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedCallingDevice, encoded as an ASN.1 Element.
 */
export
function _encode_AssociatedCallingDevice (value: AssociatedCallingDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssociatedCallingDevice) { _cached_encoder_for_AssociatedCallingDevice = _encode_AssociatedCallingDeviceID; }
    return _cached_encoder_for_AssociatedCallingDevice(value, elGetter);
}


/* eslint-enable */
