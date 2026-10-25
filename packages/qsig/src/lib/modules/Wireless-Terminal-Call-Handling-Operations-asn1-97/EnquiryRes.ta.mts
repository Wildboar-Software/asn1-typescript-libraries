/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CurrLocation, _decode_CurrLocation, _encode_CurrLocation } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/CurrLocation.ta.mjs";
import { CfuActivated, _decode_CfuActivated, _encode_CfuActivated } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/CfuActivated.ta.mjs";

/**
 * @summary EnquiryRes
 * @description
 *
 * Result of `wtmiEnquiry` (ECMA-304 §6.5.3). `currLocation` when the WTMI user
 * is in the HDB and the location is known for the requested basic service.
 * `cfuActivated` when the user is in the HDB and SS-CFU is active (§6.5.3.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnquiryRes  ::=  CHOICE {
 *     currLocation [1] IMPLICIT CurrLocation,
 *     cfuActivated [2] IMPLICIT CfuActivated
 * }
 * ```
 */
export
type EnquiryRes =
    { currLocation: CurrLocation } /* CHOICE_ALT_ROOT */
    | { cfuActivated: CfuActivated } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EnquiryRes: $.ASN1Decoder<EnquiryRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnquiryRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnquiryRes (el: _Element): EnquiryRes {
    if (!_cached_decoder_for_EnquiryRes) { _cached_decoder_for_EnquiryRes = $._decode_inextensible_choice<EnquiryRes>({
    "CONTEXT 1": [ "currLocation", $._decode_implicit<CurrLocation>(() => _decode_CurrLocation) ],
    "CONTEXT 2": [ "cfuActivated", $._decode_implicit<CfuActivated>(() => _decode_CfuActivated) ]
}); }
    return _cached_decoder_for_EnquiryRes(el);
}

let _cached_encoder_for_EnquiryRes: $.ASN1Encoder<EnquiryRes> | null = null;

/**
 * @summary Encodes a(n) EnquiryRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnquiryRes, encoded as an ASN.1 Element.
 */
export
function _encode_EnquiryRes (value: EnquiryRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnquiryRes) { _cached_encoder_for_EnquiryRes = $._encode_choice<EnquiryRes>({
    "currLocation": $._encode_implicit(_TagClass.context, 1, () => _encode_CurrLocation, $.BER),
    "cfuActivated": $._encode_implicit(_TagClass.context, 2, () => _encode_CfuActivated, $.BER),
}, $.BER); }
    return _cached_encoder_for_EnquiryRes(value, elGetter);
}

/* eslint-enable */
