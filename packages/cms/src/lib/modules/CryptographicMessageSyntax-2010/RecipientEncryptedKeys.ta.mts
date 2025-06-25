/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RecipientEncryptedKey,
    _decode_RecipientEncryptedKey,
    _encode_RecipientEncryptedKey,
} from "../CryptographicMessageSyntax-2010/RecipientEncryptedKey.ta.mjs";

/**
 * @summary RecipientEncryptedKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientEncryptedKeys  ::=  SEQUENCE OF RecipientEncryptedKey
 * ```
 */
export type RecipientEncryptedKeys = RecipientEncryptedKey[]; // SequenceOfType


let _cached_decoder_for_RecipientEncryptedKeys: $.ASN1Decoder<RecipientEncryptedKeys> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RecipientEncryptedKeys
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientEncryptedKeys} The decoded data structure.
 */
export function _decode_RecipientEncryptedKeys(el: _Element): RecipientEncryptedKeys {
    if (!_cached_decoder_for_RecipientEncryptedKeys) {
        _cached_decoder_for_RecipientEncryptedKeys = $._decodeSequenceOf<RecipientEncryptedKey>(
            () => _decode_RecipientEncryptedKey
        );
    }
    return _cached_decoder_for_RecipientEncryptedKeys(el);
}


let _cached_encoder_for_RecipientEncryptedKeys: $.ASN1Encoder<RecipientEncryptedKeys> | null = null;


/**
 * @summary Encodes a(n) RecipientEncryptedKeys into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientEncryptedKeys, encoded as an ASN.1 Element.
 */
export function _encode_RecipientEncryptedKeys(
    value: RecipientEncryptedKeys,
    elGetter: $.ASN1Encoder<RecipientEncryptedKeys>
): _Element {
    if (!_cached_encoder_for_RecipientEncryptedKeys) {
        _cached_encoder_for_RecipientEncryptedKeys = $._encodeSequenceOf<RecipientEncryptedKey>(
            () => _encode_RecipientEncryptedKey,
            $.DER
        );
    }
    return _cached_encoder_for_RecipientEncryptedKeys(value, elGetter);
}


/* eslint-enable */
