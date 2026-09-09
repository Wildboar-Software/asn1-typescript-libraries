/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    IA5String,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { DeviceList_Item, _decode_DeviceList_Item, _encode_DeviceList_Item } from "../CSTA-switching-function-devices/DeviceList-Item.ta.mjs";



/**
 * @summary DeviceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceList  ::=  SEQUENCE OF SEQUENCE
 * {     deviceID             DeviceID,
 *     deviceCategory             [0] IMPLICIT DeviceCategory     DEFAULT station,
 *     namedDeviceTypes         [1] IMPLICIT NamedDeviceTypes     OPTIONAL,
 *     deviceAttributes         DeviceAttributes         OPTIONAL,
 *     deviceModelName         IA5String (SIZE(0..64))     OPTIONAL, 
 *     nidGroup            DeviceID            OPTIONAL }
 * ```
 */
export
type DeviceList = DeviceList_Item[]; // SequenceOfType

let _cached_decoder_for_DeviceList: $.ASN1Decoder<DeviceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceList (el: _Element): DeviceList {
    if (!_cached_decoder_for_DeviceList) { _cached_decoder_for_DeviceList = $._decodeSequenceOf<DeviceList_Item>(() => _decode_DeviceList_Item); }
    return _cached_decoder_for_DeviceList(el);
}

let _cached_encoder_for_DeviceList: $.ASN1Encoder<DeviceList> | null = null;

/**
 * @summary Encodes a(n) DeviceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceList (value: DeviceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceList) { _cached_encoder_for_DeviceList = $._encodeSequenceOf<DeviceList_Item>(() => _encode_DeviceList_Item, $.BER); }
    return _cached_encoder_for_DeviceList(value, elGetter);
}


/* eslint-enable */
