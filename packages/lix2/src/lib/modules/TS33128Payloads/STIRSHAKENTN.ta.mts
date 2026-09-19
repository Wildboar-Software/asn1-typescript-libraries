/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";


/**
 * @summary STIRSHAKENTN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STIRSHAKENTN  ::=  CHOICE
 * {
 *     mSISDN [1] MSISDN
 * }
 * ```
 */
export
type STIRSHAKENTN =
    { mSISDN: MSISDN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_STIRSHAKENTN: $.ASN1Decoder<STIRSHAKENTN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STIRSHAKENTN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STIRSHAKENTN (el: _Element): STIRSHAKENTN {
    if (!_cached_decoder_for_STIRSHAKENTN) { _cached_decoder_for_STIRSHAKENTN = $._decode_inextensible_choice<STIRSHAKENTN>({
    "CONTEXT 1": [ "mSISDN", $._decode_implicit<MSISDN>(() => _decode_MSISDN) ]
}); }
    return _cached_decoder_for_STIRSHAKENTN(el);
}

let _cached_encoder_for_STIRSHAKENTN: $.ASN1Encoder<STIRSHAKENTN> | null = null;

/**
 * @summary Encodes a(n) STIRSHAKENTN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STIRSHAKENTN, encoded as an ASN.1 Element.
 */
export
function _encode_STIRSHAKENTN (value: STIRSHAKENTN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STIRSHAKENTN) { _cached_encoder_for_STIRSHAKENTN = $._encode_choice<STIRSHAKENTN>({
    "mSISDN": $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER),
}, $.BER); }
    return _cached_encoder_for_STIRSHAKENTN(value, elGetter);
}


/* eslint-enable */
