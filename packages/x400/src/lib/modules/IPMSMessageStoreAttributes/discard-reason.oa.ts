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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import {
    DiscardReasonField,
    _enum_for_DiscardReasonField,
    DiscardReasonField_ipm_expired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_ipm_obsoleted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_obsoleted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_user_subscription_terminated /* IMPORTED_LONG_ENUMERATION_ITEM */,
    user_subscription_terminated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_not_used /* IMPORTED_LONG_ENUMERATION_ITEM */,
    not_used /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_DiscardReasonField,
    _encode_DiscardReasonField,
} from '../IPMSInformationObjects/DiscardReasonField.ta.js';
export {
    DiscardReasonField,
    _enum_for_DiscardReasonField,
    DiscardReasonField_ipm_expired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_expired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_ipm_obsoleted /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ipm_obsoleted /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_user_subscription_terminated /* IMPORTED_LONG_ENUMERATION_ITEM */,
    user_subscription_terminated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DiscardReasonField_not_used /* IMPORTED_LONG_ENUMERATION_ITEM */,
    not_used /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_DiscardReasonField,
    _encode_DiscardReasonField,
} from '../IPMSInformationObjects/DiscardReasonField.ta.js';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
import { id_nat_discard_reason } from '../IPMSObjectIdentifiers/id-nat-discard-reason.va.js';
export { id_nat_discard_reason } from '../IPMSObjectIdentifiers/id-nat-discard-reason.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION discard_reason */
/**
 * @summary discard_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * discard-reason X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DiscardReasonField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-discard-reason
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DiscardReasonField>}
 * @implements {X413ATTRIBUTE<DiscardReasonField>}
 */
export const discard_reason: X413ATTRIBUTE<DiscardReasonField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DiscardReasonField,
    },
    encoderFor: {
        '&Type': _encode_DiscardReasonField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_discard_reason /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION discard_reason */

/* eslint-enable */
