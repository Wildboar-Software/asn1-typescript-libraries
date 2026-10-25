/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * Defined in ITU-T X.435 (1999) (§8).
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
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect = 32 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incorrect = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incorrect satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid = 33 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_office_incorrect_or_invalid = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_office_incorrect_or_invalid satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete = 34 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete
 * @constant
 * @type {number}
 */
export const undeliverable_mail_physical_delivery_address_incomplete = NNPDAUDiagnosticField_undeliverable_mail_physical_delivery_address_incomplete satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown = 35 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_unknown = NNPDAUDiagnosticField_undeliverable_mail_recipient_unknown satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased = 36 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_deceased = NNPDAUDiagnosticField_undeliverable_mail_recipient_deceased satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_organization_expired = 37 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_organization_expired
 * @constant
 * @type {number}
 */
export const undeliverable_mail_organization_expired = NNPDAUDiagnosticField_undeliverable_mail_organization_expired satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept = 38 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_refused_to_accept = NNPDAUDiagnosticField_undeliverable_mail_recipient_refused_to_accept satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim = 39 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_claim = NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_claim satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently = 40 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_permanently = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_permanently satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily = 41 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_address_temporarily = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_address_temporarily satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address = 42 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_changed_temporary_address = NNPDAUDiagnosticField_undeliverable_mail_recipient_changed_temporary_address satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown = 43 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown
 * @constant
 * @type {number}
 */
export const undeliverable_mail_new_address_unknown = NNPDAUDiagnosticField_undeliverable_mail_new_address_unknown satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding = 44 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_recipient_did_not_want_forwarding = NNPDAUDiagnosticField_undeliverable_mail_recipient_did_not_want_forwarding satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding = 45 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding
 * @constant
 * @type {number}
 */
export const undeliverable_mail_originator_prohibited_forwarding = NNPDAUDiagnosticField_undeliverable_mail_originator_prohibited_forwarding satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const NNPDAUDiagnosticField_physical_rendition_attributes_not_supported = 31 satisfies NNPDAUDiagnosticField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary NNPDAUDiagnosticField_physical_rendition_attributes_not_supported
 * @constant
 * @type {number}
 */
export const physical_rendition_attributes_not_supported = NNPDAUDiagnosticField_physical_rendition_attributes_not_supported satisfies NNPDAUDiagnosticField; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_NNPDAUDiagnosticField = $._decodeInteger;


export const _encode_NNPDAUDiagnosticField = $._encodeInteger;


/* eslint-enable */
