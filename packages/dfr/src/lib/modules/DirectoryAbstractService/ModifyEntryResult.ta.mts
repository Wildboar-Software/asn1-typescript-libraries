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
import { ModifyEntryResultData, _decode_ModifyEntryResultData, _encode_ModifyEntryResultData } from "../DirectoryAbstractService/ModifyEntryResultData.ta.mjs";
// export { ModifyEntryResultData, _decode_ModifyEntryResultData, _encode_ModifyEntryResultData } from "../DirectoryAbstractService/ModifyEntryResultData.ta.mjs";


/**
 * @summary ModifyEntryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyEntryResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyEntryResultData },
 *   ... }
 * ```
 */
export
type ModifyEntryResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifyEntryResult: $.ASN1Decoder<ModifyEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyEntryResult (el: _Element): ModifyEntryResult {
    if (!_cached_decoder_for_ModifyEntryResult) { _cached_decoder_for_ModifyEntryResult = $._decode_extensible_choice<ModifyEntryResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData>(_decode_ModifyEntryResultData) ]
}); }
    return _cached_decoder_for_ModifyEntryResult(el);
}

let _cached_encoder_for_ModifyEntryResult: $.ASN1Encoder<ModifyEntryResult> | null = null;

/**
 * @summary Encodes a(n) ModifyEntryResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryResult, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyEntryResult (value: ModifyEntryResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyEntryResult) { _cached_encoder_for_ModifyEntryResult = $._encode_choice<ModifyEntryResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData>(_encode_ModifyEntryResultData),
}, $.BER); }
    return _cached_encoder_for_ModifyEntryResult(value, elGetter);
}


/* eslint-enable */
