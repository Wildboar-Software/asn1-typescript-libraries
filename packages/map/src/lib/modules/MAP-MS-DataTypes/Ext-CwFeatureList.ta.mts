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
import { Ext_CwFeature, _decode_Ext_CwFeature, _encode_Ext_CwFeature } from "../MAP-MS-DataTypes/Ext-CwFeature.ta.mjs";
// export { Ext_CwFeature, _decode_Ext_CwFeature, _encode_Ext_CwFeature } from "../MAP-MS-DataTypes/Ext-CwFeature.ta.mjs";


/**
 * @summary Ext_CwFeatureList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-CwFeatureList  ::=  SEQUENCE SIZE (1..maxNumOfExt-BasicServiceGroups) OF
 *     Ext-CwFeature
 * ```
 */
export
type Ext_CwFeatureList = Ext_CwFeature[]; // SequenceOfType

let _cached_decoder_for_Ext_CwFeatureList: $.ASN1Decoder<Ext_CwFeatureList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_CwFeatureList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_CwFeatureList (el: _Element): Ext_CwFeatureList {
    if (!_cached_decoder_for_Ext_CwFeatureList) { _cached_decoder_for_Ext_CwFeatureList = $._decodeSequenceOf<Ext_CwFeature>(() => _decode_Ext_CwFeature); }
    return _cached_decoder_for_Ext_CwFeatureList(el);
}

let _cached_encoder_for_Ext_CwFeatureList: $.ASN1Encoder<Ext_CwFeatureList> | null = null;

/**
 * @summary Encodes a(n) Ext_CwFeatureList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_CwFeatureList, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_CwFeatureList (value: Ext_CwFeatureList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_CwFeatureList) { _cached_encoder_for_Ext_CwFeatureList = $._encodeSequenceOf<Ext_CwFeature>(() => _encode_Ext_CwFeature, $.BER); }
    return _cached_encoder_for_Ext_CwFeatureList(value, elGetter);
}


/* eslint-enable */
