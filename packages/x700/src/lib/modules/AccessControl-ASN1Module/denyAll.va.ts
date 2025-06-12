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
    DefaultAccess,
    _decode_DefaultAccess,
    _encode_DefaultAccess,
} from '../AccessControl-ASN1Module/DefaultAccess.ta.js';
export {
    DefaultAccess,
    _decode_DefaultAccess,
    _encode_DefaultAccess,
} from '../AccessControl-ASN1Module/DefaultAccess.ta.js';
import {
    EnforcementAction,
    _enum_for_EnforcementAction,
    EnforcementAction_denyWithResponse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denyWithResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_denyWithoutResponse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denyWithoutResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_abortAssociation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abortAssociation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_denyWithFalseResponse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denyWithFalseResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_allow /* IMPORTED_LONG_ENUMERATION_ITEM */,
    allow /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_EnforcementAction,
    _encode_EnforcementAction,
} from '../AccessControl-ASN1Module/EnforcementAction.ta.js';
export {
    EnforcementAction,
    _enum_for_EnforcementAction,
    EnforcementAction_denyWithResponse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denyWithResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_denyWithoutResponse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denyWithoutResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_abortAssociation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    abortAssociation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_denyWithFalseResponse /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denyWithFalseResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    EnforcementAction_allow /* IMPORTED_LONG_ENUMERATION_ITEM */,
    allow /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_EnforcementAction,
    _encode_EnforcementAction,
} from '../AccessControl-ASN1Module/EnforcementAction.ta.js';

/* START_OF_SYMBOL_DEFINITION denyAll */
/**
 * @summary denyAll
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * denyAll DefaultAccess ::= {}
 * ```
 *
 * @constant
 */
export const denyAll: DefaultAccess = DefaultAccess._from_object({
    action: undefined,
    create: undefined,
    delete_: undefined,
    get_: undefined,
    replace: undefined,
    addMember: undefined,
    removeMember: undefined,
    replaceWithDefault: undefined,
    multipleObjectSelection: undefined,
    filter: undefined,
});
/* END_OF_SYMBOL_DEFINITION denyAll */

/* eslint-enable */
