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
    StorageTime,
    _decode_StorageTime,
    _encode_StorageTime,
} from '../MSGeneralAttributeTypes/StorageTime.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { uTCTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_att_storage_time } from '../MSObjectIdentifiers/id-att-storage-time.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_storage_time
 * @description
 *
 * Information object `ms_storage_time`. This general-attribute indicates the date and
 * time at which the MS-user estimates that storage for the entry will no longer be
 * required. An entry becomes subject to deletion by the Auto-delete auto-action when its
 * storage-time is reached (see 13.4). See ITU-T X.413 (1999), §11.2.79.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-storage-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   StorageTime,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE  uTCTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-storage-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<StorageTime>}
 * @implements {X413ATTRIBUTE<StorageTime>}
 */
export const ms_storage_time: X413ATTRIBUTE<StorageTime> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_StorageTime,
    },
    encoderFor: {
        '&Type': _encode_StorageTime,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_storage_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
