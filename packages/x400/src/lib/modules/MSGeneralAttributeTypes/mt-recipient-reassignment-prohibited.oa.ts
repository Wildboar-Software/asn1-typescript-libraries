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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    RecipientReassignmentProhibited,
    _enum_for_RecipientReassignmentProhibited,
    RecipientReassignmentProhibited_recipient_reassignment_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_reassignment_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RecipientReassignmentProhibited_recipient_reassignment_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_reassignment_prohibited /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RecipientReassignmentProhibited,
    _encode_RecipientReassignmentProhibited,
} from '../MTSAbstractService/RecipientReassignmentProhibited.ta';
export {
    RecipientReassignmentProhibited,
    _enum_for_RecipientReassignmentProhibited,
    RecipientReassignmentProhibited_recipient_reassignment_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_reassignment_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RecipientReassignmentProhibited_recipient_reassignment_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    recipient_reassignment_prohibited /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RecipientReassignmentProhibited,
    _encode_RecipientReassignmentProhibited,
} from '../MTSAbstractService/RecipientReassignmentProhibited.ta';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
import { id_att_recipient_reassignment_prohibited } from '../MSObjectIdentifiers/id-att-recipient-reassignment-prohibited.va';
export { id_att_recipient_reassignment_prohibited } from '../MSObjectIdentifiers/id-att-recipient-reassignment-prohibited.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION mt_recipient_reassignment_prohibited */
/**
 * @summary mt_recipient_reassignment_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-recipient-reassignment-prohibited X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   RecipientReassignmentProhibited,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-recipient-reassignment-prohibited
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RecipientReassignmentProhibited>}
 * @implements {X413ATTRIBUTE<RecipientReassignmentProhibited>}
 */
export const mt_recipient_reassignment_prohibited: X413ATTRIBUTE<RecipientReassignmentProhibited> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RecipientReassignmentProhibited,
    },
    encoderFor: {
        '&Type': _encode_RecipientReassignmentProhibited,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_recipient_reassignment_prohibited /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mt_recipient_reassignment_prohibited */

/* eslint-enable */
