/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiagnosticCltuTransferData, _decode_DiagnosticCltuTransferData, _encode_DiagnosticCltuTransferData } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/DiagnosticCltuTransferData.ta.mjs";


/**
 * @summary CltuTransferDataReturn_result
 * @description
 * 
 * Result of CLTU-TRANSFER-DATA. positiveResult (NULL) means the CLTU will be
 * buffered until processing is due. negativeResult means the CLTU is not
 * buffered. CCSDS 912.1-B-5, sections 3.6.2.12 and 3.6.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuTransferDataReturn-result ::= CHOICE
 *    {  positiveResult                [0]   NULL
 *    ,  negativeResult                [1]   DiagnosticCltuTransferData
 *    }
 * ```
 */
export
type CltuTransferDataReturn_result =
    { positiveResult: NULL } /* CHOICE_ALT_ROOT */
    | { negativeResult: DiagnosticCltuTransferData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuTransferDataReturn_result: $.ASN1Decoder<CltuTransferDataReturn_result> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuTransferDataReturn_result
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuTransferDataReturn_result (el: _Element): CltuTransferDataReturn_result {
    if (!_cached_decoder_for_CltuTransferDataReturn_result) { _cached_decoder_for_CltuTransferDataReturn_result = $._decode_inextensible_choice<CltuTransferDataReturn_result>({
    "CONTEXT 0": [ "positiveResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "negativeResult", $._decode_explicit<DiagnosticCltuTransferData>(() => _decode_DiagnosticCltuTransferData) ]
}); }
    return _cached_decoder_for_CltuTransferDataReturn_result(el);
}

let _cached_encoder_for_CltuTransferDataReturn_result: $.ASN1Encoder<CltuTransferDataReturn_result> | null = null;

/**
 * @summary Encodes a(n) CltuTransferDataReturn_result into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuTransferDataReturn_result, encoded as an ASN.1 Element.
 */
export
function _encode_CltuTransferDataReturn_result (value: CltuTransferDataReturn_result, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuTransferDataReturn_result) { _cached_encoder_for_CltuTransferDataReturn_result = $._encode_choice<CltuTransferDataReturn_result>({
    "positiveResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "negativeResult": $._encode_explicit(_TagClass.context, 1, () => _encode_DiagnosticCltuTransferData, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuTransferDataReturn_result(value, elGetter);
}


/* eslint-enable */
