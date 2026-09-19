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
import { CompactSuccessResult, _decode_CompactSuccessResult, _encode_CompactSuccessResult } from "../SGP32Definitions/CompactSuccessResult.ta.mjs";
// export { CompactSuccessResult, _decode_CompactSuccessResult, _encode_CompactSuccessResult } from "../SGP32Definitions/CompactSuccessResult.ta.mjs";
import { ErrorResult, _decode_ErrorResult, _encode_ErrorResult } from "../RSPDefinitions/ErrorResult.ta.mjs";
// export { ErrorResult, _decode_ErrorResult, _encode_ErrorResult } from "../RSPDefinitions/ErrorResult.ta.mjs";


/**
 * @summary CompactProfileInstallationResultData_compactFinalResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactProfileInstallationResultData-compactFinalResult ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CompactProfileInstallationResultData_compactFinalResult =
    { compactSuccessResult: CompactSuccessResult } /* CHOICE_ALT_ROOT */
    | { errorResult: ErrorResult } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompactProfileInstallationResultData_compactFinalResult: $.ASN1Decoder<CompactProfileInstallationResultData_compactFinalResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactProfileInstallationResultData_compactFinalResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactProfileInstallationResultData_compactFinalResult (el: _Element): CompactProfileInstallationResultData_compactFinalResult {
    if (!_cached_decoder_for_CompactProfileInstallationResultData_compactFinalResult) { _cached_decoder_for_CompactProfileInstallationResultData_compactFinalResult = $._decode_inextensible_choice<CompactProfileInstallationResultData_compactFinalResult>({
    "CONTEXT 0": [ "compactSuccessResult", _decode_CompactSuccessResult ],
    "CONTEXT 1": [ "errorResult", _decode_ErrorResult ]
}); }
    return _cached_decoder_for_CompactProfileInstallationResultData_compactFinalResult(el);
}

let _cached_encoder_for_CompactProfileInstallationResultData_compactFinalResult: $.ASN1Encoder<CompactProfileInstallationResultData_compactFinalResult> | null = null;

/**
 * @summary Encodes a(n) CompactProfileInstallationResultData_compactFinalResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactProfileInstallationResultData_compactFinalResult, encoded as an ASN.1 Element.
 */
export
function _encode_CompactProfileInstallationResultData_compactFinalResult (value: CompactProfileInstallationResultData_compactFinalResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactProfileInstallationResultData_compactFinalResult) { _cached_encoder_for_CompactProfileInstallationResultData_compactFinalResult = $._encode_choice<CompactProfileInstallationResultData_compactFinalResult>({
    "compactSuccessResult": _encode_CompactSuccessResult,
    "errorResult": _encode_ErrorResult,
}, $.BER); }
    return _cached_encoder_for_CompactProfileInstallationResultData_compactFinalResult(value, elGetter);
}


/* eslint-enable */
