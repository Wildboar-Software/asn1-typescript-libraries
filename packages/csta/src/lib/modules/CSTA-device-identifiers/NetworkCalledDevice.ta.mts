/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { NetworkCalledDeviceID, _decode_NetworkCalledDeviceID, _encode_NetworkCalledDeviceID } from "../CSTA-device-identifiers/NetworkCalledDeviceID.ta.mjs";



/**
 * @summary NetworkCalledDevice
 * @description
 *
 * Synonym for `NetworkCalledDeviceID` (ECMA-285 §9.2). See that type
 * for network-provided called-device semantics (ECMA-269 §12.3.22).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCalledDevice  ::=  NetworkCalledDeviceID
 * ```
 */
export
type NetworkCalledDevice = NetworkCalledDeviceID; // DefinedType

let _cached_decoder_for_NetworkCalledDevice: $.ASN1Decoder<NetworkCalledDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCalledDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCalledDevice (el: _Element): NetworkCalledDevice {
    if (!_cached_decoder_for_NetworkCalledDevice) { _cached_decoder_for_NetworkCalledDevice = _decode_NetworkCalledDeviceID; }
    return _cached_decoder_for_NetworkCalledDevice(el);
}

let _cached_encoder_for_NetworkCalledDevice: $.ASN1Encoder<NetworkCalledDevice> | null = null;

/**
 * @summary Encodes a(n) NetworkCalledDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCalledDevice, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCalledDevice (value: NetworkCalledDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCalledDevice) { _cached_encoder_for_NetworkCalledDevice = _encode_NetworkCalledDeviceID; }
    return _cached_encoder_for_NetworkCalledDevice(value, elGetter);
}


/* eslint-enable */
