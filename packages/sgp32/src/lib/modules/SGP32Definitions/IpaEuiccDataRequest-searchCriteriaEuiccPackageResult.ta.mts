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



/**
 * @summary IpaEuiccDataRequest_searchCriteriaEuiccPackageResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataRequest-searchCriteriaEuiccPackageResult ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IpaEuiccDataRequest_searchCriteriaEuiccPackageResult =
    { seqNumber: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult: $.ASN1Decoder<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataRequest_searchCriteriaEuiccPackageResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult (el: _Element): IpaEuiccDataRequest_searchCriteriaEuiccPackageResult {
    if (!_cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult) { _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult = $._decode_inextensible_choice<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>({
    "CONTEXT 0": [ "seqNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult(el);
}

let _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult: $.ASN1Encoder<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataRequest_searchCriteriaEuiccPackageResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult (value: IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult) { _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult = $._encode_choice<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>({
    "seqNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult(value, elGetter);
}


/* eslint-enable */
