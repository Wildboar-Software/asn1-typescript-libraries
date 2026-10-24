/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";
// export { CallId, _decode_CallId, _encode_CallId } from "../PCESP/CallId.ta.mjs";


/**
 * @summary CCOpen_ccOpenOption
 * @description
 *
 * The alternative on `CCOpen` that names the calls associated with opening call
 * content, or a reserved null.
 *
 * `ccOpenTime` is a sequence of `CallId`. `reserved0` is `NULL` and marked
 * reserved. This edition does not define which calls are listed.
 *
 * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
 *
 * https://www.etsi.org/deliver/etsi_ts/101900_101999/1019092001/01.01.02_60/ts_1019092001v010102p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCOpen-ccOpenOption ::= CHOICE {
 *     ccOpenTime  [3] SEQUENCE OF CallId,
 *     reserved0   [4] NULL, -- Reserved
 *     ...
 * }
 * ```
 */
export
type CCOpen_ccOpenOption =
    /**
     * Call identifiers associated with opening call content. This
     * edition does not define which calls are listed.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    { ccOpenTime: CallId[] } /* CHOICE_ALT_ROOT */
    /**
     * Reserved. Encoded as `NULL`. No use is defined.
     *
     * ETSI TS 101 909-20-1 V1.1.2 (2005-10), annex A.
     */
    | { reserved0: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CCOpen_ccOpenOption: $.ASN1Decoder<CCOpen_ccOpenOption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCOpen_ccOpenOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCOpen_ccOpenOption (el: _Element): CCOpen_ccOpenOption {
    if (!_cached_decoder_for_CCOpen_ccOpenOption) { _cached_decoder_for_CCOpen_ccOpenOption = $._decode_extensible_choice<CCOpen_ccOpenOption>({
    "CONTEXT 3": [ "ccOpenTime", $._decode_implicit<CallId[]>(() => $._decodeSequenceOf<CallId>(() => _decode_CallId)) ],
    "CONTEXT 4": [ "reserved0", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CCOpen_ccOpenOption(el);
}

let _cached_encoder_for_CCOpen_ccOpenOption: $.ASN1Encoder<CCOpen_ccOpenOption> | null = null;

/**
 * @summary Encodes a(n) CCOpen_ccOpenOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCOpen_ccOpenOption, encoded as an ASN.1 Element.
 */
export
function _encode_CCOpen_ccOpenOption (value: CCOpen_ccOpenOption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCOpen_ccOpenOption) { _cached_encoder_for_CCOpen_ccOpenOption = $._encode_choice<CCOpen_ccOpenOption>({
    "ccOpenTime": $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<CallId>(() => _encode_CallId, $.BER), $.BER),
    "reserved0": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CCOpen_ccOpenOption(value, elGetter);
}


/* eslint-enable */
