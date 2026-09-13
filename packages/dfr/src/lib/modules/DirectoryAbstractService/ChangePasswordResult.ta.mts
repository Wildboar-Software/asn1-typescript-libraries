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
import { ChangePasswordResultData, _decode_ChangePasswordResultData, _encode_ChangePasswordResultData } from "../DirectoryAbstractService/ChangePasswordResultData.ta.mjs";
// export { ChangePasswordResultData, _decode_ChangePasswordResultData, _encode_ChangePasswordResultData } from "../DirectoryAbstractService/ChangePasswordResultData.ta.mjs";


/**
 * @summary ChangePasswordResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangePasswordResult  ::=  CHOICE {
 *   null        NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { ChangePasswordResultData },
 *   ...}
 * ```
 */
export
type ChangePasswordResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<ChangePasswordResultData> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ChangePasswordResult: $.ASN1Decoder<ChangePasswordResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangePasswordResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangePasswordResult (el: _Element): ChangePasswordResult {
    if (!_cached_decoder_for_ChangePasswordResult) { _cached_decoder_for_ChangePasswordResult = $._decode_extensible_choice<ChangePasswordResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ChangePasswordResultData>(_decode_ChangePasswordResultData) ]
}); }
    return _cached_decoder_for_ChangePasswordResult(el);
}

let _cached_encoder_for_ChangePasswordResult: $.ASN1Encoder<ChangePasswordResult> | null = null;

/**
 * @summary Encodes a(n) ChangePasswordResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangePasswordResult, encoded as an ASN.1 Element.
 */
export
function _encode_ChangePasswordResult (value: ChangePasswordResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangePasswordResult) { _cached_encoder_for_ChangePasswordResult = $._encode_choice<ChangePasswordResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ChangePasswordResultData>(_encode_ChangePasswordResultData),
}, $.BER); }
    return _cached_encoder_for_ChangePasswordResult(value, elGetter);
}


/* eslint-enable */
