/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OsiBindError_normal_mode_parameters_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindError_normal_mode_parameters_protocol_version = BIT_STRING;

/**
 * @summary OsiBindError_normal_mode_parameters_protocol_version_version_1
 * @constant
 */
export const OsiBindError_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version_1
 * @constant
 */
export const version_1: number = OsiBindError_normal_mode_parameters_protocol_version_version_1; /* SHORT_NAMED_BIT */

let _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version: $.ASN1Decoder<OsiBindError_normal_mode_parameters_protocol_version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_protocol_version} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_protocol_version(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version
    ) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version =
            $._decodeBitString;
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_protocol_version(
        el
    );
}

let _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version: $.ASN1Encoder<OsiBindError_normal_mode_parameters_protocol_version> | null = null;

/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_protocol_version into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_protocol_version(
    value: OsiBindError_normal_mode_parameters_protocol_version,
    elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters_protocol_version>
) {
    if (
        !_cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version
    ) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version =
            $._encodeBitString;
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}


/* eslint-enable */
