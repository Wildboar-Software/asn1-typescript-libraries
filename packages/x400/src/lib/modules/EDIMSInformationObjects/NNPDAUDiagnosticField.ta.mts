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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary NNPDAUDiagnosticField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NNPDAUDiagnosticField  ::=  INTEGER {
 *   -- This field may be used to further specify the error signalled in
 *   -- nn-pdau-basic-code
 *   -- Additional information may be indicated in the nn-supplementary-information
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
 *   physical-rendition-attributes-not-supported(31)}(1..ub-reason-code)
 * ```
 */
export type NNPDAUDiagnosticField = INTEGER;

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect: NNPDAUDiagnosticField = 32; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incorrect: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid: NNPDAUDiagnosticField = 33; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_office_incorrect_or_invalid: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete: NNPDAUDiagnosticField = 34; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incomplete: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown: NNPDAUDiagnosticField = 35; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_unknown: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased: NNPDAUDiagnosticField = 36; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_deceased: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_organization_expired: NNPDAUDiagnosticField = 37; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const undeliverable_mail_organization_expired: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_organization_expired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept: NNPDAUDiagnosticField = 38; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_refused_to_accept: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim: NNPDAUDiagnosticField = 39; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_claim: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently: NNPDAUDiagnosticField = 40; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_permanently: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily: NNPDAUDiagnosticField = 41; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_temporarily: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address: NNPDAUDiagnosticField = 42; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_temporary_address: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown: NNPDAUDiagnosticField = 43; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_new_address_unknown: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding: NNPDAUDiagnosticField = 44; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_want_forwarding: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding: NNPDAUDiagnosticField = 45; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_originator_prohibited_forwarding: NNPDAUDiagnosticField = NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_physical_rendition_attributes_not_supported: NNPDAUDiagnosticField = 31; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const physical_rendition_attributes_not_supported: NNPDAUDiagnosticField = NNPDAUDiagnosticField_physical_rendition_attributes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NNPDAUDiagnosticField = $._decodeInteger;


export const _encode_NNPDAUDiagnosticField = $._encodeInteger;


/* eslint-enable */
