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
 * @summary Single_use_of_reference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Single-use-of-reference  ::=  BOOLEAN
 * ```
 */
export
type Single_use_of_reference = BOOLEAN; // BooleanType

let _cached_decoder_for_Single_use_of_reference: $.ASN1Decoder<Single_use_of_reference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Single_use_of_reference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Single_use_of_reference (el: _Element): Single_use_of_reference {
    if (!_cached_decoder_for_Single_use_of_reference) { _cached_decoder_for_Single_use_of_reference = $._decodeBoolean; }
    return _cached_decoder_for_Single_use_of_reference(el);
}

let _cached_encoder_for_Single_use_of_reference: $.ASN1Encoder<Single_use_of_reference> | null = null;

/**
 * @summary Encodes a(n) Single_use_of_reference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Single_use_of_reference, encoded as an ASN.1 Element.
 */
export
function _encode_Single_use_of_reference (value: Single_use_of_reference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Single_use_of_reference) { _cached_encoder_for_Single_use_of_reference = $._encodeBoolean; }
    return _cached_encoder_for_Single_use_of_reference(value, elGetter);
}


/* eslint-enable */
