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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa.mjs';
import { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa.mjs';
import { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa.mjs';
import { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa.mjs';
import { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa.mjs';
import { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa.mjs';
import { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.mjs';
import { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.mjs';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.mjs';
import { message_token } from '../MTSAbstractService/message-token.oa.mjs';
import { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.mjs';
import { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.mjs';
import { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.mjs';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
import { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.mjs';
import { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.mjs';
import { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.mjs';
import { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.mjs';
import { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.mjs';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.mjs';
import { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.mjs';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
import { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.mjs';
import { trace_information } from '../MTAAbstractService/trace-information.oa.mjs';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
import { conversion_with_loss_prohibited } from "./conversion-with-loss-prohibited.oa.mjs";
import { physical_forwarding_prohibited } from "./physical-forwarding-prohibited.oa.mjs";

/**
 * @summary MessageDeliveryExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    conversion-with-loss-prohibited | requested-delivery-method |
 *    physical-forwarding-prohibited | physical-forwarding-address-request |
 *    physical-delivery-modes | registered-mail-type | recipient-number-for-advice
 *    | physical-rendition-attributes | originator-return-address |
 *    physical-delivery-report-request | originator-certificate | message-token |
 *    content-confidentiality-algorithm-identifier | content-integrity-check |
 *    message-origin-authentication-check | message-security-label |
 *    proof-of-delivery-request | dl-exempted-recipients | certificate-selectors |
 *    certificate-selectors-override | multiple-originator-certificates |
 *    recipient-certificate | IPMPerRecipientEnvelopeExtensions |
 *    redirection-history | dl-expansion-history | trace-information |
 *    internal-trace-information | PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const MessageDeliveryExtensions: EXTENSION[] = [
    conversion_with_loss_prohibited,
    requested_delivery_method,
    physical_forwarding_prohibited,
    physical_forwarding_address_request,
    physical_delivery_modes,
    registered_mail_type,
    recipient_number_for_advice,
    physical_rendition_attributes,
    originator_return_address,
    physical_delivery_report_request,
    originator_certificate,
    message_token,
    content_confidentiality_algorithm_identifier,
    content_integrity_check,
    message_origin_authentication_check,
    message_security_label,
    proof_of_delivery_request,
    dl_exempted_recipients,
    certificate_selectors,
    certificate_selectors_override,
    multiple_originator_certificates,
    recipient_certificate,
    ...IPMPerRecipientEnvelopeExtensions,
    redirection_history,
    dl_expansion_history,
    trace_information,
    internal_trace_information,
    ...PrivateExtensions,
];

/* eslint-enable */
