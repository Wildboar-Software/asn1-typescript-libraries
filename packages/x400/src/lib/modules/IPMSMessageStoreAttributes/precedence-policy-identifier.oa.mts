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
    PrecedencePolicyIdentifier,
    _decode_PrecedencePolicyIdentifier,
    _encode_PrecedencePolicyIdentifier,
} from '../IPMSHeadingExtensions/PrecedencePolicyIdentifier.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs';
import { id_hat_precedence_policy_id } from '../IPMSObjectIdentifiers/id-hat-precedence-policy-id.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary precedence_policy_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * precedence-policy-identifier X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   PrecedencePolicyIdentifier,
 *   EQUALITY MATCHING-RULE  objectIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-precedence-policy-id
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PrecedencePolicyIdentifier>}
 * @implements {X413ATTRIBUTE<PrecedencePolicyIdentifier>}
 */
export const precedence_policy_identifier: X413ATTRIBUTE<PrecedencePolicyIdentifier> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PrecedencePolicyIdentifier,
    },
    encoderFor: {
        '&Type': _encode_PrecedencePolicyIdentifier,
    },
    '&equalityMatch': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_precedence_policy_id /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
