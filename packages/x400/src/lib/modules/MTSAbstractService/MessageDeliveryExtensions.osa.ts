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
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca';
import { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa';
export { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa';
import { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa';
export { physical_forwarding_address_request } from '../MTSAbstractService/physical-forwarding-address-request.oa';
import { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa';
export { physical_delivery_modes } from '../MTSAbstractService/physical-delivery-modes.oa';
import { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa';
export { registered_mail_type } from '../MTSAbstractService/registered-mail-type.oa';
import { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa';
export { recipient_number_for_advice } from '../MTSAbstractService/recipient-number-for-advice.oa';
import { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa';
export { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa';
import { originator_return_address } from '../MTSAbstractService/originator-return-address.oa';
export { originator_return_address } from '../MTSAbstractService/originator-return-address.oa';
import { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa';
export { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa';
export { originator_certificate } from '../MTSAbstractService/originator-certificate.oa';
import { message_token } from '../MTSAbstractService/message-token.oa';
export { message_token } from '../MTSAbstractService/message-token.oa';
import { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa';
export { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa';
import { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa';
export { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa';
import { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa';
export { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa';
export { message_security_label } from '../MTSAbstractService/message-security-label.oa';
import { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa';
export { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa';
import { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa';
export { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa';
import { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa';
export { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa';
import { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa';
export { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa';
import { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa';
export { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa';
export { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa';
import { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa';
export { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa';
export { redirection_history } from '../MTSAbstractService/redirection-history.oa';
import { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa';
export { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa';
import { trace_information } from '../MTAAbstractService/trace-information.oa';
export { trace_information } from '../MTAAbstractService/trace-information.oa';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa';
export { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';
import { conversion_with_loss_prohibited } from "./conversion-with-loss-prohibited.oa";
import { physical_forwarding_prohibited } from "./physical-forwarding-prohibited.oa";

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
