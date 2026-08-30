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
import { CCBS_Feature, _decode_CCBS_Feature, _encode_CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";
// export { CCBS_Feature, _decode_CCBS_Feature, _encode_CCBS_Feature } from "../MAP-SS-DataTypes/CCBS-Feature.ta.mjs";


/**
 * @summary CCBS_FeatureList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-FeatureList  ::=  SEQUENCE SIZE (1..maxNumOfCCBS-Requests) OF
 *     CCBS-Feature
 * ```
 */
export
type CCBS_FeatureList = CCBS_Feature[]; // SequenceOfType

let _cached_decoder_for_CCBS_FeatureList: $.ASN1Decoder<CCBS_FeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_FeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCBS_FeatureList (el: _Element): CCBS_FeatureList {
    if (!_cached_decoder_for_CCBS_FeatureList) { _cached_decoder_for_CCBS_FeatureList = $._decodeSequenceOf<CCBS_Feature>(() => _decode_CCBS_Feature); }
    return _cached_decoder_for_CCBS_FeatureList(el);
}

let _cached_encoder_for_CCBS_FeatureList: $.ASN1Encoder<CCBS_FeatureList> | null = null;

/**
 * @summary Encodes a(n) CCBS_FeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_FeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_CCBS_FeatureList (value: CCBS_FeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCBS_FeatureList) { _cached_encoder_for_CCBS_FeatureList = $._encodeSequenceOf<CCBS_Feature>(() => _encode_CCBS_Feature, $.BER); }
    return _cached_encoder_for_CCBS_FeatureList(value, elGetter);
}


/* eslint-enable */
