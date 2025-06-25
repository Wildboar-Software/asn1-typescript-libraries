/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyAgreementRecipientInfo,
    _decode_KeyAgreementRecipientInfo,
    _encode_KeyAgreementRecipientInfo,
} from "../PKCS7/KeyAgreementRecipientInfo.ta.mjs";
import {
    KeyEncryptionKeyRecipientInfo,
    _decode_KeyEncryptionKeyRecipientInfo,
    _encode_KeyEncryptionKeyRecipientInfo,
} from "../PKCS7/KeyEncryptionKeyRecipientInfo.ta.mjs";
import {
    KeyTransportRecipientInfo,
    _decode_KeyTransportRecipientInfo,
    _encode_KeyTransportRecipientInfo,
} from "../PKCS7/KeyTransportRecipientInfo.ta.mjs";

/**
 * @summary RecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientInfo  ::=  CHOICE {
 *     keyTransportRecipientInfo      KeyTransportRecipientInfo,
 *     keyAgreementRecipientInfo      [1]  KeyAgreementRecipientInfo,
 *     keyEncryptionKeyRecipientInfo  [2]  KeyEncryptionKeyRecipientInfo
 * }
 * ```
 */
export type RecipientInfo =
    | {
          keyTransportRecipientInfo: KeyTransportRecipientInfo;
      } /* CHOICE_ALT_ROOT */
    | {
          keyAgreementRecipientInfo: KeyAgreementRecipientInfo;
      } /* CHOICE_ALT_ROOT */
    | {
          keyEncryptionKeyRecipientInfo: KeyEncryptionKeyRecipientInfo;
      } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientInfo} The decoded data structure.
 */
export function _decode_RecipientInfo(el: _Element): RecipientInfo {
    if (!_cached_decoder_for_RecipientInfo) {
        _cached_decoder_for_RecipientInfo = $._decode_inextensible_choice<RecipientInfo>(
            {
                "UNIVERSAL 16": [
                    "keyTransportRecipientInfo",
                    _decode_KeyTransportRecipientInfo,
                ],
                "CONTEXT 1": [
                    "keyAgreementRecipientInfo",
                    $._decode_implicit<KeyAgreementRecipientInfo>(
                        () => _decode_KeyAgreementRecipientInfo
                    ),
                ],
                "CONTEXT 2": [
                    "keyEncryptionKeyRecipientInfo",
                    $._decode_implicit<KeyEncryptionKeyRecipientInfo>(
                        () => _decode_KeyEncryptionKeyRecipientInfo
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RecipientInfo(el);
}


let _cached_encoder_for_RecipientInfo: $.ASN1Encoder<RecipientInfo> | null = null;


/**
 * @summary Encodes a(n) RecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_RecipientInfo(
    value: RecipientInfo,
    elGetter: $.ASN1Encoder<RecipientInfo>
): _Element {
    if (!_cached_encoder_for_RecipientInfo) {
        _cached_encoder_for_RecipientInfo = $._encode_choice<RecipientInfo>(
            {
                keyTransportRecipientInfo: _encode_KeyTransportRecipientInfo,
                keyAgreementRecipientInfo: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_KeyAgreementRecipientInfo,
                    $.BER
                ),
                keyEncryptionKeyRecipientInfo: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_KeyEncryptionKeyRecipientInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}


/* eslint-enable */
