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
    EDINOriginatorField,
    _decode_EDINOriginatorField,
    _encode_EDINOriginatorField,
} from '../EDIMSInformationObjects/EDINOriginatorField.ta.js';
export {
    EDINOriginatorField,
    _decode_EDINOriginatorField,
    _encode_EDINOriginatorField,
} from '../EDIMSInformationObjects/EDINOriginatorField.ta.js';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.js';
export { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.js';
import { id_nat_edin_originator } from '../EDIMSObjectIdentifiers/id-nat-edin-originator.va.js';
export { id_nat_edin_originator } from '../EDIMSObjectIdentifiers/id-nat-edin-originator.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION edin_originator */
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
/* END_OF_SYMBOL_DEFINITION edin_originator */

/* eslint-enable */
