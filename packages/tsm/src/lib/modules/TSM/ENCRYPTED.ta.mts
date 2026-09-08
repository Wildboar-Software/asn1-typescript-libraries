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
 * @summary ENCRYPTED
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENCRYPTED{ToBeEnciphered}     ::=  OCTET STRING(SIZE(0..255))
 * (CONSTRAINED BY {ToBeEnciphered})
 * ```
 */
export
type ENCRYPTED <ToBeEnciphered> = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ENCRYPTED: $.ASN1Decoder<ENCRYPTED<ToBeEnciphered>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_ENCRYPTED<ToBeEnciphered>(_decode_ToBeEnciphered: $.ASN1Decoder<ToBeEnciphered>): $.ASN1Decoder<ENCRYPTED<ToBeEnciphered>> {
    return $._decodeOctetString;
}

let _cached_encoder_for_ENCRYPTED: $.ASN1Encoder<ENCRYPTED<ToBeEnciphered>> | null = null;

/**
 * @summary Returns a function that will encode a(n) ENCRYPTED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED as an ASN.1 element.
 */
export
function _get_encoder_for_ENCRYPTED<ToBeEnciphered>(_encode_ToBeEnciphered: $.ASN1Encoder<ToBeEnciphered>): $.ASN1Encoder<ENCRYPTED<ToBeEnciphered>> {
    return $._encodeOctetString;
}

/* eslint-enable */
