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
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
import { authorization_time } from '../IPMSHeadingExtensions/authorization-time.oa.mjs';
import { auto_submitted } from '../IPMSHeadingExtensions/auto-submitted.oa.mjs';
import { body_part_signatures } from '../IPMSHeadingExtensions/body-part-signatures.oa.mjs';
import { circulation_list_recipients } from '../IPMSHeadingExtensions/circulation-list-recipients.oa.mjs';
import { distribution_codes } from '../IPMSHeadingExtensions/distribution-codes.oa.mjs';
import { extended_subject } from '../IPMSHeadingExtensions/extended-subject.oa.mjs';
import { incomplete_copy } from '../IPMSHeadingExtensions/incomplete-copy.oa.mjs';
import { information_category } from '../IPMSHeadingExtensions/information-category.oa.mjs';
import { ipm_security_label } from '../IPMSHeadingExtensions/ipm-security-label.oa.mjs';
import { languages } from '../IPMSHeadingExtensions/languages.oa.mjs';
import { manual_handling_instructions } from '../IPMSHeadingExtensions/manual-handling-instructions.oa.mjs';
import { originators_reference } from '../IPMSHeadingExtensions/originators-reference.oa.mjs';
import { precedence_policy_identifier } from '../IPMSHeadingExtensions/precedence-policy-identifier.oa.mjs';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
/**
 * @summary HeadingExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeadingExtensions IPMS-EXTENSION ::= {authorization-time | auto-submitted | body-part-signatures |
 *    circulation-list-recipients | distribution-codes | extended-subject |
 *    incomplete-copy | information-category | ipm-security-label | languages |
 *    manual-handling-instructions | originators-reference |
 *    precedence-policy-identifier | PrivateIPMSExtensions, ...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const HeadingExtensions: IPMS_EXTENSION[] = [
    authorization_time,
    auto_submitted,
    body_part_signatures,
    circulation_list_recipients,
    distribution_codes,
    extended_subject,
    incomplete_copy,
    information_category,
    ipm_security_label,
    languages,
    manual_handling_instructions,
    originators_reference,
    precedence_policy_identifier,
    ...PrivateIPMSExtensions,
];

/* eslint-enable */
