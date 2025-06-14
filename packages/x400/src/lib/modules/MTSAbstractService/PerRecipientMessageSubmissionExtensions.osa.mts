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
} from 'asn1-ts';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa.mjs';
import { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa.mjs';
import { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa.mjs';
import { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa.mjs';
import { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa.mjs';
import { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa.mjs';
import { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.mjs';
import { message_token } from '../MTSAbstractService/message-token.oa.mjs';
import { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.mjs';
import { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.mjs';
import { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.mjs';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.mjs';
import { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
import { originator_requested_alternate_recipient } from "../MTSAbstractService/originator-requested-alternate-recipient.oa.mjs";
import { physical_forwarding_prohibited } from "../MTSAbstractService/physical-forwarding-prohibited.oa.mjs";

/* START_OF_SYMBOL_DEFINITION PerRecipientMessageSubmissionExtensions */
/**
 * @summary PerRecipientMessageSubmissionExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientMessageSubmissionExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    originator-requested-alternate-recipient | requested-delivery-method |
 *    physical-forwarding-prohibited | physical-forwarding-address-request |
 *    physical-delivery-modes | registered-mail-type | recipient-number-for-advice
 *    | physical-rendition-attributes | physical-delivery-report-request |
 *    message-token | content-integrity-check | proof-of-delivery-request |
 *    certificate-selectors-override | recipient-certificate |
 *    IPMPerRecipientEnvelopeExtensions | PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const PerRecipientMessageSubmissionExtensions: EXTENSION[] = [
    originator_requested_alternate_recipient,
    requested_delivery_method,
    physical_forwarding_prohibited,
    physical_forwarding_address_request,
    physical_delivery_modes,
    registered_mail_type,
    recipient_number_for_advice,
    physical_rendition_attributes,
    physical_delivery_report_request,
    message_token,
    content_integrity_check,
    proof_of_delivery_request,
    certificate_selectors_override,
    recipient_certificate,
    ...IPMPerRecipientEnvelopeExtensions,
    ...PrivateExtensions,
];
/* END_OF_SYMBOL_DEFINITION PerRecipientMessageSubmissionExtensions */

/* eslint-enable */
