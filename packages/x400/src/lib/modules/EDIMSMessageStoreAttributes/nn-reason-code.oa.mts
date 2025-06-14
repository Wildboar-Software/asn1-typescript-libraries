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
    NNReasonCodeField,
    _decode_NNReasonCodeField,
    _encode_NNReasonCodeField,
} from '../EDIMSInformationObjects/NNReasonCodeField.ta.mjs';
import { id_nat_nn_reason_code } from '../EDIMSObjectIdentifiers/id-nat-nn-reason-code.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION nn_reason_code */
/**
 * @summary nn_reason_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nn-reason-code X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  NNReasonCodeField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-nat-nn-reason-code
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NNReasonCodeField>}
 * @implements {X413ATTRIBUTE<NNReasonCodeField>}
 */
export const nn_reason_code: X413ATTRIBUTE<NNReasonCodeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_NNReasonCodeField,
    },
    encoderFor: {
        '&Type': _encode_NNReasonCodeField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_nn_reason_code /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nn_reason_code */

/* eslint-enable */
