/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateGroupNumberRange,
    _decode_CertificateGroupNumberRange,
    _encode_CertificateGroupNumberRange,
} from "../CertificateExtensions/CertificateGroupNumberRange.ta.mjs";
import {
    CertificateSerialNumbers,
    _decode_CertificateSerialNumbers,
    _encode_CertificateSerialNumbers,
} from "../CertificateExtensions/CertificateSerialNumbers.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
/**
 * @summary CertificateGroup
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateGroup  ::=  CHOICE {
 *   serialNumbers      [0]  CertificateSerialNumbers,
 *   serialNumberRange  [1]  CertificateGroupNumberRange,
 *   nameSubtree        [2]  GeneralName,
 *   ... }
 * ```
 */
export type CertificateGroup =
    | { serialNumbers: CertificateSerialNumbers } /* CHOICE_ALT_ROOT */
    | { serialNumberRange: CertificateGroupNumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CertificateGroup: $.ASN1Decoder<CertificateGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateGroup
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateGroup} The decoded data structure.
 */
export function _decode_CertificateGroup(el: _Element) {
    if (!_cached_decoder_for_CertificateGroup) {
        _cached_decoder_for_CertificateGroup = $._decode_extensible_choice<CertificateGroup>(
            {
                "CONTEXT 0": [
                    "serialNumbers",
                    $._decode_implicit<CertificateSerialNumbers>(
                        () => _decode_CertificateSerialNumbers
                    ),
                ],
                "CONTEXT 1": [
                    "serialNumberRange",
                    $._decode_implicit<CertificateGroupNumberRange>(
                        () => _decode_CertificateGroupNumberRange
                    ),
                ],
                "CONTEXT 2": [
                    "nameSubtree",
                    $._decode_explicit<GeneralName>(() => _decode_GeneralName),
                ],
            }
        );
    }
    return _cached_decoder_for_CertificateGroup(el);
}

let _cached_encoder_for_CertificateGroup: $.ASN1Encoder<CertificateGroup> | null = null;

/**
 * @summary Encodes a(n) CertificateGroup into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateGroup, encoded as an ASN.1 Element.
 */
export function _encode_CertificateGroup(
    value: CertificateGroup,
    elGetter: $.ASN1Encoder<CertificateGroup>
) {
    if (!_cached_encoder_for_CertificateGroup) {
        _cached_encoder_for_CertificateGroup = $._encode_choice<CertificateGroup>(
            {
                serialNumbers: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertificateSerialNumbers,
                    $.DER
                ),
                serialNumberRange: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertificateGroupNumberRange,
                    $.DER
                ),
                nameSubtree: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_GeneralName,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_CertificateGroup(value, elGetter);
}


/* eslint-enable */
