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
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
import { authorization_time } from '../IPMSHeadingExtensions/authorization-time.oa.mjs';
export { authorization_time } from '../IPMSHeadingExtensions/authorization-time.oa.mjs';
import { auto_submitted } from '../IPMSHeadingExtensions/auto-submitted.oa.mjs';
export { auto_submitted } from '../IPMSHeadingExtensions/auto-submitted.oa.mjs';
import { body_part_signatures } from '../IPMSHeadingExtensions/body-part-signatures.oa.mjs';
export { body_part_signatures } from '../IPMSHeadingExtensions/body-part-signatures.oa.mjs';
import { circulation_list_recipients } from '../IPMSHeadingExtensions/circulation-list-recipients.oa.mjs';
export { circulation_list_recipients } from '../IPMSHeadingExtensions/circulation-list-recipients.oa.mjs';
import { distribution_codes } from '../IPMSHeadingExtensions/distribution-codes.oa.mjs';
export { distribution_codes } from '../IPMSHeadingExtensions/distribution-codes.oa.mjs';
import { extended_subject } from '../IPMSHeadingExtensions/extended-subject.oa.mjs';
export { extended_subject } from '../IPMSHeadingExtensions/extended-subject.oa.mjs';
import { incomplete_copy } from '../IPMSHeadingExtensions/incomplete-copy.oa.mjs';
export { incomplete_copy } from '../IPMSHeadingExtensions/incomplete-copy.oa.mjs';
import { information_category } from '../IPMSHeadingExtensions/information-category.oa.mjs';
export { information_category } from '../IPMSHeadingExtensions/information-category.oa.mjs';
import { ipm_security_label } from '../IPMSHeadingExtensions/ipm-security-label.oa.mjs';
export { ipm_security_label } from '../IPMSHeadingExtensions/ipm-security-label.oa.mjs';
import { languages } from '../IPMSHeadingExtensions/languages.oa.mjs';
export { languages } from '../IPMSHeadingExtensions/languages.oa.mjs';
import { manual_handling_instructions } from '../IPMSHeadingExtensions/manual-handling-instructions.oa.mjs';
export { manual_handling_instructions } from '../IPMSHeadingExtensions/manual-handling-instructions.oa.mjs';
import { originators_reference } from '../IPMSHeadingExtensions/originators-reference.oa.mjs';
export { originators_reference } from '../IPMSHeadingExtensions/originators-reference.oa.mjs';
import { precedence_policy_identifier } from '../IPMSHeadingExtensions/precedence-policy-identifier.oa.mjs';
export { precedence_policy_identifier } from '../IPMSHeadingExtensions/precedence-policy-identifier.oa.mjs';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
export { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';

/* START_OF_SYMBOL_DEFINITION HeadingExtensions */
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
/* END_OF_SYMBOL_DEFINITION HeadingExtensions */

/* eslint-enable */
