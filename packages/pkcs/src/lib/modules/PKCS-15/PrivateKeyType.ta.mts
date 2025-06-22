/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PrivateDHKeyAttributes,
    _decode_PrivateDHKeyAttributes,
    _encode_PrivateDHKeyAttributes,
} from "../PKCS-15/PrivateDHKeyAttributes.ta.mjs";
import {
    PrivateDSAKeyAttributes,
    _decode_PrivateDSAKeyAttributes,
    _encode_PrivateDSAKeyAttributes,
} from "../PKCS-15/PrivateDSAKeyAttributes.ta.mjs";
import {
    PrivateECKeyAttributes,
    _decode_PrivateECKeyAttributes,
    _encode_PrivateECKeyAttributes,
} from "../PKCS-15/PrivateECKeyAttributes.ta.mjs";
import {
    PrivateKEAKeyAttributes,
    _decode_PrivateKEAKeyAttributes,
    _encode_PrivateKEAKeyAttributes,
} from "../PKCS-15/PrivateKEAKeyAttributes.ta.mjs";
import {
    PrivateKeyObject,
    _get_decoder_for_PrivateKeyObject,
    _get_encoder_for_PrivateKeyObject,
} from "../PKCS-15/PrivateKeyObject.ta.mjs";
import {
    PrivateRSAKeyAttributes,
    _decode_PrivateRSAKeyAttributes,
    _encode_PrivateRSAKeyAttributes,
} from "../PKCS-15/PrivateRSAKeyAttributes.ta.mjs";

/**
 * @summary PrivateKeyType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivateKeyType  ::=  CHOICE {
 *     privateRSAKey PrivateKeyObject {PrivateRSAKeyAttributes},
 *     privateECKey  [0] PrivateKeyObject {PrivateECKeyAttributes},
 *     privateDHKey  [1] PrivateKeyObject {PrivateDHKeyAttributes},
 *     privateDSAKey [2] PrivateKeyObject {PrivateDSAKeyAttributes},
 *     privateKEAKey [3] PrivateKeyObject {PrivateKEAKeyAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export type PrivateKeyType =
    | {
          privateRSAKey: PrivateKeyObject<PrivateRSAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateECKey: PrivateKeyObject<PrivateECKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateDHKey: PrivateKeyObject<PrivateDHKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateDSAKey: PrivateKeyObject<PrivateDSAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          privateKEAKey: PrivateKeyObject<PrivateKEAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_PrivateKeyType: $.ASN1Decoder<PrivateKeyType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeyType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivateKeyType} The decoded data structure.
 */
export function _decode_PrivateKeyType(el: _Element) {
    if (!_cached_decoder_for_PrivateKeyType) {
        _cached_decoder_for_PrivateKeyType = $._decode_extensible_choice<PrivateKeyType>(
            {
                "UNIVERSAL 16": [
                    "privateRSAKey",
                    _get_decoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(
                        _decode_PrivateRSAKeyAttributes
                    ),
                ],
                "CONTEXT 0": [
                    "privateECKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateECKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateECKeyAttributes>(
                            _decode_PrivateECKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 1": [
                    "privateDHKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateDHKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(
                            _decode_PrivateDHKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "privateDSAKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateDSAKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(
                            _decode_PrivateDSAKeyAttributes
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "privateKEAKey",
                    $._decode_implicit<
                        PrivateKeyObject<PrivateKEAKeyAttributes>
                    >(() =>
                        _get_decoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(
                            _decode_PrivateKEAKeyAttributes
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PrivateKeyType(el);
}


let _cached_encoder_for_PrivateKeyType: $.ASN1Encoder<PrivateKeyType> | null = null;


/**
 * @summary Encodes a(n) PrivateKeyType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeyType, encoded as an ASN.1 Element.
 */
export function _encode_PrivateKeyType(
    value: PrivateKeyType,
    elGetter: $.ASN1Encoder<PrivateKeyType>
) {
    if (!_cached_encoder_for_PrivateKeyType) {
        _cached_encoder_for_PrivateKeyType = $._encode_choice<PrivateKeyType>(
            {
                privateRSAKey: _get_encoder_for_PrivateKeyObject<PrivateRSAKeyAttributes>(
                    _encode_PrivateRSAKeyAttributes
                ),
                privateECKey: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateECKeyAttributes>(
                            _encode_PrivateECKeyAttributes
                        ),
                    $.BER
                ),
                privateDHKey: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateDHKeyAttributes>(
                            _encode_PrivateDHKeyAttributes
                        ),
                    $.BER
                ),
                privateDSAKey: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateDSAKeyAttributes>(
                            _encode_PrivateDSAKeyAttributes
                        ),
                    $.BER
                ),
                privateKEAKey: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () =>
                        _get_encoder_for_PrivateKeyObject<PrivateKEAKeyAttributes>(
                            _encode_PrivateKEAKeyAttributes
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivateKeyType(value, elGetter);
}


/* eslint-enable */
