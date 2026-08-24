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
 * Information object set `MatchingRuleTable`. The Matching-rule-table information object
 * set is used as a constraining set in this Service Definition where related fields of
 * the MATCHING-RULE information object class are referenced in the MS abstract-syntax.
 * It comprises two object sets: MatchingRuleTable MATCHING-RULE ::= {
 * GeneralMatchingRules | ContentSpecificMatchingRules } The General-matching-rules
 * object set contains the general-attributes defined in… See ITU-T X.413 (1999), §12.6.
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
