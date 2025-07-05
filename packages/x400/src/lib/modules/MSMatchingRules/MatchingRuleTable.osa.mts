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
import { type MATCHING_RULE } from '@wildboar/x500/InformationFramework';
import { GeneralMatchingRules } from '../MSMatchingRules/GeneralMatchingRules.osa.mjs';
import { ContentSpecificMatchingRules } from '../MSMatchingRules/ContentSpecificMatchingRules.osa.mjs';
/**
 * @summary MatchingRuleTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleTable MATCHING-RULE ::= {GeneralMatchingRules | ContentSpecificMatchingRules}
 * ```
 *
 * @constant
 * @type {MATCHING_RULE[]}
 *
 */
export const MatchingRuleTable: MATCHING_RULE[] = [
    ...GeneralMatchingRules,
    ...ContentSpecificMatchingRules,
];

/* eslint-enable */
