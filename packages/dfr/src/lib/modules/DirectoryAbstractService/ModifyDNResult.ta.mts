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
import { ModifyDNResultData, _decode_ModifyDNResultData, _encode_ModifyDNResultData } from "../DirectoryAbstractService/ModifyDNResultData.ta.mjs";
// export { ModifyDNResultData, _decode_ModifyDNResultData, _encode_ModifyDNResultData } from "../DirectoryAbstractService/ModifyDNResultData.ta.mjs";


/**
 * @summary ModifyDNResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyDNResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyDNResultData },
 *   ... }
 * ```
 */
export
type ModifyDNResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifyDNResult: $.ASN1Decoder<ModifyDNResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyDNResult (el: _Element): ModifyDNResult {
    if (!_cached_decoder_for_ModifyDNResult) { _cached_decoder_for_ModifyDNResult = $._decode_extensible_choice<ModifyDNResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(_decode_ModifyDNResultData) ]
}); }
    return _cached_decoder_for_ModifyDNResult(el);
}

let _cached_encoder_for_ModifyDNResult: $.ASN1Encoder<ModifyDNResult> | null = null;

/**
 * @summary Encodes a(n) ModifyDNResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNResult, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyDNResult (value: ModifyDNResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyDNResult) { _cached_encoder_for_ModifyDNResult = $._encode_choice<ModifyDNResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(_encode_ModifyDNResultData),
}, $.BER); }
    return _cached_encoder_for_ModifyDNResult(value, elGetter);
}


/* eslint-enable */
