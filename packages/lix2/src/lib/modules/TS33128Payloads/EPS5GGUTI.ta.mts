/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
// export { GUTI, _decode_GUTI, _encode_GUTI } from "../TS33128Payloads/GUTI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";


/**
 * @summary EPS5GGUTI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS5GGUTI  ::=  CHOICE
 * {
 *     gUTI      [1] GUTI,
 *     fiveGGUTI [2] FiveGGUTI
 * }
 * ```
 */
export
type EPS5GGUTI =
    { gUTI: GUTI } /* CHOICE_ALT_ROOT */
    | { fiveGGUTI: FiveGGUTI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EPS5GGUTI: $.ASN1Decoder<EPS5GGUTI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS5GGUTI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS5GGUTI (el: _Element): EPS5GGUTI {
    if (!_cached_decoder_for_EPS5GGUTI) { _cached_decoder_for_EPS5GGUTI = $._decode_inextensible_choice<EPS5GGUTI>({
    "CONTEXT 1": [ "gUTI", $._decode_implicit<GUTI>(() => _decode_GUTI) ],
    "CONTEXT 2": [ "fiveGGUTI", $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI) ]
}); }
    return _cached_decoder_for_EPS5GGUTI(el);
}

let _cached_encoder_for_EPS5GGUTI: $.ASN1Encoder<EPS5GGUTI> | null = null;

/**
 * @summary Encodes a(n) EPS5GGUTI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS5GGUTI, encoded as an ASN.1 Element.
 */
export
function _encode_EPS5GGUTI (value: EPS5GGUTI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS5GGUTI) { _cached_encoder_for_EPS5GGUTI = $._encode_choice<EPS5GGUTI>({
    "gUTI": $._encode_implicit(_TagClass.context, 1, () => _encode_GUTI, $.BER),
    "fiveGGUTI": $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGGUTI, $.BER),
}, $.BER); }
    return _cached_encoder_for_EPS5GGUTI(value, elGetter);
}


/* eslint-enable */
