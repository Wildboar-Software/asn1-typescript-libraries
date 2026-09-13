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
 * @summary Versions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Versions  ::=  BIT STRING {v1(0), v2(1)}
 * ```
 */
export
type Versions = BIT_STRING;

/**
 * @summary Versions_v1
 * @constant
 */
export
const Versions_v1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary v1
 * @constant
 */
export
const v1: number = Versions_v1; /* SHORT_NAMED_BIT */

/**
 * @summary Versions_v2
 * @constant
 */
export
const Versions_v2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary v2
 * @constant
 */
export
const v2: number = Versions_v2; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Versions: $.ASN1Decoder<Versions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Versions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Versions (el: _Element): Versions {
    if (!_cached_decoder_for_Versions) { _cached_decoder_for_Versions = $._decodeBitString; }
    return _cached_decoder_for_Versions(el);
}

let _cached_encoder_for_Versions: $.ASN1Encoder<Versions> | null = null;

/**
 * @summary Encodes a(n) Versions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Versions, encoded as an ASN.1 Element.
 */
export
function _encode_Versions (value: Versions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Versions) { _cached_encoder_for_Versions = $._encodeBitString; }
    return _cached_encoder_for_Versions(value, elGetter);
}


/* eslint-enable */
