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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.js';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.js';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.js';
export { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.js';
import { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa.js';
export { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa.js';
import { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa.js';
export { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa.js';
import { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa.js';
export { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa.js';
import { id_cat_edim_recipients } from '../EDIMSObjectIdentifiers/id-cat-edim-recipients.va.js';
export { id_cat_edim_recipients } from '../EDIMSObjectIdentifiers/id-cat-edim-recipients.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION ac_edim_recipients */
/**
 * @summary ac_edim_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-edim-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ORName,
 *   EQUALITY MATCHING-RULE  oRNameMatch,
 *   OTHER MATCHING-RULES
 *     {oRNameElementsMatch | oRNameSubstringElementsMatch |
 *       oRNameSingleElementMatch},
 *   NUMERATION              multi-valued,
 *   ID                      id-cat-edim-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ORName>}
 * @implements {X413ATTRIBUTE<ORName>}
 */
export const ac_edim_recipients: X413ATTRIBUTE<ORName> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ORName,
    },
    encoderFor: {
        '&Type': _encode_ORName,
    },
    '&equalityMatch': oRNameMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        oRNameElementsMatch,
        oRNameSubstringElementsMatch,
        oRNameSingleElementMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_edim_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ac_edim_recipients */

/* eslint-enable */
