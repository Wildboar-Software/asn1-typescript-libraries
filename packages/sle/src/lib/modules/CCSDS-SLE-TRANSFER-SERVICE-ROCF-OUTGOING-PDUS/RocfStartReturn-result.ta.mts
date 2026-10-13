/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticRocfStart, _decode_DiagnosticRocfStart, _encode_DiagnosticRocfStart } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfStart.ta.mjs";
// export { DiagnosticRocfStart, _decode_DiagnosticRocfStart, _encode_DiagnosticRocfStart } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/DiagnosticRocfStart.ta.mjs";


/**
 * @summary RocfStartReturn_result
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfStartReturn-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RocfStartReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticRocfStart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RocfStartReturn_result: $.ASN1Decoder<RocfStartReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfStartReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfStartReturn_result (el: _Element): RocfStartReturn_result {
    if (!_cached_decoder_for_RocfStartReturn_result) { _cached_decoder_for_RocfStartReturn_result = $._decode_inextensible_choice<RocfStartReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticRocfStart>(() => _decode_DiagnosticRocfStart) ]
}); }
    return _cached_decoder_for_RocfStartReturn_result(el);
}

let _cached_encoder_for_RocfStartReturn_result: $.ASN1Encoder<RocfStartReturn_result> | null = null;

/**
 * @summary Encodes a(n) RocfStartReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfStartReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_RocfStartReturn_result (value: RocfStartReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfStartReturn_result) { _cached_encoder_for_RocfStartReturn_result = $._encode_choice<RocfStartReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticRocfStart, $.BER),
}, $.BER); }
    return _cached_encoder_for_RocfStartReturn_result(value, elGetter);
}


/* eslint-enable */
