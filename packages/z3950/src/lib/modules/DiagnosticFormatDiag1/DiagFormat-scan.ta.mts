/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { DiagFormat_scan_posInResponse, DiagFormat_scan_posInResponse_mustBeOne /* IMPORTED_LONG_NAMED_INTEGER */, mustBeOne /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_scan_posInResponse_mustBePositive /* IMPORTED_LONG_NAMED_INTEGER */, mustBePositive /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_scan_posInResponse_mustBeNonNegative /* IMPORTED_LONG_NAMED_INTEGER */, mustBeNonNegative /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_scan_posInResponse_other /* IMPORTED_LONG_NAMED_INTEGER */, other /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_scan_posInResponse, _encode_DiagFormat_scan_posInResponse } from "../DiagnosticFormatDiag1/DiagFormat-scan-posInResponse.ta.mjs";
// export { DiagFormat_scan_posInResponse, DiagFormat_scan_posInResponse_mustBeOne /* IMPORTED_LONG_NAMED_INTEGER */, mustBeOne /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_scan_posInResponse_mustBePositive /* IMPORTED_LONG_NAMED_INTEGER */, mustBePositive /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_scan_posInResponse_mustBeNonNegative /* IMPORTED_LONG_NAMED_INTEGER */, mustBeNonNegative /* IMPORTED_SHORT_NAMED_INTEGER */, DiagFormat_scan_posInResponse_other /* IMPORTED_LONG_NAMED_INTEGER */, other /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DiagFormat_scan_posInResponse, _encode_DiagFormat_scan_posInResponse } from "../DiagnosticFormatDiag1/DiagFormat-scan-posInResponse.ta.mjs";


/**
 * @summary DiagFormat_scan
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-scan ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
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
