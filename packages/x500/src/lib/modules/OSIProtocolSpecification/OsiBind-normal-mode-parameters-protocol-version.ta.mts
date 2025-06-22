/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OsiBind_normal_mode_parameters_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBind-normal-mode-parameters-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBind_normal_mode_parameters_protocol_version = BIT_STRING;

/**
 * @summary OsiBind_normal_mode_parameters_protocol_version_version_1
 * @constant
 */
export const OsiBind_normal_mode_parameters_protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version_1
 * @constant
 */
export const version_1: number = OsiBind_normal_mode_parameters_protocol_version_version_1; /* SHORT_NAMED_BIT */

let _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version: $.ASN1Decoder<OsiBind_normal_mode_parameters_protocol_version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OsiBind_normal_mode_parameters_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBind_normal_mode_parameters_protocol_version} The decoded data structure.
 */
export function _decode_OsiBind_normal_mode_parameters_protocol_version(
    el: _Element
) {
    if (!_cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version) {
        _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version =
            $._decodeBitString;
    }
    return _cached_decoder_for_OsiBind_normal_mode_parameters_protocol_version(
        el
    );
}

let _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version: $.ASN1Encoder<OsiBind_normal_mode_parameters_protocol_version> | null = null;

/**
 * @summary Encodes a(n) OsiBind_normal_mode_parameters_protocol_version into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBind_normal_mode_parameters_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_OsiBind_normal_mode_parameters_protocol_version(
    value: OsiBind_normal_mode_parameters_protocol_version,
    elGetter: $.ASN1Encoder<OsiBind_normal_mode_parameters_protocol_version>
) {
    if (!_cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version) {
        _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version =
            $._encodeBitString;
    }
    return _cached_encoder_for_OsiBind_normal_mode_parameters_protocol_version(
        value,
        elGetter
    );
}


/* eslint-enable */
