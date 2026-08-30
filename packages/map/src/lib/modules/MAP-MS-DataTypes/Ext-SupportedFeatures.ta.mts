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
 * @summary Ext_SupportedFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-SupportedFeatures  ::=  BIT STRING {
 *     unlicensedSpectrumAsSecondaryRAT (0) } (SIZE (1..40))
 * ```
 */
export
type Ext_SupportedFeatures = BIT_STRING;

/**
 * @summary Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT
 * @constant
 */
export
const Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unlicensedSpectrumAsSecondaryRAT
 * @constant
 */
export
const unlicensedSpectrumAsSecondaryRAT: number = Ext_SupportedFeatures_unlicensedSpectrumAsSecondaryRAT; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Ext_SupportedFeatures: $.ASN1Decoder<Ext_SupportedFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_SupportedFeatures
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_SupportedFeatures (el: _Element): Ext_SupportedFeatures {
    if (!_cached_decoder_for_Ext_SupportedFeatures) { _cached_decoder_for_Ext_SupportedFeatures = $._decodeBitString; }
    return _cached_decoder_for_Ext_SupportedFeatures(el);
}

let _cached_encoder_for_Ext_SupportedFeatures: $.ASN1Encoder<Ext_SupportedFeatures> | null = null;

/**
 * @summary Encodes a(n) Ext_SupportedFeatures into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_SupportedFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_SupportedFeatures (value: Ext_SupportedFeatures, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_SupportedFeatures) { _cached_encoder_for_Ext_SupportedFeatures = $._encodeBitString; }
    return _cached_encoder_for_Ext_SupportedFeatures(value, elGetter);
}


/* eslint-enable */
