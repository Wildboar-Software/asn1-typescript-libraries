/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/src/lib/modules/CertificateExtensions/GeneralNames.ta.mjs";


/**
 * @summary MLReceiptPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MLReceiptPolicy  ::=  CHOICE {
 *     none [0] NULL,
 *     insteadOf [1] SEQUENCE SIZE (1..MAX) OF GeneralNames,
 *     inAdditionTo [2] SEQUENCE SIZE (1..MAX) OF GeneralNames
 * }
 * ```
 */
export type MLReceiptPolicy =
    | { none: NULL } /* CHOICE_ALT_ROOT */
    | { insteadOf: GeneralNames[] } /* CHOICE_ALT_ROOT */
    | { inAdditionTo: GeneralNames[] } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_MLReceiptPolicy: $.ASN1Decoder<MLReceiptPolicy> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MLReceiptPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MLReceiptPolicy} The decoded data structure.
 */
export function _decode_MLReceiptPolicy(el: _Element): MLReceiptPolicy {
    if (!_cached_decoder_for_MLReceiptPolicy) {
        _cached_decoder_for_MLReceiptPolicy = $._decode_inextensible_choice<MLReceiptPolicy>(
            {
                "CONTEXT 0": [
                    "none",
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "insteadOf",
                    $._decode_implicit<GeneralNames[]>(() =>
                        $._decodeSequenceOf<GeneralNames>(
                            () => _decode_GeneralNames
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "inAdditionTo",
                    $._decode_implicit<GeneralNames[]>(() =>
                        $._decodeSequenceOf<GeneralNames>(
                            () => _decode_GeneralNames
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MLReceiptPolicy(el);
}


let _cached_encoder_for_MLReceiptPolicy: $.ASN1Encoder<MLReceiptPolicy> | null = null;


/**
 * @summary Encodes a(n) MLReceiptPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MLReceiptPolicy, encoded as an ASN.1 Element.
 */
export function _encode_MLReceiptPolicy(
    value: MLReceiptPolicy,
    elGetter: $.ASN1Encoder<MLReceiptPolicy>
): _Element {
    if (!_cached_encoder_for_MLReceiptPolicy) {
        _cached_encoder_for_MLReceiptPolicy = $._encode_choice<MLReceiptPolicy>(
            {
                none: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.DER
                ),
                insteadOf: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<GeneralNames>(
                            () => _encode_GeneralNames,
                            $.DER
                        ),
                    $.DER
                ),
                inAdditionTo: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<GeneralNames>(
                            () => _encode_GeneralNames,
                            $.DER
                        ),
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_MLReceiptPolicy(value, elGetter);
}


/* eslint-enable */
