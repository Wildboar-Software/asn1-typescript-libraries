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
import { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.js';
export { physical_delivery_report_request } from '../MTSAbstractService/physical-delivery-report-request.oa.js';
import { message_token } from '../MTSAbstractService/message-token.oa.js';
export { message_token } from '../MTSAbstractService/message-token.oa.js';
import { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.js';
export { content_integrity_check } from '../MTSAbstractService/content-integrity-check.oa.js';
import { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.js';
export { proof_of_delivery_request } from '../MTSAbstractService/proof-of-delivery-request.oa.js';
import { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.js';
export { certificate_selectors_override } from '../MTSAbstractService/certificate-selectors-override.oa.js';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.js';
export { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.js';
import { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.js';
export { IPMPerRecipientEnvelopeExtensions } from '../IPMSInformationObjects/IPMPerRecipientEnvelopeExtensions.osa.js';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';
import { originator_requested_alternate_recipient } from "../MTSAbstractService/originator-requested-alternate-recipient.oa.js";
import { physical_forwarding_prohibited } from "../MTSAbstractService/physical-forwarding-prohibited.oa.js";

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
