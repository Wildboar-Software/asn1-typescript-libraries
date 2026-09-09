/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OPTIONAL, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { LampModeList_Item, _decode_LampModeList_Item, _encode_LampModeList_Item } from "../CSTA-get-lamp-mode/LampModeList-Item.ta.mjs";



/**
 * @summary LampModeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampModeList  ::=  SEQUENCE OF SEQUENCE
 * {    lamp                LampID,
 *     lampMode            LampMode,
 *     lampBrightness            [0] IMPLICIT LampBrightness        OPTIONAL,
 *     lampColor            [1] IMPLICIT LampColor            OPTIONAL,
 *     button                [2] IMPLICIT ButtonID            OPTIONAL }
 * ```
 */
export
type LampModeList = LampModeList_Item[]; // SequenceOfType

let _cached_decoder_for_LampModeList: $.ASN1Decoder<LampModeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampModeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampModeList (el: _Element): LampModeList {
    if (!_cached_decoder_for_LampModeList) { _cached_decoder_for_LampModeList = $._decodeSequenceOf<LampModeList_Item>(() => _decode_LampModeList_Item); }
    return _cached_decoder_for_LampModeList(el);
}

let _cached_encoder_for_LampModeList: $.ASN1Encoder<LampModeList> | null = null;

/**
 * @summary Encodes a(n) LampModeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampModeList, encoded as an ASN.1 Element.
 */
export
function _encode_LampModeList (value: LampModeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampModeList) { _cached_encoder_for_LampModeList = $._encodeSequenceOf<LampModeList_Item>(() => _encode_LampModeList_Item, $.BER); }
    return _cached_encoder_for_LampModeList(value, elGetter);
}


/* eslint-enable */
