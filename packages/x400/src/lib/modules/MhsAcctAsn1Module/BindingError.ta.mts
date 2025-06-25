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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    BindingError_integer,
    _decode_BindingError_integer,
    _encode_BindingError_integer,
} from '../MhsAcctAsn1Module/BindingError-integer.ta.mjs';
import {
    MSBindError,
    _decode_MSBindError,
    _encode_MSBindError,
} from '../MhsAcctAsn1Module/MSBindError.ta.mjs';
/**
 * @summary BindingError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindingError  ::=  CHOICE {
 *   integer
 *     [0]  INTEGER {busy(0), authentication-error(2),
 *                   unacceptable-dialogue-mode(3),
 *                   unacceptable-security-context(4)},
 *   msbinderror  [1]  MSBindError
 * }
 * ```
 */
export type BindingError =
    | { integer: BindingError_integer } /* CHOICE_ALT_ROOT */
    | { msbinderror: MSBindError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BindingError: $.ASN1Decoder<BindingError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BindingError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindingError} The decoded data structure.
 */
export function _decode_BindingError(el: _Element): BindingError {
    if (!_cached_decoder_for_BindingError) {
        _cached_decoder_for_BindingError = $._decode_inextensible_choice<BindingError>(
            {
                'CONTEXT 0': [
                    'integer',
                    $._decode_implicit<BindingError_integer>(
                        () => _decode_BindingError_integer
                    ),
                ],
                'CONTEXT 1': [
                    'msbinderror',
                    $._decode_implicit<MSBindError>(() => _decode_MSBindError),
                ],
            }
        );
    }
    return _cached_decoder_for_BindingError(el);
}

let _cached_encoder_for_BindingError: $.ASN1Encoder<BindingError> | null = null;

/**
 * @summary Encodes a(n) BindingError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindingError, encoded as an ASN.1 Element.
 */
export function _encode_BindingError(
    value: BindingError,
    elGetter: $.ASN1Encoder<BindingError>
): _Element {
    if (!_cached_encoder_for_BindingError) {
        _cached_encoder_for_BindingError = $._encode_choice<BindingError>(
            {
                integer: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_BindingError_integer,
                    $.BER
                ),
                msbinderror: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MSBindError,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BindingError(value, elGetter);
}


/* eslint-enable */
