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
 * @summary AuthMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthMethod  ::=  BIT STRING {
 *     secureMessaging(0),
 *     extAuthentication(1),
 *     userAuthentication(2),
 *     always(3)
 * }
 * ```
 */
export
type AuthMethod = BIT_STRING;

/**
 * @summary AuthMethod_secureMessaging
 * @constant
 */
export
const AuthMethod_secureMessaging: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary secureMessaging
 * @constant
 */
export
const secureMessaging: number = AuthMethod_secureMessaging; /* SHORT_NAMED_BIT */

/**
 * @summary AuthMethod_extAuthentication
 * @constant
 */
export
const AuthMethod_extAuthentication: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary extAuthentication
 * @constant
 */
export
const extAuthentication: number = AuthMethod_extAuthentication; /* SHORT_NAMED_BIT */

/**
 * @summary AuthMethod_userAuthentication
 * @constant
 */
export
const AuthMethod_userAuthentication: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userAuthentication
 * @constant
 */
export
const userAuthentication: number = AuthMethod_userAuthentication; /* SHORT_NAMED_BIT */

/**
 * @summary AuthMethod_always
 * @constant
 */
export
const AuthMethod_always: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary always
 * @constant
 */
export
const always: number = AuthMethod_always; /* SHORT_NAMED_BIT */
export const _decode_AuthMethod = $._decodeBitString;
export const _encode_AuthMethod = $._encodeBitString;


/* eslint-enable */
