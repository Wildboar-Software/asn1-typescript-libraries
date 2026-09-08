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
 * @summary HandshakeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandshakeType      ::=     INTEGER {
 *     hello-request         (0),
 *     client-hello         (1),
 *     server-hello         (2),
 *     certificate-list     (11),
 *     server-key-exchange    (12),
 *     certificate-request     (13),
 *     server-hello-done     (14),
 *     certificate-verify     (15),
 *     client-key-exchange     (16),
 *     finished         (20),
 *     biometric-client-hello     (100),
 *     biometric-server-hello     (101)
 * } (0..255)
 * ```
 */
export
type HandshakeType = INTEGER;

/**
 * @summary HandshakeType_hello_request
 * @constant
 * @type {number}
 */
export
const HandshakeType_hello_request: HandshakeType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_hello_request
 * @constant
 * @type {number}
 */
export
const hello_request: HandshakeType = HandshakeType_hello_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_client_hello: HandshakeType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_hello
 * @constant
 * @type {number}
 */
export
const client_hello: HandshakeType = HandshakeType_client_hello; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_server_hello: HandshakeType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello
 * @constant
 * @type {number}
 */
export
const server_hello: HandshakeType = HandshakeType_server_hello; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_list
 * @constant
 * @type {number}
 */
export
const HandshakeType_certificate_list: HandshakeType = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_list
 * @constant
 * @type {number}
 */
export
const certificate_list: HandshakeType = HandshakeType_certificate_list; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_key_exchange
 * @constant
 * @type {number}
 */
export
const HandshakeType_server_key_exchange: HandshakeType = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_key_exchange
 * @constant
 * @type {number}
 */
export
const server_key_exchange: HandshakeType = HandshakeType_server_key_exchange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_request
 * @constant
 * @type {number}
 */
export
const HandshakeType_certificate_request: HandshakeType = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_request
 * @constant
 * @type {number}
 */
export
const certificate_request: HandshakeType = HandshakeType_certificate_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello_done
 * @constant
 * @type {number}
 */
export
const HandshakeType_server_hello_done: HandshakeType = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello_done
 * @constant
 * @type {number}
 */
export
const server_hello_done: HandshakeType = HandshakeType_server_hello_done; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_verify
 * @constant
 * @type {number}
 */
export
const HandshakeType_certificate_verify: HandshakeType = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_verify
 * @constant
 * @type {number}
 */
export
const certificate_verify: HandshakeType = HandshakeType_certificate_verify; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_key_exchange
 * @constant
 * @type {number}
 */
export
const HandshakeType_client_key_exchange: HandshakeType = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_key_exchange
 * @constant
 * @type {number}
 */
export
const client_key_exchange: HandshakeType = HandshakeType_client_key_exchange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_finished
 * @constant
 * @type {number}
 */
export
const HandshakeType_finished: HandshakeType = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_finished
 * @constant
 * @type {number}
 */
export
const finished: HandshakeType = HandshakeType_finished; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_client_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_biometric_client_hello: HandshakeType = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_client_hello
 * @constant
 * @type {number}
 */
export
const biometric_client_hello: HandshakeType = HandshakeType_biometric_client_hello; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_server_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_biometric_server_hello: HandshakeType = 101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_server_hello
 * @constant
 * @type {number}
 */
export
const biometric_server_hello: HandshakeType = HandshakeType_biometric_server_hello; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_HandshakeType: $.ASN1Decoder<HandshakeType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandshakeType (el: _Element): HandshakeType {
    if (!_cached_decoder_for_HandshakeType) { _cached_decoder_for_HandshakeType = $._decodeInteger; }
    return _cached_decoder_for_HandshakeType(el);
}

let _cached_encoder_for_HandshakeType: $.ASN1Encoder<HandshakeType> | null = null;

/**
 * @summary Encodes a(n) HandshakeType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeType, encoded as an ASN.1 Element.
 */
export
function _encode_HandshakeType (value: HandshakeType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandshakeType) { _cached_encoder_for_HandshakeType = $._encodeInteger; }
    return _cached_encoder_for_HandshakeType(value, elGetter);
}


/* eslint-enable */
