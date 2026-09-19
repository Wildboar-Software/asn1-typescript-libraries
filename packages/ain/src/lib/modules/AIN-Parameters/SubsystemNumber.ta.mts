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
 * @summary SubsystemNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubsystemNumber  ::=  [130] IMPLICIT INTEGER(0..255)
 * ```
 */
export
type SubsystemNumber = INTEGER;

let _cached_decoder_for_SubsystemNumber: $.ASN1Decoder<SubsystemNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubsystemNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubsystemNumber (el: _Element): SubsystemNumber {
    if (!_cached_decoder_for_SubsystemNumber) { _cached_decoder_for_SubsystemNumber = $._decode_implicit<SubsystemNumber>(() => $._decodeInteger); }
    return _cached_decoder_for_SubsystemNumber(el);
}

let _cached_encoder_for_SubsystemNumber: $.ASN1Encoder<SubsystemNumber> | null = null;

/**
 * @summary Encodes a(n) SubsystemNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubsystemNumber, encoded as an ASN.1 Element.
 */
export
function _encode_SubsystemNumber (value: SubsystemNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubsystemNumber) { _cached_encoder_for_SubsystemNumber = $._encode_implicit(_TagClass.context, 130, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_SubsystemNumber(value, elGetter);
}


/* eslint-enable */
