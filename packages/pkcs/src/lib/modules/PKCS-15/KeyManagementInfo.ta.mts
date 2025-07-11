/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyManagementInfo_Item,
    _decode_KeyManagementInfo_Item,
    _encode_KeyManagementInfo_Item,
} from "../PKCS-15/KeyManagementInfo-Item.ta.mjs";

/**
 * @summary KeyManagementInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyManagementInfo  ::=  SEQUENCE OF SEQUENCE {
 *     keyId Identifier,
 *     keyInfo CHOICE {
 *         recipientInfo RecipientInfo,
 *         passwordInfo [0] PasswordInfo
 *     }
 * } (CONSTRAINED BY {-- Each keyID must be unique --})
 * ```
 */
export type KeyManagementInfo = KeyManagementInfo_Item[]; // SequenceOfType


let _cached_decoder_for_KeyManagementInfo: $.ASN1Decoder<KeyManagementInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyManagementInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyManagementInfo} The decoded data structure.
 */
export function _decode_KeyManagementInfo(el: _Element): KeyManagementInfo {
    if (!_cached_decoder_for_KeyManagementInfo) {
        _cached_decoder_for_KeyManagementInfo = $._decodeSequenceOf<KeyManagementInfo_Item>(
            () => _decode_KeyManagementInfo_Item
        );
    }
    return _cached_decoder_for_KeyManagementInfo(el);
}


let _cached_encoder_for_KeyManagementInfo: $.ASN1Encoder<KeyManagementInfo> | null = null;


/**
 * @summary Encodes a(n) KeyManagementInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyManagementInfo, encoded as an ASN.1 Element.
 */
export function _encode_KeyManagementInfo(
    value: KeyManagementInfo,
    elGetter: $.ASN1Encoder<KeyManagementInfo>
): _Element {
    if (!_cached_encoder_for_KeyManagementInfo) {
        _cached_encoder_for_KeyManagementInfo = $._encodeSequenceOf<KeyManagementInfo_Item>(
            () => _encode_KeyManagementInfo_Item,
            $.BER
        );
    }
    return _cached_encoder_for_KeyManagementInfo(value, elGetter);
}


/* eslint-enable */
