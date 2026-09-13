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



/**
 * @summary SearchControlOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchControlOptions  ::=  BIT STRING {
 *   searchAliases         (0),
 *   matchedValuesOnly     (1),
 *   checkOverspecified    (2),
 *   performExactly        (3),
 *   includeAllAreas       (4),
 *   noSystemRelaxation    (5),
 *   dnAttribute           (6),
 *   matchOnResidualName   (7),
 *   entryCount            (8),
 *   useSubset             (9),
 *   separateFamilyMembers (10),
 *   searchFamily          (11) }
 * ```
 */
export
type SearchControlOptions = BIT_STRING;

/**
 * @summary SearchControlOptions_searchAliases
 * @constant
 */
export
const SearchControlOptions_searchAliases: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary searchAliases
 * @constant
 */
export
const searchAliases: number = SearchControlOptions_searchAliases; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_matchedValuesOnly
 * @constant
 */
export
const SearchControlOptions_matchedValuesOnly: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary matchedValuesOnly
 * @constant
 */
export
const matchedValuesOnly: number = SearchControlOptions_matchedValuesOnly; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_checkOverspecified
 * @constant
 */
export
const SearchControlOptions_checkOverspecified: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary checkOverspecified
 * @constant
 */
export
const checkOverspecified: number = SearchControlOptions_checkOverspecified; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_performExactly
 * @constant
 */
export
const SearchControlOptions_performExactly: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary performExactly
 * @constant
 */
export
const performExactly: number = SearchControlOptions_performExactly; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_includeAllAreas
 * @constant
 */
export
const SearchControlOptions_includeAllAreas: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary includeAllAreas
 * @constant
 */
export
const includeAllAreas: number = SearchControlOptions_includeAllAreas; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_noSystemRelaxation
 * @constant
 */
export
const SearchControlOptions_noSystemRelaxation: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary noSystemRelaxation
 * @constant
 */
export
const noSystemRelaxation: number = SearchControlOptions_noSystemRelaxation; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_dnAttribute
 * @constant
 */
export
const SearchControlOptions_dnAttribute: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dnAttribute
 * @constant
 */
export
const dnAttribute: number = SearchControlOptions_dnAttribute; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_matchOnResidualName
 * @constant
 */
export
const SearchControlOptions_matchOnResidualName: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary matchOnResidualName
 * @constant
 */
export
const matchOnResidualName: number = SearchControlOptions_matchOnResidualName; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_entryCount
 * @constant
 */
export
const SearchControlOptions_entryCount: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary entryCount
 * @constant
 */
export
const entryCount: number = SearchControlOptions_entryCount; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_useSubset
 * @constant
 */
export
const SearchControlOptions_useSubset: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary useSubset
 * @constant
 */
export
const useSubset: number = SearchControlOptions_useSubset; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_separateFamilyMembers
 * @constant
 */
export
const SearchControlOptions_separateFamilyMembers: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary separateFamilyMembers
 * @constant
 */
export
const separateFamilyMembers: number = SearchControlOptions_separateFamilyMembers; /* SHORT_NAMED_BIT */

/**
 * @summary SearchControlOptions_searchFamily
 * @constant
 */
export
const SearchControlOptions_searchFamily: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary searchFamily
 * @constant
 */
export
const searchFamily: number = SearchControlOptions_searchFamily; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SearchControlOptions: $.ASN1Decoder<SearchControlOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchControlOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchControlOptions (el: _Element): SearchControlOptions {
    if (!_cached_decoder_for_SearchControlOptions) { _cached_decoder_for_SearchControlOptions = $._decodeBitString; }
    return _cached_decoder_for_SearchControlOptions(el);
}

let _cached_encoder_for_SearchControlOptions: $.ASN1Encoder<SearchControlOptions> | null = null;

/**
 * @summary Encodes a(n) SearchControlOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchControlOptions, encoded as an ASN.1 Element.
 */
export
function _encode_SearchControlOptions (value: SearchControlOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchControlOptions) { _cached_encoder_for_SearchControlOptions = $._encodeBitString; }
    return _cached_encoder_for_SearchControlOptions(value, elGetter);
}


/* eslint-enable */
