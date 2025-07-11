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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.mjs';
import { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa.mjs';
import { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa.mjs';
import { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa.mjs';
import { id_att_dl_exempted_recipients } from '../MSObjectIdentifiers/id-att-dl-exempted-recipients.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_dl_exempted_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-dl-exempted-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ORName,
 *   EQUALITY MATCHING-RULE  oRNameMatch,
 *   OTHER MATCHING-RULES
 *     {oRNameElementsMatch | oRNameSubstringElementsMatch |
 *       oRNameSingleElementMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-att-dl-exempted-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ORName>}
 * @implements {X413ATTRIBUTE<ORName>}
 */
export const mt_dl_exempted_recipients: X413ATTRIBUTE<ORName> = {
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
    '&id': id_att_dl_exempted_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
