/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    XPath,
    _decode_XPath,
    _encode_XPath,
} from "../TokenizationManifest/XPath.ta.mjs";

/**
 * @summary XPathSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XPathSet  ::=  SEQUENCE SIZE(1..MAX) OF xpath XPath
 * ```
 */
export type XPathSet = XPath[]; // SequenceOfType


let _cached_decoder_for_XPathSet: $.ASN1Decoder<XPathSet> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) XPathSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XPathSet} The decoded data structure.
 */
export function _decode_XPathSet(el: _Element) {
    if (!_cached_decoder_for_XPathSet) {
        _cached_decoder_for_XPathSet = $._decodeSequenceOf<XPath>(
            () => _decode_XPath
        );
    }
    return _cached_decoder_for_XPathSet(el);
}


let _cached_encoder_for_XPathSet: $.ASN1Encoder<XPathSet> | null = null;


/**
 * @summary Encodes a(n) XPathSet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XPathSet, encoded as an ASN.1 Element.
 */
export function _encode_XPathSet(
    value: XPathSet,
    elGetter: $.ASN1Encoder<XPathSet>
) {
    if (!_cached_encoder_for_XPathSet) {
        _cached_encoder_for_XPathSet = $._encodeSequenceOf<XPath>(
            () => _encode_XPath,
            $.DER
        );
    }
    return _cached_encoder_for_XPathSet(value, elGetter);
}


/* eslint-enable */
