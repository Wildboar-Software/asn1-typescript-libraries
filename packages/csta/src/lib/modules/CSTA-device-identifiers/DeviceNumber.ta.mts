/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DeviceNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceNumber ::=  INTEGER
 * ```
 */
export
type DeviceNumber = INTEGER;

let _cached_decoder_for_DeviceNumber: $.ASN1Decoder<DeviceNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceNumber (el: _Element): DeviceNumber {
    if (!_cached_decoder_for_DeviceNumber) { _cached_decoder_for_DeviceNumber = $._decodeInteger; }
    return _cached_decoder_for_DeviceNumber(el);
}

let _cached_encoder_for_DeviceNumber: $.ASN1Encoder<DeviceNumber> | null = null;

/**
 * @summary Encodes a(n) DeviceNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceNumber, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceNumber (value: DeviceNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceNumber) { _cached_encoder_for_DeviceNumber = $._encodeInteger; }
    return _cached_encoder_for_DeviceNumber(value, elGetter);
}


/* eslint-enable */
