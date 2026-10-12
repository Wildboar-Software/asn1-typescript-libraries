/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PCCRuleID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PCCRuleID  ::=  UTF8String
 * ```
 */
export
type PCCRuleID = UTF8String; // UTF8String

let _cached_decoder_for_PCCRuleID: $.ASN1Decoder<PCCRuleID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PCCRuleID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PCCRuleID (el: _Element): PCCRuleID {
    if (!_cached_decoder_for_PCCRuleID) { _cached_decoder_for_PCCRuleID = $._decodeUTF8String; }
    return _cached_decoder_for_PCCRuleID(el);
}

let _cached_encoder_for_PCCRuleID: $.ASN1Encoder<PCCRuleID> | null = null;

/**
 * @summary Encodes a(n) PCCRuleID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PCCRuleID, encoded as an ASN.1 Element.
 */
export
function _encode_PCCRuleID (value: PCCRuleID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PCCRuleID) { _cached_encoder_for_PCCRuleID = $._encodeUTF8String; }
    return _cached_encoder_for_PCCRuleID(value, elGetter);
}


/* eslint-enable */
