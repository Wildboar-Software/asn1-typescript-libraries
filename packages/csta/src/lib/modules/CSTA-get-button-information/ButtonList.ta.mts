/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    IA5String,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { ButtonList_Item, _decode_ButtonList_Item, _encode_ButtonList_Item } from "../CSTA-get-button-information/ButtonList-Item.ta.mjs";



/**
 * @summary ButtonList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ButtonList  ::=  SEQUENCE OF SEQUENCE
 * {    button                ButtonID,
 *     buttonLabel            [0] IMPLICIT IA5String            OPTIONAL,
 *     buttonLabelSettable        [1] IMPLICIT BOOLEAN            OPTIONAL,
 *     buttonFunction            [2] IMPLICIT IA5String            OPTIONAL,
 *     buttonAssociatedNumber        [3] IMPLICIT DeviceID            OPTIONAL,
 *     buttonAssociatedNumberSettable    [4] IMPLICIT BOOLEAN            OPTIONAL,
 *     buttonPressIndicator        [5] IMPLICIT BOOLEAN            OPTIONAL,
 *     lampList              SEQUENCE OF LampID            OPTIONAL }
 * ```
 */
export
type ButtonList = ButtonList_Item[]; // SequenceOfType

let _cached_decoder_for_ButtonList: $.ASN1Decoder<ButtonList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ButtonList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ButtonList (el: _Element): ButtonList {
    if (!_cached_decoder_for_ButtonList) { _cached_decoder_for_ButtonList = $._decodeSequenceOf<ButtonList_Item>(() => _decode_ButtonList_Item); }
    return _cached_decoder_for_ButtonList(el);
}

let _cached_encoder_for_ButtonList: $.ASN1Encoder<ButtonList> | null = null;

/**
 * @summary Encodes a(n) ButtonList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ButtonList, encoded as an ASN.1 Element.
 */
export
function _encode_ButtonList (value: ButtonList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ButtonList) { _cached_encoder_for_ButtonList = $._encodeSequenceOf<ButtonList_Item>(() => _encode_ButtonList_Item, $.BER); }
    return _cached_encoder_for_ButtonList(value, elGetter);
}


/* eslint-enable */
