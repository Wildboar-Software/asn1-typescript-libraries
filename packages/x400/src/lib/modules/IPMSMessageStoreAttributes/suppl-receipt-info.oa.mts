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
    SupplReceiptInfoField,
    _decode_SupplReceiptInfoField,
    _encode_SupplReceiptInfoField,
} from '../IPMSInformationObjects/SupplReceiptInfoField.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { id_nat_suppl_receipt_info } from '../IPMSObjectIdentifiers/id-nat-suppl-receipt-info.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary suppl_receipt_info
 * @description
 *
 * Information object `suppl_receipt_info`. The Suppl Receipt Info receipt field (O)
 * gives supplementary information about the receipt of the subject IPM by the RN's
 * originator. It comprises a Printable String[ of from zero to a prescribed number of
 * characters (see X.411), chosen from the Printable String character set|]. See ITU-T
 * X.420 (1999), §8.3.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * suppl-receipt-info X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX     SupplReceiptInfoField,
 *   EQUALITY MATCHING-RULE    mSStringMatch,
 *   SUBSTRINGS MATCHING-RULE  mSSubstringsMatch,
 *   NUMERATION                single-valued,
 *   ID                        id-nat-suppl-receipt-info
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SupplReceiptInfoField>}
 * @implements {X413ATTRIBUTE<SupplReceiptInfoField>}
 */
export const suppl_receipt_info: X413ATTRIBUTE<SupplReceiptInfoField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SupplReceiptInfoField,
    },
    encoderFor: {
        '&Type': _encode_SupplReceiptInfoField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&substringsMatch': mSSubstringsMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_suppl_receipt_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
