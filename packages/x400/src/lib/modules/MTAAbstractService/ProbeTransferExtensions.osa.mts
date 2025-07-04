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
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { recipient_reassignment_prohibited } from '../MTSAbstractService/recipient-reassignment-prohibited.oa.mjs';
import { dl_expansion_prohibited } from '../MTSAbstractService/dl-expansion-prohibited.oa.mjs';
import { conversion_with_loss_prohibited } from '../MTSAbstractService/conversion-with-loss-prohibited.oa.mjs';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa.mjs';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa.mjs';
import { content_correlator } from '../MTSAbstractService/content-correlator.oa.mjs';
import { probe_origin_authentication_check } from '../MTSAbstractService/probe-origin-authentication-check.oa.mjs';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/**
 * @summary ProbeTransferExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeTransferExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    recipient-reassignment-prohibited | dl-expansion-prohibited |
 *    conversion-with-loss-prohibited | originator-certificate |
 *    message-security-label | content-correlator |
 *    probe-origin-authentication-check | internal-trace-information |
 *    PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const ProbeTransferExtensions: EXTENSION[] = [
    recipient_reassignment_prohibited,
    dl_expansion_prohibited,
    conversion_with_loss_prohibited,
    originator_certificate,
    message_security_label,
    content_correlator,
    probe_origin_authentication_check,
    internal_trace_information,
    ...PrivateExtensions,
];

/* eslint-enable */
