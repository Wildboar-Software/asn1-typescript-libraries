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
import { AdministerPasswordResultData, _decode_AdministerPasswordResultData, _encode_AdministerPasswordResultData } from "../DirectoryAbstractService/AdministerPasswordResultData.ta.mjs";
// export { AdministerPasswordResultData, _decode_AdministerPasswordResultData, _encode_AdministerPasswordResultData } from "../DirectoryAbstractService/AdministerPasswordResultData.ta.mjs";


/**
 * @summary AdministerPasswordResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministerPasswordResult  ::=  CHOICE {
 *   null NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { AdministerPasswordResultData },
 *   ...}
 * ```
 */
export
type AdministerPasswordResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AdministerPasswordResult: $.ASN1Decoder<AdministerPasswordResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdministerPasswordResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdministerPasswordResult (el: _Element): AdministerPasswordResult {
    if (!_cached_decoder_for_AdministerPasswordResult) { _cached_decoder_for_AdministerPasswordResult = $._decode_extensible_choice<AdministerPasswordResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>(_decode_AdministerPasswordResultData) ]
}); }
    return _cached_decoder_for_AdministerPasswordResult(el);
}

let _cached_encoder_for_AdministerPasswordResult: $.ASN1Encoder<AdministerPasswordResult> | null = null;

/**
 * @summary Encodes a(n) AdministerPasswordResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministerPasswordResult, encoded as an ASN.1 Element.
 */
export
function _encode_AdministerPasswordResult (value: AdministerPasswordResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdministerPasswordResult) { _cached_encoder_for_AdministerPasswordResult = $._encode_choice<AdministerPasswordResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>(_encode_AdministerPasswordResultData),
}, $.BER); }
    return _cached_encoder_for_AdministerPasswordResult(value, elGetter);
}


/* eslint-enable */
