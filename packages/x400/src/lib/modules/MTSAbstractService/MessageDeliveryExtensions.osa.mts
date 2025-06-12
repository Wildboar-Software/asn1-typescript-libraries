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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa.mjs';
export { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa.mjs';
import { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa.mjs';
export { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa.mjs';
import { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa.mjs';
export { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa.mjs';
import { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa.mjs';
export { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa.mjs';
import { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa.mjs';
export { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa.mjs';
import { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa.mjs';
export { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa.mjs';
import { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.mjs';
export { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.mjs';
import { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.mjs';
export { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.mjs';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.mjs';
export { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.mjs';
import { message_token } from '../MTSAbstractService/message-token.oa.mjs';
export { message_token } from '../MTSAbstractService/message-token.oa.mjs';
import { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.mjs';
export { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.mjs';
import { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.mjs';
export { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.mjs';
import { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.mjs';
export { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.mjs';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
export { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
import { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.mjs';
export { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.mjs';
import { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.mjs';
export { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.mjs';
import { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.mjs';
export { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.mjs';
import { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.mjs';
export { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.mjs';
import { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.mjs';
export { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.mjs';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.mjs';
export { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.mjs';
import { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.mjs';
export { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.mjs';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
export { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
import { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.mjs';
export { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.mjs';
import { trace_information } from '../MTAAbstractService/trace-information.oa.mjs';
export { trace_information } from '../MTAAbstractService/trace-information.oa.mjs';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
export { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
import { conversion_with_loss_prohibited } from "./conversion-with-loss-prohibited.oa.mjs";
import { physical_forwarding_prohibited } from "./physical-forwarding-prohibited.oa.mjs";

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
