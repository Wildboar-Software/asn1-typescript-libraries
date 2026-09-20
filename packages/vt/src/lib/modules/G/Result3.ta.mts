/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Reason, _decode_Reason, _encode_Reason } from "../G/Reason.ta.mjs";


/**
 * @summary Result3
 * @description
 *
 * Three-way result used by ASR and ENR: `success`, `fail` with
 * `Reason`, or `successWithWarning` with `Reason`. ISO/IEC
 * 9041-1:1997 §6.3.2 d, §6.10.2 b, §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Result3  ::=  CHOICE {
 *     success            [0] IMPLICIT NULL,
 *     fail               [1] IMPLICIT Reason,
 *     successWithWarning [2] IMPLICIT Reason
 * }
 * ```
 */
export
type Result3 =
    { success: NULL } /* CHOICE_ALT_ROOT */
    | { fail: Reason } /* CHOICE_ALT_ROOT */
    | { successWithWarning: Reason } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Result3: $.ASN1Decoder<Result3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Result3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Result3 (el: _Element): Result3 {
    if (!_cached_decoder_for_Result3) { _cached_decoder_for_Result3 = $._decode_inextensible_choice<Result3>({
    "CONTEXT 0": [ "success", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "fail", $._decode_implicit<Reason>(() => _decode_Reason) ],
    "CONTEXT 2": [ "successWithWarning", $._decode_implicit<Reason>(() => _decode_Reason) ]
}); }
    return _cached_decoder_for_Result3(el);
}

let _cached_encoder_for_Result3: $.ASN1Encoder<Result3> | null = null;

/**
 * @summary Encodes a(n) Result3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result3, encoded as an ASN.1 Element.
 */
export
function _encode_Result3 (value: Result3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Result3) { _cached_encoder_for_Result3 = $._encode_choice<Result3>({
    "success": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "fail": $._encode_implicit(_TagClass.context, 1, () => _encode_Reason, $.BER),
    "successWithWarning": $._encode_implicit(_TagClass.context, 2, () => _encode_Reason, $.BER),
}, $.BER); }
    return _cached_encoder_for_Result3(value, elGetter);
}


/* eslint-enable */
