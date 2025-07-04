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
    EDINInitiatorField,
    _enum_for_EDINInitiatorField,
    _decode_EDINInitiatorField,
    _encode_EDINInitiatorField,
} from '../EDIMSInformationObjects/EDINInitiatorField.ta.mjs';
import { integerMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_nat_edin_initiator } from '../EDIMSObjectIdentifiers/id-nat-edin-initiator.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edin_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edin-initiator X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINInitiatorField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-edin-initiator
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINInitiatorField>}
 * @implements {X413ATTRIBUTE<EDINInitiatorField>}
 */
export const edin_initiator: X413ATTRIBUTE<EDINInitiatorField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINInitiatorField,
    },
    encoderFor: {
        '&Type': _encode_EDINInitiatorField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_edin_initiator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
