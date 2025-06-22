/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PBKDF2_SaltSourcesAlgorithmIdentifier,
    _decode_PBKDF2_SaltSourcesAlgorithmIdentifier,
    _encode_PBKDF2_SaltSourcesAlgorithmIdentifier,
} from "../CryptographicMessageSyntaxAlgorithms-2009/PBKDF2-SaltSourcesAlgorithmIdentifier.ta.mjs";

/**
 * @summary PBKDF2_params_salt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-params-salt ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PBKDF2_params_salt =
    | { specified: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | {
          otherSource: PBKDF2_SaltSourcesAlgorithmIdentifier;
      } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_PBKDF2_params_salt: $.ASN1Decoder<PBKDF2_params_salt> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PBKDF2_params_salt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBKDF2_params_salt} The decoded data structure.
 */
export function _decode_PBKDF2_params_salt(el: _Element) {
    if (!_cached_decoder_for_PBKDF2_params_salt) {
        _cached_decoder_for_PBKDF2_params_salt = $._decode_inextensible_choice<PBKDF2_params_salt>(
            {
                "UNIVERSAL 4": ["specified", $._decodeOctetString],
                "UNIVERSAL 16": [
                    "otherSource",
                    _decode_PBKDF2_SaltSourcesAlgorithmIdentifier,
                ],
            }
        );
    }
    return _cached_decoder_for_PBKDF2_params_salt(el);
}


let _cached_encoder_for_PBKDF2_params_salt: $.ASN1Encoder<PBKDF2_params_salt> | null = null;


/**
 * @summary Encodes a(n) PBKDF2_params_salt into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBKDF2_params_salt, encoded as an ASN.1 Element.
 */
export function _encode_PBKDF2_params_salt(
    value: PBKDF2_params_salt,
    elGetter: $.ASN1Encoder<PBKDF2_params_salt>
) {
    if (!_cached_encoder_for_PBKDF2_params_salt) {
        _cached_encoder_for_PBKDF2_params_salt = $._encode_choice<PBKDF2_params_salt>(
            {
                specified: $._encodeOctetString,
                otherSource: _encode_PBKDF2_SaltSourcesAlgorithmIdentifier,
            },
            $.DER
        );
    }
    return _cached_encoder_for_PBKDF2_params_salt(value, elGetter);
}


/* eslint-enable */
