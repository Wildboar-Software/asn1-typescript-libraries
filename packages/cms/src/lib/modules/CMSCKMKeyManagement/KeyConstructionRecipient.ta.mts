/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EncryptedRecipientID,
    _decode_EncryptedRecipientID,
    _encode_EncryptedRecipientID,
} from "../CMSCKMKeyManagement/EncryptedRecipientID.ta.mjs";
import {
    KeyConstructionLabels,
    _decode_KeyConstructionLabels,
    _encode_KeyConstructionLabels,
} from "../CMSCKMKeyManagement/KeyConstructionLabels.ta.mjs";

/**
 * @summary KeyConstructionRecipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionRecipient  ::=  CHOICE {
 * unencrypted [0] KeyConstructionLabels,
 * encrypted     [1] EncryptedRecipientID
 * }
 * ```
 */
export type KeyConstructionRecipient =
    | { unencrypted: KeyConstructionLabels } /* CHOICE_ALT_ROOT */
    | { encrypted: EncryptedRecipientID } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_KeyConstructionRecipient: $.ASN1Decoder<KeyConstructionRecipient> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KeyConstructionRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyConstructionRecipient} The decoded data structure.
 */
export function _decode_KeyConstructionRecipient(el: _Element) {
    if (!_cached_decoder_for_KeyConstructionRecipient) {
        _cached_decoder_for_KeyConstructionRecipient = $._decode_inextensible_choice<KeyConstructionRecipient>(
            {
                "CONTEXT 0": [
                    "unencrypted",
                    $._decode_explicit<KeyConstructionLabels>(
                        () => _decode_KeyConstructionLabels
                    ),
                ],
                "CONTEXT 1": [
                    "encrypted",
                    $._decode_explicit<EncryptedRecipientID>(
                        () => _decode_EncryptedRecipientID
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_KeyConstructionRecipient(el);
}


let _cached_encoder_for_KeyConstructionRecipient: $.ASN1Encoder<KeyConstructionRecipient> | null = null;


/**
 * @summary Encodes a(n) KeyConstructionRecipient into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyConstructionRecipient, encoded as an ASN.1 Element.
 */
export function _encode_KeyConstructionRecipient(
    value: KeyConstructionRecipient,
    elGetter: $.ASN1Encoder<KeyConstructionRecipient>
) {
    if (!_cached_encoder_for_KeyConstructionRecipient) {
        _cached_encoder_for_KeyConstructionRecipient = $._encode_choice<KeyConstructionRecipient>(
            {
                unencrypted: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_KeyConstructionLabels,
                    $.DER
                ),
                encrypted: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_EncryptedRecipientID,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_KeyConstructionRecipient(value, elGetter);
}


/* eslint-enable */
