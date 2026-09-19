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
import { SuccessResult, _decode_SuccessResult, _encode_SuccessResult } from "../RSPDefinitions/SuccessResult.ta.mjs";
// export { SuccessResult, _decode_SuccessResult, _encode_SuccessResult } from "../RSPDefinitions/SuccessResult.ta.mjs";
import { ErrorResult, _decode_ErrorResult, _encode_ErrorResult } from "../RSPDefinitions/ErrorResult.ta.mjs";
// export { ErrorResult, _decode_ErrorResult, _encode_ErrorResult } from "../RSPDefinitions/ErrorResult.ta.mjs";


/**
 * @summary ProfileInstallationResultData_finalResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInstallationResultData-finalResult ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfileInstallationResultData_finalResult =
    { successResult: SuccessResult } /* CHOICE_ALT_ROOT */
    | { errorResult: ErrorResult } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileInstallationResultData_finalResult: $.ASN1Decoder<ProfileInstallationResultData_finalResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInstallationResultData_finalResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInstallationResultData_finalResult (el: _Element): ProfileInstallationResultData_finalResult {
    if (!_cached_decoder_for_ProfileInstallationResultData_finalResult) { _cached_decoder_for_ProfileInstallationResultData_finalResult = $._decode_inextensible_choice<ProfileInstallationResultData_finalResult>({
    "CONTEXT 0": [ "successResult", _decode_SuccessResult ],
    "CONTEXT 1": [ "errorResult", _decode_ErrorResult ]
}); }
    return _cached_decoder_for_ProfileInstallationResultData_finalResult(el);
}

let _cached_encoder_for_ProfileInstallationResultData_finalResult: $.ASN1Encoder<ProfileInstallationResultData_finalResult> | null = null;

/**
 * @summary Encodes a(n) ProfileInstallationResultData_finalResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInstallationResultData_finalResult, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInstallationResultData_finalResult (value: ProfileInstallationResultData_finalResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInstallationResultData_finalResult) { _cached_encoder_for_ProfileInstallationResultData_finalResult = $._encode_choice<ProfileInstallationResultData_finalResult>({
    "successResult": _encode_SuccessResult,
    "errorResult": _encode_ErrorResult,
}, $.BER); }
    return _cached_encoder_for_ProfileInstallationResultData_finalResult(value, elGetter);
}


/* eslint-enable */
