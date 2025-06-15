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
import { recipient_reassignment_prohibited } from '../MTSAbstractService/recipient-reassignment-prohibited.oa.mjs';
import { dl_expansion_prohibited } from '../MTSAbstractService/dl-expansion-prohibited.oa.mjs';
import { conversion_with_loss_prohibited } from '../MTSAbstractService/conversion-with-loss-prohibited.oa.mjs';
import { latest_delivery_time } from '../MTSAbstractService/latest-delivery-time.oa.mjs';
import { originator_return_address } from '../MTSAbstractService/originator-return-address.oa.mjs';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.mjs';
import { content_confidentiality_algorithm_identifier } from '../MTSAbstractService/content-confidentiality-algorithm-identifier.oa.mjs';
import { message_origin_authentication_check } from '../MTSAbstractService/message-origin-authentication-check.oa.mjs';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
import { content_correlator } from '../MTSAbstractService/content-correlator.oa.mjs';
import { dl_exempted_recipients } from '../MTSAbstractService/dl-exempted-recipients.oa.mjs';
import { certificate_selectors } from '../MTSAbstractService/certificate-selectors.oa.mjs';
import { multiple_originator_certificates } from '../MTSAbstractService/multiple-originator-certificates.oa.mjs';
import { dl_expansion_history } from '../MTSAbstractService/dl-expansion-history.oa.mjs';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
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

/* eslint-enable */
