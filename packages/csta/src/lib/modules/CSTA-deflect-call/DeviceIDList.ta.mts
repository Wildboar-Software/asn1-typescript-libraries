/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";



/**
 * @summary DeviceIDList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceIDList  ::=  SEQUENCE OF DeviceID
 * ```
 */
export
type DeviceIDList = DeviceID[]; // SequenceOfType

let _cached_decoder_for_DeviceIDList: $.ASN1Decoder<DeviceIDList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceIDList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceIDList (el: _Element): DeviceIDList {
    if (!_cached_decoder_for_DeviceIDList) { _cached_decoder_for_DeviceIDList = $._decodeSequenceOf<DeviceID>(() => _decode_DeviceID); }
    return _cached_decoder_for_DeviceIDList(el);
}

let _cached_encoder_for_DeviceIDList: $.ASN1Encoder<DeviceIDList> | null = null;

/**
 * @summary Encodes a(n) DeviceIDList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceIDList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceIDList (value: DeviceIDList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceIDList) { _cached_encoder_for_DeviceIDList = $._encodeSequenceOf<DeviceID>(() => _encode_DeviceID, $.BER); }
    return _cached_encoder_for_DeviceIDList(value, elGetter);
}


/* eslint-enable */
