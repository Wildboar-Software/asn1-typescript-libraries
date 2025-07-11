/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SPKM_REP_TI,
    _decode_SPKM_REP_TI,
    _encode_SPKM_REP_TI,
} from "../SpkmGssTokens/SPKM-REP-TI.ta.mjs";
import {
    SPKM_REQ,
    _decode_SPKM_REQ,
    _encode_SPKM_REQ,
} from "../SpkmGssTokens/SPKM-REQ.ta.mjs";
/**
 * @summary SpkmCredentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpkmCredentials  ::=  CHOICE {
 *   req            [0]  SPKM-REQ,
 *   rep            [1]  SPKM-REP-TI,
 *   ... }
 * ```
 */
export type SpkmCredentials =
    | { req: SPKM_REQ } /* CHOICE_ALT_ROOT */
    | { rep: SPKM_REP_TI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SpkmCredentials: $.ASN1Decoder<SpkmCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpkmCredentials
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpkmCredentials} The decoded data structure.
 */
export function _decode_SpkmCredentials(el: _Element): SpkmCredentials {
    if (!_cached_decoder_for_SpkmCredentials) {
        _cached_decoder_for_SpkmCredentials = $._decode_extensible_choice<SpkmCredentials>(
            {
                "CONTEXT 0": [
                    "req",
                    $._decode_explicit<SPKM_REQ>(() => _decode_SPKM_REQ),
                ],
                "CONTEXT 1": [
                    "rep",
                    $._decode_explicit<SPKM_REP_TI>(() => _decode_SPKM_REP_TI),
                ],
            }
        );
    }
    return _cached_decoder_for_SpkmCredentials(el);
}

let _cached_encoder_for_SpkmCredentials: $.ASN1Encoder<SpkmCredentials> | null = null;

/**
 * @summary Encodes a(n) SpkmCredentials into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpkmCredentials, encoded as an ASN.1 Element.
 */
export function _encode_SpkmCredentials(
    value: SpkmCredentials,
    elGetter: $.ASN1Encoder<SpkmCredentials>
): _Element {
    if (!_cached_encoder_for_SpkmCredentials) {
        _cached_encoder_for_SpkmCredentials = $._encode_choice<SpkmCredentials>(
            {
                req: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SPKM_REQ,
                    $.BER
                ),
                rep: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_SPKM_REP_TI,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SpkmCredentials(value, elGetter);
}


/* eslint-enable */
