/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Password,
    _decode_Password,
    _encode_Password,
} from '../MTSAbstractService/Password.ta.mjs';
import {
    StrongCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
} from '../MTSAbstractService/StrongCredentials.ta.mjs';
import {
    ProtectedPassword,
    _decode_ProtectedPassword,
    _encode_ProtectedPassword,
} from '../MTSAbstractService/ProtectedPassword.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Credentials */
/**
 * @summary Credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Credentials  ::=  CHOICE {
 *   simple     Password,
 *   strong     [0]  StrongCredentials,
 *   ...,
 *   protected  [1]  ProtectedPassword
 * }
 * ```
 */
export type Credentials =
    | { simple: Password } /* CHOICE_ALT_ROOT */
    | { strong: StrongCredentials } /* CHOICE_ALT_ROOT */
    | { protected_: ProtectedPassword } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Credentials */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Credentials */
let _cached_decoder_for_Credentials: $.ASN1Decoder<Credentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Credentials */

/* START_OF_SYMBOL_DEFINITION _decode_Credentials */
/**
 * @summary Decodes an ASN.1 element into a(n) Credentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Credentials} The decoded data structure.
 */
export function _decode_Credentials(el: _Element) {
    if (!_cached_decoder_for_Credentials) {
        _cached_decoder_for_Credentials = $._decode_extensible_choice<Credentials>(
            {
                'UNIVERSAL 22': ['simple', _decode_Password],
                'UNIVERSAL 4': ['simple', _decode_Password],
                'CONTEXT 0': [
                    'strong',
                    $._decode_implicit<StrongCredentials>(
                        () => _decode_StrongCredentials
                    ),
                ],
                'CONTEXT 1': [
                    'protected_',
                    $._decode_implicit<ProtectedPassword>(
                        () => _decode_ProtectedPassword
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Credentials(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Credentials */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Credentials */
let _cached_encoder_for_Credentials: $.ASN1Encoder<Credentials> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Credentials */

/* START_OF_SYMBOL_DEFINITION _encode_Credentials */
/**
 * @summary Encodes a(n) Credentials into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Credentials, encoded as an ASN.1 Element.
 */
export function _encode_Credentials(
    value: Credentials,
    elGetter: $.ASN1Encoder<Credentials>
) {
    if (!_cached_encoder_for_Credentials) {
        _cached_encoder_for_Credentials = $._encode_choice<Credentials>(
            {
                simple: _encode_Password,
                strong: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_StrongCredentials,
                    $.BER
                ),
                protected_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ProtectedPassword,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Credentials(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Credentials */

/* eslint-enable */
