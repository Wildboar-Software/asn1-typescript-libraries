/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_PBKDF2_params_salt: $.ASN1Decoder<PBKDF2_params_salt> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PBKDF2_params_salt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBKDF2_params_salt} The decoded data structure.
 */
export function _decode_PBKDF2_params_salt(el: _Element) {
    if (!_cached_decoder_for_PBKDF2_params_salt) {
        _cached_decoder_for_PBKDF2_params_salt = $._decode_extensible_choice<PBKDF2_params_salt>(
            {
                'UNIVERSAL 4': ['specified', $._decodeOctetString],
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
            },
            $.BER
        );
    }
    return _cached_encoder_for_PBKDF2_params_salt(value, elGetter);
}


/* eslint-enable */
