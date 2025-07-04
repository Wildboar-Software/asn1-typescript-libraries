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
import { originator_requested_alternate_recipient } from '../MTAAbstractService/originator-requested-alternate-recipient.oa.mjs';
import { requested_delivery_method } from '../MTSAbstractService/requested-delivery-method.oa.mjs';
import { physical_rendition_attributes } from '../MTSAbstractService/physical-rendition-attributes.oa.mjs';
import { redirection_history } from '../MTSAbstractService/redirection-history.oa.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/**
 * @summary PerRecipientProbeTransferExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientProbeTransferExtensions EXTENSION ::= {-- May contain the following extensions, private extensions, and future standardised extensions,
 *    -- at most one instance of each extension type:
 *    originator-requested-alternate-recipient | requested-delivery-method |
 *    physical-rendition-attributes | redirection-history | PrivateExtensions,
 *    ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const PerRecipientProbeTransferExtensions: EXTENSION[] = [
    originator_requested_alternate_recipient,
    requested_delivery_method,
    physical_rendition_attributes,
    redirection_history,
    ...PrivateExtensions,
];

/* eslint-enable */
