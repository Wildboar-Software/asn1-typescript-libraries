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
 * @summary SecurityProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityProblem  ::=  INTEGER {
 *   inappropriateAuthentication     (1),
 *   invalidCredentials              (2),
 *   insufficientAccessRights        (3),
 *   invalidSignature                (4),
 *   protectionRequired              (5),
 *   noInformation                   (6),
 *   blockedCredentials              (7),
 *   -- invalidQOPMatch              (8), obsolete
 *   spkmError                       (9),
 *   unsupportedAuthenticationMethod (10),
 *   passwordExpired                 (11),
 *   inappropriateAlgorithms         (12) }
 * ```
 */
export
type SecurityProblem = INTEGER;

/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export
const SecurityProblem_inappropriateAuthentication: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export
const inappropriateAuthentication: SecurityProblem = SecurityProblem_inappropriateAuthentication; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidCredentials
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalidCredentials: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidCredentials
 * @constant
 * @type {number}
 */
export
const invalidCredentials: SecurityProblem = SecurityProblem_invalidCredentials; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_insufficientAccessRights
 * @constant
 * @type {number}
 */
export
const SecurityProblem_insufficientAccessRights: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_insufficientAccessRights
 * @constant
 * @type {number}
 */
export
const insufficientAccessRights: SecurityProblem = SecurityProblem_insufficientAccessRights; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidSignature
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalidSignature: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_invalidSignature
 * @constant
 * @type {number}
 */
export
const invalidSignature: SecurityProblem = SecurityProblem_invalidSignature; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_protectionRequired
 * @constant
 * @type {number}
 */
export
const SecurityProblem_protectionRequired: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_protectionRequired
 * @constant
 * @type {number}
 */
export
const protectionRequired: SecurityProblem = SecurityProblem_protectionRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_noInformation
 * @constant
 * @type {number}
 */
export
const SecurityProblem_noInformation: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_noInformation
 * @constant
 * @type {number}
 */
export
const noInformation: SecurityProblem = SecurityProblem_noInformation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_blockedCredentials
 * @constant
 * @type {number}
 */
export
const SecurityProblem_blockedCredentials: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_blockedCredentials
 * @constant
 * @type {number}
 */
export
const blockedCredentials: SecurityProblem = SecurityProblem_blockedCredentials; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_spkmError
 * @constant
 * @type {number}
 */
export
const SecurityProblem_spkmError: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_spkmError
 * @constant
 * @type {number}
 */
export
const spkmError: SecurityProblem = SecurityProblem_spkmError; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupportedAuthenticationMethod
 * @constant
 * @type {number}
 */
export
const SecurityProblem_unsupportedAuthenticationMethod: SecurityProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_unsupportedAuthenticationMethod
 * @constant
 * @type {number}
 */
export
const unsupportedAuthenticationMethod: SecurityProblem = SecurityProblem_unsupportedAuthenticationMethod; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_passwordExpired
 * @constant
 * @type {number}
 */
export
const SecurityProblem_passwordExpired: SecurityProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_passwordExpired
 * @constant
 * @type {number}
 */
export
const passwordExpired: SecurityProblem = SecurityProblem_passwordExpired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_inappropriateAlgorithms
 * @constant
 * @type {number}
 */
export
const SecurityProblem_inappropriateAlgorithms: SecurityProblem = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SecurityProblem_inappropriateAlgorithms
 * @constant
 * @type {number}
 */
export
const inappropriateAlgorithms: SecurityProblem = SecurityProblem_inappropriateAlgorithms; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SecurityProblem: $.ASN1Decoder<SecurityProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityProblem (el: _Element): SecurityProblem {
    if (!_cached_decoder_for_SecurityProblem) { _cached_decoder_for_SecurityProblem = $._decodeInteger; }
    return _cached_decoder_for_SecurityProblem(el);
}

let _cached_encoder_for_SecurityProblem: $.ASN1Encoder<SecurityProblem> | null = null;

/**
 * @summary Encodes a(n) SecurityProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityProblem, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityProblem (value: SecurityProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityProblem) { _cached_encoder_for_SecurityProblem = $._encodeInteger; }
    return _cached_encoder_for_SecurityProblem(value, elGetter);
}


/* eslint-enable */
