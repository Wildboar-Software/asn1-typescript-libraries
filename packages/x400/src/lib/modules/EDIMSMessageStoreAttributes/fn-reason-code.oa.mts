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
    FNReasonCodeField,
    _decode_FNReasonCodeField,
    _encode_FNReasonCodeField,
} from '../EDIMSInformationObjects/FNReasonCodeField.ta.mjs';
import { id_nat_fn_reason_code } from '../EDIMSObjectIdentifiers/id-nat-fn-reason-code.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary fn_reason_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fn-reason-code X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  FNReasonCodeField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-nat-fn-reason-code
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<FNReasonCodeField>}
 * @implements {X413ATTRIBUTE<FNReasonCodeField>}
 */
export const fn_reason_code: X413ATTRIBUTE<FNReasonCodeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_FNReasonCodeField,
    },
    encoderFor: {
        '&Type': _encode_FNReasonCodeField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_fn_reason_code /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
