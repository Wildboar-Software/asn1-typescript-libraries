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
import { EuiccPackageResultSigned, _decode_EuiccPackageResultSigned, _encode_EuiccPackageResultSigned } from "../SGP32Definitions/EuiccPackageResultSigned.ta.mjs";
// export { EuiccPackageResultSigned, _decode_EuiccPackageResultSigned, _encode_EuiccPackageResultSigned } from "../SGP32Definitions/EuiccPackageResultSigned.ta.mjs";
import { EuiccPackageErrorSigned, _decode_EuiccPackageErrorSigned, _encode_EuiccPackageErrorSigned } from "../SGP32Definitions/EuiccPackageErrorSigned.ta.mjs";
// export { EuiccPackageErrorSigned, _decode_EuiccPackageErrorSigned, _encode_EuiccPackageErrorSigned } from "../SGP32Definitions/EuiccPackageErrorSigned.ta.mjs";
import { EuiccPackageErrorUnsigned, _decode_EuiccPackageErrorUnsigned, _encode_EuiccPackageErrorUnsigned } from "../SGP32Definitions/EuiccPackageErrorUnsigned.ta.mjs";
// export { EuiccPackageErrorUnsigned, _decode_EuiccPackageErrorUnsigned, _encode_EuiccPackageErrorUnsigned } from "../SGP32Definitions/EuiccPackageErrorUnsigned.ta.mjs";


/**
 * @summary EuiccPackageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageResult  ::=  [81] CHOICE { -- Tag 'BF51' #SupportedForPsmoV1.0.0#
 *     euiccPackageResultSigned EuiccPackageResultSigned,
 *     euiccPackageErrorSigned EuiccPackageErrorSigned,
 *     euiccPackageErrorUnsigned EuiccPackageErrorUnsigned
 * }
 * ```
 */
export
type EuiccPackageResult =
    { euiccPackageResultSigned: EuiccPackageResultSigned } /* CHOICE_ALT_ROOT */
    | { euiccPackageErrorSigned: EuiccPackageErrorSigned } /* CHOICE_ALT_ROOT */
    | { euiccPackageErrorUnsigned: EuiccPackageErrorUnsigned } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EuiccPackageResult: $.ASN1Decoder<EuiccPackageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageResult (el: _Element): EuiccPackageResult {
    if (!_cached_decoder_for_EuiccPackageResult) { _cached_decoder_for_EuiccPackageResult = $._decode_explicit<EuiccPackageResult>(() => $._decode_inextensible_choice<EuiccPackageResult>({
    "CONTEXT 0": [ "euiccPackageResultSigned", _decode_EuiccPackageResultSigned ],
    "CONTEXT 1": [ "euiccPackageErrorSigned", _decode_EuiccPackageErrorSigned ],
    "CONTEXT 2": [ "euiccPackageErrorUnsigned", _decode_EuiccPackageErrorUnsigned ]
})); }
    return _cached_decoder_for_EuiccPackageResult(el);
}

let _cached_encoder_for_EuiccPackageResult: $.ASN1Encoder<EuiccPackageResult> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageResult, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageResult (value: EuiccPackageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageResult) { _cached_encoder_for_EuiccPackageResult = $._encode_explicit(_TagClass.context, 81, () => $._encode_choice<EuiccPackageResult>({
    "euiccPackageResultSigned": _encode_EuiccPackageResultSigned,
    "euiccPackageErrorSigned": _encode_EuiccPackageErrorSigned,
    "euiccPackageErrorUnsigned": _encode_EuiccPackageErrorUnsigned,
}, $.BER), $.BER); }
    return _cached_encoder_for_EuiccPackageResult(value, elGetter);
}


/* eslint-enable */
