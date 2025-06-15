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
    DeletionTime,
    _decode_DeletionTime,
    _encode_DeletionTime,
} from '../MSGeneralAttributeTypes/DeletionTime.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa.mjs';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa.mjs';
import { id_att_deletion_time } from '../MSObjectIdentifiers/id-att-deletion-time.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_deletion_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-deletion-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DeletionTime,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-deletion-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DeletionTime>}
 * @implements {X413ATTRIBUTE<DeletionTime>}
 */
export const ms_deletion_time: X413ATTRIBUTE<DeletionTime> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DeletionTime,
    },
    encoderFor: {
        '&Type': _encode_DeletionTime,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_deletion_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
