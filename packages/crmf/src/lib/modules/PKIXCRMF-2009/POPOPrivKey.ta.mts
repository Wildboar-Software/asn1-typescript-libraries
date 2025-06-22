/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/EnvelopedData.ta.mjs";
import {
    PKMACValue,
    _decode_PKMACValue,
    _encode_PKMACValue,
} from "../PKIXCRMF-2009/PKMACValue.ta.mjs";
import {
    SubsequentMessage,
    _decode_SubsequentMessage,
    _encode_SubsequentMessage,
} from "../PKIXCRMF-2009/SubsequentMessage.ta.mjs";


/**
 * @summary POPOPrivKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POPOPrivKey  ::=  CHOICE {
 *     thisMessage       [0] BIT STRING,         -- Deprecated
 *     -- possession is proven in this message (which contains
 *     -- the private key itself (encrypted for the CA))
 *     subsequentMessage [1] SubsequentMessage,
 *     -- possession will be proven in a subsequent message
 *     dhMAC             [2] BIT STRING,         -- Deprecated
 *     agreeMAC          [3] PKMACValue,
 *     encryptedKey      [4] EnvelopedData }
 * ```
 */
export type POPOPrivKey =
    | { thisMessage: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { subsequentMessage: SubsequentMessage } /* CHOICE_ALT_ROOT */
    | { dhMAC: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { agreeMAC: PKMACValue } /* CHOICE_ALT_ROOT */
    | { encryptedKey: EnvelopedData } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_POPOPrivKey: $.ASN1Decoder<POPOPrivKey> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) POPOPrivKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {POPOPrivKey} The decoded data structure.
 */
export function _decode_POPOPrivKey(el: _Element) {
    if (!_cached_decoder_for_POPOPrivKey) {
        _cached_decoder_for_POPOPrivKey = $._decode_inextensible_choice<POPOPrivKey>(
            {
                "CONTEXT 0": [
                    "thisMessage",
                    $._decode_implicit<BIT_STRING>(() => $._decodeBitString),
                ],
                "CONTEXT 1": [
                    "subsequentMessage",
                    $._decode_implicit<SubsequentMessage>(
                        () => _decode_SubsequentMessage
                    ),
                ],
                "CONTEXT 2": [
                    "dhMAC",
                    $._decode_implicit<BIT_STRING>(() => $._decodeBitString),
                ],
                "CONTEXT 3": [
                    "agreeMAC",
                    $._decode_implicit<PKMACValue>(() => _decode_PKMACValue),
                ],
                "CONTEXT 4": [
                    "encryptedKey",
                    $._decode_implicit<EnvelopedData>(
                        () => _decode_EnvelopedData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_POPOPrivKey(el);
}


let _cached_encoder_for_POPOPrivKey: $.ASN1Encoder<POPOPrivKey> | null = null;


/**
 * @summary Encodes a(n) POPOPrivKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POPOPrivKey, encoded as an ASN.1 Element.
 */
export function _encode_POPOPrivKey(
    value: POPOPrivKey,
    elGetter: $.ASN1Encoder<POPOPrivKey>
) {
    if (!_cached_encoder_for_POPOPrivKey) {
        _cached_encoder_for_POPOPrivKey = $._encode_choice<POPOPrivKey>(
            {
                thisMessage: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeBitString,
                    $.DER
                ),
                subsequentMessage: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SubsequentMessage,
                    $.DER
                ),
                dhMAC: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeBitString,
                    $.DER
                ),
                agreeMAC: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_PKMACValue,
                    $.DER
                ),
                encryptedKey: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_EnvelopedData,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_POPOPrivKey(value, elGetter);
}


/* eslint-enable */
