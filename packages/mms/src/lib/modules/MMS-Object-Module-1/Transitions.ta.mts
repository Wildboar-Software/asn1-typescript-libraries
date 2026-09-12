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
 * @summary Transitions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Transitions  ::=  BIT STRING {
 *     idle-to-disabled        (0),
 *     active-to-disabled      (1),
 *     disabled-to-idle        (2),
 *     active-to-idle          (3),
 *     disabled-to-active      (4),
 *     idle-to-active          (5),
 *     any-to-deleted          (6)
 * }(SIZE(7))
 * ```
 */
export
type Transitions = BIT_STRING;

/**
 * @summary Transitions_idle_to_disabled
 * @constant
 */
export
const Transitions_idle_to_disabled: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary idle_to_disabled
 * @constant
 */
export
const idle_to_disabled: number = Transitions_idle_to_disabled; /* SHORT_NAMED_BIT */

/**
 * @summary Transitions_active_to_disabled
 * @constant
 */
export
const Transitions_active_to_disabled: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary active_to_disabled
 * @constant
 */
export
const active_to_disabled: number = Transitions_active_to_disabled; /* SHORT_NAMED_BIT */

/**
 * @summary Transitions_disabled_to_idle
 * @constant
 */
export
const Transitions_disabled_to_idle: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary disabled_to_idle
 * @constant
 */
export
const disabled_to_idle: number = Transitions_disabled_to_idle; /* SHORT_NAMED_BIT */

/**
 * @summary Transitions_active_to_idle
 * @constant
 */
export
const Transitions_active_to_idle: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary active_to_idle
 * @constant
 */
export
const active_to_idle: number = Transitions_active_to_idle; /* SHORT_NAMED_BIT */

/**
 * @summary Transitions_disabled_to_active
 * @constant
 */
export
const Transitions_disabled_to_active: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary disabled_to_active
 * @constant
 */
export
const disabled_to_active: number = Transitions_disabled_to_active; /* SHORT_NAMED_BIT */

/**
 * @summary Transitions_idle_to_active
 * @constant
 */
export
const Transitions_idle_to_active: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary idle_to_active
 * @constant
 */
export
const idle_to_active: number = Transitions_idle_to_active; /* SHORT_NAMED_BIT */

/**
 * @summary Transitions_any_to_deleted
 * @constant
 */
export
const Transitions_any_to_deleted: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary any_to_deleted
 * @constant
 */
export
const any_to_deleted: number = Transitions_any_to_deleted; /* SHORT_NAMED_BIT */
export const _decode_Transitions = $._decodeBitString;
export const _encode_Transitions = $._encodeBitString;


/* eslint-enable */
