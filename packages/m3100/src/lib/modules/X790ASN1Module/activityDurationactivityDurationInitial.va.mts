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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ActivityDuration,
    _decode_ActivityDuration,
    _encode_ActivityDuration,
} from '../X790ASN1Module/ActivityDuration.ta.mjs';
export {
    ActivityDuration,
    _decode_ActivityDuration,
    _encode_ActivityDuration,
} from '../X790ASN1Module/ActivityDuration.ta.mjs';
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../X790ASN1Module/TimeInterval.ta.mjs';
export {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../X790ASN1Module/TimeInterval.ta.mjs';
import {
    ActivityType,
    ActivityType_after_hours_repair /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_repair /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_standby /* IMPORTED_LONG_NAMED_BIT */,
    standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_after_hours_standby /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_test /* IMPORTED_LONG_NAMED_BIT */,
    test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_manager_initiated_test /* IMPORTED_LONG_NAMED_BIT */,
    manager_initiated_test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_dispatch /* IMPORTED_LONG_NAMED_BIT */,
    dispatch /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_no_access /* IMPORTED_LONG_NAMED_BIT */,
    no_access /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_delayed_maintenance /* IMPORTED_LONG_NAMED_BIT */,
    delayed_maintenance /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_release /* IMPORTED_LONG_NAMED_BIT */,
    release /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';
export {
    ActivityType,
    ActivityType_after_hours_repair /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_repair /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_standby /* IMPORTED_LONG_NAMED_BIT */,
    standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_after_hours_standby /* IMPORTED_LONG_NAMED_BIT */,
    after_hours_standby /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_test /* IMPORTED_LONG_NAMED_BIT */,
    test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_manager_initiated_test /* IMPORTED_LONG_NAMED_BIT */,
    manager_initiated_test /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_dispatch /* IMPORTED_LONG_NAMED_BIT */,
    dispatch /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_no_access /* IMPORTED_LONG_NAMED_BIT */,
    no_access /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_delayed_maintenance /* IMPORTED_LONG_NAMED_BIT */,
    delayed_maintenance /* IMPORTED_SHORT_NAMED_BIT */,
    ActivityType_release /* IMPORTED_LONG_NAMED_BIT */,
    release /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION activityDurationactivityDurationInitial */
/**
 * @summary activityDurationactivityDurationInitial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * activityDurationactivityDurationInitial ActivityDuration ::= {}
 * ```
 *
 * @constant
 */
export const activityDurationactivityDurationInitial: ActivityDuration = [];
/* END_OF_SYMBOL_DEFINITION activityDurationactivityDurationInitial */

/* eslint-enable */
