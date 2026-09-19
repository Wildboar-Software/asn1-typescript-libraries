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
 * @summary ExtendedRinging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedRinging  ::=  [146] IMPLICIT NULL
 * ```
 */
export
type ExtendedRinging = NULL; // NullType

let _cached_decoder_for_ExtendedRinging: $.ASN1Decoder<ExtendedRinging> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedRinging
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedRinging (el: _Element): ExtendedRinging {
    if (!_cached_decoder_for_ExtendedRinging) { _cached_decoder_for_ExtendedRinging = $._decode_implicit<ExtendedRinging>(() => $._decodeNull); }
    return _cached_decoder_for_ExtendedRinging(el);
}

let _cached_encoder_for_ExtendedRinging: $.ASN1Encoder<ExtendedRinging> | null = null;

/**
 * @summary Encodes a(n) ExtendedRinging into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedRinging, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedRinging (value: ExtendedRinging, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedRinging) { _cached_encoder_for_ExtendedRinging = $._encode_implicit(_TagClass.context, 146, () => $._encodeNull, $.BER); }
    return _cached_encoder_for_ExtendedRinging(value, elGetter);
}


/* eslint-enable */
