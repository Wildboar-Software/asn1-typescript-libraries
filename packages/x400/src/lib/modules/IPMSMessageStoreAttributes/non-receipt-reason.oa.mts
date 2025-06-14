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
    NonReceiptReasonField,
    _enum_for_NonReceiptReasonField,
    _decode_NonReceiptReasonField,
    _encode_NonReceiptReasonField,
} from '../IPMSInformationObjects/NonReceiptReasonField.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_nat_non_receipt_reason } from '../IPMSObjectIdentifiers/id-nat-non-receipt-reason.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION non_receipt_reason */
/**
 * @summary non_receipt_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * non-receipt-reason X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   NonReceiptReasonField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-non-receipt-reason
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NonReceiptReasonField>}
 * @implements {X413ATTRIBUTE<NonReceiptReasonField>}
 */
export const non_receipt_reason: X413ATTRIBUTE<NonReceiptReasonField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_NonReceiptReasonField,
    },
    encoderFor: {
        '&Type': _encode_NonReceiptReasonField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_non_receipt_reason /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION non_receipt_reason */

/* eslint-enable */
