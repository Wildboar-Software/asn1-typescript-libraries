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
    EDIMSEntryType,
    _enum_for_EDIMSEntryType,
    _decode_EDIMSEntryType,
    _encode_EDIMSEntryType,
} from '../EDIMSMessageStoreAttributes/EDIMSEntryType.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_sat_edims_entry_type } from '../EDIMSObjectIdentifiers/id-sat-edims-entry-type.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edims_entry_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edims-entry-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIMSEntryType,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-sat-edims-entry-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIMSEntryType>}
 * @implements {X413ATTRIBUTE<EDIMSEntryType>}
 */
export const edims_entry_type: X413ATTRIBUTE<EDIMSEntryType> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIMSEntryType,
    },
    encoderFor: {
        '&Type': _encode_EDIMSEntryType,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_sat_edims_entry_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
