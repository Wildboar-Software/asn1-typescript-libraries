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
 * @summary CS_CreateProgramInvocation_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-CreateProgramInvocation-Request  ::=  INTEGER {
 *    normal                        (0),
 *    controlling                   (1),
 *    controlled                    (2)
 *    } (0..2)
 * ```
 */
export
type CS_CreateProgramInvocation_Request = INTEGER;

/**
 * @summary CS_CreateProgramInvocation_Request_normal
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_normal: CS_CreateProgramInvocation_Request = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_normal
 * @constant
 * @type {number}
 */
export
const normal: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlling
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_controlling: CS_CreateProgramInvocation_Request = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlling
 * @constant
 * @type {number}
 */
export
const controlling: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_controlling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlled
 * @constant
 * @type {number}
 */
export
const CS_CreateProgramInvocation_Request_controlled: CS_CreateProgramInvocation_Request = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CS_CreateProgramInvocation_Request_controlled
 * @constant
 * @type {number}
 */
export
const controlled: CS_CreateProgramInvocation_Request = CS_CreateProgramInvocation_Request_controlled; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CS_CreateProgramInvocation_Request: $.ASN1Decoder<CS_CreateProgramInvocation_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_CreateProgramInvocation_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_CreateProgramInvocation_Request (el: _Element): CS_CreateProgramInvocation_Request {
    if (!_cached_decoder_for_CS_CreateProgramInvocation_Request) { _cached_decoder_for_CS_CreateProgramInvocation_Request = $._decodeInteger; }
    return _cached_decoder_for_CS_CreateProgramInvocation_Request(el);
}

let _cached_encoder_for_CS_CreateProgramInvocation_Request: $.ASN1Encoder<CS_CreateProgramInvocation_Request> | null = null;

/**
 * @summary Encodes a(n) CS_CreateProgramInvocation_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_CreateProgramInvocation_Request, encoded as an ASN.1 Element.
 */
export
function _encode_CS_CreateProgramInvocation_Request (value: CS_CreateProgramInvocation_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_CreateProgramInvocation_Request) { _cached_encoder_for_CS_CreateProgramInvocation_Request = $._encodeInteger; }
    return _cached_encoder_for_CS_CreateProgramInvocation_Request(value, elGetter);
}


/* eslint-enable */
