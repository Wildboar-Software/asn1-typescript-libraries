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



/**
 * @summary ExtensionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionType     ::=     INTEGER(0..66535)
 * ```
 */
export
type ExtensionType = INTEGER;

let _cached_decoder_for_ExtensionType: $.ASN1Decoder<ExtensionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionType (el: _Element): ExtensionType {
    if (!_cached_decoder_for_ExtensionType) { _cached_decoder_for_ExtensionType = $._decodeInteger; }
    return _cached_decoder_for_ExtensionType(el);
}

let _cached_encoder_for_ExtensionType: $.ASN1Encoder<ExtensionType> | null = null;

/**
 * @summary Encodes a(n) ExtensionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionType, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionType (value: ExtensionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionType) { _cached_encoder_for_ExtensionType = $._encodeInteger; }
    return _cached_encoder_for_ExtensionType(value, elGetter);
}


/* eslint-enable */
