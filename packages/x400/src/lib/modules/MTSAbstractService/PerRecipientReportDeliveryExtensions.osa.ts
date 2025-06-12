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
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.js';
export { redirection_history } from '../MTSAbstractService/redirection-history.oa.js';
import { physical_forwarding_address } from '../MTSAbstractService/physical-forwarding-address.oa.js';
export { physical_forwarding_address } from '../MTSAbstractService/physical-forwarding-address.oa.js';
import { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.js';
export { recipient_certificate } from '../MTSAbstractService/recipient-certificate.oa.js';
import { proof_of_delivery } from '../MTSAbstractService/proof-of-delivery.oa.js';
export { proof_of_delivery } from '../MTSAbstractService/proof-of-delivery.oa.js';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';
export { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.js';

/* START_OF_SYMBOL_DEFINITION PerRecipientReportDeliveryExtensions */
/**
 * @summary PerRecipientReportDeliveryExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientReportDeliveryExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    redirection-history | physical-forwarding-address | recipient-certificate |
 *    proof-of-delivery | PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const PerRecipientReportDeliveryExtensions: EXTENSION[] = [
    redirection_history,
    physical_forwarding_address,
    recipient_certificate,
    proof_of_delivery,
    ...PrivateExtensions,
];
/* END_OF_SYMBOL_DEFINITION PerRecipientReportDeliveryExtensions */

/* eslint-enable */
