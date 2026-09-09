/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OPTIONAL, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { DeviceMediaInfoList_Item, _decode_DeviceMediaInfoList_Item, _encode_DeviceMediaInfoList_Item } from "../CSTA-status-reporting/DeviceMediaInfoList-Item.ta.mjs";



/**
 * @summary DeviceMediaInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceMediaInfoList  ::=  SEQUENCE OF SEQUENCE
 * {     mediaStreamID            MediaStreamID                OPTIONAL,
 *     connectionInformation         ConnectionInformation             OPTIONAL }
 * ```
 */
export
type DeviceMediaInfoList = DeviceMediaInfoList_Item[]; // SequenceOfType

let _cached_decoder_for_DeviceMediaInfoList: $.ASN1Decoder<DeviceMediaInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceMediaInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceMediaInfoList (el: _Element): DeviceMediaInfoList {
    if (!_cached_decoder_for_DeviceMediaInfoList) { _cached_decoder_for_DeviceMediaInfoList = $._decodeSequenceOf<DeviceMediaInfoList_Item>(() => _decode_DeviceMediaInfoList_Item); }
    return _cached_decoder_for_DeviceMediaInfoList(el);
}

let _cached_encoder_for_DeviceMediaInfoList: $.ASN1Encoder<DeviceMediaInfoList> | null = null;

/**
 * @summary Encodes a(n) DeviceMediaInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceMediaInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceMediaInfoList (value: DeviceMediaInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceMediaInfoList) { _cached_encoder_for_DeviceMediaInfoList = $._encodeSequenceOf<DeviceMediaInfoList_Item>(() => _encode_DeviceMediaInfoList_Item, $.BER); }
    return _cached_encoder_for_DeviceMediaInfoList(value, elGetter);
}


/* eslint-enable */
