/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { RedirectionDeviceID, _decode_RedirectionDeviceID, _encode_RedirectionDeviceID } from "../CSTA-device-identifiers/RedirectionDeviceID.ta.mjs";



/**
 * @summary LastRedirectionDevice
 * @description
 *
 * Synonym for `RedirectionDeviceID` (ECMA-285 §9.2). See that type
 * for last-redirection-device semantics (ECMA-269 §12.3.24).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LastRedirectionDevice  ::=  RedirectionDeviceID
 * ```
 */
export
type LastRedirectionDevice = RedirectionDeviceID; // DefinedType

let _cached_decoder_for_LastRedirectionDevice: $.ASN1Decoder<LastRedirectionDevice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LastRedirectionDevice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LastRedirectionDevice (el: _Element): LastRedirectionDevice {
    if (!_cached_decoder_for_LastRedirectionDevice) { _cached_decoder_for_LastRedirectionDevice = _decode_RedirectionDeviceID; }
    return _cached_decoder_for_LastRedirectionDevice(el);
}

let _cached_encoder_for_LastRedirectionDevice: $.ASN1Encoder<LastRedirectionDevice> | null = null;

/**
 * @summary Encodes a(n) LastRedirectionDevice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastRedirectionDevice, encoded as an ASN.1 Element.
 */
export
function _encode_LastRedirectionDevice (value: LastRedirectionDevice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LastRedirectionDevice) { _cached_encoder_for_LastRedirectionDevice = _encode_RedirectionDeviceID; }
    return _cached_encoder_for_LastRedirectionDevice(value, elGetter);
}


/* eslint-enable */
