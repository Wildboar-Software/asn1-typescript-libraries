/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KEKRecipientInfo,
    _decode_KEKRecipientInfo,
    _encode_KEKRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KEKRecipientInfo.ta.mjs";
import {
    KeyAgreeRecipientInfo,
    _decode_KeyAgreeRecipientInfo,
    _encode_KeyAgreeRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KeyAgreeRecipientInfo.ta.mjs";
import {
    KeyTransRecipientInfo,
    _decode_KeyTransRecipientInfo,
    _encode_KeyTransRecipientInfo,
} from "../CryptographicMessageSyntax-2010/KeyTransRecipientInfo.ta.mjs";
import {
    OtherRecipientInfo,
    _decode_OtherRecipientInfo,
    _encode_OtherRecipientInfo,
} from "../CryptographicMessageSyntax-2010/OtherRecipientInfo.ta.mjs";
import {
    PasswordRecipientInfo,
    _decode_PasswordRecipientInfo,
    _encode_PasswordRecipientInfo,
} from "../CryptographicMessageSyntax-2010/PasswordRecipientInfo.ta.mjs";

/**
 * @summary RecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientInfo  ::=  CHOICE {
 * ktri              KeyTransRecipientInfo,
 * ...,
 * [[3: kari          [1] KeyAgreeRecipientInfo ]],
 * [[4: kekri         [2] KEKRecipientInfo]],
 * [[5: pwri          [3] PasswordRecipientInfo,
 * ori           [4] OtherRecipientInfo ]] }
 * ```
 */
export type RecipientInfo =
    | { ktri: KeyTransRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kari: KeyAgreeRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 3 */
    | { kekri: KEKRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 4 */
    | { pwri: PasswordRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | { ori: OtherRecipientInfo } /* CHOICE_ALT_EXT CHOICE_ALT_VERSION 5 */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientInfo} The decoded data structure.
 */
export function _decode_RecipientInfo(el: _Element): RecipientInfo {
    if (!_cached_decoder_for_RecipientInfo) {
        _cached_decoder_for_RecipientInfo = $._decode_extensible_choice<RecipientInfo>(
            {
                "UNIVERSAL 16": ["ktri", _decode_KeyTransRecipientInfo],
                "CONTEXT 1": [
                    "kari",
                    $._decode_implicit<KeyAgreeRecipientInfo>(
                        () => _decode_KeyAgreeRecipientInfo
                    ),
                ],
                "CONTEXT 2": [
                    "kekri",
                    $._decode_implicit<KEKRecipientInfo>(
                        () => _decode_KEKRecipientInfo
                    ),
                ],
                "CONTEXT 3": [
                    "pwri",
                    $._decode_implicit<PasswordRecipientInfo>(
                        () => _decode_PasswordRecipientInfo
                    ),
                ],
                "CONTEXT 4": [
                    "ori",
                    $._decode_implicit<OtherRecipientInfo>(
                        () => _decode_OtherRecipientInfo
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
                ktri: _encode_KeyTransRecipientInfo,
                kari: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_KeyAgreeRecipientInfo,
                    $.DER
                ),
                kekri: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_KEKRecipientInfo,
                    $.DER
                ),
                pwri: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_PasswordRecipientInfo,
                    $.DER
                ),
                ori: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_OtherRecipientInfo,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}


/* eslint-enable */
