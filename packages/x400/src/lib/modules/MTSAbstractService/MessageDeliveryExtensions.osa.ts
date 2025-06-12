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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';
import { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa.js';
export { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa.js';
import { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa.js';
export { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa.js';
import { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa.js';
export { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa.js';
import { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa.js';
export { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa.js';
import { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa.js';
export { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa.js';
import { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa.js';
export { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa.js';
import { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.js';
export { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.js';
import { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.js';
export { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.js';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.js';
export { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.js';
import { message_token } from '../MTSAbstractService/message-token.oa.js';
export { message_token } from '../MTSAbstractService/message-token.oa.js';
import { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.js';
export { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.js';
import { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.js';
export { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.js';
import { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.js';
export { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.js';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.js';
export { message_security_label } from '../MTSAbstractService/message-security-label.oa.js';
import { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.js';
export { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.js';
import { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.js';
export { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.js';
import { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.js';
export { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.js';
import { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.js';
export { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.js';
import { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.js';
export { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.js';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.js';
export { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.js';
import { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.js';
export { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.js';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.js';
export { redirection_history } from '../MTSAbstractService/redirection-history.oa.js';
import { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.js';
export { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.js';
import { trace_information } from '../MTAAbstractService/trace-information.oa.js';
export { trace_information } from '../MTAAbstractService/trace-information.oa.js';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.js';
export { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.js';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';
import { conversion_with_loss_prohibited } from "./conversion-with-loss-prohibited.oa.js";
import { physical_forwarding_prohibited } from "./physical-forwarding-prohibited.oa.js";

/* START_OF_SYMBOL_DEFINITION MessageDeliveryExtensions */
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
/* END_OF_SYMBOL_DEFINITION MessageDeliveryExtensions */

/* eslint-enable */
