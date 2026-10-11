/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128IdentityAssociation/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128IdentityAssociation/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128IdentityAssociation/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128IdentityAssociation/NAI.ta.mjs";


/**
 * @summary GPSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPSI  ::=  CHOICE
 * {
 *     gPSIMSISDN  [1] MSISDN,
 *     gPSINAI     [2] NAI
 * }
 * ```
 */
export
type GPSI =
    { gPSIMSISDN: MSISDN } /* CHOICE_ALT_ROOT */
    | { gPSINAI: NAI } /* CHOICE_ALT_ROOT */
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
    "CONTEXT 1": [ "gPSIMSISDN", $._decode_implicit<MSISDN>(() => _decode_MSISDN) ],
    "CONTEXT 2": [ "gPSINAI", $._decode_implicit<NAI>(() => _decode_NAI) ]
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
    "gPSIMSISDN": $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER),
    "gPSINAI": $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER),
}, $.BER); }
    return _cached_encoder_for_GPSI(value, elGetter);
}


/* eslint-enable */
