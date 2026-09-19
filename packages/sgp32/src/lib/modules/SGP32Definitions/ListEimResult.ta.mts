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
import { EimIdInfo, _decode_EimIdInfo, _encode_EimIdInfo } from "../SGP32Definitions/EimIdInfo.ta.mjs";
// export { EimIdInfo, _decode_EimIdInfo, _encode_EimIdInfo } from "../SGP32Definitions/EimIdInfo.ta.mjs";
import { ListEimResult_listEimError, ListEimResult_listEimError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ListEimResult_listEimError, _encode_ListEimResult_listEimError } from "../SGP32Definitions/ListEimResult-listEimError.ta.mjs";
// export { ListEimResult_listEimError, ListEimResult_listEimError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ListEimResult_listEimError, _encode_ListEimResult_listEimError } from "../SGP32Definitions/ListEimResult-listEimError.ta.mjs";


/**
 * @summary ListEimResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListEimResult  ::=  CHOICE {
 *     eimIdList SEQUENCE OF EimIdInfo,
 *     listEimError INTEGER {
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type ListEimResult =
    { eimIdList: EimIdInfo[] } /* CHOICE_ALT_ROOT */
    | { listEimError: ListEimResult_listEimError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ListEimResult: $.ASN1Decoder<ListEimResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListEimResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListEimResult (el: _Element): ListEimResult {
    if (!_cached_decoder_for_ListEimResult) { _cached_decoder_for_ListEimResult = $._decode_inextensible_choice<ListEimResult>({
    "CONTEXT 0": [ "eimIdList", $._decodeSequenceOf<EimIdInfo>(() => _decode_EimIdInfo) ],
    "CONTEXT 1": [ "listEimError", _decode_ListEimResult_listEimError ]
}); }
    return _cached_decoder_for_ListEimResult(el);
}

let _cached_encoder_for_ListEimResult: $.ASN1Encoder<ListEimResult> | null = null;

/**
 * @summary Encodes a(n) ListEimResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListEimResult, encoded as an ASN.1 Element.
 */
export
function _encode_ListEimResult (value: ListEimResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListEimResult) { _cached_encoder_for_ListEimResult = $._encode_choice<ListEimResult>({
    "eimIdList": $._encodeSequenceOf<EimIdInfo>(() => _encode_EimIdInfo, $.BER),
    "listEimError": _encode_ListEimResult_listEimError,
}, $.BER); }
    return _cached_encoder_for_ListEimResult(value, elGetter);
}


/* eslint-enable */
