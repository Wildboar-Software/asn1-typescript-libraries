/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityCategory,
    _decode_SecurityCategory,
    _encode_SecurityCategory,
} from "../EnhancedSecurity/SecurityCategory.ta.mjs";
/**
 * @summary SecurityCategories
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityCategories  ::=  SET SIZE (1..MAX) OF SecurityCategory
 * ```
 */
export type SecurityCategories = SecurityCategory[]; // SetOfType

let _cached_decoder_for_SecurityCategories: $.ASN1Decoder<SecurityCategories> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityCategories
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityCategories} The decoded data structure.
 */
export function _decode_SecurityCategories(el: _Element): SecurityCategories {
    if (!_cached_decoder_for_SecurityCategories) {
        _cached_decoder_for_SecurityCategories = $._decodeSetOf<SecurityCategory>(
            () => _decode_SecurityCategory
        );
    }
    return _cached_decoder_for_SecurityCategories(el);
}

let _cached_encoder_for_SecurityCategories: $.ASN1Encoder<SecurityCategories> | null = null;

/**
 * @summary Encodes a(n) SecurityCategories into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityCategories, encoded as an ASN.1 Element.
 */
export function _encode_SecurityCategories(
    value: SecurityCategories,
    elGetter: $.ASN1Encoder<SecurityCategories>
): _Element {
    if (!_cached_encoder_for_SecurityCategories) {
        _cached_encoder_for_SecurityCategories = $._encodeSetOf<SecurityCategory>(
            () => _encode_SecurityCategory,
            $.DER
        );
    }
    return _cached_encoder_for_SecurityCategories(value, elGetter);
}


/* eslint-enable */
