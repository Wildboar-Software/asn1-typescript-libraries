/* eslint-disable */
import { ASN1Element as _Element, INTEGER, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  CHOICE {
 *   present  INTEGER,
 *   absent   NULL,
 *   ... }
 * ```
 */
export type InvokeId =
    | { present: INTEGER } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeId} The decoded data structure.
 */
export function _decode_InvokeId(el: _Element): InvokeId {
    if (!_cached_decoder_for_InvokeId) {
        _cached_decoder_for_InvokeId = $._decode_extensible_choice<InvokeId>({
            "UNIVERSAL 2": ["present", $._decodeInteger],
            "UNIVERSAL 5": ["absent", $._decodeNull],
        });
    }
    return _cached_decoder_for_InvokeId(el);
}

let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;

/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export function _encode_InvokeId(
    value: InvokeId,
    elGetter: $.ASN1Encoder<InvokeId>
): _Element {
    if (!_cached_encoder_for_InvokeId) {
        _cached_encoder_for_InvokeId = $._encode_choice<InvokeId>(
            {
                present: $._encodeInteger,
                absent: $._encodeNull,
            },
            $.DER
        );
    }
    return _cached_encoder_for_InvokeId(value, elGetter);
}


/* eslint-enable */
