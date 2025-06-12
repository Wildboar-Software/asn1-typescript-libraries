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
import { recipient_reassignment_prohibited } from '../MTSAbstractService/recipient-reassignment-prohibited.oa.js';
export { recipient_reassignment_prohibited } from '../MTSAbstractService/recipient-reassignment-prohibited.oa.js';
import { dl_expansion_prohibited } from '../MTSAbstractService/dl-expansion-prohibited.oa.js';
export { dl_expansion_prohibited } from '../MTSAbstractService/dl-expansion-prohibited.oa.js';
import { conversion_with_loss_prohibited } from '../MTSAbstractService/conversion-with-loss-prohibited.oa.js';
export { conversion_with_loss_prohibited } from '../MTSAbstractService/conversion-with-loss-prohibited.oa.js';
import { latest_delivery_time } from '../MTSAbstractService/latest-delivery-time.oa.js';
export { latest_delivery_time } from '../MTSAbstractService/latest-delivery-time.oa.js';
import { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.js';
export { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.js';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.js';
export { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.js';
import { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.js';
export { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.js';
import { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.js';
export { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.js';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.js';
export { message_security_label } from '../MTSAbstractService/message-security-label.oa.js';
import { content_correlator } from '../MTSAbstractService/content-correlator.oa.js';
export { content_correlator } from '../MTSAbstractService/content-correlator.oa.js';
import { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.js';
export { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.js';
import { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.js';
export { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.js';
import { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.js';
export { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.js';
import { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.js';
export { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.js';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.js';
export { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.js';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';

/* START_OF_SYMBOL_DEFINITION MessageTransferExtensions */
/**
 * @summary MessageTransferExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageTransferExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    recipient-reassignment-prohibited | dl-expansion-prohibited |
 *    conversion-with-loss-prohibited | latest-delivery-time |
 *    originator-return-address | originator-certificate |
 *    content-confidentiality-algorithm-identifier |
 *    message-origin-authentication-check | message-security-label |
 *    content-correlator | dl-exempted-recipients | certificate-selectors |
 *    multiple-originator-certificates | dl-expansion-history |
 *    internal-trace-information | PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const MessageTransferExtensions: EXTENSION[] = [
    recipient_reassignment_prohibited,
    dl_expansion_prohibited,
    conversion_with_loss_prohibited,
    latest_delivery_time,
    originator_return_address,
    originator_certificate,
    content_confidentiality_algorithm_identifier,
    message_origin_authentication_check,
    message_security_label,
    content_correlator,
    dl_exempted_recipients,
    certificate_selectors,
    multiple_originator_certificates,
    dl_expansion_history,
    internal_trace_information,
    ...PrivateExtensions,
];
/* END_OF_SYMBOL_DEFINITION MessageTransferExtensions */

/* eslint-enable */
