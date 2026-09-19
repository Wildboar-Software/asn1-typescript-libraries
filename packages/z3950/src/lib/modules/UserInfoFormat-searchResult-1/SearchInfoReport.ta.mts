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
import { SearchInfoReport_Item, _decode_SearchInfoReport_Item, _encode_SearchInfoReport_Item } from "../UserInfoFormat-searchResult-1/SearchInfoReport-Item.ta.mjs";
// export { SearchInfoReport_Item, _decode_SearchInfoReport_Item, _encode_SearchInfoReport_Item } from "../UserInfoFormat-searchResult-1/SearchInfoReport-Item.ta.mjs";


/**
 * @summary SearchInfoReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchInfoReport  ::=  SEQUENCE OF SEQUENCE{
 *    subqueryId                [1] IMPLICIT InternationalString OPTIONAL, 
 *                                    -- shorthand identifier of subquery
 *    fullQuery                 [2] IMPLICIT BOOLEAN,       
 *                                    -- 'true' means this is the full query;
 *                                    -- 'false', a sub-query 
 *    subqueryExpression        [3] QueryExpression OPTIONAL,  
 * 
 *                                    -- A subquery of the query as submitted. May
 *                                    -- be whole query; if so, "fullQuery" should
 *                                    -- be 'true'.
 *    subqueryInterpretation    [4] QueryExpression OPTIONAL,  
 * 
 *                                    -- how target interpreted subquery
 *    subqueryRecommendation    [5] QueryExpression OPTIONAL,   
 *                                    -- target-recommended alternative
 *    subqueryCount             [6] IMPLICIT INTEGER OPTIONAL,   
 *                                    -- Number of records for this subQuery,
 *                                    -- across all of the specified databases.
 *                                    -- (If during search, via resource control,
 *                                    -- number of records so far).
 *    subqueryWeight            [7] IMPLICIT IntUnit OPTIONAL,   
 *                                    -- relative weight of this subquery
 *    resultsByDB               [8] IMPLICIT ResultsByDB OPTIONAL}
 * ```
 */
export
type SearchInfoReport = SearchInfoReport_Item[]; // SequenceOfType

let _cached_decoder_for_SearchInfoReport: $.ASN1Decoder<SearchInfoReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchInfoReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchInfoReport (el: _Element): SearchInfoReport {
    if (!_cached_decoder_for_SearchInfoReport) { _cached_decoder_for_SearchInfoReport = $._decodeSequenceOf<SearchInfoReport_Item>(() => _decode_SearchInfoReport_Item); }
    return _cached_decoder_for_SearchInfoReport(el);
}

let _cached_encoder_for_SearchInfoReport: $.ASN1Encoder<SearchInfoReport> | null = null;

/**
 * @summary Encodes a(n) SearchInfoReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchInfoReport, encoded as an ASN.1 Element.
 */
export
function _encode_SearchInfoReport (value: SearchInfoReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchInfoReport) { _cached_encoder_for_SearchInfoReport = $._encodeSequenceOf<SearchInfoReport_Item>(() => _encode_SearchInfoReport_Item, $.BER); }
    return _cached_encoder_for_SearchInfoReport(value, elGetter);
}


/* eslint-enable */
