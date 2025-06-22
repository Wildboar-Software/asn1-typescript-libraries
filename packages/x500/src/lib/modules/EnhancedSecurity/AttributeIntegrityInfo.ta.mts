/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta.mjs";
import {
    AttributeIntegrityInfoContent,
    _decode_AttributeIntegrityInfoContent,
    _encode_AttributeIntegrityInfoContent,
} from "../EnhancedSecurity/AttributeIntegrityInfoContent.ta.mjs";
/**
 * @summary AttributeIntegrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIntegrityInfo  ::=  SIGNED{AttributeIntegrityInfoContent}
 * ```
 */
export type AttributeIntegrityInfo = SIGNED<AttributeIntegrityInfoContent>; // DefinedType

let _cached_decoder_for_AttributeIntegrityInfo: $.ASN1Decoder<AttributeIntegrityInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIntegrityInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIntegrityInfo} The decoded data structure.
 */
export function _decode_AttributeIntegrityInfo(el: _Element) {
    if (!_cached_decoder_for_AttributeIntegrityInfo) {
        _cached_decoder_for_AttributeIntegrityInfo = _get_decoder_for_SIGNED<AttributeIntegrityInfoContent>(
            _decode_AttributeIntegrityInfoContent
        );
    }
    return _cached_decoder_for_AttributeIntegrityInfo(el);
}

let _cached_encoder_for_AttributeIntegrityInfo: $.ASN1Encoder<AttributeIntegrityInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeIntegrityInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIntegrityInfo, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIntegrityInfo(
    value: AttributeIntegrityInfo,
    elGetter: $.ASN1Encoder<AttributeIntegrityInfo>
) {
    if (!_cached_encoder_for_AttributeIntegrityInfo) {
        _cached_encoder_for_AttributeIntegrityInfo = _get_encoder_for_SIGNED<AttributeIntegrityInfoContent>(
            _encode_AttributeIntegrityInfoContent
        );
    }
    return _cached_encoder_for_AttributeIntegrityInfo(value, elGetter);
}


/* eslint-enable */
