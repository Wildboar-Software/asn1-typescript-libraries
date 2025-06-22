/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityProblem,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
import {
    ServiceProblem,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
/**
 * @summary DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1-error ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error =
    | { serviceError: ServiceProblem } /* CHOICE_ALT_ROOT */
    | { securityError: SecurityProblem } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error: $.ASN1Decoder<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error} The decoded data structure.
 */
export function _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
    el: _Element
) {
    if (
        !_cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
    ) {
        _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error = $._decode_extensible_choice<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error>(
            {
                "CONTEXT 1": [
                    "serviceError",
                    $._decode_explicit<ServiceProblem>(
                        () => _decode_ServiceProblem
                    ),
                ],
                "CONTEXT 2": [
                    "securityError",
                    $._decode_explicit<SecurityProblem>(
                        () => _decode_SecurityProblem
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
        el
    );
}

let _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error: $.ASN1Encoder<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error> | null = null;

/**
 * @summary Encodes a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
    value: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
    elGetter: $.ASN1Encoder<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error>
) {
    if (
        !_cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
    ) {
        _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error = $._encode_choice<DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error>(
            {
                serviceError: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ServiceProblem,
                    $.BER
                ),
                securityError: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_SecurityProblem,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
        value,
        elGetter
    );
}


/* eslint-enable */
