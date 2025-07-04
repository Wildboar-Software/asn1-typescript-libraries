/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    RecipientReassignmentProhibited,
    _enum_for_RecipientReassignmentProhibited,
    _decode_RecipientReassignmentProhibited,
    _encode_RecipientReassignmentProhibited,
} from '../MTSAbstractService/RecipientReassignmentProhibited.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_att_recipient_reassignment_prohibited } from '../MSObjectIdentifiers/id-att-recipient-reassignment-prohibited.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

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

/* eslint-enable */
