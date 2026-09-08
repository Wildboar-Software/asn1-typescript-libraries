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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary CallBackMessageNonCallRelatedResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallBackMessageNonCallRelatedResult  ::=  CHOICE
 * {     extensions            CSTACommonArguments,
 *     noData                 NULL }
 * ```
 */
export
type CallBackMessageNonCallRelatedResult =
    { extensions: CSTACommonArguments } /* CHOICE_ALT_ROOT */
    | { noData: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallBackMessageNonCallRelatedResult: $.ASN1Decoder<CallBackMessageNonCallRelatedResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallBackMessageNonCallRelatedResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallBackMessageNonCallRelatedResult (el: _Element): CallBackMessageNonCallRelatedResult {
    if (!_cached_decoder_for_CallBackMessageNonCallRelatedResult) { _cached_decoder_for_CallBackMessageNonCallRelatedResult = $._decode_inextensible_choice<CallBackMessageNonCallRelatedResult>({
    "APPLICATION 30": [ "extensions", _decode_CSTACommonArguments ],
    "UNIVERSAL 5": [ "noData", $._decodeNull ]
}); }
    return _cached_decoder_for_CallBackMessageNonCallRelatedResult(el);
}

let _cached_encoder_for_CallBackMessageNonCallRelatedResult: $.ASN1Encoder<CallBackMessageNonCallRelatedResult> | null = null;

/**
 * @summary Encodes a(n) CallBackMessageNonCallRelatedResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallBackMessageNonCallRelatedResult, encoded as an ASN.1 Element.
 */
export
function _encode_CallBackMessageNonCallRelatedResult (value: CallBackMessageNonCallRelatedResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallBackMessageNonCallRelatedResult) { _cached_encoder_for_CallBackMessageNonCallRelatedResult = $._encode_choice<CallBackMessageNonCallRelatedResult>({
    "extensions": _encode_CSTACommonArguments,
    "noData": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_CallBackMessageNonCallRelatedResult(value, elGetter);
}


/* eslint-enable */
