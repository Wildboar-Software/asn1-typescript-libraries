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
import { recipient_reassignment_prohibited } from '../MTSAbstractService/recipient-reassignment-prohibited.oa';
export { recipient_reassignment_prohibited } from '../MTSAbstractService/recipient-reassignment-prohibited.oa';
import { dl_expansion_prohibited } from '../MTSAbstractService/dl-expansion-prohibited.oa';
export { dl_expansion_prohibited } from '../MTSAbstractService/dl-expansion-prohibited.oa';
import { conversion_with_loss_prohibited } from '../MTSAbstractService/conversion-with-loss-prohibited.oa';
export { conversion_with_loss_prohibited } from '../MTSAbstractService/conversion-with-loss-prohibited.oa';
import { originator_certificate } from '../MTSAbstractService/originator-certificate.oa';
export { originator_certificate } from '../MTSAbstractService/originator-certificate.oa';
import { message_security_label } from '../MTSAbstractService/message-security-label.oa';
export { message_security_label } from '../MTSAbstractService/message-security-label.oa';
import { content_correlator } from '../MTSAbstractService/content-correlator.oa';
export { content_correlator } from '../MTSAbstractService/content-correlator.oa';
import { probe_origin_authentication_check } from '../MTSAbstractService/probe-origin-authentication-check.oa';
export { probe_origin_authentication_check } from '../MTSAbstractService/probe-origin-authentication-check.oa';
import { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa';
export { internal_trace_information } from '../MTAAbstractService/internal-trace-information.oa';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa';

/* START_OF_SYMBOL_DEFINITION ProbeTransferExtensions */
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
/* END_OF_SYMBOL_DEFINITION ProbeTransferExtensions */

/* eslint-enable */
