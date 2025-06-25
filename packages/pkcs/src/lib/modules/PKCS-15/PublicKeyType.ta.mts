/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PublicDHKeyAttributes,
    _decode_PublicDHKeyAttributes,
    _encode_PublicDHKeyAttributes,
} from "../PKCS-15/PublicDHKeyAttributes.ta.mjs";
import {
    PublicDSAKeyAttributes,
    _decode_PublicDSAKeyAttributes,
    _encode_PublicDSAKeyAttributes,
} from "../PKCS-15/PublicDSAKeyAttributes.ta.mjs";
import {
    PublicECKeyAttributes,
    _decode_PublicECKeyAttributes,
    _encode_PublicECKeyAttributes,
} from "../PKCS-15/PublicECKeyAttributes.ta.mjs";
import {
    PublicKEAKeyAttributes,
    _decode_PublicKEAKeyAttributes,
    _encode_PublicKEAKeyAttributes,
} from "../PKCS-15/PublicKEAKeyAttributes.ta.mjs";
import {
    PublicKeyObject,
    _get_decoder_for_PublicKeyObject,
    _get_encoder_for_PublicKeyObject,
} from "../PKCS-15/PublicKeyObject.ta.mjs";
import {
    PublicRSAKeyAttributes,
    _decode_PublicRSAKeyAttributes,
    _encode_PublicRSAKeyAttributes,
} from "../PKCS-15/PublicRSAKeyAttributes.ta.mjs";

/**
 * @summary PublicKeyType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeyType  ::=  CHOICE {
 *     publicRSAKey PublicKeyObject {PublicRSAKeyAttributes},
 *     publicECKey [0] PublicKeyObject {PublicECKeyAttributes},
 *     publicDHKey [1] PublicKeyObject {PublicDHKeyAttributes},
 *     publicDSAKey [2] PublicKeyObject {PublicDSAKeyAttributes},
 *     publicKEAKey [3] PublicKeyObject {PublicKEAKeyAttributes},
 *     ... -- For future extensions
 * }
 * ```
 */
export type PublicKeyType =
    | {
          publicRSAKey: PublicKeyObject<PublicRSAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          publicECKey: PublicKeyObject<PublicECKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          publicDHKey: PublicKeyObject<PublicDHKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          publicDSAKey: PublicKeyObject<PublicDSAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | {
          publicKEAKey: PublicKeyObject<PublicKEAKeyAttributes>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_PublicKeyType: $.ASN1Decoder<PublicKeyType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeyType} The decoded data structure.
 */
export function _decode_PublicKeyType(el: _Element): PublicKeyType {
    if (!_cached_decoder_for_PublicKeyType) {
        _cached_decoder_for_PublicKeyType = $._decode_extensible_choice<PublicKeyType>(
            {
                "UNIVERSAL 16": [
                    "publicRSAKey",
                    _get_decoder_for_PublicKeyObject<PublicRSAKeyAttributes>(
                        _decode_PublicRSAKeyAttributes
                    ),
                ],
                "CONTEXT 0": [
                    "publicECKey",
                    $._decode_implicit<PublicKeyObject<PublicECKeyAttributes>>(
                        () =>
                            _get_decoder_for_PublicKeyObject<PublicECKeyAttributes>(
                                _decode_PublicECKeyAttributes
                            )
                    ),
                ],
                "CONTEXT 1": [
                    "publicDHKey",
                    $._decode_implicit<PublicKeyObject<PublicDHKeyAttributes>>(
                        () =>
                            _get_decoder_for_PublicKeyObject<PublicDHKeyAttributes>(
                                _decode_PublicDHKeyAttributes
                            )
                    ),
                ],
                "CONTEXT 2": [
                    "publicDSAKey",
                    $._decode_implicit<PublicKeyObject<PublicDSAKeyAttributes>>(
                        () =>
                            _get_decoder_for_PublicKeyObject<PublicDSAKeyAttributes>(
                                _decode_PublicDSAKeyAttributes
                            )
                    ),
                ],
                "CONTEXT 3": [
                    "publicKEAKey",
                    $._decode_implicit<PublicKeyObject<PublicKEAKeyAttributes>>(
                        () =>
                            _get_decoder_for_PublicKeyObject<PublicKEAKeyAttributes>(
                                _decode_PublicKEAKeyAttributes
                            )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PublicKeyType(el);
}


let _cached_encoder_for_PublicKeyType: $.ASN1Encoder<PublicKeyType> | null = null;


/**
 * @summary Encodes a(n) PublicKeyType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyType, encoded as an ASN.1 Element.
 */
export function _encode_PublicKeyType(
    value: PublicKeyType,
    elGetter: $.ASN1Encoder<PublicKeyType>
): _Element {
    if (!_cached_encoder_for_PublicKeyType) {
        _cached_encoder_for_PublicKeyType = $._encode_choice<PublicKeyType>(
            {
                publicRSAKey: _get_encoder_for_PublicKeyObject<PublicRSAKeyAttributes>(
                    _encode_PublicRSAKeyAttributes
                ),
                publicECKey: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        _get_encoder_for_PublicKeyObject<PublicECKeyAttributes>(
                            _encode_PublicECKeyAttributes
                        ),
                    $.BER
                ),
                publicDHKey: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_PublicKeyObject<PublicDHKeyAttributes>(
                            _encode_PublicDHKeyAttributes
                        ),
                    $.BER
                ),
                publicDSAKey: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _get_encoder_for_PublicKeyObject<PublicDSAKeyAttributes>(
                            _encode_PublicDSAKeyAttributes
                        ),
                    $.BER
                ),
                publicKEAKey: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () =>
                        _get_encoder_for_PublicKeyObject<PublicKEAKeyAttributes>(
                            _encode_PublicKEAKeyAttributes
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PublicKeyType(value, elGetter);
}


/* eslint-enable */
