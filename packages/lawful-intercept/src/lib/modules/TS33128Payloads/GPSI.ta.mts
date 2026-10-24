/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";


/**
 * @summary GPSI
 * @description
 * 
 * The GPSI type is derived from the data present in the Generic Public
 * Subscription Identifier type defined in TS 23.003 [19] clause 28.8.
 *
 * 3GPP TS 33.128, clause 8.3.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPSI  ::=  CHOICE
 * {
 *     mSISDN      [1] MSISDN,
 *     nAI         [2] NAI
 * }
 * ```
 */
export
type GPSI =
    /**
     * @description
     *
     * Chosen when the GPSI type is MSISDN.
     *
     * 3GPP TS 33.128, clause 8.3.7.
     */
    { mSISDN: MSISDN } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Chosen when the GPSI type is External Identifier.
     *
     * 3GPP TS 33.128, clause 8.3.7.
     */
    | { nAI: NAI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GPSI: $.ASN1Decoder<GPSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPSI (el: _Element): GPSI {
    if (!_cached_decoder_for_GPSI) { _cached_decoder_for_GPSI = $._decode_extensible_choice<GPSI>({
    "CONTEXT 1": [ "mSISDN", $._decode_implicit<MSISDN>(() => _decode_MSISDN) ],
    "CONTEXT 2": [ "nAI", $._decode_implicit<NAI>(() => _decode_NAI) ]
}); }
    return _cached_decoder_for_GPSI(el);
}

let _cached_encoder_for_GPSI: $.ASN1Encoder<GPSI> | null = null;

/**
 * @summary Encodes a(n) GPSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPSI, encoded as an ASN.1 Element.
 */
export
function _encode_GPSI (value: GPSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPSI) { _cached_encoder_for_GPSI = $._encode_choice<GPSI>({
    "mSISDN": $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER),
    "nAI": $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER),
}, $.BER); }
    return _cached_encoder_for_GPSI(value, elGetter);
}


/* eslint-enable */
