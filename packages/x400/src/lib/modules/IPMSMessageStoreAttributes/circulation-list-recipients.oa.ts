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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    CirculationMember,
    _decode_CirculationMember,
    _encode_CirculationMember,
} from '../IPMSHeadingExtensions/CirculationMember.ta';
export {
    CirculationMember,
    _decode_CirculationMember,
    _encode_CirculationMember,
} from '../IPMSHeadingExtensions/CirculationMember.ta';
import { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa';
export { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa';
import { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa';
export { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa';
import { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa';
export { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa';
import { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa';
export { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa';
import { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa';
export { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa';
import { id_hat_circulation_list_recipients } from '../IPMSObjectIdentifiers/id-hat-circulation-list-recipients.va';
export { id_hat_circulation_list_recipients } from '../IPMSObjectIdentifiers/id-hat-circulation-list-recipients.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION circulation_list_recipients */
/**
 * @summary circulation_list_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circulation-list-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   CirculationMember,
 *   EQUALITY MATCHING-RULE  circulationMemberMatch,
 *   OTHER MATCHING-RULES
 *     {circulationMemberElementsMatch | circulationMemberSubstringElementsMatch |
 *       circulationMemberSingleElementMatch | circulationMemberCheckmarkMatch,
 *       ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-circulation-list-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CirculationMember>}
 * @implements {X413ATTRIBUTE<CirculationMember>}
 */
export const circulation_list_recipients: X413ATTRIBUTE<CirculationMember> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CirculationMember,
    },
    encoderFor: {
        '&Type': _encode_CirculationMember,
    },
    '&equalityMatch': circulationMemberMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        circulationMemberElementsMatch,
        circulationMemberSubstringElementsMatch,
        circulationMemberSingleElementMatch,
        circulationMemberCheckmarkMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_circulation_list_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION circulation_list_recipients */

/* eslint-enable */
