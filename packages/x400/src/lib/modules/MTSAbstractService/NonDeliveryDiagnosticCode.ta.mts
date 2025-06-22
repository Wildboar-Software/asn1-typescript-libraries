/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary NonDeliveryDiagnosticCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonDeliveryDiagnosticCode  ::=  INTEGER {
 *   unrecognised-OR-name(0), ambiguous-OR-name(1), mts-congestion(2),
 *   loop-detected(3), recipient-unavailable(4), maximum-time-expired(5),
 *   encoded-information-types-unsupported(6), content-too-long(7),
 *   conversion-impractical(8), implicit-conversion-prohibited(9),
 *   implicit-conversion-not-subscribed(10), invalid-arguments(11),
 *   content-syntax-error(12), size-constraint-violation(13),
 *   protocol-violation(14), content-type-not-supported(15),
 *   too-many-recipients(16), no-bilateral-agreement(17),
 *   unsupported-critical-function(18), conversion-with-loss-prohibited(19),
 *   line-too-long(20), page-split(21), pictorial-symbol-loss(22),
 *   punctuation-symbol-loss(23), alphabetic-character-loss(24),
 *   multiple-information-loss(25), recipient-reassignment-prohibited(26),
 *   redirection-loop-detected(27), dl-expansion-prohibited(28),
 *   no-dl-submit-permission(29), dl-expansion-failure(30),
 *   physical-rendition-attributes-not-supported(31),
 *   undeliverable-mail-physical-delivery-address-incorrect(32),
 *   undeliverable-mail-physical-delivery-office-incorrect-or-invalid(33),
 *   undeliverable-mail-physical-delivery-address-incomplete(34),
 *   undeliverable-mail-recipient-unknown(35),
 *   undeliverable-mail-recipient-deceased(36),
 *   undeliverable-mail-organization-expired(37),
 *   undeliverable-mail-recipient-refused-to-accept(38),
 *   undeliverable-mail-recipient-did-not-claim(39),
 *   undeliverable-mail-recipient-changed-address-permanently(40),
 *   undeliverable-mail-recipient-changed-address-temporarily(41),
 *   undeliverable-mail-recipient-changed-temporary-address(42),
 *   undeliverable-mail-new-address-unknown(43),
 *   undeliverable-mail-recipient-did-not-want-forwarding(44),
 *   undeliverable-mail-originator-prohibited-forwarding(45),
 *   secure-messaging-error(46), unable-to-downgrade(47),
 *   unable-to-complete-transfer(48), transfer-attempts-limit-reached(49),
 *   incorrect-notification-type(50),
 *   dl-expansion-prohibited-by-security-policy(51),
 *   forbidden-alternate-recipient(52), security-policy-violation(53),
 *   security-services-refusal(54), unauthorised-dl-member(55),
 *   unauthorised-dl-name(56),
 *   unauthorised-originally-intended-recipient-name(57),
 *   unauthorised-originator-name(58), unauthorised-recipient-name(59),
 *   unreliable-system(60), authentication-failure-on-subject-message(61),
 *   decryption-failed(62), decryption-key-unobtainable(63),
 *   double-envelope-creation-failure(64),
 *   double-enveloping-message-restoring-failure(65),
 *   failure-of-proof-of-message(66), integrity-failure-on-subject-message(67),
 *   invalid-security-label(68), key-failure(69), mandatory-parameter-absence(70),
 *   operation-security-failure(71), repudiation-failure-of-message(72),
 *   security-context-failure(73), token-decryption-failed(74), token-error(75),
 *   unknown-security-label(76), unsupported-algorithm-identifier(77),
 *   unsupported-security-policy(78)}(0..ub-diagnostic-codes)
 * ```
 */
export type NonDeliveryDiagnosticCode = INTEGER;

/**
 * @summary NonDeliveryDiagnosticCode_unrecognised_OR_name
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unrecognised_OR_name: NonDeliveryDiagnosticCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unrecognised_OR_name
 * @constant
 * @type {number}
 */
export const unrecognised_OR_name: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unrecognised_OR_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_ambiguous_OR_name
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_ambiguous_OR_name: NonDeliveryDiagnosticCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_ambiguous_OR_name
 * @constant
 * @type {number}
 */
export const ambiguous_OR_name: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_ambiguous_OR_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_mts_congestion
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_mts_congestion: NonDeliveryDiagnosticCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_mts_congestion
 * @constant
 * @type {number}
 */
export const mts_congestion: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_mts_congestion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_loop_detected
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_loop_detected: NonDeliveryDiagnosticCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_loop_detected
 * @constant
 * @type {number}
 */
export const loop_detected: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_loop_detected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_recipient_unavailable
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_recipient_unavailable: NonDeliveryDiagnosticCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_recipient_unavailable
 * @constant
 * @type {number}
 */
export const recipient_unavailable: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_recipient_unavailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_maximum_time_expired
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_maximum_time_expired: NonDeliveryDiagnosticCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_maximum_time_expired
 * @constant
 * @type {number}
 */
export const maximum_time_expired: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_maximum_time_expired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_encoded_information_types_unsupported
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_encoded_information_types_unsupported: NonDeliveryDiagnosticCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_encoded_information_types_unsupported
 * @constant
 * @type {number}
 */
export const encoded_information_types_unsupported: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_encoded_information_types_unsupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_content_too_long
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_content_too_long: NonDeliveryDiagnosticCode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_content_too_long
 * @constant
 * @type {number}
 */
export const content_too_long: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_content_too_long; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_conversion_impractical
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_conversion_impractical: NonDeliveryDiagnosticCode = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_conversion_impractical
 * @constant
 * @type {number}
 */
export const conversion_impractical: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_conversion_impractical; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_implicit_conversion_prohibited
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_implicit_conversion_prohibited: NonDeliveryDiagnosticCode = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_implicit_conversion_prohibited
 * @constant
 * @type {number}
 */
export const implicit_conversion_prohibited: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_implicit_conversion_prohibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_implicit_conversion_not_subscribed
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_implicit_conversion_not_subscribed: NonDeliveryDiagnosticCode = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_implicit_conversion_not_subscribed
 * @constant
 * @type {number}
 */
export const implicit_conversion_not_subscribed: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_implicit_conversion_not_subscribed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_invalid_arguments
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_invalid_arguments: NonDeliveryDiagnosticCode = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_invalid_arguments
 * @constant
 * @type {number}
 */
export const invalid_arguments: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_invalid_arguments; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_content_syntax_error
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_content_syntax_error: NonDeliveryDiagnosticCode = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_content_syntax_error
 * @constant
 * @type {number}
 */
export const content_syntax_error: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_content_syntax_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_size_constraint_violation
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_size_constraint_violation: NonDeliveryDiagnosticCode = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_size_constraint_violation
 * @constant
 * @type {number}
 */
export const size_constraint_violation: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_size_constraint_violation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_protocol_violation
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_protocol_violation: NonDeliveryDiagnosticCode = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_protocol_violation
 * @constant
 * @type {number}
 */
export const protocol_violation: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_protocol_violation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_content_type_not_supported
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_content_type_not_supported: NonDeliveryDiagnosticCode = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_content_type_not_supported
 * @constant
 * @type {number}
 */
export const content_type_not_supported: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_content_type_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_too_many_recipients
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_too_many_recipients: NonDeliveryDiagnosticCode = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_too_many_recipients
 * @constant
 * @type {number}
 */
export const too_many_recipients: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_too_many_recipients; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_no_bilateral_agreement: NonDeliveryDiagnosticCode = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_no_bilateral_agreement
 * @constant
 * @type {number}
 */
export const no_bilateral_agreement: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_no_bilateral_agreement; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unsupported_critical_function: NonDeliveryDiagnosticCode = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unsupported_critical_function
 * @constant
 * @type {number}
 */
export const unsupported_critical_function: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unsupported_critical_function; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_conversion_with_loss_prohibited: NonDeliveryDiagnosticCode = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const conversion_with_loss_prohibited: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_conversion_with_loss_prohibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_line_too_long
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_line_too_long: NonDeliveryDiagnosticCode = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_line_too_long
 * @constant
 * @type {number}
 */
export const line_too_long: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_line_too_long; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_page_split
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_page_split: NonDeliveryDiagnosticCode = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_page_split
 * @constant
 * @type {number}
 */
export const page_split: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_page_split; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_pictorial_symbol_loss
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_pictorial_symbol_loss: NonDeliveryDiagnosticCode = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_pictorial_symbol_loss
 * @constant
 * @type {number}
 */
export const pictorial_symbol_loss: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_pictorial_symbol_loss; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_punctuation_symbol_loss
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_punctuation_symbol_loss: NonDeliveryDiagnosticCode = 23; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_punctuation_symbol_loss
 * @constant
 * @type {number}
 */
export const punctuation_symbol_loss: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_punctuation_symbol_loss; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_alphabetic_character_loss
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_alphabetic_character_loss: NonDeliveryDiagnosticCode = 24; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_alphabetic_character_loss
 * @constant
 * @type {number}
 */
export const alphabetic_character_loss: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_alphabetic_character_loss; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_multiple_information_loss
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_multiple_information_loss: NonDeliveryDiagnosticCode = 25; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_multiple_information_loss
 * @constant
 * @type {number}
 */
export const multiple_information_loss: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_multiple_information_loss; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_recipient_reassignment_prohibited
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_recipient_reassignment_prohibited: NonDeliveryDiagnosticCode = 26; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_recipient_reassignment_prohibited
 * @constant
 * @type {number}
 */
export const recipient_reassignment_prohibited: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_recipient_reassignment_prohibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_redirection_loop_detected
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_redirection_loop_detected: NonDeliveryDiagnosticCode = 27; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_redirection_loop_detected
 * @constant
 * @type {number}
 */
export const redirection_loop_detected: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_redirection_loop_detected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_dl_expansion_prohibited: NonDeliveryDiagnosticCode = 28; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_dl_expansion_prohibited
 * @constant
 * @type {number}
 */
export const dl_expansion_prohibited: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_dl_expansion_prohibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_no_dl_submit_permission
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_no_dl_submit_permission: NonDeliveryDiagnosticCode = 29; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_no_dl_submit_permission
 * @constant
 * @type {number}
 */
export const no_dl_submit_permission: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_no_dl_submit_permission; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_dl_expansion_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_dl_expansion_failure: NonDeliveryDiagnosticCode = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_dl_expansion_failure
 * @constant
 * @type {number}
 */
export const dl_expansion_failure: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_dl_expansion_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_physical_rendition_attributes_not_supported: NonDeliveryDiagnosticCode = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const physical_rendition_attributes_not_supported: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_physical_rendition_attributes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incorrect
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incorrect: NonDeliveryDiagnosticCode = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incorrect
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incorrect: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incorrect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_office_incorrect_or_invalid: NonDeliveryDiagnosticCode = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_office_incorrect_or_invalid: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_office_incorrect_or_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incomplete: NonDeliveryDiagnosticCode = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incomplete: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_physical_delivery_address_incomplete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_unknown: NonDeliveryDiagnosticCode = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_unknown: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_deceased: NonDeliveryDiagnosticCode = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_deceased: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_deceased; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_organization_expired: NonDeliveryDiagnosticCode = 37; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const undeliverable_mail_organization_expired: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_organization_expired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_refused_to_accept: NonDeliveryDiagnosticCode = 38; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_refused_to_accept: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_refused_to_accept; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_claim: NonDeliveryDiagnosticCode = 39; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_claim: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_claim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_permanently: NonDeliveryDiagnosticCode = 40; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_permanently: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_permanently; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_temporarily: NonDeliveryDiagnosticCode = 41; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_temporarily: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_address_temporarily; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_temporary_address: NonDeliveryDiagnosticCode = 42; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_temporary_address: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_changed_temporary_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_new_address_unknown: NonDeliveryDiagnosticCode = 43; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_new_address_unknown: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_new_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_want_forwarding: NonDeliveryDiagnosticCode = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_want_forwarding: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_recipient_did_not_want_forwarding; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_undeliverable_mail_originator_prohibited_forwarding: NonDeliveryDiagnosticCode = 45; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_originator_prohibited_forwarding: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_undeliverable_mail_originator_prohibited_forwarding; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_secure_messaging_error
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_secure_messaging_error: NonDeliveryDiagnosticCode = 46; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_secure_messaging_error
 * @constant
 * @type {number}
 */
export const secure_messaging_error: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_secure_messaging_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unable_to_downgrade
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unable_to_downgrade: NonDeliveryDiagnosticCode = 47; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unable_to_downgrade
 * @constant
 * @type {number}
 */
export const unable_to_downgrade: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unable_to_downgrade; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unable_to_complete_transfer
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unable_to_complete_transfer: NonDeliveryDiagnosticCode = 48; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unable_to_complete_transfer
 * @constant
 * @type {number}
 */
export const unable_to_complete_transfer: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unable_to_complete_transfer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_transfer_attempts_limit_reached
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_transfer_attempts_limit_reached: NonDeliveryDiagnosticCode = 49; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_transfer_attempts_limit_reached
 * @constant
 * @type {number}
 */
export const transfer_attempts_limit_reached: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_transfer_attempts_limit_reached; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_incorrect_notification_type
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_incorrect_notification_type: NonDeliveryDiagnosticCode = 50; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_incorrect_notification_type
 * @constant
 * @type {number}
 */
export const incorrect_notification_type: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_incorrect_notification_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_dl_expansion_prohibited_by_security_policy
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_dl_expansion_prohibited_by_security_policy: NonDeliveryDiagnosticCode = 51; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_dl_expansion_prohibited_by_security_policy
 * @constant
 * @type {number}
 */
export const dl_expansion_prohibited_by_security_policy: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_dl_expansion_prohibited_by_security_policy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_forbidden_alternate_recipient
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_forbidden_alternate_recipient: NonDeliveryDiagnosticCode = 52; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_forbidden_alternate_recipient
 * @constant
 * @type {number}
 */
export const forbidden_alternate_recipient: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_forbidden_alternate_recipient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_security_policy_violation
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_security_policy_violation: NonDeliveryDiagnosticCode = 53; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_security_policy_violation
 * @constant
 * @type {number}
 */
export const security_policy_violation: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_security_policy_violation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_security_services_refusal
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_security_services_refusal: NonDeliveryDiagnosticCode = 54; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_security_services_refusal
 * @constant
 * @type {number}
 */
export const security_services_refusal: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_security_services_refusal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_dl_member
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unauthorised_dl_member: NonDeliveryDiagnosticCode = 55; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_dl_member
 * @constant
 * @type {number}
 */
export const unauthorised_dl_member: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unauthorised_dl_member; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unauthorised_dl_name: NonDeliveryDiagnosticCode = 56; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_dl_name
 * @constant
 * @type {number}
 */
export const unauthorised_dl_name: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unauthorised_dl_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unauthorised_originally_intended_recipient_name: NonDeliveryDiagnosticCode = 57; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_originally_intended_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_originally_intended_recipient_name: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unauthorised_originally_intended_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unauthorised_originator_name: NonDeliveryDiagnosticCode = 58; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_originator_name
 * @constant
 * @type {number}
 */
export const unauthorised_originator_name: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unauthorised_originator_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unauthorised_recipient_name: NonDeliveryDiagnosticCode = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unauthorised_recipient_name
 * @constant
 * @type {number}
 */
export const unauthorised_recipient_name: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unauthorised_recipient_name; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unreliable_system
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unreliable_system: NonDeliveryDiagnosticCode = 60; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unreliable_system
 * @constant
 * @type {number}
 */
export const unreliable_system: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unreliable_system; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_authentication_failure_on_subject_message: NonDeliveryDiagnosticCode = 61; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_authentication_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const authentication_failure_on_subject_message: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_authentication_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_decryption_failed
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_decryption_failed: NonDeliveryDiagnosticCode = 62; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_decryption_failed
 * @constant
 * @type {number}
 */
export const decryption_failed: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_decryption_key_unobtainable: NonDeliveryDiagnosticCode = 63; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_decryption_key_unobtainable
 * @constant
 * @type {number}
 */
export const decryption_key_unobtainable: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_decryption_key_unobtainable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_double_envelope_creation_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_double_envelope_creation_failure: NonDeliveryDiagnosticCode = 64; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_double_envelope_creation_failure
 * @constant
 * @type {number}
 */
export const double_envelope_creation_failure: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_double_envelope_creation_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_double_enveloping_message_restoring_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_double_enveloping_message_restoring_failure: NonDeliveryDiagnosticCode = 65; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_double_enveloping_message_restoring_failure
 * @constant
 * @type {number}
 */
export const double_enveloping_message_restoring_failure: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_double_enveloping_message_restoring_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_failure_of_proof_of_message: NonDeliveryDiagnosticCode = 66; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_failure_of_proof_of_message
 * @constant
 * @type {number}
 */
export const failure_of_proof_of_message: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_failure_of_proof_of_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_integrity_failure_on_subject_message: NonDeliveryDiagnosticCode = 67; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_integrity_failure_on_subject_message
 * @constant
 * @type {number}
 */
export const integrity_failure_on_subject_message: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_integrity_failure_on_subject_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_invalid_security_label
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_invalid_security_label: NonDeliveryDiagnosticCode = 68; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_invalid_security_label
 * @constant
 * @type {number}
 */
export const invalid_security_label: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_invalid_security_label; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_key_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_key_failure: NonDeliveryDiagnosticCode = 69; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_key_failure
 * @constant
 * @type {number}
 */
export const key_failure: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_key_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_mandatory_parameter_absence: NonDeliveryDiagnosticCode = 70; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_mandatory_parameter_absence
 * @constant
 * @type {number}
 */
export const mandatory_parameter_absence: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_mandatory_parameter_absence; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_operation_security_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_operation_security_failure: NonDeliveryDiagnosticCode = 71; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_operation_security_failure
 * @constant
 * @type {number}
 */
export const operation_security_failure: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_operation_security_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_repudiation_failure_of_message: NonDeliveryDiagnosticCode = 72; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_repudiation_failure_of_message
 * @constant
 * @type {number}
 */
export const repudiation_failure_of_message: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_repudiation_failure_of_message; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_security_context_failure
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_security_context_failure: NonDeliveryDiagnosticCode = 73; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_security_context_failure
 * @constant
 * @type {number}
 */
export const security_context_failure: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_security_context_failure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_token_decryption_failed
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_token_decryption_failed: NonDeliveryDiagnosticCode = 74; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_token_decryption_failed
 * @constant
 * @type {number}
 */
export const token_decryption_failed: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_token_decryption_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_token_error
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_token_error: NonDeliveryDiagnosticCode = 75; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_token_error
 * @constant
 * @type {number}
 */
export const token_error: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_token_error; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unknown_security_label
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unknown_security_label: NonDeliveryDiagnosticCode = 76; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unknown_security_label
 * @constant
 * @type {number}
 */
export const unknown_security_label: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unknown_security_label; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unsupported_algorithm_identifier: NonDeliveryDiagnosticCode = 77; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unsupported_algorithm_identifier
 * @constant
 * @type {number}
 */
export const unsupported_algorithm_identifier: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unsupported_algorithm_identifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const NonDeliveryDiagnosticCode_unsupported_security_policy: NonDeliveryDiagnosticCode = 78; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NonDeliveryDiagnosticCode_unsupported_security_policy
 * @constant
 * @type {number}
 */
export const unsupported_security_policy: NonDeliveryDiagnosticCode = NonDeliveryDiagnosticCode_unsupported_security_policy; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NonDeliveryDiagnosticCode = $._decodeInteger;


export const _encode_NonDeliveryDiagnosticCode = $._encodeInteger;


/* eslint-enable */
