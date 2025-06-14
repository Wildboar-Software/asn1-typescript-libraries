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
    AutoActionError,
    _decode_AutoActionError,
    _encode_AutoActionError,
} from '../MSAbstractService/AutoActionError.ta.mjs';
import { id_att_auto_action_error } from '../MSObjectIdentifiers/id-att-auto-action-error.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ms_auto_action_error */
/**
 * @summary ms_auto_action_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-auto-action-error X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  AutoActionError,
 *   NUMERATION             single-valued,
 *   ID                     id-att-auto-action-error
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AutoActionError>}
 * @implements {X413ATTRIBUTE<AutoActionError>}
 */
export const ms_auto_action_error: X413ATTRIBUTE<AutoActionError> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AutoActionError,
    },
    encoderFor: {
        '&Type': _encode_AutoActionError,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_auto_action_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_auto_action_error */

/* eslint-enable */
