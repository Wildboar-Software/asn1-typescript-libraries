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
} from 'asn1-ts';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    FirstRecipientField,
    _decode_FirstRecipientField,
    _encode_FirstRecipientField,
} from '../EDIMSInformationObjects/FirstRecipientField.ta.mjs';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.mjs';
import { id_nat_first_recipient } from '../EDIMSObjectIdentifiers/id-nat-first-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION first_recipient */
/**
 * @summary first_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * first-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   FirstRecipientField,
 *   EQUALITY MATCHING-RULE  oRNameMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-first-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<FirstRecipientField>}
 * @implements {X413ATTRIBUTE<FirstRecipientField>}
 */
export const first_recipient: X413ATTRIBUTE<FirstRecipientField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_FirstRecipientField,
    },
    encoderFor: {
        '&Type': _encode_FirstRecipientField,
    },
    '&equalityMatch': oRNameMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_first_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION first_recipient */

/* eslint-enable */
