/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
// export { ECGI, _decode_ECGI, _encode_ECGI } from "../TS33128Payloads/ECGI.ta.mjs";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../TS33128Payloads/NCGI.ta.mjs";
import { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";
// export { CGI, _decode_CGI, _encode_CGI } from "../TS33128Payloads/CGI.ta.mjs";


/**
 * @summary RANCGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANCGI  ::=  CHOICE
 * {
 *     eCGI                        [1] ECGI,
 *     nCGI                        [2] NCGI,
 *     cGI                         [3] CGI
 * }
 * ```
 */
export
type RANCGI =
    { eCGI: ECGI } /* CHOICE_ALT_ROOT */
    | { nCGI: NCGI } /* CHOICE_ALT_ROOT */
    | { cGI: CGI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RANCGI: $.ASN1Decoder<RANCGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANCGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANCGI (el: _Element): RANCGI {
    if (!_cached_decoder_for_RANCGI) { _cached_decoder_for_RANCGI = $._decode_inextensible_choice<RANCGI>({
    "CONTEXT 1": [ "eCGI", $._decode_implicit<ECGI>(() => _decode_ECGI) ],
    "CONTEXT 2": [ "nCGI", $._decode_implicit<NCGI>(() => _decode_NCGI) ],
    "CONTEXT 3": [ "cGI", $._decode_implicit<CGI>(() => _decode_CGI) ]
}); }
    return _cached_decoder_for_RANCGI(el);
}

let _cached_encoder_for_RANCGI: $.ASN1Encoder<RANCGI> | null = null;

/**
 * @summary Encodes a(n) RANCGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANCGI, encoded as an ASN.1 Element.
 */
export
function _encode_RANCGI (value: RANCGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANCGI) { _cached_encoder_for_RANCGI = $._encode_choice<RANCGI>({
    "eCGI": $._encode_implicit(_TagClass.context, 1, () => _encode_ECGI, $.BER),
    "nCGI": $._encode_implicit(_TagClass.context, 2, () => _encode_NCGI, $.BER),
    "cGI": $._encode_implicit(_TagClass.context, 3, () => _encode_CGI, $.BER),
}, $.BER); }
    return _cached_encoder_for_RANCGI(value, elGetter);
}


/* eslint-enable */
