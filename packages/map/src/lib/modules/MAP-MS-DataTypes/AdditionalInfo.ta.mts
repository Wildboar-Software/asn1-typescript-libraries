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
 * @summary AdditionalInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalInfo  ::=  BIT STRING (SIZE (1..136))
 * ```
 */
export
type AdditionalInfo = BIT_STRING;

let _cached_decoder_for_AdditionalInfo: $.ASN1Decoder<AdditionalInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalInfo (el: _Element): AdditionalInfo {
    if (!_cached_decoder_for_AdditionalInfo) { _cached_decoder_for_AdditionalInfo = $._decodeBitString; }
    return _cached_decoder_for_AdditionalInfo(el);
}

let _cached_encoder_for_AdditionalInfo: $.ASN1Encoder<AdditionalInfo> | null = null;

/**
 * @summary Encodes a(n) AdditionalInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalInfo (value: AdditionalInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalInfo) { _cached_encoder_for_AdditionalInfo = $._encodeBitString; }
    return _cached_encoder_for_AdditionalInfo(value, elGetter);
}


/* eslint-enable */
