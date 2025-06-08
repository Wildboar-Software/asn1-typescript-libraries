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
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";
import { acknowledgment_mode } from '../IPMSMessageStoreAttributes/acknowledgment-mode.oa';
export { acknowledgment_mode } from '../IPMSMessageStoreAttributes/acknowledgment-mode.oa';
import { authorizing_users } from '../IPMSMessageStoreAttributes/authorizing-users.oa';
export { authorizing_users } from '../IPMSMessageStoreAttributes/authorizing-users.oa';
import { auto_forward_comment } from '../IPMSMessageStoreAttributes/auto-forward-comment.oa';
export { auto_forward_comment } from '../IPMSMessageStoreAttributes/auto-forward-comment.oa';
import { auto_forwarded } from '../IPMSMessageStoreAttributes/auto-forwarded.oa';
export { auto_forwarded } from '../IPMSMessageStoreAttributes/auto-forwarded.oa';
import { auto_submitted } from '../IPMSMessageStoreAttributes/auto-submitted.oa';
export { auto_submitted } from '../IPMSMessageStoreAttributes/auto-submitted.oa';
import { bilaterally_defined_body_parts } from '../IPMSMessageStoreAttributes/bilaterally-defined-body-parts.oa';
export { bilaterally_defined_body_parts } from '../IPMSMessageStoreAttributes/bilaterally-defined-body-parts.oa';
import { blind_copy_recipients } from '../IPMSMessageStoreAttributes/blind-copy-recipients.oa';
export { blind_copy_recipients } from '../IPMSMessageStoreAttributes/blind-copy-recipients.oa';
import { body } from '../IPMSMessageStoreAttributes/body.oa';
export { body } from '../IPMSMessageStoreAttributes/body.oa';
import { conversion_eits } from '../IPMSMessageStoreAttributes/conversion-eits.oa';
export { conversion_eits } from '../IPMSMessageStoreAttributes/conversion-eits.oa';
import { copy_recipients } from '../IPMSMessageStoreAttributes/copy-recipients.oa';
export { copy_recipients } from '../IPMSMessageStoreAttributes/copy-recipients.oa';
import { discard_reason } from '../IPMSMessageStoreAttributes/discard-reason.oa';
export { discard_reason } from '../IPMSMessageStoreAttributes/discard-reason.oa';
import { encrypted_body_parts } from '../IPMSMessageStoreAttributes/encrypted-body-parts.oa';
export { encrypted_body_parts } from '../IPMSMessageStoreAttributes/encrypted-body-parts.oa';
import { encrypted_data } from '../IPMSMessageStoreAttributes/encrypted-data.oa';
export { encrypted_data } from '../IPMSMessageStoreAttributes/encrypted-data.oa';
import { encrypted_parameters } from '../IPMSMessageStoreAttributes/encrypted-parameters.oa';
export { encrypted_parameters } from '../IPMSMessageStoreAttributes/encrypted-parameters.oa';
import { expiry_time } from '../IPMSMessageStoreAttributes/expiry-time.oa';
export { expiry_time } from '../IPMSMessageStoreAttributes/expiry-time.oa';
import { extended_body_part_types } from '../IPMSMessageStoreAttributes/extended-body-part-types.oa';
export { extended_body_part_types } from '../IPMSMessageStoreAttributes/extended-body-part-types.oa';
import { g3_facsimile_body_parts } from '../IPMSMessageStoreAttributes/g3-facsimile-body-parts.oa';
export { g3_facsimile_body_parts } from '../IPMSMessageStoreAttributes/g3-facsimile-body-parts.oa';
import { g3_facsimile_data } from '../IPMSMessageStoreAttributes/g3-facsimile-data.oa';
export { g3_facsimile_data } from '../IPMSMessageStoreAttributes/g3-facsimile-data.oa';
import { g3_facsimile_parameters } from '../IPMSMessageStoreAttributes/g3-facsimile-parameters.oa';
export { g3_facsimile_parameters } from '../IPMSMessageStoreAttributes/g3-facsimile-parameters.oa';
import { g4_class1_body_parts } from '../IPMSMessageStoreAttributes/g4-class1-body-parts.oa';
export { g4_class1_body_parts } from '../IPMSMessageStoreAttributes/g4-class1-body-parts.oa';
import { heading } from '../IPMSMessageStoreAttributes/heading.oa';
export { heading } from '../IPMSMessageStoreAttributes/heading.oa';
import { ia5_text_body_parts } from '../IPMSMessageStoreAttributes/ia5-text-body-parts.oa';
export { ia5_text_body_parts } from '../IPMSMessageStoreAttributes/ia5-text-body-parts.oa';
import { ia5_text_data } from '../IPMSMessageStoreAttributes/ia5-text-data.oa';
export { ia5_text_data } from '../IPMSMessageStoreAttributes/ia5-text-data.oa';
import { ia5_text_parameters } from '../IPMSMessageStoreAttributes/ia5-text-parameters.oa';
export { ia5_text_parameters } from '../IPMSMessageStoreAttributes/ia5-text-parameters.oa';
import { importance } from '../IPMSMessageStoreAttributes/importance.oa';
export { importance } from '../IPMSMessageStoreAttributes/importance.oa';
import { incomplete_copy } from '../IPMSMessageStoreAttributes/incomplete-copy.oa';
export { incomplete_copy } from '../IPMSMessageStoreAttributes/incomplete-copy.oa';
import { ipm_entry_type } from '../IPMSMessageStoreAttributes/ipm-entry-type.oa';
export { ipm_entry_type } from '../IPMSMessageStoreAttributes/ipm-entry-type.oa';
import { ipm_intended_recipient } from '../IPMSMessageStoreAttributes/ipm-intended-recipient.oa';
export { ipm_intended_recipient } from '../IPMSMessageStoreAttributes/ipm-intended-recipient.oa';
import { ipm_synopsis } from '../IPMSMessageStoreAttributes/ipm-synopsis.oa';
export { ipm_synopsis } from '../IPMSMessageStoreAttributes/ipm-synopsis.oa';
import { ipn_originator } from '../IPMSMessageStoreAttributes/ipn-originator.oa';
export { ipn_originator } from '../IPMSMessageStoreAttributes/ipn-originator.oa';
import { languages } from '../IPMSMessageStoreAttributes/languages.oa';
export { languages } from '../IPMSMessageStoreAttributes/languages.oa';
import { message_body_parts } from '../IPMSMessageStoreAttributes/message-body-parts.oa';
export { message_body_parts } from '../IPMSMessageStoreAttributes/message-body-parts.oa';
import { message_data } from '../IPMSMessageStoreAttributes/message-data.oa';
export { message_data } from '../IPMSMessageStoreAttributes/message-data.oa';
import { message_parameters } from '../IPMSMessageStoreAttributes/message-parameters.oa';
export { message_parameters } from '../IPMSMessageStoreAttributes/message-parameters.oa';
import { mixed_mode_body_parts } from '../IPMSMessageStoreAttributes/mixed-mode-body-parts.oa';
export { mixed_mode_body_parts } from '../IPMSMessageStoreAttributes/mixed-mode-body-parts.oa';
import { nationally_defined_body_parts } from '../IPMSMessageStoreAttributes/nationally-defined-body-parts.oa';
export { nationally_defined_body_parts } from '../IPMSMessageStoreAttributes/nationally-defined-body-parts.oa';
import { non_receipt_reason } from '../IPMSMessageStoreAttributes/non-receipt-reason.oa';
export { non_receipt_reason } from '../IPMSMessageStoreAttributes/non-receipt-reason.oa';
import { nrn_requestors } from '../IPMSMessageStoreAttributes/nrn-requestors.oa';
export { nrn_requestors } from '../IPMSMessageStoreAttributes/nrn-requestors.oa';
import { obsoleted_IPMs } from '../IPMSMessageStoreAttributes/obsoleted-IPMs.oa';
export { obsoleted_IPMs } from '../IPMSMessageStoreAttributes/obsoleted-IPMs.oa';
import { originator } from '../IPMSMessageStoreAttributes/originator.oa';
export { originator } from '../IPMSMessageStoreAttributes/originator.oa';
import { primary_recipients } from '../IPMSMessageStoreAttributes/primary-recipients.oa';
export { primary_recipients } from '../IPMSMessageStoreAttributes/primary-recipients.oa';
import { receipt_time } from '../IPMSMessageStoreAttributes/receipt-time.oa';
export { receipt_time } from '../IPMSMessageStoreAttributes/receipt-time.oa';
import { related_IPMs } from '../IPMSMessageStoreAttributes/related-IPMs.oa';
export { related_IPMs } from '../IPMSMessageStoreAttributes/related-IPMs.oa';
import { replied_to_IPM } from '../IPMSMessageStoreAttributes/replied-to-IPM.oa';
export { replied_to_IPM } from '../IPMSMessageStoreAttributes/replied-to-IPM.oa';
import { reply_recipients } from '../IPMSMessageStoreAttributes/reply-recipients.oa';
export { reply_recipients } from '../IPMSMessageStoreAttributes/reply-recipients.oa';
import { reply_requestors } from '../IPMSMessageStoreAttributes/reply-requestors.oa';
export { reply_requestors } from '../IPMSMessageStoreAttributes/reply-requestors.oa';
import { reply_time } from '../IPMSMessageStoreAttributes/reply-time.oa';
export { reply_time } from '../IPMSMessageStoreAttributes/reply-time.oa';
import { returned_ipm } from '../IPMSMessageStoreAttributes/returned-ipm.oa';
export { returned_ipm } from '../IPMSMessageStoreAttributes/returned-ipm.oa';
import { rn_requestors } from '../IPMSMessageStoreAttributes/rn-requestors.oa';
export { rn_requestors } from '../IPMSMessageStoreAttributes/rn-requestors.oa';
import { sensitivity } from '../IPMSMessageStoreAttributes/sensitivity.oa';
export { sensitivity } from '../IPMSMessageStoreAttributes/sensitivity.oa';
import { subject } from '../IPMSMessageStoreAttributes/subject.oa';
export { subject } from '../IPMSMessageStoreAttributes/subject.oa';
import { subject_ipm } from '../IPMSMessageStoreAttributes/subject-ipm.oa';
export { subject_ipm } from '../IPMSMessageStoreAttributes/subject-ipm.oa';
import { suppl_receipt_info } from '../IPMSMessageStoreAttributes/suppl-receipt-info.oa';
export { suppl_receipt_info } from '../IPMSMessageStoreAttributes/suppl-receipt-info.oa';
import { teletex_body_parts } from '../IPMSMessageStoreAttributes/teletex-body-parts.oa';
export { teletex_body_parts } from '../IPMSMessageStoreAttributes/teletex-body-parts.oa';
import { teletex_data } from '../IPMSMessageStoreAttributes/teletex-data.oa';
export { teletex_data } from '../IPMSMessageStoreAttributes/teletex-data.oa';
import { teletex_parameters } from '../IPMSMessageStoreAttributes/teletex-parameters.oa';
export { teletex_parameters } from '../IPMSMessageStoreAttributes/teletex-parameters.oa';
import { this_ipm } from '../IPMSMessageStoreAttributes/this-ipm.oa';
export { this_ipm } from '../IPMSMessageStoreAttributes/this-ipm.oa';
import { videotex_body_parts } from '../IPMSMessageStoreAttributes/videotex-body-parts.oa';
export { videotex_body_parts } from '../IPMSMessageStoreAttributes/videotex-body-parts.oa';
import { videotex_data } from '../IPMSMessageStoreAttributes/videotex-data.oa';
export { videotex_data } from '../IPMSMessageStoreAttributes/videotex-data.oa';
import { videotex_parameters } from '../IPMSMessageStoreAttributes/videotex-parameters.oa';
export { videotex_parameters } from '../IPMSMessageStoreAttributes/videotex-parameters.oa';
import { ac_correlated_delivered_ipns } from '../IPMSMessageStoreAttributes/ac-correlated-delivered-ipns.oa';
export { ac_correlated_delivered_ipns } from '../IPMSMessageStoreAttributes/ac-correlated-delivered-ipns.oa';
import { ac_correlated_delivered_replies } from '../IPMSMessageStoreAttributes/ac-correlated-delivered-replies.oa';
export { ac_correlated_delivered_replies } from '../IPMSMessageStoreAttributes/ac-correlated-delivered-replies.oa';
import { ac_delivered_ipn_summary } from '../IPMSMessageStoreAttributes/ac-delivered-ipn-summary.oa';
export { ac_delivered_ipn_summary } from '../IPMSMessageStoreAttributes/ac-delivered-ipn-summary.oa';
import { ac_delivered_replies_summary } from '../IPMSMessageStoreAttributes/ac-delivered-replies-summary.oa';
export { ac_delivered_replies_summary } from '../IPMSMessageStoreAttributes/ac-delivered-replies-summary.oa';
import { ac_forwarded_ipms } from '../IPMSMessageStoreAttributes/ac-forwarded-ipms.oa';
export { ac_forwarded_ipms } from '../IPMSMessageStoreAttributes/ac-forwarded-ipms.oa';
import { ac_forwarding_ipms } from '../IPMSMessageStoreAttributes/ac-forwarding-ipms.oa';
export { ac_forwarding_ipms } from '../IPMSMessageStoreAttributes/ac-forwarding-ipms.oa';
import { ac_ipm_recipients } from '../IPMSMessageStoreAttributes/ac-ipm-recipients.oa';
export { ac_ipm_recipients } from '../IPMSMessageStoreAttributes/ac-ipm-recipients.oa';
import { ac_obsoleted_ipms } from '../IPMSMessageStoreAttributes/ac-obsoleted-ipms.oa';
export { ac_obsoleted_ipms } from '../IPMSMessageStoreAttributes/ac-obsoleted-ipms.oa';
import { ac_obsoleting_ipms } from '../IPMSMessageStoreAttributes/ac-obsoleting-ipms.oa';
export { ac_obsoleting_ipms } from '../IPMSMessageStoreAttributes/ac-obsoleting-ipms.oa';
import { ac_related_ipms } from '../IPMSMessageStoreAttributes/ac-related-ipms.oa';
export { ac_related_ipms } from '../IPMSMessageStoreAttributes/ac-related-ipms.oa';
import { ac_relating_ipms } from '../IPMSMessageStoreAttributes/ac-relating-ipms.oa';
export { ac_relating_ipms } from '../IPMSMessageStoreAttributes/ac-relating-ipms.oa';
import { ac_replied_to_ipm } from '../IPMSMessageStoreAttributes/ac-replied-to-ipm.oa';
export { ac_replied_to_ipm } from '../IPMSMessageStoreAttributes/ac-replied-to-ipm.oa';
import { ac_replying_ipms } from '../IPMSMessageStoreAttributes/ac-replying-ipms.oa';
export { ac_replying_ipms } from '../IPMSMessageStoreAttributes/ac-replying-ipms.oa';
import { ac_subject_ipm } from '../IPMSMessageStoreAttributes/ac-subject-ipm.oa';
export { ac_subject_ipm } from '../IPMSMessageStoreAttributes/ac-subject-ipm.oa';
import { ac_submitted_ipn_status } from '../IPMSMessageStoreAttributes/ac-submitted-ipn-status.oa';
export { ac_submitted_ipn_status } from '../IPMSMessageStoreAttributes/ac-submitted-ipn-status.oa';
import { ac_submitted_ipns } from '../IPMSMessageStoreAttributes/ac-submitted-ipns.oa';
export { ac_submitted_ipns } from '../IPMSMessageStoreAttributes/ac-submitted-ipns.oa';
import { ac_submitted_reply_status } from '../IPMSMessageStoreAttributes/ac-submitted-reply-status.oa';
export { ac_submitted_reply_status } from '../IPMSMessageStoreAttributes/ac-submitted-reply-status.oa';
import { authorization_time } from '../IPMSMessageStoreAttributes/authorization-time.oa';
export { authorization_time } from '../IPMSMessageStoreAttributes/authorization-time.oa';
import { body_part_encryption_token } from '../IPMSMessageStoreAttributes/body-part-encryption-token.oa';
export { body_part_encryption_token } from '../IPMSMessageStoreAttributes/body-part-encryption-token.oa';
import { body_part_security_label } from '../IPMSMessageStoreAttributes/body-part-security-label.oa';
export { body_part_security_label } from '../IPMSMessageStoreAttributes/body-part-security-label.oa';
import { body_part_signature_verification_status } from '../IPMSMessageStoreAttributes/body-part-signature-verification-status.oa';
export { body_part_signature_verification_status } from '../IPMSMessageStoreAttributes/body-part-signature-verification-status.oa';
import { body_part_signatures } from '../IPMSMessageStoreAttributes/body-part-signatures.oa';
export { body_part_signatures } from '../IPMSMessageStoreAttributes/body-part-signatures.oa';
import { body_parts_summary } from '../IPMSMessageStoreAttributes/body-parts-summary.oa';
export { body_parts_summary } from '../IPMSMessageStoreAttributes/body-parts-summary.oa';
import { circulation_list_recipients } from '../IPMSMessageStoreAttributes/circulation-list-recipients.oa';
export { circulation_list_recipients } from '../IPMSMessageStoreAttributes/circulation-list-recipients.oa';
import { distribution_codes } from '../IPMSMessageStoreAttributes/distribution-codes.oa';
export { distribution_codes } from '../IPMSMessageStoreAttributes/distribution-codes.oa';
import { extended_subject } from '../IPMSMessageStoreAttributes/extended-subject.oa';
export { extended_subject } from '../IPMSMessageStoreAttributes/extended-subject.oa';
import { forwarded_content_token } from '../IPMSMessageStoreAttributes/forwarded-content-token.oa';
export { forwarded_content_token } from '../IPMSMessageStoreAttributes/forwarded-content-token.oa';
import { forwarding_token } from '../IPMSMessageStoreAttributes/forwarding-token.oa';
export { forwarding_token } from '../IPMSMessageStoreAttributes/forwarding-token.oa';
import { information_category } from '../IPMSMessageStoreAttributes/information-category.oa';
export { information_category } from '../IPMSMessageStoreAttributes/information-category.oa';
import { ipm_auto_discarded } from '../IPMSMessageStoreAttributes/ipm-auto-discarded.oa';
export { ipm_auto_discarded } from '../IPMSMessageStoreAttributes/ipm-auto-discarded.oa';
import { ipm_security_label } from '../IPMSMessageStoreAttributes/ipm-security-label.oa';
export { ipm_security_label } from '../IPMSMessageStoreAttributes/ipm-security-label.oa';
import { manual_handling_instructions } from '../IPMSMessageStoreAttributes/manual-handling-instructions.oa';
export { manual_handling_instructions } from '../IPMSMessageStoreAttributes/manual-handling-instructions.oa';
import { notification_extensions } from '../IPMSMessageStoreAttributes/notification-extensions.oa';
export { notification_extensions } from '../IPMSMessageStoreAttributes/notification-extensions.oa';
import { nrn_extensions } from '../IPMSMessageStoreAttributes/nrn-extensions.oa';
export { nrn_extensions } from '../IPMSMessageStoreAttributes/nrn-extensions.oa';
import { originators_reference } from '../IPMSMessageStoreAttributes/originators-reference.oa';
export { originators_reference } from '../IPMSMessageStoreAttributes/originators-reference.oa';
import { other_notification_type_fields } from '../IPMSMessageStoreAttributes/other-notification-type-fields.oa';
export { other_notification_type_fields } from '../IPMSMessageStoreAttributes/other-notification-type-fields.oa';
import { precedence } from '../IPMSMessageStoreAttributes/precedence.oa';
export { precedence } from '../IPMSMessageStoreAttributes/precedence.oa';
import { precedence_policy_identifier } from '../IPMSMessageStoreAttributes/precedence-policy-identifier.oa';
export { precedence_policy_identifier } from '../IPMSMessageStoreAttributes/precedence-policy-identifier.oa';
import { recipient_category } from '../IPMSMessageStoreAttributes/recipient-category.oa';
export { recipient_category } from '../IPMSMessageStoreAttributes/recipient-category.oa';
import { revised_reply_time } from '../IPMSMessageStoreAttributes/revised-reply-time.oa';
export { revised_reply_time } from '../IPMSMessageStoreAttributes/revised-reply-time.oa';
import { rn_extensions } from '../IPMSMessageStoreAttributes/rn-extensions.oa';
export { rn_extensions } from '../IPMSMessageStoreAttributes/rn-extensions.oa';

/* START_OF_SYMBOL_DEFINITION IPMSAttributeTable */
/**
 * @summary IPMSAttributeTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMSAttributeTable X413ATTRIBUTE ::= {acknowledgment-mode | authorizing-users | auto-forward-comment |
 *    auto-forwarded | auto-submitted | bilaterally-defined-body-parts |
 *    blind-copy-recipients | body | conversion-eits | copy-recipients |
 *    discard-reason | encrypted-body-parts | encrypted-data |
 *    encrypted-parameters | expiry-time | extended-body-part-types |
 *    g3-facsimile-body-parts | g3-facsimile-data | g3-facsimile-parameters |
 *    g4-class1-body-parts | heading | ia5-text-body-parts | ia5-text-data |
 *    ia5-text-parameters | importance | incomplete-copy | ipm-entry-type |
 *    ipm-intended-recipient | ipm-synopsis | ipn-originator | languages |
 *    message-body-parts | message-data | message-parameters |
 *    mixed-mode-body-parts | nationally-defined-body-parts | non-receipt-reason |
 *    nrn-requestors | obsoleted-IPMs | originator | primary-recipients |
 *    receipt-time | related-IPMs | replied-to-IPM | reply-recipients |
 *    reply-requestors | reply-time | returned-ipm | rn-requestors | sensitivity |
 *    subject | subject-ipm | suppl-receipt-info | teletex-body-parts |
 *    teletex-data | teletex-parameters | this-ipm | videotex-body-parts |
 *    videotex-data | videotex-parameters, ... -- 1994 extension additions --,
 *    ac-correlated-delivered-ipns | ac-correlated-delivered-replies |
 *    ac-delivered-ipn-summary | ac-delivered-replies-summary | ac-forwarded-ipms
 *    | ac-forwarding-ipms | ac-ipm-recipients | ac-obsoleted-ipms |
 *    ac-obsoleting-ipms | ac-related-ipms | ac-relating-ipms | ac-replied-to-ipm
 *    | ac-replying-ipms | ac-subject-ipm | ac-submitted-ipn-status |
 *    ac-submitted-ipns | ac-submitted-reply-status | authorization-time |
 *    body-part-encryption-token | body-part-security-label |
 *    body-part-signature-verification-status | body-part-signatures |
 *    body-parts-summary | circulation-list-recipients | distribution-codes |
 *    extended-subject | forwarded-content-token | forwarding-token |
 *    information-category | ipm-auto-discarded | ipm-security-label |
 *    manual-handling-instructions | notification-extensions | nrn-extensions |
 *    originators-reference | other-notification-type-fields | precedence |
 *    precedence-policy-identifier | recipient-category | revised-reply-time |
 *    rn-extensions}
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE[]}
 *
 */
export const IPMSAttributeTable: X413ATTRIBUTE[] = [
    acknowledgment_mode,
    authorizing_users,
    auto_forward_comment,
    auto_forwarded,
    auto_submitted,
    bilaterally_defined_body_parts,
    blind_copy_recipients,
    body,
    conversion_eits,
    copy_recipients,
    discard_reason,
    encrypted_body_parts,
    encrypted_data,
    encrypted_parameters,
    expiry_time,
    extended_body_part_types,
    g3_facsimile_body_parts,
    g3_facsimile_data,
    g3_facsimile_parameters,
    g4_class1_body_parts,
    heading,
    ia5_text_body_parts,
    ia5_text_data,
    ia5_text_parameters,
    importance,
    incomplete_copy,
    ipm_entry_type,
    ipm_intended_recipient,
    ipm_synopsis,
    ipn_originator,
    languages,
    message_body_parts,
    message_data,
    message_parameters,
    mixed_mode_body_parts,
    nationally_defined_body_parts,
    non_receipt_reason,
    nrn_requestors,
    obsoleted_IPMs,
    originator,
    primary_recipients,
    receipt_time,
    related_IPMs,
    replied_to_IPM,
    reply_recipients,
    reply_requestors,
    reply_time,
    returned_ipm,
    rn_requestors,
    sensitivity,
    subject,
    subject_ipm,
    suppl_receipt_info,
    teletex_body_parts,
    teletex_data,
    teletex_parameters,
    this_ipm,
    videotex_body_parts,
    videotex_data,
    videotex_parameters,
    /* OBJECT_SET_EXTENSION_MARKER */ ac_correlated_delivered_ipns,
    ac_correlated_delivered_replies,
    ac_delivered_ipn_summary,
    ac_delivered_replies_summary,
    ac_forwarded_ipms,
    ac_forwarding_ipms,
    ac_ipm_recipients,
    ac_obsoleted_ipms,
    ac_obsoleting_ipms,
    ac_related_ipms,
    ac_relating_ipms,
    ac_replied_to_ipm,
    ac_replying_ipms,
    ac_subject_ipm,
    ac_submitted_ipn_status,
    ac_submitted_ipns,
    ac_submitted_reply_status,
    authorization_time,
    body_part_encryption_token,
    body_part_security_label,
    body_part_signature_verification_status,
    body_part_signatures,
    body_parts_summary,
    circulation_list_recipients,
    distribution_codes,
    extended_subject,
    forwarded_content_token,
    forwarding_token,
    information_category,
    ipm_auto_discarded,
    ipm_security_label,
    manual_handling_instructions,
    notification_extensions,
    nrn_extensions,
    originators_reference,
    other_notification_type_fields,
    precedence,
    precedence_policy_identifier,
    recipient_category,
    revised_reply_time,
    rn_extensions,
];
/* END_OF_SYMBOL_DEFINITION IPMSAttributeTable */

/* eslint-enable */
