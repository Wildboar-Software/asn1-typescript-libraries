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
import { ListResultData_listInfo, _decode_ListResultData_listInfo, _encode_ListResultData_listInfo } from "../DirectoryAbstractService/ListResultData-listInfo.ta.mjs";
// export { ListResultData_listInfo, _decode_ListResultData_listInfo, _encode_ListResultData_listInfo } from "../DirectoryAbstractService/ListResultData-listInfo.ta.mjs";
import { ListResult, _decode_ListResult, _encode_ListResult } from "../DirectoryAbstractService/ListResult.ta.mjs";
// export { ListResult, _decode_ListResult, _encode_ListResult } from "../DirectoryAbstractService/ListResult.ta.mjs";


/**
 * @summary ListResultData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListResultData  ::=  CHOICE {
 *   listInfo                     SET {
 *     name                         Name OPTIONAL,
 *     subordinates            [1]  SET OF SEQUENCE {
 *       rdn                          RelativeDistinguishedName,
 *       aliasEntry              [0]  BOOLEAN DEFAULT FALSE,
 *       fromEntry               [1]  BOOLEAN DEFAULT TRUE,
 *       ... },
 *     partialOutcomeQualifier [2]  PartialOutcomeQualifier OPTIONAL,
 *     ...,
 *     ...,
 *     COMPONENTS OF                CommonResults
 *     },
 *   uncorrelatedListInfo    [0]  SET OF ListResult,
 *   ... }
 * ```
 */
export
type ListResultData =
    { listInfo: ListResultData_listInfo } /* CHOICE_ALT_ROOT */
    | { uncorrelatedListInfo: ListResult[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ListResultData: $.ASN1Decoder<ListResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListResultData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListResultData (el: _Element): ListResultData {
    if (!_cached_decoder_for_ListResultData) { _cached_decoder_for_ListResultData = $._decode_extensible_choice<ListResultData>({
    "UNIVERSAL 17": [ "listInfo", _decode_ListResultData_listInfo ],
    "CONTEXT 0": [ "uncorrelatedListInfo", $._decode_implicit<ListResult[]>(() => $._decodeSetOf<ListResult>(() => _decode_ListResult)) ]
}); }
    return _cached_decoder_for_ListResultData(el);
}

let _cached_encoder_for_ListResultData: $.ASN1Encoder<ListResultData> | null = null;

/**
 * @summary Encodes a(n) ListResultData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListResultData, encoded as an ASN.1 Element.
 */
export
function _encode_ListResultData (value: ListResultData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListResultData) { _cached_encoder_for_ListResultData = $._encode_choice<ListResultData>({
    "listInfo": _encode_ListResultData_listInfo,
    "uncorrelatedListInfo": $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<ListResult>(() => _encode_ListResult, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ListResultData(value, elGetter);
}


/* eslint-enable */
