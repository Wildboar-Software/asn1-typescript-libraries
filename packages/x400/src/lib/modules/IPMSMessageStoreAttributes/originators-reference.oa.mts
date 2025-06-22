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
    OriginatorsReference,
    _decode_OriginatorsReference,
    _encode_OriginatorsReference,
} from '../IPMSHeadingExtensions/OriginatorsReference.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { id_hat_originators_reference } from '../IPMSObjectIdentifiers/id-hat-originators-reference.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary originators_reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originators-reference X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   OriginatorsReference,
 *   EQUALITY MATCHING-RULE  mSStringMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-originators-reference
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<OriginatorsReference>}
 * @implements {X413ATTRIBUTE<OriginatorsReference>}
 */
export const originators_reference: X413ATTRIBUTE<OriginatorsReference> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_OriginatorsReference,
    },
    encoderFor: {
        '&Type': _encode_OriginatorsReference,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_originators_reference /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
