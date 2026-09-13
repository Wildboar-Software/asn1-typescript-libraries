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
 * SecurityProblem  ::=  ENUMERATED {
 *     inappropriate-authentication    (1),
 *     invalid-creds                   (2),
 *     invalid-privilege               (3),
 *     invalid-pac                     (4),
 *     already-active                  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SecurityProblem {
    inappropriate_authentication = 1,
    invalid_creds = 2,
    invalid_privilege = 3,
    invalid_pac = 4,
    already_active = 5,
}

/**
 * @summary SecurityProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityProblem  ::=  ENUMERATED {
 *     inappropriate-authentication    (1),
 *     invalid-creds                   (2),
 *     invalid-privilege               (3),
 *     invalid-pac                     (4),
 *     already-active                  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SecurityProblem = _enum_for_SecurityProblem;

/**
 * @summary SecurityProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityProblem  ::=  ENUMERATED {
 *     inappropriate-authentication    (1),
 *     invalid-creds                   (2),
 *     invalid-privilege               (3),
 *     invalid-pac                     (4),
 *     already-active                  (5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SecurityProblem = _enum_for_SecurityProblem;

/**
 * @summary SecurityProblem_inappropriate_authentication
 * @constant
 * @type {number}
 */
export
const SecurityProblem_inappropriate_authentication: SecurityProblem = SecurityProblem.inappropriate_authentication; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_authentication
 * @constant
 * @type {number}
 */
export
const inappropriate_authentication: SecurityProblem = SecurityProblem.inappropriate_authentication; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_creds
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_creds: SecurityProblem = SecurityProblem.invalid_creds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_creds
 * @constant
 * @type {number}
 */
export
const invalid_creds: SecurityProblem = SecurityProblem.invalid_creds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_privilege
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_privilege: SecurityProblem = SecurityProblem.invalid_privilege; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_privilege
 * @constant
 * @type {number}
 */
export
const invalid_privilege: SecurityProblem = SecurityProblem.invalid_privilege; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_invalid_pac
 * @constant
 * @type {number}
 */
export
const SecurityProblem_invalid_pac: SecurityProblem = SecurityProblem.invalid_pac; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_pac
 * @constant
 * @type {number}
 */
export
const invalid_pac: SecurityProblem = SecurityProblem.invalid_pac; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityProblem_already_active
 * @constant
 * @type {number}
 */
export
const SecurityProblem_already_active: SecurityProblem = SecurityProblem.already_active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary already_active
 * @constant
 * @type {number}
 */
export
const already_active: SecurityProblem = SecurityProblem.already_active; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SecurityProblem: $.ASN1Decoder<SecurityProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityProblem (el: _Element): SecurityProblem {
    if (!_cached_decoder_for_SecurityProblem) { _cached_decoder_for_SecurityProblem = $._decodeEnumerated; }
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
    if (!_cached_encoder_for_SecurityProblem) { _cached_encoder_for_SecurityProblem = $._encodeEnumerated; }
    return _cached_encoder_for_SecurityProblem(value, elGetter);
}


/* eslint-enable */
