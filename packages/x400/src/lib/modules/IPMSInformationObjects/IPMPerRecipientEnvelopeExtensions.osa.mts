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
import { blind_copy_recipients } from '../IPMSInformationObjects/blind-copy-recipients.oa.mjs';
import { body_part_encryption_token } from '../IPMSSecurityExtensions/body-part-encryption-token.oa.mjs';
import { forwarded_content_token } from '../IPMSSecurityExtensions/forwarded-content-token.oa.mjs';
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
