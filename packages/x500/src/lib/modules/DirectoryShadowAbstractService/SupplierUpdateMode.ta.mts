/* eslint-disable */
import { ASN1Element as _Element, BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SchedulingParameters,
    _decode_SchedulingParameters,
    _encode_SchedulingParameters,
} from "../DirectoryShadowAbstractService/SchedulingParameters.ta.mjs";
/**
 * @summary SupplierUpdateMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierUpdateMode  ::=  CHOICE {
 *   onChange   BOOLEAN,
 *   scheduled  SchedulingParameters,
 *   ... }
 * ```
 */
export type SupplierUpdateMode =
    | { onChange: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { scheduled: SchedulingParameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SupplierUpdateMode: $.ASN1Decoder<SupplierUpdateMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplierUpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierUpdateMode} The decoded data structure.
 */
export function _decode_SupplierUpdateMode(el: _Element): SupplierUpdateMode {
    if (!_cached_decoder_for_SupplierUpdateMode) {
        _cached_decoder_for_SupplierUpdateMode = $._decode_extensible_choice<SupplierUpdateMode>(
            {
                "UNIVERSAL 1": ["onChange", $._decodeBoolean],
                "UNIVERSAL 16": ["scheduled", _decode_SchedulingParameters],
            }
        );
    }
    return _cached_decoder_for_SupplierUpdateMode(el);
}

let _cached_encoder_for_SupplierUpdateMode: $.ASN1Encoder<SupplierUpdateMode> | null = null;

/**
 * @summary Encodes a(n) SupplierUpdateMode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierUpdateMode, encoded as an ASN.1 Element.
 */
export function _encode_SupplierUpdateMode(
    value: SupplierUpdateMode,
    elGetter: $.ASN1Encoder<SupplierUpdateMode>
): _Element {
    if (!_cached_encoder_for_SupplierUpdateMode) {
        _cached_encoder_for_SupplierUpdateMode = $._encode_choice<SupplierUpdateMode>(
            {
                onChange: $._encodeBoolean,
                scheduled: _encode_SchedulingParameters,
            },
            $.DER
        );
    }
    return _cached_encoder_for_SupplierUpdateMode(value, elGetter);
}


/* eslint-enable */
