/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, NULL, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PeriodToReview
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeriodToReview  ::=  CHOICE
 * {    startOfMessage            NULL,
 *     lengthOfReview            INTEGER }
 * ```
 */
export
type PeriodToReview =
    { startOfMessage: NULL } /* CHOICE_ALT_ROOT */
    | { lengthOfReview: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PeriodToReview: $.ASN1Decoder<PeriodToReview> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeriodToReview
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeriodToReview (el: _Element): PeriodToReview {
    if (!_cached_decoder_for_PeriodToReview) { _cached_decoder_for_PeriodToReview = $._decode_inextensible_choice<PeriodToReview>({
    "UNIVERSAL 5": [ "startOfMessage", $._decodeNull ],
    "UNIVERSAL 2": [ "lengthOfReview", $._decodeInteger ]
}); }
    return _cached_decoder_for_PeriodToReview(el);
}

let _cached_encoder_for_PeriodToReview: $.ASN1Encoder<PeriodToReview> | null = null;

/**
 * @summary Encodes a(n) PeriodToReview into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodToReview, encoded as an ASN.1 Element.
 */
export
function _encode_PeriodToReview (value: PeriodToReview, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeriodToReview) { _cached_encoder_for_PeriodToReview = $._encode_choice<PeriodToReview>({
    "startOfMessage": $._encodeNull,
    "lengthOfReview": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_PeriodToReview(value, elGetter);
}


/* eslint-enable */
