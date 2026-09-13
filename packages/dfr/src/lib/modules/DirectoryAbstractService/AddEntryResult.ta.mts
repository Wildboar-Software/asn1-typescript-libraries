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
import { AddEntryResultData, _decode_AddEntryResultData, _encode_AddEntryResultData } from "../DirectoryAbstractService/AddEntryResultData.ta.mjs";
// export { AddEntryResultData, _decode_AddEntryResultData, _encode_AddEntryResultData } from "../DirectoryAbstractService/AddEntryResultData.ta.mjs";


/**
 * @summary AddEntryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddEntryResult  ::=  CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { AddEntryResultData },
 *   ... }
 * ```
 */
export
type AddEntryResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<AddEntryResultData> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AddEntryResult: $.ASN1Decoder<AddEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddEntryResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddEntryResult (el: _Element): AddEntryResult {
    if (!_cached_decoder_for_AddEntryResult) { _cached_decoder_for_AddEntryResult = $._decode_extensible_choice<AddEntryResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>(_decode_AddEntryResultData) ]
}); }
    return _cached_decoder_for_AddEntryResult(el);
}

let _cached_encoder_for_AddEntryResult: $.ASN1Encoder<AddEntryResult> | null = null;

/**
 * @summary Encodes a(n) AddEntryResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEntryResult, encoded as an ASN.1 Element.
 */
export
function _encode_AddEntryResult (value: AddEntryResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddEntryResult) { _cached_encoder_for_AddEntryResult = $._encode_choice<AddEntryResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>(_encode_AddEntryResultData),
}, $.BER); }
    return _cached_encoder_for_AddEntryResult(value, elGetter);
}


/* eslint-enable */
