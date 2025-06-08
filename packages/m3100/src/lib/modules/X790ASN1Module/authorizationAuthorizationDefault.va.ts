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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AuthorizationList,
    _decode_AuthorizationList,
    _encode_AuthorizationList,
} from '../X790ASN1Module/AuthorizationList.ta';
export {
    AuthorizationList,
    _decode_AuthorizationList,
    _encode_AuthorizationList,
} from '../X790ASN1Module/AuthorizationList.ta';
import {
    RequestState,
    _enum_for_RequestState,
    RequestState_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_provided /* IMPORTED_LONG_ENUMERATION_ITEM */,
    provided /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_denied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RequestState,
    _encode_RequestState,
} from '../X790ASN1Module/RequestState.ta';
export {
    RequestState,
    _enum_for_RequestState,
    RequestState_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_provided /* IMPORTED_LONG_ENUMERATION_ITEM */,
    provided /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_denied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RequestState,
    _encode_RequestState,
} from '../X790ASN1Module/RequestState.ta';
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
} from '../X790ASN1Module/ActivityType.ta';
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
} from '../X790ASN1Module/ActivityType.ta';
import {
    AuthorizationTime,
    _decode_AuthorizationTime,
    _encode_AuthorizationTime,
} from '../X790ASN1Module/AuthorizationTime.ta';
export {
    AuthorizationTime,
    _decode_AuthorizationTime,
    _encode_AuthorizationTime,
} from '../X790ASN1Module/AuthorizationTime.ta';
import {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta';
export {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta';

/* START_OF_SYMBOL_DEFINITION authorizationAuthorizationDefault */
/**
 * @summary authorizationAuthorizationDefault
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorizationAuthorizationDefault AuthorizationList ::= {{state provided, type '000000000'B}}
 * ```
 *
 * @constant
 */
export const authorizationAuthorizationDefault: AuthorizationList = [
    /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
];
/* END_OF_SYMBOL_DEFINITION authorizationAuthorizationDefault */

/* eslint-enable */
