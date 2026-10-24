/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticRcfStart, _decode_DiagnosticRcfStart, _encode_DiagnosticRcfStart } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/DiagnosticRcfStart.ta.mjs";


/**
 * @summary RcfStartReturn_result
 * @description
 *
 * Outcome of RCF-START. positiveResult means the provider will deliver every
 * available frame that meets the delivery criteria. negativeResult means the
 * provider did not start delivery; this alternative carries the diagnostic.
 * 'other reason' is used only when no listed diagnostic describes the failure.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.8, 3.4.2.9, and 3.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfStartReturn-result ::= CHOICE
 *     {   positiveResult                     [0] NULL
 *     ,   negativeResult                     [1] DiagnosticRcfStart
 *     }
 * ```
 */
export
type RcfStartReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticRcfStart } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RcfStartReturn_result: $.ASN1Decoder<RcfStartReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfStartReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfStartReturn_result (el: _Element): RcfStartReturn_result {
    if (!_cached_decoder_for_RcfStartReturn_result) { _cached_decoder_for_RcfStartReturn_result = $._decode_inextensible_choice<RcfStartReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticRcfStart>(() => _decode_DiagnosticRcfStart) ]
}); }
    return _cached_decoder_for_RcfStartReturn_result(el);
}

let _cached_encoder_for_RcfStartReturn_result: $.ASN1Encoder<RcfStartReturn_result> | null = null;

/**
 * @summary Encodes a(n) RcfStartReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfStartReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_RcfStartReturn_result (value: RcfStartReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfStartReturn_result) { _cached_encoder_for_RcfStartReturn_result = $._encode_choice<RcfStartReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticRcfStart, $.BER),
}, $.BER); }
    return _cached_encoder_for_RcfStartReturn_result(value, elGetter);
}


/* eslint-enable */
