/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TrustAnchorTitle
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustAnchorTitle  ::=  UTF8String (SIZE (1..64))
 * ```
 */
export
type TrustAnchorTitle = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorTitle
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorTitle} The decoded data structure.
 */
export
function _decode_TrustAnchorTitle (el: _Element) {
    return $._decodeUTF8String(el);
}

/**
 * @summary Encodes a(n) TrustAnchorTitle into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorTitle, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorTitle (value: TrustAnchorTitle, elGetter: $.ASN1Encoder<TrustAnchorTitle>) {
    return $._encodeUTF8String(value, elGetter);
}


/* eslint-enable */
