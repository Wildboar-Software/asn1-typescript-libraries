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
    ReportingDLName,
    _decode_ReportingDLName,
    _encode_ReportingDLName,
} from '../MTSAbstractService/ReportingDLName.ta.mjs';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.mjs';
import { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa.mjs';
import { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa.mjs';
import { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa.mjs';
import { id_att_reporting_DL_name } from '../MSObjectIdentifiers/id-att-reporting-DL-name.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_reporting_DL_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-reporting-DL-name X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ReportingDLName,
 *   EQUALITY MATCHING-RULE
 *     oRNameMatch, -- rule not defined in 1988 Application Contexts
 *
 *   OTHER MATCHING-RULES
 *     {oRNameElementsMatch | oRNameSubstringElementsMatch |
 *       oRNameSingleElementMatch, ...},
 *   NUMERATION              single-valued,
 *   ID                      id-att-reporting-DL-name
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ReportingDLName>}
 * @implements {X413ATTRIBUTE<ReportingDLName>}
 */
export const mt_reporting_DL_name: X413ATTRIBUTE<ReportingDLName> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ReportingDLName,
    },
    encoderFor: {
        '&Type': _encode_ReportingDLName,
    },
    '&equalityMatch': oRNameMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        oRNameElementsMatch,
        oRNameSubstringElementsMatch,
        oRNameSingleElementMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_reporting_DL_name /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
