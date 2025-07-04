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
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { acknowledgment_mode } from '../IPMSMessageStoreAttributes/acknowledgment-mode.oa.mjs';
import { authorizing_users } from '../IPMSMessageStoreAttributes/authorizing-users.oa.mjs';
import { auto_forward_comment } from '../IPMSMessageStoreAttributes/auto-forward-comment.oa.mjs';
import { auto_forwarded } from '../IPMSMessageStoreAttributes/auto-forwarded.oa.mjs';
import { auto_submitted } from '../IPMSMessageStoreAttributes/auto-submitted.oa.mjs';
import { bilaterally_defined_body_parts } from '../IPMSMessageStoreAttributes/bilaterally-defined-body-parts.oa.mjs';
import { blind_copy_recipients } from '../IPMSMessageStoreAttributes/blind-copy-recipients.oa.mjs';
import { body } from '../IPMSMessageStoreAttributes/body.oa.mjs';
import { conversion_eits } from '../IPMSMessageStoreAttributes/conversion-eits.oa.mjs';
import { copy_recipients } from '../IPMSMessageStoreAttributes/copy-recipients.oa.mjs';
import { discard_reason } from '../IPMSMessageStoreAttributes/discard-reason.oa.mjs';
import { encrypted_body_parts } from '../IPMSMessageStoreAttributes/encrypted-body-parts.oa.mjs';
import { encrypted_data } from '../IPMSMessageStoreAttributes/encrypted-data.oa.mjs';
import { encrypted_parameters } from '../IPMSMessageStoreAttributes/encrypted-parameters.oa.mjs';
import { expiry_time } from '../IPMSMessageStoreAttributes/expiry-time.oa.mjs';
import { extended_body_part_types } from '../IPMSMessageStoreAttributes/extended-body-part-types.oa.mjs';
import { g3_facsimile_body_parts } from '../IPMSMessageStoreAttributes/g3-facsimile-body-parts.oa.mjs';
import { g3_facsimile_data } from '../IPMSMessageStoreAttributes/g3-facsimile-data.oa.mjs';
import { g3_facsimile_parameters } from '../IPMSMessageStoreAttributes/g3-facsimile-parameters.oa.mjs';
import { g4_class1_body_parts } from '../IPMSMessageStoreAttributes/g4-class1-body-parts.oa.mjs';
import { heading } from '../IPMSMessageStoreAttributes/heading.oa.mjs';
import { ia5_text_body_parts } from '../IPMSMessageStoreAttributes/ia5-text-body-parts.oa.mjs';
import { ia5_text_data } from '../IPMSMessageStoreAttributes/ia5-text-data.oa.mjs';
import { ia5_text_parameters } from '../IPMSMessageStoreAttributes/ia5-text-parameters.oa.mjs';
import { importance } from '../IPMSMessageStoreAttributes/importance.oa.mjs';
import { incomplete_copy } from '../IPMSMessageStoreAttributes/incomplete-copy.oa.mjs';
import { ipm_entry_type } from '../IPMSMessageStoreAttributes/ipm-entry-type.oa.mjs';
import { ipm_intended_recipient } from '../IPMSMessageStoreAttributes/ipm-intended-recipient.oa.mjs';
import { ipm_synopsis } from '../IPMSMessageStoreAttributes/ipm-synopsis.oa.mjs';
import { ipn_originator } from '../IPMSMessageStoreAttributes/ipn-originator.oa.mjs';
import { languages } from '../IPMSMessageStoreAttributes/languages.oa.mjs';
import { message_body_parts } from '../IPMSMessageStoreAttributes/message-body-parts.oa.mjs';
import { message_data } from '../IPMSMessageStoreAttributes/message-data.oa.mjs';
import { message_parameters } from '../IPMSMessageStoreAttributes/message-parameters.oa.mjs';
import { mixed_mode_body_parts } from '../IPMSMessageStoreAttributes/mixed-mode-body-parts.oa.mjs';
import { nationally_defined_body_parts } from '../IPMSMessageStoreAttributes/nationally-defined-body-parts.oa.mjs';
import { non_receipt_reason } from '../IPMSMessageStoreAttributes/non-receipt-reason.oa.mjs';
import { nrn_requestors } from '../IPMSMessageStoreAttributes/nrn-requestors.oa.mjs';
import { obsoleted_IPMs } from '../IPMSMessageStoreAttributes/obsoleted-IPMs.oa.mjs';
import { originator } from '../IPMSMessageStoreAttributes/originator.oa.mjs';
import { primary_recipients } from '../IPMSMessageStoreAttributes/primary-recipients.oa.mjs';
import { receipt_time } from '../IPMSMessageStoreAttributes/receipt-time.oa.mjs';
import { related_IPMs } from '../IPMSMessageStoreAttributes/related-IPMs.oa.mjs';
import { replied_to_IPM } from '../IPMSMessageStoreAttributes/replied-to-IPM.oa.mjs';
import { reply_recipients } from '../IPMSMessageStoreAttributes/reply-recipients.oa.mjs';
import { reply_requestors } from '../IPMSMessageStoreAttributes/reply-requestors.oa.mjs';
import { reply_time } from '../IPMSMessageStoreAttributes/reply-time.oa.mjs';
import { returned_ipm } from '../IPMSMessageStoreAttributes/returned-ipm.oa.mjs';
import { rn_requestors } from '../IPMSMessageStoreAttributes/rn-requestors.oa.mjs';
import { sensitivity } from '../IPMSMessageStoreAttributes/sensitivity.oa.mjs';
import { subject } from '../IPMSMessageStoreAttributes/subject.oa.mjs';
import { subject_ipm } from '../IPMSMessageStoreAttributes/subject-ipm.oa.mjs';
import { suppl_receipt_info } from '../IPMSMessageStoreAttributes/suppl-receipt-info.oa.mjs';
import { teletex_body_parts } from '../IPMSMessageStoreAttributes/teletex-body-parts.oa.mjs';
import { teletex_data } from '../IPMSMessageStoreAttributes/teletex-data.oa.mjs';
import { teletex_parameters } from '../IPMSMessageStoreAttributes/teletex-parameters.oa.mjs';
import { this_ipm } from '../IPMSMessageStoreAttributes/this-ipm.oa.mjs';
import { videotex_body_parts } from '../IPMSMessageStoreAttributes/videotex-body-parts.oa.mjs';
import { videotex_data } from '../IPMSMessageStoreAttributes/videotex-data.oa.mjs';
import { videotex_parameters } from '../IPMSMessageStoreAttributes/videotex-parameters.oa.mjs';
import { ac_correlated_delivered_ipns } from '../IPMSMessageStoreAttributes/ac-correlated-delivered-ipns.oa.mjs';
import { ac_correlated_delivered_replies } from '../IPMSMessageStoreAttributes/ac-correlated-delivered-replies.oa.mjs';
import { ac_delivered_ipn_summary } from '../IPMSMessageStoreAttributes/ac-delivered-ipn-summary.oa.mjs';
import { ac_delivered_replies_summary } from '../IPMSMessageStoreAttributes/ac-delivered-replies-summary.oa.mjs';
import { ac_forwarded_ipms } from '../IPMSMessageStoreAttributes/ac-forwarded-ipms.oa.mjs';
import { ac_forwarding_ipms } from '../IPMSMessageStoreAttributes/ac-forwarding-ipms.oa.mjs';
import { ac_ipm_recipients } from '../IPMSMessageStoreAttributes/ac-ipm-recipients.oa.mjs';
import { ac_obsoleted_ipms } from '../IPMSMessageStoreAttributes/ac-obsoleted-ipms.oa.mjs';
import { ac_obsoleting_ipms } from '../IPMSMessageStoreAttributes/ac-obsoleting-ipms.oa.mjs';
import { ac_related_ipms } from '../IPMSMessageStoreAttributes/ac-related-ipms.oa.mjs';
import { ac_relating_ipms } from '../IPMSMessageStoreAttributes/ac-relating-ipms.oa.mjs';
import { ac_replied_to_ipm } from '../IPMSMessageStoreAttributes/ac-replied-to-ipm.oa.mjs';
import { ac_replying_ipms } from '../IPMSMessageStoreAttributes/ac-replying-ipms.oa.mjs';
import { ac_subject_ipm } from '../IPMSMessageStoreAttributes/ac-subject-ipm.oa.mjs';
import { ac_submitted_ipn_status } from '../IPMSMessageStoreAttributes/ac-submitted-ipn-status.oa.mjs';
import { ac_submitted_ipns } from '../IPMSMessageStoreAttributes/ac-submitted-ipns.oa.mjs';
import { ac_submitted_reply_status } from '../IPMSMessageStoreAttributes/ac-submitted-reply-status.oa.mjs';
import { authorization_time } from '../IPMSMessageStoreAttributes/authorization-time.oa.mjs';
import { body_part_encryption_token } from '../IPMSMessageStoreAttributes/body-part-encryption-token.oa.mjs';
import { body_part_security_label } from '../IPMSMessageStoreAttributes/body-part-security-label.oa.mjs';
import { body_part_signature_verification_status } from '../IPMSMessageStoreAttributes/body-part-signature-verification-status.oa.mjs';
import { body_part_signatures } from '../IPMSMessageStoreAttributes/body-part-signatures.oa.mjs';
import { body_parts_summary } from '../IPMSMessageStoreAttributes/body-parts-summary.oa.mjs';
import { circulation_list_recipients } from '../IPMSMessageStoreAttributes/circulation-list-recipients.oa.mjs';
import { distribution_codes } from '../IPMSMessageStoreAttributes/distribution-codes.oa.mjs';
import { extended_subject } from '../IPMSMessageStoreAttributes/extended-subject.oa.mjs';
import { forwarded_content_token } from '../IPMSMessageStoreAttributes/forwarded-content-token.oa.mjs';
import { forwarding_token } from '../IPMSMessageStoreAttributes/forwarding-token.oa.mjs';
import { information_category } from '../IPMSMessageStoreAttributes/information-category.oa.mjs';
import { ipm_auto_discarded } from '../IPMSMessageStoreAttributes/ipm-auto-discarded.oa.mjs';
import { ipm_security_label } from '../IPMSMessageStoreAttributes/ipm-security-label.oa.mjs';
import { manual_handling_instructions } from '../IPMSMessageStoreAttributes/manual-handling-instructions.oa.mjs';
import { notification_extensions } from '../IPMSMessageStoreAttributes/notification-extensions.oa.mjs';
import { nrn_extensions } from '../IPMSMessageStoreAttributes/nrn-extensions.oa.mjs';
import { originators_reference } from '../IPMSMessageStoreAttributes/originators-reference.oa.mjs';
import { other_notification_type_fields } from '../IPMSMessageStoreAttributes/other-notification-type-fields.oa.mjs';
import { precedence } from '../IPMSMessageStoreAttributes/precedence.oa.mjs';
import { precedence_policy_identifier } from '../IPMSMessageStoreAttributes/precedence-policy-identifier.oa.mjs';
import { recipient_category } from '../IPMSMessageStoreAttributes/recipient-category.oa.mjs';
import { revised_reply_time } from '../IPMSMessageStoreAttributes/revised-reply-time.oa.mjs';
import { rn_extensions } from '../IPMSMessageStoreAttributes/rn-extensions.oa.mjs';
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

/* eslint-enable */
