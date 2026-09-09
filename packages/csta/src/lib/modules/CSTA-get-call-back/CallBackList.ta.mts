/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { CallBackList_Item, _decode_CallBackList_Item, _encode_CallBackList_Item } from "../CSTA-get-call-back/CallBackList-Item.ta.mjs";



/**
 * @summary CallBackList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackList  ::=  SEQUENCE OF SEQUENCE
 * {    originatingDevice        DeviceID,
 *     targetDevice            DeviceID,
 *     callBackMessageIndicator    BOOLEAN                    OPTIONAL }
 * ```
 */
export
type CallBackList = CallBackList_Item[]; // SequenceOfType

let _cached_decoder_for_CallBackList: $.ASN1Decoder<CallBackList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackList (el: _Element): CallBackList {
    if (!_cached_decoder_for_CallBackList) { _cached_decoder_for_CallBackList = $._decodeSequenceOf<CallBackList_Item>(() => _decode_CallBackList_Item); }
    return _cached_decoder_for_CallBackList(el);
}

let _cached_encoder_for_CallBackList: $.ASN1Encoder<CallBackList> | null = null;

/**
 * @summary Encodes a(n) CallBackList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackList, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackList (value: CallBackList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackList) { _cached_encoder_for_CallBackList = $._encodeSequenceOf<CallBackList_Item>(() => _encode_CallBackList_Item, $.BER); }
    return _cached_encoder_for_CallBackList(value, elGetter);
}


/* eslint-enable */
