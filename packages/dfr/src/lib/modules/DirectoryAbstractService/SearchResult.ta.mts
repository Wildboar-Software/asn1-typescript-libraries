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
import { SearchResultData, _decode_SearchResultData, _encode_SearchResultData } from "../DirectoryAbstractService/SearchResultData.ta.mjs";
// export { SearchResultData, _decode_SearchResultData, _encode_SearchResultData } from "../DirectoryAbstractService/SearchResultData.ta.mjs";


/**
 * @summary SearchResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchResult  ::=  OPTIONALLY-PROTECTED { SearchResultData }
 * ```
 */
export
type SearchResult = OPTIONALLY_PROTECTED<SearchResultData>; // DefinedType

let _cached_decoder_for_SearchResult: $.ASN1Decoder<SearchResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchResult (el: _Element): SearchResult {
    if (!_cached_decoder_for_SearchResult) { _cached_decoder_for_SearchResult = _get_decoder_for_OPTIONALLY_PROTECTED<SearchResultData>(_decode_SearchResultData); }
    return _cached_decoder_for_SearchResult(el);
}

let _cached_encoder_for_SearchResult: $.ASN1Encoder<SearchResult> | null = null;

/**
 * @summary Encodes a(n) SearchResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult, encoded as an ASN.1 Element.
 */
export
function _encode_SearchResult (value: SearchResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchResult) { _cached_encoder_for_SearchResult = _get_encoder_for_OPTIONALLY_PROTECTED<SearchResultData>(_encode_SearchResultData); }
    return _cached_encoder_for_SearchResult(value, elGetter);
}


/* eslint-enable */
