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
import { blind_copy_recipients } from '../IPMSInformationObjects/blind-copy-recipients.oa';
export { blind_copy_recipients } from '../IPMSInformationObjects/blind-copy-recipients.oa';
import { body_part_encryption_token } from '../IPMSSecurityExtensions/body-part-encryption-token.oa';
export { body_part_encryption_token } from '../IPMSSecurityExtensions/body-part-encryption-token.oa';
import { forwarded_content_token } from '../IPMSSecurityExtensions/forwarded-content-token.oa';
export { forwarded_content_token } from '../IPMSSecurityExtensions/forwarded-content-token.oa';

/* START_OF_SYMBOL_DEFINITION IPMPerRecipientEnvelopeExtensions */
/**
 * @summary IPMPerRecipientEnvelopeExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMPerRecipientEnvelopeExtensions EXTENSION ::= {blind-copy-recipients | body-part-encryption-token |
 *    forwarded-content-token, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const IPMPerRecipientEnvelopeExtensions: EXTENSION[] = [
    blind_copy_recipients,
    body_part_encryption_token,
    forwarded_content_token,
];
/* END_OF_SYMBOL_DEFINITION IPMPerRecipientEnvelopeExtensions */

/* eslint-enable */
