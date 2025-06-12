/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import {
    ResponsibilityForwarded,
    _decode_ResponsibilityForwarded,
    _encode_ResponsibilityForwarded,
} from '../EDIMSInformationObjects/ResponsibilityForwarded.ta.js';
export {
    ResponsibilityForwarded,
    _decode_ResponsibilityForwarded,
    _encode_ResponsibilityForwarded,
} from '../EDIMSInformationObjects/ResponsibilityForwarded.ta.js';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.js';
export { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.js';
import { id_hat_responsibility_forwarded } from '../EDIMSObjectIdentifiers/id-hat-responsibility-forwarded.va.js';
export { id_hat_responsibility_forwarded } from '../EDIMSObjectIdentifiers/id-hat-responsibility-forwarded.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION responsibility_forwarded */
/**
 * @summary responsibility_forwarded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * responsibility-forwarded X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ResponsibilityForwarded,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-responsibility-forwarded
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ResponsibilityForwarded>}
 * @implements {X413ATTRIBUTE<ResponsibilityForwarded>}
 */
export const responsibility_forwarded: X413ATTRIBUTE<ResponsibilityForwarded> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ResponsibilityForwarded,
    },
    encoderFor: {
        '&Type': _encode_ResponsibilityForwarded,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_responsibility_forwarded /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION responsibility_forwarded */

/* eslint-enable */
