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
 * @summary AccessRights
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRights  ::=  ENUMERATED {
 *     read                (0),
 *     extended-read       (1),
 *     read-modify         (2),
 *     read-modify-delete  (3),
 *     owner               (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessRights {
    read = 0,
    extended_read = 1,
    read_modify = 2,
    read_modify_delete = 3,
    owner = 4,
}

/**
 * @summary AccessRights
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRights  ::=  ENUMERATED {
 *     read                (0),
 *     extended-read       (1),
 *     read-modify         (2),
 *     read-modify-delete  (3),
 *     owner               (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessRights = _enum_for_AccessRights;

/**
 * @summary AccessRights
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessRights  ::=  ENUMERATED {
 *     read                (0),
 *     extended-read       (1),
 *     read-modify         (2),
 *     read-modify-delete  (3),
 *     owner               (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccessRights = _enum_for_AccessRights;

/**
 * @summary AccessRights_read
 * @constant
 * @type {number}
 */
export
const AccessRights_read: AccessRights = AccessRights.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: AccessRights = AccessRights.read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_extended_read
 * @constant
 * @type {number}
 */
export
const AccessRights_extended_read: AccessRights = AccessRights.extended_read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary extended_read
 * @constant
 * @type {number}
 */
export
const extended_read: AccessRights = AccessRights.extended_read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_read_modify
 * @constant
 * @type {number}
 */
export
const AccessRights_read_modify: AccessRights = AccessRights.read_modify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_modify
 * @constant
 * @type {number}
 */
export
const read_modify: AccessRights = AccessRights.read_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_read_modify_delete
 * @constant
 * @type {number}
 */
export
const AccessRights_read_modify_delete: AccessRights = AccessRights.read_modify_delete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read_modify_delete
 * @constant
 * @type {number}
 */
export
const read_modify_delete: AccessRights = AccessRights.read_modify_delete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessRights_owner
 * @constant
 * @type {number}
 */
export
const AccessRights_owner: AccessRights = AccessRights.owner; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary owner
 * @constant
 * @type {number}
 */
export
const owner: AccessRights = AccessRights.owner; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessRights = $._decodeEnumerated;
export const _encode_AccessRights = $._encodeEnumerated;


/* eslint-enable */
