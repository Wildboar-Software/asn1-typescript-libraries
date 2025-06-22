/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TBerror,
    _decode_TBerror,
    _encode_TBerror,
} from "../PkiPMIProtocolSpecifications/TBerror.ta.mjs";
import {
    TBOK,
    _decode_TBOK,
    _encode_TBOK,
} from "../PkiPMIProtocolSpecifications/TBOK.ta.mjs";
/**
 * @summary TBresponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBresponse  ::=  CHOICE {
 *   success [0]  TBOK,
 *   failure [1]  TBerror,
 *   ... }
 * ```
 */
export type TBresponse =
    | { success: TBOK } /* CHOICE_ALT_ROOT */
    | { failure: TBerror } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TBresponse: $.ASN1Decoder<TBresponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBresponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBresponse} The decoded data structure.
 */
export function _decode_TBresponse(el: _Element) {
    if (!_cached_decoder_for_TBresponse) {
        _cached_decoder_for_TBresponse = $._decode_extensible_choice<TBresponse>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_explicit<TBOK>(() => _decode_TBOK),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_explicit<TBerror>(() => _decode_TBerror),
                ],
            }
        );
    }
    return _cached_decoder_for_TBresponse(el);
}

let _cached_encoder_for_TBresponse: $.ASN1Encoder<TBresponse> | null = null;

/**
 * @summary Encodes a(n) TBresponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBresponse, encoded as an ASN.1 Element.
 */
export function _encode_TBresponse(
    value: TBresponse,
    elGetter: $.ASN1Encoder<TBresponse>
) {
    if (!_cached_encoder_for_TBresponse) {
        _cached_encoder_for_TBresponse = $._encode_choice<TBresponse>(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_TBOK,
                    $.DER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_TBerror,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TBresponse(value, elGetter);
}


/* eslint-enable */
