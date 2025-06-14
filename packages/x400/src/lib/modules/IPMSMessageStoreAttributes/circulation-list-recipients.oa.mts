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
    CirculationMember,
    _decode_CirculationMember,
    _encode_CirculationMember,
} from '../IPMSHeadingExtensions/CirculationMember.ta.mjs';
import { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa.mjs';
import { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa.mjs';
import { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa.mjs';
import { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa.mjs';
import { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa.mjs';
import { id_hat_circulation_list_recipients } from '../IPMSObjectIdentifiers/id-hat-circulation-list-recipients.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

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
