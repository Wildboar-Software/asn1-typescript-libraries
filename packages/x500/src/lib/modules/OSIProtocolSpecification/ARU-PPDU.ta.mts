/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ARU_PPDU_normal_mode_parameters,
    _decode_ARU_PPDU_normal_mode_parameters,
    _encode_ARU_PPDU_normal_mode_parameters,
} from "../OSIProtocolSpecification/ARU-PPDU-normal-mode-parameters.ta.mjs";
/**
 * @summary ARU_PPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU  ::=  CHOICE {
 *   normal-mode-parameters     [0] IMPLICIT SEQUENCE {
 *     presentation-context-identifier-list
 *                                     [0] IMPLICIT Presentation-context-identifier-list,
 *     user-data                           CHOICE {
 *       fully-encoded-data [APPLICATION 1]  IMPLICIT SEQUENCE SIZE(1..MAX) OF SEQUENCE {
 *         presentation-context-identifier     Presentation-context-identifier,
 *         presentation-data-values            CHOICE {
 *           single-ASN1-type               [0]  ABSTRACT-SYNTAX.&Type(ABRT-apdu)}}}}}
 * ```
 */
export type ARU_PPDU = {
    normal_mode_parameters: ARU_PPDU_normal_mode_parameters;
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ARU_PPDU: $.ASN1Decoder<ARU_PPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU} The decoded data structure.
 */
export function _decode_ARU_PPDU(el: _Element): ARU_PPDU {
    if (!_cached_decoder_for_ARU_PPDU) {
        _cached_decoder_for_ARU_PPDU = $._decode_inextensible_choice<ARU_PPDU>({
            "CONTEXT 0": [
                "normal_mode_parameters",
                $._decode_implicit<ARU_PPDU_normal_mode_parameters>(
                    () => _decode_ARU_PPDU_normal_mode_parameters
                ),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU(el);
}

let _cached_encoder_for_ARU_PPDU: $.ASN1Encoder<ARU_PPDU> | null = null;

/**
 * @summary Encodes a(n) ARU_PPDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU(
    value: ARU_PPDU,
    elGetter: $.ASN1Encoder<ARU_PPDU>
): _Element {
    if (!_cached_encoder_for_ARU_PPDU) {
        _cached_encoder_for_ARU_PPDU = $._encode_choice<ARU_PPDU>(
            {
                normal_mode_parameters: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ARU_PPDU_normal_mode_parameters,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_ARU_PPDU(value, elGetter);
}


/* eslint-enable */
