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
 * @summary AuthenticateClientResponseEs11_authenticateClientError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEs11-authenticateClientError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AuthenticateClientResponseEs11_authenticateClientError = INTEGER;

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid
 * @constant
 * @type {number}
 */
export
const eumCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired
 * @constant
 * @type {number}
 */
export
const eumCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid
 * @constant
 * @type {number}
 */
export
const euiccCertificateInvalid: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired
 * @constant
 * @type {number}
 */
export
const euiccCertificateExpired: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid: AuthenticateClientResponseEs11_authenticateClientError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown: AuthenticateClientResponseEs11_authenticateClientError = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown
 * @constant
 * @type {number}
 */
export
const eventIdUnknown: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId: AuthenticateClientResponseEs11_authenticateClientError = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_undefinedError
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEs11_authenticateClientError_undefinedError: AuthenticateClientResponseEs11_authenticateClientError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEs11_authenticateClientError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: AuthenticateClientResponseEs11_authenticateClientError = AuthenticateClientResponseEs11_authenticateClientError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AuthenticateClientResponseEs11_authenticateClientError: $.ASN1Decoder<AuthenticateClientResponseEs11_authenticateClientError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientResponseEs11_authenticateClientError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientResponseEs11_authenticateClientError (el: _Element): AuthenticateClientResponseEs11_authenticateClientError {
    if (!_cached_decoder_for_AuthenticateClientResponseEs11_authenticateClientError) { _cached_decoder_for_AuthenticateClientResponseEs11_authenticateClientError = $._decodeInteger; }
    return _cached_decoder_for_AuthenticateClientResponseEs11_authenticateClientError(el);
}

let _cached_encoder_for_AuthenticateClientResponseEs11_authenticateClientError: $.ASN1Encoder<AuthenticateClientResponseEs11_authenticateClientError> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientResponseEs11_authenticateClientError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientResponseEs11_authenticateClientError, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientResponseEs11_authenticateClientError (value: AuthenticateClientResponseEs11_authenticateClientError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientResponseEs11_authenticateClientError) { _cached_encoder_for_AuthenticateClientResponseEs11_authenticateClientError = $._encodeInteger; }
    return _cached_encoder_for_AuthenticateClientResponseEs11_authenticateClientError(value, elGetter);
}


/* eslint-enable */
