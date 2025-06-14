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
    IncompleteCopyField,
    _decode_IncompleteCopyField,
    _encode_IncompleteCopyField,
} from '../EDIMSInformationObjects/IncompleteCopyField.ta.mjs';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.mjs';
import { id_hat_incomplete_copy } from '../EDIMSObjectIdentifiers/id-hat-incomplete-copy.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION incomplete_copy */
/**
 * @summary incomplete_copy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * incomplete-copy X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   IncompleteCopyField,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-incomplete-copy
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IncompleteCopyField>}
 * @implements {X413ATTRIBUTE<IncompleteCopyField>}
 */
export const incomplete_copy: X413ATTRIBUTE<IncompleteCopyField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IncompleteCopyField,
    },
    encoderFor: {
        '&Type': _encode_IncompleteCopyField,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_incomplete_copy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION incomplete_copy */

/* eslint-enable */
