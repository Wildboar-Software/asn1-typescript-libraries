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
    IPMEntryType,
    _enum_for_IPMEntryType,
    _decode_IPMEntryType,
    _encode_IPMEntryType,
} from '../IPMSMessageStoreAttributes/IPMEntryType.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_sat_ipm_entry_type } from '../IPMSObjectIdentifiers/id-sat-ipm-entry-type.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ipm_entry_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ipm-entry-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   IPMEntryType,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-sat-ipm-entry-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IPMEntryType>}
 * @implements {X413ATTRIBUTE<IPMEntryType>}
 */
export const ipm_entry_type: X413ATTRIBUTE<IPMEntryType> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IPMEntryType,
    },
    encoderFor: {
        '&Type': _encode_IPMEntryType,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_ipm_entry_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
