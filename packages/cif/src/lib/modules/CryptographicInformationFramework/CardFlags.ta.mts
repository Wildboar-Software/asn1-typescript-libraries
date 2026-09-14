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
 * @summary CardFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CardFlags  ::=  BIT STRING {
 *     readonly        (0),
 *     authRequired    (1),
 *     prnGeneration   (2)
 * }
 * ```
 */
export
type CardFlags = BIT_STRING;

/**
 * @summary CardFlags_readonly
 * @constant
 */
export
const CardFlags_readonly: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary readonly
 * @constant
 */
export
const readonly: number = CardFlags_readonly; /* SHORT_NAMED_BIT */

/**
 * @summary CardFlags_authRequired
 * @constant
 */
export
const CardFlags_authRequired: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authRequired
 * @constant
 */
export
const authRequired: number = CardFlags_authRequired; /* SHORT_NAMED_BIT */

/**
 * @summary CardFlags_prnGeneration
 * @constant
 */
export
const CardFlags_prnGeneration: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary prnGeneration
 * @constant
 */
export
const prnGeneration: number = CardFlags_prnGeneration; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CardFlags: $.ASN1Decoder<CardFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CardFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CardFlags (el: _Element): CardFlags {
    if (!_cached_decoder_for_CardFlags) { _cached_decoder_for_CardFlags = $._decodeBitString; }
    return _cached_decoder_for_CardFlags(el);
}

let _cached_encoder_for_CardFlags: $.ASN1Encoder<CardFlags> | null = null;

/**
 * @summary Encodes a(n) CardFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CardFlags, encoded as an ASN.1 Element.
 */
export
function _encode_CardFlags (value: CardFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CardFlags) { _cached_encoder_for_CardFlags = $._encodeBitString; }
    return _cached_encoder_for_CardFlags(value, elGetter);
}


/* eslint-enable */
