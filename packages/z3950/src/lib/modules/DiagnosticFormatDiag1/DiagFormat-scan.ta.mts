/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "../Z39-50-APDU-2001/AttributeList.ta.mjs";
import { DiagFormat_scan_posInResponse, _decode_DiagFormat_scan_posInResponse, _encode_DiagFormat_scan_posInResponse } from "../DiagnosticFormatDiag1/DiagFormat-scan-posInResponse.ta.mjs";


/**
 * @summary DiagFormat_scan
 * @description
 * 
 * Scan failure (diag-1).
 * 
 * - nonZeroStepSize: only a zero step size is supported (DIAG.1 condition 205).
 * - specifiedStepSize: the specified step size is not supported (condition
 *   206).
 * - termList1: the term list is not supported, and no alternative is supplied.
 * - termList2: the term list is not supported; alternatives are supplied
 *   (condition 232). Addinfo is the alternative term list.
 * - posInResponse: that position-in-response is not supported (condition 233).
 * - resources: resources were exhausted while looking for satisfying terms
 *   (condition 240).
 * - endOfList: beginning or end of the term list (condition 241).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-scan ::= CHOICE {
 *     -- scan diagnostics:
 *     nonZeroStepSize [0] IMPLICIT NULL,
 *     -- only zero step size
 *     -- supported
 *     specifiedStepSize [1] IMPLICIT NULL,
 *     -- specified step size not
 *     -- supported
 *     termList1 [3] IMPLICIT NULL,
 *     -- term list not supported
 *     -- (no alternative supplied)
 *     termList2 [4] IMPLICIT SEQUENCE OF AttributeList,
 *     -- term list not supported
 *     -- (alternatives supplied)
 *     posInResponse [5] IMPLICIT INTEGER {
 *         -- value of positionIn-
 *         -- Response not supported
 *         mustBeOne (1),
 *         mustBePositive (2),
 *         mustBeNonNegative (3),
 *         other (4)
 *     },
 *     resources [6] IMPLICIT NULL,
 *     -- resources exhausted
 *     -- looking for satisfying
 *     -- terms
 *     endOfList [7] IMPLICIT NULL  -- beginning or end of term
 *     -- list
 * }
 * ```
 */
export
type DiagFormat_scan =
    { nonZeroStepSize: NULL } /* CHOICE_ALT_ROOT */
    | { specifiedStepSize: NULL } /* CHOICE_ALT_ROOT */
    | { termList1: NULL } /* CHOICE_ALT_ROOT */
    | { termList2: AttributeList[] } /* CHOICE_ALT_ROOT */
    | { posInResponse: DiagFormat_scan_posInResponse } /* CHOICE_ALT_ROOT */
    | { resources: NULL } /* CHOICE_ALT_ROOT */
    | { endOfList: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagFormat_scan: $.ASN1Decoder<DiagFormat_scan> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_scan
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_scan (el: _Element): DiagFormat_scan {
    if (!_cached_decoder_for_DiagFormat_scan) { _cached_decoder_for_DiagFormat_scan = $._decode_inextensible_choice<DiagFormat_scan>({
    "CONTEXT 0": [ "nonZeroStepSize", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "specifiedStepSize", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "termList1", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "termList2", $._decode_implicit<AttributeList[]>(() => $._decodeSequenceOf<AttributeList>(() => _decode_AttributeList)) ],
    "CONTEXT 5": [ "posInResponse", $._decode_implicit<DiagFormat_scan_posInResponse>(() => _decode_DiagFormat_scan_posInResponse) ],
    "CONTEXT 6": [ "resources", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "endOfList", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_DiagFormat_scan(el);
}

let _cached_encoder_for_DiagFormat_scan: $.ASN1Encoder<DiagFormat_scan> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_scan into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_scan, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_scan (value: DiagFormat_scan, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_scan) { _cached_encoder_for_DiagFormat_scan = $._encode_choice<DiagFormat_scan>({
    "nonZeroStepSize": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "specifiedStepSize": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "termList1": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "termList2": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<AttributeList>(() => _encode_AttributeList, $.BER), $.BER),
    "posInResponse": $._encode_implicit(_TagClass.context, 5, () => _encode_DiagFormat_scan_posInResponse, $.BER),
    "resources": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "endOfList": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat_scan(value, elGetter);
}


/* eslint-enable */
