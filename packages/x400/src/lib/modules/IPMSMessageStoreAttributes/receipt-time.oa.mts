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
    ReceiptTimeField,
    _decode_ReceiptTimeField,
    _encode_ReceiptTimeField,
} from '../IPMSInformationObjects/ReceiptTimeField.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { uTCTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_nat_receipt_time } from '../IPMSObjectIdentifiers/id-nat-receipt-time.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary receipt_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * receipt-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ReceiptTimeField,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-receipt-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReceiptTimeField>}
 * @implements {X413ATTRIBUTE<ReceiptTimeField>}
 */
export const receipt_time: X413ATTRIBUTE<ReceiptTimeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReceiptTimeField,
    },
    encoderFor: {
        '&Type': _encode_ReceiptTimeField,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_receipt_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
