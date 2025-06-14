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
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs';
import { id_att_auto_action_type } from '../MSObjectIdentifiers/id-att-auto-action-type.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ms_auto_action_type */
/**
 * @summary ms_auto_action_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-auto-action-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   AutoActionType,
 *   EQUALITY MATCHING-RULE  objectIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-auto-action-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AutoActionType>}
 * @implements {X413ATTRIBUTE<AutoActionType>}
 */
export const ms_auto_action_type: X413ATTRIBUTE<AutoActionType> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AutoActionType,
    },
    encoderFor: {
        '&Type': _encode_AutoActionType,
    },
    '&equalityMatch': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_auto_action_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_auto_action_type */

/* eslint-enable */
