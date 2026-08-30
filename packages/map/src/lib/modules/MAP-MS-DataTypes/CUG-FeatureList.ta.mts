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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CUG_Feature, _decode_CUG_Feature, _encode_CUG_Feature } from "../MAP-MS-DataTypes/CUG-Feature.ta.mjs";


import { maxNumOfExt_BasicServiceGroups } from "./maxNumOfExt-BasicServiceGroups.va.mjs";

/**
 * @summary CUG_FeatureList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-FeatureList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     CUG-Feature
 * ```
 */
export
type CUG_FeatureList = CUG_Feature[]; // SequenceOfType

let _cached_decoder_for_CUG_FeatureList: $.ASN1Decoder<CUG_FeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_FeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_FeatureList (el: _Element): CUG_FeatureList {
    if (!_cached_decoder_for_CUG_FeatureList) { _cached_decoder_for_CUG_FeatureList = $._decodeSequenceOf<CUG_Feature>(() => _decode_CUG_Feature); }
    const value = _cached_decoder_for_CUG_FeatureList(el);
    if (value.length < 1 || value.length > maxNumOfExt_BasicServiceGroups) {
        throw new ASN1SizeError("CUG_FeatureList violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_CUG_FeatureList: $.ASN1Encoder<CUG_FeatureList> | null = null;

/**
 * @summary Encodes a(n) CUG_FeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_FeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_FeatureList (value: CUG_FeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_FeatureList) { _cached_encoder_for_CUG_FeatureList = $._encodeSequenceOf<CUG_Feature>(() => _encode_CUG_Feature, $.BER); }
    return _cached_encoder_for_CUG_FeatureList(value, elGetter);
}


/* eslint-enable */
