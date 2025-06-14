/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { id_att_marked_for_deletion } from '../MSObjectIdentifiers/id-att-marked-for-deletion.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION ms_marked_for_deletion */
/**
 * @summary ms_marked_for_deletion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-marked-for-deletion X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  NULL,
 *   NUMERATION             single-valued,
 *   ID                     id-att-marked-for-deletion
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NULL>}
 * @implements {X413ATTRIBUTE<NULL>}
 */
export const ms_marked_for_deletion: X413ATTRIBUTE<NULL> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': $._decodeNull,
    },
    encoderFor: {
        '&Type': $._encodeNull,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_marked_for_deletion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ms_marked_for_deletion */

/* eslint-enable */
