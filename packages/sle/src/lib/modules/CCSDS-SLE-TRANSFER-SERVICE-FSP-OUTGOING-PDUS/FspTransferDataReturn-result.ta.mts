/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DiagnosticFspTransferData, _decode_DiagnosticFspTransferData, _encode_DiagnosticFspTransferData } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DiagnosticFspTransferData.ta.mjs";


/**
 * @summary FspTransferDataReturn_result
 * @description
 * 
 * Result of FSP-TRANSFER-DATA. `positiveResult` is empty. A positive result
 * omits the diagnostic. `negativeResult` carries the diagnostic.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.17 and 3.6.2.18.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspTransferDataReturn-result ::= CHOICE
 *    {  positiveResult          [0]   NULL
 *    ,  negativeResult          [1]   DiagnosticFspTransferData
 *    }
 * ```
 */
export
type FspTransferDataReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticFspTransferData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspTransferDataReturn_result: $.ASN1Decoder<FspTransferDataReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspTransferDataReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspTransferDataReturn_result (el: _Element): FspTransferDataReturn_result {
    if (!_cached_decoder_for_FspTransferDataReturn_result) { _cached_decoder_for_FspTransferDataReturn_result = $._decode_inextensible_choice<FspTransferDataReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticFspTransferData>(() => _decode_DiagnosticFspTransferData) ]
}); }
    return _cached_decoder_for_FspTransferDataReturn_result(el);
}

let _cached_encoder_for_FspTransferDataReturn_result: $.ASN1Encoder<FspTransferDataReturn_result> | null = null;

/**
 * @summary Encodes a(n) FspTransferDataReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspTransferDataReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_FspTransferDataReturn_result (value: FspTransferDataReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspTransferDataReturn_result) { _cached_encoder_for_FspTransferDataReturn_result = $._encode_choice<FspTransferDataReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticFspTransferData, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspTransferDataReturn_result(value, elGetter);
}


/* eslint-enable */
