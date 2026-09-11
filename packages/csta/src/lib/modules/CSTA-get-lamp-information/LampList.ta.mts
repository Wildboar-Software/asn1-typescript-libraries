/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OPTIONAL, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { LampList_Item, _decode_LampList_Item, _encode_LampList_Item } from "../CSTA-get-lamp-information/LampList-Item.ta.mjs";



/**
 * @summary LampList
 * @description
 *
 * SEQUENCE OF lamp descriptors (ECMA-269 §21.1.6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LampList  ::=  SEQUENCE OF SEQUENCE
 * {    lamp                LampID,
 *     lampLabel            [0] IMPLICIT OCTET STRING        OPTIONAL,
 *     button                [1] IMPLICIT ButtonID            OPTIONAL,
 *     lampColor            LampColor                OPTIONAL }
 * ```
 */
export
type LampList = LampList_Item[]; // SequenceOfType

let _cached_decoder_for_LampList: $.ASN1Decoder<LampList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LampList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LampList (el: _Element): LampList {
    if (!_cached_decoder_for_LampList) { _cached_decoder_for_LampList = $._decodeSequenceOf<LampList_Item>(() => _decode_LampList_Item); }
    return _cached_decoder_for_LampList(el);
}

let _cached_encoder_for_LampList: $.ASN1Encoder<LampList> | null = null;

/**
 * @summary Encodes a(n) LampList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LampList, encoded as an ASN.1 Element.
 */
export
function _encode_LampList (value: LampList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LampList) { _cached_encoder_for_LampList = $._encodeSequenceOf<LampList_Item>(() => _encode_LampList_Item, $.BER); }
    return _cached_encoder_for_LampList(value, elGetter);
}


/* eslint-enable */
