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
import { DP_AnalysedInfoCriterium, _decode_DP_AnalysedInfoCriterium, _encode_DP_AnalysedInfoCriterium } from "../MAP-MS-DataTypes/DP-AnalysedInfoCriterium.ta.mjs";
// export { DP_AnalysedInfoCriterium, _decode_DP_AnalysedInfoCriterium, _encode_DP_AnalysedInfoCriterium } from "../MAP-MS-DataTypes/DP-AnalysedInfoCriterium.ta.mjs";


/**
 * @summary DP_AnalysedInfoCriteriaList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DP-AnalysedInfoCriteriaList   ::=  SEQUENCE SIZE (1..maxNumOfDP-AnalysedInfoCriteria) OF
 *     DP-AnalysedInfoCriterium
 * ```
 */
export
type DP_AnalysedInfoCriteriaList = DP_AnalysedInfoCriterium[]; // SequenceOfType

let _cached_decoder_for_DP_AnalysedInfoCriteriaList: $.ASN1Decoder<DP_AnalysedInfoCriteriaList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DP_AnalysedInfoCriteriaList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DP_AnalysedInfoCriteriaList (el: _Element): DP_AnalysedInfoCriteriaList {
    if (!_cached_decoder_for_DP_AnalysedInfoCriteriaList) { _cached_decoder_for_DP_AnalysedInfoCriteriaList = $._decodeSequenceOf<DP_AnalysedInfoCriterium>(() => _decode_DP_AnalysedInfoCriterium); }
    return _cached_decoder_for_DP_AnalysedInfoCriteriaList(el);
}

let _cached_encoder_for_DP_AnalysedInfoCriteriaList: $.ASN1Encoder<DP_AnalysedInfoCriteriaList> | null = null;

/**
 * @summary Encodes a(n) DP_AnalysedInfoCriteriaList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DP_AnalysedInfoCriteriaList, encoded as an ASN.1 Element.
 */
export
function _encode_DP_AnalysedInfoCriteriaList (value: DP_AnalysedInfoCriteriaList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DP_AnalysedInfoCriteriaList) { _cached_encoder_for_DP_AnalysedInfoCriteriaList = $._encodeSequenceOf<DP_AnalysedInfoCriterium>(() => _encode_DP_AnalysedInfoCriterium, $.BER); }
    return _cached_encoder_for_DP_AnalysedInfoCriteriaList(value, elGetter);
}


/* eslint-enable */
