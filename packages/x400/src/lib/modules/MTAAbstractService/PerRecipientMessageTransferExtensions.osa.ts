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
import { originator_requested_alternate_recipient } from '../MTAAbstractService/originator-requested-alternate-recipient.oa';
export { originator_requested_alternate_recipient } from '../MTAAbstractService/originator-requested-alternate-recipient.oa';
import { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa';
export { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa';
import { physical_forwarding_prohibited } from '../MTSAbstractService/physical-forwarding-prohibited.oa';
export { physical_forwarding_prohibited } from '../MTSAbstractService/physical-forwarding-prohibited.oa';
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
import { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa';
export { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa';
import { message_token } from '../MTSAbstractService/message-token.oa';
export { message_token } from '../MTSAbstractService/message-token.oa';
import { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa';
export { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa';
import { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa';
export { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa';
import { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa';
export { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa';
export { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa';
export { redirection_history } from '../MTSAbstractService/redirection-history.oa';
import { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa';
export { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';

/* START_OF_SYMBOL_DEFINITION PerRecipientMessageTransferExtensions */
/**
 * @summary PerRecipientMessageTransferExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientMessageTransferExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    originator-requested-alternate-recipient | requested-delivery-method |
 *    physical-forwarding-prohibited | physical-forwarding-address-request |
 *    physical-delivery-modes | registered-mail-type | recipient-number-for-advice
 *    | physical-rendition-attributes | physical-delivery-report-request |
 *    message-token | content-integrity-check | proof-of-delivery-request |
 *    certificate-selectors-override | recipient-certificate | redirection-history
 *    | IPMPerRecipientEnvelopeExtensions | PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const PerRecipientMessageTransferExtensions: EXTENSION[] = [
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
    redirection_history,
    ...IPMPerRecipientEnvelopeExtensions,
    ...PrivateExtensions,
];
/* END_OF_SYMBOL_DEFINITION PerRecipientMessageTransferExtensions */

/* eslint-enable */
