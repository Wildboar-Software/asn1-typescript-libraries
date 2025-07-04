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
    StoragePeriod,
    _decode_StoragePeriod,
    _encode_StoragePeriod,
} from '../MSGeneralAttributeTypes/StoragePeriod.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { integerOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_att_storage_period } from '../MSObjectIdentifiers/id-att-storage-period.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ms_storage_period
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-storage-period X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   StoragePeriod,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE  integerOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-storage-period
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<StoragePeriod>}
 * @implements {X413ATTRIBUTE<StoragePeriod>}
 */
export const ms_storage_period: X413ATTRIBUTE<StoragePeriod> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_StoragePeriod,
    },
    encoderFor: {
        '&Type': _encode_StoragePeriod,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_storage_period /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
