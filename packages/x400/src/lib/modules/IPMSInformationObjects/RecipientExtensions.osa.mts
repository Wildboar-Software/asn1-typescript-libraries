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
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
export { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
import { circulation_list_indicator } from '../IPMSHeadingExtensions/circulation-list-indicator.oa.mjs';
export { circulation_list_indicator } from '../IPMSHeadingExtensions/circulation-list-indicator.oa.mjs';
import { precedence } from '../IPMSHeadingExtensions/precedence.oa.mjs';
export { precedence } from '../IPMSHeadingExtensions/precedence.oa.mjs';
import { recipient_security_request } from '../IPMSSecurityExtensions/recipient-security-request.oa.mjs';
export { recipient_security_request } from '../IPMSSecurityExtensions/recipient-security-request.oa.mjs';
import { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';
export { PrivateIPMSExtensions } from '../IPMSInformationObjects/PrivateIPMSExtensions.osa.mjs';

/* START_OF_SYMBOL_DEFINITION RecipientExtensions */
/**
 * @summary RecipientExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientExtensions IPMS-EXTENSION ::= {circulation-list-indicator | precedence | recipient-security-request |
 *    PrivateIPMSExtensions, ...}
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION[]}
 *
 */
export const RecipientExtensions: IPMS_EXTENSION[] = [
    circulation_list_indicator,
    precedence,
    recipient_security_request,
    ...PrivateIPMSExtensions,
];
/* END_OF_SYMBOL_DEFINITION RecipientExtensions */

/* eslint-enable */
