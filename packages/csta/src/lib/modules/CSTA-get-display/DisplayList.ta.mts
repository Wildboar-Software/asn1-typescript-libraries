/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    IA5String,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { DisplayList_Item, _decode_DisplayList_Item, _encode_DisplayList_Item } from "../CSTA-get-display/DisplayList-Item.ta.mjs";



/**
 * @summary DisplayList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayList  ::=  SEQUENCE OF SEQUENCE
 * {    displayID            DisplayID,
 *     logicalRows            INTEGER,
 *     logicalColumns            INTEGER,
 *     physicalRows            [0] IMPLICIT INTEGER             OPTIONAL,
 *     physicalColumns            [1] IMPLICIT INTEGER             OPTIONAL,
 *     physicalBaseRowNumber        [2] IMPLICIT INTEGER             OPTIONAL,
 *     physicalBaseColumnNumber    [3] IMPLICIT INTEGER             OPTIONAL,
 *     characterSet            CharacterSet                OPTIONAL,
 *     contentsOfDisplay        IA5String }
 * ```
 */
export
type DisplayList = DisplayList_Item[]; // SequenceOfType

let _cached_decoder_for_DisplayList: $.ASN1Decoder<DisplayList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayList (el: _Element): DisplayList {
    if (!_cached_decoder_for_DisplayList) { _cached_decoder_for_DisplayList = $._decodeSequenceOf<DisplayList_Item>(() => _decode_DisplayList_Item); }
    return _cached_decoder_for_DisplayList(el);
}

let _cached_encoder_for_DisplayList: $.ASN1Encoder<DisplayList> | null = null;

/**
 * @summary Encodes a(n) DisplayList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayList, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayList (value: DisplayList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayList) { _cached_encoder_for_DisplayList = $._encodeSequenceOf<DisplayList_Item>(() => _encode_DisplayList_Item, $.BER); }
    return _cached_encoder_for_DisplayList(value, elGetter);
}


/* eslint-enable */
