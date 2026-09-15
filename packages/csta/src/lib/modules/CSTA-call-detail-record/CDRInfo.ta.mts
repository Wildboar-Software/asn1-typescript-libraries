/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";
import { CDRInformationItem, _decode_CDRInformationItem, _encode_CDRInformationItem } from "../CSTA-call-detail-record/CDRInformationItem.ta.mjs";



/**
 * @summary CDRInfo
 * @description
 *
 * List of CDR records in a Call Detail Records Report. ECMA-269 §27.1.2.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRInfo  ::=  SEQUENCE OF CDRInformationItem
 * ```
 */
export
type CDRInfo = CDRInformationItem[]; // SequenceOfType

let _cached_decoder_for_CDRInfo: $.ASN1Decoder<CDRInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRInfo (el: _Element): CDRInfo {
    if (!_cached_decoder_for_CDRInfo) { _cached_decoder_for_CDRInfo = $._decodeSequenceOf<CDRInformationItem>(() => _decode_CDRInformationItem); }
    return _cached_decoder_for_CDRInfo(el);
}

let _cached_encoder_for_CDRInfo: $.ASN1Encoder<CDRInfo> | null = null;

/**
 * @summary Encodes a(n) CDRInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CDRInfo (value: CDRInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRInfo) { _cached_encoder_for_CDRInfo = $._encodeSequenceOf<CDRInformationItem>(() => _encode_CDRInformationItem, $.BER); }
    return _cached_encoder_for_CDRInfo(value, elGetter);
}


/* eslint-enable */
