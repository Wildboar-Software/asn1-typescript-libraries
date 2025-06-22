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
    EDINOriginatorField,
    _decode_EDINOriginatorField,
    _encode_EDINOriginatorField,
} from '../EDIMSInformationObjects/EDINOriginatorField.ta.mjs';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.mjs';
import { id_nat_edin_originator } from '../EDIMSObjectIdentifiers/id-nat-edin-originator.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edin_originator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edin-originator X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDINOriginatorField,
 *   EQUALITY MATCHING-RULE  oRNameMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-edin-originator
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINOriginatorField>}
 * @implements {X413ATTRIBUTE<EDINOriginatorField>}
 */
export const edin_originator: X413ATTRIBUTE<EDINOriginatorField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINOriginatorField,
    },
    encoderFor: {
        '&Type': _encode_EDINOriginatorField,
    },
    '&equalityMatch': oRNameMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_edin_originator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
