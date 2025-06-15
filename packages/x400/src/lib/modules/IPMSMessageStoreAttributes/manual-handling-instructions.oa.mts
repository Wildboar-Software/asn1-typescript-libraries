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
    ManualHandlingInstruction,
    _decode_ManualHandlingInstruction,
    _encode_ManualHandlingInstruction,
} from '../IPMSHeadingExtensions/ManualHandlingInstruction.ta.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { id_hat_manual_handling_instructions } from '../IPMSObjectIdentifiers/id-hat-manual-handling-instructions.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary manual_handling_instructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * manual-handling-instructions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ManualHandlingInstruction,
 *   EQUALITY MATCHING-RULE  mSStringMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-manual-handling-instructions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ManualHandlingInstruction>}
 * @implements {X413ATTRIBUTE<ManualHandlingInstruction>}
 */
export const manual_handling_instructions: X413ATTRIBUTE<ManualHandlingInstruction> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ManualHandlingInstruction,
    },
    encoderFor: {
        '&Type': _encode_ManualHandlingInstruction,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_manual_handling_instructions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
