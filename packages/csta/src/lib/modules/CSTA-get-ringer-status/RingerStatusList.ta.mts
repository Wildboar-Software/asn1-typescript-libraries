/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { RingerStatusList_Item, _decode_RingerStatusList_Item, _encode_RingerStatusList_Item } from "../CSTA-get-ringer-status/RingerStatusList-Item.ta.mjs";



/**
 * @summary RingerStatusList
 * @description
 *
 * SEQUENCE OF ringer-status entries (ECMA-269 §21.1.11.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RingerStatusList  ::=  SEQUENCE OF SEQUENCE
 * {    ringer                 RingerID,
 *     ringMode             RingMode,
 *     ringCount             [0] IMPLICIT INTEGER (0..1000)         OPTIONAL,
 *     ringDuration            [3] IMPLICIT INTEGER            OPTIONAL,
 *     ringPattern             [1] IMPLICIT INTEGER             OPTIONAL,
 *     ringVolAbs             [2] IMPLICIT INTEGER (0..100)         OPTIONAL }
 * ```
 */
export
type RingerStatusList = RingerStatusList_Item[]; // SequenceOfType

let _cached_decoder_for_RingerStatusList: $.ASN1Decoder<RingerStatusList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RingerStatusList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RingerStatusList (el: _Element): RingerStatusList {
    if (!_cached_decoder_for_RingerStatusList) { _cached_decoder_for_RingerStatusList = $._decodeSequenceOf<RingerStatusList_Item>(() => _decode_RingerStatusList_Item); }
    return _cached_decoder_for_RingerStatusList(el);
}

let _cached_encoder_for_RingerStatusList: $.ASN1Encoder<RingerStatusList> | null = null;

/**
 * @summary Encodes a(n) RingerStatusList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RingerStatusList, encoded as an ASN.1 Element.
 */
export
function _encode_RingerStatusList (value: RingerStatusList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RingerStatusList) { _cached_encoder_for_RingerStatusList = $._encodeSequenceOf<RingerStatusList_Item>(() => _encode_RingerStatusList_Item, $.BER); }
    return _cached_encoder_for_RingerStatusList(value, elGetter);
}


/* eslint-enable */
