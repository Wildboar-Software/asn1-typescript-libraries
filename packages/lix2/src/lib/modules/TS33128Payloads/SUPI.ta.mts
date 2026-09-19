/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";


/**
 * @summary SUPI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPI  ::=  CHOICE
 * {
 *     iMSI        [1] IMSI,
 *     nAI         [2] NAI
 * }
 * ```
 */
export
type SUPI =
    { iMSI: IMSI } /* CHOICE_ALT_ROOT */
    | { nAI: NAI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SUPI: $.ASN1Decoder<SUPI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUPI (el: _Element): SUPI {
    if (!_cached_decoder_for_SUPI) { _cached_decoder_for_SUPI = $._decode_inextensible_choice<SUPI>({
    "CONTEXT 1": [ "iMSI", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 2": [ "nAI", $._decode_implicit<NAI>(() => _decode_NAI) ]
}); }
    return _cached_decoder_for_SUPI(el);
}

let _cached_encoder_for_SUPI: $.ASN1Encoder<SUPI> | null = null;

/**
 * @summary Encodes a(n) SUPI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPI, encoded as an ASN.1 Element.
 */
export
function _encode_SUPI (value: SUPI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUPI) { _cached_encoder_for_SUPI = $._encode_choice<SUPI>({
    "iMSI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER),
    "nAI": $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER),
}, $.BER); }
    return _cached_encoder_for_SUPI(value, elGetter);
}


/* eslint-enable */
