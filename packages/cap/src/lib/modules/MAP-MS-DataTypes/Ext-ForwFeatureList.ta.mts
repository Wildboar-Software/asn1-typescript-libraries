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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Ext_ForwFeature, _decode_Ext_ForwFeature, _encode_Ext_ForwFeature } from "../MAP-MS-DataTypes/Ext-ForwFeature.ta.mjs";
// export { Ext_ForwFeature, _decode_Ext_ForwFeature, _encode_Ext_ForwFeature } from "../MAP-MS-DataTypes/Ext-ForwFeature.ta.mjs";


/**
 * @summary Ext_ForwFeatureList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-ForwFeatureList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     Ext-ForwFeature
 * ```
 */
export
type Ext_ForwFeatureList = Ext_ForwFeature[]; // SequenceOfType

let _cached_decoder_for_Ext_ForwFeatureList: $.ASN1Decoder<Ext_ForwFeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_ForwFeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_ForwFeatureList (el: _Element): Ext_ForwFeatureList {
    if (!_cached_decoder_for_Ext_ForwFeatureList) { _cached_decoder_for_Ext_ForwFeatureList = $._decodeSequenceOf<Ext_ForwFeature>(() => _decode_Ext_ForwFeature); }
    return _cached_decoder_for_Ext_ForwFeatureList(el);
}

let _cached_encoder_for_Ext_ForwFeatureList: $.ASN1Encoder<Ext_ForwFeatureList> | null = null;

/**
 * @summary Encodes a(n) Ext_ForwFeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_ForwFeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_ForwFeatureList (value: Ext_ForwFeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_ForwFeatureList) { _cached_encoder_for_Ext_ForwFeatureList = $._encodeSequenceOf<Ext_ForwFeature>(() => _encode_Ext_ForwFeature, $.BER); }
    return _cached_encoder_for_Ext_ForwFeatureList(value, elGetter);
}


/* eslint-enable */
