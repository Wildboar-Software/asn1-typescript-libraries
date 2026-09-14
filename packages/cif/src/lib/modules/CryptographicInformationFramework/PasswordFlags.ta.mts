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
 * @summary PasswordFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PasswordFlags  ::=  BIT STRING {
 *     case-sensitive               (0),
 *     local                        (1),
 *     change-disabled              (2),
 *     unblock-disabled             (3),
 *     initialized                  (4),
 *     needs-padding                (5),
 *     unblockingPassword           (6),
 *     soPassword                   (7),
 *     disable-allowed              (8),
 *     integrity-protected          (9),
 *     confidentiality-protected    (10),
 *     exchangeRefData              (11),
 *     resetRetryCounter1           (12),
 *     resetRetryCounter2           (13),
 *     context-dependent            (14),
 *     multiStepProtocol            (15)
 * } (CONSTRAINED BY {
 *     -- 'unblockingPassword' and 'soPassword' cannot both be set, and
 *     -- 'context-dependent' supersedes both 'integrity-protected' and
 *     -- 'confidentiality-protected' when set-- })
 * ```
 */
export
type PasswordFlags = BIT_STRING;

/**
 * @summary PasswordFlags_case_sensitive
 * @constant
 */
export
const PasswordFlags_case_sensitive: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary case_sensitive
 * @constant
 */
export
const case_sensitive: number = PasswordFlags_case_sensitive; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_local
 * @constant
 */
export
const PasswordFlags_local: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary local
 * @constant
 */
export
const local: number = PasswordFlags_local; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_change_disabled
 * @constant
 */
export
const PasswordFlags_change_disabled: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary change_disabled
 * @constant
 */
export
const change_disabled: number = PasswordFlags_change_disabled; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_unblock_disabled
 * @constant
 */
export
const PasswordFlags_unblock_disabled: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary unblock_disabled
 * @constant
 */
export
const unblock_disabled: number = PasswordFlags_unblock_disabled; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_initialized
 * @constant
 */
export
const PasswordFlags_initialized: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary initialized
 * @constant
 */
export
const initialized: number = PasswordFlags_initialized; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_needs_padding
 * @constant
 */
export
const PasswordFlags_needs_padding: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary needs_padding
 * @constant
 */
export
const needs_padding: number = PasswordFlags_needs_padding; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_unblockingPassword
 * @constant
 */
export
const PasswordFlags_unblockingPassword: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary unblockingPassword
 * @constant
 */
export
const unblockingPassword: number = PasswordFlags_unblockingPassword; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_soPassword
 * @constant
 */
export
const PasswordFlags_soPassword: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary soPassword
 * @constant
 */
export
const soPassword: number = PasswordFlags_soPassword; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_disable_allowed
 * @constant
 */
export
const PasswordFlags_disable_allowed: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary disable_allowed
 * @constant
 */
export
const disable_allowed: number = PasswordFlags_disable_allowed; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_integrity_protected
 * @constant
 */
export
const PasswordFlags_integrity_protected: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary integrity_protected
 * @constant
 */
export
const integrity_protected: number = PasswordFlags_integrity_protected; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_confidentiality_protected
 * @constant
 */
export
const PasswordFlags_confidentiality_protected: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary confidentiality_protected
 * @constant
 */
export
const confidentiality_protected: number = PasswordFlags_confidentiality_protected; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_exchangeRefData
 * @constant
 */
export
const PasswordFlags_exchangeRefData: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary exchangeRefData
 * @constant
 */
export
const exchangeRefData: number = PasswordFlags_exchangeRefData; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_resetRetryCounter1
 * @constant
 */
export
const PasswordFlags_resetRetryCounter1: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary resetRetryCounter1
 * @constant
 */
export
const resetRetryCounter1: number = PasswordFlags_resetRetryCounter1; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_resetRetryCounter2
 * @constant
 */
export
const PasswordFlags_resetRetryCounter2: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary resetRetryCounter2
 * @constant
 */
export
const resetRetryCounter2: number = PasswordFlags_resetRetryCounter2; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_context_dependent
 * @constant
 */
export
const PasswordFlags_context_dependent: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary context_dependent
 * @constant
 */
export
const context_dependent: number = PasswordFlags_context_dependent; /* SHORT_NAMED_BIT */

/**
 * @summary PasswordFlags_multiStepProtocol
 * @constant
 */
export
const PasswordFlags_multiStepProtocol: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary multiStepProtocol
 * @constant
 */
export
const multiStepProtocol: number = PasswordFlags_multiStepProtocol; /* SHORT_NAMED_BIT */
export const _decode_PasswordFlags = $._decodeBitString;
export const _encode_PasswordFlags = $._encodeBitString;


/* eslint-enable */
