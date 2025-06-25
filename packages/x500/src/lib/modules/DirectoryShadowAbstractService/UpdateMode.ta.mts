/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ConsumerUpdateMode,
    _decode_ConsumerUpdateMode,
    _encode_ConsumerUpdateMode,
} from "../DirectoryShadowAbstractService/ConsumerUpdateMode.ta.mjs";
import {
    SupplierUpdateMode,
    _decode_SupplierUpdateMode,
    _encode_SupplierUpdateMode,
} from "../DirectoryShadowAbstractService/SupplierUpdateMode.ta.mjs";
/**
 * @summary UpdateMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateMode  ::=  CHOICE {
 *   supplierInitiated  [0]  SupplierUpdateMode,
 *   consumerInitiated  [1]  ConsumerUpdateMode,
 *   ... }
 * ```
 */
export type UpdateMode =
    | { supplierInitiated: SupplierUpdateMode } /* CHOICE_ALT_ROOT */
    | { consumerInitiated: ConsumerUpdateMode } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UpdateMode: $.ASN1Decoder<UpdateMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateMode} The decoded data structure.
 */
export function _decode_UpdateMode(el: _Element): UpdateMode {
    if (!_cached_decoder_for_UpdateMode) {
        _cached_decoder_for_UpdateMode = $._decode_extensible_choice<UpdateMode>(
            {
                "CONTEXT 0": [
                    "supplierInitiated",
                    $._decode_explicit<SupplierUpdateMode>(
                        () => _decode_SupplierUpdateMode
                    ),
                ],
                "CONTEXT 1": [
                    "consumerInitiated",
                    $._decode_implicit<ConsumerUpdateMode>(
                        () => _decode_ConsumerUpdateMode
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_UpdateMode(el);
}

let _cached_encoder_for_UpdateMode: $.ASN1Encoder<UpdateMode> | null = null;

/**
 * @summary Encodes a(n) UpdateMode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateMode, encoded as an ASN.1 Element.
 */
export function _encode_UpdateMode(
    value: UpdateMode,
    elGetter: $.ASN1Encoder<UpdateMode>
): _Element {
    if (!_cached_encoder_for_UpdateMode) {
        _cached_encoder_for_UpdateMode = $._encode_choice<UpdateMode>(
            {
                supplierInitiated: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SupplierUpdateMode,
                    $.DER
                ),
                consumerInitiated: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ConsumerUpdateMode,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_UpdateMode(value, elGetter);
}


/* eslint-enable */
