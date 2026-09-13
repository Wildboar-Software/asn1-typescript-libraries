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
import { SearchResultData_searchInfo, _decode_SearchResultData_searchInfo, _encode_SearchResultData_searchInfo } from "../DirectoryAbstractService/SearchResultData-searchInfo.ta.mjs";
// export { SearchResultData_searchInfo, _decode_SearchResultData_searchInfo, _encode_SearchResultData_searchInfo } from "../DirectoryAbstractService/SearchResultData-searchInfo.ta.mjs";
import { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DirectoryAbstractService/SearchResult.ta.mjs";
// export { SearchResult, _decode_SearchResult, _encode_SearchResult } from "../DirectoryAbstractService/SearchResult.ta.mjs";


/**
 * @summary SearchResultData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchResultData  ::=  CHOICE {
 *   searchInfo                    SET {
 *     name                          Name OPTIONAL,
 *     entries                  [0]  SET OF EntryInformation,
 *     partialOutcomeQualifier  [2]  PartialOutcomeQualifier OPTIONAL,
 *     altMatching              [3]  BOOLEAN DEFAULT FALSE,
 *     ...,
 *     ...,
 *     COMPONENTS OF                 CommonResults
 *     },
 *   uncorrelatedSearchInfo   [0]  SET OF SearchResult,
 *   ... }
 * ```
 */
export
type SearchResultData =
    { searchInfo: SearchResultData_searchInfo } /* CHOICE_ALT_ROOT */
    | { uncorrelatedSearchInfo: SearchResult[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SearchResultData: $.ASN1Decoder<SearchResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchResultData (el: _Element): SearchResultData {
    if (!_cached_decoder_for_SearchResultData) { _cached_decoder_for_SearchResultData = $._decode_extensible_choice<SearchResultData>({
    "UNIVERSAL 17": [ "searchInfo", _decode_SearchResultData_searchInfo ],
    "CONTEXT 0": [ "uncorrelatedSearchInfo", $._decode_implicit<SearchResult[]>(() => $._decodeSetOf<SearchResult>(() => _decode_SearchResult)) ]
}); }
    return _cached_decoder_for_SearchResultData(el);
}

let _cached_encoder_for_SearchResultData: $.ASN1Encoder<SearchResultData> | null = null;

/**
 * @summary Encodes a(n) SearchResultData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultData, encoded as an ASN.1 Element.
 */
export
function _encode_SearchResultData (value: SearchResultData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchResultData) { _cached_encoder_for_SearchResultData = $._encode_choice<SearchResultData>({
    "searchInfo": _encode_SearchResultData_searchInfo,
    "uncorrelatedSearchInfo": $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<SearchResult>(() => _encode_SearchResult, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SearchResultData(value, elGetter);
}


/* eslint-enable */
