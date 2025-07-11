/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ContentEncryptionAlgorithmIdentifier,
    _decode_ContentEncryptionAlgorithmIdentifier,
    _encode_ContentEncryptionAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/ContentEncryptionAlgorithmIdentifier.ta.mjs";
import {
    EncryptedContentInfoType,
    _get_decoder_for_EncryptedContentInfoType,
    _get_encoder_for_EncryptedContentInfoType,
} from "../CryptographicMessageSyntax-2010/EncryptedContentInfoType.ta.mjs";

/**
 * @summary EncryptedContentInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContentInfo  ::=
 * EncryptedContentInfoType { ContentEncryptionAlgorithmIdentifier }
 * ```
 */
export type EncryptedContentInfo = EncryptedContentInfoType<ContentEncryptionAlgorithmIdentifier>; // DefinedType


let _cached_decoder_for_EncryptedContentInfo: $.ASN1Decoder<EncryptedContentInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedContentInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedContentInfo} The decoded data structure.
 */
export function _decode_EncryptedContentInfo(el: _Element): EncryptedContentInfo {
    if (!_cached_decoder_for_EncryptedContentInfo) {
        _cached_decoder_for_EncryptedContentInfo = _get_decoder_for_EncryptedContentInfoType<ContentEncryptionAlgorithmIdentifier>(
            _decode_ContentEncryptionAlgorithmIdentifier
        );
    }
    return _cached_decoder_for_EncryptedContentInfo(el);
}


let _cached_encoder_for_EncryptedContentInfo: $.ASN1Encoder<EncryptedContentInfo> | null = null;


/**
 * @summary Encodes a(n) EncryptedContentInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedContentInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedContentInfo(
    value: EncryptedContentInfo,
    elGetter: $.ASN1Encoder<EncryptedContentInfo>
): _Element {
    if (!_cached_encoder_for_EncryptedContentInfo) {
        _cached_encoder_for_EncryptedContentInfo = _get_encoder_for_EncryptedContentInfoType<ContentEncryptionAlgorithmIdentifier>(
            _encode_ContentEncryptionAlgorithmIdentifier
        );
    }
    return _cached_encoder_for_EncryptedContentInfo(value, elGetter);
}


/* eslint-enable */
