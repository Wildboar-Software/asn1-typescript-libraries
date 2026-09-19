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
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEsipa-authenticateClientErrorEsipa ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = INTEGER;

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid
 * @constant
 * @type {number}
 */
export
const eumCertificateInvalid: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired
 * @constant
 * @type {number}
 */
export
const eumCertificateExpired: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eumCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid
 * @constant
 * @type {number}
 */
export
const euiccCertificateInvalid: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired
 * @constant
 * @type {number}
 */
export
const euiccCertificateExpired: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccCertificateExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused
 * @constant
 * @type {number}
 */
export
const matchingIdRefused: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_matchingIdRefused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch
 * @constant
 * @type {number}
 */
export
const eidMismatch: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eidMismatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile
 * @constant
 * @type {number}
 */
export
const noEligibleProfile: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_noEligibleProfile; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown
 * @constant
 * @type {number}
 */
export
const ciPKUnknown: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_ciPKUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory
 * @constant
 * @type {number}
 */
export
const insufficientMemory: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_insufficientMemory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired
 * @constant
 * @type {number}
 */
export
const downloadOrderExpired: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_downloadOrderExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 50; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed
 * @constant
 * @type {number}
 */
export
const pprNotAllowed: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_pprNotAllowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 56; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown
 * @constant
 * @type {number}
 */
export
const eventIdUnknown: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_eventIdUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError
 * @constant
 * @type {number}
 */
export
const AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = AuthenticateClientResponseEsipa_authenticateClientErrorEsipa_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa: $.ASN1Decoder<AuthenticateClientResponseEsipa_authenticateClientErrorEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientResponseEsipa_authenticateClientErrorEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa (el: _Element): AuthenticateClientResponseEsipa_authenticateClientErrorEsipa {
    if (!_cached_decoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa) { _cached_decoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = $._decodeInteger; }
    return _cached_decoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa(el);
}

let _cached_encoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa: $.ASN1Encoder<AuthenticateClientResponseEsipa_authenticateClientErrorEsipa> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientResponseEsipa_authenticateClientErrorEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientResponseEsipa_authenticateClientErrorEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa (value: AuthenticateClientResponseEsipa_authenticateClientErrorEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa) { _cached_encoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa = $._encodeInteger; }
    return _cached_encoder_for_AuthenticateClientResponseEsipa_authenticateClientErrorEsipa(value, elGetter);
}


/* eslint-enable */
