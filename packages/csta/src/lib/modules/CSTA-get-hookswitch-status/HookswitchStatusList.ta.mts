/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BOOLEAN, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { HookswitchStatusList_Item, _decode_HookswitchStatusList_Item, _encode_HookswitchStatusList_Item } from "../CSTA-get-hookswitch-status/HookswitchStatusList-Item.ta.mjs";



/**
 * @summary HookswitchStatusList
 * @description
 *
 * SEQUENCE OF hookswitch status entries (ECMA-269 §21.1.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HookswitchStatusList  ::=  SEQUENCE OF SEQUENCE
 * {    hookswitch            HookswitchID,
 *     hookswitchOnHook        BOOLEAN }
 * ```
 */
export
type HookswitchStatusList = HookswitchStatusList_Item[]; // SequenceOfType

let _cached_decoder_for_HookswitchStatusList: $.ASN1Decoder<HookswitchStatusList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HookswitchStatusList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HookswitchStatusList (el: _Element): HookswitchStatusList {
    if (!_cached_decoder_for_HookswitchStatusList) { _cached_decoder_for_HookswitchStatusList = $._decodeSequenceOf<HookswitchStatusList_Item>(() => _decode_HookswitchStatusList_Item); }
    return _cached_decoder_for_HookswitchStatusList(el);
}

let _cached_encoder_for_HookswitchStatusList: $.ASN1Encoder<HookswitchStatusList> | null = null;

/**
 * @summary Encodes a(n) HookswitchStatusList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HookswitchStatusList, encoded as an ASN.1 Element.
 */
export
function _encode_HookswitchStatusList (value: HookswitchStatusList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HookswitchStatusList) { _cached_encoder_for_HookswitchStatusList = $._encodeSequenceOf<HookswitchStatusList_Item>(() => _encode_HookswitchStatusList_Item, $.BER); }
    return _cached_encoder_for_HookswitchStatusList(value, elGetter);
}


/* eslint-enable */
