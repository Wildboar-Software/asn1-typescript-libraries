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
 * @summary AccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     reserved-by-a-user          (2),
 *     externally-located-object   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessProblem {
    inappropriate_object_class = 1,
    reserved_by_a_user = 2,
    externally_located_object = 3,
}

/**
 * @summary AccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     reserved-by-a-user          (2),
 *     externally-located-object   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AccessProblem = _enum_for_AccessProblem;

/**
 * @summary AccessProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessProblem  ::=  ENUMERATED {
 *     inappropriate-object-class  (1),
 *     reserved-by-a-user          (2),
 *     externally-located-object   (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AccessProblem = _enum_for_AccessProblem;

/**
 * @summary AccessProblem_inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const AccessProblem_inappropriate_object_class: AccessProblem = AccessProblem.inappropriate_object_class; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inappropriate_object_class
 * @constant
 * @type {number}
 */
export
const inappropriate_object_class: AccessProblem = AccessProblem.inappropriate_object_class; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessProblem_reserved_by_a_user
 * @constant
 * @type {number}
 */
export
const AccessProblem_reserved_by_a_user: AccessProblem = AccessProblem.reserved_by_a_user; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved_by_a_user
 * @constant
 * @type {number}
 */
export
const reserved_by_a_user: AccessProblem = AccessProblem.reserved_by_a_user; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessProblem_externally_located_object
 * @constant
 * @type {number}
 */
export
const AccessProblem_externally_located_object: AccessProblem = AccessProblem.externally_located_object; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary externally_located_object
 * @constant
 * @type {number}
 */
export
const externally_located_object: AccessProblem = AccessProblem.externally_located_object; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AccessProblem = $._decodeEnumerated;
export const _encode_AccessProblem = $._encodeEnumerated;


/* eslint-enable */
