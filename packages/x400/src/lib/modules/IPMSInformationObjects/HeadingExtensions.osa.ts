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
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.js';
import { authorization_time } from '../IPMSHeadingExtensions/authorization-time.oa.js';
export { authorization_time } from '../IPMSHeadingExtensions/authorization-time.oa.js';
import { auto_submitted } from '../IPMSHeadingExtensions/auto-submitted.oa.js';
export { auto_submitted } from '../IPMSHeadingExtensions/auto-submitted.oa.js';
import { body_part_signatures } from '../IPMSHeadingExtensions/body-part-signatures.oa.js';
export { body_part_signatures } from '../IPMSHeadingExtensions/body-part-signatures.oa.js';
import { circulation_list_recipients } from '../IPMSHeadingExtensions/circulation-list-recipients.oa.js';
export { circulation_list_recipients } from '../IPMSHeadingExtensions/circulation-list-recipients.oa.js';
import { distribution_codes } from '../IPMSHeadingExtensions/distribution-codes.oa.js';
export { distribution_codes } from '../IPMSHeadingExtensions/distribution-codes.oa.js';
import { extended_subject } from '../IPMSHeadingExtensions/extended-subject.oa.js';
export { extended_subject } from '../IPMSHeadingExtensions/extended-subject.oa.js';
import { incomplete_copy } from '../IPMSHeadingExtensions/incomplete-copy.oa.js';
export { incomplete_copy } from '../IPMSHeadingExtensions/incomplete-copy.oa.js';
import { information_category } from '../IPMSHeadingExtensions/information-category.oa.js';
export { information_category } from '../IPMSHeadingExtensions/information-category.oa.js';
import { ipm_security_label } from '../IPMSHeadingExtensions/ipm-security-label.oa.js';
export { ipm_security_label } from '../IPMSHeadingExtensions/ipm-security-label.oa.js';
import { languages } from '../IPMSHeadingExtensions/languages.oa.js';
export { languages } from '../IPMSHeadingExtensions/languages.oa.js';
import { manual_handling_instructions } from '../IPMSHeadingExtensions/manual-handling-instructions.oa.js';
export { manual_handling_instructions } from '../IPMSHeadingExtensions/manual-handling-instructions.oa.js';
import { originators_reference } from '../IPMSHeadingExtensions/originators-reference.oa.js';
export { originators_reference } from '../IPMSHeadingExtensions/originators-reference.oa.js';
import { precedence_policy_identifier } from '../IPMSHeadingExtensions/precedence-policy-identifier.oa.js';
export { precedence_policy_identifier } from '../IPMSHeadingExtensions/precedence-policy-identifier.oa.js';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.js';
export { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.js';

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
